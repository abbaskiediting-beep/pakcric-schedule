import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Zap, AlertTriangle, ArrowRight, Share2, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Match } from '../types';
import ShareButton from './ShareButton';
import SetReminderButton from './SetReminderButton';

interface SpecialMatchCardProps {
  match: Match;
}

export default function SpecialMatchCard({ match }: SpecialMatchCardProps) {
  const shareTitle = `${match.series}: Pakistan vs ${match.opponent}`;
  const shareText = `Check out the big match: Pakistan vs ${match.opponent} in the ${match.series} on ${match.date} at ${match.time} PKT. Venue: ${match.venue}.`;
  const shareUrl = `${window.location.origin}/match/${match.id}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full bg-gradient-to-br from-[#0A1A0F] to-[#050C07] border border-pak-green/40 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pak-green/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pak-green/5 blur-[120px] rounded-full -ml-64 -mb-64" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 p-5 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <div className={`px-3 py-1.5 md:px-4 md:py-2 ${match.status === 'Today' || match.status === 'Live' ? 'bg-red-600' : 'bg-pak-green'} text-white rounded-xl text-[8px] md:text-[11px] font-black uppercase tracking-[2px] md:tracking-[3px] animate-pulse shadow-lg shadow-red-600/40`}>
              {match.status}
            </div>
            {match.granularStatus && (
              <div className="px-3 py-1.5 md:px-4 md:py-2 bg-pak-green/20 backdrop-blur-md border border-pak-green/30 text-white rounded-xl text-[8px] md:text-[11px] font-black uppercase tracking-[2px] md:tracking-[3px]">
                {match.granularStatus}
              </div>
            )}
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 text-pak-green rounded-xl text-[8px] md:text-[11px] font-black uppercase tracking-[2px] md:tracking-[3px]">
              {match.format} Major Series
            </div>
          </div>
          <div className="flex items-center gap-2 bg-yellow-500/10 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-yellow-500/20 text-yellow-500 text-[8px] md:text-[11px] uppercase font-black tracking-widest leading-none shadow-lg">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-500" /> WTC Points
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-8 sm:mb-14">
          {/* Team A */}
          <div className="flex flex-row md:flex-col items-center gap-3 sm:gap-6 text-left md:text-center w-full md:w-auto group/team-a">
            <div className="relative">
              <div className="absolute -inset-2 bg-pak-green/20 rounded-[40px] blur-lg opacity-0 group-hover/team-a:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 sm:w-28 md:w-36 rounded-2xl sm:rounded-[40px] border-2 md:border-4 border-pak-green/30 p-1 bg-black/60 backdrop-blur-xl shadow-2xl relative z-10 transition-transform duration-500 group-hover/team-a:scale-110 shrink-0">
                <img src="https://flagcdn.com/pk.svg" alt="PAK" loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-xl md:rounded-[32px]" />
              </div>
            </div>
            <div className="relative z-10 min-w-0">
              <h3 className="text-xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-1 truncate">Pakistan</h3>
              <p className="text-[7px] sm:text-[11px] font-black text-pak-green uppercase tracking-[2px] md:tracking-[3px]">Shaheen's Men</p>
            </div>
          </div>

          {/* VS Divider - Enhanced or Score */}
          <div className="flex flex-col items-center gap-4 relative px-4 min-w-[140px] md:min-w-[220px]">
             {match.status === 'Live' || match.status === 'Completed' ? (
                <div className="flex flex-col items-center gap-4">
                   {match.scorePAK && match.scoreOpponent ? (
                      <div className="flex flex-col items-center gap-5">
                         <div className="relative group/score">
                            {/* Glass background with theme glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-pak-green/40 to-emerald-500/40 blur-xl opacity-20 group-hover/score:opacity-40 transition-opacity duration-700" />
                            
                            <div className="flex items-center justify-center gap-4 md:gap-10 bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-5 md:px-12 md:py-7 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-br from-pak-green/5 via-transparent to-pak-green/5" />
                               
                               <div className="flex flex-col items-center relative z-10">
                                 <span className="text-[10px] md:text-[11px] font-black text-emerald-500/50 uppercase tracking-[4px] mb-2">PAK</span>
                                 <div className={`text-3xl sm:text-5xl md:text-7xl font-display font-black leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] ${match.status === 'Live' ? 'text-emerald-400 animate-pulse-slow' : 'text-white'}`}>
                                    {match.scorePAK}
                                 </div>
                               </div>
                               
                               <div className="flex flex-col items-center gap-2 relative z-10 opacity-30">
                                 <div className="h-6 md:h-10 w-[2px] bg-white/20 rounded-full" />
                                 <span className="text-xs font-black text-white italic">VS</span>
                                 <div className="h-6 md:h-10 w-[2px] bg-white/20 rounded-full" />
                               </div>
   
                               <div className="flex flex-col items-center relative z-10">
                                 <span className="text-[10px] md:text-[11px] font-black text-white/20 uppercase tracking-[4px] mb-2">{match.opponent.substring(0, 3).toUpperCase()}</span>
                                 <div className={`text-3xl sm:text-5xl md:text-7xl font-display font-black leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] ${match.status === 'Live' ? 'text-emerald-400' : 'text-white/80'}`}>
                                    {match.scoreOpponent}
                                 </div>
                               </div>
                            </div>
                         </div>
                         
                         {match.status === 'Live' && (
                            <div className="flex items-center gap-3 px-6 py-2.5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-[5px] shadow-[0_10px_30px_rgba(1,65,30,0.4)] animate-pulse border border-pak-green/50 hover:scale-105 transition-transform cursor-default">
                               <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shadow-[0_0_10px_rgba(52,211,153,1)]" />
                               Live Feed
                            </div>
                         )}
                      </div>
                   ) : (
                      <span className="text-3xl sm:text-6xl font-display font-black text-white/5 italic relative z-10 select-none">-</span>
                   )}
                </div>
             ) : (
                <>
                   <div className="h-px w-10 sm:w-24 bg-gradient-to-r from-transparent via-pak-green/40 to-transparent hidden md:block" />
                   <div className="relative">
                      <div className="absolute -inset-4 bg-pak-green/10 blur-xl rounded-full animate-pulse" />
                      <span className="text-3xl sm:text-6xl font-display font-black text-white/5 italic relative z-10 select-none">VS</span>
                   </div>
                   <div className="h-px w-10 sm:w-24 bg-gradient-to-r from-transparent via-red-500/40 to-transparent hidden md:block" />
                </>
             )}
          </div>

          {/* Team B */}
          <div className="flex flex-row-reverse md:flex-col items-center gap-3 sm:gap-6 text-right md:text-center w-full md:w-auto group/team-b">
            <div className="relative">
              <div className="absolute -inset-2 bg-red-500/20 rounded-[40px] blur-lg opacity-0 group-hover/team-b:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 sm:w-28 md:w-36 rounded-2xl sm:rounded-[40px] border-2 md:border-4 border-red-500/30 p-1 bg-black/60 backdrop-blur-xl shadow-2xl relative z-10 transition-transform duration-500 group-hover/team-b:scale-110 shrink-0">
                <img src={match.flagUrl} alt={match.opponent} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-xl md:rounded-[32px]" />
              </div>
            </div>
            <div className="relative z-10 min-w-0">
              <h3 className="text-xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-1 truncate">{match.opponent}</h3>
              <p className="text-[7px] sm:text-[11px] font-black text-red-500 uppercase tracking-[2px] md:tracking-[3px]">The Tigers</p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 pt-6 sm:pt-10 border-t border-white/5">
          <div className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-pak-green transition-colors">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-pak-green group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Match Date</p>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">{match.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-pak-green transition-colors">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-pak-green group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Start Time</p>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">{match.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-pak-green transition-colors">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-pak-green group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Venue</p>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight truncate max-w-[120px] sm:max-w-[150px]">{match.venue}</p>
            </div>
          </div>
        </div>

        {/* Breaking News Sticker */}
        <div className="mb-8 sm:mb-10 bg-red-600/10 border border-red-600/30 p-4 sm:p-5 rounded-2xl flex items-start gap-3 sm:gap-4">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" />
          <div>
            <h4 className="text-[10px] sm:text-xs font-black text-red-500 uppercase tracking-widest mb-1 leading-none">Major Blow for Pakistan</h4>
            <p className="text-[10px] sm:text-xs text-white/60 leading-relaxed uppercase font-bold tracking-tight">
              Babar Azam has been ruled out of the 1st Test in Dhaka due to a left knee injury. Reshuffled batting order analysis is now live.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/match/${match.id}`} className="flex-[2] px-8 py-5 bg-pak-green text-white rounded-2xl text-[12px] font-black uppercase tracking-[3px] hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20 text-center flex items-center justify-center gap-3">
            Match Center <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex-[1] flex gap-4">
            {(match.status === 'Upcoming' || match.status === 'Today') ? (
              <SetReminderButton 
                matchId={match.id}
                matchTitle={match.title || `Pakistan vs ${match.opponent}`}
                matchTime={match.time}
                matchDate={match.date}
                className="flex-1"
              />
            ) : (
              <Link to="/news/babar-azam-injured-1st-bangladesh-test-2026" className="flex-1 px-4 py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:bg-white/10 hover:border-white/30 transition-all text-center flex items-center justify-center">
                Injury Update
              </Link>
            )}
            <ShareButton 
              title={shareTitle}
              text={shareText}
              url={shareUrl}
              variant="icon"
              className="shrink-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
