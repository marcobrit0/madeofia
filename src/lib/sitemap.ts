import { blogPosts } from "@/app/(site)/blog/posts";

const STATIC_ROUTE_PATHS = [
  "/",
  "/blog",
  "/contato",
  "/portfolio",
  "/privacidade",
  "/servicos",
  "/termos",
] as const;

type SitemapRouteDefinition = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  lastModified?: Date;
};

function inferRoutePriority(routePath: string) {
  if (routePath === "/") {
    return 1;
  }

  if (routePath === "/servicos") {
    return 0.9;
  }

  if (routePath === "/contato" || routePath === "/blog") {
    return 0.8;
  }

  if (routePath.startsWith("/blog/")) {
    return 0.7;
  }

  if (routePath === "/privacidade" || routePath === "/termos") {
    return 0.3;
  }

  return 0.7;
}

function inferChangeFrequency(
  routePath: string,
): SitemapRouteDefinition["changeFrequency"] {
  if (routePath === "/blog" || routePath.startsWith("/blog/")) {
    return "weekly";
  }

  if (routePath === "/privacidade" || routePath === "/termos") {
    return "yearly";
  }

  return "monthly";
}

function createRoute(path: string): SitemapRouteDefinition {
  return {
    path,
    priority: inferRoutePriority(path),
    changeFrequency: inferChangeFrequency(path),
  };
}

export function getSitemapRoutes(): SitemapRouteDefinition[] {
  const staticRoutes = STATIC_ROUTE_PATHS.map(createRoute);
  const blogRoutes = blogPosts.map((post) => ({
    ...createRoute(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...blogRoutes].toSorted((a, b) =>
    a.path.localeCompare(b.path),
  );
}
