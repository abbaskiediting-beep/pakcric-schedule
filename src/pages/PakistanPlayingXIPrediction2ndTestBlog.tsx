import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Target,
  Users,
  ChevronRight,
  Zap,
  MapPin,
  Clock,
  TrendingDown,
  Activity,
  UserCheck,
  AlertTriangle,
  Info
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakistanPlayingXIPrediction2ndTestBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan Playing XI Prediction 2nd Test Bangladesh Sylhet 2026 | PakCric</title>
        <meta name="description" content="Babar Azam returns, Shaheen Afridi may be dropped — Pakistan predicted playing XI for 2nd Test vs Bangladesh at Sylhet, May 16, 2026. Full analysis inside." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Tactical Selection
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 15, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Pakistan <br /><span className="text-pak-green">Playing XI</span> <br />Prediction.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Babar Azam returns, Shaheen Afridi may be dropped — Full analysis of Pakistan's predicted XI for the must-win 2nd Test at Sylhet.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-white/[0.02] p-8 rounded-[32px] border border-white/10">
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Venue</div>
                    <div className="text-2xl font-display font-bold text-emerald-500">SYLHET <span className="text-sm font-normal text-white/20">INT'L</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Series Status</div>
                    <div className="text-2xl font-display font-bold">BAN LEADS <span className="text-sm font-normal text-white/20">1-0</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Key Return</div>
                    <div className="text-2xl font-display font-bold text-pak-green">BABAR AZAM <span className="text-sm font-normal text-white/20">FIT</span></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Predicted XI Table Section */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                 <Users className="w-64 h-64 text-white" />
              </div>
              
              <h2 className="text-3xl font-display font-bold text-white mb-8 uppercase tracking-tight flex items-center gap-4">
                <UserCheck className="w-8 h-8 text-pak-green" />
                Predicted Playing XI
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">No.</th>
                      <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Player</th>
                      <th className="py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { no: 1, name: 'Shan Masood (c)', role: 'Opener' },
                      { no: 2, name: 'Azan Awais', role: 'Opener' },
                      { no: 3, name: 'Abdullah Fazal', role: 'No. 3' },
                      { no: 4, name: 'Babar Azam', role: 'No. 4 (Returns)', highlight: true },
                      { no: 5, name: 'Saud Shakeel', role: 'No. 5' },
                      { no: 6, name: 'Mohammad Rizwan (wk)', role: 'No. 6' },
                      { no: 7, name: 'Salman Agha', role: 'All-rounder' },
                      { no: 8, name: 'Noman Ali', role: 'Spinner' },
                      { no: 9, name: 'Sajid Khan', role: 'Spinner' },
                      { no: 10, name: 'Khurram Shahzad', role: 'Pacer (Expected)', highlight: true },
                      { no: 11, name: 'Mohammad Abbas', role: 'Pacer' }
                    ].map((player) => (
                      <tr key={player.no} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-sm font-black text-white/20 tabular-nums">{player.no}</td>
                        <td className={`py-4 font-bold ${player.highlight ? 'text-pak-green' : 'text-white'}`}>{player.name}</td>
                        <td className="py-4 text-xs font-black uppercase tracking-widest text-white/40">{player.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                According to sources, top-order batter <span className="text-white font-bold">Babar Azam is expected to return</span> to the side after missing the first Test due to a knee injury, replacing opening batter Imam-ul-Haq. Pakistan are also expected to reshuffle their batting order. Captain Shan Masood is likely to open the innings alongside centurion Azan Awais, while Abdullah Fazal is set to bat at number three after scoring two half-centuries in the first Test.
              </p>

              <h2 className="text-4xl font-display font-bold text-white pt-8 uppercase tracking-tight">The 2 Big Changes Pakistan Are Making</h2>
              
              <div className="space-y-12">
                {/* Change 1 */}
                <div className="p-8 md:p-12 bg-pak-green/5 border border-pak-green/20 rounded-[32px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <UserCheck className="w-16 h-16 text-pak-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-pak-green mb-4">1. Babar Azam Returns, Imam-ul-Haq Dropped</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    Babar Azam is expected to return after recovering from the knee injury that ruled him out of the opening match. He replaces Imam-ul-Haq, who struggled with scores of 45 and 2 in Mirpur. 
                  </p>
                  <div className="p-5 bg-black/40 rounded-2xl border border-pak-green/10">
                    <p className="text-sm italic text-white/60">
                      "Babar Azam is Pakistan's most important batter and the one player who has shown the ability to build a long innings against quality spin. Pakistan needs him to set the tone in Sylhet."
                    </p>
                  </div>
                </div>

                {/* Change 2 */}
                <div className="p-8 md:p-12 bg-red-500/5 border border-red-500/20 rounded-[32px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Activity className="w-16 h-16 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-500 mb-4">2. Shaheen Afridi May Be Dropped, Khurram Shahzad In</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Pakistan may also change their pace attack, with <span className="text-white font-bold">Khurram Shahzad</span> potentially replacing Shaheen Shah Afridi. Despite Shaheen completing 100 WTC wickets in the last match, his workload and shoulder health are being monitored closely for the Sylhet track.
                  </p>
                </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">Batting Order Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Shan Masood', role: 'Opener', detail: 'Likely to open alongside Azan Awais. His left-hand batting gives Pakistan variety at the top and he has previous experience opening in Tests.' },
                  { name: 'Abdullah Fazal', role: 'No. 3', detail: 'After two fifties on debut, moving to No. 3 is a vote of confidence. He showed exceptional temperament with 60 and 66 in Mirpur.' },
                  { name: 'Babar Azam', role: 'No. 4', detail: 'The returning king provides a proven match-winner in the middle order — exactly where Pakistan collapsed in the 1st Test.' },
                  { name: 'Saud Shakeel', role: 'No. 5', detail: 'Needs to contribute significantly after a disappointing first Test. His technique against spin remains sound but needs conversion.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] transition-all">
                    <h4 className="text-pak-green font-bold uppercase tracking-widest text-[10px] mb-2">{item.role}</h4>
                    <h5 className="text-xl font-bold text-white mb-2">{item.name}</h5>
                    <p className="text-sm text-white/50 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">The Sylhet Surface & Rain Factor</h2>
              <div className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-[32px] space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Sylhet Pitch Conditions</h4>
                    <p className="text-sm text-white/50 leading-relaxed italic">
                      Traditionally a slower, lower surface than Mirpur. The pitch tends to deteriorate significantly from Day 3 onwards. Pakistan needs a 400+ first innings score.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Weather Alert</h4>
                    <p className="text-sm text-white/50 leading-relaxed italic">
                      Heavy rain could affect play for at least three days. Pakistan must pick up wickets quickly in whatever windows the weather provides.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">WTC Points Pressure</h2>
              <p>
                Pakistan are currently at <span className="text-red-500 font-bold">seventh in the World Test Championship standings</span> with 12 points and a 33.33 win percentage. A series defeat in Bangladesh would make qualification for the 2027 Final nearly impossible. This 2nd Test is not just a game; it is a battle for survival. 
              </p>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Match Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px]">
                      <div className="flex items-center gap-3 mb-2 text-white/40">
                         <MapPin className="w-4 h-4" />
                         <span className="text-[10px] font-black uppercase tracking-[2px]">Venue</span>
                      </div>
                      <p className="text-sm font-bold text-white">Sylhet International Cricket Stadium</p>
                  </div>
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px]">
                      <div className="flex items-center gap-3 mb-2 text-white/40">
                         <Clock className="w-4 h-4" />
                         <span className="text-[10px] font-black uppercase tracking-[2px]">Start Time</span>
                      </div>
                      <p className="text-sm font-bold text-white">9:30 AM Local (4:00 AM GMT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-10 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-emerald-500 mb-8">Further Reading</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Backlash Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">7 Reasons Pakistan Lost Mirpur Test</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500" />
                  </Link>
                  <Link to="/news/babar-azam-declared-fit-for-2nd-test-vs-bangladesh-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Injury Report</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Babar Declared 100% Fit</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Pakistan Playing XI Prediction vs Bangladesh 2nd Test 2026" 
        summary="Babar Azam returns, Shaheen Afridi may be dropped — Pakistan predicted playing XI for 2nd Test vs Bangladesh at Sylhet." 
      />
    </div>
  );
};

export default PakistanPlayingXIPrediction2ndTestBlog;
