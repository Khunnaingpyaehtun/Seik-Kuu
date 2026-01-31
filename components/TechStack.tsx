import React, { useState, useEffect } from 'react';

interface TechStackProps {
  t: (key: string) => string;
}

const TechStack: React.FC<TechStackProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'sbt' | 'zk'>('sbt');

  // SBT State
  const [name, setName] = useState('');
  const [course, setCourse] = useState('Arduino Masterclass');
  const [mintStatus, setMintStatus] = useState<'idle' | 'minting' | 'success'>('idle');
  const [txHash, setTxHash] = useState('');

  // ZK State
  const [zkStep, setZkStep] = useState<'idle' | 'generating' | 'generated' | 'verifying' | 'verified'>('idle');
  const [showLocation, setShowLocation] = useState(false);

  const handleMint = () => {
    if (!name) return;
    setMintStatus('minting');
    setTimeout(() => {
        setTxHash('0x' + Array.from({length: 40}, () => Math.floor(Math.random() * 16).toString(16)).join(''));
        setMintStatus('success');
    }, 2500);
  };

  const handleZkVerify = () => {
    if(zkStep === 'idle') {
        setZkStep('generating');
        setTimeout(() => setZkStep('generated'), 2000);
    } else if (zkStep === 'generated') {
        setZkStep('verifying');
        setTimeout(() => setZkStep('verified'), 2000);
    }
  };

  const resetZk = () => setZkStep('idle');

  return (
    <section className="container mx-auto px-4 md:px-6 py-20 relative">
      <div className="text-center mb-12 space-y-4">
        {/* Changed font-black to font-bold */}
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-[1.8]">
            {t('tech-h2')}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic leading-[2.2]">
            {t('tech-p')}
        </p>
      </div>

      <div className="glass-panel max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
        {/* Tab Header */}
        <div className="flex border-b border-white/10 bg-slate-900/50">
            <button 
                onClick={() => setActiveTab('sbt')}
                className={`flex-1 py-4 md:py-6 font-bold uppercase text-xs md:text-sm tracking-widest transition-colors ${activeTab === 'sbt' ? 'bg-cyan-500/10 text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
                {t('tech-tab-sbt')}
            </button>
            <button 
                onClick={() => setActiveTab('zk')}
                className={`flex-1 py-4 md:py-6 font-bold uppercase text-xs md:text-sm tracking-widest transition-colors ${activeTab === 'zk' ? 'bg-orange-500/10 text-orange-400 border-b-2 border-orange-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
                {t('tech-tab-zk')}
            </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-12 min-h-[450px] relative">
            
            {/* SBT SECTION */}
            {activeTab === 'sbt' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white uppercase leading-[1.8]">{t('sbt-title')}</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t('sbt-input-name')}</label>
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Mg Mg / Ma Ma"
                                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t('sbt-input-course')}</label>
                                <select 
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
                                >
                                    <option>Arduino Masterclass</option>
                                    <option>Python for Robotics</option>
                                    <option>3D Design Basic</option>
                                </select>
                            </div>
                        </div>
                        <button 
                            onClick={handleMint}
                            disabled={mintStatus !== 'idle' || !name}
                            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${mintStatus === 'idle' ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
                        >
                            {mintStatus === 'minting' ? t('sbt-processing') : mintStatus === 'success' ? 'MINTED' : t('sbt-btn')}
                        </button>
                        {mintStatus === 'success' && (
                            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                                <p className="text-cyan-400 text-sm font-bold mb-1">✅ {t('sbt-success')}</p>
                                <p className="text-[10px] text-slate-500 break-all font-mono">Hash: {txHash}</p>
                            </div>
                        )}
                    </div>

                    {/* Visual Card */}
                    <div className="flex justify-center perspective-1000">
                        <div className={`relative w-72 h-96 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col p-6 transition-transform duration-700 ${mintStatus === 'minting' ? 'animate-pulse' : ''} ${mintStatus === 'success' ? 'rotate-y-0 scale-105' : ''}`}>
                            <div className="absolute top-4 right-4 text-4xl opacity-20">🏅</div>
                            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl mb-6">🎓</div>
                            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Soulbound Credential</h4>
                            <h2 className="text-2xl font-bold text-white leading-tight mb-4">{course}</h2>
                            <div className="mt-auto space-y-2">
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Awarded To</div>
                                <div className="text-cyan-400 font-bold text-lg">{name || "Student Name"}</div>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-transparent mt-6"></div>
                            <div className="flex justify-between items-end mt-2">
                                <span className="text-[9px] text-slate-600 font-mono">{new Date().toLocaleDateString()}</span>
                                <span className="text-[9px] text-slate-600 font-mono">ID: #{Math.floor(Math.random() * 9999)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ZK SECTION */}
            {activeTab === 'zk' && (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white uppercase leading-[1.8]">{t('zk-title')}</h3>
                        <p className="text-slate-400 text-sm leading-[2.2]">{t('zk-desc')}</p>
                        
                        <div className="bg-slate-900/50 rounded-xl p-4 space-y-3 border border-white/5">
                            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border-l-4 border-green-500">
                                <span className="text-sm text-slate-300 font-bold">{t('zk-skill')}</span>
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded uppercase font-black">{t('zk-reveal')}</span>
                            </div>
                            <div className={`flex justify-between items-center p-3 bg-white/5 rounded-lg border-l-4 transition-colors ${showLocation ? 'border-red-500' : 'border-slate-500'}`}>
                                <span className="text-sm text-slate-300 font-bold">{t('zk-loc')}</span>
                                <button 
                                    onClick={() => setShowLocation(!showLocation)} 
                                    className={`text-xs px-2 py-1 rounded uppercase font-bold transition ${showLocation ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-400'}`}
                                >
                                    {showLocation ? t('zk-reveal') : t('zk-hide')}
                                </button>
                            </div>
                        </div>

                        {zkStep === 'verified' ? (
                            <div className="space-y-3">
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                    <p className="text-green-400 text-sm font-bold">{t('zk-verified')}</p>
                                </div>
                                <button onClick={resetZk} className="text-xs text-slate-500 underline hover:text-white">Reset Demo</button>
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <button 
                                    onClick={handleZkVerify}
                                    disabled={zkStep !== 'idle' && zkStep !== 'generated'}
                                    className="flex-1 py-4 bg-orange-600 hover:bg-orange-500 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20"
                                >
                                    {zkStep === 'idle' ? t('zk-btn') : zkStep === 'generating' ? 'Generating...' : zkStep === 'generated' ? t('zk-verify-btn') : 'Verifying...'}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* ZK Visual / Terminal */}
                    <div className="bg-slate-950 rounded-2xl border border-orange-500/30 p-6 font-mono text-xs md:text-sm h-[350px] overflow-hidden relative shadow-[0_0_30px_rgba(251,146,60,0.1)]">
                        <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            <span className="ml-auto text-[10px] text-slate-600">zk-SNARKs-CLI v1.0</span>
                        </div>
                        <div className="space-y-2 text-slate-400">
                            <p className="text-orange-400">$ initiate_proof --privacy-mode=strict</p>
                            {zkStep !== 'idle' && (
                                <>
                                    <p>> Analyzing inputs...</p>
                                    <p>> Hashing sensitive data (Location)... [HIDDEN]</p>
                                    <p>> Generating Mathematical Proof...</p>
                                    <p className="text-slate-600 truncate">Proof: 0x9a8b...7c2d (Valid)</p>
                                </>
                            )}
                            {zkStep === 'verifying' || zkStep === 'verified' ? (
                                <>
                                    <p className="text-blue-400">> Submitting to Verifier Smart Contract...</p>
                                    <p>> Verifying Proof Integrity...</p>
                                </>
                            ) : null}
                            {zkStep === 'verified' && (
                                <p className="text-green-400 font-bold mt-4">
                                    >> SUCCESS: CLAIM VERIFIED.<br/>
                                    >> DATA LEAK: 0%.<br/>
                                    >> STATUS: TRUSTED.
                                </p>
                            )}
                            {(zkStep === 'generating' || zkStep === 'verifying') && (
                                <span className="inline-block w-2 h-4 bg-orange-500 animate-pulse"></span>
                            )}
                        </div>
                        <div className="terminal-overlay absolute inset-0 opacity-10"></div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};
export default TechStack;