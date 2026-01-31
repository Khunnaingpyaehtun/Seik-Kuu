import React from 'react';
import { Language } from '../types';

interface FooterProps {
  t: (key: string) => string;
  lang?: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang = 'my' }) => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950 text-center">
      <div className="container mx-auto px-4 md:px-6 space-y-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-6">
             <img 
                src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/icno.png" 
                alt="Seik Kuu Icon" 
                className="w-20 h-20 rounded-2xl shadow-lg"
              />
             <div className="flex flex-col items-start">
                {lang === 'en' ? (
                    <img 
                        src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/IDEA.png" 
                        alt="Seik Kuu" 
                        className="h-20 md:h-24 w-auto object-contain"
                    />
                ) : (
                    <img 
                        src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/IDEAB.png" 
                        alt="Seik Kuu" 
                        className="h-20 md:h-24 w-auto object-contain"
                    />
                )}
                <span className="text-sm uppercase text-cyan-400 font-bold tracking-[0.4em] mt-2 ml-1">Innovation Lab</span>
             </div>
          </div>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-black px-4 leading-loose text-center">
          {t('footer-p')}
        </p>
        <div className="text-[8px] text-slate-800 font-black uppercase tracking-widest pt-4 text-center">
          © 2024 - 2026 Seik Kuu Project. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;