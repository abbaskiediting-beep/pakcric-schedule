import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  ArrowLeft,
  Share2,
  TrendingUp,
  Star,
  Zap,
  Target,
  Award,
  BookOpen,
  ChevronRight,
  Flame,
  CheckCircle2,
  Clock
} from 'lucide-react';

const BabarAzamPSL2026StoryBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam PSL 2026 Full Story | From Criticism to PSL Champion Captain</title>
        <meta name="description" content="The complete story of Babar Azam's PSL 2026 comeback. From being dropped and criticised to scoring 588 runs and leading Peshawar Zalmi to the title." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full rotate-45" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Back to News Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Long Read • Season Review
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 4, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Clock className="w-3 h-3 text-pak-green" /> 12 min read
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight">
                The King's <br /><span className="text-pak-green">Redemption.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                How Pakistan's most criticised batter became its greatest champion. This is the definitive story of Babar Azam's PSL 2026 — from the fall to the crown.
              </p>

              <div className="flex items-center gap-4 pt-12 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pak-green to-emerald-900 flex items-center justify-center font-bold text-lg border border-white/10 shadow-xl">
                  BA
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Author</div>
                  <div className="text-xs font-black uppercase tracking-widest">Zainab Rashid</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Desktop */}
            <aside className="hidden lg:block lg:col-span-1 space-y-8 sticky top-32 h-fit">
              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pak-green hover:text-white transition-all group">
                <Share2 className="w-5 h-5 opacity-60 group-hover:opacity-100" />
              </button>
              <div className="h-px w-full bg-white/10" />
              <div className="flex flex-col gap-4">
                <div className="w-1 h-12 bg-pak-green rounded-full opacity-50" />
                <div className="w-1 h-12 bg-white/10 rounded-full" />
                <div className="w-1 h-12 bg-white/10 rounded-full" />
              </div>
            </aside>

            {/* Article Body */}
            <div className="lg:col-span-11 space-y-12">
              
              {/* Introduction Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-xl font-display font-medium text-white/80 leading-relaxed italic">
                    "There is a special kind of silence that follows a great player's fall from grace. Not the silence of absence, but the silence of doubt. That silence surrounded Babar Azam for most of 2025. And then came PSL 2026."
                  </h3>
                </div>
              </div>

              {/* Stats Table Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-pak-green" /> The Numbers of Redemption
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Runs", value: "588", sub: "All-time Record Tied", color: "text-pak-green" },
                    { label: "Season Average", value: "84.00", sub: "10 innings", color: "text-white" },
                    { label: "Strike Rate", value: "146.3", sub: "Personal Best", color: "text-white" },
                    { label: "Centuries", value: "2", sub: "World Record x Captain", color: "text-pak-green" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-center space-y-1 shadow-inner">
                      <div className="text-[10px] font-black uppercase tracking-[2px] text-white/30">{stat.label}</div>
                      <div className={`text-4xl font-display font-black tracking-tight ${stat.color}`}>{stat.value}</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-white/20 whitespace-nowrap">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Narrative Sections */}
              <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
                
                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-white pt-8">The Fall: How Pakistan's Greatest Batter Hit Rock Bottom</h2>
                  <p>
                    To understand how extraordinary PSL 2026 was for Babar Azam, you first have to understand how brutal the months before it were. Exactly two months before the season began, <span className="text-white font-bold">Pakistan axed Babar Azam</span> from their final T20 World Cup game against Sri Lanka.
                  </p>
                  <p>
                    The move underscored a lack of trust in their country's most celebrated batter. Dropped. Because his team did not trust him to score fast enough. Combine that with a dismal 2025 season where he managed only 288 runs, and the critics had all the ammunition they needed.
                  </p>
                </section>

                <div className="bg-gradient-to-r from-red-900/20 to-transparent p-8 border-l-4 border-red-600 rounded-r-3xl">
                  <h4 className="text-red-500 font-black uppercase tracking-[3px] text-xs mb-2">The Dark Quote</h4>
                  <p className="text-lg text-white/80 italic">"Is he finished? Has he lost it? Is Pakistan better without him?"</p>
                  <p className="text-xs text-white/40 mt-4">— Common queries across social media in mid-2025</p>
                </div>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-white pt-8">The Decision: One Technical Adjustment</h2>
                  <p>
                    When Babar arrived at the National Cricket Academy, a technical adjustment was made that would change everything. Misbah-ul-Haq explained the change: "His front leg was going across against spinners... Now he is clearing that which clears the path for his bat and that is helping him get more room to hit towards the offside."
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-[32px] space-y-4">
                       <Target className="w-8 h-8 text-pak-green" />
                       <h4 className="text-xl font-bold">Front-Foot Fix</h4>
                       <p className="text-sm text-white/50 leading-relaxed">Clearing the path for the bat, allowing more room against left-arm spin and opening up the off-side.</p>
                    </div>
                    <div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-[32px] space-y-4">
                       <Zap className="w-8 h-8 text-yellow-500" />
                       <h4 className="text-xl font-bold">Mental Reset</h4>
                       <p className="text-sm text-white/50 leading-relaxed">Decision to play without fear. Not chasing records, just pure cricket on his own terms.</p>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-white pt-8">The Record-Breaking Centuries</h2>
                  <p>
                    After going 67 T20 innings without a century, the drought ended in spectacular fashion. 100* off 52 balls against Quetta. But it wasn't just the century — it was the <span className="text-white font-bold">single dot ball</span> he played in the entire innings. A feat never achieved by any elite batter before.
                  </p>
                  <p>
                    Twelve days later, in the Qualifier at Gaddafi Stadium, he hit 103 off 59 balls. With this, he became the first batter in history to score <span className="text-white font-bold">9 T20 centuries as captain</span> — surpassing Faf du Plessis. The comeback was no longer a story; it was a revolution.
                  </p>
                </section>

                {/* Impact Graphic */}
                <div className="bg-pak-green rounded-[40px] p-10 md:p-14 text-black relative overflow-hidden">
                   <div className="relative z-10 space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-pak-green" />
                         </div>
                         <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">The Trophy Lift</h3>
                      </div>
                      <p className="text-xl font-medium leading-relaxed max-w-2xl">
                         He finished the season as the highest run-scorer, the Player of the Tournament, and the captain of the champions. He literally walked back into the kingdom and took his crown.
                      </p>
                      <Link to="/news/peshawar-zalmi-psl-2026-champions-match-report" className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-110 transition-transform">
                        Full Match Report <ChevronRight className="w-4 h-4" />
                      </Link>
                   </div>
                   <Award className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none" />
                </div>

                <section className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-white pt-8">The Legacy of 589 Runs</h2>
                  <p>
                    Babar finished with 589 runs, breaking Fakhar Zaman's season record. But more than the numbers, it was the redemption. From being dropped to being the most valuable player in Pakistan's premier tournament.
                  </p>
                  <p>
                    "Time teaches you... you get stronger mentally and feel good about yourself when you rise after a fall." — Babar Azam's own words now serve as the ultimate epitaph for his 2026 campaign.
                  </p>
                </section>
              </div>

              {/* Related Links Footer */}
              <div className="pt-20 border-t border-white/10 mt-20">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Part of the Series</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/babar-azam-psl-centuries-complete-list" className="p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl flex items-center justify-between hover:border-pak-green/40 transition-all group">
                     <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Statistical Deep Dive</span>
                        <div className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Babar's Century Catalog</div>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
                  <Link to="/news/babar-azam-psl-finals-from-player-to-captain" className="p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl flex items-center justify-between hover:border-pak-green/40 transition-all group">
                     <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Tactical Evolution</span>
                        <div className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Player to Captain Journey</div>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Call to Action */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link to="/news/peshawar-zalmi-psl-2026-champions-match-report" className="px-8 py-4 bg-pak-green text-black rounded-2xl text-xs font-black uppercase tracking-[2px] shadow-[0_20px_50px_rgba(0,102,46,0.3)] hover:scale-105 transition-transform flex items-center gap-3">
          <Flame className="w-4 h-4 fill-current" /> Read Final Match Report
        </Link>
      </div>
    </div>
  );
};

export default BabarAzamPSL2026StoryBlog;
