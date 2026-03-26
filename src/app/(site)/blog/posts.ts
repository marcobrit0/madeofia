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

export const secondBlogPost: BlogPost = {
  slug: "landing-page-exemplos-7-modelos-que-convertem",
  title:
    "Landing Page: Exemplos, Estrutura e o Que Faz Uma Página Converter de Verdade",
  seoTitle: "Landing Page Exemplos: 7 Modelos que Convertem em 2026",
  description:
    "Veja exemplos reais de landing pages, entenda a estrutura ideal e aprenda o que faz uma página transformar clique em lead ou venda.",
  metaDescription:
    "Veja exemplos reais de landing pages que convertem, entenda a estrutura ideal e aprenda a criar páginas que transformam visitantes em clientes.",
  primaryKeyword: "landing page exemplos",
  secondaryKeywords: [
    "landing page",
    "exemplos de landing page",
    "página de captura",
    "landing page que converte",
  ],
  publishedAt: "2026-03-26",
  publishedLabel: "26 Mar 2026",
  readingTime: "10 min de leitura",
  category: "Landing Pages",
  tags: [
    "landing page",
    "conversão",
    "página de captura",
    "copywriting",
  ],
  summary: [
    "A estrutura base que aparece nas landing pages de alta conversão.",
    "Sete modelos por tipo de negócio para adaptar ao seu funil.",
    "Os erros mais comuns que destroem performance em tráfego pago.",
  ],
};

export const thirdBlogPost: BlogPost = {
  slug: "desenvolvimento-web-guia-completo-para-iniciantes",
  title:
    "Desenvolvimento Web: O Guia Sem Enrolação pra Entender o Que Você Está Contratando",
  seoTitle: "Desenvolvimento Web: Guia Completo para Iniciantes [2026]",
  description:
    "Entenda desenvolvimento web sem jargão: front-end, back-end, tipos de projeto, custos e como avaliar propostas sem cair em armadilha.",
  metaDescription:
    "Desenvolvimento web explicado sem jargão. Entenda front-end, back-end, tecnologias, custos e como escolher o parceiro certo pro seu projeto.",
  primaryKeyword: "desenvolvimento web",
  secondaryKeywords: [
    "desenvolvimento de sites",
    "programação web",
    "criar site profissional",
    "desenvolvimento de aplicações web",
  ],
  publishedAt: "2026-03-26",
  publishedLabel: "26 Mar 2026",
  readingTime: "11 min de leitura",
  category: "Desenvolvimento Web",
  tags: [
    "desenvolvimento web",
    "next.js",
    "produto digital",
    "sites profissionais",
  ],
  summary: [
    "A diferença prática entre front-end, back-end e full-stack.",
    "Os tipos de projeto que mudam prazo, stack e orçamento.",
    "Como ler propostas técnicas sem ser soterrado por jargão.",
  ],
};

export const blogPosts = [firstBlogPost, secondBlogPost, thirdBlogPost];
