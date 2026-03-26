import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import type { BlogPost } from "./posts";

export function getBlogPostPath(slug: string) {
  return `/blog/${slug}`;
}

export function getBlogPostImagePath(slug: string) {
  return `${getBlogPostPath(slug)}/opengraph-image`;
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function createBlogPostMetadata(post: BlogPost): Metadata {
  const path = getBlogPostPath(post.slug);
  const imagePath = getBlogPostImagePath(post.slug);

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [
      post.primaryKeyword,
      ...post.secondaryKeywords,
      ...post.tags,
      siteConfig.name,
    ],
    alternates: {
      canonical: path,
    },
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: post.category,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [siteConfig.name],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: `${post.seoTitle} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [imagePath],
    },
  };
}

export function createBlogPostSchemas(post: BlogPost) {
  const path = getBlogPostPath(post.slug);
  const articleUrl = absoluteUrl(path);
  const blogUrl = absoluteUrl("/blog");
  const imageUrl = absoluteUrl(getBlogPostImagePath(post.slug));

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.seoTitle,
      alternativeHeadline: post.title,
      description: post.metaDescription,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      inLanguage: siteConfig.language,
      articleSection: post.category,
      keywords: [post.primaryKeyword, ...post.secondaryKeywords, ...post.tags],
      image: [imageUrl],
      mainEntityOfPage: articleUrl,
      url: articleUrl,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      isPartOf: {
        "@type": "Blog",
        name: `Blog ${siteConfig.name}`,
        url: blogUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: blogUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.seoTitle,
          item: articleUrl,
        },
      ],
    },
  ];
}
