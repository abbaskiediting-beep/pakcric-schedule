import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, BarChart3, Award, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';

export default function RankingsAnalysisBlog() {
  return (
    <article className="max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-6">
      <Helmet>
        <title>The Global Standings: Analyzing Pakistan’s Positions in the April 2026 ICC Rankings</title>
        <meta name="description" content="In-depth analysis of Pakistan cricket players' ICC rankings as of April 2026. See how Babar Azam, Noman Ali, Sahibzada Farhan, and others compare globally." />
        <meta name="keywords" content="ICC Rankings 2026, Pakistan Cricket Rankings, Babar Azam Ranking, Noman Ali Test Ranking, Sahibzada Farhan T20I" />
      </Helmet>

      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </motion.div>

      {/* Header */}
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-pak-green/10 text-pak-green text-[10px] font-black uppercase tracking-widest rounded-full border border-pak-green/20">Rankings Update</span>
             <span className="text-ink/30 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                <Calendar className="w-3 h-3" /> April 28, 2026
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none text-white italic">
            The <span className="text-pak-green">Global Standings</span>: Analyzing Pakistan’s Positions in the April 2026 ICC Rankings
          </h1>
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
                   <User className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-white tracking-widest">PakCric Team</p>
                   <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">Statistical Department</p>
                </div>
             </div>
             <div className="flex items-center gap-2 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                <Clock className="w-4 h-4" /> 6 Min Read
             </div>
          </div>
        </motion.div>
      </header>

      {/* Visual Header */}
      <div className="aspect-[21/9] bg-neutral-900 rounded-[40px] border border-white/5 mb-12 flex items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-br from-pak-green/10 to-transparent opacity-50" />
         <BarChart3 className="w-24 h-24 text-pak-green/10 relative z-10" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <div className="w-1 h-32 bg-pak-green rounded-full opacity-20" />
            <div className="w-1 h-24 bg-pak-green rounded-full opacity-40 self-end" />
            <div className="w-1 h-40 bg-pak-green rounded-full opacity-60 self-center" />
         </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert prose-pak max-w-none space-y-8 text-neutral-400 leading-relaxed italic text-lg lg:text-xl">
        <p>
          <LinkText text="In the world of international cricket, rankings are the ultimate yardstick of consistency and class. As of April 2026, the ICC Men’s Player Rankings have painted a fascinating picture of the current state of Pakistan cricket. The latest updates reveal a shift in power dynamics within the team, with traditional mainstays being challenged by a new wave of high-performers who are making their mark on the global stage." />
        </p>

        <p>
          <LinkText text="From a dominant left-arm spinner topping the bowling charts to a new T20I batting sensation, here is a deep dive into where Pakistan’s stars stand today." />
        </p>

        <section className="bg-card-bg border border-card-border p-8 md:p-12 rounded-[48px] my-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
              <Award className="w-32 h-32" />
           </div>
           <h2 className="text-3xl font-display font-bold uppercase text-pak-green mb-8 not-italic flex items-center gap-4">
              1. The Red-Ball Renaissance
           </h2>
           <div className="space-y-8 relative z-10">
              <div>
                 <h4 className="text-white text-xl font-bold italic mb-4">Noman and Saud Leading the Way</h4>
                 <p>
                    <LinkText text="Test cricket remains the ultimate test of skill, and Pakistan’s veteran left-arm spinner Noman Ali is currently the nation's crowning jewel. Sitting at World No. 2 in the Test Bowling Rankings, Noman has become the backbone of Pakistan's attack in subcontinental conditions. His ability to provide breakthroughs on unresponsive tracks has placed him just a few rating points behind the top spot." />
                 </p>
              </div>
              <div className="pt-8 border-t border-white/5">
                 <p>
                    <LinkText text="On the batting front, Saud Shakeel continues to be the pillar of the middle order. Currently ranked 9th in the world, Saud is the only Pakistani batter in the Test top 10. His remarkable average and 'clutch' performances under pressure have solidified his reputation as one of the most technically gifted players in the current era." />
                 </p>
              </div>
           </div>
        </section>

        <section>
           <h2 className="text-3xl font-display font-bold uppercase text-white mb-8 not-italic flex items-center gap-4">
              2. The White-Ball Shift
           </h2>
           <p className="mb-10 text-rose-400">
             <LinkText text="For years, the T20I rankings were dominated by the duo of Babar Azam and Mohammad Rizwan. However, April 2026 tells a different story." />
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-neutral-900 border border-white/5 rounded-[32px] group hover:border-pak-green/20 transition-all">
                 <h4 className="text-white font-bold mb-4 not-italic">Farhan Takes Charge</h4>
                 <p className="text-sm">
                    <LinkText text="Sahibzada Farhan has surged to World No. 3 in the T20I Batting Rankings. His explosive intent during the powerplay and consistent run-scoring in recent series have made him the new face of Pakistan’s T20 revival." />
                 </p>
              </div>
              <div className="p-8 bg-neutral-900 border border-white/5 rounded-[32px] group hover:border-pak-green/20 transition-all">
                 <h4 className="text-white font-bold mb-4 not-italic">Abrar's Mystery</h4>
                 <p className="text-sm">
                    <LinkText text="Complementing the batting surge is the 'mystery' of Abrar Ahmed. Holding the 3rd spot in the T20I Bowling Rankings, Abrar has proven that his leg-spin variations are a nightmare for even the best modern-day batters. His rise signifies Pakistan’s commitment to using spin as a primary wicket-taking weapon." />
                 </p>
              </div>
           </div>
        </section>

        <section className="py-12">
           <h2 className="text-3xl font-display font-bold uppercase text-white mb-6 not-italic">3. The ODI Stability</h2>
           <div className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-[32px]">
              <h4 className="text-pak-green text-xl font-bold not-italic mb-4">Babar and Salman in the Elite Top 10</h4>
              <p className="mb-6">
                <LinkText text="While Babar Azam has seen a slight dip in other formats, he remains a dominant force in One Day Internationals. Currently ranked 6th, Babar continues to be the benchmark for batting excellence in the 50-over game." />
              </p>
              <p>
                <LinkText text="Joining him in the elite club is Salman Ali Agha, who has broken into the Top 10 (ranked 10th). Salman’s evolution into a genuine all-rounder—capable of anchoring the innings and picking up crucial wickets—has made him one of the most valuable assets for Pakistan as they prepare for the next Champions Trophy cycle." />
              </p>
           </div>
        </section>

        <section className="bg-white/5 p-12 rounded-[48px] text-center">
           <h3 className="text-2xl font-display font-bold uppercase text-white mb-6 not-italic">What These Rankings Mean for the Future</h3>
           <p className="max-w-2xl mx-auto mb-10">
             <LinkText text="These rankings aren't just numbers; they reflect a team in transition. The fact that Pakistan has top-tier representatives across all three disciplines—batting, bowling, and all-rounders—suggests a healthy balance." />
           </p>
           <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-2xl mb-10 max-w-lg mx-auto">
              <p className="text-xs text-rose-400 font-bold uppercase tracking-widest italic flex items-center justify-center gap-3">
                 <Info className="w-4 h-4" /> Personnel Note
              </p>
              <p className="text-sm mt-3">
                 <LinkText text="However, the slip of senior players like Shaheen Afridi (No. 24 in Tests) and Babar Azam (No. 32 in T20Is) indicates that the competition within the squad is at an all-time high." />
              </p>
           </div>
           <p className="text-xl text-pak-green font-bold uppercase tracking-[0.1em] leading-relaxed">
             "For the 'Shaheens' to climb the team rankings, these individual brilliance moments must now translate into collective series wins, starting with the crucial tour of Bangladesh this May."
           </p>
        </section>
      </div>

      {/* Footer / Actions */}
      <footer className="mt-20 pt-12 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
               <Share2 className="w-4 h-4" /> Share Summary
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
               <Bookmark className="w-4 h-4" /> Save Article
            </button>
         </div>
         <div className="flex gap-6">
            <Link to="/rankings" className="text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">Full Rankings</Link>
            <Link to="/pakistan-cricket-series" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white">Series Hub</Link>
         </div>
      </footer>
    </article>
  );
}
