import { Trophy, ChevronRight, Ticket, ArrowRight, Newspaper, Activity, Timer, MapPin, Calendar, Zap, Star, Target, Users, History as HistoryIcon, ShieldAlert, Shield, AlertTriangle, Layout } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { NEWS_DATA } from '../newsData';
import { MATCH_RESULTS } from '../matchResultsData';
import { BLOG_POSTS, AUTHORS } from '../data/blogData';
import AdPlaceholder from '../components/AdPlaceholder';
import MatchCard from '../components/MatchCard';
import SpecialMatchCard from '../components/SpecialMatchCard';
import { LinkText } from '../components/LinkText';

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
  
  // Get latest 3 blogs
  const latestBlogs = [...BLOG_POSTS].reverse().slice(0, 3);

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
        <meta property="og:image" content="/favicon.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Pakistan Cricket Schedule 2026 | Fixtures, Matches & Updates" />
        <meta property="twitter:description" content="Check Pakistan cricket schedule 2026 with full fixtures, upcoming matches, match timings, venues and latest updates." />
        <meta property="twitter:image" content="/favicon.svg" />

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
              "logo": "https://ais-dev-7nxqgzlwox4porwgparb2l-763834333617.asia-southeast1.run.app/favicon.svg",
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
      <section className="mb-8 md:mb-20 mt-1 md:mt-8 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 border border-white/10 rounded-full mb-4 md:mb-8 backdrop-blur-md">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[1.5px] md:tracking-[3px] text-white">Live 2026 Season Coverage</span>
          </div>

          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[1.1] md:leading-[1.05] text-white mb-4 md:mb-8 transition-all">
            Pakistan Cricket Schedule 2026 – <span className="text-pak-green font-black drop-shadow-[0_0_15px_rgba(0,102,46,0.3)]">Never Miss a Match</span>
          </h1>
          
          <p className="text-sm sm:text-xl md:text-2xl text-ink/60 font-medium leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10 px-2 transition-all">
            <LinkText text="Get the full Pakistan cricket schedule 2026 for all formats in one place. We bring you complete match dates, venues, and timings so you can stay updated and never miss a match." />
          </p>
          <p className="text-[9px] md:text-sm text-ink/40 font-bold uppercase tracking-[1.5px] md:tracking-widest leading-relaxed max-w-2xl mx-auto mb-8 md:mb-14 px-4 transition-all">
            <LinkText text="Follow the national team journey through the ICC Champions Trophy, bilateral tours, and home series. Our PakCric Schedule is updated in real-time to ensure fans have the best experience." />
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-12 mb-8 md:mb-16">
            {[
              { icon: '✔', label: 'Updated Daily' },
              { icon: '✔', label: 'Accurate PKT Timings' },
              { icon: '✔', label: 'Full Series' }
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-1.5 md:gap-3">
                <span className="text-pak-green font-black text-sm md:text-xl">{trust.icon}</span>
                <span className="text-[7px] sm:text-[10px] md:text-xs font-black uppercase tracking-[1.5px] text-white/70">{trust.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-10 md:mb-16">
            <Link 
              to="/schedule" 
              className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 bg-pak-green text-white rounded-2xl text-[10px] md:text-sm font-black uppercase tracking-[2px] md:tracking-[3px] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-pak-green/40 flex items-center justify-center gap-3"
            >
              View Full Schedule <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('match-center');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 bg-white/5 text-white border border-white/10 rounded-2xl text-[10px] md:text-sm font-black uppercase tracking-[2px] md:tracking-[3px] hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Check Next Match <Timer className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="px-4 py-1.5 md:px-5 md:py-2 bg-black border border-white/10 rounded-xl flex items-center gap-2 md:gap-3 shadow-2xl"
            >
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[1.5px] md:tracking-[2px] text-white">
                Next: Pak vs Ban – May 8, 2026
              </span>
            </motion.div>
            
            <p className="text-[7px] md:text-[10px] font-bold text-ink/30 uppercase tracking-widest">
              Fast updates • 100% free • Fans first point
            </p>
          </div>
        </div>
      </section>

      {/* Live Match Feed removed as requested */}

      {/* Ad after Upcoming Matches - High CTR placement */}
      <AdPlaceholder type="banner" className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Featured Special Match Card Section */}
        <div className="md:col-span-4">
          <SpecialMatchCard match={nextMatch} />
        </div>

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
               {[
                 {
                   name: "Pakistan vs Bangladesh 2026",
                   path: "/pakistan-vs-bangladesh-2026-schedule",
                   matches: "2 Test Matches",
                   icon: <Trophy className="w-4 h-4 md:w-5 md:h-5 text-white" />,
                   color: "bg-pak-green"
                 },
                 {
                   name: "PSL 11 - 2026",
                   path: "/news/peshawar-zalmi-psl-2026-champions-match-report",
                   matches: "Season Review",
                   icon: <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />,
                   color: "bg-yellow-600"
                 },
                 {
                   name: "Pakistan vs Australia 2026",
                   path: "/pakistan-vs-australia-2026-schedule-odi",
                   matches: "3 ODI Series",
                   icon: <Star className="w-4 h-4 md:w-5 md:h-5 text-white" />,
                   color: "bg-rose-500"
                 }
               ].map((series, idx) => (
                 <Link 
                   key={idx}
                   to={series.path}
                   className="bg-white/5 rounded-2xl md:rounded-3xl p-4 md:p-5 border border-white/5 block group hover:border-white/30 transition-all hover:bg-white/[0.08]"
                 >
                    <div className="flex items-center gap-3 md:gap-4">
                       <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl ${series.color} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                          {series.icon}
                       </div>
                       <div className="min-w-0">
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight block text-white truncate group-hover:text-pak-green transition-colors">{series.name}</span>
                          <span className="text-[8px] md:text-[9px] text-ink/40 font-bold uppercase tracking-widest">{series.matches}</span>
                       </div>
                    </div>
                 </Link>
               ))}
            </div>
          </div>

          <Link to="/schedule" className="mt-8 w-full py-4 bg-pak-green hover:bg-white hover:text-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-[2px] transition-all text-center border border-white/5">
             View Full Schedule
          </Link>
        </motion.section>

        {/* Latest Cricket News */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-card-bg border border-card-border rounded-[28px] md:rounded-[40px] p-6 md:p-10 overflow-hidden shadow-xl"
        >
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-white" />
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight">Latest Cricket News</h3>
            </div>
            <Link to="/news" className="text-[10px] font-bold uppercase text-ink/40 hover:text-white transition-colors flex items-center gap-1 group">
              Read All News <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS_DATA.slice(0, 4).map((item, idx) => (
              <motion.div
                key={item.id || idx}
                whileHover={{ y: -5 }}
                onClick={() => {
                  if (item.id === 'psl-2026-eliminator-1-full-match-report-analysis') {
                    navigate('/psl-2026-eliminator-1-full-match-report-analysis');
                  } else if (item.id === 'multan-sultans-psl-2026-full-season-journey-review') {
                    navigate('/multan-sultans-psl-2026-full-season-journey-review');
                  } else if (item.id === 'maaz-sadaqat-psl-2026-season-review-stats') {
                    navigate('/maaz-sadaqat-psl-2026-season-review-stats');
                  } else if (item.id === 'usman-khan-psl-2026-season-review-records') {
                    navigate('/usman-khan-psl-2026-season-review-records');
                  } else {
                    navigate(`/news/${item.id}`);
                  }
                }}
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

          <div className="mt-12 pt-10 border-t border-white/5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-pak-green" />
                <h4 className="text-xs font-black uppercase tracking-[2px] text-white">Featured Tactical News</h4>
              </div>
              <Link to="/news" className="text-[9px] font-bold text-pak-green hover:underline uppercase tracking-widest">
                View All News
              </Link>
            </div>
            
            <div className="space-y-4">
               <Link 
                 to="/news/pak-vs-ban-1st-test-day-1-report-2026"
                 className="flex items-center justify-between p-4 bg-pak-green/10 border border-pak-green/30 rounded-2xl group hover:bg-pak-green/20 hover:border-pak-green/50 transition-all font-bold"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/20 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Newspaper className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Match Report</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors capitalize">Day 1 Report: Bangladesh in Control</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/taiul-mehidy-spin-duo-analysis-2026"
                 className="flex items-center justify-between p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl group hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all font-bold"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                       <Zap className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Spin Analysis</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-emerald-500 transition-colors capitalize">Taijul & Mehidy: The Twin Nightmare</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-emerald-500 transition-colors" />
               </Link>

               <Link 
                 to="/news/babar-azam-injury-batting-lineup-analysis-2026"
                 className="flex items-center justify-between p-4 bg-pak-green/5 border border-pak-green/20 rounded-2xl group hover:bg-pak-green/10 hover:border-pak-green/40 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-black transition-colors">
                       <Layout className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Tactical Analysis</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors capitalize">Babar's Absence: Lineup Reshuffle</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/babar-azam-injured-1st-bangladesh-test-2026"
                 className="flex items-center justify-between p-4 bg-red-500/5 border border-red-500/20 rounded-2xl group hover:bg-red-500/10 hover:border-red-500/40 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-black transition-colors">
                       <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none mb-1">Breaking News</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors capitalize">Babar Ruled Out of Dhaka Test</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-red-500 transition-colors" />
               </Link>

               <Link 
                 to="/news/bangladesh-cricket-team-2026-analysis"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                       <Shield className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Team Analysis</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-emerald-500 transition-colors">Bangladesh Team Profile: Ready for Pak?</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-emerald-500 transition-colors" />
               </Link>

               <Link 
                 to="/news/pak-vs-ban-2026-test-trophy-reveal"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Trophy News</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">Trophy Unveiled in Dhaka</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/australia-players-skip-pakistan-odi-series-ipl-2026"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-amber-500/5 hover:border-amber-500/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                       <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest leading-none mb-1">Breaking News</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors">IPL First: Aussies Skip Pakistan ODIs</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-amber-500 transition-colors" />
               </Link>

               <Link 
                 to="/news/pakistan-women-vs-zimbabwe-women-2nd-odi-2026-report"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Latest Results</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">Pak Women Crush Zimbabwe by 206 Runs</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/shaheen-shah-afridi-bangladesh-interview-2026"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Star className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Latest Interview</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">Shaheen Afridi: Pace is our Identity</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/pakistan-vs-bangladesh-wtc-analysis-2025-2027"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Zap className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">WTC Analysis</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">PAK vs BAN: WTC Scenarios 2027</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>
               
               <Link 
                 to="/pakistan-tour-bangladesh-squad-2026"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Users className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Squad Intelligence</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">Official 16-Member Test Squad</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/peshawar-zalmi-psl-2026-champions-match-report"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">PSL 2026 Result</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">Zalmi Crowned PSL 11 Kings</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>

               <Link 
                 to="/news/babar-azam-psl-2026-complete-story-comeback"
                 className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-pak-green/5 hover:border-pak-green/20 transition-all"
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-colors">
                       <HistoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest leading-none mb-1">Season Special</p>
                       <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">Babar Azam: The Season of Redemption</h5>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
               </Link>
            </div>
          </div>
        </motion.section>

        {/* Featured News / Social Widget */}
        <Suspense fallback={<div className="md:col-span-2 h-[400px] bg-white/5 animate-pulse rounded-[40px]" />}>
          <FanClubSection />
        </Suspense>
      </div>

      {/* Latest News Section - Full Width */}
      <section className="mt-24 md:mt-32">
        <div className="flex flex-wrap justify-between items-center mb-8 md:mb-12 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-pak-green/10 flex items-center justify-center text-pak-green shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white leading-none mb-2">Latest Cricket News & Analysis</h2>
              <p className="text-[10px] md:text-sm text-ink/40 font-bold uppercase tracking-widest">In-depth analysis, tactical previews & exclusive stories</p>
            </div>
          </div>
          <Link 
            to="/news" 
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all group flex items-center gap-2"
          >
            Explore All News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {latestBlogs.map((blog, idx) => {
            const author = AUTHORS.find(a => a.id === blog.authorId);
            return (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigate(blog.path)}
                className="bg-card-bg border border-card-border rounded-[32px] p-6 sm:p-8 flex flex-col h-full group hover:bg-white/[0.02] hover:border-pak-green/30 transition-all cursor-pointer shadow-xl relative overflow-hidden active:scale-[0.98]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pak-green/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-pak-green/10 transition-all" />
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-full text-[9px] font-black uppercase tracking-widest border border-pak-green/10 group-hover:bg-pak-green group-hover:text-white transition-all">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-ink/40 group-hover:text-white transition-colors uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-[1.2] group-hover:text-pak-green transition-colors line-clamp-3 relative z-10">
                  {blog.title}
                </h3>
                
                <p className="text-sm sm:text-base text-ink/60 font-medium mb-8 line-clamp-4 leading-relaxed relative z-10 group-hover:text-ink/80 transition-colors">
                  {blog.summary}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-2 border-white/10 overflow-hidden bg-white/5 group-hover:border-pak-green transition-colors">
                      <img src={author?.avatarUrl} alt={author?.name} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-black text-white group-hover:text-pak-green transition-colors tracking-tight">{author?.name}</span>
                      <span className="text-[10px] font-bold text-ink/30 uppercase tracking-[2px]">{author?.role}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-all shadow-lg shrink-0">
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SEO & Informative Sections */}
      <div className="mt-24 space-y-24">
        {/* Detailed SEO Content Section */}
        <section className="max-w-4xl mx-auto text-left py-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-10">
            Complete <span className="text-pak-green font-black">Pakistan Cricket Schedule 2026</span> & Guide
          </h2>
          <div className="space-y-8 text-ink/60 font-medium leading-relaxed text-lg">
            <p className="mb-4">
              <LinkText text="Welcome to the ultimate hub for the Pakistan cricket schedule 2026. If you are a fan looking for full fixtures, our platform provides everything in one place. We ensure that you get the latest match dates and updates directly from verified sources. This year, the PakCric Schedule is your primary portal for following the national team across all formats. From high-octane T20 matches to classic Test series, we bring you every detail." />
            </p>
            <p className="mb-4">
              <LinkText text="Our Pakistan cricket schedule 2026 covers home series and international tours. You can find detailed information about venues like Lahore and Karachi. We also track matches in international stadiums such as Colombo or Dhaka. Because timings are critical, we provide all match dates in Pakistan Standard Time (PKT). This helps fans plan their day. Use our full fixtures list to stay ahead. By using our service, you will never miss a match." />
            </p>
            <p className="mb-4">
              <LinkText text="The 2026 season is special. It features the Pakistan vs Bangladesh series and major world tournaments. Our PakCric Schedule updates daily to reflect changes. Whether it is a squad update or a venue shift, we notify you fast. We also track ICC Rankings. You can see where Pakistan stands in Tests, ODIs, and T20Is. Following the Pakistan cricket schedule 2026 has never been easier or faster." />
            </p>
            <p className="mb-4">
              <LinkText text="Why Choose our full fixtures guide? We focus on speed. Most sites are slow and filled with ads. We provide a clean interface. Our updates are verified by experts. We include match dates for every upcoming game. If you want to know about the Pakistan cricket team squad, we have that too. We analyze player stats and performance. This makes our Pakistan cricket schedule 2026 the most reliable fan resource online." />
            </p>
            <p>
              <LinkText text="Stay connected with PakCric Schedule for year-round coverage. We offer more than just a cricket schedule. Explore match dates, expert blogs, and tactical previews. Our goal is simple. We want every fan to enjoy cricket without hassle. Bookmark this page for the best Pakistan cricket schedule 2026 experience. We are committed to accuracy. We are committed to the fans. Together, we celebrate Pakistan cricket." />
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
            <Link to="/news" className="text-[10px] font-bold uppercase tracking-[3px] flex items-center gap-2 hover:translate-x-2 transition-transform">
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
              <Link to="/news" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-transparent border border-white/20 text-white rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
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
