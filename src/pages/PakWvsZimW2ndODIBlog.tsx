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
  Target,
  Users,
  ChevronRight,
  Shield,
  Zap,
  MapPin,
  Clock,
  Heart
} from 'lucide-react';

const PakWvsZimW2ndODIBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan Women Beat Zimbabwe Women by 206 Runs in 2nd ODI | Sadaf Shamas 101, Gull Feroza 100 | Match Report</title>
        <meta name="description" content="Pakistan Women posted 343/4 and dismissed Zimbabwe Women for 137 to win the 2nd ODI by 206 runs at National Stadium Karachi. Sadaf Shamas 101, Gull Feroza 100, record 189 opening stand." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
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
                  ICC Women's Championship
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 6, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 text-pak-green" /> National Stadium, Karachi
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight">
                Two Hundreds. <br /><span className="text-pak-green font-black">ONE DEMOLITION.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Pakistan Women crush Zimbabwe by 206 runs in 2nd ODI as Sadaf Shamas (101) & Gull Feroza (100) hit back-to-back centuries in a record 189-run stand.
              </p>

              <div className="flex flex-col md:flex-row gap-8 py-10 border-y border-white/10 mt-12 bg-white/[0.02] px-8 rounded-3xl">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Pakistan Women</div>
                  <div className="text-3xl font-display font-bold text-pak-green">343/4 <span className="text-sm font-normal text-white/40">(50.0)</span></div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10 self-center" />
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Zimbabwe Women</div>
                  <div className="text-3xl font-display font-bold">137 <span className="text-sm font-normal text-white/40">ALL OUT (38.6)</span></div>
                </div>
                <div className="md:ml-auto self-center">
                   <div className="px-6 py-2 bg-pak-green text-black text-[10px] font-black uppercase tracking-widest rounded-full">Pak won by 206 runs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Image */}
      <div className="container mx-auto px-4 max-w-4xl">
         <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Pakistan Women Cricket Victory" 
            className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl brightness-75"
         />
      </div>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Introduction */}
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <h2 className="text-3xl font-display font-bold text-white pt-8">Two Hundreds, One Devastating Partnership</h2>
              <p>
                One match was not enough for Pakistan Women. They came back for the 2nd ODI against Zimbabwe Women at National Stadium Karachi on May 6, 2026 — and this time they did not just win. They annihilated.
              </p>
              <p>
                Pakistan Women posted a massive 343/4 against Zimbabwe Women in the second ODI, with openers <span className="text-white font-bold">Sadaf Shamas</span> and <span className="text-white font-bold">Gull Feroza</span> starring with centuries and stitching together a 189-run opening partnership to put the hosts in complete control.
              </p>

              <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop" alt="Cricket Batting Dominance" className="w-full aspect-video object-cover rounded-3xl" />

              <h2 className="text-3xl font-display font-bold text-white pt-8">Pakistan Batting: A Historical Opening Stand</h2>
              <p>
                What made this performance extraordinary was not just the total — but the history inside it. For the first time in Pakistan Women's ODI history, both openers scored centuries in the same innings. Sadaf Shamas (101 off 112) and Gull Feroza (100 off 95) — two different personalities, two different batting styles, one extraordinary shared achievement.
              </p>
              <p>
                The opening partnership between Sadaf and Gull produced 189 runs — broken only in the 31st over when Gull Feroza was stumped off Lindokuhle Mabhero for exactly 100. This was Pakistan Women's highest-ever opening partnership in home ODI cricket.
              </p>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                 <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-pak-green/10 border border-pak-green/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                       <Heart className="w-10 h-10 text-pak-green animate-pulse" />
                    </div>
                    <div>
                       <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white mb-2 leading-tight">
                          The Redemption of Sadaf Shamas
                       </h3>
                       <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                          After the heartbreak of being left stranded on 98 in the 1st ODI, Sadaf Shamas returned with a calmer mindset. She reached her maiden ODI century with a delicate inside-edge, proving her technical class over 112 balls.
                       </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8">The Aggressor: Gull Feroza's Century</h2>
              <p>
                Where Sadaf was careful, <span className="text-pak-green font-bold">Gull Feroza</span> was pure aggression. She hammered 100 off just 95 deliveries with 13 boundaries. Her century came at a strike rate of 105.26, never allowing Zimbabwe's bowlers to settle into any rhythm.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8">Middle Order Explosion</h2>
              <p>
                With the foundation established, the middle order played their cameos with intent. <span className="text-white font-bold">Sidra Amin</span> remained unbeaten on 59* off 58 balls, while captain <span className="text-white font-bold">Fatima Sana</span> blasted 25 off 13, including two massive sixes. <span className="text-white font-bold">Aliya Riaz</span> added a quickfire 27 off 14 as Pakistan closed on their largest total against Zimbabwe.
              </p>

              <img src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000&auto=format&fit=crop" alt="Team Celebration" className="w-full aspect-video object-cover rounded-3xl" />

              <h2 className="text-3xl font-display font-bold text-white pt-8">Zimbabwe Chase: Reduce to Rubble</h2>
              <p>
                Chasing 344 was always a mountain too high. Zimbabwe's top order disintegrated in under 9 overs, losing three wickets for just 66 runs. The only brief resistance came from <span className="text-white font-bold">Kelis Ndhlovu</span> (42) and <span className="text-white font-bold">Beloved Biza</span>.
              </p>
              <p>
                Pakistan's bowlers led a complete collapse from 80/5 to 137 all out. Diana Baig, Rameen Shamim, Momina Riasat, and Syeda Aroob Shah all claimed two wickets each in a clinical dismantling of the visitor's batting lineup.
              </p>
            </div>

            {/* Scorecard Sections */}
            <div className="space-y-12">
               <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] overflow-hidden">
                  <div className="p-8 border-b border-white/10 bg-pak-green/5 flex items-center justify-between">
                     <h3 className="text-xl font-display font-bold">Pakistan Batting Scorecard</h3>
                     <span className="text-xs font-black uppercase tracking-[3px] text-pak-green">343/4 (50.0)</span>
                  </div>
                  <div className="p-8 overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="text-white/40 uppercase text-[10px] tracking-widest border-b border-white/5 pb-4">
                              <th className="pb-4">Batter</th>
                              <th className="pb-4 text-center">Score</th>
                              <th className="pb-4 text-center">SR</th>
                              <th className="pb-4 text-right">Dismissal</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {[
                              { name: 'Sadaf Shamas', runs: '101 (112)', sr: '90.18', desc: 'c Mavunga b Chare' },
                              { name: 'Gull Feroza', runs: '100 (95)', sr: '105.2', desc: 'st Mutungwindu b Mabhero' },
                              { name: 'Sidra Amin', runs: '59* (58)', sr: '101.7', desc: 'Not Out' },
                              { name: 'Fatima Sana', runs: '25 (13)', sr: '192.3', desc: 'c Mutasa b Sibanda' },
                              { name: 'Aliya Riaz', runs: '27 (14)', sr: '192.8', desc: 'c Mutungwindu b Mutasa' }
                           ].map((b, i) => (
                              <tr key={i} className="text-sm group">
                                 <td className="py-4 font-bold group-hover:text-pak-green transition-colors">{b.name}</td>
                                 <td className="py-4 text-center font-mono text-white/60">{b.runs}</td>
                                 <td className="py-4 text-center text-white/40">{b.sr}</td>
                                 <td className="py-4 text-right text-[10px] uppercase font-bold text-white/30">{b.desc}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>

               <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] overflow-hidden">
                  <div className="p-8 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                     <h3 className="text-xl font-display font-bold">Zimbabwe Batting Scorecard</h3>
                     <span className="text-xs font-black uppercase tracking-[3px] text-white/40">137 ALL OUT (38.6)</span>
                  </div>
                  <div className="p-8 overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="text-white/40 uppercase text-[10px] tracking-widest border-b border-white/5 pb-4">
                              <th className="pb-4">Batter</th>
                              <th className="pb-4 text-center">Score</th>
                              <th className="pb-4 text-center">Status</th>
                              <th className="pb-4 text-right">Wicket</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {[
                              { name: 'Kelis Ndhlovu', runs: '42', sr: '—', fow: '3-66' },
                              { name: 'Beloved Biza', runs: '—', sr: '—', fow: '4-76' },
                              { name: 'Christine Mutasa', runs: '—', sr: '—', fow: '1-4' },
                              { name: 'Kelly Ndiraya', runs: '—', sr: '—', fow: '2-9' }
                           ].map((b, i) => (
                              <tr key={i} className="text-sm group">
                                 <td className="py-4 font-bold">{b.name}</td>
                                 <td className="py-4 text-center font-mono text-white/60">{b.runs}</td>
                                 <td className="py-4 text-center text-white/40">Out</td>
                                 <td className="py-4 text-right text-[10px] uppercase font-bold text-white/30">{b.fow}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            {/* Awards & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-3xl space-y-4">
                  <Trophy className="w-7 h-7 text-pak-green" />
                  <h4 className="font-display font-bold text-white">Player of Match</h4>
                  <p className="text-xs text-white/40">Sadaf Shamas (101) — Back-to-back big scores (98 in 1st ODI).</p>
               </div>
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                  <TrendingUp className="w-7 h-7 text-blue-500" />
                  <h4 className="font-display font-bold text-white">History Maker</h4>
                  <p className="text-xs text-white/40">First time both Pakistan openers hit centuries in the same ODI.</p>
               </div>
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                  <Shield className="w-7 h-7 text-emerald-500" />
                  <h4 className="font-display font-bold text-white">Series Sealed</h4>
                  <p className="text-xs text-white/40">Pakistan take an unassailable 2-0 lead in the 3-match series.</p>
               </div>
            </div>

            {/* Series Context */}
            <div className="bg-gradient-to-br from-pak-green/20 to-[#0A0A0A] p-10 md:p-14 rounded-[40px] border border-white/10 relative overflow-hidden">
               <h3 className="text-3xl font-display font-bold text-white mb-6">Series Summary So Far</h3>
               <p className="text-lg text-white/60 leading-relaxed max-w-2xl relative z-10">
                  Pakistan Women lead the series 2-0 after two crushing victories (168 runs and 206 runs). Each win provides vital points in the <span className="text-white font-bold">ICC Women's Championship</span>, boosting Pakistan's path to the 2029 World Cup.
               </p>
               <Users className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-5 pointer-events-none" />
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Up Next</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-women-vs-zimbabwe-women-1st-odi-2026-report" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">1st ODI Match Report</span>
                     <ChevronRight className="w-4 h-4 text-pak-green" />
                  </Link>
                  <Link to="/news/pakistan-vs-bangladesh-wtc-analysis-2025-2027" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">WTC Strategy Analysis</span>
                     <ChevronRight className="w-4 h-4 text-pak-green" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Share */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-3xl bg-pak-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-pak-green/40 group relative">
          <Share2 className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Share Result
          </span>
        </button>
      </div>
    </div>
  );
};

export default PakWvsZimW2ndODIBlog;
