import { motion } from 'motion/react';
import { Trophy, Star, Users, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Rankings() {
  const t20Rankings = [
    'India', 'England', 'Australia', 'New Zealand', 'South Africa', 
    'Pakistan', 'Sri Lanka', 'West Indies', 'Afghanistan', 'Bangladesh'
  ];
  const odiRankings = [
    'India', 'Australia', 'South Africa', 'Pakistan', 'New Zealand', 
    'England', 'Sri Lanka', 'Afghanistan', 'Bangladesh', 'West Indies'
  ];
  const testRankings = [
    'Australia', 'India', 'England', 'South Africa', 'New Zealand', 
    'Sri Lanka', 'Pakistan', 'West Indies', 'Bangladesh', 'Ireland'
  ];

  const rankingCards = [
    { type: 'T20', teams: t20Rankings, color: 'from-purple-500/20 to-purple-600/20' },
    { type: 'ODI', teams: odiRankings, color: 'from-blue-500/20 to-blue-600/20' },
    { type: 'Test', teams: testRankings, color: 'from-orange-500/20 to-orange-600/20' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          ICC <span className="text-white">Rankings</span>
        </h1>
        <p className="text-ink/60 font-medium uppercase tracking-[4px] text-[10px]">Official World Team Standings 2026</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {rankingCards.map((card, idx) => (
          <Link to={`/icc-${card.type.toLowerCase()}-ranking-2026`} key={card.type}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${card.color} border border-card-border rounded-[40px] p-8 relative overflow-hidden shadow-2xl group cursor-pointer hover:border-white/30 transition-all`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <h2 className="text-4xl font-display font-bold text-white">{card.type}</h2>
                  <Trophy className="w-6 h-6 text-white/50" />
                </div>
                <div className="space-y-3">
                  {card.teams.slice(0, 5).map((team, rankIdx) => (
                    <div 
                      key={team} 
                      className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                        team === 'Pakistan' 
                          ? 'bg-pak-green/40 border-white shadow-lg' 
                          : 'bg-white/5 border-white/5 group-hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-bold w-5 ${team === 'Pakistan' ? 'text-white' : 'text-neutral-500'}`}>
                          {rankIdx + 1}
                        </span>
                        <span className={`text-[11px] font-bold uppercase tracking-tight ${team === 'Pakistan' ? 'text-white' : 'text-ink/80'}`}>
                          {team}
                        </span>
                      </div>
                      {team === 'Pakistan' && <Star className="w-3 h-3 text-white fill-white" />}
                    </div>
                  ))}
                  <div className="text-[10px] font-bold text-center pt-2 opacity-40 uppercase tracking-widest group-hover:text-white group-hover:opacity-100 transition-all">
                    View Full Top 10 <ChevronRight className="inline w-3 h-3" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                 <Trophy className="w-64 h-64" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-12">
        <Users className="w-8 h-8 text-white" />
        <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Player Rankings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { title: 'T20', color: 'from-purple-900/40 to-indigo-900/10' },
          { title: 'ODI', color: 'from-blue-900/40 to-cyan-900/10' },
          { title: 'Test', color: 'from-orange-900/40 to-red-900/10' }
        ].map(format => (
          <div key={format.title} className={`bg-gradient-to-br ${format.color} border border-card-border rounded-[32px] p-6 shadow-xl`}>
             <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">{format.title} Standings</h3>
             <div className="space-y-2">
                {[
                  { name: 'Batting', icon: <TrendingUp className="w-3 h-3" />, path: 'batting' },
                  { name: 'Bowling', icon: <TrendingUp className="w-3 h-3" />, path: 'bowling' },
                  { name: 'Allrounder', icon: <TrendingUp className="w-3 h-3" />, path: 'allrounder' }
                ].map(cat => (
                  <Link 
                    key={cat.name}
                    to={`/rankings/${format.title.toLowerCase()}-${cat.path}`}
                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white hover:text-black transition-all group/link shadow-sm"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">{cat.name}</span>
                    <div className="group-hover/link:translate-x-1 transition-transform">
                      {cat.icon}
                    </div>
                  </Link>
                ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
