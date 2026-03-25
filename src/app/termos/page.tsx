import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — MadeofIA",
};

export default function Termos() {
  return (
    <>
      <Nav />
      <section className="pt-40 pb-32 max-w-3xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // legal
        </span>
        <h1 className="font-mono text-4xl font-bold text-[#f0f0f0] mb-12">
          Termos de Uso
        </h1>

        <div className="space-y-8 text-[#555555] text-sm leading-relaxed">
          <div>
            <p className="font-mono text-xs text-[#f0f0f0] uppercase tracking-widest mb-3">Última atualização: Março 2025</p>
            <p>
              Ao contratar os serviços da MadeofIA (CNPJ 65.599.230/0001-64), você concorda com os termos abaixo.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">1. Serviços</h2>
            <p>
              A MadeofIA presta serviços de desenvolvimento web e criação de produtos digitais utilizando equipes de agentes de inteligência artificial. O escopo, prazo e valores são definidos em proposta comercial formal assinada pelas partes.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">2. Pagamento</h2>
            <p>
              O pagamento é realizado em duas parcelas: 50% no início do projeto e 50% na entrega final. O plano Parceiro Digital é cobrado mensalmente via boleto ou cartão de crédito.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">3. Propriedade intelectual</h2>
            <p>
              Após o pagamento integral, o cliente recebe todos os direitos sobre o produto entregue. O código-fonte, designs e ativos digitais são transferidos integralmente ao cliente.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">4. Prazo e revisões</h2>
            <p>
              Os prazos estimados pressupõem feedback do cliente em até 48h após cada entrega parcial. Atrasos causados por demora nas respostas do cliente não são de responsabilidade da MadeofIA. O número de rodadas de revisão está definido em contrato.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">5. Cancelamento</h2>
            <p>
              O cancelamento do plano Parceiro Digital pode ser feito com 30 dias de aviso prévio. Projetos com escopo fixo não são reembolsáveis após o início do desenvolvimento.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">6. Contato</h2>
            <p>
              Dúvidas: <a href="mailto:oi@madeofia.com.br" className="text-[#00FF88] hover:underline">oi@madeofia.com.br</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
