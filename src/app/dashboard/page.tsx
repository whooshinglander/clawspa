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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Dashboard Coming Soon</h1>
        <p className="text-gray-400 mb-8">
          Scan history, trend analysis, and team management — all in one place. Join the waitlist to
          get early access.
        </p>

        {submitted ? (
          <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
            <div className="text-2xl mb-2">✓</div>
            <p className="text-teal font-semibold">You&apos;re on the list!</p>
            <p className="text-gray-400 text-sm mt-1">
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
              className="flex-1 px-4 py-3 bg-charcoal-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-teal text-charcoal-dark font-semibold rounded-lg hover:bg-teal/90 transition-colors whitespace-nowrap"
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
