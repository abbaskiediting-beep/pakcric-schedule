import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  User,
  Star,
  Target,
  Trophy,
  Zap,
  TrendingUp,
  AlertCircle,
  Activity,
  Shield,
  Clock,
  MapPin,
  ChevronRight,
  TrendingDown,
  Info
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const BabarAzam68And47SylhetBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam 68 & 47 vs Bangladesh 2nd Test Sylhet 2026 | PakCric</title>
        <meta name="description" content="Babar Azam top scores with 68 in 1st innings and attacks with 47 in 2nd innings vs Bangladesh 2nd Test Sylhet 2026. Full innings analysis and match report." />
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
              <ArrowLeft className="w-3 h-3" /> All News & Analysis
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-3 h-3" /> Player Feature
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 19, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Babar Azam's <br />
                <span className="text-pak-green italic">Fighting 68 & 47</span> <br />
                Last Hope in Sylhet.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Exceptional personal contribution in both innings on return from injury, yet Pakistan stares at a series defeat.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">1st Innings</div>
                    <div className="text-4xl font-display font-bold text-pak-green">68</div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mt-1 italic">Top Scorer (84 Balls)</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">2nd Innings</div>
                    <div className="text-4xl font-display font-bold text-pak-green">47</div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mt-1 italic">Counter-Attack</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col justify-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Match Context</div>
                    <div className="text-sm font-bold text-white uppercase tracking-tighter leading-tight">2nd Test vs Bangladesh</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" alt="Babar Azam batting" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="px-4 py-2 bg-pak-green backdrop-blur-md rounded-2xl shadow-xl">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white">Sylhet Masterclass</span>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[40px]">
                <h3 className="text-2xl font-display font-bold text-white uppercase italic mb-6">Why This Blog Matters — Babar's Return</h3>
                <p className="text-lg leading-relaxed">
                  Babar Azam missed the opening Test due to a knee injury as Bangladesh claimed a commanding 104-run victory to take a 1-0 series lead. His comeback in the second Test was expected to bolster Pakistan's fragile batting lineup, especially on a spin-friendly Sylhet surface.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  He returned. He scored runs in both innings. He top-scored in the first. He counter-attacked brilliantly in the second. And yet — Pakistan still find themselves staring down the barrel of a series defeat. This is the cruellest kind of individual performance.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic pt-8">
                  FIRST INNINGS — <span className="text-pak-green">Babar's 68</span>
                </h2>
                <div className="flex items-center gap-4 text-sm font-bold text-white/40 uppercase tracking-widest">
                   <Shield className="w-4 h-4 text-pak-green" /> Pakistan's Anchor in the Collapse
                </div>
                <p>
                  Pakistan's first innings fell apart rapidly. Abdullah Fazal fell at 22, Azan Awais at 23, Shan Masood at 61, and Saud Shakeel at 79. Pakistan were 79/4 — four wickets down when Babar Azam walked in.
                </p>
                <p>
                  Babar's innings was a masterclass in controlled aggression. His <strong>68 came off just 84 balls</strong> — a strike rate of over 80 in Test conditions on a turning Sylhet pitch. He was dismissed at 142 in the 39.4th over, triggering a second collapse.
                </p>
                
                <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Pakistan 1st Innings Key Scores</h4>
                       <span className="text-[10px] font-bold text-pak-green uppercase">Sylhet 2026</span>
                    </div>
                    <div className="p-6 space-y-3">
                       <div className="flex justify-between items-center text-sm font-bold text-white/60">
                          <span>Shan Masood</span>
                          <span>61</span>
                       </div>
                       <div className="flex justify-between items-center text-sm font-black text-white bg-pak-green/10 p-2 rounded-xl">
                          <span className="flex items-center gap-2"><Star className="w-3 h-3 text-pak-green" /> Babar Azam</span>
                          <span className="text-pak-green">68</span>
                       </div>
                       <div className="flex justify-between items-center text-sm font-bold text-white/60">
                          <span>Rest of Team Combined</span>
                          <span>103</span>
                       </div>
                    </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic pt-8">
                  SECOND INNINGS — <span className="text-pak-green">Babar's 47</span>
                </h2>
                <div className="flex items-center gap-4 text-sm font-bold text-white/40 uppercase tracking-widest">
                   <Zap className="w-4 h-4 text-pak-green" /> Attack Mode in an Impossible Chase
                </div>
                <p>
                  Chasing a daunting target of <strong>437</strong>, Pakistan started their chase with Azan Awais and Abdullah Fazal at the crease. After both openers fell early on the fourth morning, the experienced pair of Shan Masood and Babar absorbed the pressure brilliantly.
                </p>
                <div className="p-8 bg-white/[0.03] border-l-4 border-pak-green italic text-2xl font-display text-white leading-tight">
                  "This was the Babar Azam who Pakistan fans had been waiting for — the attacking batter who goes over the top, who takes the game on, who refuses to accept defeat even when the mathematics look impossible."
                </div>
                <p>
                  Babar launched Taijul Islam for a huge six on the very first ball after the lunch break. He was batting with increasing confidence but fell just 3 runs short of a fifty, caught by Litton off Taijul Islam.
                </p>
              </div>

              <div className="space-y-12 pt-10">
                <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight italic">What This <span className="text-pak-green">Tells Us</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-pak-green/20 transition-all">
                      <h4 className="text-sm font-black text-pak-green uppercase tracking-[3px] mb-4">Still the Best</h4>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        Top score in 1st innings (68) and a rapid 47 in the 2nd. On a difficult turning surface, Babar consistently showed superior class.
                      </p>
                   </div>
                   <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-pak-green/20 transition-all">
                      <h4 className="text-sm font-black text-pak-green uppercase tracking-[3px] mb-4">Over-Reliance</h4>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        When Babar is dismissed, Pakistan collapses. The 1st innings saw 5 wickets fall for just 90 runs after his exit.
                      </p>
                   </div>
                   <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-pak-green/20 transition-all">
                      <h4 className="text-sm font-black text-pak-green uppercase tracking-[3px] mb-4">Intent over Caution</h4>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        Hitting a six off the first ball after lunch against the match's best spinner showed a spirit very few batters possess.
                      </p>
                   </div>
                   <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-pak-green/20 transition-all">
                      <h4 className="text-sm font-black text-pak-green uppercase tracking-[3px] mb-4">Taijul Battle</h4>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        Taijul Islam dismissed Babar in both innings. This battle is becoming the defining rivalry of the series.
                      </p>
                   </div>
                </div>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 text-center">Related Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2nd-test-day-4-session-1-report-sylhet-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Live Report</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors leading-tight">Day 4 Session 1 Lunch Report</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 group-hover:text-pak-green transition-all" />
                  </Link>
                  <Link to="/news/khurram-shahzad-4-wickets-vs-bangladesh-2nd-test-2026" className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-pak-green/30 transition-all">
                    <div>
                       <span className="text-[9px] font-bold text-pak-green uppercase tracking-widest block mb-1">Spotlight</span>
                       <h5 className="text-[11px] font-bold text-white uppercase group-hover:text-pak-green transition-colors leading-tight">Khurram Shahzad 4 Wickets</h5>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 group-hover:text-pak-green transition-all" />
                  </Link>
                </div>
              </div>

              <div className="text-center pt-10">
                 <p className="text-[8px] font-black uppercase tracking-[3px] text-white/20 mb-4 italic">Sources: ESPNcricinfo, Tapmad, PCB Official</p>
                 <Link 
                  to="/schedule" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-pak-green text-white rounded-2xl text-[10px] font-black uppercase tracking-[3px] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20"
                >
                  Full Pakistan Schedule <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Babar Azam 68 & 47 Fighting Innings in Sylhet 2026" 
        summary="A masterclass on return: Babar Azam top scores for Pakistan in both innings against Bangladesh." 
      />
    </div>
  );
};

export default BabarAzam68And47SylhetBlog;
