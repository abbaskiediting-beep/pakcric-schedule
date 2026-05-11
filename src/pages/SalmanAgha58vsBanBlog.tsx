import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  ArrowLeft,
  Target,
  Users,
  ChevronRight,
  Zap,
  MapPin,
  TrendingUp,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const SalmanAgha58vsBanBlog = () => {
  const metaTitle = "Salman Agha 58 vs Bangladesh 1st Test Day 3 2026";
  const metaDescription = "Salman Ali Agha scores 58 and survives a no-ball to stitch a match-saving 119-run partnership with Mohammad Rizwan in Mirpur.";

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Feed
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Match Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 10, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight uppercase">
                Salman Agha's <br /><span className="text-pak-green font-black underline decoration-white/10 italic">Gritty 58</span> <br />& The No-Ball Twist.
              </h1>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 py-8 border-y border-white/5">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-pak-green" />
                  <div>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Player</p>
                    <p className="text-sm font-bold text-white uppercase italic">Salman Ali Agha</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-pak-green" />
                  <div>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Score</p>
                    <p className="text-sm font-bold text-white uppercase italic">58 (94b)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-pak-green" />
                  <div>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Venue</p>
                    <p className="text-sm font-bold text-white uppercase italic">Mirpur, Dhaka</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-medium">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter italic">The Collapse That Set the Scene</h2>
              <p>
                Day 3 had started perfectly for Pakistan — 179/1, Azan Awais on 85 not out, a first-innings lead in sight. Then everything fell apart. After cruising at 210/1, Pakistan lost four wickets for just 20 runs to slip to 230/5.
              </p>
              <p>
                It was at this critical junction that <span className="text-white font-black underline decoration-pak-green/30">Salman Ali Agha</span> and Mohammad Rizwan combined for an unbeaten 119-run partnership for the sixth wicket to stabilise the innings.
              </p>
            </div>

            <div className="p-10 bg-rose-500/5 border border-rose-600/20 rounded-[40px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AlertTriangle className="w-24 h-24 text-rose-500" />
               </div>
               <h3 className="text-2xl font-display font-black text-rose-500 uppercase mb-6 italic italic">The No-Ball That Saved the Day</h3>
               <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
                  A costly no-ball allowed Salman Agha to survive on naught. Salman was caught off the bowling of Taskin Ahmed when Pakistan were under heavy pressure, but the dismissal was overturned because of a no-ball, changing the momentum of the innings entirely.
               </p>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5 italic text-sm text-white/80">
                  "If that wicket had counted, the scenario could have been different." — Mehidy Hasan Miraz
               </div>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-medium">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter italic">The 119-Run Lifeline</h2>
              <p>
                Salman Ali Agha batted sensibly, scoring 58 off 94 deliveries including six fours and a six. Together with Rizwan's 59, the pair frustrated Bangladesh's bowlers across a long session and pushed Pakistan's lead from negative territory to a slender positive.
              </p>
              <p>
                Bangladesh fought back through Taijul Islam, who broke the 119-run partnership by dismissing Rizwan for 59. Rain arrived shortly after, bringing an early tea break.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-[40px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Zap className="w-16 h-16" />
                  </div>
                  <h3 className="text-lg font-display font-black text-pak-green uppercase mb-4 italic">Dismissal</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Fast bowler Nahid Rana struck immediately after play resumed by getting the better of Salman for his only wicket of the innings. Salman's dismissal effectively ended Pakistan's hope of taking a lead.
                  </p>
               </div>
               <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[40px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <TrendingUp className="w-16 h-16" />
                  </div>
                  <h3 className="text-lg font-display font-black text-blue-400 uppercase mb-4 italic">The Result</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Miraz then sent back Noman Ali and Shaheen Shah Afridi in consecutive overs to complete his 14th five-for before Taijul wrapped up Pakistan's innings.
                  </p>
               </div>
            </div>

            {/* Scorecard Excerpt */}
            <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Trophy className="w-64 h-64" />
               </div>
               
               <div className="relative z-10">
                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-8 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-pak-green shadow-[0_0_15px_rgba(0,102,46,0.6)]" /> 
                    Pakistan 1st Innings — Top Performers
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                    <div className="space-y-4">
                       {[
                         { name: 'Azan Awais', score: '103 (165b)' },
                         { name: 'Imam-ul-Haq', score: '57 (75b)' },
                         { name: 'Abdullah Fazal', score: '60 (120b)' },
                         { name: 'Mohammad Rizwan', score: '59 (79b)' },
                         { name: 'Salman Agha', score: '58 (94b)', highlight: true }
                       ].map((player, idx) => (
                         <div key={idx} className={`flex items-center justify-between py-3 border-b border-white/5 px-3 rounded-xl transition-all ${player.highlight ? 'bg-pak-green/10 border-pak-green/20' : 'hover:bg-white/5'}`}>
                            <span className={`text-xs font-black uppercase tracking-tight ${player.highlight ? 'text-pak-green' : 'text-white'}`}>{player.name}</span>
                            <span className="text-sm font-display font-black text-white italic">{player.score}</span>
                         </div>
                       ))}
                    </div>
                    
                    <div className="bg-pak-green/5 border border-pak-green/10 rounded-3xl p-6 self-start">
                       <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-4">Bangladesh Bowling Summary</h4>
                       <div className="space-y-3">
                          <div className="flex justify-between items-center text-xs font-bold text-white/70 italic uppercase">
                             <span>Mehidy Hasan Miraz</span>
                             <span className="text-white font-black">5/102</span>
                          </div>
                          <div className="flex justify-between items-center text-xs font-bold text-white/70 italic uppercase">
                             <span>Taijul Islam</span>
                             <span className="text-white font-black">2/46</span>
                          </div>
                          <div className="flex justify-between items-center text-xs font-bold text-white/70 italic uppercase">
                             <span>Nahid Rana</span>
                             <span className="text-white font-black">1/82</span>
                          </div>
                       </div>
                       <div className="mt-8 pt-6 border-t border-white/10">
                          <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                            *Nahid Rana's only wicket of the inning was Salman Agha.
                          </p>
                       </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                     <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-widest leading-none mb-1">Total Score</span>
                           <span className="text-4xl font-display font-black text-white italic">386 <span className="text-lg opacity-40 font-normal">ALL OUT</span></span>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-widest leading-none mb-1">Lead</span>
                           <span className="text-4xl font-display font-black text-pak-green italic">27 <span className="text-lg opacity-40 font-normal">RUNS</span></span>
                        </div>
                     </div>
                     <Link to="/news/mohammad-rizwan-59-vs-bangladesh-1st-test-day-3-2026" className="inline-flex items-center gap-2 text-pak-green font-black uppercase text-[10px] tracking-[2px] hover:translate-x-2 transition-transform">
                        Rizwan's 59 Analysis <ChevronRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-medium">
               <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter italic">Match Position — Pakistan Lead by 27</h2>
               <p>
                 Despite Mehidy Hasan Miraz claiming a five-wicket haul to bowl Pakistan out for 386, the match remained evenly poised — Pakistan's innings featured three century partnerships, with the Rizwan-Salman stand proving specially frustrating for Bangladesh.
               </p>
               <p>
                 Without Salman Agha's 58, Pakistan's lead of 27 could easily have been a deficit. His innings was not just valuable — it was match-saving.
               </p>
            </div>

            {/* Related Blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
               <Link to="/news/mohammad-rizwan-59-vs-bangladesh-1st-test-day-3-2026" className="group p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black text-pak-green uppercase tracking-widest">Partnership Deep Dive</span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase italic transition-colors group-hover:text-pak-green">Mohammad Rizwan's Crucial 59: Analysis</h4>
               </Link>
               <Link to="/news/pak-vs-ban-1st-test-day-3-session-1-report-2026" className="group p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Morning Session</span>
                    <ArrowLeft className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase italic transition-colors group-hover:text-blue-400">Day 3 Session 1: The Morning Collapse</h4>
               </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title={metaTitle} 
        summary={metaDescription} 
      />
    </div>
  );
};

export default SalmanAgha58vsBanBlog;
