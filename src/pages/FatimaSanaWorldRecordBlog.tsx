import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  Zap,
  Target,
  ChevronRight,
  User,
  Star,
  Activity,
  Award,
  Clock,
  MapPin,
  TrendingUp,
  Flame
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const FatimaSanaWorldRecordBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Fatima Sana World Record Fastest T20I Fifty in 15 Balls vs Zimbabwe 2026 | PakCric</title>
        <meta name="description" content="Pakistan captain Fatima Sana broke the world record for fastest fifty in women's T20Is — 15 balls vs Zimbabwe on May 15 2026. She scored 62 off 19 balls. Full analysis inside." />
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
              <ArrowLeft className="w-3 h-3" /> News Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Trophy className="w-3 h-3" /> World Record
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 15, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Fatima Sana <br />
                <span className="text-pak-green">World Record.</span> <br />
                15 Ball Fifty.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Fastest half-century in Women's T20I history — 62 off 19 balls. Pakistan captain rewrites the record books against Zimbabwe in Karachi.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Balls</div>
                    <div className="text-3xl font-display font-bold text-pak-green">15</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Final Score</div>
                    <div className="text-3xl font-display font-bold text-white">62*</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Strike Rate</div>
                    <div className="text-3xl font-display font-bold text-white">326</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Series</div>
                    <div className="text-3xl font-display font-bold text-emerald-500">3-0</div>
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
            
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Fatima Sana World Record"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-pak-green mb-2 block">Karachi Stadium</span>
                   <h3 className="text-2xl font-display font-bold text-white uppercase italic">History of 15 Balls</h3>
                </div>
                <div className="p-4 bg-pak-green/20 backdrop-blur-md rounded-2xl border border-pak-green/30">
                  <Zap className="w-6 h-6 text-pak-green" />
                </div>
              </div>
            </div>

            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                Fifteen balls. That is all Fatima Sana needed. On May 15, 2026, at the National Stadium in Karachi, the Pakistan women's captain produced the most explosive batting performance in Women's T20I history.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">The Record Alert</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                  <tbody>
                    {[
                      { l: 'Balls', v: '15 Balls', highlight: true },
                      { l: 'Previous Record', v: '18 Balls (Devine, Litchfield, Ghosh)' },
                      { l: 'Runs Scored', v: '62 off 19 balls' },
                      { l: 'Boundaries', v: '10 Fours, 2 Sixes' },
                      { l: 'Strike Rate', v: '326.31' },
                      { l: 'Match Result', v: 'PAK won by 133 runs (3-0 White-wash)' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="p-6 text-[10px] font-black uppercase tracking-widest text-white/30">{row.l}</td>
                        <td className={`p-6 font-bold ${row.highlight ? 'text-yellow-500 text-2xl' : 'text-white'}`}>{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Sana walked in at 152/4 in the 17th over and immediately launched a vicious assault. She opened her account with a four off Michelle Mavunga and never looked back.
              </p>

              <div className="p-8 md:p-12 bg-pak-green/5 border border-pak-green/20 rounded-[40px] relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Flame className="w-64 h-64 text-pak-green" />
                </div>
                <h3 className="text-2xl font-bold text-pak-green mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6" /> The Innings: Ball by Ball
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs shrink-0">1-6</div>
                    <p className="text-sm text-white/60 leading-relaxed italic pt-3">
                       "Opened with a four, then four consecutive boundaries off Kudzai Chigora. 21 runs off first 5 balls."
                    </p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs shrink-0">7-14</div>
                    <p className="text-sm text-white/60 leading-relaxed italic pt-3">
                       "24 runs off Nomvelo Sibanda in one over — slamming 4, 4, 6, 6, 4. Reached 48 off 14 balls."
                    </p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-pak-green text-black border border-pak-green/50 flex items-center justify-center font-black text-xs shrink-0">15</div>
                    <p className="text-sm text-pak-green/90 font-bold leading-relaxed pt-3">
                       "Nudged Zimunu for two on the second ball of the last over. World Record Secured."
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-10">Legends Overtaken</h2>
              <p>
                Sana's 15-ball blitz broke the 18-ball record shared by three giants of the modern game:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { name: 'Sophie Devine', country: 'New Zealand', year: '2015' },
                   { name: 'Phoebe Litchfield', country: 'Australia', year: '2023' },
                   { name: 'Richa Ghosh', country: 'India', year: '2024' }
                 ].map((player, i) => (
                   <div key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                      <h4 className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">{player.country}</h4>
                      <h5 className="text-lg font-bold text-white mb-1">{player.name}</h5>
                      <p className="text-[10px] font-medium text-white/20">Held record since {player.year}</p>
                   </div>
                 ))}
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">The 2026 Dominance</h2>
              <p>
                This isn't a fluke. Fatima Sana has been a beast in 2026. She is Pakistan's top-scorer this year with 229 runs at a strike rate of 206.30 — the best in the world for players facing more than 10 balls.
              </p>

              <div className="bg-emerald-600/5 border border-emerald-500/20 p-8 rounded-[40px] space-y-6">
                 <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 uppercase italic tracking-tight">Captain's Statement</h4>
                      <p className="text-sm text-white/50 italic leading-relaxed">
                         "I just wanted to play my natural game. When I came in, the platform was there. Records are nice but 3-0 whitewash is what matters."
                      </p>
                    </div>
                 </div>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Stat Capsule</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Total Score</span>
                         <p className="text-2xl font-display font-bold text-white">223/4</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Win Margin</span>
                         <p className="text-2xl font-display font-bold text-white">133 RUNS</p>
                      </div>
                      <Star className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Related Features */}
            <div className="pt-10 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">More from Series</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-women-vs-zimbabwe-1st-odi-may-4-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">ODI Report</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">1st ODI: Zim Defeated</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/pak-w-vs-zim-w-2nd-odi-2026-report" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Final ODI</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">2nd ODI Victory</h5>
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
        title="Fatima Sana World Record: Fastest Women's T20I Fifty!" 
        summary="Pakistan captain Fatima Sana creates history with a 15-ball fifty against Zimbabwe in Karachi." 
      />
    </div>
  );
};

export default FatimaSanaWorldRecordBlog;
