import type { Metadata } from "next";
import Link from "next/link";
import {
  BlogArticlePage,
  sitePageStyles as styles,
} from "@/components/SitePages";
import {
  createBlogPostMetadata,
  createBlogPostSchemas,
  serializeJsonLd,
} from "../seo";
import { secondBlogPost } from "../posts";

export const metadata: Metadata = createBlogPostMetadata(secondBlogPost);

const structuredData = createBlogPostSchemas(secondBlogPost);

const landingPageModels = [
  "Captacao de lead para servicos",
  "Pagina de espera para produto",
  "Lancamento de curso ou oferta",
  "Pagina de diagnostico ou auditoria",
  "Pagina de agendamento comercial",
  "Comparativo de solucao",
  "Oferta com prova social forte",
];

export default function LandingPageExamplesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />

      <BlogArticlePage
        post={secondBlogPost}
        quickSummary="Landing page nao e pagina bonita com formulario. E uma interface desenhada para uma unica decisao, com friccao baixa e argumento forte."
        asideSections={[
          {
            title: "Neste artigo",
            content: (
              <ul>
                {secondBlogPost.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          },
          {
            title: "Quer revisar a sua?",
            content: (
              <p>
                Se a pagina atual recebe clique mas nao gera conversa, o problema
                costuma estar na estrutura, nao no volume de trafego.
              </p>
            ),
            action: {
              href: "/contato",
              label: "Falar sobre landing page",
            },
          },
        ]}
      >
        <p>
          Landing page nao e home de site. Ela existe para uma unica promessa,
          uma unica acao e uma unica decisao. Quanto mais disputa de foco, pior
          a performance.
        </p>
        <p>
          Por isso a pergunta certa nao e "como deixar a pagina bonita?", mas
          sim "qual decisao ela precisa facilitar sem desviar o usuario do
          caminho?".
        </p>

        <h2>A estrutura base de uma landing page que converte</h2>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>Headline</h4>
            <p>A promessa principal precisa ser especifica e rapida de ler.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Subheadline</h4>
            <p>Complementa a promessa com contexto, mecanismo ou prova.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Hero visual</h4>
            <p>Mostra a oferta em uso, nao uma imagem generica de banco.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>CTA repetido</h4>
            <p>O proximo passo aparece sempre que a atencao e recuperada.</p>
          </section>
        </div>

        <h3>Beneficios vem antes de detalhes tecnicos</h3>
        <p>
          A maioria das paginas fala demais sobre feature e pouco sobre impacto.
          O visitante quer saber o que muda para ele, quanto esforco sera
          economizado e por que vale clicar agora.
        </p>

        <h3>Tratamento de objecoes e obrigatorio</h3>
        <p>
          Preco, confianca, prazo, risco e dificuldade de implantacao precisam
          aparecer de forma direta. Se a pagina ignora objecao, o usuario leva a
          duvida embora.
        </p>

        <h2>Sete modelos para adaptar ao seu funil</h2>
        <ul>
          {landingPageModels.map((model) => (
            <li key={model}>{model}</li>
          ))}
        </ul>

        <h2>Os erros que mais derrubam performance</h2>
        <p>
          Os problemas mais comuns sao excesso de navegacao, CTA ambiguo,
          formulario cedo demais, prova social fraca e layout que obriga o
          usuario a "descobrir" a proposta por conta propria.
        </p>
        <p>
          Em campanhas pagas, isso custa caro rapidamente. Em busca organica,
          isso transforma trafego qualificado em visita improdutiva.
        </p>

        <h2>Como avaliar se a pagina esta pronta</h2>
        <ul>
          <li>A promessa cabe em uma leitura de poucos segundos.</li>
          <li>O CTA deixa claro o que acontece depois do clique.</li>
          <li>Existe prova suficiente para reduzir risco percebido.</li>
          <li>A pagina continua clara e convincente no mobile.</li>
        </ul>

        <h2>Conclusao</h2>
        <p>
          Landing page boa nao depende de truque. Depende de oferta clara,
          narrativa focada e interface disciplinada. O objetivo e reduzir
          dispersao e aumentar confianca.
        </p>
        <p>
          Se voce quiser alinhar pagina, mensagem e conversao no mesmo projeto,
          veja os <Link href="/servicos">servicos</Link> ou fale conosco pelo{" "}
          <Link href="/contato">contato</Link>.
        </p>
      </BlogArticlePage>
    </>
  );
}
