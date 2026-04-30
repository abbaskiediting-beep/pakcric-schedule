import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Clock, Share2, Target, Trophy, Zap, ShieldCheck, History as HistoryIcon, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PakistanVsAustraliaBlog() {
  const article = {
    title: "Pakistan vs Australia 2026: Schedule and Deep Dive into Head-to-Head Records",
    date: "April 30, 2026",
    author: "PakCric Editorial",
    readTime: "7 min read",
    id: "australia-tour-pakistan-2026-analysis"
  };

  return (
    <div className="min-h-screen bg-[#050806] text-white pb-20 font-sans">
      <Helmet>
        <title>Pakistan vs Australia 2026 Schedule, Results & Head-to-Head Stats | Full Guide</title>
        <meta name="description" content="Pakistan vs Australia 2026 series complete schedule, T20I results, upcoming ODI matches, and full head-to-head records in all formats." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[65vh] flex items-end pb-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-[#050806]/70 to-transparent z-10" />
           <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover opacity-50 scale-105"
           />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-20 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-pak-green text-[10px] font-black uppercase tracking-[3px] mb-8 hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-pak-green/10 border border-pak-green/20 rounded-full text-pak-green text-[10px] font-black uppercase tracking-widest">
              <HistoryIcon className="w-3.5 h-3.5" /> Historical Rivalry
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter uppercase italic">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/40 text-[10px] font-black uppercase tracking-widest font-mono">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {article.author}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-invert prose-pak max-w-none">
            <p className="text-xl text-white/80 leading-relaxed font-medium italic border-l-4 border-pak-green pl-6 mb-12">
              The rivalry between Pakistan and Australia is one of the most storied in cricket history, characterized by Australian dominance in Tests and more balanced competition in white-ball cricket. The year 2026 has already seen a historic shift in momentum.
            </p>

            <h2 className="text-2xl font-display font-black text-white uppercase italic tracking-tight mb-8">
              Pakistan vs Australia Schedule 2026
            </h2>
            <p className="mb-8">
              The 2026 calendar for Pakistan and Australia is divided into two distinct white-ball phases to accommodate the T20 World Cup and busy international windows.
            </p>

            <div className="space-y-8 mb-12">
              <div className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-3xl">
                <h3 className="text-pak-green font-black uppercase tracking-widest text-sm mb-4">Phase 1: T20I Series (Completed)</h3>
                <p className="text-sm text-white/60 mb-6 italic">All matches were played at the Gaddafi Stadium, Lahore.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-tight">1st T20I (Jan 29)</span>
                    <span className="text-xs font-black text-pak-green uppercase">Pakistan won by 22 runs</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-tight">2nd T20I (Jan 31)</span>
                    <span className="text-xs font-black text-pak-green uppercase">Pakistan won by 90 runs</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-tight">3rd T20I (Feb 1)</span>
                    <span className="text-xs font-black text-pak-green uppercase">Pakistan won by 111 runs</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Phase 2: ODI Series (Upcoming)</h3>
                <p className="text-sm text-white/40 mb-6 italic">Hosted at the Gaddafi Stadium, Lahore.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border border-white/5 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-tight text-white/60">1st ODI</span>
                    <span className="text-xs font-black text-white uppercase">31 May 2026</span>
                  </div>
                  <div className="flex justify-between items-center border border-white/5 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-tight text-white/60">2nd ODI</span>
                    <span className="text-xs font-black text-white uppercase">2 June 2026</span>
                  </div>
                  <div className="flex justify-between items-center border border-white/5 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-tight text-white/60">3rd ODI</span>
                    <span className="text-xs font-black text-white uppercase">4 June 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-black text-white uppercase italic tracking-tight mt-16 mb-8 flex items-center gap-3">
              <BarChart3 className="text-pak-green" /> Head-to-Head: Kon Jeeta, Kon Haara?
            </h2>
            <p className="mb-8">
              Historically, Australia has held the upper hand across most formats, but Pakistan has found success in home conditions and specific white-ball series.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Test Matches</h4>
                <div className="text-3xl font-display font-black mb-1">72</div>
                <div className="text-[10px] text-white/60 uppercase">Australia: 37 | Pakistan: 15</div>
                <div className="text-[8px] text-white/30 uppercase mt-2">Draws: 20</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">ODI Matches</h4>
                <div className="text-3xl font-display font-black mb-1">111</div>
                <div className="text-[10px] text-white/60 uppercase">Australia: 71 | Pakistan: 36</div>
                <div className="text-[8px] text-white/30 uppercase mt-2">No Result/Tied: 4</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center border-pak-green/30 bg-pak-green/5">
                <h4 className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-4">T20I Matches</h4>
                <div className="text-3xl font-display font-black mb-1">31</div>
                <div className="text-[10px] text-white/60 uppercase">Pakistan: 16 | Australia: 14</div>
                <div className="text-[8px] text-white/30 uppercase mt-2">No Result: 1</div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-black text-white uppercase italic tracking-tight mt-16 mb-8">
              Recent Series Performance
            </h2>
            
            <div className="overflow-x-auto mb-16 rounded-3xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-[10px] font-black text-white/40 uppercase tracking-widest">Series</th>
                    <th className="px-6 py-4 text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Winner</th>
                    <th className="px-6 py-4 text-[10px] font-black text-white/40 uppercase tracking-widest text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white/60 italic">Australia in Pak (2026)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-full text-[10px] font-black">PAKISTAN</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-white/80">3-0</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white/60 italic">Pak in Australia T20I (24/25)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-black">AUSTRALIA</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-white/80">3-0</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white/60 italic">Pak in Australia ODI (24/25)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-pak-green/10 text-pak-green rounded-full text-[10px] font-black">PAKISTAN</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-white/80">2-1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white/60 italic">Benaud-Qadir Trophy (23/24)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-black">AUSTRALIA</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-white/80">3-0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
                <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">Series At A Glance</h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-[10px] uppercase font-bold text-white/40">Dates</span>
                      <span className="text-xs font-bold whitespace-nowrap">May 31 - June 4</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-[10px] uppercase font-bold text-white/40">Venue</span>
                      <span className="text-xs font-bold">Lahore</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-[10px] uppercase font-bold text-white/40">Format</span>
                      <span className="text-xs font-bold">3 ODIs</span>
                   </div>
                </div>
                <Link to="/pakistan-vs-australia-2026-schedule-odi" className="mt-8 block w-full py-4 bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center hover:bg-white/20 transition-colors">
                  View Full Schedule
                </Link>
              </div>

              <div className="p-8 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-[2.5rem]">
                <Share2 className="w-6 h-6 text-yellow-500 mb-4" />
                <h4 className="text-sm font-black uppercase tracking-tight text-white mb-2">Join the Discussion</h4>
                <p className="text-xs text-white/40 mb-4">Who will be the Player of the Series? Vote on our official app.</p>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-white/5 rounded text-[8px] font-black uppercase">#PakVsAus</div>
                   <div className="px-3 py-1 bg-white/5 rounded text-[8px] font-black uppercase">#CWC27Prep</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
