import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legends & Community Heroes | Khurram Welfare Society",
  description: "Read about community heroes, inspiring stories, and legacy initiatives connected with Khurram Welfare Society.",
  alternates: {
    canonical: "/legends",
  },
};

export default function LegendsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
