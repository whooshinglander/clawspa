import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151510] border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-display font-semibold mb-4 tracking-wide">
              <span>💆</span>
              <span className="text-text-primary">
                Claw<span className="text-accent">Spa</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm mb-6 max-w-xs leading-relaxed">
              Agent maintenance &amp; wellness for OpenClaw. Keep your agents clean, safe, and performant.
            </p>
            <div className="bg-bg-card rounded-lg p-3 font-mono text-sm inline-block border border-border/50">
              <span className="text-text-muted">$</span>{" "}
              <span className="text-accent">clawhub install clawspa</span>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-text-primary font-semibold text-sm mb-4">Product</h4>
              <div className="space-y-3">
                <Link href="/#treatments" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  Features
                </Link>
                <Link href="/pricing" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  Pricing
                </Link>
                <Link href="/docs" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  Docs
                </Link>
                <Link href="/dashboard" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  Dashboard
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-text-primary font-semibold text-sm mb-4">Resources</h4>
              <div className="space-y-3">
                <Link href="/docs#installation" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  Installation
                </Link>
                <Link href="/docs#api-reference" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  API Reference
                </Link>
                <Link href="/docs#privacy" className="block text-text-muted hover:text-accent text-sm transition-colors duration-300">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} ClawSpa. Built by{" "}
            <a
              href="https://x.com/whooshinglander"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              @whooshinglander
            </a>
          </p>
          <a
            href="mailto:contact@clawspa.org"
            className="text-text-muted hover:text-accent text-xs transition-colors duration-300"
          >
            contact@clawspa.org
          </a>
        </div>
      </div>
    </footer>
  );
}
