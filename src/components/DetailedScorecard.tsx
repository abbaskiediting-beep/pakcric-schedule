import React from 'react';
import { motion } from 'motion/react';
import { Target, User, Zap, Activity } from 'lucide-react';

interface BatterStats {
  name: string;
  runs: number | string;
  balls?: number | string;
  fours?: number | string;
  sixes?: number | string;
  status: string;
  highlight?: boolean;
}

interface BowlerStats {
  name: string;
  figures: string;
  overs?: string;
  wickets?: number | string;
  runs?: number | string;
  description?: string;
  color?: string;
}

interface DetailedScorecardProps {
  title: string;
  batters: BatterStats[];
  bowlers?: BowlerStats[];
  teamName?: string;
}

export default function DetailedScorecard({ title, batters, bowlers, teamName }: DetailedScorecardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl relative mb-12"
    >
      <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
        <Activity className="w-32 h-32 md:w-48 md:h-48" />
      </div>

      <div className="bg-pak-green/10 border-b border-white/5 p-5 md:p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-pak-green flex items-center justify-center text-white shadow-lg">
            <Target className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="text-base md:text-xl font-display font-black text-white uppercase tracking-tight">{title}</h3>
        </div>
        {teamName && (
          <span className="px-3 py-1 bg-white/5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[2px] text-white/40 border border-white/10">{teamName}</span>
        )}
      </div>

      <div className="p-0 md:p-8">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[320px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 pl-5 md:pl-2 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-neutral-500">Batter</th>
                <th className="pb-4 text-center text-[9px] md:text-[11px] font-black uppercase tracking-widest text-neutral-500">R</th>
                <th className="pb-4 text-center text-[9px] md:text-[11px] font-black uppercase tracking-widest text-neutral-500 hidden xs:table-cell">B</th>
                <th className="pb-4 text-center text-[9px] md:text-[11px] font-black uppercase tracking-widest text-neutral-500 hidden md:table-cell">4s/6s</th>
                <th className="pb-4 pr-5 md:pr-2 text-right text-[9px] md:text-[11px] font-black uppercase tracking-widest text-neutral-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-display">
              {batters.map((player, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors relative">
                  <td className="py-3.5 md:py-6 pl-5 md:pl-2">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${player.highlight ? 'bg-pak-green animate-pulse' : 'bg-white/10'}`} />
                      <span className={`text-[13px] md:text-base font-bold uppercase italic leading-tight ${player.highlight ? 'text-pak-green' : 'text-white'}`}>
                        {player.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 md:py-6 text-center">
                    <span className={`text-sm md:text-xl font-black italic drop-shadow-sm ${player.highlight ? 'text-pak-green' : 'text-white'}`}>
                      {player.runs}
                    </span>
                  </td>
                  <td className="py-3.5 md:py-6 text-center hidden xs:table-cell">
                    <span className="text-[11px] md:text-sm text-white/40 italic">{player.balls || '-'}</span>
                  </td>
                  <td className="py-3.5 md:py-6 text-center hidden md:table-cell">
                    <span className="text-[10px] text-white/20 italic">{player.fours || 0} / {player.sixes || 0}</span>
                  </td>
                  <td className="py-3.5 md:py-6 text-right pr-5 md:pr-2">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-neutral-500 leading-tight block max-w-[100px] md:max-w-[120px] ml-auto">
                      {player.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {bowlers && bowlers.length > 0 && (
          <div className="mt-8 md:mt-16 border-t border-white/5 pt-8 md:pt-12 px-5 md:px-0 pb-8 md:pb-0">
            <h4 className="text-[9px] md:text-[11px] font-black uppercase tracking-[3px] text-neutral-500 mb-6 md:mb-8 flex items-center gap-2">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-pak-green" /> Bowling Analysis
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {bowlers.map((bowler, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl md:rounded-3xl p-4 md:p-6 group hover:border-pak-green/30 transition-all">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <span className={`text-[11px] md:text-sm font-bold uppercase italic ${bowler.color || 'text-white'}`}>{bowler.name}</span>
                    <span className="text-xs md:text-base font-display font-black text-pak-green italic tracking-tight">{bowler.figures}</span>
                  </div>
                  {bowler.description && (
                    <p className="text-[8px] md:text-[9px] text-neutral-500 uppercase font-black tracking-widest leading-relaxed line-clamp-2">{bowler.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
