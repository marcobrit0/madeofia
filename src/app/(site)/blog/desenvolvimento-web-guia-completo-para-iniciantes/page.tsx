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
        quickSummary="Desenvolvimento web é o conjunto de decisões que transforma uma necessidade de negócio em uma experiência digital funcional, confiável e escalável."
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
                A melhor proposta técnica é a que traduz complexidade em decisão
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
          jargão. Mas, na prática, estamos falando de um sistema digital que
          precisa funcionar bem para o usuário e para a operação do negócio.
        </p>
        <p>
          O problema é que muita proposta técnica usa a complexidade para gerar
          dependência ou confundir prioridade. O cliente sai da reunião sabendo
          nomes de tecnologia, mas não entende o que está realmente comprando.
        </p>

        <h2>O que entra em desenvolvimento web</h2>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>Front-end</h4>
            <p>O que o usuário vê, toca e interpreta na interface.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Back-end</h4>
            <p>Regras, dados, integrações e processos que sustentam o produto.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Infraestrutura</h4>
            <p>Hospedagem, deploy, performance, observabilidade e segurança.</p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Produto</h4>
            <p>A decisão sobre o que entra, o que fica de fora e por quê.</p>
          </section>
        </div>

        <h2>As diferenças práticas entre front-end, back-end e full-stack</h2>
        <h3>Front-end</h3>
        <p>
          Resolve clareza, navegação, responsividade, interação e percepção de
          qualidade. É onde o usuário percebe se a empresa parece confiável ou
          improvisada.
        </p>

        <h3>Back-end</h3>
        <p>
          Cuida de autenticação, base de dados, regras de negócio, integrações,
          automações e tudo que não aparece diretamente na tela.
        </p>

        <h3>Full-stack</h3>
        <p>
          Liga as duas pontas e entende como interface, dados e infraestrutura
          precisam trabalhar juntas. Em projetos menores, isso evita handoff
          excessivo e perda de contexto.
        </p>

        <h2>Tipos de projeto que mudam prazo e orçamento</h2>
        <ul>
          <li>Site institucional: foco em narrativa, conversão e performance.</li>
          <li>Landing page: foco em uma única ação e uma única oferta.</li>
          <li>Blog ou hub editorial: foco em estrutura semântica e escala.</li>
          <li>MVP ou web app: foco em fluxo, regra de negócio e validação.</li>
        </ul>

        <h2>Como ler uma proposta técnica</h2>
        <p>
          Proposta boa explica objetivo, escopo, limite de revisão, cronograma,
          riscos e o que fica pronto ao final. Se o documento fala muito de stack
          e pouco de entrega, acenda o alerta.
        </p>
        <ul>
          <li>O problema de negócio está descrito com clareza.</li>
          <li>As entregas estão listadas sem ambiguidade.</li>
          <li>As exclusões também aparecem com honestidade.</li>
          <li>Existe critério objetivo de aprovação.</li>
        </ul>

        <h2>Tendências que realmente afetam desenvolvimento</h2>
        <p>
          IA no fluxo de trabalho, componentização mais madura, serverless,
          caching inteligente e design systems bem definidos aumentam velocidade
          sem sacrificar qualidade quando usados com critério.
        </p>

        <h2>Conclusão</h2>
        <p>
          Desenvolvimento web não é comprar código. É estruturar uma experiência
          digital que sustente uso, aquisição e evolução. Quanto mais clara a
          tradução disso na proposta, melhor a decisão.
        </p>
        <p>
          Se você quiser discutir o que faz sentido para o seu contexto, veja os{" "}
          <Link href="/servicos">serviços da MadeofIA</Link> ou mande contexto
          pelo <Link href="/contato">contato</Link>.
        </p>
      </BlogArticlePage>
    </>
  );
}
