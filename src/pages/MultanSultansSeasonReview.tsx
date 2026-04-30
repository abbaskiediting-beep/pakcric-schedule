import { Calendar, Clock, ArrowLeft, Trophy, BarChart3, Zap, Shield, Swords, Target, TrendingUp, Info, Newspaper, ExternalLink, ChevronRight, User, Star, History, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function MultanSultansSeasonReview() {
  const blogTitle = "Multan Sultans PSL 2026: Poori Season Ki Kahani — Shuru Se Eliminator Tak Ki Mukammal Journey";
  const publishDate = "April 30, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Multan Sultans ka PSL 2026 ka poora safar — naye maalik, naya captain Ashton Turner, Sahibzada Farhan ki dhamakedar batting, Steven Smith ki wapsi, aur Eliminator mein Hyderabad ke haath shikast." />
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
              PSL 2026 mein Multan Sultans ka naam naya tha — lekin tha actually bilkul naya. Asli kahani thodi pechida hai aur yeh blog hai Multan Sultans ke PSL 2026 ke us poore safar ki mukammal kahani.
            </p>

            <h2>Introduction: Ek Naya Chapter, Ek Jaana-Pehchana Naam</h2>
            <p>
              Multan Sultans ke purane maalik Ali Tareen ne November 2025 mein PCB ke saath mufahimat na ho sakne par franchise chhod di. February 2026 mein Walee Technologies ne auction jeeti aur franchise ko Rawalpindi mein shift kar ke "Rawalpindiz" ke naam se rebrand kiya.
            </p>
            <p>
              Toh phir Multan Sultans kaisa wapas aaya? OZ Developers ne Sialkot Stallionz ki nyi franchise kharidi — lekin financial mushkilat ki wajah se CD Ventures ke Gohar Shah ne control le liya aur PCB se Sialkot Stallionz ko "Multan Sultans" rebrand karne ki ijazat maangi, jo maan li gayi. 
            </p>
            <p>
              Tim Paine ko head coach banaya gaya aur Australian allrounder <strong>Ashton Turner</strong> ko captain. Yeh ek fresh start tha.
            </p>

            {/* Season Stats Table */}
            <div className="my-12 overflow-hidden border border-white/10 rounded-3xl bg-white/5 not-prose">
              <div className="bg-white/10 px-6 py-4 border-b border-white/10 flex items-center gap-3">
                 <BarChart3 className="w-5 h-5 text-pak-green" />
                 <h3 className="text-xl font-display font-black m-0 uppercase tracking-tighter">Season Stats — PSL 11</h3>
              </div>
              <table className="w-full text-sm font-bold text-left m-0">
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px] w-1/2">Final Standing</td>
                    <td className="px-6 py-4 text-white font-black uppercase">3rd (League Stage)</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Matches (W/L)</td>
                    <td className="px-6 py-4 text-white font-black">6 Wins / 5 Losses</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Net Run Rate</td>
                    <td className="px-6 py-4 text-pak-green font-black">+0.45</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="px-6 py-4 text-white/40 uppercase tracking-widest text-[10px]">Top Batsman</td>
                    <td className="px-6 py-4 text-white font-black italic">Sahibzada Farhan</td>
                  </tr>
                  <tr className="bg-pak-green/20">
                    <td className="px-6 py-4 text-pak-green font-black uppercase tracking-widest text-[10px]">Exit Point</td>
                    <td className="px-6 py-4 text-white font-black italic">Eliminator 1 (Lost to HYK)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Squad Overview: Kon Kon Tha Team Mein?</h2>
            <p>
              <strong>Captain:</strong> Ashton Turner (Australia) | <strong>Head Coach:</strong> Tim Paine (Australia) | <strong>Team President:</strong> Wasim Akram
            </p>
            <p>
              Yeh squad batting-heavy thi. Farhan, Smith, Masood, Philippe, Turner — top 5 positions mein international level players thay. Bowling thodi kamzor thi especially pace department mein — 41-saal ke Peter Siddle age mein sabse aage thay.
            </p>

            <h2>League Stage: Match by Match Journey</h2>
            
            <div className="space-y-8 my-12 not-prose">
               {[
                 { match: "Match 2 vs HYK", result: "WIN ✅", desc: "Multan 227/4 beat Hyderabad 225/5. Sahibzada Farhan hit an unbeaten 106 off 57 balls." },
                 { match: "Match 4 vs Rawalpindiz", result: "WIN ✅", desc: "Farhan hit 68 off 38 balls with 5 massive sixes. Sultans won by 7 wickets." },
                 { match: "Match 8 vs HYK (2nd)", result: "LOSS ❌", desc: "Hyderabad chased 214. Usman Khan's 44-ball century turned the season's momentum." },
                 { match: "Match 9 vs IU (2nd)", result: "LOSS ❌", desc: "Islamabad United won by 4 wickets despite Multan's 192/7. Chapman's 69* was the difference." }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-pak-green/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-sm font-black uppercase tracking-widest text-white/40">{item.match}</h4>
                       <span className={`text-[10px] font-black px-2 py-0.5 rounded ${item.result.includes('WIN') ? 'bg-pak-green/20 text-pak-green' : 'bg-rose-500/20 text-rose-500'}`}>{item.result}</span>
                    </div>
                    <p className="text-sm font-bold text-white/70 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <h2>Eliminator 1: The End of the Road</h2>
            <p>
               <strong>29 April 2026 | Gaddafi Stadium, Lahore</strong><br />
               <strong>Multan 159/9 — Hyderabad 162/2 — Kingsmen won by 8 wickets</strong>
            </p>
            <p>
              Multan ka safar Eliminator 1 mein khatam hua. Higher-ranked hone ke bawajood, unka top order collapse kar gaya (55/5). Shan Masood ne unbeaten 69 off 46 maare lekin Hyderabad ne 160 ka target sirf 15.2 overs mein chase kar liya.
            </p>

            <h2>Season's Top Performers</h2>
            
            <h3>🏏 Sahibzada Farhan — Season ka Superstar</h3>
            <p>
              Farhan carryied his historic T20 World Cup form into PSL. Unhon ne 23 sixes maare — jo tournament mein sabse zyada thay. 380+ runs ke saath woh Multan ki batting ki buniyad thay.
            </p>

            <h3>🏏 Steven Smith — Maiden PSL Century</h3>
            <p>
              Steve Smith ne Multan Sultans ki taraf se PSL mein apni pehli century banayi. Farhan aur Smith ki opening partnership ne poore season consistent powerplay starts diye.
            </p>

            <h3>🏏 Shan Masood — The Anchor</h3>
            <p>
              Masood ka PSL 2026 ek redemption story tha. Unhon ne middle overs mein anchor ki haisiyat se behtareen batting ki, khususan spin ke khilaf. Eliminator mein unki 69* lone warrior waali performance thi.
            </p>

            <h2>Season ki Highs & Lows</h2>
            <p>
              <strong>🌟 Highlights:</strong> Farhan's 106* vs Hyderabad, Smith's maiden PSL ton, aur middle-order resilience from Arafat Minhas.
            </p>
            <p>
              <strong>😔 Lows:</strong> Bowling depth ki kami (leading with 41-yr old Siddle), Mohammad Nawaz drug controversy, aur Eliminator mein decisive collapse.
            </p>

            {/* Internal Links Block */}
            <div className="my-16 p-10 bg-pak-green/5 border border-pak-green/20 rounded-[40px] not-prose">
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
                    Hyderabad Kingsmen Season Review
                  </Link>
                  <Link to="/top-5-psl-century-scorers" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Top 5 PSL Century Scorers List
                  </Link>
                  <Link to="/psl-11-qualifier-1-match-report-babar-century" className="flex items-center gap-3 text-sm font-bold text-white/70 hover:text-pak-green transition-colors group">
                    <ChevronRight className="w-4 h-4 text-pak-green group-hover:translate-x-1 transition-transform" />
                    Qualifier 1 Report & Analysis
                  </Link>
               </div>
            </div>

            <h2>Final Season Verdict</h2>
            <p>
              <strong>Kya Multan ne accha season khela?</strong> Haan — par winning finish nahi mil saka.
            </p>
            <p>
              Eliminator mein Hyderabad ke haath 8-wicket ki shikast ne season ka disappointing ending likh diya. Agle season ke liye unhe apni bowling aur death overs management par kaam karna hoga.
            </p>

            <div className="flex flex-wrap gap-4 mt-20 not-prose">
              <a href="https://psl-t20.com/multan-sultans/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-pak-green hover:border-pak-green transition-all group">
                <ExternalLink className="w-4 h-4 text-pak-green group-hover:text-white" /> Multan Sultans Official Page
              </a>
              <a href="https://www.espncricinfo.com/series/pakistan-super-league-2026-1515734/points-table-standings" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                <ExternalLink className="w-4 h-4" /> Official Points Table (ESPN)
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
           <div className="sticky top-24 space-y-12">
              <div className="p-8 bg-[#0a110d] border border-white/10 rounded-[40px]">
                 <div className="flex items-center gap-2 mb-8">
                   <Trophy className="w-5 h-5 text-pak-green" />
                   <h4 className="text-xl font-display font-black uppercase italic tracking-tighter">Impact Players</h4>
                 </div>
                 <div className="space-y-6">
                    {[
                      { name: 'Sahibzada Farhan', role: '380+ Runs (23 Sixes)', score: '9.5' },
                      { name: 'Steven Smith', role: 'Maiden PSL Hundred', score: '8.8' },
                      { name: 'Shan Masood', role: '300+ Runs (Anchor)', score: '8.5' },
                      { name: 'Faisal Akram', role: '12+ Wickets', score: '8.0' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                         <div>
                            <p className="text-xs font-black text-white/90">{item.name}</p>
                            <p className="text-[8px] font-black text-white/30 uppercase tracking-[2px] mt-1">{item.role}</p>
                         </div>
                         <div className="text-lg font-display font-black text-pak-green">{item.score}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-[40px]">
                 <h4 className="text-lg font-display font-black uppercase italic mb-6">Key Stat Record</h4>
                 <div className="bg-pak-green/10 p-5 rounded-3xl border border-pak-green/20">
                    <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Most Sixes in PSL 2026</p>
                    <p className="text-4xl font-display font-black text-white">23</p>
                    <p className="text-[9px] font-bold text-white/40 mt-2 uppercase tracking-widest">Sahibzada Farhan</p>
                 </div>
              </div>
           </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-32 border-t border-white/10 pt-20">
        <AuthorSection authorId={authorId} />
        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "Multan Sultans rebrand kaisay hue?", a: "Pehle purani franchise Rawalpindiz bani, phir Sialkot Stallionz ko rebrand kar ke Multan Sultans banaya gaya." },
             { q: "Captain kon tha 2026 mein?", a: "Ashton Turner ne Multan Sultans ki leadership ki." },
             { q: "Farhan ne kitne sixes maare?", a: "Sahibzada Farhan ne tournament mein sabse zyada 23 sixes maare." }
           ]} />
        </div>
      </div>
    </div>
  );
}
