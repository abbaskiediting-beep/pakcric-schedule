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
  ChevronRight,
  Flame,
  Shield,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const AaronHardiePSL2026FinalBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Aaron Hardie PSL 2026 Final | 4/27 + 56* Player of the Match</title>
        <meta name="description" content="Aaron Hardie delivered one of the greatest all-round performances in PSL Final history — 4/27 with the ball + 56* with the bat. First player ever to achieve this double." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-yellow-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pak-green/10 blur-[120px] rounded-full" />
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
                <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Match Winner • Final MVP
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 4, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 text-pak-green" /> Gaddafi Stadium
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight">
                The Night Aaron <br /><span className="text-yellow-500">Hardie</span> Became Legend.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                4 Wickets. 56 Runs. One Night. The unknown Australian who produced the most complete individual performance in PSL Final history.
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-10 border-t border-white/10">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-bold text-yellow-500 border border-white/10 italic">AH</div>
                   <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Player</div>
                      <div className="text-sm font-black uppercase">Aaron Hardie</div>
                   </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center font-bold text-pak-green border border-pak-green/20">Z</div>
                   <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Team</div>
                      <div className="text-sm font-black uppercase">Peshawar Zalmi</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Breakdown */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {/* The Record Card */}
            <div className="bg-gradient-to-br from-yellow-500 to-amber-900 rounded-[40px] p-10 md:p-14 text-black relative overflow-hidden shadow-2xl shadow-yellow-500/20">
               <div className="relative z-10 space-y-8">
                  <div className="inline-block px-4 py-1.5 bg-black text-pak-green rounded-full text-[9px] font-black uppercase tracking-[3px]">PSL History Made</div>
                  <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.1]">
                     First Player Ever To Take <span className="text-white">4 Wickets</span> & Score <span className="text-white">50+</span> In A PSL Final.
                  </h2>
                  <div className="flex flex-wrap gap-8 pt-4">
                     <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-black/50">Bowling</div>
                        <div className="text-4xl font-display font-black">4/27</div>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-black/50">Batting</div>
                        <div className="text-4xl font-display font-black">56* <span className="text-sm font-normal opacity-60">(39)</span></div>
                     </div>
                  </div>
               </div>
               <Award className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none" />
            </div>

            {/* Narrative Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
               <div className="md:col-span-8 space-y-12 markdown-body text-xl leading-relaxed text-white/70">
                  <section className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white pt-8">The Night an Unknown Australian Became a Legend</h2>
                    <p>
                      Before PSL 2026, most casual Pakistan cricket fans would have struggled to place <span className="text-white font-bold">Aaron Hardie</span> on a map — let alone predict that he would be the Player of the Match in the PSL Grand Final.
                    </p>
                    <p>
                      The 26-year-old Western Australian allrounder was Peshawar Zalmi's overseas signing. A reliable cricketer. A good team man. But on the night of May 3, in front of 32,461 fans, he produced a complete masterpiece.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white pt-8">The Bowling: Wrecking the Kingsmen</h2>
                    <p>
                      Hardie first wrecked the Kingsmen batting with a lethal spell of <span className="text-pak-green font-bold">4/27</span>. His wickets came at the perfect moments — disrupting momentum every time Hyderabad threatened to build a total.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-pak-green shrink-0 mt-1" />
                        <span><strong>Marnus Labuschagne (20):</strong> The captain dismissed just as he looked dangerous.</span>
                      </li>
                      <li className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-pak-green shrink-0 mt-1" />
                        <span><strong>Saim Ayub (54):</strong> The lone warrior removed to end the Kingsmen's resistance.</span>
                      </li>
                      <li className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-pak-green shrink-0 mt-1" />
                        <span><strong>Hassan Khan & Akif Javed:</strong> Cleaning up the death overs with precision.</span>
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white pt-8">The Batting: Rescuing the Kingdom</h2>
                    <p>
                      The true measure of Hardie's night was the chase. Walking in at <span className="text-red-500 font-bold">40/4</span> with both Babar Azam and Mohammad Haris gone for zero, the pressure was immense.
                    </p>
                    <p>
                      He launched a counter-attack, smashing Hunain Shah for three boundaries to close a shaky powerplay. His partnership with Abdul Samad (85 runs) took the game away from the Kingsmen. His final score of <span className="text-yellow-500 font-bold">56* off 39 balls</span> featured 9 fours and zero sixes — a model of pure, intelligent batting under pressure.
                    </p>
                  </section>

                  <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 space-y-6">
                     <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-yellow-500" />
                        <h4 className="text-xl font-display font-bold text-white">Mental Strength Under Pressure</h4>
                     </div>
                     <p className="text-sm text-white/50 leading-relaxed italic">
                        "Walking in with the match in the balance after your captain is gone for a golden duck... that requires a specific kind of mental strength. Hardie delivered not just because of technique, but because of his temperament."
                     </p>
                  </div>
               </div>

               <aside className="md:col-span-4 space-y-8">
                  <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                     <h4 className="text-xs font-black uppercase tracking-[3px] text-pak-green border-b border-white/5 pb-4">Player Profile</h4>
                     <div className="space-y-4">
                        <div>
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">Born</div>
                           <div className="text-sm font-bold">Perth, Australia (1999)</div>
                        </div>
                        <div>
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">Batting</div>
                           <div className="text-sm font-bold">Right Hand</div>
                        </div>
                        <div>
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">Bowling</div>
                           <div className="text-sm font-bold">Right Arm Medium Fast</div>
                        </div>
                        <div>
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">BBL Franchise</div>
                           <div className="text-sm font-bold">Perth Scorchers</div>
                        </div>
                     </div>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl space-y-6 relative overflow-hidden">
                     <h4 className="text-xs font-black uppercase tracking-[3px] text-yellow-500">Awards Summary</h4>
                     <ul className="space-y-3 relative z-10">
                        <li className="text-xs flex items-center justify-between text-white/60"><span>Player of the Match</span> <Star className="w-3 h-3 text-yellow-500 fill-current" /></li>
                        <li className="text-xs flex items-center justify-between text-white/60"><span>Smart Wicket Award</span> <Star className="w-3 h-3 text-yellow-500 fill-current" /></li>
                        <li className="text-xs flex items-center justify-between text-white/60"><span>Most Boundaries (9 Fours)</span> <Star className="w-3 h-3 text-yellow-500 fill-current" /></li>
                     </ul>
                     <Flame className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32 h-32 opacity-5 text-yellow-500" />
                  </div>
               </aside>
            </div>

            {/* Quote Section */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-12 text-center max-w-3xl mx-auto space-y-6">
                <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed italic text-white/90">
                  "I'm super grateful to be part of Zalmi. We've had great fun and, obviously, a really successful season."
                </p>
                <div className="flex flex-col items-center gap-2">
                   <div className="text-sm font-black uppercase tracking-widest">Aaron Hardie</div>
                   <div className="text-xs text-white/30 uppercase tracking-widest">Post-Match Press Conference</div>
                </div>
            </div>

            {/* Navigation Footer */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-10">More Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/news/peshawar-zalmi-psl-2026-champions-match-report" className="flex items-center gap-6 p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all group">
                     <div className="w-12 h-12 bg-pak-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Trophy className="w-6 h-6 text-pak-green" />
                     </div>
                     <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Zalmi Champions</div>
                        <div className="text-sm font-bold uppercase group-hover:text-pak-green transition-colors">Full Final Match Report</div>
                     </div>
                     <ChevronRight className="w-5 h-5 ml-auto text-pak-green" />
                  </Link>
                  <Link to="/news/babar-azam-psl-2026-complete-story-comeback" className="flex items-center gap-6 p-8 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all group">
                     <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-6 h-6 text-yellow-500" />
                     </div>
                     <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40">The King's Redemption</div>
                        <div className="text-sm font-bold uppercase group-hover:text-yellow-500 transition-colors">Babar's Full Story</div>
                     </div>
                     <ChevronRight className="w-5 h-5 ml-auto text-yellow-500" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing Header */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-3xl bg-yellow-500 text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-yellow-500/40 group relative">
          <Share2 className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Share Hardie's Masterclass
          </span>
        </button>
      </div>
    </div>
  );
};

export default AaronHardiePSL2026FinalBlog;
