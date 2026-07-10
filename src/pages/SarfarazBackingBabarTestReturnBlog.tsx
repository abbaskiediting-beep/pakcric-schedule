import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  Award,
  Zap,
  Quote,
  Users,
  CheckCircle2,
  Activity,
  RefreshCw,
  ThumbsUp,
  AlertTriangle
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function SarfarazBackingBabarTestReturnBlog() {
  const tacticalPoints = [
    {
      title: 'Mutual Trust & Chemistry',
      desc: 'Sarfaraz originally nurtured Babar as a youngster. Their role reversal now as Coach-Captain creates a very unique, respectful workspace.'
    },
    {
      title: 'Tactical Safety Net',
      desc: 'A former Champions Trophy-winning captain at the helm as head coach provides Babar with a robust sounding board for key game-day decisions.'
    },
    {
      title: 'Media Shield',
      desc: 'By speaking with unified clarity to the press, Sarfaraz immediately shuts down rumors of inner-squad factionalism and dressing room politics.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Sarfaraz Ahmed Throws Full Weight Behind Babar Azam’s Test Return | PakCric</title>
        <meta name="description" content="Read why Test head coach Sarfaraz Ahmed's complete backing of Babar Azam's captaincy return is a vital baseline for Pakistan's red-ball revival ahead of West Indies and England tours." />
        <meta name="keywords" content="Babar Azam, Sarfaraz Ahmed, Pakistan Test Captain, Shan Masood, Pakistan Cricket Board, Test head coach, West Indies vs Pakistan" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
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
                  <Award className="w-3 h-3" /> Test Cricket
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> July 9, 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Alignment at the Top: <span className="text-emerald-500 italic">Sarfaraz Ahmed</span> Throws Full Weight Behind Babar’s Test Return
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                Former captain and current head coach Sarfaraz Ahmed seals a unified red-ball front with Babar Azam, dismissing outer dressing room noise ahead of critical WTC tours.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm uppercase">
                  AN
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Ahsan Iftikhar Nagi</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Pakistan Correspondent</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative z-10 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left Main Article Body */}
            <div className="w-full md:w-2/3 space-y-8">
              <div className="markdown-body text-white/80 space-y-6 text-sm sm:text-base leading-relaxed">
                 
                 <div className="relative rounded-[32px] overflow-hidden group mb-8 border border-white/5">
                    <img src="https://images.unsplash.com/photo-1540747737956-378724044602?auto=format&fit=crop&q=80&w=1200" alt="Pakistan Cricket Practice Nets" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   In the chaotic world of Pakistan cricket, stability usually comes from unexpected places. Following the Pakistan Cricket Board’s (PCB) massive decision to reinstate Babar Azam as the Test captain—replacing Shan Masood after a grueling stretch of results—all eyes turned to how the team management would react. We got our answer straight from the top.
                 </p>

                 <p>
                   Test head coach and former national captain Sarfaraz Ahmed addressed the media in Karachi, revealing that he has already sat down with the newly reappointed skipper. His verdict? Absolute backing.
                 </p>

                 {/* Head Coach Quote Box */}
                 <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-4 w-24 h-24 text-emerald-400/5 -rotate-12 pointer-events-none" />
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-[9px] font-bold uppercase tracking-widest block w-fit mb-4">Official Coaching Stance</span>
                    <p className="text-xl sm:text-2xl italic font-display font-bold text-white leading-snug">
                      "I had a conversation with Test captain Babar, and we expect good results from his captaincy."
                    </p>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-4">— Sarfaraz Ahmed, Pakistan Test Head Coach</p>
                 </div>

                 <p>
                   This statement isn't just standard media diplomacy; it sets a critical baseline for a brand-new era of Pakistan’s red-ball cricket. Here is why this alignment matters so much right now.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                   <Users className="w-5 h-5 text-emerald-500" /> 1. Passing the Torch (Again) with Mutual Respect
                 </h3>
                 <p>
                   The dynamic between Sarfaraz Ahmed and Babar Azam is one of the most unique in Pakistani sports history. Sarfaraz was the captain who originally backed and nurtured a young Babar during his early international days, overseeing his rise into a world-class batsman. Later, Babar took over the reins from Sarfaraz. Now, they find themselves in a head-coach-and-captain partnership.
                 </p>
                 <p>
                   By publicly stating that leadership decisions were made through proper consultation and agreement, Sarfaraz is instantly shutting down any media narratives of inner-squad friction. Having a former ICC Champions Trophy-winning captain in your corner as a head coach gives Babar a massive tactical safety net.
                 </p>

                 {/* Alignment Pillars Grid */}
                 <div className="grid grid-cols-1 gap-4 my-8">
                   {tacticalPoints.map((point, i) => (
                     <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
                       <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                         <span className="text-xs font-black text-emerald-400">{i + 1}</span>
                       </div>
                       <div>
                         <h4 className="text-xs font-black uppercase text-white tracking-wider mb-1">{point.title}</h4>
                         <p className="text-xs text-white/60 leading-relaxed">{point.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                   <Zap className="w-5 h-5 text-emerald-500" /> 2. The Heavy Task Ahead: West Indies and England Tours
                 </h3>
                 <p>
                   The Sarfaraz-Babar duo doesn't have the luxury of a honeymoon period. Pakistan is flying out for demanding, high-stakes away Test series against the West Indies and England.
                 </p>
                 <p>
                   With Pakistan desperate to climb back up the ICC World Test Championship standings, Sarfaraz highlighted the immediate priorities being tackled in the national training camp in Islamabad:
                 </p>

                 <ul className="space-y-4 my-6 pl-4">
                   <li className="flex items-start gap-3">
                     <Activity className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Tackling the Fitness Crisis</strong>
                       <span className="text-xs text-white/70">Sarfaraz openly admitted that the squad has been plagued by fitness issues over the recent months. The Islamabad camp is designed specifically to grind the players back into peak physical shape before facing a hostile Caribbean bowling attack.</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <AlertTriangle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Restoring Tactical Discipline</strong>
                       <span className="text-xs text-white/70">Babar noted in a recent PCB podcast that strict discipline on the field is his absolute priority. Sarfaraz echoed this, emphasizing that the coaching staff is actively correcting technical flaws exposed during their previous series.</span>
                     </div>
                   </li>
                 </ul>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 text-emerald-500" /> The Verdict: A United Front
                 </h3>
                 <p>
                   For Pakistan to succeed in the longest format, the coach and the captain must sing from the same hymn sheet. Shan Masood's tenure saw tactical experiments that left the squad looking fragmented.
                 </p>
                 <p>
                   By anchoring the team around Babar's immense stature and combining it with Sarfaraz’s seasoned man-management skills, the PCB is gambling on a recipe they know. If this "conversation" translates into chemistry on the field, Pakistan might finally find the consistency they've been craving.
                 </p>
              </div>

              {/* Discussion prompt */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 my-10">
                 <h4 className="font-display font-bold uppercase tracking-wide text-emerald-400 mb-2">Join the Discussion</h4>
                 <p className="text-xs text-white/60 leading-relaxed">
                   Can the Sarfaraz-Babar partnership revive Pakistan's Test fortunes overseas? Or are the underlying fitness issues too deep to fix in a single camp? Share your analytical feedback in the comments section below!
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-emerald-400 border-b border-white/5 pb-3">
                  Key Metrics
                </h4>

                <div className="space-y-4">
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Format</span>
                     <span className="font-mono font-bold text-white">Red-Ball / Tests</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Head Coach</span>
                     <span className="font-mono font-bold text-emerald-400">Sarfaraz Ahmed</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Test Captain</span>
                     <span className="font-mono font-bold text-white">Babar Azam</span>
                   </div>
                   <div className="flex justify-between items-center text-xs border-b border-white/5 pb-4">
                     <span className="text-white/40 uppercase font-black tracking-wider">Upcoming Tours</span>
                     <span className="font-mono font-bold text-yellow-500">WI & England</span>
                   </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="Alignment at the Top: Sarfaraz Ahmed Throws Full Weight Behind Babar Azam’s Test Return" />
                </div>

                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                   <Trophy className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">WTC POINTS</p>
                   <p className="text-xs text-white/70 font-medium mt-1">Crucial tours ahead</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
