import type { Metadata } from "next";
import Link from "next/link";
import {
  createBlogPostMetadata,
  createBlogPostSchemas,
  serializeJsonLd,
} from "../seo";
import { thirdBlogPost } from "../posts";

export const metadata: Metadata = createBlogPostMetadata(thirdBlogPost);

const structuredData = createBlogPostSchemas(thirdBlogPost);

const sectionTitleClassName =
  "font-mono text-3xl md:text-4xl text-white leading-tight mt-16 mb-6";
const subTitleClassName =
  "font-mono text-2xl md:text-[1.75rem] text-white leading-tight mt-12 mb-4";
const paragraphClassName = "text-[17px] leading-8 text-white/72 mb-6";

const projectTypes = [
  {
    title: "Site Institucional",
    body: "Serve para transmitir credibilidade, explicar a empresa e gerar contato. Parece simples, mas a execução muda tudo.",
    timing: "Prazo típico: 2-4 semanas",
    budget: "Faixa de investimento: R$ 3.000 a R$ 25.000",
    stack: "Tecnologias comuns: WordPress, Next.js, Webflow ou HTML/CSS puro",
  },
  {
    title: "Landing Page",
    body: "Página única focada em conversão. Menos páginas, mais estratégia por página.",
    timing: "Prazo típico: 1-2 semanas",
    budget: "Faixa de investimento: R$ 1.500 a R$ 10.000",
    stack: "Tecnologias comuns: frameworks front-end, Webflow ou Unbounce",
  },
  {
    title: "E-commerce",
    body: "Loja virtual com catálogo, carrinho, checkout e integrações. Complexidade cresce rápido com logística e ERP.",
    timing: "Prazo típico: 4-12 semanas",
    budget: "Faixa de investimento: R$ 10.000 a R$ 150.000+",
    stack: "Tecnologias comuns: Shopify, WooCommerce, VTEX ou solução customizada",
  },
  {
    title: "Aplicação Web",
    body: "CRM, dashboard, plataforma de cursos, SaaS, marketplace. Aqui front-end e back-end importam na mesma medida.",
    timing: "Prazo típico: 8-24 semanas",
    budget: "Faixa de investimento: R$ 30.000 a R$ 500.000+",
    stack: "Tecnologias comuns: React + Node.js, Next.js + Supabase, Vue.js + Python",
  },
  {
    title: "MVP",
    body: "Versão enxuta para validar uma hipótese antes de investir pesado. O foco é velocidade com inteligência.",
    timing: "Prazo típico: 4-8 semanas",
    budget: "Faixa de investimento: R$ 15.000 a R$ 80.000",
    stack: "Tecnologias comuns: qualquer stack moderna que maximize velocidade",
  },
];

const proposalChecklist = [
  "Escopo detalhado com páginas, funcionalidades e integrações.",
  "Cronograma com marcos intermediários, não só data final.",
  "Tecnologias especificadas e justificadas.",
  "Suporte pós-entrega definido com clareza.",
];

const proposalRedFlags = [
  "Preço muito abaixo do mercado para um escopo grande.",
  "Prazo curto demais para a complexidade prometida.",
  "Portfólio fraco, genérico ou baseado só em templates.",
  "Nenhuma pergunta sobre público, metas ou operação do negócio.",
  "Pagamento integral antecipado sem fases de entrega.",
  "Responsividade mobile tratada como extra e não como padrão.",
];

export default function DesenvolvimentoWebGuidePage() {
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
              {thirdBlogPost.publishedLabel}
            </span>
            <span className="text-sm text-white/35">{thirdBlogPost.readingTime}</span>
            <span className="text-sm text-white/35">{thirdBlogPost.category}</span>
          </div>

          <h1 className="font-mono text-4xl md:text-7xl text-white leading-[0.95] mb-6">
            {thirdBlogPost.title}
          </h1>

          <p className="text-lg md:text-xl leading-8 text-white/60 max-w-3xl mb-8">
            {thirdBlogPost.metaDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {thirdBlogPost.tags.map((tag) => (
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
                Desenvolvimento web não é um pacote misterioso de siglas. É a
                combinação de interface, lógica e infraestrutura para resolver um
                problema real online.
              </p>
            </div>

            <p className={paragraphClassName}>
              Você precisa de um site, sistema ou aplicação. Pesquisa por
              desenvolvimento web e cai num buraco de frameworks, jargão técnico
              e propostas que variam de R$ 500 a R$ 500.000.
            </p>
            <p className={paragraphClassName}>
              O problema não é a tecnologia. O problema é que quase ninguém
              traduz isso para linguagem de negócio. Este guia existe para
              explicar o que você está contratando sem enrolação.
            </p>

            <h2 className={sectionTitleClassName}>O Que é Desenvolvimento Web</h2>
            <p className={paragraphClassName}>
              Desenvolvimento web é o processo de criar aplicações que rodam na
              internet. Pode ser um site institucional, uma loja virtual, um
              sistema interno, um app web ou uma plataforma SaaS.
            </p>
            <p className={paragraphClassName}>
              Em qualquer projeto, existem duas frentes principais: o que o
              usuário vê e usa, e o que acontece nos bastidores para fazer aquilo
              funcionar.
            </p>

            <h2 className={sectionTitleClassName}>
              Front-End vs. Back-End vs. Full-Stack
            </h2>

            <h3 className={subTitleClassName}>Front-End: A Parte Visível</h3>
            <p className={paragraphClassName}>
              Front-end é tudo que aparece na tela: layout, tipografia, botões,
              formulários, animações, estados de erro, menus e interações.
            </p>
            <p className={paragraphClassName}>
              As bases continuam sendo HTML, CSS e JavaScript, mas frameworks como
              React, Next.js e Vue.js aceleram construção e manutenção.
            </p>
            <p className={paragraphClassName}>
              Como cliente, o que você precisa saber é simples: front-end mal
              feito significa site lento, layout quebrado no celular e experiência
              frustrante para quem deveria virar cliente.
            </p>

            <h3 className={subTitleClassName}>Back-End: Os Bastidores</h3>
            <p className={paragraphClassName}>
              Back-end é a lógica no servidor. Recebe formulário, salva dados,
              processa pagamento, envia e-mail, autentica usuário e integra
              sistemas.
            </p>
            <p className={paragraphClassName}>
              Tecnologias variam entre Node.js, Python, PHP, Ruby e Go. Bancos
              comuns incluem PostgreSQL, MySQL e MongoDB. Serviços como Supabase,
              Firebase e AWS ajudam a reduzir carga operacional.
            </p>
            <p className={paragraphClassName}>
              Para o negócio, back-end mal planejado vira lentidão, falha de
              segurança, custo de infraestrutura mal controlado e dificuldade de
              crescer.
            </p>

            <h3 className={subTitleClassName}>Full-Stack: Quem Liga as Pontas</h3>
            <p className={paragraphClassName}>
              Profissionais ou equipes full-stack trabalham nas duas pontas. Em
              projetos pequenos e médios isso costuma ser o modelo mais eficiente,
              porque separar especialistas demais pode encarecer sem trazer ganho
              proporcional.
            </p>

            <h2 className={sectionTitleClassName}>
              Os Tipos de Projeto em Desenvolvimento Web
            </h2>
            <div className="space-y-6 mb-10">
              {projectTypes.map((project) => (
                <div key={project.title} className="border border-white/10 p-6">
                  <h3 className="font-mono text-xl text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[17px] leading-8 text-white/72 mb-4">
                    {project.body}
                  </p>
                  <div className="space-y-2 text-[17px] leading-8 text-white/65">
                    <p>{project.timing}</p>
                    <p>{project.budget}</p>
                    <p>{project.stack}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className={sectionTitleClassName}>
              Como Avaliar Uma Proposta de Desenvolvimento Web
            </h2>
            <p className={paragraphClassName}>
              Proposta boa não é a que parece sofisticada. É a que deixa escopo,
              marcos, tecnologia e responsabilidade claros.
            </p>

            <h3 className={subTitleClassName}>O Que a Proposta Deve Ter</h3>
            <ul className="space-y-4 mb-10">
              {proposalChecklist.map((item, index) => (
                <li key={item} className="flex gap-4 text-[17px] leading-8 text-white/72">
                  <span className="text-[#4ade80] shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className={subTitleClassName}>Red Flags que Indicam Problema</h3>
            <div className="space-y-5 mb-10">
              {proposalRedFlags.map((item) => (
                <div key={item} className="border border-white/10 p-6">
                  <p className="text-[17px] leading-8 text-white/68">{item}</p>
                </div>
              ))}
            </div>

            <h2 className={sectionTitleClassName}>
              Tendências em Desenvolvimento Web para 2026
            </h2>

            <h3 className={subTitleClassName}>IA no Processo de Desenvolvimento</h3>
            <p className={paragraphClassName}>
              Ferramentas de IA mudaram a forma como código, testes e componentes
              são produzidos. Elas não substituem bons desenvolvedores, mas
              elevam brutalmente a produtividade de quem sabe o que está fazendo.
            </p>

            <h3 className={subTitleClassName}>Edge Computing e Serverless</h3>
            <p className={paragraphClassName}>
              Aplicações estão indo para mais perto do usuário. Menor latência,
              menor complexidade operacional e respostas mais rápidas para público
              distribuído.
            </p>

            <h3 className={subTitleClassName}>Jamstack e Sites Estáticos Modernos</h3>
            <p className={paragraphClassName}>
              Para sites institucionais e blogs, arquitetura desacoplada continua
              sendo uma escolha forte: mais performance, mais segurança e menor
              custo de hospedagem.
            </p>

            <h3 className={subTitleClassName}>Design Systems e Componentes Reutilizáveis</h3>
            <p className={paragraphClassName}>
              Equipes maduras estão construindo bibliotecas de componentes para
              acelerar entrega e manter consistência visual e técnica.
            </p>

            <h2 className={sectionTitleClassName}>
              Como a MadeofIA Faz Desenvolvimento Web
            </h2>
            <p className={paragraphClassName}>
              Na{" "}
              <Link href="/servicos" className="text-[#4ade80] hover:text-white transition-colors">
                MadeofIA
              </Link>
              , desenvolvimento web começa com entendimento de problema e meta de
              negócio, não com escolha de framework.
            </p>
            <p className={paragraphClassName}>
              Nossa stack principal combina Next.js, React, Supabase e Vercel. A
              IA entra para acelerar prototipagem, código, revisão e deploy, sem
              sacrificar qualidade.
            </p>
            <p className={paragraphClassName}>
              Se você está comparando propostas e quer uma leitura honesta sobre
              o que faz sentido para o seu caso,{" "}
              <Link href="/contato" className="text-[#4ade80] hover:text-white transition-colors">
                manda uma mensagem
              </Link>
              .
            </p>

            <h2 className={sectionTitleClassName}>Conclusão</h2>
            <p className={paragraphClassName}>
              Desenvolvimento web não precisa ser um mistério. Tecnologia é meio,
              não fim. O que importa é se a solução entrega experiência,
              performance e resultado para o negócio.
            </p>
            <p className={paragraphClassName}>
              Não se impressione com jargão. Se impressione com clareza,
              portfólio, escopo bem definido e capacidade de execução.
            </p>
          </article>

          <aside className="lg:pt-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="border border-white/10 bg-white/[0.02] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  Neste guia
                </p>
                <ul className="space-y-4">
                  {thirdBlogPost.summary.map((item) => (
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
                    {thirdBlogPost.primaryKeyword}
                  </p>
                  <p>
                    <span className="text-white">Secondary keywords:</span>{" "}
                    {thirdBlogPost.secondaryKeywords.join(", ")}
                  </p>
                </div>
              </div>

              <div className="border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/32 mb-4">
                  Precisa de ajuda?
                </p>
                <p className="text-sm leading-6 text-white/58 mb-6">
                  Se você precisa transformar escopo técnico em produto claro e
                  entregável, a MadeofIA pode estruturar isso com você.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex w-full items-center justify-center font-mono text-sm uppercase tracking-[0.18em] px-5 py-3 bg-[#4ade80] text-[#080807] font-bold hover:bg-[#4ade80]/90 transition-colors"
                >
                  Discutir o projeto
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
            Você sabe exatamente o que precisa
            <br />
            construir e por quê?
          </h2>
          <p className="text-white/58 leading-8 max-w-2xl mx-auto mb-8">
            Quando escopo, stack e objetivo ficam claros, o projeto para de ser
            aposta e vira execução previsível.
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
