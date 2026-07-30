import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, serviceJsonLd } from "@/lib/seo";
import { services } from "../data";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "This service page could not be found.",
      path: "/services",
      noIndex: true,
    });
  }

  const summary = service.description[0] ?? service.subtitle;

  const seoTitles: Record<string, string> = {
    "education": "Education Support in Kasur",
    "clean-water": "Clean Water Projects in Kasur",
    "blood-donation": "Blood Donation Support in Kasur",
    "welfare": "Social Welfare Services in Kasur",
    "health": "Free Medical Camps in Kasur",
    "sports": "Youth Sports Programs in Kasur",
    "street-lights": "Street Light Projects in Kasur",
  };
  const seoTitle = seoTitles[service.id] || `${service.title} in Kasur`;

  const seoDescriptions: Record<string, string> = {
    "education": "Empowering students in Kasur through scholarships, free school supplies, and comprehensive educational support programs.",
    "clean-water": "Providing safe drinking water across Kasur with new hand pumps, filtration plants, and community hygiene education.",
    "blood-donation": "A dedicated blood donation network in Kasur connecting voluntary donors with patients in urgent need 24/7.",
    "welfare": "Supporting vulnerable families in Kasur with monthly food rations, marriage assistance, and rapid emergency relief.",
    "health": "Delivering free healthcare, medical camps, and financial aid for treatments to underserved areas in Kasur.",
    "sports": "Promoting youth development through community sports events, local tournaments, and active engagement in Kasur.",
    "street-lights": "Illuminating streets in Kasur with solar and electric street lights to improve community safety and security.",
  };
  const seoDesc = seoDescriptions[service.id] || `${service.subtitle}. Learn how we help the community in Kasur.`;

  return createPageMetadata({
    title: seoTitle,
    description: seoDesc,
    path: `/services/${service.id}`,
  });
}

export default async function ServiceDetailLayout({ children, params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const summary = service.description[0] ?? service.subtitle;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.id}` },
          ]),
          serviceJsonLd({
            title: service.title,
            subtitle: service.subtitle,
            description: summary,
            path: `/services/${service.id}`,
          }),
        ]}
      />
      {children}
    </>
  );
}
