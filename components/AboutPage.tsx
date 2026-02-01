
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  t: (key: string) => string;
}

const auImages = [
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/Picture/AU1.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/Picture/AU2.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/Picture/AU3.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/Picture/AU4.jpg",
  "https://raw.githubusercontent.com/Khunnaingpyaehtun/Seik-Kuu/main/images/Picture/AU5.jpg"
];

const AboutPage: React.FC<AboutPageProps> = ({ t }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 relative">
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-12 uppercase text-xs font-bold tracking-widest">
            <span>←</span> {t('proj-back')}
        </Link>

        <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tech-gradient">
                {t('about-h2')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto italic">
                {t('hero-p')}
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Full Text */}
            <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl space-y-8 order-2 lg:order-1">
                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    {t('about-full').split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="leading-loose mb-6 text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* Right: Images */}
            <div className="order-1 lg:order-2 sticky top-24">
                <div className="relative aspect-[4/5] md:aspect-square bg-slate-950/60 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl group">
                    <img
                        src={auImages[currentImg]}
                        alt="Seik Kuu Activity"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    />
                     {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {/* Navigation */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {auImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImg(idx)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${
                            idx === currentImg ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                        />
                        ))}
                    </div>
                </div>
                <div className="mt-8 text-center">
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

export default AboutPage;
