import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Award, 
  History, 
  ChevronRight, 
  Activity, 
  AlertCircle,
  Star,
  Quote,
  CheckCircle2,
  TrendingDown,
  Layout,
  BarChart3,
  TrendingUp,
  Download,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

const playerRatings = [
  { name: 'Najmul Hossain Shanto', team: 'BAN', rating: 5, performance: '101 + 81 = 182 runs — POTM — captain\'s match' },
  { name: 'Mominul Haque', team: 'BAN', rating: 5, performance: '56 + 88 = 144 runs — backbone of both innings' },
  { name: 'Nahid Rana', team: 'BAN', rating: 5, performance: '5/40 in 2nd innings — match winner' },
  { name: 'Azan Awais', team: 'PAK', rating: 5, performance: '103 on debut — finest moment of the match' },
  { name: 'Mehidy Hasan Miraz', team: 'BAN', rating: 5, performance: '5/102 — controlled Pakistan\'s collapse on Day 3' },
  { name: 'Mohammad Abbas', team: 'PAK', rating: 5, performance: '5/92 — contained Bangladesh at key moments' },
  { name: 'Abdullah Fazal', team: 'PAK', rating: 4, performance: '60 + 66 = 126 runs — outstanding debut across both innings' },
  { name: 'Mohammad Rizwan', team: 'PAK', rating: 4, performance: '59 — rescued Pakistan in 1st innings' },
  { name: 'Salman Ali Agha', team: 'PAK', rating: 4, performance: '58 — crucial lower-order contribution' },
  { name: 'Shan Masood', team: 'PAK', rating: 3, performance: '56 — captain\'s knock but team lost' },
  { name: 'Mushfiqur Rahim', team: 'BAN', rating: 4, performance: '71 + 22 = 93 — experience showed' },
  { name: 'Taijul Islam', team: 'BAN', rating: 4, performance: '4 wickets — economical' },
];

export default function PakVsBan1stTestFullMatchReport() {
  const pageTitle = "Bangladesh Beat Pakistan by 104 Runs in 1st Test - Full Report 2026";
  
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>BAN vs PAK 1st Test Full Report 2026 | Bangladesh Win by 104 Runs</title>
        <meta name="description" content="Bangladesh defeated Pakistan by 104 runs in the 1st Test at Mirpur May 8-12 2026. Complete 5-day match report — Shanto 101, Awais debut 103, Rana 5/40." />
        <meta name="keywords" content="Pakistan vs Bangladesh 1st Test 2026 Result, Shanto 101, Azan Awais 103, Nahid Rana 5/40, Mirpur Test Report" />
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
            <div className="flex items-center gap-3 px-4 py-1.5 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(1,65,30,0.3)]">
              <Trophy className="w-3 h-3 fill-current" /> Series Result: BAN Leads 1-0
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-5xl">
              Bangladesh Beat <span className="text-pak-green italic">Pakistan</span> by 104 Runs
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl">
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                  <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">BAN 1st Innings</p>
                  <p className="text-2xl font-display font-bold">413</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                  <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">PAK 1st Innings</p>
                  <p className="text-2xl font-display font-bold">386</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                  <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">BAN 2nd Innings</p>
                  <p className="text-2xl font-display font-bold">240/9d</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                  <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">PAK 2nd Innings</p>
                  <p className="text-2xl font-display font-bold text-red-500">163</p>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="pak-vs-ban-1st-test-full-report" label="Save Full Match Guide" className="bg-white/10" />
              <ShareButton 
                title={pageTitle}
                text="Complete match guide for Bangladesh vs Pakistan 1st Test 2026."
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
              
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                 <div className="bg-pak-green/5 border border-pak-green/20 p-8 rounded-[32px] flex items-start gap-4">
                    <Award className="w-10 h-10 text-pak-green shrink-0" />
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">Player of the Match</p>
                       <h3 className="text-xl font-display font-bold text-white uppercase italic">Najmul Hossain Shanto</h3>
                       <p className="text-sm text-white/50 mt-1">101 + 81 = 182 runs across both innings</p>
                    </div>
                 </div>
                 <div className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-[32px] flex items-start gap-4">
                    <Star className="w-10 h-10 text-amber-500 shrink-0" />
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-2">Match Standout</p>
                       <h3 className="text-xl font-display font-bold text-white uppercase italic">Azan Awais (Debut)</h3>
                       <p className="text-sm text-white/50 mt-1">Stunning 103 off 165 balls on debut</p>
                    </div>
                 </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/70 font-medium leading-relaxed">
                <p className="text-2xl md:text-3xl text-white font-display font-bold italic leading-tight">
                  Bangladesh complete a historic statement win in Mirpur, marking their third straight Test victory over Pakistan.
                </p>

                <img 
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2673&auto=format&fit=crop" 
                  alt="Cricket Match" 
                  className="w-full aspect-video object-cover rounded-[32px] my-10 border border-white/10"
                />

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight flex items-center gap-3">
                   <Activity className="w-8 h-8 text-pak-green" /> The Story of the Five Days
                </h2>

                <div className="space-y-6">
                   <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                      <div className="flex items-center justify-between mb-4">
                         <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">Day 1</span>
                         <span className="text-sm font-bold text-white uppercase tracking-widest italic">301/4</span>
                      </div>
                      <p className="text-sm">Najmul Hossain Shanto anchors Bangladesh with a commanding 101. Mominul Haque falls for 91. Pakistan's pace attack struggles for breakthroughs.</p>
                   </div>

                   <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                      <div className="flex items-center justify-between mb-4">
                         <span className="px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">Day 2</span>
                         <span className="text-sm font-bold text-white uppercase tracking-widest italic">179/1 (PAK)</span>
                      </div>
                      <p className="text-sm">Mohammad Abbas takes 5/92 to restrict Bangladesh to 413. Debutants Azan Awais (85*) and Abdullah Fazal (37*) survive a testing session to put Pakistan in a strong position.</p>
                   </div>

                   <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                      <div className="flex items-center justify-between mb-4">
                         <span className="px-4 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">Day 3</span>
                         <span className="text-sm font-bold text-white uppercase tracking-widest italic">386 ALL OUT (PAK)</span>
                      </div>
                      <p className="text-sm">Azan Awais completes his debut century (103). Mehidy Hasan Miraz (5/102) triggers a middle-order collapse. Rizwan (59) and Agha (58) rescue Pakistan to trail by just 27.</p>
                   </div>

                   <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-3xl relative group">
                      <div className="flex items-center justify-between mb-4">
                         <span className="px-4 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">Day 4</span>
                         <span className="text-sm font-bold text-white uppercase tracking-widest italic">BAN LEAD BY 179</span>
                      </div>
                      <p className="text-sm">Shanto (58*) and Mominul (56*) build a strong lead before torrential rain wipes out the afternoon session. Bangladesh finish at 152/3.</p>
                   </div>

                   <div className="p-8 bg-red-600/5 border border-red-600/10 rounded-3xl relative group">
                      <div className="flex items-center justify-between mb-4">
                         <span className="px-4 py-1 bg-red-600/10 text-red-600 border border-red-600/20 rounded-full text-[10px] font-black uppercase tracking-widest">Day 5</span>
                         <span className="text-sm font-bold text-red-500 uppercase tracking-widest italic">VICTORY BY 104 RUNS</span>
                      </div>
                      <p className="text-sm">Bangladesh declare setting 268 target. Nahid Rana's express pace (5/40) dismantles Pakistan for 163. Historic victory confirmed in Mirpur.</p>
                   </div>
                </div>

                <div className="bg-red-600/10 border border-red-600/30 p-8 rounded-[32px] my-10">
                   <div className="flex items-center gap-4 mb-4 text-red-500">
                      <AlertCircle className="w-6 h-6" />
                      <h3 className="text-lg font-display font-bold uppercase italic tracking-tight">The Babar Vacuum</h3>
                   </div>
                   <p className="text-sm leading-relaxed text-white/60">
                      Babar Azam's absence due to a left knee injury was acutely felt. Despite the debutants' heroics in the 1st innings, the lack of a stabilizing anchor in the 2nd innings chase allowed Nahid Rana to rip through the middle order.
                   </p>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Scorecard Highlights</h2>
                <div className="space-y-4">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Bangladesh 1st Innings: 413</p>
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-wrap gap-6 text-sm">
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Shanto</span>
                            <span className="text-pak-green">101 (130)</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Mushfiqur</span>
                            <span className="text-white/60">71 (104)</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Mominul</span>
                            <span className="text-white/60">56 (110)</span>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Pakistan 1st Innings: 386</p>
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-wrap gap-6 text-sm">
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-amber-500">Azan Awais</span>
                            <span className="text-pak-green">103 (165)</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-white">A. Fazal</span>
                            <span className="text-white/60">60 (120)</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-white">M. Rizwan</span>
                            <span className="text-white/60">59 (90)</span>
                         </div>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Player Ratings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {playerRatings.map((p, i) => (
                      <div key={i} className="p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col gap-2">
                         <div className="flex justify-between items-center">
                            <span className="text-xs font-black uppercase tracking-widest text-white">{p.name}</span>
                            <div className="flex gap-0.5">
                               {[...Array(5)].map((_, idx) => (
                                  <Star key={idx} className={`w-3 h-3 ${idx < p.rating ? 'text-pak-green fill-current' : 'text-white/10'}`} />
                               ))}
                            </div>
                         </div>
                         <p className="text-[10px] text-white/50 leading-relaxed uppercase tracking-widest font-bold">{p.performance}</p>
                      </div>
                   ))}
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] my-12 relative overflow-hidden group">
                   <Quote className="absolute top-6 right-6 w-12 h-12 text-pak-green opacity-10 group-hover:scale-110 transition-transform" />
                   <p className="text-lg font-display font-bold text-white uppercase italic leading-relaxed mb-6">
                      "Bangladesh absorbed pressure… then controlled the narrative in a way we haven't seen in a long time."
                   </p>
                   <p className="text-xs font-black uppercase tracking-[3px] text-pak-green">Editorial Verdict • PakCric Schedule</p>
                </div>
              </div>
            </div>

            <AdPlaceholder type="banner" className="my-12" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Match Details Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8">Match Specs</h3>
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                         <Calendar className="w-4 h-4 text-pak-green" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-0.5">Dates</p>
                         <p className="text-sm font-bold text-white">May 8–12, 2026</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                         <MapPin className="w-4 h-4 text-pak-green" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-0.5">Venue</p>
                         <p className="text-sm font-bold text-white">Mirpur, Dhaka</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                         <History className="w-4 h-4 text-pak-green" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-0.5">Toss</p>
                         <p className="text-sm font-bold text-white">BAN won, Bat First</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Records Box */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-8">
                 <h4 className="text-xs font-black uppercase tracking-[3px] text-neutral-500">Milestones</h4>
                 <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Azan Awais</p>
                       <p className="text-xs font-bold text-white leading-relaxed">Centurion on Test Debut</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Nahid Rana</p>
                       <p className="text-xs font-bold text-white leading-relaxed">Match-winning 5/40 in 2nd Innings</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                       <p className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Bangladesh</p>
                       <p className="text-xs font-bold text-white leading-relaxed">3rd straight Test win vs Pakistan</p>
                    </div>
                 </div>
              </div>

              {/* What's Next */}
              <div className="bg-pak-green/5 border border-pak-green/20 p-8 rounded-[40px] space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-[3px] text-pak-green">What's Next?</h4>
                 <p className="text-xs font-bold text-white/60 uppercase leading-relaxed">2nd Test starts May 16 in Sylhet. Pakistan must win to level the series.</p>
                 <Link 
                   to="/pakistan-vs-bangladesh-2026-schedule"
                   className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline pt-2"
                 >
                   View Full Schedule <ChevronRight className="w-3 h-3" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
