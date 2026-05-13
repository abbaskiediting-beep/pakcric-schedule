import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield,
  Target, 
  History as HistoryIcon, 
  Quote, 
  TrendingUp, 
  Award, 
  Clock, 
  User,
  Star,
  Activity,
  ArrowRight,
  Trophy,
  Zap,
  Info,
  Calendar,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

export default function BangladeshHomeDominanceBlog() {
  const pageTitle = "Why Bangladesh Are Almost Unbeatable at Home in Test Cricket";
  const metaDescription = "Bangladesh have beaten Pakistan, India, England, Australia and South Africa at home. Here is why Bangladesh's home Test record is one of cricket's most feared.";

  const winsTable = [
    { opponent: 'England', result: 'Won (2016)', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { opponent: 'Australia', result: 'Won (2017)', flag: '🇦🇺' },
    { opponent: 'South Africa', result: 'Won (Multiple)', flag: '🇿🇦' },
    { opponent: 'India', result: 'Won (2022)', flag: '🇮🇳' },
    { opponent: 'New Zealand', result: 'Won (2024)', flag: '🇳🇿' },
    { opponent: 'Pakistan', result: 'Won (2026)', flag: '🇵🇰' },
    { opponent: 'Sri Lanka', result: 'Multiple wins', flag: '🇱🇰' },
    { opponent: 'West Indies', result: 'Multiple wins', flag: '🌴' },
    { opponent: 'Zimbabwe', result: 'Multiple wins', flag: '🇿🇼' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="Bangladesh home Test record, Bangladesh vs Pakistan 2026, Mirpur Test pitches, Bangladesh spin attack, Nahid Rana speed" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2667&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 bg-emerald-600 text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Shield className="w-3 h-3 fill-current" /> Fortress Analysis
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-6xl">
              The Untouchable <br />
              <span className="text-emerald-500 italic">Mirpur Masters</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400 italic">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> May 13, 2026</span>
               <span className="flex items-center gap-2 text-pak-green"><User className="w-4 h-4" /> Omar Farooq</span>
               <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> World Cricket</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="bangladesh-home-dominance-2026" label="Save Analysis" className="bg-white/10" />
              <ShareButton 
                title={pageTitle}
                text={metaDescription}
                url={window.location.href}
                variant="outline"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card-bg border border-card-border rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
              <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-medium leading-relaxed">
                
                <p className="text-2xl text-white font-display font-bold italic leading-tight pt-4">
                  The team that once lost 21 Tests in a row now beats everyone at home. Pakistan. India. England. Australia. South Africa. They have all come to Mirpur and gone home defeated.
                </p>

                <p>
                  Bangladesh's evolution from "Full Member struggles" to "Home Test Giants" is one of the most remarkable stories in cricket history. As of May 2026, their home record has become a psychological barrier for visiting teams before they even land in Dhaka.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                   <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[40px] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                         <Trophy className="w-32 h-32" />
                      </div>
                      <h3 className="text-xl font-display font-black text-white uppercase italic mb-8">Home Fortress Record</h3>
                      <div className="space-y-4">
                         {winsTable.map((win) => (
                            <div key={win.opponent} className="flex justify-between items-center border-b border-white/5 pb-2">
                               <span className="text-white/60 flex items-center gap-2">
                                  <span className="text-lg">{win.flag}</span> {win.opponent}
                               </span>
                               <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest">{win.result}</span>
                            </div>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="p-8 bg-emerald-600/5 rounded-[32px] border border-emerald-600/10 space-y-4">
                         <h4 className="text-lg font-display font-black text-emerald-500 uppercase italic flex items-center gap-3">
                            <Target className="w-5 h-5" /> The Pitch Weapon
                         </h4>
                         <p className="text-sm leading-relaxed">
                            Mirpur surfaces are world-class weapons. They deteriorate rapidly by Day 3, offering sharp turn and variable bounce that visiting batters simply cannot compute in a short tour window.
                         </p>
                      </div>
                      <div className="p-8 bg-white/5 rounded-[32px] border border-white/5 space-y-4">
                         <h4 className="text-lg font-display font-black text-white uppercase italic flex items-center gap-3">
                            <Zap className="w-5 h-5 text-yellow-500" /> The Pace X-Factor
                         </h4>
                         <p className="text-sm leading-relaxed">
                            Nahid Rana's 152kph speed has broken the "spin-only" stereotype. Visiting teams arrive expecting slow turn and face 150kph bouncers. It's a combination that is currently unplayable.
                         </p>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic pt-10 border-t border-white/5">The 6 Reasons for Dominance</h2>
                
                <div className="space-y-12">
                   <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex-shrink-0 flex items-center justify-center font-display font-black text-xl italic italic">01</div>
                      <div className="space-y-2">
                         <h3 className="text-xl font-display font-black text-white uppercase italic">Home Condition Mastery</h3>
                         <p className="text-sm">Bangladesh's batters like Shanto and Mominul have spent their lives on these low-bouncing turners. They know exactly when to attack and which balls to leave—knowledge an overseas pro can't gain in a week.</p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex-shrink-0 flex items-center justify-center font-display font-black text-xl italic italic">02</div>
                      <div className="space-y-2">
                         <h3 className="text-xl font-display font-black text-white uppercase italic">Spin Attack Design</h3>
                         <p className="text-sm">Mehidy and Taijul are specifically tailored for Mirpur. They bowl a consistent line that forces the mistakes on deteriorating tracks. They don't need magic; they just need the surface.</p>
                      </div>
                   </div>

                   <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex-shrink-0 flex items-center justify-center font-display font-black text-xl italic italic">03</div>
                      <div className="space-y-2">
                         <h3 className="text-xl font-display font-black text-white uppercase italic">Mental Resilience Shift</h3>
                         <p className="text-sm">Beating Pakistan 3 times in a row (twice away, once at home) has created a mental dominance. Bangladesh no longer fear the big names; the big names now fear Bangladesh.</p>
                      </div>
                   </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-2xl my-12 group">
                   <div className="flex items-start gap-6 relative z-10">
                      <Quote className="w-12 h-12 text-emerald-500 shrink-0 opacity-20" />
                      <div className="space-y-4">
                         <p className="text-xl font-display font-bold text-white uppercase italic leading-relaxed">
                            "Very happy. Proud of all the guys... Slowly we are getting better at Test cricket and that is one thing we have always wanted to do. Beating the top nations at home is the result of years of hard work."
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-black text-[10px] text-white">NHS</div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-white">Najmul Hossain Shanto</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Bangladesh Captain</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] my-12 space-y-8">
                   <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">The Next Challenge</h2>
                   <p className="text-sm leading-relaxed">
                      The 2nd Test at Sylhet begins on May 16. Can Pakistan adapt to these conditions, or will Bangladesh extend their home winning streak? One thing is certain—Sylhet will be as difficult as Mirpur.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link to="/pakistan-tour-bangladesh-test-2026" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-1 underline decoration-yellow-500/20">Series Hub</span>
                        <span className="text-sm font-black text-white uppercase italic">Tour Schedule & Results</span>
                      </Link>
                      <Link to="/news/pakistan-2nd-innings-collapse-163-all-out-bangladesh-2026-report" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-1 underline decoration-pak-green/20">Match Analysis</span>
                        <span className="text-sm font-black text-white uppercase italic">Why Pakistan Collapsed</span>
                      </Link>
                   </div>
                </div>

              </div>
            </div>

            <AdPlaceholder type="banner" className="my-12" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Quick Facts Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                   <CheckCircle2 className="w-8 h-8 text-emerald-600 opacity-20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8 italic">Quick Stats</h3>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Major Wins</span>
                      <span className="text-sm font-black text-white uppercase italic">EVERY Test Nation</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Vs Pakistan</span>
                      <span className="text-sm font-black text-emerald-500 uppercase italic">3 Consecutive Wins</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-emerald-600/10 rounded-2xl border border-emerald-600/20">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">WTC Standing</span>
                      <span className="text-xl font-display font-black text-emerald-500 uppercase italic">6th Place</span>
                   </div>
                </div>
              </div>

              {/* Featured Player */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-8 relative overflow-hidden group">
                <h3 className="text-[10px] font-black uppercase tracking-[3px] text-neutral-500 italic">Fortress Commander</h3>
                <div className="space-y-4">
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center text-2xl font-black text-emerald-500 italic">NHS</div>
                      <div>
                         <p className="text-sm font-black text-white uppercase italic">Najmul Hossain Shanto</p>
                         <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">5 Test Centuries</p>
                      </div>
                   </div>
                   <p className="text-xs text-neutral-400 leading-relaxed italic">"Breaking records and building a winning culture that intimidates every visiting team."</p>
                </div>
              </div>

              {/* Social CTA */}
              <div className="bg-emerald-700 border border-emerald-600/20 p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(5,150,105,0.3)]">
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">Join the Tigers.</h4>
                    <p className="text-xs font-bold text-white/60 uppercase leading-relaxed text-balance">
                       Follow Bangladesh's rise in Test cricket. Real-time updates and exclusive analysis.
                    </p>
                    <a 
                      href="https://twitter.com/pakcricschedule" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
                    >
                      Follow Analysis <ArrowRight className="w-3 h-3" />
                    </a>
                 </div>
                 <Activity className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
