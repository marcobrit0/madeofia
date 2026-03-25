import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const caseStudies = [
  {
    name: "CriarRecibo",
    tag: "SaaS · Fintech",
    desc: "Plataforma de geração de recibos digitais para autônomos e MEIs. 0 a 3.000 usuários em 60 dias.",
    metrics: ["3K usuários", "60 dias", "R$0 ad spend"],
    color: "#00FF88",
  },
  {
    name: "TextoIA",
    tag: "SaaS · Copywriting",
    desc: "Editor de textos com IA para criadores de conteúdo brasileiros. Integração com GPT-4 e Claude.",
    metrics: ["500+ assinantes", "4.8★ rating", "14-day trial"],
    color: "#0088FF",
  },
  {
    name: "Bizu",
    tag: "EdTech · Mobile",
    desc: "App de flashcards com IA para estudantes de concursos públicos. Personalização via machine learning.",
    metrics: ["10K downloads", "App Store 4.9★", "Retenção 68%"],
    color: "#FF6B00",
  },
];

const services = [
  {
    tier: "Essencial",
    price: "R$15K",
    period: "projeto",
    desc: "Site institucional ou landing page de alta conversão. Perfeito para começar.",
    items: ["Site completo em Next.js", "Design customizado", "SEO técnico", "Deploy + domínio", "2 semanas de entrega"],
    highlight: false,
  },
  {
    tier: "Crescimento",
    price: "R$25K",
    period: "projeto",
    desc: "Site com área de membros, blog, e integrações. Escale sua presença digital.",
    items: ["Tudo do Essencial", "Área de membros", "Blog/CMS", "Integração CRM", "Analytics avançado"],
    highlight: true,
  },
  {
    tier: "Produto Digital",
    price: "R$45K",
    period: "projeto",
    desc: "MVP completo de SaaS, marketplace ou app. Do zero ao produto em produção.",
    items: ["Tudo do Crescimento", "Autenticação + billing", "Dashboard admin", "API REST", "Infraestrutura cloud"],
    highlight: false,
  },
  {
    tier: "Parceiro Digital",
    price: "R$7K",
    period: "/mês",
    desc: "Time de IA dedicado. Iterações contínuas, manutenção, evolução do produto.",
    items: ["Time dedicado", "Sprint mensal", "Prioridade máxima", "Reunião semanal", "Suporte 5×8"],
    highlight: false,
  },
];

const agentTeam = [
  { role: "CEO Agente", emoji: "🧠", desc: "Estratégia, produto, priorização" },
  { role: "CTO Agente", emoji: "⚡", desc: "Arquitetura, código, deploy" },
  { role: "CMO Agente", emoji: "📣", desc: "Copy, SEO, conteúdo" },
  { role: "Designer Agente", emoji: "🎨", desc: "UI/UX, protótipos, brand" },
  { role: "Exec Assistant", emoji: "🗂️", desc: "Coordenação, follow-up, docs" },
];

const traditional = [
  "Designer Sênior — R$12K/mês",
  "Desenvolvedor Full-stack — R$18K/mês",
  "Gerente de Projeto — R$10K/mês",
  "Account Manager — R$8K/mês",
  "Overhead de agência — 30%",
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#00FF88 1px, transparent 1px), linear-gradient(90deg, #00FF88 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="mb-6 inline-flex items-center gap-2 border border-[#1a1a1a] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="font-mono text-xs text-[#555555] uppercase tracking-widest">
              Agentes online · Prontos para trabalhar
            </span>
          </div>

          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <span className="text-[#f0f0f0]">Seu próprio</span>
            <br />
            <span className="text-[#00FF88]" style={{ textShadow: "0 0 40px rgba(0,255,136,0.4)" }}>
              time de agentes
            </span>
            <br />
            <span className="text-[#f0f0f0]">de IA.</span>
          </h1>

          <p className="text-[#555555] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            CEO, CTO, CMO, Designer e Executive Assistant — todos agentes de IA
            trabalhando juntos para construir seu produto digital a uma fração
            do custo de uma agência tradicional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest px-8 py-4 bg-[#00FF88] text-[#080808] font-bold hover:bg-[#00FF88]/90 transition-colors"
            >
              Começar agora →
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest px-8 py-4 border border-[#1a1a1a] text-[#555555] hover:border-[#00FF88] hover:text-[#00FF88] transition-all"
            >
              Ver portfólio
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-[#1a1a1a] pt-12 max-w-lg">
            {[
              { val: "3×", label: "mais rápido" },
              { val: "70%", label: "mais barato" },
              { val: "24/7", label: "disponível" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-mono text-3xl font-bold text-[#00FF88]">{s.val}</p>
                <p className="text-[#555555] text-xs mt-1 font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-[#1a1a1a] overflow-hidden py-4">
        <div className="flex gap-12 w-max" style={{ animation: "marquee 25s linear infinite" }}>
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Claude", "GPT-4", "Framer", "Figma", "Stripe", "Supabase", "PostgreSQL"].map((t) => (
              <span key={`${t}-${i}`} className="font-mono text-xs uppercase tracking-widest text-[#333333] whitespace-nowrap">
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── THE TEAM ── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // time
        </span>
        <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6 text-[#f0f0f0]">
          5 agentes.<br />1 missão.
        </h2>
        <p className="text-[#555555] text-lg max-w-lg mb-16">
          Cada agente tem especialização profunda e trabalha em sincronia. Sem briefing perdido, sem handoff quebrado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agentTeam.map((a) => (
            <div key={a.role} className="card-hover border border-[#1a1a1a] p-6 bg-[#080808] group">
              <div className="text-3xl mb-4">{a.emoji}</div>
              <p className="font-mono text-sm font-bold text-[#f0f0f0] mb-2 group-hover:text-[#00FF88] transition-colors">
                {a.role}
              </p>
              <p className="text-[#555555] text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-32 border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
            // comparação
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-16 text-[#f0f0f0]">
            Agência tradicional<br />vs MadeofIA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#1a1a1a] p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-6">
                Agência Tradicional
              </p>
              <ul className="space-y-3 mb-8">
                {traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#555555] text-sm">
                    <span className="text-[#333333]">×</span>
                    <span className="font-mono">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#1a1a1a] pt-6">
                <p className="font-mono text-sm text-[#555555]">Total mensal</p>
                <p className="font-mono text-3xl font-bold text-[#555555] line-through mt-1">
                  R$50–100K/mês
                </p>
              </div>
            </div>

            <div className="border border-[#00FF88]/30 p-8 relative" style={{ background: "rgba(0,255,136,0.02)" }}>
              <div className="absolute -top-px left-6 right-6 h-px bg-[#00FF88]" />
              <p className="font-mono text-xs uppercase tracking-widest text-[#00FF88] mb-6">
                MadeofIA
              </p>
              <ul className="space-y-3 mb-8">
                {agentTeam.map((a) => (
                  <li key={a.role} className="flex items-center gap-3 text-sm">
                    <span className="text-[#00FF88]">✓</span>
                    <span className="font-mono text-[#f0f0f0]">
                      {a.role} — {a.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#1a1a1a] pt-6">
                <p className="font-mono text-sm text-[#555555]">A partir de</p>
                <p className="font-mono text-3xl font-bold text-[#00FF88] mt-1">
                  R$15K/projeto
                </p>
                <p className="font-mono text-xs text-[#555555] mt-1">ou R$7K/mês no plano recorrente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
              // portfólio
            </span>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#f0f0f0]">
              Já construído.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center font-mono text-xs uppercase tracking-widest text-[#555555] hover:text-[#00FF88] transition-colors gap-2"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.name} className="card-hover border border-[#1a1a1a] overflow-hidden group">
              <div className="h-1" style={{ backgroundColor: cs.color }} />
              <div className="p-8">
                <span className="font-mono text-xs text-[#555555] uppercase tracking-widest">{cs.tag}</span>
                <h3 className="font-mono text-2xl font-bold mt-3 mb-4 text-[#f0f0f0] group-hover:text-[#00FF88] transition-colors">
                  {cs.name}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-6">{cs.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.metrics.map((m) => (
                    <span key={m} className="font-mono text-xs px-2 py-1 border border-[#1a1a1a] text-[#555555]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-32 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
            // planos
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4 text-[#f0f0f0]">
            Transparente.<br />Sem surpresas.
          </h2>
          <p className="text-[#555555] text-lg mb-16 max-w-lg">
            Preços fixos, escopo claro, entrega garantida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                key={s.tier}
                className={`card-hover border p-6 relative ${
                  s.highlight ? "border-[#00FF88]/40" : "border-[#1a1a1a]"
                }`}
                style={s.highlight ? { background: "rgba(0,255,136,0.02)" } : {}}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="font-mono text-xs bg-[#00FF88] text-[#080808] px-3 py-1 font-bold uppercase">
                      Popular
                    </span>
                  </div>
                )}
                <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-3">{s.tier}</p>
                <div className="mb-4">
                  <span className="font-mono text-3xl font-bold text-[#f0f0f0]">{s.price}</span>
                  <span className="font-mono text-xs text-[#555555] ml-1">{s.period}</span>
                </div>
                <p className="text-[#555555] text-xs leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#555555] font-mono">
                      <span className="text-[#00FF88]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contato"
                  className={`block text-center font-mono text-xs uppercase tracking-widest py-3 border transition-all ${
                    s.highlight
                      ? "border-[#00FF88] text-[#080808] bg-[#00FF88] hover:bg-transparent hover:text-[#00FF88]"
                      : "border-[#1a1a1a] text-[#555555] hover:border-[#00FF88] hover:text-[#00FF88]"
                  }`}
                >
                  Contratar
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/servicos"
              className="font-mono text-xs uppercase tracking-widest text-[#555555] hover:text-[#00FF88] transition-colors"
            >
              Ver todos os planos e detalhes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // depoimentos
        </span>
        <h2 className="font-mono text-4xl md:text-5xl font-bold mb-16 text-[#f0f0f0]">
          O que dizem.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Lucas M.",
              role: "CEO, CriarRecibo",
              text: '"Achei que demoraria meses. O time da MadeofIA entregou em 3 semanas. O produto está em produção e já tem 3K usuários."',
            },
            {
              name: "Ana P.",
              role: "Fundadora, TextoIA",
              text: '"A qualidade do código e do design superou qualquer agência que eu tinha contratado antes. E custou 4× menos."',
            },
            {
              name: "Rafael K.",
              role: "CTO, Bizu",
              text: '"O diferencial é a velocidade de iteração. Uma mudança que levaria semanas ficou pronta em um dia."',
            },
          ].map((t) => (
            <div key={t.name} className="card-hover border border-[#1a1a1a] p-8">
              <p className="text-[#f0f0f0] text-sm leading-relaxed mb-6 italic">{t.text}</p>
              <div className="border-t border-[#1a1a1a] pt-4">
                <p className="font-mono text-sm font-bold text-[#f0f0f0]">{t.name}</p>
                <p className="font-mono text-xs text-[#555555] mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 border-t border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,255,136,0.02)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #00FF88, transparent)" }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#00FF88] mb-6">
            // próximo passo
          </p>
          <h2 className="font-mono text-4xl md:text-6xl font-bold text-[#f0f0f0] mb-6 leading-tight">
            Pronto para ter um<br />
            <span className="text-[#00FF88]" style={{ textShadow: "0 0 40px rgba(0,255,136,0.4)" }}>
              time de IA
            </span>{" "}
            seu?
          </h2>
          <p className="text-[#555555] text-lg mb-10 max-w-lg mx-auto">
            Agende uma conversa de 30 minutos. Sem compromisso, sem pitch. Só clareza.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest px-10 py-5 bg-[#00FF88] text-[#080808] font-bold hover:bg-[#00FF88]/90 transition-colors"
          >
            Falar com o time →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
