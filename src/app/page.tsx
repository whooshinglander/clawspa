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
    emoji: "🦴",
    title: "Alignment Adjustment",
    description:
      "Find contradictions between your instructions, memory, and actual behavior. Catch at-risk rules that won't survive compaction.",
  },
  {
    emoji: "🧹",
    title: "Declutter",
    description:
      "Identify unused skills, redundant tools, and bloated context windows dragging your agent down.",
  },
  {
    emoji: "🩺",
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
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Full-bleed background photo */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat sm:bg-center"
          style={{ backgroundImage: "url('/hero-spa.jpg')", backgroundPosition: "70% center" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom gradient blend into page */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-24 text-center relative w-full">
          <div className="fade-in-up inline-block px-4 py-1.5 mb-8 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            Agent wellness for the OpenClaw ecosystem
          </div>
          <h1 className="fade-in-up fade-in-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 text-balance">
            A spa day for your
            <br />
            <span className="text-accent">OpenClaw agent</span>
          </h1>
          <p className="fade-in-up fade-in-up-delay-2 text-white/75 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Deep cleanse memory, scan for security threats, detox configs, and keep your agent
            running at peak performance.
          </p>
          <div className="fade-in-up fade-in-up-delay-3 flex justify-center">
            <Link
              href="/docs#installation"
              className="focus-ring px-8 py-3.5 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300 ease-out text-lg hover:shadow-lg hover:shadow-accent/20"
            >
              Install Free
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-[#151510] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-display font-semibold text-text-primary text-center mb-5">
            Your agent is overdue for maintenance
          </h2>
          <p className="fade-in-up fade-in-up-delay-1 text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Most OpenClaw agents accumulate technical debt silently. Here&apos;s what&apos;s lurking in yours.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="fade-in-up fade-in-up-delay-2 group bg-bg-card rounded-xl p-8 border border-border/50 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Memory Bloat</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Dead references, stale context entries, and forgotten conversations slowly consume
                your agent&apos;s working memory.
              </p>
            </div>
            <div className="fade-in-up fade-in-up-delay-3 group bg-bg-card rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 ease-out hover:-translate-y-0.5">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-red-400 transition-colors duration-300">Security Threats</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-red-400 font-medium">ClawHavoc</span>: 20% of community
                skills contain malicious payloads. Is your agent compromised?
              </p>
            </div>
            <div className="fade-in-up fade-in-up-delay-4 group bg-bg-card rounded-xl p-8 border border-border/50 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5">
              <div className="text-4xl mb-4">💥</div>
              <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">Context Overflow</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contradictory directives, redundant skills, and bloated configs degrade your
                agent&apos;s reasoning quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-display font-semibold text-text-primary text-center mb-5">
            Six treatments, one command
          </h2>
          <p className="fade-in-up fade-in-up-delay-1 text-text-secondary text-center max-w-xl mx-auto mb-16">
            Each scan runs all six treatments and delivers a comprehensive wellness report.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div
                key={t.title}
                className={`fade-in-up fade-in-up-delay-${Math.min(i + 2, 6)} group bg-bg-card rounded-xl p-8 border border-border/50 hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5`}
              >
                <div className="text-5xl mb-5">{t.emoji}</div>
                <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                  {t.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#151510] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-display font-semibold text-text-primary text-center mb-16">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className={`fade-in-up fade-in-up-delay-${i + 1} text-center`}>
                <div className="text-accent/30 text-6xl font-bold mb-4">{s.num}</div>
                <h3 className="text-text-primary font-semibold text-xl mb-3">{s.title}</h3>
                <div className="bg-bg-card rounded-lg p-3 font-mono text-sm mb-3 inline-block border border-border/50">
                  <span className="text-text-muted">$</span>{" "}
                  <span className="text-accent">{s.code}</span>
                </div>
                <p className="text-text-secondary text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Deep Comparison */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-display font-semibold text-text-primary text-center mb-16">
            Free scan vs Deep analysis
          </h2>
          <div className="fade-in-up fade-in-up-delay-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-3 px-4 text-text-secondary font-medium text-sm">Feature</th>
                  <th className="py-3 px-4 text-text-secondary font-medium text-sm text-center">Free</th>
                  <th className="py-3 px-4 text-accent font-medium text-sm text-center">Deep</th>
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
                  ["Alignment adjustment", false, true],
                  ["Scan history & trends", false, true],
                  ["Comparison over time", false, true],
                ].map(([feature, free, deep]) => (
                  <tr key={feature as string} className="border-b border-border/30">
                    <td className="py-3 px-4 text-text-primary">{feature as string}</td>
                    <td className="py-3 px-4 text-center">
                      {free ? (
                        <span className="text-accent">✓</span>
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {deep ? (
                        <span className="text-accent">✓</span>
                      ) : (
                        <span className="text-text-muted">—</span>
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
      <section className="bg-[#151510] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-display font-semibold text-text-primary text-center mb-5">
            Simple, transparent pricing
          </h2>
          <p className="fade-in-up fade-in-up-delay-1 text-text-secondary text-center mb-16">Start free. Upgrade when you need deeper insights.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`fade-in-up fade-in-up-delay-${Math.min(i + 2, 6)} group rounded-xl p-8 border ${
                  tier.highlighted
                    ? "border-accent/50 bg-bg-card ring-1 ring-accent/20"
                    : "border-border/50 bg-bg-card"
                } flex flex-col hover:border-accent/40 transition-all duration-300 ease-out hover:-translate-y-0.5`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-medium text-accent mb-3">Most popular</div>
                )}
                <h3 className="text-text-primary font-bold text-xl mb-1">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-text-primary">{tier.price}</span>
                  <span className="text-text-muted text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="text-text-secondary text-sm flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`focus-ring block text-center py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-out ${
                    tier.highlighted
                      ? "bg-accent text-bg hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
                      : "border border-border text-text-primary hover:border-accent/50 hover:text-accent"
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
