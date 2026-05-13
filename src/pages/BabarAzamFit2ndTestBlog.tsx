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
  Trophy,
  Info,
  Calendar,
  Activity as FitnessIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import ShareButton from '../components/ShareButton';

export default function BabarAzamFit2ndTestBlog() {
  const pageTitle = "Babar Azam Declared Fit for 2nd Test vs Bangladesh — The King Returns to Sylhet After Knee Injury Scare";
  const metaDescription = "Babar Azam declared fit and available for Pakistan's 2nd Test vs Bangladesh in Sylhet on May 16 2026. Full injury timeline, training update, and what his return means for Pakistan's must-win match.";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="Babar Azam Fit, 2nd Test Bangladesh vs Pakistan 2026, Sylhet Test Babar Azam, Babar Azam injury update, Pakistan cricket news breaking" />
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
            <div className="flex items-center gap-3 px-4 py-1.5 bg-yellow-500 text-black rounded-full text-[10px] font-black uppercase tracking-[3px] shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <Zap className="w-3 h-3 fill-current" /> Breaking News
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none max-w-6xl">
              The King Returns <br />
              <span className="text-yellow-500 italic">For Sylhet Showdown</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-neutral-400 italic">
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> May 13, 2026</span>
               <span className="flex items-center gap-2 text-pak-green"><User className="w-4 h-4" /> Omar Farooq</span>
               <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Sylhet Test</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <SaveForOfflineButton id="babar-azam-fit-sylhet" label="Save News" className="bg-white/10" />
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
                  Pakistan cricket fans have been anxiously refreshing their phones for one piece of news ever since Bangladesh beat Pakistan by 104 runs in the 1st Test at Mirpur. That news has arrived: Babar Azam is fit.
                </p>

                <p>
                  Well-known Pakistani journalist Sohail Imran confirmed the development earlier today, stating that Babar has resumed full-intensity training and is expected to retain his fitness for the second and final Test against the Tigers, starting on May 16 in Sylhet.
                </p>

                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[40px] my-12 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                      <Quote className="w-32 h-32" />
                   </div>
                   <div className="relative z-10 space-y-4">
                      <Quote className="w-12 h-12 text-yellow-500 opacity-20" />
                      <p className="text-xl font-display font-bold text-white uppercase italic leading-tight">
                         "Good News — Babar Azam fit and will be available for the 2nd Test against Bangladesh."
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-[3px] text-neutral-500">— Sohail Imran, Senior Journalist</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic pt-10 border-t border-white/5">The Injury Timeline</h2>
                <p>
                  Babar Azam experienced sharp pain in his left knee during the national team's training session on May 7, just one day before the start of the series. Upon raising the issue with management, he underwent MRI scans which necessitated a cautious approach.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                         <Calendar className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black text-white uppercase italic">May 7: The Scare</h4>
                      <p className="text-xs text-neutral-400">Sharp pain in left knee during Dhaka training session. MRI scans performed immediately.</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-pak-green/20 flex items-center justify-center text-pak-green">
                         <FitnessIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-black text-white uppercase italic">May 10: The Return</h4>
                      <p className="text-xs text-neutral-400">Babar resumes batting drills at BCB Academy under supervision of Asad Shafiq.</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic pt-10">What his return means</h2>
                <p>
                  Babar's return transforms the XI in three specific ways:
                </p>
                <ul className="space-y-4 list-none p-0">
                  <li className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <span className="w-8 h-8 rounded-lg bg-yellow-500 text-black flex items-center justify-center text-xs font-black shrink-0">01</span>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Psychological Anchor</h4>
                      <p className="text-sm opacity-80">His presence at #3 or #4 provides the technical stability that was missing in the 163-all-out collapse in Mirpur.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <span className="w-8 h-8 rounded-lg bg-yellow-500 text-black flex items-center justify-center text-xs font-black shrink-0">02</span>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Lineup Balance</h4>
                      <p className="text-sm opacity-80">With Babar back, Pakistan can now afford to play both debutants—Awais and Fazal—at their natural positions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <span className="w-8 h-8 rounded-lg bg-yellow-500 text-black flex items-center justify-center text-xs font-black shrink-0">03</span>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Pressure on Tigers</h4>
                      <p className="text-sm opacity-80">Bangladesh's spinners, Taijul and Mehdiy, will have to rework their plans for the man who averages 43 in Test cricket.</p>
                    </div>
                  </li>
                </ul>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] my-12 space-y-8 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-pak-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight italic relative z-10">Full Squad for 2nd Test</h2>
                   <p className="text-sm leading-relaxed relative z-10">
                      The selection committee has confirmed that no additional players will join the squad in Sylhet, with the medical team happy that Babar Azam's recovery is permanent.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                      <Link to="/pakistan-tour-bangladesh-squad-2026" className="p-6 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[2px] block mb-2 underline decoration-yellow-500/20">Full Squad</span>
                        <span className="text-sm font-black text-white uppercase italic">16-Member Test Team</span>
                      </Link>
                      <Link to="/news/why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis" className="p-6 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[2px] block mb-2 underline decoration-red-500/20">Mirpur Analysis</span>
                        <span className="text-sm font-black text-white uppercase italic">Why PAK Lost 1st Test</span>
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
              {/* Quick Status Widget */}
              <div className="bg-card-bg border border-card-border rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                   <FitnessIcon className="w-8 h-8 text-yellow-500 opacity-20" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 mb-8 italic">Player Condition</h3>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Status</span>
                      <span className="text-sm font-black text-pak-green uppercase italic">MATCH FIT</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Training Intensity</span>
                      <span className="text-sm font-black text-white uppercase italic">100% Volume</span>
                   </div>
                   <div className="p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Recovery Progress</span>
                        <span className="text-xs font-black text-white italic">Complete</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                        />
                      </div>
                   </div>
                </div>
              </div>

              {/* Career Stats Highlight */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[3px] text-neutral-500 italic underline decoration-white/10">Babar Test Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[10px] font-black text-neutral-500 uppercase mb-1">Average</p>
                      <p className="text-xl font-display font-black text-white italic leading-none">42.39</p>
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[10px] font-black text-neutral-500 uppercase mb-1">100s</p>
                      <p className="text-xl font-display font-black text-white italic leading-none">09</p>
                   </div>
                </div>
                <Link to="/player/babar-azam" className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  View Player Profile <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Series Prediction CTA */}
              <Link
                to="/pakistan-tour-bangladesh-test-2026"
                className="block bg-pak-green border border-green-700/20 p-10 rounded-[40px] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,102,68,0.4)]"
              >
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-xl font-display font-black text-white uppercase italic leading-tight">Can Babar Level <br /> The Series?</h4>
                    <p className="text-xs font-bold text-white/60 uppercase leading-relaxed">
                       View the full schedule and match timings for the 2nd Test in Sylhet.
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest mt-4">
                       Sylhet Schedule <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                 </div>
                 <Trophy className="absolute -bottom-10 -right-10 w-40 h-40 text-black/10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <InternalLinkSection />
    </div>
  );
}
