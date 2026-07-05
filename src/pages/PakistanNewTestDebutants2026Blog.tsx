import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  Users,
  Award,
  Zap,
  Shield,
  Star,
  Activity,
  Sparkles,
  BarChart3,
  UserCheck
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function PakistanNewTestDebutants2026Blog() {
  const debutants = [
    {
      id: 1,
      name: 'Azan Awais',
      role: 'Opening Batsman',
      tagline: 'The highly-rated U-19 prodigy making waves in first-class cricket.',
      stats: {
        fcMatches: '34',
        fcRuns: '2,791',
        fcAvg: '48.96',
        fcCenturies: '11',
        fcHighest: '203*',
        listAMatches: '13',
        listARuns: '375',
        listAAvg: '28.84'
      },
      description: "Azan Awais is a highly rated top-order batsman who rose to prominence through Pakistan's U-19 team and has transitioned seamlessly into senior red-ball cricket.",
      fcBrief: "He has played 34 first-class matches, amassing 2,791 runs at an impressive average of 48.96. He has scored 11 centuries and 9 half-centuries, with a highest score of 203*. He was one of the leading run-scorers in the latest Quaid-e-Azam Trophy season, scoring 803 runs.",
      listABrief: "In the 50-over format, he has played 13 matches, scoring 375 runs at an average of 28.84, including 5 half-centuries."
    },
    {
      id: 2,
      name: 'Muhammad Ghazi Ghori',
      role: 'Wicketkeeper-Batsman',
      tagline: 'Reliable glovework and solid batting depth in red-ball cricket.',
      stats: {
        fcMatches: '26',
        fcRuns: '1,692',
        fcAvg: '41.26',
        fcCenturies: '3',
        fcHighest: '142*',
        listAMatches: '20',
        listARuns: '337',
        listAAvg: '22.46'
      },
      description: "Ghazi Ghori has been brought into the squad as the backup wicketkeeping option alongside Mohammad Rizwan. Having already tasted limited-overs international exposure, he is now inline for a Test cap.",
      fcBrief: "In 26 first-class matches, he has accumulated 1,692 runs at a solid average of 41.26. His red-ball resume includes 3 centuries, with notable performances representing State Bank and HEC.",
      listABrief: "In List A cricket, he has featured in 20 matches, scoring 337 runs while providing reliable glovework behind the stumps."
    },
    {
      id: 3,
      name: 'Muhammad Awais Zafar',
      role: 'Middle-Order Batsman',
      tagline: 'Faisalabad’s domestic pillar earns his deserved maiden call-up.',
      stats: {
        fcMatches: '14',
        fcRuns: '984',
        fcAvg: '44.72',
        fcCenturies: '3',
        fcHighest: '148',
        listAMatches: '8',
        listARuns: '192',
        listAAvg: '24.00'
      },
      description: "Awais Zafar represents Faisalabad Region and SNGPL. He earned his maiden call-up after a breakthrough domestic season where he caught the attention of the national selectors.",
      fcBrief: "During the recently concluded Quaid-e-Azam Trophy, he was a pillar for Faisalabad. In 9 matches (16 innings), he smashed 622 runs at an average of 47.85, including 2 centuries and 3 fifties, with a top score of 148.",
      listABrief: "Highly promising in building innings, Awais possesses great temperament under pressure and a textbook technique suited perfectly to challenging red-ball tracks."
    },
    {
      id: 4,
      name: 'Ubaid Shah',
      role: 'Fast Bowler',
      tagline: 'Naseem Shah’s younger brother packing raw pace and natural seam movement.',
      stats: {
        fcMatches: '12',
        fcWickets: '42',
        fcAvg: '21.40',
        fcFiveW: '2',
        fcBest: '6/52',
        listAMatches: '15',
        listAWickets: '24',
        listAAvg: '23.12'
      },
      description: "The younger brother of Pakistan's premier speedster Naseem Shah, Ubaid Shah has generated immense buzz with his raw pace, seam movement, and high-intensity bowling.",
      fcBrief: "He was Pakistan’s standout bowler in the 2024 U-19 World Cup, taking 18 wickets at an incredible average under 14, earning a spot in the ICC Team of the Tournament. His transition to first-class cricket has been rapid and impactful.",
      listABrief: "Representing Lahore Whites domestically and various franchises (including Lahore Qalandars in the PSL), his ability to extract bounce and movement against senior batsmen rapidly accelerated his call-up to the red-ball squad."
    },
    {
      id: 5,
      name: 'Ali Usman',
      role: 'Slow Left-Arm Orthodox / All-Rounder',
      tagline: 'The seasoned domestic spinner with mind-blowing wicket-taking records.',
      stats: {
        fcMatches: '38',
        fcWickets: '168',
        fcAvg: '23.82',
        fcFiveW: '11',
        fcBest: '6/9',
        listAMatches: '25',
        listAWickets: '38',
        listAAvg: '26.40'
      },
      description: "Ali Usman is a seasoned domestic campaigner whose consistent, record-breaking wicket-taking hauls in the Quaid-e-Azam Trophy finally earned him his deserved national call-up.",
      fcBrief: "Playing for Multan and PTV, he has consistently finished at the top of the bowling charts. He holds a historic domestic record where he ripped through SNGPL by taking 6 wickets for just 9 runs, bundling them out for 37.",
      listABrief: "Aside from his lethal left-arm spin, he is a highly capable lower-order batsman with multiple handy domestic cameos, making him a perfect all-round package for subcontinental and overseas tracks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Meet Pakistan’s New Test Debutants for 2026 Tours | Domestic & List A Records</title>
        <meta name="description" content="Discover the impressive domestic, U-19, and List A performance records of Pakistan's fresh Test squad call-ups, including Azan Awais, Ubaid Shah, and Ali Usman." />
        <meta name="keywords" content="Pakistan cricket debutants, Azan Awais, Ubaid Shah, Ali Usman, Ghazi Ghori, Awais Zafar, Pakistan test squad 2026, Quaid-e-Azam Trophy records" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Bulletins
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <UserCheck className="w-3 h-3 animate-pulse" /> Debutants Special
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> July 5, 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Meet Pakistan’s <br />
                New Test <span className="text-emerald-500 italic">Debutants</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                Discover the impressive domestic, U-19, and List A performance records of Pakistan's fresh Test squad call-ups for the 2026 tours of the West Indies and England.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  HT
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Hassan Tariq</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Senior Cricket Analyst</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Narrative Introduction */}
      <section className="py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-3xl mb-12 shadow-xl leading-relaxed text-white/80 space-y-4 text-base sm:text-lg">
              <p>
                The Pakistan Cricket Board’s announcement of the 16-member squad for the upcoming Test tours of the West Indies and England has brought in some of the country's most exciting red-ball talent. With <strong className="text-white">Babar Azam</strong> back at the helm, the selectors have placed immense confidence in the stars of Pakistan's premier domestic tournament, the Quaid-e-Azam Trophy, alongside standout youth talents.
              </p>
              <p>
                These fresh faces represent the long-term vision of Pakistan’s red-ball future. Let’s take an in-depth look at their career backgrounds, first-class records, and domestic impacts.
              </p>
            </div>

            {/* Individual Debutants Section */}
            <div className="space-y-16">
              {debutants.map((deb, idx) => (
                <motion.div 
                  key={deb.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-zinc-950/40 border border-white/5 rounded-[32px] p-6 sm:p-10 relative overflow-hidden group hover:border-emerald-500/20 transition-all"
                >
                  {/* Backdrop subtle index */}
                  <span className="absolute -right-6 -top-12 text-[150px] font-display font-black text-white/[0.01] pointer-events-none select-none">
                    0{idx + 1}
                  </span>

                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 font-mono mb-2 block">
                        Prospect 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white leading-none">
                        {deb.name}
                      </h2>
                      <p className="text-sm font-medium text-white/50 italic mt-1 uppercase tracking-wider font-mono">
                        {deb.role}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                      <p className="text-xs text-emerald-400 font-black uppercase tracking-widest font-mono">
                        Call-Up Confirmed
                      </p>
                    </div>
                  </div>

                  <p className="text-white/90 text-base font-medium mb-8 leading-relaxed max-w-3xl italic pl-4 border-l-2 border-emerald-500">
                    "{deb.tagline}"
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Biography & Careers */}
                    <div className="lg:col-span-7 space-y-6 text-white/75 leading-relaxed text-sm sm:text-base">
                      <p>{deb.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-xs font-black uppercase tracking-widest text-white/90 flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-emerald-500" /> First-Class Record
                        </h4>
                        <p className="text-white/70">{deb.fcBrief}</p>
                      </div>

                      {deb.listABrief && (
                        <div className="space-y-2">
                          <h4 className="text-xs font-black uppercase tracking-widest text-white/90 flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-yellow-500" /> List A & Youth Impact
                          </h4>
                          <p className="text-white/70">{deb.listABrief}</p>
                        </div>
                      )}
                    </div>

                    {/* Performance Stats Cards */}
                    <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                      <div>
                        <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-emerald-500" /> Career Statistics
                        </h3>
                        
                        {/* First Class Stats */}
                        <div className="space-y-3">
                          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 border-b border-emerald-500/20 pb-1 mb-2 font-mono">
                            First-Class Red-Ball
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Matches</p>
                              <p className="text-lg font-bold text-white mt-1 font-mono">{deb.stats.fcMatches}</p>
                            </div>
                            {deb.stats.fcRuns ? (
                              <div>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Total Runs</p>
                                <p className="text-lg font-bold text-white mt-1 font-mono">{deb.stats.fcRuns}</p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Total Wickets</p>
                                <p className="text-lg font-bold text-white mt-1 font-mono">{deb.stats.fcWickets}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Average</p>
                              <p className="text-lg font-bold text-emerald-400 mt-1 font-mono">{deb.stats.fcAvg}</p>
                            </div>
                            {deb.stats.fcCenturies ? (
                              <div>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Centuries</p>
                                <p className="text-lg font-bold text-white mt-1 font-mono">{deb.stats.fcCenturies}</p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">5-Wicket Hauls</p>
                                <p className="text-lg font-bold text-white mt-1 font-mono">{deb.stats.fcFiveW}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* List A Stats */}
                        <div className="space-y-3 mt-6 pt-6 border-t border-white/5">
                          <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 border-b border-yellow-500/20 pb-1 mb-2 font-mono">
                            List A (50-Over)
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Matches</p>
                              <p className="text-sm font-bold text-white mt-1 font-mono">{deb.stats.listAMatches}</p>
                            </div>
                            {deb.stats.listAWickets ? (
                              <div>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Wickets</p>
                                <p className="text-sm font-bold text-white mt-1 font-mono">{deb.stats.listAWickets}</p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Runs</p>
                                <p className="text-sm font-bold text-white mt-1 font-mono">{deb.stats.listARuns}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Average</p>
                              <p className="text-sm font-bold text-yellow-400 mt-1 font-mono">{deb.stats.listAAvg}</p>
                            </div>
                            <div>
                              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Highest/Best</p>
                              <p className="text-sm font-bold text-white mt-1 font-mono">{deb.stats.fcHighest || deb.stats.fcBest}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* In-depth Outlook/Expectation */}
            <div className="mt-16 p-8 bg-gradient-to-br from-emerald-950/10 to-transparent border border-emerald-500/20 rounded-3xl">
              <h3 className="text-lg font-display font-black uppercase tracking-tight text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-yellow-500 w-5 h-5" /> In-depth Strategic Outlook
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                By investing heavily in domestic performances and standout U-19 success stories, the PCB is taking a balanced risk ahead of highly competitive series. If these debutants manage to recreate their prolific domestic numbers on the international stage under the reassuring, experienced captaincy of Babar Azam, Pakistan’s Test fortunes could see a swift upward trajectory in the 2026 cycles.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Meet Pakistan’s New Test Debutants for 2026 Tours | Domestic & List A Records" 
        summary="A deep-dive look into the records, milestones, and career impact of Pakistan's fresh Test squad call-ups: Azan Awais, Ubaid Shah, Ali Usman, and more." 
      />
    </div>
  );
}
