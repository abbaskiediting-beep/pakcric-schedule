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
  Info,
  User,
  ArrowDown
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakVsBan2ndTestDay2Session1Report = () => {
  const scoreboard = [
    { team: 'Bangladesh 1st Innings', score: '278 all out', status: 'Complete' },
    { team: 'Pakistan 1st Innings', score: '96/4', status: 'Day 2 Session 1 — Ongoing' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PAK vs BAN 2nd Test Day 2 Session 1: Babar 37* Fights, PAK 96/4 Trail by 182 | PakCric</title>
        <meta name="description" content="Pakistan Day 2 Session 1 — Babar Azam 37* off 58 balls holding firm after 4 quick wickets. Pakistan 96/4 trail by 182 runs. Full session report." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Live Match Center
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Day 2 — Session 1
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 17, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Babar Firm <br />
                <span className="text-pak-green">96/4 Pakistan.</span> <br />
                Trailing 182.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Litton's 126 rescued Bangladesh reaching 278. Now Babar Azam (37*) carries the weight of a nation to overhaul the deficit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Shield className="w-12 h-12 text-pak-green" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Current Batter</div>
                    <div className="text-3xl font-display font-bold text-white mb-1">Babar Azam</div>
                    <div className="text-4xl font-display font-bold text-pak-green">37* <span className="text-sm font-sans font-bold text-white/40 tracking-normal">(58)</span></div>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Zap className="w-12 h-12 text-blue-500" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Partner</div>
                    <div className="text-3xl font-display font-bold text-white mb-1">Salman Agha</div>
                    <div className="text-4xl font-display font-bold text-blue-400">6* <span className="text-sm font-sans font-bold text-white/40 tracking-normal">(15)</span></div>
                 </div>
                 <div className="p-8 bg-[#0A1A0F] border border-pak-green/20 rounded-[32px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <ArrowDown className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Current Deficit</div>
                    <div className="text-3xl font-display font-bold text-white mb-1">Trailing By</div>
                    <div className="text-4xl font-display font-bold text-white">182 Runs</div>
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
              <div className="bg-gradient-to-br from-[#0A1A0F] to-[#050505] border border-pak-green/20 rounded-[40px] p-8 md:p-12">
                 <h3 className="text-2xl font-display font-bold text-white uppercase mb-8">Scoreboard Status</h3>
                 <div className="space-y-6">
                    {scoreboard.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                         <div>
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[4px] block mb-1">{item.status}</span>
                            <h4 className="text-xl font-bold text-white">{item.team}</h4>
                         </div>
                         <div className="text-2xl font-display font-bold text-pak-green">{item.score}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-10">Babar Azam: The Anchor Pakistan Needs</h2>
              <p>
                Babar Azam—fit after his left knee injury—has walked out at a critical moment. His approach has been patient, hitting 5 classic boundaries to build a stand with Salman Ali Agha. This is exactly the situation for which Pakistan needed their best batter back in the side.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[40px]">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">Fall of Wickets</h4>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                          <span className="font-bold">Azan Awais</span>
                          <span className="text-white/40 italic">Out (31) b Taskin</span>
                       </div>
                       <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                          <span className="font-bold">Abdullah Fazal</span>
                          <span className="text-white/40 italic">Out (19)</span>
                       </div>
                       <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                          <span className="font-bold">Shan Masood</span>
                          <span className="text-white/40 italic">Out (1)</span>
                       </div>
                       <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                          <span className="font-bold">Saud Shakeel</span>
                          <span className="text-white/40 italic">Out (8) b Taskin</span>
                       </div>
                    </div>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[40px] flex flex-col justify-center">
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[4px] mb-6">Taskin On Fire</h4>
                    <p className="text-sm leading-relaxed text-white/50 italic mb-6">
                       "Taskin Ahmed has been the pick of the bowlers this morning, using the helpful Sylhet conditions to claim 2 vital wickets for just 30 runs in his 8 overs."
                    </p>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                       <span className="text-[10px] font-black text-white/40 uppercase">Taskin Ahmed: 8.0 - 2 - 30 - 2</span>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">Day 1 Review: Litton's Masterclass</h2>
              <p>
                Bangladesh were 116 for 6 not long into the post-lunch session on Day 1, but Litton Das took them to 278. A majestic hundred from the wicketkeeper-batter lifted his side from oblivion, farming the strike and countering Pakistan's relentless length. 
              </p>

              <div className="bg-red-950/10 border border-red-500/20 p-8 rounded-[40px] flex gap-6 items-start my-10">
                 <AlertCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                 <div>
                    <h3 className="text-xl font-bold text-red-500 mb-2 uppercase">The Costly Miss</h3>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                       "A bouncer from Shahzad kissed Litton's glove on the way to Rizwan when he was on 52. Pakistan didn't review after burning two earlier—that miss cost them 74 runs."
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">Match Probability (Live)</h2>
              <div className="grid grid-cols-3 gap-1 h-12 rounded-full overflow-hidden my-8">
                 <div className="bg-emerald-600 h-full flex items-center justify-center text-[10px] font-black">PAK 37%</div>
                 <div className="bg-white/10 h-full flex items-center justify-center text-[10px] font-black">DRAW 23%</div>
                 <div className="bg-red-600 h-full flex items-center justify-center text-[10px] font-black">BAN 40%</div>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">What Pakistan Needs Next</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Target Deficit</span>
                         <p className="text-2xl font-display font-bold text-white">&lt; 100 Runs</p>
                      </div>
                      <Target className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Follow-On</span>
                         <p className="text-2xl font-display font-bold text-white">SAVE (PASSED 79)</p>
                      </div>
                      <Shield className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Further Reading */}
            <div className="pt-10 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Live Match Links</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2-nd-test-day-1-live-score-report-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Yesterday</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">Day 1 Full Report</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/pak-vs-ban-2nd-test-toss-report-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Live Updates</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Match Center</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="PAK vs BAN 2nd Test Day 2 Session 1: Babar Azam 37* Holds Firm" 
        summary="Pakistan 96/4 at over 30 on Day 2. Babar Azam fighting back after early wickets in Sylhet." 
      />
    </div>
  );
};

export default PakVsBan2ndTestDay2Session1Report;
