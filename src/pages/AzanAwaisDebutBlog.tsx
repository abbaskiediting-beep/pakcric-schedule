import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  ArrowLeft,
  Share2,
  TrendingUp,
  Star,
  Target,
  Users,
  ChevronRight,
  Zap,
  MapPin,
  Clock,
  Info,
  Medal,
  History,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const AzanAwaisDebutBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Azan Awais Test Debut 80+ vs Bangladesh 2026 | Pakistan's Youngest Star Shines in Mirpur</title>
        <meta name="description" content="Azan Awais, 21, scores 80+ on Test debut vs Bangladesh in Mirpur May 9 2026. 106-run opening stand with Imam, survived DRS review, calm under pressure." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Analysis Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Match Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 09, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                A Star is Born: <br /><span className="text-pak-green font-black underline decoration-white/10">Azan Awais.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Pakistan's 21-year-old sensation lights up Test debut with an 80+ masterclass in Dhaka, silencing critics and steadying the ship.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-white/[0.02] p-8 rounded-[32px] border border-white/10">
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Debut Score</div>
                    <div className="text-2xl font-display font-bold text-pak-green">80* <span className="text-sm font-normal text-white/20">UNBEATEN</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Partnership</div>
                    <div className="text-2xl font-display font-bold">106 <span className="text-sm font-normal text-white/20">WITH IMAM</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Home City</div>
                    <div className="text-2xl font-display font-bold text-white">SIALKOT <span className="text-sm font-normal text-white/20">PUNJAB</span></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="container mx-auto px-4 max-w-4xl">
         <img 
            src="https://plus.unsplash.com/premium_photo-1691490212040-af83693fb8e4?q=80&w=2000&auto=format&fit=crop" 
            alt="Young Cricketer Batting" 
            className="w-full h-[500px] object-cover rounded-[50px] shadow-2xl brightness-75 border border-white/10"
         />
      </div>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16 text-white/70 leading-[1.6]">
            
            <div className="space-y-10 text-xl font-medium">
              <p>
                There are moments in cricket when a young batter walks to the crease and you know — within three or four deliveries — that you are watching someone special. The feet move naturally. The head stays still. The hands are soft. And most importantly, the mind is calm.
              </p>

              <p>
                On <span className="text-white font-black underline decoration-pak-green/40">May 9, 2026</span>, at Sher-e-Bangla National Cricket Stadium in Mirpur, Dhaka, Pakistan's newest Test cricketer delivered exactly that kind of debut.
              </p>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-8 uppercase tracking-tighter">The Mirpur Cauldron</h2>
              <p>
                Facing Taijul Islam, Mehidy Hasan Miraz and Ebadot Hossain. On a surface showing signs of wear. In 34°C Dhaka heat. With Pakistan 363 runs behind Bangladesh's first-innings total of 413. And without Babar Azam in the team.
              </p>
              <p>
                The circumstances could not have been more difficult. The performance could not have been more impressive.
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-12">
               <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?q=80&w=1000&auto=format&fit=crop" 
                      alt="Azan Awais Profile" 
                      className="w-full aspect-square object-cover rounded-[32px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white uppercase mb-1">Azan Awais</h3>
                      <p className="text-pak-green font-black uppercase text-[10px] tracking-[4px]">Future of Pakistan Red-Ball</p>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Age</p>
                        <p className="text-xl font-bold text-white">21 <span className="text-xs font-normal opacity-40">(Oct 2004)</span></p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Domestic Team</p>
                        <p className="text-xl font-bold text-white">Sialkot</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">First-Class Avg</p>
                        <p className="text-xl font-bold text-pak-green">48.60</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">Top Score</p>
                        <p className="text-xl font-bold text-white">203*</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="markdown-body space-y-10 text-xl font-medium">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-8 uppercase tracking-tighter">The Domestic Pedigree</h2>
              <p>
                In only 33 first-class games, he has amassed an incredible <span className="text-white font-bold">2,673 runs</span> with 10 centuries. His unbeaten 203 in the Quaid-e-Azam Trophy, where he batted throughout Sialkot's entire innings, signaled a temperament built for the longest format.
              </p>

              <div className="bg-pak-green/5 border border-pak-green/20 p-8 rounded-[32px] border-l-4 border-l-pak-green">
                <p className="text-white font-bold italic">
                  "844 runs at an average of 76.73 in one tournament at 20 years old. He didn't just knock on the door; he forced it open."
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-8 uppercase tracking-tighter">The Debut Innings Breakdown</h2>
              
              <div className="space-y-6">
                {[
                  { phase: 'The Start', context: 'Cautious, watching carefully, leaving well outside off.', score: '18 (23)' },
                  { phase: 'The DRS Scare', context: 'Survives a review by Shanto/Miraz. Settles nerves.', score: 'Survived' },
                  { phase: 'The Milestone', context: 'Brought up fifty in 66 balls with clinical strokeplay.', score: '50 (66)' },
                  { phase: 'Session End', context: 'Anchoring with debutant Abdullah Fazal after Imam falls.', score: '80* (120)' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pak-green/10 flex items-center justify-center text-pak-green font-black">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-bold text-white uppercase">{step.phase}</h4>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-pak-green">{step.score}</span>
                      </div>
                      <p className="text-sm text-white/40">{step.context}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-8 uppercase tracking-tighter">Why This Matters</h2>
              <p>
                With Babar Azam missing due to injury, Pakistan needed a psychological anchor. Azan Awais provided exactly that. He didn't just score runs; he provided security. From the u19 century against India to a Player of the Match performance in Asia Cup, Awais has always been a "big game" player.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                 <div className="p-8 bg-emerald-500/5 rounded-[32px] border border-emerald-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-5 h-5 text-emerald-500" />
                      <h4 className="font-bold text-white uppercase tracking-wider">Fast Reflexes</h4>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">His pull shot is naturally aggressive but controlled. He has handled Taijul and Mehidy with maturity, using his feet to get to the pitch of the ball.</p>
                 </div>
                 <div className="p-8 bg-yellow-500/5 rounded-[32px] border border-yellow-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-5 h-5 text-yellow-500" />
                      <h4 className="font-bold text-white uppercase tracking-wider">Target Focus</h4>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">Rotated strike at 4.67 runs per over in the opening stand. Calculated aggression meant Bangladesh's pacers were nullified early.</p>
                 </div>
              </div>

              <p className="text-xl text-white font-bold pt-12 border-t border-white/5">
                Pakistan cricket has found its next red-ball cornerstone. The 21-year-old from Sialkot is not just a fill-in for Babar — he is a statement of intent for the future.
              </p>
            </div>

            {/* Further Reading */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/pakistan-tour-bangladesh-squad-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div className="max-w-[70%]">
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Squad History</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors line-clamp-1">Meet the 4 Uncapped Players</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
                  <Link to="/news/pak-vs-ban-1st-test-day-2-report-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div className="max-w-[70%]">
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Report</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors line-clamp-1">Full Day 2 Match Summary</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Azan Awais Debut Masterclass: 80+ in Dhaka" 
        summary="Pakistan's 21-year-old sensation scores 80+ on Test debut vs Bangladesh. A star is born in Mirpur." 
      />
    </div>
  );
};

export default AzanAwaisDebutBlog;
