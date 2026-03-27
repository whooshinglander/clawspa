# CLAUDE.md — clawspa

## What this is
OpenClaw agent diagnostic tool. Users connect their OpenClaw instance, Helios runs an AI-powered deep scan of their agent setup and returns a report. Paid product (Stripe).

## Stack
Next.js 14 App Router (src/app/), TypeScript, Tailwind CSS, Supabase, Stripe, Anthropic API, Vercel.

## Critical rules
- **Auth:** Supabase auth. Protected routes use middleware. Never expose auth bypass.
- **Supabase:** shared project `kndvnohhkyadlfpgkpzj`. Tables prefixed `clawspa_`. RLS policies are live — do not disable or work around them.
- **Stripe:** live mode. Webhook endpoint live. Never hardcode Stripe keys — they live in Vercel env vars.
- **Anthropic API:** used for deep scan analysis. Key in Vercel env vars (`ANTHROPIC_API_KEY`). ~$0.01/scan.
- **Machine fingerprint auth:** SHA-256 hash of hostname + workspace_path. Do not change the fingerprint algorithm.
- **Never log PII** — user workspace data, API keys, or scan results must never appear in console.log or server logs.
- **No API key references in docs** — already removed in v1.1.1. Do not re-add.

## Known gotchas
- Supabase tables are shared with asktaxes + askvisa — use `clawspa_` prefix on all table names.
- Stripe webhook must verify signature — do not simplify or remove signature verification.
- Deep scan runs via Anthropic API — responses can be slow (10-30s). Streaming is used. Do not change to non-streaming.

## Security checklist (run before every prod deploy)
- No hardcoded secrets
- Auth middleware on all protected routes
- No PII in console.log
- Supabase RLS referenced correctly
- Stripe webhook signature verified

## Deploy
`VERCEL_TOKEN=$(security find-generic-password -a helios -s vercel_token -w) vercel --yes --prod`
