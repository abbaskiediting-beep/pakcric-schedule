import { Calendar, Clock, ArrowLeft, Share2, Trophy, BarChart3, Zap, Flame, Shield, Swords, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function KingsmenDominateEliminator1() {
  const blogTitle = "Kingsmen Dominate Eliminator 1: Multan Sultans Collapse to 159/9 at Gaddafi Stadium";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "What was Multan Sultans' final score in Eliminator 1?",
      a: "Multan Sultans scored 159/9 in their allotted 20 overs."
    },
    {
      q: "Who was the top performer for Hyderabad Kingsmen with the ball?",
      a: "Akif Javed was the standout bowler with figures of 2/30, supported by Hunain Shah (2/31) and Mohammad Ali (2/34)."
    },
    {
      q: "Who scored the most runs for Multan Sultans?",
      a: "Shan Masood played a lone battle, scoring 69 runs off 46 balls, including 4 fours and 4 sixes."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Hyderabad Kingsmen restrict Multan Sultans to 159/9 in PSL 2026 Eliminator 1. Full match summary and key moments from Gaddafi Stadium." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-20 bg-gradient-to-br from-[#062c1a] via-pak-green to-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 text-red-500 rounded-full text-[10px] font-black tracking-widest uppercase border border-red-500/20 mb-6"
          >
            <Flame className="w-4 h-4" />
            Match Update: First Innings Over
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
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 Min Read</span>
            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Venue: Gaddafi Stadium</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16 relative z-10">
        <div className="prose prose-invert max-w-none font-sans">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-medium">
            In a high-pressure knockout clash of the Pakistan Super League 2026, the <strong>Hyderabad Kingsmen</strong> delivered a clinical bowling performance to restrict <strong>Multan Sultans</strong> to 159/9 in 20 overs at the iconic Gaddafi Stadium. After winning the toss, Hyderabad made the right call by choosing to bowl first — a decision that paid off immediately under the lights.
          </p>

          {/* Scorecard Component */}
          <div className="bg-card-bg border border-card-border rounded-[32px] p-8 mb-16 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pak-green/10 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-black tracking-[3px] text-white/40 uppercase mb-2">Multan Sultans</p>
                <div className="text-6xl font-display font-black text-white">159/9</div>
                <p className="text-sm font-bold text-white/60 mt-1 uppercase tracking-widest">20 Overs</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[4px]">VS</div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-[10px] font-black tracking-[3px] text-white/40 uppercase mb-2">Hyderabad Kingsmen</p>
                <div className="text-3xl font-display font-black text-white/40 italic">YET TO BAT</div>
                <p className="text-sm font-bold text-white/20 mt-1 uppercase tracking-widest">Eliminator 1</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
            Powerplay Destruction: Multan’s Top Order Collapse
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            The match started with complete dominance from Hyderabad’s bowling unit. The Multan Sultans’ top order, known for consistency, completely fell apart under pressure. Mohammad Ali struck early, dismissing the dangerous <strong>Steve Smith (13)</strong>, while Akif Javed removed <strong>Sahibzada Farhan (15)</strong>.
          </p>
          
          <div className="bg-white/5 border-l-4 border-pak-green p-8 my-10 rounded-r-3xl">
            <h4 className="text-pak-green font-black uppercase tracking-widest mb-4">Key Moments</h4>
            <ul className="space-y-3 font-bold text-sm uppercase tracking-wide text-white/80">
              <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-pak-green" /> Captain Ashton Turner fell cheaply for 9</li>
              <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-pak-green" /> Glenn Maxwell added further pressure with a crucial wicket</li>
              <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-pak-green" /> Powerplay Score: 51/4</li>
            </ul>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
            Shan Masood’s Lone Battle
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            While wickets kept falling at regular intervals, <strong>Shan Masood</strong> stood firm and played a captain’s knock under immense pressure. His innings was a perfect mix of patience and aggression, ensuring Multan reached a somewhat competitive total.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
                <span className="text-[10px] font-black text-pak-green tracking-widest uppercase block mb-2">Top Scorer</span>
                <h4 className="text-2xl font-display font-black text-white mb-2">SHAN MASOOD</h4>
                <div className="text-4xl font-display font-black text-pak-green italic">69 (46)</div>
                <p className="text-xs font-bold text-white/40 mt-3 uppercase tracking-widest">4 Fours & 4 Sixes</p>
             </div>
             <div className="bg-pak-green p-8 rounded-3xl text-center flex flex-col justify-center">
                <p className="text-[11px] font-black text-white uppercase tracking-widest leading-relaxed">
                  "Without his effort, the Sultans could have been bundled out for a much lower score."
                </p>
             </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
            Bowling Masterclass
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/10 uppercase text-[10px] tracking-widest font-black text-white/40">
                    <th className="py-4">Bowler</th>
                    <th className="py-4 text-right">Overs</th>
                    <th className="py-4 text-right">Wickets</th>
                    <th className="py-4 text-right">Runs</th>
                  </tr>
               </thead>
               <tbody className="text-sm font-bold uppercase tracking-wider text-white/80">
                  <tr className="border-b border-white/5"><td className="py-4">Akif Javed</td><td className="py-4 text-right">4.0</td><td className="py-4 text-right text-pak-green">2</td><td className="py-4 text-right">30</td></tr>
                  <tr className="border-b border-white/5"><td className="py-4">Hunain Shah</td><td className="py-4 text-right">4.0</td><td className="py-4 text-right text-pak-green">2</td><td className="py-4 text-right">31</td></tr>
                  <tr className="border-b border-white/5"><td className="py-4">Mohammad Ali</td><td className="py-4 text-right">4.0</td><td className="py-4 text-right text-pak-green">2</td><td className="py-4 text-right">34</td></tr>
                  <tr className="border-b border-white/5"><td className="py-4">Saim Ayub</td><td className="py-4 text-right">4.0</td><td className="py-4 text-right text-emerald-500">1</td><td className="py-4 text-right">23</td></tr>
               </tbody>
            </table>
          </div>

          <div className="my-16 p-10 bg-gradient-to-br from-white/5 to-transparent rounded-[40px] border border-white/10 text-center">
             <BarChart3 className="w-12 h-12 text-pak-green mx-auto mb-6" />
             <h3 className="text-2xl font-display font-black mb-4">What's Next?</h3>
             <p className="text-lg text-white/70 leading-relaxed font-medium mb-8">
                With 160 runs to chase, Hyderabad Kingsmen now have the upper hand. However, knockout matches are unpredictable, and Multan Sultans still have experienced bowlers who can turn the game around.
             </p>
             <div className="flex justify-center gap-4">
                <Link to="/blogs" className="px-8 py-3 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all">Latest News</Link>
                <Link to="/" className="px-8 py-3 bg-white/5 text-white border border-white/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">Back Home</Link>
             </div>
          </div>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-pak-green transition-all group">
                <Share2 className="w-5 h-5 text-white" />
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
