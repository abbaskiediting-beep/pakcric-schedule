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
  Timer,
  Star,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function PakVsBan1stTestDay3Session1Report() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>PAK vs BAN Day 3 Session 1: 4 Wickets Fall, PAK 251/5 at Lunch</title>
        <meta name="description" content="Bangladesh struck 4 times in Day 3 morning session vs Pakistan. Azan Awais 85 dismissed, Fazal 60 out, Shan Masood 56 falls, Saud Shakeel 0. Pakistan 251/5 at lunch — trail Bangladesh by 162 runs." />
        <meta name="keywords" content="PAK vs BAN 1st Test Day 3 Session 1, Bangladesh vs Pakistan cricket updates, Azan Awais 85, Saud Shakeel duck, Mehidy Hasan Miraz bowling" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PAK vs BAN 1st Test Day 3 Session 1: Bangladesh Strike Four Times in Horror Morning" />
        <meta property="og:description" content="Bangladesh struck 4 times in Day 3 morning session vs Pakistan. Azan Awais 85 dismissed, Fazal 60 out, Shan Masood 56 falls, Saud Shakeel 0. Pakistan 251/5 at lunch." />
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
            <div className="flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              <Zap className="w-3 h-3 fill-current" /> Session Update • Day 3 Morning
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] max-w-5xl">
              Bangladesh <span className="text-red-500 italic">Strike Four</span> <br /> 
              <span className="text-pak-green">Times</span> in Horror Morning
            </h1>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-pak-green" /> 10 May 2026
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-pak-green" /> 13:43 PKT
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
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                   <div className="flex-1">
                      <p className="text-xl md:text-2xl text-white font-display font-bold italic leading-snug">
                        Pakistan had ended Day 2 in a position of genuine optimism. However, Day 3 told a different story as Bangladesh struck with four wickets in the morning session, leaving Pakistan 251/5 at lunch, trailing by 162 runs.
                      </p>
                   </div>
                </div>

                <div className="overflow-x-auto bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-10 mb-12">
                   <h3 className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
                     <Timer className="w-4 h-4 text-pak-green" /> DAY 3 LUNCH SCORECARD
                   </h3>
                   <table className="w-full text-left">
                     <thead>
                       <tr className="border-b border-white/10">
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Innings</th>
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Score</th>
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Overs</th>
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-right">Status</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5 font-display">
                       <tr>
                         <td className="py-5 text-lg font-bold text-white uppercase italic">Bangladesh 1st</td>
                         <td className="py-5 text-lg font-bold text-white/60 text-center">413 ALL OUT</td>
                         <td className="py-5 text-lg font-bold text-white/40 text-center">105.4</td>
                         <td className="py-5 text-lg font-bold text-white text-right">COMPLETE</td>
                       </tr>
                       <tr className="bg-pak-green/5">
                         <td className="py-5 text-lg font-bold text-white uppercase italic">Pakistan 1st</td>
                         <td className="py-5 text-xl font-black text-pak-green">251/5</td>
                         <td className="py-5 text-lg font-bold text-white/60 text-center">71.0</td>
                         <td className="py-5 text-lg font-bold text-emerald-400 text-right">LUNCH</td>
                       </tr>
                     </tbody>
                   </table>
                   <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-between gap-4 items-center text-[11px] font-black uppercase tracking-[2px]">
                     <p className="text-neutral-500">Pakistan trail by <span className="text-white">162 Runs</span></p>
                     <div className="flex gap-4">
                        <span className="text-pak-green">Salman Ali Agha 12*</span>
                        <span className="text-pak-green">Mohammad Rizwan 8*</span>
                     </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <Activity className="w-8 h-8 text-pak-green" /> The Morning Collapse
                   </h2>
                   <p>
                     Pakistan overnight position was 179/1, but the morning session saw them lose four wickets for just 72 runs. Azan Awais, the hero of Day 2, was dismissed for 85, missing out on a historic debut century by just 15 runs. Abdullah Fazal also fell for 60 after a patient knock, while captain Shan Masood's fifty (56) ended shortly after.
                   </p>
                   <p>
                     The most devastating blow came when Saud Shakeel was dismissed for a golden duck by Mehidy Hasan Miraz, who has been the standout bowler for the hosts.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-pak-green/30 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                          <Target className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">Azan Awais (85)</h4>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed italic">
                        "The delivery that got him was not a bad ball — it was a smart, disciplined piece of bowling that found the edge as Awais attempted to drive."
                      </p>
                   </div>
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-pak-green/30 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                          <Target className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">Saud Shakeel (0)</h4>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed italic">
                        "Shakeel tried to take Mehidy Hasan Miraz rather early and missed a straight one as he looked to sweep it. Went for 0."
                      </p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight italic">Mehidy Hasan: The Man Who <span className="text-pak-green">Broke Pakistan</span></h2>
                <p>
                  The morning session's bowling hero was undoubtedly <strong>Mehidy Hasan Miraz</strong>. Bangladesh's vice-captain and premier off-spinner led from the front, hitting his lengths with surgical precision and making Pakistan's middle order look thoroughly uncomfortable on a surface that is beginning to show more bite.
                </p>
                <p>
                  His role as a leader in this attack was evident as he orchestrated the collapse. Perhaps the most telling moment of the entire morning was his dismissal of <strong>Saud Shakeel</strong> for a golden duck. Shakeel, widely regarded as Pakistan's most technically sound batter against spin, was tempted into an early sweep and beaten by the sheer accuracy of Mehidy's angle from around the wicket. Finishing the session with figures of 3/60, Mehidy proved why he is the standout performer in these conditions.
                </p>
                <p>
                  However, the pressure was a two-pronged assault. <strong>Taskin Ahmed</strong> played a key role in providing the early breakthroughs with the new ball, utilizing the morning moisture and bounce to keep the set batters on their toes. His partnership with Mehidy Hasan Miraz was particularly potent, as Taskin's aggressive pace from one end complemented Mehidy's tactical spin from the other, leaving Pakistan with no room to breathe.
                </p>
                <div className="bg-red-600/10 border border-red-600/30 rounded-[32px] p-8 md:p-10 my-8">
                   <h3 className="text-xl font-display font-bold text-white uppercase mb-4 flex items-center gap-3">
                     <AlertCircle className="w-6 h-6 text-red-500" /> The Taskin No-Ball Scare
                   </h3>
                   <p className="text-sm md:text-base leading-relaxed text-white/80">
                     The tension peaked when Taskin Ahmed thought he had delivered the knockout blow by bowling <strong>Salman Ali Agha</strong>. Bangladesh erupted in celebration as the stumps were rattled, only for the joy to be short-lived as the umpire signaled a <strong>no-ball</strong>. Bangladesh would have crept even further ahead had that been a legal delivery, but instead, it served as a massive let-off and a crucial lifeline for Pakistan's remaining middle order.
                   </p>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-12 mb-12">
                   <h3 className="text-xl font-display font-black text-pak-green uppercase mb-8">FALL OF WICKETS (MORNING)</h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                         <span className="text-2xl font-display font-black text-white/20 italic tracking-tighter">03</span>
                         <div className="flex-1">
                            <h5 className="text-sm font-bold text-white mb-1">Azan Awais (85) • Score: ~195</h5>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">Dismissed short of century</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                         <span className="text-2xl font-display font-black text-white/20 italic tracking-tighter">04</span>
                         <div className="flex-1">
                            <h5 className="text-sm font-bold text-white mb-1">Abdullah Fazal (60) • Score: 230</h5>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">Caught at mid-on</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 border-b border-white/5 pb-4">
                         <span className="text-2xl font-display font-black text-white/20 italic tracking-tighter">05</span>
                         <div className="flex-1">
                            <h5 className="text-sm font-bold text-white mb-1">Shan Masood (56) • Score: ~235</h5>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">Captain falls for fifty</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 pb-4">
                         <span className="text-2xl font-display font-black text-white/20 italic tracking-tighter">06</span>
                         <div className="flex-1">
                            <h5 className="text-sm font-bold text-white mb-1">Saud Shakeel (0) • Score: 230/5</h5>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">Golden Duck • b Mehidy</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <Star className="w-8 h-8 text-pak-green" /> Session Verdict
                   </h2>
                   <p>
                     <strong>Bangladesh won the morning session comprehensively.</strong> Four wickets for just 72 runs against a Pakistan batting side that had looked very assured overnight is a testament to the tactical discipline shown by the hosts.
                   </p>
                   <p>
                     The standout factor was the impact of <strong>Mehidy Hasan Miraz</strong>. His off-spin on a wearing Mirpur surface proved too much for Pakistan's middle order. By hitting consistent lengths and using the natural variations of the pitch, he forced errors from seasoned batters like Saud Shakeel and Shan Masood.
                   </p>
                   <p>
                     The pitch itself is starting to play its part. As Day 3 progresses, the surface is deteriorating, with puffs of dust emerging and the ball starting to stay low or turn sharply. This makes the afternoon session even more challenging for the visitors as they look to close the massive deficit.
                   </p>
                </div>

                <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight">The Road Ahead: Afternoon Session</h2>
                <p>
                  Salman Ali Agha and Mohammad Rizwan did well to stay strong after the collapse. They have stitched 21 runs so far and both batters look comfortable leaving the ball outside off stump. Pakistan have avoided the follow-on, but the afternoon session will be crucial. If they can build a partnership and get within 100 runs of Bangladesh's total, they can still make this a contest.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mt-16">
                   <Link 
                     to="/news" 
                     className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-[10px] font-black uppercase tracking-[3px] text-center hover:bg-white hover:text-[#050505] transition-all"
                   >
                     Back to News Hub
                   </Link>
                   <Link 
                     to="/schedule" 
                     className="flex-1 px-8 py-5 bg-pak-green text-white rounded-3xl text-[10px] font-black uppercase tracking-[3px] text-center hover:shadow-[0_0_30px_rgba(1,65,30,0.4)] transition-all"
                   >
                     Match Schedule
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
                    <Users className="w-24 h-24" />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-8">Session Verdict</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">4</div>
                        <p className="text-xs font-bold text-white/60">Wickets in 31 Overs</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">72</div>
                        <p className="text-xs font-bold text-white/60">Runs in Session 1</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">162</div>
                        <p className="text-xs font-bold text-white/60">Current Match Deficit</p>
                     </div>
                  </div>
               </div>

               {/* Related Stories */}
               <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[3px] text-neutral-500">Related Highlights</h4>
                  <div className="space-y-8">
                     <Link to="/news/pak-vs-ban-1st-test-day-2-sessions-blog" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Day 2 Report</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Abbas Fifer & Azan Awais' Debut Masterclass</h5>
                     </Link>
                     <Link to="/news/azan-awais-pakistan-test-debut-bangladesh-2026" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Technical Analysis</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Why Azan Awais is Pakistan's Long-term Project</h5>
                     </Link>
                     <Link to="/news/mohammad-abbas-bowling-bangladesh-2026" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Bowling Deep-Dive</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">The Return of Mohammad Abbas: Discipline is Key</h5>
                     </Link>
                  </div>
               </div>

               <AdPlaceholder type="native" />
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
