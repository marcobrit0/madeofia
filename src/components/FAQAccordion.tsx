"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O que diferencia a MadeofIA de uma agência tradicional?",
    a: "Usamos times de agentes de IA especializados para entregar projetos até 3× mais rápido e 70% mais barato que agências tradicionais, sem abrir mão da qualidade.",
  },
  {
    q: "Quantas revisões posso solicitar?",
    a: "Revisões ilimitadas até você aprovar. Trabalhamos em ciclos rápidos de feedback para garantir que o resultado seja exatamente o que você precisa.",
  },
  {
    q: "Posso cancelar ou pausar minha assinatura?",
    a: "Sim, no plano Parceiro Digital você pode pausar ou cancelar a qualquer momento, sem multas ou burocracia.",
  },
  {
    q: "As soluções são seguras e escaláveis?",
    a: "Utilizamos as melhores práticas de segurança e infraestrutura em nuvem (Vercel, AWS, Supabase) para garantir segurança e escalabilidade.",
  },
  {
    q: "Em quanto tempo vocês entregam?",
    a: "O plano Essencial é entregue em 2 semanas. Crescimento em 4 semanas. Produto Digital em 8 semanas. Datas cumpridas ou trabalhamos de graça.",
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
