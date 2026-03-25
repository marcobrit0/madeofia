"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <Nav />

      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // contato
        </span>
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-[#f0f0f0] leading-tight mb-6">
          Vamos construir<br />
          <span className="text-[#00FF88]">algo juntos.</span>
        </h1>
        <p className="text-[#555555] text-xl max-w-xl">
          Preencha o formulário. Respondemos em até 24h com uma proposta ou próximos passos.
        </p>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="border border-[#00FF88]/30 p-12 text-center" style={{ background: "rgba(0,255,136,0.02)" }}>
                <p className="font-mono text-4xl text-[#00FF88] mb-4">✓</p>
                <h2 className="font-mono text-2xl font-bold text-[#f0f0f0] mb-4">
                  Mensagem recebida.
                </h2>
                <p className="text-[#555555]">
                  Respondemos em até 24h. Enquanto isso, dá uma olhada no nosso{" "}
                  <a href="/portfolio" className="text-[#00FF88] hover:underline">portfólio</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-[#555555] block mb-2">
                      Nome *
                    </label>
                    <input
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#00FF88] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-[#555555] block mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#00FF88] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-[#555555] block mb-2">
                      Empresa
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nome da empresa (opcional)"
                      className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#00FF88] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-[#555555] block mb-2">
                      Plano de interesse
                    </label>
                    <select
                      name="plano"
                      value={form.plano}
                      onChange={handleChange}
                      className="w-full bg-[#080808] border border-[#1a1a1a] px-4 py-3 font-mono text-sm text-[#f0f0f0] focus:outline-none focus:border-[#00FF88] transition-colors appearance-none"
                    >
                      <option value="">Selecione...</option>
                      <option value="essencial">Essencial — R$15K</option>
                      <option value="crescimento">Crescimento — R$25K</option>
                      <option value="produto">Produto Digital — R$45K</option>
                      <option value="parceiro">Parceiro Digital — R$7K/mês</option>
                      <option value="nao-sei">Ainda não sei</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-[#555555] block mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Conte um pouco sobre o projeto. Qual é a ideia? Onde você está hoje? O que precisa?"
                    className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#00FF88] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full font-mono text-sm uppercase tracking-widest py-4 bg-[#00FF88] text-[#080808] font-bold hover:bg-[#00FF88]/90 transition-colors disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensagem →"}
                </button>
              </form>
            )}
          </div>

          {/* Right: info */}
          <div className="space-y-8">
            <div className="border border-[#1a1a1a] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-4">
                Tempo de resposta
              </p>
              <p className="font-mono text-3xl font-bold text-[#00FF88]">&lt; 24h</p>
              <p className="text-[#555555] text-xs mt-2">dias úteis</p>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-4">
                O que acontece depois
              </p>
              <ol className="space-y-3">
                {[
                  "Respondemos com perguntas ou proposta",
                  "Call de 30min para alinhar escopo",
                  "Proposta formal em 48h",
                  "Contrato e início do projeto",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-xs font-mono text-[#555555]">
                    <span className="text-[#00FF88] shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-4">
                Email direto
              </p>
              <a
                href="mailto:oi@madeofia.com.br"
                className="font-mono text-sm text-[#00FF88] hover:underline"
              >
                oi@madeofia.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
