import { PageIntro, sitePageStyles as styles } from "@/components/SitePages";
import ContactForm from "@/components/ContactForm";

export default function Contato() {
  return (
    <>
      <PageIntro
        eyebrow="// contato"
        title={
          <>
            Vamos estruturar
            <br />
            a próxima versão
            <br />
            <span style={{ color: "#d3ffca" }}>do seu projeto.</span>
          </>
        }
        description="Preencha o briefing com o máximo de contexto útil. A resposta vem com próximos passos claros, não com um pitch genérico."
        panel={
          <>
            <p className={styles.panelKicker}>Janela de resposta</p>
            <p className={styles.panelTitle}>Até 24 horas úteis.</p>
            <p className={styles.panelBody}>
              Se fizer sentido para os dois lados, seguimos para escopo, cronograma e proposta.
            </p>
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.formShell}>
            <ContactForm originLabel="/contato" />

            <div className={styles.infoRail}>
              <div className={styles.surfaceCard}>
                <p className={styles.panelKicker}>O que acontece depois</p>
                <ul className={styles.list} style={{ marginTop: 16 }}>
                  <li>Leitura do briefing e triagem do escopo.</li>
                  <li>Resposta com perguntas adicionais ou direção inicial.</li>
                  <li>Call curta para alinhar contexto, prioridade e prazo.</li>
                  <li>Proposta com escopo e próxima etapa objetiva.</li>
                </ul>
              </div>

              <div className={styles.surfaceCard}>
                <p className={styles.panelKicker}>Contato direto</p>
                <p className={styles.panelTitle}>ola@madeofia.com</p>
                <p className={styles.panelBody}>
                  Se preferir, mande contexto por e-mail. O importante é não começar o projeto com um briefing raso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
