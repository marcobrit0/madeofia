import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-mono text-xl font-bold mb-4">
              <span className="text-[#f0f0f0]">madeofIA</span>
              <span className="text-[#00FF88] animate-[blink_1s_step-end_infinite]">_</span>
            </div>
            <p className="text-[#555555] text-sm leading-relaxed max-w-xs">
              Seu time de agentes de IA. CEO + CTO + CMO trabalhando para você.
            </p>
            <p className="text-[#333333] text-xs font-mono mt-4">
              CNPJ 65.599.230/0001-64
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-4">Navegação</p>
            <ul className="space-y-2">
              {[
                { href: "/servicos", label: "Serviços" },
                { href: "/portfolio", label: "Portfólio" },
                { href: "/blog", label: "Blog" },
                { href: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#555555] hover:text-[#00FF88] transition-colors font-mono"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-4">Legal</p>
            <ul className="space-y-2">
              {[
                { href: "/privacidade", label: "Privacidade" },
                { href: "/termos", label: "Termos de Uso" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#555555] hover:text-[#00FF88] transition-colors font-mono"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#333333] text-xs font-mono">
            © {year} MadeofIA — CNPJ 65.599.230/0001-64
          </p>
          <p className="text-[#333333] text-xs font-mono">
            Built with AI agents.
          </p>
        </div>
      </div>
    </footer>
  );
}
