
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface DonatePageProps {
  t: (key: string) => string;
  lang: Language;
}

const DonatePage: React.FC<DonatePageProps> = ({ t, lang }) => {
  const [showPayID, setShowPayID] = useState(false);
  const [showUSDT, setShowUSDT] = useState(false);

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 relative">
      <div className="absolute top-0 right-0 w-full h-[400px] bg-gradient-to-b from-orange-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-12 uppercase text-xs font-bold tracking-widest">
            <span>←</span> {t('proj-back')}
        </Link>

        <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tech-gradient">
                {t('donate-h2')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {t('donate-p')}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fiat Section */}
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden group flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                    <span className="text-3xl">🇲🇲</span> {t('donate-fiat-t')}
                </h3>
                <div className="space-y-6 flex-grow">
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex justify-between items-center group/item hover:border-orange-500/30 transition-colors">
                        <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">KBZPay / Wave</p>
                            <p className="text-xl font-mono text-white tracking-wider">09 777 000 000</p>
                        </div>
                        <span className="text-2xl opacity-50 group-hover/item:opacity-100 transition-opacity">📱</span>
                    </div>
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex justify-between items-center group/item hover:border-orange-500/30 transition-colors">
                        <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Account Name</p>
                            <p className="text-lg font-bold text-white uppercase tracking-wide">Seik Kuu Project</p>
                        </div>
                        <span className="text-2xl opacity-50 group-hover/item:opacity-100 transition-opacity">👤</span>
                    </div>
                </div>
                <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Locally Empowered</p>
                </div>
            </div>

            {/* Crypto Section with Security Masking */}
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden group flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                
                <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl font-black text-yellow-500 uppercase flex items-center gap-3">
                        <span className="text-3xl">🪙</span> {t('donate-crypto-t')}
                    </h3>
                    <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Secure Node</span>
                    </div>
                </div>

                <div className="bg-yellow-500/5 p-4 rounded-2xl border border-yellow-500/20 mb-8">
                    <p className="text-[11px] text-yellow-500/80 leading-relaxed font-medium">
                        🛡️ {t('donate-security-note')}
                    </p>
                </div>

                <div className="space-y-6 flex-grow">
                    {/* Binance Pay ID */}
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Binance Pay ID</p>
                        <div className="flex items-center justify-between gap-4">
                            <p className={`text-xl font-mono text-white tracking-widest transition-all duration-300 ${!showPayID ? 'blur-sm select-none' : ''}`}>
                                {showPayID ? "888777666" : "•••••••••"}
                            </p>
                            <button 
                                onClick={() => setShowPayID(!showPayID)}
                                className="text-[10px] bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 px-3 py-1.5 rounded-lg border border-yellow-500/30 font-black uppercase transition-all active:scale-95"
                            >
                                {showPayID ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* USDT Wallet */}
                    <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">USDT (TRC20) Wallet</p>
                        <div className="flex items-center justify-between gap-4">
                            <p className={`text-xs font-mono text-white break-all transition-all duration-300 ${!showUSDT ? 'blur-sm select-none' : ''}`}>
                                {showUSDT ? "TXabc123777888999seikkuu999xyz789" : "••••••••••••••••••••••••••••••••••••••"}
                            </p>
                            <button 
                                onClick={() => setShowUSDT(!showUSDT)}
                                className="text-[10px] bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 px-3 py-1.5 rounded-lg border border-yellow-500/30 font-black uppercase transition-all active:scale-95"
                            >
                                {showUSDT ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Secure Request */}
                    <div className="pt-4">
                        <a 
                            href="https://t.me/seikkuutech" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-2xl transition-all group/btn"
                        >
                            <span className="text-xl">💬</span>
                            <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-btn-hover:text-white">
                                {t('donate-secure-request')}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block px-8 py-3 bg-white/5 border border-white/10 rounded-full">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                    Your privacy is our priority. Digital resilience starts with security.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
