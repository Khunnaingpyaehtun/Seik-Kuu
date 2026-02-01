
import React, { useState, useEffect, useRef } from 'react';
import { getReadyChatResponse, speakText } from '../services/geminiService';
import { Language } from '../types';

interface ReadyAgentProps {
    lang: Language;
}

const ReadyAgent: React.FC<ReadyAgentProps> = ({ lang }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: lang === 'my' ? 'မင်္ဂလာပါ! ကျွန်တော် Ready ပါ။ Seik Kuu Website အကြောင်း ဘာတွေသိချင်လဲခင်ဗျာ။ ✨' : 'Hello! I am Ready. What would you like to know about Seik Kuu? ✨' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [mood, setMood] = useState<'neutral' | 'thinking' | 'happy' | 'angry'>('neutral');
    
    const chatEndRef = useRef<HTMLDivElement>(null);
    const mascotGif = "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/EYE.gif";
    const logoIcon = "https://raw.githubusercontent.com/Khunnaingpyaehtun/Tickets/main/icno.png";

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const text = input.trim();
        setMessages(prev => [...prev, { role: 'user', text }]);
        setInput('');
        setIsLoading(true);
        setMood('thinking');

        const result = await getReadyChatResponse(text, lang);
        setMessages(prev => [...prev, { role: 'assistant', text: result }]);
        setIsLoading(false);
        setMood('happy');
        setTimeout(() => setMood('neutral'), 3000);
    };

    const handleSpeak = async (text: string) => {
        if (isSpeaking) return;
        setIsSpeaking(true);
        setMood('happy');
        await speakText(text);
        setIsSpeaking(false);
        setMood('neutral');
    };

    return (
        <div className="agent-container">
            {isOpen && (
                <div className="glass-panel w-[320px] sm:w-[380px] h-[480px] rounded-[2rem] flex flex-col mb-4 bubble-tail relative animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="bg-cyan-600 p-4 text-slate-950 flex justify-between items-center rounded-t-[2rem]">
                        <div className="flex items-center gap-2">
                            <div className="bg-slate-950/20 p-1 rounded-lg flex items-center justify-center">
                                <img src={logoIcon} alt="Ready Icon" className="w-5 h-5 object-contain" />
                            </div>
                            <div>
                                <h2 className="font-black text-sm uppercase tracking-widest leading-none">Ready</h2>
                                <p className="text-[8px] font-bold uppercase tracking-widest opacity-70 mt-1">Always Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-2 rounded-xl transition-all">✕</button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/30 custom-scrollbar">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`relative max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                                    m.role === 'user' ? 'bg-cyan-600 text-slate-950 rounded-br-none font-bold' : 'bg-slate-800 text-slate-200 border border-white/5 rounded-bl-none'
                                }`}>
                                    {m.text}
                                    {m.role === 'assistant' && (
                                        <button 
                                            onClick={() => handleSpeak(m.text)} 
                                            className="absolute -top-2 -right-6 p-1 bg-white text-cyan-600 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity"
                                        >
                                            🔊
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-1 p-2">
                                <div className="loader"></div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 bg-slate-900/80 border-t border-white/5 flex gap-2 rounded-b-[2rem]">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            placeholder="Ask Ready anything..." 
                            className="flex-1 bg-slate-800 border-none rounded-xl px-4 py-2 text-xs text-white focus:ring-1 focus:ring-cyan-500 outline-none"
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-cyan-600 text-slate-950 p-2 rounded-xl hover:bg-cyan-500 transition-all shadow-lg disabled:opacity-30">
                            ➤
                        </button>
                    </form>
                </div>
            )}

            {/* Mascot Button */}
            <div className="relative group">
                {!isOpen && (
                    <div 
                        className="absolute -top-12 right-0 bg-cyan-600 text-slate-950 px-4 py-1.5 rounded-full text-[10px] font-black shadow-2xl animate-bounce cursor-pointer uppercase tracking-widest"
                        onClick={() => setIsOpen(true)}
                    >
                        Ready
                    </div>
                )}
                <div 
                    className={`w-20 h-20 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 ${mood === 'thinking' ? 'animate-pulse' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src={mascotGif} alt="Ready" className="w-full h-full object-contain filter drop-shadow-xl" />
                </div>
            </div>
        </div>
    );
};

export default ReadyAgent;
