"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { sitePageStyles as styles } from "@/components/SitePages";
import { SubmitButton } from "@/components/SiteButton";

const PROJECT_TYPE_OPTIONS = [
  "Site institucional ou landing page",
  "Site + blog + captação",
  "MVP ou web app",
  "Evolução contínua",
] as const;

const INITIAL_FORM_STATE = {
  nomeCompleto: "",
  email: "",
  empresa: "",
  website: "",
  tipoProjeto: "",
  whatsapp: "",
  mensagem: "",
};

type ContactFormProps = {
  originLabel: string;
};

export default function ContactForm({ originLabel }: ContactFormProps) {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          origin: originLabel,
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Não foi possível enviar sua mensagem.");
      }

      setStatus("success");
      setForm(INITIAL_FORM_STATE);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className={`${styles.formCard} ${styles.successCard} ${styles.successState}`}>
        <div className={styles.successIllustration} aria-hidden="true">
          <div className={styles.successBadge}>
            <svg viewBox="0 0 320 190" role="presentation">
              <rect
                x="34"
                y="32"
                width="252"
                height="126"
                rx="14"
                fill="rgba(7,7,7,0.98)"
                stroke="rgba(255,255,255,0.04)"
              />
              <rect
                x="58"
                y="48"
                width="74"
                height="22"
                rx="11"
                fill="rgba(17,43,31,0.9)"
                stroke="rgba(211,255,202,0.2)"
              />
              <text
                x="73"
                y="62.5"
                fill="rgba(211,255,202,0.92)"
                fontFamily="Arial, sans-serif"
                fontSize="11"
                letterSpacing="0.04em"
              >
                ENVIADO
              </text>
              <rect
                x="58"
                y="82"
                width="102"
                height="56"
                rx="14"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.08)"
              />
              <circle cx="78" cy="101" r="4.5" fill="rgba(211,255,202,0.72)" />
              <rect x="90" y="96" width="52" height="9" rx="4.5" fill="rgba(211,255,202,0.5)" />
              <rect x="74" y="113" width="68" height="9" rx="4.5" fill="rgba(211,255,202,0.34)" />
              <rect x="176" y="58" width="88" height="80" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
              <rect x="194" y="78" width="42" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
              <rect x="194" y="94" width="54" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
              <rect x="194" y="110" width="36" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
              <circle cx="250" cy="52" r="16" fill="rgba(17,43,31,0.92)" stroke="rgba(211,255,202,0.24)" />
              <path
                d="M243 52L248.5 57.5L258 47.5"
                fill="none"
                stroke="rgba(211,255,202,0.9)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
              <path
                d="M132 109H176"
                fill="none"
                stroke="rgba(211,255,202,0.22)"
                strokeLinecap="round"
                strokeWidth="1.6"
              />
              <circle cx="154" cy="109" r="2.5" fill="rgba(211,255,202,0.42)" />
            </svg>
          </div>
        </div>
        <div className={styles.successCopy}>
          <p className={styles.eyebrow}>Mensagem enviada</p>
          <h2 className={styles.successHeading}>Recebemos seu contato.</h2>
          <p className={styles.successBody}>
            Respondemos em até 24 horas úteis com os próximos passos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formCard}>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor={`${originLabel}-nome-completo`}>Nome completo</label>
          <input
            id={`${originLabel}-nome-completo`}
            name="nomeCompleto"
            required
            value={form.nomeCompleto}
            onChange={handleChange}
            className={styles.input}
            placeholder="Seu nome completo"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${originLabel}-email`}>E-mail</label>
          <input
            id={`${originLabel}-email`}
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="seu@email.com"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${originLabel}-empresa`}>Empresa</label>
          <input
            id={`${originLabel}-empresa`}
            name="empresa"
            required
            value={form.empresa}
            onChange={handleChange}
            className={styles.input}
            placeholder="Nome da empresa"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${originLabel}-website`}>Website ou rede social</label>
          <input
            id={`${originLabel}-website`}
            name="website"
            type="text"
            required
            value={form.website}
            onChange={handleChange}
            className={styles.input}
            placeholder="suaempresa.com ou @instagram"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={`${originLabel}-tipo-projeto`}>Tipo de projeto</label>
          <select
            id={`${originLabel}-tipo-projeto`}
            name="tipoProjeto"
            required
            value={form.tipoProjeto}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Selecione</option>
            {PROJECT_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor={`${originLabel}-whatsapp`}>WhatsApp</label>
          <input
            id={`${originLabel}-whatsapp`}
            name="whatsapp"
            type="tel"
            required
            value={form.whatsapp}
            onChange={handleChange}
            className={styles.input}
            placeholder="+55 (11) 9 0000-0000"
          />
        </div>

        <div className={styles.fieldFull}>
          <label htmlFor={`${originLabel}-mensagem`}>Mensagem</label>
          <textarea
            id={`${originLabel}-mensagem`}
            name="mensagem"
            required
            value={form.mensagem}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Explique contexto, objetivo, prazo e o que precisa destravar."
          />
        </div>
      </div>

      <div className={styles.formActions}>
        <SubmitButton label={buttonLabel(status)} disabled={status === "submitting"} />
        {status === "error" ? (
          <p className={styles.formError}>
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function buttonLabel(status: "idle" | "submitting" | "success" | "error") {
  if (status === "submitting") {
    return "Enviando...";
  }

  if (status === "success") {
    return "Mensagem enviada";
  }

  return "Enviar mensagem";
}
