
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-fuchsia-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            Z
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-tight text-white leading-none">THE PROVIDER ALMANAC</h1>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">Presented by ZEN AI Co.</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-white/60 tracking-wider">
            2025 EDITION
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
