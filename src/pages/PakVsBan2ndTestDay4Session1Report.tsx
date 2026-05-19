import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Clock,
  MapPin,
  Trophy,
  Zap,
  Target,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Activity,
  Shield,
  History,
  Timer,
  User,
  ExternalLink
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakVsBan2ndTestDay4Session1Report = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PAK vs BAN 2nd Test Day 4 Session 1 Report: Pakistan 101/2 at Lunch | PakCric</title>
        <meta name="description" content="Pakistan Day 4 Session 1 chasing 437 vs Bangladesh — Fazal out for 6 (Nahid Rana), Awais 32 out, Masood 20* & Babar 10* unbeaten 60-run stand at lunch. Full report." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Live Match Feed
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Day 4 Report
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 19, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                PAK 101/2 <br />
                <span className="text-pak-green">AT LUNCH.</span> <br />
                RESCUE MISSION ON.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4 mx-auto md:mx-0">
                Fazal falls early, but Masood and Babar anchor Pakistan in the massive 437-run chase against Bangladesh.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Phase</div>
                    <div className="text-2xl font-display font-bold text-white uppercase italic tracking-tighter">Lunch</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Score</div>
                    <div className="text-2xl font-display font-bold text-pak-green">101/2</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Target</div>
                    <div className="text-2xl font-display font-bold text-white uppercase tracking-tighter">437</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Wickets Left</div>
                    <div className="text-2xl font-display font-bold text-white">8</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scoreboard Table Section */}
      <section className="py-10 bg-white/[0.01]">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-2xl">
                  <div className="p-4 bg-white/5 border-b border-white/5 flex items-center gap-3">
                     <Trophy className="w-4 h-4 text-pak-green" />
                     <h2 className="text-xs font-black uppercase tracking-[2px] text-white">Match Scoreboard — At Lunch Day 4</h2>
                  </div>
                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead className="bg-black/40">
                           <tr>
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/40">Innings</th>
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-center">Score</th>
                              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-right">Status</th>
                           </tr>
                        </thead>
                        <tbody className="text-sm font-bold uppercase tracking-tight divide-y divide-white/5">
                           <tr>
                              <td className="p-4 text-white/60">BAN 1st Innings</td>
                              <td className="p-4 text-center">278</td>
                              <td className="p-4 text-right text-emerald-500">Complete</td>
                           </tr>
                           <tr>
                              <td className="p-4 text-white/60">PAK 1st Innings</td>
                              <td className="p-4 text-center">232</td>
                              <td className="p-4 text-right text-emerald-500">Complete</td>
                           </tr>
                           <tr>
                              <td className="p-4 text-white/60">BAN 2nd Innings</td>
                              <td className="p-4 text-center">390</td>
                              <td className="p-4 text-right text-emerald-500">Complete</td>
                           </tr>
                           <tr className="bg-pak-green/10">
                              <td className="p-4 text-white">PAK 2nd Innings</td>
                              <td className="p-4 text-center text-pak-green">101/2</td>
                              <td className="p-4 text-right text-pak-green animate-pulse">In Progress</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Batting Detail */}
      <section className="py-6">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-pak-green flex items-center justify-center">
                           <User className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-white">Current Batters</h3>
                     </div>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-2xl">
                           <span className="text-sm font-bold text-white">Shan Masood (c)</span>
                           <span className="text-pak-green font-black">20*</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-2xl">
                           <span className="text-sm font-bold text-white">Babar Azam</span>
                           <span className="text-pak-green font-black">10*</span>
                        </div>
                     </div>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col justify-center text-center">
                     <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Unbeaten Partnership</div>
                     <div className="text-5xl font-display font-black text-pak-green tracking-tighter">60</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mt-2 italic">Runs for the 3rd Wicket</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* News Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1531415080293-233414c59df9?auto=format&fit=crop&q=80&w=2000" alt="Pakistan batting chase" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Sylhet International Cricket Stadium</span>
                    </div>
                 </div>
              </div>

              <p>
                Pakistan will head into lunch on Day 4 in a much stronger position after an impressive recovery in Sylhet. Shan Masood and Babar Azam have steadied the innings brilliantly with an unbeaten 60-run partnership, taking Pakistan to 101/2 in the massive chase.
              </p>

              <p>
                Day 4 of the 2nd Test at Sylhet International Cricket Stadium began with Pakistan facing one of the most daunting chases in their recent Test history — <strong>437 runs to win</strong>, on a surface that had increasingly deteriorated over three and a half days of Test cricket. You can read our <Link to="/news/pakistan-playing-xi-prediction-2nd-test-bangladesh-sylhet-2026" className="text-pak-green hover:underline">full series preview and tactical analysis</Link> for more context on the Sylhet pitch.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic">The Overnight Context</h2>
              <p>
                Pakistan had survived the final 6 overs of Day 3 without losing a wicket — ending the third day at 0/0 with Awais (0*) and Fazal (0*) at the crease after bad light stopped play early. This followed a <Link to="/news/pak-vs-ban-2nd-test-day-2-session-1-report-sylhet-2026" className="text-pak-green hover:underline">disciplined opening stand on Day 2</Link> and a <Link to="/news/pak-vs-ban-2nd-test-toss-report-sylhet-2026" className="text-pak-green hover:underline">fruitful toss result</Link> for the visitors.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic">Early Blows: Fazal & Awais Out</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Target className="w-16 h-16 text-red-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 rounded-2xl bg-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                          <AlertCircle className="w-5 h-5 text-white" />
                       </div>
                       <h4 className="text-lg font-black uppercase tracking-widest text-red-500">Fazal Falls</h4>
                    </div>
                    <p className="text-sm font-medium text-white/60 mb-6">Abdullah Fazal: 6 off — c Mehidy b Nahid Rana — Fall: 27/1</p>
                    <p className="text-[11px] leading-relaxed italic text-white/40 border-t border-white/5 pt-6">
                       Nahid Rana produced a delivery of genuine quality. A sharp, rising delivery on a full length angling into Fazal.
                    </p>
                 </div>

                 <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Target className="w-16 h-16 text-red-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 rounded-2xl bg-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                          <AlertCircle className="w-5 h-5 text-white" />
                       </div>
                       <h4 className="text-lg font-black uppercase tracking-widest text-red-500">Awais Out</h4>
                    </div>
                    <p className="text-sm font-medium text-white/60 mb-6">Azan Awais: 32 — dismissed — Fall: 41/2</p>
                    <p className="text-[11px] leading-relaxed italic text-white/40 border-t border-white/5 pt-6">
                       The hero of from the 1st Test fell for 32. He had batted patiently but his dismissal left Pakistan reeling at 41/2.
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic text-pak-green drop-shadow-[0_0_10px_rgba(0,102,46,0.3)]">The Recovery Partnership</h2>
              <p>
                After both openers fell cheaply, the two most experienced batters in Pakistan's lineup — captain Shan Masood and the <Link to="/news/babar-azam-68-vs-bangladesh-2nd-test-sylhet-2026-report" className="text-pak-green hover:underline">returning Babar Azam (who scored 68 in the first innings)</Link> — came together. They provided the calm heads required.
              </p>
              
              <div className="space-y-6">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] hover:bg-white/[0.04] transition-all">
                    <div className="flex items-center justify-between mb-4">
                       <h4 className="text-sm font-black text-pak-green uppercase tracking-[3px]">Shan's Approach</h4>
                       <Shield className="w-5 h-5 text-pak-green/40" />
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                       Masood came out with a clear mindset: survive, rotate, build. He played the defensive late cut and punched drive through the covers with precision.
                    </p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] hover:bg-white/[0.04] transition-all">
                    <div className="flex items-center justify-between mb-4">
                       <h4 className="text-sm font-black text-pak-green uppercase tracking-[3px]">Babar's Control</h4>
                       <Zap className="w-5 h-5 text-pak-green/40" />
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                       The former captain immediately looked in control, playing each ball on its merit. His footwork against spin was particularly impressive.
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight italic">Brutal Mathematics: 336 Needed</h2>
              
              <div className="p-10 bg-pak-green/5 border border-pak-green/20 rounded-[40px] relative overflow-hidden">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-pak-green/10 blur-[80px] rounded-full" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                    <div>
                        <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">The Calculation</h4>
                        <ul className="space-y-4">
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Runs Needed</span>
                              <span className="text-lg font-black text-white">336</span>
                           </li>
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Wickets Left</span>
                              <span className="text-lg font-black text-white">8</span>
                           </li>
                           <li className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Reg. Run Rate</span>
                              <span className="text-lg font-black text-pak-green">~5.60</span>
                           </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                       <p className="text-xs font-medium text-white/60 italic leading-relaxed text-center">
                          "Acceleration from 3.37 to 5.60 per over is not realistic on this surface. The goal is to bat long and make Bangladesh bowl 60+ overs."
                       </p>
                       <div className="mt-4 flex flex-col items-center gap-3">
                          <Link to="/news/why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis" className="text-[10px] font-black uppercase text-red-500 hover:underline tracking-[1px]">Why Pakistan Lost the 1st Test →</Link>
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-pak-green" />
                             <span className="text-[9px] font-black uppercase text-white/40 tracking-[2px]">Tactical Analyst Room</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Coverage</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: "pakistan-bowling-bangladesh-2nd-innings-2nd-test-sylhet-2026", title: "PAK 2nd Innings Bowling", tag: "Analysis" },
                    { id: "mushfiqur-rahim-137-runs-vs-pakistan-2nd-test-record", title: "Mushfiqur Rahim's 137", tag: "Record" },
                    { id: "khurram-shahzad-4-wickets-vs-bangladesh-2nd-test-2026", title: "Khurram's 4-Wicket Spell", tag: "Spotlight" }
                  ].map((item, idx) => (
                    <Link key={idx} to={`/news/${item.id}`} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-pak-green/30 transition-all">
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-2">{item.tag}</span>
                       <h5 className="text-[11px] font-bold text-white group-hover:text-pak-green transition-colors uppercase leading-tight">{item.title}</h5>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-12 text-center">
                 <p className="text-[9px] font-black uppercase tracking-[3px] text-white/20 mb-6">External Coverage Resources</p>
                 <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://www.espncricinfo.com/series/pakistan-in-bangladesh-2026-1532478/bangladesh-vs-pakistan-2nd-test-1532487/live-cricket-score" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase hover:bg-white/10 transition-all">
                       Cricinfo Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://www.pcb.com.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase hover:bg-white/10 transition-all">
                       PCB Official <ExternalLink className="w-3 h-3" />
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="PAK vs BAN 2nd Test Day 4 Lunch: Masood-Babar Rescue Effort" 
        summary="Pakistan 101/2 at Lunch on Day 4. Chasing 437 in Sylhet." 
      />
    </div>
  );
};

export default PakVsBan2ndTestDay4Session1Report;
