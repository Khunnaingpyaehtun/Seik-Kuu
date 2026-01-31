import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const growthData = [
  { year: '2019', students: 45 },
  { year: '2020', students: 130 },
  { year: '2021', students: 220 },
  { year: '2022', students: 360 },
  { year: '2023', students: 480 },
  { year: '2024', students: 520 },
];

const skillData = [
  { subject: 'Logic', A: 95, fullMark: 100 },
  { subject: 'Circuit', A: 85, fullMark: 100 },
  { subject: 'Build', A: 75, fullMark: 100 },
  { subject: 'Invent', A: 90, fullMark: 100 },
  { subject: 'Team', A: 85, fullMark: 100 },
];

const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="container mx-auto px-4 md:px-6 py-20 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 text-left">
        {/* Growth Chart */}
        <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-30 text-cyan-400 text-6xl">📈</div>
          <h3 className="text-center text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-10 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Innovation Growth
          </h3>
          <div className="w-full h-[250px] max-h-[350px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <defs>
                    <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#64748b" tick={{fontSize: 12, fill: '#64748b'}} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#64748b" tick={{fontSize: 12, fill: '#64748b'}} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '12px', color: '#fff', boxShadow: '0 0 15px rgba(34,211,238,0.1)' }}
                    itemStyle={{ color: '#22d3ee' }}
                />
                <Line type="monotone" dataKey="students" stroke="url(#colorLine)" strokeWidth={4} dot={{r: 4, fill: '#0f172a', strokeWidth: 2}} activeDot={{r: 8, fill: '#22d3ee'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Holographic floor */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Skill Chart */}
        <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 p-6 opacity-30 text-orange-400 text-6xl">🧠</div>
          <h3 className="text-center text-[10px] font-black text-orange-400 uppercase tracking-[0.4em] mb-10 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            Skillset Balance
          </h3>
          <div className="w-full h-[250px] max-h-[350px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid gridType="polygon" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Level" dataKey="A" stroke="#fb923c" strokeWidth={3} fill="url(#radarGradient)" fillOpacity={0.7} />
                <defs>
                    <radialGradient id="radarGradient">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1"/>
                    </radialGradient>
                </defs>
                <Tooltip 
                     contentStyle={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(251,146,60,0.2)', borderRadius: '12px', color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          {/* Holographic floor */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;