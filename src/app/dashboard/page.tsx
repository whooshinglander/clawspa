"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">💆</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Dashboard Coming Soon</h1>
        <p className="text-text-secondary mb-8">
          Scan history, trend analysis, and team management, all in one place. Join the waitlist to
          get early access.
        </p>

        {submitted ? (
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
            <div className="text-2xl mb-2">✓</div>
            <p className="text-accent font-semibold">You&apos;re on the list!</p>
            <p className="text-text-secondary text-sm mt-1">
              We&apos;ll email you when the dashboard launches.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-bg font-semibold rounded-lg hover:bg-accent-hover transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        )}
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      </div>
    </main>
  );
}
