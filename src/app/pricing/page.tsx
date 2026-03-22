"use client";

import { useState } from "react";

function SubscribeButton({ plan, highlighted }: { plan: string; highlighted: boolean }) {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!showEmail) {
    return (
      <button
        onClick={() => setShowEmail(true)}
        className={`focus-ring block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-out ${
          highlighted
            ? "bg-accent text-bg hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            : "bg-accent/20 text-text-primary border border-accent/40 hover:bg-accent/30 hover:border-accent/60"
        }`}
      >
        Subscribe
      </button>
    );
  }

  return (
    <form onSubmit={handleCheckout} className="space-y-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        autoFocus
        className="w-full px-3 py-2 bg-bg-input border border-border rounded-lg text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className={`focus-ring block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ease-out ${
          highlighted
            ? "bg-accent text-bg hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            : "bg-accent/20 text-text-primary border border-accent/40 hover:bg-accent/30 hover:border-accent/60"
        } disabled:opacity-50`}
      >
        {loading ? "Loading..." : "Continue"}
      </button>
    </form>
  );
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try ClawSpa with a single trial scan.",
    features: [
      { text: "1 trial scan", included: true },
      { text: "Basic health score", included: true },
      { text: "Local-only results", included: true },
      { text: "Community support", included: true },
      { text: "AI analysis", included: false },
      { text: "Scan history", included: false },
      { text: "Webhooks", included: false },
      { text: "Scheduled scans", included: false },
    ],
    cta: "Install Free",
    plan: null,
    highlighted: false,
  },
  {
    name: "Solo",
    price: "$5",
    period: "/month",
    description: "For individual developers running one agent.",
    features: [
      { text: "10 deep scans/month", included: true },
      { text: "Basic health score", included: true },
      { text: "AI-powered analysis", included: true },
      { text: "Scan history", included: true },
      { text: "Security alerts", included: true },
      { text: "Email support", included: true },
      { text: "Webhooks", included: false },
      { text: "Scheduled scans", included: false },
    ],
    cta: "Subscribe",
    plan: "solo",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For power users running multiple agents.",
    features: [
      { text: "50 deep scans/month", included: true },
      { text: "Basic health score", included: true },
      { text: "Priority AI analysis", included: true },
      { text: "Scan history & trends", included: true },
      { text: "Security alerts", included: true },
      { text: "Webhook integrations", included: true },
      { text: "Trend comparison", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Subscribe",
    plan: "pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$25",
    period: "/month",
    description: "For teams managing a fleet of agents.",
    features: [
      { text: "200 deep scans/month", included: true },
      { text: "Basic health score", included: true },
      { text: "Priority AI analysis", included: true },
      { text: "Scan history & trends", included: true },
      { text: "Security alerts", included: true },
      { text: "Webhook integrations", included: true },
      { text: "Scheduled scans", included: true },
      { text: "Custom rules & dedicated support", included: true },
    ],
    cta: "Subscribe",
    plan: "team",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "What counts as a scan?",
    a: "Each time your agent runs /spa and sends telemetry for deep analysis, that's one scan. Local-only scans (free tier) don't count toward your limit.",
  },
  {
    q: "What data do you collect?",
    a: "We receive anonymized workspace metadata: memory stats, skill lists, config checksums, and security flags. No conversation content, personal data, or source code is ever sent. See our docs for the exact payload format.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your Stripe billing portal anytime. Your API key remains active until the end of the billing period.",
  },
  {
    q: "What happens when I hit my scan limit?",
    a: "You'll receive a friendly error with your next reset date. Upgrade your plan or wait for the monthly reset.",
  },
  {
    q: "Do you support annual billing?",
    a: "Not yet, but it's on the roadmap. Subscribe monthly for now and we'll offer a migration when annual plans launch.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        <h1 className="fade-in-up text-5xl sm:text-6xl font-display font-bold text-text-primary text-center mb-5">Pricing</h1>
        <p className="fade-in-up fade-in-up-delay-1 text-text-secondary text-center max-w-xl mx-auto mb-16">
          Start free. Upgrade when your agent needs deeper care.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
              <h2 className="text-text-primary font-bold text-xl mb-1">{tier.name}</h2>
              <div className="mb-2">
                <span className="text-3xl font-bold text-text-primary">{tier.price}</span>
                <span className="text-text-muted text-sm">{tier.period}</span>
              </div>
              <p className="text-text-muted text-sm mb-5">{tier.description}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f.text} className="text-sm flex items-start gap-2">
                    {f.included ? (
                      <span className="text-accent mt-0.5">✓</span>
                    ) : (
                      <span className="text-text-muted mt-0.5">—</span>
                    )}
                    <span className={f.included ? "text-text-secondary" : "text-text-muted"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              {tier.plan ? (
                <SubscribeButton plan={tier.plan} highlighted={tier.highlighted} />
              ) : (
                <a
                  href="/docs#installation"
                  className="focus-ring block text-center py-2.5 rounded-lg font-semibold text-sm bg-accent/20 text-text-primary border border-accent/40 hover:bg-accent/30 hover:border-accent/60 transition-all duration-300 ease-out"
                >
                  {tier.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="fade-in-up text-2xl sm:text-3xl font-display font-semibold text-text-primary text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`fade-in-up fade-in-up-delay-${Math.min(i + 1, 6)} group bg-bg-card rounded-xl p-8 border border-border/50 hover:border-accent/40 transition-all duration-300 ease-out`}
              >
                <h3 className="text-text-primary font-semibold mb-3">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
