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
  ZapOff
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function VaibhavSooryavanshiDebutBlog() {
  const youngestDebutants = [
    { rank: 1, player: 'Hasan Raza', country: 'Pakistan', age: '14 years, 227 days', opponentYear: 'vs Zimbabwe, 1996' },
    { rank: 2, player: 'Vaibhav Sooryavanshi', country: 'India', age: '15 years, 99 days', opponentYear: 'vs England, 2026' },
    { rank: 3, player: 'Mushtaq Mohammad', country: 'Pakistan', age: '15 years, 116 days', opponentYear: 'vs West Indies, 1959' },
    { rank: 4, player: 'Aaqib Javed', country: 'Pakistan', age: '15 years, 124 days', opponentYear: 'vs West Indies, 1988' },
    { rank: 5, player: 'Sachin Tendulkar', country: 'India', age: '16 years, 205 days', opponentYear: 'vs Pakistan, 1989' }
  ];

  const matchStats = [
    { label: 'Debut Match', val: 'India vs England 2nd T20I' },
    { label: 'Venue', val: 'Old Trafford, Manchester' },
    { label: 'Age on Debut', val: '15 Years, 99 Days' },
    { label: 'Role', val: 'Opening Batter (Left-Handed)' },
    { label: 'Debut Score', val: '14 off 10 balls (2 Sixes)' },
    { label: 'IPL 2026 Runs', val: '776 runs (Orange Cap winner)' },
    { label: 'IPL 2026 Strike Rate', val: '237.30' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Vaibhav Sooryavanshi Youngest Debut Record 2026 | Shatters Sachin Tendulkar Record | PakCric</title>
        <meta name="description" content="India's 15-year-old batting prodigy Vaibhav Sooryavanshi has made his senior international debut against England, shattering Sachin Tendulkar's 36-year-old record as India's youngest debutant. Read full report, stats and analysis." />
        <meta name="keywords" content="Vaibhav Sooryavanshi Debut, Youngest Indian Debutant, Sachin Tendulkar Record Broken, Vaibhav Sooryavanshi vs England, India vs England T20 2026, Rajasthan Royals IPL 2026" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none" />
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
                History <span className="text-yellow-500 italic">Written.</span> <br />
                Vaibhav Debuts <br />
                At 15.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                At just 15 years and 99 days old, the sensational left-handed opener Vaibhav Sooryavanshi became India's youngest-ever international debutant, surpassing the 36-year-old record of Sachin Tendulkar.
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
                alt="Vaibhav Sooryavanshi India Cricket Debut" 
                className="w-full aspect-[16/9] object-cover filter brightness-75 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="px-3 py-1 bg-black/60 border border-white/15 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/80">Record Breaker</span>
                  <h4 className="text-lg font-bold text-white uppercase mt-2 font-display">15y, 99d Sensation Surpasses Sachin</h4>
                </div>
                <div className="text-xs text-white/60 font-medium">
                  Old Trafford, Manchester | India vs England
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
              <Trophy className="text-yellow-500 animate-pulse w-6 h-6" /> Record-Breaking Cap Presentation
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                <span className="text-white font-bold">MANCHESTER, UK</span> — History was written at Old Trafford on Saturday as India’s teenage batting prodigy, <strong className="text-white">Vaibhav Sooryavanshi</strong>, made his much-anticipated senior international debut during the second T20 International (T20I) against England.
              </p>
              <p>
                At just <strong className="text-yellow-400">15 years and 99 days old</strong>, the explosive left-handed opener officially became the youngest cricketer ever to represent India in international cricket, eclipsing a 36-year-old record held by the legendary <strong className="text-white">Sachin Tendulkar</strong>. Tendulkar made his famous debut against Pakistan in 1989 at the age of 16 years and 205 days.
              </p>
              <p>
                Sooryavanshi received his maiden India cap from vice-captain Tilak Varma ahead of the toss, replacing the out-of-form Sanju Samson in the playing XI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fearless on the Big Stage Section */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">MATCH HIGHLIGHTS</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mt-1">Fearless on the Big Stage</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold uppercase text-white">An Electric Cameo</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Though India ultimately lost the closely contested match by 4 wickets, Sooryavanshi gave fans a breathtaking glimpse of his raw talent. Opening the batting alongside Abhishek Sharma after India won the toss, the 15-year-old showed zero signs of nerves.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Facing England's premier fast bowler Jofra Archer, Sooryavanshi smashed a jaw-dropping six over the wicketkeeper’s head off just the fourth ball he faced in international cricket. He cleared the ropes again off Josh Tongue, racing to 14 runs off just 10 balls. His brief but electric cameo came to an end in the fifth over when he was stumped by Jos Buttler off the bowling of spinner Will Jacks.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold uppercase text-white">Tribute from Captain Iyer</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  Speaking at the toss, India's T20 captain Shreyas Iyer praised the teenager's fearless attitude:
                </p>
                <div className="p-4 bg-zinc-950/40 border-l-2 border-emerald-500 rounded-r-xl italic text-xs text-white/90">
                  "You've seen him in the past couple of months. How he takes on bowlers shows his confidence. No pressure to play him. He deserves the spot. He doesn’t take pressure at all; he’s unflinching and has a wonderfully calm demeanor."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rise of Prodigy Section */}
      <section className="py-12 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">The Rise of a Once-in-a-Generation Prodigy</h3>
            
            <div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                Sooryavanshi's call-up to the national side was inevitable following a truly historic IPL 2026 season with the Rajasthan Royals. The Bihar-born youngster took the tournament by storm, winning the coveted Orange Cap as the leading run-scorer with a staggering <strong className="text-white">776 runs</strong>.
              </p>
              <p>
                Even more impressive was his scoring rate, operating at an unprecedented strike rate of <strong className="text-yellow-400 font-mono">237.30</strong>. He swept the tournament’s individual honors, walking away with the Most Valuable Player (MVP), Emerging Player, and Super Striker awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Tables Section */}
      <section className="py-12 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-yellow-500">HISTORICAL DATABASE</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight mt-1">Youngest Men's International Debutants</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">Full Member Nations Record List</p>
            </div>

            {/* Younger Debutants Table */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] font-black uppercase text-white/35 tracking-wider bg-white/[0.01]">
                      <th className="px-6 py-4">Rank</th>
                      <th className="px-6 py-4">Player</th>
                      <th className="px-6 py-4">Country</th>
                      <th className="px-6 py-4">Age on Debut</th>
                      <th className="px-6 py-4 text-right">Opponent & Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-white/80 font-medium">
                    {youngestDebutants.map((row) => (
                      <tr key={row.rank} className={`hover:bg-white/[0.01] transition-colors ${row.rank === 2 ? 'bg-yellow-500/5 text-yellow-400 font-bold' : ''}`}>
                        <td className="px-6 py-4 font-mono text-white/40">{row.rank}</td>
                        <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                          {row.player}
                          {row.rank === 2 && <span className="px-1.5 py-0.5 text-[8px] bg-yellow-500 text-black uppercase font-black tracking-widest rounded">NEW</span>}
                        </td>
                        <td className="px-6 py-4 text-white/60">{row.country}</td>
                        <td className="px-6 py-4 font-mono text-yellow-500">{row.age}</td>
                        <td className="px-6 py-4 text-right text-white/60">{row.opponentYear}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed text-center max-w-2xl mx-auto italic">
              While Sooryavanshi broke the Indian record and became the youngest player to debut for a full member nation in T20I history, Pakistan's Hasan Raza still holds the all-time record for the youngest debutant in men's international cricket across all formats at 14 years, 227 days.
            </p>
          </div>
        </div>
      </section>

      {/* Debut stats */}
      <section className="py-12 relative z-10 bg-zinc-950/40 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <h4 className="text-xl font-display font-black text-white uppercase tracking-tight text-center">Vaibhav Sooryavanshi Debut Quick Card</h4>
            <div className="bg-zinc-950/80 border border-white/5 rounded-3xl p-6 space-y-4">
              {matchStats.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 text-sm">
                  <span className="text-white/60 font-medium">{stat.label}</span>
                  <span className="font-mono font-bold text-white text-right">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">Conclusion: A Star is Born</h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              Vaibhav Sooryavanshi's inclusion highlights the aggressive, youthful transformation sweeping cricket in 2026. From dominated Quaid-e-Azam standouts to explosive IPL prodigies, the game is getting faster, bolder, and younger. Keep up with schedules, fixtures and stats at our official portal.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-950/20 via-black to-black border border-yellow-500/30 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 rounded-full text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                    <Globe className="w-3 h-3 animate-pulse" /> OFFICIAL SCHEDULE PORTAL
                  </span>
                  <h4 className="text-xl sm:text-3xl font-display font-black uppercase text-white tracking-tight leading-tight">
                    Follow Every Match Schedule Online
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">
                    For upcoming team fixtures, international calendars, live scores, and player statistics, visit <a href="https://pakcric-schedule.online" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300 font-bold font-mono">pakcric-schedule.online</a>.
                  </p>
                </div>
                <div className="shrink-0">
                  <a 
                    href="https://pakcric-schedule.online" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-yellow-600 text-white hover:bg-yellow-700 rounded-[20px] text-xs font-black uppercase tracking-[3px] transition-all group shadow-lg shadow-yellow-600/30"
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
        title="Historic Debut: 15-Year-Old Sensation Vaibhav Sooryavanshi Shatters Sachin Tendulkar’s Record Against England" 
        summary="India's Vaibhav Sooryavanshi made history at Old Trafford, becoming the youngest player to represent India in international cricket at 15y, 99d." 
      />
    </div>
  );
}
