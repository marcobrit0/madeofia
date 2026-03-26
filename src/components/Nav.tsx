"use client";

import homeStyles from "@/app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import { LinkButton } from "./SiteButton";

const homeAnchors = [
  { href: "/#processo", label: "Processo" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }

  if (href.startsWith("/#")) {
    return false;
  }

  return pathname === href;
}

export default function Nav() {
  const pathname = usePathname() ?? "/";

  return (
    <>
      <nav className={homeStyles.desktopNav}>
        <Link className={homeStyles.logo} href="/" aria-label="MadeofIA home">
          <BrandMark />
        </Link>

        <div className={homeStyles.navPill}>
          {homeAnchors.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={
                isActive(pathname, link.href)
                  ? { color: "rgba(255,255,255,0.92)" }
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <LinkButton href="/contato" label="Começar projeto" variant="buy" />
      </nav>

      <details className={homeStyles.mobileNav}>
        <summary className={homeStyles.mobileSummary}>
          <span className={homeStyles.logo}>
            <BrandMark />
          </span>
          <span className={homeStyles.burger} aria-hidden="true">
            <span />
            <span />
          </span>
        </summary>

        <div className={homeStyles.mobileMenu}>
          {homeAnchors.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </>
  );
}
