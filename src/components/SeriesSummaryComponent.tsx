import { motion } from 'motion/react';
import { Trophy, Swords, MapPin, Users, Info, ChevronRight, BarChart3, TrendingUp } from 'lucide-react';
import { SeriesSummary } from '../types';

interface SeriesSummaryProps {
  summary: SeriesSummary;
}

export default function SeriesSummaryComponent({ summary }: SeriesSummaryProps) {
  return (
    <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-pak-green to-emerald-900 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Series Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white leading-tight">
              {summary.seriesName}
            </h2>
          </div>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl w-full md:w-auto text-center md:text-left">
             <div className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-1">Format</div>
             <div className="text-xl font-display font-black text-white">{summary.format}</div>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-8 space-y-8 md:space-y-12">
        {/* Head to Head */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-pak-green" />
            <h3 className="text-lg md:text-xl font-display font-black uppercase tracking-tight">Head to Head Records</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
             <div className="flex flex-col items-center p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10">
                <span className="text-[10px] font-black uppercase text-white/40 mb-2">Total Matches</span>
                <span className="text-3xl md:text-4xl font-display font-black">{summary.headToHead.total}</span>
             </div>
             <div className="flex flex-col items-center p-5 md:p-6 bg-pak-green/10 rounded-3xl border border-pak-green/20">
                <span className="text-[10px] font-black uppercase text-pak-green mb-2">PAK Wins</span>
                <span className="text-3xl md:text-4xl font-display font-black text-pak-green">{summary.headToHead.pakWins}</span>
             </div>
             <div className="flex flex-col items-center p-5 md:p-6 bg-red-500/10 rounded-3xl border border-red-500/20">
                <span className="text-[10px] font-black uppercase text-red-500 mb-2">{summary.opponent} Wins</span>
                <span className="text-3xl md:text-4xl font-display font-black text-red-500">{summary.headToHead.oppWins}</span>
             </div>
          </div>
          <div className="mt-4 h-3 bg-white/5 rounded-full overflow-hidden flex">
             <div 
               className="h-full bg-pak-green" 
               style={{ width: `${(summary.headToHead.pakWins / summary.headToHead.total) * 100}%` }} 
             />
             <div 
               className="h-full bg-red-500" 
               style={{ width: `${(summary.headToHead.oppWins / summary.headToHead.total) * 100}%` }} 
             />
             <div 
               className="h-full bg-white/20" 
               style={{ width: `${(summary.headToHead.noResult / summary.headToHead.total) * 100}%` }} 
             />
          </div>
        </section>

        {/* Venue History */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-pak-green" />
            <h3 className="text-xl font-display font-black uppercase tracking-tight">Venue History</h3>
          </div>
          <div className="space-y-4">
            {summary.venueHistory.map((venue, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-[32px] group hover:border-pak-green/50 transition-all">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <h4 className="text-lg font-display font-black mb-1">{venue.venue}</h4>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Avg. Score: {venue.averageScore}</p>
                  </div>
                  <div className="flex gap-8">
                     <div className="text-center">
                        <p className="text-[9px] font-black text-white/30 uppercase">Played</p>
                        <p className="text-lg font-display font-black">{venue.totalMatches}</p>
                     </div>
                     <div className="text-center">
                        <p className="text-[9px] font-black text-pak-green/60 uppercase">Wins</p>
                        <p className="text-lg font-display font-black text-pak-green">{venue.pakWins}</p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Predicted XI */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-pak-green" />
            <h3 className="text-xl font-display font-black uppercase tracking-tight">Predicted Playing XIs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {summary.predictedXI.map((team, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                <h4 className="text-xl font-display font-black text-pak-green mb-6 uppercase italic tracking-tighter">
                  {team.team}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {team.players.map((player, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0 group/player">
                      <span className="text-[10px] font-black text-white/20 group-hover/player:text-pak-green transition-colors">{String(pIdx + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-bold text-white/80 group-hover/player:text-white transition-colors">{player}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Players */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-pak-green" />
            <h3 className="text-lg md:text-xl font-display font-black uppercase tracking-tight">Impact Players</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {summary.keyPlayers.map((player, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-pak-green/5 border border-pak-green/20 rounded-[32px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pak-green/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-pak-green/20 transition-all" />
                <h4 className="text-xl font-display font-black text-white mb-1">{player.name}</h4>
                <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-4">{player.team}</p>
                <div className="flex gap-3 items-start">
                  <Info className="w-4 h-4 text-white/40 shrink-0 mt-1" />
                  <p className="text-sm text-white/60 leading-relaxed font-medium">{player.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-white/5 p-6 md:p-8 border-t border-white/10 text-center">
         <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
           Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
         </p>
      </div>
    </div>
  );
}
