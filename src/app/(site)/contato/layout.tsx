import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contato — MadeofIA",
  description:
    "Fale com a MadeofIA sobre desenvolvimento web, SEO e produto digital. Envie seu briefing e receba os próximos passos.",
  path: "/contato",
  keywords: ["contato", "briefing", "orçamento de site", "agência IA"],
});

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
