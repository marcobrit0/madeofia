import type { Metadata } from "next";
import { ActionBanner, PageIntro, sitePageStyles as styles } from "@/components/SitePages";
import { LinkButton } from "@/components/SiteButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços — MadeofIA",
  description:
    "Times de agentes de IA para cada etapa do seu produto digital. Planos a partir de R$15K.",
  path: "/servicos",
  keywords: [
    "desenvolvimento web",
    "SEO técnico",
    "produto digital",
    "criação de sites",
  ],
});

const tiers = [
  {
    tier: "Essencial",
    price: "R$15K",
    period: "projeto único",
    tagline: "Do zero ao ar em duas semanas.",
    desc: "Site institucional ou landing page com direção visual forte, narrativa clara e base técnica sólida para SEO e conversão.",
    items: [
      "Arquitetura em Next.js 16",
      "Design sob medida, sem template reciclado",
      "Implementação responsiva",
      "SEO técnico e analytics",
      "Deploy, domínio e handoff",
    ],
  },
  {
    tier: "Crescimento",
    price: "R$25K",
    period: "projeto único",
    tagline: "Presença digital completa.",
    desc: "Tudo do Essencial com blog, integrações de marketing e automações para transformar o site em canal real de aquisição.",
    items: [
      "Tudo do Essencial",
      "Blog ou hub editorial",
      "Fluxos de captura e automação",
      "Search Console e tracking avançado",
      "Estratégia de conteúdo inicial",
    ],
  },
  {
    tier: "Produto Digital",
    price: "R$45K",
    period: "projeto único",
    tagline: "Do conceito ao produto funcional.",
    desc: "MVP completo com autenticação, dashboard, banco de dados e estrutura pronta para crescer sem refazer tudo depois.",
    items: [
      "Tudo do Crescimento",
      "Auth, dashboard e banco de dados",
      "Integrações com pagamento e email",
      "Painel administrativo",
      "Infraestrutura pronta para escala",
    ],
  },
  {
    tier: "Parceiro Digital",
    price: "R$7K",
    period: "por mes",
    tagline: "Time recorrente, foco continuo.",
    desc: "Squad enxuto para evolucao constante do produto com prioridades mensais, manutencao, novas entregas e acompanhamento.",
    items: [
      "Roadmap mensal priorizado",
      "Melhorias de UX e CRO",
      "Conteudo e SEO continuo",
      "Correcao de bugs e manutencao",
      "Ritmo de entrega previsivel",
    ],
  },
];

const faq = [
  {
    title: "Como o projeto comeca",
    copy: "Primeiro alinhamos contexto, objetivo e restricoes. Depois disso fechamos escopo, cronograma e criterios de aprovacao para evitar surpresa no meio do caminho.",
  },
  {
    title: "Como funcionam as revisoes",
    copy: "Cada plano ja nasce com checkpoints claros. Em vez de uma entrega opaca no fim, trabalhamos por blocos e iteracoes curtas.",
  },
  {
    title: "Quando faz sentido um MVP",
    copy: "Quando a prioridade e aprender rapido com usuarios reais. Se a demanda ja esta validada, pode fazer mais sentido comecar por um site comercial forte.",
  },
  {
    title: "O que fica com o cliente",
    copy: "Codigo, design implementado, configuracoes do projeto, dominio, analytics e toda a base necessaria para continuar evoluindo sem dependencia artificial.",
  },
];

export default function Servicos() {
  return (
    <>
      <PageIntro
        eyebrow="// servicos"
        title={
          <>
            Escopo claro.
            <br />
            Preco fixo.
            <br />
            <span style={{ color: "#d3ffca" }}>Entrega que faz sentido.</span>
          </>
        }
        description="Os planos abaixo organizam a decisao certa para cada momento do negocio. Sem escopo nebuloso, sem equipe inchada e sem um site bonito que nao resolve nada."
        panel={
          <>
            <p className={styles.panelKicker}>Como pensamos</p>
            <p className={styles.panelTitle}>Design, codigo e demanda no mesmo pacote.</p>
            <p className={styles.panelBody}>
              A proposta nao separa visual de performance nem SEO de produto.
              Tudo entra junto para o site ja nascer funcional.
            </p>
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.contentGrid}>
            {tiers.map((tier) => (
              <article key={tier.tier} className={styles.surfaceCard}>
                <p className={styles.panelKicker}>{tier.tier}</p>
                <p className={styles.panelTitle}>
                  {tier.price}
                  <span style={{ color: "rgba(255,255,255,0.42)", fontSize: "1rem", marginLeft: 8 }}>
                    {tier.period}
                  </span>
                </p>
                <p className={styles.eyebrow} style={{ marginTop: 18 }}>
                  {tier.tagline}
                </p>
                <p className={styles.bodyCopy} style={{ marginTop: 12 }}>
                  {tier.desc}
                </p>
                <ul className={styles.list} style={{ marginTop: 20 }}>
                  {tier.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <LinkButton href="/contato" label="Falar sobre este plano" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.stepsGrid}>
            {faq.map((item, index) => (
              <article key={item.title} className={styles.stepCard}>
                <p className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</p>
                <h2 className={styles.stepTitle}>{item.title}</h2>
                <p className={styles.stepCopy}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ActionBanner
        eyebrow="// proxima etapa"
        title="Se o site precisa vender, o escopo precisa ser honesto."
        description="A conversa certa nao comeca por cor de botao. Comeca por meta, oferta, estrutura e o que o projeto precisa entregar de verdade."
        href="/contato"
        label="Agendar conversa"
      />
    </>
  );
}
