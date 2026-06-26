import React, { useState } from "react";
import { Lead } from "./KanbanBoard";
import { Search, Filter, Phone, MapPin, DollarSign, Calendar, SlidersHorizontal } from "lucide-react";

interface CrmListViewProps {
  leads: Lead[];
  onUpdateLeadStatus: (leadId: string, newStatus: Lead["status"]) => void;
}

export default function CrmListView({ leads, onUpdateLeadStatus }: CrmListViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");

  // Extrair cidades únicas dos leads para alimentar o filtro
  const cities = Array.from(new Set(leads.map((l) => l.city)));

  // Filtrar dados baseando-se na pesquisa e nos filtros selecionados
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.phone.includes(searchTerm);
    const matchesCity = cityFilter === "all" || lead.city === cityFilter;
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
    return matchesSearch && matchesCity && matchesSource;
  });

  const formatCurrency = (val: number) => {
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <div className="space-y-6">
      {/* Barra de Filtros */}
      <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg">
        {/* Campo de Busca */}
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Buscar por nome ou fone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1D1311] border border-[#A68B5B]/25 rounded-lg pl-9 pr-4 py-2.5 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#A68B5B] transition-colors"
          />
        </div>

        {/* Filtros Dropdown */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
            <Filter className="w-3.5 h-3.5" /> Filtrar:
          </div>

          {/* Cidade */}
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#A68B5B] transition-colors"
          >
            <option value="all">Todas as Cidades</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          {/* Origem */}
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="bg-[#1D1311] border border-[#A68B5B]/20 rounded-lg px-3 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#A68B5B] transition-colors"
          >
            <option value="all">Todas as Origens</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Indicação">Indicação</option>
            <option value="Orgânico">Orgânico</option>
          </select>
        </div>
      </div>

      {/* Tabela de Leads */}
      <div className="bg-[#352520] border border-[#A68B5B]/20 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#A68B5B]/20 bg-[#1D1311]/60 font-mono text-[10px] uppercase tracking-wider text-gray-400">
                <th className="py-4 px-6">Cliente</th>
                <th className="py-4 px-6">WhatsApp</th>
                <th className="py-4 px-6">Cidade</th>
                <th className="py-4 px-6">Origem</th>
                <th className="py-4 px-6">Status / Funil</th>
                <th className="py-4 px-6 text-right">Valor Estimado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#A68B5B]/10 text-xs text-gray-300">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-500 font-light">
                    Nenhum lead encontrado com os filtros atuais.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#1D1311]/25 transition-colors">
                    {/* Cliente / Nome */}
                    <td className="py-4 px-6 font-medium text-[#FAF8F5]">
                      {lead.name}
                      <span className="block text-[10px] text-gray-500 font-light mt-0.5">Criado em: {lead.dateCreated}</span>
                    </td>
                    {/* Telefone */}
                    <td className="py-4 px-6 font-mono text-[11px]">{lead.phone}</td>
                    {/* Cidade */}
                    <td className="py-4 px-6">{lead.city}</td>
                    {/* Origem */}
                    <td className="py-4 px-6">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        lead.source === "Google Ads"
                          ? "bg-amber-950/30 text-[#C4A482] border-[#C4A482]/20"
                          : lead.source === "Meta Ads"
                          ? "bg-[#25D366]/10 text-green-400 border-green-400/20"
                          : "bg-gray-800 text-gray-300 border-gray-700"
                      }`}>
                        {lead.source}
                      </span>
                    </td>
                    {/* Status */}
                    <td className="py-4 px-6">
                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as Lead["status"])}
                        className="bg-[#1D1311] border border-[#A68B5B]/25 rounded px-2.5 py-1.5 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#A68B5B]"
                      >
                        <option value="Novo Lead">Novo Lead</option>
                        <option value="Primeiro Contato">Primeiro Contato</option>
                        <option value="Visita Técnica">Visita Técnica</option>
                        <option value="Apresentação de Projeto">Apresentação de Projeto</option>
                        <option value="Contrato Fechado">Contrato Fechado</option>
                      </select>
                    </td>
                    {/* Valor Estimado */}
                    <td className="py-4 px-6 text-right font-mono font-semibold text-[#FAF8F5]">
                      {formatCurrency(lead.value)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
