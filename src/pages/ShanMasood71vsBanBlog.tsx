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

const ShanMasood71vsBanBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Shan Masood 71 vs Bangladesh 2nd Test 2026 | PakCric</title>
        <meta name="description" content="Shan Masood scores a fighting 71 runs in Pakistan’s second innings against Bangladesh during the Sylhet Test 2026. Read full analysis of the captain’s innings under pressure." />
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
                  <Activity className="w-3 h-3" /> Captain's Innings
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 19, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Shan Masood <br />
                <span className="text-pak-green italic">Leads from Front.</span> <br />
                Courageous 71 in Sylhet.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4 mx-auto md:mx-0">
                Captain's knock under extreme pressure as Pakistan battles against a mountain-sized target of 437.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Runs</div>
                    <div className="text-3xl font-display font-bold text-pak-green">71</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Balls</div>
                    <div className="text-3xl font-display font-bold text-white">116</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Boundaries</div>
                    <div className="text-3xl font-display font-bold text-white">8x4</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Target</div>
                    <div className="text-3xl font-display font-bold text-white uppercase tracking-tighter italic">437</div>
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
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" alt="Shan Masood batting" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Sylhet International Cricket Stadium</span>
                    </div>
                 </div>
              </div>

              <p>
                Pakistan captain Shan Masood played a courageous innings of 71 runs during Pakistan’s difficult fourth-innings chase against Bangladesh in the second Test at Sylhet.
              </p>

              <div className="p-8 bg-pak-green/5 border border-pak-green/20 rounded-[40px] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Shield className="w-20 h-20 text-pak-green" />
                 </div>
                 <p className="text-lg font-medium leading-relaxed italic relative z-10">
                    "Facing a massive target of 437 runs on a turning pitch, Pakistan needed leadership and composure from their captain. Shan Masood responded with one of his most determined Test innings."
                 </p>
              </div>

              <p>
                Although Bangladesh remained in control for most of the chase, Shan’s innings provided resistance and gave Pakistan brief hope during a tense Day 4 battle.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic">A Massive Target and Early Pressure</h2>
              <p>
                Bangladesh had already dominated the match with outstanding batting performances from Mushfiqur Rahim and Litton Das. Their second innings total of 390 runs gave Pakistan a gigantic target of 437 in the fourth innings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-4">Positive Intent</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                       Shan Masood showed positive intent from the beginning. He understood that Pakistan could not afford to become completely defensive while chasing such a huge target.
                    </p>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-4">Spin Counter</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-medium">
                       He used aggressive footwork and confident front-foot drives to counter Bangladesh's dangerous spin attack on a turning Day 4 surface.
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic text-pak-green">Leading from the Front</h2>
              <p>
                Shan Masood’s innings of 71 runs came from 116 balls and included 8 boundaries. It was not an easy pitch to bat on, but Shan remained composed and focused throughout his stay at the crease.
              </p>

              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[40px] relative overflow-hidden">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">Partnership Value</h4>
                        <ul className="space-y-4">
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Major Stand With</span>
                              <span className="text-sm font-black text-white">Babar Azam</span>
                           </li>
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Role</span>
                              <span className="text-sm font-black text-white italic">Aggressive Anchor</span>
                           </li>
                           <li className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Performance</span>
                              <span className="text-sm font-black text-pak-green">Leadership</span>
                           </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center text-center p-6 bg-pak-green/10 rounded-3xl border border-pak-green/20">
                       <Activity className="w-6 h-6 text-pak-green mx-auto mb-2" />
                       <p className="text-[10px] font-black uppercase text-white tracking-[2px]">Captain's Grit</p>
                       <p className="text-[9px] text-white/40 font-medium uppercase mt-1 tracking-widest italic"> Shan Masood 2026 Series </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 italic">The Breakthrough</h2>
              <p>
                Just when Pakistan needed their captain to continue longer, Bangladesh spinner <strong>Taijul Islam</strong> delivered the crucial breakthrough. Shan Masood was dismissed for 71 after edging a catch. His wicket was a major turning point in the chase.
              </p>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 text-center">Related Coverage</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2nd-test-day-4-report-sylhet-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Full Report</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors">PAK vs BAN Day 4 Match Report</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link to="/news/mohammad-rizwan-75-unbeaten-sylhet-heroics-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Player Feature</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors">Rizwan's Unbeaten 75 Analysis</h5>
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
        title="Shan Masood's Brave 71 vs Bangladesh 2nd Test 2026" 
        summary="Pakistan captain Shan Masood leads with a courageous 71 in the fourth-innings chase at Sylhet." 
      />
    </div>
  );
};

export default ShanMasood71vsBanBlog;
