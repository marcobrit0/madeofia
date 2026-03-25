"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { type PointerEvent, useRef, useState } from "react";
import styles from "./page.module.css";

const ARROW_ICON = "https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png";
const WORK_IMAGE =
  "https://framerusercontent.com/images/cYK8jsG9LU2Eg0kDJPpRChJ3I0.jpeg?scale-down-to=2048";

const processSteps = [
  {
    number: "01.",
    title: "Subscribe",
    description:
      "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
    visual: "plans",
  },
  {
    number: "02.",
    title: "Request",
    description:
      "Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.",
    visual: "request",
  },
  {
    number: "03.",
    title: "Build",
    description:
      "Our developers swiftly begin building your custom solutions, prioritising speed without compromising on quality.",
    visual: "build",
  },
  {
    number: "04.",
    title: "Test & optimise",
    description:
      "You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
    visual: "metrics",
  },
  {
    number: "05.",
    title: "Become an industry leader",
    description:
      "Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader.",
    visual: "globe",
  },
];

const services = [
  {
    title: "Workflow automations",
    description:
      "We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.",
    visual: "workflow",
  },
  {
    title: "Chatbot development",
    description:
      "We develop advanced chatbots that are reactive, understand nuances, and are capable of to solving extremely complicated queries.",
    visual: "chat",
  },
  {
    title: "Business consulting",
    description:
      "Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.",
    visual: "consulting",
  },
];

const workItems = [
  {
    year: "2023",
    title: "Doodle - customer support chatbot",
    description:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
  },
  {
    year: "2024",
    title: "Dash - AI calling system",
    description:
      "We've revolutionized Dash's customer service with our an AI calling system. The AI seamlessly handles 73% of incoming calls, providing quick resolutions and immediate support, even during the weekends.",
  },
  {
    year: "2024",
    title: "Atomic - AI driven outreach",
    description:
      "Atomic has supercharged their outreach efforts with our cutting-edge AI-driven system. Our system now handles all outbound communications, enabling Atomic to connect with more potential clients.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "EUR1.997",
    period: "Per month",
    popular: false,
    cta: "Get Started with Basic",
    features: [
      "2 dedicated developers",
      "Custom workflow automations",
      "Unlimited requests",
      "Unlimited revisions",
      "Business consulting",
      "Custom chatbots",
      "Cancel & pause anytime",
    ],
  },
  {
    name: "Pro",
    price: "EUR3.997",
    period: "Per month",
    popular: true,
    cta: "Get Started with Pro",
    features: [
      "2 dedicated developers",
      "Custom workflow automations",
      "Unlimited requests",
      "Unlimited revisions",
      "Business consulting",
      "Custom chatbots",
      "Cancel & pause anytime",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Per month",
    popular: false,
    cta: "Get Started with Enterprise",
    features: [
      "X dedicated developers",
      "Custom workflow automations",
      "Unlimited requests",
      "Unlimited revisions",
      "Business consulting",
      "Custom chatbots",
      "Cancel & pause anytime",
    ],
  },
];

const testimonials = [
  {
    quote: "\"Nebula's development has increased our productivity by 54%\"",
    description:
      "Can't recommend Nebula enough, they absolutely transformed us into a productive machine!",
    name: "John Fisher",
    role: "CEO - TDB Real Estate",
    avatar: "https://framerusercontent.com/images/RqlD623htlZjBOW5TGIBeTCn9Rw.png?width=175&height=175",
  },
  {
    quote: "\"Nebula's chatbot now handles 95% of our customer service\"",
    description:
      "Nebula's chatbot is an absolute game-changer for our customer service, absolutely amazing!",
    name: "Sarah Johnson",
    role: "CXO - Doodle",
    avatar: "https://framerusercontent.com/images/3P7Md7lQyQJO1gN6t8zY0wCPhY.png?width=400&height=400",
  },
  {
    quote: "\"We're delighted with our development subscription from Nebula\"",
    description:
      "Their flexible subscription based model is so innovative, we can just pause it whenever we want!",
    name: "Peter Davis",
    role: "Atomic",
    avatar: "https://framerusercontent.com/images/4yXsZaaRWzlS3GdafPSIDX1EWDg.png?width=400&height=400",
  },
];

const team = [
  {
    name: "Liam Davis",
    role: "CEO",
    avatar: "https://framerusercontent.com/images/ynj5hVsbu5PyJc9zVxtWEiuCo.png?width=500&height=500",
  },
  {
    name: "Elliot Jones",
    role: "CCO",
    avatar: "https://framerusercontent.com/images/0lkdtvFy8axO4Q8ncKI9S577HVE.png?width=500&height=500",
  },
  {
    name: "Rob Smith",
    role: "CTO",
    avatar: "https://framerusercontent.com/images/ynj5hVsbu5PyJc9zVxtWEiuCo.png?width=500&height=500",
  },
  {
    name: "Bella Garcia",
    role: "Head of content",
    avatar: "https://framerusercontent.com/images/1rUvuM83ZrUmEUuX1PZNY7QChM.png?width=500&height=500",
  },
];

const faqItems = [
  "What's unique about Nebula?",
  "How many builds can I request each month?",
  "Can I cancel my subscription at any time?",
  "How secure are your solutions?",
  "Can your solutions scale with my business growth?",
];

const stars = [
  { top: "12%", left: "15%", size: 3, driftX: 24, driftY: -28, duration: 5.2, delay: 0.2 },
  { top: "16%", left: "41%", size: 2, driftX: -20, driftY: 22, duration: 4.6, delay: 0.6 },
  { top: "19%", left: "63%", size: 4, driftX: 28, driftY: -24, duration: 5.4, delay: 1.1 },
  { top: "24%", left: "84%", size: 3, driftX: -22, driftY: 18, duration: 4.2, delay: 1.5 },
  { top: "31%", left: "9%", size: 2, driftX: 18, driftY: -15, duration: 4.8, delay: 0.35 },
  { top: "36%", left: "22%", size: 2, driftX: 21, driftY: -16, duration: 4.7, delay: 0.4 },
  { top: "42%", left: "56%", size: 3, driftX: -24, driftY: 22, duration: 5, delay: 0.9 },
  { top: "46%", left: "73%", size: 4, driftX: 30, driftY: -20, duration: 5.6, delay: 1.8 },
  { top: "55%", left: "88%", size: 3, driftX: -18, driftY: 24, duration: 4.8, delay: 1.3 },
  { top: "63%", left: "12%", size: 4, driftX: 24, driftY: -18, duration: 5.1, delay: 0.7 },
  { top: "71%", left: "35%", size: 2, driftX: -18, driftY: 18, duration: 4.1, delay: 1.1 },
  { top: "76%", left: "52%", size: 3, driftX: 22, driftY: -20, duration: 4.5, delay: 0.5 },
  { top: "82%", left: "78%", size: 3, driftX: -22, driftY: 16, duration: 4.9, delay: 1.7 },
  { top: "87%", left: "90%", size: 2, driftX: 16, driftY: -18, duration: 4.4, delay: 0.95 },
];

const aboutLines = [
  [
    { text: "We're a " },
    { text: "full-service", accent: true },
    { text: " AI Automation" },
  ],
  [
    { text: "Agency " },
    { pill: "👋", label: "Wave" },
    { text: " We turn businesses" },
  ],
  [
    { text: "Into " },
    { text: "AI-driven", accent: true },
    { text: " " },
    { pill: "✨", label: "Sparkle" },
    { text: " industry leaders." },
  ],
] as const;

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
  reducedMotion,
}: {
  label: string;
  showArrow?: boolean;
  reducedMotion: boolean;
}) {
  return (
    <>
      <span className={styles.ctaGlow} aria-hidden="true" />
      <span className={styles.ctaBorder} aria-hidden="true" />
      <span className={styles.ctaFill} aria-hidden="true" />
      <span className={styles.ctaContent}>
        <span className={styles.ctaLabelMask}>
          <span className={styles.ctaLabelTrack}>
            <span className={styles.ctaLabelPrimary}>{label}</span>
            <span className={styles.ctaLabelSecondary} aria-hidden="true">
              {label}
            </span>
          </span>
        </span>
        {showArrow ? (
          <motion.span className={styles.ctaIcon} variants={reducedMotion ? undefined : arrowHoverVariants}>
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
      <CTAInner label={label} showArrow={showArrow} reducedMotion={reducedMotion} />
    </motion.a>
  );
}

function CTAButtonElement({
  className,
  type,
  label,
  reducedMotion,
  showArrow = false,
}: {
  className: string;
  type: "button" | "submit";
  label: string;
  reducedMotion: boolean;
  showArrow?: boolean;
}) {
  return (
    <motion.button
      className={`${className} ${styles.ctaButton}`}
      type={type}
      initial={reducedMotion ? false : "rest"}
      animate={reducedMotion ? undefined : "rest"}
      whileHover={reducedMotion ? undefined : "hover"}
      variants={reducedMotion ? undefined : ctaVariants}
    >
      <CTAInner label={label} showArrow={showArrow} reducedMotion={reducedMotion} />
    </motion.button>
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
}: {
  segments: (typeof aboutLines)[number];
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const clipPath = useTransform(progress, (value) => `inset(0 ${Math.max(0, 100 - value)}% 0 0)`);

  return (
    <div className={styles.aboutLine}>
      <div className={styles.aboutLineBase}>{renderAboutSegments(segments, false, reducedMotion)}</div>
      <motion.div className={styles.aboutLineReveal} style={reducedMotion ? undefined : { clipPath }}>
        {renderAboutSegments(segments, true, reducedMotion)}
      </motion.div>
    </div>
  );
}

function ProcessVisual({ type, reducedMotion }: { type: string; reducedMotion: boolean }) {
  if (type === "plans") {
    return (
      <motion.div
        className={`${styles.processVisual} ${styles.processSubscription}`}
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={reducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className={styles.subscriptionToggle}>
          <span className={styles.subscriptionOff}>Off</span>
          <span className={styles.subscriptionChip}>Basic</span>
          <span className={styles.subscriptionChipMuted}>Pro</span>
        </div>
        <div className={styles.subscriptionLabel}>Subscription</div>
      </motion.div>
    );
  }

  if (type === "request") {
    const requestCards = [
      "Lead capture automation",
      "Sales follow-up bot",
      "Internal ops workflow",
    ];

    return (
      <div className={`${styles.processVisual} ${styles.processRequest}`}>
        <div className={styles.requestFrame}>
          {requestCards.map((card, index) => (
            <motion.div
              key={card}
              className={`${styles.requestCardAnimated} ${
                index === 1 ? styles.requestCardAnimatedStrong : styles.requestCardAnimatedMuted
              }`}
              animate={
                reducedMotion
                  ? undefined
                  : {
                      y: [56, 12, -32],
                      opacity: [0, 1, 0],
                      scale: [0.94, 1, 0.96],
                    }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 5.8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.95,
                    }
              }
            >
              <span className={styles.requestCardDot} />
              <span>{card}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className={styles.requestBubble}
          animate={reducedMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
          transition={reducedMotion ? undefined : { duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          New contact form entry
        </motion.div>
      </div>
    );
  }

  if (type === "build") {
    return (
      <motion.div
        className={`${styles.processVisual} ${styles.processBuild}`}
        animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
        transition={reducedMotion ? undefined : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className={styles.buildBars}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.buildCode}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.div>
    );
  }

  if (type === "metrics") {
    return (
      <div className={`${styles.processVisual} ${styles.processMetrics}`}>
        {["Speed", "Accuracy", "Security"].map((label, index) => (
          <motion.div
            key={label}
            className={styles.metricPill}
            animate={reducedMotion ? undefined : { y: [0, index % 2 === 0 ? -6 : 6, 0] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.2 }
            }
          >
            {label}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${styles.processVisual} ${styles.processGlobe}`}>
      <motion.div
        className={styles.globeOrb}
        animate={reducedMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
        transition={reducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.globeRing}
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={reducedMotion ? undefined : { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={styles.globeOrbit}
          style={{ rotate: index * 120 }}
          animate={reducedMotion ? undefined : { rotate: index * 120 + (index % 2 === 0 ? 360 : -360) }}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 10 + index * 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }
          }
        >
          <span className={styles.globeNode} />
        </motion.div>
      ))}
    </div>
  );
}

function ServiceVisual({ type, reducedMotion }: { type: string; reducedMotion: boolean }) {
  if (type === "workflow") {
    return (
      <div className={`${styles.serviceVisual} ${styles.workflowVisual}`}>
        <motion.div
          className={styles.workflowNode}
          animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
          transition={reducedMotion ? undefined : { duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <img
            src="https://framerusercontent.com/images/FCIhg4w8Oic6PzzMBeFQQ09s200.png?width=600&height=600"
            alt="OpenAI logo"
          />
          <span>OpenAI</span>
        </motion.div>
        <motion.div
          className={styles.workflowNode}
          animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }
          }
        >
          <img
            src="https://framerusercontent.com/images/ElXA9BRDlk1EUYX76fVdPRGVs.png?width=512&height=512"
            alt="Airtable logo"
          />
          <span>Airtable</span>
        </motion.div>
        <motion.div
          className={styles.workflowNode}
          animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }
          }
        >
          <img
            src="https://framerusercontent.com/images/jgI8KEzSaG810pJKQsKIMoGc.webp?width=512&height=512"
            alt="Framer logo"
          />
          <span>Framer</span>
        </motion.div>
        <motion.div
          className={styles.workflowLines}
          animate={reducedMotion ? undefined : { opacity: [0.28, 0.6, 0.28] }}
          transition={reducedMotion ? undefined : { duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className={`${styles.serviceVisual} ${styles.chatVisual}`}>
        <motion.div
          className={styles.chatPrompt}
          animate={reducedMotion ? undefined : { x: [0, 8, 0] }}
          transition={reducedMotion ? undefined : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          Summarize this report
        </motion.div>
        <motion.div
          className={styles.chatReply}
          animate={reducedMotion ? undefined : { x: [0, -8, 0], y: [0, -4, 0] }}
          transition={
            reducedMotion ? undefined : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.25 }
          }
        >
          <div className={styles.chatBadge}>AI assistant</div>
          <p>Sure, here&apos;s a summary:</p>
          <p>
            Quokka BV experienced a 15% increase in revenue to EUR120 million. Compared to the
            previous year, this year was better, mostly due to the increase in...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${styles.serviceVisual} ${styles.consultingVisual}`}>
      <motion.div
        className={styles.consultingMetric}
        animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
        transition={reducedMotion ? undefined : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        +15%
      </motion.div>
      <motion.div
        className={styles.consultingMetricMuted}
        animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
        transition={
          reducedMotion ? undefined : { duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.25 }
        }
      >
        +32%
      </motion.div>
      <div className={styles.consultingChart}>
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            animate={reducedMotion ? undefined : { scaleX: [0.94, 1, 0.94] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index * 0.2 }
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [activeWork, setActiveWork] = useState(0);
  const aboutRef = useRef<HTMLElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const heroGlowX = useSpring(pointerX, { damping: 40, stiffness: 160, mass: 0.6 });
  const heroGlowY = useSpring(pointerY, { damping: 40, stiffness: 160, mass: 0.6 });
  const heroGlowRedX = useTransform(heroGlowX, (value) => value * 0.35);
  const heroGlowRedY = useTransform(heroGlowY, (value) => value * 0.35);
  const heroGlowGreenX = useTransform(heroGlowX, (value) => value * 0.58);
  const heroGlowGreenY = useTransform(heroGlowY, (value) => value * 0.58);
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

  const interactiveCardHover = prefersReducedMotion
    ? undefined
    : {
        y: -6,
        borderColor: "rgba(211, 255, 202, 0.2)",
        boxShadow: "0 0 0 1px rgba(211,255,202,0.06), 0 20px 40px rgba(0,0,0,0.22)",
        transition: snappierTransition,
      };

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetHeroPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlowTop} />
      <div className={styles.backgroundGlowBottom} />

      <motion.nav
        className={styles.desktopNav}
        initial={prefersReducedMotion ? false : { opacity: 0, y: -110 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? undefined : snappierTransition}
      >
        <a className={styles.logo} href="/">
          <span className={styles.logoDot} />
          <span>NEBULA</span>
        </a>

        <div className={styles.navPill}>
          <a href="#our-process">Process</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#plans">Plans</a>
          <a href="#team">Team</a>
          <motion.a className={styles.contactLink} href="#contact" whileHover="hover">
            <span>Contact</span>
            <ArrowIcon className={styles.navArrow} variants={arrowHoverVariants} />
          </motion.a>
        </div>

        <CTAAnchor
          className={styles.buyButton}
          href="https://buy.polar.sh/polar_cl_gC2ETbVeQkpIRc3ZqYsINeEM7JYppVT1hfBG82uJ6S6"
          label="Buy this template"
          reducedMotion={Boolean(prefersReducedMotion)}
        />
      </motion.nav>

      <details className={styles.mobileNav}>
        <summary className={styles.mobileSummary}>
          <span className={styles.logo}>
            <span className={styles.logoDot} />
            <span>NEBULA</span>
          </span>
          <span className={styles.burger}>
            <span />
            <span />
          </span>
        </summary>
        <div className={styles.mobileMenu}>
          <a href="#our-process">Process</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#plans">Plans</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </details>

      <section className={styles.hero} onPointerMove={handleHeroPointerMove} onPointerLeave={resetHeroPointer}>
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
            className={styles.heroGlowRed}
            style={prefersReducedMotion ? undefined : { x: heroGlowRedX, y: heroGlowRedY }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? undefined : { delay: 0.2, duration: 0.4 }}
          />
          <motion.div
            className={styles.heroGlowGreen}
            style={prefersReducedMotion ? undefined : { x: heroGlowGreenX, y: heroGlowGreenY }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? undefined : { delay: 0.28, duration: 0.5 }}
          />
          <motion.div
            className={styles.heroCopy}
            variants={staggerChildren}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "show"}
          >
            <motion.h1 className={styles.heroTitle} variants={revealUp}>
              Driving <span className={styles.heroWarm}>growth</span> with{" "}
              <span className={styles.heroAccent}>AI</span>.
            </motion.h1>
            <motion.p className={styles.heroDescription} variants={revealUp}>
              We craft workflow automations and bespoke AI solutions for forward-thinking
              companies.
            </motion.p>
            <motion.div className={styles.heroActions} variants={revealUp}>
              <CTAAnchor
                className={styles.primaryButton}
                href="#services"
                label="Our services"
                reducedMotion={Boolean(prefersReducedMotion)}
              />
              <CTAAnchor
                className={styles.secondaryButton}
                href="#contact"
                label="Get in touch"
                reducedMotion={Boolean(prefersReducedMotion)}
                showArrow
              />
            </motion.div>
          </motion.div>
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
            />
            <AboutRevealLine
              segments={aboutLines[1]}
              progress={aboutLineTwoProgress}
              reducedMotion={Boolean(prefersReducedMotion)}
            />
            <AboutRevealLine
              segments={aboutLines[2]}
              progress={aboutLineThreeProgress}
              reducedMotion={Boolean(prefersReducedMotion)}
            />
          </div>
        </div>
      </section>

      <motion.section
        className={styles.section}
        id="our-process"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            Our <span>process</span>
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
        id="services"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            Our <span>services</span>
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
        id="work"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            Our <span>Work</span>
          </motion.h2>
          <div className={styles.workLayout}>
            <motion.div className={styles.workList} variants={staggerChildren}>
              {workItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={`${styles.workItem} ${activeWork === index ? styles.workItemActive : ""}`}
                  variants={revealUp}
                  initial={prefersReducedMotion ? false : "hidden"}
                  whileInView={prefersReducedMotion ? undefined : "show"}
                  viewport={{ once: true, amount: 0.6 }}
                  onHoverStart={() => setActiveWork(index)}
                  whileHover={prefersReducedMotion ? undefined : { borderColor: "rgba(211,255,202,0.16)" }}
                >
                  <div className={styles.workMeta}>{item.year}</div>
                  <motion.div className={styles.workRow} whileHover="hover">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ArrowIcon className={styles.workArrow} variants={arrowHoverVariants} />
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
            <motion.div className={styles.workPreview} variants={revealUp}>
              <motion.img
                key={activeWork}
                src={WORK_IMAGE}
                alt="Green laptop mockup"
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
        id="plans"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            <span>Plans</span> to suit your needs
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
                  {plan.popular ? <span className={styles.planBadge}>Most Popular</span> : null}
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
            What our <span>clients</span> say
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
            Meet the <span>team</span>
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
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        id="contact"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <div className={styles.sectionShell}>
          <motion.h2 className={styles.sectionTitle} variants={revealUp}>
            Get in <span>touch</span>
          </motion.h2>
          <div className={styles.contactLayout}>
            <motion.div className={styles.contactDetails} variants={revealUp}>
              <div className={styles.contactBlock}>
                <h3>Office</h3>
                <p>Keizersgracht 520, 1017EK</p>
                <p>Amsterdam</p>
                <p>The Netherlands</p>
              </div>
              <div className={styles.contactLine} />
              <div className={styles.contactBlock}>
                <h3>Email</h3>
                <motion.a href="mailto:mail@nebula.com" whileHover="hover">
                  <span>mail@nebula.com</span>
                  <ArrowIcon className={styles.inlineArrow} variants={arrowHoverVariants} />
                </motion.a>
              </div>
              <div className={styles.contactLine} />
              <div className={styles.contactBlock}>
                <h3>Phone</h3>
                <motion.a href="tel:+310203439223" whileHover="hover">
                  <span>+31 (0) 20 343 9223</span>
                  <ArrowIcon className={styles.inlineArrow} variants={arrowHoverVariants} />
                </motion.a>
              </div>
            </motion.div>

            <motion.form className={styles.contactForm} variants={revealUp}>
              <div className={styles.formRow}>
                <label>
                  <span>First Name</span>
                  <input placeholder="John" type="text" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input placeholder="Doe" type="text" />
                </label>
              </div>
              <div className={styles.formRow}>
                <label>
                  <span>Email</span>
                  <input placeholder="john@example.com" type="email" />
                </label>
                <label>
                  <span>Phone</span>
                  <input placeholder="+31 (0) 20 343 9223" type="tel" />
                </label>
              </div>
              <label className={styles.formStack}>
                <span>Message</span>
                <textarea />
              </label>
              <CTAButtonElement
                className={styles.submitButton}
                type="submit"
                label="Submit"
                reducedMotion={Boolean(prefersReducedMotion)}
              />
            </motion.form>
          </div>
        </div>
      </motion.section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.sectionShell}>
          <h2 className={styles.faqTitle}>FAQ</h2>
          <div className={styles.faqBox}>
            {faqItems.map((question) => (
              <details key={question} className={styles.faqItem}>
                <summary>
                  <span className={styles.faqIcon}>+</span>
                  <span>{question}</span>
                </summary>
                <p>
                  We tailor every engagement to your team&apos;s pace, security requirements, and
                  operating model while keeping delivery fast and flexible.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLine} />
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <a className={styles.logo} href="/">
              <span className={styles.logoDot} />
              <span>NEBULA</span>
            </a>
            <div className={styles.footerMeta}>
              <p>Office</p>
              <p>Amsterdam, The Netherlands</p>
              <p>Local time</p>
              <p>08:10:19 (CET)</p>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <a href="#our-process">Process</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#plans">Plans</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.footerLinks}>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="https://www.x.com/">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.dribbble.com/">Dribbble</a>
          </div>

          <div className={styles.footerMeta}>
            <p>Template by</p>
            <a href="https://twitter.com/BregmanTibor">Tibor Bregman</a>
            <a href="https://bluestar.supply/">BlueStar Supply</a>
          </div>
        </div>
      </footer>

      <CTAAnchor
        className={styles.floatingBuy}
        href="https://buy.polar.sh/polar_cl_gC2ETbVeQkpIRc3ZqYsINeEM7JYppVT1hfBG82uJ6S6"
        label="Buy template"
        reducedMotion={Boolean(prefersReducedMotion)}
        showArrow
      />
    </main>
  );
}
