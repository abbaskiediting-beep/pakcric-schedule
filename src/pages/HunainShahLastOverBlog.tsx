/* 
<!-- Meta Title: Hunain Shah Last Over PSL 2026 Eliminator 2 | 6 Needed Off Final Over, HYK Win by 2 Runs | Full Ball-by-Ball Analysis -->
<!-- Meta Description: Islamabad United needed just 6 runs off the last over to reach the PSL Final. Hunain Shah had other ideas. 6 balls. 3 runs. 1 wicket. Full ball-by-ball breakdown of the most dramatic over in PSL 2026 — the over that sent Hyderabad Kingsmen into their debut PSL Final. -->
*/

import { Calendar, ArrowLeft, Trophy, BarChart3, Zap, MapPin, Star, History as HistoryIcon, User, ChevronRight, ExternalLink, Activity, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function HunainShahLastOverBlog() {
  const blogTitle = "Hunain Shah's Last Over: 6 Balls, 3 Runs, 1 Wicket — The Most Dramatic Over in PSL 2026";
  const publishDate = "May 2, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-yellow-500 selection:text-black">
      <Helmet>
        <title>Hunain Shah Last Over PSL 2026 Eliminator 2 | Full Ball-by-Ball Analysis | PakCric Schedule</title>
        <meta name="description" content="Islamabad United needed just 6 runs off the last over to reach the PSL Final. Hunain Shah had other ideas. 6 balls. 3 runs. 1 wicket. Full ball-by-ball breakdown." />
      </Helmet>

      {/* Hero Header */}
      <div className="hero relative overflow-hidden bg-dark py-20 pb-0 min-h-[600px] flex items-center text-left">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-dark to-pak-green/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(234,179,8,0.15)_0%,transparent_65%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
            <Activity className="w-3 h-3 animate-pulse" />
            Tactical Analysis · Death Overs
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tighter mb-8 uppercase"
          >
            Hunain Shah's <span className="text-yellow-500 italic">Last Over</span>: 6 Balls, 3 Runs, 1 Wicket
          </motion.h1>
          
          <p className="text-lg md:text-xl text-white/60 font-medium mb-10 max-w-2xl leading-relaxed">
            Islamabad United needed just 6 runs off the last over to reach the PSL Final. Hunain Shah had other ideas. The over that defined a season and sent the Kingsmen to their first final.
          </p>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Runs Needed', val: '6' },
              { label: 'Runs Conceded', val: '3' },
              { label: 'Wickets', val: '1' },
              { label: 'Dot Balls', val: '2' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{s.label}</p>
                <p className="text-2xl font-display font-black text-yellow-500">{s.val}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
             <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-yellow-500" /> {publishDate}</span>
             <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-500" /> 11:30 PM PKT</span>
             <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-500" /> Gaddafi Stadium, Lahore</span>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/70 prose-strong:text-yellow-500 prose-h2:text-4xl prose-h2:font-display prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-24 prose-h2:mb-8 pl-0">
          
          <p>
            Gaddafi Stadium, Lahore. 1 May 2026. 11:30 PM PKT. The match had already been a rollercoaster, but what transpired in the final six minutes will be etched in Pakistan Super League folklore forever. As the cool Lahore breeze swept across the fully packed stands, there was a sense of inevitability in the air. 
          </p>
          <p>
            The atmosphere was electric as the knockout phase reached its absolute peak. Fans who had been sitting quietly were now on their feet, witness to what would become the most talked-about over in Pakistan Super League history. The tension was so thick you could cut it with a knife.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,stadium,lahore,night" alt="Gaddafi Stadium Lahore Cricket Stadium at Night" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Prelude: A Match of Epic Proportions</h2>
          <p>
            To understand the weight of Hunain Shah's final over, one must look at the 114 overs that preceded it. Hyderabad Kingsmen had clawed their way to 186/5, primarily thanks to a masterclass from <strong>Usman Khan</strong>. Usman’s unbeaten <strong>61 off 30 balls</strong> was the backbone of the Kingsmen innings, a flurry of boundaries that punished any width offered by the United bowlers.
          </p>
          <p>
            Usman Khan's performance throughout PSL 2026 has been a revelation for the Kingsmen. His ability to accelerate in the middle overs and find gaps in the field has made him one of the most dangerous batsmen in the tournament. On this night, his contribution was vital, providing the Kingsmen with a competitive total on a surface that seemed to favor the batsmen as the night progressed.
          </p>
          <p>
            In reply, Islamabad United's chase was a story of two halves. They struggled initially, losing key wickets to spin, with both deviations and turn challenging their top order. However, the middle-order resurgence brought about by Mark Chapman and later the explosive lower-order hitting of Faheem Ashraf had brought them to the doorstep of victory.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,batting,pakistan" alt="Cricket Batting Action Pakistan" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Nightmare 19th Over: 22 Runs of Pure Chaos</h2>
          <p>
             The match seemed to have been decided in the 19th over. Mohammad Ali, usually so reliable at the death for Hyderabad, was taken for a staggering <strong>22 runs</strong>. Faheem Ashraf unleashed a flurry of boundaries that left the Kingsmen's captain, Marnus Labuschagne, scratching his head.
          </p>
          <p>
            Faheem hit two towering sixes that sent the United fans into a frenzy, while Chris Green added two clinical fours. The momentum had shifted entirely. What looked like a 30-run victory a few overs ago was now a mere formalities for the Islamabad side.
          </p>
          <p>
            When the dust settled on the 19th over, Islamabad United needed just <strong>6 runs from 6 balls</strong>. With two wickets in hand and Faheem Ashraf — a man who thrives in such situations — on strike, the Kingsmen's debut season appeared to be ending in heartbreak. The stadium roared with every name called; the atmosphere was favoring the red shirts of United.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,bowling,fast,pressure" alt="Hunain Shah Fast Bowling Under Pressure" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Choice: Labuschagne's Final Gamble</h2>
          <p>
            As the teams regrouped for the final over, Marnus Labuschagne had a difficult choice. Go with experience or go with the raw, untamed pace of a 22-year-old? He looked at Hunain Shah. Hunain, in his debut PSL season, had shown flashes of brilliance but also the inconsistency often associated with youth.
          </p>
          <p>
            Labuschagne tossed the ball to the youngster. "Just hit the marks," he reportedly said. Hunain nodded, his face a mask of focus amid the deafening roar of the Gaddafi crowd. He was being asked to defend 6 runs against a rampant United side with Faheem Ashraf on strike. The convention was clear: a single off each ball wins the game. A boundary off the first ball ends it immediately.
          </p>

          <h2>Ball by Ball: The Breakdown of Greatness</h2>
          <p>
            <strong>Ball 20.1:</strong> Hunain steamed in. There was no hesitation in his run-up. He opted for a high-pace yorker, angling it into the off-stump of Faheem Ashraf. Faheem, expecting something loose or a slower ball to clear the ropes, was late on the shot. The ball hissed past the outside edge and settled into Usman Khan's gloves. A collective gasp went through the stadium. <strong>6 needed off 5.</strong>
          </p>
          <p>
            <strong>Ball 20.2:</strong> Hunain didn't change the plan. Another full-length delivery, this time slightly straighter. Faheem Ashraf, feeling the mounting pressure of that first dot, went for a massive slog-sweep to finish the game in one go. He mistimed it. The ball soared high into the night sky, hanging there for what seemed like an eternity. <strong>Hassan Khan</strong> at long-off kept his eyes glued to the target. He held it cleanly. <strong>WICKET!</strong>
          </p>
          <p>
            The stadium erupted. Faheem Ashraf was gone for 19 off 11. The match had its first major plot twist of the over. <strong>6 needed off 4.</strong>
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,fielding,pakistan" alt="Cricket Fielding and Catch Celebration" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <p>
            <strong>Ball 20.3:</strong> Chris Green, the United captain, was now on strike. Hunain bowled a heavy, good-length delivery on the off stump. Green tried to tuck it away through mid-on for a quick single, but the fielder was up and alert. There was no run. <strong>6 needed off 3.</strong>
          </p>
          <p>
            <strong>Ball 20.4:</strong> A searing full-length ball on the stumps. Green finally made contact, drilling it toward long-on. The fielder sprinted in, cutting off the second run with a bullet throw. United settled for one. <strong>5 needed off 2 balls.</strong>
          </p>
          <p>
            <strong>Ball 20.5:</strong> Imad Wasim, one of the most experienced campaigners in world cricket, was on strike. Hunain kept it simple: full and fast. Imad attempted a cut to the point boundary, but the fielder dived to stop a certain four. They could only manage a single. <strong>4 needed off 1 ball.</strong>
          </p>
          <p>
            <strong>Ball 20.6:</strong> The final ball. United needed a four to tie, a six to win. Hunain bowled a beautiful inswinger, targeting the pads of Chris Green. Green swung across the line, missed, and the ball struck his pad. They scrambled for a leg bye, but the math was over. <strong>Final Result: HYK win by 2 runs!</strong> 
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,celebration,pakistan" alt="Cricket Celebration and Victory" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>Technical Analysis: The Physics of the Over</h2>
          <p>
            Hunain Shah didn't win this over through luck; he won it through **relentless execution of the yorker**. After the disaster of the 19th over, United expected the bowler to be defensive — perhaps bowling wide of off-stump or slow bouncers. Instead, Hunain attacked the stumps at over 145 clicks.
          </p>
          <p>
            By bowling "at the sticks" with high pace, he forced the batsmen to make the move. Under 6-run pressure, batsmen often try to be too clever. Faheem Ashraf tried to clear the long boundary when a chip over cover would have sufficed. Chris Green looked for the hero shot when rotating the strike was more important.
          </p>
          <p>
            The accuracy of Hunain's yorkers was professional-grade. To land three within a five-centimeter radius under the pressure of a PSL Eliminator speaks volumes of the work he has put in at the nets. While the 19th over was characterized by poor lengths, Hunain's over was a textbook lesson in death bowling.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,bowling,fast,night" alt="Cricket Powerhouse Bowling Night" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>Conclusion: The Dawn of a New Star</h2>
          <p>
            Cricket is a sport of moments. For Hunain Shah, May 1, 2026, will always be that night. The night he was handed the ball with 6 needed off 6. He did not panic. He did not deviate. He just bowled — fast, full, straight — and let the yorker do the talking.
          </p>
          <p>
            Hyderabad Kingsmen, the debutants who started the season with four straight losses, are now headed to the PSL Final. The fairy tale continues, and it was written in 6 balls by a 22-year-old from Pakistan. They will face Peshawar Zalmi in what promises to be an electric final.
          </p>
          <p>
            This over has transformed Hunain from a "promising youngster" to a household name. In a league that prides itself on discovering fast-bowling talent, Hunain Shah is the latest jewel in the PSL crown.
          </p>

          <h2>Beyond the Over: The Kingsmen's Miracle Run</h2>
          <p>
            The significance of this victory goes far beyond just one over. Hyderabad Kingsmen’s journey to the PSL 2026 Final is one for the history books. At the beginning of the tournament, the Kingsmen were written off by almost every analyst. They started the season with <strong>four consecutive losses</strong>, languishing at the bottom of the table with a net run rate that seemed impossible to recover from.
          </p>
          <p>
            But the Kingsmen found a way. Led by the tactical brilliance of Marnus Labuschagne and the explosive performances of players like Usman Khan and Maaz Sadaqat, they orchestrated a comeback that defined the "Never Say Die" spirit of Pakistan cricket. This final is not just a game for them; it’s the culmination of a journey from being the ultimate underdogs to becoming genuine title contenders.
          </p>

          <div className="my-20 p-12 bg-gradient-to-br from-yellow-500/20 via-transparent to-pak-green/10 border border-yellow-500/20 rounded-[64px] text-center not-prose overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1),transparent)]" />
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-8 animate-bounce" />
            <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-4 italic italic leading-none">PSL 2026 FINAL</h3>
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold uppercase tracking-tight mb-8">
              <span className="text-white">Hyderabad Kingsmen</span>
              <span className="text-white/20 font-black italic">VS</span>
              <span className="text-yellow-500">Peshawar Zalmi</span>
            </div>
            <p className="text-[12px] font-black text-white/40 uppercase tracking-[0.5em] mb-12">3 May 2026 · Gaddafi Stadium Lahore</p>
            <Link to="/schedule" className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-yellow-500/30">
              View Tournament Schedule <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

        </div>
      </div>

      {/* Sharing & Navigation Footer */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/blogs" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Analysis Library
          </Link>
          <div className="flex gap-4">
             <Link to="/blogs/psl-2026-eliminator-2-hyderabad-kingsmen-match-report" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                Full Match Report <ExternalLink className="w-4 h-4 text-yellow-500" />
             </Link>
          </div>
        </div>

        <div className="mt-24">
           <AuthorSection authorId={authorId} />
        </div>

        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Who bowled the last over for HYK in Eliminator 2?", a: "22-year-old Hunain Shah bowled the final over, defending 6 runs." },
             { q: "What was the result of the last over?", a: "Hunain Shah conceded only 3 runs and took the crucial wicket of Faheem Ashraf, winning the match for HYK by 2 runs." },
             { q: "When is the PSL 2026 Final?", a: "The Final is scheduled for May 3, 2026, at Gaddafi Stadium Lahore between Peshawar Zalmi and Hyderabad Kingsmen." }
           ]} />
        </div>
      </div>
    </div>
  );
}
