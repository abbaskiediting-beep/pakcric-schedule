import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Star, 
  ChevronRight, 
  TrendingUp, 
  Award, 
  Target,
  ArrowLeft,
  Share2,
  BookOpen
} from 'lucide-react';

const BabarAzamPSLFinalsCaptainBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam PSL Finals History | All Final Appearances & Captaincy Debut</title>
        <meta name="description" content="Babar Azam has played in 5 PSL finals — 2018, 2019, 2020 (winner), 2021 and 2026. Tonight is the first time he leads a team as captain in a PSL Final." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pak-green/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
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
                  Match Day Special
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 3, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Clock className="w-3 h-3 text-pak-green" /> 6 min read
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Babar Azam in PSL Finals: <span className="text-pak-green">From Player to Captain</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl">
                Babar has played in 5 PSL finals, but tonight marks the first time he leads a team as captain. This is the story of the King's journey to the ultimate stage.
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pak-green to-emerald-800 flex items-center justify-center font-bold text-lg text-white">
                  BA
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-widest">Editorial Team</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Zalmi Insider • May 2026</div>
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
            </aside>

            {/* Article Body */}
            <div className="lg:col-span-11 space-y-12">
              
              {/* Summary Table Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                  <Trophy className="w-7 h-7 text-pak-green" /> The Finals Record
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Season</th>
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Team</th>
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Final Opponent</th>
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Babar's Score</th>
                        <th className="py-4 text-right text-[10px] font-black uppercase tracking-widest text-white/40">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-5 font-bold text-sm">PSL 2016</td>
                        <td className="py-5 text-sm">Islamabad Utd</td>
                        <td className="py-5 text-sm text-white/60">Quetta</td>
                        <td className="py-5 text-sm text-white/60">Squad Member</td>
                        <td className="py-5 text-right"><span className="text-emerald-500 font-bold">WON</span></td>
                      </tr>
                      <tr>
                        <td className="py-5 font-bold text-sm">PSL 2020</td>
                        <td className="py-5 text-sm">Karachi Kings</td>
                        <td className="py-5 text-sm text-white/60">Lahore</td>
                        <td className="py-5 text-sm font-bold text-pak-green">63 (50) • POTM</td>
                        <td className="py-5 text-right"><span className="text-emerald-500 font-bold">WON</span></td>
                      </tr>
                      <tr>
                        <td className="py-5 font-bold text-sm">PSL 2021</td>
                        <td className="py-5 text-sm">Karachi Kings</td>
                        <td className="py-5 text-sm text-white/60">Multan</td>
                        <td className="py-5 text-sm text-white/60">27 (23)</td>
                        <td className="py-5 text-right"><span className="text-red-500 font-bold">LOST</span></td>
                      </tr>
                      <tr className="bg-pak-green/5 ring-1 ring-pak-green/20">
                        <td className="py-5 font-bold text-sm pl-4">PSL 2026</td>
                        <td className="py-5 text-sm">Peshawar Zalmi</td>
                        <td className="py-5 text-sm text-white/60">Kingsmen</td>
                        <td className="py-5 text-sm font-black text-pak-green">CAPTAINCY DEBUT</td>
                        <td className="py-5 text-right pr-4"><span className="text-pak-green font-bold italic animate-pulse">TONIGHT</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Text Content */}
              <div className="markdown-body space-y-8 text-lg md:text-xl leading-relaxed text-white/70">
                <p>
                  In PSL history, very few players have appeared in more finals than Babar Azam. As Pakistan's greatest franchise cricket batter — reaching <span className="text-white font-bold">4,193+ runs</span> as the all-time leading scorer — it is no surprise that Babar has consistently been part of the teams that go the furthest.
                </p>

                <p className="font-display text-2xl md:text-3xl text-white font-bold tracking-tight">
                  "Tonight — May 3, 2026 — is different from every other PSL Final Babar has been part of."
                </p>

                <p>
                  Sunday will mark their first appearance in a PSL final since 2021. It will also mark the first instance of Babar leading a team into the PSL final. He has been in PSL finals before. He has won one. He has lost two. But every time, he walked into that final as a player — a key player, the most important batter, the one the team relied upon — but never as the captain responsible for the team's fate.
                </p>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/5 border-l-4 border-l-pak-green">
                  <h3 className="text-pak-green font-black uppercase tracking-widest text-xs mb-4">Milestone Alert</h3>
                  <p className="text-lg text-white font-bold mb-2">6 Runs from History</p>
                  <p className="text-sm text-white/50">
                    He is just 6 runs away from breaking Kamran Akmal's record to become Peshawar Zalmi's all-time highest run-scorer (1,967 runs vs 1,972). One boundary off the first over and the record falls, making him the only player to lead two different franchises in all-time scoring.
                  </p>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8">The "Dark Year" Before the Resurgence</h2>
                <p>
                  2025 was the darkest chapter. 288 runs. No playoffs. Questions about whether Babar's best days were over. Exactly two months ago, Pakistan axed Babar Azam from their final T20 World Cup game against Sri Lanka. It underscored a lack of trust in their country's most celebrated batter.
                </p>

                <p>
                  "It hurts your ego and you want to prove yourself. It is all about your mental strength," Misbah-ul-Haq noted on Babar's comeback. From 288 runs last season to 588 runs and two centuries in 2026 — the turnaround is nothing short of legendary.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                   <div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl">
                      <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
                      <h4 className="text-xl font-bold mb-2">PSL 2020: The Benchmark</h4>
                      <p className="text-sm text-white/50">Babar's defining final. 63 (50) to secure Karachi's first title. POTM and Player of the Tournament.</p>
                   </div>
                   <div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl">
                      <Award className="w-8 h-8 text-pak-green mb-4" />
                      <h4 className="text-xl font-bold mb-2">PSL 2026: The Evolution</h4>
                      <p className="text-sm text-white/50">588 runs at 84.00 AVG. Two centuries. Leading Peshawar as Captain for the ultimate trophy.</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8">What a Win Tonight Represents</h2>
                <div className="space-y-4">
                  {[
                    "First player to win PSL titles with two different franchises as a primary batter.",
                    "His first PSL Final win as captain — completing his ultimate legacy.",
                    "A resounding answer to critics after being dropped from the national T20 side.",
                    "The greatest individual season comeback in tournament history."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="mt-1.5 w-4 h-4 rounded-full border border-pak-green/40 flex items-center justify-center shrink-0 group-hover:bg-pak-green transition-colors">
                        <div className="w-1.5 h-1.5 bg-pak-green rounded-full group-hover:bg-white" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-pak-green rounded-[40px] p-10 md:p-14 text-[#050505] relative overflow-hidden my-16">
                   <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-6">"Time teaches you... you get stronger mentally."</h2>
                      <p className="text-xl font-medium opacity-80 leading-relaxed mb-8">- Babar Azam on his 2026 Journey</p>
                      <Link to="/news/psl-11-final-start-time-may-3-2026" className="inline-flex items-center gap-3 px-8 py-3 bg-[#050505] text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                        Match Guide <ChevronRight className="w-4 h-4 font-black" />
                      </Link>
                   </div>
                   <Trophy className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none" />
                </div>
              </div>

              {/* Footer Links */}
              <div className="pt-20 border-t border-white/10 mt-20">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Discussions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/babar-azam-psl-centuries-complete-list" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all">
                    <span className="text-sm font-bold uppercase tracking-tight">Babar's Centennial Record</span>
                    <ChevronRight className="w-4 h-4 text-pak-green" />
                  </Link>
                  <Link to="/news/babar-azam-peshawar-zalmi-record-kamran-akmal" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all">
                    <span className="text-sm font-bold uppercase tracking-tight">The 6-Run Zalmi Milestone</span>
                    <ChevronRight className="w-4 h-4 text-pak-green" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabarAzamPSLFinalsCaptainBlog;
