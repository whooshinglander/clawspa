"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal-dark/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-2 text-xl font-bold rounded-lg">
          <span className="text-2xl">💆</span>
          <span className="text-white">
            Claw<span className="text-teal">Spa</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#treatments"
            className="focus-ring text-gray-400 hover:text-teal transition-colors duration-300 text-sm rounded-sm"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="focus-ring text-gray-400 hover:text-teal transition-colors duration-300 text-sm rounded-sm"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="focus-ring text-gray-400 hover:text-teal transition-colors duration-300 text-sm rounded-sm"
          >
            Docs
          </Link>
          <Link
            href="/dashboard"
            className="focus-ring text-sm px-4 py-2 bg-teal text-charcoal-dark font-semibold rounded-lg hover:bg-teal/90 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-teal/20"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="focus-ring md:hidden text-gray-400 hover:text-white p-2 rounded-lg transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-charcoal-dark/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#treatments"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-400 hover:text-teal transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-400 hover:text-teal transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-400 hover:text-teal transition-colors duration-300"
            >
              Docs
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="block text-sm px-4 py-2 bg-teal text-charcoal-dark font-semibold rounded-lg text-center hover:bg-teal/90 transition-all duration-300 ease-out"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
