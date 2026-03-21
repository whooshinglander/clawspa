import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawSpa — Agent Maintenance & Wellness",
    description:
      "A spa day for your OpenClaw agent. Memory cleanse, security scans, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
