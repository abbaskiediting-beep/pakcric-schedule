import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Calendar, 
  ArrowLeft,
  Share2,
  TrendingUp,
  Star,
  Target,
  Users,
  ChevronRight,
  Zap,
  MapPin,
  Clock,
  Info,
  Activity,
  AlertTriangle
} from 'lucide-react';

const BangladeshTeamAnalysisBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Bangladesh Cricket Team 2026: Complete Squad Analysis & Strategy | PakCric</title>
        <meta name="description" content="In-depth analysis of Bangladesh's Test squad for the 2026 series against Pakistan. Key players, spin weapons, pace X-factors and fitness concerns." />
        <meta name="keywords" content="Bangladesh Cricket Team 2026, Najmul Shanto, Taijul Islam, Mehidy Hasan Miraz, Nahid Rana, Bangladesh vs Pakistan Test Series" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pak-green/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Team Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> May 7, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Lions are <br /><span className="text-emerald-500 font-black">READY TO ROAR.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                In 2024, they shocked Pakistan away. Now, in 2026, the Tigers aim to repeat history on home soil. A complete breakdown of Bangladesh's Test ambition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-white/[0.02] p-8 rounded-[32px] border border-white/10">
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">ICC Ranking</div>
                    <div className="text-3xl font-display font-bold text-emerald-500">9th <span className="text-sm font-normal text-white/20">TESTS</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">WTC Standings</div>
                    <div className="text-3xl font-display font-bold">8th <span className="text-sm font-normal text-white/20">CYCLE</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Key Weapon</div>
                    <div className="text-3xl font-display font-bold text-pak-green">SPIN <span className="text-sm font-normal text-white/20">DHAKA</span></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="container mx-auto px-4 max-w-4xl">
         <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Bangladesh Cricket Team Celebration" 
            className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl brightness-75 border border-white/10"
         />
      </div>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                In 2024, Bangladesh cricket did something nobody had managed in years — they walked into Pakistan, played Test cricket on Pakistani soil, and came home with a <span className="text-white font-bold">2-0 series win</span>. It announced Bangladesh as a genuine Test nation.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The Captaincy Crisis</h2>
              <p>
                <span className="text-emerald-500 font-bold">Najmul Hossain Shanto</span> is the heartbeat of this team. However, heading into the Pakistan series, there is a big worry: Shanto suffered a hamstring injury recently.
              </p>

              <div className="bg-red-500/5 border-l-4 border-red-500 p-8 rounded-r-2xl flex items-start gap-6">
                 <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
                 <div>
                    <h4 className="text-white font-bold mb-2">Injury Update</h4>
                    <p className="text-sm text-white/60">Shanto is carrying a hamstring strain. If he misses the 1st Test, Mehidy Hasan Miraz will step up as captain, but the batting order will lose its most stable anchor.</p>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The Spin Arsenal: Bangladesh's Greatest Weapon</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <Zap className="w-8 h-8 text-emerald-500 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Taijul Islam</h4>
                    <p className="text-sm text-white/50 leading-relaxed">The left-arm destroyer. His record at Sher-e-Bangla Stadium is extraordinary. Against Babar and Masood, Taijul's arm-ball will be lethal.</p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <Activity className="w-8 h-8 text-pak-green mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Mehidy Hasan Miraz</h4>
                    <p className="text-sm text-white/50 leading-relaxed">The all-rounder threat. His subtle off-spin variations and lower-order resilience give Bangladesh a safety net.</p>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Nahid Rana: The Express X-Factor</h2>
              <p>
                The 22-year-old <span className="text-white font-bold">Nahid Rana</span> is Bangladesh's most exciting fast-bowling talent in a decade. Capable of 145+ kmph, he provides the raw pace that can unnerve even the most settled openers on Day 1.
              </p>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] overflow-hidden my-12">
                  <div className="p-8 border-b border-white/10 bg-emerald-500/5">
                     <h3 className="text-xl font-display font-bold uppercase tracking-tight">Full 15-Member Squad</h3>
                  </div>
                  <div className="p-8 overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="text-white/40 uppercase text-[10px] tracking-widest border-b border-white/5">
                              <th className="pb-4">Player</th>
                              <th className="pb-4">Role</th>
                              <th className="pb-4">Status</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {[
                              { name: 'Najmul Shanto (c)', role: 'Opener', status: 'Captain' },
                              { name: 'Mushfiqur Rahim', role: 'Batter', status: 'Veteran' },
                              { name: 'Mehidy Miraz', role: 'All-rounder', status: 'Vice Captain' },
                              { name: 'Taijul Islam', role: 'Spinner', status: 'Lead Bowler' },
                              { name: 'Nahid Rana', role: 'Pacer', status: 'X-Factor' },
                              { name: 'Amite Hasan', role: 'Batter', status: 'Uncapped' }
                           ].map((p, i) => (
                              <tr key={i} className="text-sm group hover:bg-white/[0.02]">
                                 <td className="py-4 font-bold text-white">{p.name}</td>
                                 <td className="py-4 text-white/60">{p.role}</td>
                                 <td className="py-4 text-[10px] uppercase font-black text-emerald-500">{p.status}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight text-emerald-500">Strengths & Weaknesses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-2 text-pak-green">
                       <Zap className="w-5 h-5" />
                       <span className="font-bold uppercase tracking-tighter">Strengths</span>
                    </div>
                    <ul className="space-y-3">
                       {['Extreme Home Advantage', 'Elite Spin Duo', 'Express Pace Option', 'Experienced Middle Order'].map((s, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                             <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> {s}
                          </li>
                       ))}
                    </ul>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-2 text-red-500">
                       <Info className="w-5 h-5" />
                       <span className="font-bold uppercase tracking-tighter">Weaknesses</span>
                    </div>
                    <ul className="space-y-3">
                       {['Captain Injury Cloud', 'Pace Vulnerability (Top Order)', 'Lower Order Fragility', 'Inconsistent Away Forms'].map((w, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                             <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {w}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
              
              <p className="text-xl font-bold text-emerald-500 italic mt-12">
                "The message from Dhaka is clear: The Tigers are ready to roar again. Pakistan will need more than just reputation to survive the Trial by Spin starting May 8."
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-emerald-500 mb-8">Related Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2026-test-trophy-reveal" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Trophy Reveal</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">Masood & Shanto Unveil Prize</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500" />
                  </Link>
                  <Link to="/news/pakistan-vs-bangladesh-wtc-analysis-2025-2027" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">WTC Scenarios</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">The Road to WTC Final 2027</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Share */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-3xl bg-emerald-500 text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-emerald-500/40 group relative">
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BangladeshTeamAnalysisBlog;
