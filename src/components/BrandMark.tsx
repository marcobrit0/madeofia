import styles from "./site-chrome.module.css";

export default function BrandMark() {
  return (
    <span className={styles.brandMark}>
      <span className={styles.brandWord}>madeofIA</span>
      <span className={styles.brandCursor}>_</span>
    </span>
  );
}
