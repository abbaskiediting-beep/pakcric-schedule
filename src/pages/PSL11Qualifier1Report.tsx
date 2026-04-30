import { Calendar, Clock, ArrowLeft, Share2, Trophy, BarChart3, Zap, Shield, Swords, Target, TrendingUp, Info, Newspaper, ExternalLink, ChevronRight, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSL11Qualifier1Report() {
  const blogTitle = "PSL 11 Qualifier 1 Match Report: Babar Azam 103 Sinks Islamabad United";
  const publishDate = "April 28, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Babar Azam's record-breaking 103 off 60 balls powered Peshawar Zalmi to a 20-run victory over Islamabad United in the PSL 11 Qualifier. Full match report and analysis." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-20 bg-[#050c08] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pak-green/5 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green text-[10px] font-black uppercase tracking-widest mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-6xl font-display font-black leading-tight mb-8"
          >
            {blogTitle}
          </motion.h1>
          
          <div className="flex items-center gap-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-pak-green" /> Zainab Rashid</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-pak-green" /> {publishDate}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/70 prose-strong:text-pak-green prose-h2:text-3xl prose-h2:font-display prose-h2:font-black prose-h2:uppercase prose-h2:italic prose-h2:mt-12">
            
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl mb-12">
               <h3 className="text-xl font-display font-black uppercase text-pak-green m-0 mb-4 tracking-tighter">Match Result</h3>
               <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                     <span className="font-black italic">Peshawar Zalmi</span>
                     <span className="text-pak-green font-display font-black">195/4 (20)</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                     <span className="font-black italic text-rose-400">Islamabad United</span>
                     <span className="text-rose-400 font-display font-black">175/9 (20)</span>
                  </div>
                  <div className="text-center py-2 text-sm font-black uppercase tracking-widest text-white/40">
                     PZ won by 20 runs
                  </div>
               </div>
            </div>

            <p>
              It was a night meant for the king. Babar Azam, the Peshawar Zalmi captain, delivered a masterclass in T20 batting at the National Bank Stadium, Karachi, leading his side directly into the PSL 11 Final with a comprehensive 20-run win over Islamabad United.
            </p>

            <h2>The Babar Azam Show (103 off 60)</h2>
            <p>
              From the very first ball, Babar looked like a man on a mission. He dismantled the Islamabad United pace attack, hitting boundaries with surgical precision. His century, brought up with a massive six over mid-wicket, was his second of the 2026 season and perhaps the most important of his PSL career.
            </p>

            <h2>United's Failed Chase</h2>
            <p>
              Chasing 196, Islamabad United never really got going. Despite a brisk start from Alex Hales, the middle order crumbled under the pressure of the mounting run-rate. Naveen-ul-Haq and Luke Wood were exceptional with the ball, picking up crucial wickets in the death overs.
            </p>

            <div className="my-10 p-8 bg-pak-green/5 border border-pak-green/20 rounded-3xl group">
               <h4 className="text-lg font-display font-black uppercase text-white m-0 mb-4">Post-Match Intelligence</h4>
               <p className="text-sm italic text-white/60 m-0">
                "We knew 190 was a par score on this track. I just wanted to bat through and let others play around me. The bowlers executed everything perfectly in the end." — <span className="text-pak-green font-bold">Babar Azam</span>
               </p>
            </div>

            <h2>What's Next?</h2>
            <p>
              Peshawar Zalmi have booked their spot in the Grand Final on May 3rd. Islamabad United now drop to Eliminator 2, where they will face the winner of the Eliminator 1.
            </p>

          </div>
        </div>

        <aside className="lg:col-span-4">
           <div className="sticky top-24 space-y-8">
              <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
                 <h4 className="text-xl font-display font-black uppercase mb-6 italic">Key Performers</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                       <span className="text-sm font-bold">Babar Azam</span>
                       <span className="text-pak-green font-black">103 (60)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                       <span className="text-sm font-bold">Mohammad Haris</span>
                       <span className="text-pak-green font-black">42 (24)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                       <span className="text-sm font-bold">Naveen-ul-Haq</span>
                       <span className="text-pak-green font-black">3/28</span>
                    </div>
                 </div>
              </div>

              <Link to="/psl-11-top-run-scorers-2026" className="block p-6 bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 rounded-3xl hover:border-pak-green transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-pak-green" />
                  <span className="text-xs font-black uppercase tracking-widest text-pak-green">Tournament Stats</span>
                </div>
                <h5 className="font-display font-black uppercase text-lg leading-tight">View Top Run Scorers of PSL 11</h5>
              </Link>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20">
         <AuthorSection authorId={authorId} />
      </div>
    </div>
  );
}
