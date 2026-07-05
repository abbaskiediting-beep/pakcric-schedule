import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  ChevronRight,
  TrendingUp,
  Award,
  Zap,
  Globe,
  Quote,
  Shield,
  Star,
  CheckCircle2,
  Clock,
  User,
  Activity,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BabarTestCaptaincyRecordBlog() {
  const captaincyStats = [
    { metric: 'Matches', stat: '20' },
    { metric: 'Won', stat: '10' },
    { metric: 'Lost', stat: '6' },
    { metric: 'Drawn', stat: '4' },
    { metric: 'Win Percentage', stat: '50%' }
  ];

  const battingStats = [
    { metric: 'Matches Led', stat: '20' },
    { metric: 'Batting Average', stat: '50.76' },
    { metric: 'Overall Career Average', stat: '42.67' },
    { metric: 'Highest Score', stat: '196' }
  ];

  const majorTriumphs = [
    {
      series: '2-0 vs South Africa',
      type: 'Home Series',
      desc: 'Showcased Pakistan\'s dominant capabilities in home conditions following high-profile visits.'
    },
    {
      series: '2-0 vs Bangladesh',
      type: 'Away Series',
      desc: 'An emphatic clean sweep showing class and temperament on subcontinental spinning pitches.'
    },
    {
      series: '2-0 vs Sri Lanka',
      type: 'Away Series',
      desc: 'A magnificent tactical sweep displaying high level mastery over spin bowling.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam Test Captaincy Record – Stats, Win Percentage & Batting Analysis | PakCric</title>
        <meta name="description" content="Explore Babar Azam's complete Test captaincy record, including matches, wins, batting average as captain, highest score, memorable victories, challenges, and his leadership legacy for Pakistan." />
        <meta name="keywords" content="Babar Azam, Babar Azam Test captaincy record, Babar Azam stats, Pakistan test captain, 196 vs Australia, Babar Azam captaincy win percentage" />
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
              <ArrowLeft className="w-3 h-3" /> News & Analysis
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <BarChart3 className="w-3 h-3 animate-pulse" /> Stats & Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> July 5, 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Babar Azam's <span className="text-emerald-500 italic">Test Captaincy</span> <br />
                Record: Stats & Legacy
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                An exhaustive study of Babar Azam's 20-Test tenure as Pakistan's leader, analyzing his unmatched batting average, overseas triumphs, and core legacy.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm uppercase">
                  ZR
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Zainab Rashid</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Statistical Lead</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Quick-Cards */}
      <section className="py-6 relative z-10">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
               {captaincyStats.map((item, index) => (
                 <div key={index} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-center">
                    <span className="text-[9px] font-black uppercase tracking-wider text-white/40 block mb-1">{item.metric}</span>
                    <span className="text-2xl sm:text-3xl font-display font-black text-emerald-400">{item.stat}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Article Content */}
      <section className="py-12 relative z-10 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left Main Article Body */}
            <div className="w-full md:w-2/3 space-y-8">
              <div className="markdown-body text-white/80 space-y-6 text-sm sm:text-base leading-relaxed">
                 
                 <div className="relative rounded-[32px] overflow-hidden group mb-8">
                    <img src="https://images.unsplash.com/photo-1540747737956-378724044602?auto=format&fit=crop&q=80&w=1200" alt="Cricket Stadium Floodlights" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   Babar Azam is widely regarded as one of Pakistan's finest modern-day batters. Elegant stroke play, consistency across formats, and remarkable composure have made him one of the world's leading cricketers. However, beyond his batting achievements, Babar also spent nearly three years leading Pakistan in Test cricket.
                 </p>

                 <p>
                   His captaincy period, which lasted from late 2020 until late 2023, produced mixed team results but outstanding personal performances. While Pakistan experienced memorable victories overseas, the team also suffered disappointing home defeats during his tenure.
                 </p>

                 <p>
                   One interesting aspect of Babar's leadership is that captaincy never negatively affected his batting. Instead, he actually performed better with the added responsibility, averaging above 50 in Test cricket while leading the national side.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   Babar Azam's Test Captaincy Record
                 </h3>
                 <p>
                   Babar Azam became Pakistan's Test captain in late 2020 following the departure of Azhar Ali. He inherited a talented but inconsistent side that was going through a transition.
                 </p>
                 <p>
                   During his captaincy, Pakistan played 20 Test matches:
                 </p>

                 {/* Custom responsive table */}
                 <div className="overflow-x-auto my-6 border border-white/10 rounded-2xl bg-white/[0.01]">
                   <table className="w-full text-left border-collapse">
                     <thead>
                       <tr className="border-b border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-wider text-emerald-400">
                         <th className="p-4">Matches</th>
                         <th className="p-4">Won</th>
                         <th className="p-4">Lost</th>
                         <th className="p-4">Drawn</th>
                         <th className="p-4">Win %</th>
                       </tr>
                     </thead>
                     <tbody className="text-xs sm:text-sm font-semibold">
                       <tr className="border-b border-white/5">
                         <td className="p-4">20</td>
                         <td className="p-4 text-emerald-400 font-bold">10</td>
                         <td className="p-4 text-red-400">6</td>
                         <td className="p-4 text-white/60">4</td>
                         <td className="p-4 text-emerald-400 font-black">50%</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 <p>
                   Winning half of all Test matches is a respectable achievement, especially considering Pakistan played in different conditions across Asia and overseas. A 50% win percentage places Babar among the more successful Pakistan Test captains in recent years.
                 </p>

                 <div className="p-6 bg-emerald-500/5 border border-emerald-500/15 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-6 w-24 h-24 text-emerald-500/5 -rotate-12" />
                    <h4 className="text-xs font-black uppercase tracking-[3px] text-emerald-400 mb-2">A Captain Who Led From the Front</h4>
                    <p className="text-sm italic font-medium text-white/90">
                      "Many captains struggle to balance leadership responsibilities with personal performance. Extra pressure often affects concentration, decision-making, and batting consistency. Babar Azam proved to be different."
                    </p>
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   Batting Record as Test Captain
                 </h3>
                 <p>
                   Perhaps the biggest positive of Babar's captaincy era was his remarkable batting record. Instead of becoming distracted by captaincy, he became even more dependable for Pakistan.
                 </p>

                 {/* Batting Stats Grid */}
                 <div className="grid grid-cols-2 gap-4 my-6">
                    {battingStats.map((item, idx) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-wider text-white/40">{item.metric}</span>
                        <span className="text-base font-mono font-bold text-white">{item.stat}</span>
                      </div>
                    ))}
                 </div>

                 <p>
                   A batting average above 50 is considered world-class in Test cricket. The fact that Babar averaged over eight runs more as captain than his overall career average highlights how well he handled leadership responsibilities.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   The Historic 196 Against Australia
                 </h3>
                 <p>
                   The defining batting performance of Babar's captaincy came during the home series against Australia in Karachi in March 2022. Pakistan was under enormous pressure after Australia built a huge first-innings lead.
                 </p>
                 <p>
                   Facing one of the strongest bowling attacks in world cricket, Babar produced one of the greatest innings ever played by a Pakistan batter. His magnificent 196 runs included nearly ten hours at the crease, brilliant technique against both pace and spin, and incredible patience.
                 </p>
                 <p>
                   Although he narrowly missed a double century, his innings helped Pakistan save the Test match. Many cricket experts consider this knock among the greatest fourth-innings performances in modern Test cricket. It remains Babar Azam's highest Test score and arguably the finest innings of his career.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   Early Successes as Pakistan Captain
                 </h3>
                 <p>
                   Babar's captaincy began in encouraging fashion. One of his first major achievements was leading Pakistan to a 2-0 home Test series victory over South Africa. The series showcased Pakistan's growing confidence in home conditions after years of playing away from home. Soon afterward, Pakistan enjoyed impressive overseas success:
                 </p>

                 <div className="space-y-4 my-6">
                   {majorTriumphs.map((triumph, i) => (
                     <div key={i} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
                       <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                         {i+1}
                       </span>
                       <div>
                         <h5 className="font-display font-bold uppercase tracking-tight text-white">{triumph.series}</h5>
                         <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">{triumph.type}</span>
                         <p className="text-xs text-white/50">{triumph.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   Leadership Style
                 </h3>
                 <p>
                   Unlike emotional captains who rely heavily on aggression, Babar preferred a calm and measured approach. His leadership style focused on backing his players, maintaining dressing-room unity, trusting experienced players, and remaining composed under pressure. Teammates often praised his relaxed personality, which helped create a positive atmosphere inside the dressing room.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   The Biggest Challenge: England's Historic Whitewash
                 </h3>
                 <p>
                   Despite several memorable victories, Babar's captaincy also experienced difficult periods. The most painful came during England's historic tour of Pakistan in 2022. England completed a 3-0 series whitewash, becoming the first visiting team to defeat Pakistan 3-0 in a home Test series.
                 </p>
                 <p>
                   Several factors contributed to the disappointing result including flat batting pitches, inconsistent bowling performances, injuries within the squad, England's aggressive "Bazball" approach, and missed opportunities during crucial sessions. The defeat attracted criticism, and although Babar accepted responsibility, several analysts argued that the team's bowling resources were equally responsible.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   How Does Babar Compare to Other Pakistan Test Captains?
                 </h3>
                 <p>
                   Statistically, Babar's record compares favorably with many recent Pakistan captains. His achievements include a 50% win percentage, a batting average above 50 as captain, multiple overseas series victories, and one of Pakistan's greatest Test innings (196 vs Australia).
                 </p>
                 <p>
                   While some former captains recorded higher overall win percentages, very few combined successful leadership with elite batting performances as consistently as Babar. His ability to contribute both as captain and as Pakistan's premier batter makes his tenure unique.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   Final Verdict
                 </h3>
                 <p>
                   Looking purely at the numbers, Babar Azam's Test captaincy was far more successful than many critics acknowledge. Leading Pakistan in 20 Test matches, he recorded 10 victories, 6 defeats, and 4 draws, finishing with an impressive 50% win percentage.
                 </p>
                 <p>
                   Even more remarkable was his batting. Averaging 50.76 as captain—well above his career average of 42.67—he proved that leadership enhanced rather than hindered his performances. His unforgettable 196 against Australia in Karachi remains one of the greatest innings in Pakistan's Test history and perfectly symbolizes his captaincy era: resilient, classy, and inspiring.
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-emerald-400 border-b border-white/5 pb-3">
                  Stats at a Glance
                </h4>

                <div className="space-y-4">
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Test Matches</span>
                     <span className="font-mono font-bold text-white">20</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Matches Won</span>
                     <span className="font-mono font-bold text-emerald-400">10</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Matches Lost</span>
                     <span className="font-mono font-bold text-red-400">6</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Matches Drawn</span>
                     <span className="font-mono font-bold text-white/60">4</span>
                   </div>
                   <div className="flex justify-between items-center text-xs border-b border-white/5 pb-4">
                     <span className="text-white/40 uppercase font-black tracking-wider">Win Ratio</span>
                     <span className="font-mono font-bold text-emerald-400">50.00%</span>
                   </div>

                   <div className="flex justify-between items-center text-xs pt-2">
                     <span className="text-white/40 uppercase font-black tracking-wider">Runs Scored</span>
                     <span className="font-mono font-bold text-white">1,726</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Captain Average</span>
                     <span className="font-mono font-bold text-emerald-400">50.76</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">High Score</span>
                     <span className="font-mono font-bold text-white">196</span>
                   </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="Babar Azam's Test Captaincy Record: Leadership, Statistics, and Legacy" />
                </div>

                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                   <Trophy className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">THE MAESTRO</p>
                   <p className="text-xs text-white/70 font-medium mt-1">Averaging 50.76 as Captain</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
