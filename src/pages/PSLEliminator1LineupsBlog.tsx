import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Target, Star, History as HistoryIcon, BarChart3, Zap, Quote, Flame, MapPin, Ticket, Shield, Swords } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSLEliminator1LineupsBlog() {
  const blogTitle = "PSL 2026 Eliminator 1: Confirmed Playing XIs — Nawaz Returns as Kingsmen Opt to Bowl";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "Who was dropped by Multan Sultans for the Eliminator?",
      a: "Multan Sultans dropped Mohammad Wasim Jr to bring back the experienced all-rounder Mohammad Nawaz."
    },
    {
      q: "Why did Hyderabad Kingsmen choose to bowl first?",
      a: "The decision was tactical, aimed at tackling the expected dew factor at Gaddafi Stadium and leveraging their recent success in chasing."
    }
  ];

  const lineups = {
    multan: [
      "Sahibzada Farhan", "Steven Smith", "Josh Philippe (WK)", "Shan Masood",
      "Arafat Minhas", "Ashton Turner (C)", "Mohammad Nawaz",
      "Mohammad Imran Randhawa", "Peter Siddle", "Muhammad Ismail", "Faisal Akram"
    ],
    hyderabad: [
      "Saim Ayub", "Maaz Sadaqat", "Marnus Labuschagne (C)", "Usman Khan (WK)",
      "Kusal Perera", "Glenn Maxwell", "Irfan Khan", "Hassan Khan",
      "Hunain Shah", "Mohammad Ali", "Akif Javed"
    ]
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Confirmed Playing XIs for PSL 11 Eliminator 1: Multan Sultans vs Hyderabad Kingsmen. Nawaz returns for Multan as Labuschagne opts to bowl." />
      </Helmet>

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-br from-[#042111] via-pak-green to-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black tracking-widest uppercase border border-white/20 mb-6">
            <Flame className="w-4 h-4 text-orange-500" />
            Live Lineups Update
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-display font-black leading-tight mb-8">
            {blogTitle}
          </motion.h1>
          <div className="flex items-center justify-center gap-10 text-white/60 text-[11px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {publishDate}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 Min Read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-white/80 leading-relaxed mb-12">
            The knockout phase has reached a fever pitch at Lahore’s Gaddafi Stadium. In a tactical move for this do-or-die Eliminator, Hyderabad Kingsmen captain Marnus Labuschagne has won the toss and sent Multan Sultans in to bat. Here are the confirmed Playing XIs for both sides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
            {/* Multan Sultans Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-24 h-24 text-pak-green" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-pak-green flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-display font-black">MS</span>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-black text-white">Multan Sultans</h2>
                  <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest">Final XI</p>
                </div>
              </div>
              <ul className="space-y-3">
                {lineups.multan.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80 border-b border-white/5 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-pak-green/10 rounded-2xl border border-pak-green/20">
                <p className="text-xs font-bold text-white leading-relaxed">
                  <span className="text-pak-green">Tactical Change:</span> The Sultans have brought back the experienced <strong>Mohammad Nawaz</strong> to bolster their bowling and lower-order batting, dropping Mohammad Wasim Jr for this crucial tie.
                </p>
              </div>
            </motion.div>

            {/* Hyderabad Kingsmen Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-yellow-500">
                <Swords className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-display font-black text-black">HK</span>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-black text-white">Hyderabad Kingsmen</h2>
                  <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Final XI</p>
                </div>
              </div>
              <ul className="space-y-3">
                {lineups.hyderabad.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80 border-b border-white/5 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                <p className="text-xs font-bold text-white leading-relaxed">
                  <span className="text-yellow-500">Momentum Sticking:</span> The debutants have stuck with the same balanced lineup that powered them to four consecutive victories to claim their playoff spot.
                </p>
              </div>
            </motion.div>
          </div>

          <h2 className="text-3xl font-display font-black mb-8 mt-16">The Toss Narrative</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6 font-medium">
            The decision to bowl first is a calculated gamble by Marnus Labuschagne. While Gaddafi Stadium has often rewarded teams batting first, the potential for evening dew makes chasing a far more attractive prospect. Hyderabad previously chased 214 against Multan, and they are backing their deep batting order—featuring Maxwell and Perera—to handle the pressure of lights.
          </p>

          <div className="bg-pak-green p-8 rounded-3xl text-center my-16 shadow-2xl">
            <h3 className="text-2xl font-display font-black text-white mb-4 uppercase italic">What’s at Stake?</h3>
            <p className="text-white/90 text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              The pressure is immense: the winning team remains in Lahore to face Islamabad United on May 1st, while for the loser, the PSL 11 journey ends tonight.
            </p>
          </div>

          <Link to="/blogs" className="inline-flex items-center gap-3 text-sm font-black uppercase text-pak-green hover:underline mt-12">
            <ArrowLeft className="w-5 h-5" /> Back to Blogs
          </Link>
        </div>

        <div className="mt-24 space-y-20">
          <AuthorSection authorId={authorId} />
          <CommonQuestions faqs={faqData} />
        </div>
      </div>
    </div>
  );
}
