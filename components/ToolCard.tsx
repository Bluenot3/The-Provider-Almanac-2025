
import React, { useMemo } from 'react';
import { ToolDetail } from '../types';
import { ExternalLink, DollarSign, Info, Cpu, Zap } from 'lucide-react';

interface ToolCardProps {
  tool: ToolDetail;
  accentColor?: 'indigo' | 'emerald' | 'fuchsia' | 'amber' | 'sky';
}

const CategoryVisual: React.FC<{ color: string; type: string }> = ({ color, type }) => {
  const isCode = type === 'emerald';
  const isVisual = type === 'fuchsia' || type === 'indigo';
  const isAgent = type === 'amber';

  return (
    <div className="w-full h-12 relative overflow-hidden rounded-xl bg-black/20 border border-white/5 mb-6">
      <div className={`absolute inset-0 opacity-20 data-stream`}></div>
      {isCode && (
        <div className="p-2 font-mono text-[8px] text-emerald-500/60 overflow-hidden leading-tight whitespace-pre">
          {`def neural_flow():\n  exec(agent_01)\n  return system.optimize()`}
          <div className="animate-pulse absolute bottom-1 right-2 text-emerald-400">_</div>
        </div>
      )}
      {isVisual && (
        <div className="flex items-center justify-center h-full gap-1">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1 bg-${color}-500/40 rounded-full`} 
              style={{ 
                height: `${Math.random() * 60 + 20}%`,
                animation: `pulse-ring 1s ease-in-out infinite alternate ${i * 0.1}s` 
              }}
            />
          ))}
        </div>
      )}
      {isAgent && (
        <div className="relative h-full">
           <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-amber-500/20"></div>
           <div className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-amber-400"></div>
        </div>
      )}
      {!isCode && !isVisual && !isAgent && (
        <div className="flex items-center justify-center h-full">
           <div className="w-1/2 h-0.5 bg-sky-500/20 rounded-full relative overflow-hidden">
             <div className="absolute inset-0 bg-sky-400/80 w-1/3 animate-[stream_2s_linear_infinite]"></div>
           </div>
        </div>
      )}
    </div>
  );
};

const ToolCard: React.FC<ToolCardProps> = ({ tool, accentColor = "indigo" }) => {
  const accentMap = {
    indigo: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5",
    emerald: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    fuchsia: "border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-500/5",
    amber: "border-amber-500/30 text-amber-400 bg-amber-500/5",
    sky: "border-sky-500/30 text-sky-400 bg-sky-500/5"
  };

  return (
    <div className="glass-dex p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full group tilt-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 data-stream opacity-5 rotate-45 pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:elite-shimmer transition-all duration-300 tracking-tight leading-tight">
            {tool.name}
          </h3>
          <div className="flex items-center gap-3">
            {tool.cost && (
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                <DollarSign size={10} /> {tool.cost}
              </div>
            )}
            <div className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">ACTIVE_2025</span>
          </div>
        </div>
        <a 
          href={tool.platformUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-slate-800/50 border border-white/5 hover:bg-white hover:text-black transition-all text-slate-400"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      <CategoryVisual color={accentColor} type={accentColor} />

      <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
        {tool.description}
      </p>

      {tool.techStack && (
        <div className="mb-8 space-y-3">
           <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] flex items-center gap-2">
              <Cpu size={10} /> Core Infrastructure
           </div>
           <div className="flex flex-wrap gap-2">
              {tool.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-[10px] font-bold text-slate-400">
                   {tech}
                </span>
              ))}
           </div>
        </div>
      )}

      <div className="flex-grow space-y-6">
        {tool.excelledAt && tool.excelledAt.length > 0 && (
          <div className="space-y-4">
            <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">Operational Mastery</div>
            <div className="flex flex-wrap gap-2">
              {tool.excelledAt.map((item, idx) => (
                <span key={idx} className={`px-4 py-1.5 rounded-xl text-[11px] font-bold tracking-tight border transition-colors ${accentMap[accentColor]}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
        <div className="flex gap-4">
          <Info size={16} className="shrink-0 mt-0.5 text-slate-600" />
          <p className="text-[12px] text-slate-400 leading-relaxed italic">
            {tool.whyItMattered}
          </p>
        </div>
        
        {tool.definingTrait && (
          <div className="flex items-center gap-3 py-3 px-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
            <Zap size={12} className="text-indigo-400 animate-pulse" />
            <span className="text-[11px] font-black text-indigo-300 uppercase tracking-[0.2em]">
              {tool.definingTrait}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolCard;
