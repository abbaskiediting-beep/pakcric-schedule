import { Trophy, ChevronRight, Ticket, ArrowRight, Newspaper, Activity, Timer, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { NEWS_DATA } from '../newsData';
import { MATCH_RESULTS } from '../matchResultsData';
import AdPlaceholder from '../components/AdPlaceholder';

import InternalLinkSection from '../components/InternalLinkSection';
import ExternalResourcesSection from '../components/ExternalResourcesSection';

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
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Top Leaderboard - Above the fold, below navbar */}
      <AdPlaceholder type="leaderboard" className="mb-8" />
      <Helmet>
        <title>Pakistan Cricket Schedule 2026 – Full Fixtures, Match Dates & Updates | PakCric Schedule</title>
        <meta name="description" content="Stay updated with the Pakistan cricket schedule 2026. Get full fixtures, match dates, venues, timings, and latest updates on PakCric Schedule." />
        <meta name="keywords" content="Pakistan cricket schedule 2026, Pakistan matches 2026, Pakistan fixtures, upcoming matches Pakistan, cricket schedule updates, PakCric Schedule" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pakistan Cricket Schedule 2026 – Full Fixtures, Match Dates & Updates | PakCric Schedule" />
        <meta property="og:description" content="Stay updated with the Pakistan cricket schedule 2026. Get full fixtures, match dates, venues, timings, and latest updates on PakCric Schedule." />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Pakistan Cricket Schedule 2026 | Fixtures, Matches & Updates" />
        <meta property="twitter:description" content="Check Pakistan cricket schedule 2026 with full fixtures, upcoming matches, match timings, venues and latest updates." />
        <meta property="twitter:image" content="https://pakcric-schedule.online/logo.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PakCric Schedule",
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
              "name": "PakCric Schedule",
              "url": "https://pakcric-schedule.online/",
              "logo": "https://pakcric-schedule.online/logo.png",
              "sameAs": [
                "https://facebook.com/pakcricschedule",
                "https://twitter.com/pakcricschedule",
                "https://instagram.com/pakcricschedule"
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
      {/* High Conversion Hero Section */}
      <section className="mb-10 md:mb-20 mt-2 md:mt-8 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 border border-white/10 rounded-full mb-4 md:mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[2px] md:tracking-[3px] text-white">Live 2026 Season Coverage</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[1.1] text-white mb-4 md:mb-6">
            Pakistan Cricket Schedule 2026 – <span className="text-pak-green font-black">Never Miss a Match</span>
          </h1>
          
          <p className="text-sm xs:text-base md:text-xl text-ink/60 font-medium leading-relaxed max-w-3xl mx-auto mb-4 md:mb-6">
            Get the full <strong>Pakistan cricket schedule 2026</strong> for all formats in one place. We bring you complete match dates, venues, and timings so you can stay updated and <strong>never miss a match</strong>.
          </p>
          <p className="text-[10px] md:text-xs text-ink/40 font-bold uppercase tracking-widest leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
            Follow the national team journey through the <strong>ICC Champions Trophy</strong>, bilateral tours, and home series. Our <strong>PakCric Schedule</strong> is updated in real-time to ensure fans have the best experience.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-8 mb-8 md:mb-12">
            {[
              { icon: '✔', label: 'Updated Daily' },
              { icon: '✔', label: 'Accurate PKT Timings' },
              { icon: '✔', label: 'Full Series' }
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-1.5 md:gap-2">
                <span className="text-pak-green font-bold text-sm md:text-lg">{trust.icon}</span>
                <span className="text-[7px] xs:text-[8px] md:text-[10px] font-bold uppercase tracking-[1px] md:tracking-widest text-white/60">{trust.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/schedule" 
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-pak-green text-white rounded-2xl text-[10px] md:text-xs font-extra-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-pak-green/40 flex items-center justify-center gap-3"
            >
              View Full Schedule <ArrowRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('match-center');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-[10px] md:text-xs font-extra-bold uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Check Next Match <Timer className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="px-5 py-2 bg-black border border-white/10 rounded-xl flex items-center gap-3 shadow-2xl"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[2px] text-white">
                Next: Pak vs Ban – May 8, 2026
              </span>
            </motion.div>
            
            <p className="text-[8px] md:text-[10px] font-bold text-ink/30 uppercase tracking-widest">
              Fast updates • 100% free • Fans first point
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Scoreboard Row */}
      <section id="match-center" className="mb-10 md:mb-12 overflow-hidden scroll-mt-24 px-0">
        <div className="mb-6 md:mb-8 text-center md:text-left px-4 md:px-0">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-3 md:mb-4">
            Pakistan <span className="text-pak-green">Upcoming Matches</span> & Fixtures
          </h2>
          <p className="text-[10px] sm:text-[11px] md:text-sm text-ink/40 font-bold uppercase tracking-[1px] sm:tracking-widest leading-relaxed max-w-2xl mx-auto md:mx-0">
            Stay ahead of every game with our list of Pakistan’s upcoming matches. We provide the latest <strong>match dates</strong> and <strong>updates</strong> for every series. Whether it is a home game or an overseas tour, you will know the details. Check our <strong>Pakistan cricket schedule 2026</strong> for venues, timings, and player stats. All fixtures are verified for accuracy.
          </p>
        </div>
        <div className="flex items-center justify-between mb-4 md:mb-6 px-4 md:px-0">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
            <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[2px] md:tracking-[3px] text-white">Match Center</h2>
          </div>
          <Link to="/schedule" className="text-[9px] md:text-[10px] font-bold uppercase text-ink/40 hover:text-white transition-colors">
            View All Fixtures
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-4 px-4 md:px-0 pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {MATCH_RESULTS.length > 0 ? (
            MATCH_RESULTS.map((match) => (
              <motion.div
                key={match.id}
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/match/${match.id}`)}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] bg-card-bg border border-card-border rounded-3xl md:rounded-[32px] p-5 md:p-6 cursor-pointer hover:border-white/20 transition-all flex flex-col justify-between snap-start shrink-0"
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

      {/* Ad after Upcoming Matches - High CTR placement */}
      <AdPlaceholder type="banner" className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Featured Hero Match Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 relative bg-gradient-to-br from-[#042111] via-pak-green to-[#001a08] rounded-[24px] md:rounded-[32px] p-4 md:p-6 flex flex-col justify-center overflow-hidden border border-white/5 shadow-xl min-h-[300px] md:min-h-[340px] group text-white"
        >
          {/* Subtle Background Text */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
            <span className="text-[120px] md:text-[200px] font-black font-display tracking-tighter">PAK</span>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-white text-pak-green rounded-full text-[8px] font-black uppercase tracking-wider">NEXT MATCH</span>
              <span className="px-2.5 py-0.5 bg-black/40 rounded-full text-[8px] font-bold uppercase tracking-wider text-white/60 border border-white/10 uppercase">{nextMatch.series}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                  PAK <span className="text-pak-green">VS</span> {nextMatch.opponent.substring(0, 3)}
                </h2>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[9px] font-medium text-white/70 uppercase tracking-widest">
                    <MapPin className="w-3 h-3 text-pak-green" /> {nextMatch.venue}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-[9px] font-black text-white uppercase tracking-wider">
                      <Calendar className="w-3 h-3 text-pak-green" /> {nextMatch.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] font-black text-white uppercase tracking-wider">
                      <Timer className="w-3 h-3 text-pak-green" /> {nextMatch.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-24 md:h-24 rounded-xl border-2 border-pak-green/30 p-1 bg-black/40 backdrop-blur-md">
                  <img src="https://flagcdn.com/pk.svg" alt="PAK" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="text-lg font-display font-black text-white/10 uppercase">VS</div>
                <div className="w-14 h-14 md:w-24 md:h-24 rounded-xl border-2 border-white/10 p-1 bg-black/40 backdrop-blur-md">
                  <img src={nextMatch.flagUrl} alt={nextMatch.opponent} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 pt-2">
               <Link to={`/match/${nextMatch.id}`} className="px-6 py-2.5 bg-white text-black rounded-xl text-[9px] font-black uppercase tracking-wider hover:bg-pak-green hover:text-white transition-all shadow-md">
                  View Details
               </Link>
               <button className="px-6 py-2.5 bg-white/5 text-white border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider hover:bg-white/10 transition-all">
                  Tickets
               </button>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2 bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-xl"
        >
          <div>
            <div className="flex justify-between items-center mb-6 md:mb-8">
               <h3 className="text-sm font-bold uppercase tracking-[2px] text-white">Hot Series</h3>
               <Link to="/schedule" className="text-[9px] md:text-[10px] font-bold uppercase text-ink/40 hover:text-white transition-colors flex items-center gap-1 group">
                 See More <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="space-y-4">
               <div className="bg-white/5 rounded-[24px] md:rounded-3xl p-5 md:p-6 border border-white/5 relative group hover:border-white/30 transition-all">
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-pak-green flex items-center justify-center text-white shadow-lg shrink-0">
                        <Trophy className="w-5 h-5 md:w-6 md:h-6" />
                     </div>
                     <div className="min-w-0">
                        <span className="text-[11px] md:text-xs font-bold uppercase tracking-tight block text-white truncate">{bangladeshSeriesName}</span>
                        <span className="text-[9px] md:text-[10px] text-ink/40 font-bold uppercase tracking-widest">{bangladeshMatches.length} Elite Matches</span>
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
          className="md:col-span-4 bg-card-bg border border-card-border rounded-[28px] md:rounded-[40px] p-6 md:p-10 overflow-hidden shadow-xl"
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

      {/* SEO & Informative Sections */}
      <div className="mt-24 space-y-24">
        {/* Detailed SEO Content Section */}
        <section className="max-w-4xl mx-auto text-left py-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-10">
            Complete <span className="text-pak-green font-black">Pakistan Cricket Schedule 2026</span> & Guide
          </h2>
          <div className="space-y-8 text-ink/60 font-medium leading-relaxed text-lg">
            <p className="mb-4">
              Welcome to the ultimate hub for the <strong>Pakistan cricket schedule 2026</strong>. If you are a fan looking for <strong>full fixtures</strong>, our platform provides everything in one place. We ensure that you get the latest <strong>match dates</strong> and <strong>updates</strong> directly from verified sources. This year, the <strong>PakCric Schedule</strong> is your primary portal for following the national team across all formats. From high-octane T20 matches to classic Test series, we bring you every detail.
            </p>
            <p className="mb-4">
              Our <strong>Pakistan cricket schedule 2026</strong> covers home series and international tours. You can find detailed information about venues like Lahore and Karachi. We also track matches in international stadiums such as Colombo or Dhaka. Because timings are critical, we provide all <strong>match dates</strong> in Pakistan Standard Time (PKT). This helps fans plan their day. Use our <strong>full fixtures</strong> list to stay ahead. By using our service, you will <strong>never miss a match</strong>. 
            </p>
            <p className="mb-4">
              The 2026 season is special. It features the <strong>Pakistan vs Bangladesh</strong> series and major world tournaments. Our <strong>PakCric Schedule</strong> updates daily to reflect changes. Whether it is a squad update or a venue shift, we notify you fast. We also track <strong>ICC Rankings</strong>. You can see where Pakistan stands in Tests, ODIs, and T20Is. Following the <strong>Pakistan cricket schedule 2026</strong> has never been easier or faster.
            </p>
            <p className="mb-4">
              Why Choose our <strong>full fixtures</strong> guide? We focus on speed. Most sites are slow and filled with ads. We provide a clean interface. Our <strong>updates</strong> are verified by experts. We include <strong>match dates</strong> for every upcoming game. If you want to know about the <strong>Pakistan cricket team squad</strong>, we have that too. We analyze player stats and performance. This makes our <strong>Pakistan cricket schedule 2026</strong> the most reliable fan resource online.
            </p>
            <p>
              Stay connected with <strong>PakCric Schedule</strong> for year-round coverage. We offer more than just a <strong>cricket schedule</strong>. Explore <strong>match dates</strong>, expert blogs, and tactical previews. Our goal is simple. We want every fan to enjoy cricket without hassle. Bookmark this page for the best <strong>Pakistan cricket schedule 2026</strong> experience. We are committed to accuracy. We are committed to the fans. Together, we celebrate Pakistan cricket.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] p-6 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-6">
                Why <span className="text-pak-green">PakCric Schedule</span> is Different
              </h3>
              <p className="text-ink/60 font-medium leading-relaxed mb-8">
                There are plenty of cricket websites out there, but most of them are either cluttered or outdated. We focus on what really matters—accuracy and speed. This platform is built specifically for fans who want quick, reliable, and distraction-free cricket information.
              </p>
              <div className="space-y-4">
                {[
                  'Clean and simple schedule layout',
                  'Fast updates after verified announcements',
                  'Accurate match timings for Pakistan users',
                  'Easy navigation for quick access'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-pak-green/20 flex items-center justify-center border border-pak-green/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-pak-green"></div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex items-center justify-center">
              <Trophy className="w-32 h-32 text-pak-green/20" />
            </div>
          </div>
        </section>

        {/* Full Year Schedule Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Pakistan Cricket <span className="text-pak-green">Full Schedule 2026</span>
          </h3>
          <p className="text-ink/60 font-medium leading-relaxed mb-10">
            The 2026 season is packed with exciting tours and tournaments. From bilateral series to global events, Pakistan has a busy cricket calendar. On this website, you can explore complete yearly fixtures, series-wise match breakdown, and <Link to="/schedule" className="text-pak-green hover:underline">tournament schedules</Link>. Everything is structured to help you find exactly what you're looking for within seconds.
          </p>
          
          {/* Native Ad Block - Looks like content */}
          <AdPlaceholder type="native" className="mb-10 max-w-2xl mx-auto" label="Recommended for You" />

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule" className="px-10 py-5 bg-pak-green text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-pak-green/20">
              Check Full Schedule Now
            </Link>
            <Link to="/news" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Latest News Updates
            </Link>
          </div>
        </section>

        {/* Match Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl md:rounded-[40px] p-7 md:p-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Detailed Match Information
            </h3>
            <p className="text-sm md:text-base text-ink/60 font-medium leading-relaxed mb-8">
              Each match on PakCric Schedule comes with essential details so you don’t have to search anywhere else. We keep things simple but informative—perfect for both casual viewers and serious fans.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Match Date & Time', 'Stadium & Location', 'Opponent Team', 'Series Name'].map((item, idx) => (
                <div key={idx} className="bg-black/20 p-4 rounded-2xl border border-white/5">
                  <span className="text-[9px] font-bold uppercase tracking-[2px] text-pak-green block mb-1">Feature</span>
                  <span className="text-[10px] font-bold text-white uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-pak-green rounded-3xl md:rounded-[40px] p-8 md:p-10 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-display font-bold uppercase mb-4 leading-tight">Stay Informed, Always</h3>
            <p className="text-white/80 text-[11px] md:text-xs font-medium leading-relaxed mb-6">
              Cricket schedules can change—and when they do, we make sure you know about it. Our platform is regularly updated for accuracy.
            </p>
            <Link to="/blogs" className="text-[10px] font-bold uppercase tracking-[3px] flex items-center gap-2 hover:translate-x-2 transition-transform">
              Explore Blogs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <ExternalResourcesSection />

        <InternalLinkSection />

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-white/5 border border-white/5 rounded-3xl md:rounded-[40px] p-8 md:p-20 text-center">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
            <Activity className="w-64 md:w-96 h-64 md:h-96" />
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6 md:mb-8">
              Never Miss a <span className="text-pak-green">Pakistan Match</span>
            </h2>
            <p className="text-sm md:text-base text-ink/60 font-medium leading-relaxed mb-8 md:mb-12">
              Bookmark PakCric Schedule and stay connected with every match Pakistan plays in 2026. Join thousands of fans who rely on us for accurate timing and fixtures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link to="/schedule" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-pak-green text-white rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-pak-green/30">
                Explore Upcoming Matches
              </Link>
              <Link to="/blogs" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-transparent border border-white/20 text-white rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                Latest Tactical Blogs
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer Banner - Final conversion point */}
      <AdPlaceholder type="banner" className="mt-20 mb-8" />

      {/* Visible FAQ Section for SEO and Users */}
      <Suspense fallback={<div className="h-[400px] bg-white/5 animate-pulse rounded-[40px] mt-24" />}>
        <CommonQuestions />
      </Suspense>
    </div>
  );
}
