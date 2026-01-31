import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 px-4 md:px-6 relative overflow-hidden text-left">
      
      {/* Background Spotlights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="space-y-8 md:space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{t('hero-badge')}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[2.2] text-white uppercase py-6 tracking-tight">
            <span className="tech-gradient block mb-2 drop-shadow-lg">{t('hero-h1-1')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 block">{t('hero-h1-2')}</span>
          </h1>
          
          <p className="text-slate-300 max-w-2xl text-base md:text-xl lg:text-2xl leading-[2.5] font-medium border-l-2 border-slate-700 pl-6">
            {t('hero-p')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-8">
            <Link to="/ai-lab" className="group relative bg-orange-500 text-slate-950 font-bold px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(251,146,60,0.4)] hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] transition-all transform hover:-translate-y-1 text-sm uppercase tracking-widest overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10 flex items-center gap-2">
                 {t('btn-ai-mentor')} 🤖
              </span>
            </Link>
            <Link to="/showcase" className="group relative px-10 py-4 rounded-xl bg-slate-900 border border-white/20 text-white font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1 text-sm uppercase tracking-widest overflow-hidden">
               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
               <span className="relative z-10">{t('btn-showcase')}</span>
            </Link>
          </div>
        </div>

        {/* Orbit Animation - Enhanced */}
        <div className="relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] perspective-1000">
          <div className="relative w-64 h-64 sm:w-80 lg:w-96 flex items-center justify-center transform-style-3d">
            
            {/* Core */}
            <div className="w-32 h-32 sm:w-40 lg:w-48 bg-slate-900/80 rounded-full border border-cyan-500/50 flex items-center justify-center floating z-20 shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-20 animate-[pulse-glow_3s_infinite]"></div>
              <img 
                src="https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/head.png" 
                alt="AI Core"
                className="w-[85%] h-[85%] object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-full h-full border border-cyan-500/20 rounded-full opacity-60"></div>
            <div className="absolute w-[140%] h-[140%] border border-orange-500/10 rounded-full opacity-40 border-dashed"></div>

            {/* Orbiting Elements */}
            <div className="absolute w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-2xl border border-cyan-400/50 orbiting shadow-lg z-10">⚙️</div>
            <div className="absolute w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-2xl border border-orange-400/50 orbiting shadow-lg z-10" style={{ animationDelay: '-7s' }}>⚛️</div>
            <div className="absolute w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-2xl border border-purple-400/50 orbiting-reverse z-10">💻</div>
            <div className="absolute w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-2xl border border-green-400/50 orbiting-reverse z-10" style={{ animationDelay: '-10s' }}>🔬</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;