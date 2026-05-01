import { Calendar, Clock, ArrowLeft, Share2, Trophy, Target, Star, BarChart3, Zap, MapPin, TrendingUp, Users, Shield, History as HistoryIcon, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSLEliminator2PreviewBlog() {
  const blogTitle = "PSL 2026 Eliminator 2: Islamabad United vs Hyderabad Kingsmen — Full Match Preview, Team Analysis, Prediction & Playing XIs";
  const publishDate = "May 1, 2026";
  const authorId = "syed-abbas";

  const faqData = [
    {
      q: "Where is the PSL 2026 Eliminator 2 being played?",
      a: "The match is being played at the Gaddafi Stadium in Lahore on Friday, May 1, 2026."
    },
    {
      q: "What time does the match start?",
      a: "The match starts at 7:30 PM PKT."
    },
    {
      q: "What is the consequence for the loser of this match?",
      a: "The loser is eliminated from PSL 2026, while the winner advances to the Grand Final against Peshawar Zalmi on May 3."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-sans">
      <Helmet>
        <title>PSL 2026 Eliminator 2: Islamabad United vs Hyderabad Kingsmen | Preview | PakCric Schedule</title>
        <meta name="description" content="PSL 2026 Eliminator 2 — Islamabad United vs Hyderabad Kingsmen at Gaddafi Stadium Lahore on May 1, 2026. Full match preview, team analysis, and prediction." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#062c1a] via-pak-green/40 to-[#001107]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-5 py-2 bg-white/10 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-white/20">PSL 2026 Eliminator 2</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-black mb-8 leading-[1.1] tracking-tight"
          >
            PSL 2026 Eliminator 2: Islamabad vs Hyderabad
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            One team goes to the Final. One team goes home. The ultimate decider between a wounded giant and a runaway freight train.
          </motion.p>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Syed" alt="Syed Abbas" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-50">Written by</span>
                <span className="text-[14px] font-bold text-white uppercase tracking-widest">Syed Abbas</span>
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
                15 Min Read
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20 relative z-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-medium">
            The Pakistan Super League 2026 has been one of the most dramatic, unpredictable and thoroughly entertaining editions of the tournament in years. And tonight, at <strong>Gaddafi Stadium Lahore</strong>, the drama reaches its final crescendo before the Grand Final.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-card-bg border border-card-border p-8 rounded-3xl">
              <h3 className="text-pak-green font-display font-black text-xl mb-4 uppercase tracking-widest">Match Details</h3>
              <ul className="space-y-3 font-bold text-sm uppercase tracking-wide">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Match</span> <span className="text-white/60">Eliminator 2</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Date</span> <span className="text-white/60">May 1, 2026</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Time</span> <span className="text-white/60">7:30 PM PKT</span></li>
                <li className="flex justify-between"><span>Venue</span> <span className="text-white/60">Lahore</span></li>
              </ul>
            </div>
            <div className="bg-pak-green/10 border border-pak-green/20 p-8 rounded-3xl flex flex-col justify-center text-center">
              <p className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-2">The Stakes</p>
              <h3 className="text-xl font-display font-black text-white uppercase italic leading-tight">Winner Faces Peshawar Zalmi in the Final</h3>
              <p className="text-xs text-white/40 mt-2">Loser is eliminated from PSL 2026</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">Head-to-Head: IU vs HYK 2026</h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-12">
            <table className="w-full text-left font-bold text-sm uppercase">
              <thead className="bg-white/10 text-white/60">
                <tr>
                  <th className="p-4">Match</th>
                  <th className="p-4">Venue</th>
                  <th className="p-4">Winner</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5">
                  <td className="p-4">League 1</td>
                  <td className="p-4">Karachi</td>
                  <td className="p-4 text-pak-green">Hyderabad Kingsmen</td>
                </tr>
                <tr>
                  <td className="p-4">League 2</td>
                  <td className="p-4">Lahore</td>
                  <td className="p-4 text-pak-green">Islamabad United</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight text-pak-green">
            Islamabad United — The Wounded Giant
          </h2>
          <p className="text-lg text-white/70 mb-8 font-medium">
            Islamabad United finished the league stage in a commanding second position but were outplayed completely in the Qualifier by Peshawar Zalmi. Despite that loss, they possess deep experience and world-class players like <strong>Shadab Khan</strong> and <strong>Devon Conway</strong>.
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight text-emerald-500">
            Hyderabad Kingsmen — The Runaway Freight Train
          </h2>
          <p className="text-lg text-white/70 mb-8 font-medium">
            The ultimate Cinderella story: after a 0-4 start, they've won 6 of their last 7. They dismantled Multan Sultans in Eliminator 1 and arrive with white-hot momentum. <strong>Usman Khan</strong> is currently unstoppable.
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight">
            Key Player Battles
          </h2>

          <div className="space-y-8 mb-16">
            <div className="bg-white/5 border-l-4 border-pak-green p-8 rounded-r-3xl">
              <h4 className="text-xl font-black uppercase text-white mb-2">Usman Khan vs Shadab Khan</h4>
              <p className="text-white/60 leading-relaxed font-medium">
                The defining matchup. Usman is Hyderabad's top scorer, while Shadab has 17 wickets this season. Leg-spin vs aggressive power-hitting.
              </p>
            </div>
            <div className="bg-white/5 border-l-4 border-yellow-500 p-8 rounded-r-3xl">
              <h4 className="text-xl font-black uppercase text-white mb-2">Sameer Minhas vs HYK Pace Trio</h4>
              <p className="text-white/60 leading-relaxed font-medium">
                The 19-year-old rising star vs the raw pace of Mohammad Ali and Hunain Shah.
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 mt-16 leading-tight"> Probable Playing XIs </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
               <h3 className="text-xl font-black text-pak-green uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Islamabad United</h3>
               <ul className="space-y-2 text-sm font-bold text-white/70">
                  <li>1. Devon Conway (wk)</li>
                  <li>2. Sameer Minhas</li>
                  <li>3. Mohsin Riaz</li>
                  <li className="text-white">4. Shadab Khan (c)</li>
                  <li>5. Mark Chapman</li>
                  <li>6. Haider Ali</li>
                  <li>7. Faheem Ashraf</li>
                  <li>8. Chris Green</li>
                  <li>9. Imad Wasim</li>
                  <li>10. Salman Mirza</li>
                  <li>11. Richard Gleeson</li>
               </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
               <h3 className="text-xl font-black text-pak-green uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Hyderabad Kingsmen</h3>
               <ul className="space-y-2 text-sm font-bold text-white/70">
                  <li>1. Maaz Sadaqat</li>
                  <li className="text-white">2. Marnus Labuschagne (c)</li>
                  <li>3. Saim Ayub</li>
                  <li>4. Kusal Perera</li>
                  <li>5. Usman Khan (wk)</li>
                  <li>6. Glenn Maxwell</li>
                  <li>7. Irfan Khan</li>
                  <li>8. Hassan Khan</li>
                  <li>9. Hunain Shah</li>
                  <li>10. Mohammad Ali</li>
                  <li>11. Asif Mehmood</li>
               </ul>
            </div>
          </div>

          <div className="my-20 p-10 bg-gradient-to-br from-[#062c1a] to-black rounded-[40px] border border-white/5 shadow-2xl text-center">
             <Trophy className="w-16 h-16 text-pak-green mx-auto mb-6" />
             <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">Match Prediction</h2>
             <p className="text-xl text-white/80 font-medium italic">
                <strong>Hyderabad Kingsmen to win by 15-20 runs.</strong> Their momentum and Usman Khan's form, combined with the chasing advantage at Gaddafi Stadium, give them the edge in this high-pressure knockout.
             </p>
          </div>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
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
          <FanClubSection />
          <CommonQuestions faqs={faqData} />
          <InternalLinkSection title="Recommended Reads" />
        </div>
      </div>
    </div>
  );
}
