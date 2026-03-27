import Link from "next/link";
import BrandMark from "./BrandMark";
import styles from "./site-chrome.module.css";

const companyLinks = [
  { href: "/#processo", label: "Processo" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const resourceLinks = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", external: true },
  { href: "https://www.instagram.com/", label: "Instagram", external: true },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLine} />
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <Link href="/" aria-label="Início da MadeofIA" className={styles.brandMark}>
            <BrandMark />
          </Link>
          <div className={styles.footerMeta}>
            <p>MadeofIA</p>
            <p>CNPJ 65.599.230/0001-64</p>
            <p>Brasil - 100% remoto</p>
            <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          {companyLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerLinks}>
          {resourceLinks.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className={styles.footerMeta}>
          <p>© 2026 MadeofIA.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
