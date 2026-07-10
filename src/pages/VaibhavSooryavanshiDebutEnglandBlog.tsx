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
  Sparkles
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const articleContent = `
  When the Indian cricket team touched down in England for the five-match T20I series in July 2026, the spotlight wasn't just on the team's attempt to bounce back from the Ireland upset. Instead, the cameras were fixed on a 15-year-old batting prodigy from Bihar: Vaibhav Sooryavanshi.
  Debuting at Old Trafford in the second T20I at just 15 years and 99 days, Sooryavanshi shattered Sachin Tendulkar's long-standing record to become the youngest male cricketer to represent India on the international stage.
  What followed over the next few games was a fascinating, highly publicized battle between a fearless teenager and a relentless English pace attack—most notably, his Rajasthan Royals teammate, Jofra Archer. Let’s break down Vaibhav Sooryavanshi’s turbulent but thrilling introduction to international cricket against England.
  Sooryavanshi didn't have to wait long to face the fire. Opening the batting at Old Trafford, the left-hander found himself staring down the barrel of one of the world's most feared fast bowlers: Jofra Archer.
  How did the 15-year-old respond? By stooping low and effortlessly scooping Archer over his left shoulder for a monstrous six.
  He followed it up with another towering maximum off Josh Tongue. For a brief moment, the cricketing world was in awe. He managed 14 off 10 balls before being stumped off Will Jacks, but the intent was clear: the kid wasn't intimidated by the big stage.
  The highlight of the series quickly became the personal duel between Sooryavanshi and Archer. Having shared a dressing room during the IPL, Archer clearly knew where the youngster’s vulnerabilities lay.
  After three encounters in the series, their head-to-head scorecard painted a picture of a fiery, even contest:
  Runs scored by Vaibhav: 18, Balls faced: 13, Sixes hit: 2, Dismissals by Archer: 2.
  In both the 3rd T20I at Trent Bridge (where he scored 13) and the 4th T20I at Bristol (where he scored 15), it was Archer who had the last laugh. In Bristol, Archer banged in a back-of-a-length delivery outside off stump. Vaibhav went for the pull but mistimed it, holing out to Sam Curran at mid-on.
  As the series progressed, England's strategy against the teenager became painfully clear. Instead of feeding him fuller deliveries where his bat speed is deadly, they tested him with relentless pace, steep bounce, and hard lengths above 145 km/h.
  Former India wicketkeeper Parthiv Patel noted that this shouldn't come as a surprise. Teams had already spotted his discomfort against the short ball during the IPL. English pacers like Archer and Tongue simply executed the blueprint perfectly, giving Vaibhav absolutely no time to settle and forcing him into playing high-risk horizontal bat shots.
  Vaibhav’s scores in the series—14, 13, and 15—tell a story of unfulfilled potential. He hasn't looked out of place, and his strike rate remains an impressive 168.00. The bat speed, the swagger, and the boundary-hitting ability are all visibly present.
  However, the inability to convert these starts into match-winning knocks has sparked a massive debate among Indian fans and pundits.
  The Critics: Argue that throwing a 15-year-old into the deep end against a world-class pace attack in swinging English conditions is a step too far, leaving him exposed and potentially denting his confidence.
  The Supporters: Believe that experiencing this trial by fire now will fast-track his development, preparing him for the rigors of international cricket much faster than grinding through domestic leagues.
`;

export default function VaibhavSooryavanshiDebutEnglandBlog() {
  const headToHead = [
    { label: 'Runs scored by Vaibhav', value: '18 Runs' },
    { label: 'Balls faced', value: '13' },
    { label: 'Strike Rate', value: '138.46' },
    { label: 'Sixes hit', value: '2' },
    { label: 'Dismissals by Archer', value: '2' }
  ];

  const seriesScores = [
    { match: '2nd T20I (Old Trafford)', score: '14 (10b)', note: 'Debuted at 15y, 99d' },
    { match: '3rd T20I (Trent Bridge)', score: '13 (8b)', note: 'Dismissed by Archer' },
    { match: '4th T20I (Bristol)', score: '15 (9b)', note: 'Dismissed by Archer' }
  ];

  const wordCount = articleContent.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>The Teenager vs. The Cartel: Vaibhav Sooryavanshi’s Baptism of Fire in England | PakCric</title>
        <meta name="description" content="Read our deep analytical look into 15-year-old prodigy Vaibhav Sooryavanshi's debut series against England's bowling cartel, featuring his thrilling duel with Jofra Archer." />
        <meta name="keywords" content="Vaibhav Sooryavanshi, Jofra Archer, India vs England T20I, youngest cricket debut, Sachin Tendulkar debut record, Shreyas Iyer" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-yellow-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Analysis
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3 h-3 animate-pulse" /> T20I Series
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-yellow-500" /> July 9, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <Clock className="w-3.5 h-3.5 text-yellow-500" /> {readingTime} Min Read
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest border-l border-white/10 pl-4 hidden sm:inline-flex">
                  <BookOpen className="w-3.5 h-3.5 text-yellow-500" /> {wordCount} Words
                </span>
                {/* Mobile version */}
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest sm:hidden">
                  <Clock className="w-3.5 h-3.5 text-yellow-500" /> {readingTime} Min Read
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Teenager vs. The Cartel: <span className="text-yellow-500 italic">Vaibhav Sooryavanshi’s</span> Baptism of Fire in England
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                At just 15 years and 99 days, the prodigy from Bihar breaks Sachin Tendulkar’s record, embarking on a high-octane duel with Jofra Archer under hostile English skies.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-bold text-sm uppercase">
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
                    <img src="https://images.unsplash.com/photo-1540747737956-378724044602?auto=format&fit=crop&q=80&w=1200" alt="Lord's or old Trafford cricket net practice" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                 </div>

                 <p className="text-white font-medium text-lg leading-relaxed">
                   When the Indian cricket team touched down in England for the five-match T20I series in July 2026, the spotlight wasn't just on the team's attempt to bounce back from the Ireland upset. Instead, the cameras were fixed on a 15-year-old batting prodigy from Bihar: <strong className="text-yellow-400">Vaibhav Sooryavanshi</strong>.
                 </p>

                 <p>
                   Debuting at Old Trafford in the second T20I at just 15 years and 99 days, Sooryavanshi shattered Sachin Tendulkar's long-standing record to become the youngest male cricketer to represent India on the international stage.
                 </p>

                 <p>
                   What followed over the next few games was a fascinating, highly publicized battle between a fearless teenager and a relentless English pace attack—most notably, his Rajasthan Royals teammate, Jofra Archer. Let’s break down Vaibhav Sooryavanshi’s turbulent but thrilling introduction to international cricket against England.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-yellow-500 pl-4 flex items-center gap-2">
                   <Target className="w-5 h-5 text-yellow-500" /> 1. The Debut: A Glimpse of the Future
                 </h3>
                 <p>
                   Sooryavanshi didn't have to wait long to face the fire. Opening the batting at Old Trafford, the left-hander found himself staring down the barrel of one of the world's most feared fast bowlers: Jofra Archer.
                 </p>
                 <p>
                   How did the 15-year-old respond? By stooping low and effortlessly scooping Archer over his left shoulder for a monstrous six.
                 </p>
                 <p>
                   He followed it up with another towering maximum off Josh Tongue. For a brief moment, the cricketing world was in awe. He managed 14 off 10 balls before being stumped off Will Jacks, but the intent was clear: the kid wasn't intimidated by the big stage.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-yellow-500 pl-4 flex items-center gap-2">
                   <Flame className="w-5 h-5 text-yellow-500" /> 2. The Sooryavanshi vs. Archer Showdown
                 </h3>
                 <p>
                   The highlight of the series quickly became the personal duel between Sooryavanshi and Archer. Having shared a dressing room during the IPL, Archer clearly knew where the youngster’s vulnerabilities lay.
                 </p>
                 <p>
                   After three encounters in the series, their head-to-head scorecard painted a picture of a fiery, even contest:
                 </p>

                 {/* Head to Head Table / Box */}
                 <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 my-6">
                    <h4 className="text-xs font-black uppercase text-yellow-400 tracking-wider mb-4 flex items-center gap-2">
                      <HistoryIcon className="w-4 h-4" /> Head-to-Head: Sooryavanshi vs. Archer
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

                 <p>
                   In both the 3rd T20I at Trent Bridge (where he scored 13) and the 4th T20I at Bristol (where he scored 15), it was Archer who had the last laugh. In Bristol, Archer banged in a back-of-a-length delivery outside off stump. Vaibhav went for the pull but mistimed it, holing out to Sam Curran at mid-on.
                 </p>

                 {/* Archer Quote */}
                 <div className="p-8 bg-yellow-500/10 border border-yellow-500/30 rounded-3xl relative overflow-hidden my-8">
                    <Quote className="absolute right-6 bottom-4 w-24 h-24 text-yellow-400/5 -rotate-12 pointer-events-none" />
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-[9px] font-bold uppercase tracking-widest block w-fit mb-4">Post-Match Statement</span>
                    <p className="text-xl sm:text-2xl italic font-display font-bold text-white leading-snug">
                      "I think it's even now. But we've got another two games left and it could go either way, so may the best man win."
                    </p>
                    <p className="text-xs text-yellow-400 font-bold uppercase tracking-wider mt-4">— Jofra Archer, England Fast Bowler</p>
                 </div>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-yellow-500 pl-4 flex items-center gap-2">
                   <ShieldAlert className="w-5 h-5 text-yellow-500" /> 3. The Short-Ball Tactic: A Deliberate English Plan
                 </h3>
                 <p>
                   As the series progressed, England's strategy against the teenager became painfully clear. Instead of feeding him fuller deliveries where his bat speed is deadly, they tested him with relentless pace, steep bounce, and hard lengths above 145 km/h.
                 </p>
                 <p>
                   Former India wicketkeeper Parthiv Patel noted that this shouldn't come as a surprise. Teams had already spotted his discomfort against the short ball during the IPL. English pacers like Archer and Tongue simply executed the blueprint perfectly, giving Vaibhav absolutely no time to settle and forcing him into playing high-risk horizontal bat shots.
                 </p>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-yellow-500 pl-4 flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5 text-yellow-500" /> 4. The "Youth Gamble": Is He Ready?
                 </h3>
                 <p>
                   Vaibhav’s scores in the series—14, 13, and 15—tell a story of unfulfilled potential. He hasn't looked out of place, and his strike rate remains an impressive 168.00. The bat speed, the swagger, and the boundary-hitting ability are all visibly present.
                 </p>
                 <p>
                   However, the inability to convert these starts into match-winning knocks has sparked a massive debate among Indian fans and pundits.
                 </p>

                 <ul className="space-y-4 my-6 pl-2">
                   <li className="flex items-start gap-3">
                     <UserX className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">The Critics' View</strong>
                       <span className="text-xs text-white/70">Throwing a 15-year-old into the deep end against a world-class pace attack in swinging English conditions is a step too far, leaving him exposed and potentially denting his confidence.</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                     <div>
                       <strong className="text-white uppercase text-xs tracking-wider block">The Supporters' View</strong>
                       <span className="text-xs text-white/70">Experiencing this trial by fire now will fast-track his development, preparing him for the rigors of international cricket much faster than grinding through domestic leagues.</span>
                     </div>
                   </li>
                 </ul>

                 <h3 className="text-xl font-display font-black text-white uppercase tracking-tight pt-6 border-l-4 border-yellow-500 pl-4 flex items-center gap-2">
                   <Award className="w-5 h-5 text-yellow-500" /> The Road Ahead
                 </h3>
                 <p>
                   Vaibhav Sooryavanshi’s tour of England has been a massive learning curve. The talent is undeniable, but raw talent must eventually mature into game awareness and patience. As he faces the reality of international cricket, his biggest challenge won't just be hitting Jofra Archer for six—it will be surviving the hostility, learning to leave the good balls, and pacing an innings.
                 </p>
                 <p>
                   The 15-year-old wonder kid has officially arrived. Now, the real work begins.
                 </p>
              </div>

              {/* Discussion prompt */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 my-10">
                 <h4 className="font-display font-bold uppercase tracking-wide text-yellow-400 mb-2">Join the Discussion</h4>
                 <p className="text-xs text-white/60 leading-relaxed">
                   What do you make of Vaibhav Sooryavanshi's debut series? Should India keep backing him at the top of the order, or does he need more time in domestic cricket? Drop your thoughts in the comments section below!
                 </p>
              </div>
            </div>

            {/* Right Side Sidebar (Sticky widget) */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sticky top-24 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-yellow-400 border-b border-white/5 pb-3">
                  Youth Tour Record
                </h4>

                <div className="space-y-4">
                   {seriesScores.map((scoreCard, i) => (
                     <div key={i} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                       <p className="text-[10px] text-white/40 uppercase tracking-wider">{scoreCard.match}</p>
                       <div className="flex justify-between items-center mt-1">
                          <span className="font-mono font-bold text-white">{scoreCard.score}</span>
                          <span className="text-[10px] bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded border border-yellow-500/20 font-mono font-medium">{scoreCard.note}</span>
                       </div>
                     </div>
                   ))}
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-wider text-white/30 block">SHARE REPORT</span>
                   <BlogShare title="The Teenager vs. The Cartel: Vaibhav Sooryavanshi’s Baptism of Fire in England" />
                </div>

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-center">
                   <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2 animate-spin-slow" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400">RECORD HOLDER</p>
                   <p className="text-xs text-white/70 font-medium mt-1">Youngest India Male Debut</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
