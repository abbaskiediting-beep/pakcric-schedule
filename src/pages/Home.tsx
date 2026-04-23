import { Trophy, ChevronRight, Ticket, ArrowRight, Newspaper, Activity, Timer } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { NEWS_DATA } from '../newsData';
import { MATCH_RESULTS } from '../matchResultsData';

// Lazy load non-critical sections to speed up initial mobile paint
const CommonQuestions = lazy(() => import('../components/CommonQuestions'));
const FanClubSection = lazy(() => import('../components/FanClubSection'));

export default function Home() {
  const nextMatch = PAKISTAN_SCHEDULE[0];
  const navigate = useNavigate();
  
  // Get only the Bangladesh series for the home page preview
  const bangladeshSeriesName = 'Pakistan Tour of Bangladesh (Test Series)';
  const bangladeshMatches = PAKISTAN_SCHEDULE.filter(m => m.series === bangladeshSeriesName);

  return (
    <div className="container mx-auto px-6 py-8">
      <Helmet>
        <title>Pakistan Cricket Schedule 2026 | Fixtures, Matches & Updates</title>
        <meta name="description" content="Check Pakistan cricket schedule 2026 with full fixtures, upcoming matches, match timings, venues and latest updates. Stay updated with Pakistan cricket." />
        <meta name="keywords" content="Pakistan cricket schedule, Pakistan matches 2026, Pakistan fixtures, upcoming matches Pakistan, cricket schedule updates" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pakcric-schedule.online/" />
        <meta property="og:title" content="Pakistan Cricket Schedule 2026 | Fixtures, Matches & Updates" />
        <meta property="og:description" content="Check Pakistan cricket schedule 2026 with full fixtures, upcoming matches, match timings, venues and latest updates." />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pakcric-schedule.online/" />
        <meta property="twitter:title" content="Pakistan Cricket Schedule 2026 | Fixtures, Matches & Updates" />
        <meta property="twitter:description" content="Check Pakistan cricket schedule 2026 with full fixtures, upcoming matches, match timings, venues and latest updates." />
        <meta property="twitter:image" content="https://pakcric-schedule.online/logo.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PakCric Hub",
              "url": "https://pakcric-schedule.online/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://pakcric-schedule.online/schedule?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PakCric Hub",
              "url": "https://pakcric-schedule.online/",
              "logo": "https://pakcric-schedule.online/logo.png",
              "sameAs": [
                "https://facebook.com/pakcrichub",
                "https://twitter.com/pakcrichub",
                "https://instagram.com/pakcrichub"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Pakistan ka next match kab hai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pakistan ka next match upcoming international schedule ke mutabiq jaldi hi hoga. Aap hamari website par latest match dates aur timing check kar sakte hain."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pakistan cricket schedule 2026 kahan check karein?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pakistan cricket schedule 2026 aap hamari website par dekh sakte hain jahan tamam upcoming matches, series aur timings update ki jati hain."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pakistan vs Bangladesh 2026 series kab start hogi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pakistan vs Bangladesh 2026 series ki exact dates schedule page par available hoti hain. Aap wahan full details check kar sakte hain."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pakistan matches ki timing kis time zone me hoti hai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pakistan matches ki timing usually Pakistan Standard Time (PST) me show ki jati hai, taake local users asaani se match follow kar saken."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kya Pakistan cricket schedule PDF download available hai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ji haan, Pakistan cricket schedule ka PDF version bhi available hota hai jise aap download karke offline dekh sakte hain."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Pakistan team ka squad 2026 me kya hai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pakistan team ka latest squad har series ke mutabiq update hota hai. Aap hamari website ke players section me updated squad dekh sakte hain."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Dynamic Scoreboard Row */}
      <section className="mb-12 overflow-hidden">
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-pak-green" />
            <h2 className="text-sm font-bold uppercase tracking-[3px] text-white">Match Center</h2>
          </div>
          <Link to="/schedule" className="text-[10px] font-bold uppercase text-ink/40 hover:text-white transition-colors">
            View All Fixtures
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-2 px-2">
          {MATCH_RESULTS.length > 0 ? (
            MATCH_RESULTS.map((match) => (
              <motion.div
                key={match.id}
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/match/${match.id}`)}
                className="min-w-[320px] md:min-w-[400px] bg-card-bg border border-card-border rounded-[32px] p-6 cursor-pointer hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    match.status === 'Live' ? 'bg-red-500/20 text-red-400 border border-red-500/20' : 'bg-white/5 text-white/40 border border-white/5'
                  }`}>
                    {match.status}
                  </span>
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest font-mono">
                    {match.series}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 p-1">
                        <img 
                          src="https://flagcdn.com/pk.svg" 
                          alt="PAK" 
                          referrerPolicy="no-referrer" 
                          loading="lazy" 
                          decoding="async" 
                          width="40"
                          height="40"
                          className="w-full h-full object-cover rounded-full" 
                        />
                     </div>
                     <span className="text-xs font-bold uppercase tracking-tighter">PAK</span>
                  </div>

                  <div className="flex flex-col items-center">
                    {match.status === 'Live' ? (
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-2xl font-display font-bold tracking-tighter text-white">
                          {match.scorePAK} <span className="text-white/20">-</span> {match.scoreOpponent}
                        </div>
                        <div className="text-[9px] font-bold text-pak-green uppercase tracking-widest flex items-center gap-1">
                          <Timer className="w-3 h-3" /> {match.overs} Overs
                        </div>
                      </div>
                    ) : (
                      <div className="text-xl font-display font-bold tracking-tighter text-white/40">
                        VS
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 p-1">
                        <img 
                          src={match.flagUrl} 
                          alt={match.opponent} 
                          referrerPolicy="no-referrer" 
                          loading="lazy" 
                          decoding="async" 
                          width="40"
                          height="40"
                          className="w-full h-full object-cover rounded-full" 
                        />
                     </div>
                     <span className="text-xs font-bold uppercase tracking-tighter">{match.opponent.substring(0, 3)}</span>
                  </div>
                </div>

                {match.status === 'Completed' && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest leading-relaxed text-center mb-4">
                      {match.result}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-white/20 uppercase">Final Scoreboard available</span>
                      <Link 
                        to={`/match/${match.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-pak-green/10 rounded-xl text-[10px] font-bold text-pak-green uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all group"
                      >
                        Details <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
                {match.status === 'Live' && (
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-center">
                    <Link 
                      to={`/match/${match.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-2 bg-red-500/20 rounded-xl text-[10px] font-bold text-red-400 uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all group"
                    >
                      Watch Live <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="flex-1 min-h-[140px] flex items-center justify-center bg-white/5 border border-dashed border-card-border rounded-[32px]">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/20">No active or recent matches</p>
            </div>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Hero Section ... lines 19 to 71 */}
        {/* Mini Series Schedule ... lines 74 to 114 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 relative bg-gradient-to-br from-pak-green to-[#00220e] rounded-[40px] p-10 flex flex-col justify-center overflow-hidden border border-white/5 shadow-2xl shadow-pak-green/20 min-h-[400px]"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
            <span className="text-[250px] font-bold font-display rotate-12">PAK</span>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <div className="flex justify-between items-start">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[3px] text-white border border-white/10 backdrop-blur-md">
                Up Next • {nextMatch.series}
              </span>
              <div className="flex items-center gap-2 bg-black/40 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Tickets: Fast Filling</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8 order-2 md:order-1">
                 <div className="w-24 h-24 rounded-full border-4 border-white/10 p-2 overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
                    <img src="https://flagcdn.com/pk.svg" alt="PAK" referrerPolicy="no-referrer" decoding="async" className="w-full h-full object-cover rounded-full" />
                 </div>
                 <div className="text-center">
                    <span className="text-5xl font-display font-bold text-white/20 italic">VS</span>
                 </div>
                 <div className="w-24 h-24 rounded-full border-4 border-white/10 p-2 overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
                    <img src={nextMatch.flagUrl} alt={nextMatch.opponent} referrerPolicy="no-referrer" decoding="async" className="w-full h-full object-cover rounded-full" />
                 </div>
              </div>

              <div className="text-center md:text-right order-1 md:order-2">
                <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none text-white mb-2">
                  PAK <span className="text-white opacity-50">vs</span> {nextMatch.opponent.substring(0, 3)}
                </h1>
                <p className="text-lg font-bold uppercase tracking-widest text-white/50 mb-1">{nextMatch.venue}</p>
                <p className="text-sm font-bold text-white uppercase tracking-[4px]">{nextMatch.date} • {nextMatch.time}</p>
              </div>
            </div>

            <div className="flex gap-4">
               <Link to={`/match/${nextMatch.id}`} className="px-8 py-4 bg-white text-black rounded-2xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-white/20">
                  Match Details <ArrowRight className="w-4 h-4" />
               </Link>
               <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md">
                  <Ticket className="w-4 h-4" /> Book Tickets
               </button>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2 bg-card-bg border border-card-border rounded-[40px] p-8 flex flex-col justify-between overflow-hidden shadow-xl"
        >
          <div>
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-sm font-bold uppercase tracking-[2px] text-white">Hot Series</h3>
               <Link to="/schedule" className="text-[10px] font-bold uppercase text-ink/40 hover:text-white transition-colors flex items-center gap-1 group">
                 See More <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="space-y-4">
               <div className="bg-white/5 rounded-3xl p-6 border border-white/5 relative group hover:border-white/30 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-2xl bg-pak-green flex items-center justify-center text-white shadow-lg">
                        <Trophy className="w-6 h-6" />
                     </div>
                     <div>
                        <span className="text-xs font-bold uppercase tracking-tight block text-white">{bangladeshSeriesName}</span>
                        <span className="text-[10px] text-ink/40 font-bold uppercase tracking-widest">{bangladeshMatches.length} Elite Matches</span>
                     </div>
                  </div>
                  
                  <div className="space-y-3">
                     {bangladeshMatches.slice(0, 3).map((match, idx) => (
                       <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-[10px] font-bold text-ink/60">{match.date}</span>
                          <span className="text-[10px] font-bold uppercase tracking-tighter">PAK vs {match.opponent}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          <Link to="/schedule" className="mt-8 w-full py-4 bg-pak-green hover:bg-white hover:text-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-[2px] transition-all text-center border border-white/5">
             View Full Schedule
          </Link>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-card-bg border border-card-border rounded-[40px] p-10 overflow-hidden shadow-xl"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-white" />
              <h3 className="text-xl font-display font-bold uppercase tracking-tight">Latest Cricket News</h3>
            </div>
            <Link to="/news" className="text-[10px] font-bold uppercase text-ink/40 hover:text-white transition-colors flex items-center gap-1 group">
              Read All News <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS_DATA.slice(0, 2).map((item, idx) => (
              <motion.div
                key={item.id || idx}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/news/${item.id}`)}
                className="bg-white/5 border border-white/5 rounded-3xl p-6 group hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-pak-green/20 rounded-full text-[8px] font-bold text-white uppercase tracking-widest border border-white/10">
                    {item.tag}
                  </span>
                  <span className="text-[9px] font-bold text-ink/40 uppercase">{item.date}</span>
                </div>
                <h4 className="text-lg font-display font-bold uppercase tracking-tight mb-2 group-hover:text-white transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-ink/60 font-medium line-clamp-3">
                  {item.summary}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[9px] font-bold uppercase text-white opacity-0 group-hover:opacity-100 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured News / Social Widget */}
        <Suspense fallback={<div className="md:col-span-2 h-[400px] bg-white/5 animate-pulse rounded-[40px]" />}>
          <FanClubSection />
        </Suspense>
      </div>

      {/* Visible FAQ Section for SEO and Users */}
      <Suspense fallback={<div className="h-[400px] bg-white/5 animate-pulse rounded-[40px] mt-24" />}>
        <CommonQuestions />
      </Suspense>
    </div>
  );
}
