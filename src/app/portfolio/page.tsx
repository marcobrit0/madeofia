import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio — MadeofIA",
  description: "Cases reais construídos por agentes de IA: CriarRecibo, TextoIA, Bizu.",
};

const cases = [
  {
    name: "CriarRecibo",
    slug: "criarrecibo",
    tag: "SaaS · Fintech",
    tagline: "0 a 3.000 usuários em 60 dias.",
    desc: "Plataforma de geração de recibos digitais para autônomos e MEIs brasileiros. Interface simples, geração em PDF instantânea, histórico de recibos, e compartilhamento via WhatsApp.",
    challenge: "O cliente tinha uma planilha de Excel compartilhada no grupo do WhatsApp. Precisava de um produto real, sem enrolação.",
    solution: "Em 14 dias, entregamos o MVP completo com autenticação, geração de PDF, histórico e compartilhamento. O produto foi ao ar e cresceu organicamente.",
    results: ["3.000 usuários ativos", "60 dias até 3K", "R$0 em ads", "NPS 72"],
    tech: ["Next.js 14", "Supabase", "Stripe", "Vercel", "React PDF"],
    color: "#00FF88",
    year: "2024",
  },
  {
    name: "TextoIA",
    slug: "textoIA",
    tag: "SaaS · Copywriting",
    tagline: "Editor de IA para criadores brasileiros.",
    desc: "Editor de textos com IA para criadores de conteúdo, jornalistas e copywriters brasileiros. Integração com Claude e GPT-4, templates de copy, e exportação para múltiplos formatos.",
    challenge: "Criadores de conteúdo no Brasil não tinham uma ferramenta de IA em português com qualidade profissional e preço acessível.",
    solution: "Construímos uma plataforma SaaS com editor rico, integração dual com Claude e GPT-4, sistema de templates e billing recorrente.",
    results: ["500+ assinantes pagantes", "4.8★ nas reviews", "Trial-to-paid 34%", "Churn mensal 3.2%"],
    tech: ["Next.js 14", "tRPC", "Prisma", "PostgreSQL", "Anthropic API", "Stripe"],
    color: "#0088FF",
    year: "2024",
  },
  {
    name: "Bizu",
    slug: "bizu",
    tag: "EdTech · Mobile",
    tagline: "Flashcards com IA para concursos.",
    desc: "App de flashcards inteligentes para estudantes de concursos públicos brasileiros. O algoritmo de repetição espaçada com IA personaliza a trilha de estudos de cada usuário.",
    challenge: "Estudantes de concursos estudavam com PDFs e cadernos. Precisavam de uma forma inteligente e gamificada de fixar conteúdo.",
    solution: "PWA com experiência de app nativo: flashcards, repetição espaçada, gamificação, e trilhas personalizadas por IA com base no histórico do usuário.",
    results: ["10.000 downloads", "App Store 4.9★", "Retenção D30 68%", "Sessão média 18min"],
    tech: ["Next.js 14 PWA", "OpenAI API", "Supabase", "Vercel", "Zustand"],
    color: "#FF6B00",
    year: "2024",
  },
];

export default function Portfolio() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // portfólio
        </span>
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-[#f0f0f0] leading-tight mb-6">
          Construído.<br />
          <span className="text-[#00FF88]">Enviado.</span><br />
          Crescendo.
        </h1>
        <p className="text-[#555555] text-xl max-w-xl">
          Produtos reais, em produção, com usuários reais. Sem mockup, sem demo, sem desculpa.
        </p>
      </section>

      {/* Cases */}
      <section className="pb-32 max-w-7xl mx-auto px-6 space-y-24">
        {cases.map((c, i) => (
          <div key={c.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            {/* Left: info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#555555]">{c.tag}</span>
                <span className="text-[#1a1a1a]">·</span>
                <span className="font-mono text-xs text-[#555555]">{c.year}</span>
              </div>

              <h2 className="font-mono text-4xl md:text-5xl font-bold mb-3" style={{ color: c.color }}>
                {c.name}
              </h2>
              <p className="font-mono text-sm text-[#f0f0f0] mb-6">{c.tagline}</p>
              <p className="text-[#555555] text-sm leading-relaxed mb-8">{c.desc}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-2">Desafio</p>
                  <p className="text-[#f0f0f0] text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-2">Solução</p>
                  <p className="text-[#f0f0f0] text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-8">
                {c.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 border border-[#1a1a1a] text-[#555555]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: results */}
            <div className="border border-[#1a1a1a] p-8" style={{ borderTopColor: c.color, borderTopWidth: 2 }}>
              <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-6">Resultados</p>
              <div className="grid grid-cols-2 gap-6">
                {c.results.map((r) => {
                  const [num, ...rest] = r.split(" ");
                  return (
                    <div key={r}>
                      <p className="font-mono text-2xl font-bold" style={{ color: c.color }}>{num}</p>
                      <p className="font-mono text-xs text-[#555555] mt-1">{rest.join(" ")}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
                <Link
                  href="/contato"
                  className="block text-center font-mono text-xs uppercase tracking-widest py-3 border border-[#1a1a1a] text-[#555555] hover:border-[#00FF88] hover:text-[#00FF88] transition-all"
                >
                  Quero algo parecido →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-[#1a1a1a] text-center px-6">
        <p className="font-mono text-xs text-[#00FF88] uppercase tracking-widest mb-4">// próximo</p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-6">
          Seu produto aqui.
        </h2>
        <p className="text-[#555555] mb-8 max-w-md mx-auto">
          Vamos construir o próximo case de sucesso juntos. Fale com o time.
        </p>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest px-8 py-4 bg-[#00FF88] text-[#080808] font-bold hover:bg-[#00FF88]/90 transition-colors"
        >
          Começar agora →
        </Link>
      </section>

      <Footer />
    </>
  );
}
