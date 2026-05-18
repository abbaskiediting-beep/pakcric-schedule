import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Zap, 
  Target, 
  ArrowLeft, 
  TrendingUp, 
  Activity, 
  BarChart3, 
  Calendar,
  ChevronRight,
  AlertTriangle,
  Clock,
  History,
  Timer,
  User,
  Quote
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakistanBowling2ndInningsBlog = () => {
  const bowlingStats = [
    { name: 'Khurram Shahzad', overs: '26', runs: '81', wickets: '4', econ: '3.11', noBalls: '10' },
    { name: 'Mohammad Abbas', overs: '28', runs: '77', wickets: '1', econ: '2.75', noBalls: '0' },
    { name: 'Sajid Khan', overs: '30', runs: '101', wickets: '2', econ: '3.36', noBalls: '1' },
    { name: 'Hasan Ali', overs: '11', runs: '83', wickets: '2', econ: '7.54', noBalls: '0' },
    { name: 'Salman Agha', overs: '5', runs: '24', wickets: '0', econ: '4.80', noBalls: '0' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan Bowling Analysis 2nd Innings 2nd Test 2026 | PakCric</title>
        <meta name="description" content="Khurram Shahzad takes 4 wickets but Pakistan leak 390 runs as Mushfiqur hits 137. Full analysis of Pakistan's bowling effort in Sylhet." />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Archive
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[3px] border border-red-500/20 rounded-full">
                  Bowling Analysis
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  May 18, 2026
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tighter uppercase italic">
                Effort Without <br />
                <span className="text-red-500">Control.</span> <br />
                PAK Struggle.
              </h1>

              <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-medium">
                Pakistan's bowlers grind through 102 overs in Sylhet, but indiscipline and a Mushfiqur masterclass leave them facing a mountain of 437 runs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Stats */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
         <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl group hover:bg-white/[0.04] transition-all">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[4px] mb-3">Overs Bowled</div>
                  <div className="text-5xl font-display font-bold text-white italic">102.2</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2">The Long Grind</div>
               </div>
               <div className="p-8 bg-red-600/5 border border-red-500/20 rounded-3xl group hover:bg-red-500/10 transition-all">
                  <div className="text-[10px] font-black text-red-500 uppercase tracking-[4px] mb-3">No-Balls</div>
                  <div className="text-5xl font-display font-bold text-red-500">11</div>
                  <div className="text-[10px] font-bold text-red-500/40 uppercase tracking-widest mt-2">Costly Lapses</div>
               </div>
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl group hover:bg-white/[0.04] transition-all">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[4px] mb-3">Top Wicket</div>
                  <div className="text-5xl font-display font-bold text-white italic">4/81</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2">Khurram Shahzad</div>
               </div>
               <div className="p-8 bg-emerald-600/5 border border-emerald-500/20 rounded-3xl group hover:bg-emerald-500/10 transition-all">
                  <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[4px] mb-3">Target Set</div>
                  <div className="text-5xl font-display font-bold text-emerald-500 italic">437</div>
                  <div className="text-[10px] font-bold text-emerald-500/40 uppercase tracking-widest mt-2">Historical High</div>
               </div>
            </div>
         </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="markdown-body space-y-10 text-xl text-white/70 leading-relaxed font-light">
              <p className="text-3xl text-white font-display font-bold border-l-4 border-red-500 pl-8 py-2 italic leading-tight">
                "102.2 overs of hard work, tired legs, 24 extras, and a Mushfiqur Rahim masterclass that took the game completely away from Pakistan."
              </p>

              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">The Big Picture</h2>
                <p>
                  Pakistan had already conceded a first-innings deficit of 46 runs. When Bangladesh walked out to bat in their second innings, Pakistan needed to bowl them out cheaply to keep the match alive. What they got instead was a brutal examination of their discipline and stamina.
                </p>
                <p>
                  Extras again became a story, as Pakistan leaked 24 extras including 11 no-balls, with Khurram Shahzad alone bowling 10 no-balls. In a match where margins are razor-thin, such lack of control is often fatal.
                </p>
              </div>

              {/* Bowling Table */}
              <div className="mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02]">
                 <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <h3 className="text-sm font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                       <BarChart3 className="w-4 h-4" /> 2nd Innings Bowling Figures
                    </h3>
                    <span className="text-[10px] font-bold text-white/20 uppercase">Bangladesh: 390 All Out</span>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-white/5">
                             <th className="p-6 text-[10px] font-black text-white/40 uppercase tracking-widest">Bowler</th>
                             <th className="p-6 text-[10px] font-black text-white/40 uppercase tracking-widest text-center">O</th>
                             <th className="p-6 text-[10px] font-black text-white/40 uppercase tracking-widest text-center">R</th>
                             <th className="p-6 text-[10px] font-black text-white/40 uppercase tracking-widest text-center">W</th>
                             <th className="p-6 text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Econ</th>
                             <th className="p-6 text-[10px] font-black text-red-500 uppercase tracking-widest text-center">NB</th>
                          </tr>
                       </thead>
                       <tbody>
                          {bowlingStats.map((stat, idx) => (
                             <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.05] transition-colors group">
                                <td className="p-6">
                                   <div className="font-bold text-white group-hover:text-red-500 transition-colors uppercase tracking-tight italic">{stat.name}</div>
                                </td>
                                <td className="p-6 text-center text-white/60 font-mono text-sm">{stat.overs}</td>
                                <td className="p-6 text-center text-white/60 font-mono text-sm">{stat.runs}</td>
                                <td className="p-6 text-center font-display font-bold text-white text-2xl">{stat.wickets}</td>
                                <td className="p-6 text-center text-white/40 font-mono text-xs">{stat.econ}</td>
                                <td className={`p-6 text-center font-mono text-xs font-bold ${Number(stat.noBalls) > 0 ? 'text-red-500' : 'text-white/20'}`}>
                                   {stat.noBalls}
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              <div className="space-y-8 pt-10">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">Khurram Shahzad: Brilliance & Indiscipline</h2>
                <p>
                  Khurram was sensational early on and picked up four wickets. He dismissed Tanzid, Mominul, Mehidy Hasan Miraz, and Taskin Ahmed. His pace, height, and wobble seam were effective—but his discipline was a serious problem. Ten no-balls from one bowler in a single innings at Test level is extraordinary.
                </p>

                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">The Abbas Masterclass</h2>
                <p>
                  Mohammad Abbas was economical but managed only one wicket. His 28-over spell—conceding just 77 runs—was a masterclass in Test match discipline. He created pressure, hit the top of off, and made batters play every ball. But Bangladesh's batters were patient enough to not give him many chances.
                </p>
              </div>

              {/* Session Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
                 {[
                    { label: "Morning", runs: 93, wkts: 1, text: "Pakistan Strike Early, Shanto Falls" },
                    { label: "Afternoon", runs: 104, wkts: 2, text: "Mushfiqur and Litton Take Control" },
                    { label: "Evening", runs: 83, wkts: 4, text: "Bangladesh Run Riot, Pak Exhausted" }
                 ].map((session, i) => (
                    <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] space-y-4">
                       <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">{session.label} Session</div>
                       <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-display font-bold text-white">{session.runs}</span>
                          <span className="text-sm text-white/20">Runs</span>
                          <span className="text-2xl font-display font-bold text-red-500 ml-auto">{session.wkts}W</span>
                       </div>
                       <p className="text-xs text-white/40 leading-relaxed font-bold uppercase italic">{session.text}</p>
                    </div>
                 ))}
              </div>

              <div className="bg-red-900/10 border border-red-500/20 p-10 rounded-[40px] space-y-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <AlertTriangle className="w-48 h-48 text-red-500" />
                 </div>
                 <h2 className="text-3xl font-display font-bold text-white uppercase italic relative z-10">The No-Ball Crisis</h2>
                 <p className="text-lg text-white/60 leading-relaxed relative z-10">
                    Pakistan have now bowled 11 no-balls in Bangladesh's 2nd innings alone. In Test cricket, no-balls are not just wasted deliveries—they are momentum gifts and wasted wicket opportunities. This is a technical and disciplinary failure that Pakistan's bowling coach must address urgently.
                 </p>
                 <div className="flex flex-wrap gap-4 relative z-10 pt-4">
                    <Link to="/news/can-pakistan-chase-437-runs-vs-bangladesh-2nd-test-analysis" className="px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[2px] transition-transform hover:scale-105">
                       Chase Analysis
                    </Link>
                    <Link to="/news/mushfiqur-rahim-137-runs-vs-pakistan-2nd-test-record" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-[10px] uppercase tracking-[2px] hover:bg-white/10 transition-all">
                       Mushfiqur's 137
                    </Link>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-10 border-t border-white/10">Summary</h2>
              <p>
                Pakistan's bowlers gave everything across 102.2 overs in Sylhet heat. But on this day, Mushfiqur Rahim and Litton Das were simply better. The target of 437 is the highest 4th-innings target ever set for Pakistan in Test history. It will be nothing short of a miracle if Pakistan take this game to the fifth day.
              </p>
            </div>

            {/* Further Reading */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-red-500 mb-8">Match Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/bangladesh-bowlers-crush-pakistan-2nd-test-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Innings 1 Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">BAN Bowlers Dominance</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/babar-azam-68-vs-bangladesh-2nd-test-sylhet-2026-report" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest leading-none mb-1">Stars of the Series</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">Babar's Fighting 68</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-yellow-500 transition-transform group-hover:translate-x-1" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Pakistan's Bowling in Bangladesh's 2nd Innings — Effort Without Control" 
        summary="Pakistan bowlers leak 390 runs in Bangladesh's second innings as Mushfiqur and Litton dominate. Analysis of Khurram Shahzad's 4 wickets and 10 no-balls." 
      />
    </div>
  );
};

export default PakistanBowling2ndInningsBlog;
