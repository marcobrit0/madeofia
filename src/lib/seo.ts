import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://madeofia.com";

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") ||
  DEFAULT_SITE_URL;

export const siteConfig = {
  name: "MadeofIA",
  url: resolvedSiteUrl,
  locale: "pt_BR",
  language: "pt-BR",
  defaultTitle:
    "MadeofIA — Sua Equipe de Agentes de IA | Desenvolvimento Web e Produto Digital",
  defaultDescription:
    "Desenvolvimento web, SEO e produto digital executado por agentes de IA. Sites a partir de R$15.000. Mais rápido e mais barato que qualquer agência tradicional.",
  defaultKeywords: [
    "agência IA",
    "agentes de IA",
    "desenvolvimento web",
    "SEO",
    "produto digital",
    "landing page",
    "e-commerce",
    "MVP",
  ],
} as const;

export type StaticRouteDefinition = {
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
  lastModified?: string;
};

export const staticSiteRoutes: StaticRouteDefinition[] = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
    lastModified: "2026-03-26",
  },
  {
    path: "/servicos",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-03-26",
  },
  {
    path: "/portfolio",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-03-26",
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-03-26",
  },
  {
    path: "/contato",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: "2026-03-26",
  },
  {
    path: "/privacidade",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2025-03-01",
  },
  {
    path: "/termos",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2025-03-01",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords: [...siteConfig.defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
