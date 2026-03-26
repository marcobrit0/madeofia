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
import { firstBlogPost } from "../posts";

export const metadata: Metadata = createBlogPostMetadata(firstBlogPost);

const structuredData = createBlogPostSchemas(firstBlogPost);

export default function WebDesignGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />

      <BlogArticlePage
        post={firstBlogPost}
        quickSummary="Web design e a camada que transforma uma empresa em algo compreensivel, confiavel e acionavel em poucos segundos."
        asideSections={[
          {
            title: "Neste guia",
            content: (
              <ul>
                {firstBlogPost.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          },
          {
            title: "Precisa de ajuda?",
            content: (
              <p>
                Se o layout atual nao comunica valor nem orienta a decisao, a
                MadeofIA pode redesenhar a experiencia completa.
              </p>
            ),
            action: {
              href: "/contato",
              label: "Pedir analise do site",
            },
          },
        ]}
      >
        <p>
          A maior parte dos sites brasileiros nao falha por falta de cor, efeito
          ou criatividade. Falha porque nao deixa claro o que a empresa faz, por
          que aquilo importa e qual passo o visitante deve tomar agora.
        </p>
        <p>
          Quando isso acontece, o site vira um cartao de visitas caro: existe,
          mas nao ajuda a vender, nao facilita conversa e nao sustenta busca
          organica com qualidade.
        </p>

        <h2>O que web design realmente faz</h2>
        <p>
          Web design e arquitetura de percepcao. Ele organiza hierarquia,
          linguagem, tipografia, ritmo, contraste e fluxo para transformar
          atencao em entendimento.
        </p>
        <ul>
          <li>Explica o valor da empresa acima da dobra.</li>
          <li>Reduz atrito na leitura e na navegacao.</li>
          <li>Direciona o usuario para uma acao clara.</li>
        </ul>

        <h2>Os principios que separam paginas amadoras de sites profissionais</h2>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>Hierarquia visual</h4>
            <p>
              O olhar precisa saber para onde ir primeiro. Titulo, apoio, prova
              e CTA nao podem competir entre si.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Performance</h4>
            <p>
              Um site lento parece menos confiavel. Velocidade e percepcao de
              marca andam juntas.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Mobile-first</h4>
            <p>
              Se a experiencia quebra no celular, ela quebra no contexto real de
              uso do publico.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Consistencia</h4>
            <p>
              Quando cada pagina parece pertencer a uma empresa diferente, a
              confianca cai rapidamente.
            </p>
          </section>
        </div>

        <h3>Tipografia decide legibilidade</h3>
        <p>
          A maior parte do design de um site e texto. Escolha de fonte,
          espacamento, comprimento de linha e contraste determinam se a leitura
          flui ou trava. Isso afeta permanencia, entendimento e conversao.
        </p>

        <h3>CTA nao pode ser generico</h3>
        <p>
          "Saiba mais" quase nunca e suficiente. O botao precisa indicar
          resultado ou proximo passo concreto. CTA bom reduz duvida.
        </p>

        <h2>Tendencias que importam em 2026</h2>
        <p>
          Nem toda tendencia merece espaco na tela. As que importam mesmo sao as
          que aumentam clareza, velocidade de iteracao e qualidade da experiencia.
        </p>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>IA no processo criativo</h4>
            <p>
              Acelerando prototipagem, exploracao de layout e refinamento de copy.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Microinteracoes uteis</h4>
            <p>
              Feedback visual sutil para orientar decisao e confirmar acao.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Minimalismo com funcao</h4>
            <p>
              Menos elementos, mais foco. Remover ruido e diferente de empobrecer
              a interface.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Personalizacao</h4>
            <p>
              Conteudo e narrativa adaptados ao contexto, ao momento e ao tipo
              de visitante.
            </p>
          </section>
        </div>

        <h2>Os erros que mais destroem conversao</h2>
        <ul>
          <li>Hero bonito que nao explica a oferta.</li>
          <li>Excesso de secoes sem prioridade real.</li>
          <li>Tom visual inconsistente entre paginas.</li>
          <li>Navegacao ambigua e CTA sem hierarquia.</li>
        </ul>
        <p>
          Quando esses problemas aparecem juntos, nem trafego pago nem SEO
          sustentam resultado por muito tempo. O site perde credibilidade antes
          mesmo de a conversa comercial comecar.
        </p>

        <h2>Conclusao</h2>
        <p>
          Web design bom nao e decoracao. E uma interface de venda, explicacao e
          confianca. Se o seu site nao ajuda o usuario a entender, decidir e agir,
          ele esta deixando negocio na mesa.
        </p>
        <p>
          Se quiser alinhar design, codigo e estrategia no mesmo projeto, veja os{" "}
          <Link href="/servicos">servicos da MadeofIA</Link> ou siga direto para{" "}
          <Link href="/contato">contato</Link>.
        </p>
      </BlogArticlePage>
    </>
  );
}
