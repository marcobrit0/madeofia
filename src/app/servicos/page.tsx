import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços — MadeofIA",
  description: "Times de agentes de IA para cada etapa do seu produto digital. Planos a partir de R$15K.",
};

const tiers = [
  {
    tier: "Essencial",
    price: "R$15K",
    period: "projeto único",
    tagline: "Do zero ao ar em 2 semanas.",
    desc: "Site institucional ou landing page de alta conversão com identidade visual forte. Ideal para quem quer presença digital profissional sem enrolação.",
    items: [
      "Site completo em Next.js 14+",
      "Design customizado (sem template)",
      "Responsivo em todos os dispositivos",
      "SEO técnico completo",
      "Deploy no Vercel + configuração de domínio",
      "Analytics (PostHog ou GA4)",
      "1 rodada de revisão",
      "Entrega em até 14 dias úteis",
    ],
    cta: "Contratar Essencial",
    highlight: false,
  },
  {
    tier: "Crescimento",
    price: "R$25K",
    period: "projeto único",
    tagline: "Presença digital completa.",
    desc: "Tudo do Essencial mais área de membros, blog com CMS, integrações de marketing e automações. Para empresas que querem crescer de verdade.",
    items: [
      "Tudo do plano Essencial",
      "Área de membros com login/cadastro",
      "Blog/CMS (Sanity ou Contentful)",
      "Formulários com automação",
      "Integração com CRM (HubSpot, RD Station)",
      "Analytics avançado + heatmaps",
      "2 rodadas de revisão",
      "Entrega em até 21 dias úteis",
    ],
    cta: "Contratar Crescimento",
    highlight: true,
  },
  {
    tier: "Produto Digital",
    price: "R$45K",
    period: "projeto único",
    tagline: "Do conceito ao produto em produção.",
    desc: "MVP completo de SaaS, marketplace ou web app. Autenticação, pagamentos, dashboard admin, e infraestrutura pronta para escalar.",
    items: [
      "Tudo do plano Crescimento",
      "Autenticação completa (Clerk ou NextAuth)",
      "Integração de pagamentos (Stripe)",
      "Dashboard admin",
      "API REST ou tRPC",
      "Banco de dados (Supabase ou PlanetScale)",
      "Infraestrutura cloud escalável",
      "3 rodadas de revisão",
    ],
    cta: "Contratar Produto Digital",
    highlight: false,
  },
  {
    tier: "Parceiro Digital",
    price: "R$7K",
    period: "por mês",
    tagline: "Time de IA. Dedicado. Recorrente.",
    desc: "Um time completo de agentes de IA trabalhando exclusivamente no seu produto todo mês. Sprints, manutenção, novas features — tudo incluído.",
    items: [
      "Time dedicado (CEO + CTO + CMO + Designer)",
      "Sprint mensal de desenvolvimento",
      "Manutenção e correções ilimitadas",
      "Novos conteúdos e copy mensais",
      "Reunião de alinhamento semanal",
      "Relatório mensal de métricas",
      "Prioridade máxima no atendimento",
      "Suporte via WhatsApp 5×8",
    ],
    cta: "Contratar Parceiro",
    highlight: false,
  },
];

const faq = [
  {
    q: "Quanto tempo leva para entregar?",
    a: "Plano Essencial: até 14 dias úteis. Crescimento: 21 dias. Produto Digital: 30-45 dias. O prazo começa após aprovação do briefing e pagamento.",
  },
  {
    q: "Como funciona o processo?",
    a: "1. Briefing (1h de call). 2. Proposta e contrato. 3. Pagamento 50% entrada. 4. Desenvolvimento com checkpoints. 5. Revisões. 6. Deploy e entrega. 7. Pagamento 50% restante.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Cada plano inclui rodadas de revisão definidas no escopo. Trabalhamos até você aprovar dentro das rodadas contratadas. Não entregamos nada que não seja aprovado por você.",
  },
  {
    q: "Preciso ter ideia formada para contratar?",
    a: "Não. Temos um processo de discovery que te ajuda a clarear o produto. Mas quanto mais definido for o escopo, mais rápida e barata a entrega.",
  },
  {
    q: "Vocês fazem apps mobile?",
    a: "Atualmente focamos em web apps e sites. Para apps mobile, podemos construir Progressive Web Apps (PWA) que funcionam no celular como apps nativos.",
  },
];

export default function Servicos() {
  return (
    <>
      <Nav />

      {/* Header */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // serviços
        </span>
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-[#f0f0f0] leading-tight mb-6">
          Preços fixos.<br />Escopo claro.<br />
          <span className="text-[#00FF88]">Entrega garantida.</span>
        </h1>
        <p className="text-[#555555] text-xl max-w-xl">
          Escolha o plano que faz sentido para o seu momento. Sem surpresas no final.
        </p>
      </section>

      {/* Pricing */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className={`card-hover border p-8 relative ${
                t.highlight ? "border-[#00FF88]/40" : "border-[#1a1a1a]"
              }`}
              style={t.highlight ? { background: "rgba(0,255,136,0.02)" } : {}}
            >
              {t.highlight && (
                <>
                  <div className="absolute -top-px left-0 right-0 h-px bg-[#00FF88]" />
                  <div className="absolute -top-3 left-8">
                    <span className="font-mono text-xs bg-[#00FF88] text-[#080808] px-3 py-1 font-bold uppercase">
                      Mais popular
                    </span>
                  </div>
                </>
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-2">{t.tier}</p>
                  <p className="font-mono text-4xl font-bold text-[#f0f0f0]">{t.price}</p>
                  <p className="font-mono text-xs text-[#555555] mt-1">{t.period}</p>
                </div>
              </div>

              <p className="font-mono text-sm text-[#00FF88] mb-2">{t.tagline}</p>
              <p className="text-[#555555] text-sm leading-relaxed mb-8">{t.desc}</p>

              <ul className="space-y-2.5 mb-8">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-mono text-[#f0f0f0]">
                    <span className="text-[#00FF88] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contato"
                className={`block text-center font-mono text-sm uppercase tracking-widest py-4 border transition-all ${
                  t.highlight
                    ? "border-[#00FF88] bg-[#00FF88] text-[#080808] font-bold hover:bg-transparent hover:text-[#00FF88]"
                    : "border-[#1a1a1a] text-[#555555] hover:border-[#00FF88] hover:text-[#00FF88]"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-[#1a1a1a] max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // dúvidas frequentes
        </span>
        <h2 className="font-mono text-4xl font-bold text-[#f0f0f0] mb-16">FAQ</h2>

        <div className="max-w-3xl space-y-0">
          {faq.map((f, i) => (
            <div key={i} className="border-b border-[#1a1a1a] py-8">
              <p className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">{f.q}</p>
              <p className="text-[#555555] text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-[#1a1a1a] text-center px-6">
        <p className="font-mono text-xs text-[#00FF88] uppercase tracking-widest mb-4">// vamos conversar</p>
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-6">
          Ainda tem dúvidas?
        </h2>
        <p className="text-[#555555] mb-8 max-w-md mx-auto">
          Agende 30 minutos com o nosso time. Sem pitch, sem pressão. Só clareza.
        </p>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest px-8 py-4 bg-[#00FF88] text-[#080808] font-bold hover:bg-[#00FF88]/90 transition-colors"
        >
          Agendar conversa →
        </Link>
      </section>

      <Footer />
    </>
  );
}
