import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingDown,
  Target, 
  History as HistoryIcon, 
  Quote, 
  TrendingUp, 
  Award, 
  Clock, 
  User,
  Shield,
  Star,
  Activity,
  ArrowRight,
  Trophy,
  Zap,
  Info,
  Calendar,
  ChevronUp,
  ChevronDown,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

export default function PakistanWTCStandingsBlog() {
  const pageTitle = "Pakistan WTC 2025-27 Standings — Points Table Updated";
  const metaDescription = "Pakistan WTC 2025-27 points table updated after every Test match. Check Pakistan's win percentage, points and position in ICC World Test Championship standings.";

  const wtcData = [
    { pos: 1, team: 'Australia', flag: '🇦🇺', m: 8, w: 7, l: 1, d: 0, pts: 84, pct: '87.50%', trend: 'neutral' },
    { pos: 2, team: 'New Zealand', flag: '🇳🇿', m: 3, w: 2, l: 0, d: 1, pts: 28, pct: '77.78%', trend: 'neutral' },
    { pos: 3, team: 'South Africa', flag: '🇿🇦', m: 4, w: 3, l: 1, d: 0, pts: 36, pct: '75.00%', trend: 'neutral' },
    { pos: 4, team: 'Sri Lanka', flag: '🇱🇰', m: 2, w: 1, l: 0, d: 1, pts: 16, pct: '66.67%', trend: 'neutral' },
    { pos: 5, team: 'India', flag: '🇮🇳', m: 9, w: 4, l: 4, d: 1, pts: 52, pct: '48.15%', trend: 'up' },
    { pos: 6, team: 'Bangladesh', flag: '🇧🇩', m: 3, w: 1, l: 1, d: 1, pts: 16, pct: '44.44%', trend: 'up' },
    { pos: 7, team: 'Pakistan', flag: '🇵🇰', m: 3, w: 1, l: 2, d: 0, pts: 12, pct: '33.33%', trend: 'down' },
    { pos: 8, team: 'England', flag: '🏴', m: 10, w: 3, l: 6, d: 1, pts: 38, pct: '31.67%', trend: 'down' },
    { pos: 9, team: 'West Indies', flag: '🌴', m: 8, w: 0, l: 7, d: 1, pts: 4, pct: '4.17%', trend: 'neutral' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="WTC Standings 2025-27, Pakistan WTC ranking, ICC World Test Championship points table, Pakistan vs Bangladesh WTC impact" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              <TrendingDown className="w-3 h-3 fill-current" /> Standings Update
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-6xl">
              WTC Rankings <br />
              <span className="text-red-600 italic">Pakistan Slump</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400 italic">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> May 12, 2026</span>
               <span className="flex items-center gap-2 text-pak-green"><User className="w-4 h-4" /> Hassan Tariq</span>
               <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> WTC 2025-27</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="pakistan-wtc-standings-2026" label="Save Standings" className="bg-white/10" />
              <ShareButton 
                title={pageTitle}
                text={metaDescription}
                url={window.location.href}
                variant="outline"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card-bg border border-card-border rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
              <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-medium leading-relaxed">
                
                <p className="text-2xl text-white font-display font-bold italic leading-tight pt-4">
                  Pakistan slipped down the World Test Championship points table following their defeat to Bangladesh in the opening Test of the two-match series.
                </p>

                <p>
                  The "Mirpur Meltdown" didn't just cost Pakistan a match; it has severely damaged their path to the 2027 Final. From 5th place, Pakistan has plummeted to 7th, now sitting with a precarious PCT of 33.33%.
                </p>

                <div className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-6 md:p-10 my-12 overflow-x-auto">
                   <h3 className="text-xl font-display font-black text-white uppercase italic mb-8 flex items-center gap-4">
                      <Trophy className="w-6 h-6 text-yellow-500" /> WTC 2025-27 Standings
                   </h3>
                   <table className="w-full text-left font-mono text-xs md:text-sm">
                      <thead>
                         <tr className="border-b border-white/10 text-neutral-500 uppercase tracking-widest">
                            <th className="pb-4 font-black">Pos</th>
                            <th className="pb-4 font-black">Team</th>
                            <th className="pb-4 font-black text-center">M</th>
                            <th className="pb-4 font-black text-center">W-L-D</th>
                            <th className="pb-4 font-black text-center">Pts</th>
                            <th className="pb-4 font-black text-right text-white">PCT%</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {wtcData.map((row) => (
                            <tr key={row.team} className={`group transition-all hover:bg-white/5 ${row.team === 'Pakistan' ? 'bg-red-600/5' : ''}`}>
                               <td className="py-4 font-black text-neutral-400">
                                  {row.pos}
                                  {row.trend === 'up' && <ChevronUp className="w-3 h-3 text-emerald-500 inline ml-1" />}
                                  {row.trend === 'down' && <ChevronDown className="w-3 h-3 text-red-500 inline ml-1" />}
                               </td>
                               <td className="py-4 font-black text-white">
                                  <span className="mr-2 text-base">{row.flag}</span>
                                  {row.team}
                               </td>
                               <td className="py-4 text-center">{row.m}</td>
                               <td className="py-4 text-center">{row.w}-{row.l}-{row.d}</td>
                               <td className="py-4 text-center">{row.pts}</td>
                               <td className={`py-4 text-right font-black italic ${row.pos <= 2 ? 'text-yellow-500' : 'text-white'}`}>
                                  {row.pct}
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>

                <div className="space-y-12">
                   <div className="space-y-4">
                      <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">How Bad Is It?</h2>
                      <p>
                        The Tigers now sit sixth on the table with a win percentage of 44.44. Pakistan, meanwhile, have dropped to seventh after winning one and losing two of their three matches, earning 12 points with a win percentage of 33.33. India moved up to 5th by default, while the top three—Australia, New Zealand, and South Africa—remain comfortably clear of the mid-table chaos.
                      </p>
                   </div>

                   <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-8">
                      <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">The Path to 2027 Final</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="space-y-2">
                            <span className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-xs font-black">01</span>
                            <h4 className="text-sm font-black text-white uppercase">Win Sylhet</h4>
                            <p className="text-[10px] text-neutral-400">An absolute must-win. Any result other than a victory ends the mathematical race.</p>
                         </div>
                         <div className="space-y-2">
                            <span className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-xs font-black">02</span>
                            <h4 className="text-sm font-black text-white uppercase">Clean Sweep</h4>
                            <p className="text-[10px] text-neutral-400">Pakistan likely need to win all remaining home and away Tests to push their PCT above 60%.</p>
                         </div>
                         <div className="space-y-2">
                            <span className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-xs font-black">03</span>
                            <h4 className="text-sm font-black text-white uppercase">Result Luck</h4>
                            <p className="text-[10px] text-neutral-400">They need South Africa and India to trade losses and drop points consistently.</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-2xl my-12 group">
                   <div className="flex items-start gap-6 relative z-10">
                      <Quote className="w-12 h-12 text-red-500 shrink-0 opacity-20" />
                      <div className="space-y-4">
                         <p className="text-xl font-display font-bold text-white uppercase italic leading-relaxed">
                            "Test cricket on surfaces like this teaches you that when you have the game in your hands you have to push the opposition away, but we failed to do that. We have pushed ourselves into a corner now."
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pak-green flex items-center justify-center font-black text-[10px] text-white">SM</div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-white">Shan Masood</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Pakistan Captain</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] my-12 space-y-8">
                   <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">What's Next?</h2>
                   <p className="text-sm leading-relaxed">
                      Pakistan now prepares for a high-intensity 2nd Test in Sylhet. The squad expects Babar Azam to return, which could be the catalyst they need to restart their WTC campaign.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link to="/pakistan-tour-bangladesh-test-2026" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-2 underline decoration-yellow-500/20">Series Schedule</span>
                        <span className="text-sm font-black text-white uppercase italic">Sylhet Test Timings</span>
                      </Link>
                      <Link to="/news/pakistan-2nd-innings-collapse-163-all-out-bangladesh-2026-report" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-2 underline decoration-red-500/20">Match Report</span>
                        <span className="text-sm font-black text-white uppercase italic">Mirpur Loss Details</span>
                      </Link>
                   </div>
                </div>

              </div>
            </div>

            <AdPlaceholder type="banner" className="my-12" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Quick Status Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                   <Shield className="w-8 h-8 text-red-600 opacity-20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8 italic">PAK Standing</h3>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Position</span>
                      <span className="text-xl font-display font-black text-red-600 uppercase italic">7th</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Points</span>
                      <span className="text-sm font-black text-white uppercase italic">12 PTS</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-red-600/10 rounded-2xl border border-red-600/20">
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Current PCT%</span>
                      <span className="text-lg font-display font-black text-red-600 uppercase italic">33.33%</span>
                   </div>
                </div>
              </div>

              {/* Related Analysis */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 italic">More Analysis</h3>
                <div className="space-y-4">
                  <Link 
                     to="/news/why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <AlertTriangle className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">7 Reasons for Defeat</span>
                  </Link>
                  <Link 
                     to="/news/babar-azam-declared-fit-for-2nd-test-vs-bangladesh-2026"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                        <Zap className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">Babar Returns</span>
                  </Link>
                </div>
              </div>

              {/* Social CTA */}
              <div className="bg-pak-green border border-green-700/20 p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,102,68,0.4)]">
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">WTC Statistics.</h4>
                    <p className="text-xs font-bold text-white/60 uppercase leading-relaxed">
                       Stay updated with every point and percentage change. Follow us for live table updates.
                    </p>
                    <a 
                      href="https://twitter.com/pakcricschedule" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
                    >
                      Follow Live Table <ArrowRight className="w-3 h-3" />
                    </a>
                 </div>
                 <Activity className="absolute -bottom-10 -right-10 w-40 h-40 text-black/10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
