import type { Metadata } from "next";
import { LegalDocument } from "@/components/SitePages";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Termos de Uso — MadeofIA",
  description:
    "Termos de uso da MadeofIA para contratação de serviços de desenvolvimento web e produto digital.",
  path: "/termos",
  keywords: ["termos de uso", "contrato de serviços", "desenvolvimento web"],
});

export default function Termos() {
  return (
    <LegalDocument
      title="Termos de Uso"
      updatedAt="Mar 2026"
      description="Condicoes gerais para contratacao de servicos de design, desenvolvimento web, SEO e produto digital com a MadeofIA."
      sections={[
        {
          title: "1. Escopo",
          body: (
            <p>
              Cada projeto e formalizado por proposta comercial com escopo,
              cronograma, entregas e limites de revisao definidos antes do
              inicio do trabalho.
            </p>
          ),
        },
        {
          title: "2. Pagamento",
          body: (
            <p>
              As condicoes financeiras sao combinadas em proposta. Projetos de
              escopo fixo normalmente trabalham com entrada e saldo na entrega,
              enquanto contratos recorrentes seguem cobranca mensal.
            </p>
          ),
        },
        {
          title: "3. Propriedade intelectual",
          body: (
            <p>
              Apos quitacao integral, o cliente recebe acesso ao material
              entregue, incluindo implementacao, ativos previstos no escopo e
              configuracoes acordadas para o projeto.
            </p>
          ),
        },
        {
          title: "4. Prazos e feedback",
          body: (
            <p>
              Os prazos pressupõem retorno dentro das janelas combinadas. Atrasos
              causados por falta de validacao ou envio de material pelo cliente
              impactam o cronograma.
            </p>
          ),
        },
        {
          title: "5. Cancelamento",
          body: (
            <p>
              O cancelamento segue o que estiver previsto na proposta e no
              contrato do projeto. Entregas ja executadas e horas ja consumidas
              nao sao automaticamente reembolsaveis.
            </p>
          ),
        },
        {
          title: "6. Contato",
          body: (
            <p>
              Duvidas operacionais ou juridicas podem ser enviadas para{" "}
              <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
