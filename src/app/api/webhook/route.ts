import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const plan = session.metadata?.plan || "solo";
    const customerId = session.customer as string;
    const machineFingerprint = session.metadata?.machine_fingerprint || "";

    if (!email) {
      return NextResponse.json({ error: "No email in session" }, { status: 400 });
    }

    // Create or update user
    const { data: user, error: userError } = await supabase
      .from("clawspa_users")
      .upsert(
        { email, plan, stripe_customer_id: customerId },
        { onConflict: "email" }
      )
      .select("id")
      .single();

    if (userError || !user) {
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }

    // Register machine fingerprint (no API key needed)
    if (machineFingerprint) {
      await supabase.from("clawspa_api_keys").upsert(
        {
          key_hash: machineFingerprint,
          machine_fingerprint: machineFingerprint,
          user_id: user.id,
          plan,
        },
        { onConflict: "key_hash" }
      );
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;
    const customerId = subscription.customer as string;

    const { data: user } = await supabase
      .from("clawspa_users")
      .select("id")
      .eq("stripe_customer_id", customerId)
      .single();

    if (user) {
      await supabase
        .from("clawspa_api_keys")
        .delete()
        .eq("user_id", user.id);

      await supabase
        .from("clawspa_users")
        .update({ plan: "free" })
        .eq("id", user.id);
    }
  }

  return NextResponse.json({ received: true });
}
