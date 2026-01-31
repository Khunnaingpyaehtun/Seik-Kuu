import React from 'react';
import { Link } from 'react-router-dom';
import { showcaseData } from '../constants';
import { Language } from '../types';

interface ShowcaseProps {
  t: (key: string) => string;
  lang: Language;
  limit?: number;
}

const Showcase: React.FC<ShowcaseProps> = ({ t, lang, limit }) => {
  const displayData = limit ? showcaseData.slice(0, limit) : showcaseData;

  return (
    <section id="showcase" className="container mx-auto px-4 md:px-6 py-24 scroll-mt-20">
      <div className="text-center space-y-6 mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-[1.8] relative z-10">
          {limit ? t('showcase-h2') + " (Preview)" : t('showcase-h2')}
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto italic text-center leading-[2.2] relative z-10">
          {t('showcase-p')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
        {displayData.map((p) => (
          <Link 
            key={p.id} 
            to={`/project/${p.id}`}
            className="group relative glass-panel p-6 rounded-[2rem] hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden cursor-pointer"
          >
            {/* Hover Glow Border - Added pointer-events-none to ALL overlays */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 pointer-events-none"></div>

            <div className="aspect-square bg-slate-950/50 rounded-3xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-[inset_0_0_20px_rgba(34,211,238,0.1)] transition-all duration-500 pointer-events-none">
              <span className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{p.emoji}</span>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2 uppercase leading-[1.8] group-hover:text-cyan-400 transition-colors">
              {lang === 'my' ? p.myTitle : p.enTitle}
            </h4>
            <p className="text-slate-400 text-xs mb-6 leading-[2.2] flex-1 border-t border-white/5 pt-4 mt-2">
              {lang === 'my' ? p.myDesc : p.enDesc}
            </p>
            
            <div className="mt-auto w-full py-3 rounded-xl border border-white/10 bg-white/5 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-500 transition-all duration-300 text-center">
              {t('view-demo')}
            </div>
          </Link>
        ))}
      </div>

      {limit && (
        <div className="mt-16 text-center">
            <Link 
                to="/showcase" 
                className="inline-block px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition hover:border-cyan-400 hover:text-cyan-400"
            >
                View All Projects →
            </Link>
        </div>
      )}
    </section>
  );
};

export default Showcase;