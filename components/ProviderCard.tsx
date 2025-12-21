
import React, { useState, useEffect, useRef } from 'react';
import { ProviderDetail } from '../types';
import { ChevronDown, ChevronUp, ExternalLink, TrendingUp, Search, Users, Eye, Zap, ShieldCheck, Activity, DollarSign } from 'lucide-react';

interface ProviderCardProps {
  provider: ProviderDetail;
}

const NeuralViz: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * 120, y: Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4
    }));
    const animate = () => {
      ctx.clearRect(0, 0, 120, 80);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 120) p.vx *= -1;
        if (p.y < 0 || p.y > 80) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1, 0, Math.PI * 2); ctx.fill();
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 30) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
        });
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);
  return <canvas ref={canvasRef} width={120} height={80} className="opacity-40" />;
};

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`glass-dex-ultra rounded-[2.5rem] transition-all duration-700 overflow-hidden group ${expanded ? 'ring-1 ring-white/10 shadow-2xl' : 'tilt-dex cursor-pointer'}`} onClick={() => !expanded && setExpanded(true)}>
      <div className="p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative">
        <div className="flex-grow space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="text-4xl font-bold tracking-tighter text-white group-hover:elite-shimmer transition-all duration-300 uppercase">{provider.title}</h3>
            <span className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5 uppercase font-bold tracking-widest">{provider.segment}</span>
          </div>
          <div className="flex flex-wrap gap-10">
            {provider.metrics?.map((m, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">{m.label}</span>
                <span className="text-base font-bold text-slate-200">{m.value}</span>
              </div>
            ))}
            <div className="flex flex-col gap-1 w-32 font-mono">
              <div className="flex justify-between text-[8px] text-slate-500 uppercase"><span>Signal</span><span>{provider.signalStrength}%</span></div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden relative">
                <div className="h-full bg-indigo-500 data-line-glow" style={{ width: `${provider.signalStrength}%` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <NeuralViz />
          <button onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }} className={`p-4 rounded-2xl transition-all duration-500 ${expanded ? 'bg-indigo-500 text-white' : 'bg-white/5 text-slate-500 hover:text-white'}`}>
            {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
      </div>
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-10 pb-16 pt-4 space-y-16 border-t border-white/5 bg-slate-900/10">
          <div className="p-8 rounded-[2rem] bg-indigo-500/5 border border-indigo-500/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 shrink-0 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400"><Zap size={32} /></div>
            <div>
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-2">ZEN_VERDICT</div>
              <p className="text-xl font-serif italic text-slate-200 leading-relaxed">"{provider.zenVerdict}"</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <section className="space-y-6">
              <div className="flex items-center gap-4 text-slate-200 uppercase tracking-widest font-bold"><TrendingUp size={18}/> 01. Advancements</div>
              <ul className="space-y-4 pl-4 border-l border-slate-800 text-sm text-slate-400 leading-relaxed">
                {provider.advancements.map((a, i) => <li key={i} className="hover:text-slate-200 transition-colors">{a}</li>)}
              </ul>
            </section>
            <section className="space-y-6">
              <div className="flex items-center gap-4 text-slate-200 uppercase tracking-widest font-bold"><Search size={18}/> 02. Missed Signals</div>
              <ul className="space-y-4 pl-4 border-l border-slate-800 text-sm text-slate-400 italic">
                {provider.missed.map((m, i) => <li key={i} className="hover:text-slate-200 transition-colors">" {m} "</li>)}
              </ul>
            </section>
          </div>
          {provider.pricing && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-200 uppercase tracking-widest font-bold"><DollarSign size={18}/> 03. Model Cost Matrix (/1M Tokens)</div>
              <div className="overflow-hidden rounded-2xl border border-white/5">
                <table className="w-full text-left font-mono text-xs text-slate-400 bg-white/5">
                  <thead className="bg-white/10 text-slate-200 uppercase tracking-tighter">
                    <tr><th className="p-4">Model Tier</th><th className="p-4">Input</th><th className="p-4">Cached</th><th className="p-4">Output</th></tr>
                  </thead>
                  <tbody>
                    {provider.pricing.map((p, i) => (
                      <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-slate-200">{p.model}</td><td className="p-4">{p.input}</td><td className="p-4 text-indigo-400">{p.cached}</td><td className="p-4">{p.output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] font-mono"><ShieldCheck size={14}/> AUDIT_NODE: SYS.25.{provider.slug.toUpperCase()}</div>
            {provider.platformUrl && <a href={provider.platformUrl} target="_blank" className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-xl text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all">Gateway <ExternalLink size={14}/></a>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProviderCard;
