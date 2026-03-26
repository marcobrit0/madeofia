import type { Metadata } from "next";
import { LegalDocument } from "@/components/SitePages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade — MadeofIA",
  description:
    "Política de privacidade da MadeofIA com detalhes sobre coleta, uso e proteção de dados em conformidade com a LGPD.",
  path: "/privacidade",
  keywords: ["política de privacidade", "LGPD", "privacidade de dados"],
});

export default function Privacidade() {
  return (
    <LegalDocument
      title="Politica de Privacidade"
      updatedAt="Mar 2026"
      description="Como a MadeofIA coleta, utiliza e protege os dados compartilhados por clientes, leads e visitantes do site."
      sections={[
        {
          title: "1. Dados coletados",
          body: (
            <p>
              Coletamos apenas dados fornecidos voluntariamente em formularios,
              como nome, email, empresa e contexto do projeto. Nao trabalhamos
              com coleta de dados sensiveis neste site.
            </p>
          ),
        },
        {
          title: "2. Finalidade do uso",
          body: (
            <p>
              Os dados sao utilizados para responder contatos, preparar
              propostas, executar servicos contratados e manter comunicacao
              operacional diretamente relacionada ao projeto.
            </p>
          ),
        },
        {
          title: "3. Compartilhamento",
          body: (
            <p>
              Nao vendemos nem cedemos dados a terceiros. Eventual
              compartilhamento ocorre apenas quando necessario para operacao do
              servico ou por obrigacao legal.
            </p>
          ),
        },
        {
          title: "4. Direitos do titular",
          body: (
            <p>
              Voce pode solicitar acesso, correcao, exclusao ou revogacao de
              consentimento escrevendo para{" "}
              <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>.
            </p>
          ),
        },
        {
          title: "5. Contato",
          body: (
            <p>
              Em caso de duvida sobre esta politica, escreva para{" "}
              <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
