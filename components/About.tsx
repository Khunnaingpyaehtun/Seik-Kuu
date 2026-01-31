import React from 'react';

interface AboutProps {
  t: (key: string) => string;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>

      {/* Main Story Block */}
      <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[4rem] border-l-8 md:border-l-[12px] border-cyan-500 relative overflow-hidden shadow-2xl mb-12 group">
        
        {/* Subtle Background Art */}
        <div className="absolute -right-20 -top-20 text-[20rem] opacity-[0.03] rotate-12 select-none group-hover:rotate-6 transition-transform duration-1000">🚀</div>

        <div className="grid lg:grid-cols-3 gap-12 items-center text-left relative z-10">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[2.0] uppercase tracking-tight">
              {t('about-h2')}
            </h2>
            <p className="text-slate-300 text-base md:text-lg lg:text-xl leading-[2.5] font-medium border-l border-white/10 pl-6">
              {t('about-p')}
            </p>
          </div>
          <div className="bg-slate-950/60 rounded-[3rem] border border-white/10 p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] min-h-[200px] backdrop-blur-md hover:border-cyan-500/30 transition-colors">
            <div className="text-4xl md:text-6xl opacity-30 tech-gradient font-black tracking-tighter">2018-2026</div>
            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest">Seik Kuu</h3>
            <div className="h-px w-12 bg-white/20"></div>
            <p className="text-slate-500 italic text-xs leading-[2.0]">
              {t('about-quote')}
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-8 rounded-[2.5rem] border-t-4 border-cyan-500 hover:bg-slate-800/50 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] group">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner border border-white/5 group-hover:border-cyan-500/30 transition-colors">🛡️</div>
            <h3 className="text-xl font-bold text-white uppercase mb-3 leading-[2.0] group-hover:text-cyan-400 transition-colors">{t('pillar-resilience-t')}</h3>
            <p className="text-slate-400 text-sm leading-[2.5]">{t('pillar-resilience-d')}</p>
        </div>

        <div className="glass-panel p-8 rounded-[2.5rem] border-t-4 border-orange-500 hover:bg-slate-800/50 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(251,146,60,0.1)] group">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner border border-white/5 group-hover:border-orange-500/30 transition-colors">🏠</div>
            <h3 className="text-xl font-bold text-white uppercase mb-3 leading-[2.0] group-hover:text-orange-400 transition-colors">{t('pillar-localism-t')}</h3>
            <p className="text-slate-400 text-sm leading-[2.5]">{t('pillar-localism-d')}</p>
        </div>

        <div className="glass-panel p-8 rounded-[2.5rem] border-t-4 border-purple-500 hover:bg-slate-800/50 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] group">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner border border-white/5 group-hover:border-purple-500/30 transition-colors">⛓️</div>
            <h3 className="text-xl font-bold text-white uppercase mb-3 leading-[2.0] group-hover:text-purple-400 transition-colors">{t('pillar-blockchain-t')}</h3>
            <p className="text-slate-400 text-sm leading-[2.5]">{t('pillar-blockchain-d')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;