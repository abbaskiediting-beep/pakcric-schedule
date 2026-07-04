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
  HelpCircle
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BabarAzamReturnTestCaptainBlog() {
  const captainRecord = [
    { stat: 'Tests as Captain', val: '20' },
    { stat: 'Wins', val: '10' },
    { stat: 'Losses', val: '5' },
    { stat: 'Draws', val: '5' },
    { stat: 'Win Percentage', val: '50.00%' },
    { stat: 'Key Achievement', val: 'Away series win in Sri Lanka' }
  ];

  const careerStats = [
    { stat: 'Tests Played', val: '54' },
    { stat: 'Runs Scored', val: '4,648' },
    { stat: 'Batting Average', val: '47.50' },
    { stat: 'Centuries', val: '10' },
    { stat: 'Half-Centuries', val: '29' },
    { stat: 'Highest Score', val: '196' }
  ];

  const timeline = [
    { period: '2020–2023', role: 'Babar Azam (All Formats)', record: 'Tests: W10 / L5 / D5 in 20 matches' },
    { period: '2023–2026', role: 'Shan Masood (Tests)', record: 'W2 / L11 in ~16 Tests' },
    { period: '2026 (Imminent)', role: 'Babar Azam (Tests - 3rd Spell)', record: 'Pending official confirmation (Chairman Naqvi approved)' }
  ];

  const schedule = [
    { fixture: 'Pakistan vs England 1st Test', date: 'August 19–23, 2026', venue: 'Headingley, Leeds' },
    { fixture: 'Pakistan vs England 2nd Test', date: 'August 27–31, 2026', venue: "Lord's, London" },
    { fixture: 'Pakistan vs England 3rd Test', date: 'September 9–13, 2026', venue: 'Edgbaston, Birmingham' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam Returns as Pakistan Test Captain 2026 | PCB Naqvi Approves | PakCric</title>
        <meta name="description" content="PCB Chairman Mohsin Naqvi has approved Babar Azam's return as Pakistan Test captain, replacing Shan Masood. Formal announcement expected within days. Babar's 3rd captaincy spell, Test record as captain 10W-5L in 20 matches. Full details, background and reaction." />
        <meta name="keywords" content="Babar Azam Test Captain, PCB Mohsin Naqvi, Shan Masood, Pakistan Cricket Captain, Babar Azam Captaincy Record, Pakistan vs England 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-yellow-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#115e59]/10 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Bulletins
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-3 h-3 animate-pulse" /> Breaking News
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-yellow-500" /> July 4, 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Babar Azam <br />
                <span className="text-yellow-500 italic">Returns</span> <br />
                As Test Captain.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                PCB Chairman Mohsin Naqvi has approved the return of Babar Azam to lead Pakistan in the Test format, replacing Shan Masood after a series of difficult results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1540747737956-37872404a821?auto=format&fit=crop&w=1200&q=80" 
                alt="Babar Azam Pakistan Test captain" 
                className="w-full aspect-[16/9] object-cover filter brightness-75 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="px-3 py-1 bg-black/60 border border-white/15 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/80">PCB Leadership Re-org</span>
                  <h4 className="text-lg font-bold text-white uppercase mt-2 font-display">Babar Azam Reclaims Red-Ball Throne</h4>
                </div>
                <div className="text-xs text-white/60 font-medium">
                  54 Tests | 4,648 Runs | 47.50 Average
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking Story Card */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight mb-6 flex items-center gap-3">
              <Zap className="text-yellow-500 animate-pulse w-6 h-6" /> 🚨 BREAKING: Leadership Restructuring Confirmed
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                <span className="text-white font-bold">Pakistan, July 4, 2026</span> — In what is being described as one of the most significant leadership decisions in Pakistan cricket in recent years, Babar Azam is set to return as the national Test team captain — with PCB Chairman Mohsin Naqvi himself reportedly approving the appointment.
              </p>
              <p>
                According to persistent reports circulating from highly credible sources within the Pakistan Cricket Board, Babar Azam is expected to return under a new high-profile appointment as Pakistan national Test cricket team captain. Reports from sources familiar with the development suggest the PCB Chairman Mohsin Naqvi has most recently ratified this captaincy appointment after strenuous deliberations held by the board through the course of the weekend.
              </p>
              <p>
                According to sources, the formal announcement could come today or on Monday, paving the way for Babar Azam's latest return to a leadership role in the national side.
              </p>
              <p>
                The expected confirmation would end Shan Masood's troubled tenure as Test captain and mark the beginning of Babar Azam's <strong className="text-white">third stint</strong> in a Pakistan captaincy role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Why PCB is Making This Change */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">THE CONTEXT</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mt-1">The Full Story: Why PCB Is Making This Change</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold uppercase text-white">Shan Masood's Difficult Tenure</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  The move comes after Shan Masood's difficult run as Test captain. Since taking charge in late 2023, Pakistan managed just two wins in 16 Tests, with the latest blow being a 0-2 series defeat to Bangladesh in May.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Pakistan have lost 11 out of 15 Tests under Shan Masood's captaincy since late 2023. This decision comes against the backdrop of mounting criticism against the recent Test series showing under his leadership, under whose stewardship the Green side has languished under an abject tactical lull for nearly three years.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold uppercase text-white">Masood Offered a PCB Role</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Masood himself may be moving on voluntarily. Shan Masood was himself deeply disappointed after the first Test defeat and is now seriously considering taking up a permanent role with the Pakistan Cricket Board.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  He was offered the post of Director of International Cricket and Player Affairs last year by PCB Chairman Mohsin Naqvi, but had opted to complete the ongoing World Test Championship cycle. If Masood accepts, the transition becomes cleaner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Babar's Captaincy History Timeline */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">CAPTAINCY HISTORY</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mt-1">The Third Time Around</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">Babar Azam's journey through different spells of national leadership</p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-yellow-500/10 border-l border-b border-white/5 rounded-bl-3xl text-[9px] font-black uppercase tracking-widest text-yellow-400">SPELL 1 (2020-2023)</div>
                <h4 className="text-xl font-display font-bold text-white uppercase mb-2">First Spell: All Three Formats</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Babar was captain of all three formats between 2019 and 2023 before he was forced to step down after the 2023 World Cup in India. His first captaincy spell saw Pakistan reach No.1 in the ICC T20I rankings, win a home series against England in Tests for the first time in 20 years, and achieve historic Test victories in Sri Lanka.
                </p>
              </div>

              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-yellow-500/10 border-l border-b border-white/5 rounded-bl-3xl text-[9px] font-black uppercase tracking-widest text-yellow-400">SPELL 2 (2024 T20 WC)</div>
                <h4 className="text-xl font-display font-bold text-white uppercase mb-2">Second Spell: T20I Only</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  He was brought back as T20 captain for the 2024 World Cup but stepped down again after a poor tournament. The recall ended in disappointment as Pakistan failed to reach the semi-finals despite a strong squad. Babar personally underperformed, scoring 91 runs in 4 innings, and decided to step down once more to focus on his cricket.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-950/20 to-transparent border border-yellow-500/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-yellow-500/20 border-l border-b border-yellow-500/20 rounded-bl-3xl text-[9px] font-black uppercase tracking-widest text-yellow-400 animate-pulse">SPELL 3 (2026 - IMMINENT)</div>
                <h4 className="text-xl font-display font-bold text-yellow-400 uppercase mb-2">Third Spell: Red-Ball Test Captain</h4>
                <p className="text-sm text-white/80 leading-relaxed font-semibold">
                  The third call is specifically for Tests — the format where Babar's captaincy record is strongest and where his batting average (47.50 in Tests overall, 10 wins in 20 Tests as captain) speaks for itself. Between 2020 and 2023, he led Pakistan in 20 Tests and won 10 of them, including a rare away series victory in Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Comparative Records */}
      <section className="py-12 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">STATISTICAL COMPARISON</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mt-1">Babar Azam vs Shan Masood Test Record</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">The stark numbers driving Mohsin Naqvi's decision</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Table 1: Babar's Captaincy Stats */}
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-white/5 bg-yellow-500/5">
                  <h4 className="text-sm font-display font-black uppercase text-yellow-400 tracking-widest">Babar Azam as Test Captain</h4>
                </div>
                <div className="p-6 space-y-4">
                  {captainRecord.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-sm">
                      <span className="text-white/60 font-medium">{row.stat}</span>
                      <span className="font-mono font-bold text-white">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table 2: Babar's overall Career Stats */}
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-white/5 bg-emerald-500/5">
                  <h4 className="text-sm font-display font-black uppercase text-emerald-400 tracking-widest">Babar's Overall Test Career</h4>
                </div>
                <div className="p-6 space-y-4">
                  {careerStats.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 text-sm">
                      <span className="text-white/60 font-medium">{row.stat}</span>
                      <span className="font-mono font-bold text-white">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-950/40 border border-white/5 rounded-2xl text-center text-sm text-white/60 leading-relaxed max-w-2xl mx-auto">
              Overall, Babar has played <strong className="text-white">54 Tests</strong> for Pakistan, scoring <strong className="text-white">4,648 runs</strong> with the help of <strong className="text-white">10 centuries</strong> at an average of <strong className="text-yellow-400">47.50</strong> and a highest score of <strong className="text-white">196</strong>. His Test average is the highest among active Pakistan batters.
            </div>
          </div>
        </div>
      </section>

      {/* Conditions & Details */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Babar's Conditions: Not a Blank Cheque</h3>
            
            <div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                The appointment is not without complications. Reports also suggest that <strong className="text-white">Babar has not yet given the green signal</strong> for the offer. It is being said that the former Pakistan captain wants clarity over his role before accepting the responsibility. Babar now wants strong support from the selectors and confidence that he will get enough time to build the team if he becomes captain again.
              </p>
              
              <div className="p-8 bg-zinc-950/60 border-l-4 border-yellow-500 rounded-r-3xl relative my-8">
                <Quote className="absolute top-4 right-6 w-24 h-24 text-yellow-500/5 pointer-events-none" />
                <p className="text-base sm:text-lg font-medium italic text-white/90 leading-relaxed mb-4">
                  "At the same time, some reports claim that Babar is also thinking about focusing only on his batting instead of taking on the extra pressure of captaincy. In this situation, there are other options available for the board if Babar denies the red-ball captaincy offer."
                </p>
                <span className="block text-xs font-black uppercase tracking-widest text-yellow-400">— PCB Insider Source</span>
              </div>

              <p>
                Pakistan's vice-captain <strong className="text-white">Saud Shakeel</strong> is one of the leading candidates because of his consistent performances and calm approach if Babar decides against returning. However, Babar is negotiating from a position of strength. His PSL 2026 was the greatest individual season in the tournament's history — 588 runs, two centuries, and lifting the Infinity Trophy as Peshawar Zalmi captain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2027 ODI planning card */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-950/30 to-black border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
            <h4 className="text-xl font-display font-bold text-emerald-400 uppercase tracking-tight mb-3">The Bigger Picture: 2027 ODI World Cup Planning</h4>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              There are also reports that some PCB officials want Babar to become the ODI captain before the next ODI World Cup in 2027. The long-term plan could see Babar prepare as captain for the 2027 ODI World Cup as well. Currently, Shaheen Shah Afridi holds the ODI captaincy, but the board's structural roadmap strongly leans toward restoring Babar's unified leadership across key formats.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Test Schedule against England */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">UPCOMING ASSIGNMENT</span>
              <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight mt-1">What This Means for Pakistan's Tour of England</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">August to September 2026 test fixtures</p>
            </div>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              If Babar is confirmed as Test captain within the next few days, his first major assignment will be the upcoming historic tour of England. England, recently undergoing their own transition following <Link to="/news/ben-stokes-retires-from-international-cricket-2026" className="text-yellow-400 underline font-bold">Ben Stokes' shock retirement on June 29, 2026</Link>, are a different proposition altogether.
            </p>

            <div className="bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] font-black uppercase text-white/35 tracking-wider">
                      <th className="px-6 py-4">Match / Fixture</th>
                      <th className="px-6 py-4 text-center">Dates</th>
                      <th className="px-6 py-4 text-right">Venue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-white/80 font-medium">
                    {schedule.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                        <td className="px-6 py-4 font-bold text-white">{row.fixture}</td>
                        <td className="px-6 py-4 text-center font-mono text-yellow-400 font-bold">{row.date}</td>
                        <td className="px-6 py-4 text-right text-white/60">{row.venue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Captaincy timeline list */}
      <section className="py-12 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-widest">Timeline: Pakistan's Captaincy Journey</h3>
            <div className="relative border-l border-white/10 pl-6 space-y-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-yellow-500 border-2 border-[#050505]" />
                  <span className="text-xs font-mono font-bold text-yellow-400 block">{item.period}</span>
                  <h4 className="text-sm font-bold text-white mt-1">{item.role}</h4>
                  <p className="text-xs text-white/50 mt-0.5">{item.record}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">Conclusion: Rebuilding Test Identity</h2>
            <p>
              The appointment of Babar Azam as Pakistan Test captain — if confirmed in the coming days — will be the most consequential cricket decision Pakistan have made in 2026. It will reunite Pakistan's greatest modern Test batter with the captaincy role in which he performed best. It will provide stability and experience ahead of the England tour. And it will signal that Pakistan, after the humiliation of the Bangladesh series, are serious about rebuilding their Test cricket identity.
            </p>
            <p>
              The potential replacement of Shan Masood marks a significant turning point in the modern management strategy of Pakistan cricket after an incredibly challenging period.
            </p>
            <p className="text-xl font-display font-black text-yellow-500 uppercase tracking-widest">
              Official announcement expected: within the next 24–48 hours.
            </p>

            {/* Enhanced call to action to pakcric-schedule.online */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-950/20 via-black to-black border border-emerald-500/30 rounded-[32px] md:rounded-[48px] p-8 md:p-12 relative overflow-hidden text-left mt-16"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-full text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                    <Globe className="w-3 h-3 animate-pulse" /> OFFICIAL PORTAL
                  </span>
                  <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                    Never Miss any Cricket Schedules
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">
                    For the upcoming Pakistan tour of England schedule, team fixtures, live scores, and player statistics, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300 font-bold font-mono">pakcric-schedule.online</a>.
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

            {/* Match Archive links / Internal Linking */}
            <div className="pt-20 border-t border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500 mb-8">Related Content</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/news/highest-odi-batting-average-at-home-top-5-all-time" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                   <div>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Statistical Ratios</span>
                      <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Highest ODI Batting Average at Home</h5>
                   </div>
                   <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/news/babar-azam-fastest-7000-odi-runs-record-2026-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                   <div>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Record Alert</span>
                      <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">Babar Azam Chasing 7,000 ODI Runs</h5>
                   </div>
                   <ChevronRight className="w-5 h-5 text-yellow-500 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Babar Azam Set to Return as Pakistan Test Captain — PCB Chairman Mohsin Naqvi Approves the Move" 
        summary="PCB Chairman Mohsin Naqvi has approved Babar Azam's return as Pakistan Test captain, replacing Shan Masood. Read full report." 
      />
    </div>
  );
}
