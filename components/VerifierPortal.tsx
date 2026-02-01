
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface VerifierPortalProps {
  t: (key: string) => string;
  lang: Language;
}

const VerifierPortal: React.FC<VerifierPortalProps> = ({ t, lang }) => {
  const [proofInput, setProofInput] = useState('');
  const [zkStep, setZkStep] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');

  const handleVerifyProof = () => {
    if (!proofInput.trim()) return;
    setZkStep('verifying');
    setTimeout(() => {
        // Mock verification logic
        if (proofInput.startsWith('0x')) {
            setZkStep('verified');
        } else {
            setZkStep('failed');
        }
    }, 2500);
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 relative flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Link to="/tech" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-12 uppercase text-xs font-bold tracking-widest">
            <span>←</span> {t('proj-back')}
        </Link>

        <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-2">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Secure Verification Portal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tech-gradient">
                {t('zk-verify-h1')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                {t('zk-verify-p')}
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Input ZK-Proof Hash</label>
                        <textarea 
                            value={proofInput}
                            onChange={(e) => setProofInput(e.target.value)}
                            rows={3}
                            placeholder="Paste 0x... proof hash here" 
                            className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-xs focus:border-indigo-500 outline-none transition-all resize-none leading-relaxed"
                        />
                    </div>
                    
                    <button 
                        onClick={handleVerifyProof} 
                        disabled={zkStep === 'verifying' || !proofInput} 
                        className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl shadow-indigo-500/20 transition-all active:scale-95"
                    >
                        {zkStep === 'verifying' ? 'Verifying on Chain...' : t('zk-verify-btn')}
                    </button>
                </div>

                {zkStep === 'verified' && (
                    <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl animate-in zoom-in-95 duration-500 text-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-xl mx-auto mb-4">✅</div>
                        <p className="text-green-400 font-black text-sm uppercase tracking-wide leading-relaxed">
                            {t('zk-verified')}
                        </p>
                        <div className="mt-4 pt-4 border-t border-green-500/10 grid grid-cols-2 gap-2 text-[10px] font-bold">
                            <div className="text-slate-500 uppercase">{t('zk-skill')}:</div>
                            <div className="text-white uppercase">Expert / Level 5</div>
                            <div className="text-slate-500 uppercase">{t('zk-loc')}:</div>
                            <div className="text-slate-400 uppercase">[PROTECTED]</div>
                        </div>
                    </div>
                )}

                {zkStep === 'failed' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                        <p className="text-red-400 font-black text-xs uppercase tracking-widest">❌ Invalid or Expired Proof</p>
                    </div>
                )}
            </div>

            <div className="h-full min-h-[400px] bg-slate-950 rounded-[2.5rem] border border-white/5 p-8 relative overflow-hidden shadow-inner font-mono text-[10px] leading-relaxed flex flex-col">
                <div className="absolute inset-0 terminal-overlay opacity-10"></div>
                <div className="relative z-10 text-slate-500 flex-grow">
                    <p className="text-indigo-500 mb-2">AUTH_SYSTEM: PROOF_VERIFIER_v1.0</p>
                    <p>&gt; Initializing connection to decentralized relay node...</p>
                    <p>&gt; Target: Blockchain Mainnet Proof Verifier (Solidity Smart Contract)</p>
                    {zkStep !== 'idle' && (
                        <>
                            <p className="mt-4">&gt; Extracting public signals from hash...</p>
                            <p className="text-slate-400">&gt; Verifying Pairing: e(pi1, pi2) = e(pi3, pi4)...</p>
                        </>
                    )}
                    {zkStep === 'verifying' && <p className="text-indigo-400 animate-pulse mt-4">&gt; CRYPTOGRAPHIC_VALIDATION_IN_PROGRESS...</p>}
                    {zkStep === 'verified' && <p className="text-green-500 font-black mt-6 text-xs">&gt;&gt; ACCESS_GRANTED: PROOF_AUTHENTICATED_OK</p>}
                    <span className="inline-block w-2 h-4 bg-slate-700 animate-pulse ml-1 mt-2"></span>
                </div>
                <div className="mt-auto relative z-10 text-[9px] text-slate-700 border-t border-white/5 pt-4">
                    NOTE: This portal utilizes Zero-Knowledge Snarks to validate identity without revealing private displacement status.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VerifierPortal;
