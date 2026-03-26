"use client";

import homeStyles from "@/app/page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandMark from "./BrandMark";

const homeAnchors = [
  { href: "/#processo", label: "Processo" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
];

const ARROW_ICON = "https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png";

const arrowHoverVariants = {
  rest: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  hover: {
    rotate: 45,
    x: 2,
    y: -2,
  },
};

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
  const [contactHovered, setContactHovered] = useState(false);

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

        <motion.div
          onHoverStart={() => setContactHovered(true)}
          onHoverEnd={() => setContactHovered(false)}
          whileHover={{
            scale: 1.015,
            transition: {
              duration: 0.18,
            },
          }}
        >
          <Link
            href="/contato"
            className={`${homeStyles.buyButton} ${homeStyles.ctaButton}`}
          >
            <span className={homeStyles.ctaGlow} aria-hidden="true" />
            <span className={homeStyles.ctaBorder} aria-hidden="true" />
            <span className={homeStyles.ctaFill} aria-hidden="true" />
            <span className={homeStyles.ctaContent}>
              <span className={homeStyles.ctaLabelText}>Contato</span>
              <motion.span className={homeStyles.ctaIcon} animate={contactHovered ? "hover" : "rest"} variants={arrowHoverVariants}>
                <motion.img
                  src={ARROW_ICON}
                  alt=""
                  aria-hidden="true"
                  className={homeStyles.buttonArrow}
                />
              </motion.span>
            </span>
          </Link>
        </motion.div>
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
          <Link href="/contato">Contato</Link>
        </div>
      </details>
    </>
  );
}
