import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
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
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* LOGO HAYAMAX */}
          <div className="relative w-64 h-20 md:w-80 md:h-24">
            <Image 
              src="/logo.jpg" 
              alt="Hayamax Lentes" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#produtos" className="hover:text-blue-600 transition-colors">Produtos</a>
            <a href="#tecnologia" className="hover:text-blue-600 transition-colors">Tecnologia</a>
            <a href="#quem-somos" className="hover:text-blue-600 transition-colors">Quem Somos</a>
            <a href="#onde-comprar" className="hover:text-blue-600 transition-colors">Onde Comprar</a>
          </nav>

          <Button className="bg-slate-900 hover:bg-slate-800 hidden md:inline-flex">
            Área do Lojista
          </Button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-24 px-6 bg-slate-50 relative overflow-hidden min-h-[80vh] flex items-center">
        
        {/* BACKGROUND IMAGE (TECH) */}
        <div className="absolute inset-0 z-0">
           <Image 
              src="/tech.jpg" 
              alt="Background Tecnologia Opticom" 
              fill 
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* BADGE / FRASE DE IMPACTO ATUALIZADA */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide mb-8 border border-blue-200 shadow-sm">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Tecnologia de ponta revolucionando o segmento óptico
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-8 max-w-5xl">
            A evolução da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              sua visão.
            </span>
          </h1>

          <p className="text-xl text-slate-700 max-w-3xl mb-12 leading-relaxed font-medium">
            Unimos precisão científica e conforto absoluto. Conheça as lentes que estão redefinindo o padrão de qualidade no mercado óptico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 rounded-full">
              Conhecer Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-slate-300 text-slate-700 hover:bg-white hover:text-blue-600 rounded-full bg-white/80 backdrop-blur-sm">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO PRODUTOS (VITRINE) --- */}
      <section id="produtos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Nossas Linhas Premium</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Desenvolvidas com surfaçagem digital de última geração para atender a cada necessidade visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1: MULTIFOCAIS */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Glasses className="w-40 h-40 text-blue-600" />
            </div>
            <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Glasses className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Multifocais Hayamax</h3>
            <p className="text-slate-600 mb-8 text-base leading-relaxed">
              Progressão suave com campos visuais ampliados. Tecnologia FreeForm que elimina distorções periféricas.
            </p>
            <Button variant="outline" className="w-full border-blue-200 text-blue-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
              Ver Detalhes
            </Button>
          </div>

          {/* CARD 2: BLUESHIELD (DESTAQUE) */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 shadow-2xl transform md:-translate-y-6 border border-slate-800 ring-4 ring-slate-100">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Monitor className="w-40 h-40 text-cyan-400" />
            </div>
            <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">BlueShield</h3>
            <p className="text-slate-300 mb-8 text-base leading-relaxed">
              A defesa definitiva contra a luz azul nociva. Proteção para quem vive conectado, reduzindo a fadiga ocular.
            </p>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white border-none font-bold shadow-lg shadow-cyan-500/20">
              Conhecer BlueShield
            </Button>
          </div>

          {/* CARD 3: SUN ACTIVE */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sun className="w-40 h-40 text-amber-500" />
            </div>
            <div className="h-14 w-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
              <Sun className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sun Active</h3>
            <p className="text-slate-600 mb-8 text-base leading-relaxed">
              Inteligência fotossensível. Lentes que escurecem rapidamente ao sol e clareiam em ambientes internos.
            </p>
            <Button variant="outline" className="w-full border-amber-200 text-amber-700 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
              Ver Detalhes
            </Button>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO TECNOLOGIA --- */}
      <section id="tecnologia" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              Laboratório Próprio Digital
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Tecnologia de Precisão <br /> no DNA.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Não terceirizamos qualidade. Utilizamos geradores de curva complexa e polimento digital em nosso laboratório próprio para garantir que cada lente seja uma obra-prima de engenharia óptica.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Surfaçagem Digital 100%</h4>
                  <p className="text-slate-500 text-sm">Cálculo ponto a ponto para visão HD.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Controle de Qualidade Rigoroso</h4>
                  <p className="text-slate-500 text-sm">Conferência em 3 etapas antes do envio.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FOTO DO LABORATÓRIO */}
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/lab.jpg" 
                alt="Laboratório Hayamax" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                <p className="text-white font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Certificação Internacional de Qualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO ONDE COMPRAR --- */}
      <section id="onde-comprar" className="py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Leve a Hayamax para sua Ótica</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Junte-se a centenas de parceiros que oferecem o melhor custo-benefício do mercado óptico brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 h-16 px-10 text-lg rounded-full shadow-lg shadow-blue-900/50 transition-all hover:scale-105">
              <MapPin className="mr-2 h-6 w-6" />
              Encontrar Representante
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-slate-700 text-slate-300 hover:bg-white hover:text-slate-900 rounded-full transition-all">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-slate-950 text-slate-500 text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">Hayamax.</div>
            <p>Tecnologia óptica acessível para todo o Brasil.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Multifocais</a></li>
              <li><a href="#" className="hover:text-blue-400">Visão Simples</a></li>
              <li><a href="#" className="hover:text-blue-400">Tratamentos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-blue-400">Laboratório</a></li>
              <li><a href="#" className="hover:text-blue-400">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-slate-900">
          <p>© 2024 Hayamax Lentes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}