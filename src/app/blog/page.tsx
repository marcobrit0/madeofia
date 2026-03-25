import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — MadeofIA",
  description: "Artigos sobre IA aplicada, desenvolvimento web e product building.",
};

export default function Blog() {
  return (
    <>
      <Nav />

      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <span className="font-mono text-xs text-[#00FF88] uppercase tracking-widest block mb-4">
          // blog
        </span>
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-[#f0f0f0] leading-tight mb-6">
          Construindo com IA.<br />
          <span className="text-[#00FF88]">Em público.</span>
        </h1>
        <p className="text-[#555555] text-xl max-w-xl">
          Artigos sobre IA aplicada, desenvolvimento rápido, e como construir produtos digitais com agentes.
        </p>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="border border-[#1a1a1a] p-16 text-center">
          <div className="w-12 h-12 border border-[#1a1a1a] flex items-center justify-center mx-auto mb-6">
            <span className="font-mono text-[#00FF88] text-xl">_</span>
          </div>
          <p className="font-mono text-sm text-[#555555] mb-2">Em breve</p>
          <h2 className="font-mono text-2xl font-bold text-[#f0f0f0] mb-4">
            Primeiro post chegando.
          </h2>
          <p className="text-[#555555] text-sm max-w-sm mx-auto">
            Estamos escrevendo sobre como usamos agentes de IA para construir produtos reais mais rápido e mais barato.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Como construímos o CriarRecibo em 14 dias com agentes de IA",
              tag: "Case Study",
              date: "Em breve",
            },
            {
              title: "Por que equipes de IA vão substituir agências de desenvolvimento",
              tag: "Opinião",
              date: "Em breve",
            },
            {
              title: "Stack técnica para construir SaaS rápido em 2025: o que usamos",
              tag: "Tutorial",
              date: "Em breve",
            },
          ].map((post) => (
            <div key={post.title} className="border border-[#1a1a1a] p-6 opacity-40">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00FF88] block mb-3">
                {post.tag}
              </span>
              <h3 className="font-mono text-sm font-bold text-[#f0f0f0] leading-relaxed mb-4">
                {post.title}
              </h3>
              <p className="font-mono text-xs text-[#555555]">{post.date}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
