import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Zap, 
  ArrowLeft,
  Share2,
  CheckCircle2,
  Flame,
  Star
} from 'lucide-react';

const PSL2026FinalTossResultBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PSL 2026 Final Toss Result | HYK Won Toss, PZ Batting First | May 3 Gaddafi Stadium</title>
        <meta name="description" content="PSL 2026 Final toss result — Hyderabad Kingsmen won the toss and elected to field. Peshawar Zalmi batting first. Nahid Rana returns for Zalmi. Full confirmed playing XIs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pak-green/10 blur-[120px] rounded-full" />
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
                <span className="px-4 py-1.5 bg-red-600/20 text-red-500 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                  Breaking: Final Toss Result
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 3, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Clock className="w-3 h-3 text-pak-green" /> 7:45 PM PKT
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                HYK Win Toss, <span className="text-red-500">Elect to Bowl</span> — Zalmi to Bat First
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 pt-8 border-y border-white/10 py-8">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Toss Winner</div>
                  <div className="text-xl font-display font-bold text-red-500 uppercase tracking-tight">Hyderabad Kingsmen</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Decision</div>
                  <div className="text-xl font-display font-bold text-white uppercase tracking-tight italic">Bowl First</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Tonight's Venue</div>
                  <div className="text-xl font-display font-bold text-white/80 uppercase tracking-tight flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pak-green" /> Gaddafi Stadium
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breaking News Content */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Nahid Rana News Flash */}
            <div className="bg-gradient-to-r from-pak-green to-emerald-900 rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-pak-green/20">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                  <Zap className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white mb-2 leading-tight">
                    Nahid Rana Returns!
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                    The express fast bowler has received his NOC just in time and flies straight into the Zalmi starting XI. Express pace is back for the final!
                  </p>
                </div>
              </div>
              <Flame className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Confirmed XIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Zalmi XI */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-12 h-12 bg-pak-green/10 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-pak-green" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-pak-green mb-8 uppercase tracking-widest flex items-center gap-3">
                   Peshawar Zalmi XI
                </h3>
                <div className="space-y-3">
                  {[
                    "Mohammad Haris (wk)", "Babar Azam (c)", "Kusal Mendis", "Farhan Yousaf", "Iftikhar Ahmed",
                    "Michael Bracewell", "Aaron Hardie", "Abdul Samad", "Nahid Rana", "Sufiyan Muqeem", "Mohammad Basit"
                  ].map((player, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 group">
                      <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">{player}</span>
                      {player === "Nahid Rana" && <span className="text-[8px] font-black uppercase tracking-widest text-pak-green bg-pak-green/10 px-2 py-0.5 rounded">Special Return</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Kingsmen XI */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-red-500 mb-8 uppercase tracking-widest flex items-center gap-3">
                   Hyderabad Kingsmen XI
                </h3>
                <div className="space-y-3">
                  {[
                    "Maaz Sadaqat", "Saim Ayub", "Marnus Labuschagne (c)", "Usman Khan (wk)", "Kusal Perera",
                    "Glenn Maxwell", "Hassan Khan", "Irfan Khan", "Hunain Shah", "Mohammad Ali", "Akif Javed"
                  ].map((player, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 group">
                      <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">{player}</span>
                      {idx < 2 && <span className="text-[8px] font-black uppercase tracking-widest text-red-400/50 bg-red-500/5 px-2 py-0.5 rounded italic">Dynamic Pair</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                   <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="font-display font-bold uppercase tracking-tight text-white leading-tight">Dew Factor Advantage</h4>
                <p className="text-xs text-white/40 leading-relaxed">Late evening dew expected in Lahore makes chasing the safer bet. Hyderabad Kingsmen correctly identifying the advantage.</p>
              </div>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                <div className="w-10 h-10 bg-pak-green/10 rounded-xl flex items-center justify-center">
                   <Star className="w-5 h-5 text-pak-green" />
                </div>
                <h4 className="font-display font-bold uppercase tracking-tight text-white leading-tight">Babar & 588 Record</h4>
                <p className="text-xs text-white/40 leading-relaxed">Babar needs only 1 run to break the all-time scoring record for a single PSL season (currently tied with Fakhar Zaman at 588).</p>
              </div>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                   <Zap className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-display font-bold uppercase tracking-tight text-white leading-tight">Zalmi's Powerplay</h4>
                <p className="text-xs text-white/40 leading-relaxed">Post-toss pressure: Zalmi must target 65+ in the first 6 overs to handle the Gaddafi chase pedigree of HYK.</p>
              </div>
            </div>

            {/* Detailed Analysis Text */}
            <div className="markdown-body space-y-8 text-xl leading-relaxed text-white/70">
              <h2 className="text-4xl font-display font-bold text-white pt-8">Toss Analysis: Why Hyderabad Chose to Bowl</h2>
              <p>
                Marnus Labuschagne won the toss and did exactly what every captain at Gaddafi Stadium has done this PSL season — <span className="text-pak-green font-bold italic">chose to bowl</span>. At Gaddafi, chasing teams have won the majority of recent matches, primarily due to the dew factor that creeps in after the 12th over.
              </p>
              <p>
                For Hyderabad Kingsmen, who rely heavily on Mohammad Ali, Hunain Shah, and Akif Javed — all fast bowlers — the dew effect is less of a concern than it is for Peshawar Zalmi's spin department later in the night.
              </p>

              <div className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/10 my-16">
                 <h3 className="text-2xl font-display font-bold text-white mb-8">What Zalmi Need (Batting First)</h3>
                 <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                       <div className="w-10 h-10 rounded-2xl bg-pak-green flex items-center justify-center text-black font-black shrink-0">1</div>
                       <div>
                          <p className="text-white font-bold mb-1">Target 195+</p>
                          <p className="text-sm text-white/40">Any score below 180 should be easy to chase at Gaddafi Stadium where the average first-innings score is around 188.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-10 h-10 rounded-2xl bg-pak-green flex items-center justify-center text-black font-black shrink-0">2</div>
                       <div>
                          <p className="text-white font-bold mb-1">65 in Powerplay</p>
                          <p className="text-sm text-white/40">Babar and Haris need to dominate the new ball before the spinners come into play on this flat deck.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-10 h-10 rounded-2xl bg-pak-green flex items-center justify-center text-black font-black shrink-0">3</div>
                       <div>
                          <p className="text-white font-bold mb-1">Nahid Rana's Early Burst</p>
                          <p className="text-sm text-white/40">With raw pace back in the XI, the early pressure on Maaz Sadaqat and Saim Ayub will be the turning point.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-8">The Stage is Set</h2>
              <p>
                The lights are bright, the crowd is loud, and there's a real buzz around the stadium — the closing ceremony is currently in full swing at Gaddafi Stadium, featuring vibrant music and dance performances! Atif Aslam, Aima Baig, and Arif Lohar have just finished their sets, and 27,000 fans are ready.
              </p>
              
              <div className="bg-red-600 rounded-[40px] p-10 md:p-14 text-white relative overflow-hidden my-16">
                 <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
                    <div className="text-[10px] font-black uppercase tracking-[5px] text-white/60">Match Starts</div>
                    <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">8:00 PM PKT</h2>
                    <p className="text-xl font-medium opacity-80 leading-relaxed italic">"Babar Azam in a home final batting first is not something any team can plan for with confidence."</p>
                    <div className="flex items-center justify-center gap-2 pt-4">
                       <CheckCircle2 className="w-5 h-5 text-white/40" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Confirmed Lineups Locked In</span>
                    </div>
                 </div>
                 <Users className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none" />
                 <Trophy className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none" />
              </div>
            </div>

            {/* Footer Links */}
            <div className="pt-20 border-t border-white/10 mt-20">
              <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Updates</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/news/babar-azam-psl-finals-from-player-to-captain" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                  <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Babar's Captaincy Finals Journey</span>
                  <ChevronRight className="w-4 h-4 text-pak-green" />
                </Link>
                <Link to="/news/psl-11-final-starting-time-guide-2026" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                  <span className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Complete Final Day Guide</span>
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
            Share Final Result
          </span>
        </button>
      </div>
    </div>
  );
};

export default PSL2026FinalTossResultBlog;
