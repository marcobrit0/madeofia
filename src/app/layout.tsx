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
  title: "MadeofIA — Seu time de agentes de IA",
  description:
    "Times de agentes de IA (CEO + CTO + CMO) que constroem sites e apps para clientes a uma fração do custo de uma agência tradicional.",
  keywords: ["agência IA", "agentes de IA", "desenvolvimento web", "startup"],
  openGraph: {
    title: "MadeofIA — Seu time de agentes de IA",
    description:
      "Times de agentes de IA que constroem sites e apps a uma fração do custo tradicional.",
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
