import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Target,
  Zap,
  Activity,
  AlertCircle,
  Clock,
  Star,
  Users,
  Award,
  Shield,
  Info,
  XCircle,
  Tv,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function AusOdiSquadPak2026() {
  const squad = [
    { name: 'Mitchell Marsh (c)', role: 'Right-hand bat / Right-arm fast-medium', status: 'Captain' },
    { name: 'Alex Carey (wk)', role: 'Left-hand bat / Wicketkeeper', status: 'Experienced' },
    { name: 'Nathan Ellis', role: 'Right-arm fast', status: 'Regular member' },
    { name: 'Cameron Green', role: 'Right-hand bat / Right-arm fast', status: 'Regular allrounder' },
    { name: 'Josh Inglis', role: 'Right-hand bat / Wicketkeeper', status: 'Experienced' },
    { name: 'Matthew Kuhnemann', role: 'Left-arm orthodox spin', status: 'Regular member' },
    { name: 'Marnus Labuschagne', role: 'Right-hand bat / Leg-spin', status: 'Senior batter' },
    { name: 'Riley Meredith', role: 'Right-arm fast', status: 'Returning' },
    { name: 'Ollie Peake', role: 'Right-hand bat', status: 'Uncapped — maiden call-up', highlight: true },
    { name: 'Matthew Renshaw', role: 'Left-hand bat / opener', status: 'Fringe player' },
    { name: 'Tanveer Sangha', role: 'Right-arm leg-spin', status: 'First time in ODIs vs Pakistan' },
    { name: 'Liam Scott', role: 'Left-hand bat / allrounder', status: 'Sheffield Shield Player of Year', highlight: true },
    { name: 'Matthew Short', role: 'Right-hand bat / Off-spin', status: 'Fringe player' },
    { name: 'Billy Stanlake', role: 'Right-arm fast', status: 'Returning after long absence', highlight: true },
    { name: 'Adam Zampa', role: 'Right-arm leg-spin', status: 'Senior spinner — Key man' },
  ];

  const iplConflict = [
    { name: 'Pat Cummins', team: 'SRH', status: 'Playoff — top of table', available: false },
    { name: 'Travis Head', team: 'SRH', status: 'Playoff contender', available: false },
    { name: 'Xavier Bartlett', team: 'PBKS', status: 'Playoff contender', available: false },
    { name: 'Cooper Connolly', team: 'PBKS', status: 'Playoff contender', available: false },
    { name: 'Ben Dwarshuis', team: 'PBKS', status: 'Playoff contender', available: false },
    { name: 'Mitchell Starc', team: 'DC', status: '7th (8 points)', available: false },
    { name: 'Cameron Green', team: 'KKR', status: '8th (7 points)', available: true },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Australia ODI Squad vs Pakistan 2026 | No Big Three, Marsh Leads, 3 Uncapped Players</title>
        <meta name="description" content="Australia's 15-member ODI squad for Pakistan series May 30–June 4 announced. No Cummins, Starc, Hazlewood, Head or Maxwell. Marsh captains. Uncapped Ollie Peake, Billy Stanlake return." />
        <meta name="keywords" content="Australia ODI Squad vs Pakistan 2026, Australia tour of Pakistan 2026, Mitchell Marsh captain, Ollie Peake debut, Billy Stanlake return, IPL 2026 conflict" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-20 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 bg-rose-600 text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(225,29,72,0.3)]">
              <Zap className="w-3 h-3 fill-current" /> Squad Announcement • Australia Tour
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] max-w-6xl">
              No Cummins, <span className="text-rose-500 italic">No Starc,</span> <br /> 
              No Hazlewood — <span className="text-pak-green">Marsh Leads</span> New-Look Side
            </h1>

            <p className="text-white/60 text-sm md:text-lg max-w-2xl font-medium tracking-tight">
              Australia announce 15-member ODI squad for Pakistan series. Huge IPL conflicts leave giants out as three uncapped stars earn maiden call-ups.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-pak-green" /> 11 May 2026
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <Clock className="w-4 h-4 text-pak-green" /> 13:53 PKT
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
                
                {/* Result at a Glance */}
                <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-10 mb-12">
                   <h3 className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-8 flex items-center gap-2">
                     <Activity className="w-4 h-4 text-pak-green" /> SERIES AT A GLANCE
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                               <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] text-neutral-500 uppercase font-black">Series</p>
                               <p className="text-sm font-bold text-white uppercase italic">Australia Tour of Pakistan — 3 ODIs</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                               <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] text-neutral-500 uppercase font-black">Dates</p>
                               <p className="text-sm font-bold text-white uppercase italic">30 May – 4 June 2026</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                               <Award className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] text-neutral-500 uppercase font-black">Australia Captain</p>
                               <p className="text-sm font-bold text-white uppercase italic">Mitchell Marsh</p>
                            </div>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-600/10 flex items-center justify-center text-rose-500">
                               <XCircle className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] text-neutral-500 uppercase font-black">Major Absentees</p>
                               <p className="text-sm font-bold text-white uppercase italic tracking-tight">Cummins, Starc, Hazlewood, Head</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                               <Users className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] text-neutral-500 uppercase font-black">Squad Size</p>
                               <p className="text-sm font-bold text-white uppercase italic">15 Members</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green">
                               <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] text-neutral-500 uppercase font-black">New Talent</p>
                               <p className="text-sm font-bold text-white uppercase italic">Ollie Peake (Uncapped)</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight">Introduction: Australia Come to Pakistan — But Without Their Best Players</h2>
                   <p>
                     When Cricket Australia announced the squad for their upcoming three-match ODI series in Pakistan starting May 30, the first thing everyone noticed was not who was IN the squad — but who was OUT.
                   </p>
                   <div className="p-8 bg-rose-600/10 border border-rose-600/30 rounded-[40px] space-y-4">
                      <p className="text-rose-500 font-display font-black uppercase italic tracking-widest text-sm flex items-center gap-3"><AlertCircle className="w-5 h-5" /> The Unavailable Giants</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-white italic uppercase">
                        <li>• Pat Cummins (IPL)</li>
                        <li>• Mitchell Starc (Rest)</li>
                        <li>• Josh Hazlewood (Rest)</li>
                        <li>• Travis Head (IPL)</li>
                        <li>• Glenn Maxwell (Retd.)</li>
                        <li>• Marcus Stoinis (Retd.)</li>
                      </ul>
                   </div>
                   <p>
                     The reasons are well-documented: the <strong>IPL conflict</strong>. The Pakistan ODI series beginning May 30 clashes directly with the final phase of IPL 2026 — including the final itself, scheduled for May 31 in Ahmedabad. Cricket Australia confirmed that players involved in IPL franchises that are still alive in the tournament will not be recalled for the Pakistan series.
                   </p>
                   <p>
                     The result is a 15-man squad that is a fascinating mixture of fringe players, returning veterans, young uncapped talent, and a handful of regular faces doing their best to hold it all together.
                   </p>
                </div>

                {/* Official Squad Table */}
                <div className="bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-12 mb-12 overflow-hidden overflow-x-auto">
                   <h3 className="text-xl font-display font-black text-pak-green uppercase mb-8">Australia's Official 15-Member ODI Squad</h3>
                   <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Player</th>
                          <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Role</th>
                          <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-display">
                        {squad.map((player, idx) => (
                           <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                             <td className={`py-5 text-sm font-bold uppercase italic ${player.name.includes('(c)') ? 'text-pak-green' : 'text-white'}`}>{player.name}</td>
                             <td className="py-5 text-xs text-white/40">{player.role}</td>
                             <td className={`py-5 text-[10px] font-black uppercase tracking-widest text-right ${player.highlight ? 'text-emerald-400' : 'text-neutral-500'}`}>
                               {player.status}
                             </td>
                           </tr>
                        ))}
                      </tbody>
                   </table>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <TrendingDown className="w-8 h-8 text-rose-500" /> The Big Absences: Why the Stars are Missing
                   </h2>
                   
                   <div className="space-y-8">
                     <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                        <h4 className="text-lg font-display font-black text-white uppercase italic mb-4">❌ Pat Cummins — IPL Commitment (SRH)</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-medium">
                          <strong>Sunrisers Hyderabad</strong> are currently top of the IPL 2026 points table. Cummins, as their captain, will remain in India for the playoffs and is not available for the Pakistan series. His leadership and experience would have been invaluable in Pakistani conditions.
                        </p>
                     </div>

                     <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                        <h4 className="text-lg font-display font-black text-white uppercase italic mb-4">❌ Mitchell Starc & Josh Hazlewood — Workload Management</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-medium">
                          The veteran pair will miss both the Pakistan and Bangladesh series to manage their workload. Starc's reverse swing and Hazlewood's discipline at the death are huge losses for the Australian attack.
                        </p>
                     </div>

                     <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                        <h4 className="text-lg font-display font-black text-white uppercase italic mb-4">❌ Travis Head — IPL (SRH)</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-medium">
                          Head has been a dominant force at the top, but like Cummins, he'll stay for the IPL playoffs. He is expected to rejoin the squad for the Bangladesh series later in June.
                        </p>
                     </div>

                     <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                        <h4 className="text-lg font-display font-black text-white uppercase italic mb-4">❌ Smith, Maxwell, Stoinis — ODI Retirement</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-medium">
                          Three of the greatest white-ball cricketers have stepped away from the 50-over format entirely, focusing only on T20Is.
                        </p>
                     </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <Star className="w-8 h-8 text-pak-green" /> Key Players to Watch
                   </h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-pak-green/30 transition-all">
                        <h5 className="text-sm font-black uppercase tracking-widest text-pak-green mb-4">Mitchell Marsh (C)</h5>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                          Marsh leads a second-string squad. His fresh PSL 2026 experience with Multan Sultans gives him an edge in understanding Pakistani tracks.
                        </p>
                      </div>
                      <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-pak-green/30 transition-all">
                        <h5 className="text-sm font-black uppercase tracking-widest text-pak-green mb-4">Adam Zampa</h5>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                          The spin spearhead. With the "Big Three" bowlers missing, Zampa is the ultimate wicket-taking threat on these turning surfaces.
                        </p>
                      </div>
                      <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-pak-green/30 transition-all">
                        <h5 className="text-sm font-black uppercase tracking-widest text-rose-500 mb-4">Ollie Peake</h5>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                          Maiden call-up at 19. The former U19 captain is the future of Australian batting. Rawalpindi could be his big stage.
                        </p>
                      </div>
                      <div className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-pak-green/30 transition-all">
                        <h5 className="text-sm font-black uppercase tracking-widest text-pak-green mb-4">Billy Stanlake</h5>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                          Returning after a long injury layoff. His 145+ kmph pace and 6'8" frame could cause real trouble on bouncy Pindi pitches.
                        </p>
                      </div>
                   </div>
                </div>

                {/* IPL Conflict table */}
                <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-10 mb-12">
                   <h3 className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-8 flex items-center gap-2">
                     <Cpu className="w-4 h-4 text-pak-green" /> THE IPL CONFLICT STATUS
                   </h3>
                   <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-white/5">
                            <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Player</th>
                            <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">IPL Team</th>
                            <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">Current Status</th>
                            <th className="pb-4 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-right">PAK ODIs</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-display italic">
                          {iplConflict.map((player, idx) => (
                             <tr key={idx}>
                               <td className="py-4 text-sm font-bold text-white">{player.name}</td>
                               <td className="py-4 text-xs text-white/60">{player.team}</td>
                               <td className="py-4 text-xs text-white/40">{player.status}</td>
                               <td className="py-4 text-right">
                                 {player.available ? (
                                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center justify-end gap-2">
                                     <CheckCircle2 className="w-3 h-3" /> Early
                                   </span>
                                 ) : (
                                   <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 flex items-center justify-end gap-2">
                                     <XCircle className="w-3 h-3" /> No
                                   </span>
                                 )}
                               </td>
                             </tr>
                          ))}
                        </tbody>
                      </table>
                   </div>
                </div>

                <div className="bg-pak-green/10 border border-pak-green/30 rounded-[32px] p-8 md:p-10 my-12">
                   <h3 className="text-xl font-display font-bold text-white uppercase mb-4 flex items-center gap-3 italic">
                     "It's always exciting to see new players get an opportunity... The blend of experienced players coupled with new or returning players will provide a nice mix for these subcontinent tours."
                   </h3>
                   <p className="text-sm md:text-base font-black uppercase tracking-[2px] text-pak-green">— George Bailey, Chair of Selectors</p>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight">Series Schedule: Where and When</h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                        <p className="text-[10px] font-black text-pak-green uppercase mb-2">1st ODI</p>
                        <h4 className="text-white font-display font-black italic">30 May 2026</h4>
                        <p className="text-[9px] text-neutral-500 uppercase mt-1">Rawalpindi</p>
                      </div>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                        <p className="text-[10px] font-black text-pak-green uppercase mb-2">2nd ODI</p>
                        <h4 className="text-white font-display font-black italic">2 June 2026</h4>
                        <p className="text-[9px] text-neutral-500 uppercase mt-1">Lahore</p>
                      </div>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                        <p className="text-[10px] font-black text-pak-green uppercase mb-2">3rd ODI</p>
                        <h4 className="text-white font-display font-black italic">4 June 2026</h4>
                        <p className="text-[9px] text-neutral-500 uppercase mt-1">Lahore</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                     <TrendingUp className="w-8 h-8 text-pak-green" /> Analysis: Can This Australia Side Win?
                   </h2>
                   <p>
                     Australia hold a decent record in Pakistan, winning their last Champions Trophy encounter, but they suffered a 3-0 T20I whitewash earlier this year.
                   </p>
                   <p>
                     <strong>The Verdict:</strong> Pakistan should be heavy favourites at home. The absence of the "Big Three" fast bowlers leaves a massive hole. However, if Adam Zampa can spin a web and Mitchell Marsh finds his PSL-winning form, Australia could steal a victory in Rawalpindi's flatter conditions. Our prediction: <strong>Pakistan 2-1 Australia.</strong>
                   </p>
                </div>

                <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-10 mb-12">
                   <h3 className="text-sm font-black uppercase tracking-widest text-neutral-500 mb-8 flex items-center gap-2">
                     <Tv className="w-4 h-4 text-pak-green" /> BROADCAST DETAILS
                   </h3>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div>
                        <p className="text-[10px] font-black text-neutral-500 uppercase mb-2">Pakistan</p>
                        <p className="text-sm font-bold text-white italic">PTV Sports</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-neutral-500 uppercase mb-2">Australia</p>
                        <p className="text-sm font-bold text-white italic">Fox Sports</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-neutral-500 uppercase mb-2">UK</p>
                        <p className="text-sm font-bold text-white italic">Sky Sports</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-neutral-500 uppercase mb-2">India</p>
                        <p className="text-sm font-bold text-white italic">Sony Sports</p>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-16">
                   <Link 
                     to="/news" 
                     className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-[10px] font-black uppercase tracking-[3px] text-center hover:bg-white hover:text-[#050505] transition-all"
                   >
                     Back to News Hub
                   </Link>
                   <Link 
                     to="/schedule" 
                     className="flex-1 px-8 py-5 bg-pak-green text-white rounded-3xl text-[10px] font-black uppercase tracking-[3px] text-center hover:shadow-[0_0_30px_rgba(1,65,30,0.4)] transition-all"
                   >
                     Match Schedule
                   </Link>
                </div>
              </div>
            </div>

            <AdPlaceholder type="leaderboard" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
               
               {/* Quick Stats Widget */}
               <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Shield className="w-24 h-24" />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[3px] text-pak-green mb-8">Australia ODI Squad</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">3</div>
                        <p className="text-xs font-bold text-white/60 italic">Uncapped Players</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green font-bold text-sm">15</div>
                        <p className="text-xs font-bold text-white/60 italic">Squad Members</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-rose-600/10 flex items-center justify-center text-rose-500 font-bold text-sm">4</div>
                        <p className="text-xs font-bold text-white/60 italic">IPL Stars Absent</p>
                     </div>
                  </div>
               </div>

               {/* Related Stories */}
               <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[3px] text-neutral-500">Related Highlights</h4>
                  <div className="space-y-8">
                     <Link to="/news/australia-players-skip-pakistan-odi-series-ipl-2026" className="block group">
                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-2">IPL Conflict</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Why the Big 3 Are Missing the Bus</h5>
                     </Link>
                     <Link to="/pakistan-vs-australia-2026-schedule-odi" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Schedule Hub</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Full AUS Tour of PAK 2026 Table</h5>
                     </Link>
                     <Link to="/news/pakistan-vs-australia-2026-analysis" className="block group">
                        <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-2">Deep Dive</p>
                        <h5 className="text-sm font-bold text-white group-hover:text-pak-green transition-colors leading-relaxed">Historical Rivalry: Australia in Pakistan</h5>
                     </Link>
                  </div>
               </div>

               {/* Info Widget */}
               <div className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-[40px]">
                  <div className="flex items-center gap-4 mb-4">
                    <Info className="w-5 h-5 text-pak-green" />
                    <h5 className="text-[10px] font-black text-white uppercase tracking-widest">Editor's Note</h5>
                  </div>
                  <p className="text-[11px] leading-relaxed text-white/40 font-medium">
                    This squad is subject to change based on IPL eliminations. Cameron Green may join earlier if KKR are knocked out of the tournament before the play-offs.
                  </p>
               </div>

               <AdPlaceholder type="native" />
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection title="Explore More Stories" />
    </div>
  );
}
