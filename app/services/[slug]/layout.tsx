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
    "welfare": "Social Welfare Programs in Kasur",
    "health": "Healthcare & Medical Aid in Kasur",
    "sports": "Youth Sports Programs in Kasur",
  };
  const seoTitle = seoTitles[service.id] || `${service.title} in Kasur`;

  return createPageMetadata({
    title: seoTitle,
    description: `${service.subtitle}. ${summary}`,
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
