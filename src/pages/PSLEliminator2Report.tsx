import { Calendar, Clock, ArrowLeft, Trophy, BarChart3, Zap, Shield, Target, TrendingUp, Newspaper, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSLEliminator2Report() {
  const blogTitle = "PSL 2026 Eliminator 2: Hyderabad Kingsmen Set 187-Run Target Against Islamabad United";
  const publishDate = "May 1, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Hyderabad Kingsmen post 186/5 in PSL 2026 Eliminator 2. Usman Khan shines again with 61 off 30. Full innings breakdown, key moments, and match analysis." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-24 bg-gradient-to-br from-[#050806] via-[#0a1f14] to-black border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pak-green/10 blur-[120px] rotate-12 translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black tracking-widest uppercase border border-pak-green/20 mb-8"
          >
            <Zap className="w-4 h-4" />
            Live Match Update • Eliminator 2
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-7xl font-display font-black leading-[1.1] mb-10 max-w-5xl"
          >
            {blogTitle}
          </motion.h1>
          
          <div className="flex flex-wrap items-center gap-10">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 p-1 text-pak-green flex items-center justify-center font-black italic">
                   ZR
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-white/40 tracking-widest leading-none mb-1">Written By</p>
                  <p className="text-sm font-bold text-white uppercase italic">Zainab Rashid</p>
                </div>
             </div>
             <div className="h-10 w-px bg-white/10 hidden md:block" />
             <div className="flex items-center gap-8 text-white/50 text-[11px] font-bold uppercase tracking-[0.2em]">
               <span className="flex items-center gap-2.5"><Calendar className="w-4 h-4 text-pak-green" /> {publishDate}</span>
               <span className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-pak-green" /> 10 Min Read</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-8">
          <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/80 prose-strong:text-pak-green prose-h2:text-4xl prose-h2:font-display prose-h2:font-black prose-h2:italic prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:font-display prose-h3:font-black prose-h3:text-white/90">
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90 border-l-4 border-pak-green pl-8 mb-12">
              In a high-pressure Eliminator 2 clash of PSL 11, Hyderabad Kingsmen delivered yet another statement performance, setting a commanding 187-run target for Islamabad United.
            </p>

            <h2>🔥 Kingsmen Charge into the Spotlight</h2>
            <p>
              After being asked to bat first by Islamabad United, the tournament’s debut side showed no signs of nerves. Instead, they played fearless cricket, setting up a challenging 187-run target with a place in the final at stake.
            </p>
            <p>
              Stay updated with the <Link to="/schedule" className="text-pak-green hover:underline">PSL 2026 Schedule</Link> to never miss any live action.
            </p>

            <div className="my-12 overflow-hidden border border-white/10 rounded-[32px] bg-white/5 not-prose">
              <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
                 <Target className="w-5 h-5 text-pak-green" />
                 <h3 className="text-xl font-display font-black m-0 uppercase tracking-tighter">Match Summary at a Glance</h3>
              </div>
              <table className="w-full text-sm font-bold text-left m-0">
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px] w-1/3">Hyderabad Kingsmen</td>
                    <td className="px-6 py-4 text-pak-green font-black">186/5 (20 overs)</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Top Performer</td>
                    <td className="px-6 py-4 text-white font-black">Usman Khan – 61 (30)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Top Bowler</td>
                    <td className="px-6 py-4 text-rose-400 font-black">Imad Wasim – 2/16</td>
                  </tr>
                  <tr className="bg-pak-green/20">
                    <td className="px-6 py-4 text-pak-green font-black uppercase tracking-widest text-[10px]">Target</td>
                    <td className="px-6 py-4 text-white font-black italic">187 Runs for Islamabad United</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>🚀 The Momentum Shift: Powerplay to Middle Overs</h2>
            <p>
              Hyderabad Kingsmen started aggressively but faced early setbacks with quick wickets in the powerplay. However, what followed was a calculated and explosive recovery that left the Islamabad bowlers searching for answers.
            </p>

            <h2>💥 The Usman Khan Show Continues</h2>
            <p>
              Once again, Usman Khan proved why he is one of the most dangerous batters in PSL 2026. He completely dismantled Islamabad’s pace attack during the middle overs, shifting the momentum firmly in Hyderabad’s favor.
            </p>
            <ul>
              <li><strong>61 runs</strong> off just 30 balls</li>
              <li>Strike rate above <strong>200</strong></li>
              <li><strong>10 boundaries</strong> (fours + sixes)</li>
            </ul>
            <p>
              Check out his place among the <Link to="/top-5-players-with-most-centuries-in-psl-history-2026" className="text-pak-green hover:underline">Top PSL Century Scorers</Link>.
            </p>

            <h2>🧱 The Perfect Foundation</h2>
            <p>
              While Usman played aggressively, the supporting cast ensured stability:
            </p>
            <ul>
              <li><strong>Marnus Labuschagne (C):</strong> 39 (32) – Anchored the innings with precision.</li>
              <li><strong>Saim Ayub:</strong> 38 (27) – Maintained run rate with smart strokeplay.</li>
            </ul>

            <h2>🔥 Late Overs Acceleration</h2>
            <p>
              As the innings progressed, Kusal Perera added the finishing touch with a quickfire 37 runs off 21 balls. His cameo pushed the total beyond the 180-mark, which is considered a strong score at Lahore.
            </p>

            <h2>🎯 Islamabad United’s Bowling Analysis</h2>
            <p>
              Islamabad United’s bowling unit struggled to contain the flow of runs despite a few bright spots.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
              <div className="bg-pak-green/5 border border-pak-green/20 rounded-3xl p-8">
                <h4 className="text-pak-green font-display font-black uppercase italic mb-4">✅ What Worked</h4>
                <ul className="space-y-2 text-sm font-bold text-white/70">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> Imad Wasim: 2/16 (2 overs)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> Chris Green: 1/19 (3 overs)</li>
                </ul>
              </div>
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-3xl p-8">
                <h4 className="text-rose-400 font-display font-black uppercase italic mb-4">❌ What Went Wrong</h4>
                <ul className="space-y-2 text-sm font-bold text-white/70">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Pace attack leaked runs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Faheem Ashraf: 43 conceded</li>
                </ul>
              </div>
            </div>
            <p>
              See how this match impacts the <Link to="/psl-2026-points-table-standings" className="text-pak-green hover:underline">PSL 2026 Points Table</Link>.
            </p>

            <h2>🤔 What’s at Stake?</h2>
            <p>
              With 187 runs required, Islamabad United now faces a serious challenge. Can their deep batting lineup handle the pressure? Can Shadab Khan lead his team into another final? We are just one innings away from knowing who faces Peshawar Zalmi in the Final.
            </p>
            <p>
              Read our full <Link to="/blogs/psl-2026-eliminator-2-preview-islamabad-vs-hyderabad" className="text-pak-green hover:underline">PSL 2026 Playoffs Guide</Link>.
            </p>

            <div className="flex flex-wrap gap-4 mt-20 not-prose">
              <Link to="/blogs" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ArrowLeft className="w-4 h-4" /> All Cricket News
              </Link>
              <a href="https://psl-t20.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-pak-green hover:border-pak-green transition-all group">
                <ExternalLink className="w-4 h-4 text-pak-green group-hover:text-white" /> Official Scorecard
              </a>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-12">
           <div className="sticky top-24 space-y-12">
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px] shadow-2xl">
                 <div className="flex items-center gap-2 mb-8">
                   <BarChart3 className="w-5 h-5 text-pak-green" />
                   <h4 className="text-xl font-display font-black uppercase italic tracking-tighter">Innings Stats</h4>
                 </div>
                 <div className="space-y-6">
                    {[
                      { label: 'Total Runs', val: '186/5' },
                      { label: 'Run Rate', val: '9.30' },
                      { label: 'Fours', val: '18' },
                      { label: 'Sixes', val: '7' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                         <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                         <p className="text-lg font-display font-black text-white">{item.val}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-gradient-to-br from-pak-green to-emerald-950 p-10 rounded-[48px] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                 <h5 className="text-[10px] font-black uppercase tracking-[4px] text-white/50 mb-4">Chase Underway</h5>
                 <h4 className="text-3xl font-display font-black text-white leading-tight mb-8">Can United Chase 187?</h4>
                 <Link to="/schedule" className="block w-full py-4 bg-white text-black text-center text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-black hover:text-white transition-colors">
                    Watch Highlights
                 </Link>
              </div>

              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px]">
                 <h4 className="text-lg font-display font-black uppercase italic mb-6">Internal Guides</h4>
                 <div className="space-y-4">
                    <Link to="/psl-11-top-run-scorers-2026" className="flex items-center gap-3 text-xs font-bold text-white/60 hover:text-pak-green transition-colors">
                       <ChevronRight className="w-4 h-4 text-pak-green" />
                       Orange Cap Holders
                    </Link>
                    <Link to="/psl-11-top-wicket-takers-2026" className="flex items-center gap-3 text-xs font-bold text-white/60 hover:text-pak-green transition-colors">
                       <ChevronRight className="w-4 h-4 text-pak-green" />
                       Maroon Cap Race
                    </Link>
                 </div>
              </div>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32 border-t border-white/10 pt-20">
        <AuthorSection authorId={authorId} />
        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "What was Usman Khan's score?", a: "Usman Khan scored 61 runs off 30 balls." },
             { q: "What is the target for Islamabad United?", a: "Islamabad United needs 187 runs to win in 20 overs." },
             { q: "Who was the most economical bowler for United?", a: "Imad Wasim was the most economical, taking 2/16 in 2 overs." }
           ]} />
        </div>
      </div>
    </div>
  );
}
