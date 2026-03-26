import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { createPageMetadata, siteConfig } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, firstBlogPost } from "./posts";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — MadeofIA",
  description:
    "Artigos da MadeofIA sobre web design, SEO, produto digital e crescimento orgânico.",
  path: "/blog",
  keywords: [
    "blog de web design",
    "seo",
    "design de sites",
    "produto digital",
    "madeofia blog",
  ],
});

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog MadeofIA",
    description:
      "Artigos da MadeofIA sobre web design, SEO, produto digital e crescimento orgânico.",
    inLanguage: "pt-BR",
    url: `${siteConfig.url}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.seoTitle,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      keywords: [post.primaryKeyword, ...post.secondaryKeywords],
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Nav />

      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#4ade80] uppercase tracking-[0.32em] block mb-4">
          // blog
        </span>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <div>
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
              Insights que ajudam seu
              <br />
              <span className="text-[#4ade80]">site a gerar negócio.</span>
            </h1>
            <p className="text-white/58 text-lg md:text-xl max-w-2xl leading-relaxed">
              Conteúdo editorial sobre web design, SEO e produto digital com foco
              em conversão, performance e clareza estratégica.
            </p>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-3">
              Publicado em {firstBlogPost.publishedLabel}
            </p>
            <p className="font-mono text-2xl text-white leading-tight mb-3">
              {firstBlogPost.primaryKeyword}
            </p>
            <p className="text-sm leading-6 text-white/52">
              Primeiro artigo do hub editorial da MadeofIA, desenhado para captar
              buscas de alta intenção e encaminhar leitores para serviços e
              contato.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <Link
            href={`/blog/${firstBlogPost.slug}`}
            className="group border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-colors hover:border-[#4ade80]/40 hover:bg-white/[0.04]"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#4ade80]">
                Artigo em destaque
              </span>
              <span className="text-sm text-white/35">
                {firstBlogPost.publishedLabel}
              </span>
              <span className="text-sm text-white/35">
                {firstBlogPost.readingTime}
              </span>
            </div>

            <h2 className="font-mono text-3xl md:text-5xl text-white leading-tight mb-4">
              {firstBlogPost.title}
            </h2>

            <p className="text-base md:text-lg leading-8 text-white/60 max-w-3xl mb-8">
              {firstBlogPost.metaDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {firstBlogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/52"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="font-mono text-sm uppercase tracking-[0.18em] text-white group-hover:text-[#4ade80] transition-colors">
              Ler artigo completo →
            </span>
          </Link>

          <div className="space-y-6">
            <div className="border border-white/10 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                O que você encontra aqui
              </p>
              <ul className="space-y-4">
                {firstBlogPost.summary.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/60">
                    <span className="text-[#4ade80] shrink-0">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                Próxima ação
              </p>
              <p className="text-sm leading-6 text-white/55 mb-6">
                Se o seu site atual não comunica valor, não ranqueia e não
                converte, a próxima etapa não é trocar cor de botão. É repensar
                a estratégia.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-5 py-3 bg-[#4ade80] text-[#080807] font-bold hover:bg-[#4ade80]/90 transition-colors"
              >
                Falar com a MadeofIA
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 pt-10">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-2">
                Arquivo editorial
              </p>
              <h2 className="font-mono text-3xl text-white">Todos os artigos</h2>
            </div>
            <p className="text-sm text-white/35">{blogPosts.length} publicado</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-white/10 p-6 transition-colors hover:border-[#4ade80]/40 hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#4ade80]">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/35">
                    {post.publishedLabel}
                  </span>
                </div>
                <h3 className="font-mono text-xl text-white leading-snug mb-4">
                  {post.seoTitle}
                </h3>
                <p className="text-sm leading-6 text-white/55 mb-6">
                  {post.description}
                </p>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-white group-hover:text-[#4ade80] transition-colors">
                  Abrir post →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#4ade80] mb-4">
            // seo-driven
          </p>
          <h2 className="font-mono text-4xl md:text-5xl text-white leading-tight mb-6">
            Conteúdo pensado para ranquear
            <br />
            e para converter.
          </h2>
          <p className="text-white/58 leading-8 max-w-2xl mx-auto mb-8">
            Cada artigo conecta intenção de busca, estrutura semântica,
            distribuição interna de links e CTA claro para gerar demanda de forma
            consistente.
          </p>
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-8 py-4 border border-white/10 text-white hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
          >
            Ver serviços de SEO e web design
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
