import React from 'react';

interface ContactProps {
  t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20 text-center">
      <div className="glass-panel p-8 md:p-16 rounded-[2.5rem] border border-white/10 space-y-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide leading-normal relative z-10">
          {t('nav-contact')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="space-y-3 p-6 rounded-3xl hover:bg-white/5 transition-all shadow-lg border border-transparent hover:border-white/10">
            <div className="text-4xl mb-4">📧</div>
            <p className="text-lg font-bold text-slate-300">Email</p>
            <p className="text-cyan-400 font-black text-sm break-all">contact@seikkuu.org</p>
          </div>
          <div className="space-y-3 p-6 rounded-3xl hover:bg-white/5 transition-all shadow-lg border border-transparent hover:border-white/10">
            <div className="text-4xl mb-4">📱</div>
            <p className="text-lg font-bold text-slate-300">Telegram</p>
            <p className="text-orange-400 font-black text-sm">@seikkuu_project</p>
          </div>
          <div className="space-y-3 p-6 rounded-3xl hover:bg-white/5 transition-all shadow-lg border border-transparent hover:border-white/10">
            <div className="text-4xl mb-4">🌐</div>
            <p className="text-lg font-bold text-slate-300">Facebook</p>
            <p className="text-white font-black text-sm">Seik Kuu Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;