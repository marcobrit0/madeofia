import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://madeof.ia.br";

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
