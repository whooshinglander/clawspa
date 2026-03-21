# ClawSpa 🧖

**A spa day for your OpenClaw agent — memory cleanup, security scanning, and wellness diagnostics.**

## The Problem

Your agent accumulates cruft. Stale memories, bloated context, unused skills, maybe even malicious remnants from that skill you installed three weeks ago. The ClawHavoc attack showed ~20% of ClawHub skills contained malicious payloads. Most users never maintain their agents until something breaks.

## The Solution

ClawSpa provides 5 maintenance treatments with both free local scans and deep API-powered analysis.

### Treatments

| | Treatment | What it does |
|---|---|---|
| 🧴 | **Deep Cleanse** | Memory optimization: find duplicates, stale entries, contradictions |
| 🛡️ | **Security Scan** | Audit installed skills for malicious patterns and data exfiltration |
| 🍵 | **Detox** | Detect prompt injection residue lurking in your memory files |
| 🧹 | **Declutter** | Skills inventory, usage audit, pruning recommendations |
| 💆 | **Health Check** | Context usage, config review, overall wellness score |

### Commands

```
/spa           Full suite, local mode (free)
/spa-full      Full suite, deep mode (API-powered)
/spa-quick     Quick health stats (~30 seconds)
/spa-memory    Deep Cleanse only
/spa-security  Security Scan only
/spa-health    Health Check + report
```

### Example Health Report

```
═══════════════════════════════════════
 🧖 ClawSpa Health Report | 2026-03-22 | Local
═══════════════════════════════════════
📊 Memory: 14 files ~8200 tokens | Skills: 12 | Context: 34% | Config: 4/5
🧴 Stale: 6 | Dupes: 2 | Contradictions: 1 | Savings: ~2100 tokens
🛡️ 🟢10 🟡1 🔴1
🍵 Injections: 0 | Suspicious: 1
🧹 Active: 8 | Idle: 3 | Dormant: 1 | Remove: 1
💆 1. Review 🔴 skill "crypto-helper" 2. Clean 6 stale entries 3. Enable memory flush
═══════════════════════════════════════
```

## Pricing

**Local scans are always free and unlimited.** Run `/spa` as often as you want.

Deep scans at [clawspa.org](https://clawspa.org) provide AI-powered analysis with prioritized recommendations, risk scoring, and trend tracking.

- **Free trial**: 1 deep scan on install
- **Solo ($5/mo)**: Unlimited deep scans, 1 agent, scan history
- **Pro ($12/mo)**: Up to 5 agents, web dashboard, weekly reports
- **Team ($25/mo)**: Unlimited agents, priority scanning, alerts

## Privacy

**Local mode never sends data anywhere.** Everything runs on your machine.

**Deep mode sends only aggregated stats and pattern flags.** Never your raw memory content, credentials, or conversation history. See [What We Send](https://clawspa.org/docs#what-we-send) for the exact payload format.

## Install

```
clawhub install clawspa
```

## Links

- Website: [clawspa.org](https://clawspa.org)
- Docs: [clawspa.org/docs](https://clawspa.org/docs)
- Issues: [github.com/whooshinglander/clawspa](https://github.com/whooshinglander/clawspa)

Built by [@whooshinglander](https://clawhub.com/whooshinglander)
