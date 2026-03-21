import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { hashApiKey } from "@/lib/utils";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Missing or invalid authorization header" }, { status: 401 });
    }

    const apiKey = authHeader.slice(7);
    const keyHash = hashApiKey(apiKey);

    const { data: keyRecord, error: keyError } = await supabase
      .from("clawspa_api_keys")
      .select("user_id")
      .eq("key_hash", keyHash)
      .single();

    if (keyError || !keyRecord) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "10", 10)));
    const offset = (page - 1) * limit;

    const { data: scans, error: scansError } = await supabase
      .from("clawspa_scans")
      .select("id, clawspa_id, analysis_result, created_at")
      .eq("user_id", keyRecord.user_id)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (scansError) {
      return NextResponse.json({ error: "Failed to fetch scans" }, { status: 500 });
    }

    const { count } = await supabase
      .from("clawspa_scans")
      .select("id", { count: "exact", head: true })
      .eq("user_id", keyRecord.user_id);

    return NextResponse.json({
      scans: scans || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        total_pages: Math.ceil((count || 0) / limit),
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
