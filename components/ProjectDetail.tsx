import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { showcaseData } from '../constants';
import { Language } from '../types';

interface ProjectDetailProps {
  t: (key: string) => string;
  lang: Language;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ t, lang }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find project
  const project = showcaseData.find(p => p.id === Number(id));

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle missing project
  useEffect(() => {
    if (!project) {
        navigate('/showcase');
    }
  }, [project, navigate]);

  if (!project) {
    return null; // Return null while navigating to avoid flash of content or crash
  }

  const title = lang === 'my' ? project.myTitle : project.enTitle;
  const description = lang === 'my' ? project.myFull : project.enFull;
  // Safety fallback for arrays
  const materials = (lang === 'my' ? project.myMaterials : project.enMaterials) || [];
  const steps = (lang === 'my' ? project.mySteps : project.enSteps) || [];
  const outcome = lang === 'my' ? project.myOutcome : project.enOutcome;

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link to="/showcase" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-8 uppercase text-xs font-bold tracking-widest">
            <span>←</span> {t('proj-back')}
        </Link>

        {/* Hero Header for Project */}
        <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-black tracking-widest uppercase">
                    <span>PROJECT ID: #{project.id.toString().padStart(3, '0')}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tech-gradient">
                    {title}
                </h1>
                <p className="text-slate-300 text-lg md:text-xl leading-[2.0] border-l-4 border-cyan-500 pl-6">
                    {description}
                </p>
                
                {/* Creator Badge */}
                <div className="flex items-center gap-4 mt-6 bg-slate-900/50 p-4 rounded-2xl border border-white/10 w-fit">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl shadow-lg">
                        👤
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest">{t('proj-student')}</div>
                        <div className="text-white font-bold text-lg leading-none mt-1">{project.studentName} <span className="text-slate-500 text-sm font-normal">({project.studentAge} Yrs)</span></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-800/50 rounded-[3rem] flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                    <div className="absolute inset-0 bg-grid opacity-20 rounded-[3rem]"></div>
                    <div className="text-9xl animate-float filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        {project.emoji}
                    </div>
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-[3rem] animate-[spin_20s_linear_infinite]"></div>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column: Materials */}
            <div className="lg:col-span-2">
                <div className="glass-panel p-8 rounded-3xl border-t-4 border-cyan-500 h-full">
                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-2">
                        <span>📦</span> {t('proj-materials')}
                    </h3>
                    <ul className="space-y-4">
                        {materials.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm p-3 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                                <div className="w-5 h-5 rounded-full border border-cyan-500/50 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Column: Steps & Outcome */}
            <div className="lg:col-span-3 space-y-8">
                {/* Steps */}
                <div className="glass-panel p-8 rounded-3xl border-t-4 border-orange-500">
                    <h3 className="text-xl font-bold text-white uppercase mb-8 flex items-center gap-2">
                        <span>🛠️</span> {t('proj-steps')}
                    </h3>
                    <div className="relative space-y-8 pl-4">
                        {/* Timeline Line */}
                        <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
                        
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border-2 border-orange-500 flex items-center justify-center text-orange-400 font-black text-lg shadow-[0_0_15px_rgba(251,146,60,0.3)] z-10">
                                    {idx + 1}
                                </div>
                                <div className="pt-2">
                                    <p className="text-slate-200 leading-relaxed text-base">{step}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outcome */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl">🎓</div>
                    <h3 className="text-lg font-bold text-green-400 uppercase mb-4 tracking-widest">{t('proj-outcome')}</h3>
                    <p className="text-white text-lg font-medium leading-[1.8]">
                        "{outcome}"
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;