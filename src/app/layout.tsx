import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Playfair_Display, Roboto_Slab, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-slab" });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-script" });

export const metadata: Metadata = {
  title: "ClawSpa — Agent Wellness Suite",
  description:
    "A spa day for your OpenClaw agent. Deep cleanse memory, scan for security risks, detox configs, and keep your agent running at peak performance.",
  metadataBase: new URL("https://clawspa.org"),
  openGraph: {
    title: "ClawSpa — Agent Maintenance & Wellness",
    description:
      "Deep cleanse, security scan, detox, and health checks for your OpenClaw agents.",
    url: "https://clawspa.org",
    siteName: "ClawSpa",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://clawspa.org/og-image.png", width: 1200, height: 630, alt: "ClawSpa — Agent Wellness for OpenClaw" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawSpa — Agent Maintenance & Wellness",
    description:
      "A spa day for your OpenClaw agent. Memory cleanse, security scans, and more.",
    images: ["https://clawspa.org/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} ${robotoSlab.variable} ${dancingScript.variable} font-sans min-h-screen antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SMDW25L045"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SMDW25L045');`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
