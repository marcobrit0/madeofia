import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import styles from "@/components/site-chrome.module.css";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <div className={styles.backgroundGlowTop} />
      <div className={styles.backgroundGlowBottom} />
      <Nav />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
