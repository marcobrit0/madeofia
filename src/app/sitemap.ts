import type { MetadataRoute } from "next";
import { absoluteUrl, staticSiteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return staticSiteRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
