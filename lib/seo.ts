import type { Metadata } from "next";

export const siteConfig = {
  name: "Khurram Welfare Society",
  shortName: "KWS",
  title: "Khurram Welfare Society | Non-Profit Welfare Organization in Kasur, Pakistan",
  description:
    "Khurram Welfare Society (KWS) is a trusted non-profit in Kasur, Pakistan, delivering clean water, education, healthcare, social welfare, blood donation, and community development since 2014.",
  url: "https://khurramwelfaresociety.org",
  locale: "en_US",
  language: "en",
  foundingDate: "2014",
  email: "kwsociety2014@gmail.com",
  phone: "+923334178699",
  phoneDisplay: "+92 333 4178 699",
  founder: "Hafiz Abdul Ghaffar Kamboh",
  address: {
    streetAddress: "Village Khurram Hithar",
    addressLocality: "Kasur",
    addressRegion: "Punjab",
    addressCountry: "PK",
    postalCode: "55050",
  },
  geo: {
    latitude: 31.1167,
    longitude: 74.45,
  },
  social: {
    facebook: "https://www.facebook.com/KWSociety/",
    youtube: "https://www.youtube.com/@aGhaffar702",
  },
  keywords: [
    "Khurram Welfare Society",
    "KWS",
    "non profit organization Pakistan",
    "charity organization Kasur",
    "welfare society Kasur",
    "Khurram Hithar",
    "clean water projects Pakistan",
    "education support Pakistan",
    "healthcare support Pakistan",
    "blood donation Kasur",
    "social welfare organization",
    "NGO Kasur",
    "community development Punjab",
  ],
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  locale?: string;
  noIndex?: boolean;
};

/** Build consistent per-page metadata. Title uses the root `%s | Site` template. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  locale = siteConfig.locale,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["NGO", "Organization"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "خرم ویلفیئر سوسائٹی"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/kws.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/kws.png"),
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    slogan: "Serving Humanity Since 2014",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Kasur, Punjab, Pakistan",
      },
      {
        "@type": "Place",
        name: "Khurram Hithar",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.youtube],
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Founder",
    },
    knowsAbout: [
      "Clean water",
      "Education",
      "Healthcare",
      "Social welfare",
      "Blood donation",
      "Community development",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en", "ur"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  subtitle: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.subtitle,
    url: absoluteUrl(service.path),
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kasur, Punjab, Pakistan",
    },
  };
}
