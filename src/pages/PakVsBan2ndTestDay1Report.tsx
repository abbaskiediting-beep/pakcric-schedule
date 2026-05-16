import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Clock,
  MapPin,
  Trophy,
  Zap,
  Target,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Activity,
  Shield,
  History
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakVsBan2ndTestDay1Report = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PAK vs BAN 2nd Test Day 1 Session 1 & 2 Report Sylhet 2026 | PakCric</title>
        <meta name="description" content="Bangladesh 168/6 after 2 sessions on Day 1 of 2nd Test Sylhet 2026. Hasan Ali stretchered off, Tanzid debuts, Pakistan fight back." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Live Coverage
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Live Report
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 16, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                BAN 168/6 <br />
                <span className="text-pak-green">Day 1 Report.</span> <br />
                Sylhet Test.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Bangladesh fight back after middle-order recovery, while Pakistan suffers a blow as Hasan Ali is stretchered off in Sylhet.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Session</div>
                    <div className="text-2xl font-display font-bold text-white uppercase italic tracking-tighter">Tea</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Score</div>
                    <div className="text-2xl font-display font-bold text-pak-green">168/6</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Overs</div>
                    <div className="text-2xl font-display font-bold text-white">54.0</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Run Rate</div>
                    <div className="text-2xl font-display font-bold text-white">3.11</div>
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
                Pakistan won the toss and elected to field in overcast conditions at Sylhet. The decision paid dividends early as Mohammad Abbas extracted swing to rattle Bangladesh's top order. However, the hosts recovered in the second session before Pakistan struck back late before Tea.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">The Playing XIs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="p-8 bg-[#0A1A0F] border border-pak-green/20 rounded-[40px]">
                    <h4 className="text-[10px] font-black text-pak-green uppercase tracking-[4px] mb-6">Pakistan XI</h4>
                    <div className="space-y-2 text-sm font-medium text-white/80">
                       <p>Azan Awais, Shan Masood (c), Babar Azam, Abdullah Fazal, Saud Shakeel, Mohammad Rizwan (wk), Salman Agha, Khurram Shahzad, Sajid Khan, Hasan Ali, Mohammad Abbas.</p>
                    </div>
                 </div>
                 <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-[40px]">
                    <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[4px] mb-6">Bangladesh XI</h4>
                    <div className="space-y-2 text-sm font-medium text-white/80">
                       <p>Mahmudul Hasan Joy, Tanzid Hasan Tamim (Debut), Najmul Hossain Shanto (c), Mominul Haque, Mushfiqur Rahim, Litton Das (wk), Mehidy Hasan Miraz, Taijul Islam, Taskin Ahmed, Shoriful Islam, Nahid Rana.</p>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-red-600/5 border border-red-500/20 rounded-[40px] flex gap-6 items-start">
                 <AlertCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                 <div>
                    <h3 className="text-xl font-bold text-red-500 mb-2 uppercase">Hasan Ali Stretchered Off</h3>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                       "Hasan Ali picked up an injury—believed to be a blow to the head while fielding. He was taken off on a stretcher for medical assessment. Pakistan camp awaits word on a concussion substitute."
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight pt-10">Session-wise Breakdown</h2>
              
              <div className="space-y-8">
                 <div className="bg-white/[0.02] border border-white/10 p-8 rounded-[40px]">
                    <div className="flex justify-between items-center mb-6">
                       <h4 className="text-lg font-bold text-pak-green uppercase">Session 1: PAK Dominance</h4>
                       <span className="text-xs font-bold text-white/40 italic">Score: 79/3 (20.3)</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60">
                       Mohammad Abbas struck early, removing Joy. Tanzid Hasan fell cheap on debut to a sharp in-swinger. The biggest blow for BAN was the wicket of Shanto before lunch. Pakistan were buzzing until the Hasan Ali incident.
                    </p>
                 </div>

                 <div className="bg-white/[0.02] border border-white/10 p-8 rounded-[40px]">
                    <div className="flex justify-between items-center mb-6">
                       <h4 className="text-lg font-bold text-pak-green uppercase">Session 2: BAN Fight Back</h4>
                       <span className="text-xs font-bold text-white/40 italic">Score: 168/6 (54.0)</span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60">
                       Mominul Haque and Mushfiqur Rahim stitched a valuable partnership, scoring 37 runs for no wicket in the first 10 overs after lunch. However, Pakistan's Khurram Shahzad and Sajid Khan tightened the screws late to claim three wickets in the session.
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white pt-12 uppercase tracking-tight">Bowling Statistics</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Bowler</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Overs</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Runs</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Wickets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-bold text-white">Mohammad Abbas</td>
                      <td className="p-6 text-sm text-white/60">12.0</td>
                      <td className="p-6 text-sm text-white/60">34</td>
                      <td className="p-6 font-bold text-pak-green">2</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-bold text-white">Khurram Shahzad</td>
                      <td className="p-6 text-sm text-white/60">11.0</td>
                      <td className="p-6 text-sm text-white/60">18</td>
                      <td className="p-6 font-bold text-pak-green">1</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-bold text-white">Sajid Khan</td>
                      <td className="p-6 text-sm text-white/60">14.0</td>
                      <td className="p-6 text-sm text-white/60">42</td>
                      <td className="p-6 font-bold text-pak-green">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Session 3 Expectations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Target for BAN</span>
                         <p className="text-2xl font-display font-bold text-white">250+</p>
                      </div>
                      <Target className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between">
                      <div>
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">Goal for PAK</span>
                         <p className="text-2xl font-display font-bold text-white">&lt; 200 ALL OUT</p>
                      </div>
                      <Shield className="w-8 h-8 text-pak-green opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Further Reading */}
            <div className="pt-10 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Live Coverage Extras</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pak-vs-ban-2nd-test-toss-report-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Previous Update</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">Toss: Babar Returns</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/pakistan-playing-xi-prediction-2nd-test-bangladesh-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Playing XI Prediction</h5>
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
        title="PAK vs BAN 2nd Test: Day 1 Session 1 & 2 Live Report" 
        summary="Bangladesh 168/6 at Tea on Day 1. Hasan Ali stretchered off. Live updates from Sylhet." 
      />
    </div>
  );
};

export default PakVsBan2ndTestDay1Report;
