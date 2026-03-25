import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="pt-BR" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
