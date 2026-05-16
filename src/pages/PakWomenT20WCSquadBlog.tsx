import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Users,
  Shield,
  Zap,
  Star,
  Activity,
  Award,
  ChevronRight,
  TrendingUp,
  Target,
  Flag,
  Globe
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakWomenT20WCSquadBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pakistan Women’s T20 World Cup 2026 Squad — Full Analysis & Expectations | PakCric</title>
        <meta name="description" content="Pakistan Women announce their T20 World Cup 2026 squad led by Fatima Sana. Full squad analysis, player breakdown, strengths, weaknesses, and tournament expectations." />
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
              <ArrowLeft className="w-3 h-3" /> News Archive
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Globe className="w-3 h-3" /> World Cup 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Women's T20 WC <br />
                <span className="text-pak-green">2026 Squad.</span> <br />
                Full Analysis.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                A fearless new era begins. Led by Fatima Sana, Pakistan Women head to England with a balanced mix of youth and experience.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                 <div className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center gap-3">
                    <Flag className="w-4 h-4 text-pak-green" />
                    <span className="text-xs font-bold uppercase tracking-tight">Host: England & Wales</span>
                 </div>
                 <div className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center gap-3">
                    <Users className="w-4 h-4 text-pak-green" />
                    <span className="text-xs font-bold uppercase tracking-tight">15-Member Squad</span>
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
            
            <div className="markdown-body space-y-12 text-xl leading-relaxed text-white/70">
              <p>
                The Pakistan Women’s cricket team has officially announced its squad for the ICC Women’s T20 World Cup 2026. Led by all-rounder Fatima Sana, Pakistan enter the tournament with a balanced squad featuring experienced campaigners and young emerging stars.
              </p>

              <div className="bg-gradient-to-br from-[#0A1A0F] to-[#050C07] border border-pak-green/20 rounded-[40px] p-8 md:p-12 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Shield className="w-64 h-64 text-pak-green" />
                 </div>
                 <h3 className="text-2xl font-display font-bold text-white uppercase mb-8 relative z-10">The 15-Member Squad</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 relative z-10">
                    {[
                      { p: 'Fatima Sana (C)', r: 'Captain, All-rounder' },
                      { p: 'Muneeba Ali', r: 'Wicketkeeper Batter' },
                      { p: 'Diana Baig', r: 'Fast Bowler' },
                      { p: 'Eyman Fatima', r: 'Batter' },
                      { p: 'Gull Feroza', r: 'Batter' },
                      { p: 'Tuba Hassan', r: 'Spinner' },
                      { p: 'Sadia Iqbal', r: 'Left-arm Spinner' },
                      { p: 'Iram Javed', r: 'Batter' },
                      { p: 'Saira Jabeen', r: 'All-rounder' },
                      { p: 'Natalia Parvaiz', r: 'Batter' },
                      { p: 'Aliya Riaz', r: 'Senior All-rounder' },
                      { p: 'Tasmia Rubab', r: 'Bowler' },
                      { p: 'Rameen Shamim', r: 'Fast Bowling All-rounder' },
                      { p: 'Nashra Sandhu', r: 'Spinner' },
                      { p: 'Ayesha Zafar', r: 'Opening Batter' }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between py-3 border-b border-white/5">
                        <span className="font-bold text-white/90">{item.p}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-pak-green">{item.r}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8">Fatima Sana: The Fearless Leader</h2>
              <p>
                At the center of Pakistan’s campaign stands captain Fatima Sana. She has become the face of Pakistan women’s cricket through her fearless attitude. Her leadership style is aggressive yet calm, providing balance with new-ball bowling and lower-order hitting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] text-center">
                    <Target className="w-8 h-8 text-pak-green mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white uppercase mb-2">New Ball</h4>
                    <p className="text-xs text-white/40">Aggressive Seam</p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] text-center">
                    <Zap className="w-8 h-8 text-pak-green mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white uppercase mb-2">Power Hitting</h4>
                    <p className="text-xs text-white/40">Death Overs</p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] text-center">
                    <Users className="w-8 h-8 text-pak-green mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white uppercase mb-2">Leadership</h4>
                    <p className="text-xs text-white/40">Fearless Era</p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-4">Strategic Strengths: The Spin Web</h2>
              <p>
                Pakistan’s biggest strength remains their spin department. The trio of Sadia Iqbal, Nashra Sandhu, and Tuba Hassan offers tactical flexibility throughout the innings.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Spinner</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Specialty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-bold text-white">Sadia Iqbal</td>
                      <td className="p-6 text-sm text-white/60 font-medium uppercase tracking-tight">Left-arm orthodox</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-bold text-white">Nashra Sandhu</td>
                      <td className="p-6 text-sm text-white/60 font-medium uppercase tracking-tight">Containment + Wickets</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-white">Tuba Hassan</td>
                      <td className="p-6 text-sm text-white/60 font-medium uppercase tracking-tight">Attacking leg-spin</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-4">Challenges to Overcome</h2>
              <ul className="space-y-4 list-none p-0">
                <li className="flex items-start gap-4 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center font-black text-[10px] text-red-500 shrink-0 mt-1">01</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Batting Consistency</h4>
                    <p className="text-sm text-white/50">Historically, collapses in ICC events have been a concern. Against Australia or England, scoring rates must improve.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center font-black text-[10px] text-red-500 shrink-0 mt-1">02</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Power Hitting</h4>
                    <p className="text-sm text-white/50">Modern T20s depend on six-hitting. Pakistan still relies heavily on placement and strike-rotation.</p>
                  </div>
                </li>
              </ul>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-8">The Verdict</h2>
              <p>
                This squad feels younger and more modern. Handing the captaincy to Fatima Sana signals a long-term transition. While they may not start as favorites against Australia or India, this team has enough talent to surprise the world. A semi-final spot would be a massive statement for Pakistan women's cricket.
              </p>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Tournament Logistics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Impact Player</span>
                         <p className="text-xl font-bold text-white">Aliya Riaz</p>
                      </div>
                      <Star className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Rising Star</span>
                         <p className="text-xl font-bold text-white">Eyman Fatima</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Further Reading */}
            <div className="pt-10 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/fatima-sana-world-record-fastest-fifty-womens-t20i-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">World Record</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">Fatima's 15-Ball Fifty</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-yellow-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/pakistan-women-icc-championship-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Standings</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">ICC Championship Status</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Pakistan Women’s T20 World Cup 2026 Squad Analysis" 
        summary="A comprehensive breakdown of the Pakistan Women's squad for the ICC T20 World Cup in England." 
      />
    </div>
  );
};

export default PakWomenT20WCSquadBlog;
