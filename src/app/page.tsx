"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";

const ARROW_ICON = "https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png";
const WORK_IMAGE =
  "https://framerusercontent.com/images/cYK8jsG9LU2Eg0kDJPpRChJ3I0.jpeg?scale-down-to=2048";

const processSteps = [
  {
    number: "01.",
    title: "Você conta",
    description:
      "Descreva seu projeto em um briefing simples. Pode ser um parágrafo, um documento ou uma conversa de 15 minutos.",
    visual: "briefing",
  },
  {
    number: "02.",
    title: "Agentes constroem",
    description:
      "Nossa equipe de IA trabalha no seu projeto: código, design, conteúdo e SEO. Você acompanha o progresso em tempo real.",
    visual: "construction",
  },
  {
    number: "03.",
    title: "Marco entrega",
    description:
      "Marco revisa tudo, garante a qualidade e entrega o projeto finalizado. Você conversa com um humano, não com um bot.",
    visual: "review",
  },
];

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites institucionais, landing pages e e-commerces. Rápidos, responsivos e otimizados para conversão.",
    visual: "web",
  },
  {
    title: "SEO & Conteúdo",
    description:
      "Estratégia de palavras-chave, conteúdo otimizado e autoridade de domínio. Tráfego orgânico que cresce todo mês.",
    visual: "seo",
  },
  {
    title: "Produto Digital",
    description:
      "MVPs, web apps e plataformas SaaS. Da ideia ao produto funcional com usuários pagantes.",
    visual: "product",
  },
];

const workItems = [
  {
    year: "2024",
    title: "CriarRecibo",
    href: "https://criarrecibo.com.br",
    description:
      "Gerador de recibos online para MEIs brasileiros. 10 landing pages otimizadas para SEO, geração de PDF no navegador, 180K+ buscas mensais no nicho.",
  },
  {
    year: "2024",
    title: "TextoIA",
    href: "https://textoia.com.br",
    description:
      "Ferramenta de escrita com IA para o mercado brasileiro. Corretor, gerador e aprimorador de texto com SEO orgânico como motor de crescimento.",
  },
  {
    year: "2024",
    title: "Bizu",
    href: "https://bizu.chat",
    description:
      "Plataforma de chat com IA para o Brasil. Interface em português, integração com modelos de linguagem e pagamento via PIX.",
  },
];

const plans = [
  {
    name: "Essencial",
    price: "R$15.000",
    period: "projeto único",
    popular: false,
    cta: "Começar projeto",
    features: [
      "Design responsivo",
      "Até 5 páginas",
      "SEO básico on-page",
      "Deploy + hospedagem",
      "Suporte por 30 dias",
    ],
  },
  {
    name: "Crescimento",
    price: "R$25.000",
    period: "projeto único",
    popular: true,
    cta: "Começar projeto",
    features: [
      "Tudo do Essencial",
      "Até 10 páginas",
      "Blog com 5 artigos SEO",
      "Google Search Console",
      "Estratégia de palavras-chave",
      "Analytics completo",
    ],
  },
  {
    name: "Produto Digital",
    price: "R$45.000",
    period: "projeto único",
    popular: false,
    cta: "Começar projeto",
    features: [
      "Tudo do Crescimento",
      "App web completo",
      "Autenticação + dashboard",
      "Banco de dados",
      "Integrações com pagamento e e-mail",
      "60 dias de suporte",
    ],
  },
  {
    name: "Parceiro Digital",
    price: "R$7.000",
    period: "por mês",
    popular: false,
    cta: "Começar projeto",
    features: [
      "Manutenção + updates",
      "Novas features mensais",
      "SEO contínuo",
      "Suporte prioritário",
      "Reunião mensal de alinhamento",
    ],
  },
];

const testimonials = [
  {
    quote: "\"Agência tradicional: Designer + Dev + PM + Gerente de conta\"",
    description:
      "R$50.000–100.000 por mês para ter um time completo numa agência convencional. Sem garantia de prazo, sem transparência.",
    name: "Agência tradicional",
    role: "R$50–100K/mês",
    avatar: "https://framerusercontent.com/images/RqlD623htlZjBOW5TGIBeTCn9Rw.png?width=175&height=175",
  },
  {
    quote: "\"MadeofIA: CEO + CTO + CMO + Designer + Assistente executivo\"",
    description:
      "Um time completo de agentes de IA especializados. Mais rápido, mais barato, com código limpo e entrega real.",
    name: "MadeofIA",
    role: "a partir de R$15K",
    avatar: "https://framerusercontent.com/images/3P7Md7lQyQJO1gN6t8zY0wCPhY.png?width=400&height=400",
  },
];

const team = [
  {
    name: "Valentina",
    role: "CEO & CMO",
    replaces: "Substitui: Gerente de Projeto + Diretor de Conta",
    avatar: "https://framerusercontent.com/images/1rUvuM83ZrUmEUuX1PZNY7QChM.png?width=500&height=500",
  },
  {
    name: "Thiago",
    role: "CTO",
    replaces: "Substitui: Desenvolvedor Sênior + DevOps",
    avatar: "https://framerusercontent.com/images/ynj5hVsbu5PyJc9zVxtWEiuCo.png?width=500&height=500",
  },
  {
    name: "Clara",
    role: "CMO",
    replaces: "Substitui: Especialista de SEO + Redator",
    avatar: "https://framerusercontent.com/images/0lkdtvFy8axO4Q8ncKI9S577HVE.png?width=500&height=500",
  },
  {
    name: "André",
    role: "Designer",
    replaces: "Substitui: UI/UX Designer + Brand Designer",
    avatar: "https://framerusercontent.com/images/ynj5hVsbu5PyJc9zVxtWEiuCo.png?width=500&height=500",
  },
];

const faqItems = [
  {
    q: "Quanto custa criar um site profissional?",
    a: "Depende do escopo. Um site institucional começa em R$15.000 e um produto digital pode chegar a R$45.000. Comparado com agências tradicionais que cobram R$30-60K por um site similar, nossos preços são significativamente mais acessíveis — sem sacrificar qualidade.",
  },
  {
    q: "Como funciona o processo com agentes de IA?",
    a: "Nossos agentes de IA são especializados: uma CEO que analisa e estrutura seu projeto, um CTO que escreve código de produção e uma CMO que cuida do SEO e conteúdo. Você conversa com a gente, e os agentes executam. Simples assim.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Um site institucional fica pronto em 2-3 semanas. Um produto digital (MVP) leva 4-6 semanas. Muito mais rápido que os 2-4 meses de uma agência tradicional.",
  },
  {
    q: "Vocês usam templates prontos?",
    a: "Não. Cada projeto é desenvolvido do zero com código limpo (Next.js, React, Tailwind). Nada de WordPress, Wix ou construtores visuais.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Iteramos até você aprovar. Dentro do escopo do projeto, não há limite de revisões. Nosso objetivo é entregar algo que você tenha orgulho de mostrar.",
  },
];

const stars = [
  { top: "12%", left: "15%", size: 3, driftX: 24, driftY: -28, duration: 5.2, delay: 0.2 },
  { top: "15%", left: "1%", size: 2, driftX: 12, driftY: -18, duration: 4.8, delay: 0.1 },
  { top: "16%", left: "41%", size: 2, driftX: -20, driftY: 22, duration: 4.6, delay: 0.6 },
  { top: "19%", left: "63%", size: 4, driftX: 28, driftY: -24, duration: 5.4, delay: 1.1 },
  { top: "24%", left: "84%", size: 3, driftX: -22, driftY: 18, duration: 4.2, delay: 1.5 },
  { top: "26%", left: "78%", size: 2, driftX: 18, driftY: -14, duration: 4.4, delay: 0.3 },
  { top: "31%", left: "9%", size: 2, driftX: 18, driftY: -15, duration: 4.8, delay: 0.35 },
  { top: "36%", left: "22%", size: 2, driftX: 21, driftY: -16, duration: 4.7, delay: 0.4 },
  { top: "42%", left: "56%", size: 3, driftX: -24, driftY: 22, duration: 5, delay: 0.9 },
  { top: "46%", left: "73%", size: 4, driftX: 30, driftY: -20, duration: 5.6, delay: 1.8 },
  { top: "49%", left: "90%", size: 2, driftX: -12, driftY: 18, duration: 4.5, delay: 0.8 },
  { top: "55%", left: "88%", size: 3, driftX: -18, driftY: 24, duration: 4.8, delay: 1.3 },
  { top: "63%", left: "12%", size: 4, driftX: 24, driftY: -18, duration: 5.1, delay: 0.7 },
  { top: "67%", left: "57%", size: 2, driftX: 16, driftY: -16, duration: 4.3, delay: 1.2 },
  { top: "71%", left: "35%", size: 2, driftX: -18, driftY: 18, duration: 4.1, delay: 1.1 },
  { top: "73%", left: "4%", size: 2, driftX: 14, driftY: -14, duration: 4.9, delay: 0.55 },
  { top: "76%", left: "52%", size: 3, driftX: 22, driftY: -20, duration: 4.5, delay: 0.5 },
  { top: "82%", left: "78%", size: 3, driftX: -22, driftY: 16, duration: 4.9, delay: 1.7 },
  { top: "84%", left: "39%", size: 2, driftX: -14, driftY: 15, duration: 4.2, delay: 0.45 },
  { top: "87%", left: "90%", size: 2, driftX: 16, driftY: -18, duration: 4.4, delay: 0.95 },
  { top: "91%", left: "14%", size: 3, driftX: 18, driftY: -12, duration: 4.6, delay: 0.25 },
  { top: "93%", left: "61%", size: 2, driftX: -12, driftY: 14, duration: 4.1, delay: 1.35 },
];

const aboutLines = [
  [
    { text: "Somos uma " },
    { text: "equipe de agentes", accent: true },
    { text: " de IA." },
  ],
  [
    { text: "Desenvolvemos " },
    { pill: "🚀", label: "Foguete" },
    { text: " sites e produtos" },
  ],
  [
    { text: "digitais " },
    { text: "para o Brasil.", accent: true },
    { text: " " },
    { pill: "🇧🇷", label: "Brasil" },
  ],
] as const;

const comparisonRows = [
  {
    label: "Equipe",
    traditional: "Designer + Desenvolvedor + PM + Gerente de Conta",
    madeofia: "CEO + CTO + CMO + Designer + Assistente Executivo",
  },
  {
    label: "Custo",
    traditional: "R$50–100K/mês",
    madeofia: "A partir de R$15K por projeto",
  },
  {
    label: "Prazo",
    traditional: "2–4 meses",
    madeofia: "2–3 semanas",
  },
  {
    label: "Reuniões",
    traditional: "Reuniões infinitas de alinhamento",
    madeofia: "Zero reuniões desnecessárias",
  },
] as const;

const activityFeedLines = [
  { time: "09:14", agent: "Valentina", action: "Analisando briefing do projeto #047..." },
  { time: "09:15", agent: "Valentina", action: "Escopo definido: site institucional + blog + SEO" },
  { time: "09:16", agent: "Valentina", action: "Atribuindo tarefas para Thiago e Clara" },
  { time: "09:17", agent: "Thiago", action: "Criando estrutura do projeto (Next.js + Tailwind)" },
  { time: "09:18", agent: "Thiago", action: "Homepage: hero section ✓" },
  { time: "09:19", agent: "Thiago", action: "Homepage: seção de serviços ✓" },
  { time: "09:21", agent: "Clara", action: "Pesquisa de palavras-chave concluída (47 termos)" },
  { time: "09:23", agent: "Clara", action: "Primeiro artigo publicado: \"Como escolher...\"" },
  { time: "09:25", agent: "Thiago", action: "Build passou. Deploy em produção ✓" },
  { time: "09:26", agent: "Valentina", action: "QA completo. Site aprovado. Enviando para o cliente." },
  { time: "09:27", agent: "Marco", action: "Revisado e aprovado. Entregando ao cliente." },
];

const revealTransition = {
  type: "spring",
  damping: 60,
  stiffness: 300,
  mass: 1,
} as const;

const snappierTransition = {
  type: "spring",
  damping: 60,
  stiffness: 500,
  mass: 1,
} as const;

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const ctaVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.015,
    transition: snappierTransition,
  },
};

function ArrowIcon({
  className,
  variants,
}: {
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.img
      className={className}
      src={ARROW_ICON}
      alt=""
      aria-hidden="true"
      variants={variants}
    />
  );
}

function CTAInner({
  label,
  showArrow = false,
}: {
  label: string;
  showArrow?: boolean;
}) {
  return (
    <>
      <span className={styles.ctaGlow} aria-hidden="true" />
      <span className={styles.ctaBorder} aria-hidden="true" />
      <span className={styles.ctaFill} aria-hidden="true" />
      <span className={styles.ctaContent}>
        <span className={styles.ctaLabelText}>{label}</span>
        {showArrow ? (
          <motion.span className={styles.ctaIcon} variants={arrowHoverVariants}>
            <ArrowIcon className={styles.buttonArrow} />
          </motion.span>
        ) : null}
      </span>
    </>
  );
}

function CTAAnchor({
  className,
  href,
  label,
  reducedMotion,
  showArrow = false,
}: {
  className: string;
  href: string;
  label: string;
  reducedMotion: boolean;
  showArrow?: boolean;
}) {
  return (
    <motion.a
      className={`${className} ${styles.ctaButton}`}
      href={href}
      initial={reducedMotion ? false : "rest"}
      animate={reducedMotion ? undefined : "rest"}
      whileHover={reducedMotion ? undefined : "hover"}
      variants={reducedMotion ? undefined : ctaVariants}
    >
      <CTAInner label={label} showArrow={showArrow} />
    </motion.a>
  );
}

const arrowHoverVariants = {
  rest: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  hover: {
    rotate: 45,
    x: 2,
    y: -2,
    transition: snappierTransition,
  },
};

function AboutPill({
  emoji,
  label,
  muted,
  reducedMotion,
}: {
  emoji: string;
  label: string;
  muted: boolean;
  reducedMotion: boolean;
}) {
  return (
    <motion.span
      className={`${styles.aboutPill} ${muted ? styles.aboutPillMuted : styles.aboutPillBright}`}
      aria-label={label}
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -4, 0],
              scale: [1, 1.015, 1],
            }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 4.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
      }
    >
      <motion.span
        className={styles.aboutPillEmoji}
        animate={reducedMotion ? undefined : { rotate: [0, 8, -6, 0], scale: [1, 1.06, 1] }}
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 3.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
      >
        {emoji}
      </motion.span>
    </motion.span>
  );
}

function renderAboutSegments(
  segments: (typeof aboutLines)[number],
  reveal: boolean,
  reducedMotion: boolean,
) {
  return segments.map((segment, index) => {
    if ("pill" in segment) {
      return (
        <AboutPill
          key={`${segment.label}-${index}-${reveal ? "reveal" : "base"}`}
          emoji={segment.pill}
          label={segment.label}
          muted={!reveal}
          reducedMotion={reducedMotion}
        />
      );
    }

    return (
      <span
        key={`${segment.text}-${index}-${reveal ? "reveal" : "base"}`}
        className={"accent" in segment && segment.accent ? (reveal ? styles.aboutAccentReveal : styles.aboutAccentBase) : undefined}
      >
        {segment.text}
      </span>
    );
  });
}

function AboutRevealLine({
  segments,
  progress,
  reducedMotion,
  revealed,
}: {
  segments: (typeof aboutLines)[number];
  progress: MotionValue<number>;
  reducedMotion: boolean;
  revealed: boolean;
}) {
  const clipPath = useTransform(progress, (value) => `inset(0 ${Math.max(0, 100 - value)}% 0 0)`);

  return (
    <div className={styles.aboutLine}>
      <div className={styles.aboutLineBase}>{renderAboutSegments(segments, false, reducedMotion)}</div>
      <motion.div
        className={styles.aboutLineReveal}
        style={reducedMotion || revealed ? { clipPath: "inset(0 0% 0 0)" } : { clipPath }}
      >
        {renderAboutSegments(segments, true, reducedMotion)}
      </motion.div>
    </div>
  );
}

function ProcessVisual({ type, reducedMotion }: { type: string; reducedMotion: boolean }) {
  if (type === "planSelection") {
    const planOptions = [
      { name: "Essencial", price: "R$15K", scope: "site institucional" },
      { name: "Crescimento", price: "R$25K", scope: "site + SEO" },
      { name: "Produto", price: "R$45K", scope: "app web" },
    ];

    return (
      <div className={`${styles.processVisual} ${styles.processPlanSelection}`}>
        <div className={styles.planSelectionGrid}>
          {planOptions.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.planSelectionCard} ${index === 1 ? styles.planSelectionCardActive : ""}`}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      y: index === 1 ? [0, -6, 0] : [0, 4, 0],
                      scale: index === 1 ? [1, 1.02, 1] : [0.985, 1, 0.985],
                      opacity: [0.86, 1, 0.86],
                    }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 5.4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.16,
                    }
              }
            >
              <span className={styles.planSelectionName}>{plan.name}</span>
              <strong className={styles.planSelectionPrice}>{plan.price}</strong>
              <span className={styles.planSelectionScope}>{plan.scope}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className={styles.planSelectionSummary}
          animate={reducedMotion ? undefined : { opacity: [0.62, 1, 0.62] }}
          transition={reducedMotion ? undefined : { duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          Escopo claro • sem custos ocultos
        </motion.div>
      </div>
    );
  }

  if (type === "briefing") {
    const briefingRows = [
      { label: "Objetivo", value: "gerar leads" },
      { label: "Prazo", value: "4 semanas" },
      { label: "Escopo", value: "landing + CRM" },
    ];

    return (
      <div className={`${styles.processVisual} ${styles.processBriefing}`}>
        <div className={styles.briefingComposer}>
          <span className={styles.briefingComposerLabel}>Briefing</span>
          <strong className={styles.briefingComposerTitle}>Projeto SaaS para vendas B2B</strong>
          <div className={styles.briefingComposerLines}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <motion.div
          className={styles.briefingConnector}
          animate={reducedMotion ? undefined : { opacity: [0.3, 1, 0.3], scaleX: [0.7, 1.08, 0.7] }}
          transition={reducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className={styles.briefingBoard}>
          <motion.div
            className={styles.briefingBoardBadge}
            animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
            transition={reducedMotion ? undefined : { duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            CEO analisa
          </motion.div>
          {briefingRows.map((row, index) => (
            <motion.div
              key={row.label}
              className={styles.briefingRow}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      x: [0, 6, 0],
                      opacity: [0.58, 1, 0.58],
                    }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 4.8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.22,
                    }
              }
            >
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "construction") {
    const buildAgents = ["CTO", "Agente UI", "Agente Backend"];
    const buildStages = ["Build", "Testes", "Deploy"];

    return (
      <div className={`${styles.processVisual} ${styles.processConstruction}`}>
        <div className={styles.constructionAgents}>
          {buildAgents.map((agent, index) => (
            <motion.span
              key={agent}
              className={`${styles.constructionAgent} ${index === 0 ? styles.constructionAgentLead : ""}`}
              animate={reducedMotion ? undefined : { y: [0, index === 0 ? -5 : 4, 0] }}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.16 }
              }
            >
              {agent}
            </motion.span>
          ))}
        </div>
        <div className={styles.constructionWorkspace}>
          <div className={styles.constructionEditor}>
            <div className={styles.constructionEditorTop}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.constructionCodeLines}>
              {[0, 1, 2, 3].map((line) => (
                <motion.span
                  key={line}
                  animate={reducedMotion ? undefined : { scaleX: [0.86, 1, 0.86] }}
                  transition={
                    reducedMotion
                      ? undefined
                      : {
                          duration: 3.6,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: line * 0.2,
                        }
                  }
                />
              ))}
            </div>
          </div>
          <div className={styles.constructionPipeline}>
            {buildStages.map((stage, index) => (
              <motion.div
                key={stage}
                className={styles.constructionStage}
                animate={reducedMotion ? undefined : { opacity: [0.42, 1, 0.42] }}
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 3.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.35,
                      }
                }
              >
                <span className={styles.constructionStageDot} />
                <span>{stage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "review") {
    const reviewComments = ["Ajustar título", "Trocar CTA", "Aprovado"];

    return (
      <div className={`${styles.processVisual} ${styles.processReview}`}>
        <div className={styles.reviewCanvas}>
          <div className={styles.reviewMockup}>
            <span className={styles.reviewMockupHeader} />
            <span className={styles.reviewMockupHero} />
            <span className={styles.reviewMockupLine} />
            <span className={styles.reviewMockupLineShort} />
          </div>
          {reviewComments.map((comment, index) => (
            <motion.div
              key={comment}
              className={`${styles.reviewComment} ${index === 2 ? styles.reviewCommentApproved : ""}`}
              style={{
                top: index === 0 ? "18%" : index === 1 ? "58%" : "72%",
                left: index === 1 ? "58%" : index === 2 ? "16%" : "12%",
              }}
              animate={reducedMotion ? undefined : { y: [0, index === 1 ? 7 : -7, 0] }}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.24 }
              }
            >
              {comment}
            </motion.div>
          ))}
        </div>
        <div className={styles.reviewVersions}>
          <span>v1</span>
          <motion.div
            className={styles.reviewVersionsTrack}
            animate={reducedMotion ? undefined : { scaleX: [0.2, 1, 0.2], opacity: [0.38, 1, 0.38] }}
            transition={reducedMotion ? undefined : { duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <span>v2</span>
        </div>
      </div>
    );
  }

  if (type === "launch") {
    const growthBars = [46, 68, 84, 110, 138];

    return (
      <div className={`${styles.processVisual} ${styles.processLaunch}`}>
        <div className={styles.launchStatus}>
          <motion.span
            className={styles.launchStatusDot}
            animate={reducedMotion ? undefined : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={reducedMotion ? undefined : { duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div>
            <strong className={styles.launchStatusTitle}>Site no ar</strong>
            <span className={styles.launchStatusMeta}>analytics, SEO e monitoramento ativos</span>
          </div>
        </div>
        <div className={styles.launchGrowth}>
          <div className={styles.launchGrowthHeader}>
            <span>Tráfego</span>
            <strong>+42%</strong>
          </div>
          <div className={styles.launchBars}>
            {growthBars.map((height, index) => (
              <motion.span
                key={height}
                style={{ height }}
                animate={reducedMotion ? undefined : { opacity: [0.54, 1, 0.54], scaleY: [0.88, 1, 0.88] }}
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 3.6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.12,
                      }
                }
              />
            ))}
          </div>
        </div>
        <div className={styles.launchPanels}>
          <motion.div
            className={styles.launchPanel}
            animate={reducedMotion ? undefined : { x: [0, 4, 0] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
            }
          >
            <span>SEO</span>
            <strong>páginas indexadas</strong>
          </motion.div>
          <motion.div
            className={styles.launchPanel}
            animate={reducedMotion ? undefined : { x: [0, -4, 0] }}
            transition={reducedMotion ? undefined : { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
          >
            <span>Uptime</span>
            <strong>99.9%</strong>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}

function ServiceVisual({ type, reducedMotion }: { type: string; reducedMotion: boolean }) {
  if (type === "web") {
    return (
      <div className={`${styles.serviceVisual} ${styles.serviceWeb}`}>
        <motion.div
          className={styles.webDesktop}
          animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
          transition={reducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className={styles.webBrowserBar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.webHeroSection}>
            <span className={styles.webEyebrow}>Landing page</span>
            <strong className={styles.webHeroTitle}>Converte visitantes em clientes</strong>
            <div className={styles.webHeroMeta}>
              <span>SEO</span>
              <span>Checkout</span>
            </div>
          </div>
          <div className={styles.webContentRows}>
            <span />
            <span />
          </div>
        </motion.div>
        <motion.div
          className={styles.webMobile}
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={reducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
        >
          <span className={styles.webMobileHeader} />
          <span className={styles.webMobileCard} />
          <span className={styles.webMobileCta}>CTA</span>
        </motion.div>
      </div>
    );
  }

  if (type === "seo") {
    const keywordRows = [
      { label: "site para advogados", trend: "+18%" },
      { label: "landing b2b", trend: "+24%" },
      { label: "seo local", trend: "+31%" },
    ];

    return (
      <div className={`${styles.serviceVisual} ${styles.serviceSeo}`}>
        <div className={styles.seoKeywordPanel}>
          <span className={styles.seoPanelLabel}>Palavras-chave</span>
          {keywordRows.map((row, index) => (
            <motion.div
              key={row.label}
              className={styles.seoKeywordRow}
              animate={reducedMotion ? undefined : { x: [0, 5, 0], opacity: [0.55, 1, 0.55] }}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.18 }
              }
            >
              <span>{row.label}</span>
              <strong>{row.trend}</strong>
            </motion.div>
          ))}
        </div>
        <motion.div
          className={styles.seoArticle}
          animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
          transition={reducedMotion ? undefined : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.15 }}
        >
          <span className={styles.seoPanelLabel}>Conteúdo otimizado</span>
          <strong className={styles.seoArticleTitle}>Guia completo para captar leads orgânicos</strong>
          <div className={styles.seoArticleLines}>
            <span />
            <span />
            <span />
          </div>
        </motion.div>
        <div className={styles.seoGrowthPanel}>
          <div className={styles.seoGrowthHeader}>
            <span>Tráfego orgânico</span>
            <strong>+32%</strong>
          </div>
          <div className={styles.seoGrowthBars}>
            {[32, 54, 76, 102].map((height, index) => (
              <motion.span
                key={height}
                style={{ height }}
                animate={reducedMotion ? undefined : { opacity: [0.5, 1, 0.5], scaleY: [0.9, 1, 0.9] }}
                transition={
                  reducedMotion
                    ? undefined
                    : { duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.16 }
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.serviceVisual} ${styles.serviceProduct}`}>
      <div className={styles.productRoadmap}>
        {["Ideia", "MVP", "Usuários", "Receita"].map((stage, index) => (
          <motion.div
            key={stage}
            className={`${styles.productStage} ${index === 1 ? styles.productStageActive : ""}`}
            animate={reducedMotion ? undefined : { opacity: [0.48, 1, 0.48] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.2 }
            }
          >
            {stage}
          </motion.div>
        ))}
      </div>
      <motion.div
        className={styles.productDashboard}
        animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
        transition={reducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className={styles.productDashboardTop}>
          <strong>Dashboard SaaS</strong>
          <span>12 assinantes</span>
        </div>
        <div className={styles.productDashboardBody}>
          <div className={styles.productMetricCard}>
            <span>MRR</span>
            <strong>R$4.8K</strong>
          </div>
          <div className={styles.productMetricCard}>
            <span>Trials</span>
            <strong>28</strong>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.productCheckout}
        animate={reducedMotion ? undefined : { x: [0, -5, 0] }}
        transition={reducedMotion ? undefined : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
      >
        <span className={styles.productCheckoutLabel}>Checkout ativo</span>
        <strong className={styles.productCheckoutPrice}>Plano Pro</strong>
        <span className={styles.productCheckoutUsers}>usuários pagantes entrando</span>
      </motion.div>
    </div>
  );
}

function ActivityFeed({ reducedMotion }: { reducedMotion: boolean }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(activityFeedLines.length);
      return;
    }
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > activityFeedLines.length) {
        current = 0;
        setVisibleLines(0);
        setTimeout(() => {
          setVisibleLines(1);
        }, 800);
        return;
      }
      setVisibleLines(current);
    }, 1400);
    setVisibleLines(1);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className={styles.activityTerminal}>
      <div className={styles.activityTerminalBar}>
        <span /><span /><span />
        <span className={styles.activityTerminalTitle}>madeofIA — terminal de agentes</span>
      </div>
      <div className={styles.activityTerminalBody} ref={containerRef}>
        {activityFeedLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={`${line.time}-${line.agent}-${index}`}
            className={styles.activityLine}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.activityTime}>[{line.time}]</span>
            <span className={styles.activityAgent}>{line.agent}</span>
            <span className={styles.activityArrow}>→</span>
            <span className={styles.activityAction}>{line.action}</span>
          </motion.div>
        ))}
        <motion.span
          className={styles.activityCursor}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          █
        </motion.span>
      </div>
    </div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [activeWork, setActiveWork] = useState(0);
  const [aboutRevealed, setAboutRevealed] = useState(Boolean(prefersReducedMotion));
  const aboutRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start 80%", "end 38%"],
  });
  const aboutLineOneProgress = useSpring(useTransform(aboutScrollProgress, [0, 0.4], [0, 100]), {
    damping: 26,
    stiffness: 120,
    mass: 0.5,
  });
  const aboutLineTwoProgress = useSpring(useTransform(aboutScrollProgress, [0.14, 0.58], [0, 100]), {
    damping: 26,
    stiffness: 120,
    mass: 0.5,
  });
  const aboutLineThreeProgress = useSpring(useTransform(aboutScrollProgress, [0.28, 0.76], [0, 100]), {
    damping: 26,
    stiffness: 120,
    mass: 0.5,
  });

  useMotionValueEvent(aboutScrollProgress, "change", (latest) => {
    if (!aboutRevealed && latest >= 0.72) {
      setAboutRevealed(true);
    }
  });

  const interactiveCardHover = prefersReducedMotion
    ? undefined
    : {
        y: -6,
        borderColor: "rgba(211, 255, 202, 0.2)",
        boxShadow: "0 0 0 1px rgba(211,255,202,0.06), 0 20px 40px rgba(0,0,0,0.22)",
        transition: snappierTransition,
      };

  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlowTop} />
      <div className={styles.backgroundGlowBottom} />

      <Nav />

      <section className={styles.hero}>
        <div className={styles.starField} aria-hidden="true">
          {stars.map((star, index) => (
            <motion.span
              key={`${star.top}-${star.left}-${index}`}
              className={styles.star}
              style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      x: [0, star.driftX, star.driftX * -0.62, 0],
                      y: [0, star.driftY, star.driftY * -0.48, 0],
                      opacity: [0.34, 1, 0.74, 0.34],
                      scale: [1, 1.56, 1.06, 1],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: star.duration,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: star.delay + index * 0.05,
                      ease: "easeInOut",
                    }
              }
            />
          ))}
        </div>

        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroGlowWheel}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88 }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                    rotate: 360,
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: { delay: 0.2, duration: 0.5 },
                    scale: { delay: 0.2, duration: 0.5 },
                    rotate: { duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  }
            }
          />
          <motion.div
            className={styles.heroGlowAura}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.7, 1, 0.72],
                    scale: [0.94, 1.1, 0.95],
                    rotate: 360,
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: { duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    scale: { duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotate: { duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  }
            }
          />
          <div className={styles.heroCopy}>
            <div className={styles.heroPill}>
              Agência de Desenvolvimento de Produtos Digitais
            </div>
            <h1 className={styles.heroTitle}>
              Uma equipe completa de agência —{" "}
              <span className={styles.heroAccent}>movida por IA</span>.
            </h1>
            <p className={styles.heroDescription}>
              Design, código, SEO e conteúdo. Tudo que uma agência tradicional entrega, mas em semanas — não meses. E por uma fração do custo.
            </p>
            <div className={styles.heroActions}>
              <CTAAnchor
                className={styles.secondaryButton}
                href="#processo"
                label="Como funciona"
                reducedMotion={Boolean(prefersReducedMotion)}
                showArrow
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className={styles.about}
        id="about-us"
      >
        <div className={styles.sectionShell}>
          <div className={styles.aboutBlock}>
            <AboutRevealLine
              segments={aboutLines[0]}
              progress={aboutLineOneProgress}
              reducedMotion={Boolean(prefersReducedMotion)}
              revealed={aboutRevealed}
            />
            <AboutRevealLine
              segments={aboutLines[1]}
              progress={aboutLineTwoProgress}
              reducedMotion={Boolean(prefersReducedMotion)}
              revealed={aboutRevealed}
            />
            <AboutRevealLine
              segments={aboutLines[2]}
              progress={aboutLineThreeProgress}
              reducedMotion={Boolean(prefersReducedMotion)}
              revealed={aboutRevealed}
            />
          </div>
        </div>
      </section>

      <motion.section
        className={`${styles.section} ${styles.activitySection}`}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <div className={styles.activityLayout}>
            <motion.div className={styles.activityCopy} variants={revealUp}>
              <h2 className={styles.sectionTitle}>
                Veja os <span>agentes</span> em ação
              </h2>
              <p className={styles.sectionLead}>
                Em tempo real, nossa equipe de IA trabalha no seu projeto — código, conteúdo e
                deploy.
              </p>
            </motion.div>
            <motion.div className={styles.activityPanel} variants={revealUp}>
              <ActivityFeed reducedMotion={Boolean(prefersReducedMotion)} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={`${styles.section} ${styles.comparisonSection}`}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>MadeofIA</span> vs agência tradicional
          </motion.h2>
          <motion.p className={styles.sectionLead} variants={revealUp}>
            Mesmo objetivo. Estruturas completamente diferentes.
          </motion.p>
          <motion.div className={styles.comparisonGrid} variants={staggerChildren}>
            <motion.article
              className={`${styles.comparisonCard} ${styles.comparisonCardTraditional}`}
              variants={revealUp}
              whileHover={interactiveCardHover}
            >
              <div className={styles.comparisonCardTop}>
                <span className={styles.comparisonEyebrow}>Agência tradicional</span>
                <strong>Muitas pessoas, mais repasse, fatura maior.</strong>
              </div>
              <div className={styles.comparisonRows}>
                {comparisonRows.map((row) => (
                  <div key={row.label} className={styles.comparisonRow}>
                    <span>{row.label}</span>
                    <p>{row.traditional}</p>
                  </div>
                ))}
              </div>
              <div className={styles.comparisonFoot}>
                <span>Cenário comum</span>
                <strong>Você paga por estrutura + tempo</strong>
              </div>
            </motion.article>
            <motion.article
              className={`${styles.comparisonCard} ${styles.comparisonCardMadeofia}`}
              variants={revealUp}
              whileHover={interactiveCardHover}
            >
              <div className={styles.comparisonCardTop}>
                <span className={styles.comparisonEyebrow}>MadeofIA</span>
                <strong>Menos overhead, mais execução, entrega mais enxuta.</strong>
              </div>
              <div className={styles.comparisonRows}>
                {comparisonRows.map((row) => (
                  <div key={row.label} className={styles.comparisonRow}>
                    <span>{row.label}</span>
                    <p>{row.madeofia}</p>
                  </div>
                ))}
              </div>
              <div className={styles.comparisonFoot}>
                <span>Nosso modelo</span>
                <strong>Você paga por produto + resultado</strong>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="processo"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>Processo</span>
          </motion.h2>
          <motion.div className={styles.processGrid} variants={staggerChildren}>
            {processSteps.map((step) => (
              <motion.article
                key={step.number}
                className={styles.processCard}
                variants={revealUp}
                whileHover={interactiveCardHover}
              >
                <ProcessVisual type={step.visual} reducedMotion={Boolean(prefersReducedMotion)} />
                <div className={styles.processText}>
                  <h3>
                    <span>{step.number}</span>
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="servicos"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>Serviços</span>
          </motion.h2>
          <motion.div className={styles.serviceGrid} variants={staggerChildren}>
            {services.map((service) => (
              <motion.article
                key={service.title}
                className={styles.serviceCard}
                variants={revealUp}
                whileHover={interactiveCardHover}
              >
                <ServiceVisual type={service.visual} reducedMotion={Boolean(prefersReducedMotion)} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="portfolio"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>Portfólio</span>
          </motion.h2>
          <div className={styles.workLayout}>
            <motion.div className={styles.workList} variants={staggerChildren}>
              {workItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  className={`${styles.workItem} ${activeWork === index ? styles.workItemActive : ""}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={revealUp}
                  initial={prefersReducedMotion ? false : "hidden"}
                  whileInView={prefersReducedMotion ? undefined : "show"}
                  viewport={{ once: true, amount: 0.6 }}
                  onHoverStart={() => setActiveWork(index)}
                  onFocus={() => setActiveWork(index)}
                  whileHover={prefersReducedMotion ? undefined : "hover"}
                >
                  <div className={styles.workMeta}>{item.year}</div>
                  <motion.div className={styles.workRow}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ArrowIcon className={styles.workArrow} variants={arrowHoverVariants} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
            <motion.div className={styles.workPreview} variants={revealUp}>
              <motion.img
                key={activeWork}
                src={WORK_IMAGE}
                alt="Notebook verde exibindo o preview do projeto"
                initial={prefersReducedMotion ? false : { opacity: 0.6, scale: 0.97 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={snappierTransition}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="planos"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>Planos</span>
          </motion.h2>
          <motion.div className={styles.planGrid} variants={staggerChildren}>
            {plans.map((plan) => (
              <motion.article
                key={plan.name}
                className={`${styles.planCard} ${plan.popular ? styles.planCardFeatured : ""}`}
                variants={revealUp}
                whileHover={interactiveCardHover}
              >
                <div className={styles.planHeader}>
                  <div>
                    <h3>{plan.name}</h3>
                    <div className={styles.planPrice}>{plan.price}</div>
                    <div className={styles.planPeriod}>{plan.period}</div>
                  </div>
                  {plan.popular ? <span className={styles.planBadge}>Popular</span> : null}
                </div>
                <div className={styles.planDivider} />
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className={styles.featureDot} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAAnchor
                  className={styles.planButton}
                  href="#contact"
                  label={plan.cta}
                  reducedMotion={Boolean(prefersReducedMotion)}
                  showArrow
                />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="testimonials"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            Por que <span>MadeofIA</span>?
          </motion.h2>
          <motion.div className={styles.testimonialGrid} variants={staggerChildren}>
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                className={styles.testimonialCard}
                variants={revealUp}
                whileHover={interactiveCardHover}
              >
                <h3>{testimonial.quote}</h3>
                <p>{testimonial.description}</p>
                <div className={styles.testimonialPerson}>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="team"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>Time</span>
          </motion.h2>
          <motion.div className={styles.teamGrid} variants={staggerChildren}>
            {team.map((member) => (
              <motion.article
                key={member.name}
                className={styles.teamCard}
                variants={revealUp}
                whileHover={interactiveCardHover}
              >
                <img src={member.avatar} alt={member.name} />
                <div className={styles.teamInfo}>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                  <span className={styles.teamReplaces}>{member.replaces}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="contato"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            Vamos <span>conversar</span>.
          </motion.h2>
          <div className={styles.contactLayout}>
            <motion.div className={styles.contactDetails} variants={revealUp}>
              <div className={styles.contactBlock}>
                <h3>Onde estamos</h3>
                <p>Brasil — 100% remoto</p>
                <p>Atendemos todo o país</p>
              </div>
              <div className={styles.contactLine} />
              <div className={styles.contactBlock}>
                <h3>E-mail</h3>
                <motion.a href="mailto:ola@madeofia.com" whileHover="hover">
                  <span>ola@madeofia.com</span>
                  <ArrowIcon className={styles.inlineArrow} variants={arrowHoverVariants} />
                </motion.a>
              </div>
              <div className={styles.contactLine} />
              <div className={styles.contactBlock}>
                <h3>Resposta</h3>
                <p>Em até 24 horas</p>
                <p>nos dias úteis</p>
              </div>
            </motion.div>

            <motion.div variants={revealUp}>
              <ContactForm originLabel="Homepage" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.sectionShell}>
          <h2 className={styles.faqTitle}>Perguntas frequentes</h2>
          <div className={styles.faqBox}>
            {faqItems.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>
                  <span className={styles.faqIcon}>+</span>
                  <span>{item.q}</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
