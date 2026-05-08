import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  AlertTriangle, 
  Calendar, 
  ArrowLeft,
  Target,
  Users,
  ChevronRight,
  Zap,
  MapPin,
  Clock,
  TrendingUp,
  Layout,
  BarChart3,
  GanttChart,
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const BabarInjuryLineupAnalysisBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Lineup Analysis: Pakistan Batting Without Babar Azam | PakCric</title>
        <meta name="description" content="In-depth analysis of Pakistan's reshuffled batting lineup for the 1st Test vs Bangladesh. Potential replacements and tactical shifts explained." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />
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
                  Tactical Analysis
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 7, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Babar <br /><span className="text-pak-green font-black">VACUUM.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                How does Pakistan rebuild its batting order 24 hours before the Dhaka Test? We analyze the replacements, the shifts, and the new tactical blueprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] flex flex-col items-center text-center">
                    <BarChart3 className="w-8 h-8 text-red-500 mb-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Impact Score</span>
                    <span className="text-4xl font-display font-bold">-45% <span className="text-sm font-normal text-white/20">STABILITY</span></span>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] flex flex-col items-center text-center">
                    <Users className="w-8 h-8 text-pak-green mb-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Replacements</span>
                    <span className="text-4xl font-display font-bold">2 <span className="text-sm font-normal text-white/20">OPTIONS</span></span>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] flex flex-col items-center text-center">
                    <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">New Strategy</span>
                    <span className="text-4xl font-display font-bold">AGG <span className="text-sm font-normal text-white/20">DRIVEN</span></span>
                </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 pb-40 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                Babar Azam isn't just a batter; he is the <span className="text-white font-bold italic">psychological anchor</span> of the Pakistan Test match system. His absence due to a left knee injury on the eve of the Dhaka Test is more than a personnel change—it's a fundamental identity crisis for the touring side. 
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                <Layout className="w-8 h-8 text-pak-green" /> The Reshuffled XI
              </h2>

              <p>
                Team management has indicated that instead of a like-for-like middle-order replacement, they might restructure the top order to maintain balance. Here is the projected batting order for May 8:
              </p>

              <div className="space-y-4">
                  {[
                      { role: 'Opener', name: 'Imam-ul-Haq', status: 'Anchor' },
                      { role: 'Opener', name: 'Abdullah Fazal / Azan Awais', status: 'DEBUTANT' },
                      { role: 'No. 3', name: 'Shan Masood (c)', status: 'Aggressor' },
                      { role: 'No. 4', name: 'Saud Shakeel', status: 'Anchor' },
                      { role: 'No. 5', name: 'Mohammad Rizwan (wk)', status: 'Engine Room' },
                      { role: 'No. 6', name: 'Salman Ali Agha', status: 'All-rounder' },
                  ].map((player, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl group hover:border-pak-green/30 transition-all">
                          <div className="flex items-center gap-6">
                              <span className="text-xs font-black text-white/20 w-8">{i+1}</span>
                              <div>
                                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{player.role}</div>
                                  <div className="text-xl font-bold text-white group-hover:text-pak-green transition-colors">{player.name}</div>
                              </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${player.status === 'DEBUTANT' ? 'bg-red-500/20 text-red-500 border border-red-500/20' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                              {player.status}
                          </span>
                      </div>
                  ))}
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The Debutant Dilemma: Awais vs Fazal</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] space-y-6">
                      <div className="flex items-center gap-3 text-pak-green">
                          <UserCheck className="w-6 h-6" />
                          <h3 className="text-xl font-bold uppercase tracking-tight">Azan Awais</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-white/50">
                          The 21-year-old is the "pure" talent. With 10 domestic centuries and an average of 48.60, he is built for the long haul. 
                      </p>
                      <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                              <span>Technique</span>
                              <span className="text-pak-green">9/10</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-pak-green w-[90%]" />
                          </div>
                      </div>
                  </div>

                  <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] space-y-6">
                      <div className="flex items-center gap-3 text-red-500">
                          <ShieldCheck className="w-6 h-6" />
                          <h3 className="text-xl font-bold uppercase tracking-tight">Abdullah Fazal</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-white/50">
                          The left-handed advantage. At 23, Fazal offers a different angle that could disrupt Bangladesh's off-spin heavy attack.
                      </p>
                      <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                              <span>Left-Hand Utility</span>
                              <span className="text-red-500">MAX</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 w-full" />
                          </div>
                      </div>
                  </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Tactical Shift: From Anchor to Attack</h2>
              <p>
                Babar Azam's presence allows others to play freely. Without him, the collective responsibility shifts. Captain <span className="text-white font-bold">Shan Masood</span> moving to No.3 signals a desire to put the pressure back on Bangladesh early.
              </p>

              <blockquote className="p-8 bg-pak-green/10 border-l-4 border-pak-green rounded-2xl italic text-white/90">
                "We aren't just replacing runs; we're replacing oversight. Babar reads the game from non-striker's end better than anyone. Now, Saud and Rizwan must be the senior voices."
              </blockquote>

              <p>
                The biggest concern remains <span className="text-red-500 font-bold">Spin Vulnerability</span>. In Dhaka, the pitch will turn. Babar's elite footwork against Taijul Islam and Mehidy Miraz was Pakistan's "Get out of Jail" card. Without it, the middle order might struggle to rotate strike, leading to build-ups of dot balls and eventual wickets.
              </p>

            </div>

            {/* Analysis Footer */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-red-500 mb-8">Deep Dive Series</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/babar-azam-injured-1st-bangladesh-test-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Original News</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">Babar Injury Report</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-red-500" />
                  </Link>
                  <Link to="/news/pakistan-tour-bangladesh-squad-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Squad Intel</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Meet the Uncapped Players</h5>
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
        title="Tactical Analysis: Pakistan Batting Without Babar Azam" 
        summary="Deep dive into the reshuffled lineup and debutant options for the Dhaka Test." 
      />
    </div>
  );
};

export default BabarInjuryLineupAnalysisBlog;
