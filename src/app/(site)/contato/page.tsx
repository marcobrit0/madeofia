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
            <ContactForm originLabel="/contato" />

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
