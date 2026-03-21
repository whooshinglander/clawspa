import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabase";
import { runDeepAnalysis } from "@/lib/analysis";
import { hashIp } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const fingerprint = payload.machine_fingerprint;
    if (!fingerprint) {
      return NextResponse.json({ error: "machine_fingerprint is required" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const ipHash = hashIp(ip);

    // Check if trial already used for this machine
    const { data: existing } = await supabase
      .from("clawspa_trials")
      .select("clawspa_id")
      .eq("workspace_hash", fingerprint)
      .single();

    if (existing) {
      return NextResponse.json(
        {
          error: "Trial already used for this workspace",
          clawspa_id: existing.clawspa_id,
          trial_remaining: 0,
          upgrade_url: "/pricing",
        },
        { status: 429 }
      );
    }

    const clawspaId = `cs_${uuidv4().replace(/-/g, "")}`;
    const analysis = await runDeepAnalysis(payload);

    const { error: insertError } = await supabase.from("clawspa_trials").insert({
      clawspa_id: clawspaId,
      workspace_hash: fingerprint,
      ip_hash: ipHash,
      scan_data: payload,
      analysis_result: analysis,
    });

    if (insertError) {
      return NextResponse.json({ error: "Failed to store trial scan" }, { status: 500 });
    }

    return NextResponse.json({
      clawspa_id: clawspaId,
      analysis,
      trial_remaining: 0,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
