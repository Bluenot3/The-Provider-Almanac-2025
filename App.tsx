
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProviderCard from './components/ProviderCard';
import ToolCard from './components/ToolCard';
import { ALMANAC_DATA } from './data';
import { Category } from './types';
import { 
  Terminal, Play, Zap, Sparkles, Search as SearchIcon, X, 
  Database, Globe, Radio, BarChart3, ShieldCheck, Activity, 
  Cpu, ArrowRight, Share2, Music, Cloud, BookOpen 
} from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Providers');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOverview, setShowOverview] = useState(true);

  const categories: { id: Category; icon: any; label: string }[] = [
    { id: 'Providers', icon: Database, label: 'Frontier' },
    { id: 'Open', icon: Share2, label: 'Open' },
    { id: 'Vision', icon: Play, label: 'Visual' },
    { id: 'Coding', icon: Terminal, label: 'Code' },
    { id: 'Agents', icon: Zap, label: 'Agents' },
    { id: 'Audio', icon: Music, label: 'Audio' },
    { id: 'Apps', icon: Sparkles, label: 'Frontier Apps' },
    { id: 'Cloud', icon: Cloud, label: 'Cloud' },
  ];

  const filteredProviders = useMemo(() => {
    const allProviders = [...ALMANAC_DATA.providers, ...ALMANAC_DATA.openWeights, ...ALMANAC_DATA.cloud];
    const categoryProviders = activeCategory === 'Providers' ? ALMANAC_DATA.providers : 
                             activeCategory === 'Open' ? ALMANAC_DATA.openWeights :
                             activeCategory === 'Cloud' ? ALMANAC_DATA.cloud : [];
    
    return categoryProviders.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.advancements.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.zenVerdict.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, activeCategory]);

  const filteredTools = (tools: any[]) => {
    return tools.filter(t => 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen pb-60">
      <Header />

      {/* Hero: Ultra-High Title Placement */}
      <section className="relative pt-6 lg:pt-10 pb-12 px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12">
            <div className="max-w-5xl space-y-6 relative">
              <div className="inline-flex items-center gap-3 px-5 py-2 glass-dex-ultra rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] relative overflow-hidden">
                <div className="absolute inset-0 data-line-glow opacity-20" />
                <Radio size={12} className="pulse-ring" /> RETROSPECTIVE_AUDIT_LOG_2025
              </div>
              
              <h2 className="text-6xl md:text-8xl xl:text-[10rem] font-bold tracking-tighter leading-[0.85] uppercase elite-shimmer select-none py-2">
                PROVIDER <br /> ALMANAC
              </h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                 <p className="text-slate-400 text-2xl lg:text-3xl leading-snug font-light max-w-2xl border-l-2 border-indigo-500/20 pl-10 font-serif">
                    The 2025 definitive audit on the transition from <span className="text-slate-200 font-medium">language modeling</span> to <span className="text-slate-200 italic font-serif underline decoration-indigo-500/30 underline-offset-8">autonomous strategic infrastructure</span>.
                 </p>
                 <div className="flex flex-col gap-3 shrink-0 pt-4 font-mono">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Audit Node</div>
                    <div className="text-sm font-bold text-slate-300">ZEN.2025.SYS.RETRO</div>
                 </div>
              </div>
            </div>
            
            {/* Dashboard Stats */}
            <div className="flex flex-col gap-6 shrink-0 xl:w-[480px]">
               <div className="p-10 glass-dex-ultra rounded-[3rem] relative group overflow-hidden border-white/10 shadow-2xl">
                  <div className="absolute inset-0 data-line-glow opacity-5 pointer-events-none" />
                  <BarChart3 className="absolute top-8 right-8 text-white/5 group-hover:text-indigo-400 transition-colors" size={56} />
                  <div className="text-[11px] font-black text-slate-600 uppercase tracking-[0.4em] mb-6 font-mono">Aggregate Signals</div>
                  <div className="text-7xl font-bold font-heading tracking-tighter text-white">52+ <span className="text-2xl text-slate-700 font-mono tracking-tighter uppercase">Verified</span></div>
                  <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mt-6 flex items-center gap-3">
                    <Activity size={12} className="pulse-ring" /> INFRASTRUCTURE_STABLE_98.4%
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="flex-grow p-6 glass-dex-ultra rounded-[2rem] border-white/5 group hover:bg-white/[0.02] transition-all">
                    <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mb-3 font-mono">Ecosystem Cap</div>
                    <div className="text-3xl font-bold text-slate-200">$3.2T</div>
                  </div>
                  <div className="flex-grow p-6 glass-dex-ultra rounded-[2rem] border-white/5 group hover:bg-white/[0.02] transition-all">
                    <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mb-3 font-mono">Cognition Flux</div>
                    <div className="text-3xl font-bold text-slate-200">Exascale</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Filter & Command UI */}
      <section className="sticky top-[72px] z-50 px-8 lg:px-16 py-8 bg-[#010409]/90 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-10 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 p-2 bg-slate-900/50 border border-white/5 rounded-[2.5rem] w-full xl:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); setShowOverview(false); }}
                className={`flex-grow xl:flex-grow-0 flex items-center justify-center gap-4 px-10 py-5 rounded-[2rem] text-[12px] font-black uppercase tracking-[0.4em] transition-all duration-700 ${
                  activeCategory === cat.id && !showOverview
                  ? 'bg-white text-black shadow-2xl shadow-white/10' 
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
            <button
               onClick={() => setShowOverview(!showOverview)}
               className={`hidden xl:flex items-center gap-2 px-8 py-5 rounded-[2rem] text-[12px] font-black uppercase tracking-[0.4em] transition-all ${showOverview ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-700 hover:text-slate-400'}`}
            >
               {showOverview ? <BookOpen size={18} /> : <BookOpen size={18} />}
               {showOverview ? 'ALMANAC SUMMARY ON' : 'READ SUMMARY'}
            </button>
          </div>

          <div className="relative w-full xl:max-w-xl group">
            <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-indigo-400 transition-colors" size={24} />
            <input 
              type="text"
              placeholder={`Enter command query for ${activeCategory}...`}
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value); if(e.target.value) setShowOverview(false);}}
              className="w-full pl-20 pr-20 py-5 bg-white/5 border border-white/10 rounded-[2.5rem] text-xl focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-800 font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white p-2">
                <X size={24} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2025 Review Summary Content */}
      {showOverview && !searchQuery && (
        <section className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-24 space-y-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <div className="space-y-10">
                 <h3 className="text-6xl font-bold tracking-tighter text-white uppercase leading-none">
                    2025: The Year Intelligence <br /> Became <span className="text-indigo-500">Infrastructure</span>
                 </h3>
                 <p className="text-2xl text-slate-400 font-serif leading-relaxed italic border-l-4 border-indigo-500/20 pl-10">
                    "This was not the year artificial intelligence merely improved. It was the year intelligence took form. Intelligence ceased to function as an embedded software feature and instead emerged as a civilizational substrate."
                 </p>
                 <div className="flex gap-10 pt-10">
                    <div className="space-y-2">
                       <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest font-mono">Enterprise Adoption</div>
                       <div className="text-4xl font-bold text-white tracking-tighter">90% <span className="text-sm text-slate-700">Production</span></div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest font-mono">Knowledge Labor</div>
                       <div className="text-4xl font-bold text-white tracking-tighter">60-90% <span className="text-sm text-slate-700">Autonomous</span></div>
                    </div>
                 </div>
              </div>
              <div className="p-12 glass-dex-ultra rounded-[4rem] border-white/10 space-y-8 relative overflow-hidden">
                 <div className="absolute inset-0 data-line-glow opacity-5" />
                 <div className="text-[12px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-4 flex items-center gap-3">
                    <ShieldCheck size={16} /> PHASE_TRANSITION_REPORT_25
                 </div>
                 <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                    <p>
                       By mid-2025, the primary unit of AI advancement was no longer the model. It was the <strong>megastructure</strong>. Hyperscale campuses—measured in gigawatts—entered operation as industrial megastructures.
                    </p>
                    <p>
                       Every inference acquired a thermodynamic cost. Nations with access to abundant, low-cost power gained disproportionate influence over the future of cognition.
                    </p>
                    <button 
                       onClick={() => {setShowOverview(false); window.scrollTo({top: 800, behavior: 'smooth'});}}
                       className="group flex items-center gap-4 text-white font-black text-sm uppercase tracking-[0.4em] pt-6 hover:text-indigo-400 transition-colors"
                    >
                       ACCESS DETAILED AUDIT LOGS <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* Dynamic Grid Results */}
      <main className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-24 space-y-48">
        {(activeCategory === 'Providers' || activeCategory === 'Open' || activeCategory === 'Cloud') && (
          <div className="grid grid-cols-1 gap-16">
            {filteredProviders.length > 0 ? (
              filteredProviders.map((p, idx) => (
                <ProviderCard key={idx} provider={p} />
              ))
            ) : (
              <div className="py-60 text-center glass-dex-ultra rounded-[4rem] border-dashed border-2 border-white/10">
                <p className="text-slate-800 font-serif italic text-4xl">System query returned NULL.</p>
              </div>
            )}
          </div>
        )}

        {activeCategory === 'Vision' && (
          <div className="space-y-48">
            <section>
              <div className="flex items-center gap-6 mb-20 px-4">
                 <div className="w-20 h-20 rounded-[2.5rem] bg-indigo-500/10 flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/20 shadow-2xl">
                    <Globe size={36} />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-5xl font-black tracking-tighter uppercase text-white">Visual Synthesis</h4>
                    <p className="text-slate-500 text-2xl max-w-3xl font-light font-serif italic">From prompts to production: consistent, controllable, brand-ready engines.</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {filteredTools(ALMANAC_DATA.vision.images).map((t, idx) => (
                  <ToolCard key={idx} tool={t} accentColor="indigo" />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-6 mb-20 px-4">
                 <div className="w-20 h-20 rounded-[2.5rem] bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 ring-1 ring-fuchsia-500/20 shadow-2xl">
                    <Play size={36} />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-5xl font-black tracking-tighter uppercase text-white">Motion Dynamics</h4>
                    <p className="text-slate-500 text-2xl max-w-3xl font-light font-serif italic">The sound-era of AI video: physical realism and temporal continuity.</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {filteredTools(ALMANAC_DATA.vision.videos).map((t, idx) => (
                  <ToolCard key={idx} tool={t} accentColor="fuchsia" />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeCategory === 'Coding' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {filteredTools(ALMANAC_DATA.coding).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="emerald" />
            ))}
          </div>
        )}

        {activeCategory === 'Agents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
            {filteredTools(ALMANAC_DATA.agents).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="amber" />
            ))}
          </div>
        )}

        {activeCategory === 'Audio' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
            {filteredTools(ALMANAC_DATA.audio).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="rose" />
            ))}
          </div>
        )}

        {activeCategory === 'Apps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredTools(ALMANAC_DATA.apps).map((t, idx) => (
              <ToolCard key={idx} tool={t} accentColor="sky" />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-80 py-60 border-t border-white/5 glass-dex-ultra relative overflow-hidden bg-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-indigo-900/10 blur-[200px] rounded-full -z-10" />
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-40 mb-40">
            <div className="space-y-16">
              <div className="w-24 h-24 bg-white text-black rounded-[2.5rem] flex items-center justify-center font-black text-5xl shadow-2xl">Z</div>
              <h4 className="text-7xl font-black tracking-tighter leading-none uppercase text-white">ZEN AI <br /> <span className="text-indigo-500 italic">CO.</span></h4>
              <p className="text-slate-500 text-3xl max-w-2xl leading-relaxed font-light font-serif italic">
                Provided as a public good to help navigate the structures of intelligence before they harden beyond revision.
              </p>
            </div>
            <div className="flex flex-col justify-end space-y-16">
               <div className="p-16 glass-dex-ultra rounded-[4rem] border-white/10 space-y-10 shadow-2xl">
                  <div className="text-[12px] font-black text-indigo-400 uppercase tracking-[0.6em] mb-4 font-mono">2026_FORECAST</div>
                  <div className="text-6xl font-bold text-white tracking-tight leading-none">The 2026 Roadmap</div>
                  <p className="text-slate-500 text-2xl font-light leading-relaxed">Synthesis of agentic workframes and sovereign compute economics. Q1 Release.</p>
                  <button className="w-full sm:w-auto px-16 py-7 bg-white text-black rounded-3xl font-black text-[15px] uppercase tracking-[0.5em] hover:scale-105 transition-all duration-700 shadow-2xl">SUBSCRIBE_TO_SIGNAL</button>
               </div>
            </div>
          </div>
          
          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 font-mono">
            <div className="text-[12px] text-slate-700 uppercase tracking-[0.6em] font-black">
              &copy; 2025 ZEN_AI_REPORTS | ALL_SIGNAL_VERIFIED
            </div>
            <div className="flex flex-wrap justify-center gap-16 text-[12px] text-slate-700 uppercase tracking-[0.5em] font-black">
              <span className="hover:text-white cursor-pointer transition-all">Privacy_Vault</span>
              <span className="hover:text-white cursor-pointer transition-all">Audit_Node</span>
              <span className="hover:text-white cursor-pointer transition-all">Terms_of_Intelligence</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
