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
  Activity,
  AlertTriangle,
  Flame,
  ShieldAlert,
  Target,
  Clock,
  BookOpen
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const articleContent = `
  When the Indian cricket team traveled to England for the highly anticipated five-match T20I series in July 2026, fans were expecting a clash of titans. After all, the scars and triumphs of the ICC Men's T20 World Cup earlier this year were still fresh. But what unfolded at the County Ground in Bristol during the 4th T20I was less of a contest and more of a masterclass in English white-ball aggression.
  England’s dominant nine-wicket victory didn't just win them the match; it secured an unassailable 3-0 lead, granting them their first-ever bilateral T20I series victory over India. Let’s break down exactly what happened in Bristol and where it all went wrong for the Men in Blue.
  After losing the toss and being sent in to bat first, India’s top order crumbled spectacularly. The much-hyped openers fell cheaply against a disciplined English attack, and within the powerplay, India found themselves gasping for air.
  At 48/3, the visitors were staring down the barrel of a humiliating total. Enter captain Shreyas Iyer. Playing a lone hand amidst the wreckage, Iyer produced a sensational, unbeaten 80 off just 49 deliveries. Smashing four boundaries and five massive sixes, he single-handedly dragged India to a respectable, albeit below-par, total of 158/7.
  Jofra Archer was back to his lethal best, returning figures of 2/20, while Josh Tongue picked up two crucial wickets to stifle any momentum India tried to build.
  Defending 159 on a decent batting surface requires early breakthroughs. When Arshdeep Singh dismissed Jos Buttler in the third over, Indian fans had a glimmer of hope. That hope, however, was extinguished almost immediately.
  What followed was an absolute slaughter. Phil Salt and Harry Brook put on a breathtaking, unbroken partnership that made a mockery of the run chase.
  Harry Brook: A brutal 79 off 35 balls. Phil Salt: A composed yet destructive 59 not out off 42 balls.
  The duo took down the Indian spinners and pacers alike, chasing down the target in an astonishing 13.5 overs, leaving India searching for answers with 37 balls to spare.
  This series loss exposes several glaring issues for the Indian setup under Shreyas Iyer's new leadership:
  Top-Order Fragility: With the exception of Abhishek Sharma and Ishan Kishan's efforts earlier in the series, the top order has consistently failed to provide a platform.
  Spin Bowling Woes: Usually India's trump card, the spin department looked toothless against the sheer firepower of the English middle order.
  Lack of Support: Iyer’s brilliant 80 highlighted a deep reliance on individual brilliance rather than collective team performance.
  With the series gone and pride on the line, India will be playing for respect in the final match at the Utilita Bowl. For England, this series is a massive statement of intent, proving that their ultra-aggressive white-ball template is still the gold standard when executed correctly.
`;

export default function BristolBlitzBlog() {
  const matchStats = [
    { label: 'India', value: '158/7 (20 Overs)' },
    { label: 'England', value: '159/1 (13.5 Overs)' },
    { label: 'Result', value: 'England won by 9 wickets' },
    { label: 'Series Status', value: 'England leads 3-0 (Series Sealed)' }
  ];

  const wordCount = articleContent.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225); // Average reading speed is 225 wpm

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>The Bristol Blitz: How England Demolished India to Seal T20I Series | PakCric</title>
        <meta name="description" content="Read our in-depth match report on England’s historic nine-wicket T20I series win over India in Bristol, starring Shreyas Iyer, Harry Brook, and Phil Salt." />
        <meta name="keywords" content="England vs India T20I, Bristol T20I, Shreyas Iyer, Harry Brook, Jofra Archer, Phil Salt, India tour of England 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-amber-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Analysis
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="px-4 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Flame className="w-3 h-3 animate-pulse" /> T20I Series
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-amber-500" /> July 9, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <Clock className="w-3.5 h-3.5 text-amber-500" /> {readingTime} Min Read
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" /> {wordCount} Words
                </span>
                {/* Mobile version without borders */}
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest sm:hidden">
                  <Clock className="w-3.5 h-3.5 text-amber-500" /> {readingTime} Min Read
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Bristol Blitz: How <span className="text-amber-500 italic">England Demolished</span> India to Seal the T20I Series
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                A brutal English masterclass in white-ball aggression leaves India searching for answers as the hosts claim a historic first-ever bilateral T20I series win over the Men in Blue.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm uppercase">
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
                    <img src="https://images.unsplash.com/photo-1531415080290-bc9854593f6f?auto=format&fit=crop&q=80&w=1200" alt="County Ground Bristol Cricket Match" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   When the Indian cricket team traveled to England for the highly anticipated five-match T20I series in July 2026, fans were expecting a clash of titans. After all, the scars and triumphs of the ICC Men's T20 World Cup earlier this year were still fresh. But what unfolded at the County Ground in Bristol during the 4th T20I was less of a contest and more of a masterclass in English white-ball aggression.
                 </p>

                 <p>
                   England’s dominant nine-wicket victory didn't just win them the match; it secured an unassailable 3-0 lead, granting them their first-ever bilateral T20I series victory over India. Let’s break down exactly what happened in Bristol and where it all went wrong for the Men in Blue.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-amber-500 pl-4 flex items-center gap-2">
                   <Target className="w-5 h-5 text-amber-500" /> 1. A Lone Warrior: Shreyas Iyer's Captain's Knock
                 </h3>
                 <p>
                   After losing the toss and being sent in to bat first, India’s top order crumbled spectacularly. The much-hyped openers fell cheaply against a disciplined English attack, and within the powerplay, India found themselves gasping for air.
                 </p>
                 <p>
                   At 48/3, the visitors were staring down the barrel of a humiliating total. Enter captain Shreyas Iyer. Playing a lone hand amidst the wreckage, Iyer produced a sensational, unbeaten 80 off just 49 deliveries. Smashing four boundaries and five massive sixes, he single-handedly dragged India to a respectable, albeit below-par, total of 158/7.
                 </p>

                 {/* Bowling Heroes callout */}
                 <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl my-6">
                   <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-2">
                     <Award className="w-4 h-4" /> England's Bowling Heroes
                   </h4>
                   <p className="text-xs text-white/70 leading-relaxed">
                     <strong className="text-white">Jofra Archer</strong> was back to his lethal best, returning figures of <strong className="text-white">2/20</strong>, while <strong className="text-white">Josh Tongue</strong> picked up two crucial wickets to stifle any momentum India tried to build.
                   </p>
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-amber-500 pl-4 flex items-center gap-2">
                   <Flame className="w-5 h-5 text-amber-500" /> 2. The Chase: Salt and Brook Unleash Carnage
                 </h3>
                 <p>
                   Defending 159 on a decent batting surface requires early breakthroughs. When Arshdeep Singh dismissed Jos Buttler in the third over, Indian fans had a glimmer of hope. That hope, however, was extinguished almost immediately.
                 </p>
                 <p>
                   What followed was an absolute slaughter. Phil Salt and Harry Brook put on a breathtaking, unbroken partnership that made a mockery of the run chase.
                 </p>

                 {/* Player of the Match quote */}
                 <div className="p-8 bg-amber-500/10 border border-amber-500/30 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-4 w-24 h-24 text-amber-400/5 -rotate-12 pointer-events-none" />
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-md text-[9px] font-bold uppercase tracking-widest block w-fit mb-4">Player of the Match</span>
                    <p className="text-xl sm:text-2xl italic font-display font-bold text-white leading-snug">
                      "Chasing down 159 with that level of freedom shows how solid our blueprint is. Credit to Salt for rotating strike so cleanly."
                    </p>
                    <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mt-4">— Harry Brook (Brutal 79* off 35 balls, SR: 225.71)</p>
                 </div>

                 <p>
                   Alongside Brook, <strong className="text-white">Phil Salt</strong> registered a composed yet destructive <strong className="text-white">59 not out</strong> off 42 balls. The duo took down the Indian spinners and pacers alike, chasing down the target in an astonishing 13.5 overs, leaving India searching for answers with 37 balls to spare.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-amber-500 pl-4 flex items-center gap-2">
                   <ShieldAlert className="w-5 h-5 text-amber-500" /> 3. What Went Wrong for India?
                 </h3>
                 <p>
                   This series loss exposes several glaring issues for the Indian setup under Shreyas Iyer's new leadership:
                 </p>

                 <ul className="space-y-4 my-6 pl-2">
                   <li className="flex items-start gap-3">
                     <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Top-Order Fragility</strong>
                       <span className="text-xs text-white/70">With the exception of Abhishek Sharma and Ishan Kishan's efforts earlier in the series, the top order has consistently failed to provide a stable platform in pressure scenarios.</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <TrendingDown className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Spin Bowling Woes</strong>
                       <span className="text-xs text-white/70">Usually India's trump card, the spin department looked toothless in Bristol against the sheer firepower and sweeping capability of the English middle order.</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">Lack of Support</strong>
                       <span className="text-xs text-white/70">Iyer’s brilliant, lone-wolf 80 highlighted a deep, concerning reliance on individual brilliance rather than cohesive, collective team performance.</span>
                     </div>
                   </li>
                 </ul>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-amber-500 pl-4 flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 text-amber-500" /> The Road Ahead
                 </h3>
                 <p>
                   With the series gone and pride on the line, India will be playing for respect in the final match at the Utilita Bowl. For England, this series is a massive statement of intent, proving that their ultra-aggressive white-ball template is still the gold-standard benchmark when executed correctly.
                 </p>
              </div>

              {/* Discussion prompt */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 my-10">
                 <h4 className="font-display font-bold uppercase tracking-wide text-amber-400 mb-2">Join the Discussion</h4>
                 <p className="text-xs text-white/60 leading-relaxed">
                   Which area do you think the Indian team needs to focus on fixing the most before their upcoming ODI matches against England? Sound off in the comments section below!
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-amber-400 border-b border-white/5 pb-3">
                  Match Summary
                </h4>

                <div className="space-y-4">
                   {matchStats.map((stat, i) => (
                     <div key={i} className="flex justify-between items-center text-xs">
                       <span className="text-white/40 uppercase font-black tracking-wider">{stat.label}</span>
                       <span className="font-mono font-bold text-white text-right">{stat.value}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="The Bristol Blitz: How England Demolished India to Seal the T20I Series" />
                </div>

                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center">
                   <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">SERIES WINNER</p>
                   <p className="text-xs text-white/70 font-medium mt-1">England (3-0 Lead)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
