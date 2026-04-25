import { motion } from 'motion/react';
import { Trophy, Star, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

export default function RankingsODI() {
  const teams = [
    'India', 'Australia', 'South Africa', 'Pakistan', 'New Zealand', 
    'England', 'Sri Lanka', 'Afghanistan', 'Bangladesh', 'West Indies'
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>ICC ODI Rankings 2026 | Pakistan ODI Standings & Team List</title>
        <meta name="description" content="Official ICC ODI team rankings 2026. Review Pakistan's current standing in the world One Day International rankings and top teams list." />
      </Helmet>
      <Link to="/rankings" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to All Rankings
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 text-white">
          ICC ODI <span className="text-pak-green">Rankings 2026</span>
        </h1>
        <div className="max-w-2xl space-y-4">
          <p className="text-lg text-ink/80 font-medium leading-relaxed">
            The One Day International format is a balance of tactical depth and aggressive intent. ICC ODI rankings track team performances in 50-over cricket, including crucial world tournaments.
          </p>
          <p className="text-sm text-ink/60 font-medium leading-relaxed">
            Explore the official ICC ODI team standings for 2026. Pakistan's progress in the 50-over format is closely monitored after each bilateral series and multi-nation event.
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-card-border rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
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
