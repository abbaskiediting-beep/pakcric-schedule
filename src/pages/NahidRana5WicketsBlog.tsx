import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
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
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

export default function NahidRana5WicketsBlog() {
  const pageTitle = "Nahid Rana 5/40 vs Pakistan 1st Test Mirpur 2026";
  const metaDescription = "Nahid Rana takes maiden Test five-for with 5/40 in 9.5 overs as Bangladesh beat Pakistan by 104 runs in 1st Test Mirpur 2026. Full bowling report.";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="Nahid Rana 5 wickets Pakistan, Nahid Rana bowling Mirpur, Bangladesh vs Pakistan 1st Test 2026 result, fastest ball Bangladesh" />
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
            <div className="flex items-center gap-3 px-4 py-1.5 bg-yellow-500 text-black rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Zap className="w-3 h-3 fill-current" /> Performance of the Match
            </div>
            
            <h1 className="text-4xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none max-w-6xl">
              Nahid Rana's <span className="text-yellow-500 italic">5/40</span> <br />
              <span className="text-white">Destroyer of Pakistan</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400 italic">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> May 12, 2026</span>
               <span className="flex items-center gap-2 text-pak-green"><User className="w-4 h-4" /> Omar Farooq</span>
               <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Mirpur, Dhaka</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="nahid-rana-5-wickets-mirpur" label="Save Performance Data" className="bg-white/10" />
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
                
                <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 p-8 rounded-[32px] overflow-hidden">
                   <div className="text-center md:text-left space-y-2">
                      <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Innings Figures</p>
                      <h3 className="text-6xl font-display font-black italic text-white leading-none">5/40</h3>
                      <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest italic">9.5 Overs • 147+ KPH Average</p>
                   </div>
                   <div className="h-px md:h-20 w-full md:w-px bg-white/10" />
                   <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                         <p className="text-sm font-bold italic">Dismissed Captain Shan Masood early</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                         <p className="text-sm font-bold italic">Rattled Mohammad Rizwan's stumps at 147kph</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                         <p className="text-sm font-bold italic">Sealed victory with the scalp of Shaheen Afridi</p>
                      </div>
                   </div>
                </div>

                <p className="text-2xl text-white font-display font-bold italic leading-tight pt-4">
                  Bangladesh secured a memorable 104-run victory over Pakistan in the opening Test of the 2026 series, powered by a sensational five-wicket haul from fast bowling phenom Nahid Rana.
                </p>

                <p>
                  Chasing a target of 268 runs, Pakistan were bowled out for 163 in 52.5 overs on the fifth day. Bangladesh have now won three straight Tests against Pakistan — a remarkable achievement for a team that has developed their Test cricket significantly in recent years.
                </p>

                <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3 italic">
                   <Award className="w-8 h-8 text-yellow-500" /> Nahid Rana — Career-Best Figures
                </h2>
                <p>
                  Nahid Rana starred with the ball, claiming 5/40 in 9.5 overs to register his maiden five-wicket haul in Test cricket. He ripped through Pakistan's middle order, dismissing captain Shan Masood, Saud Shakeel, Mohammad Rizwan, Noman Ali and finally Shaheen Afridi to seal the win. 
                </p>
                <p>
                  It was a stunning session of play led by the youngest member of the Bangladesh squad. Rana ran through the Pakistan lower order, including the two crucial wickets of <Link to="/news/mohammad-rizwan-59-vs-bangladesh-1st-test-day-3-2026" className="text-pak-green hover:underline">Mohammad Rizwan</Link> and Saud Shakeel. Once that stand was broken, the rest were a formality as Bangladesh secured a deserved win.
                </p>

                <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight italic">Bowling Figures — 2nd Innings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Bangladesh Bowling vs PAK</p>
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden text-sm">
                         <div className="p-4 border-b border-white/5 flex justify-between bg-yellow-500/5">
                            <span className="font-bold text-yellow-500">Nahid Rana</span>
                            <span className="font-black text-white italic">5/40 (9.5)</span>
                         </div>
                         <div className="p-4 border-b border-white/5 flex justify-between">
                            <span className="font-bold text-white">Taijul Islam</span>
                            <span className="text-white/60">2 Wickets</span>
                         </div>
                         <div className="p-4 border-b border-white/5 flex justify-between">
                            <span className="font-bold text-white">Taskin Ahmed</span>
                            <span className="text-white/60">2 Wickets</span>
                         </div>
                         <div className="p-4 flex justify-between">
                            <span className="font-bold text-white">Mehidy Hasan Miraz</span>
                            <span className="text-white/60">1 Wicket</span>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Pakistan Bowling vs BAN</p>
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden text-sm">
                         <div className="p-4 border-b border-white/5 flex justify-between">
                            <span className="font-bold text-white">Hasan Ali</span>
                            <span className="text-white/60">2 Wickets</span>
                         </div>
                         <div className="p-4 border-b border-white/5 flex justify-between">
                            <span className="font-bold text-white">Shaheen Afridi</span>
                            <span className="text-white/60">1 Wicket</span>
                         </div>
                         <div className="p-4 border-b border-white/5 flex justify-between">
                            <span className="font-bold text-white">Mohammad Abbas</span>
                            <span className="text-white/60">1 Wicket</span>
                         </div>
                         <div className="p-4 flex justify-between items-center bg-red-500/5">
                            <span className="font-bold text-red-500">Status</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-red-500">240/9 Declared</span>
                         </div>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight flex items-center gap-3 italic">
                   <Target className="w-8 h-8 text-yellow-500" /> The Destruction: Wicket by Wicket
                </h2>

                <div className="space-y-6">
                   <div className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-yellow-500/30 transition-all">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xl font-display font-black text-white italic">Wicket 1 — Shan Masood</span>
                         <span className="text-[10px] font-black text-neutral-500 tracking-widest uppercase italic">Early Blow</span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/60 font-medium">
                         Rana removed Pakistan's captain early, getting the ball to move back sharply and beat Masood's defence. The captain could not deal with Rana's steep bounce and pace — a key blow that triggered Pakistan's collapse.
                      </p>
                   </div>

                   <div className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-yellow-500/30 transition-all">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xl font-display font-black text-white italic">Wicket 2 — Saud Shakeel</span>
                         <span className="text-[10px] font-black text-neutral-500 tracking-widest uppercase italic">Breaking Resistance</span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/60 font-medium">
                         Shakeel had been obdurate in hanging in. Rana found the extra bounce from a length, finding the outside edge. Once that stand was broken, the momentum shifted entirely toward Bangladesh.
                      </p>
                   </div>

                   <div className="p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-3xl group hover:border-yellow-500/50 transition-all relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4">
                         <Zap className="w-6 h-6 text-yellow-500 opacity-20" />
                      </div>
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xl font-display font-black text-white italic">Wicket 3 — Mohammad Rizwan</span>
                         <span className="text-[10px] font-black text-yellow-500 tracking-widest uppercase italic">147 KPH Thunderbolt</span>
                      </div>
                      <p className="text-sm leading-relaxed text-white font-medium">
                         This was the delivery of the match. Pitched outside off, jagged back prodigiously, and rattled the top of middle stump. Rizwan was beaten for sheer pace and movement at 147 clicks. A masterpiece of fast bowling.
                      </p>
                   </div>

                   <div className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-yellow-500/30 transition-all">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xl font-display font-black text-white italic">Wicket 4 — Noman Ali</span>
                         <span className="text-[10px] font-black text-neutral-500 tracking-widest uppercase italic">Tail-End Demolition</span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/60 font-medium">
                         A back of a length delivery that was too good for the tail-ender. Noman could only fend and was dismissed as the lower order crumbled under Rana's relentless pace and bounce.
                      </p>
                   </div>

                   <div className="p-8 bg-pak-green/5 border border-pak-green/20 rounded-3xl group hover:border-pak-green/50 transition-all">
                      <div className="flex items-center justify-between mb-4">
                         <span className="text-xl font-display font-black text-white italic">Wicket 5 — Shaheen Shah Afridi</span>
                         <span className="text-[10px] font-black text-pak-green tracking-widest uppercase italic">Final Blow</span>
                      </div>
                      <p className="text-sm leading-relaxed text-white/60 font-medium">
                         Rana fittingly dealt the final blow. Banged in short, Shaheen could only fend it away to short leg. Rana had five — and Bangladesh had won by 104 runs.
                      </p>
                   </div>
                </div>

                <div className="bg-red-600/5 border border-red-600/10 p-10 rounded-[40px] my-10 space-y-6">
                   <h3 className="text-2xl font-display font-black text-white italic uppercase tracking-tight">Pakistan's Batting Collapse — 268 Target Never Chased</h3>
                   <p className="text-sm leading-relaxed text-white/60">
                      Bangladesh had declared on 240/9 in their second innings, setting a target of 268 for victory for Pakistan. In reply, Pakistani batters failed to come up with a plan as they fell like ninepins. Barring <strong>Abdullah Fazal's 66</strong>, none of the Pakistani batters showed any resilience and grit to grind out the result.
                   </p>
                   <p className="text-sm leading-relaxed text-white/60 border-l-2 border-red-600/30 pl-6 italic">
                      Pakistan's innings never fully recovered after losing opener Imam-ul-Haq in the first over to Taskin Ahmed. Abdullah Fazal offered resistance with a fighting 66 off 113 balls, striking 11 boundaries, while Salman Agha scored 26. But every time Pakistan threatened to build a partnership, Nahid Rana broke it.
                   </p>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[32px] my-12 relative overflow-hidden group">
                   <div className="flex items-start gap-6 relative z-10">
                      <Quote className="w-12 h-12 text-yellow-500 shrink-0 opacity-20 group-hover:rotate-12 transition-transform" />
                      <div className="space-y-4">
                         <p className="text-xl font-display font-bold text-white uppercase italic leading-relaxed">
                            "Very happy. Proud of all the guys, the way we played... in these conditions Rana, Taskin, and Taijul bowled really well and that's what I wanted from them."
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pak-green flex items-center justify-center font-black text-[10px] text-white underline decoration-white/20">NH</div>
                            <div>
                               <p className="text-[10px] font-black uppercase tracking-widest text-white">Najmul Hossain Shanto</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Bangladesh Captain • Post Match</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] my-12 space-y-8">
                   <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic">Match Summary — 1st Test Mirpur 2026</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <div className="flex flex-col border-b border-white/5 pb-2">
                            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">BAN 1st Innings</span>
                            <span className="text-xl font-display font-bold text-white">413 ALL OUT</span>
                         </div>
                         <div className="flex flex-col border-b border-white/5 pb-2">
                            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">PAK 1st Innings</span>
                            <span className="text-xl font-display font-bold text-white">386 ALL OUT</span>
                         </div>
                         <div className="flex flex-col border-b border-white/5 pb-2">
                            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">BAN 2nd Innings</span>
                            <span className="text-xl font-display font-bold text-white">240/9 DECLARED</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">PAK 2nd Innings</span>
                            <span className="text-xl font-display font-bold text-red-500">163 ALL OUT</span>
                         </div>
                      </div>
                      <div className="bg-pak-green/10 border border-pak-green/20 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
                         <Trophy className="w-12 h-12 text-pak-green mb-4" />
                         <span className="text-[10px] font-black text-pak-green uppercase tracking-[3px] mb-2">Final Verdict</span>
                         <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight leading-tight">Bangladesh won by 104 runs</h3>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white pt-8 uppercase tracking-tight italic">Who is Nahid Rana?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                   <div className="p-8 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                         <Activity className="w-6 h-6 text-yellow-500" />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-white">The Speed Factor</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-widest">
                         Born 2002, Rana holds the record for the fastest ball by a Bangladeshi — 152.0 kph. His rise from taped tennis ball cricket in Chapainawabganj to the Test arena is legendary.
                      </p>
                   </div>
                   <div className="p-8 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                         <HistoryIcon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-white">The Pakistan Nightmare</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-widest">
                         Rana has now become Pakistan's destroyer. In March 2026, his maiden ODI fifer sent Pakistan to an 8-wicket defeat. Across all formats in 2026, he now has 10 wickets vs Pakistan.
                      </p>
                   </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] space-y-6">
                   <h3 className="text-xl font-display font-black text-white italic uppercase tracking-tight">Rana vs Pakistan — A Nightmare Opponent</h3>
                   <p className="text-sm leading-relaxed">
                      This is not the first time Nahid Rana has destroyed Pakistan. In the 1st ODI of this same tour in March 2026, Rana's maiden five-wicket haul in ODIs sent Pakistan tumbling to an eight-wicket defeat in Mirpur — picking up a wicket in each of his first five overs as Pakistan sank rapidly against his pace and bounce.
                   </p>
                   <p className="text-sm leading-relaxed">
                      Against Pakistan across all formats in 2026, Nahid Rana now has 10 wickets — making him officially Pakistan's most dangerous opponent in Bangladeshi conditions. His pace, steep bounce, and ability to reverse the ball late make him a nightmare on Mirpur's Shere Bangla surfaces.
                   </p>
                   <Link 
                     to="/news/bangladesh-cricket-team-2026-analysis"
                     className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[3px] text-yellow-500 hover:underline"
                   >
                     Bangladesh 2026 Strategy Analysis <ArrowRight className="w-3 h-3" />
                   </Link>
                </div>

              </div>
            </div>

            <AdPlaceholder type="banner" className="my-12" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Stats Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                   <Award className="w-8 h-8 text-yellow-500 opacity-20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8 italic">The Fifer Breakdown</h3>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Overs</span>
                      <span className="text-sm font-black text-white uppercase italic">9.5</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Runs</span>
                      <span className="text-sm font-black text-white uppercase italic">40</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 underline decoration-yellow-500/20">
                      <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Wickets</span>
                      <span className="text-xl font-display font-black text-yellow-500 uppercase italic">5</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Max Speed</span>
                      <span className="text-sm font-black text-white uppercase italic">151.4 KPH</span>
                   </div>
                </div>
              </div>

              {/* Internal Links Widget */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 italic">Deep Dives</h3>
                <div className="space-y-4">
                  <Link 
                     to="/news/pak-vs-ban-1st-test-full-match-report-2026"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pak-green group-hover:text-white transition-colors">
                        <TrendingUp className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">Full Match Report</span>
                  </Link>
                  <Link 
                     to="/news/azan-awais-pakistan-test-debut-masterclass-dhaka"
                     className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group transition-all hover:bg-white/10"
                  >
                     <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                        <Star className="w-4 h-4" />
                     </div>
                     <span className="text-[10px] font-black text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">Azan Awais Century</span>
                  </Link>
                </div>
              </div>

              {/* CTA Widget */}
              <div className="bg-pak-green border border-pak-green/20 p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(1,65,30,0.4)]">
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">Sylhet Is Next.</h4>
                    <p className="text-xs font-bold text-white/60 uppercase leading-relaxed">
                       Can Pakistan level the series? Visit the Match Center for all the latest updates.
                    </p>
                    <Link 
                      to="/pakistan-tour-bangladesh-test-2026"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
                    >
                      Match Center <ArrowRight className="w-3 h-3" />
                    </Link>
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
