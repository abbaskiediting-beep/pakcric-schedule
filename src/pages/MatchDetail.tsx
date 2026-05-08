import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PAKISTAN_SCHEDULE } from '../constants';
import { MATCH_RESULTS } from '../matchResultsData';
import { 
  ChevronLeft, MapPin, Clock, Calendar, Ticket, 
  Trophy, Timer, Zap, Target, Users, Bell, CheckCircle2,
  Newspaper, ArrowRight, BarChart3, Activity, Info
} from 'lucide-react';
import { useState } from 'react';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import { PlayerModal } from '../components/PlayerModal';
import { PLAYER_STATS } from '../playerData';
import { Player } from '../types';

import { LinkText } from '../components/LinkText';

export default function MatchDetail() {
  const { id } = useParams();
  const match = [...PAKISTAN_SCHEDULE, ...MATCH_RESULTS].find(m => m.id === id);
  const [reminderSet, setReminderSet] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPlayerModal = (playerName: string) => {
    const player = PLAYER_STATS[playerName];
    if (player) {
      setSelectedPlayer(player);
      setIsModalOpen(true);
    }
  };

  const handleSetReminder = () => {
    if (reminderSet) return;
    
    setReminderSet(true);
    setShowToast(true);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // In a real app, this could trigger a browser notification or a calendar API
    console.log(`Reminder set for match: ${match?.series} - ${match?.opponent}`);
  };

  if (!match) return <div className="p-12 text-center text-ink/60">Match not found</div>;

  const allMatches = [...PAKISTAN_SCHEDULE, ...MATCH_RESULTS];
  
  const headToHead = allMatches
    .filter(m => m.opponent === match.opponent && m.id !== match.id)
    .slice(0, 3);
    
  const moreFormatMatches = allMatches
    .filter(m => m.format === match.format && m.id !== match.id)
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <Helmet>
        <title>{`${match.title || `Pakistan vs ${match.opponent} 2026`} | Match Date, Time & Venue`}</title>
        <meta name="description" content={`Get complete details of ${match.title || `Pakistan vs ${match.opponent}`} match including date, time, venue, squad, and live updates.`} />
        <meta name="keywords" content={`${match.title}, ${match.opponent}, ${match.series}, match schedule, cricket fixtures, Pakistan cricket 2026`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${match.title || `Pakistan vs ${match.opponent} 2026`} | Match Date, Time & Venue`} />
        <meta property="og:description" content={`Get complete details of Pakistan vs ${match.opponent} 2026 match including date, time, venue, squad, and live updates.`} />
        <meta property="og:image" content={match.flagUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`Pakistan vs ${match.opponent} 2026 Match Date, Time & Venue | Full Details`} />
        <meta property="twitter:description" content={`Get complete details of Pakistan vs ${match.opponent} 2026 match including date, time, venue, squad, and live updates.`} />
        <meta property="twitter:image" content={match.flagUrl} />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Pakistan vs ${match.opponent} ${match.format || 'Cricket Match'}",
              "startDate": "2026-${match.date.includes('May') ? '05' : '01'}-08T09:00",
              "location": {
                "@type": "Place",
                "name": "${match.venue.split(',')[0]}",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "${match.venue.split(',')[1] || 'TBA'}",
                  "addressCountry": "TBA"
                }
              },
              "competitor": [
                {
                  "@type": "SportsTeam",
                  "name": "Pakistan"
                },
                {
                  "@type": "SportsTeam",
                  "name": "${match.opponent}"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-12 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
          >
            <div className="bg-pak-green text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md border border-white/20">
              <CheckCircle2 className="w-5 h-5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Success</p>
                <p className="text-xs font-medium opacity-80">Reminder set for {match.opponent} series!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mb-6 md:mb-8 text-ink text-center md:text-left leading-tight">
        {match.title || `Pakistan vs ${match.opponent} 2026`} – <span className="text-pak-green font-black">Full Match Details</span>
      </h1>

      {/* Ad below title */}
      <AdPlaceholder type="banner" className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Match Header Section */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="md:col-span-3 bg-gradient-to-br from-[#0a4d2e] via-pak-green to-black rounded-3xl md:rounded-[48px] p-6 sm:p-10 md:p-16 text-center border border-white/10 relative overflow-hidden shadow-3xl"
        >
          <div className="absolute inset-0 opacity-[0.03] sm:opacity-[0.05] flex items-center justify-center pointer-events-none select-none mix-blend-soft-light">
             <span className="text-[100px] sm:text-[200px] md:text-[300px] font-display font-black italic tracking-tighter">
               {match.status === 'Live' ? 'LIVE' : 'VS'}
             </span>
          </div>
          
          <div className="relative z-10">
             <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
               <span className="px-4 py-1.5 bg-white text-black rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[3px] md:tracking-[4px] shadow-lg">{match.series}</span>
               {match.status === 'Live' && (
                 <div className="flex items-center gap-2.5 px-4 py-1.5 bg-red-600/20 text-red-100 rounded-full text-[9px] font-black uppercase tracking-widest border border-red-500/30 animate-pulse backdrop-blur-sm">
                   <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                   Match in Progress
                 </div>
               )}
             </div>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-20 mb-10 md:mb-14">
                <div className="flex flex-col items-center">
                   <div className="relative mb-5 md:mb-6">
                      <img src="https://flagcdn.com/pk.svg" alt="PAK" referrerPolicy="no-referrer" loading="lazy" className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 md:border-[6px] border-white/20 p-1 md:p-2 shadow-3xl bg-black/30 backdrop-blur-sm transition-transform duration-500" />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 md:px-3 md:py-1 bg-white rounded-md text-[9px] md:text-[10px] font-black text-black">PAK</div>
                   </div>
                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white tracking-widest uppercase">PAKISTAN</h2>
                   {match.scorePAK && (
                     <div className="mt-3 text-4xl sm:text-5xl md:text-6xl font-display font-black text-pak-green drop-shadow-xl">{match.scorePAK}</div>
                   )}
                </div>

                <div className="text-4xl sm:text-5xl md:text-8xl font-display font-black text-white/10 uppercase tracking-tighter italic leading-none my-2 md:my-0">
                  {match.status === 'Live' || match.status === 'Completed' ? '-' : 'VS'}
                </div>

                <div className="flex flex-col items-center">
                   <div className="relative mb-5 md:mb-6">
                      <img src={match.flagUrl} alt={match.opponent} referrerPolicy="no-referrer" loading="lazy" className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 md:border-[6px] border-white/20 p-1 md:p-2 shadow-3xl bg-black/30 backdrop-blur-sm transition-transform duration-500" />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 md:px-3 md:py-1 bg-white rounded-md text-[9px] md:text-[10px] font-black text-black">{match.opponent.substring(0, 3)}</div>
                   </div>
                   <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white uppercase tracking-widest leading-none">{match.opponent}</h2>
                   {match.scoreOpponent && (
                     <div className="mt-3 text-4xl sm:text-5xl md:text-6xl font-display font-black text-pak-green drop-shadow-xl">{match.scoreOpponent}</div>
                   )}
                </div>
             </div>

             {match.status === 'Live' && (
               <div className="flex items-center justify-center gap-3 mb-14 text-white font-black uppercase tracking-[0.3em] text-lg bg-white/5 py-3 px-6 rounded-2xl border border-white/10 inline-flex">
                 <Timer className="w-6 h-6 text-pak-green" /> {match.overs} Overs
               </div>
             )}

             {match.status === 'Completed' && match.result && (
               <div className="mb-14 p-6 md:p-10 bg-white/10 rounded-[32px] md:rounded-[48px] border border-white/20 inline-block shadow-2xl backdrop-blur-xl">
                 <p className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tight">{match.result}</p>
               </div>
             )}

              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 p-5 sm:p-6 md:p-6 bg-black/40 rounded-[28px] md:rounded-[32px] border border-white/10 backdrop-blur-xl shadow-2xl w-full md:w-auto">
                   <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                      <span className="text-[9px] md:text-xs font-black uppercase tracking-[2px]">{match.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Clock className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                       <span className="text-[9px] md:text-xs font-black uppercase tracking-[2px]">{match.time} PKT</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <MapPin className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                       <span className="text-[9px] md:text-xs font-black uppercase tracking-[2px] truncate max-w-[200px] md:max-w-none">{match.venue}</span>
                    </div>
                </div>

                {match.status !== 'Completed' && (
                  <button 
                    onClick={handleSetReminder}
                    disabled={reminderSet}
                    className={`px-6 py-4 rounded-3xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 backdrop-blur-md border border-white/10 ${
                      reminderSet 
                        ? 'bg-white/10 text-white cursor-default' 
                        : 'bg-white text-pak-green hover:scale-105 active:scale-95 shadow-xl shadow-black/20'
                    }`}
                  >
                    {reminderSet ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> 
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-4 h-4" /> 
                        <span>Remind</span>
                      </>
                    )}
                  </button>
                )}
              </div>
           </div>
        </motion.div>

        {/* Playing XI Section */}
        {match.playingXI && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Users className="w-32 h-32 md:w-48 md:h-48" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                <h2 className="text-lg md:text-2xl font-display font-bold uppercase tracking-tight text-white leading-tight">Match Playing XI</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {match.playingXI.map((teamXI, teamIdx) => (
                  <div key={teamIdx} className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4 relative overflow-hidden">
                       <img 
                         src={teamXI.team === 'Pakistan' ? 'https://flagcdn.com/pk.svg' : match.flagUrl} 
                         alt={teamXI.team} 
                         className="w-10 h-6 sm:w-12 sm:h-8 object-cover rounded shadow-sm" 
                       />
                       <div>
                         <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-wider">{teamXI.team}</h3>
                         <div className="h-0.5 w-12 bg-pak-green mt-1" />
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                      {teamXI.players.map((player, pIdx) => (
                        <div 
                          key={pIdx} 
                          onClick={() => openPlayerModal(player.name)}
                          className={`flex items-center justify-between p-3 sm:p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-pak-green/5 hover:border-pak-green/20 transition-all group ${PLAYER_STATS[player.name] ? 'cursor-pointer' : ''}`}
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <span className="text-[9px] sm:text-[10px] font-black text-white/20 w-4 sm:w-5">{(pIdx + 1).toString().padStart(2, '0')}</span>
                            <div>
                               <div className="flex items-center flex-wrap gap-2">
                                <p className="text-sm sm:text-base font-bold text-white group-hover:text-pak-green transition-colors">
                                  {player.name}
                                </p>
                                <div className="flex gap-1">
                                  {player.isCaptain && <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 bg-pak-green text-white font-black rounded uppercase">Capt</span>}
                                  {player.isWicketkeeper && <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 bg-amber-500 text-black font-black rounded uppercase">Wk</span>}
                                  {player.isDebutant && <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 bg-emerald-500 text-black font-black rounded uppercase shadow-[0_0_10px_rgba(16,185,129,0.3)]">New</span>}
                                </div>
                              </div>
                              <p className="text-[8px] sm:text-[9px] font-bold text-white/30 uppercase tracking-widest mt-0.5">{player.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mid-content ad after header info */}
        <div className="md:col-span-3">
          <AdPlaceholder type="native" className="mb-8" label="Popular Tours in 2026" />
        </div>

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
              <div className="bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400" />
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Top Scorers</h3>
                </div>
                <div className="space-y-4">
                  {match.stats.topScorers.map((scorer, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-[10px] md:text-[11px] font-bold uppercase text-white/80">{scorer.name}</span>
                      <div className="text-right">
                        <span className="text-xs md:text-sm font-display font-bold text-white">{scorer.runs}</span>
                        <span className="text-[8px] md:text-[9px] text-ink/40 ml-1">({scorer.balls})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leading Wicket Takers */}
            {match.stats.leadingWicketTakers && (
              <div className="bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400" />
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Best Bowling</h3>
                </div>
                <div className="space-y-4">
                  {match.stats.leadingWicketTakers.map((taker, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-[10px] md:text-[11px] font-bold uppercase text-white/80">{taker.name}</span>
                      <div className="text-right">
                        <span className="text-xs md:text-sm font-display font-bold text-white">{taker.wickets}-{taker.runs}</span>
                        <span className="text-[8px] md:text-[9px] text-ink/40 ml-1">({taker.overs})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Partnerships */}
            {match.stats.keyPartnerships && (
              <div className="bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Key Partnerships</h3>
                </div>
                <div className="space-y-4">
                  {match.stats.keyPartnerships.map((partnership, idx) => (
                    <div key={idx} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <p className="text-[9px] md:text-[10px] font-bold uppercase text-white/80 mb-1">{partnership.players}</p>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs md:text-sm font-display font-bold text-white">{partnership.runs} Runs</span>
                        <span className="text-[8px] md:text-[9px] text-ink/40 ml-1">off {partnership.balls} balls</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Action Widgets */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between">
           <div>
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white mb-3">Tickets</h3>
              <p className="text-[11px] md:text-xs text-ink/40 font-medium mb-6">Experience the action live from the stadium. Premium seating available.</p>
           </div>
           <button className="w-full py-3.5 bg-white text-black rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Ticket className="w-4 h-4" /> Book Tickets
           </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 md:p-8">
           <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white mb-3">Venue Info</h3>
           <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase">Stadium</span>
                 <span className="text-[9px] md:text-[10px] font-bold uppercase text-right line-clamp-1">{match.venue.split(',')[0]}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase">City</span>
                 <span className="text-[9px] md:text-[10px] font-bold uppercase text-right">{match.venue.split(',')[1] || 'TBA'}</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase">Format</span>
                 <span className="text-[9px] md:text-[10px] font-bold uppercase text-white">{match.format}</span>
              </div>
           </div>
        </motion.div>

        {match.status !== 'Completed' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-pak-green rounded-3xl md:rounded-[32px] p-6 md:p-8 text-white relative overflow-hidden group">
             <div className="relative z-10">
               <h3 className="text-base md:text-lg font-display font-bold uppercase tracking-tight mb-2">Live Stream</h3>
               <p className="text-[9px] md:text-[10px] font-bold opacity-70 uppercase tracking-widest mb-6">Watch the match live in HD on PCB Digital & PTV Sports.</p>
               <button 
                onClick={handleSetReminder}
                disabled={reminderSet}
                className={`px-6 md:px-8 py-3 rounded-xl md:rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                  reminderSet 
                    ? 'bg-pak-green border border-white/30 text-white cursor-default' 
                    : 'bg-white text-pak-green hover:scale-105 active:scale-95'
                }`}
               >
                  {reminderSet ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" /> Reminder Set
                    </>
                  ) : (
                    <>
                      <Bell className="w-3.5 h-3.5 md:w-4 md:h-4" /> Set Reminder
                    </>
                  )}
               </button>
             </div>
             
             {/* Background Decoration */}
             <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Bell className="w-32 h-32" />
             </div>
          </motion.div>
        )}
      </div>
      
      {/* Venue Insights section for Live or Completed matches */}
      {(match.status === 'Live' || match.status === 'Completed') && match.venueInsights && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 md:mt-12 bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <BarChart3 className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <Activity className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
              <h2 className="text-lg md:text-2xl font-display font-bold uppercase tracking-tight text-white leading-tight">Venue Insights: {match.venue.split(',')[0]}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="p-5 sm:p-6 bg-white/[0.03] rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] md:text-[10px] font-black uppercase text-ink/40 mb-3 tracking-widest">Avg 1st Score</span>
                <span className="text-3xl md:text-4xl font-display font-black text-white">{match.venueInsights.avgFirstInningsScore}</span>
                <span className="text-[8px] md:text-[9px] text-pak-green font-bold uppercase mt-2">Historical Average</span>
              </div>
              
              <div className="p-5 sm:p-6 bg-white/[0.03] rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] md:text-[10px] font-black uppercase text-ink/40 mb-3 tracking-widest">Defending Win %</span>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5 sm:hidden" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5 hidden sm:block" />
                    
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray={175.93} strokeDashoffset={175.93 - (175.93 * match.venueInsights.winPercentageBattingFirst) / 100} className="text-pak-green sm:hidden" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={226.19} strokeDashoffset={226.19 - (226.19 * match.venueInsights.winPercentageBattingFirst) / 100} className="text-pak-green hidden sm:block" />
                  </svg>
                  <span className="absolute text-xs sm:text-sm font-black text-white">{match.venueInsights.winPercentageBattingFirst}%</span>
                </div>
                <span className="text-[8px] md:text-[9px] text-white/40 font-bold uppercase mt-3 italic">Defending Success</span>
              </div>

              <div className="p-5 sm:p-6 bg-white/[0.03] rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] md:text-[10px] font-black uppercase text-ink/40 mb-3 tracking-widest">Chasing Win %</span>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5 sm:hidden" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5 hidden sm:block" />
                    
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray={175.93} strokeDashoffset={175.93 - (175.93 * match.venueInsights.winPercentageBattingSecond) / 100} className="text-amber-500 sm:hidden" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={226.19} strokeDashoffset={226.19 - (226.19 * match.venueInsights.winPercentageBattingSecond) / 100} className="text-amber-500 hidden sm:block" />
                  </svg>
                  <span className="absolute text-xs sm:text-sm font-black text-white">{match.venueInsights.winPercentageBattingSecond}%</span>
                </div>
                <span className="text-[8px] md:text-[9px] text-white/40 font-bold uppercase mt-3 italic">Chasing Success</span>
              </div>
            </div>

            <div className="bg-pak-green/5 border border-pak-green/20 rounded-2xl sm:rounded-[2rem] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Info className="w-4 h-4 md:w-5 md:h-5 text-pak-green mt-1 shrink-0" />
                <div>
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-pak-green mb-2">Pitch Behavior</h4>
                  <p className="text-sm md:text-base text-ink/80 leading-relaxed italic">
                    "{match.venueInsights.pitchCondition}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Bottom Ad for long sessions */}
      <AdPlaceholder type="leaderboard" className="mt-12 mb-12" />

      {/* Article Content: Pre-Match Analysis & Post-Match Summary */}
      {(match.preMatchAnalysis || match.postMatchSummary) && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-3 bg-card-bg border border-card-border rounded-[32px] p-8 md:p-12 overflow-hidden shadow-2xl relative mb-12"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Newspaper className="w-64 h-64" />
          </div>

          <div className="relative z-10">
            {match.preMatchAnalysis && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-5 h-5 text-pak-green" />
                  <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white">Pre-Match Analysis</h2>
                </div>
                <div className="prose prose-invert prose-sm md:prose-base max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-pak-green prose-p:text-ink/70 prose-strong:text-white prose-li:text-ink/70">
                  <LinkText text={match.preMatchAnalysis} />
                </div>
              </div>
            )}

            {match.postMatchSummary && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-5 h-5 text-pak-green" />
                  <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white">Post-Match Summary</h2>
                </div>
                <div className="prose prose-invert prose-sm md:prose-base max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-pak-green prose-p:text-ink/70 prose-strong:text-white prose-li:text-ink/70">
                  <LinkText text={match.postMatchSummary} />
                </div>
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* Related Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Head to Head */}
        {headToHead.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-pak-green/10 flex items-center justify-center text-pak-green">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-ink">Recent vs {match.opponent}</h3>
            </div>
            
            <div className="space-y-3">
              {headToHead.map((m) => (
                <Link 
                  key={m.id} 
                  to={`/match/${m.id}`}
                  className="group flex items-center justify-between p-4 bg-card-bg border border-card-border rounded-2xl hover:bg-white/[0.04] hover:border-pak-green/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={m.flagUrl} 
                      alt="" 
                      className="w-10 h-6 object-cover rounded shadow-sm opacity-60 group-hover:opacity-100 transition-opacity" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-ink uppercase tracking-tight truncate max-w-[150px]">{m.title || `PAK vs ${m.opponent}`}</span>
                      <span className="text-[8px] font-medium text-ink/40 uppercase tracking-widest">{m.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ink/20 group-hover:text-pak-green group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* More Format Matches */}
        {moreFormatMatches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-pak-green/10 flex items-center justify-center text-pak-green">
                <Trophy className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-ink">More {match.format} Matches</h3>
            </div>
            
            <div className="space-y-3">
              {moreFormatMatches.map((m) => (
                <Link 
                  key={m.id} 
                  to={`/match/${m.id}`}
                  className="group flex items-center justify-between p-4 bg-card-bg border border-card-border rounded-2xl hover:bg-white/[0.04] hover:border-pak-green/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-6 bg-white/5 rounded flex items-center justify-center text-[8px] font-black text-ink/40 group-hover:text-pak-green transition-colors">
                      {m.opponent}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-ink uppercase tracking-tight truncate max-w-[150px]">{m.title || `PAK vs ${m.opponent}`}</span>
                      <span className="text-[8px] font-medium text-ink/40 uppercase tracking-widest">{m.venue.split(',')[0]}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-ink/20 group-hover:text-pak-green group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <InternalLinkSection />

      <PlayerModal 
        player={selectedPlayer}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
