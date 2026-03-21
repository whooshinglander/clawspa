import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column — Brand + Install */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold mb-4">
              <span>💆</span>
              <span className="text-white">
                Claw<span className="text-teal">Spa</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 max-w-xs leading-relaxed">
              Agent maintenance &amp; wellness for OpenClaw. Keep your agents clean, safe, and performant.
            </p>
            <div className="bg-charcoal rounded-lg p-3 font-mono text-sm inline-block">
              <span className="text-gray-500">$</span>{" "}
              <span className="text-teal">clawhub install clawspa</span>
            </div>
          </div>

          {/* Right column — Nav links in two sub-columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <div className="space-y-3">
                <Link href="/#treatments" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  Features
                </Link>
                <Link href="/pricing" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  Pricing
                </Link>
                <Link href="/docs" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  Docs
                </Link>
                <Link href="/dashboard" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  Dashboard
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
              <div className="space-y-3">
                <Link href="/docs#installation" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  Installation
                </Link>
                <Link href="/docs#api-reference" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  API Reference
                </Link>
                <Link href="/docs#privacy" className="block text-gray-500 hover:text-teal text-sm transition-colors duration-300">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ClawSpa. Built by{" "}
            <a
              href="https://x.com/whooshinglander"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal transition-colors duration-300"
            >
              @whooshinglander
            </a>
          </p>
          <a
            href="mailto:contact@clawspa.org"
            className="text-gray-600 hover:text-teal text-xs transition-colors duration-300"
          >
            contact@clawspa.org
          </a>
        </div>
      </div>
    </footer>
  );
}
