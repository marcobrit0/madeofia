"use client";

import { useState } from "react";

const caseStudies = [
  {
    year: "2024",
    name: "CriarRecibo",
    type: "SaaS · Fintech",
    desc: "Gerador de recibos online para MEIs brasileiros. 10 landing pages otimizadas para SEO, geração de PDF no navegador, 180K+ buscas mensais no nicho.",
    metrics: ["180K+ buscas/mês", "10 landing pages SEO", "R$0 ad spend"],
    color: "#4ade80",
    initials: "CR",
    url: "criarrecibo.com.br",
  },
  {
    year: "2024",
    name: "TextoIA",
    type: "SaaS · Copywriting",
    desc: "Ferramenta de escrita com IA para o mercado brasileiro. Corretor, gerador e aprimorador de texto com SEO orgânico como motor de crescimento.",
    metrics: ["500+ assinantes", "4.8★ rating", "SEO orgânico"],
    color: "#22d3ee",
    initials: "TX",
    url: "textoia.com.br",
  },
  {
    year: "2024",
    name: "Bizu",
    type: "Chat · IA",
    desc: "Plataforma de chat com IA para o Brasil. Interface em português, integração com modelos de linguagem e pagamento via PIX.",
    metrics: ["Chat em português", "Pagamento PIX", "LLM integrado"],
    color: "#a78bfa",
    initials: "BZ",
    url: "bizu.chat",
  },
];

export function PortfolioSection() {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
      {/* Left: row list */}
      <div className="border-t border-white/8">
        {caseStudies.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setActive(i)}
            className={`w-full text-left py-6 border-b border-white/8 flex items-center justify-between gap-4 group transition-colors duration-200 ${active === i ? "" : "hover:bg-white/[0.02]"}`}
          >
            <div className="flex items-start gap-5">
              <span className="font-mono text-white/20 text-xs pt-0.5 w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-white/30 text-xs mb-1.5 font-mono">
                  {c.year} · {c.type}
                </p>
                <h3
                  className={`font-semibold text-base transition-colors duration-200 ${
                    active === i ? "text-[#4ade80]" : "text-white group-hover:text-white/80"
                  }`}
                >
                  {c.name}
                </h3>
                <div className="flex gap-3 mt-2 flex-wrap">
                  {c.metrics.map((m) => (
                    <span key={m} className="text-xs text-white/25 font-mono">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span
              className={`text-sm transition-all duration-200 ${
                active === i
                  ? "text-[#4ade80] translate-x-1"
                  : "text-white/20 group-hover:text-white/40"
              }`}
            >
              →
            </span>
          </button>
        ))}
      </div>

      {/* Right: preview panel */}
      <div className="lg:sticky lg:top-28 rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
        {/* Browser chrome bar */}
        <div className="border-b border-white/8 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 bg-white/[0.04] rounded-md px-3 py-1 mx-4">
            <span className="text-white/20 text-xs font-mono">
              {cs.url}
            </span>
          </div>
        </div>

        {/* Preview content */}
        <div
          className="h-64 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${cs.color}12 0%, transparent 70%)`,
          }}
        >
          <span
            className="text-7xl font-bold font-mono select-none transition-all duration-300"
            style={{
              color: cs.color,
              opacity: 0.15,
              letterSpacing: "-0.05em",
            }}
          >
            {cs.initials}
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <span
              className="text-3xl font-bold mb-2 transition-colors duration-300"
              style={{ color: cs.color }}
            >
              {cs.metrics[0]}
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">{cs.desc}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/8 px-6 py-4 flex items-center justify-between">
          <span className="text-white/30 text-xs font-mono">{cs.type}</span>
          <span className="text-white/20 text-xs font-mono">{cs.year}</span>
        </div>
      </div>
    </div>
  );
}
