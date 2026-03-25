"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#1a1a1a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-lg font-bold tracking-tight flex items-center gap-0">
          <span className="text-[#f0f0f0]">madeofIA</span>
          <span className="text-[#00FF88] animate-[blink_1s_step-end_infinite]">_</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                pathname === l.href
                  ? "text-[#00FF88]"
                  : "text-[#555555] hover:text-[#f0f0f0]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-[#080808] transition-all duration-200"
          >
            Falar com IA
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808] border-b border-[#1a1a1a] px-6 pb-6 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 font-mono text-xs uppercase tracking-widest border-b border-[#1a1a1a] ${
                pathname === l.href ? "text-[#00FF88]" : "text-[#555555]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center font-mono text-xs uppercase tracking-widest px-4 py-3 border border-[#00FF88] text-[#00FF88]"
          >
            Falar com IA
          </Link>
        </div>
      )}
    </nav>
  );
}
