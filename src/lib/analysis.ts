import Anthropic from "@anthropic-ai/sdk";

let _anthropic: Anthropic | null = null;
function getAnthropic() {
  if (!_anthropic) {
    _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _anthropic;
}

interface ScanPayload {
  workspace_hash: string;
  memory_stats: Record<string, unknown>;
  skills_list: string[];
  security_flags: Record<string, unknown>;
  config_checks: Record<string, unknown>;
  detox_flags: Record<string, unknown>;
  declutter_stats: Record<string, unknown>;
}

interface AnalysisResult {
  health_score: number;
  recommendations: { priority: string; title: string; description: string }[];
  risk_assessment: { level: string; summary: string; details: string[] };
  memory_optimization: { current_usage: string; suggestions: string[] };
  contradiction_detection: { found: boolean; details: string[] };
}

const FALLBACK_ANALYSIS: AnalysisResult = {
  health_score: 50,
  recommendations: [
    {
      priority: "medium",
      title: "Analysis Unavailable",
      description:
        "Deep analysis could not be completed. Your local scan results are still valid. Try again later for AI-powered insights.",
    },
  ],
  risk_assessment: {
    level: "unknown",
    summary: "Could not perform deep risk assessment",
    details: ["Re-run the scan to get a full risk analysis"],
  },
  memory_optimization: {
    current_usage: "unknown",
    suggestions: ["Run scan again for memory optimization tips"],
  },
  contradiction_detection: {
    found: false,
    details: [],
  },
};

export async function runDeepAnalysis(
  payload: ScanPayload,
  previousAnalysis?: AnalysisResult | null
): Promise<AnalysisResult> {
  try {
    const comparisonNote = previousAnalysis
      ? `\n\nPrevious scan health score was ${previousAnalysis.health_score}. Compare and note improvements or regressions.`
      : "";

    const message = await getAnthropic().messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: `You are ClawSpa's deep analysis engine. Analyze this OpenClaw agent workspace scan and return a JSON assessment.

Scan data:
${JSON.stringify(payload, null, 2)}
${comparisonNote}

Return ONLY valid JSON with this exact structure:
{
  "health_score": <0-100 integer>,
  "recommendations": [{"priority": "high|medium|low", "title": "<short title>", "description": "<actionable advice>"}],
  "risk_assessment": {"level": "critical|high|medium|low", "summary": "<one line>", "details": ["<specific risks>"]},
  "memory_optimization": {"current_usage": "<summary>", "suggestions": ["<specific suggestions>"]},
  "contradiction_detection": {"found": <boolean>, "details": ["<contradictions found in config/skills>"]}
}

Be specific, actionable, and concise. Focus on security risks, memory bloat, and skill contradictions.`,
        },
      ],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return FALLBACK_ANALYSIS;

    return JSON.parse(jsonMatch[0]) as AnalysisResult;
  } catch {
    return FALLBACK_ANALYSIS;
  }
}
