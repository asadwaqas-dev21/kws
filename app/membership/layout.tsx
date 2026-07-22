import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Membership Application",
  description:
    "Apply for Khurram Welfare Society membership. Join KWS to support clean water, education, healthcare, and welfare programs in Kasur, Pakistan.",
  path: "/membership",
  keywords: ["KWS membership", "join welfare society", "volunteer Kasur"],
});

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Membership", path: "/membership" },
        ])}
      />
      {children}
    </>
  );
}
