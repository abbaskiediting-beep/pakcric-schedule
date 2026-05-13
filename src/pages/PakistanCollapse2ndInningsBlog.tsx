import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  AlertTriangle,
  Target, 
  History as HistoryIcon, 
  Quote, 
  TrendingUp, 
  Award, 
  Clock, 
  User,
  Shield,
  Star,
  Activity,
  ArrowRight,
  Trophy,
  Zap,
  Info,
  Calendar,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

export default function PakistanCollapse2ndInningsBlog() {
  const pageTitle = "Pakistan's Shocking 2nd Innings Collapse — 163 All Out, Bangladesh Win by 104 Runs";
  const metaDescription = "Pakistan collapse to 163 all out chasing 268 vs Bangladesh in 1st Test Mirpur 2026. Nahid Rana 5/40 destroys Pakistan middle order as Bangladesh win by 104 runs.";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="Pakistan 2nd Innings Collapse, Pakistan vs Bangladesh 1st Test 2026, 163 all out Pakistan, Nahid Rana 5 wickets pk, Mirpur Test defeat" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              <AlertTriangle className="w-3 h-3 fill-current" /> Match Report
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-6xl">
              The Great <span className="text-red-600 italic">Mirpur Meltdown</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400 italic">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> May 12, 2026</span>
               <span className="flex items-center gap-2 text-pak-green"><User className="w-4 h-4" /> Omar Farooq</span>
               <span className="flex items-center gap-2"><Target className="w-4 h-4" /> 1st Test • Mirpur</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="pakistan-collapse-mirpur-2026" label="Save Report" className="bg-white/10" />
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
                  268 was never going to be easy on a deteriorating Mirpur surface. But nobody expected Pakistan to collapse the way they did — from 119/3 with the game still alive, to 163 all out, losing their last seven wickets for just 44 runs.
                </p>

                <div className="flex flex-wrap gap-4 my-8">
                  <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex-1 min-w-[200px]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Target</p>
                    <p className="text-2xl font-display font-black text-white italic">268 Runs</p>
                  </div>
                  <div className="px-6 py-4 bg-red-600/10 rounded-2xl border border-red-600/20 flex-1 min-w-[200px]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">Final Score</p>
                    <p className="text-2xl font-display font-black text-red-600 italic">163 ALL OUT</p>
                  </div>
                  <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex-1 min-w-[200px]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Result</p>
                    <p className="text-2xl font-display font-black text-white italic">BAN Won by 104 Runs</p>
                  </div>
                </div>

                <p>
                  Bangladesh declared their second innings on 240/9, setting Pakistan a target of 268 runs for victory. In reply, Pakistan's batters failed to come up with a plan and fell like ninepins. Barring Abdullah Fazal's 66, none of the Pakistani batters showed any resilience or grit to grind out the result.
                </p>

                <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic pt-10 border-t border-white/5">How the Collapse Unfolded</h2>
                
                <div className="space-y-8">
                  <div className="p-8 bg-white/5 rounded-[32px] border border-white/5 space-y-4">
                    <h4 className="text-lg font-display font-black text-white uppercase italic flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-600" /> Wickets 1 & 2: The Top Order Fail
                    </h4>
                    <p className="text-sm">
                      Taskin Ahmed took down opener Imam-ul-Haq for two and Mehidy Hasan Miraz bowled debutant Azan Awais for 15. Pakistan were 10/2 after just 4 overs. The top order failed before it had even begun.
                    </p>
                  </div>

                  <div className="p-8 bg-white/5 rounded-[32px] border border-white/5 space-y-4">
                    <h4 className="text-lg font-display font-black text-white uppercase italic flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-600" /> Wickets 4 & 5: The Last Hope Extinguished
                    </h4>
                    <p className="text-sm">
                      The 23-year-old Fazal put on 51 runs with Salman Agha (26) to raise Pakistan's hopes. Fazal however fell in the first over after tea when Taijul got the ball to spin sharply. Soon after, Taskin had Salman Ali Agha caught at second slip.
                    </p>
                  </div>

                  <div className="p-8 bg-red-600/5 rounded-[32px] border border-red-600/10 space-y-4">
                    <h4 className="text-lg font-display font-black text-red-600 uppercase italic flex items-center gap-3">
                      <Zap className="w-5 h-5 text-red-600" /> Nahid Rana's Death Blow
                    </h4>
                    <p className="text-sm text-white/80">
                      Rana removed Shan Masood, Saud Shakeel and Mohammad Rizwan in a fiery spell, before taking down Noman Ali and Shaheen Shah Afridi to finish with 5/40. The 147kph thunderbolt that rattled Rizwan’s middle stump was the ball of the match.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[40px] my-12 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                      <AlertTriangle className="w-32 h-32" />
                   </div>
                   <h3 className="text-2xl font-display font-black text-white uppercase italic mb-8">Pakistan 2nd Innings Scorecard</h3>
                   <div className="space-y-4 font-mono text-sm">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/60">Imam-ul-Haq</span>
                        <span className="text-white font-bold">2 (12)</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/60">Azan Awais</span>
                        <span className="text-white font-bold">15 (40)</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2 text-pak-green">
                        <span className="font-bold">Abdullah Fazal</span>
                        <span className="font-black">66 (113)</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/60">Shan Masood</span>
                        <span className="text-white font-bold">12 (22)</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/60">Mohammad Rizwan</span>
                        <span className="text-white font-bold">15 (46)</span>
                      </div>
                      <div className="flex justify-between pt-4 text-red-600">
                        <span className="font-black uppercase tracking-widest">Total</span>
                        <span className="font-black uppercase italic">163 ALL OUT</span>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic pt-10">Why Pakistan Collapsed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <h4 className="text-sm font-black text-white uppercase italic">1. No Babar Azam</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">His absence left a massive hole in the middle order. Without his temperament, there was no one to build a match-saving partnership.</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <h4 className="text-sm font-black text-white uppercase italic">2. Nahid Rana's Pace</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">Rana exploited the variable bounce perfectly, striking decisive blows with 147kph thunderbolts that rattled seniors.</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <h4 className="text-sm font-black text-white uppercase italic">3. Spin Struggles</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">On a turning pitch, the middle order had no answers for Taijul and Mehidy, who shared 3 crucial wickets.</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <h4 className="text-sm font-black text-white uppercase italic">4. Post-Tea Fragility</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">Losing seven wickets for 44 runs after the tea break highlights a recurring mental fragility in the squad.</p>
                   </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-2xl my-12 group">
                   <div className="flex items-start gap-6 relative z-10">
                      <Quote className="w-12 h-12 text-red-500 shrink-0 opacity-20" />
                      <div className="space-y-4">
                         <p className="text-xl font-display font-bold text-white uppercase italic leading-relaxed">
                            "Hindsight is 20/20. We looked at the conditions... But in the first innings we didn't capitalise and then we didn't capitalise with the bat either. You can never question the effort, but when you have the game in your hands you have to push the opposition away."
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pak-green flex items-center justify-center font-black text-[10px] text-white">SM</div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-white">Shan Masood</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Pakistan Captain</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] my-12 space-y-8">
                   <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">What's Next?</h2>
                   <p className="text-sm leading-relaxed">
                      Pakistan now go to Sylhet for the 2nd Test trailing 1-0. Babar Azam's fitness will be monitored closely. The mental scars of this collapse need to heal fast if Pakistan wants to avoid a historic series defeat.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link to="/pakistan-tour-bangladesh-test-2026" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-2 underline decoration-yellow-500/20">Series Schedule</span>
                        <span className="text-sm font-black text-white uppercase italic">Sylhet Test Timings</span>
                      </Link>
                      <Link to="/news/babar-azam-declared-fit-for-2nd-test-vs-bangladesh-2026" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-2 underline decoration-pak-green/20">Injury Update</span>
                        <span className="text-sm font-black text-white uppercase italic">Babar Azam Declared Fit</span>
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
              {/* Quick Summary Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                   <XCircle className="w-8 h-8 text-red-600 opacity-20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8 italic">Collapse Stats</h3>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Collapse Span</span>
                      <span className="text-sm font-black text-white uppercase italic">7 Wickets / 44 Runs</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Top Scorer</span>
                      <span className="text-sm font-black text-pak-green uppercase italic">Fazal (66)</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-red-600/10 rounded-2xl border border-red-600/20">
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Defeat Margin</span>
                      <span className="text-xl font-display font-black text-red-600 uppercase italic">104 Runs</span>
                   </div>
                </div>
              </div>

              {/* Related Analysis */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 italic">More Analysis</h3>
                <div className="space-y-4">
                  <Link 
                     to="/news/nahid-rana-5-wickets-vs-pakistan-1st-test-mirpur-2026"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                        <Zap className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">Nahid Rana's 5/40</span>
                  </Link>
                  <Link 
                     to="/news/why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <AlertTriangle className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">7 Reasons for Defeat</span>
                  </Link>
                </div>
              </div>

              {/* Social CTA */}
              <div className="bg-pak-green border border-green-700/20 p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,102,68,0.4)]">
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">Follow the Comeback.</h4>
                    <p className="text-xs font-bold text-white/60 uppercase leading-relaxed">
                       Don't miss the 2nd Test in Sylhet. Join our community for live alerts.
                    </p>
                    <a 
                      href="https://twitter.com/pakcricschedule" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
                    >
                      Follow on Twitter <ArrowRight className="w-3 h-3" />
                    </a>
                 </div>
                 <Shield className="absolute -bottom-10 -right-10 w-40 h-40 text-black/10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
