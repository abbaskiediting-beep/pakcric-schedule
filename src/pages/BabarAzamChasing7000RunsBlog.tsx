import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Target,
  Trophy,
  ChevronRight,
  TrendingUp,
  Award,
  BookOpen,
  Activity,
  History,
  Zap,
  Globe,
  Quote,
  Flame,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BabarAzamChasing7000RunsBlog() {
  const leaderboard = [
    { pos: '1', player: 'Hashim Amla 🏆', country: 'South Africa', innings: 150, year: '2017', bg: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500' },
    { pos: '2', player: 'Quinton de Kock', country: 'South Africa', innings: 158, year: '2025', bg: 'bg-white/5 border-white/10 text-white/80' },
    { pos: '3', player: 'Kane Williamson', country: 'New Zealand', innings: 159, year: '—', bg: 'bg-white/5 border-white/10 text-white/80' },
    { pos: '4', player: 'Virat Kohli', country: 'India', innings: 161, year: '2016', bg: 'bg-white/5 border-white/10 text-white/80' },
    { pos: '5', player: 'AB de Villiers', country: 'South Africa', innings: 166, year: '—', bg: 'bg-white/5 border-white/10 text-white/80' },
    { pos: '?', player: 'Babar Azam 🎯', country: 'Pakistan', innings: '149 (potential)', year: '2026 — if he gets there in 9 innings', bg: 'bg-pak-green/20 border-pak-green/30 text-pak-green font-black animate-pulse' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam Chasing Fastest 7000 ODI Runs Record 2026 | PakCric</title>
        <meta name="description" content="Babar Azam needs 374 runs in 9 innings to reach 7000 ODI runs and can beat Hashim Amla and Virat Kohli's record in just 149 innings. Full milestone analysis." />
        <meta name="keywords" content="Babar Azam fastest 7000 ODI runs record 2026, Hashim Amla, Virat Kohli, Pakistan ODI Schedule, cricket records 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Analytics
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Flame className="w-3 h-3 animate-pulse" /> Record Alert • ODI Cricket 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> June 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Babar Azam <br />
                <span className="text-pak-green italic">374 Away</span> <br />
                From History.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                If Babar Azam scores 374 runs in his next 9 innings, he will break Hashim Amla's world record to become the fastest to 7,000 ODI runs in cricket history.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Tracker Widget */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 rounded-[32px] p-6 sm:p-10 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight flex items-center gap-2">
                  <Target className="text-pak-green w-6 h-6" /> Babar's 7,000 ODI Runs Progress Tracker
                </h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">Countdown to Hashim Amla's World Record</p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-pak-green/10 px-4 py-2 border border-pak-green/20 rounded-xl text-xs font-black uppercase text-pak-green">
                <span>Current: 6,626 Runs</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="py-8 space-y-3">
              <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-white/60">
                <span>ODI debut (May 2015) — 0 Runs</span>
                <span className="text-pak-green font-mono">94.6% Completed</span>
                <span>Target: 7,000 Runs</span>
              </div>
              
              <div className="w-full h-4 bg-zinc-950 rounded-full overflow-hidden p-0.5 border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '94.6%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-pak-green/50 to-pak-green rounded-full relative"
                >
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-80" />
                </motion.div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-1">Current ODI Runs</span>
                  <span className="text-xl font-display font-black text-white">6,626</span>
                </div>
                <div className="p-4 bg-pak-green/5 rounded-2xl border border-pak-green/20 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-pak-green/70 block mb-1">Runs Needed</span>
                  <span className="text-xl font-display font-black text-pak-green">374</span>
                </div>
                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-1">Innings Played</span>
                  <span className="text-xl font-display font-black text-white">139</span>
                </div>
                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-1">Target Innings</span>
                  <span className="text-xl font-display font-black text-white">149 <span className="text-xs font-medium text-white/40">(Beats Amla)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head to Head Comparison */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-display font-black uppercase text-white/60 tracking-[2px] mb-6 text-center">The Three-Way Milestone Race</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Hashim Amla */}
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center font-display font-bold text-yellow-500">HA</div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-tight">Hashim Amla</h4>
                      <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">🇿🇦 South Africa</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-display font-black text-yellow-500">150</span>
                    <p className="text-xs text-white/50 font-medium">Innings to 7,000 runs</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-black text-yellow-500 uppercase tracking-wider">
                  🏆 Current World Record
                </div>
              </div>

              {/* Virat Kohli */}
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-display font-bold text-blue-400">VK</div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-tight">Virat Kohli</h4>
                      <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">🇮🇳 India</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-display font-black text-white/80">161</span>
                    <p className="text-xs text-white/50 font-medium">Innings to 7,000 runs</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-black text-white/40 uppercase tracking-wider">
                  Previous Record Holder
                </div>
              </div>

              {/* Babar Azam */}
              <div className="bg-gradient-to-br from-pak-green/10 via-zinc-950 to-zinc-950 border border-pak-green/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pak-green/10 blur-[40px] rounded-full pointer-events-none" />
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-pak-green/20 border border-pak-green/30 flex items-center justify-center font-display font-bold text-pak-green">BA</div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-tight">Babar Azam</h4>
                      <p className="text-[9px] font-bold text-pak-green uppercase tracking-wide">🇵🇰 Pakistan</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl font-display font-black text-pak-green">149</span>
                    <p className="text-xs text-pak-green/70 font-medium">Innings (potential)</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-pak-green/20 text-[10px] font-black text-pak-green uppercase tracking-widest">
                  🎯 Can beat both in 9 innings
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Stats Table */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-white/5">
              <h4 className="text-base font-display font-black uppercase text-white tracking-wider">Fastest to 7,000 ODI Runs — All Time List</h4>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-0.5">Statistical history of the speediest odi milestones</p>
            </div>
            
            <div className="divide-y divide-white/5 overflow-x-auto">
              <div className="grid grid-cols-5 text-[10px] font-black uppercase text-white/35 tracking-wider px-6 py-3 min-w-[500px]">
                <span>Pos</span>
                <span className="col-span-2">Player / Country</span>
                <span className="text-center">Innings</span>
                <span className="text-right">Year Achieved</span>
              </div>

              {leaderboard.map((row, i) => (
                <div key={i} className="grid grid-cols-5 items-center px-6 py-4 text-sm font-medium text-white/80 min-w-[500px]">
                  <span>{row.pos}</span>
                  <span className="col-span-2 flex items-center gap-2">
                    <span className={`px-2 py-0.5 text-[10px] rounded-md font-bold ${row.bg}`}>{row.player}</span>
                    <span className="text-xs text-white/40 font-bold uppercase">{row.country}</span>
                  </span>
                  <span className="text-center font-mono font-bold">{row.innings}</span>
                  <span className="text-right text-xs text-white/50">{row.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Record Scenarios Panels */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xs font-black uppercase tracking-[3px] text-white/40 mb-6 text-center">Babar's Path to 7,000 runs: Two Scenarios</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 sm:p-8 bg-gradient-to-br from-pak-green/10 via-black to-black border border-pak-green/30 rounded-[32px] space-y-4">
                <span className="px-2.5 py-1 bg-pak-green/20 text-pak-green text-[9px] font-black rounded-lg uppercase tracking-wide border border-pak-green/30">🏆 Scenario 1 — Best Case</span>
                <h4 className="text-lg font-display font-black uppercase tracking-tight text-white pt-2">374 runs in 9 innings</h4>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Avg Needed</span>
                    <span className="font-mono font-bold text-white">41.56 per innings</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Total Innings</span>
                    <span className="font-mono font-bold text-pak-green">148 Innings</span>
                  </div>
                  <p className="text-xs text-white/40 font-medium pt-2 border-t border-white/5">
                    Will break Hashim Amla's historic 150-innings mark outright to become the unified fastest champion.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-zinc-950/50 border border-white/5 rounded-[32px] space-y-4">
                <span className="px-2.5 py-1 bg-white/5 text-white/60 text-[9px] font-black rounded-lg uppercase tracking-wide border border-white/10">🎯 Scenario 2 — Still a Record</span>
                <h4 className="text-lg font-display font-black uppercase tracking-tight text-white pt-2">499 runs in 12 innings</h4>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Avg Needed</span>
                    <span className="font-mono font-bold text-white">41.58 per innings</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Total Innings</span>
                    <span className="font-mono font-bold text-white">151 Innings</span>
                  </div>
                  <p className="text-xs text-white/40 font-medium pt-2 border-t border-white/5">
                    Misses beating Hashim Amla's record by just 1 innings, but still eclipses Virat Kohli's previous 161-innings mark comfortably.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Babar's Milestones History Badge Track */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-950/40 border border-white/5 rounded-[32px] p-6 sm:p-10">
            <h4 className="text-sm font-display font-black uppercase tracking-wider text-white mb-8 border-b border-white/5 pb-4">Babar's Milestone History — Fastest Records Tracker</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              
              <div className="space-y-2 text-left p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                <span className="text-2xl font-display font-black text-white">5,000</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">97 innings</span>
                <span className="px-2 py-0.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded text-[9px] font-black uppercase">✓ Fastest ever</span>
              </div>

              <div className="space-y-2 text-left p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                <span className="text-2xl font-display font-black text-white">6,000</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">123 innings</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded text-[9px] font-black uppercase">✓ Joint record</span>
              </div>

              <div className="space-y-2 text-left p-4 bg-pak-green/5 rounded-2xl border border-pak-green/20">
                <span className="text-2xl font-display font-black text-pak-green">7,000</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">149 innings?</span>
                <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 rounded text-[9px] font-black uppercase animate-pulse">⏳ In progress</span>
              </div>

              <div className="space-y-2 text-left p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                <span className="text-2xl font-display font-black text-white/40">8,000</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block">~175+?</span>
                <span className="px-2 py-0.5 bg-white/5 text-white/40 rounded text-[9px] font-black uppercase">Upcoming</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section and Text */}
      <section className="py-12 pb-40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-12 text-lg sm:text-xl leading-relaxed text-white/70">
              
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">Why This Would Be One of the Greatest ODI Batting Records in History</h2>
                <p>
                  Babar Azam's ODI records carry a unique weight because they have been achieved against the full strength of international cricket — not in a friendly era, not with limited opposition, but in the most competitive period in ODI history. To put his milestone pace in perspective: Babar reached 5,000 ODI runs in just 97 innings — the fastest ever, beating Hashim Amla's 101 innings. He reached 6,000 in 123 innings — joint fastest with Amla, pushing Virat Kohli to third. And now, he is within 9 innings of potentially becoming the fastest to 7,000 — outright.
                </p>
                <p>
                  What makes this even more remarkable is that Babar's journey to 6,626 runs includes a period of scrutiny and pressure that would have broken lesser batters. Since his last ODI century in August 2023 against Nepal, he has averaged 37 in ODIs — well below his career mark — yet the sheer volume of runs he banked before that drought means he is still on course to break records that were once thought untouchable.
                </p>
              </div>

              <p className="text-xl sm:text-2xl text-white/80 font-medium italic border-l-4 border-pak-green pl-6 py-2">
                "Babar is also the fastest overall to reach 5,000 ODI runs, accomplishing this in just 97 innings. He reached 6,000 in 123 innings — joint fastest alongside Hashim Amla."
                <span className="block text-xs font-black uppercase tracking-widest text-white/40 mt-2">— ESPNcricinfo, February 2025</span>
              </p>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Hashim Amla — The Record Holder Whose Legacy Babar Could Rewrite</h3>
                <p>
                  Hashim Amla holds the record for the fastest to 2,000, 3,000, 4,000, 5,000, 6,000, and 7,000 runs in ODI cricket. He is arguably the most statistically dominant batter in the history of the ODI milestone charts. His 7,000 in 150 innings was achieved in 2017 — breaking Virat Kohli's then-record of 161 innings by an astonishing 11 innings. In 153 ODIs, Amla scored 8,113 runs at an average of 49.46 — a career that defines what it means to be a run-machine.
                </p>
                <p>
                  For Babar Azam to beat Amla's 150-innings record, he needs 374 runs in 9 innings — an average of 41.56 per innings. For a batter of Babar's calibre, that is not just achievable — it is expected. His career ODI average stands at approximately 54. The record is well within reach.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Kohli's 161 Innings — Already Third, Now Threatened Further</h3>
                <p>
                  Virat Kohli became the fastest to 7,000 ODI runs in January 2016, reaching the milestone against Australia at the MCG in 161 innings. It was a record that seemed untouchable. Then Hashim Amla beat it in 2017, reaching 7,000 in just 150 innings. Then Quinton de Kock beat Kohli again in 2025 with 158 innings. And now Babar Azam is poised to push Kohli further down the list — to at least fourth place, and potentially to fifth behind de Kock as well. Kohli's 161-innings record, once the pinnacle of ODI batting achievement, is now firmly in Babar's range.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Pakistan's Upcoming ODI Schedule — When Will the Record Fall?</h3>
                <p>
                  Pakistan have a packed ODI schedule ahead — the 3rd ODI vs Australia on June 4, followed by ICC Champions Trophy matches and further bilateral ODI series in the coming months. If Babar scores consistently — and his recent 69 vs Australia in the 1st ODI shows his form is sharp — the 7,000-run milestone could arrive as early as mid-2026. If he averages 42-45 per innings in his next nine outings, the record will be his before the year is out.
                </p>
                <p>
                  Pakistan's ODI schedule also includes matches against England and India-related ICC tournaments — high-profile games on big stages where Babar has historically scored his most important innings. The record may well fall in a match that millions are watching. Given Babar's flair for the big occasion, that feels entirely appropriate.
                </p>
              </div>

              <div className="pt-10 border-t border-white/10 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">The Countdown Is On — 374 Runs to History</h2>
                <p>
                  Babar Azam: 6,626 ODI runs. 374 needed. 9 innings remaining to make history. If he gets there, he will become the fastest batter ever to 7,000 ODI runs — beating Hashim Amla's world record that has stood since 2017.
                </p>
              </div>

              {/* Enhanced call to action to pakcric-schedule.online */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pak-green/10 via-black to-black border border-pak-green/35 rounded-[32px] md:rounded-[48px] p-8 md:p-12 relative overflow-hidden text-left mt-16"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-xl">
                    <span className="px-3 py-1 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                      <Globe className="w-3 h-3" /> FAN BULLETINS
                    </span>
                    <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                      Follow Every ODI Live
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      For the upcoming Pakistan cricket schedule, series updates, live scoring notifications, and complete cricket statistics, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-pak-green underline hover:text-emerald-400 font-bold font-mono">pakcric-schedule.online</a>.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a 
                      href="https://pakcric-schedule.online" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-pak-green text-white hover:bg-emerald-600 rounded-[20px] text-xs font-black uppercase tracking-[3px] transition-all group shadow-lg shadow-pak-green/30"
                    >
                      Visit Portal <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Match Archive links */}
              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Content</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/highest-odi-batting-average-at-home-top-5-all-time" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Historical Standings</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Highest ODI Batting Average at Home</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/babar-azam-vs-shubman-gill-test-centuries-2022-vs-2026-comparison" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Player Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-rose-500 transition-colors">Babar vs Shubman Test Centuries</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-rose-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Babar Azam Chasing Fastest 7000 ODI Runs Record 2026" 
        summary="Babar Azam needs 374 runs in 9 innings to break Hashim Amla's world record of 150 innings to reach 7,000 ODI runs." 
      />
    </div>
  );
}
