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
      title="Política de Privacidade"
      updatedAt="Mar 2026"
      description="Como a MadeofIA coleta, utiliza e protege os dados compartilhados por clientes, leads e visitantes do site."
      sections={[
        {
          title: "1. Dados coletados",
          body: (
            <p>
              Coletamos apenas dados fornecidos voluntariamente em formulários,
              como nome, e-mail, empresa e contexto do projeto. Não trabalhamos
              com coleta de dados sensíveis neste site.
            </p>
          ),
        },
        {
          title: "2. Finalidade do uso",
          body: (
            <p>
              Os dados são utilizados para responder contatos, preparar
              propostas, executar serviços contratados e manter comunicação
              operacional diretamente relacionada ao projeto.
            </p>
          ),
        },
        {
          title: "3. Compartilhamento",
          body: (
            <p>
              Não vendemos nem cedemos dados a terceiros. Eventual
              compartilhamento ocorre apenas quando necessário para a operação do
              serviço ou por obrigação legal.
            </p>
          ),
        },
        {
          title: "4. Direitos do titular",
          body: (
            <p>
              Você pode solicitar acesso, correção, exclusão ou revogação de
              consentimento escrevendo para{" "}
              <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>.
            </p>
          ),
        },
        {
          title: "5. Contato",
          body: (
            <p>
              Em caso de dúvida sobre esta política, escreva para{" "}
              <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
