import React from 'react';
import { joinData } from '../constants';
import { Language } from '../types';

interface JoinUsProps {
  t: (key: string) => string;
  lang: Language;
}

const JoinUs: React.FC<JoinUsProps> = ({ t, lang }) => {
  return (
    <section id="join-us" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-24">
      <div className="text-center space-y-6 md:space-y-8 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-[2.0]">
          {t('join-h2')}
        </h2>
        <p className="text-slate-400 max-w-4xl mx-auto text-lg md:text-2xl font-bold leading-[3.0] px-4 text-center">
          {t('join-p')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {joinData.map((j, index) => (
          <div key={index} className={`card-hover glass-panel p-8 md:p-12 rounded-[3rem] border-t-8 ${j.border} shadow-xl flex flex-col text-center`}>
            <div className="text-5xl mb-8 flex justify-center">{j.emoji}</div>
            <h3 className="text-3xl font-bold mb-4 text-white uppercase leading-[2.0]">
              {lang === 'my' ? j.myT : j.enT}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinUs;