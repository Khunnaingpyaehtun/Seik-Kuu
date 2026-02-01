
import React from 'react';
import { workData } from '../constants';
import { Language } from '../types';

interface WorkProps {
  t: (key: string) => string;
  lang: Language;
}

const Work: React.FC<WorkProps> = ({ t, lang }) => {
  return (
    <section id="work" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-[1.8]">
          {t('work-h2')}
        </h2>
        <p className="text-slate-500 italic max-w-xl mx-auto leading-[2.2]">
          {t('work-p')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {workData.map((w, index) => (
          <div key={index} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all group flex flex-col justify-center min-h-[180px]">
            <h4 className={`text-xl font-bold mb-4 leading-[1.8] ${w.color} group-hover:scale-105 transition-transform`}>
              {lang === 'my' ? w.myT : w.enT}
            </h4>
            <p className="text-slate-400 text-sm leading-[2.0]">
              {lang === 'my' ? w.myD : w.enD}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
