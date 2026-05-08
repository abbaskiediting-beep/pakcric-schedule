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
  Layout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

const bowlingData = [
  { name: 'Mohammad Abbas', overs: 20, maidens: 0, runs: 51, wickets: 1 },
  { name: 'Shaheen Afridi', overs: 18, maidens: 0, runs: 68, wickets: 1 },
  { name: 'Noman Ali', overs: 22, maidens: 0, runs: 75, wickets: 1 },
  { name: 'Hasan Ali', overs: 16, maidens: 0, runs: 69, wickets: 1 },
  { name: 'Salman Agha', overs: 9, maidens: 0, runs: 38, wickets: 0 },
];

export default function PakVsBan1stTestDay1Report() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Pakistan vs Bangladesh 1st Test Day 1 Report 2026</title>
        <meta name="description" content="Bangladesh end Day 1 at 301/4 at Mirpur. Shanto hits 101, Mominul falls on 91. Babar Azam misses match due to knee injury. Full Day 1 report." />
        <meta name="keywords" content="Pakistan vs Bangladesh 1st Test Day 1 2026, Shanto century, Mominul 91, Babar Azam injury, Mirpur Test Day 1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan vs Bangladesh 1st Test Day 1 Report 2026" />
        <meta property="og:description" content="Bangladesh end Day 1 at 301/4 at Mirpur. Shanto hits 101, Mominul falls on 91. Babar Azam misses match due to knee injury. Full Day 1 report." />
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
              <Trophy className="w-3 h-3 fill-current" /> WTC 2025-27 • 1st Test
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none max-w-5xl">
              Bangladesh <span className="text-pak-green italic">301/4</span> at Stumps
            </h1>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4">
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-pak-green" /> 8 May 2026
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
              {/* Breaking Injury Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12 p-8 bg-red-600/10 border border-red-600/30 rounded-[32px] relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AlertCircle className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center animate-pulse">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight italic">Medical Alert: Babar Azam Out</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/70 font-medium">
                  Babar Azam has been ruled out of the 1st Test due to a left knee injury. He woke up with knee pain on Thursday morning—just days after leading Peshawar Zalmi to the PSL 2026 title. PCB confirmed the injury after an MRI scan in Dhaka. His availability for the 2nd Test remains uncertain.
                </p>
              </motion.div>

              <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-medium leading-relaxed">
                <p className="text-xl md:text-2xl text-white font-display font-bold italic leading-snug">
                  Najmul Hossain Shanto scored 101, Mominul Haque fell agonisingly on 91, and Bangladesh firmly took control on a day where Pakistan's bowlers struggled for rhythm and discipline.
                </p>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                  <Activity className="w-8 h-8 text-pak-green" /> Session Analysis
                </h2>

                <div className="space-y-6">
                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">Morning Session</span>
                      <span className="text-lg font-bold text-white tabular-nums">101/2 (26 ov)</span>
                    </div>
                    <p className="text-sm">Pakistan struck early through Abbas and Shaheen, looking dangerous in the first hour. However, Bangladesh recovered swiftly through a composed partnership between Shanto and Mominul.</p>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">Afternoon Session</span>
                      <span className="text-lg font-bold text-white tabular-nums">200+ / 150-run stand</span>
                    </div>
                    <p className="text-sm">Shanto completed his fifty off 71 balls while Mominul reached the milestone off 102. Their partnership crossed 150 runs as Pakistan's attack appeared increasingly toothless on a flat deck.</p>
                  </div>

                  <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">Evening Session</span>
                      <span className="text-lg font-bold text-white tabular-nums">301/4 at Stumps</span>
                    </div>
                    <p className="text-sm">Shanto reached a magnificent century before falling, while Mominul was trapped LBW for 91. Mushfiqur and Litton ensured no further damage before the close of play.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Shanto's Masterclass</h2>
                <p>
                  Najmul Hossain Shanto walked in after early pressure and dismantled Pakistan's plans with a textbook captain's innings. He completed his century off just 129 balls, decorated with 12 boundaries and 2 sixes. It was a knock that blended aggression with cricketing intelligence—pulling short balls and sweeping the spinners with absolute conviction.
                </p>

                <div className="p-10 bg-pak-green/10 border-l-4 border-pak-green rounded-[32px] italic text-white/90 text-2xl font-display font-medium leading-tight my-12">
                  "Bangladesh absorbed pressure… then controlled the narrative in a way we haven't seen in a long time."
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Bowling Audit: Zero Maidens</h2>
                <p>
                  A damning statistic from the day: Pakistan bowled zero maiden overs across 85 overs. This lack of control allowed the Bangladeshi batters to rotate strike freely, never letting Noman Ali or the pacers build any sustained pressure.
                </p>

                <div className="overflow-x-auto bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 mt-8 mb-12">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono">Bowler</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">O</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">M</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">R</th>
                        <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 font-mono text-center">W</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {bowlingData.map((b, i) => (
                        <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 text-sm font-bold text-white uppercase tracking-tight">{b.name}</td>
                          <td className="py-4 text-sm font-bold text-white/60 tabular-nums text-center">{b.overs}</td>
                          <td className="py-4 text-sm font-bold text-white/20 tabular-nums text-center">{b.maidens}</td>
                          <td className="py-4 text-sm font-bold text-white tabular-nums text-center">{b.runs}</td>
                          <td className="py-4 text-sm font-bold text-pak-green tabular-nums text-center">{b.wickets}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Day 2 Preview</h2>
                <p>
                  Bangladesh will eye 450+ tomorrow morning. With Mushfiqur set on 48 and Mehidy Hasan Miraz still waiting, the hosts have a massive opportunity to bat Pakistan completely out of the game. Pakistan desperately need early wickets—but with Shaheen's shoulder under a cloud, the challenge is immense.
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
                  <h3 className="text-sm font-black uppercase tracking-[2px] text-white/40">Stumps • Day 1</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Bangladesh</p>
                      <h4 className="text-5xl font-display font-bold text-white tabular-nums tracking-tighter italic">301/4</h4>
                    </div>
                    <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-2">(85.0 ov)</p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                     <p>At the Crease</p>
                     <div className="space-y-2">
                        <div className="flex justify-between text-white">
                           <span>Mushfiqur Rahim*</span>
                           <span>48 (104)</span>
                        </div>
                        <div className="flex justify-between text-white">
                           <span>Litton Das*</span>
                           <span>8 (35)</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                     <p>Top Performers</p>
                     <div className="space-y-2">
                        <div className="flex justify-between text-pak-green">
                           <span>N.H. Shanto</span>
                           <span>101 (129)</span>
                        </div>
                        <div className="flex justify-between text-white">
                           <span>Mominul Haque</span>
                           <span>91 (200)</span>
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
                       <p>Pakistan sit <span className="text-white">5th</span> in WTC Standings. Losses here could end their final hopes early.</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-pak-green">02</span>
                       <p>Shaheen Afridi struggled with <span className="text-white">Shoulder</span> pain throughout the third session.</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-pak-green">03</span>
                       <p>Bangladesh swept Pakistan <span className="text-white">2-0</span> in their last series in 2024.</p>
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
