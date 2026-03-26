export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  category: string;
  tags: string[];
  summary: string[];
};

export const firstBlogPost: BlogPost = {
  slug: "web-design-em-2026-guia-completo-para-sites-que-convertem",
  title:
    "Web Design em 2026: O Guia Definitivo pra Quem Quer um Site que Realmente Funciona",
  seoTitle: "Web Design em 2026: Guia Completo para Sites que Convertem",
  description:
    "Web design não é só estética. Descubra os princípios, tendências e erros fatais que separam sites que vendem de sites que só existem.",
  metaDescription:
    "Web design não é só estética. Descubra as tendências, princípios e erros fatais que separam sites que vendem de sites que só existem. Guia completo.",
  primaryKeyword: "web design",
  secondaryKeywords: [
    "web design tendências",
    "design de sites",
    "layout de site profissional",
  ],
  publishedAt: "2026-03-26",
  publishedLabel: "26 Mar 2026",
  readingTime: "12 min de leitura",
  category: "Web Design",
  tags: ["web design", "seo", "design de sites", "conversão"],
  summary: [
    "Os 7 princípios que diferenciam sites profissionais de páginas que não convertem.",
    "As tendências de web design em 2026 que realmente impactam negócio.",
    "Os erros mais comuns em sites brasileiros e como corrigir cada um.",
  ],
};

export const blogPosts = [firstBlogPost];
