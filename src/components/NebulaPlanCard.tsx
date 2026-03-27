import homeStyles from "@/app/page.module.css";
import { NebulaLinkButton } from "./NebulaButton";
import uiStyles from "./site-primitives.module.css";

export default function NebulaPlanCard({
  name,
  price,
  period,
  tagline,
  description,
  features,
  ctaLabel,
  href,
  popular = false,
}: {
  name: string;
  price: string;
  period: string;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  href: string;
  popular?: boolean;
}) {
  return (
    <article
      className={`${homeStyles.planCard} ${popular ? homeStyles.planCardFeatured : ""}`}
    >
      <div className={homeStyles.planHeader}>
        <div>
          <h3>{name}</h3>
          <div className={homeStyles.planPrice}>{price}</div>
          <div className={homeStyles.planPeriod}>{period}</div>
        </div>
        {popular ? <span className={homeStyles.planBadge}>Popular</span> : null}
      </div>

      <div className={homeStyles.planDivider} />

      <div className={uiStyles.panelStack}>
        <p className={uiStyles.statLabel} style={{ color: "var(--nebula-accent)" }}>
          {tagline}
        </p>
        <p className={uiStyles.panelText}>
          {description}
        </p>
      </div>

      <ul className={homeStyles.planFeatures}>
        {features.map((feature) => (
          <li key={feature}>
            <span className={homeStyles.featureDot} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <NebulaLinkButton href={href} label={ctaLabel} variant="plan" showArrow />
    </article>
  );
}
