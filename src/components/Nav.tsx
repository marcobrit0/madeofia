"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#processo", label: "Processo" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#planos", label: "Planos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080807]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 select-none">
          <span className="font-mono text-[15px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            madeofIA
          </span>
          <span className="font-mono text-[15px] font-bold text-[#4ade80] animate-[blink_1s_step-end_infinite]">
            _
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/45 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA pill */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="text-sm px-5 py-2 rounded-full bg-white text-[#080807] font-medium hover:bg-white/90 transition-colors duration-200"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#080807]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 pt-3 flex flex-col gap-1">
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
            className="mt-3 block text-center text-sm px-5 py-3 rounded-full bg-white text-[#080807] font-medium"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </nav>
  );
}
