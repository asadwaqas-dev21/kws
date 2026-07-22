import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Projects",
  description:
    "Explore Khurram Welfare Society projects in clean water, education, healthcare, welfare, street lights, and community development across Kasur, Pakistan.",
  path: "/projects",
  keywords: ["KWS projects", "charity projects Kasur", "welfare projects Pakistan"],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      {children}
    </>
  );
}
