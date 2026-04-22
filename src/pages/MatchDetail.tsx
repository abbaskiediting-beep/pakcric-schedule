import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { MATCH_RESULTS } from '../matchResultsData';
import { ChevronLeft, MapPin, Clock, Calendar, Ticket, Trophy, Timer, Zap, Target, Users } from 'lucide-react';

export default function MatchDetail() {
  const { id } = useParams();
  const match = [...PAKISTAN_SCHEDULE, ...MATCH_RESULTS].find(m => m.id === id);

  if (!match) return <div className="p-12 text-center text-ink/60">Match not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Match Header Section */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="md:col-span-3 bg-gradient-to-br from-pak-green to-black rounded-[40px] p-12 text-center border border-white/5 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
             <span className="text-[200px] font-bold italic">{match.status === 'Live' ? 'LIVE' : 'VS'}</span>
          </div>
          
          <div className="relative z-10">
             <div className="flex flex-col items-center gap-4 mb-8">
               <span className="px-4 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] border border-white/10">{match.series}</span>
               {match.status === 'Live' && (
                 <div className="flex items-center gap-2 px-4 py-1 bg-red-500/20 text-red-500 rounded-full text-[9px] font-bold uppercase tracking-widest border border-red-500/20 animate-pulse">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                   Match in Progress
                 </div>
               )}
             </div>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
                <div className="flex flex-col items-center">
                   <img src="https://flagcdn.com/pk.svg" alt="PAK" className="w-24 h-24 rounded-full border-4 border-white/10 mb-4 p-2 shadow-2xl bg-black/20" />
                   <h2 className="text-3xl font-display font-bold">PAKISTAN</h2>
                   {match.scorePAK && (
                     <div className="mt-2 text-4xl font-display font-bold text-white">{match.scorePAK}</div>
                   )}
                </div>

                <div className="text-4xl md:text-6xl font-display font-bold text-white/20 italic">
                  {match.status === 'Live' || match.status === 'Completed' ? '-' : 'VS'}
                </div>

                <div className="flex flex-col items-center">
                   <img src={match.flagUrl} alt={match.opponent} className="w-24 h-24 rounded-full border-4 border-white/10 mb-4 p-2 shadow-2xl bg-black/20" />
                   <h2 className="text-3xl font-display font-bold uppercase">{match.opponent}</h2>
                   {match.scoreOpponent && (
                     <div className="mt-2 text-4xl font-display font-bold text-white">{match.scoreOpponent}</div>
                   )}
                </div>
             </div>

             {match.status === 'Live' && (
               <div className="flex items-center justify-center gap-2 mb-12 text-pak-green font-bold uppercase tracking-[0.3em] text-lg">
                 <Timer className="w-6 h-6" /> {match.overs} Overs
               </div>
             )}

             {match.status === 'Completed' && match.result && (
               <div className="mb-12 p-6 bg-white/5 rounded-[32px] border border-white/10 inline-block">
                 <p className="text-xl font-display font-bold text-white uppercase tracking-tight">{match.result}</p>
               </div>
             )}

             <div className="inline-flex flex-wrap items-center justify-center gap-8 p-4 bg-black/30 rounded-3xl border border-white/5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                   <Calendar className="w-4 h-4 text-white" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">{match.date}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{match.time}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{match.venue}</span>
                 </div>
              </div>
           </div>
         </motion.div>

        {/* Detailed Stats for Completed Matches */}
        {match.status === 'Completed' && match.stats && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Top Scorers */}
            {match.stats.topScorers && (
              <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">Top Scorers</h3>
                </div>
                <div className="space-y-4">
                  {match.stats.topScorers.map((scorer, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-[11px] font-bold uppercase text-white/80">{scorer.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-display font-bold text-white">{scorer.runs}</span>
                        <span className="text-[9px] text-ink/40 ml-1">({scorer.balls})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leading Wicket Takers */}
            {match.stats.leadingWicketTakers && (
              <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-4 h-4 text-red-400" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">Best Bowling</h3>
                </div>
                <div className="space-y-4">
                  {match.stats.leadingWicketTakers.map((taker, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-[11px] font-bold uppercase text-white/80">{taker.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-display font-bold text-white">{taker.wickets}-{taker.runs}</span>
                        <span className="text-[9px] text-ink/40 ml-1">({taker.overs})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Partnerships */}
            {match.stats.keyPartnerships && (
              <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-4 h-4 text-blue-400" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white">Key Partnerships</h3>
                </div>
                <div className="space-y-4">
                  {match.stats.keyPartnerships.map((partnership, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <p className="text-[10px] font-bold uppercase text-white/80 mb-1">{partnership.players}</p>
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-display font-bold text-white">{partnership.runs} Runs</span>
                        <span className="text-[9px] text-ink/40 ml-1">off {partnership.balls} balls</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Action Widgets */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-card-bg border border-card-border rounded-[32px] p-8 flex flex-col justify-between">
           <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Tickets</h3>
              <p className="text-xs text-ink/40 font-medium mb-6">Experience the action live from the stadium. Premium seating available.</p>
           </div>
           <button className="w-full py-3 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Ticket className="w-4 h-4" /> Book Tickets
           </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card-bg border border-card-border rounded-[32px] p-8">
           <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Venue Info</h3>
           <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-[10px] font-bold text-ink/40 uppercase">Stadium</span>
                 <span className="text-[10px] font-bold uppercase">{match.venue.split(',')[0]}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-[10px] font-bold text-ink/40 uppercase">City</span>
                 <span className="text-[10px] font-bold uppercase">{match.venue.split(',')[1] || 'TBA'}</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-[10px] font-bold text-ink/40 uppercase">Format</span>
                 <span className="text-[10px] font-bold uppercase text-white">{match.format}</span>
              </div>
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-pak-green rounded-[32px] p-8 text-white">
           <h3 className="text-lg font-display font-bold uppercase tracking-tight mb-2">Live Stream</h3>
           <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-6">Watch the match live in HD on PCB Digital & PTV Sports.</p>
           <button className="px-6 py-2 bg-white text-pak-green rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">
              Set Reminder
           </button>
        </motion.div>
      </div>
    </div>
  );
}
