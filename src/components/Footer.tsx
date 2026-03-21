import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold mb-3">
              <span>💆</span>
              <span className="text-white">
                Claw<span className="text-teal">Spa</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              Agent maintenance &amp; wellness for OpenClaw.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Product</h4>
            <div className="space-y-2">
              <Link href="/#treatments" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                Docs
              </Link>
              <Link href="/dashboard" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Resources</h4>
            <div className="space-y-2">
              <Link href="/docs#installation" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                Installation
              </Link>
              <Link href="/docs#api-reference" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                API Reference
              </Link>
              <Link href="/docs#privacy" className="block text-gray-500 hover:text-teal text-sm transition-colors">
                Privacy
              </Link>
            </div>
          </div>

          {/* Install */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Install</h4>
            <div className="bg-charcoal rounded-lg p-3 font-mono text-sm">
              <span className="text-gray-500">$</span>{" "}
              <span className="text-teal">clawhub install clawspa</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ClawSpa. Built by{" "}
            <a
              href="https://x.com/whooshinglander"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal transition-colors"
            >
              @whooshinglander
            </a>
          </p>
          <a
            href="mailto:contact@clawspa.org"
            className="text-gray-600 hover:text-teal text-xs transition-colors"
          >
            contact@clawspa.org
          </a>
        </div>
      </div>
    </footer>
  );
}
