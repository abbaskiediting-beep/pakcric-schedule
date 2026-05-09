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
  { name: 'Mohammad Abbas', overs: 34, maidens: 9, runs: 92, wickets: 5 },
  { name: 'Shaheen Afridi', overs: 27, maidens: 2, runs: 113, wickets: 3 },
  { name: 'Noman Ali', overs: 24, maidens: 2, runs: 82, wickets: 1 },
  { name: 'Hasan Ali', overs: 24, maidens: 1, runs: 89, wickets: 1 },
  { name: 'Salman Agha', overs: 8, maidens: 0, runs: 37, wickets: 0 },
];

export default function PakVsBan1stTestDay2Report() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Pakistan vs Bangladesh 1st Test Day 2 Report 2026 | Abbas Fifer, Azan Awais Debut Heroics</title>
        <meta name="description" content="Abbas takes 5/92 as Bangladesh make 413. Debutant Azan Awais shines with 85* as Pakistan finish Day 2 at 179/1, trailing by 234." />
        <meta name="keywords" content="PAK vs BAN 1st Test Day 2 2026, Mohammad Abbas 5 wickets, Mushfiqur Rahim 71, Azan Awais debut 85*, Pakistan test score stumps" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan vs Bangladesh 1st Test Day 2 Report 2026 — Abbas Fifer, Azan Awais Debut Heroics" />
        <meta property="og:description" content="Abbas takes 5/92 as Bangladesh make 413. Debutant Azan Awais shines with 85* as Pakistan finish Day 2 at 179/1, trailing by 234." />
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
              Abbas <span className="text-pak-green italic">Five-For</span>, Azan Awais <br /> <span className="text-emerald-500">Debut Heroics</span>
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
                  Pakistan fought back spiritedly in Dhaka as Mohammad Abbas claimed his sixth Test five-wicket haul (5/92) to bowl Bangladesh out for 413. Debutant Azan Awais then stole the spotlight with a sensational unbeaten 85, guiding Pakistan to 179/1 at stumps.
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
                         <td className="py-4 text-lg font-bold text-pak-green">179/1</td>
                         <td className="py-4 text-lg font-bold text-white/60 text-center">46.0</td>
                         <td className="py-4 text-lg font-bold text-white text-right font-sans text-xs uppercase">STUMPS - DAY 2</td>
                       </tr>
                     </tbody>
                   </table>
                   <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[2px] text-neutral-500">
                     <p>Pakistan trail by <span className="text-white">234 Runs</span></p>
                     <p className="text-white/20">9 Wickets in Hand</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                  <Activity className="w-8 h-8 text-pak-green" /> Session Analysis
                </h2>

                <div className="space-y-6">
                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4 text-[10px] font-black uppercase tracking-widest">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full">Morning Session (BAN Bat)</span>
                      <span className="text-lg font-bold text-white tabular-nums">112 Runs | 6 Wkts</span>
                    </div>
                    <p className="text-sm">Bangladesh resumed from overnight 301/4. Mushfiqur Rahim completed his record-breaking fifty (71 off 179 balls) before being bowled by Shaheen Afridi. Taskin Ahmed chipped in with a quickfire 21 (22b) as Bangladesh reached 413.</p>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4 text-[10px] font-black uppercase tracking-widest">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full">Afternoon Session (PAK Bat)</span>
                      <span className="text-lg font-bold text-white tabular-nums">50/0 (10.0 ov)</span>
                    </div>
                    <p className="text-sm">Mohammad Abbas was ruthless with the old ball, removing the tail in quick succession. Pakistan's openers walked out and survived till tea, setting a positive tone.</p>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4 text-[10px] font-black uppercase tracking-widest">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full">Evening Session (PAK Bat)</span>
                      <span className="text-lg font-bold text-white tabular-nums">129 Runs | 1 Wkt</span>
                    </div>
                    <p className="text-sm">Azan Awais and Imam-ul-Haq posted a 106-run opening stand. After Imam fell for 57, Azan (85*) and Abdullah Fazal (37*) added 73 unbeaten runs to put Pakistan in control at stumps.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Mohammad Abbas: The Quiet Assassin</h2>
                <p>
                  Mohammad Abbas produced a classical Test bowling performance to claim 5/92 off 34 overs. Disciplined lines, relentless lengths, and the patience of a monk — Abbas was everything Pakistan needed their senior bowler to be. He removed Litton Das, Mehidy Hasan Miraz, and Taijul Islam in quick succession to help seal Bangladesh's innings before lunch on Day 2.
                </p>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Mushfiqur’s Record-Breaking Resilience</h2>
                <p>
                  Mushfiqur Rahim completed his fifty — his 42nd fifty-plus score in Tests for Bangladesh, breaking Tamim Iqbal's all-time national record. He batted on for a gritty 71 off 179 balls before being bowled by Shaheen Shah Afridi.
                </p>

                <div className="p-10 bg-pak-green/10 border-l-4 border-pak-green rounded-[32px] italic text-white/90 text-2xl font-display font-medium leading-tight my-12">
                  "Pakistan ends Day 2 at 179/1, in an incredibly strong position, trailing by 234 runs with nine wickets in hand."
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Azan Awais — A Star is Born</h2>
                <p>
                  Azan Awais built a strong foundation for Pakistan's innings with a 106-run opening stand alongside Imam-ul-Haq. The 21-year-old from Sialkot handled the Mirpur cauldron with incredible maturity, surviving an early DRS review and playing elegant cover drives. He ended the day unbeaten on 85 off 133 balls — just 15 runs away from a debut century.
                </p>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Abdullah Fazal — The Supporting Act</h2>
                <p>
                  The 23-year-old from Karachi, Abdullah Fazal, played exactly the innings his team needed on Test debut — cautious and correct. He forged an unbeaten 73-run stand with Azan Awais to end the day, finishing on 37* off 78 balls.
                </p>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Imam-ul-Haq's Solid Return</h2>
                <p>
                  Imam-ul-Haq returned to Pakistan's Test XI and delivered with a composed 57 off 75 balls. His dismissal briefly brought nerves, but the two debutants quickly steadied the ship.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 my-10">
                  <h3 className="text-xl font-display font-bold text-white uppercase mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" /> The No-Ball Problem
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    One of the stranger subplots has been the no-ball epidemic. Pakistan bowled 9 no-balls in Bangladesh's innings, while Bangladesh conceded 7 in Pakistan's reply. Both coaching staffs will have firm words about the popping crease.
                  </p>
                </div>

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

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Day 3 Preview — Momentum Shift</h2>
                <p>
                  Pakistan trail by only 234 runs with nine wickets in hand, and momentum has completely shifted to the visitors. With Shan Masood, Saud Shakeel, and Mohammad Rizwan still to come, Pakistan are perfectly placed. If Azan Awais completes his debut century tomorrow, Mirpur might officially become his favourite workplace forever.
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
                      <h4 className="text-5xl font-display font-bold text-pak-green tabular-nums tracking-tighter italic">179/1</h4>
                    </div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-2">(46.0 ov)</p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                     <p>At the Crease</p>
                     <div className="space-y-2">
                        <div className="flex justify-between text-white">
                           <span>Azan Awais*</span>
                           <span>85 (133)</span>
                        </div>
                        <div className="flex justify-between text-white">
                           <span>Abdullah Fazal*</span>
                           <span>37 (78)</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                     <p>BAN Bowling (1st Innings)</p>
                     <div className="space-y-2">
                        <div className="flex justify-between text-pak-green">
                           <span>Azan Awais</span>
                           <span>85* (133)</span>
                        </div>
                        <div className="flex justify-between text-white">
                           <span>Imam-ul-Haq</span>
                           <span>57 (75)</span>
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
                       <p>Abbas's 5/92 is his <span className="text-white">Sixth Five-For</span> in Tests.</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-pak-green">02</span>
                       <p>Azan Awais is unbeaten on <span className="text-white">85*</span> on Test Debut.</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-pak-green">03</span>
                       <p>Pakistan trail by only <span className="text-white">234 runs</span> at Stumps.</p>
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
