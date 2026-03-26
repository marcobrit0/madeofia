import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogPost } from "@/app/(site)/blog/posts";
import { LinkButton } from "./SiteButton";
import styles from "./site-pages.module.css";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  panel?: ReactNode;
};

type ActionBannerProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
  label: string;
};

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalDocumentProps = {
  title: string;
  updatedAt: string;
  description: ReactNode;
  sections: LegalSection[];
};

type AsideSection = {
  title: string;
  content: ReactNode;
  action?: {
    href: string;
    label: string;
  };
};

type BlogArticlePageProps = {
  post: BlogPost;
  quickSummary: ReactNode;
  asideSections: AsideSection[];
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, description, panel }: PageIntroProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.shell} ${styles.heroGrid} ${panel ? "" : styles.heroGridSolo}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          <div className={styles.heroLead}>{description}</div>
        </div>
        {panel ? <aside className={styles.panel}>{panel}</aside> : null}
      </div>
    </section>
  );
}

export function ActionBanner({
  eyebrow,
  title,
  description,
  href,
  label,
}: ActionBannerProps) {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.ctaCard}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaCopy}>{description}</p>
          <LinkButton href={href} label={label} />
        </div>
      </div>
    </section>
  );
}

export function LegalDocument({
  title,
  updatedAt,
  description,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <PageIntro
        eyebrow="// legal"
        title={title}
        description={description}
        panel={
          <>
            <p className={styles.panelKicker}>Última atualização</p>
            <p className={styles.panelTitle}>{updatedAt}</p>
            <p className={styles.panelBody}>
              Documento institucional da MadeofIA com linguagem clara e sem
              ambiguidade.
            </p>
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.legalCard}>
            {sections.map((section) => (
              <section key={section.title} className={styles.legalSection}>
                <h2>{section.title}</h2>
                <div>{section.body}</div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogArticlePage({
  post,
  quickSummary,
  asideSections,
  children,
}: BlogArticlePageProps) {
  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.shell} ${styles.articleHero}`}>
          <div className={styles.articleHeroCopy}>
            <div className={styles.articleMetaRow}>
              <span className={styles.eyebrow}>// blog post</span>
              <span>{post.publishedLabel}</span>
              <span>{post.readingTime}</span>
              <span>{post.category}</span>
            </div>

            <h1 className={styles.articleTitle}>{post.title}</h1>
            <p className={styles.articleLead}>{post.metaDescription}</p>

            <div className={styles.tagRow}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.shell} ${styles.articleGrid}`}>
          <article className={styles.article}>
            <div className={styles.quickSummary}>
              <p className={styles.eyebrow}>Resumo rápido</p>
              <div>{quickSummary}</div>
            </div>
            <div className={styles.prose}>{children}</div>
          </article>

          <aside className={styles.articleAside}>
            {asideSections.map((section) => (
              <section key={section.title} className={styles.asideCard}>
                <p className={styles.asideTitle}>{section.title}</p>
                <div className={styles.asideBody}>{section.content}</div>
                {section.action ? (
                  <LinkButton href={section.action.href} label={section.action.label} />
                ) : null}
              </section>
            ))}
          </aside>
        </div>
      </section>

      <ActionBanner
        eyebrow="// próxima etapa"
        title="Seu conteúdo também pode vender."
        description="Se o seu site ainda não transforma busca em oportunidade, a estratégia editorial precisa acompanhar o design, a oferta e a conversão."
        href="/contato"
        label="Falar com a MadeofIA"
      />
    </>
  );
}

export { styles as sitePageStyles };
