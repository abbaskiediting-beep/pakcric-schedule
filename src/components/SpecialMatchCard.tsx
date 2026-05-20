import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Zap, AlertTriangle, ArrowRight, Share2, Bell, Trophy, Award } from 'lucide-react';
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
    <div className="relative">
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
                <div className="flex flex-col items-center gap-4 w-full">
                   {match.scorePAK && match.scoreOpponent ? (
                      <div className="flex flex-col items-center gap-5 w-full">
                         <div className="relative group/score w-full">
                            {/* Glass background with theme glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-pak-green/40 to-emerald-500/40 blur-xl opacity-20 group-hover/score:opacity-40 transition-opacity duration-700" />
                            
                            <div className="flex flex-col gap-3 bg-black/40 backdrop-blur-2xl border border-white/10 px-6 py-4 md:px-10 md:py-8 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-br from-pak-green/5 via-transparent to-pak-green/5" />
                               
                               {/* 1st Innings Row */}
                               <div className="flex items-center justify-between gap-4 md:gap-10 relative z-10">
                                 <div className="flex flex-col items-center flex-1">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white">
                                       {match.scorePAK.includes('&') ? match.scorePAK.split('&')[0].trim() : match.scorePAK}
                                    </div>
                                 </div>
                                 
                                 <div className="px-2 py-1 bg-white/5 rounded-lg border border-white/10 shrink-0">
                                    <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-widest">1st</span>
                                 </div>

                                 <div className="flex flex-col items-center flex-1">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white/80">
                                       {match.scoreOpponent.includes('&') ? match.scoreOpponent.split('&')[0].trim() : match.scoreOpponent}
                                    </div>
                                 </div>
                               </div>

                               {/* 2nd Innings Row (if applicable) */}
                               {(match.scorePAK.includes('&') || match.scoreOpponent.includes('&')) && (
                                 <div className="flex items-center justify-between gap-4 md:gap-10 relative z-10 pt-3 border-t border-white/5">
                                    <div className="flex flex-col items-center flex-1">
                                       <div className={`text-xl sm:text-2xl md:text-3xl font-display font-black leading-none tracking-tighter ${match.status === 'Live' ? 'text-emerald-400 animate-pulse-slow' : 'text-white'}`}>
                                          {match.scorePAK.includes('&') ? match.scorePAK.split('&')[1].trim() : '-'}
                                       </div>
                                    </div>
                                    
                                    <div className="px-2 py-1 bg-pak-green/20 rounded-lg border border-pak-green/20 shrink-0">
                                       <span className="text-[8px] md:text-[10px] font-black text-pak-green uppercase tracking-widest">2nd</span>
                                    </div>

                                    <div className="flex flex-col items-center flex-1">
                                       <div className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white/80 leading-none">
                                          {match.scoreOpponent.includes('&') ? match.scoreOpponent.split('&')[1].trim() : '-'}
                                       </div>
                                    </div>
                                 </div>
                               )}
                               
                               {match.overs && (
                                 <div className="text-center mt-2">
                                    <span className="text-[9px] font-black text-pak-green/60 uppercase tracking-[3px]">({match.overs} Overs)</span>
                                 </div>
                               )}
                            </div>
                         </div>
                         
                         {match.status === 'Live' && (
                            <div className="flex items-center gap-3 px-6 py-2.5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-[5px] shadow-[0_10px_30px_rgba(1,65,30,0.4)] animate-pulse border border-pak-green/50 hover:scale-105 transition-transform cursor-default">
                               <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shadow-[0_0_10px_rgba(52,211,153,1)]" />
                               Live Updates
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

        {match.status === 'Completed' && (
          <div className="mt-8 pt-6 sm:pt-8 border-t border-white/5 space-y-6">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <h3 className="text-xs font-black text-white uppercase tracking-[3px]">Series Victory & Top Performers</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-widest leading-none mb-1">Player of the Match</p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">Mohammad Rizwan</p>
                  <p className="text-[10px] font-medium text-emerald-400">91 & 16 (Day 4/5 heroics)</p>
                </div>
              </div>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-widest leading-none mb-1">Player of the Series</p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">Taijul Islam</p>
                  <p className="text-[10px] font-medium text-emerald-400">Most series wickets spinner</p>
                </div>
              </div>
            </div>

            {/* Micro Scorecard */}
            <div className="bg-black/30 border border-white/5 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Innings Top Scorers</span>
                <span className="text-[9px] font-semibold text-emerald-400 px-2 py-0.5 bg-emerald-500/15 rounded-full uppercase tracking-wider">Historical Series 2-0 Sweep</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-wider pb-1">Pakistan Battings</div>
                  <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded-lg">
                    <span className="font-bold text-white/80">M. Rizwan</span>
                    <span className="font-mono text-emerald-400 font-bold">91 (150) & 16</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded-lg">
                    <span className="font-bold text-white/80">S. Masood</span>
                    <span className="font-mono text-white">71 (105) & 21</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded-lg">
                    <span className="font-bold text-white/80">Salman Agha</span>
                    <span className="font-mono text-white">71 (120) & 21</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-wider pb-1">Bangladesh Battings</div>
                  <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded-lg">
                    <span className="font-bold text-white/80">M. Rahim</span>
                    <span className="font-mono text-emerald-400 font-bold">137 (233)</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded-lg">
                    <span className="font-bold text-white/80">L. Das</span>
                    <span className="font-mono text-white">126 & 60</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded-lg">
                    <span className="font-bold text-white/80">M. Joy</span>
                    <span className="font-mono text-white">65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/match/${match.id}`} className="flex-[2] px-8 py-5 bg-pak-green text-white rounded-2xl text-[12px] font-black uppercase tracking-[3px] hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20 text-center flex items-center justify-center gap-3">
            Match Center <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex-[1] flex gap-4">
            <Link to="/schedule" className="flex-1 px-4 py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:bg-white/10 hover:border-white/30 transition-all text-center flex items-center justify-center">
              Full Schedule
            </Link>
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

      {/* Reminder button below the card */}
      {(match.status === 'Upcoming' || match.status === 'Today') && (
        <div className="mt-4 px-2">
          <SetReminderButton 
            matchId={match.id}
            matchTitle={match.title || `Pakistan vs ${match.opponent}`}
            matchTime={match.time}
            matchDate={match.date}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
