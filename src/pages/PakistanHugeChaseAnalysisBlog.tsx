import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Target, 
  ArrowLeft, 
  Zap, 
  ChevronRight, 
  Clock, 
  AlertTriangle, 
  BarChart3, 
  ShieldCheck,
  TrendingUp,
  Activity,
  History,
  Timer
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakistanHugeChaseAnalysisBlog = () => {
  const factors = [
    {
      title: "First Session of Day 4",
      desc: "The opening session could decide everything. If Pakistan survives without major damage, confidence will grow.",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Handling Spin",
      desc: "Bangladesh’s spinners are likely to control the game. Pakistan must play them carefully and avoid unnecessary attacking shots.",
      icon: Target,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Partnerships",
      desc: "In a big chase, single players cannot win alone. Pakistan needs multiple partnerships of 50+ and 100+ runs.",
      icon: TrendingUp,
      color: "text-pak-green",
      bg: "bg-pak-green/10"
    },
    {
      title: "Mental Strength",
      desc: "The pressure of chasing 437 runs can create panic. Calmness and patience will be the biggest weapons.",
      icon: ShieldCheck,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Can Pakistan Chase 437 Runs vs Bangladesh? 2nd Test Analysis | PakCric</title>
        <meta name="description" content="Pakistan faces a massive 437-run target in 2nd Test vs Bangladesh. Explore the full match analysis, key factors for Day 4, and historical context from Sylhet." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-red-500/10 blur-[150px] rounded-full animate-pulse" />
           <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pak-green/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> All News
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[3px] border border-red-500/30 rounded-full">
                  Massive Challenge
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  May 18, 2026
                </span>
                <span className="flex items-center gap-1 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                  <Activity className="w-3 h-3" /> Live Analysis
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase italic">
                Can <br />
                <span className="text-red-500">Pakistan</span> <br />
                Chase 437?
              </h1>

              <p className="text-xl text-white/50 leading-relaxed max-w-2xl font-medium">
                Pakistan faces a mountain to climb in Sylhet as they need 437 runs to secure a win. At Day 3 stumps, they are 0/0 — but the real test begins now.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Probability Tracker */}
      <section className="py-12 bg-white/[0.02] border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
               <div className="p-8 bg-black/40 border border-white/10 rounded-[32px] relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <AlertTriangle className="w-16 h-16" />
                  </div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[4px] mb-2">Target</div>
                  <div className="text-5xl font-display font-bold text-red-500">437</div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2">Runs Required</div>
               </div>
               
               <div className="md:col-span-2 p-8 bg-[#0D0D1A] border border-blue-500/20 rounded-[32px] relative overflow-hidden text-left flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest">Current Situation</h3>
                     <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold rounded">DAY 3 STUMPS</span>
                  </div>
                  <div className="flex items-baseline gap-4 mb-4">
                     <div className="text-4xl font-display font-bold text-white italic">PAK 0/0</div>
                     <div className="text-white/40 text-xs font-mono">(2.0 Overs)</div>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-[0.5%] h-full bg-blue-500" />
                  </div>
                  <div className="mt-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">0.5% Target Completed</div>
               </div>
            </div>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/60">
              <p className="text-3xl text-white font-display font-bold leading-tight italic border-l-4 border-red-500 pl-8">
                "Chasing anything above 350 is already considered difficult in Test cricket. A target of 437 becomes a psychological war."
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Bangladesh Dominated the Match</h2>
                <p>
                  Bangladesh performed brilliantly in both innings. After scoring 278 runs in the first innings, they came back even stronger in the second innings with 390 runs. Their batters showed patience, discipline, and smart shot selection throughout the game.
                </p>
                <p>
                  The biggest highlight of the innings was the outstanding century by Mushfiqur Rahim, whose 137-run knock completely shifted the momentum towards Bangladesh. His innings helped Bangladesh build a massive lead and put Pakistan under serious pressure.
                </p>
              </div>

              <div className="p-8 md:p-12 bg-red-600/5 border border-red-500/20 rounded-[40px] space-y-6">
                <h2 className="text-3xl font-display font-bold text-white uppercase italic">Why 437 is a Huge Target</h2>
                <ul className="space-y-4">
                  {[
                    "The pitch gets slower and rougher on Day 4 and Day 5.",
                    "Spinners start getting more assistance from the surface.",
                    "Pressure increases with every wicket.",
                    "Batters must survive long sessions without making mistakes."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs font-black">!</div>
                      <p className="text-lg text-white/80 font-medium">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8 border-t border-white/10">Key Factors for Day 4</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {factors.map((factor, i) => (
                  <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] group hover:bg-white/[0.05] transition-all">
                    <div className={`w-12 h-12 rounded-2xl ${factor.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                      <factor.icon className={`w-6 h-6 ${factor.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic">{factor.title}</h3>
                    <p className="text-sm leading-relaxed text-white/40">{factor.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-gradient-to-br from-black to-[#050510] border border-white/10 rounded-[40px] mt-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Target className="w-48 h-48" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white uppercase italic mb-6 relative z-10">Historical Context</h2>
                <p className="text-lg text-white/60 leading-relaxed mb-8 relative z-10">
                  Historically, very few teams have successfully chased targets above 400 in Test cricket. Such chases require near-perfect batting performances over multiple sessions. Pakistan has produced memorable Test chases in the past, but this target against a confident Bangladesh side will be one of the toughest challenges they have faced recently.
                </p>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <Link to="/match/pak-vs-ban-2nd-test-2026" className="px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-[2px] hover:scale-105 active:scale-95 transition-all">
                    Live Score Center
                  </Link>
                  <Link to="/news/mushfiqur-rahim-137-runs-vs-pakistan-2nd-test-record" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-xs uppercase tracking-[2px] hover:bg-white/10 transition-all">
                    Mushfiqur's 137 Report
                  </Link>
                </div>
              </div>

              <div className="pt-20 border-t border-white/10 space-y-6">
                <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Final Prediction</h2>
                <p>
                  Realistically, Bangladesh is currently the favorite to win the match. A 437-run chase in Asian conditions during the fourth innings is extremely difficult. Pakistan will need something very special to pull off this victory.
                </p>
                <p>
                  Still, cricket is unpredictable. One big partnership or a century from a senior batter can completely change the direction of the game. Pakistan’s fans will hope their team can show fighting spirit and produce a memorable comeback.
                </p>
              </div>
            </div>

            {/* Related Analysis */}
            <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/news/pakistan-1st-innings-collapse-analysis-2nd-test-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                <div>
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none mb-1">Innings Recap</span>
                  <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">PAK 1st Innings Collapse</h5>
                </div>
                <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/news/bangladesh-bowlers-crush-pakistan-2nd-test-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                <div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Bowling Analysis</span>
                  <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">BAN Bowlers Dominance</h5>
                </div>
                <ChevronRight className="w-5 h-5 text-emerald-500 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <BlogShare 
        title="Can Pakistan Chase 437 Runs Against Bangladesh? Full Match Analysis" 
        summary="Explore the massive 437-run target for Pakistan in Sylhet and the key factors for a potential historical chase."
      />
    </div>
  );
};

export default PakistanHugeChaseAnalysisBlog;
