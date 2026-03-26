"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#processo", label: "Processo" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos" },
];

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Sao_Paulo",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080807]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand + contact */}
          <div className="md:col-span-1">
            <div className="font-mono text-base font-bold mb-6 flex items-center gap-0">
              <span className="text-white">madeofIA</span>
              <span className="text-[#4ade80] animate-[blink_1s_step-end_infinite]">_</span>
            </div>
            <div className="space-y-3 text-sm text-white/45">
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:ola@madeofia.com" className="hover:text-white transition-colors">
                  ola@madeofia.com ↗
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">CNPJ</p>
                <p>65.599.230/0001-64</p>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Horário local</p>
                <p className="font-mono">
                  <LocalTime /> (BRT)
                </p>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-4">Navegação</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-4">Redes</p>
            <ul className="space-y-3">
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter / X", href: "https://x.com" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 MadeofIA. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-xs">CNPJ 65.599.230/0001-64</p>
        </div>
      </div>
    </footer>
  );
}
