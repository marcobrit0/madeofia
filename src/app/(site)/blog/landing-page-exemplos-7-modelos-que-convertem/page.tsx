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
  "Captação de lead para serviços",
  "Página de espera para produto",
  "Lançamento de curso ou oferta",
  "Página de diagnóstico ou auditoria",
  "Página de agendamento comercial",
  "Comparativo de solução",
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
        quickSummary="Landing page não é página bonita com formulário. É uma interface desenhada para uma única decisão, com fricção baixa e argumento forte."
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
                Se a página atual recebe clique, mas não gera conversa, o problema
                costuma estar na estrutura, não no volume de tráfego.
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
          Landing page não é home de site. Ela existe para uma única promessa,
          uma única ação e uma única decisão. Quanto mais disputa de foco, pior
          a performance.
        </p>
        <p>
          Por isso, a pergunta certa não é "como deixar a página bonita?", mas
          sim "qual decisão ela precisa facilitar sem desviar o usuário do
          caminho?".
        </p>

        <h2>A estrutura base de uma landing page que converte</h2>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>Headline</h4>
            <p>A promessa principal precisa ser específica e rápida de ler.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Subheadline</h4>
            <p>Complementa a promessa com contexto, mecanismo ou prova.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Hero visual</h4>
            <p>Mostra a oferta em uso, não uma imagem genérica de banco.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>CTA repetido</h4>
            <p>O próximo passo aparece sempre que a atenção é recuperada.</p>
          </section>
        </div>

        <h3>Benefícios vêm antes de detalhes técnicos</h3>
        <p>
          A maioria das páginas fala demais sobre feature e pouco sobre impacto.
          O visitante quer saber o que muda para ele, quanto esforço será
          economizado e por que vale clicar agora.
        </p>

        <h3>Tratamento de objeções é obrigatório</h3>
        <p>
          Preço, confiança, prazo, risco e dificuldade de implantação precisam
          aparecer de forma direta. Se a página ignora a objeção, o usuário leva a
          dúvida embora.
        </p>

        <h2>Sete modelos para adaptar ao seu funil</h2>
        <ul>
          {landingPageModels.map((model) => (
            <li key={model}>{model}</li>
          ))}
        </ul>

        <h2>Os erros que mais derrubam performance</h2>
        <p>
          Os problemas mais comuns são excesso de navegação, CTA ambíguo,
          formulário cedo demais, prova social fraca e layout que obriga o
          usuário a "descobrir" a proposta por conta própria.
        </p>
        <p>
          Em campanhas pagas, isso custa caro rapidamente. Em busca orgânica,
          isso transforma tráfego qualificado em visita improdutiva.
        </p>

        <h2>Como avaliar se a página está pronta</h2>
        <ul>
          <li>A promessa cabe em uma leitura de poucos segundos.</li>
          <li>O CTA deixa claro o que acontece depois do clique.</li>
          <li>Existe prova suficiente para reduzir risco percebido.</li>
          <li>A página continua clara e convincente no mobile.</li>
        </ul>

        <h2>Conclusão</h2>
        <p>
          Landing page boa não depende de truque. Depende de oferta clara,
          narrativa focada e interface disciplinada. O objetivo é reduzir
          dispersão e aumentar confiança.
        </p>
        <p>
          Se você quiser alinhar página, mensagem e conversão no mesmo projeto,
          veja os <Link href="/servicos">serviços</Link> ou fale conosco pelo{" "}
          <Link href="/contato">contato</Link>.
        </p>
      </BlogArticlePage>
    </>
  );
}
