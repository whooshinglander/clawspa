import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabase";
import { runDeepAnalysis } from "@/lib/analysis";
import { hashApiKey } from "@/lib/utils";
import { PLAN_LIMITS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Missing or invalid authorization header" }, { status: 401 });
    }

    const apiKey = authHeader.slice(7);
    const keyHash = hashApiKey(apiKey);

    // Validate API key
    const { data: keyRecord, error: keyError } = await supabase
      .from("clawspa_api_keys")
      .select("id, user_id, plan, scans_this_month")
      .eq("key_hash", keyHash)
      .single();

    if (keyError || !keyRecord) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    // Check plan limits
    const limit = PLAN_LIMITS[keyRecord.plan] || 0;
    if (keyRecord.scans_this_month >= limit) {
      return NextResponse.json(
        {
          error: "Monthly scan limit reached",
          limit,
          used: keyRecord.scans_this_month,
          upgrade_url: "/pricing",
        },
        { status: 429 }
      );
    }

    const payload = await req.json();
    const clawspaId = `cs_${uuidv4().replace(/-/g, "")}`;

    // Get previous scan for comparison
    const { data: previousScan } = await supabase
      .from("clawspa_scans")
      .select("analysis_result")
      .eq("user_id", keyRecord.user_id)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    const analysis = await runDeepAnalysis(payload, previousScan?.analysis_result);

    // Store scan
    await supabase.from("clawspa_scans").insert({
      user_id: keyRecord.user_id,
      clawspa_id: clawspaId,
      scan_data: payload,
      analysis_result: analysis,
    });

    // Increment scan count
    await supabase
      .from("clawspa_api_keys")
      .update({ scans_this_month: keyRecord.scans_this_month + 1 })
      .eq("id", keyRecord.id);

    return NextResponse.json({
      clawspa_id: clawspaId,
      analysis,
      scans_remaining: limit - keyRecord.scans_this_month - 1,
      comparison: previousScan?.analysis_result
        ? {
            previous_score: previousScan.analysis_result.health_score,
            current_score: analysis.health_score,
            trend:
              analysis.health_score > previousScan.analysis_result.health_score
                ? "improving"
                : analysis.health_score < previousScan.analysis_result.health_score
                  ? "declining"
                  : "stable",
          }
        : null,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
