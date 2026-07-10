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
  UserX,
  Target,
  Sparkles,
  Newspaper
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const articleContent = `
  The ongoing T20I series between England and India has been nothing short of a rollercoaster, but for the young Indian batting lineup, it has mostly been a brutal learning curve. Following a massive 125-run thrashing at Trent Bridge in the 3rd T20I—where India was bowled out for just 76 chasing 202—England’s pace spearhead Jofra Archer had plenty to say.
  In a candid and revealing post-match press conference, Archer highlighted the stark differences between playing in the Indian Premier League (IPL) and international cricket in English conditions. He also opened up about his fascinating head-to-head battle with his Rajasthan Royals teammate, 15-year-old Indian prodigy Vaibhav Sooryavanshi.
  Here is a deep dive into Archer’s comments and what they mean for this transitioning Indian squad.
  One of the biggest talking points from the press conference was Archer’s assessment of the conditions. After seeing astronomical scores and relentless power-hitting during the recent IPL seasons, Archer fired a subtle warning that English conditions demand discipline over pure brute force.
  He described bowling in England as a welcome return to "normal cricket."
  "I think it goes back to normal here. You try to bowl the ball straight on a good length. Whereas over there [in the IPL], because the wickets are so easy and the boundaries are so small, you have to be really, really particular. Here, I feel your margin for error is a little bit bigger." — Jofra Archer
  Archer also pointed out how totals are defended differently. In the IPL, a score of 200 is rarely considered safe. However, on the Trent Bridge surface, the English camp was highly confident in their 201-run total.
  "At the IPL, sometimes 200 isn't safe," Archer noted. "With 200 on the board on that wicket, I don't want to say we were confident, but I felt it would have taken a really special innings to chase it down."
  His words served as a stark reminder that the fearless, boundary-at-all-costs approach nurtured in franchise cricket doesn't always translate seamlessly to swinging, seaming international pitches.
  While Archer dismantled the Indian batting lineup with figures of 3/29, his personal duel with Vaibhav Sooryavanshi grabbed the headlines.
  The two share a dressing room for the Rajasthan Royals, and Sooryavanshi had boldly announced his arrival on the international stage during his debut in Manchester by smashing Archer for a six off his very first delivery.
  However, Archer is not one to back down. In the 3rd T20I at Nottingham, the veteran pacer struck back. Bowling a blistering 145 km/h short ball, Archer brushed the 15-year-old's glove, sending him back to the pavilion for just 13 runs.
  When asked about this escalating rivalry during the press conference, Archer couldn't help but smile, acknowledging the fight the teenager was putting up.
  "Well yeah, I think it's even now. But we've got another two games left and it could go either way, so may the best man win."
  Sticking to a clear, premeditated plan, Archer tested the teenager with hard lengths and extra bounce. The strategy worked perfectly, as a mistimed pull shot off Archer saw Sooryavanshi caught at mid-on for 15. The dismissal clearly showed that while the young left-hander has immense talent and incredible bat speed, his technique against steep, hostile fast bowling is still a work in progress.
  Jofra Archer’s press conference was a masterclass in reading the game. His observations about the transition from IPL batting paradises to traditional English pitches perfectly encapsulate why India has struggled so mightily on this tour.
  As for Vaibhav Sooryavanshi, facing one of the world's best fast bowlers at the peak of his powers is the ultimate trial by fire. He may have lost this round, but the lessons learned from this "best man wins" rivalry will undoubtedly shape the teenager's promising career.
`;

export default function JofraArcherRealityCheckBlog() {
  const headToHead = [
    { label: 'Balls Faced', value: '13' },
    { label: 'Runs Scored', value: '18' },
    { label: 'Sixes Hit', value: '2' },
    { label: 'Dismissals by Archer', value: '2' }
  ];

  const quickStats = [
    { label: 'Archer Nottingham Spell', value: '3/29 (4 Overs)' },
    { label: 'India Trent Bridge Score', value: '76 All Out' },
    { label: 'Target Defended', value: '201 Runs' },
    { label: 'Vibe of English Pitches', value: '"Normal Cricket"' }
  ];

  const wordCount = articleContent.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>"Back to Normal Cricket": Jofra Archer’s Reality Check for India | PakCric</title>
        <meta name="description" content="England’s Jofra Archer compares IPL paradises to English conditions, terming them 'normal cricket', and breaks down his budding rivalry with 15-year-old Vaibhav Sooryavanshi." />
        <meta name="keywords" content="Jofra Archer, Vaibhav Sooryavanshi, India vs England T20I, IPL vs international, Nottingham T20I, Rajasthan Royals, cricket news" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-rose-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-rose-500/5 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-rose-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Analysis
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Flame className="w-3 h-3 animate-pulse" /> T20I Series
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-rose-500" /> July 9, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <Clock className="w-3.5 h-3.5 text-rose-500" /> {readingTime} Min Read
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <BookOpen className="w-3.5 h-3.5 text-rose-500" /> {wordCount} Words
                </span>
                {/* Mobile version */}
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest sm:hidden">
                  <Clock className="w-3.5 h-3.5 text-rose-500" /> {readingTime} Min Read
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                "Back to Normal Cricket": <span className="text-rose-500 italic">Jofra Archer’s</span> Reality Check for India
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                England's pace spearhead delivers a sharp assessment of modern batting approaches, contrasting IPL runway pitches with traditional English seaming wickets.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-sm uppercase">
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
                    <img src="https://images.unsplash.com/photo-1531415080290-bc9854593f6f?auto=format&fit=crop&q=80&w=1200" alt="Jofra Archer bowling in England nets" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   The ongoing T20I series between England and India has been nothing short of a rollercoaster, but for the young Indian batting lineup, it has mostly been a brutal learning curve. Following a massive 125-run thrashing at Trent Bridge in the 3rd T20I—where India was bowled out for just 76 chasing 202—England’s pace spearhead Jofra Archer had plenty to say.
                 </p>

                 <p>
                   In a candid and revealing post-match press conference, Archer highlighted the stark differences between playing in the Indian Premier League (IPL) and international cricket in English conditions. He also opened up about his fascinating head-to-head battle with his Rajasthan Royals teammate, 15-year-old Indian prodigy Vaibhav Sooryavanshi.
                 </p>

                 <p>
                   Here is a deep dive into Archer’s comments and what they mean for this transitioning Indian squad.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-rose-500 pl-4 flex items-center gap-2">
                   <Target className="w-5 h-5 text-rose-500" /> 1. IPL vs. International Cricket: A Return to "Normalcy"
                 </h3>
                 <p>
                   One of the biggest talking points from the press conference was Archer’s assessment of the conditions. After seeing astronomical scores and relentless power-hitting during the recent IPL seasons, Archer fired a subtle warning that English conditions demand discipline over pure brute force.
                 </p>
                 <p>
                   He described bowling in England as a welcome return to <strong className="text-rose-400">"normal cricket."</strong>
                 </p>

                 {/* Quote 1 */}
                 <div className="p-8 bg-rose-500/10 border border-rose-500/30 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-4 w-24 h-24 text-rose-400/5 -rotate-12 pointer-events-none" />
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-400 rounded-md text-[9px] font-bold uppercase tracking-widest block w-fit mb-4">Press Box Insight</span>
                    <p className="text-xl sm:text-2xl italic font-display font-bold text-white leading-snug">
                      "I think it goes back to normal here. You try to bowl the ball straight on a good length. Whereas over there [in the IPL], because the wickets are so easy and the boundaries are so small, you have to be really, really particular."
                    </p>
                    <p className="text-xs text-rose-400 font-bold uppercase tracking-wider mt-4">— Jofra Archer</p>
                 </div>

                 <p>
                   Archer also pointed out how totals are defended differently. In the IPL, a score of 200 is rarely considered safe. However, on the Trent Bridge surface, the English camp was highly confident in their 201-run total.
                 </p>
                 <p>
                   "At the IPL, sometimes 200 isn't safe," Archer noted. "With 200 on the board on that wicket, I don't want to say we were confident, but I felt it would have taken a really special innings to chase it down."
                 </p>
                 <p>
                   His words served as a stark reminder that the fearless, boundary-at-all-costs approach nurtured in franchise cricket doesn't always translate seamlessly to swinging, seaming international pitches.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-rose-500 pl-4 flex items-center gap-2">
                   <Sparkles className="w-5 h-5 text-rose-500" /> 2. The Sooryavanshi Showdown: Master vs. Apprentice
                 </h3>
                 <p>
                   While Archer dismantled the Indian batting lineup with figures of 3/29, his personal duel with Vaibhav Sooryavanshi grabbed the headlines.
                 </p>
                 <p>
                   The two share a dressing room for the Rajasthan Royals, and Sooryavanshi had boldly announced his arrival on the international stage during his debut in Manchester by smashing Archer for a six off his very first delivery.
                 </p>
                 <p>
                   However, Archer is not one to back down. In the 3rd T20I at Nottingham, the veteran pacer struck back. Bowling a blistering 145 km/h short ball, Archer brushed the 15-year-old's glove, sending him back to the pavilion for just 13 runs.
                 </p>

                 {/* Head to Head Card */}
                 <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 my-6">
                    <h4 className="text-xs font-black uppercase text-rose-400 tracking-wider mb-4 flex items-center gap-2">
                      <HistoryIcon className="w-4 h-4" /> The Archer vs. Sooryavanshi Scorecard
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {headToHead.map((stat, idx) => (
                        <div key={idx} className="border-b border-white/5 pb-2">
                          <p className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</p>
                          <p className="text-sm font-bold text-white mt-0.5">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* Quote 2 */}
                 <div className="p-8 bg-rose-500/10 border border-rose-500/30 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-4 w-24 h-24 text-rose-400/5 -rotate-12 pointer-events-none" />
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-400 rounded-md text-[9px] font-bold uppercase tracking-widest block w-fit mb-4">Escalating Rivalry</span>
                    <p className="text-xl sm:text-2xl italic font-display font-bold text-white leading-snug">
                      "Well yeah, I think it's even now. But we've got another two games left and it could go either way, so may the best man win."
                    </p>
                    <p className="text-xs text-rose-400 font-bold uppercase tracking-wider mt-4">— Jofra Archer</p>
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-rose-500 pl-4 flex items-center gap-2">
                   <ShieldAlert className="w-5 h-5 text-rose-500" /> 3. The Blueprint Exposed: The Short Ball Threat
                 </h3>
                 <p>
                   Archer's words—"may the best man win"—set the stage perfectly for the 4th T20I in Bristol. And true to his word, Archer brought the heat again.
                 </p>
                 <p>
                   Sticking to a clear, premeditated plan, Archer tested the teenager with hard lengths and extra bounce. The strategy worked perfectly, as a mistimed pull shot off Archer saw Sooryavanshi caught at mid-on for 15. The dismissal clearly showed that while the young left-hander has immense talent and incredible bat speed, his technique against steep, hostile fast bowling is still a work in progress.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-rose-500 pl-4 flex items-center gap-2">
                   <Award className="w-5 h-5 text-rose-500" /> The Verdict
                 </h3>
                 <p>
                   Jofra Archer’s press conference was a masterclass in reading the game. His observations about the transition from IPL batting paradises to traditional English pitches perfectly encapsulate why India has struggled so mightily on this tour.
                 </p>
                 <p>
                   As for Vaibhav Sooryavanshi, facing one of the world's best fast bowlers at the peak of his powers is the ultimate trial by fire. He may have lost this round, but the lessons learned from this "best man wins" rivalry will undoubtedly shape the teenager's promising career.
                 </p>
              </div>

              {/* Discussion prompt */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 my-10">
                 <h4 className="font-display font-bold uppercase tracking-wide text-rose-400 mb-2">Join the Discussion</h4>
                 <p className="text-xs text-white/60 leading-relaxed">
                   Do you agree with Jofra Archer that the IPL's small boundaries and flat pitches give batters a false sense of security? Drop your thoughts in the comments section below!
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-rose-400 border-b border-white/5 pb-3">
                  Match Context
                </h4>

                <div className="space-y-4">
                   {quickStats.map((stat, i) => (
                     <div key={i} className="flex justify-between items-start text-xs gap-4">
                       <span className="text-white/40 uppercase font-black tracking-wider shrink-0">{stat.label}</span>
                       <span className="font-mono font-bold text-white text-right">{stat.value}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="Back to Normal Cricket: Jofra Archer’s Reality Check for India" />
                </div>

                <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-center">
                   <Newspaper className="w-8 h-8 text-rose-400 mx-auto mb-2 animate-pulse" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-rose-400">PRESS RELEASE</p>
                   <p className="text-xs text-white/70 font-medium mt-1">Trent Bridge post-match Q&A</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
