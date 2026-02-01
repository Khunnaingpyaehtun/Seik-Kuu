
import React from 'react';
import { roadmapData } from '../constants';
import { Language } from '../types';

interface RoadmapProps {
  t: (key: string) => string;
  lang: Language;
}

const Roadmap: React.FC<RoadmapProps> = ({ t, lang }) => {
  return (
    <section id="roadmap" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20 relative">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-[1.8]">
          {t('roadmap-h2')}
        </h2>
        <p className="text-slate-500 italic max-w-xl mx-auto leading-[2.2]">
          {t('roadmap-p')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Continuous Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-orange-500 to-transparent opacity-20 hidden md:block"></div>

        <div className="space-y-12">
          {roadmapData.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Indicator */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10 hidden md:block"></div>

              {/* Content Panel */}
              <div className="w-full md:w-[45%]">
                <div className={`glass-panel p-8 rounded-3xl border-t-4 transition-all hover:-translate-y-1 ${item.status === 'completed' ? 'border-green-500' : item.status === 'ongoing' ? 'border-orange-500 animate-[pulse-glow_4s_infinite]' : 'border-slate-700'}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{item.phase}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase leading-tight">
                    {lang === 'my' ? item.myTitle : item.enTitle}
                  </h3>
                  <p className="text-slate-400 text-sm leading-[2.2]">
                    {lang === 'my' ? item.myDesc : item.enDesc}
                  </p>
                  
                  {/* Status Badge */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.status === 'completed' ? 'bg-green-500' : item.status === 'ongoing' ? 'bg-orange-500 animate-pulse' : 'bg-slate-700'}`}></div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                      {item.status === 'completed' ? 'Completed' : item.status === 'ongoing' ? 'Ongoing' : 'Future Goal'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
