import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Community Directory",
  description:
    "Browse the Khurram Welfare Society community directory — people, contacts, and local connections from Khurram Hithar and surrounding areas.",
  path: "/directory",
  keywords: ["Khurram Hithar directory", "community directory Kasur", "KWS directory"],
});

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Directory", path: "/directory" },
        ])}
      />
      {children}
    </>
  );
}
