import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Target, Star, History as HistoryIcon, BarChart3, Zap, Quote, MapPin, Radio, Shield, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSL2026FinalCampaignBlog() {
  const blogTitle = "PSL 2026 Final: Peshawar Zalmi vs Hyderabad Kingsmen — Two Extraordinary Campaigns, One Historic Night";
  const publishDate = "May 2, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "When is the PSL 2026 Final?",
      a: "The PSL 2026 Final is scheduled for Sunday, May 3, at 7:30 PM PKT at Gaddafi Stadium, Lahore."
    },
    {
      q: "What is special about the PSL 2026 Final venue?",
      a: "It's the first match of the season to be played in front of a full crowd at Gaddafi Stadium, as the rest of the tournament was held in a bio-secure bubble."
    },
    {
      q: "Who are the key players for Peshawar Zalmi?",
      a: "Babar Azam (588 runs), Kusal Mendis (541 runs), and Sufiyan Muqeem (21 wickets) are the standout performers."
    },
    {
      q: "How did Hyderabad Kingsmen reach the Final?",
      a: "After losing their first four matches, they won five of their next six group games and then three consecutive playoff matches (Eliminator 1 and Eliminator 2) to reach the Final."
    }
  ];

  const pzStats = [
    { label: "League Seed", value: "1st", icon: Trophy, color: "text-pak-green" },
    { label: "Wins", value: "08", icon: Zap, color: "text-yellow-500" },
    { label: "Top Scorer", value: "Babar (588)", icon: Target, color: "text-blue-500" },
    { label: "Top Bowler", value: "Muqeem (21)", icon: Shield, color: "text-red-500" },
  ];

  const hykStats = [
    { label: "League Seed", value: "4th", icon: Trophy, color: "text-pak-green" },
    { label: "Wins", value: "05", icon: Zap, color: "text-yellow-500" },
    { label: "Top Scorer", value: "Usman (380+)", icon: Target, color: "text-blue-500" },
    { label: "Top Bowler", value: "M. Ali (15)", icon: Shield, color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-serif">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="PSL 2026 Final: Peshawar Zalmi vs Hyderabad Kingsmen | Full Season Campaigns, Stats, Head-to-Head & Final Preview | May 3 Gaddafi Stadium" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[650px] md:h-[850px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-pak-green/40 via-black to-blue-900/40" />
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pak-green/10 blur-[120px]" />
          <div className="absolute bottom-[-15%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-5 py-2 bg-white/10 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-white/20">The Grand Finale</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-[1.1] tracking-tight uppercase"
          >
            Two Extraordinary <span className="text-pak-green">Campaigns</span>, One Historic Night
          </motion.h1>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-50">Reported by</span>
                <span className="text-[14px] font-bold text-white uppercase tracking-widest">News Desk</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 md:gap-10 text-white/60 text-[10px] md:text-[12px] font-bold uppercase tracking-widest"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-white" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-white" />
                20 Min Read
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20 relative z-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-2xl text-white/90 leading-relaxed mb-12 font-medium italic border-l-4 border-pak-green pl-8">
            May 3, 2026. Gaddafi Stadium, Lahore. The PSL 11 Grand Final. Two teams. One trophy. And two stories that could not be more different from each other — yet equally extraordinary in their own right.
          </p>

          <div className="bg-card-bg border border-card-border rounded-3xl p-8 mb-16 shadow-2xl">
            <h2 className="text-2xl font-display font-bold uppercase mb-8 flex items-center gap-3">
              <Radio className="w-6 h-6 text-red-500" /> Match Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Match", value: "PSL 11 — Grand Final" },
                { label: "Date", value: "Sunday, 3 May 2026" },
                { label: "Time", value: "7:30 PM PKT" },
                { label: "Venue", value: "Gaddafi Stadium, Lahore" },
                { label: "Special Note", value: "Full crowd allowed for the first time this season" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-4">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                  <span className="text-lg font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight uppercase">
            Part One: Peshawar Zalmi — <span className="text-pak-green">The Kings of PSL 2026</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Peshawar Zalmi entered PSL 2026 with a mission. After their shocking group-stage exit in PSL 2025, the pressure on Babar Azam was immense. The result was a season of unprecedented individual dominance and team consistency.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            {pzStats.map((s, idx) => (
              <div key={idx} className="bg-card-bg border border-card-border rounded-2xl p-6 text-center group hover:border-pak-green/30 transition-all">
                <s.icon className={`w-6 h-6 mx-auto mb-3 ${s.color}`} />
                <div className="text-2xl font-display font-black text-white mb-1">{s.value}</div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-display font-bold mb-6 uppercase text-pak-green">The Route to the Final</h3>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Zalmi dominated the league stage with 8 wins from 10 matches. The highlight was Babar Azam's record-breaking form, scoring 588 runs, including two centuries. In the Qualifier, they swept past Islamabad United by 70 runs, with Babar scoring his 11th T20 century.
          </p>

          <div className="my-16 py-12 px-14 border-l-4 border-pak-green bg-pak-green/5 rounded-r-[40px]">
            <Quote className="w-12 h-12 text-pak-green/20 mb-8" />
            <p className="text-2xl font-display italic text-white mb-6 leading-tight">
              "We focus on what is in our control. Rising after a fall is what defines this team."
            </p>
            <cite className="text-white/40 font-bold uppercase tracking-widest text-[12px]">— Babar Azam on Zalmi's resurgence</cite>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 mt-24 leading-tight uppercase">
            Part Two: Hyderabad Kingsmen — <span className="text-blue-400">The Greatest Debut Story</span>
          </h2>

          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            The Hyderabad Kingsmen's season began in disaster: four losses in their first four matches. Written off by everyone, they staged the most incredible comeback in PSL history, winning three consecutive knockout matches to reach the Final in their debut year.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            {hykStats.map((s, idx) => (
              <div key={idx} className="bg-card-bg border border-card-border rounded-2xl p-6 text-center group hover:border-blue-500/30 transition-all">
                <s.icon className={`w-6 h-6 mx-auto mb-3 ${s.color}`} />
                <div className="text-2xl font-display font-black text-white mb-1">{s.value}</div>
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-display font-bold mb-6 uppercase text-blue-400">Survival of the Fittest</h3>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            The turnaround was sparked by Usman Khan's historic century and the emergence of 20-year-old Maaz Sadaqat. In Eliminator 2, Hunain Shah bowled a legendary last over, conceding just 3 runs when 6 were needed, to secure their Final berth.
          </p>

          <h2 className="text-3xl font-display font-bold mb-8 mt-20 uppercase tracking-tighter">Season Records & Milestones</h2>
          <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-12 mb-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Trophy className="w-32 h-32" />
            </div>
            <ul className="space-y-6 relative z-10">
              {[
                { title: "Babar Azam", desc: "588 runs, 2 centuries, most T20 tons as captain (9)." },
                { title: "Usman Khan", desc: "4th PSL century, first player to reach this milestone." },
                { title: "Sufiyan Muqeem", desc: "21 wickets, tournament leader." },
                { title: "Zalmi Team", desc: "255/3 vs Quetta — Highest total in PSL history." },
                { title: "Babar & Mendis", desc: "191-run stand — Highest PSL partnership ever." }
              ].map((rec, i) => (
                <li key={i} className="flex gap-4 border-b border-white/5 pb-4">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pak-green mt-2.5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-widest">{rec.title}</span>
                    <span className="text-lg text-white/60 font-medium">{rec.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-display font-bold mb-8 mt-16 uppercase tracking-tighter">The Head-to-Head</h2>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Peshawar Zalmi won their only encounter this season, but Hyderabad enters the final with three consecutive knockout wins. The momentum is with the debutants, but the structure is with the kings.
          </p>

          <div className="bg-gradient-to-r from-pak-green to-blue-600 rounded-[40px] p-8 md:p-16 text-center my-24 lg:-mx-12 shadow-3xl">
             <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase">Final Prediction</h2>
             <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-bold italic mb-8">
               "Zalmi to edge it in a thriller, but the story belongs to both."
             </p>
             <p className="text-sm text-white/70 uppercase tracking-[0.3em] font-black">Predicted Winner: Peshawar Zalmi</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-20">
            <Link to="/babar-azam-all-psl-centuries-list-2026-details" className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-pak-green transition-colors">Babar Centuries List</Link>
            <Link to="/blogs/hyderabad-kingsmen-psl-2026-journey-review" className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-blue-400 transition-colors">HYK Journey Review</Link>
            <Link to="/maaz-sadaqat-psl-2026-season-review-stats" className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-yellow-500 transition-colors">Maaz Sadaqat Stats</Link>
          </div>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              All Analysis
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <FanClubSection />
            <InternalLinkSection cols={1} title="Keep Exploring" />
          </div>
        </div>
      </div>
    </div>
  );
}
