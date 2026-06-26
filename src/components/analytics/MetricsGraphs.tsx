import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

// Mock metrics data for charts
const funnelData = [
  { stage: "Impressões", total: 45000, value: 45000, color: "#DFD1C1" },
  { stage: "Cliques", total: 3800, value: 3800, color: "#C4B090" },
  { stage: "Leads Formulário", total: 420, value: 420, color: "#C4A482" },
  { stage: "Cliques WhatsApp", total: 290, value: 290, color: "#A68B5B" }
];

const weeklyPerformanceData = [
  { name: "Semana 1", googleAds: 1200, metaAds: 950 },
  { name: "Semana 2", googleAds: 1450, metaAds: 1100 },
  { name: "Semana 3", googleAds: 1300, metaAds: 1250 },
  { name: "Semana 4", googleAds: 1680, metaAds: 1400 }
];

const cpcHistoryData = [
  { name: "Dia 1", cpc: 4.80 },
  { name: "Dia 2", cpc: 5.10 },
  { name: "Dia 3", cpc: 4.65 },
  { name: "Dia 4", cpc: 5.30 },
  { name: "Dia 5", cpc: 4.95 },
  { name: "Dia 6", cpc: 4.50 },
  { name: "Dia 7", cpc: 4.85 }
];

export default function MetricsGraphs() {
  return (
    <div className="space-y-8">
      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-5 shadow-lg">
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Impressões Globais</span>
          <h3 className="text-3xl font-serif text-[#FAF8F5] mt-2 font-bold">45.000</h3>
          <span className="text-xs text-emerald-400 mt-1 block">✦ +12% vs. mês anterior</span>
        </div>
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-5 shadow-lg">
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Conversão Geral</span>
          <h3 className="text-3xl font-serif text-[#FAF8F5] mt-2 font-bold">1,58%</h3>
          <span className="text-xs text-emerald-400 mt-1 block">✦ Taxa de cliques para contato</span>
        </div>
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-5 shadow-lg">
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Custo Médio por Lead (CPL)</span>
          <h3 className="text-3xl font-serif text-[#FAF8F5] mt-2 font-bold">R$ 8,25</h3>
          <span className="text-xs text-gray-400 mt-1 block">✦ Campanhas otimizadas Meta/Google</span>
        </div>
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-5 shadow-lg">
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider block">Teto Médio de Lance (CPC)</span>
          <h3 className="text-3xl font-serif text-[#FAF8F5] mt-2 font-bold">R$ 8,00</h3>
          <span className="text-xs text-[#A68B5B] mt-1 block">✦ Ajustado para máxima competitividade</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico 1: Funil de Captação */}
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
          <div className="mb-4">
            <h4 className="text-lg font-serif text-[#FAF8F5]">Funil de Conversão</h4>
            <p className="text-xs text-gray-400 font-light">Distribuição visual das etapas da jornada de captação</p>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(166, 139, 91, 0.1)" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#8C8278" style={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="stage" stroke="#8C8278" style={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1D1311", borderColor: "#A68B5B" }}
                  labelStyle={{ color: "#FAF8F5" }}
                />
                <Bar dataKey="total" fill="#A68B5B" radius={[0, 4, 4, 0]} barSize={25} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2: Cliques Semanais (Meta vs Google) */}
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl">
          <div className="mb-4">
            <h4 className="text-lg font-serif text-[#FAF8F5]">Performance Semanal</h4>
            <p className="text-xs text-gray-400 font-light">Cliques acumulados por rede de anúncio no último mês</p>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyPerformanceData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A68B5B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#A68B5B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C4A482" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#C4A482" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(166, 139, 91, 0.05)" />
                <XAxis dataKey="name" stroke="#8C8278" style={{ fontSize: 10 }} />
                <YAxis stroke="#8C8278" style={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1D1311", borderColor: "#A68B5B" }}
                  labelStyle={{ color: "#FAF8F5" }}
                />
                <Legend style={{ fontSize: 11 }} />
                <Area name="Google Ads (Cliques)" type="monotone" dataKey="googleAds" stroke="#A68B5B" fillOpacity={1} fill="url(#colorGoogle)" />
                <Area name="Meta Ads (Cliques)" type="monotone" dataKey="metaAds" stroke="#C4A482" fillOpacity={1} fill="url(#colorMeta)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 3: Histórico de CPC diário */}
        <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-6 shadow-xl lg:col-span-2">
          <div className="mb-4">
            <h4 className="text-lg font-serif text-[#FAF8F5]">Flutuação de CPC Diário (Pesquisa Google)</h4>
            <p className="text-xs text-gray-400 font-light">Variação do Custo por Clique em Blumenau & Vale nos últimos 7 dias</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cpcHistoryData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorCpc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A68B5B" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#A68B5B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(166, 139, 91, 0.05)" />
                <XAxis dataKey="name" stroke="#8C8278" style={{ fontSize: 10 }} />
                <YAxis 
                  stroke="#8C8278" 
                  style={{ fontSize: 10 }} 
                  tickFormatter={(value) => `R$ ${value.toFixed(2)}`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1D1311", borderColor: "#A68B5B" }}
                  labelStyle={{ color: "#FAF8F5" }}
                  formatter={(value: any) => [`R$ ${parseFloat(value).toFixed(2)}`, "CPC Médio"]}
                />
                <Area name="CPC Médio" type="monotone" dataKey="cpc" stroke="#A68B5B" fillOpacity={1} fill="url(#colorCpc)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
