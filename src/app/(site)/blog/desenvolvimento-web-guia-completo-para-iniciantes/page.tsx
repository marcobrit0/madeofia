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
import { thirdBlogPost } from "../posts";

export const metadata: Metadata = createBlogPostMetadata(thirdBlogPost);

const structuredData = createBlogPostSchemas(thirdBlogPost);

export default function DesenvolvimentoWebGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />

      <BlogArticlePage
        post={thirdBlogPost}
        quickSummary="Desenvolvimento web e o conjunto de decisoes que transforma uma necessidade de negocio em uma experiencia digital funcional, confiavel e escalavel."
        asideSections={[
          {
            title: "Neste guia",
            content: (
              <ul>
                {thirdBlogPost.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          },
          {
            title: "Planejando um projeto?",
            content: (
              <p>
                A melhor proposta tecnica e a que traduz complexidade em decisao
                clara, sem esconder risco nem inflar escopo.
              </p>
            ),
            action: {
              href: "/contato",
              label: "Conversar sobre o projeto",
            },
          },
        ]}
      >
        <p>
          Desenvolvimento web parece abstrato quando a conversa vem carregada de
          jargao. Mas, na pratica, estamos falando de um sistema digital que
          precisa funcionar bem para o usuario e para a operacao do negocio.
        </p>
        <p>
          O problema e que muita proposta tecnica usa a complexidade para gerar
          dependencia ou confundir prioridade. O cliente sai da reuniao sabendo
          nomes de tecnologia, mas nao entende o que esta realmente comprando.
        </p>

        <h2>O que entra em desenvolvimento web</h2>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>Front-end</h4>
            <p>O que o usuario ve, toca e interpreta na interface.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Back-end</h4>
            <p>Regras, dados, integracoes e processos que sustentam o produto.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Infraestrutura</h4>
            <p>Hospedagem, deploy, performance, observabilidade e seguranca.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Produto</h4>
            <p>A decisao de o que entra, o que fica de fora e por que.</p>
          </section>
        </div>

        <h2>As diferencas praticas entre front-end, back-end e full-stack</h2>
        <h3>Front-end</h3>
        <p>
          Resolve clareza, navegacao, responsividade, interacao e percepcao de
          qualidade. E onde o usuario percebe se a empresa parece confiavel ou
          improvisada.
        </p>

        <h3>Back-end</h3>
        <p>
          Cuida de autenticacao, base de dados, regras de negocio, integracoes,
          automacoes e tudo que nao aparece diretamente na tela.
        </p>

        <h3>Full-stack</h3>
        <p>
          Liga as duas pontas e entende como interface, dados e infraestrutura
          precisam trabalhar juntas. Em projetos menores, isso evita handoff
          excessivo e perda de contexto.
        </p>

        <h2>Tipos de projeto que mudam prazo e orcamento</h2>
        <ul>
          <li>Site institucional: foco em narrativa, conversao e performance.</li>
          <li>Landing page: foco em uma unica acao e uma unica oferta.</li>
          <li>Blog ou hub editorial: foco em estrutura semantica e escala.</li>
          <li>MVP ou web app: foco em fluxo, regra de negocio e validacao.</li>
        </ul>

        <h2>Como ler uma proposta tecnica</h2>
        <p>
          Proposta boa explica objetivo, escopo, limite de revisao, cronograma,
          riscos e o que fica pronto ao final. Se o documento fala muito de stack
          e pouco de entrega, acenda o alerta.
        </p>
        <ul>
          <li>O problema de negocio esta descrito com clareza.</li>
          <li>As entregas estao listadas sem ambiguidade.</li>
          <li>As exclusoes tambem aparecem com honestidade.</li>
          <li>Existe criterio objetivo de aprovacao.</li>
        </ul>

        <h2>Tendencias que realmente afetam desenvolvimento</h2>
        <p>
          IA no fluxo de trabalho, componentizacao mais madura, serverless,
          caching inteligente e design systems bem definidos aumentam velocidade
          sem sacrificar qualidade quando usados com criterio.
        </p>

        <h2>Conclusao</h2>
        <p>
          Desenvolvimento web nao e comprar codigo. E estruturar uma experiencia
          digital que sustente uso, aquisicao e evolucao. Quanto mais clara a
          traducao disso na proposta, melhor a decisao.
        </p>
        <p>
          Se voce quiser discutir o que faz sentido para o seu contexto, veja os{" "}
          <Link href="/servicos">servicos da MadeofIA</Link> ou mande contexto
          pelo <Link href="/contato">contato</Link>.
        </p>
      </BlogArticlePage>
    </>
  );
}
