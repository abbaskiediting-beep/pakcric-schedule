import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Target, Star, History, BarChart3, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function BabarAzamPSLCenturiesBlog() {
  const blogTitle = "Babar Azam All PSL Centuries";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "How many centuries has Babar Azam scored in PSL history?",
      a: "Babar Azam has scored 4 centuries in PSL history (as of the end of the PSL 11 Qualifier). This ties him for the most centuries in the tournament's history with Usman Khan."
    },
    {
      q: "What is Babar Azam's highest score in the PSL?",
      a: "His highest score is 115 off 65 balls, which he scored for Peshawar Zalmi against Quetta Gladiators at Rawalpindi in 2023."
    },
    {
      q: "Which was Babar Azam's fastest PSL century?",
      a: "His fastest century came off 52 balls against Quetta Gladiators in April 2026 at the National Bank Stadium, Karachi. This innings was also notable for having only one dot ball."
    }
  ];

  const centuries = [
    { id: 1, season: 'PSL 2023', score: '115', balls: '65', fours: '15', sixes: '3', sr: '176.92', opponent: 'Quetta Gladiators', venue: 'Rawalpindi', result: 'Lost' },
    { id: 2, season: 'PSL 2024', score: '111*', balls: '63', fours: '14', sixes: '2', sr: '176.19', opponent: 'Islamabad United', venue: 'Lahore', result: 'Won' },
    { id: 3, season: 'PSL 2026', score: '100*', balls: '52', fours: '6', sixes: '4', sr: '192.30', opponent: 'Quetta Gladiators', venue: 'Karachi', result: 'Won' },
    { id: 4, season: 'PSL 2026 (Q)', score: '103', balls: '59', fours: '12', sixes: '4', sr: '174.57', opponent: 'Islamabad United', venue: 'Karachi', result: 'Won' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Read the complete breakdown of every Babar Azam hundred in PSL — balls faced, fours, sixes, partnerships, and match results updated through 2026." />
        <meta name="keywords" content="Babar Azam PSL centuries, Babar Azam century list, PSL records, Peshawar Zalmi, Babar Azam total centuries" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium Lights" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">Statistical Deep Dive</span>
            <span className="px-4 py-1.5 bg-white/5 text-white/60 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Records & Milestones</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter"
          >
            {blogTitle}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-pak-green/30 bg-pak-green/10 flex items-center justify-center">
                <User className="w-6 h-6 text-pak-green" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Written by</span>
                <span className="text-[14px] font-black text-white uppercase tracking-widest">Zainab Rashid</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/40 text-[11px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pak-green" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pak-green" />
                8 Min Read
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-14 mb-10 overflow-hidden"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/70 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-black first-letter:text-pak-green first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  When the history of the Pakistan Super League is written, one name will appear more consistently than almost any other at the top of the run charts — <strong>Babar Azam</strong>. The right-handed Lahore-born batter has been the most dominant run-scorer in PSL history, with over <strong>4,193 runs in 107+ matches</strong> at an average above 47 and a strike rate close to 129.
                </p>

                <div className="bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 p-8 rounded-3xl mb-12">
                   <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-pak-green mb-6">
                    <Trophy className="w-7 h-7" />
                    Quick Overview: All 4 Centuries
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-[2px] text-white/40">
                          <th className="py-4">#</th>
                          <th className="py-4">Season</th>
                          <th className="py-4">Score</th>
                          <th className="py-4">Balls</th>
                          <th className="py-4">SR</th>
                          <th className="py-4">Opponent</th>
                          <th className="py-4 text-right">Venue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {centuries.map((c) => (
                          <tr key={c.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                            <td className="py-4 font-black text-pak-green">0{c.id}</td>
                            <td className="py-4 font-bold text-[12px]">{c.season}</td>
                            <td className="py-4 font-black">{c.score}</td>
                            <td className="py-4 text-white/60">{c.balls}</td>
                            <td className="py-4 font-bold text-pak-green">{c.sr}</td>
                            <td className="py-4 text-white/70">{c.opponent}</td>
                            <td className="py-4 text-right text-white/40 group-hover:text-white/70 transition-colors">{c.venue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <History className="w-8 h-8 text-pak-green" />
                  Century #1: The Rawalpindi breakthrough (2023)
                </h2>
                <div className="bg-black/40 border border-white/5 p-8 rounded-3xl mb-10">
                   <div className="flex flex-wrap gap-4 mb-6">
                     <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-white/40 uppercase tracking-widest">8 March 2023</span>
                     <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-lg text-[10px] font-bold uppercase tracking-widest">Peshawar Zalmi vs Quetta Gladiators</span>
                   </div>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                     <div>
                       <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Score</div>
                       <div className="text-2xl font-black">115</div>
                     </div>
                     <div>
                       <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Balls</div>
                       <div className="text-2xl font-black">65</div>
                     </div>
                     <div>
                       <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Fours</div>
                       <div className="text-2xl font-black text-pak-green">15</div>
                     </div>
                     <div>
                       <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Sixes</div>
                       <div className="text-2xl font-black text-pak-green">03</div>
                     </div>
                   </div>
                   <p className="text-white/60 leading-relaxed italic border-l-2 border-pak-green pl-6 mb-4">
                     "It had been a long time coming. For seasons, fans had watched Babar Azam rack up fifty after fifty in the PSL — always threatening, never quite reaching the three-figure mark. finally silencing the wait with a breathtaking 115."
                   </p>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Target className="w-8 h-8 text-pak-green" />
                  Century #2: The Unbeaten Gaddafi Masterclass (2024)
                </h2>
                <div className="bg-black/40 border border-white/5 p-8 rounded-3xl mb-10">
                   <div className="flex flex-wrap gap-4 mb-6">
                     <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-white/40 uppercase tracking-widest">26 February 2024</span>
                     <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-lg text-[10px] font-bold uppercase tracking-widest">Islamabad United vs Peshawar Zalmi</span>
                   </div>
                   <p className="text-white/70 mb-8">
                     One year later, Babar made sure his century counted in the result column. Navigating Islamabad United's spinners — Shadab Khan and Agha Salman — with characteristic patience, he reached his hundred in a devastating sequence against fast bowler Hunain Shah.
                   </p>
                   <div className="bg-white/[0.03] p-6 rounded-2xl flex items-center gap-6">
                      <div className="text-5xl font-black text-pak-green">111*</div>
                      <div className="h-10 w-px bg-white/10" />
                      <div>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Impact</div>
                        <div className="font-bold text-white/60 italic">"Peshawar Zalmi won by 8 runs after Arif Yaqoob's 4-wicket over."</div>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  Century #3: The World Record '1-Dot' Innings (2026)
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  This century was unlike any other. completed off the very last delivery of Peshawar Zalmi's innings with a scurried double. Across his 52-ball innings, Babar Azam played <strong>only a single dot ball</strong> — a statistical feat that had never been recorded before in T20 cricket when a batter had faced 50 or more deliveries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   <div className="p-8 bg-yellow-500/10 border border-yellow-500/20 rounded-3xl text-center">
                      <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-2">Dot Ball Percentage</div>
                      <div className="text-6xl font-black text-white mb-2">1.9%</div>
                      <div className="text-[12px] font-bold text-white/40 uppercase tracking-widest">51 scoring shots in 52 balls</div>
                   </div>
                   <div className="p-8 bg-pak-green/10 border border-pak-green/20 rounded-3xl text-center">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Strike Rate</div>
                      <div className="text-6xl font-black text-white mb-2">192.3</div>
                      <div className="text-[12px] font-bold text-white/40 uppercase tracking-widest">Targetted Abrar & Usman Tariq</div>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                   <Star className="w-8 h-8 text-pak-green" />
                   Century #4: The Qualifier Statement (2026)
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  With a place in the PSL 11 Final on the line, Babar delivered a captain's innings for the ages. <strong>103 off 59 balls</strong>. He single-handedly rewrote multiple pages of PSL history, drawing level with Usman Khan for the most centuries ever.
                </p>

                <div className="bg-pak-green border border-pak-green/30 p-10 rounded-[40px] text-white mb-12 relative overflow-hidden">
                   <BarChart3 className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                   <h3 className="text-2xl font-black uppercase tracking-tight mb-8">PSL 11 Season Stats</h3>
                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                     <div>
                       <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Runs</div>
                       <div className="text-3xl font-black">588</div>
                     </div>
                     <div>
                       <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Average</div>
                       <div className="text-3xl font-black">84.0</div>
                     </div>
                     <div>
                       <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Centuries</div>
                       <div className="text-3xl font-black">02</div>
                     </div>
                     <div>
                       <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Strike Rate</div>
                       <div className="text-3xl font-black">146.6</div>
                     </div>
                   </div>
                </div>

                <div className="flex justify-between items-center pt-16 border-t border-white/5">
                  <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Blogs
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
                    <Share2 className="w-3.5 h-3.5" />
                    Share Statistics
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Author Section */}
            <AuthorSection authorId={authorId} />

            {/* FAQs */}
            <CommonQuestions faqs={faqData} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Newsletter */}
            <FanClubSection />

            {/* Records Card */}
            <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8">PSL Career Records</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Runs</span>
                  <span className="text-sm font-black">4,193+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Centuries</span>
                  <span className="text-sm font-black text-pak-green">04</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Boundaries</span>
                  <span className="text-sm font-black">458</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Best Season</span>
                  <span className="text-sm font-black">PSL 2026</span>
                </div>
              </div>
            </div>

            <InternalLinkSection cols={1} title="Quick Links" />
          </div>
        </div>
      </div>
    </div>
  );
}
