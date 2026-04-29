import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Target, Star, History as HistoryIcon, BarChart3, Zap, Quote, Flame } from 'lucide-react';
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
      a: "Babar Azam scored 2 centuries in PSL 2026, including one in the crucial Qualifier match against Islamabad United and another earlier against Quetta Gladiators."
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
    <div className="min-h-screen bg-bg-primary text-white pb-20 font-serif">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="After two years and 67 innings, Babar Azam has returned to his peak form in PSL 2026 with two massive centuries. Read the full analysis." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#0C447C] via-[#185FA5] to-pak-green" />
          {/* Abstract particles/shapes */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px]" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-5 py-2 bg-white/10 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-white/20">PSL 2026 Special</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-black mb-8 leading-[1] tracking-tight"
          >
            {blogTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            After two years and 67 innings, Pakistan's maestro has silenced every critic — and rewritten the PSL record books in the process.
          </motion.p>

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
                <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-50">Written by</span>
                <span className="text-[14px] font-bold text-white uppercase tracking-widest">Cricket Desk</span>
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
          <p className="text-2xl text-white/90 leading-relaxed mb-12 font-medium">
             There is a certain beauty in watching a champion rediscover himself. For Babar Azam — once the undisputed king of T20 batting — the past two years had been a long, painful wait. Seventy-seven innings without a T20 hundred. A sea of criticism, mounting pressure, whispers of decline. And then came <strong>PSL 2026</strong> — and with it, not one, but two centuries that sent an entire nation roaring back to its feet.
          </p>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
            {stats.map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-card-bg border border-card-border rounded-3xl p-8 text-center"
              >
                <div className="text-4xl font-display font-black text-pak-green mb-2">{s.value}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            The turnaround began in the middle of April. Critics were sharpening their pens, questioning if Babar could still carry the weight of a franchise's hopes. His response was typical of the man: quiet determination, followed by absolute brilliance on the field.
          </p>

          <h2 className="text-4xl font-display font-black mb-8 mt-16 leading-tight">
            The first century — a 52-ball masterpiece
          </h2>
          
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            It arrived on April 19, at the National Bank Cricket Arena, against the Quetta Gladiators. Babar opened the innings, partnered early with Mohammad Haris who departed for just 16. But Babar held firm. He then found a kindred spirit in Kusal Mendis, the Sri Lankan opening partner who has been the season's brightest revelation. Together they stitched a blistering 135-run stand off just 75 deliveries.
          </p>

          {/* Match Card Info */}
          <div className="border border-card-border bg-card-bg p-10 rounded-[40px] mb-12 shadow-xl">
             <div className="flex items-center justify-between mb-8">
               <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">Match 1 • April 19, 2026</span>
               <div className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-bold uppercase tracking-widest">Record Breaking</div>
             </div>
             <h3 className="text-2xl font-display font-bold mb-4">Peshawar Zalmi vs Quetta Gladiators</h3>
             <div className="flex items-baseline gap-4 mb-6">
               <span className="text-7xl font-display font-black text-white">100*</span>
               <span className="text-2xl font-bold text-white/40">OFF 52 BALLS</span>
             </div>
             <p className="text-[15px] text-white/60 mb-8 font-medium">
               Zalmi posted 255 runs. Century completed on the final ball of the innings with a full-length dive.
             </p>
             <div className="flex flex-wrap gap-4">
               <span className="px-5 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-[11px] font-bold uppercase tracking-widest">Fastest PSL Century</span>
               <span className="px-5 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[11px] font-bold uppercase tracking-widest">Ended Drought</span>
             </div>
          </div>

          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            The hundred itself was a drama-filled affair. On the final delivery of the innings, needing two runs for his milestone, Babar flicked a full ball towards long-on and sprinted. Fortune favoured him — a wide throw from the deep — and he slid home in a full-length dive. The stadium erupted. Pakistan erupted. A superstar had returned.
          </p>

          {/* Pullquote */}
          <div className="my-20 py-12 px-14 bg-card-bg border-l-4 border-pak-green rounded-r-[40px]">
            <Quote className="w-12 h-12 text-pak-green/20 mb-8" />
            <p className="text-3xl font-display italic text-white mb-6 leading-tight">
              "There has been so much criticism that it has had an impact on him. But Babar at his best is an unstoppable force of nature."
            </p>
            <cite className="text-white/40 font-bold uppercase tracking-widest text-[12px]">— Hanif Malik, Pakistan Coaching Staff</cite>
          </div>

          <h2 className="text-4xl font-display font-black mb-8 mt-16 leading-tight">
            What made this hundred different
          </h2>

          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            This was not merely a hundred — it was a recalibration. Cricket analysts had long questioned Babar's strike rate in T20s, suggesting he was too measured, too passive at the top. His PSL 2026 answer? Scoring at 192.31, facing only one dot ball across the entire innings. The knock was liberated yet controlled — a combination rarely seen from a player weighed down by expectation.
          </p>

          <p className="text-xl text-white/70 mb-16 leading-relaxed">
            Crucially, Babar played a different kind of game this season: a selfless one. With Mendis in blazing form, Babar often stepped back, provided the anchor, and then accelerated at precisely the right moment. Against Quetta, Mendis contributed 83 off 44 balls while Babar timed his surge perfectly, smashing his final 37 runs off a jaw-dropping 12 balls.
          </p>

          <h2 className="text-4xl font-display font-black mb-8 leading-tight flex items-center gap-5">
            The second century — a captain's knock
          </h2>

          <p className="text-xl text-white/70 mb-10 leading-relaxed">
             If the first hundred ended a drought, the second announced a king's full restoration. On April 28 — the Qualifier at Karachi — Babar walked out with thousands of fans roaring his name. He reached three figures in 57 balls, bringing up the hundred with a six. It was a captain's innings — measured at the start, dominant in the middle, brutal at the end.
          </p>

          {/* Record List */}
          <div className="bg-card-bg border border-card-border rounded-[40px] p-10 mb-20">
             <h3 className="text-xl font-bold uppercase tracking-widest text-pak-green mb-10">The Records That Tell the Story</h3>
             <ul className="space-y-6">
               {[
                 "First batter to score 500+ runs in four different PSL seasons.",
                 "Equalled Fakhar Zaman's all-time record of 588 runs in a single season.",
                 "Only the second batter to score two centuries in a single PSL season.",
                 "Overtook Faf du Plessis for most T20 centuries as captain (9).",
                 "13 career T20 centuries — moving closer to Chris Gayle's record of 22."
               ].map((item, idx) => (
                 <li key={idx} className="flex gap-6 border-l-2 border-pak-green/20 pl-8 pb-4">
                   <p className="text-white/80 text-lg font-medium">
                     {item}
                   </p>
                 </li>
               ))}
             </ul>
          </div>

          <h2 className="text-4xl font-display font-black mb-8 leading-tight">
            The Babar–Mendis partnership: PSL's new phenomenon
          </h2>

          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            No discussion of Babar's resurgence is complete without acknowledging <strong>Kusal Mendis</strong>. The Sri Lankan opener has been the leading run-scorer in his debut PSL season, and his partnership with Babar has been nothing short of extraordinary. Together they have accumulated 557 runs across six innings, with three century stands — the highest among any opening pair this season.
          </p>

          <p className="text-xl text-white/70 mb-20 leading-relaxed">
            What makes this duo so compelling is the contrast: Mendis is power and explosion, Babar is elegance and timing. When both are in rhythm together, opposition bowlers have no answers. Their 191-run stand against Karachi Kings stands as the highest partnership in PSL history.
          </p>

          <div className="bg-gradient-to-r from-pak-green to-[#185FA5] rounded-[40px] p-12 text-center mb-24 lg:-mx-12">
            <h2 className="text-4xl font-display font-black text-white mb-6">The King is Back</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Babar Azam's PSL 2026 is more than a return to form — it is a rebirth. The weight of expectation that once shackled him has been replaced by freedom. He no longer needs to prove anything to anyone — and yet keeps doing so, one magnificent hundred at a time.
            </p>
          </div>

          <div className="flex justify-between items-center py-12 border-t border-white/10">
            <Link to="/blogs" className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-pak-green hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Explore More Stories
            </Link>
            <div className="flex items-center gap-4">
              <button className="p-4 bg-card-bg border border-card-border rounded-full hover:bg-pak-green transition-all group">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Components at bottom for high focus */}
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
