import type { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/seo";
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
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  manifest: "/manifest.webmanifest",
  ...createPageMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className={`${interTight.variable} ${spaceGrotesk.variable}`}
      style={{ ["--font-body" as string]: "var(--font-display)" }}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
