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
        quickSummary="Web design é a camada que transforma uma empresa em algo compreensível, confiável e acionável em poucos segundos."
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
                Se o layout atual não comunica valor nem orienta a decisão, a
                MadeofIA pode redesenhar a experiência completa.
              </p>
            ),
            action: {
              href: "/contato",
              label: "Pedir análise do site",
            },
          },
        ]}
      >
        <p>
          A maior parte dos sites brasileiros não falha por falta de cor, efeito
          ou criatividade. Falha porque não deixa claro o que a empresa faz, por
          que aquilo importa e qual passo o visitante deve tomar agora.
        </p>
        <p>
          Quando isso acontece, o site vira um cartão de visitas caro: existe,
          mas não ajuda a vender, não facilita conversa e não sustenta busca
          orgânica com qualidade.
        </p>

        <h2>O que web design realmente faz</h2>
        <p>
          Web design é arquitetura de percepção. Ele organiza hierarquia,
          linguagem, tipografia, ritmo, contraste e fluxo para transformar
          atenção em entendimento.
        </p>
        <ul>
          <li>Explica o valor da empresa acima da dobra.</li>
          <li>Reduz atrito na leitura e na navegação.</li>
          <li>Direciona o usuário para uma ação clara.</li>
        </ul>

        <h2>Os princípios que separam páginas amadoras de sites profissionais</h2>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>Hierarquia visual</h4>
            <p>
              O olhar precisa saber para onde ir primeiro. Título, apoio, prova
              e CTA não podem competir entre si.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Performance</h4>
            <p>
              Um site lento parece menos confiável. Velocidade e percepção de
              marca andam juntas.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Mobile-first</h4>
            <p>
              Se a experiência quebra no celular, ela quebra no contexto real de
              uso do público.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Consistência</h4>
            <p>
              Quando cada página parece pertencer a uma empresa diferente, a
              confiança cai rapidamente.
            </p>
          </section>
        </div>

        <h3>Tipografia decide legibilidade</h3>
        <p>
          A maior parte do design de um site é texto. Escolha de fonte,
          espaçamento, comprimento de linha e contraste determinam se a leitura
          flui ou trava. Isso afeta permanência, entendimento e conversão.
        </p>

        <h3>CTA não pode ser genérico</h3>
        <p>
          "Saiba mais" quase nunca é suficiente. O botão precisa indicar
          resultado ou próximo passo concreto. CTA bom reduz dúvida.
        </p>

        <h2>Tendências que importam em 2026</h2>
        <p>
          Nem toda tendência merece espaço na tela. As que importam mesmo são as
          que aumentam clareza, velocidade de iteração e qualidade da experiência.
        </p>
        <div className={styles.proseGrid}>
          <section className={styles.highlightCard}>
            <h4>IA no processo criativo</h4>
            <p>
              Acelerando prototipagem, exploração de layout e refinamento de copy.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Microinterações úteis</h4>
            <p>
              Feedback visual sutil para orientar decisão e confirmar ação.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Minimalismo com função</h4>
            <p>
              Menos elementos, mais foco. Remover ruído é diferente de empobrecer
              a interface.
            </p>
          </section>
          <section className={styles.highlightCard}>
            <h4>Personalização</h4>
            <p>
              Conteúdo e narrativa adaptados ao contexto, ao momento e ao tipo
              de visitante.
            </p>
          </section>
        </div>

        <h2>Os erros que mais destroem conversão</h2>
        <ul>
          <li>Hero bonito que não explica a oferta.</li>
          <li>Excesso de seções sem prioridade real.</li>
          <li>Tom visual inconsistente entre páginas.</li>
          <li>Navegação ambígua e CTA sem hierarquia.</li>
        </ul>
        <p>
          Quando esses problemas aparecem juntos, nem tráfego pago nem SEO
          sustentam resultado por muito tempo. O site perde credibilidade antes
          mesmo de a conversa comercial começar.
        </p>

        <h2>Conclusão</h2>
        <p>
          Web design bom não é decoração. É uma interface de venda, explicação e
          confiança. Se o seu site não ajuda o usuário a entender, decidir e agir,
          ele está deixando negócio na mesa.
        </p>
        <p>
          Se quiser alinhar design, código e estratégia no mesmo projeto, veja os{" "}
          <Link href="/servicos">serviços da MadeofIA</Link> ou siga direto para{" "}
          <Link href="/contato">contato</Link>.
        </p>
      </BlogArticlePage>
    </>
  );
}
