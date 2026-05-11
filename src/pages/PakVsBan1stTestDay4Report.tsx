import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Target,
  Zap,
  Activity,
  AlertCircle,
  Clock,
  Star,
  Users,
  Award,
  Shield,
  Info,
  CloudRain,
  Timer,
  CheckCircle2,
  XCircle,
  TrendingUp,
  History
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import DetailedScorecard from '../components/DetailedScorecard';

export default function PakVsBan1stTestDay4Report() {
  const scoreboardHeaders = ["", "Score", "Status"];
  const scoreboardData = [
    ["Bangladesh 1st Innings", "413 all out", "Complete"],
    ["Pakistan 1st Innings", "386 all out", "Complete"],
    ["Bangladesh 2nd Innings", "93/2 (31 overs)", "Lunch — Day 4"],
    ["Bangladesh lead by", "120 runs", "(413 + 93 – 386)"]
  ];

  const currentBatters = [
    { name: 'Mominul Haque', score: '37*', balls: '82' },
    { name: 'Najmul Hossain Shanto', score: '34*', balls: '57' },
  ];

  const pakStats = [
    { name: 'Imam-ul-Haq', runs: 45, balls: 78, fours: 6, sixes: 0, status: 'lbw b Mehidy' },
    { name: 'Azan Awais', runs: 103, balls: '140', fours: '10+', sixes: 0, status: 'Dismissed', highlight: true },
    { name: 'Abdullah Fazal', runs: 60, balls: 120, fours: 7, sixes: 0, status: 'c mid-on b Taskin' },
    { name: 'Shan Masood', runs: 56, balls: '-', fours: 6, sixes: 0, status: 'b Mehidy' },
    { name: 'Saud Shakeel', runs: 0, balls: 1, fours: 0, sixes: 0, status: 'b Mehidy (Gold Duck)' },
    { name: 'Mohammad Rizwan', runs: 59, balls: '90', fours: 6, sixes: 0, status: 'Dismissed' },
    { name: 'Salman Ali Agha', runs: 58, balls: '100', fours: 5, sixes: 0, status: 'Dismissed' },
  ];

  const banBowling = [
    { name: 'Mehidy Hasan Miraz', figures: '5/102', description: '5-for, engine of the attack', color: 'text-pak-green' },
    { name: 'Taijul Islam', figures: '2/46', description: 'Economical and dangerous', color: 'text-white' },
    { name: 'Taskin Ahmed', figures: '2/70', description: 'Pace threat', color: 'text-white' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>PAK vs BAN 1st Test Day 4: Awais 103, Mehidy 5/102, BAN 93/2 Lead 120</title>
        <meta name="description" content="Azan Awais scored 103 on debut, Rizwan 59, Agha 58 as Pakistan posted 386. Mehidy Hasan Miraz took 5/102. Bangladesh 2nd innings 93/2 at lunch Day 4 lead 120." />
        <meta name="keywords" content="Pakistan vs Bangladesh 1st Test Day 4, Azan Awais century debut, Mehidy Hasan Miraz 5 wickets, Dhaka Test rain" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-20 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(1,65,30,0.3)]">
              <Zap className="w-3 h-3 fill-current" /> Match Report • Day 4 Lunch Update
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
              Awais <span className="text-pak-green italic text-stroke">Ton,</span> Mehidy <br /> 
              <span className="text-rose-500">5-For,</span> BAN Lead 120
            </h1>

            <p className="text-white/60 text-sm md:text-lg max-w-2xl font-medium tracking-tight">
              Azan Awais scores debut century, Mehidy claims five as Bangladesh take control with a 120-run lead at lunch on Day 4 in Dhaka.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-pak-green" /> 11 May 2026
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-pak-green" /> Mirpur, Dhaka
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card-bg border border-card-border rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
              
              <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-medium leading-relaxed">
                
                {/* Scoreboard at Lunch section */}
                <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-10 mb-12">
                   <h3 className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-8 flex items-center gap-2">
                     <Activity className="w-4 h-4 text-pak-green" /> SCOREBOARD AT LUNCH (DAY 4)
                   </h3>
                   <div className="overflow-x-auto">
                      <table className="w-full text-left mb-8">
                         <thead>
                            <tr className="border-b border-white/5">
                               {scoreboardHeaders.map((h, i) => (
                                 <th key={i} className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">{h}</th>
                               ))}
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-white/5 font-display italic">
                            {scoreboardData.map((row, i) => (
                              <tr key={i}>
                                <td className="py-4 text-sm font-bold text-white/60">{row[0]}</td>
                                <td className="py-4 text-sm font-black text-white uppercase">{row[1]}</td>
                                <td className="py-4 text-right">
                                  <span className={`text-[10px] font-black uppercase tracking-widest ${row[2].includes('Day 4') ? 'text-pak-green bg-pak-green/10 px-3 py-1 rounded-full' : 'text-neutral-500'}`}>
                                    {row[2]}
                                  </span>
                                </td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {currentBatters.map((b, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex justify-between items-center">
                           <div>
                              <p className="text-[10px] font-black text-neutral-500 uppercase mb-1">Batting Now</p>
                              <p className="text-sm font-bold text-white uppercase italic">{b.name}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-xl font-display font-black text-pak-green">{b.score}</p>
                              <p className="text-[9px] text-neutral-500 uppercase">{b.balls} balls</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight">Introduction: Azan Awais Delivers His Century, Mehidy Fights Back, Rain Lurks</h2>
                   <p>
                     Day 4 of the 1st Pakistan vs Bangladesh Test at Sher-e-Bangla Stadium, Mirpur arrived with the match beautifully poised. Pakistan had recovered from their early crisis to post a competitive total in their first innings — and Bangladesh were building their second innings lead with only 31 overs bowled before the heavens opened over Dhaka.
                   </p>
                   <p>
                     The highlight of the morning was undoubtedly <strong>Azan Awais</strong>, whose composed century on debut anchored Pakistan. However, Bangladesh vice-captain <strong>Mehidy Hasan Miraz</strong> ensured his side stayed in the driver's seat with a clinical 5-wicket haul.
                   </p>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight italic">Pakistan 1st Innings: <span className="text-pak-green">386 All Out</span></h2>
                   <p>
                     The big news from the conclusion of Pakistan's first innings was the delivery of one of the most celebrated achievements in Pakistan Test cricket in recent years. <strong>Azan Awais scored 103 on debut.</strong> Replacing Babar Azam, who was injured, the 21-year-old showed technique and temperament that defied his age.
                   </p>
                </div>

                {/* Scorecard Component */}
                <DetailedScorecard 
                  title="Pakistan 1st Innings Scorecard" 
                  batters={pakStats} 
                  bowlers={banBowling}
                  teamName="PAK vs BAN"
                />

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <Award className="w-8 h-8 text-pak-green" /> Azan Awais 103: The Debut Century
                   </h2>
                   <p>
                     Azan Awais walked out to bat with Pakistan in genuine trouble — Babar Azam injured, the team 363 runs behind. He finished with <strong>103 runs in his first Test innings</strong>. His century makes him one of only a handful of Pakistani batters to score a hundred on Test debut, joining names like Khalid Ibadulla (1967) and Mohammad Wasim (1997).
                   </p>
                   <p>
                     He did not slog or slash his way to the century. He batted with technical precision — leaving deliveries outside off stump, playing the sweep and paddle against the spinners, and converting his overnight 85 into three figures by finding doubles and sharp singles.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                   <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-pak-green flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> THE DESTROYER
                      </h4>
                      <h5 className="text-3xl font-display font-black text-white italic uppercase">Mehidy Hasan <br /> 5/102</h5>
                      <p className="text-sm text-white/50 leading-relaxed font-medium italic underline underline-offset-4 decoration-pak-green/30">
                        His first five-wicket haul of the series and the most impactful individual bowling performance in the innings.
                      </p>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 space-y-4 text-right">
                      <h4 className="text-sm font-black uppercase tracking-widest text-rose-500 flex items-center justify-end gap-2">
                        <CloudRain className="w-4 h-4" /> RAIN THREAT
                      </h4>
                      <h5 className="text-3xl font-display font-black text-white italic uppercase">DHAKA <br /> WEATHER</h5>
                      <p className="text-sm text-white/50 leading-relaxed font-medium italic underline underline-offset-4 decoration-rose-500/30">
                        Heavy rain and bad light interrupted Day 4, with Dhaka skies threatening a complete washout.
                      </p>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <History className="w-8 h-8 text-pak-green" /> The Battle of 27 Runs
                   </h2>
                   <p>
                     Pakistan conceded a 27-run first-innings lead. On a Mirpur surface that is deteriorating with every session, 27 runs becomes significant — because whatever Bangladesh set as their 2nd innings declaration target will come on a Day 5 pitch that will turn dramatically.
                   </p>
                   <div className="p-8 bg-pak-green/10 border border-pak-green/30 rounded-[40px] flex flex-col md:flex-row items-center justify-center gap-12 text-center">
                      <div>
                        <p className="text-[10px] font-black text-neutral-500 uppercase mb-2">BAN 1st Innings</p>
                        <p className="text-4xl font-display font-black text-white">413</p>
                      </div>
                      <div className="text-pak-green italic font-black uppercase tracking-[4px]">VS</div>
                      <div>
                        <p className="text-[10px] font-black text-neutral-500 uppercase mb-2">PAK 1st Innings</p>
                        <p className="text-4xl font-display font-black text-white">386</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight">Day 4 Session 1: Pakistan Remove Both Openers</h2>
                   <p>
                     Pakistan struck immediately when play began. <strong>Mohammad Abbas</strong> trapped Mahmudul Hasan Joy lbw for 0 with the very first ball of the morning. Shortly after, <strong>Hasan Ali</strong> used the variable bounce to dismiss Shadman Islam (10), caught at gully.
                   </p>
                   <p>
                     However, Mominul Haque (37*) and Najmul Hossain Shanto (34*) rebuilt with an unbroken 70-run stand, extending the lead to 120 by lunch. A dropped catch by Rizwan off Mominul proved to be a costly miss for the visitors.
                   </p>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-12 mb-12">
                   <h3 className="text-xl font-display font-black text-pak-green uppercase mb-8">FALL OF WICKETS (BAN 2ND)</h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-6 group">
                        <div className="text-2xl font-display font-black text-white/10 group-hover:text-pak-green transition-colors">01</div>
                        <div>
                          <p className="text-sm font-bold text-white uppercase italic">Mahmudul Hasan Joy (0)</p>
                          <p className="text-[10px] text-neutral-500 uppercase font-black italic">Score at Fall: 0 | lbw b Abbas</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 group">
                        <div className="text-2xl font-display font-black text-white/10 group-hover:text-pak-green transition-colors">02</div>
                        <div>
                          <p className="text-sm font-bold text-white uppercase italic">Shadman Islam (10)</p>
                          <p className="text-[10px] text-neutral-500 uppercase font-black italic">Score at Fall: 23 | c Gully b Hasan Ali</p>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="bg-red-600/10 border border-red-600/30 rounded-[32px] p-8 md:p-10 my-12">
                   <h3 className="text-xl font-display font-bold text-white uppercase mb-4 flex items-center gap-3">
                     <CloudRain className="w-6 h-6 text-red-500" /> The Match's Third Protagonist: RAIN
                   </h3>
                   <p className="text-sm md:text-base leading-relaxed text-white/80">
                     Dhaka's weather on Day 4 has been unpredictable. From non-stop heavy rain to sunshine peeking through the clouds, the interruptions have shortened play. If rain takes 40+ overs from the remaining time, a draw becomes the most likely result despite Bangladesh's healthy 120-run lead.
                   </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-16">
                   <Link 
                     to="/news" 
                     className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-[10px] font-black uppercase tracking-[3px] text-center hover:bg-white hover:text-[#050505] transition-all"
                   >
                     Back to News Hub
                   </Link>
                   <Link 
                     to="/news/pak-vs-ban-1st-test-day-3-session-1-report-2026" 
                     className="flex-1 px-8 py-5 bg-pak-green text-white rounded-3xl text-[10px] font-black uppercase tracking-[3px] text-center hover:shadow-[0_0_30px_rgba(1,65,30,0.4)] transition-all"
                   >
                     Day 3 Report
                   </Link>
                </div>
              </div>
            </div>

            <AdPlaceholder type="leaderboard" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
               
               {/* Quick Stats Widget */}
               <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Target className="w-24 h-24" />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-8">Match Status</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">120</div>
                        <p className="text-xs font-bold text-white/60 italic">BAN Lead (Runs)</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">08</div>
                        <p className="text-xs font-bold text-white/60 italic">BAN Wickets Left</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-rose-600/10 flex items-center justify-center text-rose-500 font-bold text-sm">5</div>
                        <p className="text-xs font-bold text-white/60 italic">Mehidy Wickets</p>
                     </div>
                  </div>
               </div>

               {/* Related Stories */}
               <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[3px] text-neutral-500">Related Highlights</h4>
                  <div className="space-y-8">
                     <Link to="/news/azan-awais-pakistan-test-debut-masterclass-dhaka" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Masterclass</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Azan Awais: Debut Century Deep Dive</h5>
                     </Link>
                     <Link to="/news/mohammad-rizwan-59-vs-bangladesh-1st-test-day-3-2026" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Day 3 High</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Mohammad Rizwan's Crucial 59 Analysis</h5>
                     </Link>
                     <Link to="/news/salman-agha-58-vs-bangladesh-1st-test-day-3-2026" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Turning Point</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Salman Agha's 58 & No-Ball Drama</h5>
                     </Link>
                     <Link to="/news/pak-vs-ban-1st-test-day-3-session-1-report-2026" className="block group">
                        <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-2">Session Review</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">How Day 3 Redefined the Test</h5>
                     </Link>
                     <Link to="/news/mohammad-abbas-bowling-bangladesh-2026" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Pace Analysis</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Mohammad Abbas: Mirpur's Seam Hero</h5>
                     </Link>
                  </div>
               </div>

               <AdPlaceholder type="native" />
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection title="Explore More Test Stories" />
    </div>
  );
}
