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
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

export default function WhyPakistanLost1stTestBlog() {
  const pageTitle = "Why Pakistan Lost the 1st Test Against Bangladesh 2026 — 7 Brutal Reasons That Cost Them the Mirpur Match";
  const metaDescription = "Pakistan lost to Bangladesh by 104 runs in Mirpur's 1st Test May 2026. Babar absent, Saud golden duck, Rizwan drop, Noman underused, 2nd innings 163 collapse — 7 key reasons analyzed.";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="Why Pakistan Lost, Pakistan vs Bangladesh 1st Test 2026 analysis, Mirpur Test defeat reasons, Nahid Rana 5 wickets pk, Saud Shakeel golden duck, Babar Azam injury impact" />
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
              <AlertTriangle className="w-3 h-3 fill-current" /> Tactical Deep Dive
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-6xl">
              Why Pakistan Lost <br />
              <span className="text-red-600 italic">The Mirpur Test</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400 italic">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> May 12, 2026</span>
               <span className="flex items-center gap-2 text-pak-green"><User className="w-4 h-4" /> Hassan Tariq</span>
               <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Mirpur Analysis</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="why-pakistan-lost-1st-test-mirpur" label="Save Analysis" className="bg-white/10" />
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
                  When Bangladesh bowled out Pakistan for 163 chasing 268 on the final afternoon of the 1st Test in Mirpur, the result was not just a 104-run defeat. It was Pakistan's third consecutive Test defeat to Bangladesh.
                </p>

                <p>
                  The "Mirpur Meltdown" exposed deep-rooted issues in Pakistan's red-ball approach. While credit must go to <Link to="/news/nahid-rana-5-wickets-vs-pakistan-1st-test-mirpur-2026" className="text-yellow-500 hover:underline">Nahid Rana's devastating 5/40</Link>, Pakistan's own errors played a massive role in their downfall.
                </p>

                <div className="space-y-12 pt-10">
                  {/* Reason 1 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">01</span>
                      The Absence of Babar Azam
                    </h2>
                    <p>
                      Perhaps the biggest blow came before the first ball was bowled. Babar Azam's left knee injury ruled him out of the series opener, stripping Pakistan of their psychological anchor. In a high-pressure chase in Dhaka, the lack of a "master accumulator" meant the batting order lacked the discipline to bat for long periods.
                    </p>
                  </div>

                  {/* Reason 2 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">02</span>
                      Saud Shakeel’s Unlucky Golden Duck
                    </h2>
                    <p>
                      In the first innings, Saud Shakeel fell for a golden duck to Taijul Islam. In the second innings, he only managed 20 before falling to Nahid Rana. Pakistan’s middle-order engine room, usually so reliable, completely stalled. Saud’s inability to tackle the extra bounce of Rana became the template for other batters' failures.
                    </p>
                  </div>

                  {/* Reason 3 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">03</span>
                      The Rizwan Miss (Drop That Cost 100 Runs)
                    </h2>
                    <p>
                      On Day 1, Mohammad Rizwan dropped Najmul Hossain Shanto when he was on 12. Shanto went on to score a brilliant 101, which anchored Bangladesh's first-innings 413. In a game decided by 104 runs, that one lapse behind the stumps potentially changed the entire trajectory of the match.
                    </p>
                  </div>

                  {/* Reason 4 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">04</span>
                      Under-utilization of Noman Ali
                    </h2>
                    <p>
                      In typical Dhaka conditions, Noman Ali bowled only 18 overs in the final two days combined. While <Link to="/news/pak-vs-ban-1st-test-day-2-report-2026" className="text-pak-green hover:underline">Mohammad Abbas claimed a fifer</Link> in the first innings, the decision to not attack with spin on a wearing Day 4 pitch allowed Bangladesh to declare at their own pace.
                    </p>
                  </div>

                  {/* Reason 5 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">05</span>
                      Second Innings Collapse (163 All Out)
                    </h2>
                    <p>
                      Chasing 268 was always going to be tough, but a total surrender for 163 was unacceptable. Pakistan lost their last 7 wickets for just 62 runs. The lack of defensive technique against the reverse-swinging 147kph thunderbolts of Nahid Rana was startling for a Test-playing nation.
                    </p>
                  </div>

                  {/* Reason 6 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">06</span>
                      The Toss Factor
                    </h2>
                    <p>
                      Losing the toss in Dhaka is often half the battle lost. Shan Masood was forced to field first under a hot sun on Day 1. By the time Pakistan batted on Day 3 and 5, the pitch had developed cracks that Taijul and Mehdiy exploited to perfection.
                    </p>
                  </div>

                  {/* Reason 7 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-sm font-black">07</span>
                      Captain Masood’s Tactical Errors
                    </h2>
                    <p>
                      Field placements for Taijul Islam when he was digging in on Day 4 were questioned by many. Allowing singles to a tail-ender, which brought the set batter back on strike, cost Pakistan valuable time and runs that eventually pushed the target beyond their reach.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[32px] my-12 relative overflow-hidden group">
                   <div className="flex items-start gap-6 relative z-10">
                      <Quote className="w-12 h-12 text-red-600 shrink-0 opacity-20 group-hover:rotate-12 transition-transform" />
                      <div className="space-y-4">
                         <p className="text-xl font-display font-bold text-white uppercase italic leading-relaxed">
                            "We let them get too many in the first innings. 413 was on the higher side. Then if you look at our second innings, losing 7 wickets for sixty-odd runs is where the match was lost. We have to be better."
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pak-green flex items-center justify-center font-black text-[10px] text-white">SM</div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-white">Shan Masood</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Pakistan Captain • Press Conference</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] my-12 space-y-8">
                   <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">What's Next?</h2>
                   <p className="text-sm leading-relaxed">
                      Pakistan travels to Sylhet for the 2nd Test starting May 16. With Babar Azam's fitness still a concern, the selectors might look at calling up an extra middle-order batter from the Shaheens' training camp.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link to="/pakistan-tour-bangladesh-test-2026" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-2">Series Schedule</span>
                        <span className="text-sm font-black text-white uppercase italic">Complete 2026 Fixtures</span>
                      </Link>
                      <Link to="/news/pak-vs-ban-1st-test-full-match-report-2026" className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-2">Match Report</span>
                        <span className="text-sm font-black text-white uppercase italic">Mirpur Test Statistics</span>
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
                   <AlertTriangle className="w-8 h-8 text-red-600 opacity-20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8 italic">Match Defeat Stats</h3>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Defeat Margin</span>
                      <span className="text-sm font-black text-white uppercase italic">104 Runs</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">2nd Innings Score</span>
                      <span className="text-sm font-black text-white uppercase italic">163 ALL OUT</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-red-600/10 rounded-2xl border border-red-600/20 underline decoration-red-600/20">
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Consecutive Losses vs BAN</span>
                      <span className="text-xl font-display font-black text-red-600 uppercase italic">3</span>
                   </div>
                </div>
              </div>

              {/* Related Content Widget */}
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
                     to="/news/azan-awais-pakistan-test-debut-masterclass-dhaka"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                        <Star className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">Azan Awais Heroics</span>
                  </Link>
                </div>
              </div>

              {/* Social CTA */}
              <div className="bg-red-600 border border-red-700/20 p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(220,38,38,0.4)]">
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">Join the Debate.</h4>
                    <p className="text-xs font-bold text-white/60 uppercase leading-relaxed">
                       Who do you think was responsible for the loss? Let us know on Twitter.
                    </p>
                    <a 
                      href="https://twitter.com/pakcricschedule" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
                    >
                      Post Your View <ArrowRight className="w-3 h-3" />
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
