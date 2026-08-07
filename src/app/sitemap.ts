import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getSitemapRoutes } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapRoutes().map(({ path, ...route }) => ({
    url: absoluteUrl(path),
    ...route,
  }));
}
