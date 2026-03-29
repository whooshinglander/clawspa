import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clawspa.org/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
