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
            <Swords className="w-5 h-5 text-pak-green" />
            <h3 className="text-lg md:text-xl font-display font-black uppercase tracking-tight">Format Head to Head Analysis</h3>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Metrics and SVG Donut */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white/5 rounded-[24px] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pak-green/5 via-transparent to-red-500/5 opacity-50 group-hover:scale-105 transition-transform duration-700" />
                
                {/* SVG Donut */}
                <div className="relative w-44 h-44 md:w-48 md:h-48 flex items-center justify-center mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="36"
                      fill="transparent"
                      stroke="#1e293b"
                      strokeWidth="9"
                    />
                    {/* Pakistan Wins Ring Segment */}
                    {summary.headToHead.pakWins > 0 && (
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="transparent"
                        stroke="#00662e"
                        strokeWidth="9"
                        strokeDasharray="226.19"
                        initial={{ strokeDashoffset: 226.19 }}
                        animate={{ strokeDashoffset: 226.19 - (summary.headToHead.pakWins / summary.headToHead.total) * 226.19 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    )}
                    {/* Opponent Wins Ring Segment */}
                    {summary.headToHead.oppWins > 0 && (
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="transparent"
                        stroke="#ef4444"
                        strokeWidth="9"
                        strokeDasharray="226.19"
                        initial={{ strokeDashoffset: 226.19 }}
                        animate={{ strokeDashoffset: 226.19 - (summary.headToHead.oppWins / summary.headToHead.total) * 226.19 }}
                        style={{
                          transformOrigin: '50px 50px',
                          transform: `rotate(${(summary.headToHead.pakWins / summary.headToHead.total) * 360}deg)`,
                        }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      />
                    )}
                    {/* Drawn Matches Ring Segment */}
                    {summary.headToHead.noResult > 0 && (
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="transparent"
                        stroke="#f59e0b"
                        strokeWidth="9"
                        strokeDasharray="226.19"
                        initial={{ strokeDashoffset: 226.19 }}
                        animate={{ strokeDashoffset: 226.19 - (summary.headToHead.noResult / summary.headToHead.total) * 226.19 }}
                        style={{
                          transformOrigin: '50px 50px',
                          transform: `rotate(${((summary.headToHead.pakWins + summary.headToHead.oppWins) / summary.headToHead.total) * 360}deg)`,
                        }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                      />
                    )}
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-[10px] font-black uppercase text-white/40 block tracking-widest leading-none mb-1">Total</span>
                    <span className="text-3xl md:text-4xl font-display font-black text-white">{summary.headToHead.total}</span>
                    <span className="text-[8px] font-bold uppercase text-pak-green block tracking-[1px] mt-0.5">{summary.format} matches</span>
                  </div>
                </div>

                {/* Donut Legends */}
                <div className="w-full grid grid-cols-3 gap-2 text-center mt-2 z-10">
                  <div className="p-2 rounded-xl bg-pak-green/5 border border-pak-green/10">
                    <p className="text-[8px] font-black text-pak-green uppercase tracking-wider mb-1">PAK Wins</p>
                    <p className="text-sm font-display font-black text-pak-green">{Math.round((summary.headToHead.pakWins / summary.headToHead.total) * 100)}%</p>
                  </div>
                  <div className="p-2 rounded-xl bg-red-500/5 border border-red-500/10">
                    <p className="text-[8px] font-black text-red-400 uppercase tracking-wider mb-1">OPP Wins</p>
                    <p className="text-sm font-display font-black text-red-400">{Math.round((summary.headToHead.oppWins / summary.headToHead.total) * 100)}%</p>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/5 border border-amber-500/10">
                    <p className="text-[8px] font-black text-amber-400 uppercase tracking-wider mb-1">
                      {summary.format === 'Test' ? 'Draws' : 'No Res'}
                    </p>
                    <p className="text-sm font-display font-black text-amber-400">{Math.round((summary.headToHead.noResult / summary.headToHead.total) * 100)}%</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Stats and Intelligence Barbell */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-display font-black uppercase tracking-tight text-white mb-2 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-pak-green" /> Tactical Summary ({summary.format})
                  </h4>
                  <p className="text-xs md:text-sm text-ink/70 leading-relaxed font-medium">
                    {Math.round((summary.headToHead.pakWins / summary.headToHead.total) * 100) > Math.round((summary.headToHead.oppWins / summary.headToHead.total) * 100) + 10 ? (
                      `Pakistan commands a strong historical record in this format against ${summary.opponent}, winning ${summary.headToHead.pakWins} of their ${summary.headToHead.total} encounters.`
                    ) : Math.round((summary.headToHead.oppWins / summary.headToHead.total) * 100) > Math.round((summary.headToHead.pakWins / summary.headToHead.total) * 100) + 10 ? (
                      `${summary.opponent} holds a historical advantage in this format. Pakistan has won ${summary.headToHead.pakWins} matches versus ${summary.headToHead.oppWins} losses.`
                    ) : (
                      `Both Pakistan and ${summary.opponent} are extraordinarily neck-and-neck in this format, setting up a deeply tactical, highly competitive series.`
                    )}
                  </p>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1.5">PAK Matches Won</div>
                    <div className="text-xl md:text-2xl font-display font-black text-pak-green">{summary.headToHead.pakWins}</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1.5">Opponent Wins</div>
                    <div className="text-xl md:text-2xl font-display font-black text-red-500">{summary.headToHead.oppWins}</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
                    <div className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1.5">
                      {summary.format === 'Test' ? 'Drawn Matches' : 'No Result / Tied'}
                    </div>
                    <div className="text-xl md:text-2xl font-display font-black text-amber-500">{summary.headToHead.noResult}</div>
                  </div>
                </div>

                {/* Sub Bar Distribution view */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-white/60">
                    <span className="text-pak-green">PAK Wins ({summary.headToHead.pakWins})</span>
                    <span className="text-amber-400">
                      {summary.format === 'Test' ? 'Draws' : 'No Res'} ({summary.headToHead.noResult})
                    </span>
                    <span className="text-red-500">{summary.opponent} ({summary.headToHead.oppWins})</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden flex border border-white/5 p-0.5">
                    <motion.div 
                      className="h-full bg-pak-green rounded-l-full" 
                      initial={{ width: 0 }}
                      animate={{ width: `${(summary.headToHead.pakWins / summary.headToHead.total) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="h-full bg-amber-500" 
                      initial={{ width: 0 }}
                      animate={{ width: `${(summary.headToHead.noResult / summary.headToHead.total) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    />
                    <motion.div 
                      className="h-full bg-red-500 rounded-r-full" 
                      initial={{ width: 0 }}
                      animate={{ width: `${(summary.headToHead.oppWins / summary.headToHead.total) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
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
