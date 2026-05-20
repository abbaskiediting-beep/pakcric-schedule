import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  Activity,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  Clock,
  Shield,
  Target,
  ArrowRight,
  Award,
  BookOpen,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const BangalseshCompleteHistoricSeriesSweepBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Bangladesh Beat Pakistan 2nd Test 78 Runs | Historic 2-0 Sweep | PakCric</title>
        <meta name="description" content="Bangladesh beat Pakistan by 78 runs in 2nd Test Sylhet May 16-20 2026 — historic 2-0 series sweep. Masood 71, Babar 47, Agha 71, Rizwan 91 in valiant 358 chase." />
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
              <ArrowLeft className="w-3 h-3" /> All News & Reports
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-red-600/20 text-red-500 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Trophy className="w-3 h-3" /> Historic Victory
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 20, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 text-red-500" /> Sylhet Stadium
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Bangladesh Complete <br />
                <span className="text-pak-green italic">Historic 2-0 Series Sweep</span> <br />
                Over Pakistan in Sylhet Thriller.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Taijul Islam's 4/113 spoils heroic efforts from Rizwan (91), Masood (71), and Salman Agha (71) as Bangladesh secure an unforgettable 78-run triumph.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content & Scorecards */}
      <section className="py-12 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* General Match scorecard summary */}
            <div className="bg-card-bg border border-card-border rounded-[44px] overflow-hidden shadow-2xl relative z-10">
               <div className="p-8 bg-white/5 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                     <span className="text-[9px] font-black text-pak-green uppercase tracking-[4px]">Test Series Complete</span>
                     <h2 className="text-2xl font-display font-black text-white uppercase mt-1">🏆 Final Test Scorecard & Result</h2>
                  </div>
                  <div className="px-4 py-2 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-lg">
                     BAN won by 78 runs
                  </div>
               </div>

               <div className="p-8 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Bangladesh innings */}
                     <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                              <img src="https://flagcdn.com/bd.svg" alt="BAN" className="w-full h-full object-cover" />
                           </div>
                           <span className="font-display font-black text-lg text-white uppercase tracking-tighter">Bangladesh</span>
                        </div>
                        <div className="space-y-3 pt-2">
                           <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">1st Innings</span>
                              <span className="text-lg font-display font-bold text-white">278 all out <span className="text-white/40 text-xs font-mono">(77.0 ov)</span></span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">2nd Innings</span>
                              <span className="text-lg font-display font-bold text-white">390 all out <span className="text-white/40 text-xs font-mono">(102.2 ov)</span></span>
                           </div>
                        </div>
                     </div>

                     {/* Pakistan innings */}
                     <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                              <img src="https://flagcdn.com/pk.svg" alt="PAK" className="w-full h-full object-cover" />
                           </div>
                           <span className="font-display font-black text-lg text-white uppercase tracking-tighter">Pakistan</span>
                        </div>
                        <div className="space-y-3 pt-2">
                           <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">1st Innings</span>
                              <span className="text-lg font-display font-bold text-white">232 all out <span className="text-white/40 text-xs font-mono">(57.4 ov)</span></span>
                           </div>
                           <div className="flex justify-between items-center py-1">
                              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">2nd Innings</span>
                              <span className="text-lg font-display font-bold text-white">358 all out <span className="text-white/40 text-xs font-mono">(98.3 ov)</span></span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Awards */}
                  <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="p-5 bg-pak-green/10 border border-pak-green/25 rounded-3xl flex items-center gap-4">
                        <Award className="w-8 h-8 text-pak-green shrink-0" />
                        <div>
                           <div className="text-[9px] font-black uppercase text-pak-green tracking-widest">Player of the Match</div>
                           <div className="text-sm font-black text-white">Mohammad Rizwan</div>
                           <div className="text-[9px] font-bold text-white/50">75* & 91 Heroics + 16 runs</div>
                        </div>
                     </div>
                     <div className="p-5 bg-red-600/10 border border-red-500/25 rounded-3xl flex items-center gap-4">
                        <Award className="w-8 h-8 text-red-500 shrink-0" />
                        <div>
                           <div className="text-[9px] font-black uppercase text-red-500 tracking-widest">Player of the Series</div>
                           <div className="text-sm font-black text-white">Taijul Islam</div>
                           <div className="text-[9px] font-bold text-white/50">Most wickets in series</div>
                        </div>
                     </div>
                     <div className="p-5 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-4">
                        <Trophy className="w-8 h-8 text-yellow-500 shrink-0" />
                        <div>
                           <div className="text-[9px] font-black uppercase text-yellow-500 tracking-widest">Series Result</div>
                           <div className="text-sm font-black text-white">Bangladesh 2-0</div>
                           <div className="text-[9px] font-bold text-white/50">Historic home sweep</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" alt="Test cricket atmosphere" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 right-6 flex items-center gap-3">
                    <div className="px-4 py-2 bg-pak-green backdrop-blur-md rounded-2xl shadow-xl">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white">Bangladesh Historic Series Triumph</span>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic pt-4">Introduction: Bangladesh Make History — First Ever Series Win Over Pakistan</h2>
              <p>
                It is done. Bangladesh have completed their first-ever Test series sweep over Pakistan — and they did it in a manner that will be talked about in Dhaka and Sylhet for generations.
              </p>
              <p>
                Bangladesh clinched a 78-run victory in the 2nd Test, registering a 2-0 series sweep — Bangladesh's first ever series victory over Pakistan on home soil.
              </p>
              <p>
                But the manner of this win — unlike the relatively comfortable 104-run Mirpur victory — was an absolute thriller that went down to the final day. Pakistan, chasing 437, pushed Bangladesh to the absolute limit. Shan Masood led from the front with 71, Babar Azam looked classy with 47, and Salman Agha and Mohammad Rizwan then stitched a 134-run partnership that kept Pakistan alive.
              </p>
              <p>
                Pakistan needed 84 runs for victory with Rizwan in the 90s, and were given good company by Sajid Khan who battled with a 26-ball 30 — Pakistan were not completely out of this.
              </p>
              <p>
                But Taijul Islam — the relentless left-arm spinner who had been Bangladesh's bowling hero throughout this series — had other ideas. His four wickets across the innings, combined with the final strikes that sealed Bangladesh's triumph, made him the match-defining bowler.
              </p>
              <p>
                Pakistan finished on 358. Bangladesh needed 79 runs. They got their wickets instead.
              </p>

              {/* Match Details info table */}
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden my-8">
                 <div className="text-[10px] font-black uppercase text-pak-green tracking-[3px] mb-4">Official Match Details</div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                    <div>
                       <div className="text-white/40 uppercase text-[9px] font-black">Dates</div>
                       <div className="text-white font-bold mt-1">May 16–20, 2026</div>
                    </div>
                    <div>
                       <div className="text-white/40 uppercase text-[9px] font-black">Venue</div>
                       <div className="text-white font-bold mt-1">Sylhet International Stadium</div>
                    </div>
                    <div>
                       <div className="text-white/40 uppercase text-[9px] font-black">Toss</div>
                       <div className="text-white font-bold mt-1">Pakistan elected to bowl</div>
                    </div>
                    <div>
                       <div className="text-white/40 uppercase text-[9px] font-black">Test Number</div>
                       <div className="text-white font-bold mt-1">Test No. 2618</div>
                    </div>
                    <div>
                       <div className="text-white/40 uppercase text-[9px] font-black">Attendance</div>
                       <div className="text-white font-bold mt-1">Full House (Day 4/5)</div>
                    </div>
                    <div>
                       <div className="text-white/40 uppercase text-[9px] font-black">WTC Cycle</div>
                       <div className="text-white font-bold mt-1 text-pak-green">2025-27 cycle points</div>
                    </div>
                 </div>
              </div>

              {/* INNINGS 1 */}
              <div className="space-y-6 pt-6">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight italic pt-4 pl-4 border-l-4 border-red-500">
                  INNINGS 1 — Bangladesh 278 All Out <span className="text-white/40 font-mono text-xl">(Day 1)</span>
                </h3>
                <p>
                  Pakistan won the toss and chose to bowl on a greenish Sylhet surface. Mohammad Abbas gave a breakthrough in the very first over — Mahmudul Hasan Joy caught at slip for 0 off the second ball of the match.
                </p>
                <p>
                  Pakistan were dominant for most of Bangladesh's first innings — reducing them to <strong>116/6</strong> at one stage with Khurram Shahzad and Abbas taking wickets regularly.
                </p>
                <p>
                  Then <strong>Litton Kumer Das</strong> changed everything. Litton was a class apart in his hundred — the batter appeared to be in two minds whether to play or leave but the edge resulted in a faint nick when the pressure was building, but that came only at 126.
                </p>
                <p>
                  Litton's magnificent 126 — combined with lower-order resistance from Taijul (useful lower-order runs) — dragged Bangladesh from 116/6 to <strong>278 all out</strong>.
                </p>

                {/* Score table */}
                <div className="p-6 bg-[#0B0B0B] border border-white/5 rounded-2xl text-base space-y-3">
                   <div className="flex justify-between font-bold text-white/50 border-b border-white/5 pb-2 text-xs uppercase tracking-wider">
                      <span>Key Batsman</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right">Runs</span>
                         <span className="w-12 text-right">Balls</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/80">
                      <span>Litton Kumer Das</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right font-black text-white">126</span>
                         <span className="w-12 text-right">187</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/60">
                      <span>Najmul Hossain Shanto</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right">30</span>
                         <span className="w-12 text-right">56</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/60">
                      <span>Tanzid Hasan</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right">30</span>
                         <span className="w-12 text-right">41</span>
                      </div>
                   </div>
                   <div className="pt-2 text-[10px] text-white/40 italic">
                      Pakistan Bowling: Khurram Shahzad 3 wkts, Mohammad Abbas 2 wkts, Sajid Khan 1, Hasan Ali 1.
                   </div>
                </div>
              </div>

              {/* INNINGS 2 */}
              <div className="space-y-6 pt-6">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight italic pt-4 pl-4 border-l-4 border-pak-green">
                  INNINGS 2 — Pakistan 232 All Out <span className="text-white/40 font-mono text-xl">(Day 2)</span>
                </h3>
                <p>
                  Pakistan 1st innings was highlighted by <Link to="/news/babar-azam-68-and-47-fighting-innings-sylhet-2026" className="text-pak-green underline font-black">Babar Azam's 68</Link>, which was Pakistan's only substantial innings. The batter looked set to end his century drought in Test cricket, but fell for 68 off 84 balls in an underwhelming Pakistan response. Bangladesh grabbed a vital 46-run lead.
                </p>

                {/* score table */}
                <div className="p-6 bg-[#0B0B0B] border border-white/5 rounded-2xl text-base space-y-3">
                   <div className="flex justify-between font-bold text-white/50 border-b border-white/5 pb-2 text-xs uppercase tracking-wider">
                      <span>Batsman</span>
                      <div className="flex gap-12">
                         <span className="w-12 text-right">Runs</span>
                         <span>Dismissal</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/80">
                      <span>Babar Azam</span>
                      <div className="flex gap-12">
                         <span className="w-12 text-right font-black text-pak-green">68</span>
                         <span className="text-white/40 text-xs">c Mushfiqur b Rana</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/60">
                      <span>Shan Masood (c)</span>
                      <div className="flex gap-12">
                         <span className="w-12 text-right">21</span>
                         <span className="text-white/40 text-xs">b Mehidy</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/60">
                      <span>Salman Ali Agha</span>
                      <div className="flex gap-12">
                         <span className="w-12 text-right">21</span>
                         <span className="text-white/40 text-xs">b Taijul</span>
                      </div>
                   </div>
                   <div className="pt-2 text-[10px] text-white/40 italic">
                      Bangladesh Bowling: Taijul Islam 3 wkts, Taskin Ahmed 2 wkts, Mehidy Hasan Miraz 2 wkts, Nahid Rana 2 wkts.
                   </div>
                </div>
              </div>

              {/* INNINGS 3 */}
              <div className="space-y-6 pt-6">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight italic pt-4 pl-4 border-l-4 border-red-500">
                  INNINGS 3 — Bangladesh 390 All Out <span className="text-white/40 font-mono text-xl">(Day 3)</span>
                </h3>
                <p>
                  Bangladesh's second innings was defined by two extraordinary innings — <strong>Mushfiqur Rahim's 137</strong> and Litton Das' resilient half-century. Once again, Pakistan had reduced Bangladesh to **136/6** at one stage and were smelling a shot at leveling the series. But Mushfiqur Rahim and the tail put up a legendary fight.
                </p>
                <p>
                  Mushfiqur reached 137 off 233 balls, guiding Bangladesh to a huge total of 390 and setting Pakistan a mountain-sized target of 437 on a cracking Day 4 pitch in Sylhet.
                </p>

                {/* score table */}
                <div className="p-6 bg-[#0B0B0B] border border-white/5 rounded-2xl text-base space-y-3">
                   <div className="flex justify-between font-bold text-white/50 border-b border-white/5 pb-2 text-xs uppercase tracking-wider">
                      <span>Key Contributor</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right">Runs</span>
                         <span className="w-12 text-right">Balls</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/80">
                      <span>Mushfiqur Rahim</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right font-black text-rose-500">137</span>
                         <span className="w-12 text-right">233</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/60">
                      <span>Mahmudul Hasan Joy</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right">65</span>
                         <span className="w-12 text-right">112</span>
                      </div>
                   </div>
                   <div className="flex justify-between text-white/60">
                      <span>Litton Kumer Das</span>
                      <div className="flex gap-12 font-mono">
                         <span className="w-12 text-right">60</span>
                         <span className="w-12 text-right">88</span>
                      </div>
                   </div>
                   <div className="pt-2 text-[10px] text-white/40 italic">
                      Pakistan Bowling: Khurram Shahzad 4 wkts, Mohammad Abbas 1 wkt, Sajid Khan wrapped the tail.
                   </div>
                </div>
              </div>

              {/* INNINGS 4 */}
              <div className="space-y-6 pt-6">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight italic pt-4 pl-4 border-l-4 border-pak-green">
                  INNINGS 4 — Pakistan 358 All Out <span className="text-white/40 font-mono text-xl">(Day 4 & 5 Extraordinare)</span>
                </h3>
                <p>
                  Chasing 437 — a target no team had ever successfully chased in Bangladesh — Pakistan's second innings was the most dramatic passage of cricket in the entire series.
                </p>

                <h4 className="text-xl font-black text-white uppercase pt-2">Day 3 Evening & Day 4: Foundations and Fighting</h4>
                <p>
                  Resuming Day 4 at 0/0, Pakistan lost Fazal and Azan Awais early. However, captain Shan Masood (71) and Babar Azam (47) launched an aggressive counter-attack. The 50-run partnership came off just 51 balls, bringing stability. At lunch on Day 4, Pakistan sat at 101/2 with Masood looks absolute class.
                </p>
                <p>
                  In the second session, Taijul and Nahid Rana struck crucial blows, removing Babar (47), Saud Shakeel (18), and Shan Masood (71) in quick succession, tumbling Pakistan to 162/5.
                </p>
                
                <p>
                  Then began the incredible 134-run stand between <Link to="/news/salman-ali-agha-71-vs-bangladesh-2nd-test-2026-report" className="text-pak-green hover:underline font-bold">Salman Ali Agha (71)</Link> and <Link to="/news/mohammad-rizwan-75-unbeaten-sylhet-heroics-2026" className="text-pak-green hover:underline font-bold">Mohammad Rizwan (75* overnight)</Link> that dragged Pakistan right back. Play was intense, tempers flared, and Litton Das exchanged words as Pakistan reached 316/7 on stumps Day 4, needing 121 more with 3 wickets.
                </p>

                <h4 className="text-xl font-black text-white uppercase pt-2">Day 5: Taijul Overcomes Rizwan's Valiant Resistance</h4>
                <p>
                  Day 5 began with the most tantalising equation: Pakistan need 121 runs, and Bangladesh need 3 wickets. Pakistan fans pinned their final hopes on Mohammad Rizwan.
                </p>
                <p>
                  Rizwan, given good company by Sajid Khan (30 off 26 including delicious sixes), pushed Pakistan closer as they neared the 350-run mark. When Rizwan crossed 90, Pakistan needed only 84 runs for victory.
                </p>
                <p>
                  But then Bangladesh's champion spinner, <strong>Taijul Islam</strong>, delivered the match-sealing strikes. He dismissed Rizwan for 91 — his highest-ever Test score. Taijul and Nahid Rana rapidly picked up the last two wickets, packing Pakistan out for 358 and ensuring a famous 78-run triumph.
                </p>

                {/* full scorecard final */}
                <div className="bg-[#0B0B0B] border border-white/5 rounded-3xl p-6 text-sm space-y-4">
                   <div className="text-[10px] font-black uppercase text-pak-green tracking-[2px]">Pakistan 2nd Innings Scorecard (358 all out)</div>
                   <div className="space-y-2">
                      {[
                        { name: "Mohammad Rizwan", runs: "91", details: "lbw b Taijul Islam", highlight: true },
                        { name: "Shan Masood (c)", runs: "71", details: "c Litton b Taijul" },
                        { name: "Salman Ali Agha", runs: "71", details: "b Taijul Islam" },
                        { name: "Babar Azam", runs: "47", details: "c Mushfiqur b Rana" },
                        { name: "Azan Awais", runs: "32", details: "c Shanto b Shoriful" },
                        { name: "Sajid Khan", runs: "30", details: "b Nahid Rana" },
                        { name: "Saud Shakeel", runs: "18", details: "c Litton b Rana" },
                        { name: "Abdullah Fazal", runs: "0", details: "c Mehidy b Rana" }
                      ].map((p, index) => (
                        <div key={index} className={`flex justify-between items-center p-3 rounded-xl ${p.highlight ? 'bg-pak-green/20' : 'bg-white/[0.01]'}`}>
                           <div>
                              <div className="font-bold text-white uppercase text-xs">{p.name}</div>
                              <span className="text-[9px] text-white/40 tracking-wider font-semibold uppercase">{p.details}</span>
                           </div>
                           <span className={`text-xl font-display font-black ${p.highlight ? 'text-pak-green' : 'text-white'}`}>{p.runs}</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Bangladesh Bowling */}
                <div className="p-6 bg-white/[0.01] border border-white/5 rounded-3xl">
                   <div className="text-[10px] font-black uppercase text-red-500 tracking-[2px] mb-4">Bangladesh Bowlers</div>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="text-[9px] font-black uppercase text-white/40">Taijul Islam</div>
                         <div className="text-xl font-display font-bold text-red-500">4/113</div>
                      </div>
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="text-[9px] font-black uppercase text-white/40">Nahid Rana</div>
                         <div className="text-xl font-display font-bold text-white">3/82</div>
                      </div>
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="text-[9px] font-black uppercase text-white/40">Mehidy Hasan</div>
                         <div className="text-xl font-display font-bold text-white">1/74</div>
                      </div>
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                         <div className="text-[9px] font-black uppercase text-white/40">Taskin Ahmed</div>
                         <div className="text-xl font-display font-bold text-white">1/51</div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Records and Milestones */}
              <div className="space-y-6 pt-6">
                 <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight italic pt-4">Historic Records Set in This Test & Series</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                       <h4 className="font-bold text-pak-green uppercase text-xs tracking-wider">1st Series Sweep over PAK</h4>
                       <p className="text-xs text-white/60 mt-2 leading-relaxed font-medium">
                          This is Bangladesh's first-ever Test series clean sweep over Pakistan (2-0 victory achieved on home soil).
                       </p>
                    </div>
                    <div className="p-6 bg-[#0B0B0B] border border-white/5 rounded-3xl">
                       <h4 className="font-bold text-white uppercase text-xs tracking-wider">Mohammad Rizwan's Highest Test Score</h4>
                       <p className="text-xs text-white/60 mt-2 leading-relaxed font-medium">
                          Mohammad Rizwan's fighting 91 in the second innings of the final test is now his highest ever score in Test cricket history.
                       </p>
                    </div>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                       <h4 className="font-bold text-pak-green uppercase text-xs tracking-wider">Mohammad Abbas 100th Wicket Away</h4>
                       <p className="text-xs text-white/60 mt-2 leading-relaxed font-medium">
                          Venerable fast bowler Mohammad Abbas took his 100th Test wicket outside the soil of Pakistan during Bangladesh's second innings.
                       </p>
                    </div>
                    <div className="p-6 bg-[#0B0B0B] border border-white/5 rounded-3xl">
                       <h4 className="font-bold text-white uppercase text-xs tracking-wider">Mushfiqur Rahim Highest Series Score</h4>
                       <p className="text-xs text-white/60 mt-2 leading-relaxed font-medium">
                          The 38-year-old veteran's 137 under extreme pressure in the second innings set the benchmark for the Tigers.
                       </p>
                    </div>
                 </div>
              </div>

              {/* WTC implications */}
              <div className="bg-gradient-to-br from-[#0C150E] to-black border border-pak-green/20 rounded-[36px] p-8 my-8 relative overflow-hidden">
                 <div className="absolute right-0 top-0 p-8 opacity-5">
                    <Target className="w-32 h-32 text-pak-green" />
                 </div>
                 <div className="relative z-10 space-y-4">
                    <span className="text-[9px] font-black text-pak-green uppercase tracking-[4px]">World Test Championship</span>
                    <h4 className="text-2xl font-display font-black text-white uppercase">Damage to Pakistan's WTC 2025-27 Hopes</h4>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                       Bangladesh collects **+24 WTC points** from the two comprehensive wins, vaulting them up in the table significantly. Meanwhile, Pakistan drops down further with 0 points from the series. 
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                       Pakistan's dreams for a spots in the 2025-27 World Test Championship Finals are severely damaged. They have won just 1 Test (vs South Africa) in the current cycle and suffered 3 losses, necessitating near-perfect performances in upcoming tours to Headlingley and beyond.
                    </p>
                 </div>
              </div>

              {/* Shan Masood words */}
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] italic font-medium">
                 <span className="text-[9px] font-black uppercase text-pak-green tracking-[3px] block mb-4 not-italic">Shan Masood's Post-Match Press Words</span>
                 "I'm extremely proud of the fighting heart showed by Rizwan (91) and Salman Agha (71) on the final day, but we simply played second fiddle. Bangladesh were the better unit over both Test matches, we need to learn from our strategic downfalls and return stronger for the upcoming series."
              </div>

              {/* suggest links */}
              <div className="pt-16 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 text-center">Internal Directory suggest</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/why-pakistan-lost-1st-test-bangladesh-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Series analysis</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors">Why Pakistan Lost 1st Test Bangladesh 2026</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link to="/news/pak-vs-ban-1st-test-full-match-report-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Previous match</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors">PAK vs BAN 1st Test Full Match Report</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* CTA Schedule */}
              <div className="text-center mt-12 bg-pak-green/10 p-12 rounded-[50px] border border-pak-green/25">
                 <p className="text-white/70 text-lg mb-6 leading-relaxed">Stay updated with full live scorecards, rankings, and Australia tour squad news.</p>
                 <Link 
                  to="/pakistan-vs-australia-2026-schedule" 
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
        title="Bangladesh Complete Historic 2-0 Series Sweep vs Pakistan — Sylhet Thriller" 
        summary="Bangladesh completed an extraordinary 78-run win over Pakistan to seal a historic 2-0 Test series sweep." 
      />
    </div>
  );
};

export default BangalseshCompleteHistoricSeriesSweepBlog;
