import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  CheckCircle2,
  Phone,
  Mail,
  User
} from "lucide-react";

// --- ILUSTRAÇÕES TÉCNICAS EXCLUSIVAS (VISUAL STORYTELLING) ---

const TechMultifocal = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Contorno da Lente */}
    <path d="M50 5C25 5 5 25 5 50C5 75 25 95 50 95C75 95 95 75 95 50C95 25 75 5 50 5Z" stroke="#E2E8F0" strokeWidth="2" fill="#F8FAFC"/>
    
    {/* O Corredor Progressivo (A "Ampulheta" da Visão) */}
    <defs>
      <linearGradient id="corridorGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8"/>
      </linearGradient>
    </defs>
    
    {/* Desenho do Campo Visual Ampliado */}
    <path d="M30 20 C30 20, 42 40, 42 50 C42 60, 35 80, 35 80 L65 80 C65 80, 58 60, 58 50 C58 40, 70 20, 70 20 Z" fill="url(#corridorGrad)" stroke="#2563EB" strokeWidth="2"/>
    
    {/* Marcadores de Distância */}
    <circle cx="50" cy="25" r="3" fill="#2563EB" /> {/* Longe */}
    <circle cx="50" cy="50" r="3" fill="#2563EB" /> {/* Intermediário */}
    <circle cx="50" cy="75" r="4" fill="#2563EB" stroke="white" strokeWidth="2"/> {/* Perto (Leitura) */}
    
    {/* Linhas de Grade (Grid Digital) - Representando Tecnologia */}
    <path d="M10 50 H90" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4"/>
    <path d="M50 10 V90" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4"/>
    
    {/* Texto Explicativo (Opcional, mas ajuda na interpretação visual) */}
    <text x="75" y="25" fontSize="8" fill="#64748B" fontWeight="bold">LONGE</text>
    <text x="75" y="78" fontSize="8" fill="#64748B" fontWeight="bold">PERTO</text>
  </svg>
);

const TechBlueShield = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lente de Perfil (Curva) */}
    <path d="M60 10 C75 30 75 70 60 90" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" fill="none"/>
    
    {/* Raio Azul Nocivo (Vem da esquerda e bate) */}
    <path d="M10 30 L58 45" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" className="animate-pulse"/>
    <path d="M10 40 L58 50" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" className="animate-pulse"/>
    <path d="M10 50 L58 55" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" className="animate-pulse"/>
    
    {/* Reflexo (Bloqueio) */}
    <path d="M58 45 L40 25" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M58 50 L35 40" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4"/>
    
    {/* Luz Boa Passando (Amarela/Verde suave) */}
    <path d="M62 48 L90 52" stroke="#10B981" strokeWidth="3" opacity="0.6"/>
    
    {/* Escudo Simbólico no Ponto de Impacto */}
    <circle cx="60" cy="50" r="8" fill="#06B6D4" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="2"/>
  </svg>
);

const TechSunActive = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="splitLens" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="45%" stopColor="#F1F5F9" /> {/* Claro */}
        <stop offset="55%" stopColor="#1E293B" /> {/* Escuro */}
      </linearGradient>
    </defs>
    
    {/* Lente Dividida */}
    <circle cx="50" cy="50" r="40" fill="url(#splitLens)" stroke="#94A3B8" strokeWidth="2"/>
    
    {/* Lado Esquerdo (Indoor/Claro) */}
    <path d="M30 40 L40 40 M35 35 L35 45" stroke="#94A3B8" strokeWidth="2"/> {/* Cruz de Mira leve */}
    <text x="20" y="70" fontSize="8" fill="#64748B">INDOOR</text>
    
    {/* Lado Direito (Outdoor/Escuro + Sol) */}
    <circle cx="75" cy="25" r="8" fill="#F59E0B" />
    <path d="M75 12 V18 M75 32 V38 M88 25 H82 M62 25 H68" stroke="#F59E0B" strokeWidth="2"/>
    
    {/* Setas de Transição */}
    <path d="M45 50 L55 50" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    
    <text x="60" y="70" fontSize="8" fill="#94A3B8">OUTDOOR</text>
  </svg>
);

// --- COMPONENTE PRINCIPAL ---

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
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

          <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 h-11 rounded-full shadow-lg shadow-blue-700/20 hidden md:inline-flex items-center gap-2 transition-all hover:scale-105">
            <User className="w-4 h-4" />
            Área do Lojista
          </Button>
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
            <Button size="lg" className="h-16 px-12 text-lg font-bold bg-blue-700 hover:bg-blue-800 shadow-xl shadow-blue-700/30 rounded-full transition-all hover:-translate-y-1">
              Conhecer Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-2 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-600 hover:text-blue-700 rounded-full bg-white/60 backdrop-blur-sm transition-all hover:-translate-y-1">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO PRODUTOS (COM TECH VISUALIZATIONS) --- */}
      <section id="produtos" className="pt-16 pb-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nossas Linhas Premium</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl">
            Desenvolvidas com surfaçagem digital de última geração para atender a cada necessidade visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* CARD 1: MULTIFOCAIS */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 p-4 flex items-center justify-center border border-slate-100 group-hover:border-blue-100 transition-colors">
              <TechMultifocal />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Multifocais Hayamax</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
              Progressão suave com campos visuais ampliados. Tecnologia FreeForm que elimina distorções periféricas.
            </p>
            <Button variant="outline" className="w-full h-12 border-blue-200 text-blue-700 font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
              Ver Detalhes
            </Button>
          </div>

          {/* CARD 2: BLUESHIELD */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 shadow-2xl transform md:-translate-y-8 border border-slate-800 ring-1 ring-white/10 flex flex-col">
            <div className="w-full h-48 bg-slate-800/50 rounded-2xl mb-6 p-4 flex items-center justify-center border border-slate-700">
              <TechBlueShield />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">BlueShield</h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed flex-grow">
              A defesa definitiva contra a luz azul nociva. Proteção para quem vive conectado, reduzindo a fadiga ocular.
            </p>
            <Button className="w-full h-14 bg-cyan-500 hover:bg-cyan-400 text-white border-none font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
              Conhecer BlueShield
            </Button>
          </div>

          {/* CARD 3: SUN ACTIVE */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-6 p-4 flex items-center justify-center border border-slate-100 group-hover:border-amber-100 transition-colors">
              <TechSunActive />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Sun Active</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
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