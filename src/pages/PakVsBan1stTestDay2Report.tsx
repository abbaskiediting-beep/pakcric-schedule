import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Target,
  Zap,
  Activity,
  AlertCircle,
  Trophy,
  History,
  Layout,
  Star,
  Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

const bowlingData = [
  { name: 'Mohammad Abbas', overs: 34, maidens: 4, runs: 92, wickets: 5 },
  { name: 'Shaheen Afridi', overs: 29.1, maidens: 2, runs: 113, wickets: 3 },
  { name: 'Hasan Ali', overs: 19, maidens: 1, runs: 78, wickets: 1 },
  { name: 'Khurram Shahzad', overs: 20, maidens: 3, runs: 66, wickets: 1 },
  { name: 'Noman Ali', overs: 20, maidens: 2, runs: 92, wickets: 1 },
];

export default function PakVsBan1stTestDay2Report() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Pakistan Fight Back in Dhaka: Abbas’s Fifer and Azan Awais’s Gritty Debut Define Day 2</title>
        <meta name="description" content="Pakistan fights back on Day 2 in Dhaka! Mohammad Abbas takes 5 wickets to restrict Bangladesh to 413, while debutant Azan Awais scores a brilliant unbeaten 72. Read the full 1500-word match report and analysis." />
        <meta name="keywords" content="PAK vs BAN 1st Test Day 2 2026, Mohammad Abbas 5 wickets, Mushfiqur Rahim 71, Azan Awais debut 72*, Pakistan test score stumps" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Fight Back in Dhaka: Abbas’s Fifer and Azan Awais’s Gritty Debut Define Day 2" />
        <meta property="og:description" content="Pakistan fights back on Day 2 in Dhaka! Mohammad Abbas takes 5 wickets to restrict Bangladesh to 413, while debutant Azan Awais scores a brilliant unbeaten 72." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(1,65,30,0.3)]">
              <Star className="w-3 h-3 fill-current" /> Match Day 2 • Stumps
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none max-w-5xl">
              Abbas <span className="text-pak-green italic">Five-For</span> Fires Pakistan Comeback
            </h1>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4">
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-pak-green" /> 9 May 2026
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-pak-green" /> Shere Bangla, Mirpur
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card-bg border border-card-border rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
              
              <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-medium leading-relaxed">
                <p className="text-xl md:text-2xl text-white font-display font-bold italic leading-snug">
                  Pakistan fought back spiritedly in Dhaka as Mohammad Abbas claimed his sixth Test five-wicket haul (5/92) to bowl Bangladesh out for 413. Debutant Azan Awais then stole the spotlight with a gritty unbeaten 72, guiding Pakistan to 142/1 at stumps.
                </p>

                <div className="overflow-x-auto bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 mt-8 mb-12">
                   <h3 className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
                     <Timer className="w-4 h-4 text-pak-green" /> SCOREBOARD AT A GLANCE
                   </h3>
                   <table className="w-full text-left">
                     <thead>
                       <tr className="border-b border-white/10">
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Innings</th>
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Score</th>
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Overs</th>
                         <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-right">Status</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-white/5 font-display">
                       <tr>
                         <td className="py-4 text-lg font-bold text-white uppercase italic">Bangladesh 1st</td>
                         <td className="py-4 text-lg font-bold text-pak-green">413 ALL OUT</td>
                         <td className="py-4 text-lg font-bold text-white/60 text-center">117.1</td>
                         <td className="py-4 text-lg font-bold text-white text-right">COMPLETE</td>
                       </tr>
                       <tr>
                         <td className="py-4 text-lg font-bold text-white uppercase italic">Pakistan 1st</td>
                         <td className="py-4 text-lg font-bold text-pak-green">142/1</td>
                         <td className="py-4 text-lg font-bold text-white/60 text-center">34.0</td>
                         <td className="py-4 text-lg font-bold text-white text-right font-sans text-xs uppercase">STUMPS - DAY 2</td>
                       </tr>
                     </tbody>
                   </table>
                   <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                     <p className="text-[10px] font-black uppercase tracking-[2px] text-neutral-500">Pakistan trail by <span className="text-white">271 Runs</span></p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                  <Activity className="w-8 h-8 text-pak-green" /> Session Analysis
                </h2>

                <div className="space-y-6">
                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">Morning Session (BAN Bat)</span>
                      <span className="text-lg font-bold text-white tabular-nums">112 Runs | 6 Wkts</span>
                    </div>
                    <p className="text-sm">Abbas 5-for brilliance helped bowl Bangladesh out for 413. Shaheen Afridi removed Mushfiqur Rahim for 71 on his birthday with a sharp delivery that crashed into the stumps.</p>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">Post-Lunch Persistence</span>
                      <span className="text-lg font-bold text-white tabular-nums">50/0 (10.0 ov)</span>
                    </div>
                    <p className="text-sm">Pakistan openers gave a solid start, reaching tea unscathed. Azan Awais looked comfortable on debut, surviving an early review.</p>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">Evening Session (PAK Bat)</span>
                      <span className="text-lg font-bold text-white tabular-nums">92 Runs | 1 Wkt</span>
                    </div>
                    <p className="text-sm">Azan Awais reached his maiden Test fifty off 66 balls. The 106-run opening stand was broken by Mehidy Hasan Miraz who dismissed Imam-ul-Haq for 45.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Mohammad Abbas: The Wrecker-in-Chief</h2>
                <p>
                  Abbas dismantle the Bangladeshi middle and lower order with signature discipline. Relying on "old-school" Test principles—bowling tirelessly in the channel just outside off-stump—he forced the batters into errors. He provided the initial strike of the day by dismissing Litton Das (33), breaking a dangerous 62-run partnership. He finished with clinical figures of 5/92 from 34 overs.
                </p>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Mushfiqur’s Record-Breaking Resilience</h2>
                <p>
                  Despite the collapse at the other end, Mushfiqur Rahim stood like a rock. He etched his name into history by surpassing Tamim Iqbal to become the Bangladeshi batter with the most 50-plus scores (42) across all formats. His resistance ended shortly after lunch when Shaheen Shah Afridi rattled his stumps for 71.
                </p>

                <div className="p-10 bg-pak-green/10 border-l-4 border-pak-green rounded-[32px] italic text-white/90 text-2xl font-display font-medium leading-tight my-12">
                  "By the close of play on Saturday, Pakistan reached 142/1, trailing Bangladesh’s total of 413 by 271 runs. Day 3 promises a defining chapter."
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Azan Awais: A Star is Born</h2>
                <p>
                  Opening alongside the experienced Imam-ul-Haq, 21-year-old Azan Awais showed no signs of debut nerves. He reached his maiden Test half-century off just 66 balls. His innings was characterized by elegant cover drives and a solid defensive technique against the spinners. By stumps, Awais remained unbeaten on 72 from 96 balls.
                </p>

                <Link 
                  to="/news/azan-awais-pakistan-test-debut-masterclass-dhaka"
                  className="group flex flex-col md:flex-row items-center gap-6 p-8 bg-pak-green/5 border border-pak-green/20 rounded-[32px] hover:bg-pak-green/10 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-pak-green flex items-center justify-center shrink-0 shadow-lg shadow-pak-green/20">
                    <Star className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-1 block">Detailed Breakdown</span>
                    <h3 className="text-xl font-display font-bold text-white uppercase group-hover:text-pak-green transition-colors">Azan Awais: The 21-Year-Old Sensation's Masterclass in Dhaka</h3>
                    <p className="text-sm text-white/40 mt-1">Read the full profile and innings analysis of Pakistan's newest Test star.</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-pak-green ml-auto group-hover:translate-x-2 transition-transform" />
                </Link>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                  <Target className="w-8 h-8 text-pak-green" /> Bowling Audit
                </h2>

                <div className="overflow-x-auto bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 mt-8 mb-12">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono">Bowler</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">O</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">M</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">R</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-right">W</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {bowlingData.map((b, i) => (
                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 text-sm font-bold text-white uppercase tracking-tight">{b.name}</td>
                          <td className="py-4 text-sm font-bold text-white/60 tabular-nums text-center">{b.overs}</td>
                          <td className="py-4 text-sm font-bold text-white/20 tabular-nums text-center">{b.maidens}</td>
                          <td className="py-4 text-sm font-bold text-white tabular-nums text-center">{b.runs}</td>
                          <td className="py-4 text-sm font-bold text-pak-green tabular-nums text-right">{b.wickets}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-600/10 border border-red-600/30 rounded-[32px] p-8 flex items-start gap-6">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white uppercase mb-2">Shaheen's Shoulder Concern</h3>
                    <p className="text-sm leading-relaxed">The physio came in to have a look at Shaheen's shoulder — he looks like he is struggling quite a bit and shakes his head in disappointment continuously. He is okay to continue but looks far from 100%.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The 271-Run Trail</h2>
                <p>
                  Pakistan face a significant but manageable deficit of 271 runs. With 9 wickets in hand and the pitch starting to offer assistance to the spinners, Day 3 will be crucial. The middle order, including captain Shan Masood and Babar Azam, will need to capitalize on the foundation laid by the openers.
                </p>
              </div>
            </div>

            <AdPlaceholder type="banner" className="my-12" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Scorecard Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Zap className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <History className="w-5 h-5 text-pak-green" />
                  <h3 className="text-sm font-black uppercase tracking-[2px] text-white/40">Stumps • Day 2</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Pakistan 1st</p>
                      <h4 className="text-5xl font-display font-bold text-pak-green tabular-nums tracking-tighter italic">142/1</h4>
                    </div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-2">(34.0 ov)</p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                     <p>At the Crease</p>
                     <div className="space-y-2">
                        <div className="flex justify-between text-white">
                           <span>Azan Awais*</span>
                           <span>72 (96)</span>
                        </div>
                        <div className="flex justify-between text-white">
                           <span>Abdullah Fazal*</span>
                           <span>14 (25)</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                     <p>BAN Bowling (1st Innings)</p>
                     <div className="space-y-2">
                        <div className="flex justify-between text-pak-green">
                           <span>Mohammad Abbas</span>
                           <span>5/92</span>
                        </div>
                        <div className="flex justify-between text-white">
                           <span>Shaheen Afridi</span>
                           <span>3/113</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Quick Reads */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 space-y-8">
                 <h4 className="text-xs font-black uppercase tracking-[3px] text-neutral-500">Key Context</h4>
                 
                 <div className="space-y-8 text-[11px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">
                    <div className="flex gap-4">
                       <span className="text-pak-green">01</span>
                       <p>Abbas's 5/92 is his <span className="text-white">Sixth Five-For</span> in Test Cricket.</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-pak-green">02</span>
                       <p>Mushfiqur surpassed <span className="text-white">Tamim Iqbal</span> for most 50+ scores for BAN.</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-pak-green">03</span>
                       <p>Azan Awais scored his <span className="text-white">Maiden Test Fifty</span> on debut (72*).</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
