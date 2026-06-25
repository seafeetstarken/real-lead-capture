import { Cpu, Terminal, Network, ShieldCheck } from "lucide-react";

const Ecosystem = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/95 border-t border-primary/20 text-white reveal">
      <div className="container mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-6">
          <Cpu className="w-3.5 h-3.5" /> Orquestra de Sistemas de Gestão
        </div>
        
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Orquestra de Sistemas de Gestão
        </h3>
        
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-10 font-light">
          Nossa marcenaria sob medida funciona como um ecossistema conectado de ponta a ponta. 
          Desde a captação digital do seu lead, passando pelo detalhamento técnico de projeto, 
          até o envio direto para o maquinário industrial automatizado (CNC / Marcenaria 4.0). 
          Cada etapa é monitorada de forma coordenada para garantir o prazo rigoroso de entrega e fidelidade executiva.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-xs text-white/60 font-mono">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Lead &amp; Tracking:</span>
            <code className="text-primary font-bold">gtm-capi</code>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-xs text-white/60 font-mono">
            <Network className="w-4 h-4 text-primary" />
            <span>Core Database:</span>
            <code className="text-primary font-bold">starken-core</code>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-xs text-white/60 font-mono">
            <Cpu className="w-4 h-4 text-primary" />
            <span>Industrial CNC:</span>
            <code className="text-primary font-bold">marcenaria-4.0</code>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-white/5 text-xs text-white/60 font-mono">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Prazo &amp; Execução:</span>
            <code className="text-primary font-bold">cronograma-garantido</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
