import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Key, 
  Layers, 
  Terminal, 
  BarChart3, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  ChevronRight,
  Plus,
  X,
  FileText
} from "lucide-react";
import MetricsGraphs from "@/components/analytics/MetricsGraphs";
import KanbanBoard, { Lead } from "@/components/crm/KanbanBoard";
import CrmListView from "@/components/crm/CrmListView";

// Initial premium demo leads
const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Guilherme Siqueira",
    phone: "(47) 99872-4412",
    city: "Balneário Camboriú",
    status: "Visita Técnica",
    source: "Google Ads",
    value: 120000,
    dateCreated: "24/06/2026"
  },
  {
    id: "lead-2",
    name: "Patrícia Peixoto",
    phone: "(47) 99122-3091",
    city: "Itapema",
    status: "Novo Lead",
    source: "Meta Ads",
    value: 85000,
    dateCreated: "25/06/2026"
  },
  {
    id: "lead-3",
    name: "Carlos Eduardo Stark",
    phone: "(47) 98831-2900",
    city: "Blumenau",
    status: "Apresentação de Projeto",
    source: "Indicação",
    value: 145000,
    dateCreated: "23/06/2026"
  },
  {
    id: "lead-4",
    name: "Mariana Werner",
    phone: "(47) 99244-1560",
    city: "Itajaí",
    status: "Primeiro Contato",
    source: "Google Ads",
    value: 65000,
    dateCreated: "25/06/2026"
  },
  {
    id: "lead-5",
    name: "Roberto Alces",
    phone: "(47) 98455-7788",
    city: "Timbó",
    status: "Contrato Fechado",
    source: "Orgânico",
    value: 92000,
    dateCreated: "20/06/2026"
  }
];

export default function StarkenTechDashboard() {
  const [activeTab, setActiveTab] = useState<"performance" | "keywords" | "crm" | "tracking">("performance");
  const [crmView, setCrmView] = useState<"kanban" | "list">("kanban");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states for new lead
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCity, setNewCity] = useState("Blumenau");
  const [newSource, setNewSource] = useState<Lead["source"]>("Google Ads");
  const [newValue, setNewValue] = useState("");

  // Load/Save leads from/to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("realizzati_crm_leads");
    if (saved) {
      try {
        setLeads(JSON.parse(saved));
      } catch (e) {
        setLeads(INITIAL_LEADS);
      }
    } else {
      setLeads(INITIAL_LEADS);
      localStorage.setItem("realizzati_crm_leads", JSON.stringify(INITIAL_LEADS));
    }
  }, []);

  const saveLeads = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("realizzati_crm_leads", JSON.stringify(updatedLeads));
  };

  const handleUpdateLeadStatus = (leadId: string, newStatus: Lead["status"]) => {
    const updated = leads.map((l) => l.id === leadId ? { ...l, status: newStatus } : l);
    saveLeads(updated);
  };

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPhone) return;

    const valNum = parseFloat(newValue.replace(/[^0-9]/g, "")) || 50000;
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name: newName,
      phone: newPhone,
      city: newCity,
      status: "Novo Lead",
      source: newSource,
      value: valNum,
      dateCreated: new Date().toLocaleDateString("pt-BR")
    };

    const updated = [newLead, ...leads];
    saveLeads(updated);

    // Reset form
    setNewName("");
    setNewPhone("");
    setNewCity("Blumenau");
    setNewSource("Google Ads");
    setNewValue("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1D1311] text-[#FAF8F5] font-sans selection:bg-[#A68B5B] selection:text-[#1D1311]">
      
      {/* Top Header / Banner */}
      <div className="relative overflow-hidden border-b border-[#352520] bg-gradient-to-b from-[#352520] to-[#1D1311] py-10 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(166,139,91,0.12),rgba(0,0,0,0))]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[#A68B5B] hover:text-[#C4B090] transition-colors mb-4 text-xs font-semibold tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Voltar para Landing Page
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#A68B5B] text-xs font-mono font-bold tracking-widest uppercase">STARKEN TECH</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#FAF8F5] mt-1">
                Data Intelligence <span className="text-[#A68B5B] italic">Dashboard</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-400 max-w-2xl font-light mt-1.5">
                Central analítica de funil, CRM e leilões de palavras-chave do ecossistema de alta conversão da Realizzati Móveis.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 rounded-lg text-[10px] font-medium bg-[#A68B5B]/10 text-[#A68B5B] border border-[#A68B5B]/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Analytics V2.0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tabs Controller */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex border-b border-[#352520] mb-8 overflow-x-auto gap-4 scrollbar-thin">
          <button
            onClick={() => setActiveTab("performance")}
            className={`py-3.5 px-2 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "performance" 
                ? "border-[#A68B5B] text-[#A68B5B]" 
                : "border-transparent text-gray-400 hover:text-[#FAF8F5]"
            }`}
          >
            <TrendingUp className="w-4 h-4" /> Performance & Funil
          </button>
          <button
            onClick={() => setActiveTab("keywords")}
            className={`py-3.5 px-2 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "keywords" 
                ? "border-[#A68B5B] text-[#A68B5B]" 
                : "border-transparent text-gray-400 hover:text-[#FAF8F5]"
            }`}
          >
            <Key className="w-4 h-4" /> Palavras-Chave
          </button>
          <button
            onClick={() => setActiveTab("crm")}
            className={`py-3.5 px-2 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "crm" 
                ? "border-[#A68B5B] text-[#A68B5B]" 
                : "border-transparent text-gray-400 hover:text-[#FAF8F5]"
            }`}
          >
            <Layers className="w-4 h-4" /> CRM ClickUp
          </button>
          <button
            onClick={() => setActiveTab("tracking")}
            className={`py-3.5 px-2 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "tracking" 
                ? "border-[#A68B5B] text-[#A68B5B]" 
                : "border-transparent text-gray-400 hover:text-[#FAF8F5]"
            }`}
          >
            <Terminal className="w-4 h-4" /> Tracking & Manual
          </button>
        </div>

        {/* Tab 1: Performance */}
        {activeTab === "performance" && (
          <div className="space-y-8 animate-fadeIn">
            <MetricsGraphs />

            {/* Configurações de Google Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
                <div className="border-b border-[#A68B5B]/10 pb-3 mb-4">
                  <h4 className="font-serif text-[#FAF8F5] text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Campanhas Ativas Google Search
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-[#1D1311]/50 border border-[#A68B5B]/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-[#C4A482] font-mono">[STARKEN] - Search - Captação - Blumenau</span>
                      <span className="bg-emerald-950 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono px-2 py-0.5 rounded">Ativa</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-2 font-light">
                      <div>Orçamento: <strong className="text-gray-200">R$ 30,00/dia</strong></div>
                      <div>Teto de CPC: <strong className="text-gray-200">R$ 8,00</strong></div>
                      <div className="col-span-2">Segmentação: <strong className="text-gray-200">Blumenau (Apenas Presença)</strong></div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#1D1311]/50 border border-[#A68B5B]/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-[#C4A482] font-mono">[STARKEN] - Search - Captação - Médio Vale</span>
                      <span className="bg-emerald-950 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono px-2 py-0.5 rounded">Ativa</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-2 font-light">
                      <div>Orçamento: <strong className="text-gray-200">R$ 20,00/dia</strong></div>
                      <div>Teto de CPC: <strong className="text-gray-200">R$ 8,00</strong></div>
                      <div className="col-span-2">Segmentação: <strong className="text-gray-200">Timbó, Indaial, Rodeio (Apenas Presença)</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Previews de Anúncios no Google Search */}
              <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
                <div className="border-b border-[#A68B5B]/10 pb-3 mb-4">
                  <h4 className="font-serif text-[#FAF8F5] text-lg">Mockup Visual de Anúncio de Pesquisa</h4>
                </div>
                {/* Mobile Preview */}
                <div className="bg-[#FFFFFF] border border-[#dadce0] rounded-xl p-4 max-w-sm mx-auto text-left leading-normal font-sans shadow-md">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-[#202124] font-bold">Patrocinado</span>
                    <span className="text-sm text-[#70757a] cursor-pointer">⋮</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-[#f1f3f4] rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-bold text-[#3c4043]">R</div>
                    <div>
                      <div className="text-[11px] text-[#202124] font-medium leading-none">Realizzati Móveis</div>
                      <div className="text-[9px] text-[#5f6368] truncate max-w-[200px]">https://orcamentos.realizzatimoveis.com.br/Moveis/Sob-Medida</div>
                    </div>
                  </div>
                  <h3 className="text-[#1a0dab] text-base font-normal hover:underline leading-tight mb-1">
                    Móveis Sob Medida Alto Padrão - Realizzati Móveis
                  </h3>
                  <p className="text-xs text-[#4d5156] mb-3">
                    Marcenaria própria com mais de 14 anos de mercado. Móveis com materiais de alta qualidade com garantia contratual. Execução exata de projetos.
                  </p>
                  <div className="border-t border-[#f1f3f4] pt-2 flex gap-4 text-xs text-[#1a0dab] font-light">
                    <span>💎 Marcenaria Fina</span>
                    <span>🗓️ Agende Visita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Keywords */}
        {activeTab === "keywords" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Blumenau */}
            <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
              <h4 className="font-serif text-[#FAF8F5] text-lg mb-2">📍 Blumenau (Campanha Ativa · R$ 30/dia)</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Volume total expressivo de buscas, concorrência média-alta no leilão do Médio Vale.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#A68B5B]/25 bg-[#1D1311]/50 text-gray-400 font-mono text-[10px]">
                      <th className="p-3">Palavra-Chave</th>
                      <th className="p-3 text-center">Buscas/Mês</th>
                      <th className="p-3 text-center">Competição</th>
                      <th className="p-3 text-right">CPC Mínimo</th>
                      <th className="p-3 text-right">CPC Máximo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#A68B5B]/10 font-mono">
                    <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">marcenaria blumenau</td><td className="p-3 text-center">720</td><td className="p-3 text-center text-red-400">HIGH</td><td className="p-3 text-right">R$ 2.32</td><td className="p-3 text-right text-[#A68B5B]">R$ 8.25</td></tr>
                    <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">móveis planejados blumenau</td><td className="p-3 text-center">210</td><td className="p-3 text-center text-red-400">HIGH</td><td className="p-3 text-right">R$ 2.17</td><td className="p-3 text-right text-[#A68B5B]">R$ 9.74</td></tr>
                    <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">móveis sob medida blumenau</td><td className="p-3 text-center">210</td><td className="p-3 text-center text-red-400">HIGH</td><td className="p-3 text-right">R$ 1.87</td><td className="p-3 text-right text-[#A68B5B]">R$ 8.82</td></tr>
                    <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">marcenaria em blumenau</td><td className="p-3 text-center">720</td><td className="p-3 text-center text-red-400">HIGH</td><td className="p-3 text-right">R$ 2.32</td><td className="p-3 text-right text-[#A68B5B]">R$ 8.25</td></tr>
                    <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">marcenaria</td><td className="p-3 text-center">390</td><td className="p-3 text-center text-emerald-400">LOW</td><td className="p-3 text-right">R$ 1.63</td><td className="p-3 text-right text-[#A68B5B]">R$ 6.85</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Timbó & Indaial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
                <h4 className="font-serif text-[#FAF8F5] text-base mb-2">📍 Timbó (Campanha Ativa · R$ 20/dia)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#A68B5B]/25 bg-[#1D1311]/50 text-gray-400 font-mono text-[10px]">
                        <th className="p-3">Palavra-Chave</th>
                        <th className="p-3 text-center">Buscas</th>
                        <th className="p-3 text-right">CPC Max</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#A68B5B]/10 font-mono">
                      <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">marcenaria</td><td className="p-3 text-center">40</td><td className="p-3 text-right text-[#A68B5B]">R$ 4.32</td></tr>
                      <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">móveis sob medida</td><td className="p-3 text-center">20</td><td className="p-3 text-right text-[#A68B5B]">R$ 4.21</td></tr>
                      <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">móveis planejados</td><td className="p-3 text-center">20</td><td className="p-3 text-right text-[#A68B5B]">R$ 10.19</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
                <h4 className="font-serif text-[#FAF8F5] text-base mb-2">📍 Indaial (Campanha Ativa · R$ 20/dia)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-[#A68B5B]/25 bg-[#1D1311]/50 text-gray-400 font-mono text-[10px]">
                        <th className="p-3">Palavra-Chave</th>
                        <th className="p-3 text-center">Buscas</th>
                        <th className="p-3 text-right">CPC Max</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#A68B5B]/10 font-mono">
                      <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">marcenaria indaial</td><td className="p-3 text-center">110</td><td className="p-3 text-right text-[#A68B5B]">R$ 9.02</td></tr>
                      <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">móveis sob medida indaial</td><td className="p-3 text-center">40</td><td className="p-3 text-right text-[#A68B5B]">R$ 6.93</td></tr>
                      <tr className="hover:bg-[#1D1311]/25"><td className="p-3 font-sans text-gray-200">móveis planejados</td><td className="p-3 text-center">30</td><td className="p-3 text-right text-[#A68B5B]">R$ 11.67</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Backlog Litoral */}
            <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
              <h4 className="font-serif text-[#FAF8F5] text-lg mb-2">🏷️ Backlog: Litoral (Eixo Premium de Prospecção Futura)</h4>
              <p className="text-xs text-gray-400 font-light mb-4">Mapeamento competitivo de mercado para futuras expansões nas praias catarinenses.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Balneário Camboriú */}
                <div className="p-4 bg-[#1D1311]/50 rounded-xl border border-[#A68B5B]/10">
                  <h5 className="font-serif text-sm text-[#C4A482] mb-3">📍 Balneário Camboriú</h5>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between"><span>marcenaria:</span> <span>260/mês · R$ 7.03</span></div>
                    <div className="flex justify-between text-amber-500 font-bold"><span>móveis sob medida:</span> <span>90/mês · R$ 21.08</span></div>
                    <div className="flex justify-between text-amber-500 font-bold"><span>móveis planejados:</span> <span>140/mês · R$ 18.24</span></div>
                  </div>
                </div>

                {/* Itapema */}
                <div className="p-4 bg-[#1D1311]/50 rounded-xl border border-[#A68B5B]/10">
                  <h5 className="font-serif text-sm text-[#C4A482] mb-3">📍 Itapema</h5>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between"><span>marcenaria itapema:</span> <span>90/mês · R$ 10.40</span></div>
                    <div className="flex justify-between text-[#A68B5B] font-bold"><span>móveis sob medida:</span> <span>30/mês · R$ 30.60</span></div>
                    <div className="flex justify-between"><span>cozinha planejada:</span> <span>20/mês · R$ 13.61</span></div>
                  </div>
                </div>

                {/* Itajaí */}
                <div className="p-4 bg-[#1D1311]/50 rounded-xl border border-[#A68B5B]/10">
                  <h5 className="font-serif text-sm text-[#C4A482] mb-3">📍 Itajaí</h5>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-emerald-400 font-bold"><span>marcenaria itajai:</span> <span>390/mês · R$ 11.99</span></div>
                    <div className="flex justify-between text-amber-500 font-bold"><span>móveis sob medida:</span> <span>110/mês · R$ 16.54</span></div>
                    <div className="flex justify-between"><span>móveis planejados:</span> <span>140/mês · R$ 15.48</span></div>
                  </div>
                </div>

              </div>

              {/* Insights */}
              <div className="mt-6 p-4 bg-amber-950/15 rounded-xl border border-[#A68B5B]/20 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#C4A482] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-300 font-light space-y-2">
                  <p><strong>Insight Estratégico:</strong> O leilão de <strong>Itapema</strong> possui o CPC mais alto do estado (chegando a <strong>R$ 30,60</strong> por clique). Para a entrada futura nesse leilão, recomenda-se segmentar cirurgicamente para as praias e orlas premium.</p>
                  <p><strong>A Oportunidade em Itajaí:</strong> A palavra-chave <code>marcenaria itajai</code> possui alto volume (390 buscas) com metade do CPC da palavra-chave <code>móveis planejados</code>. Excelente entrada de aquisição orgânica e paga.</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: CRM ClickUp */}
        {activeTab === "crm" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Visualizer Selector */}
            <div className="flex justify-end gap-2 border-b border-[#352520] pb-3">
              <button
                onClick={() => setCrmView("kanban")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  crmView === "kanban" 
                    ? "bg-[#A68B5B] text-[#1D1311]" 
                    : "bg-[#352520] text-gray-300 hover:text-[#FAF8F5] border border-[#A68B5B]/10"
                }`}
              >
                Quadro Kanban
              </button>
              <button
                onClick={() => setCrmView("list")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  crmView === "list" 
                    ? "bg-[#A68B5B] text-[#1D1311]" 
                    : "bg-[#352520] text-gray-300 hover:text-[#FAF8F5] border border-[#A68B5B]/10"
                }`}
              >
                Visualização em Lista
              </button>
            </div>

            {/* Render Kanban or List */}
            {crmView === "kanban" ? (
              <KanbanBoard 
                leads={leads} 
                onUpdateLeadStatus={handleUpdateLeadStatus} 
                onOpenAddLeadModal={() => setIsModalOpen(true)}
              />
            ) : (
              <CrmListView 
                leads={leads} 
                onUpdateLeadStatus={handleUpdateLeadStatus} 
              />
            )}
          </div>
        )}

        {/* Tab 4: Tracking & Manual */}
        {activeTab === "tracking" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Simulador em Tempo Real */}
            <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
              <h4 className="font-serif text-[#FAF8F5] text-lg mb-2">🛰️ Tráfego Rastreado em Tempo Real (Simulação)</h4>
              <p className="text-xs text-gray-400 font-light mb-6">Mapeamento em tempo real dos disparos das tags UTM da Landing Page.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#1D1311]/50 border border-[#A68B5B]/10 rounded-lg text-center">
                  <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">GTM PageViews</span>
                  <span className="text-2xl font-mono text-emerald-400 font-bold block mt-1">2.450</span>
                </div>
                <div className="p-4 bg-[#1D1311]/50 border border-[#A68B5B]/10 rounded-lg text-center">
                  <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Cliques WhatsApp</span>
                  <span className="text-2xl font-mono text-[#C4A482] font-bold block mt-1">138</span>
                </div>
                <div className="p-4 bg-[#1D1311]/50 border border-[#A68B5B]/10 rounded-lg text-center">
                  <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Form Submit</span>
                  <span className="text-2xl font-mono text-[#A68B5B] font-bold block mt-1">42</span>
                </div>
                <div className="p-4 bg-[#1D1311]/50 border border-[#A68B5B]/10 rounded-lg text-center">
                  <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Taxa Conversão LP</span>
                  <span className="text-2xl font-mono text-emerald-400 font-bold block mt-1">7,34%</span>
                </div>
              </div>
            </div>

            {/* Manual Técnico */}
            <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl prose prose-invert max-w-none font-sans">
              <h4 className="font-serif text-[#FAF8F5] text-lg mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Manual do Rastreamento Avançado
              </h4>
              <div className="text-sm text-gray-300 font-light space-y-6">
                <div>
                  <h5 className="font-semibold text-[#FAF8F5] mb-2">1. Rastreamento com Google Tag Manager (GTM)</h5>
                  <p className="leading-relaxed">O contêiner do GTM instalado na landing page (`GTM-55PTFQ2W`) dispara automaticamente eventos customizados de clique nos CTAs. Quando o usuário clica no botão principal "Falar com Arquiteta Especialista" ou no botão flutuante de WhatsApp, o GTM aciona a Tag de Evento Personalizado do GA4 e a envia como evento de conversão.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#FAF8F5] mb-2">2. API de Conversões do Meta (Pixel & CAPI)</h5>
                  <p className="leading-relaxed">O Pixel da Meta monitora os eventos no navegador, enquanto a API de Conversões no servidor garante o envio dos dados mesmo com bloqueadores de cookies. Os eventos rastreados incluem <code>Lead</code> (envio do formulário de contato) e <code>Contact</code> (clique para redirecionamento do WhatsApp), garantindo otimização máxima no algoritmo de leilões do Facebook Ads.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-[#FAF8F5] mb-2">3. Mapeamento de UTMs para o CRM</h5>
                  <p className="leading-relaxed">Parâmetros UTM (<code>utm_source</code>, <code>utm_medium</code>, <code>utm_campaign</code>) são extraídos dinamicamente da URL da landing page via script JavaScript. Quando o lead submete o formulário, esses dados são gravados no banco de dados e persistem na origem do lead dentro do CRM, permitindo mensurar a performance exata de vendas por campanha ativa.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal: Adicionar Lead */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-[#352520] border border-[#A68B5B]/30 rounded-xl w-full max-w-md p-6 relative animate-scaleIn shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="font-serif text-[#FAF8F5] text-lg mb-4">Cadastrar Novo Lead Manual</h4>
            
            <form onSubmit={handleAddLead} className="space-y-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-wider text-[#C4A482] uppercase mb-1.5">Nome do Lead</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Alexander Stark"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] placeholder-gray-600 focus:outline-none focus:border-[#A68B5B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-[#C4A482] uppercase mb-1.5">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (47) 99999-9999"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] placeholder-gray-600 focus:outline-none focus:border-[#A68B5B]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-[#C4A482] uppercase mb-1.5">Cidade</label>
                  <select
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    className="w-full bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#A68B5B]"
                  >
                    <option value="Blumenau">Blumenau</option>
                    <option value="Timbó">Timbó</option>
                    <option value="Indaial">Indaial</option>
                    <option value="Balneário Camboriú">Balneário Camboriú</option>
                    <option value="Itapema">Itapema</option>
                    <option value="Itajaí">Itajaí</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-[#C4A482] uppercase mb-1.5">Origem do Contato</label>
                  <select
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value as Lead["source"])}
                    className="w-full bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#A68B5B]"
                  >
                    <option value="Google Ads">Google Ads</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="Indicação">Indicação</option>
                    <option value="Orgânico">Orgânico</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-wider text-[#C4A482] uppercase mb-1.5">Valor Estimado (R$)</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 85.000"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="w-full bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] placeholder-gray-600 focus:outline-none focus:border-[#A68B5B]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#A68B5B] hover:bg-[#C4B090] text-[#1D1311] font-semibold text-xs tracking-wider uppercase py-3 rounded-lg mt-4 transition-colors"
              >
                Adicionar Lead ao Funil
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
