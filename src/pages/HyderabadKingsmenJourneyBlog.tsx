import { Calendar, ArrowLeft, Trophy, BarChart3, Zap, MapPin, Star, History as HistoryIcon, User, ChevronRight, ExternalLink, Activity, Clock, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

/* 
<!-- Meta Title: Hyderabad Kingsmen's Journey PSL 2026 | From 0-4 to Final Appearance -->
<!-- Meta Description: Follow the incredible turnaround of Hyderabad Kingsmen in PSL 2026. From losing their first 4 games to reaching the final. Analysis of Usman Khan, Maaz Sadaqat, and the Eliminator 1 victory. -->
*/

export default function HyderabadKingsmenJourneyBlog() {
  const blogTitle = "From 0-4 to the Final: The Remarkable Journey of Hyderabad Kingsmen in PSL 2026";
  const publishDate = "May 2, 2026";
  const authorId = "zainab-rashid";

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans selection:bg-pak-green selection:text-white">
      <Helmet>
        <title>Hyderabad Kingsmen PSL 2026 Journey | 0-4 Turnaround | PakCric Schedule</title>
        <meta name="description" content="Detailed analysis of Hyderabad Kingsmen's journey in PSL 2026, from a disastrous start to reaching their debut final." />
      </Helmet>

      {/* Hero Header */}
      <div className="hero relative overflow-hidden bg-dark py-12 md:py-20 pb-0 min-h-[400px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pak-green/20 via-dark to-yellow-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_40%,rgba(1,65,30,0.2)_0%,transparent_65%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-pak-green/10 border border-pak-green/30 text-pak-green rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-8">
            <TrendingUp className="w-3 h-3 animate-bounce" />
            Tournament Review · Debut Season
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl sm:text-4xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tighter mb-6 md:mb-8 uppercase"
          >
            From <span className="text-red-500 italic">0-4</span> to the <span className="text-pak-green">Final</span>
          </motion.h1>
          
          <p className="text-base md:text-xl text-white/60 font-medium mb-8 md:mb-10 max-w-2xl leading-relaxed">
            The story of the Karachi-based debutants who defied all odds, survived a disastrous start, and emerged as the dark horses of PSL 2026.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
             <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-pak-green" /> {publishDate}</span>
             <span className="flex items-center gap-2"><Trophy className="w-4 h-4 text-pak-green" /> Debut Finalists</span>
             <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pak-green" /> Pakistan Super League 2026</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-white/70 prose-strong:text-pak-green prose-h2:text-4xl prose-h2:font-display prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-24 prose-h2:mb-8">
          
          <p>
            When the Pakistan Super League 2026 kicked off, all eyes were on the debutant franchise, Hyderabad Kingsmen. However, the initial hype quickly turned into concern as the Kingsmen began their campaign with four consecutive losses. The cricketing world was ready to write them off as another expansion team that wasn't quite ready for the big stage. But what happened next is something that will be talked about for generations.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,stadium,pakistan,night" alt="Cricket Stadium in Pakistan" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Rock Bottom: The 0-4 Start</h2>
          <p>
            Losing the first four matches in a tournament as competitive as the PSL is usually a death sentence. The Kingsmen looked out of sorts, their bowling was leaky, and their high-profile batting line-up was failing to fire. Analysts pointed towards a lack of experience in the leadership core, despite having Marnus Labuschagne at the helm.
          </p>
          <p>
            The turning point came in a closed-door meeting after their fourth loss. Labuschagne and the coaching staff decided to overhaul their tactical approach, focusing on high-pace bowling and giving more freedom to their local hitters.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,batting,PSL" alt="PSL Cricket Batting" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Rise of Usman Khan: The Scintillating Sentinel</h2>
          <p>
            No story of the Kingsmen's turnaround is complete without discussing <strong>Usman Khan</strong>. The hard-hitting batsman found his groove in the second half of the group stages. His ability to anchor the innings and then explode in the death overs became the Kingsmen's primary weapon.
          </p>
          <p>
            His unbeaten 61 off 30 balls in Eliminator 2 was just one instance of his dominance. Throughout the season, Usman's consistency provided the platform for the Kingsmen to post and chase par-plus totals, making them a terrifying prospect for any bowling attack.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,player,pakistan" alt="Pakistan Cricket Player" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Maaz Sadaqat Effect</h2>
          <p>
            If Usman Khan was the hammer, <strong>Maaz Sadaqat</strong> was the scalpel. The 20-year-old all-rounder became the find of the season for Hyderabad. His intelligent bowling in the middle overs, coupled with his ability to play the finisher's role with the bat, gave the Kingsmen the balance they desperately needed.
          </p>
          <p>
            Maaz's Player of the Match performance in Eliminator 1 against Multan Sultans showed his maturity beyond his years. He held his nerve when the match was on the line, proving that the Kingsmen's scouts had unearthered a gem.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,bowling,fast,lahore" alt="Fast Bowling in Lahore" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>Eliminator 1: The Tactical Masterstroke in Multan</h2>
          <p>
            The Eliminator 1 against <strong>Multan Sultans</strong> was the true test of their "resurrection." Facing one of the most consistent teams in PSL history, the Kingsmen executed a near-perfect defensive game. Their bowlers, led by a revitalized Mohammad Ali and the young Maaz Sadaqat, restricted the Sultans to a chaseable total.
          </p>
          <p>
            This victory wasn't just about runs and wickets; it was about the belief. It was the moment the Kingsmen truly transitioned from "lucky debutants" to "title contenders."
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,celebration,pakistan" alt="Cricket Celebration" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <h2>The Final Destination: Peshawar Zalmi Awaits</h2>
          <p>
            Now, the Kingsmen stand one step away from immortality. They will face <strong>Peshawar Zalmi</strong> in the PSL 2026 Final at Gaddafi Stadium, Lahore on May 3. From 0-4 to the grand finale, this journey is a testament to the fact that in the PSL, momentum is the ultimate currency.
          </p>
          <p>
            Whether they win the trophy or not, the Hyderabad Kingsmen have already won the hearts of millions. Their journey from rock bottom to the top of the mountain is the defining story of PSL 11.
          </p>

          <img src="https://source.unsplash.com/800x450/?cricket,trophy,pakistan,celebration" alt="PSL Trophy Celebration" style={{ width: '100%', borderRadius: '12px', margin: '20px 0', objectFit: 'cover' }} />

          <div className="my-20 p-12 bg-gradient-to-br from-pak-green/20 via-transparent to-yellow-500/10 border border-pak-green/20 rounded-[64px] text-center not-prose overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,128,0,0.1),transparent)]" />
            <Trophy className="w-20 h-20 text-pak-green mx-auto mb-8 animate-pulse" />
            <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-4 italic leading-none">THE GRAND FINALE</h3>
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold uppercase tracking-tight mb-8">
              <span className="text-white">Hyderabad Kingsmen</span>
              <span className="text-white/20 font-black italic">VS</span>
              <span className="text-yellow-500">Peshawar Zalmi</span>
            </div>
            <p className="text-[12px] font-black text-white/40 uppercase tracking-[0.5em] mb-12">3 May 2026 · Lahore</p>
            <Link to="/schedule" className="inline-flex items-center gap-3 px-10 py-5 bg-pak-green text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-pak-green/30">
              View Tournament Stats <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto px-4 mt-20">
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/blogs" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Blogs
          </Link>
          <div className="flex gap-4">
             <Link to="/blogs/hunain-shah-last-over-dramatic-finish-psl-2026" className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                Next: Hunain's Epic Over <ChevronRight className="w-4 h-4 text-pak-green" />
             </Link>
          </div>
        </div>

        <div className="mt-24">
           <AuthorSection authorId={authorId} />
        </div>

        <div className="mt-24">
           <CommonQuestions faqs={[
             { q: "What was Hyderabad Kingsmen's record at the start of PSL 2026?", a: "They lost their first 4 matches of the season." },
             { q: "Who were the key players for Hyderabad Kingsmen?", a: "Usman Khan (batting) and Maaz Sadaqat (all-rounder) were pivotal to their turnaround." },
             { q: "Who did Hyderabad Kingsmen defeat in Eliminator 1?", a: "They defeated Multan Sultans in Eliminator 1." }
           ]} />
        </div>
      </div>
    </div>
  );
}
