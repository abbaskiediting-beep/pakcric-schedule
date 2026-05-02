import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Star, TrendingUp, Zap, Users, Shield, BookOpen, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function YasirShahBirthdayBlog() {
  const blogTitle = "Happy Birthday Yasir Shah! Pakistan's Greatest Modern Leg-Spinner Turns 40 — A Career Full of Records, Magic & Unforgettable Wickets";
  const publishDate = "May 3, 2026";
  const authorId = "ayesha-khan";

  const faqData = [
    {
      q: "What is Yasir Shah's most famous record?",
      a: "Yasir Shah is the fastest bowler in the history of Test cricket to reach 200 wickets, achieving the feat in just 33 Test matches, breaking an 82-year-old record."
    },
    {
      q: "How many Test wickets did Yasir Shah take for Pakistan?",
      a: "Yasir Shah took 244 Test wickets for Pakistan in 48 matches at an average of 31.38."
    },
    {
      q: "What are Yasir Shah's best bowling figures in Test cricket?",
      a: "His career-best figures are 8/41, which he achieved against England at Edgbaston in 2016."
    }
  ];

  const careerStats = [
    { format: 'Tests', mat: 48, wkts: 244, ave: 31.38, econ: 3.22, best: '8/41', fiveW: 14 },
    { format: 'ODIs', mat: 25, wkts: 24, ave: 47.92, econ: 5.34, best: '6/26', fiveW: 1 },
    { format: 'T20Is', mat: 2, wkts: 0, ave: '—', econ: 9.75, best: '—', fiveW: 0 },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>Happy 40th Birthday Yasir Shah | Pakistan's Leg-Spin King | Career Tribute</title>
        <meta name="description" content="Yasir Shah turns 40 on May 3, 2026. Celebrating the career of the fastest bowler to 200 Test wickets. Full stats, records, and tribute to the Magician of Swabi." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[500px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Ball Spinning" 
            className="w-full h-full object-cover opacity-30 shadow-inner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
          {/* Confetti-like overlay effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-500/30">Birthday Tribute</span>
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">Legend Series</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter italic"
          >
            Happy Birthday <br />
            <span className="text-yellow-500 underline decoration-pak-green decoration-8">Yasir Shah!</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-yellow-500/30 bg-yellow-500/10 flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha" alt="Ayesha Khan" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Tribute by</span>
                <span className="text-[14px] font-black text-white uppercase tracking-widest">Ayesha Khan</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-white/40 text-[11px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pak-green" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pak-green" />
                15 Min Read
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-14 mb-10 overflow-hidden shadow-2xl"
            >
              <div className="prose prose-invert max-w-none">
                <div className="flex items-center gap-4 mb-10 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-3xl">
                   <Star className="w-10 h-10 text-yellow-500 shrink-0" />
                   <p className="text-xl font-black uppercase tracking-tight text-white mb-0 italic">
                     "40 Saal Ke Ho Gaye, Magar Jaadu Abhi Bhi Wahi Hai!"
                   </p>
                </div>

                <p className="text-xl text-white/70 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-black first-letter:text-pak-green first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  <LinkText text="There are moments in cricket history where one player steps into a void — a desperate, almost impossible void — and not only fills it but exceeds every expectation that came before it. That is exactly what Yasir Shah did on 22 October 2014, at Sheikh Zayed Stadium in Abu Dhabi." />
                </p>
                
                <p className="text-lg text-white/60 mb-10 leading-relaxed">
                  Pakistan had just lost Saeed Ajmal to a bowling action ban — their premier spinner, their match-winner, suddenly gone. Then Yasir Shah walked in. Today — May 3, 2026 — the man from Swabi turns **40 years old**.
                </p>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <User className="w-8 h-8 text-pak-green" />
                  Player Profile: The Swabi Magician
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                     {[
                       { label: 'Full Name', val: 'Yasir Shah (SI)' },
                       { label: 'Date of Birth', val: '2 May 1986' },
                       { label: 'Age Today', val: '40 years' },
                       { label: 'Nickname', val: '"Magician of Swabi"' }
                     ].map(item => (
                       <div key={item.label} className="flex justify-between items-center">
                         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                         <span className="font-black text-sm">{item.val}</span>
                       </div>
                     ))}
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                     {[
                       { label: 'Bowling Style', val: 'Leg-break / Googly' },
                       { label: 'Test Debut', val: '2014 vs Australia' },
                       { label: 'Honour', val: 'Sitara-e-Imtiaz' },
                       { label: 'Test Wickets', val: '244' }
                     ].map(item => (
                       <div key={item.label} className="flex justify-between items-center">
                         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                         <span className="font-black text-sm">{item.val}</span>
                       </div>
                     ))}
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  Records That Will Stand for Years
                </h2>

                <div className="space-y-6 mb-12">
                   <div className="bg-gradient-to-r from-pak-green/20 to-transparent p-8 rounded-3xl border border-pak-green/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-6 h-6 text-yellow-500" />
                        <h3 className="text-xl font-black uppercase m-0">Fastest to 200 Test Wickets — EVER</h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed mb-0">
                        In December 2018, Shah became the fastest bowler to take 200 wickets in Tests, breaking an 82-year-old record. He reached the milestone in just his 33rd Test match, faster than Shane Warne and Muttiah Muralitharan.
                      </p>
                   </div>

                   <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-pak-green" />
                        <h3 className="text-xl font-black uppercase m-0">Fastest Pakistani to 50 & 150 Wickets</h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed mb-0">
                        He became the quickest Pakistan bowler to 50 Test wickets (9 matches) and the fastest overall to 150 Test wickets (26 matches) in 2016, surpassing Shane Warne's previous record.
                      </p>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-pak-green to-yellow-500 bg-clip-text text-transparent">
                  Career Stats & Milestones
                </h2>
                
                <div className="overflow-x-auto bg-black/40 border border-white/5 rounded-3xl p-4 md:p-8 mb-12">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-[11px] font-black uppercase tracking-[2px] text-white/40">
                        <th className="py-4 px-2">Format</th>
                        <th className="py-4 px-2">Mat</th>
                        <th className="py-4 px-2">Wkts</th>
                        <th className="py-4 px-2">Ave</th>
                        <th className="py-4 px-2">Econ</th>
                        <th className="py-4 px-2 text-right">Best</th>
                      </tr>
                    </thead>
                    <tbody>
                      {careerStats.map((stat) => (
                        <tr key={stat.format} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                          <td className="py-4 px-2 font-black text-pak-green">{stat.format}</td>
                          <td className="py-4 px-2 font-bold text-white">{stat.mat}</td>
                          <td className="py-4 px-2 font-bold text-white">{stat.wkts}</td>
                          <td className="py-4 px-2 text-white/60">{stat.ave}</td>
                          <td className="py-4 px-2 text-white/60">{stat.econ}</td>
                          <td className="py-4 px-2 text-right font-bold text-yellow-500">{stat.best}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <blockquote className="my-12 p-8 bg-white/5 border-l-8 border-pak-green rounded-r-3xl italic">
                   <div className="flex items-center gap-4 mb-4">
                      <Quote className="w-10 h-10 text-pak-green/20" />
                      <span className="text-pak-green font-black uppercase tracking-widest text-[10px]">Shane Warne on Yasir Shah</span>
                   </div>
                   <p className="text-lg text-white/80 leading-relaxed mb-0">
                     "I like his energy and shape on the ball, also his over spinner and patience. He will finish with more than 200 Test wickets."
                   </p>
                </blockquote>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">What Made Him Special?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/5">
                      <h4 className="text-lg font-bold uppercase mb-4 text-pak-green">The Leg-Break</h4>
                      <p className="text-sm text-white/60 leading-relaxed italic">
                        Landing the leg-break consistently on a good length while extracting significant turn made him unplayable on turning tracks.
                      </p>
                   </div>
                   <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/5">
                      <h4 className="text-lg font-bold uppercase mb-4 text-pak-green">Surprise Elements</h4>
                      <p className="text-sm text-white/60 leading-relaxed italic">
                        Disguised flippers and a sharply turning googly deceived even the best batters like Steve Smith.
                      </p>
                   </div>
                </div>

                <div className="flex justify-between items-center pt-16 border-t border-white/5">
                  <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Blogs
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 bg-pak-green text-white rounded-xl transition-all text-[10px] font-black uppercase tracking-widest shadow-lg shadow-pak-green/20 hover:scale-105">
                    <Share2 className="w-3.5 h-3.5" />
                    Share Tribute
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Author Section */}
            <AuthorSection authorId={authorId} />

            {/* Internal Links Suggested by User */}
            <div className="mb-10">
              <h3 className="text-xl font-black uppercase tracking-widest text-pak-green mb-6 border-l-4 border-pak-green pl-4">Celebration Day Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold uppercase text-[11px] tracking-widest">
                <Link to="/psl-11-final-ceremony-2026-details" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  PSL 11 Closing Ceremony Performers
                </Link>
                <Link to="/blogs/psl-2026-final-full-campaign-pz-vs-hyk" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  PSL 2026 Final Full Preview
                </Link>
                <Link to="/top-5-players-with-most-centuries-in-psl-history-2026" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Top 5 PSL Century Scorers
                </Link>
                <Link to="/pakistan-upcoming-series-full-schedule" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Pakistan Legends & Upcoming Tours
                </Link>
              </div>
            </div>

            {/* FAQs */}
            <CommonQuestions faqs={faqData} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Newsletter */}
            <FanClubSection />

            {/* External Links */}
            <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8">Official Archives</h3>
              <div className="space-y-4">
                <a href="https://www.espncricinfo.com/cricketers/yasir-shah-43685" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  ESPNCricinfo Profile <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
                <a href="https://en.wikipedia.org/wiki/Yasir_Shah" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Wikipedia Stats <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
                <a href="https://www.pcb.com.pk/player/yasir-shah-47988.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  PCB Records <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
              </div>
            </div>

            <InternalLinkSection cols={1} title="Quick Links" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
