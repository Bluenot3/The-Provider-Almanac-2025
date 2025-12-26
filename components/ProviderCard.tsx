
import React, { useState, useEffect, useRef } from 'react';
import { ProviderDetail } from '../types';
import { ChevronDown, ChevronUp, ExternalLink, TrendingUp, Search, Users, Eye, Zap, ShieldCheck, Activity, DollarSign, Database, Cpu, Globe } from 'lucide-react';

interface ProviderCardProps {
  provider: ProviderDetail;
}

const NeuralSynapse: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    const particles = Array.from({ length: 18 }, () => ({
      x: Math.random() * 150, y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3
    }));
    const animate = () => {
      ctx.clearRect(0, 0, 150, 100);
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.15)';
      ctx.fillStyle = 'rgba(129, 140, 248, 0.4)';
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 150) p.vx *= -1;
        if (p.y < 0 || p.y > 100) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2); ctx.fill();
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 45) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
        });
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);
  return <canvas ref={canvasRef} width={150} height={100} className="opacity-50" />;
};

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div 
      className={`glass-dex-ultra rounded-[2.5rem] transition-all duration-700 overflow-hidden group ${expanded ? 'ring-1 ring-white/10 shadow-2xl bg-slate-900/60' : 'tilt-dex cursor-pointer hover:bg-white/[0.02]'}`} 
      onClick={() => !expanded && setExpanded(true)}
    >
      <div className="p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative">
        <div className="flex-grow space-y-6">
          <div className="flex items-center gap-6">
            <div className={`p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]`}>
              {provider.segment === 'Lab' ? <Database size={28} /> : provider.segment === 'Big Tech' ? <Globe size={28} /> : <Cpu size={28} />}
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white group-hover:elite-shimmer transition-all duration-500 uppercase leading-none mb-2">
                {provider.title}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 text-indigo-300 border border-indigo-500/20 uppercase font-black tracking-widest">{provider.segment}</span>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">ID: 2025_PROTO_{provider.slug.toUpperCase()}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-12 pt-2">
            {provider.metrics?.map((m, i) => (
              <div key={i} className="flex flex-col gap-1.5 border-l-2 border-indigo-500/20 pl-6">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] font-mono">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-100">{m.value}</span>
                  {m.percentage && <span className="text-[10px] font-black text-emerald-400">+{m.percentage}</span>}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-1.5 w-40 font-mono">
              <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase tracking-widest">
                <span>Signal Integrity</span>
                <span className="text-indigo-400">{provider.signalStrength}%</span>
              </div>
              <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden relative border border-white/5">
                <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 data-line-glow" style={{ width: `${provider.signalStrength}%` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <NeuralSynapse />
          <button 
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }} 
            className={`p-5 rounded-[1.5rem] transition-all duration-700 ${expanded ? 'bg-indigo-500 text-white scale-110 shadow-xl shadow-indigo-500/20' : 'bg-white/5 text-slate-500 hover:text-white hover:bg-white/10'}`}
          >
            {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
      </div>
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${expanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-10 lg:px-14 pb-20 pt-6 space-y-20 border-t border-white/5 bg-slate-900/10">
          <div className="p-10 rounded-[3rem] bg-indigo-500/5 border border-indigo-500/10 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
            <div className="absolute inset-0 data-line-glow opacity-5 pointer-events-none" />
            <div className="w-20 h-20 shrink-0 bg-indigo-500/20 rounded-3xl flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/30 shadow-2xl"><Zap size={40} /></div>
            <div className="space-y-3">
              <div className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-2 flex items-center gap-3">
                <Activity size={14} /> ZEN_STRATEGIC_VERDICT
              </div>
              <p className="text-2xl font-serif italic text-slate-100 leading-relaxed max-w-5xl">"{provider.zenVerdict}"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <section className="space-y-8">
              <div className="flex items-center gap-5 text-slate-100 uppercase tracking-[0.3em] font-black text-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400"><TrendingUp size={20}/></div>
                01. Frontier Advancements
              </div>
              <ul className="space-y-6 pl-12 border-l border-indigo-500/10 text-base text-slate-400 leading-relaxed relative">
                <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gradient-to-b from-indigo-500/40 to-transparent" />
                {provider.advancements.map((a, i) => (
                  <li key={i} className="group/li transition-all duration-300 hover:text-slate-100 flex gap-4">
                    <span className="text-indigo-500/40 font-mono text-xs pt-1.5 font-black tracking-tighter">[{String(i+1).padStart(2,'0')}]</span>
                    {a}
                  </li>
                ))}
              </ul>
            </section>
            <section className="space-y-8">
              <div className="flex items-center gap-5 text-slate-100 uppercase tracking-[0.3em] font-black text-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400"><Search size={20}/></div>
                02. Silent Missed Signals
              </div>
              <ul className="space-y-6 pl-12 border-l border-amber-500/10 text-base text-slate-400 italic leading-relaxed relative">
                <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gradient-to-b from-amber-500/40 to-transparent" />
                {provider.missed.map((m, i) => (
                  <li key={i} className="hover:text-slate-100 transition-colors flex gap-4">
                     <span className="text-amber-500/30 text-[10px] pt-1 font-black uppercase tracking-widest shrink-0">Signal:</span>
                     "{m}"
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {provider.pricing && (
            <div className="space-y-10">
              <div className="flex items-center gap-5 text-slate-100 uppercase tracking-[0.3em] font-black text-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400"><DollarSign size={20}/></div>
                03. Cognitive Economics Matrix
              </div>
              <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/20 backdrop-blur-md">
                <table className="w-full text-left font-mono text-sm text-slate-400">
                  <thead className="bg-white/5 text-slate-100 uppercase tracking-widest text-[10px] font-black">
                    <tr>
                      <th className="p-6 lg:p-8">Engine Variant</th>
                      <th className="p-6 lg:p-8">Input Tier</th>
                      <th className="p-6 lg:p-8 text-indigo-400">Cached Input</th>
                      <th className="p-6 lg:p-8">Execution Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    {provider.pricing.map((p, i) => (
                      <tr key={i} className="border-t border-white/5 hover:bg-white/[0.03] transition-colors group/row">
                        <td className="p-6 lg:p-8 font-bold text-slate-100 group-hover/row:text-indigo-300 transition-colors">{p.model}</td>
                        <td className="p-6 lg:p-8">{p.input} <span className="text-[10px] text-slate-600">/1M</span></td>
                        <td className="p-6 lg:p-8 text-indigo-400/70 font-bold">{p.cached} <span className="text-[10px] text-slate-600">/1M</span></td>
                        <td className="p-6 lg:p-8 font-medium">{p.output} <span className="text-[10px] text-slate-600">/1M</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 pt-10">
            <div className="space-y-6">
              <div className="flex items-center gap-5 text-slate-100 uppercase tracking-[0.3em] font-black text-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-fuchsia-400"><Eye size={20}/></div>
                04. 2026 Strategy Vectors
              </div>
              <div className="space-y-6 pl-12 relative border-l border-fuchsia-500/10">
                <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gradient-to-b from-fuchsia-500/40 to-transparent" />
                {provider.watch2026.map((w, i) => (
                  <div key={i} className="flex items-center gap-6 group/vec">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.8)] group-hover/vec:scale-150 transition-all duration-300" />
                    <span className="text-slate-100 font-bold text-lg tracking-tight">{w}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
               <div className="flex items-center gap-5 text-slate-100 uppercase tracking-[0.3em] font-black text-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400"><ShieldCheck size={20}/></div>
                System Audit Logs
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                 <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">DEPLOYMENT_SIGNATURE</div>
                 <div className="text-slate-400 text-sm leading-relaxed font-light">{provider.investment}</div>
              </div>
            </div>
          </section>

          <div className="pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-6 text-[10px] font-black text-slate-600 uppercase tracking-[0.6em] font-mono">
               <ShieldCheck size={18} /> NODE_SECURE: ZEN.25.{provider.slug.toUpperCase()}
            </div>
            {provider.platformUrl && (
              <a 
                href={provider.platformUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-4 px-12 py-5 bg-white text-black rounded-2xl text-[13px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:scale-[1.05] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                Access Intelligence Protocol
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProviderCard;
