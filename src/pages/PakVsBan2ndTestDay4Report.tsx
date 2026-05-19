import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  Zap,
  Star,
  Activity,
  ChevronRight,
  TrendingUp,
  Clock,
  Shield,
  Target,
  ArrowRight
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakVsBan2ndTestDay4Report = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan vs Bangladesh 2nd Test Day 4 Report Sylhet 2026 | PakCric</title>
        <meta name="description" content="Pakistan close Day 4 at 316/7 chasing 437 vs Bangladesh in Sylhet. Masood 71, Rizwan 75*, Agha 71, Taijul 4 wickets. Need 121 more with 3 wickets. Full Day 4 report." />
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
              <ArrowLeft className="w-3 h-3" /> All News & Match Reports
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Match Report
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 19, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Pakistan <span className="text-pak-green italic">Need 121</span> <br />
                With 3 Wickets Left <br />
                In Blockbuster Finale.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Rizwan 75* leading the charge as Pakistan fight back in one of cricket's greatest fourth-innings chases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-left">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Target</div>
                    <div className="text-4xl font-display font-bold text-white">437</div>
                    <div className="text-[10px] font-bold text-pak-green uppercase tracking-widest mt-1 italic">Pakistan Chasing</div>
                 </div>
                 <div className="p-6 bg-pak-green/10 border border-pak-green/20 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-2">PAK Current</div>
                    <div className="text-4xl font-display font-bold text-white">316/7</div>
                    <div className="text-[10px] font-bold text-pak-green uppercase tracking-widest mt-1 italic">Stumps Day 4</div>
                 </div>
                 <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Need</div>
                    <div className="text-4xl font-display font-bold text-white">121</div>
                    <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-1 italic">Runs to Win</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000" alt="Test cricket atmosphere" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 right-6 flex items-center gap-3">
                    <div className="px-4 py-2 bg-pak-green backdrop-blur-md rounded-2xl shadow-xl">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white">Day 4 Final Report</span>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[40px] italic font-medium">
                "Day 4 belonged to courage. Pakistan showed fight after being pushed against the wall at 0/0 chasing 437. The match now sits beautifully balanced. Pakistan believe. Bangladesh believe harder."
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic pt-8 border-l-4 border-pak-green pl-6">
                  Session 1 — <span className="text-pak-green">Rescue Effort</span>
                </h2>
                <p>
                  Pakistan resumed Day 4 at 0/0. Bangladesh struck early with Nahid Rana removing Abdullah Fazal for 6. Soon after, Mehidy Hasan Miraz removed Azan Awais for 21. Pakistan were 41/2, facing a mountain.
                </p>
                <p>
                  Then came the experienced pair of Shan Masood and Babar Azam. They steadied the innings brilliantly with an unbeaten 60-run partnership, taking Pakistan to 101/2 at lunch.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic pt-8 border-l-4 border-red-500 pl-6">
                  Session 2 — <span className="text-red-500">Taijul Strikes back</span>
                </h2>
                <p>
                  After lunch, Babar Azam came out firing, hitting a six off the first ball. However, Taijul Islam broke the chase open by removing Babar for 47. Soon after, Saud Shakeel fell for 6 and captain Shan Masood was out for a superb 71. Pakistan slipped from 133/2 to 162/5.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic pt-8 border-l-4 border-pak-green pl-6">
                  Session 3 — <span className="text-pak-green">Rizwan-Agha Miracle</span>
                </h2>
                <p>
                  Salman Agha and Mohammad Rizwan stitched together a magnificent 134-run partnership that dragged Pakistan back into the contest. Agha's 71 was career-defining, but he was eventually bowled by Taijul with the new ball.
                </p>
                <p>
                  Stumps were called with Pakistan at 316/7. Rizwan remains unbeaten on 75, standing as Pakistan's last major hope for the miraculous victory.
                </p>
              </div>

              {/* Scorecard Table */}
              <div className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl my-12">
                 <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase tracking-widest text-white">Full Scorecard (Day 4)</h3>
                    <Trophy className="w-4 h-4 text-pak-green" />
                 </div>
                 <div className="p-8">
                    <div className="space-y-4">
                       {[
                         { name: "Shan Masood", runs: "71", meta: "lbw b Taijul" },
                         { name: "Salman Agha", runs: "71", meta: "b Taijul" },
                         { name: "Mohammad Rizwan", runs: "75*", meta: "Unbeaten", highlight: true },
                         { name: "Babar Azam", runs: "47", meta: "c Litton b Taijul" },
                         { name: "Azan Awais", runs: "21", meta: "lbw b Mehidy" }
                       ].map((p, i) => (
                         <div key={i} className={`flex justify-between items-center p-4 rounded-2xl ${p.highlight ? 'bg-pak-green/20 border border-pak-green/20' : 'bg-white/[0.02]'}`}>
                            <div>
                               <div className="text-sm font-black text-white uppercase">{p.name}</div>
                               <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{p.meta}</div>
                            </div>
                            <div className={`text-2xl font-display font-bold ${p.highlight ? 'text-pak-green' : 'text-white'}`}>{p.runs}</div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/[0.02] rounded-2xl">
                           <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Taijul Islam</div>
                           <div className="text-xl font-display font-bold text-white">4 Wickets</div>
                        </div>
                        <div className="p-4 bg-white/[0.02] rounded-2xl">
                           <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Nahid Rana</div>
                           <div className="text-xl font-display font-bold text-white">2 Wickets</div>
                        </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                 <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px]">
                    <Clock className="w-5 h-5 text-pak-green mb-4" />
                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2">Day 5 Outlook</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium capitalize">
                      Pakistan need 121 runs. Rizwan holds the key. Bangladesh need 3 wickets. The new ball will be crucial in the morning session.
                    </p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px]">
                    <Target className="w-5 h-5 text-pak-green mb-4" />
                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2">Historical Context</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium capitalize">
                      This would be the greatest run-chase in Pakistan Test history. The current record is 315.
                    </p>
                 </div>
              </div>

              <div className="text-center pt-20 border-t border-white/10">
                 <h4 className="text-[10px] font-black uppercase tracking-[5px] text-pak-green mb-10">Explore Player Stats</h4>
                 <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/player/mohammad-rizwan" className="px-6 py-3 bg-white/[0.02] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-[2px] hover:border-pak-green transition-all">Rizwan Stats</Link>
                    <Link to="/player/salman-ali-agha" className="px-6 py-3 bg-white/[0.02] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-[2px] hover:border-pak-green transition-all">Salman Agha Stats</Link>
                    <Link to="/player/shan-masood" className="px-6 py-3 bg-white/[0.02] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-[2px] hover:border-pak-green transition-all">Masood Stats</Link>
                 </div>
              </div>

              <div className="text-center mt-12 bg-pak-green/10 p-12 rounded-[50px] border border-pak-green/20">
                 <p className="text-white/60 text-lg mb-6 leading-relaxed">Stay updated with full live scorecards and Day 5 coverage as HISTORY unfolds in Sylhet.</p>
                 <Link 
                  to="/pakistan-vs-bangladesh-2026-schedule" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-[3px] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-pak-green/30"
                >
                  Full Series Schedule <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="PAK vs BAN 2nd Test Day 4 Report Sylhet 2026" 
        summary="Pakistan close Day 4 at 316/7 needing 121 more for a historic win. Rizwan 75* standing tall." 
      />
    </div>
  );
};

export default PakVsBan2ndTestDay4Report;
