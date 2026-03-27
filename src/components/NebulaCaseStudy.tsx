import { NebulaLinkButton } from "./NebulaButton";
import NebulaPanel from "./NebulaPanel";
import styles from "./site-primitives.module.css";

type CaseMetric = {
  value: string;
  label: string;
};

type NebulaCaseStudyProps = {
  name: string;
  tag: string;
  year: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: CaseMetric[];
  tech: string[];
  color: string;
  reverse?: boolean;
};

export default function NebulaCaseStudy({
  name,
  tag,
  year,
  tagline,
  description,
  challenge,
  solution,
  results,
  tech,
  color,
  reverse = false,
}: NebulaCaseStudyProps) {
  return (
    <article
      className={`${styles.caseStudy} ${reverse ? styles.caseStudyReverse : ""}`.trim()}
    >
      <div className={styles.caseCopy}>
        <div className={styles.metaRow}>
          <span className={styles.metaText}>{tag}</span>
          <span className={styles.metaText}>{year}</span>
        </div>

        <h2 className={styles.caseTitle} style={{ color }}>
          {name}
        </h2>
        <p className={styles.caseTagline}>{tagline}</p>
        <p className={styles.caseDescription}>{description}</p>

        <div className={styles.caseSection}>
          <p className={styles.caseSectionLabel}>Desafio</p>
          <p className={styles.caseSectionText}>{challenge}</p>
        </div>

        <div className={styles.caseSection}>
          <p className={styles.caseSectionLabel}>Solução</p>
          <p className={styles.caseSectionText}>{solution}</p>
        </div>

        <div className={styles.pillList}>
          {tech.map((item) => (
            <span key={item} className={styles.pill}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.caseMetrics}>
        <NebulaPanel
          eyebrow="Resultados"
          accentColor={color}
          footer={
            <NebulaLinkButton
              href="/contato"
              label="Quero algo parecido"
              variant="secondary"
              showArrow
              className="w-full justify-center"
            />
          }
        >
          <div className={styles.statGrid}>
            {results.map((result) => (
              <div key={`${result.value}-${result.label}`} className={styles.statItem}>
                <p className={styles.statValue}>{result.value}</p>
                <p className={styles.statLabel}>{result.label}</p>
              </div>
            ))}
          </div>
        </NebulaPanel>
      </div>
    </article>
  );
}
