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

const PakWvsZimW1stODIBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan Women Beat Zimbabwe Women by 168 Runs in 1st ODI | Sadaf Shamas 98, Najiha Alvi 56* | Match Report</title>
        <meta name="description" content="Pakistan Women crushed Zimbabwe Women by 168 runs in the 1st ODI at National Stadium Karachi. Sadaf Shamas scored 98, Gull Feroza 50, opening stand 162. Full scorecard and analysis." />
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
                  <Calendar className="w-3 h-3 text-pak-green" /> May 4, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 text-pak-green" /> National Stadium, Karachi
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight">
                Pakistan Women <br /><span className="text-pak-green font-black">CRUSH Zimbabwe.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                A massive 168-run victory in the 1st ODI as Sadaf Shamas (98) and Najiha Alvi (56*) power Pakistan to a dominant 330/5.
              </p>

              <div className="flex flex-col md:flex-row gap-8 py-10 border-y border-white/10 mt-12 bg-white/[0.02] px-8 rounded-3xl">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Pakistan Women</div>
                  <div className="text-3xl font-display font-bold text-pak-green">330/5 <span className="text-sm font-normal text-white/40">(50.0)</span></div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10 self-center" />
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Zimbabwe Women</div>
                  <div className="text-3xl font-display font-bold">162 <span className="text-sm font-normal text-white/40">ALL OUT (36.4)</span></div>
                </div>
                <div className="md:ml-auto self-center">
                   <div className="px-6 py-2 bg-pak-green text-black text-[10px] font-black uppercase tracking-widest rounded-full">Pak won by 168 runs</div>
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
            alt="Pakistan Women Cricket" 
            className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl brightness-75"
         />
      </div>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Introduction */}
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <h2 className="text-3xl font-display font-bold text-white pt-8">A Statement of Intent in Karachi</h2>
              <p>
                Pakistan Women began their ICC Women's Championship campaign against Zimbabwe in a clinical fashion, recording a thumping 168-run victory at the National Stadium, Karachi. On a hot Monday evening, the hosts put on a batting masterclass, posting a mammoth 330/5 before their bowlers dismantled Zimbabwe for 162.
              </p>
              <p>
                Zimbabwe Women won the toss and elected to bowl first, a decision that initially seemed standard but quickly turned into a long afternoon on the field. Pakistan's top order capitalized on the conditions, headlined by a magnificent opening stand of 162 between <span className="text-white font-bold">Sadaf Shamas</span> and <span className="text-white font-bold">Gull Feroza</span>.
              </p>

              <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop" alt="Cricket Batting" className="w-full aspect-video object-cover rounded-3xl" />

              <h2 className="text-3xl font-display font-bold text-white pt-8">Pakistan Batting: The Sadaf-Gull Foundation</h2>
              <p>
                The foundations were laid early. Sadaf Shamas and Gull Feroza batted with caution and aggression in equal measure. Their 162-run partnership for the first wicket is one of the highest opening stands for Pakistan in recent memory, effectively taking the match away from Zimbabwe before the first drinks break.
              </p>
              <p>
                Gull Feroza played a steady hand, scoring <span className="text-pak-green font-bold">50 off 60 balls</span> before being dismissed in the 29th over. However, the story of the innings was undoubtedly Sadaf Shamas.
              </p>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                 <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-pak-green/10 border border-pak-green/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                       <Heart className="w-10 h-10 text-pak-green animate-pulse" />
                    </div>
                    <div>
                       <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white mb-2 leading-tight">
                          Heartbreak at 98
                       </h3>
                       <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                          Sadaf Shamas batted for 130 deliveries, stroking 17 boundaries. She was just two runs away from a historic century when she fell for 98, leaving the National Stadium in stunned silence before a standing ovation.
                       </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8">The Explosive Finish: Najiha Alvi's 56*</h2>
              <p>
                If the opening order provided the foundation, the finish was provided by <span className="text-pak-green font-bold">Najiha Alvi</span>. In an extraordinary display of power hitting, Alvi blasted <span className="text-white font-bold">56 not out off just 30 balls</span>.
              </p>
              <p>
                Her innings included 8 boundaries and a massive six, as she and captain Fatima Sana (11* off 3) propelled Pakistan well past the 300-mark. Sidra Amin also played a vital supporting role with a quickfire 67 off 59 balls.
              </p>

              <img src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000&auto=format&fit=crop" alt="Celebration" className="w-full aspect-video object-cover rounded-3xl" />

              <h2 className="text-3xl font-display font-bold text-white pt-8">Zimbabwe Chase: A Lone Resistance</h2>
              <p>
                Chasing 331 was always going to be a mountain too high for a young Zimbabwe side. They struggled from the outset, losing Christine Mutasa for just 6 in the third over.
              </p>
              <p>
                The only resistance came from <span className="text-white font-bold">Beloved Biza</span>, who fought a lone battle with a courageous <span className="text-pak-green font-bold">53 off 53 balls</span> (8 fours). Kelis Ndhlovu added 31 before being brilliantly run out by the combined effort of Najiha Alvi and Sidra Amin.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8">Pakistan Bowling Analysis</h2>
              <p>
                The bowling unit was led by the spin of <span className="text-white font-bold">Syeda Aroob Shah</span>, who finished with figures of 2/38 in 9 overs. Nashra Sandhu provided the crucial lbw of Runyararo Pasipanodya, while the captain Fatima Sana and Sadia Iqbal chipped in with vital wickets.
              </p>
              <p>
                Tasmia Rubab finished the match by cleaning up the tail, having Nomvelo Sibanda caught by Sidra Amin to end the innings for 162 in the 37th over.
              </p>

              <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" alt="Bowling" className="w-full aspect-video object-cover rounded-3xl" />
            </div>

            {/* Scorecard Sections */}
            <div className="space-y-12">
               <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] overflow-hidden">
                  <div className="p-8 border-b border-white/10 bg-pak-green/5 flex items-center justify-between">
                     <h3 className="text-xl font-display font-bold">Pakistan Batting Scorecard</h3>
                     <span className="text-xs font-black uppercase tracking-[3px] text-pak-green">330/5 (50.0)</span>
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
                              { name: 'Sadaf Shamas', runs: '98 (130)', sr: '75.38', desc: 'Out 33.3 ov' },
                              { name: 'Gull Feroza', runs: '50 (60)', sr: '83.33', desc: 'Out 28.2 ov' },
                              { name: 'Sidra Amin', runs: '67 (59)', sr: '113.5', desc: 'Out 48.5 ov' },
                              { name: 'Najiha Alvi', runs: '56* (30)', sr: '186.6', desc: 'Not Out' },
                              { name: 'Ayesha Zafar', runs: '8 (11)', sr: '72.7', desc: 'Out 35.6 ov' }
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
                     <span className="text-xs font-black uppercase tracking-[3px] text-white/40">162 ALL OUT (36.4)</span>
                  </div>
                  <div className="p-8 overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="text-white/40 uppercase text-[10px] tracking-widest border-b border-white/5 pb-4">
                              <th className="pb-4">Batter</th>
                              <th className="pb-4 text-center">Score</th>
                              <th className="pb-4 text-center">SR</th>
                              <th className="pb-4 text-right">FOW</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {[
                              { name: 'Beloved Biza', runs: '53 (53)', sr: '100', fow: '7-134' },
                              { name: 'Kelis Ndhlovu', runs: '31 (47)', sr: '65.9', fow: '3-66' },
                              { name: 'Precious Marange', runs: '12 (24)', sr: '50.0', fow: '—' },
                              { name: 'Christine Mutasa', runs: '0 (4)', sr: '0', fow: '1-6' }
                           ].map((b, i) => (
                              <tr key={i} className="text-sm group">
                                 <td className="py-4 font-bold">{b.name}</td>
                                 <td className="py-4 text-center font-mono text-white/60">{b.runs}</td>
                                 <td className="py-4 text-center text-white/40">{b.sr}</td>
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
                  <p className="text-xs text-white/40">Sadaf Shamas (98) — Set the record with 162-run opening stand.</p>
               </div>
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                  <TrendingUp className="w-7 h-7 text-blue-500" />
                  <h4 className="font-display font-bold text-white">Strike Rate Legend</h4>
                  <p className="text-xs text-white/40">Najiha Alvi (186.6) — Explosive 56* off 30 to finish the innings.</p>
               </div>
               <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                  <Shield className="w-7 h-7 text-emerald-500" />
                  <h4 className="font-display font-bold text-white">Spin Master</h4>
                  <p className="text-xs text-white/40">Syeda Aroob Shah — Economical and lethal in the middle overs.</p>
               </div>
            </div>

            {/* Stadium Image */}
            <div className="py-10">
               <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" alt="National Stadium" className="w-full aspect-video object-cover rounded-3xl" />
            </div>

            {/* Series Context */}
            <div className="bg-gradient-to-br from-pak-green/20 to-[#0A0A0A] p-10 md:p-14 rounded-[40px] border border-white/10 relative overflow-hidden">
               <h3 className="text-3xl font-display font-bold text-white mb-6">Series Context</h3>
               <p className="text-lg text-white/60 leading-relaxed max-w-2xl relative z-10">
                  This victory gives Pakistan Women a 1-0 lead in the 3-match ODI series. Crucially, as part of the <span className="text-white font-bold">ICC Women's Championship</span>, these points are vital for Pakistan's qualification for future marquee ICC events.
               </p>
               <Users className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-5 pointer-events-none" />
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Up Next</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/peshawar-zalmi-psl-2026-champions-match-report" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">PSL 2026 Final Analysis</span>
                     <ChevronRight className="w-4 h-4 text-pak-green" />
                  </Link>
                  <Link to="/news/babar-azam-psl-2026-complete-story-comeback" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">The King's Redemption</span>
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

export default PakWvsZimW1stODIBlog;
