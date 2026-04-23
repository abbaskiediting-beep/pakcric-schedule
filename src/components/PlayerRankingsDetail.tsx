import { motion } from 'motion/react';
import { Trophy, ArrowLeft, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PlayerRanking } from '../playerRankingsData';

interface PlayerRankingsDetailProps {
  title: string;
  category: string;
  format: string;
  data: PlayerRanking[];
  themeColor: string;
}

export default function PlayerRankingsDetail({ title, category, format, data, themeColor }: PlayerRankingsDetailProps) {
  const metaDescription = `Official ICC ${format} ${category} rankings for 2026. See the top 10 players in the world, including Pakistan's best performers and current world ratings.`;
  const pageTitle = `ICC ${format} ${category} Rankings 2026 | Top 10 World Players`;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`ICC ${format} rankings, ${category} ranking 2026, top cricket players, pakistan player rankings`} />
      </Helmet>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
        <Link to="/rankings" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-4">
          <ArrowLeft className="w-4 h-4" /> All Rankings
        </Link>
        <div className="flex items-center gap-4 mb-2">
           <div className={`p-3 rounded-2xl bg-gradient-to-br ${themeColor} border border-white/10 shadow-lg`}>
              <Trophy className="w-6 h-6 text-white" />
           </div>
           <div>
              <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                {format} <span className="text-white">{category}</span>
              </h1>
              <p className="text-ink/40 font-bold uppercase tracking-widest text-[10px]">ICC Men's Player Rankings 2026</p>
           </div>
        </div>
      </motion.div>

      <div className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[2px] text-white">Rank</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[2px] text-white">Player</th>
                <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[2px] text-white">Country</th>
                <th className="px-8 py-6 text-right text-[10px] font-bold uppercase tracking-[2px] text-white">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((player, idx) => (
                <motion.tr 
                  key={player.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`hover:bg-white/5 transition-colors group ${player.country === 'Pakistan' ? 'bg-pak-green/5' : ''}`}
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-bold ${idx < 3 ? 'text-white' : 'text-ink/40'}`}>
                        {player.rank}
                      </span>
                      {idx === 0 && <TrendingUp className="w-3 h-3 text-white" />}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold transition-colors ${player.country === 'Pakistan' ? 'text-white group-hover:text-neutral-200' : 'group-hover:text-white'}`}>
                        {player.name}
                      </span>
                      {player.country === 'Pakistan' && (
                        <span className="text-[8px] font-bold text-white uppercase tracking-widest flex items-center gap-1">
                          <Star className="w-2 h-2 fill-white" /> PRIDE OF PAKISTAN
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <img src={player.flagUrl} alt="" className="w-6 h-4 object-cover rounded shadow" referrerPolicy="no-referrer" />
                      <span className="text-xs font-bold uppercase tracking-tight text-ink/60">{player.country}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-sm font-bold font-mono text-white">{player.rating}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-[32px] bg-gradient-to-br from-pak-green/20 to-transparent border border-white/5 text-center">
         <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-2">Want more stats?</h3>
         <p className="text-ink/40 text-xs font-medium mb-6">Explore rankings for all formats and categories to stay updated with the world of cricket.</p>
         <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rankings" className="px-8 py-4 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">
               All World Rankings
            </Link>
         </div>
      </div>
    </div>
  );
}
