
import React, { useState, useEffect } from 'react';

interface AboutProps {
  t: (key: string) => string;
}

const auImages = [
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/AU1.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/AU2.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/AU3.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/AU4.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/AU5.jpg"
];

const About: React.FC<AboutProps> = ({ t }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % auImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>

      {/* Main Story Block */}
      <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[4rem] border-l-8 md:border-l-[12px] border-cyan-500 relative overflow-hidden shadow-2xl mb-12 group">
        
        {/* Subtle Background Art */}
        <div className="absolute -right-20 -top-20 text-[20rem] opacity-[0.03] rotate-12 select-none group-hover:rotate-6 transition-transform duration-1000">🚀</div>

        <div className="grid lg:grid-cols-3 gap-12 items-center text-left relative z-10">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[2.0] uppercase tracking-tight">
              {t('about-h2')}
            </h2>
            <p className="text-slate-300 text-base md:text-lg lg:text-xl leading-[2.5] font-medium border-l border-white/10 pl-6">
              {t('about-p')}
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-slate-950/60 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl group/img">
              {auImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Seik Kuu Activity ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    idx === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                  }`}
                />
              ))}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Navigation Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {auImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      idx === currentImg ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Float Badge */}
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                Our Impact
              </div>
            </div>
            
            <div className="px-4 text-center">
               <p className="text-slate-500 italic text-[10px] leading-[2.0] uppercase tracking-widest">
                {t('about-quote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
