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
  CheckCircle2
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const MohammadRizwan59vsBanBlog = () => {
  const metaTitle = "Mohammad Rizwan 59 vs Bangladesh 1st Test Day 3 2026";
  const metaDescription = "Rizwan scores a crucial 59 and adds 50+ stand with Salman Agha as Pakistan post 386 vs Bangladesh in Mirpur 1st Test 2026.";

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
                Mohammad Rizwan's <br /><span className="text-pak-green font-black underline decoration-white/10 italic">Crucial 59</span> <br />Keeps Pakistan Alive.
              </h1>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 py-8 border-y border-white/5">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-pak-green" />
                  <div>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Player</p>
                    <p className="text-sm font-bold text-white uppercase italic">Mohammad Rizwan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-pak-green" />
                  <div>
                    <p className="text-[9px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">Score</p>
                    <p className="text-sm font-bold text-white uppercase italic">59 Runs</p>
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
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter italic">Match Situation Case</h2>
              <p>
                Day 3 began with great promise for Pakistan. Azan Awais was 85 not out and Pakistan were 179/1, trailing by just 234 runs. Then Mehidy Hasan Miraz struck with brutal efficiency in the morning session. Four wickets fell quickly — Azan Awais was eventually dismissed for 103, and Abdullah Fazal fell for 60 — as Pakistan crumbled from a position of dominance to 251/5.
              </p>
              <p>
                It was at this critical moment that <span className="text-white font-black underline decoration-pak-green/30">Mohammad Rizwan</span> walked to the crease. His team needed experience, composure, and runs. He delivered all three.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-[40px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Zap className="w-16 h-16" />
                  </div>
                  <h3 className="text-lg font-display font-black text-pak-green uppercase mb-4 italic">Rizwan's Innings</h3>
                  <div className="space-y-4">
                     <p className="text-sm text-white/60 leading-relaxed">
                        Rizwan came in at over 65, immediately surviving a Bangladesh lbw review that was struck down. With Pakistan at 251/5, he began building his innings carefully alongside Salman Agha.
                     </p>
                     <p className="text-sm text-white/60 leading-relaxed">
                        Salman Agha and Mohammad Rizwan revived Pakistan after the early setbacks. The duo stitched a 50-plus stand for the sixth wicket against Bangladesh.
                     </p>
                  </div>
               </div>
               <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[40px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <TrendingUp className="w-16 h-16" />
                  </div>
                  <h3 className="text-lg font-display font-black text-blue-400 uppercase mb-4 italic">Valuable Context</h3>
                  <p className="text-sm text-white/60 leading-relaxed italic">
                    "In cricket, context defines an innings. Rizwan's 59 did not come on a flat pitch with Pakistan cruising. It came when Mehidy was in the middle of a five-wicket spell, when Bangladesh had all the momentum."
                  </p>
               </div>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-medium">
               <p>
                 Without this partnership with Salman Agha, Pakistan might have been bowled out for under 360 and conceded a first-innings deficit. Instead they posted 386 and held a slender lead.
               </p>
            </div>

            {/* Scorecard Section */}
            <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Trophy className="w-64 h-64" />
               </div>
               
               <div className="relative z-10">
                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-8 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-pak-green shadow-[0_0_15px_rgba(0,102,46,0.6)]" /> 
                    Pakistan 1st Innings — Scorecard
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                    <div className="space-y-4">
                       {[
                         { name: 'Azan Awais', score: '103 (165b)', out: 'b Taskin Ahmed' },
                         { name: 'Imam-ul-Haq', score: '57 (75b)', out: '-' },
                         { name: 'Abdullah Fazal', score: '60', out: '-' },
                         { name: 'Mohammad Rizwan', score: '59', out: 'c & b Mehidy' },
                         { name: 'Salman Agha', score: '58', out: '-' }
                       ].map((player, idx) => (
                         <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 group hover:bg-white/[0.02] transition-colors rounded-lg px-2">
                            <div className="flex flex-col">
                              <span className="text-xs font-black text-white uppercase tracking-tight group-hover:text-pak-green transition-colors">{player.name}</span>
                              <span className="text-[9px] text-white/30 font-bold italic">{player.out}</span>
                            </div>
                            <span className="text-sm font-display font-black text-white italic">{player.score}</span>
                         </div>
                       ))}
                    </div>
                    
                    <div className="bg-pak-green/5 border border-pak-green/10 rounded-3xl p-6 self-start">
                       <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-4">Bangladesh Bowling</h4>
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
                             <span>Taskin Ahmed</span>
                             <span className="text-white font-black">2/70</span>
                          </div>
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
                     <Link to="/schedule" className="bg-pak-green hover:bg-emerald-600 text-white font-black uppercase text-[10px] tracking-[2px] px-8 py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(1,65,28,0.3)] hover:translate-y-[-2px]">Full Schedule</Link>
                  </div>
               </div>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-medium">
               <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter italic">Match Position — Pakistan Lead by 27</h2>
               <p>
                 Mehidy Hasan Miraz picked up five wickets as Bangladesh bowled out Pakistan for 386 runs — Pakistan conceded a lead of 27 runs. Bangladesh ended Day 3 at 7/0 with bad light stopping play.
               </p>
               <p>
                 A 27-run lead is slim — but it is a lead. And Rizwan's 59 was a key reason Pakistan got there.
               </p>
            </div>

            {/* Related Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
               <Link to="/news/salman-agha-58-vs-bangladesh-1st-test-day-3-2026" className="group p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black text-pak-green uppercase tracking-widest">Partnership Highlight</span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-pak-green transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase italic transition-colors group-hover:text-pak-green">Salman Agha's Gritty 58 & No-Ball Drama</h4>
               </Link>
               <Link to="/news/pak-vs-ban-1st-test-day-4-report-2026" className="group p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Next Report</span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase italic transition-colors group-hover:text-blue-400">Day 4: Rain Threat Looms in Dhaka</h4>
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

export default MohammadRizwan59vsBanBlog;
