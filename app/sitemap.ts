import type { MetadataRoute } from "next";
import { site, practices } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/framework",
    "/services",
    "/industries",
    "/technology-solutions",
    "/resources",
    "/about",
    "/contact",
    "/business-health-assessment",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const practiceRoutes = practices.map((p) => ({
    url: `${site.url}/services/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...practiceRoutes];
}
