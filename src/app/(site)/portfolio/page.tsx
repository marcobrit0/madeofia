import type { Metadata } from "next";
import { ActionBanner, PageIntro, sitePageStyles as styles } from "@/components/SitePages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfólio — MadeofIA",
  description:
    "Cases reais construídos por agentes de IA: CriarRecibo, TextoIA e Bizu.",
  path: "/portfolio",
  keywords: ["portfólio", "cases de produto digital", "sites em Next.js"],
});

const cases = [
  {
    name: "CriarRecibo",
    tag: "SaaS · Fintech",
    year: "2024",
    tagline: "Produto utilitário com distribuição orgânica forte.",
    desc: "Transformamos uma necessidade operacional em produto de uso recorrente, com fluxo direto, performance alta e páginas preparadas para busca.",
    challenge: "A operação dependia de um processo improvisado, e não existia uma experiência de produto consistente.",
    solution: "Entregamos um MVP com geração de PDF, histórico, autenticação e arquitetura pronta para crescer sem travar o time.",
    results: [
      ["3.000+", "usuários ativos"],
      ["60 dias", "até ganhar tração"],
      ["R$0", "em mídia paga"],
      ["NPS 72", "com uso recorrente"],
    ],
  },
  {
    name: "TextoIA",
    tag: "SaaS · Conteúdo",
    year: "2024",
    tagline: "Produto com oferta mais clara e onboarding mais direto.",
    desc: "A plataforma precisava explicar valor rápido, simplificar a jornada e sustentar crescimento com conteúdo e estrutura de funil.",
    challenge: "A ferramenta era boa, mas tinha narrativa dispersa, proposta complexa e experiência desalinhada com o público.",
    solution: "Reorganizamos a arquitetura de páginas, o posicionamento, a experiência principal e a base editorial para aquisição contínua.",
    results: [
      ["500+", "assinantes pagantes"],
      ["34%", "de trial para pago"],
      ["4.8", "avaliação média"],
      ["3.2%", "churn mensal"],
    ],
  },
  {
    name: "Bizu",
    tag: "EdTech · Mobile Web",
    year: "2024",
    tagline: "Experiência leve com comportamento de app.",
    desc: "Projeto desenhado para uso frequente, navegação rápida e clareza de proposta em ambiente mobile-first.",
    challenge: "O produto precisava parecer simples sem perder profundidade funcional ou parecer improvisado.",
    solution: "Construímos uma experiência enxuta, ritmada e pronta para uso intenso, com base de dados, autenticação e trilhas personalizadas.",
    results: [
      ["10 mil", "downloads"],
      ["68%", "retenção D30"],
      ["18 min", "sessão média"],
      ["4.9", "nota em loja"],
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <PageIntro
        eyebrow="// portfólio"
        title={
          <>
            Produto no ar.
            <br />
            Crescimento real.
            <br />
            <span style={{ color: "#d3ffca" }}>Sem mockup de mentira.</span>
          </>
        }
        description="Os cases abaixo mostram o tipo de projeto que preferimos: contexto claro, entregas objetivas e uma interface que ajuda o negócio a crescer em vez de enfeitar a tela."
        panel={
          <>
            <p className={styles.panelKicker}>O que você vê aqui</p>
            <p className={styles.panelTitle}>Projetos construídos para uso, não para portfólio vazio.</p>
            <p className={styles.panelBody}>
              Cada case combina narrativa, arquitetura, conversão e infraestrutura.
            </p>
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.stack}>
            {cases.map((item) => (
              <article key={item.name} className={styles.surfaceCard}>
                <div className={styles.splitGrid}>
                  <div className={styles.stack}>
                    <div>
                      <p className={styles.panelKicker}>
                        {item.tag} · {item.year}
                      </p>
                      <h2 className={styles.sectionTitle} style={{ marginTop: 12 }}>
                        {item.name}
                      </h2>
                      <p className={styles.eyebrow}>{item.tagline}</p>
                    </div>

                    <p className={styles.bodyCopy}>{item.desc}</p>

                    <div className={styles.tableGrid}>
                      <div className={styles.tableRow}>
                        <p className={styles.tableLabel}>Desafio</p>
                        <p className={styles.tableValue}>{item.challenge}</p>
                      </div>
                      <div className={styles.tableRow}>
                        <p className={styles.tableLabel}>Solução</p>
                        <p className={styles.tableValue}>{item.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.metricGrid}>
                    {item.results.map(([value, label]) => (
                      <div key={label} className={styles.metricCard}>
                        <p className={styles.metricValue}>{value}</p>
                        <p className={styles.metricCopy}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ActionBanner
        eyebrow="// seu projeto"
        title="O próximo case pode ser o seu."
        description="Se você precisa transformar uma ideia em produto ou reposicionar um site que hoje não sustenta crescimento, essa conversa começa aqui."
        href="/contato"
        label="Começar projeto"
      />
    </>
  );
}
