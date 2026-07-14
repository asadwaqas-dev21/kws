import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const siteConfig = {
  name: "Khurram Welfare Society",
  title: "Khurram Welfare Society | Non-Profit Welfare Organization in Kasur, Pakistan",
  description:
    "Khurram Welfare Society (KWS) is a trusted non-profit welfare organization in Kasur, Pakistan, focused on clean water, education, healthcare, social welfare, and community development.",
  url: "https://khurramwelfaresociety.org",
  keywords: [
    "Khurram Welfare Society",
    "KWS",
    "non profit organization Pakistan",
    "charity organization Kasur",
    "welfare society Kasur",
    "clean water projects Pakistan",
    "education support Pakistan",
    "healthcare support Pakistan",
    "social welfare organization",
  ],
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: "KWS",
  url: siteConfig.url,
  logo: `${siteConfig.url}/kws.png`,
  description: siteConfig.description,
  foundingDate: "2014",
  areaServed: {
    "@type": "Place",
    name: "Kasur, Pakistan",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khurram",
    addressRegion: "Kasur",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+923334178699",
    email: "kwsociety2014@gmail.com",
  },
  sameAs: [
    "https://www.facebook.com/KWSociety/",
    "https://www.youtube.com/@aGhaffar702",
  ],
  founder: {
    "@type": "Person",
    name: "Hafiz Abdul Ghaffar Kamboh",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/kws.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/kws.png"],
    creator: "@kwsociety",
  },
  icons: {
    icon: "/kws.png",
    shortcut: "/kws.png",
    apple: "/kws.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#14523c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </body>
    </html>
  );
}
