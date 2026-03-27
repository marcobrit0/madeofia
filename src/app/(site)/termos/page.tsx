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
      description="Condições gerais para contratação de serviços de design, desenvolvimento web, SEO e produto digital com a MadeofIA."
      sections={[
        {
          title: "1. Escopo",
          body: (
            <p>
              Cada projeto é formalizado por proposta comercial com escopo,
              cronograma, entregas e limites de revisão definidos antes do
              início do trabalho.
            </p>
          ),
        },
        {
          title: "2. Pagamento",
          body: (
            <p>
              As condições financeiras são combinadas em proposta. Projetos de
              escopo fixo normalmente trabalham com entrada e saldo na entrega,
              enquanto contratos recorrentes seguem cobrança mensal.
            </p>
          ),
        },
        {
          title: "3. Propriedade intelectual",
          body: (
            <p>
              Após a quitação integral, o cliente recebe acesso ao material
              entregue, incluindo implementação, ativos previstos no escopo e
              configurações acordadas para o projeto.
            </p>
          ),
        },
        {
          title: "4. Prazos e feedback",
          body: (
            <p>
              Os prazos pressupõem retorno dentro das janelas combinadas. Atrasos
              causados por falta de validação ou envio de material pelo cliente
              impactam o cronograma.
            </p>
          ),
        },
        {
          title: "5. Cancelamento",
          body: (
            <p>
              O cancelamento segue o que estiver previsto na proposta e no
              contrato do projeto. Entregas já executadas e horas já consumidas
              não são automaticamente reembolsáveis.
            </p>
          ),
        },
        {
          title: "6. Contato",
          body: (
            <p>
              Dúvidas operacionais ou jurídicas podem ser enviadas para{" "}
              <a href="mailto:ola@madeofia.com">ola@madeofia.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
