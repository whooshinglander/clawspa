"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
  { id: "installation", label: "Installation" },
  { id: "commands", label: "Commands" },
  { id: "api-key-setup", label: "API Key Setup" },
  { id: "weekly-scans", label: "Weekly Scans" },
  { id: "api-reference", label: "API Reference" },
  { id: "privacy", label: "Privacy" },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-charcoal-dark rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-300 border border-white/5">
      <code>{children}</code>
    </pre>
  );
}

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="flex gap-8">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-40 bg-teal text-charcoal-dark p-3 rounded-full shadow-lg"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 fixed lg:sticky top-16 left-0 z-30 lg:z-0 w-64 h-[calc(100vh-4rem)] bg-charcoal-dark lg:bg-transparent border-r border-white/5 lg:border-0 p-6 lg:p-0 transition-transform lg:transition-none overflow-y-auto shrink-0`}
          >
            <nav className="space-y-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Documentation
              </p>
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setSidebarOpen(false)}
                  className="block py-2 px-3 text-sm text-gray-400 hover:text-teal hover:bg-white/5 rounded-lg transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>

            {/* Installation */}
            <section id="installation" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
              <p className="text-gray-400 mb-4">
                Install ClawSpa with a single command using the ClawHub package manager:
              </p>
              <CodeBlock>$ clawhub install clawspa</CodeBlock>
              <p className="text-gray-400 mt-4 mb-4">
                Or add it manually to your agent&apos;s <code className="text-teal bg-teal/10 px-1.5 py-0.5 rounded text-sm">clawhub.toml</code>:
              </p>
              <CodeBlock>{`[extensions]
clawspa = "latest"`}</CodeBlock>
              <p className="text-gray-400 mt-4">
                ClawSpa requires OpenClaw 0.9+ and a valid ClawHub installation.
              </p>
            </section>

            {/* Commands */}
            <section id="commands" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">Commands</h2>
              <div className="space-y-4">
                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-mono font-semibold mb-2">/spa</h3>
                  <p className="text-gray-400 text-sm">
                    Run a full wellness scan. Performs all five treatments (deep cleanse, security
                    scan, detox, declutter, health check) and returns a health score.
                  </p>
                </div>
                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-mono font-semibold mb-2">/spa --deep</h3>
                  <p className="text-gray-400 text-sm">
                    Run a deep scan with AI-powered analysis. Requires an API key. Sends anonymized
                    telemetry for cloud analysis and returns detailed recommendations.
                  </p>
                </div>
                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-mono font-semibold mb-2">/spa status</h3>
                  <p className="text-gray-400 text-sm">
                    Check your current plan, remaining scans, and API key status.
                  </p>
                </div>
                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <h3 className="text-white font-mono font-semibold mb-2">/spa history</h3>
                  <p className="text-gray-400 text-sm">
                    View your scan history and health score trend (paid plans only).
                  </p>
                </div>
              </div>
            </section>

            {/* API Key Setup */}
            <section id="api-key-setup" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">API Key Setup</h2>
              <p className="text-gray-400 mb-4">
                After subscribing to a paid plan, you&apos;ll receive an API key starting with{" "}
                <code className="text-teal bg-teal/10 px-1.5 py-0.5 rounded text-sm">csk_</code>.
                Configure it in your agent:
              </p>
              <CodeBlock>{`$ clawhub config set clawspa.api_key csk_your_key_here`}</CodeBlock>
              <p className="text-gray-400 mt-4 mb-4">
                Or set it as an environment variable:
              </p>
              <CodeBlock>{`export CLAWSPA_API_KEY=csk_your_key_here`}</CodeBlock>
              <p className="text-gray-400 mt-4">
                Your API key is hashed before storage — we never store the raw key.
              </p>
            </section>

            {/* Weekly Scans */}
            <section id="weekly-scans" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">Weekly Scans</h2>
              <p className="text-gray-400 mb-4">
                Set up automated weekly scans to keep your agent in peak condition:
              </p>
              <CodeBlock>{`$ clawhub schedule clawspa weekly
# Runs /spa --deep every Monday at 9am UTC
# Results are stored in your scan history`}</CodeBlock>
              <p className="text-gray-400 mt-4">
                Scheduled scans require a Pro or Team plan. You&apos;ll receive a notification when each
                scan completes with a summary of changes since the last scan.
              </p>
            </section>

            {/* API Reference */}
            <section id="api-reference" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">API Reference</h2>
              <p className="text-gray-400 mb-6">
                All endpoints are available at{" "}
                <code className="text-teal bg-teal/10 px-1.5 py-0.5 rounded text-sm">
                  https://clawspa.org/api/v1
                </code>
              </p>

              <div className="space-y-6">
                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                      POST
                    </span>
                    <code className="text-white text-sm font-mono">/api/v1/scan/trial</code>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Submit a trial scan (no auth required). One per workspace.
                  </p>
                  <CodeBlock>{`curl -X POST https://clawspa.org/api/v1/scan/trial \\
  -H "Content-Type: application/json" \\
  -d '{"workspace_hash": "abc123", ...}'`}</CodeBlock>
                </div>

                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                      POST
                    </span>
                    <code className="text-white text-sm font-mono">/api/v1/scan</code>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    Submit an authenticated deep scan. Requires Bearer token.
                  </p>
                  <CodeBlock>{`curl -X POST https://clawspa.org/api/v1/scan \\
  -H "Authorization: Bearer csk_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{"workspace_hash": "abc123", ...}'`}</CodeBlock>
                </div>

                <div className="bg-charcoal-light/50 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">
                      GET
                    </span>
                    <code className="text-white text-sm font-mono">/api/v1/scans</code>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Retrieve paginated scan history. Requires Bearer token. Supports{" "}
                    <code className="text-teal text-xs">?page=1&amp;limit=10</code> query params.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">Privacy — What We Send</h2>
              <p className="text-gray-400 mb-4">
                ClawSpa only sends anonymized workspace metadata. Here&apos;s the exact payload
                format:
              </p>
              <CodeBlock>{`{
  "workspace_hash": "sha256_of_workspace_path",
  "memory_stats": {
    "total_entries": 142,
    "stale_entries": 23,
    "avg_age_days": 14.5,
    "total_size_kb": 890
  },
  "skills_list": [
    "web-search",
    "code-review",
    "file-manager"
  ],
  "security_flags": {
    "unsigned_skills": 2,
    "network_access_skills": 1,
    "last_audit": "2025-01-15T00:00:00Z"
  },
  "config_checks": {
    "contradictions": 1,
    "deprecated_keys": 3,
    "custom_overrides": 5
  },
  "detox_flags": {
    "poisoned_configs": 0,
    "conflicting_directives": 1
  },
  "declutter_stats": {
    "unused_skills": 4,
    "redundant_tools": 2,
    "context_window_usage": 0.73
  }
}`}</CodeBlock>
              <p className="text-gray-400 mt-4">
                <strong className="text-white">We never receive:</strong> conversation content,
                personal data, source code, file contents, API keys, or any identifying information
                beyond the hashed workspace path.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
