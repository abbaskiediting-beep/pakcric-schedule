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
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  Clock,
  BookOpen,
  History as HistoryIcon,
  ShieldAlert,
  Flame,
  UserX
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const articleContent = `
  For the better part of seven years, the Indian Men's Cricket Team turned bilateral T20I series into their own personal playground. Regardless of the venue, the opponent, or the players being rested, India simply did not lose consecutive series. They were the undisputed kings of the bilateral format, riding a historic 16-series unbeaten streak.
  But July 2026 has brought a harsh reality check. Following a shocking 0-2 defeat in Ireland and a brutal dismantling at the hands of England, India has officially lost back-to-back T20I series for the first time since the 2018-19 season.
  Adding insult to injury, this slump has officially knocked the Men in Blue off their perch, with England seizing the No. 1 spot in the ICC T20I Team Rankings. Let’s dive into how an era of dominance unraveled so quickly and what it means for this team moving forward.
  The warning signs flashed during the brief tour of Ireland. What was expected to be a routine outing for Shreyas Iyer’s squad turned into a nightmare. Ireland played fearless cricket, capitalizing on India's top-order fragility to secure a historic 2-0 series win. Many chalked it up to a blip—a bad week in tricky conditions.
  But the subsequent tour of England proved the rot was much deeper.
  Against a world-class English side, India looked completely out of their depth. The series was marred by catastrophic defeats, including a humiliating 125-run thrashing in Nottingham and a nine-wicket obliteration in Bristol where Harry Brook and Phil Salt chased down 159 in just 13.5 overs. England didn't just beat India; they exposed a structural flaw in how the team is currently playing the shortest format.
  To understand the magnitude of this collapse, you have to look back at history. The last time Indian fans felt this specific brand of frustration was over seven years ago under Virat Kohli’s captaincy.
  In February 2019, India suffered a 1-2 away series loss to New Zealand. Days later, they returned home only to be swept 0-2 by Australia.
  From that moment until the summer of 2026, India became a bilateral juggernaut. They built incredible depth, rotating multiple captains and blooding dozens of youngsters without ever dropping consecutive series. Breaking a streak that lasted through multiple coaching eras (Ravi Shastri to Rahul Dravid) highlights just how severe the current transitional crisis is.
  A post-mortem of these two series reveals several glaring issues that the team management urgently needs to address:
  The Top-Order Timidity: Modern T20 cricket demands explosive starts, but India's top order has looked tentative against the swinging ball and extra pace. Instead of dictating terms in the powerplay, they are constantly leaving the middle order to do damage control.
  Spinners Losing Their Bite: Historically, India’s spinners have been their ultimate weapon to choke opposition scoring rates in the middle overs. In England, the spinners were aggressively targeted and taken down, leaving the bowling attack with no answers when the pacers failed to strike early.
  Leadership and Identity Crisis: Shreyas Iyer has found himself in a tough spot. While he played a brilliant lone-warrior knock of 80 in Bristol, his captaincy has looked reactive rather than proactive. The team seems caught between trying to play anchor-based classical cricket and the ultra-aggressive modern template, ultimately failing at both.
  Losing is part of the game, but the manner of these defeats is what will keep the BCCI and the selectors awake at night. The fortress has officially been breached. The aura of invincibility is gone, and the No. 1 ranking has been surrendered to a team that completely outclassed them tactically.
  This consecutive series loss must serve as a massive wake-up call. Whether it requires a reshuffle at the top of the order, a rethink of the spin attack, or a complete overhaul of their T20 batting philosophy, India needs to find answers fast before this slump turns into a permanent decline.
`;

export default function IndiaFortressCrumbledBlog() {
  const statistics = [
    { label: 'Unbeaten Streak', value: '16 Series Ended' },
    { label: 'Previous Slump', value: 'Feb 2019 (7 Years Ago)' },
    { label: 'Ireland Result', value: '0-2 Series Loss' },
    { label: 'England Result', value: '0-3 Series Loss' },
    { label: 'Current T20I Rank', value: 'Surrendered No. 1' }
  ];

  const wordCount = articleContent.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225); // Average reading speed is 225 wpm

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Unwanted History: How India’s T20I Fortress Crumbled | PakCric</title>
        <meta name="description" content="India has officially lost consecutive T20I bilateral series for the first time since 2018. Read our in-depth analytical breakdown of Shreyas Iyer's side's twin losses in Ireland and England." />
        <meta name="keywords" content="India vs England, India vs Ireland, Shreyas Iyer, T20I Rankings, ICC rankings, Cricket news 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Analysis
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="px-4 py-1.5 bg-red-500/20 text-red-400 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <ShieldAlert className="w-3 h-3 animate-pulse" /> Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-red-500" /> July 9, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <Clock className="w-3.5 h-3.5 text-red-500" /> {readingTime} Min Read
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <BookOpen className="w-3.5 h-3.5 text-red-500" /> {wordCount} Words
                </span>
                {/* Mobile version */}
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest sm:hidden">
                  <Clock className="w-3.5 h-3.5 text-red-500" /> {readingTime} Min Read
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Unwanted History: How <span className="text-red-500 italic">India’s T20I Fortress</span> Crumbled for the First Time Since 2018
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                For the first time since the 2018-19 season, the Men in Blue drop consecutive bilateral T20I series, losing their status as the world's No. 1 ranked team.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm uppercase">
                  SK
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Sarfraz Khan</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Match Correspondent</p>
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
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200" alt="Shattered stadium wicket concept" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   For the better part of seven years, the Indian Men's Cricket Team turned bilateral T20I series into their own personal playground. Regardless of the venue, the opponent, or the players being rested, India simply did not lose consecutive series. They were the undisputed kings of the bilateral format, riding a historic 16-series unbeaten streak.
                 </p>

                 <p>
                   But July 2026 has brought a harsh reality check. Following a shocking 0-2 defeat in Ireland and a brutal dismantling at the hands of England, India has officially lost back-to-back T20I series for the first time since the 2018-19 season.
                 </p>

                 <p>
                   Adding insult to injury, this slump has officially knocked the Men in Blue off their perch, with England seizing the No. 1 spot in the ICC T20I Team Rankings. Let’s dive into how an era of dominance unraveled so quickly and what it means for this team moving forward.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-red-500 pl-4 flex items-center gap-2">
                   <Flame className="w-5 h-5 text-red-500" /> 1. The Unthinkable Double Blow: Ireland and England
                 </h3>
                 <p>
                   The warning signs flashed during the brief tour of Ireland. What was expected to be a routine outing for Shreyas Iyer’s squad turned into a nightmare. Ireland played fearless cricket, capitalizing on India's top-order fragility to secure a historic 2-0 series win. Many chalked it up to a blip—a bad week in tricky conditions.
                 </p>
                 <p>
                   But the subsequent tour of England proved the rot was much deeper.
                 </p>
                 <p>
                   Against a world-class English side, India looked completely out of their depth. The series was marred by catastrophic defeats, including a humiliating 125-run thrashing in Nottingham and a nine-wicket obliteration in Bristol where Harry Brook and Phil Salt chased down 159 in just 13.5 overs. England didn't just beat India; they exposed a structural flaw in how the team is currently playing the shortest format.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-red-500 pl-4 flex items-center gap-2">
                   <HistoryIcon className="w-5 h-5 text-red-500" /> 2. Echoes of 2018–19: Breaking Down the Anomaly
                 </h3>
                 <p>
                   To understand the magnitude of this collapse, you have to look back at history. The last time Indian fans felt this specific brand of frustration was over seven years ago under Virat Kohli’s captaincy.
                 </p>
                 <p>
                   In February 2019, India suffered a 1-2 away series loss to New Zealand. Days later, they returned home only to be swept 0-2 by Australia.
                 </p>

                 <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-4 w-24 h-24 text-red-400/5 -rotate-12 pointer-events-none" />
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-[9px] font-bold uppercase tracking-widest block w-fit mb-4">Historical Context</span>
                    <p className="text-xl sm:text-2xl italic font-display font-bold text-white leading-snug">
                      Breaking a streak that lasted through multiple coaching eras highlights just how severe the current transitional crisis is.
                    </p>
                    <p className="text-xs text-red-400 font-bold uppercase tracking-wider mt-4">— Historic Data Analytics</p>
                 </div>

                 <p>
                   From that moment until the summer of 2026, India became a bilateral juggernaut. They built incredible depth, rotating multiple captains and blooding dozens of youngsters without ever dropping consecutive series. Breaking a streak that lasted through multiple coaching eras (Ravi Shastri to Rahul Dravid) highlights just how severe the current transitional crisis is.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-red-500 pl-4 flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5 text-red-500" /> 3. What is Going Wrong Under Shreyas Iyer?
                 </h3>
                 <p>
                   A post-mortem of these two series reveals several glaring issues that the team management urgently needs to address:
                 </p>

                 <ul className="space-y-4 my-6 pl-2">
                   <li className="flex items-start gap-3">
                     <TrendingDown className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">The Top-Order Timidity</strong>
                       <span className="text-xs text-white/70">Modern T20 cricket demands explosive starts, but India's top order has looked tentative against the swinging ball and extra pace. Instead of dictating terms in the powerplay, they are constantly leaving the middle order to do damage control.</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <TrendingDown className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Spinners Losing Their Bite</strong>
                       <span className="text-xs text-white/70">Historically, India’s spinners have been their ultimate weapon to choke opposition scoring rates in the middle overs. In England, the spinners were aggressively targeted and taken down, leaving the bowling attack with no answers when the pacers failed to strike early.</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <UserX className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Leadership and Identity Crisis</strong>
                       <span className="text-xs text-white/70">Shreyas Iyer has found himself in a tough spot. While he played a brilliant lone-warrior knock of 80 in Bristol, his captaincy has looked reactive rather than proactive. The team seems caught between trying to play anchor-based classical cricket and the ultra-aggressive modern template, ultimately failing at both.</span>
                     </div>
                   </li>
                 </ul>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-red-500 pl-4 flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 text-red-500" /> The Road Ahead: Time for Hard Decisions
                 </h3>
                 <p>
                   Losing is part of the game, but the manner of these defeats is what will keep the BCCI and the selectors awake at night. The fortress has officially been breached. The aura of invincibility is gone, and the No. 1 ranking has been surrendered to a team that completely outclassed them tactically.
                 </p>
                 <p>
                   This consecutive series loss must serve as a massive wake-up call. Whether it requires a reshuffle at the top of the order, a rethink of the spin attack, or a complete overhaul of their T20 batting philosophy, India needs to find answers fast before this slump turns into a permanent decline.
                 </p>
              </div>

              {/* Discussion prompt */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 my-10">
                 <h4 className="font-display font-bold uppercase tracking-wide text-red-400 mb-2">Join the Discussion</h4>
                 <p className="text-xs text-white/60 leading-relaxed">
                   What do you think is the biggest reason for India's sudden dip in form? Is it the captaincy, the batting approach, or just a generational transition? Drop your thoughts in the comments section below!
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-red-400 border-b border-white/5 pb-3">
                  Fortress Breakdown
                </h4>

                <div className="space-y-4">
                   {statistics.map((stat, i) => (
                     <div key={i} className="flex justify-between items-start text-xs gap-4">
                       <span className="text-white/40 uppercase font-black tracking-wider shrink-0">{stat.label}</span>
                       <span className="font-mono font-bold text-white text-right">{stat.value}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="Unwanted History: How India’s T20I Fortress Crumbled for the First Time Since 2018" />
                </div>

                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                   <Trophy className="w-8 h-8 text-red-400 mx-auto mb-2 animate-bounce" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-red-400">NEW T20I NO. 1</p>
                   <p className="text-xs text-white/70 font-medium mt-1">England claims top rank</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
