export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishedAt: string;
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
    "Web design nao e so estetica. Descubra os principios, tendencias e erros fatais que separam sites que vendem de sites que so existem.",
  metaDescription:
    "Web design nao e so estetica. Descubra as tendencias, principios e erros fatais que separam sites que vendem de sites que so existem. Guia completo.",
  primaryKeyword: "web design",
  secondaryKeywords: [
    "web design tendencias",
    "design de sites",
    "layout de site profissional",
  ],
  publishedAt: "2026-03-26",
  readingTime: "12 min de leitura",
  category: "Web Design",
  tags: ["web design", "seo", "design de sites", "conversao"],
  summary: [
    "Os 7 principios que diferenciam sites profissionais de paginas que nao convertem.",
    "As tendencias de web design em 2026 que realmente impactam negocio.",
    "Os erros mais comuns em sites brasileiros e como corrigir cada um.",
  ],
};

export const blogPosts = [firstBlogPost];
