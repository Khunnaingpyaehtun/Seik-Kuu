
import React, { useState } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Language } from '../types';

interface AIMentorProps {
  t: (key: string) => string;
  lang: Language;
}

const AIMentor: React.FC<AIMentorProps> = ({ t, lang }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const text = await getGeminiResponse(input, lang);
      setResponse(text || "No response received.");
      setInput('');
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const setTemplate = (type: 'cardboard' | 'career') => {
    if (type === 'cardboard') {
      setInput(lang === 'my' ? "ကတ်ထူပြား၊ မော်တာ၊ ရေဘူးခွံ" : "Cardboard, DC Motor, Plastic Bottle");
    } else {
      setInput(lang === 'my' ? "ငါက သင်္ချာတော်တယ်၊ စက်ရုပ်တွေ စိတ်ဝင်စားတယ်" : "I am good at math and I love robotics");
    }
  };

  const renderFormattedResponse = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-6">
        {lines.map((line, idx) => {
          const cleanLine = line.trim();
          if (cleanLine.startsWith('Title:') || cleanLine.startsWith('ခေါင်းစဉ်:')) {
            return <h3 key={idx} className="text-2xl font-black text-orange-400 uppercase tracking-wide border-b border-orange-500/20 pb-2 leading-normal">{cleanLine.split(':')[1] || cleanLine}</h3>;
          } else if (cleanLine.startsWith('Materials:') || cleanLine.startsWith('လိုအပ်သည့်ပစ္စည်းများ:')) {
             return (
               <div key={idx} className="ai-result-block">
                 <h4 className="text-xs font-black text-cyan-400 uppercase mb-2 tracking-widest">Required Materials</h4>
                 <p className="text-slate-300 text-sm leading-loose">{cleanLine.split(':')[1] || cleanLine}</p>
               </div>
             );
          } else if (cleanLine.match(/^\d+\./)) {
             return (
               <div key={idx} className="flex items-start gap-3">
                 <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-lg text-[0.7rem] font-bold border border-cyan-500/30 uppercase mr-2 min-w-max mt-1">STEP</span>
                 <p className="text-slate-200 text-sm leading-loose">{cleanLine}</p>
               </div>
             );
          } else if (cleanLine !== "") {
             return <p key={idx} className="text-slate-400 text-xs leading-loose italic">{cleanLine}</p>;
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <section id="ai-lab" className="container mx-auto px-4 md:px-6 py-16 scroll-mt-20 text-left">
      <div className="glass-panel rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 lg:p-16 border-t-8 border-orange-500 relative overflow-hidden shadow-2xl">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]"></div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start relative z-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4 text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-normal uppercase">
                {t('ai-h2')}
              </h2>
              <p className="text-slate-300 text-lg font-bold opacity-80 leading-loose">
                {t('ai-p')}
              </p>
            </div>

            <div className="bg-slate-950/40 p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-xl backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-[10px] md:text-xs font-black text-orange-400 uppercase tracking-[0.3em] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    <span>{t('ai-input-label')}</span>
                  </label>
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={2} 
                    placeholder={lang === 'my' ? "ဥပမာ- ကတ်ထူပြား..." : "e.g. Cardboard..."}
                    className="w-full bg-slate-900 border-2 border-white/5 rounded-2xl px-6 py-4 text-white text-base md:text-lg focus:outline-none focus:border-orange-500/50 transition-all resize-none shadow-inner leading-relaxed"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <button onClick={() => setTemplate('cardboard')} className="px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all">{t('ai-tag-1')}</button>
                  <button onClick={() => setTemplate('career')} className="px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-[10px] font-bold text-slate-400 hover:border-orange-500/50 hover:text-orange-400 hover:bg-orange-500/5 transition-all">{t('ai-tag-2')}</button>
                </div>

                <button 
                  onClick={handleAsk}
                  disabled={loading}
                  className="group w-full relative inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-slate-950 font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase tracking-widest text-sm md:text-base overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{t('ai-btn')}</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 w-full">
            <div className="relative bg-slate-950/90 rounded-[2.5rem] h-[550px] md:h-[650px] border-2 border-white/10 flex flex-col shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                  </div>
                  <div className="h-4 w-px bg-white/10 mx-1"></div>
                  <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">Status: Online</span>
                </div>
                <span className="text-[9px] font-mono text-orange-500 tracking-widest uppercase animate-pulse">Neural_v3.0_Report</span>
              </div>

              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar relative z-10">
                {response ? renderFormattedResponse(response) : (
                   <div className="flex items-center gap-4 text-slate-500 font-mono text-sm italic">
                     <span>&gt; SYSTEM_READY: </span>
                     <span>{t('ai-idle')}</span>
                   </div>
                )}
              </div>

              {loading && (
                <div className="absolute inset-0 bg-slate-950/95 z-20 flex flex-col items-center justify-center space-y-10">
                  <div className="loader"></div>
                  <p className="text-[10px] text-orange-400 tracking-[0.4em] uppercase animate-pulse font-black">{t('ai-loading')}</p>
                </div>
              )}
              
              <div className="terminal-overlay absolute inset-0 opacity-[0.05]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMentor;
