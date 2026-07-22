import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, siteConfig } from "@/lib/seo";
import { services } from "./data";

const description =
  "Explore Khurram Welfare Society services: clean water, education, health, street lights, social welfare, blood donation, muqada boxes, and youth sports in Kasur.";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services",
  description,
  path: "/services",
  keywords: [
    "KWS services",
    "clean water Kasur",
    "blood donation Kasur",
    "welfare services Pakistan",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Khurram Welfare Society Services",
            url: `${siteConfig.url}/services`,
            description,
            hasPart: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              url: `${siteConfig.url}/services/${service.id}`,
              description: service.subtitle,
            })),
          },
        ]}
      />
      {children}
    </>
  );
}
