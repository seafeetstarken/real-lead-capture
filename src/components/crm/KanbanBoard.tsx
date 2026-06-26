import React from "react";
import { Plus, User, Phone, MapPin, DollarSign, Calendar, ArrowRight } from "lucide-react";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  city: string;
  status: "Novo Lead" | "Primeiro Contato" | "Visita Técnica" | "Apresentação de Projeto" | "Contrato Fechado";
  source: "Google Ads" | "Meta Ads" | "Indicação" | "Orgânico";
  value: number;
  dateCreated: string;
}

interface KanbanBoardProps {
  leads: Lead[];
  onUpdateLeadStatus: (leadId: string, newStatus: Lead["status"]) => void;
  onOpenAddLeadModal: () => void;
}

const COLUMNS: Lead["status"][] = [
  "Novo Lead",
  "Primeiro Contato",
  "Visita Técnica",
  "Apresentação de Projeto",
  "Contrato Fechado"
];

export default function KanbanBoard({ leads, onUpdateLeadStatus, onOpenAddLeadModal }: KanbanBoardProps) {
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, leadId: string) => {
    e.dataTransfer.setData("leadId", leadId);
  };

  const handleDrop = (e: React.DragEvent, targetStatus: Lead["status"]) => {
    e.preventDefault();
    const leadId = e.dataTransfer.getData("leadId");
    if (leadId) {
      onUpdateLeadStatus(leadId, targetStatus);
    }
  };

  const formatCurrency = (val: number) => {
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho de Ações */}
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-serif text-[#FAF8F5]">Quadro Kanban de Negócios</h4>
          <p className="text-xs text-gray-400 font-light">Arraste e solte os cartões de leads para atualizar o funil de vendas</p>
        </div>
        <button
          onClick={onOpenAddLeadModal}
          className="bg-[#A68B5B] hover:bg-[#C4B090] text-[#1D1311] font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all duration-300 hover:scale-[1.02]"
        >
          <Plus className="w-4 h-4" /> Novo Lead
        </button>
      </div>

      {/* Grid do Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {COLUMNS.map((col) => {
          const colLeads = leads.filter((l) => l.status === col);
          const totalValue = colLeads.reduce((acc, curr) => acc + curr.value, 0);

          return (
            <div
              key={col}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, col)}
              className="bg-[#352520]/45 border border-[#A68B5B]/10 rounded-xl p-4 min-w-[240px] flex flex-col gap-4 min-h-[500px]"
            >
              {/* Header da Coluna */}
              <div className="border-b border-[#A68B5B]/15 pb-2 flex justify-between items-center">
                <div>
                  <h5 className="text-sm font-semibold text-[#FAF8F5] tracking-wide">{col}</h5>
                  <span className="text-[10px] text-primary font-mono block mt-0.5">
                    {formatCurrency(totalValue)}
                  </span>
                </div>
                <span className="bg-[#1D1311] text-xs font-mono font-semibold px-2 py-0.5 rounded text-gray-300 border border-[#A68B5B]/20">
                  {colLeads.length}
                </span>
              </div>

              {/* Lista de Cards */}
              <div className="flex flex-col gap-3 overflow-y-auto flex-grow max-h-[600px] scrollbar-thin">
                {colLeads.length === 0 ? (
                  <div className="border border-dashed border-[#A68B5B]/10 rounded-lg p-6 text-center text-xs text-gray-500 font-light my-auto">
                    Nenhum lead nesta etapa
                  </div>
                ) : (
                  colLeads.map((lead) => (
                    <div
                      key={lead.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, lead.id)}
                      className="bg-[#352520] border border-[#A68B5B]/15 rounded-lg p-3.5 hover:border-[#A68B5B]/50 transition-all duration-300 cursor-grab active:cursor-grabbing hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col gap-2 relative group"
                    >
                      {/* Badge Origem */}
                      <span className={`absolute top-3 right-3 text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                        lead.source === "Google Ads"
                          ? "bg-amber-950/40 text-[#C4A482] border-[#C4A482]/20"
                          : lead.source === "Meta Ads"
                          ? "bg-[#25D366]/10 text-green-400 border-green-400/20"
                          : "bg-gray-800 text-gray-300 border-gray-700"
                      }`}>
                        {lead.source}
                      </span>

                      {/* Nome */}
                      <div className="flex items-center gap-1.5 text-sm font-medium text-[#FAF8F5] pr-16">
                        <User className="w-3.5 h-3.5 text-[#C4A482]" />
                        <span className="truncate">{lead.name}</span>
                      </div>

                      {/* Info Telefone / Cidade */}
                      <div className="text-xs text-gray-400 space-y-1 font-light">
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-[#A68B5B]" />
                          <span>{lead.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-[#A68B5B]" />
                          <span>{lead.city}</span>
                        </div>
                      </div>

                      {/* Valor do Projeto */}
                      <div className="border-t border-[#A68B5B]/10 pt-2 mt-1 flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 font-mono flex items-center gap-0.5">
                          <Calendar className="w-3 h-3" /> {lead.dateCreated}
                        </span>
                        <span className="text-xs font-semibold text-[#FAF8F5] font-mono">
                          {formatCurrency(lead.value)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
