"use client";

import Link from "next/link"; 
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sun, 
  Glasses, 
  MapPin, 
  CheckCircle2,
  Briefcase,
  Eye,
  Monitor,
  Download,
  FileText,
  User,
  ScanEye,
  X,
  Star
} from "lucide-react";

// --- DADOS DOS PRODUTOS ---
const portfolioHayamax = {
  multifocais: [
    {
      name: "Hayamax Premium",
      tag: "Topo de Linha",
      desc: "A máxima personalização biométrica. Campos visuais panorâmicos e adaptação imediata.",
      color: "from-amber-400 to-yellow-600",
      icon: Star
    },
    {
      name: "Hayamax Identity",
      tag: "Alta Performance",
      desc: "Desenhada para o seu estilo de vida. Equilíbrio perfeito entre longe e perto.",
      color: "from-blue-500 to-indigo-600",
      icon: ScanEye
    },
    {
      name: "Hayamax HD Plus",
      tag: "Intermediária Premium",
      desc: "Definição aprimorada com corredor progressivo suave.",
      color: "from-slate-400 to-slate-600",
      icon: Glasses
    },
    {
      name: "Hayamax HD",
      tag: "Digital Standard",
      desc: "Tecnologia digital acessível com excelente custo-benefício.",
      color: "from-slate-300 to-slate-500",
      icon: Glasses
    },
    {
      name: "Hayamax Light",
      tag: "Entrada",
      desc: "A porta de entrada para o mundo digital FreeForm.",
      color: "from-slate-200 to-slate-400",
      icon: Glasses
    }
  ],
  especiais: [
    {
      name: "Hayamax Work",
      tag: "Ocupacional",
      desc: "Foco total em distâncias intermediárias e perto. Ideal para escritório e computador.",
      color: "from-purple-500 to-purple-700",
      icon: Briefcase
    }
  ],
  visaoSimples: [
    {
      name: "Hayamax Single",
      tag: "Monofocal Digital",
      desc: "Lentes digitais monofocais com surfaçagem ponto a ponto para miopia, hipermetropia ou astigmatismo.",
      color: "from-emerald-500 to-teal-600",
      icon: Eye
    }
  ]
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- MODAL DE DETALHES (OVERLAY) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Fundo Escuro */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Painel Lateral */}
          <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
            
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-10">
                <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Portfólio Completo</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Família Hayamax</h2>
                <p className="text-slate-600 mt-4 text-lg">
                  Conheça a hierarquia de tecnologia das nossas lentes digitais. Uma solução exata para cada perfil de cliente.
                </p>
              </div>

              {/* SEÇÃO 1: MULTIFOCAIS */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Glasses className="w-5 h-5 text-blue-600" />
                  Lentes Progressivas (Multifocais)
                </h3>
                <div className="space-y-4">
                  {portfolioHayamax.multifocais.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all">
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.color}`}></div>
                      <div className="flex items-start gap-4 pl-2">
                        <div className={`p-2 rounded-lg bg-slate-50 text-slate-700`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEÇÃO 2: LENTES ESPECIAIS */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Monitor className="w-5 h-5 text-purple-600" />
                  Lentes Especiais
                </h3>
                <div className="space-y-4">
                  {portfolioHayamax.especiais.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl border border-slate-200 p-5 hover:border-purple-300 hover:shadow-md transition-all">
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.color}`}></div>
                      <div className="flex items-start gap-4 pl-2">
                        <div className={`p-2 rounded-lg bg-slate-50 text-slate-700`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEÇÃO 3: LENTES PERTO E LONGE DIGITAIS */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Eye className="w-5 h-5 text-emerald-600" />
                  Lentes Perto e Longe Digitais
                </h3>
                <div className="space-y-4">
                  {portfolioHayamax.visaoSimples.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl border border-slate-200 p-5 hover:border-emerald-300 hover:shadow-md transition-all">
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.color}`}></div>
                      <div className="flex items-start gap-4 pl-2">
                        <div className={`p-2 rounded-lg bg-slate-50 text-slate-700`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Final (DOWNLOAD) */}
              <div className="mt-12 pt-8 border-t border-slate-100 text-center bg-slate-50 -mx-8 -mb-8 p-8 md:-mx-12 md:-mb-12 md:p-12">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Material de Apoio Técnico</h4>
                  <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                    Baixe o catálogo completo com curvas base, alturas de montagem e tabelas de disponibilidade.
                  </p>
                  
                  <a 
                    href="/catalogo.pdf" 
                    download="Catalogo_Hayamax_2024.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md"
                  >
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 h-14 text-lg shadow-xl shadow-slate-900/10">
                      <Download className="mr-2 h-5 w-5" />
                      Baixar Catálogo PDF
                    </Button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* --- HEADER PRINCIPAL --- */}
      <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg shadow-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* LOGO HAYAMAX */}
          <div className="relative h-10 w-40 md:h-14 md:w-64"> 
            <Image 
              src="/logo.jpg" 
              alt="Hayamax Lentes" 
              fill 
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 160px, 256px"
            />
          </div>
          
          {/* NAVEGAÇÃO */}
          <nav className="hidden lg:flex gap-8 text-sm font-bold text-slate-700 uppercase tracking-wider">
            <a href="#produtos" className="relative group py-2">
              <span className="group-hover:text-blue-700 transition-colors">Produtos</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#tecnologia" className="relative group py-2">
              <span className="group-hover:text-blue-700 transition-colors">Tecnologia</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#quem-somos" className="relative group py-2">
              <span className="group-hover:text-blue-700 transition-colors">Quem Somos</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#onde-comprar" className="relative group py-2">
              <span className="group-hover:text-blue-700 transition-colors">Onde Comprar</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* BOTÃO DA ÁREA DO CLIENTE (CORRIGIDO) */}
          <a
            href="https://site-hayamax-final-git-main-juniors-projects-cef86fc9.vercel.app/login" 
            rel="noopener noreferrer" 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2 px-6 py-2"
          >
            <User className="w-5 h-5" />
            Área do Lojista
          </a>
          
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-12 pb-12 px-6 bg-slate-50 relative overflow-hidden min-h-[60vh] flex items-center">
        
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
           <Image 
              src="/tech.jpg" 
              alt="Background Tecnologia Opticom" 
              fill 
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-blue-100 shadow-md mb-8">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-slate-800 text-sm font-bold tracking-wide uppercase">
              Tecnologia de ponta revolucionando o segmento óptico
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-6xl leading-[1.1]">
            A evolução da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
              sua visão.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-10 leading-relaxed font-medium">
            Unimos precisão científica e conforto absoluto. Conheça as lentes que estão redefinindo o padrão de qualidade no mercado óptico.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
            {/* BOTÃO 1: SCROLL PARA PRODUTOS */}
            <a href="#produtos" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-16 px-12 text-lg font-bold bg-blue-700 hover:bg-blue-800 shadow-xl shadow-blue-700/30 rounded-full transition-all hover:-translate-y-1">
                Conhecer Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            {/* BOTÃO 2: WHATSAPP */}
            <a 
              href="https://wa.me/554333250600?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20lentes%20Hayamax." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full h-16 px-12 text-lg font-bold border-2 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-600 hover:text-blue-700 rounded-full bg-white/60 backdrop-blur-sm transition-all hover:-translate-y-1">
                Falar com Consultor
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO PRODUTOS (REORDENADA) --- */}
      <section id="produtos" className="pt-16 pb-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nossas Linhas Premium</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl">
            Desenvolvidas com surfaçagem digital de última geração para atender a cada necessidade visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* POSIÇÃO 1 (ESQUERDA): BLUESHIELD */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-10 shadow-2xl transform md:-translate-y-0 border border-slate-800 ring-1 ring-white/10">
            {/* Efeito de Fundo */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck className="w-48 h-48 text-cyan-400" />
            </div>

            {/* Ícone Principal */}
            <div className="h-20 w-20 bg-gradient-to-br from-cyan-900 to-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 relative shadow-lg shadow-cyan-500/20 border border-cyan-800">
               <ShieldCheck className="w-10 h-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" strokeWidth={2} />
               <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full blur-[1px]"></div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">BlueShield</h3>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              A defesa definitiva contra a luz azul nociva. Proteção para quem vive conectado, reduzindo a fadiga ocular.
            </p>
            <Button className="w-full h-14 bg-cyan-500 hover:bg-cyan-400 text-white border-none font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
              Conhecer BlueShield
            </Button>
          </div>

          {/* POSIÇÃO 2 (MEIO): MULTIFOCAIS (COM DESTAQUE CINZA) */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-200 p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Efeito de Fundo */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ScanEye className="w-48 h-48 text-blue-600" />
            </div>
            
            {/* Ícone Principal */}
            <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 relative shadow-sm border border-slate-200">
              <Glasses className="w-10 h-10 relative z-10" strokeWidth={2} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Multifocais Hayamax</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Progressão suave com campos visuais ampliados. Tecnologia FreeForm que elimina distorções periféricas.
            </p>
            
            {/* BOTÃO QUE ABRE O MODAL */}
            <Button 
              onClick={openModal}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/20 transition-all"
            >
              Ver Todas as Opções
            </Button>
          </div>

          {/* POSIÇÃO 3 (DIREITA): SUN ACTIVE */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Efeito de Fundo */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sun className="w-48 h-48 text-amber-500" />
            </div>

            {/* Ícone Principal */}
            <div className="h-20 w-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 relative">
              <Sun className="w-10 h-10" strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Sun Active</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Inteligência fotossensível. Lentes que escurecem rapidamente ao sol e clareiam em ambientes internos.
            </p>
            <Button variant="outline" className="w-full h-12 border-amber-200 text-amber-700 font-bold group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
              Ver Detalhes
            </Button>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO TECNOLOGIA --- */}
      <section id="tecnologia" className="py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full border border-blue-200">
              Laboratório Próprio Digital
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              Tecnologia de Precisão <br /> no DNA.
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Não terceirizamos qualidade. Utilizamos geradores de curva complexa e polimento digital em nosso laboratório próprio para garantir que cada lente seja uma obra-prima de engenharia óptica.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Surfaçagem Digital 100%</h4>
                  <p className="text-slate-500">Cálculo ponto a ponto para visão HD em todas as direções.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Controle de Qualidade Rigoroso</h4>
                  <p className="text-slate-500">Conferência humana e digital em 3 etapas antes do envio.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FOTO DO LABORATÓRIO */}
          <div className="flex-1 w-full relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2.5rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <Image 
                src="/lab.jpg" 
                alt="Laboratório Hayamax" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
                <p className="text-white font-bold text-lg flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  Certificação Internacional de Qualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO ONDE COMPRAR --- */}
      <section id="onde-comprar" className="py-32 px-6 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Leve a Hayamax para sua Ótica</h2>
          <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Junte-se a centenas de parceiros que oferecem o melhor custo-benefício do mercado óptico brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 h-20 px-12 text-xl font-bold rounded-full shadow-2xl shadow-blue-900/50 transition-all hover:scale-105 hover:shadow-blue-600/30">
              <MapPin className="mr-3 h-7 w-7" />
              Encontrar Representante
            </Button>
            <Button size="lg" variant="outline" className="h-20 px-12 text-xl font-bold border-slate-700 text-slate-300 hover:bg-white hover:text-slate-900 rounded-full transition-all">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 bg-slate-950 text-slate-500 text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-bold text-white mb-6 tracking-tighter">Hayamax<span className="text-blue-600">.</span></div>
            <p className="text-base leading-relaxed">Tecnologia óptica de precisão acessível para todo o Brasil. Qualidade que você vê.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Produtos</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Multifocais</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Visão Simples</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tratamentos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Laboratório</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        {/* RODAPÉ INFERIOR COM OPTICOM */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base">© 2024 Hayamax Lentes. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-slate-500 text-sm font-medium">By</span>
            <div className="relative w-24 h-8">
               <Image 
                src="/opticom.jpg" 
                alt="By Opticom" 
                fill 
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
  }