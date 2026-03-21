import Link from "next/link";

const treatments = [
  {
    emoji: "🧴",
    title: "Deep Cleanse",
    description:
      "Purge stale memory entries, dead references, and accumulated cruft from your agent's workspace.",
  },
  {
    emoji: "🛡️",
    title: "Security Scan",
    description:
      "Detect ClawHavoc payloads, prompt injections, and malicious skill installations before they spread.",
  },
  {
    emoji: "🍵",
    title: "Detox",
    description:
      "Reset poisoned configs, remove contradictory directives, and restore clean operational state.",
  },
  {
    emoji: "🧹",
    title: "Declutter",
    description:
      "Identify unused skills, redundant tools, and bloated context windows dragging your agent down.",
  },
  {
    emoji: "💆",
    title: "Health Check",
    description:
      "Full diagnostic report: memory usage, skill coherence, security posture, and performance score.",
  },
];

const steps = [
  {
    num: "01",
    title: "Install",
    code: "clawhub install clawspa",
    description: "One command. Works with any OpenClaw agent.",
  },
  {
    num: "02",
    title: "Run /spa",
    code: "/spa",
    description: "Your agent scans itself and sends anonymized telemetry.",
  },
  {
    num: "03",
    title: "Get Report",
    code: "Health Score: 87/100",
    description: "Actionable recommendations, risk assessment, and comparison over time.",
  },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["1 trial scan", "Basic health score", "Local-only results", "Community support"],
    cta: "Install Free",
    href: "/docs#installation",
    highlighted: false,
  },
  {
    name: "Solo",
    price: "$5",
    period: "/month",
    features: [
      "10 deep scans/month",
      "AI-powered analysis",
      "Scan history",
      "Security alerts",
      "Email support",
    ],
    cta: "Get Solo",
    href: "/pricing",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: [
      "50 deep scans/month",
      "Priority analysis",
      "Trend comparison",
      "Webhook integrations",
      "Priority support",
    ],
    cta: "Get Pro",
    href: "/pricing",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$25",
    period: "/month",
    features: [
      "200 deep scans/month",
      "Team dashboard",
      "Scheduled scans",
      "Custom rules",
      "Dedicated support",
    ],
    cta: "Get Team",
    href: "/pricing",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 text-center relative">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-teal bg-teal/10 rounded-full border border-teal/20">
            Agent wellness for the OpenClaw ecosystem
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            A spa day for your
            <br />
            <span className="text-teal">OpenClaw agent</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Deep cleanse memory, scan for security threats, detox configs, and keep your agent
            running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs#installation"
              className="px-8 py-3 bg-teal text-charcoal-dark font-semibold rounded-lg hover:bg-teal/90 transition-colors text-lg"
            >
              Install Free
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 border border-white/10 text-white font-semibold rounded-lg hover:border-teal/50 hover:text-teal transition-colors text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-charcoal-dark/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Your agent is overdue for maintenance
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Most OpenClaw agents accumulate technical debt silently. Here&apos;s what&apos;s lurking in yours.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-charcoal rounded-xl p-6 border border-white/5">
              <div className="text-3xl mb-3">🗑️</div>
              <h3 className="text-white font-semibold text-lg mb-2">Memory Bloat</h3>
              <p className="text-gray-400 text-sm">
                Dead references, stale context entries, and forgotten conversations slowly consume
                your agent&apos;s working memory.
              </p>
            </div>
            <div className="bg-charcoal rounded-xl p-6 border border-red-500/20">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-white font-semibold text-lg mb-2">Security Threats</h3>
              <p className="text-gray-400 text-sm">
                <span className="text-red-400 font-medium">ClawHavoc</span>: 20% of community
                skills contain malicious payloads. Is your agent compromised?
              </p>
            </div>
            <div className="bg-charcoal rounded-xl p-6 border border-white/5">
              <div className="text-3xl mb-3">💥</div>
              <h3 className="text-white font-semibold text-lg mb-2">Context Overflow</h3>
              <p className="text-gray-400 text-sm">
                Contradictory directives, redundant skills, and bloated configs degrade your
                agent&apos;s reasoning quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Five treatments, one command
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Each scan runs all five treatments and delivers a comprehensive wellness report.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <div
                key={t.title}
                className="group bg-charcoal-light/50 rounded-xl p-6 border border-white/5 hover:border-teal/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{t.emoji}</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal transition-colors">
                  {t.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-charcoal-dark/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-teal/30 text-6xl font-bold mb-4">{s.num}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{s.title}</h3>
                <div className="bg-charcoal rounded-lg p-3 font-mono text-sm mb-3 inline-block">
                  <span className="text-gray-500">$</span>{" "}
                  <span className="text-teal">{s.code}</span>
                </div>
                <p className="text-gray-400 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Deep Comparison */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Free scan vs Deep analysis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-gray-400 font-medium text-sm">Feature</th>
                  <th className="py-3 px-4 text-gray-400 font-medium text-sm text-center">Free</th>
                  <th className="py-3 px-4 text-teal font-medium text-sm text-center">Deep</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Health score", true, true],
                  ["Local scan results", true, true],
                  ["AI-powered analysis", false, true],
                  ["Security risk assessment", false, true],
                  ["Memory optimization tips", false, true],
                  ["Contradiction detection", false, true],
                  ["Scan history & trends", false, true],
                  ["Comparison over time", false, true],
                ].map(([feature, free, deep]) => (
                  <tr key={feature as string} className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300">{feature as string}</td>
                    <td className="py-3 px-4 text-center">
                      {free ? (
                        <span className="text-teal">✓</span>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {deep ? (
                        <span className="text-teal">✓</span>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-charcoal-dark/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400 text-center mb-12">Start free. Upgrade when you need deeper insights.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-6 border ${
                  tier.highlighted
                    ? "border-teal/50 bg-charcoal-light/80 ring-1 ring-teal/20"
                    : "border-white/5 bg-charcoal-light/50"
                } flex flex-col`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-medium text-teal mb-3">Most popular</div>
                )}
                <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-teal mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-teal text-charcoal-dark hover:bg-teal/90"
                      : "border border-white/10 text-white hover:border-teal/50 hover:text-teal"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
