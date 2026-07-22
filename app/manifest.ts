import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EA",
    theme_color: "#14523c",
    lang: "en",
    dir: "ltr",
    categories: ["nonprofits", "social", "lifestyle"],
    icons: [
      {
        src: "/kws.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/kws.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
