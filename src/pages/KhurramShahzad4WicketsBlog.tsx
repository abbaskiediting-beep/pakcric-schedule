import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Target, 
  ArrowLeft, 
  TrendingUp, 
  Activity, 
  BarChart3, 
  ChevronRight,
  Star,
  Award,
  Shield,
  Clock,
  User,
  Quote
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const KhurramShahzad4WicketsBlog = () => {
  const stats = [
    { label: 'Overs', value: '20' },
    { label: 'Maidens', value: '3' },
    { label: 'Runs', value: '86' },
    { label: 'Wickets', value: '4' },
    { label: 'Economy', value: '4.30' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Khurram Shahzad’s Match-Winning Bowling Performance | PakCric</title>
        <meta name="description" content="Pakistan fast bowler Khurram Shahzad delivered a brilliant bowling spell with 4 wickets, showcasing accuracy, control, and wicket-taking ability." />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Feed
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[3px] border border-red-500/20 rounded-full">
                  Player Spotlight
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  May 18, 2026
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tighter uppercase italic">
                Khurram <br />
                <span className="text-red-500 font-black">Shahzad.</span> <br />
                Four Wickets.
              </h1>

              <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-medium">
                Pakistan fast bowler Khurram Shahzad delivered a brilliant bowling spell that played a major role in his team’s strong performance, finishing with 4/86.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-white/[0.02] border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
               {stats.map((stat, i) => (
                  <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-center group hover:bg-white/[0.05] transition-all">
                     <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">{stat.label}</div>
                     <div className={`text-4xl font-display font-bold transition-transform group-hover:scale-110 ${stat.label === 'Wickets' ? 'text-red-500' : 'text-white'}`}>
                        {stat.value}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/60">
              <p className="text-3xl text-white font-display font-bold leading-tight italic border-l-4 border-red-500 pl-8">
                "His accuracy, control, and wicket-taking ability kept constant pressure on the batting side throughout the innings."
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Early Pressure and Control</h2>
                <p>
                  From the beginning of his spell, Khurram Shahzad bowled with excellent discipline. He maintained tight lines and lengths, making it difficult for the batters to score freely. His three maiden overs showed his ability to build pressure and force mistakes from the opposition.
                </p>
                <p>
                  In modern cricket, especially in longer formats, bowlers who can consistently bowl dot balls become extremely valuable. Khurram did exactly that, balancing aggression with defensive discipline.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Award className="w-48 h-48 text-red-500" />
                 </div>
                 <h2 className="text-3xl font-display font-bold text-white uppercase italic mb-8 relative z-10">A Rising Star for Pakistan</h2>
                 <p className="relative z-10 mb-8">
                    Khurram Shahzad continues to prove why he is considered one of Pakistan’s promising fast bowlers. Performances like this show his potential to become a key player in Pakistan’s bowling lineup across formats. His pace, consistency, and ability to deliver breakthroughs make him an exciting talent for the future.
                 </p>
                 <div className="flex flex-wrap gap-4 relative z-10">
                    <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-black uppercase tracking-[2px]">
                       Pace: 140+ KPH
                    </div>
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-[10px] font-black uppercase tracking-[2px]">
                       Wicket Taker
                    </div>
                 </div>
              </div>

              <div className="space-y-6">
                 <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Support from Other Bowlers</h2>
                 <p>
                    While Mohammad Abbas and Hasan Ali also bowled well, Khurram Shahzad emerged as one of the most impactful bowlers in the attack because of his wicket-taking ability. His spell complemented the overall bowling effort perfectly, ensuring the opposition never felt fully settled.
                 </p>
              </div>

              <div className="p-8 md:p-12 bg-gradient-to-br from-[#0D0D15] to-[#050505] border border-red-500/20 rounded-[40px] mt-20">
                 <h2 className="text-3xl font-display font-bold text-white uppercase italic mb-6">Final Thoughts</h2>
                 <p className="text-lg text-white/60 leading-relaxed mb-8">
                    Khurram Shahzad’s bowling spell was a complete package of control, patience, and aggression. With four wickets and sustained pressure over 20 overs, he showcased the qualities of a top-class fast bowler. If he continues performing like this, Pakistan cricket could have another dependable pace weapon for years to come.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/news/pakistan-bowling-bangladesh-2nd-innings-2nd-test-sylhet-2026" className="px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[2px] transition-transform hover:scale-105 active:scale-95">
                       Full Bowling Analysis
                    </Link>
                    <Link to="/rankings" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-[10px] uppercase tracking-[2px] hover:bg-white/10 transition-all">
                       Player Rankings
                    </Link>
                 </div>
              </div>
            </div>

            {/* Related Coverage */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-red-500 mb-8">Related Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/can-pakistan-chase-437-runs-vs-bangladesh-2nd-test-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none mb-1">Live Match</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">Can Pakistan Chase 437?</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/mushfiqur-rahim-137-runs-vs-pakistan-2nd-test-record" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Centurion</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">Mushfiqur's 137 Report</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <BlogShare 
        title="Khurram Shahzad’s Match-Winning Bowling Performance" 
        summary="Analysis of Khurram Shahzad's brilliant 4-wicket haul and how he controlled the innings with discipline." 
      />
    </div>
  );
};

export default KhurramShahzad4WicketsBlog;
