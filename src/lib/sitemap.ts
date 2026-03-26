import fs from "node:fs";
import path from "node:path";

const APP_DIRECTORY = path.join(process.cwd(), "src", "app");
const PAGE_FILE_PATTERN = /^page\.(tsx|ts|jsx|js)$/;

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
  lastModified: Date;
};

function shouldSkipSegment(segment: string) {
  return (
    segment.startsWith("(") ||
    segment.startsWith("@") ||
    segment.startsWith("_") ||
    segment.startsWith("[")
  );
}

function toRoutePath(pageFilePath: string) {
  const relativePath = path.relative(APP_DIRECTORY, pageFilePath);
  const directory = path.dirname(relativePath);

  if (directory === ".") {
    return "/";
  }

  const segments = directory
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !segment.startsWith("("))
    .filter((segment) => !segment.startsWith("@"));

  if (segments.some(shouldSkipSegment)) {
    return null;
  }

  return `/${segments.join("/")}`;
}

function inferRoutePriority(routePath: string) {
  if (routePath === "/") {
    return 1;
  }

  if (routePath === "/servicos") {
    return 0.9;
  }

  if (routePath === "/contato") {
    return 0.8;
  }

  if (routePath === "/blog") {
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

function inferChangeFrequency(routePath: string): SitemapRouteDefinition["changeFrequency"] {
  if (routePath === "/blog" || routePath.startsWith("/blog/")) {
    return "weekly";
  }

  if (routePath === "/privacidade" || routePath === "/termos") {
    return "yearly";
  }

  return "monthly";
}

function collectPageFiles(directory: string, accumulator: string[] = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("_")) {
        continue;
      }

      collectPageFiles(fullPath, accumulator);
      continue;
    }

    if (PAGE_FILE_PATTERN.test(entry.name)) {
      accumulator.push(fullPath);
    }
  }

  return accumulator;
}

export function getSitemapRoutes(): SitemapRouteDefinition[] {
  const routes = new Map<string, SitemapRouteDefinition>();

  for (const pageFile of collectPageFiles(APP_DIRECTORY)) {
    const routePath = toRoutePath(pageFile);

    if (!routePath) {
      continue;
    }

    const stats = fs.statSync(pageFile);

    routes.set(routePath, {
      path: routePath,
      lastModified: stats.mtime,
      priority: inferRoutePriority(routePath),
      changeFrequency: inferChangeFrequency(routePath),
    });
  }

  return [...routes.values()].sort((a, b) => a.path.localeCompare(b.path));
}
