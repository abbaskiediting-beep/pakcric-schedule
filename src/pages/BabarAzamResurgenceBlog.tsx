import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Target, Star, History as HistoryIcon, BarChart3, Zap, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function BabarAzamResurgenceBlog() {
  const blogTitle = "Babar Azam's Glorious Return: Two Centuries & A Season for the Ages";
  const publishDate = "April 29, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "How many centuries did Babar Azam score in PSL 2026?",
      a: "Babar Azam scored 2 centuries in PSL 2026, including one in the crucial Qualifier match against Islamabad United."
    },
    {
      q: "What record did Babar Azam equal in PSL 2026?",
      a: "He equalled Fakhar Zaman's record for the most runs in a single PSL season (588 runs), but did so in just 10 innings compared to Fakhar's 13."
    },
    {
      q: "Who was Babar's most successful opening partner in 2026?",
      a: "Sri Lankan opener Kusal Mendis was his most successful partner. Together, they scored 557 runs in 6 innings with three century stands."
    }
  ];

  const stats = [
    { label: "Runs in PSL 2026", value: "588", icon: Trophy, color: "text-pak-green" },
    { label: "Centuries this edition", value: "02", icon: Zap, color: "text-yellow-500" },
    { label: "Career T20 100s", value: "13", icon: Star, color: "text-blue-500" },
    { label: "2026 Average", value: "98.0", icon: BarChart3, color: "text-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="After two years and 67 innings, Babar Azam has returned to his peak form in PSL 2026 with two massive centuries. Read the full analysis." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[500px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium Atmosphere" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
          <div className="absolute inset-0 bg-pak-green/5 mix-blend-overlay" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 md:pb-24 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="px-4 py-2 bg-pak-green text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-pak-green/20">PSL 2026 Special</span>
            <span className="px-4 py-2 bg-white/5 text-white/60 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-sm">Editorial Analysis</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-10 leading-[1] tracking-tighter max-w-4xl"
          >
            {blogTitle}
          </motion.h1>

          <div className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full border-2 border-pak-green p-0.5">
                <div className="w-full h-full rounded-full bg-pak-green/20 flex items-center justify-center">
                  <User className="w-7 h-7 text-pak-green" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-pak-green uppercase tracking-[3px]">Written by</span>
                <span className="text-[16px] font-black text-white uppercase tracking-widest">Zainab Rashid</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-10 text-white/40 text-[12px] font-bold uppercase tracking-widest"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-pak-green" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pak-green" />
                12 Min Read
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card-bg border border-card-border rounded-[48px] p-8 md:p-16 mb-12 shadow-2xl overflow-hidden relative"
            >
              {/* Abstract decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="prose prose-invert max-w-none relative z-10">
                <p className="text-2xl text-white/90 leading-relaxed mb-12 font-medium first-letter:text-8xl first-letter:font-black first-letter:text-pak-green first-letter:mr-4 first-letter:float-left first-letter:leading-[0.7]">
                   There is a certain beauty in watching a champion rediscover himself. For Babar Azam — once the undisputed king of T20 batting — the past two years had been a long, painful wait. Seventy-seven innings without a T20 hundred. A sea of criticism, mounting pressure, whispers of decline. And then came <strong>PSL 2026</strong> — and with it, not one, but two centuries that sent an entire nation roaring back to its feet.
                </p>

                {/* Stat Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
                  {stats.map((s, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="bg-black/40 border border-white/5 rounded-3xl p-6 text-center"
                    >
                      <s.icon className={`w-8 h-8 mx-auto mb-4 ${s.color}`} />
                      <div className="text-3xl font-black mb-1">{s.value}</div>
                      <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-5">
                  <Zap className="w-10 h-10 text-yellow-500" />
                  The first century: A 52-ball masterpiece
                </h2>
                
                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  It arrived on April 19, at the National Bank Cricket Arena, against the Quetta Gladiators. Babar opened the innings, partnered early with Mohammad Haris who departed for just 16. But Babar held firm. He then found a kindred spirit in Kusal Mendis, the Sri Lankan opening partner who has been the season's brightest revelation. Together they stitched a blistering 135-run stand off just 75 deliveries.
                </p>

                {/* Match Card Info */}
                <div className="bg-gradient-to-br from-pak-green/20 to-black/60 border border-pak-green/30 p-10 rounded-[40px] mb-12 shadow-xl">
                   <div className="flex items-center justify-between mb-8">
                     <span className="px-4 py-1.5 bg-black/40 rounded-full text-[10px] font-black uppercase tracking-widest text-pak-green border border-pak-green/20">Match 1 • April 19, 2026</span>
                     <HistoryIcon className="w-8 h-8 text-pak-green opacity-40 hover:opacity-100 transition-opacity" />
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Peshawar Zalmi vs Quetta Gladiators</h3>
                   <div className="flex items-baseline gap-4 mb-6">
                     <span className="text-6xl font-black text-white">100*</span>
                     <span className="text-2xl font-bold text-white/40">OFF 52 BALLS</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="p-4 bg-black/20 rounded-2xl">
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Strike Rate</div>
                       <div className="text-xl font-bold">192.31</div>
                     </div>
                     <div className="p-4 bg-black/20 rounded-2xl">
                       <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Boundaries</div>
                       <div className="text-xl font-bold">4×6 + 6×4</div>
                     </div>
                   </div>
                   <p className="text-sm font-bold text-pak-green italic border-l-2 border-pak-green/40 pl-4">
                     "Century completed on the final ball of the innings with a full-length dive."
                   </p>
                </div>

                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-5">
                  <Quote className="w-10 h-10 text-pak-green" />
                  What made this hundred different?
                </h2>

                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  This was not merely a hundred — it was a recalibration. Cricket analysts had long questioned Babar's strike rate in T20s, suggesting he was too measured, too passive at the top. His PSL 2026 answer? <strong>Facing only one dot ball across the entire innings.</strong> The knock was liberated yet controlled — a combination rarely seen from a player weighed down by expectation.
                </p>

                {/* Big Pullquote */}
                <div className="my-16 py-12 px-14 bg-white/5 border-l-8 border-pak-green rounded-r-[40px] relative overflow-hidden">
                  <Quote className="absolute top-8 right-12 w-32 h-32 text-pak-green/5" />
                  <p className="text-3xl font-black italic text-white mb-6 leading-tight relative z-10">
                    "There has been so much criticism that it has had an impact on him. But Babar at his best is an unstoppable force of nature."
                  </p>
                  <cite className="text-pak-green font-black uppercase tracking-widest text-[12px]">— Hanif Malik, Pakistan Coaching Staff</cite>
                </div>

                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-5">
                  <Star className="w-10 h-10 text-pak-green" />
                  The Qualifier: A captain's knock for the ages
                </h2>

                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                   If the first hundred ended a drought, the second announced a king's full restoration. On April 28 — the Qualifier at Karachi — Babar walked out with thousands of fans roaring his name. He reached three figures in 57 balls, bringing up the hundred with a six. It was a captain's innings — measured at the start, dominant in the middle, brutal at the end.
                </p>

                {/* Final Record List */}
                <div className="bg-black/40 border border-white/5 rounded-[40px] p-10 mb-12">
                   <h3 className="text-xl font-black uppercase tracking-widest text-pak-green mb-8 flex items-center gap-3">
                     <HistoryIcon className="w-6 h-6" />
                     The 2026 Milestone Tracker
                   </h3>
                   <ul className="space-y-6">
                     {[
                       "First batter to score 500+ runs in four different PSL seasons.",
                       "Equalled Fakhar Zaman's all-time record of 588 runs in a single season.",
                       "Only the second batter to score two centuries in a single PSL season.",
                       "Overtook Faf du Plessis for most T20 centuries as captain (9).",
                       "13 career T20 centuries — moving closer to Chris Gayle's world record."
                     ].map((item, idx) => (
                       <li key={idx} className="flex gap-4 group">
                         <div className="w-6 h-6 rounded-full bg-pak-green/20 flex-shrink-0 flex items-center justify-center text-pak-green font-black text-[10px]">
                            {idx + 1}
                         </div>
                         <p className="text-white/60 text-[15px] font-medium group-hover:text-white transition-colors">
                           {item}
                         </p>
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="flex justify-between items-center pt-20 border-t border-white/5">
                  <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-widest text-pak-green hover:underline group">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Explore More Stories
                  </Link>
                  <div className="flex items-center gap-4">
                    <button className="p-4 bg-white/5 hover:bg-pak-green rounded-full transition-all text-white group" title="Share Article">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 px-8 py-4 bg-pak-green hover:bg-pak-green/80 rounded-2xl transition-all text-[11px] font-black uppercase tracking-widest shadow-xl shadow-pak-green/20">
                      Print Breakdown
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Author Section */}
            <AuthorSection authorId={authorId} />

            {/* FAQs */}
            <CommonQuestions faqs={faqData} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <FanClubSection />

            <div className="bg-card-bg border border-card-border rounded-[40px] p-10 sticky top-10">
               <h3 className="text-xl font-black uppercase tracking-tight text-white mb-10 flex items-center gap-3">
                 <HistoryIcon className="w-6 h-6 text-pak-green" />
                 Babar's 2026 Peak
               </h3>

               <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-pak-green/20">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-pak-green" />
                    <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Qualifier Performance</div>
                    <div className="text-xl font-black text-white">103 (59)</div>
                    <p className="text-[12px] text-white/40 mt-1">vs Islamabad United</p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-pak-green/20">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-pak-green" />
                    <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">League Mastery</div>
                    <div className="text-xl font-black text-white">100* (52)</div>
                    <p className="text-[12px] text-white/40 mt-1">vs Quetta Gladiators</p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-pak-green/20">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-pak-green" />
                    <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Historical Milestone</div>
                    <div className="text-xl font-black text-white">588 Runs</div>
                    <p className="text-[12px] text-white/40 mt-1">Single Season Record</p>
                  </div>
               </div>
               
               <div className="mt-12 p-6 bg-pak-green/5 border border-pak-green/20 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <HistoryIcon className="w-5 h-5 text-pak-green" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Next Chapter</span>
                  </div>
                  <p className="text-[13px] text-white/60 leading-relaxed font-medium">
                    Heading into the PSL 11 Final as the tournament leading run-scorer and captain.
                  </p>
               </div>
            </div>

            <InternalLinkSection cols={1} title="Quick Links" />
          </div>
        </div>
      </div>
    </div>
  );
}
