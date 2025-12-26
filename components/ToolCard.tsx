
import React, { useEffect, useRef } from 'react';
import { ToolDetail } from '../types';
import { ExternalLink, DollarSign, Info, Cpu, Zap, Radio, Terminal, Eye, Sparkles, Music, Play } from 'lucide-react';

interface ToolCardProps {
  tool: ToolDetail;
  accentColor?: 'indigo' | 'emerald' | 'fuchsia' | 'amber' | 'sky' | 'rose' | 'amber';
}

const CreativeFractal: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, 400, 200);
      ctx.save();
      ctx.translate(200, 100);
      const branches = 6;
      for (let i = 0; i < branches; i++) {
        ctx.rotate((Math.PI * 2) / branches);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          Math.sin(frame * 0.02) * 50, 
          Math.cos(frame * 0.02) * 50, 
          Math.sin(frame * 0.01) * 100, 
          50, 
          0, 
          80
        );
        ctx.strokeStyle = `rgba(217, 70, 239, ${0.4 + Math.sin(frame * 0.05) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return <canvas ref={canvasRef} width={400} height={200} className="w-full h-28 rounded-2xl bg-fuchsia-500/5 mb-6 border border-fuchsia-500/10 shadow-inner" />;
};

const CodeMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const chars = "01<>/_#{}[]";
    const columns = 20;
    const drops: number[] = Array(columns).fill(1);
    let frame = 0;
    const animate = () => {
      if (frame % 2 === 0) {
        ctx.fillStyle = "rgba(1, 4, 9, 0.1)";
        ctx.fillRect(0, 0, 400, 200);
        ctx.fillStyle = "#10b981";
        ctx.font = "10px monospace";
        for (let i = 0; i < drops.length; i++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          ctx.fillText(text, i * 20, drops[i] * 12);
          if (drops[i] * 12 > 200 && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return <canvas ref={canvasRef} width={400} height={200} className="w-full h-28 rounded-2xl bg-emerald-500/5 mb-6 border border-emerald-500/10" />;
};

const AudioWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, 400, 200);
      ctx.beginPath();
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      for (let x = 0; x < 400; x += 2) {
        const y = 100 + Math.sin(x * 0.05 + frame * 0.1) * 30 * Math.sin(frame * 0.02);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return <canvas ref={canvasRef} width={400} height={200} className="w-full h-28 rounded-2xl bg-rose-500/5 mb-6 border border-rose-500/10" />;
};

const AppMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, 400, 200);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      const spacing = 20;
      for (let x = spacing; x < 400; x += spacing) {
        for (let y = spacing; y < 200; y += spacing) {
          const dist = Math.hypot(x - 200, y - 100);
          const offset = Math.sin(dist * 0.05 - frame * 0.05) * 10;
          ctx.beginPath();
          ctx.arc(x, y + offset, 1, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.fill();
        }
      }
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return <canvas ref={canvasRef} width={400} height={200} className="w-full h-28 rounded-2xl bg-sky-500/5 mb-6 border border-sky-500/10" />;
};

const ToolCard: React.FC<ToolCardProps> = ({ tool, accentColor = "indigo" }) => {
  const accentMap = {
    indigo: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5",
    emerald: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
    fuchsia: "border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-500/5",
    rose: "border-rose-500/30 text-rose-400 bg-rose-500/5",
    amber: "border-amber-500/30 text-amber-400 bg-amber-500/5",
    sky: "border-sky-500/30 text-sky-400 bg-sky-500/5"
  };

  const renderViz = () => {
    switch (accentColor) {
      case 'emerald': return <CodeMatrix />;
      case 'fuchsia': return <CreativeFractal />;
      case 'rose': return <AudioWave />;
      case 'sky': return <AppMesh />;
      case 'indigo': return <CreativeFractal />; // Default creative
      default: return <AppMesh />;
    }
  };

  return (
    <div className="glass-dex-ultra p-8 lg:p-10 rounded-[2.5rem] border transition-all duration-700 flex flex-col h-full group tilt-dex relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 data-line-glow opacity-5 rotate-45 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:elite-shimmer transition-all duration-300 tracking-tight leading-none">
            {tool.name}
          </h3>
          <div className="flex items-center gap-3">
            {tool.releaseDate && (
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">
                {tool.releaseDate}
              </div>
            )}
            <div className="w-1 h-1 rounded-full bg-slate-700" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] font-mono">ACTIVE_NODE</span>
          </div>
        </div>
        <a 
          href={tool.platformUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all text-slate-400 shadow-xl"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      {renderViz()}

      <p className="text-slate-400 text-sm lg:text-base mb-8 leading-relaxed font-light">
        {tool.description}
      </p>

      <div className="flex-grow space-y-6">
        {tool.excelledAt && tool.excelledAt.length > 0 && (
          <div className="space-y-4">
            <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">DOMINANCE_VECTORS</div>
            <div className="flex flex-wrap gap-2">
              {tool.excelledAt.map((item, idx) => (
                <span key={idx} className={`px-4 py-2 rounded-xl text-[11px] font-black tracking-tight border transition-colors ${accentMap[accentColor]}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 space-y-5">
        <div className="flex gap-4 items-start">
          <div className="p-2 rounded-lg bg-white/5 text-slate-600"><Info size={16} /></div>
          <p className="text-[12px] lg:text-[13px] text-slate-400 leading-relaxed italic font-serif">
            "{tool.whyItMattered}"
          </p>
        </div>
        
        {tool.definingTrait && (
          <div className="flex items-center gap-3 py-3.5 px-5 bg-white/5 rounded-2xl border border-white/5">
            <Zap size={14} className="text-indigo-400 pulse-ring" />
            <span className="text-[11px] font-black text-indigo-300 uppercase tracking-[0.3em]">
              {tool.definingTrait}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ToolCard;
