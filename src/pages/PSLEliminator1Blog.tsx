import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Target, Star, History as HistoryIcon, BarChart3, Zap, Quote, Flame, MapPin, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSLEliminator1Blog() {
  const blogTitle = "PSL 2026 Eliminator 1: Multan Sultans vs Hyderabad Kingsmen — Full Match Preview & Analysis";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "Where is the PSL 2026 Eliminator 1 being played?",
      a: "The match is being played at the Gaddafi Stadium in Lahore."
    },
    {
      q: "What is the head-to-head record between Multan and Hyderabad in PSL 2026?",
      a: "It is currently 1-1. Multan won the first meeting, and Hyderabad won the second encounter during the league stage."
    },
    {
      q: "Who does the winner of Eliminator 1 face next?",
      a: "The winner advances to Eliminator 2 to face Islamabad United on May 1, 2026."
    }
  ];

  const stats = [
    { label: "Points Table Multan", value: "3rd", icon: Trophy, color: "text-pak-green" },
    { label: "Points Table Hyderabad", value: "4th", icon: Zap, color: "text-yellow-500" },
    { label: "Multan NRR", value: "+0.45", icon: Star, color: "text-blue-500" },
    { label: "Hyderabad NRR", value: "+0.12", icon: BarChart3, color: "text-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="PSL 11 Eliminator 1 — Multan Sultans vs Hyderabad Kingsmen at Gaddafi Stadium, Lahore. Full match preview, team analysis, head-to-head, and prediction." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#062c1a] via-pak-green to-[#001107]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-5 py-2 bg-white/10 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-white/20">PSL 2026 Eliminator 1</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-black mb-8 leading-[1.1] tracking-tight"
          >
            {blogTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            One survives, one goes home. The rookies face the titans in a high-stakes showdown at the Gaddafi Stadium.
          </motion.p>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab" alt="Zainab Rashid" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-50">Written by</span>
                <span className="text-[14px] font-bold text-white uppercase tracking-widest">Zainab Rashid</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-10 text-white/60 text-[12px] font-bold uppercase tracking-widest"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-white" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-white" />
                12 Min Read
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20 relative z-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-medium">
             While Peshawar Zalmi celebrates their march into the finals, the attention shifts to the do-or-die Eliminator 1. Tonight at <strong>Gaddafi Stadium, Lahore</strong>, the experienced <strong>Multan Sultans</strong> face the debutant <strong>Hyderabad Kingsmen</strong>. One team is standard-bearer of consistency; the other is the miracle story of PSL 2026.
          </p>

          {/* Quick Match Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-card-bg border border-card-border p-8 rounded-3xl">
              <h3 className="text-pak-green font-display font-black text-xl mb-4 uppercase tracking-widest">The Matchup</h3>
              <ul className="space-y-3 font-bold text-sm uppercase tracking-wide">
                <li className="flex justify-between"><span>Series</span> <span className="text-white/60">PSL 2026 Eliminator 1</span></li>
                <li className="flex justify-between"><span>Time</span> <span className="text-white/60">7:30 PM PKT</span></li>
                <li className="flex justify-between"><span>Venue</span> <span className="text-white/60">Lahore</span></li>
              </ul>
            </div>
            <div className="bg-pak-green/10 border border-pak-green/20 p-8 rounded-3xl flex flex-col justify-center text-center">
              <p className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-2">Toss Prediction</p>
              <h3 className="text-2xl font-display font-black text-white uppercase italic">Field First</h3>
              <p className="text-xs text-white/40 mt-2">Dew factor expected to play major role</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            Team Form & Resurgence
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-display font-black text-white mb-4">Multan Sultans: The Titans</h3>
              <p className="text-lg text-white/70 mb-4 font-medium">
                Finished 3rd with 6 wins. Led by <strong>Ashton Turner</strong>, they boast a feared top order of <strong>Sahibzada Farhan</strong> and <strong>Steven Smith</strong>. Farhan has been their lynchpin, delivering high-impact innings throughout the league stage.
              </p>
              <div className="flex gap-2">
                {['W', 'W', 'L', 'W', 'L'].map((f, i) => (
                  <span key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${f === 'W' ? 'bg-pak-green' : 'bg-red-500'}`}>{f}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-display font-black text-pak-green mb-4">Hyderabad Kingsmen: The Rebounders</h3>
              <p className="text-lg text-white/70 mb-4 font-medium">
                Started 0-4, finished with a dream run. <strong>Usman Khan</strong> is their nuclear option with 4 PSL centuries overall. Captain <strong>Marnus Labuschagne</strong> provides the tactical anchor they needed in their debut season.
              </p>
              <div className="flex gap-2">
                {['W', 'L', 'W', 'W', 'W'].map((f, i) => (
                  <span key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${f === 'W' ? 'bg-pak-green' : 'bg-red-500'}`}>{f}</span>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            Key Battles to Watch
          </h2>

          <div className="relative border-l-4 border-pak-green pl-10 py-4 space-y-12">
            <div>
              <h4 className="text-xl font-black uppercase text-white mb-2">Sahibzada Farhan vs Riley Meredith</h4>
              <p className="text-white/60 leading-relaxed font-medium">
                Raw pace vs calculated aggression. If Meredith can knock over Farhan early, Multan's blueprint often collapses.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-black uppercase text-white mb-2">Usman Khan vs Tabraiz Shamsi</h4>
              <p className="text-white/60 leading-relaxed font-medium">
                The spin wizard vs the century machine. Usman has been brutal against pace, but Shamsi's variations in the middle overs will be a severe test.
              </p>
            </div>
          </div>

          <div className="my-20 p-10 bg-gradient-to-br from-[#062c1a] to-black rounded-[40px] border border-white/5 shadow-2xl text-center">
             <Trophy className="w-16 h-16 text-pak-green mx-auto mb-6" />
             <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">Prediction</h2>
             <p className="text-xl text-white/80 font-medium italic">
                Hyderabad Kingsmen to win a close contest. Their late-season momentum and fearlessness often trump experience in Eliminators.
             </p>
          </div>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Blog Main Page
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-4 bg-card-bg border border-card-border rounded-full hover:bg-pak-green transition-all group">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-24">
          <AuthorSection authorId={authorId} />
          <CommonQuestions faqs={faqData} />
          <InternalLinkSection title="Recommended Reads" />
        </div>
      </div>
    </div>
  );
}
