import { motion } from 'motion/react';
import { Trophy, Star, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

export default function RankingsT20() {
  const teams = [
    'India', 'England', 'Australia', 'New Zealand', 'South Africa', 
    'Pakistan', 'Sri Lanka', 'West Indies', 'Afghanistan', 'Bangladesh'
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>ICC T20 Rankings 2026 | Pakistan T20 Standings & Team List</title>
        <meta name="description" content="Latest ICC T20 team rankings for 2026. See Pakistan's position in the world T20I standings and top 10 ranked teams." />
      </Helmet>
      <Link to="/rankings" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to All Rankings
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 text-white">
          ICC T20 <span className="text-pak-green">Rankings 2026</span>
        </h1>
        <div className="max-w-2xl space-y-4">
          <p className="text-lg text-ink/80 font-medium leading-relaxed">
            Twenty20 International cricket is the most explosive and unpredictable format of the game. ICC T20 rankings highlight the teams that excel in power-hitting and strategic white-ball bowling.
          </p>
          <p className="text-sm text-ink/60 font-medium leading-relaxed">
            Check the latest world T20I rankings for 2026. This list is updated frequently based on individual match results, emphasizing the fast-paced nature of the format.
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-card-border rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          {teams.map((team, idx) => (
            <motion.div 
              key={team}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`flex items-center justify-between p-5 rounded-3xl border transition-all ${
                team === 'Pakistan' 
                  ? 'bg-pak-green text-white border-white shadow-lg scale-105' 
                  : 'bg-white/5 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-6">
                <span className={`text-xl font-display font-bold w-8 ${team === 'Pakistan' ? 'text-white' : 'text-neutral-500'}`}>
                   {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-display font-bold uppercase tracking-tight">
                  {team}
                </span>
              </div>
              {team === 'Pakistan' && <Star className="w-5 h-5 text-white fill-white" />}
            </motion.div>
          ))}
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <Trophy className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
}
