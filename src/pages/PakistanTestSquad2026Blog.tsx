import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Trophy,
  ChevronRight,
  TrendingUp,
  Award,
  Zap,
  Globe,
  Quote,
  Shield,
  Star,
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  User,
  Activity,
  Sparkles,
  Bookmark
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function PakistanTestSquad2026Blog() {
  const squadList = [
    { num: 1, name: 'Babar Azam (C)', role: 'Right-hand bat', status: 'CAPTAIN — Confirmed' },
    { num: 2, name: 'Aamir Jamal', role: 'Right-arm fast-medium allrounder', status: 'Pace allrounder' },
    { num: 3, name: 'Abdullah Fazal', role: 'Left-hand bat (opener)', status: 'Bangladesh debutant — retained' },
    { num: 4, name: 'Ali Usman', role: 'Left-arm spin allrounder', status: 'Regular member' },
    { num: 5, name: 'Azan Awais', role: 'Left-hand bat (opener)', status: '103 on debut vs Bangladesh' },
    { num: 6, name: 'Imam-ul-Haq', role: 'Left-hand bat (opener)', status: 'Senior opener — recalled' },
    { num: 7, name: 'Khurram Shahzad', role: 'Right-arm fast', status: 'Pace regular' },
    { num: 8, name: 'Mohammad Abbas', role: 'Right-arm medium-fast', status: 'Senior — 110+ Test wickets' },
    { num: 9, name: 'Mohammad Ali', role: 'Right-arm fast', status: 'Regular pace option' },
    { num: 10, name: 'Mohammad Rizwan (WK)', role: 'Right-hand bat / WK', status: 'Recalled after injury' },
    { num: 11, name: 'Muhammad Awais Zafar', role: 'Right-hand bat', status: 'Middle-order option' },
    { num: 12, name: 'Muhammad Ghazi Ghori (WK)', role: 'Right-hand bat / WK', status: 'Second keeper' },
    { num: 13, name: 'Sajid Khan', role: 'Right-arm off-spin', status: 'Regular spinner' },
    { num: 14, name: 'Salman Ali Agha', role: 'Right-hand bat / Off-spin', status: 'Allrounder' },
    { num: 15, name: 'Saud Shakeel *', role: 'Left-hand bat', status: 'Subject to fitness clearance (England only)' },
    { num: 16, name: 'Shan Masood', role: 'Left-hand bat (opener)', status: 'Former captain — retained as player' },
    { num: 17, name: 'Ubaid Shah', role: 'Right-arm fast', status: 'UNCAPPED — maiden call-up' }
  ];

  const westIndiesSchedule = [
    { match: 'Warm-up (4-day)', date: 'July 18–21, 2026', venue: 'Trinidad & Tobago' },
    { match: '1st Test', date: 'July 25–29, 2026', venue: 'Trinidad & Tobago' },
    { match: '2nd Test', date: 'August 2–6, 2026', venue: 'Trinidad & Tobago' }
  ];

  const englandSchedule = [
    { match: '1st Test', date: 'August 19–23, 2026', venue: 'Headingley, Leeds' },
    { match: '2nd Test', date: 'August 27–31, 2026', venue: "Lord's, London" },
    { match: '3rd Test', date: 'September 9–13, 2026', venue: 'Edgbaston, Birmingham' }
  ];

  const paceAttack = [
    { name: 'Mohammad Abbas', wickets: '110 wickets (29 Tests)', type: 'Senior Swing Master', avg: '23.23' },
    { name: 'Ubaid Shah (Uncapped)', wickets: '72 wickets (16 FC matches)', type: 'Express Pace', avg: '25.20' },
    { name: 'Khurram Shahzad', wickets: 'Pace regular', type: 'Pace & Swing', avg: 'Domestic Star' },
    { name: 'Aamir Jamal', wickets: 'All-rounder value', type: 'Fast-Medium Allrounder', avg: 'Brave Performance' },
    { name: 'Mohammad Ali', wickets: 'Regular pace', type: 'Pace & Seam', avg: 'Consistent Line' }
  ];

  const omissions = [
    { player: 'Shaheen Shah Afridi', reason: 'Workload management + protecting white-ball spearhead for the 2027 ODI World Cup' },
    { player: 'Hasan Ali', reason: 'Age & form concerns' },
    { player: 'Noman Ali', reason: 'Seam-friendly overseas conditions & strategic restructuring' },
    { player: 'Hammad Butt', reason: 'Recent performance concerns' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan drop Shaheen, Hasan and Noman for West Indies and England Tests | PakCric</title>
        <meta name="description" content="Official squad announced: Pakistan announce 16-member Test squad for West Indies and England tours. Shaheen Shah Afridi dropped, Saud Shakeel fitness doubt. Complete squad analysis." />
        <meta name="keywords" content="Pakistan Test Squad 2026, Babar Azam Test Captain, Shaheen Shah Afridi dropped, Ubaid Shah debut, Saud Shakeel, Pakistan vs England 2026, Pakistan vs West Indies 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Bulletins
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Shield className="w-3 h-3 animate-pulse" /> Official Squad Announcement
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> July 5, 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Pakistan drop <span className="text-emerald-500 italic">Shaheen, Hasan</span> <br />
                and Noman for Tests
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                Saud Shakeel has been left out of the West Indies tour because of fitness issues, but Pakistan are expecting him to be back for the Tests in England.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm uppercase">
                  an
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Ahsan Iftikhar Nagi</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Pakistan Correspondent</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image Banner */}
      <section className="py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1540747737956-378724044602?auto=format&fit=crop&w=1200&q=80" 
                alt="Pakistan National Cricket Team Test Campaign" 
                className="w-full aspect-[16/9] object-cover filter brightness-75 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-[9px] font-black uppercase tracking-widest text-emerald-400">Campaign Reveal</span>
                  <h4 className="text-lg font-bold text-white uppercase mt-2 font-display">West Indies & England 2026 Test Squad</h4>
                </div>
                <div className="text-xs text-white/60 font-medium">
                  5-Test Overseas Campaign | PCB Official Announcement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Context Card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
              <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                <span className="text-white font-bold">LAHORE, PAKISTAN</span> — The Pakistan Cricket Board (PCB) has officially announced a 16-member Test squad for the upcoming tours of the West Indies and England — a crucial five-Test overseas campaign that will define Pakistan's World Test Championship 2025-27 aspirations and their ability to compete away from home.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5 text-center">
                <div className="p-4 bg-zinc-950/40 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 font-bold uppercase block mb-1">CAPTAIN CONFIRMED</span>
                  <p className="text-lg font-display font-black text-emerald-400">BABAR AZAM</p>
                </div>
                <div className="p-4 bg-zinc-950/40 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 font-bold uppercase block mb-1">MAJOR OMISSION</span>
                  <p className="text-lg font-display font-black text-rose-500">SHAHEEN AFRIDI</p>
                </div>
                <div className="p-4 bg-zinc-950/40 rounded-2xl border border-white/5">
                  <span className="text-xs text-white/40 font-bold uppercase block mb-1">MAIDEN CALL-UP</span>
                  <p className="text-lg font-display font-black text-yellow-500">UBAID SHAH</p>
                </div>
              </div>
            </div>

            {/* Complete Squad List Table */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight flex items-center gap-3">
                <Users className="text-emerald-500 w-6 h-6" /> The Official 16-Member Squad
              </h3>
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-white/5 text-[10px] font-black uppercase text-white/35 tracking-wider bg-white/[0.01]">
                        <th className="px-6 py-4">#</th>
                        <th className="px-6 py-4">Player</th>
                        <th className="px-6 py-4">Role</th>
                        <th className="px-6 py-4 text-right">Status / Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-white/80 font-medium">
                      {squadList.map((player) => (
                        <tr key={player.num} className="hover:bg-white/[0.01] transition-colors">
                          <td className="px-6 py-4 font-mono text-white/40">{player.num}</td>
                          <td className="px-6 py-4 font-bold text-white">{player.name}</td>
                          <td className="px-6 py-4 text-white/60">{player.role}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`inline-block px-2.5 py-1 text-[9px] font-black uppercase rounded-lg tracking-wider ${
                              player.status.includes('CAPTAIN') 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                : player.status.includes('UNCAPPED')
                                ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                                : player.status.includes('Subject')
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-white/5 text-white/60'
                            }`}>
                              {player.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-white/40 italic">
                * Note: Saud Shakeel is named only for the England leg, subject to passing fitness clearances.
              </p>
            </div>

            {/* Tour Schedule Section */}
            <div className="space-y-8 pt-6 border-t border-white/5">
              <h3 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-tight flex items-center gap-3">
                <Calendar className="text-emerald-500 w-6 h-6" /> The Test Tours Schedule
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* West Indies */}
                <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-yellow-500 tracking-widest">WEST INDIES</span>
                    <span className="text-[10px] font-bold text-white/40">JULY 18 – AUG 6</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white uppercase">Caribbean Leg</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Pakistan departs on July 13. They play a 4-day warm-up in Trinidad and Tobago prior to the two critical WTC Test encounters.
                  </p>
                  <div className="space-y-3 pt-2">
                    {westIndiesSchedule.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-xs">
                        <span className="font-bold text-white">{item.match}</span>
                        <div className="text-right">
                          <span className="text-white/60 font-mono block">{item.date}</span>
                          <span className="text-white/30 text-[9px] uppercase tracking-wider block">{item.venue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* England */}
                <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-emerald-400 tracking-widest">ENGLAND</span>
                    <span className="text-[10px] font-bold text-white/40">AUG 19 – SEP 13</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white uppercase">England Leg</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Following the Caribbean tour, Pakistan travels to England for a heavy three-Test battle starting at Leeds and moving to Lord's.
                  </p>
                  <div className="space-y-3 pt-2">
                    {englandSchedule.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-xs">
                        <span className="font-bold text-white">{item.match}</span>
                        <div className="text-right">
                          <span className="text-white/60 font-mono block">{item.date}</span>
                          <span className="text-white/30 text-[9px] uppercase tracking-wider block">{item.venue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Deep News 1: Babar Azam Captain */}
            <div className="space-y-4 pt-8 border-t border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-emerald-400">ANALYSIS #1</span>
              <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
                Babar Azam — Test Captain Again
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                The most significant news in the squad announcement is the confirmation of <strong>Babar Azam as Test captain</strong> — his third spell in a Pakistan leadership role, following his previous tenure across formats (2020-2023) and his brief T20I recall in 2024.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                Babar was first appointed all-format captain in 2020 before stepping down in late 2023. He was briefly brought back as white-ball captain in March 2024 but resigned in October 2024. His expected appointment as Test captain in 2026 makes it his third spell in a top leadership role for Pakistan.
              </p>
              <div className="p-6 bg-emerald-500/[0.03] border border-emerald-500/20 rounded-2xl">
                <p className="text-sm text-white/80 italic font-medium">
                  "Babar's supporters within the board believe he is a safer, more stable long-term option in red-ball cricket. Between 2020 and 2023, he led Pakistan in 20 Tests and won 10 of them, including a rare and historic away series victory in Sri Lanka."
                </p>
              </div>
              <p className="text-sm text-white/50 font-medium">
                His Test captaincy record: <strong>W10, L5, D5 in 20 matches</strong> — a 50% win rate that is significantly stronger than Shan Masood's 2 wins in 16 Tests (12.5%). Babar enters this appointment on the back of a spectacular domestic campaign, showing his confidence is peaking.
              </p>
            </div>

            {/* Deep News 2: Shaheen Shah Afridi DROPPED */}
            <div className="space-y-4 pt-8 border-t border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-rose-500">ANALYSIS #2</span>
              <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
                Shaheen Afridi DROPPED — The Biggest Shock
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                For the first time in his Test career, <strong>Shaheen Shah Afridi has been dropped</strong> from the Pakistan Test squad. This is easily the most shocking selection decision in Pakistan's recent cricket calendar. Shaheen — the spearhead of Pakistan's bowling attack for the last four years and the current ODI captain — has been completely omitted from the red-ball setup.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-zinc-950/50 border border-white/5 rounded-2xl">
                  <h5 className="text-sm font-bold text-white uppercase mb-2">1. Workload Protection</h5>
                  <p className="text-xs text-white/60 leading-relaxed">
                    With the 2027 ODI World Cup on the horizon, the PCB wants to protect its premier white-ball bowler from the immense physical toll of 5 Tests in 6 weeks.
                  </p>
                </div>
                <div className="p-5 bg-zinc-950/50 border border-white/5 rounded-2xl">
                  <h5 className="text-sm font-bold text-white uppercase mb-2">2. English Seam Suitability</h5>
                  <p className="text-xs text-white/60 leading-relaxed">
                    England traditionally rewards swing-bowling from seam. Seamers like Abbas, Ali, and Jamal are seen as better fits for the local conditions.
                  </p>
                </div>
                <div className="p-5 bg-zinc-950/50 border border-white/5 rounded-2xl">
                  <h5 className="text-sm font-bold text-white uppercase mb-2">3. Performance Reset</h5>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Following some physical concerns during the Bangladesh series, a rest-and-rebuild plan is being implemented to bring Shaheen back to full fitness.
                  </p>
                </div>
              </div>
            </div>

            {/* Deep News 3: Ubaid Shah - The New Phenom */}
            <div className="space-y-4 pt-8 border-t border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">ANALYSIS #3</span>
              <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
                Ubaid Shah — The Exciting Debut
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                At just 20 years old, <strong>Ubaid Shah</strong> — the younger brother of world-class bowler Naseem Shah — has earned a stunning maiden call-up to the Test team. Hailing from Lower Dir, KPK, Ubaid has forced selectors' hands with an exceptional domestic performance: <strong>72 wickets in 16 first-class matches</strong> at a staggering average of <strong>25.20</strong>.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                Ubaid is an express pace bowler who has been working aggressively in the red-ball camp at the LCCA Ground. The prospective visual of two Shah brothers charging in for Pakistan is an incredibly exciting story for Pakistan cricket fans.
              </p>
            </div>

            {/* Omissions and Additions tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {/* Omissions */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold uppercase text-white tracking-tight flex items-center gap-2">
                  <AlertCircle className="text-rose-500 w-5 h-5" /> Major Omissions
                </h4>
                <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5 space-y-4">
                  {omissions.map((om, idx) => (
                    <div key={idx} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                      <h5 className="text-sm font-bold text-white">{om.player}</h5>
                      <p className="text-xs text-white/50 leading-relaxed mt-1">{om.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pace Attack */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold uppercase text-white tracking-tight flex items-center gap-2">
                  <Activity className="text-emerald-500 w-5 h-5" /> The Pace Attack Blueprint
                </h4>
                <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5 space-y-3">
                  {paceAttack.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-white/5 last:border-0">
                      <div>
                        <span className="font-bold text-white block">{p.name}</span>
                        <span className="text-[10px] text-white/40">{p.type}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 font-mono block">{p.avg}</span>
                        <span className="text-white/30 text-[9px] block">{p.wickets}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Match Schedules Official Portal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-950/20 via-black to-black border border-emerald-500/30 rounded-[32px] p-8 md:p-12 text-left relative overflow-hidden mt-12"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-full text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                    <Globe className="w-3 h-3 animate-pulse" /> OFFICIAL SCHEDULE PORTAL
                  </span>
                  <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                    Follow Every Match Schedule Online
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">
                    For upcoming team fixtures, international calendars, live scores, and player statistics, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300 font-bold font-mono">pakcric-schedule.online</a>.
                  </p>
                </div>
                <div className="shrink-0">
                  <a 
                    href="https://pakcric-schedule.online" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-emerald-600 text-white hover:bg-emerald-700 rounded-[20px] text-xs font-black uppercase tracking-[3px] transition-all group shadow-lg shadow-emerald-600/30"
                  >
                    Visit Portal <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Pakistan Announce Test Squad for West Indies & England Tours — Babar Azam CAPTAIN, Shaheen OUT, Ubaid Shah Uncapped Debut, Saud Shakeel Fitness Doubt" 
        summary="Pakistan announce a 16-member Test squad for the tours of West Indies and England. Babar Azam returns as captain, Shaheen Afridi is dropped, Ubaid Shah gets his maiden call-up, and Saud Shakeel has fitness concerns." 
      />
    </div>
  );
}
