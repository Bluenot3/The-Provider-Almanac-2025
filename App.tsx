
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProviderCard from './components/ProviderCard';
import ToolCard from './components/ToolCard';
import { ALMANAC_DATA } from './data';
import { Category } from './types';
import { Terminal, Play, Zap, Sparkles, Search as SearchIcon, X, Database, Globe, Radio } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Providers');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: Category; icon: any; label: string }[] = [
    { id: 'Providers', icon: Database, label: 'Ecosystem' },
    { id: 'Vision', icon: Play, label: 'Visual' },
    { id: 'Coding', icon: Terminal, label: 'Code' },
    { id: 'Agents', icon: Zap, label: 'Agents' },
    { id: 'Apps', icon: Sparkles, label: 'Frontier' },
  ];

  const filteredProviders = useMemo(() => {
    return ALMANAC_DATA.providers.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.advancements.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.zenVerdict.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredTools = (tools: any[]) => {
    return tools.filter(t => 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen pb-60">
      <Header />

      {/* Hero: SHIFTED UP */}
      <section className="relative pt-6 lg:pt-10 pb-10 px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
            <div className="max-w-5xl space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-dex-ultra rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">
                <Radio size={12} className="pulse-ring" /> AUDIT_LOG_2025.SYS
              </div>
              
              <h2 className="text-6xl md:text-8xl xl:text-[9.5rem] font-bold tracking-tighter leading-[0.8] uppercase elite-shimmer select-none py-2">
                PROVIDER <br /> ALMANAC
              </h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                 <p className="text-slate-400 text-xl lg:text-2xl leading-snug font-light max-w-2xl border-l border-indigo-500/20 pl-8 font-serif">
                    The authoritative retrospect on the transition from <span className="text-slate-200">intelligence assistants</span> to <span className="text-slate-200 italic">autonomous agency</span>.
                 </p>
                 <div className="flex flex-col gap-2 shrink-0 pt-2 font-mono">
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">System Index</div>
                    <div className="text-xs font-bold text-slate-300">ZEN.2025.RETRO</div>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 shrink-0 xl:w-[400px]">
               <div className="p-8 glass-dex-ultra rounded-[2.5rem] border-white/5">
                  <Globe className="text-indigo-400 mb-4" size={32} />
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 font-mono">Market Entities</div>
                  <div className="text-5xl font-bold font-heading tracking-tighter text-white">52+ <span className="text-lg text-slate-600">UNITS</span></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Filter */}
      <section className="sticky top-[72px] z-50 px-8 lg:px-16 py-6 bg-[#010409]/90 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/5 border border-white/5 rounded-[2rem] w-full xl:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                className={`flex-grow xl:flex-grow-0 flex items-center gap-3 px-8 py-3 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeCategory === cat.id 
                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full xl:max-w-xl group">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={20} />
            <input 
              type="text"
              placeholder={`Query intelligence database for ${activeCategory}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-16 py-4 bg-white/5 border border-white/10 rounded-[2rem] text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white p-2">
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-12 space-y-24">
        {activeCategory === 'Providers' && (
          <div className="grid grid-cols-1 gap-12">
            {filteredProviders.map((p, idx) => <ProviderCard key={idx} provider={p} />)}
          </div>
        )}
        {activeCategory === 'Vision' && (
          <div className="space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-10"><Zap className="text-indigo-400"/><h4 className="text-3xl font-black uppercase tracking-tighter">Image Systems</h4></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">{filteredTools(ALMANAC_DATA.vision.images).map((t, i) => <ToolCard key={i} tool={t} accentColor="indigo" />)}</div>
            </section>
            <section>
              <div className="flex items-center gap-4 mb-10"><Play className="text-fuchsia-400"/><h4 className="text-3xl font-black uppercase tracking-tighter">Motion Dynamics</h4></div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">{filteredTools(ALMANAC_DATA.vision.videos).map((t, i) => <ToolCard key={i} tool={t} accentColor="fuchsia" />)}</div>
            </section>
          </div>
        )}
        {activeCategory === 'Coding' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredTools(ALMANAC_DATA.coding).map((t, i) => <ToolCard key={i} tool={t} accentColor="emerald" />)}
          </div>
        )}
        {activeCategory === 'Agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
            {filteredTools(ALMANAC_DATA.agents).map((t, i) => <ToolCard key={i} tool={t} accentColor="amber" />)}
          </div>
        )}
        {activeCategory === 'Apps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTools(ALMANAC_DATA.apps).map((t, i) => <ToolCard key={i} tool={t} accentColor="sky" />)}
          </div>
        )}
      </main>

      <footer className="mt-60 py-40 glass-dex-ultra border-t border-white/5 relative bg-black/40">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="w-16 h-16 bg-white text-black rounded-[1.5rem] flex items-center justify-center font-black text-3xl">Z</div>
              <h4 className="text-5xl font-black tracking-tighter uppercase text-white">ZEN AI <br /> <span className="text-indigo-500 italic">CO.</span></h4>
              <p className="text-slate-500 text-xl max-w-lg font-light">Navigating the structures of intelligence before they harden beyond revision.</p>
            </div>
            <div className="flex flex-col justify-end">
              <div className="p-10 glass-dex-ultra rounded-[2rem] space-y-6">
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] font-mono">Forecast_Unit</div>
                <div className="text-3xl font-bold text-white tracking-tight">2026 Trajectory Radar</div>
                <p className="text-slate-500 text-sm font-light">Sovereign compute economics and multi-agent governance. Q1 2026.</p>
                <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:scale-105 transition-all">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
