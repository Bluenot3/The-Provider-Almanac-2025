
import React from 'react';
import { ToolDetail } from '../types';
import { ExternalLink, DollarSign, Info, Cpu, Zap, Radio, Terminal, Eye } from 'lucide-react';

interface ToolCardProps {
  tool: ToolDetail;
  accentColor?: 'indigo' | 'emerald' | 'fuchsia' | 'amber' | 'sky';
}

const ToolVisual: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'indigo') return (
    <div className="h-16 w-full relative overflow-hidden rounded-xl bg-indigo-500/5 mb-6 border border-indigo-500/10">
      <div className="absolute inset-0 flex items-center justify-around">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1 bg-indigo-500/30 rounded-full animate-pulse" style={{ height: `${20 + Math.random() * 60}%`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      <div className="absolute top-0 right-0 p-2"><Eye size={10} className="text-indigo-400" /></div>
    </div>
  );
  if (type === 'emerald') return (
    <div className="h-16 w-full relative overflow-hidden rounded-xl bg-emerald-500/5 mb-6 border border-emerald-500/10 p-2 font-mono text-[8px] text-emerald-400/40">
      <div>{`>> git pull zen_core`}</div>
      <div className="text-emerald-400/60">{`>> node deploy.js --agile`}</div>
      <div className="animate-pulse">{`_`}</div>
      <div className="absolute top-0 right-0 p-2"><Terminal size={10} className="text-emerald-400" /></div>
    </div>
  );
  if (type === 'fuchsia') return (
    <div className="h-16 w-full relative overflow-hidden rounded-xl bg-fuchsia-500/5 mb-6 border border-fuchsia-500/10">
      <div className="absolute inset-0 data-line-glow opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border border-fuchsia-500/30 animate-ping" />
      </div>
      <div className="absolute top-0 right-0 p-2"><Radio size={10} className="text-fuchsia-400" /></div>
    </div>
  );
  return (
    <div className="h-16 w-full relative overflow-hidden rounded-xl bg-slate-500/5 mb-6 border border-white/5">
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white/10" /><div className="w-2 h-2 rounded-full bg-white/20 animate-bounce" /><div className="w-2 h-2 rounded-full bg-white/10" />
      </div>
    </div>
  );
};

const ToolCard: React.FC<ToolCardProps> = ({ tool, accentColor = "indigo" }) => {
  const accentMap = {
    indigo: "border-indigo-500/30 text-indigo-400",
    emerald: "border-emerald-500/30 text-emerald-400",
    fuchsia: "border-fuchsia-500/30 text-fuchsia-400",
    amber: "border-amber-500/30 text-amber-400",
    sky: "border-sky-500/30 text-sky-400"
  };

  return (
    <div className="glass-dex-ultra p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full group tilt-dex relative">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-white group-hover:elite-shimmer transition-all duration-300 tracking-tight leading-none">{tool.name}</h3>
          <div className="flex items-center gap-3 font-mono text-[9px] text-slate-500 uppercase tracking-widest">
            {tool.cost && <span className="flex items-center gap-1"><DollarSign size={10}/> {tool.cost}</span>}
            <span className="opacity-50">#2025_CORE</span>
          </div>
        </div>
        <a href={tool.platformUrl} target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-white hover:text-black transition-all text-slate-400"><ExternalLink size={16} /></a>
      </div>
      <ToolVisual type={accentColor} />
      <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{tool.description}</p>
      <div className="flex-grow space-y-4">
        <div className="flex flex-wrap gap-2">
          {tool.excelledAt.map((item, idx) => (
            <span key={idx} className={`px-3 py-1 rounded-lg text-[10px] font-bold tracking-tight border ${accentMap[accentColor]} bg-white/5`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
        <div className="flex gap-3">
          <Info size={14} className="shrink-0 mt-0.5 text-slate-600" />
          <p className="text-[11px] text-slate-500 italic leading-relaxed">{tool.whyItMattered}</p>
        </div>
        {tool.definingTrait && (
          <div className="flex items-center gap-3 py-2 px-4 bg-white/5 rounded-xl border border-white/5">
            <Zap size={10} className="text-indigo-400 animate-pulse" />
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">{tool.definingTrait}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ToolCard;
