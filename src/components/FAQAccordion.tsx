"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quanto custa criar um site profissional?",
    a: "Depende do escopo. Um site institucional começa em R$15.000 e um produto digital pode chegar a R$45.000. Comparado com agências tradicionais que cobram R$30-60K por um site similar, nossos preços são significativamente mais acessíveis — sem sacrificar qualidade.",
  },
  {
    q: "Como funciona o processo com agentes de IA?",
    a: "Nossos agentes de IA são especializados: uma CEO que analisa e estrutura seu projeto, um CTO que escreve código de produção, e uma CMO que cuida do SEO e conteúdo. Você conversa com a gente, e os agentes executam. Simples assim.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Um site institucional fica pronto em 2-3 semanas. Um produto digital (MVP) leva 4-6 semanas. Muito mais rápido que os 2-4 meses de uma agência tradicional.",
  },
  {
    q: "Vocês usam templates prontos?",
    a: "Não. Cada projeto é desenvolvido do zero com código limpo (Next.js, React, Tailwind). Nada de WordPress, Wix ou construtores visuais.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Iteramos até você aprovar. Dentro do escopo do projeto, não há limite de revisões. Nosso objetivo é entregar algo que você tenha orgulho de mostrar.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((f, i) => (
        <div
          key={i}
          className={`border-b border-white/8 ${i === 0 ? "border-t border-white/8" : ""}`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full py-5 flex items-center justify-between gap-4 text-left"
          >
            <span className="text-white/80 text-sm font-medium">{f.q}</span>
            <span
              className="shrink-0 w-5 h-5 rounded-full border border-white/15 flex items-center justify-center text-white/40 text-sm transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="pb-5">
              <p className="text-white/40 text-sm leading-relaxed">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
