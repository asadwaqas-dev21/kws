import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, siteConfig } from "@/lib/seo";

const description =
  "Contact Khurram Welfare Society in Khurram Hithar, Kasur. Reach us for donations, volunteering, membership, and community welfare inquiries.";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description,
  path: "/contact",
  keywords: ["contact KWS", "Khurram Welfare Society phone", "donate Kasur NGO"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Khurram Welfare Society",
            url: `${siteConfig.url}/contact`,
            description,
            mainEntity: {
              "@id": `${siteConfig.url}/#organization`,
            },
          },
        ]}
      />
      {children}
    </>
  );
}
