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
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BabarAzamReclaimT20CaptaincyBlog() {
  const pros = [
    {
      title: 'Stability & Stature',
      desc: 'Babar provides unmatched reliability and a steady anchor role for the top-order batting lineup.'
    },
    {
      title: 'Dressing Room Authority',
      desc: 'No current player in Pakistan carries the weight, immense star power, and respect that Babar Azam commands. This instantly establishes clear hierarchy.'
    },
    {
      title: 'Format Familiarity',
      desc: 'He knows the T20I setup inside out, previously leading Pakistan to a T20 World Cup Final in 2022 and Semifinal in 2021.'
    },
    {
      title: 'Statistical Cushion',
      desc: 'His individual scoring stats as captain have historically stayed incredibly robust and consistent.'
    }
  ];

  const cons = [
    {
      title: 'The Strike-Rate Dilemma',
      desc: 'An anchor-style approach in modern powerplay overs can put pressure on incoming middle-order power hitters.'
    },
    {
      title: 'Is Modern Game Passing Him By?',
      desc: 'Critics argue that high-tempo modern T20 templates require high-risk intent right from the get-go.'
    },
    {
      title: 'The "Musical Chairs" Problem',
      desc: 'Sacking a captain and reappointing the former one within months points to a lack of long-term planning and vision by the PCB.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>The Ultimate U-Turn? Why Babar Azam is Set to Reclaim Pakistan’s T20I Captaincy | PakCric</title>
        <meta name="description" content="Explore the dramatic story behind Babar Azam's impending return as Pakistan's T20I captain, replacing Salman Ali Agha, and the debates surrounding modern T20 templates." />
        <meta name="keywords" content="Babar Azam, Pakistan T20 captain, Salman Ali Agha, PCB captaincy drama, Pakistan cricket news, T20 World Cup 2026" />
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
                  <RefreshCw className="w-3 h-3 animate-spin-slow" /> T20I Captaincy
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> July 8, 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Ultimate U-Turn? Why Babar Azam is <span className="text-emerald-500 italic">Set to Reclaim</span> <br />
                Pakistan’s T20I Captaincy
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                Just months after leadership changes, the PCB is reportedly turning back to its most prolific superstar to unify Pakistan's white-ball and red-ball commands.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm uppercase">
                  SA
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Syed Abbas</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Lead Cricket Analyst</p>
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
                 
                 <div className="relative rounded-[32px] overflow-hidden group mb-8">
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop" alt="Cricket Match Crowd" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   Pakistan cricket and captaincy dramas are a match made in heaven. Just when you think the dust has settled on a leadership cycle, the Pakistan Cricket Board (PCB) throws another curveball. According to recent reports by Geo News, Babar Azam is highly likely to be reappointed as the T20I captain of the national team, replacing Salman Ali Agha.
                 </p>

                 <p>
                   If this news holds weight—and all signs point to the fact that it does—it will complete one of the most fascinating political loops in recent cricket history. Let’s break down how we got here, why the PCB is moving away from Salman Ali Agha, and what Babar’s return means for the future of Pakistan’s white-ball cricket.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5 text-emerald-500" /> 1. The Fall of the Salman Ali Agha Experiment
                 </h3>
                 <p>
                   When Salman Ali Agha was handed the reins of the T20I squad, it was seen as a refreshing change of pace. The PCB wanted a clean slate for the 2026 ICC Men’s T20 World Cup, hoping Agha's tactfulness and cooler head could revitalize a fractured dressing room.
                 </p>
                 <p>
                   Unfortunately, the 2026 T20 World Cup campaign in India and Sri Lanka proved to be a disaster for Pakistan. A string of underwhelming performances—headlined by a crushing defeat against arch-rivals India where the batting line-up collapsed for just 114 runs—left the management incredibly frustrated.
                 </p>
                 <p>
                   Prominent cricket analysts and ex-players openly predicted that Agha’s tenure was cooked the moment Pakistan failed to assert dominance in the tournament. With underperformance plaguing senior players and tactical experiments falling flat, the PCB decided it was time to pull the plug on Agha’s short-lived leadership era.
                 </p>

                 <div className="p-6 bg-emerald-500/5 border border-emerald-500/15 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-6 w-24 h-24 text-emerald-500/5 -rotate-12" />
                    <h4 className="text-xs font-black uppercase tracking-[3px] text-emerald-400 mb-2">The Catalyst for Change</h4>
                    <p className="text-sm italic font-medium text-white/90">
                      "A crushing defeat against arch-rivals India, collapsing for just 114 runs, sealed Salman Ali Agha's fate. PCB realized T20I demands supreme authority."
                    </p>
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4 flex items-center gap-2">
                   <Zap className="w-5 h-5 text-emerald-500" /> 2. Setting the Stage: Babar's Red-Ball Return
                 </h3>
                 <p>
                   To understand why Babar is getting the T20I job back, you have to look at what happened just weeks ago in the longest format. The PCB quietly stripped Shan Masood of the Test captaincy and handed it right back to Babar Azam.
                 </p>
                 <p>
                   Babar is currently leading the national training camp in Islamabad, preparing the red-ball squad for their upcoming tours of the West Indies and England. Once the board decided that Babar was the only viable choice to steer the Test ship under the guidance of the management, it created a domino effect.
                 </p>
                 <p>
                   The logic inside the PCB backend is simple: <strong>Unified leadership</strong>. Having different captains for Tests and T20Is when the team is already going through a transitional crisis creates too many voices in the dressing room.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   3. The Great Debate: Is This the Right Move?
                 </h3>
                 <p>
                   As expected, the news has completely split the Pakistani cricket fraternity down the middle. Let's weigh the pros and cons objectively.
                 </p>

                 {/* Pros and Cons Visual Split */}
                 <div className="space-y-6 my-8">
                   {/* Pros */}
                   <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6">
                     <div className="flex items-center gap-2 mb-4 text-emerald-400">
                       <ThumbsUp className="w-5 h-5" />
                       <h4 className="font-display font-bold uppercase tracking-wide">The Pros: Stability and Stature</h4>
                     </div>
                     <div className="grid gap-4">
                       {pros.map((pro, index) => (
                         <div key={index} className="space-y-1">
                           <h5 className="text-xs font-black uppercase text-white tracking-wide flex items-center gap-1.5">
                             <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {pro.title}
                           </h5>
                           <p className="text-xs text-white/60 pl-5">{pro.desc}</p>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Cons */}
                   <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-6">
                     <div className="flex items-center gap-2 mb-4 text-red-400">
                       <ThumbsDown className="w-5 h-5" />
                       <h4 className="font-display font-bold uppercase tracking-wide">The Cons: The Strike-Rate & Structure</h4>
                     </div>
                     <div className="grid gap-4">
                       {cons.map((con, index) => (
                         <div key={index} className="space-y-1">
                           <h5 className="text-xs font-black uppercase text-white tracking-wide flex items-center gap-1.5">
                             <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> {con.title}
                           </h5>
                           <p className="text-xs text-white/60 pl-5">{con.desc}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-4 border-l-4 border-emerald-500 pl-4">
                   4. What's Next for Pakistan Cricket?
                 </h3>
                 <p>
                   The official announcement from the PCB is expected to drop soon as they finalize white-ball squads for the post-World Cup cycle.
                 </p>
                 <p>
                   If Babar accepts the T20I role alongside his current Test duties, his immediate challenge will be to overhaul a batting order that looked completely outdated during the World Cup. He will also have to mend fences with senior bowlers and integrate fresh, young blood from the PSL who can hit the ground running at a higher strike rate.
                 </p>
                 <p>
                   One thing is certain: Babar Azam’s second era as Pakistan’s undisputed king of all formats is officially on the horizon. Whether it leads to silverware or more heartbreak remains to be seen.
                 </p>
              </div>

              {/* Discussion prompt */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 my-10">
                 <h4 className="font-display font-bold uppercase tracking-wide text-emerald-400 mb-2">Have Your Say</h4>
                 <p className="text-xs text-white/60 leading-relaxed">
                   Is bringing Babar Azam back as T20I captain a step forward, or is Pakistan cricket simply moving backward? Share your analytical feedback in the comments section of our hub!
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-emerald-400 border-b border-white/5 pb-3">
                  Report Summary
                </h4>

                <div className="space-y-4">
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Anticipated Role</span>
                     <span className="font-mono font-bold text-white">T20I Captain</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Replacing</span>
                     <span className="font-mono font-bold text-yellow-400">Salman Ali Agha</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                     <span className="text-white/40 uppercase font-black tracking-wider">Previous Peak</span>
                     <span className="font-mono font-bold text-white">2022 Finalist</span>
                   </div>
                   <div className="flex justify-between items-center text-xs border-b border-white/5 pb-4">
                     <span className="text-white/40 uppercase font-black tracking-wider">PCB Objective</span>
                     <span className="font-mono font-bold text-emerald-400">Unified Command</span>
                   </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="The Ultimate U-Turn? Why Babar Azam is Set to Reclaim Pakistan’s T20I Captaincy" />
                </div>

                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                   <RefreshCw className="w-8 h-8 text-emerald-400 mx-auto mb-2 animate-spin-slow" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">UNIFICATION</p>
                   <p className="text-xs text-white/70 font-medium mt-1">Tests & T20Is Unified</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
