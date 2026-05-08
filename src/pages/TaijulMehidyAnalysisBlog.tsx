import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft,
  Calendar,
  Zap,
  Activity,
  Target,
  Users,
  ChevronRight,
  TrendingUp,
  Shield,
  BarChart3,
  AlertTriangle,
  Info
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const TaijulMehidyAnalysisBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Trial by Spin: Analyzing Taijul Islam and Mehidy Hasan Miraz | PakCric</title>
        <meta name="description" content="A deep dive into Bangladesh's lethal spin duo. How Taijul and Mehidy's variations pose a massive threat to a Babar-less Pakistan batting order in Dhaka." />
        <meta name="keywords" content="Taijul Islam, Mehidy Hasan Miraz, Bangladesh vs Pakistan 2026, Spin Bowling Analysis, Pakistan Batting order" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pak-green/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Analysis Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Tactical De-Brief
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> May 8, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Twin Spin <br /><span className="text-emerald-500 font-black">NIGHTMARE.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Dhaka's dust is legendary. But it's the men operating within it—Taijul Islam and Mehidy Hasan Miraz—who represent the ultimate Test for Pakistan's transition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                 <div className="bg-white/[0.02] p-8 rounded-[32px] border border-white/10 flex items-center justify-between">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Taijul Islam</div>
                        <div className="text-2xl font-display font-bold text-emerald-500">Left-Arm <span className="text-xs font-normal text-white/40">ORTHO</span></div>
                    </div>
                    <Zap className="w-8 h-8 text-emerald-500/30" />
                 </div>
                 <div className="bg-white/[0.02] p-8 rounded-[32px] border border-white/10 flex items-center justify-between">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Mehidy Miraz</div>
                        <div className="text-2xl font-display font-bold text-pak-green">Off-Spin <span className="text-xs font-normal text-white/40">SPECIALIST</span></div>
                    </div>
                    <Activity className="w-8 h-8 text-pak-green/30" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                As the 1st Test in Dhaka looms, the conversation in Islamabad and Lahore has centered on one missing name: <span className="text-white font-bold">Babar Azam</span>. But while the "Babar Vacuum" is a structural problem for Pakistan, the tactical problem waiting for them on the pitch is far more tangible.
              </p>

              <p>
                Taijul Islam and Mehidy Hasan Miraz aren't just bowlers in Dhaka; they are the architects of a slow, suffocating demise. For a Pakistan top order featuring debutants and reshuffled slots, this is a baptism by fire.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Taijul Islam: The Classical Destroyer</h2>
              <p>
                Taijul Islam is the heart of Bangladesh’s Test identity. He is a classical left-arm spinner who thrives on consistency and the "Arm Ball."
              </p>

              <div className="p-10 bg-emerald-500/5 border border-emerald-500/20 rounded-[40px] space-y-6">
                 <div className="flex items-center gap-4 text-emerald-500 mb-2">
                    <Target className="w-6 h-6" />
                    <span className="text-sm font-black uppercase tracking-[4px]">The Strength Matrix</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Vs Right-Handers (Masood, Rizwan)</h4>
                        <p className="text-sm text-white/50 leading-relaxed">
                            He uses the traditional away-turn to find the outside edge. His setup usually involves 3-4 balls drifting in, followed by the one that holds its line or turns sharply.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Vs Left-Handers (Imam, Saud)</h4>
                        <p className="text-sm text-white/50 leading-relaxed">
                            The danger here is the LBW. Taijul angles it into the pads, making it impossible for lefties to drive with confidence. His "Arm Ball" is his primary wicket-taker for left-handers.
                        </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Mehidy Hasan Miraz: The Modern Off-Spinner</h2>
              <p>
                If Taijul is the anchor, Mehidy is the aggressor. He bowls with significantly more "revs" on the ball, allowing him to extract bounce even from tired surfaces.
              </p>

              <div className="p-10 bg-pak-green/5 border border-pak-green/20 rounded-[40px] space-y-6">
                 <div className="flex items-center gap-4 text-pak-green mb-2">
                    <Zap className="w-6 h-6" />
                    <span className="text-sm font-black uppercase tracking-[4px]">The X-Factor Analysis</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">The Drift Trap</h4>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Mehidy relies on late drift in the air. Right-handed batters often plant their front foot too early, and Mehidy's drift pulls them out of position, leading to stumping or bat-pad catches.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">The Carrom Ball</h4>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Reserved for set batters. It's a subtle variation that doesn't turn, instead sliding onto the pads. It's lethal against right-handers looking to play against the spin.
                        </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight text-red-500">The Pakistan Dilemma: Life Without Babar</h2>
              <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-[32px] flex items-start gap-6">
                 <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
                 <div>
                    <h4 className="text-white font-bold mb-4">The Technical Vacuum</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Babar Azam's greatest strength against spin was his use of the crease—he played it very late or used his feet to reach the pitch of the ball. Without him, Pakistan's middle order loses its "Spin Neutralizer."
                    </p>
                 </div>
              </div>

              <p>
                <span className="text-white font-bold">Saud Shakeel</span> and <span className="text-white font-bold">Mohammad Rizwan</span> are now the primary targets. Bangladesh knows that if they can tie down Saud, the rest of the order—mostly unaccustomed to Dhaka’s Day 4 and Day 5 turn—will eventually cave under the pressure of dot balls.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <h4 className="text-xl font-bold text-white mb-2">The Opening Roulette</h4>
                    <p className="text-sm text-white/50 leading-relaxed">Azan Awais is a brilliant domestic talent, but facing Taijul with a brand new ball on a Dhaka track is a different beast altogether. If the openers fail to see off the first 15 overs, the spin duo will be introduced early, which is exactly what Bangladesh wants.</p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <h4 className="text-xl font-bold text-white mb-2">Post-Tea Session</h4>
                    <p className="text-sm text-white/50 leading-relaxed">Look out for the final session on Day 1. If the pitch is dry, Taijul usually comes into his own right before the close of play. This is when Pakistan’s concentration will be tested to its absolute limit.</p>
                 </div>
              </div>
              
              <p className="text-xl font-bold text-emerald-500 italic mt-12">
                "Pakistan doesn't just need runs; they need a technical masterclass. In the absence of their champion, it's time for the 'new generation' to show they can handle the heat of the Dhaka dust."
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-emerald-500 mb-8">Related Strategy</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/babar-azam-injury-batting-lineup-analysis-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Batting Lineup</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">Reshuffling without Babar</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500" />
                  </Link>
                  <Link to="/news/bangladesh-cricket-team-2026-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Team Preview</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Complete Bangladesh Analysis</h5>
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
        title="Trial by Spin: Analyzing Taijul Islam and Mehidy Hasan Miraz" 
        summary="A tactical deep dive into Bangladesh's spin threat for the Dhaka Test." 
      />
    </div>
  );
};

export default TaijulMehidyAnalysisBlog;
