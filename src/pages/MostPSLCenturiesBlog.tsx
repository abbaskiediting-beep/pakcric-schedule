import { Calendar, Clock, User, ArrowLeft, Share2, Medal, Zap, Trophy, Target, Star, BarChart, History as HistoryIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function MostPSLCenturiesBlog() {
  const blogTitle = "Top 5 Players With Most Centuries in PSL History: The Complete Guide";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-stats"; // Statistical Lead

  const faqData = [
    {
      q: "Who has the most centuries in PSL history?",
      a: "As of 2026, Usman Khan and Babar Azam share the record for the most centuries in PSL history, both having scored 4 hundreds."
    },
    {
      q: "Who holds the record for the fastest century in PSL?",
      a: "Usman Khan holds the record for the fastest century in PSL history, reaching the milestone in just 36 balls against Quetta Gladiators in 2023."
    },
    {
      q: "Which overseas player has the most PSL centuries?",
      a: "Rilee Rossouw from South Africa holds the record for the most centuries by an overseas player in the PSL, with 3 hundreds to his name."
    }
  ];

  const leaders = [
    { rank: 1, name: 'Usman Khan', country: 'Pakistan', centuries: 4, matches: 35, color: 'text-yellow-500' },
    { rank: 1, name: 'Babar Azam', country: 'Pakistan', centuries: 4, matches: 107, color: 'text-pak-green' },
    { rank: 3, name: 'Kamran Akmal', country: 'Pakistan', centuries: 3, matches: 75, color: 'text-blue-500' },
    { rank: 3, name: 'Rilee Rossouw', country: 'South Africa', centuries: 3, matches: 70, color: 'text-purple-500' },
    { rank: 5, name: 'Mohammad Rizwan', country: 'Pakistan', centuries: 2, matches: 82, color: 'text-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>Top 5 Players With Most Centuries in PSL History | Complete List</title>
        <meta name="description" content="Who has scored the most centuries in PSL history? Discover the top 5 century-scorers in the Pakistan Super League — Usman Khan, Babar Azam, Kamran Akmal, Rilee Rossouw & Mohammad Rizwan." />
        <meta name="keywords" content="Most PSL centuries, Usman Khan PSL, Babar Azam PSL centuries, PSL records, fastest PSL century" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium" 
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
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">Hall of Fame</span>
            <span className="px-4 py-1.5 bg-white/5 text-white/60 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">PSL Records</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter"
          >
            Top 5 Players With Most Centuries in PSL History
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
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Statistical Lead</span>
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
                10 Min Read
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
              className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-14 mb-10"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/70 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-black first-letter:text-pak-green first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  Scoring a hundred in T20 cricket is one of the hardest feats in the sport. In a format where 20 overs is all you get, reaching three figures requires a rare combination of explosive strokeplay, clinical shot selection, and mental focus. Across eleven editions of the PSL, only a handful of batters have managed this — and an even smaller group has done it multiple times.
                </p>

                {/* Leaderboard Table */}
                <div className="bg-black/40 border border-white/5 rounded-3xl p-8 mb-12">
                  <h3 className="text-xl font-black uppercase tracking-widest text-pak-green mb-8 flex items-center gap-3">
                    <Medal className="w-6 h-6" />
                    All-Time PSL Century Leaderboard
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {leaders.map((player) => (
                      <div key={player.name} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-5">
                          <span className={`text-2xl font-black ${player.color} opacity-50 group-hover:opacity-100 transition-opacity`}>#{player.rank}</span>
                          <div>
                            <div className="font-black text-lg uppercase tracking-tight">{player.name}</div>
                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{player.country} • {player.matches} Matches</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-3xl font-black ${player.color}`}>{player.centuries}</div>
                          <div className="text-[9px] font-black uppercase tracking-widest text-white/40">Hundreds</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-yellow-500">
                  <Zap className="w-8 h-8" />
                  #1 — Usman Khan: The Efficiency Machine
                </h2>
                <p className="text-white/70 mb-10 leading-relaxed">
                  Usman Khan has completely redefined explosive T20 batting in the PSL. In just 35 matches, he has scored 4 centuries — the most efficient conversion rate in the tournament's history. He holds the <strong>fastest century in PSL history (36 balls)</strong>, a mark that remains one of the most jaw-dropping feats in franchise cricket.
                </p>

                <div className="space-y-6 mb-12">
                   <div className="p-6 bg-white/5 border-l-4 border-yellow-500 rounded-r-2xl">
                     <div className="font-black text-sm uppercase tracking-widest mb-1">Record Breaker</div>
                     <p className="text-white/80 font-bold italic text-lg">"120 off 36 balls against Quetta Gladiators (2023). A strike rate of 333.33."</p>
                   </div>
                   <div className="p-6 bg-white/5 border-l-4 border-yellow-500 rounded-r-2xl">
                     <div className="font-black text-sm uppercase tracking-widest mb-1">Consistency</div>
                     <p className="text-white/80 font-bold italic text-lg">"Became the first batter to score two centuries in a single PSL season (2024)."</p>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-pak-green">
                  <Trophy className="w-8 h-8" />
                  #1 — Babar Azam: The King of Consistency
                </h2>
                <p className="text-white/70 mb-10 leading-relaxed">
                  While level with Usman on 4 centuries, Babar Azam's journey has been one of sustained excellence. Over 107+ matches, he has accumulated over 4,193 runs, becoming the first player to cross the 4,000-run milestone in the PSL. His latest two centuries in 2026 came in a campaign many regard as the finest individual season ever.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                   <div className="p-5 bg-pak-green/10 border border-pak-green/20 rounded-2xl text-center">
                     <div className="text-2xl font-black">4,193+</div>
                     <div className="text-[8px] font-black uppercase tracking-widest text-pak-green">Total Runs</div>
                   </div>
                   <div className="p-5 bg-pak-green/10 border border-pak-green/20 rounded-2xl text-center">
                     <div className="text-2xl font-black">04</div>
                     <div className="text-[8px] font-black uppercase tracking-widest text-pak-green">Centuries</div>
                   </div>
                   <div className="p-5 bg-pak-green/10 border border-pak-green/20 rounded-2xl text-center">
                     <div className="text-2xl font-black">115</div>
                     <div className="text-[8px] font-black uppercase tracking-widest text-pak-green">High Score</div>
                   </div>
                   <div className="p-5 bg-pak-green/10 border border-pak-green/20 rounded-2xl text-center">
                     <div className="text-2xl font-black">458</div>
                     <div className="text-[8px] font-black uppercase tracking-widest text-pak-green">Fours</div>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-blue-500">
                  <HistoryIcon className="w-8 h-8" />
                  #3 — Kamran Akmal: The Original Pioneer
                </h2>
                <p className="text-white/70 mb-10 leading-relaxed">
                  Before the modern era, there was Kamran Akmal. The former Peshawar Zalmi wicketkeeper was the first to reach three PSL centuries, setting a standard that stood unchallenged for three full seasons. His hundreds in back-to-back playoffs (2017 & 2018) were critical in Zalmi's most successful years.
                </p>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-purple-500">
                   <Star className="w-8 h-8" />
                   #3 — Rilee Rossouw: The Explosive Professional
                </h2>
                <p className="text-white/70 mb-10 leading-relaxed">
                  The South African left-hander holds two of the four fastest centuries in PSL history. His 2025 century for Quetta Gladiators (104 off 44) made history as he and teammate Hasan Nawaz became the first pair to score centuries in the same T20 innings.
                </p>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-emerald-500">
                   <BarChart className="w-8 h-8" />
                   #5 — Mohammad Rizwan: The Anchor of Multan
                </h2>
                <p className="text-white/70 mb-12 leading-relaxed">
                  Rizwan's two centuries are a testament to his ability to anchor and then explode. Both his hundreds came against Karachi Kings, making him the only player in PSL history to score multiple centuries against a single franchise.
                </p>

                <div className="flex justify-between items-center pt-16 border-t border-white/5">
                  <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Blogs
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
                    <Share2 className="w-3.5 h-3.5" />
                    Share Stats
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
            <FanClubSection />

            <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8">Related Records</h3>
              <div className="space-y-4">
                <Link to="/babar-azam-all-psl-centuries-list-2026-details" className="block p-4 bg-white/5 rounded-2xl hover:bg-pak-green/10 transition-colors">
                  <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Focus Article</div>
                  <div className="font-bold text-sm">Every Babar Azam PSL Century</div>
                </Link>
                <div className="p-4 bg-white/5 rounded-2xl">
                  <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Fastest Century</div>
                  <div className="font-bold text-sm">Usman Khan (36 Balls)</div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl">
                  <div className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">Season Record</div>
                  <div className="font-bold text-sm">2 Centuries in one season</div>
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
