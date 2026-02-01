
import React, { useState } from 'react';

interface TechStackProps {
  t: (key: string) => string;
}

const TechStack: React.FC<TechStackProps> = ({ t }) => {
  const [activeHub, setActiveHub] = useState<'issue' | 'verify'>('issue');

  // SBT Issue State
  const [issueStep, setIssueStep] = useState<'info' | 'code' | 'authorized' | 'minting' | 'success'>('info');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('Arduino Masterclass');
  const [accessCode, setAccessCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const [txHash, setTxHash] = useState('');

  const VALID_CODE = "SK-HERO-2025";

  const handleVerifyCode = () => {
    if (accessCode.toUpperCase() === VALID_CODE) {
        setIssueStep('authorized');
        setCodeError(false);
    } else {
        setCodeError(true);
    }
  };

  const handleMint = () => {
    setIssueStep('minting');
    setTimeout(() => {
        setTxHash('0x' + Array.from({length: 40}, () => Math.floor(Math.random() * 16).toString(16)).join(''));
        setIssueStep('success');
    }, 2500);
  };

  // ZK Verify Hub State
  const [zkRole, setZkRole] = useState<'student' | 'institution' | null>(null);
  const [zkStep, setZkStep] = useState<'idle' | 'processing' | 'result' | 'failed'>('idle');
  const [proofInput, setProofInput] = useState('');

  const handleAction = () => {
    if (zkRole === 'student') {
        setZkStep('processing');
        setTimeout(() => setZkStep('result'), 2000);
    } else {
        if (!proofInput.trim()) return;
        setZkStep('processing');
        setTimeout(() => {
            if (proofInput.startsWith('0x')) setZkStep('result');
            else setZkStep('failed');
        }, 2000);
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-20 relative min-h-[85vh]">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tech-gradient">
            {t('tech-h2')}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic leading-relaxed text-lg">
            {t('tech-p')}
        </p>
      </div>

      <div className="glass-panel max-w-6xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
        {/* Main Tab Switcher */}
        <div className="flex border-b border-white/5 bg-slate-900/40 p-2 gap-2">
            <button 
                onClick={() => setActiveHub('issue')} 
                className={`flex-1 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 ${activeHub === 'issue' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            >
                <span className="text-lg">📜</span> {t('tech-tab-issue')}
            </button>
            <button 
                onClick={() => setActiveHub('verify')} 
                className={`flex-1 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 ${activeHub === 'verify' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
            >
                <span className="text-lg">🛡️</span> {t('tech-tab-verify')}
            </button>
        </div>

        <div className="p-8 md:p-16 min-h-[550px] flex flex-col justify-center">
            {/* ISSUE HUB */}
            {activeHub === 'issue' && (
                <div className="grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-black text-white uppercase">{t('sbt-title')}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{t('sbt-auth-msg')}</p>
                        </div>
                        
                        {issueStep === 'info' && (
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{t('sbt-input-name')}</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-500 transition-all outline-none" placeholder="Enter Full Name" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{t('sbt-input-course')}</label>
                                        <select value={course} onChange={(e) => setCourse(e.target.value)} className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyan-500 transition-all outline-none">
                                            <option>Arduino Masterclass</option>
                                            <option>Python for Robotics</option>
                                            <option>3D Design Basic</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={() => setIssueStep('code')} disabled={!name} className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-black rounded-2xl uppercase tracking-widest transition-all shadow-xl shadow-cyan-500/20">
                                    Next Phase →
                                </button>
                            </div>
                        )}

                        {issueStep === 'code' && (
                            <div className="space-y-8">
                                <div className="p-8 bg-slate-950/50 rounded-3xl border border-white/10 text-center">
                                    <label className="block text-xs font-black text-cyan-400 uppercase tracking-[0.3em] mb-6">{t('sbt-code-label')}</label>
                                    <input 
                                        type="text" 
                                        value={accessCode} 
                                        onChange={(e) => setAccessCode(e.target.value)}
                                        className={`w-full bg-slate-900 border ${codeError ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-5 text-white text-center font-mono text-2xl tracking-[0.5em] focus:outline-none transition-all uppercase`}
                                        placeholder="••••••••"
                                    />
                                    {codeError && <p className="text-red-500 text-[10px] font-black uppercase mt-4">{t('sbt-invalid-code')}</p>}
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setIssueStep('info')} className="flex-1 py-5 bg-slate-800 text-slate-400 font-black rounded-2xl uppercase text-xs hover:text-white transition-colors">Back</button>
                                    <button onClick={handleVerifyCode} className="flex-[2] py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl uppercase tracking-widest transition-all">Unlock Minter</button>
                                </div>
                            </div>
                        )}

                        {issueStep === 'authorized' && (
                            <div className="space-y-8 text-center bg-cyan-500/5 p-10 rounded-[2.5rem] border border-cyan-500/20">
                                <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center text-4xl mx-auto shadow-[0_0_40px_rgba(34,211,238,0.2)]">🔑</div>
                                <h4 className="text-2xl font-black text-white uppercase tracking-wide">Validation Successful</h4>
                                <button onClick={handleMint} className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl uppercase tracking-widest transition-all shadow-2xl shadow-cyan-500/40">
                                    {t('sbt-btn')}
                                </button>
                            </div>
                        )}

                        {issueStep === 'minting' && (
                             <div className="flex flex-col items-center justify-center space-y-8 p-20">
                                <div className="loader !w-16 !h-16 border-[4px]"></div>
                                <p className="text-cyan-400 font-black uppercase tracking-[0.5em] animate-pulse">{t('sbt-processing')}</p>
                             </div>
                        )}

                        {issueStep === 'success' && (
                            <div className="p-10 bg-green-500/10 border border-green-500/20 rounded-[2.5rem] text-center space-y-6">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-3xl mx-auto">✅</div>
                                <p className="text-green-400 text-lg font-black uppercase tracking-wide">{t('sbt-success')}</p>
                                <p className="text-[10px] text-slate-500 font-mono break-all opacity-70 p-4 bg-black/40 rounded-xl">TX: {txHash}</p>
                                <button onClick={() => {setIssueStep('info'); setAccessCode('');}} className="text-xs text-slate-400 hover:text-white uppercase font-black underline underline-offset-4">Issue Another Certificate</button>
                            </div>
                        )}
                    </div>

                    {/* Preview Card */}
                    <div className="flex justify-center perspective-1000">
                        <div className={`relative w-80 h-[480px] rounded-[2.5rem] bg-slate-950 border border-white/10 p-10 flex flex-col transition-all duration-1000 transform-style-3d ${issueStep === 'success' ? 'scale-105 rotate-y-12 shadow-[0_30px_60px_rgba(34,211,238,0.15)] border-cyan-500/40' : 'opacity-30 grayscale rotate-y-[-10deg]'}`}>
                            <div className="absolute top-8 right-8 text-5xl opacity-10">🏅</div>
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-12 shadow-inner border border-white/10">🎓</div>
                            <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest mb-2">Soulbound Asset</p>
                            <h4 className="text-2xl font-black text-white leading-tight mb-8">{course}</h4>
                            <div className="mt-auto">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Authentic Graduate</p>
                                <p className="text-2xl font-black text-cyan-400 tracking-tight">{name || "Student Name"}</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-[9px] font-mono text-slate-600">ID: #SK{Math.floor(Math.random()*9000)+1000}</span>
                                <div className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-[8px] font-black uppercase">Verified</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* VERIFY HUB */}
            {activeHub === 'verify' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {!zkRole ? (
                        <div className="max-w-4xl mx-auto space-y-12 text-center">
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-white uppercase">{t('zk-title')}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">{t('zk-desc')}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <button onClick={() => setZkRole('student')} className="p-12 glass-panel rounded-[2.5rem] border-t-8 border-orange-500 hover:bg-orange-500/10 transition-all group text-left">
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎓</div>
                                    <h4 className="text-2xl font-black text-white uppercase mb-2">{t('zk-role-student')}</h4>
                                    <p className="text-slate-500 text-sm">Generate a privacy-masked proof of your skills.</p>
                                </button>
                                <button onClick={() => setZkRole('institution')} className="p-12 glass-panel rounded-[2.5rem] border-t-8 border-indigo-500 hover:bg-indigo-500/10 transition-all group text-left">
                                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏫</div>
                                    <h4 className="text-2xl font-black text-white uppercase mb-2">{t('zk-role-institution')}</h4>
                                    <p className="text-slate-500 text-sm">Verify an existing credential hash from a student.</p>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <button onClick={() => {setZkRole(null); setZkStep('idle');}} className="text-xs font-black text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2">← Back to Selection</button>
                                
                                <div className="space-y-2">
                                    <h4 className={`text-2xl font-black uppercase ${zkRole === 'student' ? 'text-orange-500' : 'text-indigo-500'}`}>
                                        {zkRole === 'student' ? 'Student Dashboard' : 'Institutional Validator'}
                                    </h4>
                                    <p className="text-slate-400 text-sm italic">
                                        {zkRole === 'student' ? 'Your identity remains hidden; only your skills are cryptographicly proven.' : 'Paste the hash provided by the student to confirm their skills on-chain.'}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {zkRole === 'institution' && (
                                        <textarea 
                                            value={proofInput}
                                            onChange={(e) => setProofInput(e.target.value)}
                                            rows={3}
                                            placeholder={t('zk-placeholder')} 
                                            className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 text-white font-mono text-xs focus:border-indigo-500 outline-none transition-all resize-none shadow-inner"
                                        />
                                    )}

                                    {zkRole === 'student' && (
                                         <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 space-y-4">
                                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-green-500">
                                                <span className="text-xs font-bold text-slate-300">Robotics Level: Expert</span>
                                                <span className="text-[9px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase font-black tracking-widest">Public</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-red-500">
                                                <span className="text-xs font-bold text-slate-300">Location: [MASKED]</span>
                                                <span className="text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded uppercase font-black tracking-widest">Private</span>
                                            </div>
                                         </div>
                                    )}

                                    <button 
                                        onClick={handleAction} 
                                        disabled={zkStep === 'processing' || (zkRole === 'institution' && !proofInput)} 
                                        className={`w-full py-5 font-black rounded-2xl uppercase tracking-widest transition-all shadow-xl active:scale-95 ${zkRole === 'student' ? 'bg-orange-600 hover:bg-orange-500 text-slate-950' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}`}
                                    >
                                        {zkStep === 'processing' ? 'Processing Circuit...' : (zkRole === 'student' ? t('zk-btn-generate') : t('zk-btn-verify'))}
                                    </button>
                                </div>

                                {zkStep === 'result' && (
                                    <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-[2rem] animate-in zoom-in-95 duration-500">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-xl">✅</div>
                                            <p className="text-green-400 font-black text-sm uppercase tracking-wide">{t('zk-verified-msg')}</p>
                                        </div>
                                        {zkRole === 'student' && (
                                            <div className="p-4 bg-black/40 rounded-xl">
                                                <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Proof Hash (Share this with schools):</p>
                                                <p className="text-[10px] font-mono text-orange-400 select-all break-all">0x777zk_proof_auth_2024_resilience_verified</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {zkStep === 'failed' && (
                                    <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                                        <p className="text-red-400 font-black text-xs uppercase tracking-widest">❌ Validation Failed: Checksum Mismatch</p>
                                    </div>
                                )}
                            </div>

                            <div className="h-[450px] bg-slate-950 rounded-[2.5rem] border border-white/5 p-8 relative overflow-hidden shadow-inner font-mono text-[11px] leading-relaxed">
                                <div className="absolute inset-0 terminal-overlay opacity-10"></div>
                                <div className="relative z-10 text-slate-500">
                                    <p className={`${zkRole === 'student' ? 'text-orange-500' : 'text-indigo-500'} mb-2`}>PROTOCOL_v3.1_SNARK_VM</p>
                                    <p>&gt; Connection established with SeikKuu-Mainnet...</p>
                                    <p>&gt; Initializing {zkRole?.toUpperCase()} parameters...</p>
                                    {zkStep !== 'idle' && (
                                        <>
                                            <p>&gt; Witness generation started...</p>
                                            <p className="text-slate-400">&gt; Constraint count: 104,821</p>
                                            <p className="text-slate-400">&gt; Generating elliptic curve pairing proofs...</p>
                                        </>
                                    )}
                                    {zkStep === 'processing' && <p className="animate-pulse mt-4 text-white">&gt; COMPUTING_CRYPTOGRAPHIC_PROOF...</p>}
                                    {zkStep === 'result' && <p className="text-green-500 font-black mt-6">&gt;&gt; SUCCESS: DATA_AUTHENTICATED_OK</p>}
                                    {zkStep === 'failed' && <p className="text-red-500 font-black mt-6">&gt;&gt; ERROR: INVALID_PROOF_SIGNATURE</p>}
                                    <span className="inline-block w-2 h-4 bg-slate-700 animate-pulse ml-1 mt-2"></span>
                                </div>
                                <div className="absolute bottom-6 left-8 right-8 text-[9px] text-slate-700">
                                    Notice: All computations are done locally. Private keys and displacement coordinates are never transmitted.
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
