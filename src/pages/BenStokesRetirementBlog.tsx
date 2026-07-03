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
  BookOpen,
  Activity,
  History,
  Zap,
  Globe,
  Quote,
  Flame,
  CheckCircle2,
  TrendingDown,
  User,
  Shield,
  Star
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BenStokesRetirementBlog() {
  const stats = [
    { format: 'Tests', matches: 122, runs: '7,243', avg: '34.49', centuries: 14, wickets: '200+' },
    { format: 'ODIs', matches: 114, runs: '3,463', avg: '41.23', centuries: 5, wickets: '74' },
    { format: 'T20Is', matches: 43, runs: '585', avg: '—', centuries: 0, wickets: '23' }
  ];

  const defineMoments = [
    {
      num: '1',
      title: 'Headingley 2019 — The Greatest Ashes Innings of the Modern Era',
      desc: 'England needed 359 to win the 3rd Ashes Test — a seemingly impossible target. At 286/9, they still needed 73 runs with only last man Jack Leach for company. His unbeaten 135 at Headingley — with Leach scoring 1 not out while facing 17 deliveries — is arguably the greatest innings in modern Test cricket. England won by 1 wicket to keep the Ashes alive.',
      bg: 'from-amber-600/10 to-transparent',
      border: 'border-amber-500/20'
    },
    {
      num: '2',
      title: '2019 ODI World Cup Final — Super Over Hero',
      desc: "Lord's. July 14, 2019. Stokes's unbeaten 84 in the final — including the deflection off his bat that went to the boundary when he dived to avoid a run-out — was the most debated and most dramatic moment in ODI history. England won on boundary count-back, securing their maiden men's 50-over World Cup title.",
      bg: 'from-blue-600/10 to-transparent',
      border: 'border-blue-500/20'
    },
    {
      num: '3',
      title: '2022 T20 World Cup Final — Cool Head Under Fire',
      desc: "Stokes anchored England's chase with an unbeaten 52 against Pakistan at the Melbourne Cricket Ground, securing the global title. England needed 138 off 20 overs, and Stokes came in at number three to build the chase exactly as required — calm, precise, and unbeaten to win by 5 wickets.",
      bg: 'from-rose-600/10 to-transparent',
      border: 'border-rose-500/20'
    },
    {
      num: '4',
      title: 'Cape Town 2016 — The Fastest Double Century by an England Batter',
      desc: 'He smashed a brutal 258 against South Africa in Cape Town in 2016, which remains the fastest-ever Test double-century by an England batsman. He reached his double hundred in just 163 balls, dominating one of the world\'s best bowling attacks at the age of just 24.',
      bg: 'from-purple-600/10 to-transparent',
      border: 'border-purple-500/20'
    },
    {
      num: '5',
      title: 'Bazball — Transforming Test Cricket',
      desc: 'Appointed England Test captain in April 2022 alongside head coach Brendon McCullum, Stokes revolutionized Test cricket with "Bazball," an aggressive, fearless approach to the red-ball format. Under their leadership, England won 13 of their first 18 Tests, chasing down mammoth totals and revitalizing global interest in red-ball cricket.',
      bg: 'from-emerald-600/10 to-transparent',
      border: 'border-emerald-500/20'
    }
  ];

  const timeline = [
    { year: '2011', milestone: 'International debut' },
    { year: '2013', milestone: 'First Test century' },
    { year: '2016', milestone: '258 vs South Africa — fastest England Test double century' },
    { year: '2019', milestone: '135* at Headingley — saves the Ashes' },
    { year: '2019', milestone: '84* in ODI World Cup Final — England win World Cup' },
    { year: '2022', milestone: 'Appointed England Test captain alongside Brendon McCullum' },
    { year: '2022', milestone: 'Bazball era begins — England transform Test cricket' },
    { year: '2022', milestone: '52* in T20 World Cup Final — England win T20 World Cup' },
    { year: '2022', milestone: 'ODI retirement (reversed for 2023 WC)' },
    { year: '2023', milestone: 'Last ODI at 2023 World Cup' },
    { year: '2026', milestone: 'Full international retirement — June 28, Trent Bridge' },
    { year: '2026', milestone: 'Returns to play for boyhood club Durham' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Ben Stokes Retirement 2026 | Career Stats, Legacy & Records | PakCric</title>
        <meta name="description" content="Ben Stokes announced retirement from international cricket on June 28 2026 during 3rd Test vs New Zealand at Trent Bridge. 122 Tests, 7243 runs, 14 centuries, 200+ wickets, ODI World Cup 2019, T20 World Cup 2022, Headingley 135*. Full career tribute, stats and legacy." />
        <meta name="keywords" content="Ben Stokes retirement, Ben Stokes career statistics, Headingley 135*, Bazball, Ben Stokes stats, England cricket, Trent Bridge Test 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-rose-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News & Bulletins
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Trophy className="w-3 h-3 animate-pulse" /> Retirement Tribute
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-rose-500" /> June 29, 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Ben Stokes <br />
                <span className="text-rose-500 italic">Retires.</span> <br />
                The End Of An Era.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                England's ultimate match-winner Ben Stokes has announced his retirement from all international cricket at Trent Bridge, concluding a legendary 15-year career.
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
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80" 
                alt="Ben Stokes England cricket captain" 
                className="w-full aspect-[16/9] object-cover filter brightness-75 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="px-3 py-1 bg-black/60 border border-white/15 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/80">Trent Bridge, June 2026</span>
                  <h4 className="text-lg font-bold text-white uppercase mt-2 font-display">A Guard of Honour for England's No. 55</h4>
                </div>
                <div className="text-xs text-white/60 font-medium">
                  Matches: 122 Tests | 114 ODIs | 43 T20Is
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight mb-6 flex items-center gap-3">
              <Zap className="text-rose-500 animate-pulse w-6 h-6" /> Breaking: Ben Stokes Retires — Cricket Stops and Mourns
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                <span className="text-white font-bold">June 28, 2026. Trent Bridge, Nottingham.</span> Day four of the third Test against New Zealand. The afternoon session was underway. Ben Stokes was bowling. And then the news broke.
              </p>
              <p>
                England Test captain Ben Stokes has announced that he will retire from international cricket after the third Test against New Zealand at Trent Bridge, bringing an end to a distinguished career that began in 2011.
              </p>
              <p>
                The shock announcement was made during the afternoon session on the fourth day of the series decider at Trent Bridge while he was bowling — and moments after the news broke at 3:25pm, Stokes took a wicket with the very next ball. He received a guard of honour as he entered the field for the final time, and a standing ovation as he was dismissed after a 20-ball 30.
              </p>
              <p>
                The 35-year-old informed his teammates of the decision before the start of play on Sunday. The decision follows a turbulent start to the year — Stokes kept his captaincy despite a 4-1 Ashes thrashing in Australia but was dropped for his involvement in a nightclub incident after their first Test win over New Zealand, before returning to lead the side at Trent Bridge.
              </p>
              <p>
                His final match ended in a 160-run defeat on June 29, 2026, securing a 2-1 series victory for the visitors. His departure marks the end of one of the most explosive and transformative eras in English cricket history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Showcase */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[4px] text-white/40 mb-2">Stokes In His Own Words</h3>
            
            <div className="p-8 bg-zinc-950/60 border-l-4 border-rose-500 rounded-r-3xl relative">
              <Quote className="absolute top-4 right-6 w-24 h-24 text-rose-500/5 pointer-events-none" />
              <p className="text-lg sm:text-xl font-medium italic text-white/90 leading-relaxed mb-4">
                "To be honest, it might sound quite selfish, but this decision is generally the best thing for me right now. Whether that means it's the best thing for the team going forward, I hope so. It comes down to what I think is going to allow me to still love this game that I've played since I was a kid and has given me a career. I'm very excited about the next part of what I get to do — going back and playing for my boyhood club Durham."
              </p>
              <span className="block text-xs font-black uppercase tracking-widest text-rose-400">— Ben Stokes, Nottingham Press Briefing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <p className="text-sm text-white/70 leading-relaxed italic">
                  "There's been moments this week where it's been really tough and again that just adds to everything. It really makes it very clear in your mind that you're probably making the right decision."
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <p className="text-sm text-white/70 leading-relaxed">
                  At 35, Stokes explained that the physical, mental, and emotional toll of international cricket drove his decision. He noted that the grueling schedule and the energy required to captain the Test side had left him with <strong className="text-white">"no more fight"</strong> to continue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Stats Grid & Table */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight">Career in Numbers: A Statistical Legend</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">International cricket records spanning 2011 to 2026</p>
              </div>
              <div className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-[10px] font-black uppercase tracking-wider text-rose-400">
                Double Club: 7,000+ Runs & 200+ Wickets
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 text-center">
                <span className="text-[10px] font-black uppercase text-white/30 tracking-widest block mb-2">Test Runs</span>
                <span className="text-4xl font-display font-black text-rose-400">7,243</span>
                <span className="text-[10px] font-bold text-white/40 block mt-2">Avg: 34.49 | 14 Hundreds</span>
              </div>
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 text-center">
                <span className="text-[10px] font-black uppercase text-white/30 tracking-widest block mb-2">ODI Runs</span>
                <span className="text-4xl font-display font-black text-white">3,463</span>
                <span className="text-[10px] font-bold text-white/40 block mt-2">Avg: 41.23 | 5 Hundreds</span>
              </div>
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-rose-500/10 blur-[20px] rounded-full" />
                <span className="text-[10px] font-black uppercase text-white/30 tracking-widest block mb-2">Test Wickets</span>
                <span className="text-4xl font-display font-black text-rose-400">200+</span>
                <span className="text-[10px] font-bold text-white/40 block mt-2">Second only to Jacques Kallis</span>
              </div>
            </div>

            {/* Custom Table */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
              <div className="p-6 border-b border-white/5">
                <h4 className="text-sm font-display font-black uppercase text-white tracking-widest">Complete Career Statistics</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] font-black uppercase text-white/35 tracking-wider">
                      <th className="px-6 py-4">Format</th>
                      <th className="px-6 py-4 text-center">Matches</th>
                      <th className="px-6 py-4 text-center">Runs</th>
                      <th className="px-6 py-4 text-center">Average</th>
                      <th className="px-6 py-4 text-center">Centuries</th>
                      <th className="px-6 py-4 text-right">Wickets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-white/80 font-medium">
                    {stats.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                        <td className="px-6 py-4 font-bold text-white">{row.format}</td>
                        <td className="px-6 py-4 text-center font-mono">{row.matches}</td>
                        <td className="px-6 py-4 text-center font-mono">{row.runs}</td>
                        <td className="px-6 py-4 text-center font-mono">{row.avg}</td>
                        <td className="px-6 py-4 text-center font-mono text-rose-400 font-bold">{row.centuries}</td>
                        <td className="px-6 py-4 text-right font-mono font-bold text-rose-400">{row.wickets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-xs text-white/40 leading-relaxed">
              * During his final Test at Trent Bridge, Stokes became only the second player in Test cricket history — alongside South African legend Jacques Kallis — to achieve the double of 7,000 runs and 250 wickets (overall across standard formats).
            </div>
          </div>
        </div>
      </section>

      {/* Defining Moments Carousel/Timeline Layout */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-rose-400">ICONIC TALES</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mt-1">The Moments That Defined a Career</h3>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-2">Five legendary chapters from Headingley to Melbourne</p>
            </div>

            <div className="space-y-6">
              {defineMoments.map((moment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${moment.bg} border ${moment.border} rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:scale-[1.01] transition-all`}
                >
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center font-display font-black text-xl italic shrink-0 text-rose-400">
                      0{moment.num}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight mb-2">{moment.title}</h4>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed font-medium">{moment.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* In-content image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1540747737956-37872404a821?auto=format&fit=crop&w=1200&q=80" 
                alt="Ben Stokes World Cup celebration" 
                className="w-full aspect-[21/9] object-cover filter brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="max-w-xl space-y-3">
                  <h5 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-none">The Lord's Masterclass</h5>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    His unbeaten 84 in the 2019 ODI World Cup final against New Zealand helped England secure their maiden men's 50-over World Cup title. Later that year, he produced one of the most celebrated Test innings by scoring an unbeaten 135 against Australia at Headingley to keep England alive in the Ashes series.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Controversy */}
      <section className="py-12 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="markdown-body space-y-12 text-lg sm:text-xl leading-relaxed text-white/70">
              
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">The Turbulent Final Chapter: Nightclub Incident and Final Series</h3>
                <p>
                  The announcement followed a turbulent month. Stokes missed the second Test against New Zealand due to a curfew violation before returning to lead the side at Trent Bridge.
                </p>
                <p>
                  The final year of Stokes's career was not without controversy. A 4-1 Ashes defeat in Australia had already raised questions about his future. Then the nightclub incident — details of which were investigated by the ECB — saw him dropped for the second New Zealand Test.
                </p>
                <p>
                  But he came back. He always came back. And he chose to bow out at Trent Bridge — the ground where so many of his greatest moments were created — rather than limp on into an uncertain future.
                </p>
              </div>

              {/* Tributes Box */}
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl p-6 sm:p-10 space-y-8">
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-tight flex items-center gap-2">
                  <Award className="text-rose-500 w-5 h-5" /> The Tributes: Cricket World Responds
                </h3>
                
                <div className="space-y-6 divide-y divide-white/5">
                  <div className="pt-0">
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block mb-1">ECB Chair Richard Thompson</span>
                    <p className="text-sm italic text-white/85 leading-relaxed">
                      "Ben Stokes leaves the international game as one of England's greatest-ever cricketers and one of the defining figures of his generation. His performances under pressure, his relentless competitiveness and his ability to produce the extraordinary when it matters most have given me and millions of other fans memories that will endure forever. Beyond his remarkable achievements on the field, his performances have inspired many youngsters to embrace cricket with positivity and belief. We are losing a batsman, a bowler, a captain and a talisman."
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block mb-1">Head Coach Brendon McCullum</span>
                    <p className="text-sm italic text-white/85 leading-relaxed">
                      "Stokesy's contribution transcends cricket. He played with heart and bravery, giving absolutely everything for his team."
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block mb-1">Stuart Broad</span>
                    <p className="text-sm italic text-white/85 leading-relaxed">
                      "He is an absolute talisman of English cricket... someone who's always been there in the big moments, giving absolutely everything."
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block mb-1">Chris Woakes</span>
                    <p className="text-sm italic text-white/85 leading-relaxed">
                      "Ben Stokes, thank you, from myself and on behalf of every England cricket supporter out there. So many incredible memories."
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block mb-1">Former Captain Michael Atherton</span>
                    <p className="text-sm italic text-white/85 leading-relaxed">
                      "He's been an outstanding England captain throughout that journey. The first couple of years, it was a transformation the likes of which few of us have seen of a sporting team."
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Context: Stokes vs Pakistan */}
              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight border-l-4 border-pak-green pl-6">
                  Stokes vs Pakistan: Special Memories
                </h3>
                <p>
                  For Pakistani fans watching this retirement — Ben Stokes has a special relationship with Pakistan cricket that goes beyond statistics.
                </p>
                <p>
                  <strong className="text-white">2022 T20 World Cup Final:</strong> His unbeaten 52 off 49 balls against Pakistan at Melbourne decided the World Cup title against Pakistan. It was clinical, dominant and unforgettable — for both sides.
                </p>
                <p>
                  <strong className="text-white">2016 Tests:</strong> When Pakistan toured England in 2016, Stokes produced two outstanding Test performances that helped England win the series. His batting and bowling both contributed significantly.
                </p>
                <p>
                  <strong className="text-white">Pakistan tour of England 2026 (upcoming):</strong> Pakistan are scheduled to play England in a 3-Test series starting August 19, 2026. Stokes will not be there. His retirement means Pakistan face an England team without their most dangerous allrounder, their most inspirational captain, and their most match-winning presence. It is, in truth, an advantage for Pakistan — however bittersweet that feels given the circumstances.
                </p>
              </div>

              {/* Format-by-Format Summary Table */}
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-display font-black uppercase text-white tracking-tight">The Format-by-Format Journey</h3>
                <p className="text-sm text-white/60">
                  Ben Stokes retired from ODIs in 2022 and hasn't played T20Is since 2022, yet remains England's active Test captain in 2026 — fit again after facial surgery and named to face New Zealand at Lord's in June.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-xs font-black text-white/40 uppercase tracking-widest pb-2 border-b border-white/5">
                    <span>Format</span>
                    <span className="text-center">Status</span>
                    <span className="text-right">Last Match</span>
                  </div>

                  <div className="grid grid-cols-3 text-sm pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Tests</span>
                    <span className="text-center font-bold text-rose-400">Retired June 29, 2026</span>
                    <span className="text-right text-xs text-white/50">3rd Test vs New Zealand, Trent Bridge</span>
                  </div>

                  <div className="grid grid-cols-3 text-sm pb-3 border-b border-white/5">
                    <span className="font-bold text-white/60">ODIs</span>
                    <span className="text-center text-white/50">Retired 2022, returned 2023 WC</span>
                    <span className="text-right text-xs text-white/50">2023 ODI World Cup</span>
                  </div>

                  <div className="grid grid-cols-3 text-sm">
                    <span className="font-bold text-white/60">T20Is</span>
                    <span className="text-center text-white/50">Stepped away 2022</span>
                    <span className="text-right text-xs text-white/50">2022 T20 World Cup Final</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">What Happens Next: England After Stokes</h3>
                <p>
                  Stokes' future was questioned when he was left out of the second Test against New Zealand earlier this month, following an investigation into an incident in a London nightclub. Former England captain Michael Atherton had already expected him to be at the end of his captaincy tenure.
                </p>
                <p>
                  England now face an enormous question: who captains the Test team? Who fills the number six all-rounder role? Who takes the pitch in the final session and takes a wicket when everything looks lost?
                </p>
                <p>
                  The leading candidates for the captaincy include Zak Crawley, Joe Root, and Harry Brook — all of whom have been shaped, in part, by playing under Stokes's fearless leadership. The Bazball philosophy will continue — Brendon McCullum remains as head coach and his vision for aggressive, positive Test cricket will not die with Stokes's retirement.
                </p>
                <p>
                  But there will never be another Ben Stokes. Not because he was perfect — he was not. But because he played the game in a way that made millions of people feel something. He made Test cricket matter again. He made England believe again. And when it was over, he chose to walk away on his own terms — in the middle of a match, mid-afternoon, mid-over — exactly as unpredictable and exactly as magnificent as everything else he ever did.
                </p>
                <p className="text-base font-bold italic text-white/80">
                  Ben Stokes changed how modern Test cricket is played.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">Legacy: Where Does He Rank Among England's Greatest?</h3>
                <p>
                  Comparisons are always difficult. But here is the honest answer: Stuart Broad calls Stokes a "talisman of English cricket." Fan after fan cited moments like the 2019 World Cup final and Headingley 135* as their most cherished cricket memories.
                </p>
                <p>
                  Among England players, only WG Grace, Jack Hobbs, Ian Botham and Andrew Flintoff provoke the same level of emotional attachment. Among all-rounders in Test cricket history, only Garfield Sobers, Imran Khan, Richard Hadlee, Kapil Dev, Ian Botham and Jacques Kallis stand in the same conversation — and Stokes became only the second player in Test cricket history alongside Jacques Kallis to achieve the double of 7,000 runs and 250 wickets.
                </p>
                <p className="text-base font-black text-rose-400 uppercase tracking-widest">
                  He is, without question, England's greatest cricketer of the 21st century.
                </p>
              </div>

              {/* 15-Year Timeline List */}
              <div className="bg-zinc-950/60 border border-white/5 rounded-3xl p-6 sm:p-10 space-y-6">
                <h4 className="text-lg font-display font-black uppercase text-white tracking-widest">Timeline: A 15-Year Career in Moments</h4>
                <div className="relative border-l border-white/10 pl-6 space-y-6">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-rose-500 border-2 border-[#050505]" />
                      <span className="text-xs font-mono font-bold text-rose-400 block">{item.year}</span>
                      <p className="text-sm font-medium text-white/80 mt-1">{item.milestone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-white/10 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">Conclusion: Thank You, Ben Stokes</h2>
                <p>
                  Cricket fans across the world — English, Pakistani, Indian, Australian, New Zealand — share one thing in common: they have a Ben Stokes memory. A moment when he did something impossible. A moment when they thought it was over and he said it was not.
                </p>
                <p className="italic">
                  One fan wrote: "Has there been an England cricketer involved in so many big moments? Ashes, ODI finals, T20 last overs, one of the toughest cricketers we've ever produced. Question now, how do you replace that. The answer I suppose is, you can't."
                </p>
                <p>
                  You cannot replace Ben Stokes. You can only be grateful that cricket had him — for 15 years, 122 Tests, 114 ODIs, 43 T20Is, two World Cups, and one unforgettable afternoon at Headingley when the last man walked out and somehow, impossibly, England won.
                </p>
                <p className="text-lg font-bold text-white uppercase tracking-tight">
                  The retirement of Ben Stokes ends a brilliant chapter in international cricket. His statistics tell only half the story; his true legacy lies in his ability to make the impossible happen when his country needed it most.
                </p>
                <p className="text-xl font-display font-black text-rose-400 uppercase tracking-widest">
                  Goodbye, Ben Stokes. Test cricket will be quieter without you.
                </p>
              </div>

              {/* Enhanced call to action to pakcric-schedule.online */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-950/20 via-black to-black border border-rose-500/30 rounded-[32px] md:rounded-[48px] p-8 md:p-12 relative overflow-hidden text-left mt-16"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-xl">
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-full text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                      <Globe className="w-3 h-3 animate-pulse" /> OFFICIAL PORTAL
                    </span>
                    <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                      Never Miss any Cricket Schedules
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      For the upcoming Pakistan tour of England schedule, team fixtures, live scores, and player statistics, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline hover:text-rose-300 font-bold font-mono">pakcric-schedule.online</a>.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a 
                      href="https://pakcric-schedule.online" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-rose-600 text-white hover:bg-rose-700 rounded-[20px] text-xs font-black uppercase tracking-[3px] transition-all group shadow-lg shadow-rose-600/30"
                    >
                      Visit Portal <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Match Archive links / Internal Linking */}
              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-rose-400 mb-8">Related Content</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/highest-odi-batting-average-at-home-top-5-all-time" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Statistical Ratios</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Highest ODI Batting Average at Home</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/babar-azam-fast-7000-odi-runs-record-2026-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group text-left">
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
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Ben Stokes Retires From International Cricket" 
        summary="Ben Stokes announced retirement from international cricket on June 28 2026 during 3rd Test vs New Zealand at Trent Bridge. 122 Tests, 7,243 runs, 14 centuries, 200+ wickets." 
      />
    </div>
  );
}
