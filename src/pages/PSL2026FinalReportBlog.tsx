import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  Users, 
  Zap, 
  ArrowLeft,
  Share2,
  CheckCircle2,
  Flame,
  Star,
  Target,
  Medal,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const PSL2026FinalReportBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Peshawar Zalmi Win PSL 2026 Final | Match Report & Scorecard</title>
        <meta name="description" content="Peshawar Zalmi won the PSL 2026 Final by 5 wickets against Hyderabad Kingsmen. Aaron Hardie 4/24 + 55* was Player of the Match. Complete match report and records." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pak-green/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Back to News Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex justify-center flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Grand Final Result
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 4, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Users className="w-3 h-3 text-pak-green" /> 32,461 Attendance
                </span>
              </div>

              <h1 className="text-4xl md:text-8xl font-display font-bold leading-[1] tracking-tight mb-8">
                Peshawar Zalmi <br /><span className="text-pak-green">ARE CHAMPIONS!</span>
              </h1>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 border-y border-white/10">
                <div className="text-center md:text-right">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Hyderabad Kingsmen</div>
                  <div className="text-3xl font-display font-bold">129 <span className="text-sm font-normal text-white/40">ALL OUT</span></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-xs text-white/20 italic">VS</div>
                <div className="text-center md:text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-1">Peshawar Zalmi</div>
                  <div className="text-3xl font-display font-bold text-pak-green">130/5 <span className="text-sm font-normal opacity-60">(15.2)</span></div>
                </div>
              </div>

              <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto pt-8">
                Aaron Hardie's sensational 4/24 and unbeaten 55* ended a 9-year wait as Zalmi secured their second PSL title at a packed Gaddafi Stadium.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Award Winners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 relative overflow-hidden group">
                <Medal className="w-12 h-12 text-pak-green mb-6 animate-bounce" />
                <h3 className="text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-2">Player of the Match</h3>
                <div className="text-2xl font-display font-bold mb-4">Aaron Hardie</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  A complete masterclass. 4 wickets for 24 runs followed by a match-winning 55* (35) to steady the ship after an early collapse.
                </p>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pak-green/10 blur-3xl rounded-full" />
              </div>
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 relative overflow-hidden group">
                <Star className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-2">Player of the Series</h3>
                <div className="text-2xl font-display font-bold mb-4">Sufiyan Muqeem</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  The tournament's leading wicket-taker (21 wickets). The left-arm wrist spinner was the X-factor Peshawar needed all season.
                </p>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              </div>
            </div>

            {/* Scorecard Tabbed */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] overflow-hidden">
               <div className="p-8 border-b border-white/10 bg-white/[0.02]">
                  <h3 className="text-xl font-display font-bold flex items-center gap-3">
                     <Target className="w-6 h-6 text-pak-green" /> Full Scorecard Highlights
                  </h3>
               </div>
               <div className="p-8">
                  <div className="space-y-12">
                     {/* HYK Innings */}
                     <div>
                        <h4 className="text-xs font-black uppercase tracking-[4px] text-red-500 mb-6">Hyderabad Kingsmen Innings (129 Total)</h4>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                              <span className="font-bold">Saim Ayub</span>
                              <span className="text-white/60">54 (50) • c Iftikhar b Hardie</span>
                           </div>
                           <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                              <span className="font-bold">Marnus Labuschagne (c)</span>
                              <span className="text-white/60">20 (12) • c Haris b Hardie</span>
                           </div>
                           <div className="flex justify-between items-center text-sm">
                              <span className="font-bold">Aaron Hardie (Bowling)</span>
                              <span className="text-pak-green font-bold">4.0 - 0 - 24 - 4</span>
                           </div>
                        </div>
                     </div>

                     {/* PZ Innings */}
                     <div>
                        <h4 className="text-xs font-black uppercase tracking-[4px] text-pak-green mb-6">Peshawar Zalmi Chase (130/5)</h4>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                              <span className="font-bold">Aaron Hardie</span>
                              <span className="text-pak-green font-bold">55* (35) • 9 Fours</span>
                           </div>
                           <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                              <span className="font-bold">Abdul Samad</span>
                              <span className="text-white/60">48 (32) • 1 Six</span>
                           </div>
                           <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                              <span className="font-bold">Babar Azam (c)</span>
                              <span className="text-white/20 italic">Out in 1st over (1 run)</span>
                           </div>
                           <div className="flex justify-between items-center text-sm">
                              <span className="font-bold text-red-400">Mohammad Ali (Bowling)</span>
                              <span className="text-red-400 font-bold">4.0 - 0 - 18 - 2</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Text Report */}
            <div className="markdown-body space-y-8 text-xl leading-relaxed text-white/70">
              <h2 className="text-4xl font-display font-bold text-white pt-8">The Night Lahore Exploded</h2>
              <p>
                After nine long years — since their only previous title in 2017 — Peshawar Zalmi are Pakistan Super League champions again. On a night that belonged to cricket, to Lahore, and to one extraordinary yellow team, Zalmi defeated the debutant Hyderabad Kingsmen by <span className="text-white font-bold">5 wickets</span>.
              </p>
              <p>
                In a surprise twist, it was Babar Azam who won the toss and chose to bowl first. The pitch showed its true colors early on as Mohammad Ali and Aaron Hardie dismantled the Kingsmen top order. Saim Ayub's lone battle of 54 was not enough to propel them past a competitive total.
              </p>

              <div className="bg-gradient-to-br from-[#0A0A0A] to-pak-green/5 p-10 md:p-14 rounded-[40px] border border-white/10 relative overflow-hidden">
                <h3 className="text-3xl font-display font-bold text-white mb-6">A Record-Breaking Season</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-pak-green">Babar Azam</div>
                    <div className="text-4xl font-display font-black text-white">589 <span className="text-sm font-normal text-white/40">RUNS</span></div>
                    <p className="text-xs text-white/40">Outright record for most runs in a single PSL season.</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-pak-green">Zalmi All-time</div>
                    <div className="text-4xl font-display font-black text-white">#1 <span className="text-sm font-normal text-white/40">SCORER</span></div>
                    <p className="text-xs text-white/40">Babar passed Kamran Akmal to become Zalmi's legend.</p>
                  </div>
                </div>
                <Trophy className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-5 pointer-events-none" />
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-8">The Captain's Glory</h2>
              <p>
                "It's a very big achievement for me and for Peshawar Zalmi. Throughout the tournament we've performed really well as a team. My own form — I wanted to get that back, and thankfully I could," said Babar Azam during the trophy presentation.
              </p>
              <p>
                The match ended with Farhan Yousaf's reverse sweep to the boundary in the 15th over, sparking scenes of jubilation that will be etched into the memory of every Zalmi fan. The wait is over. The King has his crown.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-pak-green rounded-[40px] p-12 text-black relative overflow-hidden">
               <div className="relative z-10 text-center space-y-6">
                  <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">The 2026 Journey Complete</h2>
                  <p className="text-xl font-medium opacity-80">From being dropped in Hobart to lifting the Infinity Trophy in Lahore.</p>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                     <Link to="/news/babar-azam-psl-finals-from-player-to-captain" className="px-8 py-3 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                        Backstory: Player to Captain
                     </Link>
                     <Link to="/news/psl-2026-final-toss-result-hyk-vs-pz" className="px-8 py-3 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest border border-black/10 hover:scale-105 transition-transform">
                        Full Toss & Lineups
                     </Link>
                  </div>
               </div>
               <Flame className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-64 h-64 opacity-10" />
            </div>

            {/* Related Content */}
            <div className="pt-20 border-t border-white/10 mt-20">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Match Day Archive</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Link to="/news/psl-11-final-starting-time-guide-2026" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                   <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Pre-match Guide Archive</span>
                   <ChevronRight className="w-4 h-4 text-pak-green" />
                 </Link>
                 <Link to="/news/babar-azam-peshawar-zalmi-record-kamran-akmal" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                   <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">The Historic 1,972 Run Milestone</span>
                   <ChevronRight className="w-4 h-4 text-pak-green" />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Actions */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-3xl bg-pak-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-pak-green/40 group relative">
          <Share2 className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Share Victory Report
          </span>
        </button>
      </div>
    </div>
  );
};

export default PSL2026FinalReportBlog;
