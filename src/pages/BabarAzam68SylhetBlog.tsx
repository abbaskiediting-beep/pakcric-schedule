import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Star,
  Target,
  Zap,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Activity,
  History,
  TrendingDown,
  User,
  Quote
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const BabarAzam68SylhetBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam's 68 vs Bangladesh — The King Returns But Pakistan Collapse | PakCric</title>
        <meta name="description" content="Babar Azam scored 68 off 84 balls on return from injury in 2nd Test Sylhet. Pakistan 232 all out, trail Bangladesh 278 by 46 runs. Full analysis." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Live News
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-3 h-3" /> The Return
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 17, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The King <br />
                <span className="text-pak-green">Returns.</span> <br />
                Pakistan Fall.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Babar Azam's 68 was a lone fight as Pakistan collapsed to 232 all out, handing Bangladesh a 46-run first-innings lead in Sylhet.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Runs</div>
                    <div className="text-3xl font-display font-bold text-white italic">68</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Balls</div>
                    <div className="text-3xl font-display font-bold text-white">84</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Fours</div>
                    <div className="text-3xl font-display font-bold text-pak-green">7+</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">SR</div>
                    <div className="text-3xl font-display font-bold text-white">80.9</div>
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
              <p>
                He had missed the entire first Test. He had watched from the sidelines as Pakistan lost by 104 runs. And then, on Day 2 at Sylhet, Babar Azam walked to the crease with Pakistan at 79/4—four wickets gone in the morning session. He delivered a fighting 68, but it wasn't enough to prevent yet another collapse.
              </p>

              <div className="bg-[#0A1A0F] border border-pak-green/20 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Quote className="w-64 h-64 text-pak-green" />
                 </div>
                 <h3 className="text-2xl font-display font-bold text-white uppercase mb-8 relative z-10">Babar's Innings Highlights</h3>
                 <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                       <span className="text-sm font-bold text-white/60 uppercase racking-widest">Entry Point</span>
                       <span className="font-display font-bold text-white text-xl uppercase italic">79/4</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                       <span className="text-sm font-bold text-white/60 uppercase racking-widest">Fifty Milestone</span>
                       <span className="font-display font-bold text-pak-green text-xl uppercase italic">62 Balls</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                       <span className="text-sm font-bold text-white/60 uppercase racking-widest">Wicket Taker</span>
                       <span className="font-display font-bold text-white text-xl uppercase italic">Nahid Rana</span>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">The 63-Run Stand</h2>
              <p>
                Babar Azam and Salman Ali Agha stitched together a 63-run fifth-wicket partnership that was Pakistan's most productive passage of play in the series. The half-century came off a beautiful check drive off Shoriful Islam. 
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-10">The Collapse Resumes</h2>
              <p>
                After Babar's departure at 142/5, Pakistan lost the plot again. Taijul Islam demolished the middle-order, removing Agha Salman, Mohammad Rizwan, and Hasan Ali in quick succession as Pakistan folded for 232.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="p-8 bg-red-600/5 border border-red-500/20 rounded-[40px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <TrendingDown className="w-12 h-12 text-red-500" />
                    </div>
                    <div className="text-[10px] font-black text-red-500 uppercase tracking-[4px] mb-6">Pak Collapse</div>
                    <div className="space-y-4 text-sm font-medium">
                       <div className="flex justify-between border-b border-white/5 pb-2">
                          <span>142/5</span>
                          <span>Babar Out</span>
                       </div>
                       <div className="flex justify-between border-b border-white/5 pb-2 text-white/40">
                          <span>232 ALL OUT</span>
                          <span>Lead: -46</span>
                       </div>
                    </div>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[40px]">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">Taijul's Impact</h4>
                    <p className="text-sm italic text-white/50 leading-relaxed mb-6">
                       "Taijul Islam proved lethal after tea, taking 3 quick wickets to leave Pakistan's tail exposed. His spell turned a competitive stand into a massive collapse."
                    </p>
                    <div className="flex items-center gap-2">
                       <Activity className="w-4 h-4 text-pak-green" />
                       <span className="text-[10px] font-black uppercase tracking-widest">3 Wkts in 1st Innings</span>
                    </div>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">Match Current State</h2>
              <div className="flex flex-col md:flex-row gap-4">
                 <div className="flex-1 p-8 bg-white/[0.03] border border-white/10 rounded-[32px]">
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">BAN 2nd Innings</div>
                    <div className="text-3xl font-display font-bold text-pak-green">58/0 <span className="text-white/40 text-sm font-sans tracking-normal font-bold">(Session 3)</span></div>
                 </div>
                 <div className="flex-1 p-8 bg-white/[0.03] border border-white/10 rounded-[32px]">
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Current Lead</div>
                    <div className="text-3xl font-display font-bold text-white">104 Runs</div>
                 </div>
              </div>

              <div className="bg-white/5 p-8 border border-white/10 rounded-[40px] mt-20">
                 <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-pak-green" />
                    <h4 className="text-xs font-black uppercase tracking-[3px] text-pak-green">Ramiz Raja's Verdict</h4>
                 </div>
                 <p className="text-lg font-medium text-white/80 leading-relaxed italic">
                    "You've spoiled it. Babar is a very experienced player and should have the basic idea to judge the change in pace. On 68, the team needed him to stay, and he fell to a top-edge trying to manipulate the ball fine."
                 </p>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Match Archive</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2nd-test-day-2-session-1-report-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Morning Update</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Session 1 Report</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/pakistan-upcoming-series-full-schedule" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Look Ahead</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-amber-500 transition-colors">Series Schedule</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="The King Returns: Babar Azam's 68 at Sylhet Analysis" 
        summary="A fighting fifty on return, but yet another Pakistan collapse in the 2nd Test vs Bangladesh." 
      />
    </div>
  );
};

export default BabarAzam68SylhetBlog;
