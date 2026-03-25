import styles from "./page.module.css";

const ARROW_ICON = "https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png";
const WORK_IMAGE =
  "https://framerusercontent.com/images/FtBTCikkRjMCS12d4b8jdRfTs4.jpeg?scale-down-to=2048";

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
  { top: "13%", left: "18%" },
  { top: "17%", left: "62%" },
  { top: "24%", left: "84%" },
  { top: "38%", left: "28%" },
  { top: "45%", left: "71%" },
  { top: "54%", left: "89%" },
  { top: "68%", left: "14%" },
  { top: "74%", left: "46%" },
  { top: "81%", left: "77%" },
];

function ArrowIcon({ className }: { className?: string }) {
  return <img className={className} src={ARROW_ICON} alt="" aria-hidden="true" />;
}

function ProcessVisual({ type }: { type: string }) {
  if (type === "plans") {
    return (
      <div className={`${styles.processVisual} ${styles.processSubscription}`}>
        <div className={styles.subscriptionToggle}>
          <span className={styles.subscriptionOff}>Off</span>
          <span className={styles.subscriptionChip}>Basic</span>
          <span className={styles.subscriptionChipMuted}>Pro</span>
        </div>
        <div className={styles.subscriptionLabel}>Subscription</div>
      </div>
    );
  }

  if (type === "request") {
    return (
      <div className={`${styles.processVisual} ${styles.processRequest}`}>
        <div className={styles.requestBubble}>New contact form entry</div>
        <div className={styles.requestArrow} />
        <div className={styles.requestBubbleStrong}>Write welcome message</div>
      </div>
    );
  }

  if (type === "build") {
    return (
      <div className={`${styles.processVisual} ${styles.processBuild}`}>
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
      </div>
    );
  }

  if (type === "metrics") {
    return (
      <div className={`${styles.processVisual} ${styles.processMetrics}`}>
        <div className={styles.metricPill}>Speed</div>
        <div className={styles.metricPill}>Accuracy</div>
        <div className={styles.metricPill}>Security</div>
      </div>
    );
  }

  return (
    <div className={`${styles.processVisual} ${styles.processGlobe}`}>
      <div className={styles.globeOrb} />
      <div className={styles.globeRing} />
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  if (type === "workflow") {
    return (
      <div className={`${styles.serviceVisual} ${styles.workflowVisual}`}>
        <div className={styles.workflowNode}>
          <img
            src="https://framerusercontent.com/images/FCIhg4w8Oic6PzzMBeFQQ09s200.png?width=600&height=600"
            alt="OpenAI logo"
          />
          <span>OpenAI</span>
        </div>
        <div className={styles.workflowNode}>
          <img
            src="https://framerusercontent.com/images/ElXA9BRDlk1EUYX76fVdPRGVs.png?width=512&height=512"
            alt="Airtable logo"
          />
          <span>Airtable</span>
        </div>
        <div className={styles.workflowNode}>
          <img
            src="https://framerusercontent.com/images/jgI8KEzSaG810pJKQsKIMoGc.webp?width=512&height=512"
            alt="Framer logo"
          />
          <span>Framer</span>
        </div>
        <div className={styles.workflowLines} />
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className={`${styles.serviceVisual} ${styles.chatVisual}`}>
        <div className={styles.chatPrompt}>Summarize this report</div>
        <div className={styles.chatReply}>
          <div className={styles.chatBadge}>AI assistant</div>
          <p>Sure, here&apos;s a summary:</p>
          <p>
            Quokka BV experienced a 15% increase in revenue to EUR120 million. Compared to the
            previous year, this year was better, mostly due to the increase in...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.serviceVisual} ${styles.consultingVisual}`}>
      <div className={styles.consultingMetric}>+15%</div>
      <div className={styles.consultingMetricMuted}>+32%</div>
      <div className={styles.consultingChart}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlowTop} />
      <div className={styles.backgroundGlowBottom} />

      <nav className={styles.desktopNav}>
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
          <a className={styles.contactLink} href="#contact">
            <span>Contact</span>
            <ArrowIcon className={styles.navArrow} />
          </a>
        </div>

        <a className={styles.buyButton} href="https://buy.polar.sh/polar_cl_gC2ETbVeQkpIRc3ZqYsINeEM7JYppVT1hfBG82uJ6S6">
          Buy this template
        </a>
      </nav>

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

      <section className={styles.hero}>
        <div className={styles.starField} aria-hidden="true">
          {stars.map((star, index) => (
            <span
              key={`${star.top}-${star.left}-${index}`}
              className={styles.star}
              style={{ top: star.top, left: star.left }}
            />
          ))}
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroGlowRed} />
          <div className={styles.heroGlowGreen} />
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Driving <span className={styles.heroWarm}>growth</span> with{" "}
              <span className={styles.heroAccent}>AI</span>.
            </h1>
            <p className={styles.heroDescription}>
              We craft workflow automations and bespoke AI solutions for forward-thinking
              companies.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#services">
                Our services
              </a>
              <a className={styles.secondaryButton} href="#contact">
                <span>Get in touch</span>
                <ArrowIcon className={styles.buttonArrow} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about-us">
        <div className={styles.sectionShell}>
          <div className={styles.aboutText}>
            <p>We&apos;re a full-service AI Automation Agency</p>
            <p>Into AI-driven</p>
          </div>
          <div className={styles.aboutText}>
            <p>We turn businesses</p>
            <p>industry leaders.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="our-process">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            Our <span>process</span>
          </h2>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <ProcessVisual type={step.visual} />
                <div className={styles.processText}>
                  <h3>
                    <span>{step.number}</span>
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            Our <span>services</span>
          </h2>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <ServiceVisual type={service.visual} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="work">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            Our <span>Work</span>
          </h2>
          <div className={styles.workLayout}>
            <div className={styles.workList}>
              {workItems.map((item) => (
                <article key={item.title} className={styles.workItem}>
                  <div className={styles.workMeta}>{item.year}</div>
                  <div className={styles.workRow}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ArrowIcon className={styles.workArrow} />
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.workPreview}>
              <img src={WORK_IMAGE} alt="Green laptop mockup" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="plans">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            <span>Plans</span> to suit your needs
          </h2>
          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`${styles.planCard} ${plan.popular ? styles.planCardFeatured : ""}`}
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
                <a className={styles.planButton} href="#contact">
                  <span>{plan.cta}</span>
                  <ArrowIcon className={styles.buttonArrow} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="testimonials">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            What our <span>clients</span> say
          </h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={styles.testimonialCard}>
                <h3>{testimonial.quote}</h3>
                <p>{testimonial.description}</p>
                <div className={styles.testimonialPerson}>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="team">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            Meet the <span>team</span>
          </h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <img src={member.avatar} alt={member.name} />
                <div className={styles.teamInfo}>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.sectionShell}>
          <h2 className={styles.sectionTitle}>
            Get in <span>touch</span>
          </h2>
          <div className={styles.contactLayout}>
            <div className={styles.contactDetails}>
              <div className={styles.contactBlock}>
                <h3>Office</h3>
                <p>Keizersgracht 520, 1017EK</p>
                <p>Amsterdam</p>
                <p>The Netherlands</p>
              </div>
              <div className={styles.contactLine} />
              <div className={styles.contactBlock}>
                <h3>Email</h3>
                <a href="mailto:mail@nebula.com">
                  <span>mail@nebula.com</span>
                  <ArrowIcon className={styles.inlineArrow} />
                </a>
              </div>
              <div className={styles.contactLine} />
              <div className={styles.contactBlock}>
                <h3>Phone</h3>
                <a href="tel:+310203439223">
                  <span>+31 (0) 20 343 9223</span>
                  <ArrowIcon className={styles.inlineArrow} />
                </a>
              </div>
            </div>

            <form className={styles.contactForm}>
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
              <button className={styles.submitButton} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

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

      <a
        className={styles.floatingBuy}
        href="https://buy.polar.sh/polar_cl_gC2ETbVeQkpIRc3ZqYsINeEM7JYppVT1hfBG82uJ6S6"
      >
        <span>Buy template</span>
        <ArrowIcon className={styles.floatingArrow} />
      </a>
    </main>
  );
}
