import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Sliders, 
  Type, 
  Palette, 
  Layers, 
  User, 
  FileText, 
  Home, 
  ArrowLeft,
  Sparkles,
  Smartphone,
  ExternalLink,
  Info
} from "lucide-react";
import { toast } from "sonner";

export default function DesignSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: "Sand Gold", hex: "#C4A482", hsl: "31 36% 64%", role: "Ação Principal, Ícones, Destaques", class: "bg-primary text-secondary" },
    { name: "Dark Espresso", hex: "#352520", hsl: "14 25% 17%", role: "Fundo Primário, Textos de Título", class: "bg-secondary text-white" },
    { name: "Luxury Gold Hover", hex: "#D3B797", hsl: "31 46% 74%", role: "Estados Hover de Botões", class: "bg-[#D3B797] text-secondary" },
    { name: "Pure Dark", hex: "#1D1311", hsl: "14 25% 10%", role: "Fundo Dark Mode Absoluto", class: "bg-[#1D1311] text-white" },
    { name: "Soft Cream", hex: "#FAF8F5", hsl: "14 25% 98%", role: "Fundo Light Mode / Off-white", class: "bg-[#FAF8F5] text-secondary border border-border" },
    { name: "Golden Muted Border", hex: "#DFD1C1", hsl: "31 20% 85%", role: "Bordas e Divisores Finos", class: "bg-[#DFD1C1] text-secondary" }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    toast.success(`Copiado: ${text}`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1D1311] text-[#FAF8F5] font-sans selection:bg-primary selection:text-secondary">
      {/* Top Banner / Hero */}
      <div className="relative overflow-hidden border-b border-secondary/50 bg-gradient-to-b from-[#352520] to-[#1D1311] py-16 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(196,164,130,0.15),rgba(0,0,0,0))]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-[#D3B797] transition-colors mb-6 text-sm font-semibold tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Voltar para Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-white mb-2">
                Realizzati <span className="text-primary italic">Design System</span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 max-w-2xl font-light">
                O inventário vivo de design e UI Kit de alto padrão para a Realizzati Móveis Planejados. 
                Estética inspirada na excelência e sofisticação (Padrão Navalia).
              </p>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Luxury Version 1.0
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1.5">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-8 self-start">
            <nav className="space-y-1 bg-[#352520]/20 p-4 rounded-xl border border-primary/10 backdrop-blur-md">
              <p className="text-xs font-semibold tracking-wider text-primary uppercase px-3 mb-3">Componentes</p>
              <a href="#cores" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-primary/10 transition-colors">
                <Palette className="w-4 h-4 text-primary" /> Cores & Swatches
              </a>
              <a href="#tipografia" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-primary/10 transition-colors">
                <Type className="w-4 h-4 text-primary" /> Tipografia
              </a>
              <a href="#botoes" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-primary/10 transition-colors">
                <Sliders className="w-4 h-4 text-primary" /> Botões Premium
              </a>
              <a href="#formularios" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-primary/10 transition-colors">
                <FileText className="w-4 h-4 text-primary" /> Inputs & Formulários
              </a>
              <a href="#cards" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-primary/10 transition-colors">
                <Layers className="w-4 h-4 text-primary" /> Cards & Capas
              </a>
              <a href="#logos" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-primary/10 transition-colors">
                <Layers className="w-4 h-4 text-primary" /> Aplicações do Logo
              </a>
            </nav>
          </aside>

          {/* Components Panel */}
          <main className="lg:col-span-3 space-y-16">
            
            {/* 1. Cores */}
            <section id="cores" className="scroll-mt-8">
              <h2 className="text-2xl font-serif text-white border-b border-primary/20 pb-2 mb-6 flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" /> 1. Paleta de Cores (Tokens)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {colors.map((color) => (
                  <div 
                    key={color.name} 
                    className="group bg-[#352520]/25 rounded-xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300"
                  >
                    <div className={`h-24 ${color.class} flex items-end p-4 relative`}>
                      <button 
                        onClick={() => handleCopy(color.hex)}
                        className="absolute top-3 right-3 p-2 bg-[#1D1311]/60 hover:bg-[#1D1311] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        title="Copiar HEX"
                      >
                        {copiedColor === color.hex ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5 text-gray-300" />}
                      </button>
                      <span className="font-mono text-xs tracking-wider uppercase font-semibold drop-shadow-sm px-1.5 py-0.5 rounded bg-[#1D1311]/40 backdrop-blur-sm">
                        {color.hex}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white text-base">{color.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{color.role}</p>
                      <div className="mt-3 font-mono text-[10px] text-primary bg-primary/5 px-2 py-1 rounded border border-primary/10">
                        hsl({color.hsl})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Tipografia */}
            <section id="tipografia" className="scroll-mt-8">
              <h2 className="text-2xl font-serif text-white border-b border-primary/20 pb-2 mb-6 flex items-center gap-2">
                <Type className="w-5 h-5 text-primary" /> 2. Tipografia & Títulos
              </h2>
              <div className="bg-[#352520]/15 p-6 rounded-xl border border-primary/10 space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">Título Serif (Playfair Display)</span>
                  <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                    Ambientes que traduzem sua personalidade.
                  </h1>
                </div>
                <div className="border-t border-primary/10 pt-4">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">Subtítulo (Inter Light / Medium)</span>
                  <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                    Móveis planejados sob medida com acabamento premium e garantia de fábrica de 5 anos.
                  </p>
                </div>
                <div className="border-t border-primary/10 pt-4">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">Texto de Corpo (Inter Normal)</span>
                  <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed">
                    A Realizzati transforma seus sonhos de moradia em realidade com projetos totalmente integrados, maquinário automatizado de ponta e materiais selecionados com rigor estético.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Botões */}
            <section id="botoes" className="scroll-mt-8">
              <h2 className="text-2xl font-serif text-white border-b border-primary/20 pb-2 mb-6 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-primary" /> 3. Botões & Micro-interações
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Botão Primário Shimmer */}
                <div className="bg-[#352520]/15 p-6 rounded-xl border border-primary/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Botão Primário (Luxury Shimmer)</h3>
                    <p className="text-xs text-gray-400 mb-4">Combinação de Sand Gold com brilho animado suave e sombra dourada ampla.</p>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="shimmer text-[#352520] font-semibold px-8 py-3.5 rounded-lg shadow-luxury hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 text-sm tracking-wider uppercase flex items-center gap-2">
                      Falar com Consultor <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Botão Secundário Dark */}
                <div className="bg-[#352520]/15 p-6 rounded-xl border border-primary/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Botão Secundário (Dark Espresso Accent)</h3>
                    <p className="text-xs text-gray-400 mb-4">Espresso escuro com borda dourada elegante e efeito hover de luminosidade.</p>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="bg-secondary text-[#FAF8F5] border border-primary/40 px-8 py-3.5 rounded-lg hover:border-primary hover:bg-[#3d2a24] active:scale-[0.98] transition-all duration-300 text-sm tracking-wider uppercase flex items-center gap-2">
                      Ver Portfólio <ChevronRight className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>

                {/* Botão Outline / Glass */}
                <div className="bg-[#352520]/15 p-6 rounded-xl border border-primary/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Botão Outline (Luxury Glass)</h3>
                    <p className="text-xs text-gray-400 mb-4">Transparente com borda fina em Sand Gold e preenchimento gradual no hover.</p>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="bg-transparent text-primary hover:text-secondary border border-primary/50 hover:bg-primary px-8 py-3.5 rounded-lg active:scale-[0.98] transition-all duration-300 text-sm tracking-wider uppercase">
                      Conhecer Showroom
                    </button>
                  </div>
                </div>

                {/* Botões Especiais / Estados */}
                <div className="bg-[#352520]/15 p-6 rounded-xl border border-primary/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Estados Especiais</h3>
                    <p className="text-xs text-gray-400 mb-4">Exemplos de estados de carregamento, inativos ou com ícones de ação rápidos.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                    <button disabled className="bg-primary/20 text-secondary/40 cursor-not-allowed border border-primary/10 px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold">
                      Indisponível
                    </button>
                    <button className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-all duration-300">
                      <Phone className="w-3.5 h-3.5 fill-current" /> WhatsApp
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. Inputs e Formulários */}
            <section id="formularios" className="scroll-mt-8">
              <h2 className="text-2xl font-serif text-white border-b border-primary/20 pb-2 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> 4. Inputs & Formulários (Glassmorphism)
              </h2>
              
              <div className="glass-dark p-8 rounded-2xl border border-primary/20 shadow-luxury max-w-xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <h3 className="text-base font-serif text-white">Simulador de Formulário de Captação</h3>
                </div>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1.5">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Alexander Stark" 
                      className="w-full bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1.5">WhatsApp / Telefone</label>
                      <input 
                        type="tel" 
                        placeholder="(47) 99999-9999" 
                        className="w-full bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1.5">E-mail</label>
                      <input 
                        type="email" 
                        placeholder="nome@exemplo.com" 
                        className="w-full bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1.5">Ambiente de Interesse</label>
                    <select className="w-full bg-[#1D1311]/55 border border-primary/20 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300">
                      <option className="bg-[#352520]">Selecione um ambiente...</option>
                      <option className="bg-[#352520]" value="cozinha">Cozinhas Planejadas</option>
                      <option className="bg-[#352520]" value="dormitorio">Dormitórios & Closets</option>
                      <option className="bg-[#352520]" value="living">Salas & Living</option>
                      <option className="bg-[#352520]" value="corporativo">Ambientes Corporativos</option>
                      <option className="bg-[#352520]" value="casa-completa">Casa Completa</option>
                    </select>
                  </div>

                  <button className="shimmer w-full text-secondary font-bold py-4 rounded-lg shadow-luxury hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 text-sm tracking-wider uppercase mt-4">
                    Receber Orçamento Exclusivo
                  </button>
                </form>
              </div>
            </section>

            {/* 5. Cards & Capas */}
            <section id="cards" className="scroll-mt-8">
              <h2 className="text-2xl font-serif text-white border-b border-primary/20 pb-2 mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> 5. Cards & Exposição de Ambientes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Showcase de Card de Ambiente */}
                <div className="group bg-[#352520]/25 rounded-2xl border border-primary/10 overflow-hidden hover-lift flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
                      alt="Cozinha de Luxo" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#352520]/90 border border-primary/30 backdrop-blur-sm text-primary text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
                        Cozinhas
                      </span>
                      <span className="bg-primary text-[#352520] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md">
                        Destaque
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors">Cozinha Provençal Sand Gold</h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed">
                        Mobiliário sofisticado que une a elegância dos tons quentes e amadeirados ao requinte do acabamento fosco e perfis dourados.
                      </p>
                    </div>
                    <div className="border-t border-primary/10 pt-4 mt-6 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Sob Medida</span>
                      <span className="text-primary font-semibold text-xs tracking-wider uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Ver detalhes <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Banner / Hero Section Cover Demo */}
                <div className="relative rounded-2xl border border-primary/10 overflow-hidden aspect-[4/3] flex items-end p-6 md:p-8">
                  {/* Background Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                    alt="Living Luxo" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Luxury Dark Espresso Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1311] via-[#1D1311]/70 to-[#352520]/25"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-primary uppercase">Móveis Planejados</span>
                    <h4 className="text-2xl font-serif text-white leading-tight">Salas e Estares Integrados</h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed max-w-sm">
                      Sincronia perfeita entre painéis ripados iluminados, gaveteiros com corrediças ocultas e painéis metálicos Sand Gold.
                    </p>
                    <div className="pt-2">
                      <button className="bg-primary/20 border border-primary/40 text-primary hover:bg-primary hover:text-secondary px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300">
                        Visualizar Projeto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* 6. Aplicações do Logotipo */}
            <section id="logos" className="scroll-mt-8">
              <h2 className="text-2xl font-serif text-white border-b border-primary/20 pb-2 mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> 6. Aplicações de Logotipo (Amostras Reais)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Logo Horizontal no Fundo Escuro */}
                <div className="bg-[#352520] p-8 rounded-2xl border border-primary/10 flex flex-col justify-between items-center text-center">
                  <div className="w-full flex justify-center mb-6">
                    <img 
                      src="/logo-horizontal-light.png" 
                      alt="Logo Horizontal Escuro" 
                      className="max-h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Navbar & Cabeçalhos Escuros</h4>
                    <p className="text-xs text-gray-400">Escrita off-white com o símbolo em destaque sobre o fundo Dark Espresso (Alta Resolução).</p>
                  </div>
                </div>

                {/* Logo Horizontal no Fundo Claro */}
                <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-primary/10 flex flex-col justify-between items-center text-center">
                  <div className="w-full flex justify-center mb-6">
                    <img 
                      src="/logo-horizontal-dark.png" 
                      alt="Logo Horizontal Claro" 
                      className="max-h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#352520] mb-1">Papelaria & Ambientes Claros</h4>
                    <p className="text-xs text-gray-600">Aplicação original em tons escuros sobre superfícies e fundos off-white (Alta Resolução).</p>
                  </div>
                </div>

                {/* Logo Vertical / Redondo */}
                <div className="bg-[#1D1311]/80 p-8 rounded-2xl border border-primary/10 flex flex-col justify-between items-center text-center">
                  <div className="w-full flex justify-center mb-6">
                    <img 
                      src="/logo-vertical-light.png" 
                      alt="Logo Vertical" 
                      className="max-h-32 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Ícones, Avatares e Favicons</h4>
                    <p className="text-xs text-gray-400">Configuração vertical/circular em branco para assinaturas digitais e favicons (Alta Resolução).</p>
                  </div>
                </div>

                {/* Efeito Glassmorphism */}
                <div className="glass-dark p-8 rounded-2xl border border-primary/20 shadow-luxury flex flex-col justify-between items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,164,130,0.1),transparent_70%)]"></div>
                  <div className="w-full flex justify-center mb-6 relative z-10">
                    <img 
                      src="/logo-horizontal-light.png" 
                      alt="Logo Glassmorphism" 
                      className="max-h-16 object-contain"
                    />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold text-white mb-1">Cartões & Popups (Glassmorphism)</h4>
                    <p className="text-xs text-gray-400">Aplicação flutuante branca sobre fundo de vidro desfocado com reflexo de luxo (Alta Resolução).</p>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Footer System info */}
      <footer className="border-t border-secondary/50 bg-[#1D1311] py-8 text-center text-xs text-gray-500">
        <p>© 2026 Realizzati Móveis Planejados. Todos os direitos reservados.</p>
        <p className="mt-1 text-primary/65">Estilo Sand Gold (#C4A482) & Dark Espresso (#352520)</p>
      </footer>
    </div>
  );
}
