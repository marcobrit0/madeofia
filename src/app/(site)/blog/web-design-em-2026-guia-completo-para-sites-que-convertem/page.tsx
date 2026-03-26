import type { Metadata } from "next";
import Link from "next/link";
import {
  createBlogPostMetadata,
  createBlogPostSchemas,
  serializeJsonLd,
} from "../seo";
import { firstBlogPost } from "../posts";

export const metadata: Metadata = createBlogPostMetadata(firstBlogPost);

const structuredData = createBlogPostSchemas(firstBlogPost);

const sectionTitleClassName =
  "font-mono text-3xl md:text-4xl text-white leading-tight mt-16 mb-6";
const subTitleClassName =
  "font-mono text-2xl md:text-[1.75rem] text-white leading-tight mt-12 mb-4";
const paragraphClassName = "text-[17px] leading-8 text-white/72 mb-6";

export default function WebDesignGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(structuredData),
        }}
      />

      <section className="pt-40 pb-14 max-w-7xl mx-auto px-6">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#4ade80]">
              // blog post
            </span>
            <span className="text-sm text-white/35">
              {firstBlogPost.publishedLabel}
            </span>
            <span className="text-sm text-white/35">{firstBlogPost.readingTime}</span>
            <span className="text-sm text-white/35">{firstBlogPost.category}</span>
          </div>

          <h1 className="font-mono text-4xl md:text-7xl text-white leading-[0.95] mb-6">
            {firstBlogPost.title}
          </h1>

          <p className="text-lg md:text-xl leading-8 text-white/60 max-w-3xl mb-8">
            {firstBlogPost.metaDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {firstBlogPost.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/52"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="max-w-3xl">
            <div className="border-l border-[#4ade80] pl-6 mb-10">
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-[#4ade80] mb-3">
                Resumo rápido
              </p>
              <p className="text-lg leading-8 text-white/72">
                Web design é a diferença entre um site que só existe e um site
                que explica valor, orienta a decisão e gera ação.
              </p>
            </div>

            <p className={paragraphClassName}>
              Vamos direto ao ponto: a maioria dos sites brasileiros é feia,
              lenta e não converte. E o pior, quem pagou por eles acha que está
              tudo bem porque &quot;pelo menos tem um site&quot;.
            </p>
            <p className={paragraphClassName}>
              Não. Ter um site ruim é pior do que não ter site nenhum. Porque um
              site ruim transmite uma mensagem clara: &quot;essa empresa não se
              importa o suficiente.&quot;
            </p>
            <p className={paragraphClassName}>
              Web design não é decoração. É arquitetura de persuasão. É a
              diferença entre um visitante que vira cliente e um visitante que
              fecha a aba em 3 segundos.
            </p>
            <p className={paragraphClassName}>
              Se você quer entender o que realmente importa em web design em
              2026, este guia foi feito pra você.
            </p>

            <h2 className={sectionTitleClassName}>O Que é Web Design (de Verdade)</h2>
            <p className={paragraphClassName}>
              Web design é a disciplina que combina estética, usabilidade e
              estratégia para criar experiências digitais que cumprem um
              objetivo. Esse objetivo pode ser vender, captar leads, educar ou
              construir marca, mas sempre existe um objetivo.
            </p>
            <p className={paragraphClassName}>
              Um bom web design responde três perguntas em menos de 5 segundos:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "O que essa empresa faz?",
                "Por que eu deveria me importar?",
                "O que eu faço agora?",
              ].map((item, index) => (
                <li key={item} className="flex gap-4 text-[17px] leading-8 text-white/72">
                  <span className="text-[#4ade80] shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={paragraphClassName}>
              Se o seu site não responde essas três perguntas acima da dobra,
              antes do usuário rolar a página, você está perdendo dinheiro.
              Simples assim.
            </p>

            <h2 className={sectionTitleClassName}>
              Os 7 Princípios de Web Design que Separam Amadores de Profissionais
            </h2>

            <h3 className={subTitleClassName}>1. Hierarquia Visual Clara</h3>
            <p className={paragraphClassName}>
              O olho humano não lê, ele escaneia. Um bom design guia esse
              escaneamento de forma intencional. Títulos grandes, subtítulos
              menores, texto de corpo menor ainda. Contraste entre elementos
              importantes e secundários. Espaço em branco generoso.
            </p>
            <p className={paragraphClassName}>
              A regra é: se tudo é importante, nada é importante.
            </p>

            <h3 className={subTitleClassName}>2. Performance é Design</h3>
            <p className={paragraphClassName}>
              Um site que demora mais de 3 segundos para carregar perde 53% dos
              visitantes mobile. Não importa quão bonito é o seu layout se
              ninguém fica pra ver ele.
            </p>
            <p className={paragraphClassName}>
              Em 2026, performance não é mais diferencial, é pré-requisito. Core
              Web Vitals do Google impactam diretamente seu ranqueamento. Sites
              lentos são punidos tanto pelos usuários quanto pelo algoritmo.
            </p>

            <h3 className={subTitleClassName}>3. Mobile-First Não é Opcional</h3>
            <p className={paragraphClassName}>
              Mais de 70% do tráfego web no Brasil vem de dispositivos móveis. Se
              o seu site foi pensado primeiro para desktop e depois adaptado para
              mobile, você está fazendo ao contrário.
            </p>
            <p className={paragraphClassName}>
              Mobile-first significa projetar a experiência começando pela tela
              menor, onde cada pixel importa mais, e depois expandir para telas
              maiores. É uma mudança de mentalidade, não só de código.
            </p>

            <h3 className={subTitleClassName}>4. Tipografia é 90% do Design</h3>
            <p className={paragraphClassName}>
              A escolha da fonte, o tamanho, o espaçamento entre linhas e a
              largura do parágrafo determinam se o seu conteúdo será lido ou
              ignorado. Uma boa tipografia é invisível, você não nota ela, você
              só consegue ler com conforto. Uma tipografia ruim grita.
            </p>
            <p className={paragraphClassName}>
              Regras práticas: no máximo 2 famílias tipográficas, line-height de
              pelo menos 1.5x e parágrafos com no máximo 75 caracteres por linha.
            </p>

            <h3 className={subTitleClassName}>
              5. CTAs que Realmente Chamam à Ação
            </h3>
            <p className={paragraphClassName}>
              &quot;Saiba mais&quot; não é um CTA. &quot;Fale conosco&quot; é
              genérico. Um bom call-to-action é específico, orientado a benefício
              e visualmente destacado.
            </p>
            <p className={paragraphClassName}>
              Compare: &quot;Saiba mais&quot; vs. &quot;Quero meu site pronto em 7
              dias&quot;. Qual gera mais clique? O segundo, sempre. Porque ele
              comunica um resultado concreto.
            </p>

            <h3 className={subTitleClassName}>6. Consistência Visual</h3>
            <p className={paragraphClassName}>
              Cores, fontes, ícones, botões e espaçamentos precisam seguir um
              sistema. Quando cada página do seu site parece ter sido feita por
              uma pessoa diferente, a confiança do visitante despenca.
            </p>
            <p className={paragraphClassName}>
              Design systems existem por um motivo. Mesmo para sites pequenos,
              manter um padrão visual coerente comunica profissionalismo.
            </p>

            <h3 className={subTitleClassName}>7. Acessibilidade</h3>
            <p className={paragraphClassName}>
              Um site que não funciona para pessoas com deficiência visual,
              motora ou cognitiva não é apenas excludente, é um site incompleto.
              Contraste adequado, textos alternativos em imagens, navegação por
              teclado e fontes legíveis são o mínimo.
            </p>
            <p className={paragraphClassName}>
              No Brasil, a Lei Brasileira de Inclusão, Lei 13.146/2015, exige
              acessibilidade digital. Além de ser a coisa certa a fazer, é
              obrigação legal.
            </p>

            <h2 className={sectionTitleClassName}>
              Tendências de Web Design que Importam em 2026
            </h2>
            <p className={paragraphClassName}>
              Nem toda tendência vale a pena seguir. Aqui estão as que realmente
              impactam resultados:
            </p>

            <h3 className={subTitleClassName}>Design com IA Generativa</h3>
            <p className={paragraphClassName}>
              Ferramentas de IA estão revolucionando o processo de criação. Não
              para substituir designers, mas para acelerar prototipagem, gerar
              variações de layout e personalizar experiências em tempo real com
              base no comportamento do usuário.
            </p>
            <p className={paragraphClassName}>
              Empresas que usam IA no processo criativo entregam mais rápido,
              iteram mais e testam mais hipóteses. Quem ainda faz tudo no braço
              está ficando para trás.
            </p>

            <h3 className={subTitleClassName}>
              Microinterações e Animações Sutis
            </h3>
            <p className={paragraphClassName}>
              Botões que respondem ao hover, transições suaves entre seções e
              feedback visual quando o usuário completa uma ação.
              Microinterações não são firula, são comunicação. Elas dizem ao
              usuário &quot;sua ação foi registrada&quot; sem precisar de texto.
            </p>

            <h3 className={subTitleClassName}>
              Design Minimalista com Propósito
            </h3>
            <p className={paragraphClassName}>
              Minimalismo não é colocar pouca coisa na tela. É remover tudo que
              não contribui para o objetivo. Cada elemento precisa justificar sua
              existência. Se não ajuda o usuário a completar a ação desejada,
              tira.
            </p>

            <h3 className={subTitleClassName}>Personalização Dinâmica</h3>
            <p className={paragraphClassName}>
              Sites que mostram o mesmo conteúdo para todo mundo estão perdendo
              oportunidade. Em 2026, personalização baseada em localização,
              comportamento anterior e estágio do funil é viável mesmo para
              empresas menores, com as ferramentas certas.
            </p>

            <h2 className={sectionTitleClassName}>
              Os Erros de Web Design que Custam Caro
            </h2>
            <p className={paragraphClassName}>
              Depois de analisar centenas de sites de empresas brasileiras, estes
              são os erros mais comuns:
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  title: "Slider na home.",
                  body: "Ninguém lê o segundo slide. Dados mostram que menos de 1% dos usuários clicam em sliders. Substitua por uma proposta de valor clara e estática.",
                },
                {
                  title: 'Página "Sobre" antes da proposta de valor.',
                  body: "Ninguém se importa com a sua história antes de entender como você resolve o problema deles.",
                },
                {
                  title: "Formulários gigantes.",
                  body: "Cada campo adicional reduz a taxa de conversão em aproximadamente 10%. Peça só o essencial.",
                },
                {
                  title: "Imagens genéricas de banco.",
                  body: "Pessoas apertando mãos, equipes diversas sorrindo em reuniões, post-its em paredes de vidro. Seu visitante já viu essas imagens mil vezes. Use fotos reais ou ilustrações originais.",
                },
                {
                  title: "Não ter HTTPS.",
                  body: "Em 2026. Sério. Ainda tem gente sem SSL.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 p-6">
                  <p className="font-mono text-lg text-white mb-3">{item.title}</p>
                  <p className="text-[17px] leading-8 text-white/68">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className={sectionTitleClassName}>
              Como a MadeofIA Aborda Web Design
            </h2>
            <p className={paragraphClassName}>
              Na{" "}
              <Link href="/servicos" className="text-[#4ade80] hover:text-white transition-colors">
                MadeofIA
              </Link>
              , a gente não faz &quot;site bonito&quot;. A gente projeta máquinas
              de conversão.
            </p>
            <p className={paragraphClassName}>
              Cada projeto começa com estratégia: quem é o público, qual o
              objetivo, qual a jornada do usuário. Só depois vem o design. E
              usamos IA no processo, não como muleta, mas como acelerador.
              Prototipagem mais rápida, testes A/B desde o dia 1 e performance
              otimizada por padrão.
            </p>
            <p className={paragraphClassName}>
              O resultado: sites que carregam em menos de 2 segundos, convertem
              acima da média do mercado e não parecem template comprado por R$ 50.
            </p>
            <p className={paragraphClassName}>
              Se o seu site atual não está trazendo resultado,{" "}
              <Link href="/contato" className="text-[#4ade80] hover:text-white transition-colors">
                fala com a gente
              </Link>
              . Sem compromisso, sem papo de vendedor. Só uma conversa honesta
              sobre o que pode melhorar.
            </p>

            <h2 className={sectionTitleClassName}>Conclusão</h2>
            <p className={paragraphClassName}>
              Web design é a fundação da sua presença digital. Não é gasto, é
              investimento. E como todo investimento, a diferença entre retorno
              positivo e dinheiro jogado fora está na qualidade da execução.
            </p>
            <p className={paragraphClassName}>
              Pare de tratar seu site como cartão de visita digital. Ele é seu
              vendedor 24 horas, sua vitrine e seu ponto de contato mais
              importante. Trate ele como tal.
            </p>
            <p className={paragraphClassName}>
              Os princípios não mudaram: clareza, velocidade, foco no usuário e
              design com propósito. O que mudou são as ferramentas, e quem souber
              usar as ferramentas certas vai ter uma vantagem absurda sobre quem
              ainda faz as coisas do jeito antigo.
            </p>
          </article>

          <aside className="lg:pt-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  Neste guia
                </p>
                <ul className="space-y-4">
                  {firstBlogPost.summary.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/58">
                      <span className="text-[#4ade80] shrink-0">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  SEO principal
                </p>
                <div className="space-y-3 text-sm text-white/58">
                  <p>
                    <span className="text-white">Primary keyword:</span>{" "}
                    {firstBlogPost.primaryKeyword}
                  </p>
                  <p>
                    <span className="text-white">Secondary keywords:</span>{" "}
                    {firstBlogPost.secondaryKeywords.join(", ")}
                  </p>
                </div>
              </div>

              <div className="border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  Precisa de ajuda?
                </p>
                <p className="text-sm leading-6 text-white/58 mb-6">
                  Se o seu layout atual não comunica valor ou não converte, a
                  MadeofIA pode redesenhar a experiência completa.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex w-full items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-5 py-3 bg-[#4ade80] text-[#080807] font-bold hover:bg-[#4ade80]/90 transition-colors"
                >
                  Pedir análise do site
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#4ade80] mb-4">
            // próximo passo
          </p>
          <h2 className="font-mono text-4xl md:text-5xl text-white leading-tight mb-6">
            Seu site atual faz essas três
            <br />
            respostas em menos de 5 segundos?
          </h2>
          <p className="text-white/58 leading-8 max-w-2xl mx-auto mb-8">
            Se a resposta é não, existe espaço claro para melhorar mensagem,
            estrutura, performance e conversão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-8 py-4 bg-[#4ade80] text-[#080807] font-bold hover:bg-[#4ade80]/90 transition-colors"
            >
              Falar com a MadeofIA
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-8 py-4 border border-white/10 text-white hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
            >
              Voltar para o blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
