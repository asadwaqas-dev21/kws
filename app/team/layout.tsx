import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KWS | Founder, Vision & Community Work",
  description: "Learn about Khurram Welfare Society, its founder Hafiz Abdul Ghaffar Kamboh, and the vision behind its welfare and community work.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
