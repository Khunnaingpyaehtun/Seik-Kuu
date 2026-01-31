import React from 'react';

interface ImpactProps {
  t: (key: string) => string;
}

const Impact: React.FC<ImpactProps> = ({ t }) => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24 text-center">
      <div className="glass-panel p-10 md:p-20 rounded-[3rem] border border-orange-500/20 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative z-10 space-y-12">
            <h2 className="text-xl md:text-2xl font-bold text-orange-400 uppercase tracking-widest mb-6">
            {t('impact-h2')}
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            {/* 
                FIXES:
                1. Reduced font size: lg:text-3xl (was 4xl). This creates more white space relative to line-height.
                2. Leading: leading-[2.6]. Combined with smaller font, this separates lines effectively.
                3. Padding: py-8. Ensures top/bottom lines aren't cut off by the container.
            */}
            <p className="text-base md:text-2xl lg:text-3xl text-white font-bold leading-[2.6] max-w-6xl mx-auto py-8">
            {t('impact-p')}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;