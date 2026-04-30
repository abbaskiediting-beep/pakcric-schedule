import { Calendar, Clock, ArrowLeft, Trophy, BarChart3, Zap, Shield, Swords, Target, TrendingUp, Info, Newspaper, ExternalLink, ChevronRight, User, Star, Activity, UserPlus, History, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function UsmanKhanSeasonReview() {
  const blogTitle = "Usman Khan PSL 2026 Season Review: History Maker, Record Breaker, Pakistan's Most Explosive Batter";
  const publishDate = "April 30, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Usman Khan's PSL 2026 season with Hyderabad Kingsmen was historic — he became the first batter ever to score 4 PSL centuries, and powered Kingsmen to playoffs." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative py-20 bg-[#050c08] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pak-green/5 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green text-[10px] font-black uppercase tracking-widest mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-pak-green uppercase tracking-widest mb-6"
          >
            <History className="w-3.5 h-3.5" />
            Season Review • PSL 11
          </motion.div>
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
          <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/70 prose-strong:text-pak-green prose-h2:text-3xl prose-h2:font-display prose-h2:font-black prose-h2:uppercase prose-h2:italic prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-2xl prose-h3:font-display prose-h3:font-black prose-h3:text-white/90">
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white/90 border-l-4 border-pak-green pl-8 mb-12">
              On the night of April 22, 2026, Usman Khan walked out to bat at number five — and rewrote the record books of Pakistan Super League history forever.
            </p>

            <h2>Introduction: The Man Who Rewrote PSL History in 2026</h2>
            <p>
              Hyderabad Kingsmen were reeling at 48/3 in the fifth over, chasing 214. Usman Khan made the most of a rare opportunity with belligerent hitting and ended up top-scoring with 101 off just 47 deliveries, studded with 10 sixes and five fours — becoming the first batter in the history of the PSL to score four centuries.
            </p>

            <div className="my-10 p-8 bg-white/5 border border-white/10 rounded-3xl not-prose">
               <h3 className="text-xl font-display font-black uppercase text-pak-green m-0 mb-6 flex items-center gap-3">
                  <UserPlus className="w-6 h-6" /> Profile & Stats
               </h3>
               <div className="grid grid-cols-2 gap-y-4">
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Age (2026)</div>
                  <div className="text-sm font-bold">30 years</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Batting Style</div>
                  <div className="text-sm font-bold">Right-handed (Power)</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Total Runs (PSL 11)</div>
                  <div className="text-sm font-bold text-pak-green uppercase">380+ (SR: 152.38)</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">PSL Record</div>
                  <div className="text-sm font-bold italic text-yellow-500">First to 4 centuries</div>
               </div>
            </div>

            <h2>From Karachi Streets to Pakistan Jersey</h2>
            <p>
              Usman Khan's story is one of the most dramatic in Pakistan cricket. Born in Karachi, he relocated to Ajman (UAE) in 2020 to work in a gas distribution company while playing domestic cricket. After a record-breaking PSL 2023, he chose to represent Pakistan over UAE residency qualifications.
            </p>

            {/* All PSL Centuries Table */}
            <div className="my-12 overflow-hidden border border-white/10 rounded-3xl bg-white/5 not-prose">
              <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
                 <Award className="w-5 h-5 text-pak-green" />
                 <h3 className="text-xl font-display font-black m-0 uppercase tracking-tighter">All 4 PSL Centuries Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-bold text-left m-0 min-w-[500px]">
                  <thead className="bg-black/20 text-[10px] uppercase tracking-widest text-white/40">
                    <tr>
                      <th className="px-6 py-3">#</th>
                      <th className="px-6 py-3">Score</th>
                      <th className="px-6 py-3">Balls</th>
                      <th className="px-6 py-3">SR</th>
                      <th className="px-6 py-3">Opposition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">120</td>
                      <td className="px-6 py-4">36</td>
                      <td className="px-6 py-4">333</td>
                      <td className="px-6 py-4">Quetta Gladiators</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">106*</td>
                      <td className="px-6 py-4">54</td>
                      <td className="px-6 py-4">196</td>
                      <td className="px-6 py-4">Karachi Kings</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">100*</td>
                      <td className="px-6 py-4">50</td>
                      <td className="px-6 py-4">200</td>
                      <td className="px-6 py-4">Islamabad United</td>
                    </tr>
                    <tr className="bg-pak-green/20">
                      <td className="px-6 py-4 text-pak-green">4</td>
                      <td className="px-6 py-4 font-black">101</td>
                      <td className="px-6 py-4">47</td>
                      <td className="px-6 py-4 font-black text-pak-green">215</td>
                      <td className="px-6 py-4 font-black">Multan Sultans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>🌟 Match 33 vs Multan — THE RECORD BREAKER</h2>
            <p>
              Usman Khan entered history during Match 33. Chasing 214, he hammered 10 sixes in his outing — joint second-most in a PSL individual innings. He completed his half-century off 24 balls and his century off just 47. 
            </p>
            <p>
              More remarkably, this was his 4th PSL century in just 33 innings — the most efficient rate of scoring hundreds in the league's history.
            </p>

            <h2>Eliminator 1 Impact</h2>
            <p>
              In the knockout, he reached his fifty in just 29 balls against Multan again. His 100-run stand with Maaz Sadaqat (64*) off 52 balls turned the chase into a formality. He tore into Mohammad Nawaz, walloping 19 runs in a single over to seal the momentum.
            </p>

            <div className="my-10 p-8 bg-pak-green/5 border border-pak-green/20 rounded-3xl group">
               <h4 className="text-lg font-display font-black uppercase text-white m-0 mb-4">Technical Analysis</h4>
               <p className="text-sm italic text-white/60 m-0 leading-relaxed">
                What makes Usman unique is his ability to manufacture width against pace and his "murderous" intent in the powerplay. He doesn't just hit power shots; he dismantles bowlers' confidence by hitting perfect lengths for sixes over extra cover.
               </p>
            </div>

            <h2>The Dropout and the Comeback</h2>
            <p>
               After being dropped from Pakistan's central contract, many said his career was over. Usman took responsibility: "Pakistan had given me enough chances, it was my fault." This season was personal redemption, especially his dominance over the <Link to="/multan-sultans-psl-2026-full-season-journey-review" className="text-pak-green hover:underline">Multan Sultans</Link>.
            </p>

            {/* Internal Links Block */}
            <div className="my-16 p-10 bg-white/5 border border-white/10 rounded-[40px] not-prose">
               <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-5 h-5 text-pak-green" />
                  <h4 className="text-lg font-display font-black uppercase tracking-tight">Relive the Action</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <Link to="/psl-2026-eliminator-1-full-match-report-analysis" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Eliminator 1 Report
                  </Link>
                  <Link to="/maaz-sadaqat-psl-2026-season-review-stats" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Maaz Sadaqat Season Review
                  </Link>
                  <Link to="/hyderabad-kingsmen-psl-2026-season-review" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Kingsmen Season Overview
                  </Link>
                  <Link to="/multan-sultans-psl-2026-full-season-journey-review" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Multan Sultans Season Review
                  </Link>
               </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-20 not-prose">
              <a href="https://www.espncricinfo.com/cricketers/usman-khan-1123428" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all group">
                <ExternalLink className="w-4 h-4 text-pak-green group-hover:scale-110 transition-transform" /> Usman Khan ESPNcricinfo Profile
              </a>
              <a href="https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/hyderabad-kingsmen-vs-multan-sultans-33rd-match-1527584/match-report" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> Match 33 Official Report
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           <div className="sticky top-24 space-y-12">
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px]">
                 <div className="flex items-center gap-2 mb-8">
                   <Target className="w-5 h-5 text-pak-green" />
                   <h4 className="text-xl font-display font-black uppercase italic tracking-tighter">Season Highlights</h4>
                 </div>
                 <div className="space-y-6">
                    {[
                      { label: 'Most Sixes', val: '10 in Match 33' },
                      { label: 'Fastest 100', val: '47 Balls' },
                      { label: 'New Record', val: '4 PSL Centuries' },
                      { label: 'Impact Score', val: '9.8/10' },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                         <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                         <p className="text-lg font-display font-black text-white">{item.val}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 rounded-[40px] group transition-all hover:border-pak-green">
                 <div className="flex items-center gap-3 mb-4">
                    <Star className="w-5 h-5 text-pak-green" />
                    <span className="text-[10px] font-black text-pak-green uppercase tracking-[2px]">World Record Alert</span>
                 </div>
                 <h5 className="text-xl font-display font-black uppercase italic mb-4">4 Hundreds in 33 Innings</h5>
                 <p className="text-sm font-bold text-white/60 italic leading-relaxed">
                   The most efficient century-scoring rate in T20 franchise history.
                 </p>
              </div>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32 border-t border-white/10 pt-20">
        <AuthorSection authorId={authorId} />
        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Usman Khan ne PSL mein kitni centuries banayi hain?", a: "Usman Khan ne total 4 centuries banayi hain, jo aik PSL record hai." },
             { q: "Match 33 mein unka kya score tha?", a: "Unhon ne Multan ke khilaf 47 balls par 101 maare thay." },
             { q: "Kya woh wicket-keeper bhi hain?", a: "Ji haan, Usman Khan aik natural wicket-keeper batter hain." }
           ]} />
        </div>
      </div>
    </div>
  );
}
