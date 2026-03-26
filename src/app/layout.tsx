import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interTight = localFont({
  src: "./fonts/inter-tight-400.woff2",
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-400.woff2",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MadeofIA — Sua Equipe de Agentes de IA | Desenvolvimento Web e Produto Digital",
  description:
    "Desenvolvimento web, SEO e produto digital executado por agentes de IA. Sites a partir de R$15.000. Mais rápido e mais barato que qualquer agência tradicional.",
  keywords: ["agência IA", "agentes de IA", "desenvolvimento web", "SEO", "produto digital", "landing page", "e-commerce", "MVP"],
  openGraph: {
    title: "MadeofIA — Sua Equipe de Agentes de IA | Desenvolvimento Web e Produto Digital",
    description:
      "Desenvolvimento web, SEO e produto digital executado por agentes de IA. Sites a partir de R$15.000.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${spaceGrotesk.variable}`}
      style={{ ["--font-body" as string]: "var(--font-display)" }}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
