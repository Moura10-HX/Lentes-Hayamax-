import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Eye, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Simples */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
        <div className="text-2xl font-bold text-slate-900 tracking-tighter">
          Hayamax<span className="text-blue-600">.</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Tecnologia</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Produtos</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Laboratório</a>
        </nav>
        <Button>Fale Conosco</Button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Nova Tecnologia Blue Cut 3.0
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 max-w-4xl">
          Visão Japonesa, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Precisão Absoluta.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Lentes oftálmicas de alta performance desenvolvidas para o mundo digital.
          Proteção, conforto e nitidez em cada detalhe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
            Ver Catálogo Digital
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-300 text-slate-700 hover:bg-slate-50">
            Seja um Revendedor
          </Button>
        </div>

        {/* Features Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-5xl text-left">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Proteção UV400</h3>
            <p className="text-slate-500 text-sm">Bloqueio total contra raios nocivos, preservando a saúde ocular a longo prazo.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Nitidez HD</h3>
            <p className="text-slate-500 text-sm">Tecnologia de surfaçagem digital que elimina distorções periféricas.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Tratamento Antirreflexo</h3>
            <p className="text-slate-500 text-sm">Camadas super-hidrofóbicas que repelem água, poeira e gordura.</p>
          </div>
        </div>
      </section>
    </main>
  );
}