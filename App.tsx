
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProviderCard from './components/ProviderCard';
import ToolCard from './components/ToolCard';
import { ALMANAC_DATA } from './data';
import { Category } from './types';
import { Terminal, Play, Box, Zap, LayoutGrid, Sparkles, Search as SearchIcon, X, BarChart3, Database, Globe, Cpu, Radio, Activity } from 'lucide-react';

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

      {/* Hero: Futuristic Liquid Dex Overview */}
      <section className="relative pt-12 lg:pt-16 pb-12 px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10">
            <div className="max-w-5xl space-y-6 relative">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-900/40 border border-white/5 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] relative overflow-hidden backdrop-blur-md">
                <Radio size={12} className="pulse-ring" /> RETROSPECTIVE_AUDIT_LOG_2025
              </div>
              
              <h2 className="text-6xl md:text-8xl xl:text-[9.5rem] font-bold tracking-tighter leading-[0.8] uppercase elite-shimmer select-none py-2">
                PROVIDER <br /> ALMANAC
              </h2>
              
              <div className="flex flex-col md:flex-row gap-10 items-start">
                 <p className="text-slate-400 text-xl lg:text-2xl leading-snug font-light max-w-2xl border-l border-indigo-500/20 pl-8 font-serif">
                    Mapping the seismic transition from <span className="text-slate-200 font-medium">language modeling</span> to <span className="text-slate-200 italic font-serif">autonomous strategic execution</span>.
                 </p>
                 <div className="flex flex-col gap-2 shrink-0 pt-2 font-mono">
                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Audit Hash</div>
                    <div className="text-xs font-bold text-slate-300">ZEN.25.04.SYS.RETRO</div>
                 </div>
              </div>
            </div>
            
            {/* Dex Analytics Overlay */}
            <div className="flex flex-col gap-4 shrink-0 xl:w-[420px]">
               <div className="p-8 glass-dex rounded-[2.5rem] relative group overflow-hidden border-white/10">
                  <div className="absolute inset-0 data-stream opacity-5 pointer-events-none"></div>
                  <BarChart3 className="absolute top-6 right-6 text-white/5 group-hover:text-indigo-400 transition-colors" size={40} />
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 font-mono">Verified Entities</div>
                  <div className="text-5xl font-bold font-heading tracking-tighter text-white">52+ <span className="text-xl text-slate-600">UNITS</span></div>
                  <div className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em] mt-3 flex items-center gap-2">
                    <Activity size={10} /> SIGNAL_STABLE_98.4%
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="flex-grow p-4 glass-dex rounded-[1.5rem] border-white/5">
                    <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mb-1 font-mono">Ecosystem Cap</div>
                    <div className="text-xl font-bold text-slate-300">$3.2T</div>
                  </div>
                  <div className="flex-grow p-4 glass-dex rounded-[1.5rem] border-white/5">
                    <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mb-1 font-mono">Compute Pool</div>
                    <div className="text-xl font-bold text-slate-300">Zettaflops</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Filter & Command Line */}
      <section className="sticky top-[72px] z-50 px-8 lg:px-16 py-6 bg-[#020617]/90 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-8 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/50 border border-white/5 rounded-[2rem] w-full xl:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                className={`flex-grow xl:flex-grow-0 flex items-center justify-center gap-3 px-8 py-3.5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
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
              placeholder={`Enter command query for ${activeCategory}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-16 py-4 bg-slate-900/50 border border-white/10 rounded-[2rem] text-lg focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white p-2">
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Results Grid */}
      <main className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-16 space-y-32">
        {activeCategory === 'Providers' && (
          <div className="grid grid-cols-1 gap-12">
            {filteredProviders.length > 0 ? (
              filteredProviders.map((p, idx) => (
                <ProviderCard key={idx} provider={p} />
              ))
            ) : (
              <div className="py-40 text-center glass-dex rounded-[3rem] border-dashed border-2 border-white/5">
                <p className="text-slate-600 font-serif italic text-3xl">System query returned NULL.</p>
              </div>
            )}
          </div>
        )}

        {activeCategory === 'Vision' && (
          <div className="space-y-32">
            <section>
              <div className="flex items-center gap-5 mb-12 px-2">
                 <div className="w-12 h-12 rounded-[1.5rem] bg-indigo-500/10 flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/20 shadow-xl">
                    <LayoutGrid size={24} />
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-3xl font-black tracking-tighter uppercase text-white leading-none">Image Systems</h4>
                    <p className="text-slate-500 text-sm font-light">High-fidelity neural pipelines for commercial deployment.</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {filteredTools(ALMANAC_DATA.vision.images).map((t, idx) => (
                  <ToolCard key={idx} tool={t} accentColor="indigo" />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-5 mb-12 px-2">
                 <div className="w-12 h-12 rounded-[1.5rem] bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 ring-1 ring-fuchsia-500/20 shadow-xl">
                    <Play size={24} />
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-3xl font-black tracking-tighter uppercase text-white leading-none">Motion Dynamics</h4>
                    <p className="text-slate-500 text-sm font-light">Physical realism and temporal continuity in AI video.</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredTools(ALMANAC_DATA.vision.videos).map((t, idx) => (
                  <ToolCard key={idx} tool={t} accentColor="fuchsia" />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeCategory === 'Coding' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredTools(ALMANAC_DATA.coding).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="emerald" />
            ))}
          </div>
        )}

        {activeCategory === 'Agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
            {filteredTools(ALMANAC_DATA.agents).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="amber" />
            ))}
          </div>
        )}

        {activeCategory === 'Apps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTools(ALMANAC_DATA.apps).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="sky" />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-60 py-40 border-t border-white/5 glass-dex relative overflow-hidden bg-black/30">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mb-32">
            <div className="space-y-12">
              <div className="w-20 h-20 bg-white text-black rounded-[2rem] flex items-center justify-center font-black text-4xl shadow-xl shadow-white/5">Z</div>
              <h4 className="text-5xl font-black tracking-tighter leading-none uppercase text-white">ZEN AI <br /> <span className="text-indigo-500 italic">CO.</span></h4>
              <p className="text-slate-500 text-xl max-w-lg leading-relaxed font-light">
                Definitive signals for pioneers building the next civilization of autonomous intelligence.
              </p>
            </div>
            <div className="flex flex-col justify-end space-y-10">
               <div className="p-10 glass-dex rounded-[2.5rem] border-white/5 space-y-6">
                  <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-2 font-mono">Forecast_Unit</div>
                  <div className="text-4xl font-bold text-white tracking-tight leading-none">The 2026 Trajectory Radar</div>
                  <p className="text-slate-500 text-lg font-light leading-relaxed">Synthesis of agentic workframes and sovereign compute economics. Q1 2026 Release.</p>
                  <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 shadow-xl shadow-white/10">Subscribe_to_Signal</button>
               </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono">
            <div className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-black">
              &copy; 2025 ZEN_AI_SYSTEMS_CORE | ALL_INTEL_VERIFIED
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[10px] text-slate-600 uppercase tracking-[0.3em] font-black">
              <span className="hover:text-white cursor-pointer transition-all">Privacy_Protocol</span>
              <span className="hover:text-white cursor-pointer transition-all">Node_Status</span>
              <span className="hover:text-white cursor-pointer transition-all">Terms_of_Signal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
