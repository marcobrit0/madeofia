"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#processo", label: "Processo" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#planos", label: "Planos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Desktop: floating centered glass pill ── */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-2 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-xl shadow-black/30">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 select-none px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors">
          <span className="font-mono text-sm font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            madeofIA
          </span>
          <span className="font-mono text-sm font-bold text-[#4ade80] animate-[blink_1s_step-end_infinite]">
            _
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* Nav links */}
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs text-white/45 hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-white/5"
          >
            {l.label}
          </a>
        ))}

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* CTA */}
        <a
          href="#contato"
          className="text-xs px-4 py-2 rounded-full bg-[#4ade80] text-[#080807] font-semibold hover:bg-[#4ade80]/85 transition-all duration-200"
        >
          Fale conosco
        </a>
      </nav>

      {/* ── Mobile: top glass bar ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#080807]/85 backdrop-blur-xl border-b border-white/5">
        <div className="px-5 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0 select-none">
            <span className="font-mono text-sm font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
              madeofIA
            </span>
            <span className="font-mono text-sm font-bold text-[#4ade80] animate-[blink_1s_step-end_infinite]">
              _
            </span>
          </Link>

          <button
            className="flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-[#080807]/95 backdrop-blur-xl border-b border-white/5 px-5 pb-5 pt-2 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-white/50 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center text-sm px-5 py-3 rounded-full bg-[#4ade80] text-[#080807] font-semibold"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
