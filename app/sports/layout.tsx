import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sports & Youth Development",
  description:
    "Discover how Khurram Welfare Society encourages sports, teamwork, and youth development in Khurram Hithar and surrounding communities in Kasur.",
  path: "/sports",
  keywords: ["community sports Kasur", "youth development Pakistan", "KWS sports"],
});

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Sports", path: "/sports" },
        ])}
      />
      {children}
    </>
  );
}
