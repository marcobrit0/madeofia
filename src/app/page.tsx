import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ── DATA ─────────────────────────────────────────────── */

const processSteps = [
  {
    num: "01",
    title: "Escolha seu plano",
    desc: "Escolha o plano ideal para começar e pause ou cancele quando quiser. Tanta flexibilidade quanto seu negócio precisa.",
  },
  {
    num: "02",
    title: "Solicite",
    desc: "Comece a solicitar os sites e web apps que precisa — nossos agentes de IA estão lá para transformar suas ideias em realidade.",
  },
  {
    num: "03",
    title: "Construímos",
    desc: "Nossos agentes começam a construir rapidamente, priorizando velocidade sem comprometer a qualidade.",
  },
  {
    num: "04",
    title: "Teste & otimize",
    desc: "Você aprova ou solicita revisões — somos dedicados a refinar até você ficar totalmente satisfeito.",
  },
  {
    num: "05",
    title: "Torne-se líder de mercado",
    desc: "Continue solicitando quantos sites e apps desejar, transformando sua empresa em líder do mercado digital.",
  },
];

const services = [
  {
    tag: "Desenvolvimento",
    title: "Sites & Web Apps",
    desc: "Desenvolvemos sites institucionais, landing pages e web apps completos com as mais modernas tecnologias. Next.js, React, TypeScript — entregue rápido.",
    visual: "dev",
  },
  {
    tag: "Automação",
    title: "Agentes inteligentes",
    desc: "Desenvolvemos agentes de IA que automatizam fluxos de trabalho, respondem clientes, geram conteúdo e muito mais — 24/7.",
    visual: "agent",
  },
  {
    tag: "Consultoria",
    title: "Estratégia em IA",
    desc: "Mergulhamos fundo na sua operação e consultamos como as automações com IA podem transformar seu negócio. +30% eficiência média.",
    visual: "consulting",
  },
];

const caseStudies = [
  {
    year: "2024",
    name: "CriarRecibo",
    type: "SaaS · Fintech",
    desc: "Plataforma de geração de recibos digitais para autônomos e MEIs. Zero a 3.000 usuários em 60 dias.",
    metrics: ["3K usuários", "60 dias", "R$0 ad spend"],
  },
  {
    year: "2024",
    name: "TextoIA",
    type: "SaaS · Copywriting",
    desc: "Editor de textos com IA para criadores de conteúdo brasileiros. Integração com Claude e GPT-4.",
    metrics: ["500+ assinantes", "4.8★ rating", "14-day trial"],
  },
  {
    year: "2024",
    name: "Bizu",
    type: "EdTech · Mobile",
    desc: "App de flashcards com IA para estudantes de concursos. Personalização via machine learning.",
    metrics: ["10K downloads", "App Store 4.9★", "Retenção 68%"],
  },
];

const plans = [
  {
    name: "Essencial",
    price: "R$15K",
    period: "por projeto",
    desc: "Site institucional ou landing page de alta conversão.",
    features: [
      "Site completo em Next.js",
      "Design customizado",
      "SEO técnico",
      "Deploy + domínio",
      "2 semanas de entrega",
    ],
    highlight: false,
    cta: "Começar com Essencial",
  },
  {
    name: "Crescimento",
    price: "R$25K",
    period: "por projeto",
    desc: "Site com área de membros, blog e integrações completas.",
    features: [
      "Tudo do Essencial",
      "Área de membros",
      "Blog / CMS",
      "Integração CRM",
      "Analytics avançado",
    ],
    highlight: false,
    cta: "Começar com Crescimento",
  },
  {
    name: "Produto Digital",
    price: "R$45K",
    period: "por projeto",
    desc: "MVP completo de SaaS, marketplace ou app web.",
    features: [
      "Tudo do Crescimento",
      "Auth + billing",
      "Dashboard admin",
      "API REST",
      "Infraestrutura cloud",
    ],
    highlight: true,
    cta: "Começar com Produto",
  },
  {
    name: "Parceiro Digital",
    price: "R$7K",
    period: "por mês",
    desc: "Time de IA dedicado. Iterações contínuas e manutenção.",
    features: [
      "Time dedicado",
      "Sprint mensal",
      "Prioridade máxima",
      "Reunião semanal",
      "Suporte 5×8",
    ],
    highlight: false,
    cta: "Tornar-se Parceiro",
  },
];

const testimonials = [
  {
    quote: "A MadeofIA aumentou nossa produtividade em 54%. Não consigo recomendar o suficiente — eles nos transformaram numa máquina produtiva!",
    name: "Lucas Mendes",
    role: "CEO — CriarRecibo",
  },
  {
    quote: "O agente de atendimento agora resolve 95% das nossas dúvidas. É um divisor de águas absoluto para o nosso suporte.",
    name: "Ana Pereira",
    role: "CXO — TextoIA",
  },
  {
    quote: "O modelo de assinatura flexível é tão inovador — podemos pausar quando quisermos. Estamos encantados!",
    name: "Rafael Kimura",
    role: "CTO — Bizu",
  },
  {
    quote: "O relatório de consultoria em IA foi revelador. A MadeofIA fez um trabalho incrível identificando oportunidades que não víamos.",
    name: "Sofía Andrade",
    role: "CEO — Tobri",
  },
  {
    quote: "A qualidade do código e do design superou qualquer agência que eu havia contratado. E custou 4× menos.",
    name: "Pedro Alves",
    role: "Fundador — DevBR",
  },
  {
    quote: "O diferencial é a velocidade de iteração. Uma mudança que levaria semanas ficou pronta em um dia.",
    name: "Camila Souza",
    role: "CPO — FluxApp",
  },
];

const team = [
  { name: "CEO Agente", role: "Estratégia & Produto", initials: "C" },
  { name: "CTO Agente", role: "Arquitetura & Código", initials: "T" },
  { name: "CMO Agente", role: "Copy & Marketing", initials: "M" },
  { name: "Designer Agente", role: "UI/UX & Brand", initials: "D" },
];

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

/* ── COMPONENT ─────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(74,222,128,0.28) 0%, rgba(234,179,8,0.12) 30%, rgba(74,222,128,0.05) 55%, transparent 72%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,222,128,0.18) 0%, transparent 60%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight text-white mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              Impulsionando
              <br />
              negócios com
              <br />
              agentes de IA.
            </h1>

            <p className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              Construímos sites e web apps com times de agentes de IA para empresas
              que querem crescer na velocidade da tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center text-sm px-6 py-3 rounded-full border border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Nossos serviços
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center text-sm px-6 py-3 rounded-full border border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MARQUEE  
      ══════════════════════════════════════════════════ */}
      <div className="border-y border-white/8 overflow-hidden py-5 bg-[#080807]">
        <div
          className="flex gap-16 w-max"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["MADEOFIA", "·", "AGENTES DE IA", "·", "NEXT.JS", "·", "REACT", "·", "TYPESCRIPT", "·", "VERCEL", "·", "CLAUDE", "·", "GPT-4", "·"].map(
              (t, j) => (
                <span
                  key={`${t}-${i}-${j}`}
                  className="font-mono text-xs tracking-[0.25em] text-white/20 whitespace-nowrap uppercase"
                >
                  {t}
                </span>
              )
            )
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          STATEMENT
      ══════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <p className="text-white/35 text-sm uppercase tracking-widest mb-8">Sobre a MadeofIA</p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-4xl"
          style={{ letterSpacing: "-0.025em" }}
        >
          Somos uma boutique
          <br />
          de desenvolvimento web{" "}
          <span className="text-white/40">com IA</span>{" "}
          🤖
        </h2>
        <div className="mt-8 max-w-3xl">
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-white/40">Transformamos empresas em</span>{" "}
            <span className="text-white">líderes digitais</span>{" "}
            <span className="text-white/40">impulsionados por IA.</span>{" "}
            ✨
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════ */}
      <section id="processo" className="py-32 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: label + plan types */}
            <div className="lg:sticky lg:top-32 self-start">
              <p className="text-white/35 text-sm uppercase tracking-widest mb-6">Nosso processo</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
                style={{ letterSpacing: "-0.025em" }}
              >
                Como
                <br />
                funciona.
              </h2>
              <div className="space-y-2">
                {["Por Projeto", "Essencial", "Crescimento", "Produto", "Parceiro"].map((p) => (
                  <div
                    key={p}
                    className="inline-flex items-center gap-2 text-sm text-white/35 border border-white/8 rounded-full px-4 py-1.5 mr-2 mb-2"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: steps */}
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`py-8 border-b border-white/8 ${i === 0 ? "border-t border-white/8" : ""}`}
                >
                  <div className="flex gap-8">
                    <span className="font-mono text-white/25 text-sm mt-1 shrink-0 w-8">
                      {step.num}.
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════ */}
      <section id="servicos" className="py-32 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/35 text-sm uppercase tracking-widest mb-4">Serviços</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-16"
            style={{ letterSpacing: "-0.025em" }}
          >
            O que entregamos.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/8 p-8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300"
              >
                {/* Visual mock */}
                <div className="h-44 rounded-xl mb-6 overflow-hidden relative border border-white/8 bg-white/[0.02]">
                  {s.visual === "dev" && (
                    <div className="absolute inset-0 p-4 font-mono text-xs text-green-400/70 leading-relaxed">
                      <div className="text-white/25 mb-1">// page.tsx</div>
                      <div><span className="text-blue-400/60">import</span> <span className="text-white/40">Next</span> <span className="text-blue-400/60">from</span> <span className="text-green-400/60">&apos;next&apos;</span></div>
                      <div className="mt-2"><span className="text-purple-400/60">export default</span> <span className="text-yellow-400/60">function</span> <span className="text-white/40">Page()</span> {"{"}</div>
                      <div className="pl-4 text-white/30">return {"<"}div{">"}</div>
                      <div className="pl-8 text-green-400/50">{"<"}h1{">"} MadeofIA {"</"}h1{">"}</div>
                      <div className="pl-4 text-white/30">{"</"}div{">"}</div>
                      <div>{"}"}</div>
                    </div>
                  )}
                  {s.visual === "agent" && (
                    <div className="absolute inset-0 p-4 flex flex-col gap-2 justify-end">
                      <div className="self-start bg-white/8 rounded-xl rounded-bl-sm px-3 py-2 text-xs text-white/60 max-w-[80%]">
                        Resumir este relatório
                      </div>
                      <div className="self-end bg-[#4ade80]/15 border border-[#4ade80]/20 rounded-xl rounded-br-sm px-3 py-2 text-xs text-[#4ade80]/80 max-w-[80%]">
                        Claro! Receita cresceu 15% para R$2,4M. Crescimento impulsionado por...
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                        <span className="text-xs text-white/25">Agente de IA ativo</span>
                      </div>
                    </div>
                  )}
                  {s.visual === "consulting" && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-center items-center">
                      <span className="text-5xl font-bold text-white/90 font-mono">+30%</span>
                      <span className="text-white/35 text-xs mt-2 uppercase tracking-widest">eficiência média</span>
                      <div className="mt-4 w-full px-4">
                        <div className="h-1.5 w-full rounded-full bg-white/5">
                          <div className="h-1.5 rounded-full bg-[#4ade80]/60 w-[75%]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-white/30 text-xs uppercase tracking-widest block mb-2">
                  {s.tag}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WORK / PORTFOLIO
      ══════════════════════════════════════════════════ */}
      <section id="trabalhos" className="py-32 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/35 text-sm uppercase tracking-widest mb-4">Trabalhos</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-16"
            style={{ letterSpacing: "-0.025em" }}
          >
            Nosso trabalho.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.name}
                className="group rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 cursor-pointer"
              >
                {/* Project color block */}
                <div className="h-52 bg-gradient-to-br from-white/5 to-white/[0.02] relative overflow-hidden flex items-center justify-center">
                  <span
                    className="text-6xl font-bold text-white/5 font-mono select-none"
                    style={{ letterSpacing: "-0.05em" }}
                  >
                    {cs.name}
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(74,222,128,0.08) 0%, transparent 70%)",
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-white/25 text-xs">{cs.year}</span>
                    <span className="text-white/25 text-xs">{cs.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#4ade80] transition-colors duration-200">
                    {cs.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs text-white/40 border border-white/8 rounded-full px-3 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PLANS / PRICING
      ══════════════════════════════════════════════════ */}
      <section id="planos" className="py-32 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/35 text-sm uppercase tracking-widest mb-4">Planos</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            Planos para cada
            <br />
            necessidade.
          </h2>
          <p className="text-white/40 text-lg mb-16 max-w-lg">
            Preços fixos, escopo claro, entrega garantida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 flex flex-col relative ${
                  p.highlight
                    ? "border-[#4ade80]/30 bg-[#4ade80]/[0.04]"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-xs bg-[#4ade80] text-[#080807] font-semibold px-3 py-1 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">{p.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-white" style={{ letterSpacing: "-0.03em" }}>
                      {p.price}
                    </span>
                    <span className="text-white/35 text-sm">{p.period}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mt-3">{p.desc}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                      <span className="text-[#4ade80] mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`block text-center text-sm py-2.5 rounded-full border transition-all duration-200 ${
                    p.highlight
                      ? "border-[#4ade80]/40 bg-[#4ade80]/10 text-[#4ade80] hover:bg-[#4ade80]/20"
                      : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS (scrolling)
      ══════════════════════════════════════════════════ */}
      <section className="py-32 border-t border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-white/35 text-sm uppercase tracking-widest mb-4">Depoimentos</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ letterSpacing: "-0.025em" }}
          >
            O que dizem.
          </h2>
        </div>

        {/* Scrolling track */}
        <div className="relative">
          <div
            className="flex gap-5"
            style={{
              width: "max-content",
              animation: "scroll-left 50s linear infinite",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/8 pt-4">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080807] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080807] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════════ */}
      <section id="equipe" className="py-32 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/35 text-sm uppercase tracking-widest mb-4">Equipe</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-16"
            style={{ letterSpacing: "-0.025em" }}
          >
            Conheça o time.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-center hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Avatar circle */}
                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white/60 font-mono">
                    {m.initials}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{m.name}</h3>
                <p className="text-white/35 text-xs">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT + FAQ
      ══════════════════════════════════════════════════ */}
      <section id="contato" className="py-32 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: contact info */}
            <div>
              <p className="text-white/35 text-sm uppercase tracking-widest mb-4">Contato</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                style={{ letterSpacing: "-0.025em" }}
              >
                Vamos conversar.
              </h2>

              <div className="space-y-6 text-sm mb-12">
                <div>
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-2">Email</p>
                  <a
                    href="mailto:ola@madeofia.com"
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    ola@madeofia.com ↗
                  </a>
                </div>
                <div>
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-2">Empresa</p>
                  <p className="text-white/60">
                    MadeofIA Boutique
                    <br />
                    CNPJ 65.599.230/0001-64
                    <br />
                    Brasil
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <p className="text-white/35 text-sm uppercase tracking-widest mb-6">FAQ</p>
                <div className="space-y-0">
                  {faqs.map((f, i) => (
                    <div
                      key={i}
                      className={`py-5 border-b border-white/8 ${i === 0 ? "border-t border-white/8" : ""}`}
                    >
                      <p className="text-white/80 text-sm font-medium mb-2">{f.q}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
                <p className="text-white font-semibold text-lg mb-6">
                  Envie uma mensagem
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="João"
                        className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                        Sobrenome
                      </label>
                      <input
                        type="text"
                        placeholder="Silva"
                        className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="joao@empresa.com"
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-widest block mb-2">
                      Mensagem
                    </label>
                    <textarea
                      placeholder="Conte sobre seu projeto..."
                      rows={5}
                      className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-[#080807] text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-32 border-t border-white/8 relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(74,222,128,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/35 text-sm uppercase tracking-widest mb-8">Próximo passo</p>
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ letterSpacing: "-0.035em" }}
          >
            Pronto para ter seu
            <br />
            time de IA?
          </h2>
          <p className="text-white/45 text-lg mb-10 max-w-md mx-auto">
            Agende uma conversa de 30 min. Sem compromisso, sem pitch. Só clareza.
          </p>
          <a
            href="mailto:ola@madeofia.com"
            className="inline-flex items-center justify-center text-sm px-8 py-4 rounded-full bg-white text-[#080807] font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            ola@madeofia.com →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
