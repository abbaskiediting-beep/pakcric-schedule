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
  CheckCircle2,
  Clock,
  User,
  Activity,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function BabarAzamReappointedCaptain2026Blog() {
  const captaincyStats = [
    { metric: 'Matches Led', stat: '18' },
    { metric: 'Matches Won', stat: '8' },
    { metric: 'Matches Lost', stat: '6' },
    { metric: 'Matches Drawn', stat: '4' },
    { metric: 'Win Percentage', stat: '44.44%' }
  ];

  const milestones = [
    {
      title: 'Format-Defying Centurion',
      desc: 'Babar Azam remains the only Pakistani captain to score centuries across all three formats of international cricket while leading the side.'
    },
    {
      title: 'The Epic 196 against Australia',
      desc: 'One of his finest hours as Test captain came in March 2022 at Karachi, where he played a heroic fourth-innings knock of 196 runs to salvage a draw against a formidable Australian attack, breaking the record for the highest individual score by a captain in the fourth innings of a Test match.'
    },
    {
      title: 'Series Triumphs',
      desc: 'Under his watch, Pakistan secured a notable away Test series victory in Sri Lanka and a home series victory against South Africa.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>The King Reclaims His Throne: Babar Azam Reappointed Test Captain | PakCric</title>
        <meta name="description" content="Official announcement: Babar Azam returns as Pakistan's Test captain for the 2026 West Indies and England tours, taking over from Shan Masood. Read full stats and career milestones." />
        <meta name="keywords" content="Babar Azam, Babar Azam captain, Pakistan Test Captain 2026, Babar Azam captaincy record, Pakistan cricket news" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-yellow-600/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
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
                <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Trophy className="w-3 h-3 animate-pulse" /> Captaincy Alert
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> July 5, 2026
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The King Reclaims <br />
                <span className="text-emerald-500 italic">His Throne</span>: Babar Reappointed
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-3xl pt-4">
                In a massive development for Pakistan cricket, Babar Azam has officially returned to lead the national team in the longest format of the game.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  HT
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase">Hassan Tariq</h5>
                  <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Senior Cricket Analyst</p>
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
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                alt="Babar Azam leading the Test team" 
                className="w-full aspect-[16/9] object-cover filter brightness-75 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-[9px] font-black uppercase tracking-widest text-yellow-400">Reappointment</span>
                  <h4 className="text-lg font-bold text-white uppercase mt-2 font-display">Babar Azam designated with the (C) tag</h4>
                </div>
                <div className="text-xs text-white/60 font-medium">
                  West Indies & England Tour 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Content */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-white/80 leading-relaxed text-base sm:text-lg">
            <p>
              In a massive development for Pakistan cricket, <strong className="text-white">Babar Azam</strong> has officially returned to lead the national team in the longest format of the game. The Pakistan Cricket Board (PCB) confirmed the decision alongside the squad announcement for the upcoming West Indies and England Test Tour in 2026.
            </p>

            <p>
              As confirmed in the official announcement, Babar Azam is designated with the <span className="text-emerald-400 font-bold">(C) tag</span>, reclaiming the reigns from Shan Masood, who is also included in the squad merely as a player.
            </p>

            {/* Strategic Shift Section */}
            <div className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight flex items-center gap-2">
                <Shield className="text-emerald-500 w-5 h-5" /> A Tactical Shift for Pakistan's Red-Ball Future
              </h2>
              <p>
                The decision follows a challenging period for Pakistan’s Test side under Shan Masood's leadership. The pressure mounted significantly after a string of poor results, prompting the PCB to rely back on the country's premier batsman to steady the ship.
              </p>
              <p>
                The squad features a mix of seasoned veterans and exciting new faces:
              </p>
              <ul className="space-y-3 pl-4 border-l-2 border-emerald-500/30">
                <li>
                  <strong className="text-white">The Leadership Core:</strong> Babar Azam steps back into the hot seat, supported by trusted names like vice-captain options and senior figures.
                </li>
                <li>
                  <strong className="text-white">Key Inclusions:</strong> Players like Mohammad Rizwan, Saud Shakeel (subject to fitness clearance for the England leg), and Shan Masood provide a robust batting core.
                </li>
                <li>
                  <strong className="text-white">Bowling Strength:</strong> The pace and spin departments include Aamir Jamal, Shaheen-led dynamics (with newer inclusions like Ubaid Shah and Ali Usman), and the reliable Sajid Khan.
                </li>
              </ul>
              <p>
                With demanding away tours in the West Indies and England ahead, the board has put its faith back into Babar's tactical acumen and unmatched stature in world cricket.
              </p>
            </div>

            {/* Captaincy Record Card & Table */}
            <div className="bg-zinc-950/60 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-black uppercase text-white tracking-tight leading-none mb-1">
                    Babar Azam's Test Captaincy Record
                  </h3>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Overall Captaincy Record in Tests</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] font-black uppercase text-white/35 tracking-wider bg-white/[0.01]">
                      <th className="px-4 py-3">Metric</th>
                      <th className="px-4 py-3 text-right">Statistic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm font-medium">
                    {captaincyStats.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                        <td className="px-4 py-3 text-white/70">{item.metric}</td>
                        <td className="px-4 py-3 text-right text-emerald-400 font-mono font-bold">{item.stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Milestones and Historical Facts */}
            <div className="space-y-6 pt-4">
              <h2 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight flex items-center gap-2">
                <Sparkles className="text-yellow-500 w-5 h-5" /> Key Milestones & Historical Facts as Captain
              </h2>

              <div className="space-y-6">
                {milestones.map((m, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 space-y-2 hover:border-yellow-500/20 transition-all">
                    <h4 className="text-base font-bold text-yellow-400 uppercase tracking-tight flex items-center gap-2">
                      <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
                      {m.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Editor Note */}
            <div className="p-6 bg-emerald-500/[0.03] border border-emerald-500/20 rounded-2xl">
              <p className="text-sm text-white/80 italic font-medium leading-relaxed">
                <strong className="text-emerald-400 not-italic uppercase tracking-wider text-xs block mb-1">Editor's Note:</strong>
                "While his first stint ended amidst a demanding transition period in late 2023, 'Babar 2.0' enters the 2026 cycle with far more experience, a point to prove, and a hungry squad looking to climb back up the ICC World Test Championship ladder."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="The King Reclaims His Throne: Babar Azam Reappointed as Pakistan’s Test Captain for 2026 Tours" 
        summary="Babar Azam has returned to lead Pakistan's Test side. Learn more about his historical records, statistics, and tactical vision for the upcoming tours." 
      />
    </div>
  );
}
