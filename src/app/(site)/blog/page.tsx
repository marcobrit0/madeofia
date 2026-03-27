import homeStyles from "@/app/page.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ActionBanner, sitePageStyles as styles } from "@/components/SitePages";
import { LinkButton } from "@/components/SiteButton";
import { createPageMetadata, siteConfig } from "@/lib/seo";
import { serializeJsonLd } from "./seo";
import { blogPosts } from "./posts";

const featuredBlogPost = blogPosts[0];

const baseMetadata = createPageMetadata({
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

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [
      {
        url: "/blog/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Blog MadeofIA",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: ["/blog/opengraph-image"],
  },
};

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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(blogSchema) }}
      />

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.blogHeroWrap}>
            <p className={styles.eyebrow}>// blog</p>
            <div className={homeStyles.heroCopy} style={{ transform: "none" }}>
              <h1 className={homeStyles.heroTitle}>
                Insights que ajudam
                <br />
                seu site a
                <br />
                <span className={styles.heroAccent}>gerar negócio.</span>
              </h1>
              <p className={homeStyles.heroDescription} style={{ maxWidth: 780 }}>
                Conteúdo editorial sobre web design, SEO e produto digital com foco em
                conversão, performance e clareza estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.splitGrid}>
            <Link href={`/blog/${featuredBlogPost.slug}`} className={styles.surfaceCard}>
              <div className={styles.articleMetaRow}>
                <span className={styles.eyebrow}>Artigo em destaque</span>
                <span>{featuredBlogPost.publishedLabel}</span>
                <span>{featuredBlogPost.readingTime}</span>
              </div>
              <h2 className={styles.sectionTitle} style={{ marginTop: 18 }}>
                {featuredBlogPost.title}
              </h2>
              <p className={styles.bodyCopy}>{featuredBlogPost.metaDescription}</p>
              <div className={styles.tagRow}>
                {featuredBlogPost.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <LinkButton href={`/blog/${featuredBlogPost.slug}`} label="Ler artigo completo" />
              </div>
            </Link>

            <div className={styles.stack}>
              <div className={styles.surfaceCard}>
                <p className={styles.panelKicker}>O que você encontra aqui</p>
                <ul className={styles.list} style={{ marginTop: 16 }}>
                  {featuredBlogPost.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.surfaceCard}>
                <p className={styles.panelKicker}>Próxima ação</p>
                <p className={styles.bodyCopy} style={{ marginTop: 16 }}>
                  Se o seu site atual não comunica valor, não ranqueia e não
                  converte, a próxima etapa não é trocar detalhe visual. É
                  reorganizar estratégia, mensagem e estrutura.
                </p>
                <div style={{ marginTop: 20 }}>
                  <LinkButton href="/contato" label="Falar com a MadeofIA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.stack}>
            <div>
              <p className={styles.panelKicker}>Arquivo editorial</p>
              <h2 className={styles.sectionTitle} style={{ marginTop: 14 }}>
                Todos os artigos
              </h2>
            </div>

            <div className={styles.contentGrid}>
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.surfaceCard}>
                  <div className={styles.articleMetaRow}>
                    <span className={styles.eyebrow}>{post.category}</span>
                    <span>{post.publishedLabel}</span>
                  </div>
                  <h3
                    style={{
                      color: "#ffffff",
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      letterSpacing: "-0.03em",
                      marginTop: 18,
                    }}
                  >
                    {post.seoTitle}
                  </h3>
                  <p className={styles.bodyCopy} style={{ marginTop: 14 }}>
                    {post.description}
                  </p>
                  <div style={{ marginTop: 20 }}>
                    <LinkButton href={`/blog/${post.slug}`} label="Abrir post" variant="secondary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ActionBanner
        eyebrow="// seo-driven"
        title="Conteúdo pensado para ranquear e converter."
        description="Cada artigo conecta intenção de busca, estrutura semântica e CTA claro para transformar leitura em demanda."
        href="/servicos"
        label="Ver serviços"
      />
    </>
  );
}
