import Link from "next/link";
import styles from "./site-primitives.module.css";

type NebulaArticleCardProps = {
  href: string;
  eyebrow?: string;
  meta?: string[];
  title: string;
  description: string;
  tags?: string[];
  ctaLabel: string;
  featured?: boolean;
  className?: string;
};

export default function NebulaArticleCard({
  href,
  eyebrow,
  meta = [],
  title,
  description,
  tags = [],
  ctaLabel,
  featured = false,
  className = "",
}: NebulaArticleCardProps) {
  const TitleTag = featured ? "h2" : "h3";

  return (
    <Link
      href={href}
      className={`${styles.articleCard} ${featured ? styles.articleCardFeatured : ""} ${className}`.trim()}
    >
      <div className={styles.metaRow}>
        {eyebrow ? <span className={`${styles.metaText} ${styles.metaAccent}`}>{eyebrow}</span> : null}
        {meta.map((item) => (
          <span key={item} className={styles.metaText}>
            {item}
          </span>
        ))}
      </div>

      <TitleTag
        className={`${styles.articleTitle} ${featured ? styles.articleTitleFeatured : ""}`.trim()}
      >
        {title}
      </TitleTag>

      <p className={styles.articleDescription}>{description}</p>

      {tags.length ? (
        <div className={styles.pillList}>
          {tags.map((tag) => (
            <span key={tag} className={styles.pill}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <span className={styles.articleCta}>{ctaLabel}</span>
    </Link>
  );
}
