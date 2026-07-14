import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Khurram Welfare Society",
  description: "Explore Khurram Welfare Society projects in clean water, education, healthcare, welfare, and community development across Kasur.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
