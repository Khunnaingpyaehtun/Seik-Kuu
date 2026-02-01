
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
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/10 py-0.5 md:py-1">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center text-left">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <img 
            src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/gif/EYE.gif" 
            alt="Seik Kuu Icon" 
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl shadow-lg group-hover:scale-105 transition-all duration-300"
          />
          <div className="flex flex-col justify-center">
            {lang === 'en' ? (
                <img 
                    src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/logo/IDEAENG.svg" 
                    alt="Seik Kuu" 
                    className="h-8 md:h-14 w-auto object-contain transition-all duration-300"
                />
            ) : (
                <img 
                    src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/logo/IDEAMYA.svg" 
                    alt="Seik Kuu" 
                    className="h-7 md:h-14 w-auto object-contain transition-all duration-300"
                />
            )}
          </div>
        </Link>
        <div className="flex items-center gap-3 md:gap-8">
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-black text-slate-300 tracking-widest uppercase">
            
            <button onClick={() => handleNavClick('about')} className="hover:text-cyan-400 transition uppercase">
                About Us
            </button>
            
            <Link to="/tech" className={`hover:text-cyan-400 transition ${isActive('/tech') ? 'text-cyan-400' : ''}`}>
                Certificate
            </Link>

            <button onClick={() => handleNavClick('work')} className="hover:text-cyan-400 transition uppercase">
                Activity
            </button>
            
            <button onClick={() => handleNavClick('showcase')} className={`hover:text-cyan-400 transition uppercase ${isActive('/showcase') ? 'text-cyan-400' : ''}`}>
                SHOWCASE
            </button>
            
            <Link to="/ai-lab" className={`transition ${isActive('/ai-lab') ? 'text-orange-400' : 'text-slate-300 hover:text-orange-300'}`}>
                AI MENTOR
            </Link>
          </div>
          <div className="flex bg-slate-900/50 rounded-lg p-1 border border-white/10 text-[9px] font-bold">
            <button 
              onClick={() => setLang('my')} 
              className={`px-1.5 py-0.5 rounded transition-colors ${lang === 'my' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
            >
              MM
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-1.5 py-0.5 rounded transition-colors ${lang === 'en' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>
          <button onClick={() => handleNavClick('contact')} className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 md:px-6 py-2 rounded-lg md:rounded-xl text-[9px] md:text-xs font-black transition-all shadow-lg uppercase tracking-wider active:scale-95">
            CONTACT Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
