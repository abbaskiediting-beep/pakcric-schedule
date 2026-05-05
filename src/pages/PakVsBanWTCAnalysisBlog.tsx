import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Facebook, 
  Link as LinkIcon,
  Target,
  Shield,
  Trophy,
  ArrowRight,
  ChevronRight,
  MapPin,
  TrendingUp,
  Award,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkText } from '../components/LinkText';

const PakVsBanWTCAnalysisBlog = () => {
  const publishDate = "May 5, 2026";
  const readTime = "7 min read";
  const author = "Hassan Tariq";

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <Helmet>
        <title>Pakistan vs Bangladesh WTC 2025–2027 | Pak vs ban test series 2026</title>
        <meta name="description" content="Pakistan vs Bangladesh Test series is crucial for WTC 2025–2027. Pakistan aims for top 4, Bangladesh fights survival. Full analysis, points table impact & predictions." />
        <meta name="keywords" content="Pakistan vs Bangladesh WTC 2025, WTC points table 2025–2027, Pakistan WTC standings, Bangladesh WTC ranking, Pakistan vs Bangladesh Test analysis, WTC qualification scenarios" />
      </Helmet>

      {/* Progress Bar (Visual Only) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div className="h-full bg-pak-green w-[65%]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#00662e22,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-pak-green text-xs font-black uppercase tracking-[3px] mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to News
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-pak-green/20 text-pak-green px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">
                WTC Analysis
              </span>
              <span className="bg-white/5 text-white/40 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                Exclusive
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-display font-black leading-[1.1] mb-8 uppercase italic tracking-tighter">
              Pakistan vs Bangladesh WTC 2025–2027: <span className="text-pak-green">High Stakes Series</span>, Points Table Impact & Qualification Scenarios
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-8 border-y border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
                  <User className="w-6 h-6 text-pak-green" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Written By</p>
                  <p className="text-sm font-bold">{author}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Published</p>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Calendar className="w-4 h-4 text-pak-green" />
                    {publishDate}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Read Time</p>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Clock className="w-4 h-4 text-pak-green" />
                    {readTime}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
            
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert prose-pak max-w-none"
            >
              <div className="bg-pak-green/5 border-l-4 border-pak-green p-6 mb-12 italic text-lg text-neutral-300 rounded-r-2xl">
                The ongoing Test series between Pakistan national cricket team and Bangladesh national cricket team is more than just a bilateral contest. It is a crucial battle in the ICC World Test Championship (WTC) 2025–2027 cycle, where every match directly impacts qualification for the final.
              </div>

              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                With limited matches in the WTC format, even a single loss or draw can significantly affect a team’s chances. Both sides are entering this series with survival and dominance on their minds.
              </p>

              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight italic mb-6">
                WTC 2025–2027 Points Table Situation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-neutral-900/50 border border-white/5 p-8 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://flagcdn.com/w80/pk.png" alt="Pakistan" className="w-8 h-5 object-cover rounded-sm" />
                    <h3 className="text-xl font-bold uppercase m-0">Pakistan Position</h3>
                  </div>
                  <ul className="list-none p-0 m-0 space-y-3">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 font-bold uppercase text-[10px]">Rank</span>
                      <span className="text-pak-green font-black">5th Place</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 font-bold uppercase text-[10px]">Points</span>
                      <span className="text-white font-black">12</span>
                    </li>
                    <li className="text-neutral-400 text-sm mt-4 italic leading-tight">
                      Strong contender but under pressure. Needs consistent victories to stay in the race.
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900/50 border border-white/5 p-8 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://flagcdn.com/w80/bd.png" alt="Bangladesh" className="w-8 h-5 object-cover rounded-sm" />
                    <h3 className="text-xl font-bold uppercase m-0">Bangladesh Position</h3>
                  </div>
                  <ul className="list-none p-0 m-0 space-y-3">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 font-bold uppercase text-[10px]">Rank</span>
                      <span className="text-red-500 font-black">8th Place</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-500 font-bold uppercase text-[10px]">Status</span>
                      <span className="text-white font-black">At Risk</span>
                    </li>
                    <li className="text-neutral-400 text-sm mt-4 italic leading-tight">
                      Near the bottom of the table and needs immediate wins to revive its campaign.
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight italic mb-6">
                Why Pakistan Needs a <span className="text-pak-green">Clean Sweep</span>
              </h2>
              <p className="mb-6">
                For Pakistan, this series is a must-win — and not just a narrow win. To keep their <Link to="/pakistan-wtc-2025-2027-points-table" className="text-pak-green hover:underline">Pakistan WTC points table 2025–2027</Link> prospects alive, a 2-0 result is the primary objective.
              </p>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-12">
                <h4 className="text-pak-green font-black uppercase tracking-[2px] text-xs mb-6">Key Strategic Objectives</h4>
                <div className="space-y-4">
                  {[
                    "Boost position into top 4",
                    "Gain early advantage in WTC cycle",
                    "Build momentum before tougher series"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-pak-green/20 flex items-center justify-center shrink-0 mt-1">
                        <ChevronRight className="w-3 h-3 text-pak-green" />
                      </div>
                      <span className="font-bold italic">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-red-500 font-black uppercase tracking-[2px] text-xs mb-4">Risk of Failure</h4>
                  <p className="text-sm text-neutral-400 italic">
                    If Pakistan fails to dominate: They could drop below mid-table, pressure will increase in away tours, and qualification chances will significantly weaken.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight italic mb-6">
                Bangladesh’s Survival Mission
              </h2>
              <p className="mb-6">
                For the Tigers, this <Link to="/bangladesh-wtc-standings-2025" className="text-pak-green hover:underline">Bangladesh WTC standings 2025</Link> survival mission starts at home. They have historically been giant-killers in subcontinental conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500">What Bangladesh Needs</h4>
                  <div className="flex items-center gap-3 text-sm font-bold italic"><Award className="w-4 h-4 text-pak-green" /> Home Test wins</div>
                  <div className="flex items-center gap-3 text-sm font-bold italic"><Award className="w-4 h-4 text-pak-green" /> Maximum points from this series</div>
                  <div className="flex items-center gap-3 text-sm font-bold italic"><Award className="w-4 h-4 text-pak-green" /> Strong batting performances</div>
                </div>
                <div className="space-y-4 bg-pak-green/10 p-6 rounded-2xl border border-pak-green/20">
                  <h4 className="text-xs font-black uppercase tracking-widest text-pak-green">Home Advantage Factors</h4>
                  <p className="text-xs text-neutral-300 italic">
                    Bangladesh has a clear advantage when playing at home due to spin-friendly pitches, familiar conditions, and intense crowd support. These conditions can neutralize stronger teams.
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-pak-green/60">👉 SEO: Bangladesh home Test record</p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight italic mb-6 underline decoration-pak-green decoration-4 offset-8">
                WTC Qualification Scenarios
              </h2>

              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-pak-green">
                      <th className="text-left py-4 px-2 text-[10px] font-black uppercase tracking-widest text-neutral-500">Scenario</th>
                      <th className="text-left py-4 px-2 text-[10px] font-black uppercase tracking-widest text-neutral-500">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold divide-y divide-white/5">
                    <tr>
                      <td className="py-4 px-2 text-pak-green italic">Pakistan Win</td>
                      <td className="py-4 px-2 italic text-neutral-300">Moves closer to top 4, improves qualification chances, gains momentum.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2 text-red-400 italic">Bangladesh Win</td>
                      <td className="py-4 px-2 italic text-neutral-300">Climbs up from bottom, keeps WTC hopes alive, gains confidence.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2 text-neutral-500 italic">Series Drawn</td>
                      <td className="py-4 px-2 italic text-neutral-400">Both teams lose valuable points, other teams benefit, qualification harder.</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600 mt-4">👉 SEO: WTC qualification scenarios 2025–2027</p>
              </div>

              {/* Expert Insight Box */}
              <div className="bg-neutral-800 rounded-[40px] p-8 md:p-12 mb-12 relative overflow-hidden text-center group">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                  <BarChart3 className="w-48 h-48" />
                </div>
                <div className="relative z-10 max-w-2xl mx-auto">
                  <Globe className="w-12 h-12 text-pak-green mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-black uppercase italic tracking-tight mb-4">Final Prediction & Expert Insight</h3>
                  <p className="text-neutral-400 italic mb-8">
                    "While Pakistan has a stronger overall squad on paper, Bangladesh's home advantage cannot be ignored. Pakistan is the slight favorite, but Bangladesh has the tools to surprise in Mirpur or Chattogram."
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[10px] font-black uppercase tracking-[4px] text-pak-green">Verdict</p>
                    <p className="text-3xl font-display font-black italic">Pakistan Slight Favorites</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight italic mb-6">
                Conclusion: A Defining Series
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                The Pakistan vs Bangladesh Test series is one of the most important early contests in the WTC cycle. For Pakistan, it’s about climbing into the top tier. For Bangladesh, it’s about survival and revival. In the World Test Championship, every run, wicket, and session matters — and this series is proof of that.
              </p>

            </motion.div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="sticky top-24 space-y-8">
                {/* Key Players */}
                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                  <h4 className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-6">Players to Watch</h4>
                  <div className="space-y-6">
                    <div className="group">
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">Pakistan</p>
                      <ul className="list-none p-0 m-0 space-y-2">
                        <li className="text-sm font-bold flex items-center gap-2 italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> Babar Azam (Key Batter)
                        </li>
                        <li className="text-sm font-bold flex items-center gap-2 italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> Bowling unit (Match-winners)
                        </li>
                      </ul>
                    </div>
                    <div className="group">
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">Bangladesh</p>
                      <ul className="list-none p-0 m-0 space-y-2">
                        <li className="text-sm font-bold flex items-center gap-2 italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Top-order batters
                        </li>
                        <li className="text-sm font-bold flex items-center gap-2 italic">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Spin bowlers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="bg-neutral-900 rounded-3xl p-6 border border-white/5">
                   <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-6">Quick FAQ</h4>
                   <div className="space-y-4">
                     <p className="text-[11px] font-bold italic text-neutral-400 leading-tight border-b border-white/5 pb-3">
                       "Pakistan is currently in 5th place with 12 points."
                     </p>
                     <p className="text-[11px] font-bold italic text-neutral-400 leading-tight border-b border-white/5 pb-3">
                       "Bangladesh needs home wins to revive campaign."
                     </p>
                   </div>
                </div>

                {/* Share */}
                <div className="flex gap-2">
                  <button className="flex-1 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pak-green transition-all group">
                    <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex-1 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pak-green transition-all group">
                    <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex-1 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pak-green transition-all group">
                    <LinkIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Internal Linking Suggestions Footer */}
      <section className="px-4 py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[10px] font-black uppercase tracking-[4px] text-neutral-500 mb-10 text-center">Recommended For You</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Pakistan WTC Points Table", path: "/pakistan-wtc-2025-2027-points-table" },
              { title: "Bangladesh Home Test Stats", path: "/bangladesh-home-test-record" },
              { title: "Full WTC 2025-27 Schedule", path: "/wtc-2025-2027-full-schedule" },
              { title: "Babar Azam Test Career Analysis", path: "/babar-azam-test-career-analysis" }
            ].map((link, i) => (
              <Link 
                key={i}
                to={link.path}
                className="bg-black border border-white/5 p-6 rounded-2xl flex items-center justify-between group hover:border-pak-green transition-all"
              >
                <span className="font-display font-black uppercase italic tracking-tight text-sm group-hover:text-pak-green transition-colors">{link.title}</span>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-pak-green group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PakVsBanWTCAnalysisBlog;
