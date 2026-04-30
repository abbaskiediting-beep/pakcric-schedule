import { Calendar, Clock, ArrowLeft, Trophy, BarChart3, Zap, Shield, Swords, Target, TrendingUp, Info, Newspaper, ExternalLink, ChevronRight, User, Star, Activity, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function MaazSadaqatSeasonReview() {
  const blogTitle = "Maaz Sadaqat PSL 2026 Season Review: Pakistan's Most Exciting 20-Year-Old Takes the League by Storm";
  const publishDate = "April 30, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Maaz Sadaqat's PSL 2026 with Hyderabad Kingsmen was nothing short of spectacular — 62 off 26 balls, 19-ball fifty, 64* in the Eliminator, Player of the Match." />
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
            <Star className="w-3.5 h-3.5" />
            Rising Star • PSL 11
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
              When most casual cricket fans had not heard of Maaz Sadaqat, he was just a 20-year-old from Peshawar. By the end of PSL 2026, he became the heartbeat of Pakistan's newest franchise.
            </p>

            <h2>Introduction: A 20-Year-Old Who Took PSL 2026 By the Scruff of the Neck</h2>
            <p>
              Maaz Sadaqat, signed by the brand-new Hyderabad Kingsmen franchise, entered PSL 11 as a debutant with little spotlight. However, his explosive, fearless batting at the top of the order quickly turned heads. He has smashed one of the fastest fifties in PSL history and earned a match-winning 64* in an Eliminator knockout.
            </p>

            <div className="my-10 p-8 bg-white/5 border border-white/10 rounded-3xl not-prose">
               <h3 className="text-xl font-display font-black uppercase text-pak-green m-0 mb-6 flex items-center gap-3">
                  <UserPlus className="w-6 h-6" /> Profile & Background
               </h3>
               <div className="grid grid-cols-2 gap-y-4">
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Birthplace</div>
                  <div className="text-sm font-bold">Peshawar, KPK</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Batting Style</div>
                  <div className="text-sm font-bold">Left-handed</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">PSL Team</div>
                  <div className="text-sm font-bold text-pak-green uppercase">Hyderabad Kingsmen</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Brother</div>
                  <div className="text-sm font-bold italic">Haroon Sadaqat</div>
               </div>
            </div>

            <h2>The Road to PSL 2026: A Rapid Rise</h2>
            <p>
              Maaz Sadaqat's rise was built on consistent domestic performances. He made his first-class debut in 2022 and emerged as a top-five run-scorer in the 2024 Champions T20 Cup. At the 2025 Asia Cup Rising Stars tournament, he was the highest scorer and declared <strong>Player of the Series</strong>.
            </p>

            {/* Season Stats Table */}
            <div className="my-12 overflow-hidden border border-white/10 rounded-3xl bg-white/5 not-prose">
              <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
                 <BarChart3 className="w-5 h-5 text-pak-green" />
                 <h3 className="text-xl font-display font-black m-0 uppercase tracking-tighter">PSL 2026 Stats at a Glance</h3>
              </div>
              <table className="w-full text-sm font-bold text-left m-0">
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px] w-1/2">Total Runs</td>
                    <td className="px-6 py-4 text-white font-black italic">380+</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Highest Score</td>
                    <td className="px-6 py-4 text-pak-green font-black">64* (Eliminator)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Strike Rate</td>
                    <td className="px-6 py-4 text-white font-black">~165+</td>
                  </tr>
                  <tr className="bg-pak-green/20">
                    <td className="px-6 py-4 text-pak-green font-black uppercase tracking-widest text-[10px]">Fastest Fifty</td>
                    <td className="px-6 py-4 text-white font-black">19 Balls (Joint Record)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>🌟 Match 8 vs Multan Sultans — THE BREAKTHROUGH</h2>
            <p>
              This was the innings that introduced Maaz to the world. He scored a brilliant <strong>62 off just 26 balls</strong>, reaching his half-century in just 19 balls — putting him level with Sam Billings and Luke Ronchi for the fastest PSL fifty.
            </p>

            <h2>🏆 ELIMINATOR 1 — THE MATCH-WINNING MASTERCLASS</h2>
            <p>
               Multan had posted 159/9. Chasing 160, Hyderabad lost captain Labuschagne cheaply. Then Maaz and Usman Khan took over. The second-wicket stand of 100 runs came in just 52 balls.
            </p>
            <p>
               Maaz finished with <strong>64* off 33 balls</strong> with 3 fours and 3 sixes. He was rightfully awarded the <strong>Player of the Match</strong>.
            </p>

            <div className="my-10 p-8 bg-pak-green/5 border border-pak-green/20 rounded-3xl">
               <h4 className="text-lg font-display font-black uppercase text-white m-0 mb-4">Batting Style Analysis</h4>
               <p className="text-sm italic text-white/60 m-0">
                What separates Sadaqat is his combination of shot variety from ball one, mental toughness (recovering from a dropped catch to take a brilliant one moments later), and the ability to clear the infield with authoritative timing.
               </p>
            </div>

            <h2>Conclusion: What PSL 2026 Means</h2>
            <p>
              PSL 11 was Maaz Sadaqat's coming-of-age moment. He delivered on the biggest stage and has likely secured his place in the National selectors' notebooks for future T20 series.
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
                    Eliminator 1: Full Match Report
                  </Link>
                  <Link to="/hyderabad-kingsmen-psl-2026-season-review" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Kingsmen Season Review
                  </Link>
                  <Link to="/multan-sultans-psl-2026-full-season-journey-review" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Multan Sultans Season Review
                  </Link>
                  <Link to="/psl-11-qualifier-1-match-report-babar-century" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Babar Azam's 103: Match Report
                  </Link>
               </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-20 not-prose">
              <a href="https://www.espncricinfo.com/cricketers/maaz-sadaqat-1244154" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4 text-pak-green" /> Maaz Sadaqat ESPNcricinfo Profile
              </a>
              <a href="https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/hyderabad-kingsmen-vs-multan-sultans-eliminator-1-1527593/full-scorecard" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> Eliminator 1 Full Scorecard
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           <div className="sticky top-24 space-y-12">
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px]">
                 <div className="flex items-center gap-2 mb-8">
                   <Zap className="w-5 h-5 text-pak-green" />
                   <h4 className="text-xl font-display font-black uppercase italic tracking-tighter">Season Highlights</h4>
                 </div>
                 <div className="space-y-6">
                    {[
                      { label: 'Most Sixes', val: '5 in an Innings' },
                      { label: 'Fastest 50', val: '19 Balls' },
                      { label: 'POTM Awards', val: '1 (Eliminator)' },
                      { label: 'Impact Score', val: '9.2/10' },
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
                    <Activity className="w-5 h-5 text-pak-green" />
                    <span className="text-[10px] font-black text-pak-green uppercase tracking-[2px]">Trend Analysis</span>
                 </div>
                 <h5 className="text-xl font-display font-black uppercase italic mb-4">Next Pakistan T20 Opener?</h5>
                 <p className="text-sm font-bold text-white/60 italic leading-relaxed">
                   Selectors likely view Maaz as the ideal high-strike-rate partner for established stars in the national setup.
                 </p>
              </div>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32 border-t border-white/10 pt-20">
        <AuthorSection authorId={authorId} />
        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Maaz Sadaqat ka PSL team kounsa tha?", a: "Maaz Sadaqat Hyderabad Kingsmen ke opening batter thay." },
             { q: "Kya Maaz ne koi record banaya?", a: "Unhon ne 19-ball fifty ka joint PSL record banaya." },
             { q: "Eliminator mein unka kya score tha?", a: "Eliminator 1 mein unhon ne 64* maare aur Player of the Match bane." }
           ]} />
        </div>
      </div>
    </div>
  );
}
