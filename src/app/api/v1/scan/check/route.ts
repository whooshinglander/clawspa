import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { clawspa_id } = await req.json();

    if (!clawspa_id) {
      return NextResponse.json({ error: "clawspa_id is required" }, { status: 400 });
    }

    const { data: trial } = await supabase
      .from("clawspa_trials")
      .select("clawspa_id, created_at")
      .eq("clawspa_id", clawspa_id)
      .single();

    if (trial) {
      return NextResponse.json({
        trial_available: false,
        upgrade_url: "/pricing",
        message: "Trial scan already used. Upgrade for unlimited deep scans.",
      });
    }

    return NextResponse.json({
      trial_available: true,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
