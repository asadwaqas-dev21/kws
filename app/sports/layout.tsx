import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports & Youth Development | Khurram Welfare Society",
  description: "Discover how Khurram Welfare Society encourages sports, teamwork, and youth development in the community.",
  alternates: {
    canonical: "/sports",
  },
};

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
