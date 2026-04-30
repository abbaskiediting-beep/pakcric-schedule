import { Calendar, Clock, ArrowLeft, Share2, Trophy, BarChart3, Zap, Shield, Swords, Target, TrendingUp, Info, Newspaper, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSLEliminator1Report() {
  const blogTitle = "PSL 2026 Eliminator 1 Match Report: Hyderabad Kingsmen Knock Out Multan Sultans by 8 Wickets";
  const publishDate = "April 30, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Hyderabad Kingsmen crushed Multan Sultans by 8 wickets in PSL 2026 Eliminator 1 at Gaddafi Stadium Lahore on April 29. Usman Khan 64 off 35 and Maaz Sadaqat 64* off 32 powered the chase." />
      </Helmet>

      {/* Extreme Hero Header */}
      <div className="relative py-24 bg-gradient-to-br from-[#050806] via-emerald-950 to-black border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pak-green/10 blur-[120px] -rotate-12 translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black tracking-widest uppercase border border-pak-green/20 mb-8"
          >
            <Trophy className="w-4 h-4" />
            Tournament Debutants Reach Eliminator 2
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
               <span className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-pak-green" /> 15 Min Read</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/80 prose-strong:text-pak-green prose-h2:text-4xl prose-h2:font-display prose-h2:font-black prose-h2:italic prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:font-display prose-h3:font-black prose-h3:text-white/90">
            
            {/* Result Snapshot Table */}
            <div className="my-12 overflow-hidden border border-white/10 rounded-[32px] bg-white/5">
              <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
                 <Target className="w-5 h-5 text-pak-green" />
                 <h3 className="text-xl font-display font-black m-0 uppercase tracking-tighter">Result at a Glance</h3>
              </div>
              <div className="p-0">
                <table className="w-full text-sm font-bold text-left m-0">
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px] w-1/3">Match</td>
                      <td className="px-6 py-4 text-white font-black">PSL 11 — Eliminator 1</td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Venue</td>
                      <td className="px-6 py-4 text-white font-black">Gaddafi Stadium, Lahore</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Multan Sultans</td>
                      <td className="px-6 py-4 text-rose-400 font-black">159/9 (20 Overs)</td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Hyderabad Kinsmen</td>
                      <td className="px-6 py-4 text-pak-green font-black">162/2 (15.2 Overs)</td>
                    </tr>
                    <tr className="bg-pak-green/20">
                      <td className="px-6 py-4 text-pak-green font-black uppercase tracking-widest text-[10px]">Result</td>
                      <td className="px-6 py-4 text-white font-black italic">Hyderabad won by 8 wickets (28 balls remaining)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Player of the Match</td>
                      <td className="px-6 py-4 text-yellow-500 font-black italic underline">Maaz Sadaqat — 64* off 32 balls</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-white/5 border-t border-white/10 flex justify-center">
                <a 
                  href="https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/hyderabad-kingsmen-vs-multan-sultans-eliminator-1-1527593/full-scorecard" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:text-white transition-colors group"
                >
                  <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  Official full scorecard on ESPNcricinfo
                </a>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90 border-l-4 border-pak-green pl-8 mb-12">
              Nobody gave Hyderabad Kingsmen much of a chance when PSL 2026 started. A brand-new franchise, playing their very first season, with no history, no winning culture, and no playoff experience — they lost their opening four matches and sat at the bottom of the table. Many wrote them off before April had even begun.
            </p>

            <h2>Introduction: The Debutants Eliminate the Champions</h2>
            <p>
              On the night of April 29, 2026, at Gaddafi Stadium Lahore, Hyderabad Kingsmen delivered one of the most dominant knockout performances in recent PSL history. They bowled Multan Sultans — the experienced, two-time champions — out for just <strong>159/9</strong>, then knocked off the target in a breathtaking <strong>15.2 overs with 8 wickets to spare</strong>.
            </p>
            <p>
              Multan Sultans, who started the season as title favourites, were officially eliminated. The fairy tale continued for the Kingsmen.
            </p>

            <h2>First Innings: Multan Sultans Batting — 159/9 (20 Overs)</h2>
            <p>
              Hyderabad Kingsmen won the toss and did not hesitate — they chose to field first. On a flat Gaddafi Stadium surface with a dewy evening ahead, bowling first was the obvious call.
            </p>

            <h3>Powerplay (Overs 1–6): Catastrophe at the Top</h3>
            <p>
              The Kingsmen pace trio of Mohammad Ali, Akif Javed and Hunain Shah came out firing. The collapse was swift and brutal: Sahibzada Farhan was dismissed early, and Mohammad Ali caught the edge of Steven Smith's bat to draw first blood. By the end of the powerplay, Multan were at 50 runs but had already lost key weapons.
            </p>

            <h3>Middle Overs (Overs 7–15): The Collapse Deepens</h3>
            <p>
               Multan hit the strategic timeout at <strong>92/6 in 13 overs</strong>, staring at a score below 130 unless something extraordinary happened. Even captain Ashton Turner could not survive the relentless pressure from Saim Ayub and Glenn Maxwell.
            </p>

            <h3>Death Overs: Masood's Lone Masterclass</h3>
            <p>
              What followed was a defiant solo act. <strong>Shan Masood</strong>, batting at number four, refused to surrender. He brought up his fifty off 36 balls and finished unbeaten on 69 off 46. It was Multan's lowest total of the season, and as it turned out, it was far from enough.
            </p>

            {/* Scorecard Inserts */}
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
               <div className="bg-[#0a110d] border border-white/10 rounded-[32px] p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-display font-black uppercase italic">Top Batters (MS)</h4>
                    <Shield className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="font-bold text-white/80">Shan Masood</span>
                      <span className="font-display font-black text-rose-500">69* (46)</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="font-bold text-white/40">Mohammad Nawaz</span>
                      <span className="font-bold text-white/60">18 (19)</span>
                    </div>
                  </div>
               </div>
               <div className="bg-[#0a110d] border border-white/10 rounded-[32px] p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-display font-black uppercase italic">Top Bowlers (HYK)</h4>
                    <Target className="w-5 h-5 text-pak-green" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="font-bold text-white/80">Akif Javed</span>
                      <span className="font-display font-black text-pak-green">2/30 (4)</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="font-bold text-white/80">Hunain Shah</span>
                      <span className="font-display font-black text-pak-green">2/31 (4)</span>
                    </div>
                  </div>
               </div>
            </div>

            <h2>Second Innings: Hyderabad Kingsmen Chase — 162/2 (15.2 Overs)</h2>
            <p>
              Chasing 160, the Kingsmen came out with total authority. Despite losing captain Marnus Labuschagne early for 11, the contest was soon put to bed by a devastating partnership.
            </p>

            <h3>The Usman Khan Show: 64 off 35 Balls</h3>
            <p>
              Usman Khan immediately made the chase irrelevant. He reached his fifty in 29 balls, helped by a 19-run over off Mohammad Nawaz. He eventualy fell for 64 off 35 balls, but the match was already over as a contest.
            </p>

            <h3>Maaz Sadaqat: Player Of The Match</h3>
            <p>
              If Usman was the catalyst, <strong>Maaz Sadaqat</strong> was the clinical finisher. The 20-year-old left-hander finished <strong>64* off 32 balls</strong> with 6 fours and 2 sixes. He drove Faisal Akram to the boundary to seal a historic 8-wicket win with nearly 5 overs to spare.
            </p>

            {/* Internal Links Block */}
            <div className="my-16 p-10 bg-pak-green/5 border border-pak-green/20 rounded-[40px] not-prose">
               <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-5 h-5 text-pak-green" />
                  <h4 className="text-lg font-display font-black uppercase tracking-tight">Further Intelligence & Analysis</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <Link to="/babar-azam-latest-century-psl-2026" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Babar Azam 103 in PSL 2026 Qualifier
                  </Link>
                  <Link to="/psl-2026-qualifier-1-peshawar-vs-islamabad" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    PSL 2026 Qualifier 1 Match Report
                  </Link>
                  <Link to="/top-5-psl-century-scorers" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Top 5 most centuries in PSL history
                  </Link>
                  <Link to="/psl-2026-points-table-standings" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    PSL 11 Points Table & Standings
                  </Link>
               </div>
            </div>

            <h2>What This Result Means</h2>
            <p>
              <strong>For Hyderabad Kingsmen:</strong> They advance to <Link to="/schedule" className="text-pak-green hover:underline decoration-pak-green underline-offset-4">Eliminator 2</Link> on May 1st to face Islamabad United. The winner goes to the Final against Peshawar Zalmi. Coach Jason Gillespie has turned a 0-4 start into a championship charge.
            </p>
            <p>
              <strong>For Multan Sultans:</strong> Their campaign ends in heartbreak. Despite Shan Masood's heroic 69*, the lack of support from the top-order stars ultimately cost them their chance at a third title.
            </p>

            <div className="flex flex-wrap gap-4 mt-20 not-prose">
              <a href="https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/hyderabad-kingsmen-vs-multan-sultans-eliminator-1-1527593/full-scorecard" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-pak-green hover:border-pak-green transition-all group">
                <ExternalLink className="w-4 h-4 text-pak-green group-hover:text-white" /> Full Scorecard (ESPNcricinfo)
              </a>
              <a href="https://psl-t20.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> Official PSL Site
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           <div className="sticky top-24 space-y-12">
              {/* Player Ratings Column */}
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px] shadow-2xl">
                 <div className="flex items-center gap-2 mb-8">
                   <Newspaper className="w-5 h-5 text-pak-green" />
                   <h4 className="text-xl font-display font-black uppercase italic tracking-tighter">Player Ratings</h4>
                 </div>
                 <div className="space-y-6">
                    {[
                      { name: 'Maaz Sadaqat', rating: '9.8', context: 'Match Winner', team: 'HYK' },
                      { name: 'Shan Masood', rating: '9.2', context: 'Lone Warrior', team: 'MS' },
                      { name: 'Usman Khan', rating: '8.5', context: 'Chase Catalyst', team: 'HYK' },
                      { name: 'Akif Javed', rating: '8.2', context: 'Pace Spearhead', team: 'HYK' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/[0.03] rounded-2xl border border-white/5 group hover:border-pak-green/30 transition-all">
                         <div>
                            <p className="text-xs font-black text-white/90 group-hover:text-pak-green transition-colors">{item.name}</p>
                            <p className="text-[8px] font-black text-white/30 uppercase tracking-[2px] mt-1">{item.team} • {item.context}</p>
                         </div>
                         <div className="text-xl font-display font-black text-pak-green">{item.rating}</div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Next Fixture Ad */}
              <div className="bg-gradient-to-br from-pak-green to-emerald-950 p-10 rounded-[48px] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                 <h5 className="text-[10px] font-black uppercase tracking-[4px] text-white/50 mb-4">Eliminator 2</h5>
                 <h4 className="text-3xl font-display font-black text-white leading-tight mb-8">Islamabad United vs Kingsmen</h4>
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                       <Calendar className="w-4 h-4 text-white/40" />
                       <span className="text-xs font-bold text-white/70 uppercase tracking-widest">May 01, 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Shield className="w-4 h-4 text-white/40" />
                       <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Gaddafi, Lahore</span>
                    </div>
                 </div>
                 <Link to="/schedule" className="block w-full py-4 bg-white text-black text-center text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-black hover:text-white transition-colors">
                    View Full Schedule
                 </Link>
              </div>

              {/* Quick Summary Stats */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-[40px]">
                 <h4 className="text-lg font-display font-black uppercase italic mb-6">Key Stats</h4>
                 <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl">
                       <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Winning Margin</p>
                       <p className="text-lg font-display font-black text-pak-green">8 WICKETS / 28 BALLS</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl">
                       <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Usman Khan Strike Rate</p>
                       <p className="text-lg font-display font-black text-white">182.85</p>
                    </div>
                 </div>
              </div>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32 border-t border-white/10 pt-20">
        <AuthorSection authorId={authorId} />
        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Who won Man of the Match?", a: "Maaz Sadaqat won the award for his 64* off 32 balls." },
             { q: "What was Multan's final score?", a: "Multan Sultans finished on 159/9 in their 20 overs." },
             { q: "Where can I watch the highlights?", a: "Official highlights are available on the PSL T20 website." }
           ]} />
        </div>
      </div>
    </div>
  );
}
