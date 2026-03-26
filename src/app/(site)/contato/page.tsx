"use client";

import Link from "next/link";
import { useState } from "react";
import { PageIntro, sitePageStyles as styles } from "@/components/SitePages";
import { LinkButton, SubmitButton } from "@/components/SiteButton";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    plano: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <PageIntro
        eyebrow="// contato"
        title={
          <>
            Vamos estruturar
            <br />
            a proxima versao
            <br />
            <span style={{ color: "#d3ffca" }}>do seu projeto.</span>
          </>
        }
        description="Preencha o briefing com o maximo de contexto util. A resposta vem com proximos passos claros, nao com um pitch generico."
        panel={
          <>
            <p className={styles.panelKicker}>Janela de resposta</p>
            <p className={styles.panelTitle}>Ate 24 horas uteis.</p>
            <p className={styles.panelBody}>
              Se fizer sentido para os dois lados, seguimos para escopo, cronograma e proposta.
            </p>
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.formShell}>
            {sent ? (
              <div className={styles.successCard}>
                <p className={styles.eyebrow}>Mensagem recebida</p>
                <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
                  Agora a proxima resposta e nossa.
                </h2>
                <p className={styles.bodyCopy}>
                  Enquanto isso, voce pode revisar os cases do estudio e ter uma ideia melhor do nivel de profundidade que aplicamos nos projetos.
                </p>
                <LinkButton href="/portfolio" label="Ver portfolio" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formCard}>
                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label htmlFor="nome">Nome</label>
                    <input
                      id="nome"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
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
                    <label htmlFor="empresa">Empresa</label>
                    <input
                      id="empresa"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="plano">Tipo de projeto</label>
                    <select
                      id="plano"
                      name="plano"
                      value={form.plano}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Selecione</option>
                      <option value="essencial">Site institucional ou landing page</option>
                      <option value="crescimento">Site + blog + captacao</option>
                      <option value="produto">MVP ou web app</option>
                      <option value="parceiro">Evolucao continua</option>
                    </select>
                  </div>

                  <div className={styles.fieldFull}>
                    <label htmlFor="mensagem">Contexto do projeto</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={form.mensagem}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="Explique onde o negocio esta hoje, o que precisa mudar e qual decisao voce quer facilitar para o cliente."
                    />
                  </div>
                </div>

                <SubmitButton label={loading ? "Enviando" : "Enviar briefing"} disabled={loading} />
              </form>
            )}

            <div className={styles.infoRail}>
              <div className={styles.surfaceCard}>
                <p className={styles.panelKicker}>O que acontece depois</p>
                <ul className={styles.list} style={{ marginTop: 16 }}>
                  <li>Leitura do briefing e triagem do escopo.</li>
                  <li>Resposta com perguntas adicionais ou direcao inicial.</li>
                  <li>Call curta para alinhar contexto, prioridade e prazo.</li>
                  <li>Proposta com escopo e proxima etapa objetiva.</li>
                </ul>
              </div>

              <div className={styles.surfaceCard}>
                <p className={styles.panelKicker}>Contato direto</p>
                <p className={styles.panelTitle}>ola@madeofia.com</p>
                <p className={styles.panelBody}>
                  Se preferir, mande contexto por email. O importante e nao comecar o projeto com briefing raso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
