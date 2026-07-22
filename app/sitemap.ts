import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { services } from "@/app/services/data";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/team", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sports", changeFrequency: "monthly", priority: 0.8 },
  { path: "/legends", changeFrequency: "monthly", priority: 0.8 },
  { path: "/directory", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/membership", changeFrequency: "monthly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...pages, ...servicePages];
}
