import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Star,
  Target,
  Trophy,
  ChevronRight,
  TrendingUp,
  Award,
  BookOpen,
  Activity,
  History,
  TrendingDown,
  User,
  Quote,
  Medal,
  Globe,
  Flame,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const HighestOdiBattingAverageAtHomeBlog = () => {
  const topBatters = [
    {
      rank: 1,
      name: 'Desmond Haynes',
      team: 'West Indies',
      avg: '67.71',
      runs: '2,573',
      span: '1977 – 1994',
      bgGlow: 'from-amber-600/10 to-transparent',
      borderColor: 'border-amber-500/20',
      badgeColor: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
      flagUrl: 'https://flagcdn.com/bb.svg'
    },
    {
      rank: 2,
      name: 'Virat Kohli',
      team: 'India',
      avg: '62.42',
      runs: '6,867',
      span: '2008 – present',
      bgGlow: 'from-blue-600/10 to-transparent',
      borderColor: 'border-blue-500/20',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      flagUrl: 'https://flagcdn.com/in.svg'
    },
    {
      rank: 3,
      name: 'Babar Azam',
      team: 'Pakistan',
      avg: '60.37',
      runs: '1,932',
      span: '2015 – present',
      bgGlow: 'from-pak-green/15 to-transparent',
      borderColor: 'border-pak-green/30',
      badgeColor: 'bg-pak-green/20 text-pak-green border-pak-green/30',
      flagUrl: 'https://flagcdn.com/pk.svg'
    },
    {
      rank: 3,
      name: 'Shubman Gill',
      team: 'India',
      avg: '60.37',
      runs: '1,630',
      span: '2019 – present',
      bgGlow: 'from-orange-600/10 to-transparent',
      borderColor: 'border-orange-500/20',
      badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      flagUrl: 'https://flagcdn.com/in.svg'
    },
    {
      rank: 5,
      name: 'Zaheer Abbas',
      team: 'Pakistan',
      avg: '58.85',
      runs: '1,236',
      span: '1974 – 1985',
      bgGlow: 'from-emerald-600/10 to-transparent',
      borderColor: 'border-emerald-500/20',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      flagUrl: 'https://flagcdn.com/pk.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Highest ODI Batting Average at Home — Top 5 All Time | PakCric</title>
        <meta name="description" content="Desmond Haynes leads with 67.71 average at home in ODIs. Babar Azam and Shubman Gill tied at 60.37 among top 5 with min 1000 runs. Full stats and analysis." />
        <meta name="keywords" content="highest batting average at home ODI, Babar Azam home ODI average, Virat Kohli home ODI records, Shubman Gill ODI average, Desmond Haynes cricket stats" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[850px] h-[850px] bg-pak-green/10 blur-[160px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[650px] h-[650px] bg-yellow-500/5 blur-[130px] rounded-full" />
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
                  <Trophy className="w-3 h-3" /> All-Time Records
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> June 2026
                </span>
                <span className="px-3 py-1.5 bg-white/5 text-white/60 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Min. 1,000 Runs
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Home <br />
                <span className="text-pak-green italic">Fortress</span> <br />
                Kings.
              </h1>
              
              <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                The Five Greatest Home ODI Batters of All Time — Ranked by Average. An ultimate deep dive into familiar dominance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Table/Visual Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden backdrop-blur-md shadow-2xl"
            >
              <div className="p-6 md:p-10 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-black uppercase text-white tracking-tight">The All-Time Leaderboard</h3>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Highest Home Average in ODI Cricket History</p>
                </div>
                <div className="px-4 py-2 bg-pak-green/10 border border-pak-green/20 rounded-2xl text-[10px] font-black uppercase tracking-widest text-pak-green">
                  Updated: June 2026
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="space-y-4">
                  {topBatters.map((batter, index) => (
                    <div 
                      key={index} 
                      className={`relative overflow-hidden bg-gradient-to-r ${batter.bgGlow} border ${batter.borderColor} rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:scale-[1.01]`}
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center font-display font-black text-lg md:text-2xl italic border bg-black/40 ${index === 0 ? 'text-yellow-400 border-yellow-500/20' : index === 1 ? 'text-slate-300 border-slate-400/20' : 'text-slate-400 border-slate-500/20'}`}>
                          #{batter.rank}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <img src={batter.flagUrl} alt="" className="w-5 h-3.5 object-cover rounded shadow" />
                            <h4 className="text-base md:text-xl font-display font-bold text-white uppercase tracking-tight">{batter.name}</h4>
                          </div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{batter.team} • <span className="text-white/30">{batter.span}</span></p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-8 md:gap-14 border-t border-white/5 md:border-0 pt-4 md:pt-0">
                        <div className="text-left md:text-right">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/30 block mb-0.5">Runs Scored</span>
                          <span className="text-sm md:text-lg font-mono font-bold text-white/80">{batter.runs}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] font-black uppercase tracking-widest text-pak-green block mb-0.5">Batting Average</span>
                          <span className="text-2xl md:text-4xl font-display font-black text-pak-green italic">{batter.avg}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="py-12 pb-40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-12 text-lg sm:text-xl leading-relaxed text-white/70">
              <p className="text-xl sm:text-2xl text-white/80 font-medium italic border-l-4 border-pak-green pl-6 py-2">
                "Some players thrive under hostile skies, but the truly legendary turn their own soil into an untouchable fortress. To average above 55 at home in ODIs is rare; to average above 60 is an act of absolute mastery."
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <span className="text-yellow-400">#1</span> — Desmond Haynes: 67.71 — The Home Fortress King
                </h3>
                <p>
                  Desmond Haynes sits at the very top — a position that tells you everything about the Barbadian opener's dominance on home soil. Playing for the West Indies during the golden era of Caribbean cricket, Haynes averaged 67.71 in home ODIs across a career that spanned from 1977 to 1994. He scored 2,573 runs — numbers that remain unmatched in the home ODI batting average stakes.
                </p>
                <p>
                  His opening partnership with Gordon Greenidge was the most feared in ODI cricket during the 1980s. Haynes had the technique, the temperament, and the conditions — Kingston, Bridgetown, and Port of Spain were batting paradises where he consistently excelled. Nobody has matched his 67.71 average at home in ODI history with 1,000+ runs.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <span className="text-slate-300">#2</span> — Virat Kohli: 62.42 — 6,867 Home Runs, Zero Equals
                </h3>
                <p>
                  If Haynes has the highest average, Kohli has the most staggering combination of average and volume on this list. 6,867 home runs at 62.42 — numbers that dwarf everyone else in both dimensions simultaneously. No batter in ODI history has scored more home runs while maintaining an average above 60.
                </p>
                <p>
                  Kohli's home ODI record is built across 290 innings — not 30 or 40, but 290 innings — maintaining 62.42 throughout. The Eden Gardens, Wankhede, and Chinnaswamy saw him at his very best year after year. He is the most prolific home run-scorer in ODI cricket history by a considerable distance.
                </p>
              </div>

              {/* Stat Callout Card */}
              <div className="bg-[#0A1A0F] border border-pak-green/20 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Quote className="w-56 h-56 text-pak-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-6 relative z-10 flex items-center gap-2">
                  <Flame className="w-6 h-6 text-pak-green animate-pulse" /> The Pakistan Standout
                </h3>
                <p className="text-base text-white/80 leading-relaxed mb-4 relative z-10">
                  Pakistan boasts two batters in the all-time top 5 home averages. Zaheer Abbas laid the groundwork in the 1970s and 80s with 58.85, whereas modern maestro Babar Azam sits joint third with an incredible 60.37 average.
                </p>
              </div>

              <div className="space-y-6 pt-6 animate-fade-in">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <span className="text-pak-green">#3</span> — Babar Azam: 60.37 — Pakistan's Best Home ODI Average in History
                </h3>
                <p>
                  Babar Azam sits joint third — and at just 31 years old, his home average of 60.37 will almost certainly rise further. No Pakistan batter in ODI history — not Zaheer Abbas, not Javed Miandad, not Inzamam-ul-Haq, not Saeed Anwar — has a higher home ODI average. Babar has rewritten the record books for Pakistan ODI batting at home.
                </p>
                <p>
                  His 1,932 home runs at 60.37 have been scored on surfaces that do not always favour batters, against bowling attacks who study him relentlessly. His recent 69 vs Australia in the 2026 home series continued pushing this average higher — and with the 2027 ODI World Cup on the horizon, his home record suggests Pakistan will be formidable on their own soil.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <span className="text-orange-400">#3</span> — Shubman Gill: 60.37 — India's New King at Home
                </h3>
                <p>
                  Shubman Gill's presence on this list — at just 25 years old — is one of cricket's most remarkable statistical achievements. He has scored 1,630 home ODI runs at 60.37, placing him level with Babar Azam in joint third. 
                </p>
                <p>
                  His highest score of 208 against New Zealand in Hyderabad is the highest individual score by any batter on this list. Gill has built this average in fewer matches than anyone else here — suggesting a player who has hit the ground running and maintained extraordinary consistency from the very start of his international career.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  <span className="text-emerald-400">#5</span> — Zaheer Abbas: 58.85 — Pakistan's Original ODI Master
                </h3>
                <p>
                  Zaheer Abbas averaging 58.85 in home ODIs in 2026 records — from a career spanning 1974 to 1985 — is a tribute to a man who dominated the format when it was still finding its feet. Nicknamed the Asian Bradman, he scored 1,236 home ODI runs at 58.85 on slower pitches, rougher outfields, and with lighter bats than today's players use. 
                </p>
                <p>
                  His presence on this list alongside Babar Azam shows how deep Pakistan's ODI batting tradition runs — two Pakistani batters in the all-time top five for home ODI averages is a remarkable national achievement.
                </p>
              </div>

              <div className="pt-10 border-t border-white/10 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">What This Record Tells Us</h2>
                <p>
                  Home ODI average is one of cricket's most underrated statistics. All five batters on this list share one quality beyond their averages: they were or are the defining batter of their nation's ODI story. Haynes for West Indies. Kohli for India. Babar for Pakistan. Gill for India's next generation. Zaheer for Pakistan's golden era. To average above 60 at home means you almost never fail in familiar conditions — these five batters have turned home advantage into a science.
                </p>
              </div>

              {/* Beautiful custom call to action to pakcric-schedule.online */}
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
                      <Globe className="w-3 h-3" /> OFFICIAL FAN ZONE
                    </span>
                    <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                      Never Miss a Ball
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      For the complete Pakistan cricket schedule, upcoming ODI fixtures, and latest cricket stats, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-pak-green underline hover:text-emerald-400 font-bold">pakcric-schedule.online</a>.
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
                  <Link to="/news/pakistan-vs-australia-2026-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Series Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Pakistan vs Australia 2026</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/rankings/odi-batting" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ICC Standings</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-amber-500 transition-colors">Current ODI Batting Rankings</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Highest ODI Batting Average at Home — Top 5 All Time" 
        summary="Desmond Haynes leads with 67.71 average at home in ODIs. Babar Azam and Shubman Gill tied at 60.37 with min 1000 runs." 
      />
    </div>
  );
};

export default HighestOdiBattingAverageAtHomeBlog;
