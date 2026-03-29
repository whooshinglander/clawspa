import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clawspa.org/dashboard",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
