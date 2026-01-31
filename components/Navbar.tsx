import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, go to home then try to scroll
      navigate('/');
      // Timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center text-left">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/icno.png" 
            alt="Seik Kuu Icon" 
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            {lang === 'en' ? (
                <img 
                    src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/IDEA.png" 
                    alt="Seik Kuu" 
                    className="h-12 md:h-16 w-auto object-contain"
                />
            ) : (
                <img 
                    src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/IDEAB.png" 
                    alt="Seik Kuu" 
                    className="h-12 md:h-16 w-auto object-contain"
                />
            )}
            <span className="text-[10px] md:text-xs uppercase text-cyan-400 font-bold tracking-[0.2em] mt-1 ml-1 shadow-cyan-500/50 drop-shadow-sm">Innovation Lab</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 md:gap-8">
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black text-slate-300 tracking-widest uppercase">
            
            {/* Scrollable Links */}
            <button onClick={() => handleNavClick('about')} className="hover:text-cyan-400 transition uppercase">
                {t('nav-history')}
            </button>
            
            {/* Separate Page Links */}
            <Link to="/tech" className={`hover:text-cyan-400 transition ${isActive('/tech') ? 'text-cyan-400' : ''}`}>
                {t('nav-tech')}
            </Link>

            {/* Scrollable Links */}
            <button onClick={() => handleNavClick('work')} className="hover:text-cyan-400 transition uppercase">
                {t('nav-work')}
            </button>
            
            <button onClick={() => handleNavClick('showcase')} className={`hover:text-cyan-400 transition uppercase ${isActive('/showcase') ? 'text-cyan-400' : ''}`}>
                {t('nav-showcase')}
            </button>
            
            {/* Separate Page Link */}
            <Link to="/ai-lab" className={`transition ${isActive('/ai-lab') ? 'text-orange-400' : 'text-slate-300 hover:text-orange-300'}`}>
                {t('nav-ai')}
            </Link>

            {/* Scrollable Link */}
            <button onClick={() => handleNavClick('contact')} className="hover:text-cyan-400 transition uppercase">
                {t('nav-contact')}
            </button>
          </div>
          <div className="flex bg-slate-900/50 rounded-lg p-1 border border-white/10 text-[10px] font-bold">
            <button 
              onClick={() => setLang('my')} 
              className={`px-2 py-1 rounded transition-colors ${lang === 'my' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
            >
              MM
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>
          <button onClick={() => handleNavClick('join-us')} className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 md:px-7 py-2 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black transition-all shadow-lg uppercase">
            {t('nav-join')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;