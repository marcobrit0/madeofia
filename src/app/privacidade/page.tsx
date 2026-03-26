import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade — MadeofIA",
  description:
    "Política de privacidade da MadeofIA com detalhes sobre coleta, uso e proteção de dados em conformidade com a LGPD.",
  path: "/privacidade",
  keywords: ["política de privacidade", "LGPD", "privacidade de dados"],
});

export default function Privacidade() {
  return (
    <>
      <Nav />
      <section className="pt-40 pb-32 max-w-3xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // legal
        </span>
        <h1 className="font-mono text-4xl font-bold text-[#f0f0f0] mb-12">
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-[#555555] text-sm leading-relaxed">
          <div>
            <p className="font-mono text-xs text-[#f0f0f0] uppercase tracking-widest mb-3">Última atualização: Março 2025</p>
            <p>
              A MadeofIA (CNPJ 65.599.230/0001-64) se compromete a proteger a privacidade dos dados dos seus usuários e clientes, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">1. Dados coletados</h2>
            <p>
              Coletamos dados fornecidos voluntariamente pelos usuários através de formulários de contato, como nome, e-mail e informações sobre o projeto. Não coletamos dados sensíveis.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">2. Uso dos dados</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para: responder às solicitações de contato, enviar propostas comerciais (quando solicitado) e manter comunicação relacionada aos serviços contratados.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">3. Compartilhamento</h2>
            <p>
              Não compartilhamos, vendemos ou cedemos seus dados a terceiros, exceto quando necessário para prestação dos serviços contratados (ex: plataformas de pagamento) ou por obrigação legal.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">4. Seus direitos (LGPD)</h2>
            <p>
              Você tem direito a: acessar seus dados, corrigir informações incorretas, solicitar exclusão dos dados, revogar consentimento a qualquer momento. Para exercer esses direitos, entre em contato: oi@madeofia.com.br
            </p>
          </div>

          <div>
            <h2 className="font-mono text-sm font-bold text-[#f0f0f0] mb-3">5. Contato</h2>
            <p>
              Dúvidas sobre esta política: <a href="mailto:oi@madeofia.com.br" className="text-[#00FF88] hover:underline">oi@madeofia.com.br</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
