import type { CSSProperties, ReactNode } from "react";
import styles from "./site-primitives.module.css";

type NebulaPanelProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  accentColor?: string;
  className?: string;
  bodyClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
  compactTitle?: boolean;
  children?: ReactNode;
};

export default function NebulaPanel({
  eyebrow,
  title,
  description,
  accentColor,
  className = "",
  bodyClassName = "",
  footer,
  footerClassName = "",
  compactTitle = false,
  children,
}: NebulaPanelProps) {
  const style = accentColor
    ? ({ "--panel-accent": accentColor } as CSSProperties)
    : undefined;

  return (
    <article
      className={`${styles.panel} ${className}`.trim()}
      style={style}
    >
      {eyebrow || title || description ? (
        <header className={styles.panelHeader}>
          {eyebrow ? <p className={styles.panelEyebrow}>{eyebrow}</p> : null}
          {title ? (
            <h3
              className={`${styles.panelTitle} ${compactTitle ? styles.panelTitleCompact : ""}`.trim()}
            >
              {title}
            </h3>
          ) : null}
          {description ? <p className={styles.panelText}>{description}</p> : null}
        </header>
      ) : null}

      {children ? (
        <div className={`${styles.panelBody} ${bodyClassName}`.trim()}>
          {children}
        </div>
      ) : null}

      {footer ? (
        <div className={`${styles.panelFooter} ${footerClassName}`.trim()}>
          {footer}
        </div>
      ) : null}
    </article>
  );
}
