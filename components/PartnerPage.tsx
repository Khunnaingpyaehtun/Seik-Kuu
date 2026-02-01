
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface PartnerPageProps {
  t: (key: string) => string;
  lang: Language;
}

const PartnerPage: React.FC<PartnerPageProps> = ({ t, lang }) => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-12 uppercase text-xs font-bold tracking-widest">
            <span>←</span> {t('proj-back')}
        </Link>

        <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tech-gradient">
                {t('partner-h2')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {t('partner-p')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Curriculum */}
            <div className="glass-panel p-8 rounded-3xl border-t-4 border-indigo-500 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                <div className="w-20 h-20 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">{t('partner-curriculum-t')}</h3>
                <p className="text-slate-400 text-sm leading-loose">
                    {t('partner-curriculum-d')}
                </p>
            </div>

            {/* Tech */}
            <div className="glass-panel p-8 rounded-3xl border-t-4 border-cyan-500 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">🌐</div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">{t('partner-tech-t')}</h3>
                <p className="text-slate-400 text-sm leading-loose">
                    {t('partner-tech-d')}
                </p>
            </div>

            {/* Hardware */}
            <div className="glass-panel p-8 rounded-3xl border-t-4 border-orange-500 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">🔌</div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">{t('partner-hardware-t')}</h3>
                <p className="text-slate-400 text-sm leading-loose">
                    {t('partner-hardware-d')}
                </p>
            </div>
        </div>

        <div className="mt-20 text-center">
            <div className="glass-panel p-10 rounded-3xl border border-white/10 inline-block w-full max-w-4xl">
                <h4 className="text-2xl font-bold text-white mb-6 uppercase">{t('partner-cta')}</h4>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="mailto:seikkuu.tech@gmail.com" className="bg-indigo-600 hover:bg-indigo-500 text-white font-black px-10 py-4 rounded-xl transition-all shadow-xl shadow-indigo-500/20 uppercase tracking-widest text-sm">
                        Email Us
                    </a>
                    <a href="https://t.me/seikkuutech" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white font-black px-10 py-4 rounded-xl transition-all border border-white/10 uppercase tracking-widest text-sm">
                        Telegram
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPage;
