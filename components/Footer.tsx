
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface FooterProps {
  t: (key: string) => string;
  lang?: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang = 'my' }) => {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="pt-16 pb-10 border-t border-white/5 bg-slate-950 relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/icno.png" 
                alt="Seik Kuu Icon" 
                className="w-14 h-14 rounded-xl shadow-lg border border-white/10"
              />
              <div className="flex flex-col">
                {lang === 'en' ? (
                    <img 
                        src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/logo/IDEAENG.svg" 
                        alt="Seik Kuu" 
                        className="h-10 w-auto object-contain"
                    />
                ) : (
                    <img 
                        src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/logo/IDEAMYA.svg" 
                        alt="Seik Kuu" 
                        className="h-10 w-auto object-contain"
                    />
                )}
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-loose max-w-sm">
              {t('footer-p')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2 inline-block">Explore</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick('about')} className="text-slate-500 hover:text-cyan-400 text-xs uppercase font-bold transition-colors">{t('nav-history')}</button></li>
              <li><Link to="/tech" className="text-slate-500 hover:text-cyan-400 text-xs uppercase font-bold transition-colors">{t('nav-tech')}</Link></li>
              <li><button onClick={() => handleNavClick('work')} className="text-slate-500 hover:text-cyan-400 text-xs uppercase font-bold transition-colors">{t('nav-work')}</button></li>
              <li><Link to="/ai-lab" className="text-slate-500 hover:text-orange-400 text-xs uppercase font-bold transition-colors">{t('nav-ai')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2 inline-block">{t('nav-contact')}</h4>
            <div className="space-y-4">
              {/* Email Link */}
              <a href="mailto:seikkuu.tech@gmail.com" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <img src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/icon/mail%20.svg" alt="Email" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Email</p>
                  <p className="text-xs text-slate-300 font-mono group-hover:text-cyan-400 transition-colors">seikkuu.tech@gmail.com</p>
                </div>
              </a>
              
              {/* Telegram Link */}
              <a href="https://t.me/seikkuutech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                   <img src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/icon/tele.svg" alt="Telegram" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Telegram</p>
                  <p className="text-xs text-slate-300 font-mono group-hover:text-orange-400 transition-colors">t.me/seikkuutech</p>
                </div>
              </a>
              
              {/* Facebook Link */}
              <a href="https://www.facebook.com/profile.php?id=61586989756894" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                   <img src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/icon/FB%20.svg" alt="Facebook" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Facebook</p>
                  <p className="text-xs text-slate-300 font-mono group-hover:text-blue-400 transition-colors">Seik Kuu Project</p>
                </div>
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-slate-600 font-black uppercase tracking-[0.2em]">
            © 2026 Seik Kuu Project.
          </p>
          <div className="flex gap-6">
            <span className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">Digital Resilience</span>
            <span className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">Maker Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
