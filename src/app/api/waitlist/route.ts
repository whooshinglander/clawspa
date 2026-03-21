import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const { error } = await supabase.from("clawspa_waitlist").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "Already on the waitlist!" });
      }
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
    }

    return NextResponse.json({ message: "Successfully joined the waitlist!" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
