import type { Metadata } from "next";
import Link from "next/link";
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
    tagline: "Produto utilitario com distribuicao organica forte.",
    desc: "Transformamos uma necessidade operacional em produto de uso recorrente, com fluxo direto, performance alta e paginas preparadas para busca.",
    challenge: "A operacao dependia de processo improvisado e nao existia experiencia de produto consistente.",
    solution: "Entregamos MVP com geracao de PDF, historico, autenticacao e arquitetura pronta para crescer sem travar o time.",
    results: [
      ["3.000+", "usuarios ativos"],
      ["60 dias", "ate ganhar tracao"],
      ["R$0", "em midia paga"],
      ["NPS 72", "com uso recorrente"],
    ],
  },
  {
    name: "TextoIA",
    tag: "SaaS · Conteudo",
    year: "2024",
    tagline: "Produto com oferta mais clara e onboarding mais direto.",
    desc: "A plataforma precisava explicar valor rapido, simplificar a jornada e sustentar crescimento com conteudo e estrutura de funil.",
    challenge: "Ferramenta boa com narrativa dispersa, proposta complexa e experiencia desalinhada com o publico.",
    solution: "Reorganizarmos arquitetura de paginas, posicionamento, experiencia principal e base editorial para aquisicao continua.",
    results: [
      ["500+", "assinantes pagantes"],
      ["34%", "trial para pago"],
      ["4.8", "avaliacao media"],
      ["3.2%", "churn mensal"],
    ],
  },
  {
    name: "Bizu",
    tag: "EdTech · Mobile Web",
    year: "2024",
    tagline: "Experiencia leve com comportamento de app.",
    desc: "Projeto desenhado para uso frequente, navegacao rapida e clareza de proposta em ambiente mobile-first.",
    challenge: "O produto precisava parecer simples sem perder profundidade funcional ou parecer improvisado.",
    solution: "Construimos experiencia enxuta, ritmada e pronta para uso intenso com base de dados, autenticacao e trilhas personalizadas.",
    results: [
      ["10 mil", "downloads"],
      ["68%", "retencao D30"],
      ["18 min", "sessao media"],
      ["4.9", "nota em loja"],
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <PageIntro
        eyebrow="// portfolio"
        title={
          <>
            Produto no ar.
            <br />
            Crescimento real.
            <br />
            <span style={{ color: "#d3ffca" }}>Sem mockup de mentira.</span>
          </>
        }
        description="Os cases abaixo mostram o tipo de projeto que preferimos: contexto claro, entregas objetivas e uma interface que ajuda o negocio a crescer em vez de enfeitar a tela."
        panel={
          <>
            <p className={styles.panelKicker}>O que voce ve aqui</p>
            <p className={styles.panelTitle}>Projetos construidos para uso, nao para portfolio vazio.</p>
            <p className={styles.panelBody}>
              Cada case combina narrativa, arquitetura, conversao e infraestrutura.
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
                        <p className={styles.tableLabel}>Solucao</p>
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
        title="O proximo case pode ser o seu."
        description="Se voce precisa transformar uma ideia em produto ou reposicionar um site que hoje nao sustenta crescimento, essa conversa comeca aqui."
        href="/contato"
        label="Comecar projeto"
      />
    </>
  );
}
