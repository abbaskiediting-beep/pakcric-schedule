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
  User,
  ChevronRight,
  History,
  Timer
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const BanBowlersDominance2ndTestBlog = () => {
  const bowlingStats = [
    { name: 'Taskin Ahmed', overs: '11', maidens: '1', runs: '37', wickets: '2', econ: '3.36' },
    { name: 'Shoriful Islam', overs: '11', maidens: '3', runs: '39', wickets: '0', econ: '3.55' },
    { name: 'Mehidy Hasan Miraz', overs: '9', maidens: '3', runs: '21', wickets: '2', econ: '2.33' },
    { name: 'Nahid Rana', overs: '12.4', maidens: '1', runs: '60', wickets: '3', econ: '4.74' },
    { name: 'Taijul Islam', overs: '14', maidens: '4', runs: '67', wickets: '3', econ: '4.79' },
  ];

  const scorecard = [
    { name: 'Azan Awais', runs: '13', status: 'b Taskin' },
    { name: 'Abdullah Fazal', runs: '9', status: 'c Litton b Taskin' },
    { name: 'Shan Masood', runs: '21', status: 'b Mehidy' },
    { name: 'Babar Azam', runs: '68', status: 'c Mushfiqur b Rana' },
    { name: 'Sajid Khan', runs: '38', status: 'c Tanzid b Rana' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Bangladesh Bowlers Crush Pakistan 2nd Test Sylhet 2026 | PakCric</title>
        <meta name="description" content="Nahid Rana, Taijul Islam and Mehidy Hasan Miraz lead Bangladesh’s brilliant bowling effort as Pakistan collapse for 219 in Sylhet." />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Archive
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 rounded-full">
                  Bowling Masterclass
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  May 18, 2026
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tighter uppercase italic">
                Ruthless <br />
                <span className="text-emerald-500">Bowlers.</span> <br />
                Pak Collapse.
              </h1>

              <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                Nahid Rana, Taijul Islam, and Mehidy Hasan Miraz dismantle Pakistan for 219 as Bangladesh's bowling unit asserts complete dominance in Sylhet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">PAK Total</div>
                  <div className="text-4xl font-display font-bold text-red-500">219</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">77.3 Overs</div>
               </div>
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">High Pace</div>
                  <div className="text-4xl font-display font-bold text-white italic">145+</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">KPH (Nahid Rana)</div>
               </div>
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Best Spinner</div>
                  <div className="text-4xl font-display font-bold text-emerald-500">2.33</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Econ (Miraz)</div>
               </div>
               <div className="p-6 bg-[#0D1A12] border border-emerald-500/20 rounded-3xl">
                  <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">The Enforcer</div>
                  <div className="text-4xl font-display font-bold text-white">3 Wkts</div>
                  <div className="text-[10px] font-bold text-emerald-500/40 uppercase tracking-widest">Nahid Rana</div>
               </div>
            </div>
         </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="markdown-body space-y-8 text-lg text-white/70 leading-relaxed">
              <p className="text-2xl text-white/90 font-medium font-display leading-tight italic border-l-4 border-emerald-500 pl-6 py-2">
                "Bangladesh’s bowlers once again exposed Pakistan’s fragile batting lineup with a combination of pace, discipline, and relentless pressure."
              </p>

              <p>
                The heroes of the day were Nahid Rana, Taijul Islam, and Mehidy Hasan Miraz, who shared eight wickets between them and completely controlled the match from the opening session. Pakistan’s batting never truly settled despite a fighting half-century from Babar Azam and a late cameo from Sajid Khan.
              </p>

              <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight pt-8 border-t border-white/10">The New Ball Blitz</h2>
              <p>
                Taskin Ahmed provided the perfect start. Young opener Azan Awais struggled to settle, scoring only 13 before Taskin's seam movement found an edge. Abdullah Fazal followed shortly for just 9, leaving Pakistan reeling early.
              </p>

              <div className="my-12 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02]">
                 <div className="p-8 border-b border-white/5">
                    <h3 className="text-sm font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                       <BarChart3 className="w-4 h-4" /> Full Bowling Figures
                    </h3>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-white/5">
                             <th className="p-4 text-[10px] font-black text-white/40 uppercase tracking-widest">Bowler</th>
                             <th className="p-4 text-[10px] font-black text-white/40 uppercase tracking-widest">O</th>
                             <th className="p-4 text-[10px] font-black text-white/40 uppercase tracking-widest">M</th>
                             <th className="p-4 text-[10px] font-black text-white/40 uppercase tracking-widest">R</th>
                             <th className="p-4 text-[10px] font-black text-white/40 uppercase tracking-widest">W</th>
                             <th className="p-4 text-[10px] font-black text-white/40 uppercase tracking-widest">Econ</th>
                          </tr>
                       </thead>
                       <tbody>
                          {bowlingStats.map((stat, idx) => (
                             <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                                <td className="p-4 font-bold text-white">{stat.name}</td>
                                <td className="p-4 text-white/60 font-mono text-sm">{stat.overs}</td>
                                <td className="p-4 text-white/60 font-mono text-sm">{stat.maidens}</td>
                                <td className="p-4 text-white/60 font-mono text-sm">{stat.runs}</td>
                                <td className="p-4 font-display font-bold text-emerald-500 text-lg">{stat.wickets}</td>
                                <td className="p-4 text-white/40 font-mono text-xs">{stat.econ}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Nahid Rana: The Fast Bowling Superstar</h2>
              <p>
                The young fast bowler bowled with aggression, raw pace, and hostility. Bowled consistently above 145 kph, his ability to strike in crucial moments has transformed Bangladesh’s bowling attack. The wicket of Babar Azam (68) was the defining moment, shifting the entire momentum of the innings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px]">
                    <div className="flex items-center gap-3 mb-6">
                       <Shield className="w-5 h-5 text-emerald-500" />
                       <h4 className="text-xs font-black uppercase tracking-widest text-emerald-500">Spin Control</h4>
                    </div>
                    <p className="text-sm italic leading-relaxed text-white/50">
                       "Mehidy Hasan Miraz extracted turn and never allowed Pakistan's batters to rotate strike freely, finishing with an economy of 2.33."
                    </p>
                 </div>
                 <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-[32px]">
                    <div className="flex items-center gap-3 mb-6">
                       <Activity className="w-5 h-5 text-red-500" />
                       <h4 className="text-xs font-black uppercase tracking-widest text-red-500">Taijul's Impact</h4>
                    </div>
                    <p className="text-sm italic leading-relaxed text-white/50">
                       "Taijul Islam dismantled the middle order, removing Agha, Rizwan and Hasan Ali with relentless accuracy."
                    </p>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight pt-8 border-t border-white/10">Pakistan's Struggles</h2>
              <div className="space-y-4">
                 {['Top order collapse yet again', 'Overdependence on Babar Azam', 'Poor performance against quality spin', 'Failure to build century partnerships'].map((issue, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                       <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">{idx + 1}</div>
                       <p className="text-sm font-bold text-white/70 uppercase tracking-tight">{issue}</p>
                    </div>
                 ))}
              </div>

              <div className="p-8 md:p-12 bg-gradient-to-br from-[#0A110D] to-[#050505] border border-emerald-500/20 rounded-[40px] mt-20">
                 <h2 className="text-3xl font-display font-bold text-white uppercase italic mb-6">Match Situation</h2>
                 <p className="text-lg text-white/60 leading-relaxed mb-8">
                    After bowling Pakistan out for 219, Bangladesh has gained a huge psychological advantage. The conditions in Sylhet are expected to become even more spin-friendly, meaning Bangladesh's bowlers could become even more dangerous later in the game.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/match/pak-vs-ban-2nd-test-2026" className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[2px] transition-transform hover:scale-105 active:scale-95">
                       Match Center
                    </Link>
                    <Link to="/pakistan-upcoming-series-full-schedule" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-[10px] uppercase tracking-[2px] hover:bg-white/10 transition-all">
                       Full Schedule
                    </Link>
                 </div>
              </div>
            </div>

            {/* Further Reading */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-emerald-500 mb-8">Related Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-1st-innings-collapse-analysis-2nd-test-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">Pakistan Collapse Report</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/babar-azam-68-vs-bangladesh-2nd-test-sylhet-2026-report" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Innings Report</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">Babar's Fighting Fifty</h5>
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
        title="Bangladesh's Ruthless Bowling Display Puts Pakistan Under Massive Pressure in Sylhet" 
        summary="Bangladesh dismantle Pakistan for 219 in Sylhet as Nahid Rana and Taijul Islam dominate." 
      />
    </div>
  );
};

export default BanBowlersDominance2ndTestBlog;
