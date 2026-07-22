import type { Metadata } from "next";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Legends & Community Heroes",
    description:
      "خرم ہٹھاڑ کے عظیم لوگ — read tributes to community legends and heroes connected with Khurram Welfare Society in Kasur, Pakistan.",
    path: "/legends",
    keywords: [
      "Khurram Hithar legends",
      "community heroes Kasur",
      "خرم ہٹھاڑ",
      "Kamboh personalities",
    ],
    locale: "ur_PK",
  }),
  alternates: {
    canonical: "/legends",
    languages: {
      ur: "/legends",
      "en-PK": "/legends",
      "x-default": "/legends",
    },
  },
};

const nastaliq = Noto_Nastaliq_Urdu({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-nastaliq",
});

export default function LegendsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={nastaliq.variable}>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Legends", path: "/legends" },
        ])}
      />
      {children}
    </div>
  );
}
