import { Calendar, Clock, ArrowLeft, Share2, Trophy, BarChart3, Zap, Flame, Shield, Swords, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function KingsmenFinalVictoryBlog() {
  const blogTitle = "Kingsmen’s Masterclass: Hyderabad Dethrones Multan in One-Sided Eliminator 1";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "Who was the Man of the Match in Eliminator 1?",
      a: "Maaz Sadaqat was the standout performer for his blistering 64* off 33 balls, guiding Hyderabad to a comfortable win."
    },
    {
      q: "What is the next match for Hyderabad Kingsmen?",
      a: "The Kingsmen will face Islamabad United in Eliminator 2 on Friday, May 1st, at Gaddafi Stadium."
    },
    {
      q: "How many balls were left when Hyderabad completed the chase?",
      a: "Hyderabad Kingsmen chased down the target with 28 balls (4.4 overs) to spare."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Hyderabad Kingsmen crush Multan Sultans by 8 wickets in PSL 11 Eliminator 1. Maaz Sadaqat and Usman Khan blast fifties to secure a spot in Eliminator 2." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-20 bg-gradient-to-br from-[#0c1f14] via-pak-green to-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/20 text-yellow-500 rounded-full text-[10px] font-black tracking-widest uppercase border border-yellow-500/20 mb-6"
          >
            <Trophy className="w-4 h-4" />
            Match Result: Hyderabad Wins by 8 Wickets
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-4xl md:text-7xl font-display font-black leading-tight mb-8"
          >
            {blogTitle}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-8 text-white/60 text-[11px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {publishDate}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 10 Min Read</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-pak-green" /> Trending Match Report</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16 relative z-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-medium">
            The Gaddafi Stadium in Lahore witnessed a historic night as the tournament debutants, <strong>Hyderabad Kingsmen</strong>, sent the veteran Multan Sultans packing in a ruthless display of T20 cricket. In a high-stakes "win-or-go-home" encounter, Hyderabad didn't just win; they dominated, chasing down 160 with <strong>8 wickets in hand</strong> and <strong>28 balls to spare</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {/* Multan Sultans Summary */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-pak-green" />
                <h3 className="text-xl font-display font-black uppercase">Multan Sultans</h3>
              </div>
              <div className="text-4xl font-display font-black text-white mb-2">159/9</div>
              <p className="text-xs font-bold text-white/40 mb-6">20 OVERS</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60 font-bold">Top Batter</span>
                  <span className="text-white font-black">Shan Masood 69(46)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60 font-bold">Best Bowler</span>
                  <span className="text-white font-black">Faisal Akram 0/28</span>
                </div>
              </div>
            </div>

            {/* Hyderabad Kingsmen Summary */}
            <div className="bg-pak-green/10 border border-pak-green/20 rounded-[32px] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Swords className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-display font-black uppercase">Hyderabad Kingsmen</h3>
              </div>
              <div className="text-4xl font-display font-black text-yellow-500 mb-2">162/2</div>
              <p className="text-xs font-bold text-white/40 mb-6">15.2 OVERS</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60 font-bold">Top Batter</span>
                  <span className="text-yellow-500 font-black">Maaz Sadaqat 64*(33)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60 font-bold">Best Bowler</span>
                  <span className="text-pak-green font-black">Akif Javed 2/30</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
            1st Innings: The Lone Warrior Act
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            After being put in to bat by Marnus Labuschagne, Multan Sultans struggled to find any momentum against a disciplined Hyderabad bowling attack. The early tremors were felt immediately as <strong>Sahibzada Farhan (15)</strong> and <strong>Steve Smith (13)</strong> fell early, leaving the middle order exposed.
          </p>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Amidst the carnage, <strong>Shan Masood</strong> played a brilliant lone hand. His 69 off 46 balls was the only reason Multan reached a respectable total. He anchored the innings while wickets tumbled at the other end. The Kingsmen’s pace trio of Akif Javed, Hunain Shah, and Mohammad Ali were relentless.
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
            2nd Innings: The "Maaz & Usman" Show
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Chasing 160 in a knockout game can be tricky, but Hyderabad made it look like a walk in the park. Their aggressive intent from Ball 1 completely rattled the Sultans' bowlers.
          </p>

          <div className="my-12 space-y-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
               <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-display font-black text-white mb-2">MAAZ SADAQAT</h4>
                    <p className="text-lg font-display font-black text-pak-green italic">64* OFF 33 BALLS</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">Strike Rate</span>
                    <p className="text-xl font-display font-bold text-white">193.94</p>
                  </div>
               </div>
               <div className="mt-4 flex gap-4 text-xs font-black uppercase text-white/60">
                 <span>4 Fours</span>
                 <span>4 Sixes</span>
               </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
               <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-display font-black text-white mb-2">USMAN KHAN</h4>
                    <p className="text-lg font-display font-black text-yellow-500 italic">64 OFF 35 BALLS</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">Strike Rate</span>
                    <p className="text-xl font-display font-bold text-white">182.85</p>
                  </div>
               </div>
               <div className="mt-4 flex gap-4 text-xs font-black uppercase text-white/60">
                 <span>8 Fours</span>
                 <span>3 Sixes</span>
               </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
            The Road Ahead: Eliminator 2
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            The Kingsmen are now just two steps away from the trophy. Their next challenge is <strong>Eliminator 2</strong>, where they will face <strong>Islamabad United</strong> on Friday, May 1st. The winner will advance to the Grand Final against Peshawar Zalmi, while the loser goes home.
          </p>

          <div className="bg-pak-green p-10 rounded-[40px] text-center my-16 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
             <div className="relative z-10">
               <h3 className="text-3xl font-display font-black text-white mb-4 uppercase italic">Next Stop: Eliminator 2</h3>
               <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                  <div className="text-right">
                    <p className="text-sm font-black uppercase text-white/60">Hyderabad Kingsmen</p>
                    <p className="text-2xl font-display font-black text-white">HK</p>
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded-xl text-xs font-black text-white italic">VS</div>
                  <div className="text-left">
                    <p className="text-sm font-black uppercase text-white/60">Islamabad United</p>
                    <p className="text-2xl font-display font-black text-white">IU</p>
                  </div>
               </div>
               <p className="mt-8 text-sm font-bold text-white/80 tracking-widest uppercase">Gaddafi Stadium, Lahore | May 1, 2026</p>
             </div>
          </div>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </Link>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pak-green transition-all">
                Share Result
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-24">
          <AuthorSection authorId={authorId} />
          <CommonQuestions faqs={faqData} />
        </div>
      </div>
    </div>
  );
}
