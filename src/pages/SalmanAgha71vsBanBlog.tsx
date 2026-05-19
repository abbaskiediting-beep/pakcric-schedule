import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  User,
  Shield,
  Zap,
  Target,
  Trophy,
  Activity,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  ExternalLink,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const SalmanAgha71vsBanBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Salman Ali Agha 71 vs Bangladesh 2nd Test 2026 | PakCric</title>
        <meta name="description" content="Salman Ali Agha scores a fighting 71 runs in Pakistan’s second innings against Bangladesh during the Sylhet Test 2026. Read full analysis of his crucial knock under pressure." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Latest News & Reports
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-3 h-3" /> Match Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 19, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Salman Ali Agha <br />
                <span className="text-pak-green italic">Stands Tall.</span> <br />
                Fighting 71 in Sylhet.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4 mx-auto md:mx-0">
                Determined knock under immense pressure gives Pakistan brief hope in the massive 437-run chase against Bangladesh.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Runs</div>
                    <div className="text-3xl font-display font-bold text-pak-green">71</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Balls</div>
                    <div className="text-3xl font-display font-bold text-white">102</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Boundaries</div>
                    <div className="text-3xl font-display font-bold text-white">6x4, 1x6</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Innings</div>
                    <div className="text-3xl font-display font-bold text-white uppercase tracking-tighter italic">2nd</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" alt="Salman Ali Agha batting" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Sylhet International Cricket Stadium</span>
                    </div>
                 </div>
              </div>

              <p>
                Pakistan’s massive chase of 437 runs against Bangladesh in the second Test at Sylhet looked extremely difficult from the very beginning. The pitch was turning, Bangladesh’s bowlers were full of confidence, and pressure continued building with every wicket.
              </p>

              <div className="p-8 bg-pak-green/5 border border-pak-green/20 rounded-[40px] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Shield className="w-20 h-20 text-pak-green" />
                 </div>
                 <p className="text-lg font-medium leading-relaxed italic relative z-10">
                    "In the middle of this tense situation, Salman Ali Agha produced one of Pakistan’s most valuable innings of the match with a determined 71 runs off 102 balls."
                 </p>
              </div>

              <p>
                While Bangladesh remained in control for most of the innings, Salman Ali Agha’s fighting knock gave Pakistan brief hope and showed his growing importance in the Test side.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic">Pakistan Under Huge Pressure Early</h2>
              <p>
                Chasing 437 runs in the fourth innings of a Test match is never easy, especially on a Day 4 pitch in Asian conditions. Pakistan’s innings started poorly with Azan Awais falling for 21 and Abdullah Fazal managing only 6.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-4">Tactical Approach</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                       Salman showed maturity and composure from the start. He focused on rotating strike, playing late against spin, and avoiding risky shots early while building partnerships patiently.
                    </p>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-4">Footwork Mastery</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                       He regularly used quick singles, sweeps, and controlled drives. His positive intent prevented Bangladesh from fully controlling the scoring rate.
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic text-pak-green">A Knock Built on Patience</h2>
              <p>
                Salman Ali Agha’s innings was not based on reckless attacking cricket. It was a proper Test-match innings built through patience and game awareness. He scored 71 runs off 102 balls, including 6 boundaries and 1 six.
              </p>

              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[40px] relative overflow-hidden">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">Partnership Value</h4>
                        <ul className="space-y-4">
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Major Stands With</span>
                              <span className="text-sm font-black text-white">Babar & Rizwan</span>
                           </li>
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Pressure Lev.</span>
                              <span className="text-sm font-black text-white italic">Maximum</span>
                           </li>
                           <li className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Performance</span>
                              <span className="text-sm font-black text-pak-green">Standout</span>
                           </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center text-center p-6 bg-pak-green/10 rounded-3xl border border-pak-green/20">
                       <Activity className="w-6 h-6 text-pak-green mx-auto mb-2" />
                       <p className="text-[10px] font-black uppercase text-white tracking-[2px]">Mid-Order Reliability</p>
                       <p className="text-[9px] text-white/40 font-medium uppercase mt-1 tracking-widest italic"> Salman Ali Agha 2026 Stats </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic">The Breakthrough</h2>
              <p>
                Just when Pakistan needed Salman Ali Agha to continue longer, Bangladesh spinner <strong>Taijul Islam</strong> produced the breakthrough. Salman was bowled for 71 after playing a fighting innings that lasted 102 deliveries. Although his dismissal hurt Pakistan badly, his innings remained one of the brightest performances for the visitors in the chase.
              </p>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 text-center">Related Coverage</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2nd-test-day-4-session-1-report-sylhet-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Live Report</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors">PAK vs BAN Day 4 Lunch Report</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link to="/news/babar-azam-68-and-47-fighting-innings-sylhet-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Player Feature</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors">Babar Azam's 68 & 47 Analysis</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              <div className="text-center pt-12">
                 <Link 
                  to="/schedule" 
                  className="inline-flex items-center gap-2 px-10 py-5 bg-pak-green text-white rounded-2xl text-[10px] font-black uppercase tracking-[3px] hover:scale-105 transition-all shadow-2xl shadow-pak-green/40"
                >
                  Full Pakistan Fixtures <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[8px] font-black uppercase tracking-[4px] text-white/10 mt-8">Source: Pak Cric Schedule Official</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Salman Ali Agha's Fighting 71 in Sylhet Test Chase 2026" 
        summary="Salman Ali Agha stands tall with a courageous 71 against Bangladesh on a difficult Day 4 pitch in Sylhet." 
      />
    </div>
  );
};

export default SalmanAgha71vsBanBlog;
