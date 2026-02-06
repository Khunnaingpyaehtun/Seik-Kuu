
import React, { useState, useEffect } from 'react';
import { logger, LogEntry } from '../services/loggerService';
import { Link } from 'react-router-dom';
import { security } from '../services/securityService';

const AdminPanel: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // Dashboard State
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [filter, setFilter] = useState<string>('ALL');

    // Admin Password (Hardcoded for Demo)
    const ADMIN_PASS = "SK-ADMIN";

    useEffect(() => {
        if (isAuthenticated) {
            setLogs(logger.getHistory());
            const interval = setInterval(() => {
                setLogs(logger.getHistory());
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Rate limit checks
        if (!security.checkRateLimit('ADMIN_LOGIN')) {
            setError("Too many attempts. Try again later.");
            return;
        }

        if (password === ADMIN_PASS) {
            setIsAuthenticated(true);
            logger.log('SECURITY', 'ADMIN_ACCESS', 'Admin panel accessed successfully');
        } else {
            setError("Access Denied: Invalid Credentials");
            logger.log('WARN', 'ADMIN_LOGIN_FAIL', 'Failed login attempt to admin panel');
            setPassword('');
        }
    };

    if (!isAuthenticated) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
                <div className="max-w-md w-full glass-panel p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
                    
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h1 className="text-2xl font-black text-white uppercase tracking-wider">Restricted Access</h1>
                        <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">Authorized Personnel Only</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                                placeholder="Enter Security Key"
                                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-center tracking-widest focus:border-red-500 outline-none transition-all placeholder:text-slate-600"
                            />
                        </div>
                        {error && <p className="text-red-500 text-[10px] font-bold text-center uppercase animate-pulse">{error}</p>}
                        
                        <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-red-500/20">
                            Authenticate
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link to="/" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                            ← Return to Safety
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    // Authenticated View
    const filteredLogs = filter === 'ALL' ? logs : logs.filter(l => l.level === filter);

    return (
        <section className="min-h-screen pt-10 pb-20 px-4 md:px-6 bg-slate-950">
            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center mb-10 bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                    <h1 className="text-xl md:text-3xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                        <span className="text-red-500">🛡️</span> Security Admin Console
                    </h1>
                    <div className="flex gap-4 items-center">
                        <span className="text-[10px] text-green-500 font-mono uppercase hidden md:inline-block">● Connection Secure</span>
                        <button onClick={() => setIsAuthenticated(false)} className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border border-red-500/20">
                            Logout
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="glass-panel p-6 rounded-2xl border-l-4 border-blue-500">
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Total Events</p>
                        <p className="text-2xl font-black text-white">{logs.length}</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border-l-4 border-red-500">
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Errors</p>
                        <p className="text-2xl font-black text-red-400">{logs.filter(l => l.level === 'ERROR').length}</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border-l-4 border-yellow-500">
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Security Flags</p>
                        <p className="text-2xl font-black text-yellow-400">{logs.filter(l => l.level === 'SECURITY').length}</p>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border-l-4 border-green-500 cursor-pointer hover:bg-white/5 transition" onClick={() => logger.exportLogs()}>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Action</p>
                        <p className="text-lg font-black text-green-400">⬇ Export Logs</p>
                    </div>
                </div>

                <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
                    <div className="p-4 border-b border-white/10 bg-slate-900/50 flex gap-2 overflow-x-auto">
                        {['ALL', 'INFO', 'WARN', 'ERROR', 'SECURITY'].map(f => (
                            <button 
                                key={f} 
                                onClick={() => setFilter(f)} 
                                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === f ? 'bg-white text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                        <button onClick={() => logger.clearLogs()} className="ml-auto text-[10px] text-red-500 font-bold uppercase hover:text-red-400 whitespace-nowrap px-4">Clear Logs</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                    <th className="p-4">Time</th>
                                    <th className="p-4">Level</th>
                                    <th className="p-4">Action</th>
                                    <th className="p-4">Details</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs font-mono">
                                {filteredLogs.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-slate-500 italic">No logs found.</td>
                                    </tr>
                                ) : (
                                    filteredLogs.map((log) => (
                                        <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4 text-slate-400 whitespace-nowrap">{new Date(log.timestamp).toLocaleTimeString()}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-[9px] font-black ${
                                                    log.level === 'ERROR' ? 'bg-red-500/20 text-red-400' :
                                                    log.level === 'WARN' ? 'bg-orange-500/20 text-orange-400' :
                                                    log.level === 'SECURITY' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-blue-500/20 text-blue-400'
                                                }`}>
                                                    {log.level}
                                                </span>
                                            </td>
                                            <td className="p-4 text-white font-bold">{log.action}</td>
                                            <td className="p-4 text-slate-300 break-all">{log.details}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;
