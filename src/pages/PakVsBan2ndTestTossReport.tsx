import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Zap,
  Clock,
  MapPin,
  ChevronRight,
  Info,
  TrendingDown,
  UserCheck,
  Trophy,
  ArrowDownCircle,
  Users
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakVsBan2ndTestTossReport = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PAK vs BAN 2nd Test Toss: Pakistan Bowl First, Babar Returns, BAN 79/3 Day 1 | PakCric</title>
        <meta name="description" content="Pakistan won the toss and elected to bowl in 2nd Test Sylhet. Babar Azam returns. Mohammad Abbas takes 1st over wicket. Bangladesh 79/3 in 20 overs Session 1. Both confirmed playing XIs inside." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Latest News
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-red-600 text-white border border-red-500 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> Live Update
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 16, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                2nd Test Toss: <br />
                <span className="text-pak-green">Pakistan Win Toss,</span> <br />
                Elect to Bowl First.
              </h1>
              
              <p className="text-xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Babar Azam returns to the XI as Shan Masood chooses to field in Sylhet. Mohammad Abbas strikes in the opening over — Bangladesh 79/3 early on.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-6">
                <div className="flex -space-x-3">
                   <img src="https://flagcdn.com/w80/pk.png" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" alt="PAK" />
                   <img src="https://flagcdn.com/w80/bd.png" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" alt="BAN" />
                </div>
                <div className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
                   PAK vs BAN — 2nd Test Day 1
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Toss Result Card */}
            <div className="bg-gradient-to-br from-[#0A1A0F] to-[#050C07] border border-pak-green/40 rounded-[40px] p-8 md:p-12 mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                <Trophy className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Zap className="w-6 h-6 text-pak-green animate-pulse" />
                  <h2 className="text-2xl font-display font-bold uppercase tracking-tight italic">Toss Result</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[4px] text-white/30 mb-2">Winner</div>
                      <div className="text-4xl font-display font-bold text-pak-green uppercase">Pakistan</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[4px] text-white/30 mb-2">Decision</div>
                      <div className="text-2xl font-display font-bold text-white uppercase tracking-tight">Elected to BOWL FIRST</div>
                    </div>
                  </div>
                  <div className="bg-black/40 border border-white/5 rounded-3xl p-6">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-white/5">
                        <tr>
                          <td className="py-3 text-white/40 font-bold uppercase tracking-widest text-[9px]">Venue</td>
                          <td className="py-3 text-right font-bold">Sylhet Int'l Stadium</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-white/40 font-bold uppercase tracking-widest text-[9px]">Series</td>
                          <td className="py-3 text-right font-bold text-emerald-500">BAN LEAD 1-0</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-white/40 font-bold uppercase tracking-widest text-[9px]">Date</td>
                          <td className="py-3 text-right font-bold">May 16, 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <div className="p-8 bg-red-600/5 border border-red-500/20 rounded-3xl">
                <h3 className="text-red-500 font-black uppercase tracking-[4px] text-xs mb-4">Live Session Update</h3>
                <p className="text-2xl font-display font-bold text-white leading-tight">
                  Bangladesh 79/3 (20.3 Overs) — Session 1 Underway
                </p>
                <p className="text-sm mt-4 italic text-white/60">
                   "Mohammad Abbas has already taken a wicket in the very first over of the match! Bangladesh struggling at 79/3 after Pakistan chose to field."
                </p>
              </div>

              <h2 className="text-4xl font-display font-bold text-white mt-16 uppercase tracking-tight">Confirmed Playing XIs</h2>

              {/* PAK XI */}
              <div className="bg-[#0A0A0A] border border-pak-green/20 rounded-[40px] p-8 md:p-12 mb-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <img src="https://flagcdn.com/w160/pk.png" className="w-64 opacity-20 grayscale" alt="" />
                </div>
                <h3 className="text-2xl font-bold text-pak-green mb-8 flex items-center gap-4">
                  <img src="https://flagcdn.com/w40/pk.png" className="w-8 h-6 rounded-sm object-cover" alt="" /> 
                  Pakistan Playing XI
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    { no: 1, name: 'Azan Awais', role: 'Opener' },
                    { no: 2, name: 'Shan Masood (c)', role: 'Opener' },
                    { no: 3, name: 'Babar Azam', role: 'No. 3 (Returns)', highlight: true },
                    { no: 4, name: 'Abdullah Fazal', role: 'No. 4' },
                    { no: 5, name: 'Saud Shakeel', role: 'No. 5' },
                    { no: 6, name: 'Mohammad Rizwan (wk)', role: 'Wicket-keeper' },
                    { no: 7, name: 'Salman Ali Agha', role: 'All-rounder' },
                    { no: 8, name: 'Khurram Shahzad', role: 'Pacer (In)', highlight: true },
                    { no: 9, name: 'Sajid Khan', role: 'Spinner (In)', highlight: true },
                    { no: 10, name: 'Hasan Ali', role: 'Pacer' },
                    { no: 11, name: 'Mohammad Abbas', role: 'Pacer' }
                  ].map((p) => (
                    <div key={p.no} className="flex items-center gap-4 py-3 border-b border-white/5">
                      <span className="text-[10px] font-black text-white/20 w-4">{p.no}</span>
                      <span className={`font-bold ${p.highlight ? 'text-pak-green' : 'text-white'}`}>{p.name}</span>
                      <span className="text-[9px] font-black uppercase text-white/30 ml-auto tracking-widest">{p.role}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-pak-green/10 border border-pak-green/20 rounded-2xl">
                   <p className="text-xs text-pak-green/80 italic font-medium leading-relaxed">
                     <span className="font-black uppercase tracking-widest mr-2">Major News:</span>
                     Babar Azam returns after knee injury. Sajid Khan and Khurram Shahzad added to bolster the attack. Shaheen Afridi rested.
                   </p>
                </div>
              </div>

              {/* BAN XI */}
              <div className="bg-[#0A0A0A] border border-red-500/20 rounded-[40px] p-8 md:p-12 mb-16 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                    <img src="https://flagcdn.com/w160/bd.png" className="w-64 opacity-20 grayscale" alt="" />
                 </div>
                 <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-4">
                    <img src="https://flagcdn.com/w40/bd.png" className="w-8 h-6 rounded-sm object-cover" alt="" /> 
                    Bangladesh Playing XI
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {[
                      { no: 1, name: 'Zakir Hasan', role: 'In - Replaces Shadman' },
                      { no: 2, name: 'Tanzid Hasan', role: 'Opener' },
                      { no: 3, name: 'Najmul Hossain Shanto (c)', role: 'Batting' },
                      { no: 4, name: 'Mominul Haque', role: 'Batting' },
                      { no: 5, name: 'Mushfiqur Rahim (wk)', role: 'Experience' },
                      { no: 6, name: 'Litton Kumer Das', role: 'Keeper' },
                      { no: 7, name: 'Mehidy Hasan Miraz', role: 'All-rounder' },
                      { no: 8, name: 'Taijul Islam', role: 'Lead Spinner' },
                      { no: 9, name: 'Nayeem Hasan', role: 'Support Spin' },
                      { no: 10, name: 'Taskin Ahmed', role: 'Lead Pace' },
                      { no: 11, name: 'Nahid Rana', role: 'Pace' }
                    ].map((p) => (
                      <div key={p.no} className="flex items-center gap-4 py-3 border-b border-white/5">
                        <span className="text-[10px] font-black text-white/20 w-4">{p.no}</span>
                        <span className="font-bold text-white">{p.name}</span>
                        <span className="text-[9px] font-black uppercase text-white/30 ml-auto tracking-widest">{p.role}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">Toss Analysis</h2>
              <p>
                Pakistan won the toss and elected to bowl — identical to the 1st Test at Mirpur. The reasoning is clear: use the morning moisture and the fresh Sylhet surface to get early breakthroughs.
              </p>
              <p>
                Sylhet traditionally helps spinners as the match progresses. By bowling first, Pakistan hopes to bowl Bangladesh out for a low score and then bat on Days 2 and 3 when the pitch is expected to be at its best for scoring and Babar Azam back in the fold.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                 <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[32px]">
                    <h4 className="text-xl font-bold text-emerald-500 mb-4 uppercase italic">The Babar Factor</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                       Babar's return at number three (initially listed, though he may bat 4 depending on fall of wicket) changes the entire balance. He provides the glue that was missing in Mirpur.
                    </p>
                 </div>
                 <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[32px]">
                    <h4 className="text-xl font-bold text-amber-500 mb-4 uppercase italic">Spin Gamble</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                       The selection of Sajid Khan over Noman Ali is a bold, tactical move. Sajid offers more turn and bounce, which can be lethal on Sylhet's Day 1 surface if it grips.
                    </p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">Mohammad Abbas: The Instant Strike</h2>
              <p>
                Mohammad Abbas has vindicated the toss decision in the very first over! Dismissing <span className="text-white font-bold">Zakir Hasan</span> with a beautiful inswinger, he has once again shown why he remains Pakistan's most reliable red-ball weapon.
              </p>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Match Logistics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <MapPin className="w-5 h-5 text-pak-green mx-auto mb-3" />
                    <p className="text-xs font-bold">Sylhet Stadium</p>
                  </div>
                  <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <Clock className="w-5 h-5 text-pak-green mx-auto mb-3" />
                    <p className="text-xs font-bold">10:00 AM Start</p>
                  </div>
                  <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <TrendingDown className="w-5 h-5 text-red-500 mx-auto mb-3" />
                    <p className="text-xs font-bold">High Humidity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Further Reading */}
            <div className="pt-20 border-t border-white/10 mt-20">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-emerald-500 mb-8">Live Coverage Extras</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-playing-xi-prediction-2nd-test-bangladesh-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Pre-Match Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">Pakistan Playing XI Prediction</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/babar-azam-declared-fit-for-2nd-test-vs-bangladesh-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Medical Report</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">How Babar Azam Got Fit</h5>
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
        title="PAK vs BAN 2nd Test Toss Update: Pakistan Bowl First, Babar Returns!" 
        summary="Pakistan win the toss and elect to bowl in Sylhet. Babar Azam back in the side. Bangladesh 79/3 in Session 1." 
      />
    </div>
  );
};

export default PakVsBan2ndTestTossReport;
