
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { joinData } from '../constants';
import { Language } from '../types';

interface JoinUsProps {
  t: (key: string) => string;
  lang: Language;
}

const JoinUs: React.FC<JoinUsProps> = ({ t, lang }) => {
  const navigate = useNavigate();

  const handleJoinClick = (type: string) => {
    if (type === 'Partner' || type === 'မိတ်ဖက်') {
      navigate('/partner');
    } else if (type === 'Donor' || type === 'အလှူရှင်') {
      navigate('/donate');
    }
  };

  return (
    <section id="join-us" className="container mx-auto px-4 md:px-6 py-16 scroll-mt-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
          {t('join-h2')}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed px-4 text-center">
          {t('join-p')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {joinData.map((j, index) => (
          <button 
            key={index} 
            onClick={() => handleJoinClick(lang === 'my' ? j.myT : j.enT)}
            className={`glass-panel p-6 md:p-8 rounded-2xl border-t-4 ${j.border} shadow-lg flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:bg-white/5 active:scale-95 w-full`}
          >
            <img src={j.iconUrl} alt={j.enT} className="w-16 h-16 md:w-20 md:h-20 mb-6 object-contain" />
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              {lang === 'my' ? j.myT : j.enT}
            </h3>
          </button>
        ))}
      </div>
    </section>
  );
};

export default JoinUs;
