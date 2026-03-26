import type { Metadata } from "next";
import Link from "next/link";
import {
  createBlogPostMetadata,
  createBlogPostSchemas,
  serializeJsonLd,
} from "../seo";
import { secondBlogPost } from "../posts";

export const metadata: Metadata = createBlogPostMetadata(secondBlogPost);

const structuredData = createBlogPostSchemas(secondBlogPost);

const sectionTitleClassName =
  "font-mono text-3xl md:text-4xl text-white leading-tight mt-16 mb-6";
const subTitleClassName =
  "font-mono text-2xl md:text-[1.75rem] text-white leading-tight mt-12 mb-4";
const paragraphClassName = "text-[17px] leading-8 text-white/72 mb-6";

const landingPageExamples = [
  {
    title: "Exemplo 1: Landing Page de Serviço (Agência/Consultoria)",
    structure:
      "Headline com resultado prometido → Subheadline com diferencial → 3 cases de sucesso com números → Processo em 3 passos → Depoimentos → FAQ → CTA para agendar call.",
    reason:
      "Serviços são intangíveis. Cases e depoimentos carregam a credibilidade que o visitante precisa para avançar.",
  },
  {
    title: "Exemplo 2: Landing Page de SaaS / Software",
    structure:
      "Headline focada no problema → Vídeo demo de 60 segundos → 3-4 benefícios com ícones → Comparativo com concorrentes → Planos e preços → CTA para free trial.",
    reason:
      "Software precisa ser visto em ação. O vídeo reduz ansiedade de uso e o trial diminui o risco percebido.",
  },
  {
    title: "Exemplo 3: Landing Page de Captura de Lead (Ebook/Webinar)",
    structure:
      "Headline sobre o que o lead vai aprender → 3-5 bullet points do conteúdo → Imagem do material → Formulário com 2-3 campos → Prova social.",
    reason:
      "A proposta é simples e a fricção precisa ser mínima. Menos campos quase sempre significam mais conversão.",
  },
  {
    title: "Exemplo 4: Landing Page de E-commerce (Produto Único)",
    structure:
      "Foto ou vídeo do produto em uso → Headline com benefício principal → Reviews de clientes → Especificações → Garantia → CTA de compra com urgência.",
    reason:
      "Para produto físico, visual e prova social carregam o peso. Garantia fecha a lacuna de confiança.",
  },
  {
    title: "Exemplo 5: Landing Page de Evento ou Curso",
    structure:
      "Nome e data do evento → O que o participante vai ganhar → Credenciais do palestrante → Programação resumida → Depoimentos de edições anteriores → CTA com contagem regressiva.",
    reason:
      "Eventos têm deadline real. Isso cria urgência legítima e aumenta a sensibilidade à autoridade de quem ensina.",
  },
  {
    title: "Exemplo 6: Landing Page de App Mobile",
    structure:
      "Mockup do app em smartphone → Headline sobre o problema resolvido → 3 telas principais com explicação → Avaliação da App Store → CTA para download.",
    reason:
      "O mockup contextualiza o produto e as telas reduzem a incerteza sobre o que o app faz na prática.",
  },
  {
    title: "Exemplo 7: Landing Page Comparativa (Você vs. Concorrente)",
    structure:
      "Headline sobre migração → Tabela comparativa → 3 diferenciais detalhados → Case de migração → CTA final.",
    reason:
      "Esse formato captura tráfego de fundo de funil, quando a pessoa já está comparando alternativas e quer tomar decisão.",
  },
];

const conversionKillers = [
  {
    title: "Menu de navegação",
    body: "Se a sua landing page tem menu, ela já está oferecendo fuga para o visitante. Landing page boa corta distração.",
  },
  {
    title: "Múltiplos CTAs competindo",
    body: "Comprar, baixar material e seguir no Instagram ao mesmo tempo só cria ruído. Cada página precisa de uma ação principal.",
  },
  {
    title: "Texto demais acima da dobra",
    body: "O visitante decide em poucos segundos se continua ou sai. Se ele precisa ler demais para entender a oferta, você já perdeu atenção.",
  },
  {
    title: "Página lenta",
    body: "Tráfego pago em página lenta é um vazamento de caixa. Em mobile, qualquer atraso derruba a chance de conversão.",
  },
  {
    title: "Falta de teste",
    body: "Headline, CTA, imagem e ordem dos blocos precisam ser testados. A primeira versão raramente é a melhor versão.",
  },
];

export default function LandingPageExamplesPage() {
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
              {secondBlogPost.publishedLabel}
            </span>
            <span className="text-sm text-white/35">{secondBlogPost.readingTime}</span>
            <span className="text-sm text-white/35">{secondBlogPost.category}</span>
          </div>

          <h1 className="font-mono text-4xl md:text-7xl text-white leading-[0.95] mb-6">
            {secondBlogPost.title}
          </h1>

          <p className="text-lg md:text-xl leading-8 text-white/60 max-w-3xl mb-8">
            {secondBlogPost.metaDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {secondBlogPost.tags.map((tag) => (
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
                Landing page não é home de site. É uma página com um único
                objetivo, desenhada para transformar clique em ação.
              </p>
            </div>

            <p className={paragraphClassName}>
              Você já clicou num anúncio, caiu numa página e em poucos segundos
              já sabia exatamente o que fazer? Isso é uma landing page bem feita.
            </p>
            <p className={paragraphClassName}>
              Agora pensa nas vezes em que você clicou, caiu numa página confusa,
              não entendeu a oferta e fechou a aba. Isso é tráfego pago sendo
              queimado sem necessidade.
            </p>
            <p className={paragraphClassName}>
              Landing page é a peça mais importante do funil de aquisição quando
              existe mídia, campanha ou oferta específica. Neste guia, você vai
              ver estruturas que funcionam, por que elas funcionam e como adaptar
              isso para o seu negócio.
            </p>

            <h2 className={sectionTitleClassName}>
              O Que é Uma Landing Page (e o Que Não é)
            </h2>
            <p className={paragraphClassName}>
              Uma landing page é uma página com um único objetivo. Pode ser captar
              email, agendar demonstração, vender produto, baixar material ou
              iniciar uma conversa. O ponto central é que todo elemento existe
              para levar o visitante para essa única ação.
            </p>
            <p className={paragraphClassName}>
              Home de site tem menu, vários caminhos, múltiplas mensagens e
              diferentes tipos de intenção. Landing page é o oposto: um corredor
              sem portas laterais.
            </p>

            <h2 className={sectionTitleClassName}>
              A Anatomia de Uma Landing Page que Converte
            </h2>
            <p className={paragraphClassName}>
              Antes dos exemplos, você precisa entender a estrutura. As landing
              pages que convertem quase sempre combinam estes sete blocos:
            </p>

            <h3 className={subTitleClassName}>1. Headline Matadora</h3>
            <p className={paragraphClassName}>
              A headline segura ou perde a visita. Ela precisa comunicar o
              benefício principal de forma específica e imediata.
            </p>
            <div className="border border-white/10 p-6 mb-8 space-y-4">
              <p className="text-[17px] leading-8 text-white/72">
                <span className="text-white">Ruim:</span> &quot;Bem-vindo à nossa
                plataforma&quot;
              </p>
              <p className="text-[17px] leading-8 text-white/72">
                <span className="text-white">Bom:</span> &quot;Crie seu site
                profissional em 7 dias, sem saber programar&quot;
              </p>
            </div>

            <h3 className={subTitleClassName}>2. Subheadline de Suporte</h3>
            <p className={paragraphClassName}>
              Complementa a promessa com detalhe, prova ou objeção vencida. É
              onde você adiciona contexto sem atrapalhar a clareza da oferta.
            </p>

            <h3 className={subTitleClassName}>3. Imagem ou Vídeo Hero</h3>
            <p className={paragraphClassName}>
              Nada de foto genérica de banco. Se você vende software, mostre a
              interface. Se vende serviço, mostre o resultado. O hero precisa
              provar que a oferta é concreta.
            </p>

            <h3 className={subTitleClassName}>4. Benefícios, Não Features</h3>
            <p className={paragraphClassName}>
              Visitante compra resultado, não especificação técnica. Primeiro
              deixe claro o ganho. Depois use feature como prova.
            </p>
            <div className="border border-white/10 p-6 mb-8 space-y-4">
              <p className="text-[17px] leading-8 text-white/72">
                <span className="text-white">Feature:</span> &quot;Hospedagem com
                CDN global&quot;
              </p>
              <p className="text-[17px] leading-8 text-white/72">
                <span className="text-white">Benefício:</span> &quot;Seu site
                carrega em menos de 2 segundos, em qualquer lugar do Brasil&quot;
              </p>
            </div>

            <h3 className={subTitleClassName}>5. Prova Social</h3>
            <p className={paragraphClassName}>
              Depoimento específico, logo de cliente, número de resultado, case
              de uso. Sem prova social, a promessa continua sendo apenas uma
              promessa.
            </p>

            <h3 className={subTitleClassName}>6. CTA Claro e Repetido</h3>
            <p className={paragraphClassName}>
              O botão principal precisa aparecer mais de uma vez, com texto
              orientado à ação e ao resultado.
            </p>

            <h3 className={subTitleClassName}>7. Tratamento de Objeções</h3>
            <p className={paragraphClassName}>
              FAQ, política de cancelamento, garantias, tempo de entrega. A parte
              final da página deve responder o que normalmente trava a decisão.
            </p>

            <h2 className={sectionTitleClassName}>
              7 Exemplos de Estrutura de Landing Page por Tipo de Negócio
            </h2>
            <div className="space-y-6 mb-10">
              {landingPageExamples.map((example) => (
                <div key={example.title} className="border border-white/10 p-6">
                  <h3 className="font-mono text-xl text-white mb-4">
                    {example.title}
                  </h3>
                  <p className="text-[17px] leading-8 text-white/72 mb-4">
                    <span className="text-white">Estrutura:</span>{" "}
                    {example.structure}
                  </p>
                  <p className="text-[17px] leading-8 text-white/68">
                    <span className="text-white">Por que funciona:</span>{" "}
                    {example.reason}
                  </p>
                </div>
              ))}
            </div>

            <h2 className={sectionTitleClassName}>
              Erros que Destroem a Conversão da Sua Landing Page
            </h2>
            <div className="space-y-5 mb-10">
              {conversionKillers.map((item) => (
                <div key={item.title} className="border border-white/10 p-6">
                  <p className="font-mono text-lg text-white mb-3">{item.title}</p>
                  <p className="text-[17px] leading-8 text-white/68">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className={sectionTitleClassName}>
              Como a MadeofIA Cria Landing Pages
            </h2>
            <p className={paragraphClassName}>
              Na{" "}
              <Link href="/servicos" className="text-[#4ade80] hover:text-white transition-colors">
                MadeofIA
              </Link>
              , landing page é disciplina de conversão. Primeiro vem público,
              oferta e objetivo. Depois vem wireframe, copy e design.
            </p>
            <p className={paragraphClassName}>
              A gente usa IA para acelerar variações, testar hipóteses e encurtar
              o caminho entre estratégia e lançamento. O resultado são páginas
              leves, claras e focadas em performance real.
            </p>
            <p className={paragraphClassName}>
              Se você precisa de uma landing page que realmente converta, em vez
              de uma página bonita que só recebe clique,{" "}
              <Link href="/contato" className="text-[#4ade80] hover:text-white transition-colors">
                fala com a gente
              </Link>
              .
            </p>

            <h2 className={sectionTitleClassName}>Conclusão</h2>
            <p className={paragraphClassName}>
              Landing page não é complicada. O difícil não é a fórmula, é a
              execução. Copy precisa, design limpo, carregamento rápido e teste
              contínuo são o que separam página medíocre de página lucrativa.
            </p>
            <p className={paragraphClassName}>
              Antes de colocar mais verba em tráfego, arrume a página de destino.
              Cada clique pago que cai numa landing page ruim é um custo
              desnecessário.
            </p>
          </article>

          <aside className="lg:pt-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  Neste guia
                </p>
                <ul className="space-y-4">
                  {secondBlogPost.summary.map((item) => (
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
                    {secondBlogPost.primaryKeyword}
                  </p>
                  <p>
                    <span className="text-white">Secondary keywords:</span>{" "}
                    {secondBlogPost.secondaryKeywords.join(", ")}
                  </p>
                </div>
              </div>

              <div className="border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  Precisa de ajuda?
                </p>
                <p className="text-sm leading-6 text-white/58 mb-6">
                  Se você está mandando mídia paga para páginas que não convertem,
                  a MadeofIA pode redesenhar oferta, estrutura e CTA.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex w-full items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-5 py-3 bg-[#4ade80] text-[#080807] font-bold hover:bg-[#4ade80]/90 transition-colors"
                >
                  Pedir análise da landing page
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
            Seu tráfego está chegando numa página
            <br />
            que realmente pede uma ação?
          </h2>
          <p className="text-white/58 leading-8 max-w-2xl mx-auto mb-8">
            Se a página dispersa, demora a carregar ou não deixa claro o próximo
            passo, existe espaço imediato para melhorar conversão.
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
