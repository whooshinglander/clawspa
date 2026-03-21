import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const PRICE_IDS: Record<string, string | undefined> = {
  solo: process.env.STRIPE_PRICE_SOLO,
  pro: process.env.STRIPE_PRICE_PRO,
  team: process.env.STRIPE_PRICE_TEAM,
};

export async function POST(req: NextRequest) {
  try {
    const { plan, email, machine_fingerprint } = await req.json();

    if (!plan || !email) {
      return NextResponse.json({ error: "plan and email are required" }, { status: 400 });
    }

    const priceId = PRICE_IDS[plan];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { plan, machine_fingerprint: machine_fingerprint || "" },
      success_url: `${req.nextUrl.origin}/dashboard?checkout=success`,
      cancel_url: `${req.nextUrl.origin}/pricing?checkout=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
