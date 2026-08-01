import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Updates",
  description:
    "Explore Khurram Welfare Society updates in clean water, education, healthcare, welfare, street lights, and community development across Kasur, Pakistan.",
  path: "/updates",
  keywords: ["KWS updates", "charity updates Kasur", "welfare updates Pakistan"],
});

export default function UpdatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/updates" },
        ])}
      />
      {children}
    </>
  );
}
