import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Flame,
  TrendingDown,
  TrendingUp,
  History,
  Clock,
  ChevronRight,
  TrendingUp as TrendUpIcon,
  Globe,
  Award,
  BookOpen,
  PlusCircle,
  AlertCircle,
  MinusCircle,
  Code
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BabarAzamVsShubmanGillCenturiesBlog() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam vs Shubman Gill Test Centuries 2022 vs 2026 | PakCric</title>
        <meta name="description" content="In Dec 2022 Babar led Gill 9-1 in Test centuries. By June 2026 Gill has overtaken 9-11. How Gill added 10 tons while Babar scored zero. Full analysis inside." />
        <meta name="keywords" content="Babar Azam vs Shubman Gill, Test centuries comparison, Babar Azam Test century drought, Shubman Gill Edgbaston 2025, cricket stats 2026" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-rose-600/30 blur-[130px] rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-pak-green/20 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-rose-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Analytics
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <History className="w-3 h-3" /> Historical Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-rose-500" /> June 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Great <br />
                <span className="text-rose-500 italic">Reversal</span> <br />
                9–1 to 9–11.
              </h1>
              
              <p className="text-xl md:text-[26px] text-white/80 font-medium leading-relaxed max-w-3xl pt-4">
                From Dec 2022 to June 2026: The most dramatic shift in modern Test cricket where Shubman Gill added ten centuries while Babar Azam stalled on zero.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reversal Comparison Panel */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* December 2022 Card */}
              <motion.div 
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-950/40 border border-white/5 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[10px] font-black uppercase tracking-[3px] text-white/40">December 2022</span>
                     <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black text-white/60">OLD STATUS</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <img src="https://flagcdn.com/pk.svg" alt="PAK" className="w-5 h-3.5 object-cover rounded shadow" />
                        <span className="text-sm font-bold uppercase tracking-tight">Babar Azam</span>
                      </div>
                      <span className="text-3xl font-display font-black text-pak-green">9 <span className="text-xs font-normal text-white/40 font-sans">TONS</span></span>
                    </div>

                    <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <img src="https://flagcdn.com/in.svg" alt="IND" className="w-5 h-3.5 object-cover rounded shadow" />
                        <span className="text-sm font-bold uppercase tracking-tight">Shubman Gill</span>
                      </div>
                      <span className="text-3xl font-display font-black text-white/60">1 <span className="text-xs font-normal text-white/40 font-sans">TON</span></span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-xs text-white/40 font-medium">
                  Babar led Shubman Gill by a massive <span className="text-pak-green font-bold">8 centuries</span> margin.
                </div>
              </motion.div>

              {/* June 2026 Card */}
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-500/25 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[10px] font-black uppercase tracking-[3px] text-rose-400">June 2026</span>
                     <span className="px-2.5 py-1 bg-rose-500/20 border border-rose-500/30 rounded-lg text-[9px] font-black text-rose-400">PRESENT STATUS</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <img src="https://flagcdn.com/pk.svg" alt="PAK" className="w-5 h-3.5 object-cover rounded shadow" />
                        <span className="text-sm font-bold uppercase tracking-tight">Babar Azam</span>
                      </div>
                      <span className="text-3xl font-display font-black text-white/50">9 <span className="text-xs font-normal text-white/40 font-sans">TONS</span></span>
                    </div>

                    <div className="flex justify-between items-center bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <img src="https://flagcdn.com/in.svg" alt="IND" className="w-5 h-3.5 object-cover rounded shadow" />
                        <span className="text-sm font-bold uppercase tracking-tight text-white">Shubman Gill</span>
                      </div>
                      <span className="text-3xl font-display font-black text-rose-400">11 <span className="text-xs font-normal text-rose-300 font-sans">TONS</span></span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-rose-500/10 text-xs text-rose-400/80 font-medium">
                  Gill has completely reversed the gap to lead by <span className="text-rose-400 font-bold">2 centuries</span>.
                </div>
              </motion.div>

            </div>

            {/* Change delta panel */}
            <div className="mt-6 bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="p-4 border-r border-white/5 flex flex-col items-center justify-center">
                <span className="text-[9px] font-black uppercase text-white/40 tracking-widest mb-1">Babar Azam Added</span>
                <span className="text-3xl font-display font-black text-white/50 flex items-center gap-2">
                  <MinusCircle className="w-5 h-5 text-white/30" /> 0 TONS
                </span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <span className="text-[9px] font-black uppercase text-rose-400/80 tracking-widest mb-1">Shubman Gill Added</span>
                <span className="text-3xl font-display font-black text-rose-400 flex items-center gap-2">
                  <PlusCircle className="w-5 h-5 text-rose-400" /> +10 TONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Content */}
      <section className="py-12 pb-40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-12 text-lg sm:text-xl leading-relaxed text-white/70">
              
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">December 2022 — Where Both Stood</h2>
                <p>
                  In December 2022, these two batters were not even considered comparable. Babar Azam was at the peak of his powers — the No. 1 ranked batter in all three formats simultaneously, the first batter ever to achieve that feat. His 9 Test centuries had been accumulated across six countries. He was the undisputed best batter in the world.
                </p>
                <p>
                  Shubman Gill, meanwhile, had just 1 Test century. A talented 23-year-old opener, still finding his feet at Test level. His brilliant 91 at the Gabba in 2021 had shown his potential — but converting that into consistent centuries had not yet happened. If you had told cricket fans in December 2022 that Gill would overtake Babar in Test centuries within 3.5 years, you would not have been believed.
                </p>
              </div>

              {/* Timeline of Gill's Rise */}
              <div className="space-y-8 pt-10 border-t border-white/10">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">How Gill Scored 10 Test Centuries in 3.5 Years</h2>
                
                <div className="relative border-l-2 border-rose-500/20 ml-4 pl-8 space-y-12">
                  {/* early 2023 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1.5 w-6 h-6 rounded-full bg-rose-500 border-4 border-[#050505] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-white/30 mb-2 block">Early 2023</span>
                    <h4 className="text-lg font-bold uppercase text-white mb-2">Centuries #2 & #3 — vs Sri Lanka and Australia</h4>
                    <p className="text-base text-white/60">
                      Gill begins converting starts into hundreds consistently with incredible back-to-back performances.
                    </p>
                  </div>

                  {/* 2024 breakout */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1.5 w-6 h-6 rounded-full bg-rose-500 border-4 border-[#050505] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-white/30 mb-2 block">2024 — Breakout Year</span>
                    <h4 className="text-lg font-bold uppercase text-white mb-2">Centuries #4, #5, #6, #7 — Major away campaign success</h4>
                    <p className="text-base text-white/60">
                      Dominates including against South Africa and New Zealand. Appointed as the Test vice-captain of India while maintaining a blistering average above 50.
                    </p>
                  </div>

                  {/* Edgbaston masterclass */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1.5 w-6 h-6 rounded-full bg-rose-500 border-4 border-[#050505] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-rose-400 mb-2 block">July 2025</span>
                    <h4 className="text-lg font-bold uppercase text-white mb-2 flex flex-wrap items-center gap-2">
                      Edgbaston Masterpiece <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[9px] rounded font-black">HISTORIC</span>
                    </h4>
                    <p className="text-base text-white/60 mb-3">
                      Centuries #8 and #9 — scoring 269 and 161 in the same Test vs England. He became the first batter in 148 years of Test cricket to score both a double hundred and a 150+ in the same match. Match total of 430 runs. Second-highest ever. 
                    </p>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-sm italic text-white/80">
                      "Well played, star boy. Rewriting history." — Virat Kohli publicly messaged him afterwards.
                    </div>
                  </div>

                  {/* Late 2025 India captain */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1.5 w-6 h-6 rounded-full bg-rose-500 border-4 border-[#050505] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-white/30 mb-2 block">Late 2025</span>
                    <h4 className="text-lg font-bold uppercase text-white mb-2">Appointed India Captain — Century #10</h4>
                    <p className="text-base text-white/60">
                      Became the youngest Indian captain to win a Test match overseas, breaking Sunil Gavaskar's legendary 49-year-old record.
                    </p>
                  </div>

                  {/* 2026 the overtake */}
                  <div className="relative">
                    <div className="absolute -left-11 top-1.5 w-6 h-6 rounded-full bg-rose-500 border-4 border-[#050505] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-rose-400 mb-2 block">2026</span>
                    <h4 className="text-lg font-bold uppercase text-white mb-2">The Overtake — Century #11</h4>
                    <p className="text-base text-white/60">
                      Shubman Gill hits his 11th century to take a 11–9 lead over Babar, completing the ultimate modern-day turnaround.
                    </p>
                  </div>
                </div>
              </div>

              {/* Babar's side */}
              <div className="space-y-6 pt-10 border-t border-white/10">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">Babar's 0 Test Centuries in 3.5 Years — The Great Puzzle</h2>
                <p>
                  The most extraordinary aspect of this comparison is not Gill's rise — it is Babar's complete Test century drought. From December 2022 to June 2026 — 3.5 years — Babar Azam has not scored a single Test century. Not one. He has played Tests across six countries in that period, scored important fifties, and made significant contributions. But he has not crossed three figures once in Test cricket in 3.5 years.
                </p>
                <p>
                  In the same period that Shubman Gill scored 10 Test centuries, Babar Azam scored zero. That contrast tells the story of two careers moving in diametrically opposite directions in the longest format.
                </p>
              </div>

              {/* Side by side comparison table */}
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-display font-black uppercase text-white tracking-tight">Current Stats Head-to-Head (June 2026)</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-xs font-black text-white/40 uppercase tracking-widest pb-2 border-b border-white/5">
                    <span>Metric</span>
                    <span className="text-center">Babar Azam</span>
                    <span className="text-right">Shubman Gill</span>
                  </div>

                  <div className="grid grid-cols-3 text-sm pb-3 border-b border-white/5">
                    <span className="font-bold text-white/50">Test Centuries</span>
                    <span className="text-center font-mono font-bold text-white">9</span>
                    <span className="text-right font-mono font-bold text-rose-400">11</span>
                  </div>

                  <div className="grid grid-cols-3 text-sm pb-3 border-b border-white/5">
                    <span className="font-bold text-white/50">Last Century</span>
                    <span className="text-center font-mono text-white/60">December 2022</span>
                    <span className="text-right font-mono text-rose-400">2026</span>
                  </div>

                  <div className="grid grid-cols-3 text-sm">
                    <span className="font-bold text-white/50">Tons Since Dec 2022</span>
                    <span className="text-center font-mono font-bold text-zinc-600">0</span>
                    <span className="text-right font-mono font-bold text-rose-400">+10</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Why Gill Accelerated While Babar Stalled</h3>
                <p>
                  Gill's explosion happened for three reasons: a settled opening position that suited his game, the captaincy that liberated rather than burdened him, and the Edgbaston 2025 performance that confirmed his status as a generational batter.
                </p>
                <p>
                  Babar's drought reflects the complexity of being Pakistan's defining batter in a struggling team — often chasing totals or defending targets, where crucial fifties matter more than centuries. His average has not collapsed. But the conversion rate — fifties into hundreds — has completely dried up. That is the single biggest area needing development.
                </p>
              </div>

              <div className="pt-10 border-t border-white/10 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">The Verdict</h2>
                <p>
                  The 9–1 to 9–11 reversal is one of the most remarkable statistical stories in modern cricket. It does not mean Babar is no longer great — his ODI record and PSL performances confirm he remains Pakistan's best batter. But it does mean Shubman Gill has established himself as the better Test batter of this generation. One scored zero Test centuries in 3.5 years. The other scored ten.
                </p>
              </div>

              {/* Call to action card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-950/15 via-black to-black border border-rose-500/30 rounded-[32px] md:rounded-[48px] p-8 md:p-12 relative overflow-hidden text-left mt-16"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-xl">
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-full text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                      <Globe className="w-3 h-3" /> OFFICIAL BULLETINS
                    </span>
                    <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                      Never Miss an Update
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      For the latest Pakistan cricket schedule, live scorecards, series updates, and complete statistical rosters, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline hover:text-rose-300 font-bold">pakcric-schedule.online</a>.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a 
                      href="https://pakcric-schedule.online" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-rose-600 text-white hover:bg-rose-700 rounded-[20px] text-xs font-black uppercase tracking-[3px] transition-all group shadow-lg shadow-rose-600/30"
                    >
                      Visit Portal <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Match Archive links */}
              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-rose-400 mb-8">Related Content</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/highest-odi-batting-average-at-home-top-5-all-time" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Statistical Ratios</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Highest ODI Batting Average at Home</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/peshawar-zalmi-psl-2026-champions-match-report" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Match Report</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">Peshawar Zalmi Cup Victory</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-yellow-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Babar Azam vs Shubman Gill Test Centuries 2022 vs 2026" 
        summary="In Dec 2022 Babar led Gill 9-1 in Test centuries. By June 2026 Gill has overtaken 9-11. How Gill added 10 tons while Babar scored zero." 
      />
    </div>
  );
}
