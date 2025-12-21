
import React, { useState, useEffect, useRef } from 'react';
import { ProviderDetail } from '../types';
import { ChevronDown, ChevronUp, ExternalLink, TrendingUp, Search, Users, Eye, Zap, ShieldCheck, Activity } from 'lucide-react';

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

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const count = 12;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 40) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} width={120} height={80} className="opacity-60" />;
};

const SignalVisual: React.FC<{ value: number }> = ({ value }) => (
  <div className="flex flex-col gap-1.5 w-32 font-mono">
    <div className="flex justify-between items-center text-[8px] font-bold text-slate-500 uppercase tracking-widest">
      <span>Signal Strength</span>
      <span className="text-slate-300">{value}%</span>
    </div>
    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden relative">
      <div 
        className="h-full bg-indigo-500 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        style={{ width: `${value}%` }}
      />
      <div className="absolute inset-0 data-stream opacity-30"></div>
    </div>
  </div>
);

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`glass-dex rounded-3xl transition-all duration-500 overflow-hidden group perspective-container ${
        expanded ? 'ring-1 ring-white/10 shadow-2xl bg-slate-900/60' : 'tilt-card cursor-pointer'
      }`}
      onClick={() => !expanded && setExpanded(true)}
    >
      <div className="p-8 lg:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
        {expanded && <div className="absolute inset-0 data-stream opacity-5 pointer-events-none"></div>}
        
        <div className="flex-grow space-y-4">
          <div className="flex items-center gap-5">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-white group-hover:elite-shimmer transition-all duration-300">
              {provider.title}
            </h3>
            <span className="text-[9px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700 uppercase font-bold tracking-widest">
              {provider.segment}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-8 items-center">
            {provider.metrics?.map((m, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-slate-200">{m.value}</span>
                  {m.percentage && <span className="text-[9px] font-bold text-emerald-400">+{m.percentage}</span>}
                </div>
              </div>
            ))}
            <SignalVisual value={provider.signalStrength} />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <NeuralViz />
          <div className="hidden md:flex flex-col items-end gap-1 font-mono">
             <div className="flex items-center gap-2 text-indigo-400/80">
               <Activity size={12} className="pulse-ring" />
               <span className="text-[9px] font-black uppercase tracking-widest">SIGNAL_LIVE</span>
             </div>
             <span className="text-[9px] text-slate-600 tracking-tighter uppercase">RETRO_AUDIT_25</span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
            className={`p-3.5 rounded-2xl transition-all duration-500 ${expanded ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-800/50 text-slate-500 hover:text-slate-200 hover:bg-slate-800'}`}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-8 lg:px-10 pb-16 pt-4 space-y-16 border-t border-white/5 bg-slate-900/20">
          
          {/* Zen Verdict Insight */}
          <div className="relative group/verdict overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 data-stream opacity-10 pointer-events-none"></div>
            <div className="relative p-8 lg:p-12 bg-indigo-500/5 border border-indigo-500/10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 shrink-0 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/20">
                 <Zap size={32} />
              </div>
              <div className="space-y-3">
                 <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] flex items-center gap-2">
                    STRATEGIC_VERDICT_INSIGHT
                 </div>
                 <p className="text-xl lg:text-2xl font-serif italic text-slate-200 leading-relaxed">"{provider.zenVerdict}"</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
            {/* 01: Advancements */}
            <section className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ring-1 ring-white/5">
                  <TrendingUp size={20} />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-slate-200">01. Major Advancements</h4>
              </div>
              <div className="space-y-5 pl-4 border-l border-slate-800">
                {provider.advancements.map((item, idx) => (
                  <div key={idx} className="group/item flex gap-4 text-slate-400 text-sm leading-relaxed transition-colors hover:text-slate-200">
                    <span className="text-indigo-500/40 font-mono text-xs pt-0.5 font-bold">{String(idx + 1).padStart(2, '0')}</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 02: Strategic Missed */}
            <section className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ring-1 ring-white/5">
                  <Search size={20} />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-slate-200">02. Strategic Signals</h4>
              </div>
              <div className="space-y-5 pl-4 border-l border-slate-800">
                {provider.missed.map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-slate-400 text-sm leading-relaxed italic hover:text-slate-200 transition-colors">
                    <span className="text-slate-700 font-mono text-xs pt-0.5">SIGNAL</span>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* 03: Investment */}
            <section className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ring-1 ring-white/5">
                  <Users size={20} />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-slate-200">03. Talent & Capital</h4>
              </div>
              <div className="pl-14 relative">
                <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-slate-800" />
                <p className="text-slate-400 text-sm leading-relaxed bg-slate-800/20 p-6 rounded-2xl border border-white/5">
                  {provider.investment}
                </p>
              </div>
            </section>

            {/* 04: Watch 2026 */}
            <section className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ring-1 ring-white/5">
                  <Eye size={20} />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-slate-200">04. 2026 Trajectory</h4>
              </div>
              <div className="space-y-5 pl-14 relative">
                <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-slate-800" />
                {provider.watch2026.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group/watch">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                    <span className="text-slate-200 text-sm font-bold tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] font-mono">
               <ShieldCheck size={14} /> AUDIT_NODE: SYS.25.{provider.slug.toUpperCase()}
            </div>
            {provider.platformUrl && (
              <a 
                href={provider.platformUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-3 px-8 py-3.5 bg-slate-800 hover:bg-white text-slate-300 hover:text-black border border-white/5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300"
              >
                Access Portal 
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
