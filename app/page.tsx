import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  Zap, 
  Sun, 
  Monitor, 
  Glasses, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900 tracking-tighter">
            Hayamax<span className="text-blue-600">.</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#produtos" className="hover:text-blue-600 transition-colors">Produtos</a>
            <a href="#tecnologia" className="hover:text-blue-600 transition-colors">Tecnologia</a>
            <a href="#quem-somos" className="hover:text-blue-600 transition-colors">Quem Somos</a>
            <a href="#onde-comprar" className="hover:text-blue-600 transition-colors">Onde Comprar</a>
          </nav>

          <Button className="bg-slate-900 hover:bg-slate-800">
            Área do Lojista
          </Button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Excelência Óptica Japonesa
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 max-w-4xl">
            A evolução da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              sua visão.
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
            Unimos precisão científica e conforto absoluto. Conheça as lentes que estão redefinindo o padrão de qualidade no mercado óptico.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
              Conhecer Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO PRODUTOS (VITRINE) --- */}
      <section id="produtos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossas Linhas Premium</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Desenvolvidas com surfaçagem digital de última geração para atender a cada necessidade visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1: MULTIFOCAIS */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Glasses className="w-32 h-32 text-blue-600" />
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Glasses className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Multifocais Hayamax</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Progressão suave com campos visuais ampliados. Tecnologia FreeForm que elimina distorções periféricas e facilita a adaptação imediata.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Campos ampliados em 30%
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Adaptação acelerada
              </li>
            </ul>
            <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
              Ver Detalhes
            </Button>
          </div>

          {/* CARD 2: BLUESHIELD */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 shadow-2xl transform md:-translate-y-4">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Monitor className="w-32 h-32 text-cyan-400" />
            </div>
            <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">BlueShield</h3>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              A defesa definitiva contra a luz azul nociva. Proteção para quem vive conectado, reduzindo a fadiga ocular digital e preservando o ciclo do sono.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" /> Filtro de luz azul UV420
              </li>
              <li className="flex items-center text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" /> Contraste aprimorado
              </li>
            </ul>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white border-none">
              Conhecer BlueShield
            </Button>
          </div>

          {/* CARD 3: SUN ACTIVE */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 hover:border-amber-200">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sun className="w-32 h-32 text-amber-500" />
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sun Active</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Inteligência fotossensível. Lentes que escurecem rapidamente ao sol e clareiam em ambientes internos, garantindo conforto em qualquer luminosidade.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" /> Reação rápida UV
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2" /> 100% Proteção UVA/UVB
              </li>
            </ul>
            <Button variant="outline" className="w-full group-hover:bg-amber-500 group-hover:text-white transition-colors">
              Ver Detalhes
            </Button>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO TECNOLOGIA --- */}
      <section id="tecnologia" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              Laboratório Próprio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tecnologia de Precisão <br /> no DNA.
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Utilizamos geradores de curva complexa e polimento digital para garantir que cada lente seja uma obra-prima de engenharia óptica.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Zap className="w-8 h-8 text-blue-600" />
                <span className="font-bold text-slate-900">Surfaçagem Digital</span>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                <span className="font-bold text-slate-900">Controle de Qualidade</span>
              </div>
            </div>
          </div>
          <div className="flex-1 h-80 bg-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Placeholder para imagem do laboratório */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/10"></div>
            <p className="text-slate-500 font-medium">Imagem do Laboratório / Máquinas</p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO ONDE COMPRAR / QUEM SOMOS --- */}
      <section id="onde-comprar" className="py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leve a Hayamax para sua Ótica</h2>
          <p className="text-slate-400 text-lg mb-10">
            Junte-se a centenas de parceiros que oferecem o melhor custo-benefício do mercado óptico brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg">
              <MapPin className="mr-2 h-5 w-5" />
              Encontrar Representante
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-sm text-center border-t border-slate-900">
        <p>© 2024 Hayamax Lentes. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}