import { Calendar, Clock, User, ArrowLeft, Share2, Target, TrendingUp, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSL11QualifierPowerplayBlog() {
  const blogTitle = "Zalmi Blitz in Karachi: Babar and Haris Dismantle United’s Attack Early";
  const publishDate = "April 28, 2026";
  const authorId = "zainab-stats"; // Statistical Lead

  const faqData = [
    {
      q: "What was Peshawar Zalmi's score in the powerplay during the PSL 11 Qualifier 1?",
      a: "Peshawar Zalmi raced to 64/0 in just 5.4 overs, maintaining a run rate of over 11 runs per over against Islamabad United."
    },
    {
      q: "How did Mohammad Haris perform in the opening overs of the Qualifier?",
      a: "Mohammad Haris played as the aggressor, scoring 31 runs off just 14 balls with a strike rate of 221.43, including 4 boundaries and 2 sixes."
    },
    {
      q: "What is the live win probability for Peshawar Zalmi after the powerplay?",
      a: "With 10 wickets in hand and a high run rate, the live win probability swung to 65% in favor of Peshawar Zalmi."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>{blogTitle} | PakCric Schedule</title>
        <meta name="description" content="Peshawar Zalmi's Babar Azam and Mohammad Haris dominate Islamabad United in the PSL 11 Qualifier 1 Powerplay at Karachi." />
        <meta name="keywords" content="PSL 11 Qualifier, Peshawar Zalmi vs Islamabad United, Babar Azam, Mohammad Haris, Karachi National Stadium, Powerplay score" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 md:pb-20 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">Match Update</span>
            <span className="px-4 py-1.5 bg-white/5 text-white/60 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">PSL 11 Qualifier</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight"
          >
            {blogTitle}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-pak-green/30 bg-pak-green/10 flex items-center justify-center">
                <User className="w-5 h-5 text-pak-green" />
              </div>
              <span className="text-[12px] font-bold text-white/80 uppercase tracking-widest">Zainab Rashid</span>
            </div>
            <div className="flex items-center gap-6 text-white/40 text-[11px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pak-green" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pak-green" />
                4 Min Read
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card-bg border border-card-border rounded-[32px] p-8 md:p-12 mb-10"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/70 leading-relaxed mb-10 first-letter:text-6xl first-letter:font-black first-letter:text-pak-green first-letter:mr-3 first-letter:float-left">
                  The high-stakes Qualifier 1 of PSL 11 is underway at the National Bank Stadium, and Peshawar Zalmi has sent a clear message to Islamabad United: they are here to dominate. After being put in to bat by Shadab Khan, the "Yellow Storm" has unleashed a batting masterclass, racing to 64/0 in just 5.4 overs.
                </p>

                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-pak-green mb-6">
                  <Zap className="w-6 h-6" />
                  The Powerplay Explosion
                </h2>
                <p className="text-white/70 mb-8 leading-loose uppercase text-[13px] tracking-wide bg-white/5 p-6 rounded-2xl border-l-4 border-pak-green">
                  The opening duo of <strong>Babar Azam</strong> and <strong>Mohammad Haris</strong> has neutralized Islamabad's bowling attack with surgical precision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-black/40 border border-white/5 p-6 rounded-2xl group hover:border-pak-green/30 transition-all">
                    <div className="text-pak-green font-black text-xs uppercase tracking-[4px] mb-4">The Aggressor</div>
                    <div className="text-3xl font-black mb-2">Mohammad Haris</div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">31 (14 Balls)*</div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      His incredible strike rate of 221.43 includes 4 boundaries and 2 towering sixes, proving why he is one of the most dangerous young talents in the league.
                    </p>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-6 rounded-2xl group hover:border-pak-green/30 transition-all">
                    <div className="text-pak-green font-black text-xs uppercase tracking-[4px] mb-4">The Anchor</div>
                    <div className="text-3xl font-black mb-2">Babar Azam (C)</div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">33 (20 Balls)*</div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Fresh off his record-breaking season, providing perfect support with a solid 165.0 strike rate. Already found the fence 5 times looking in sublime touch.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-pak-green mb-6">
                  <TrendingUp className="w-6 h-6" />
                  Islamabad United Under Pressure
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Despite a world-class bowling lineup, Islamabad United has struggled to find a breakthrough. The current Run Rate of 11.29 is putting immense pressure on the fielders and captain Shadab Khan.
                </p>

                <div className="overflow-x-auto mb-12">
                  <table className="w-full text-left border-collapse bg-black/20 rounded-2xl overflow-hidden border border-white/5">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/50">Bowler</th>
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/50">Figures</th>
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/50 text-right">Economy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-black text-sm">Imad Wasim</td>
                        <td className="p-4 text-sm text-white/70">2.0 - 0 - 24 - 0</td>
                        <td className="p-4 text-sm font-bold text-pak-green text-right">12.0</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-black text-sm">Richard Gleeson</td>
                        <td className="p-4 text-sm text-white/70">2.0 - 0 - 22 - 0</td>
                        <td className="p-4 text-sm font-bold text-pak-green text-right">11.0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-black text-sm">Salman Mirza</td>
                        <td className="p-4 text-sm text-white/70">1.4 - 0 - 18 - 0</td>
                        <td className="p-4 text-sm font-bold text-pak-green text-right">10.8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-pak-green/10 border border-pak-green/30 p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center gap-8">
                  <div className="bg-pak-green p-4 rounded-2xl shadow-xl shadow-pak-green/20">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Live Win Probability: 65%</h3>
                    <p className="text-white/70 text-sm">
                      With all 10 wickets in hand and the top order firing, the Live Win Probability has already swung heavily in favor of Peshawar Zalmi. If this partnership continues through the powerplay, Islamabad could be staring at a target well north of 200.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-pak-green mb-6">
                  <Shield className="w-6 h-6" />
                  What’s Next?
                </h2>
                <p className="text-white/70 mb-12 leading-relaxed">
                  Islamabad United desperately needs a wicket to stem the flow of runs. Shadab Khan is likely to introduce himself or the tournament's leading wicket-taker, Sufiyan Muqeem, to find a much-needed breakthrough. For Zalmi, the platform is set for the likes of Kusal Mendis and Michael Bracewell to come in and go big in the middle overs.
                </p>
              </div>

              <div className="flex justify-between items-center pt-10 border-t border-white/5">
                <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Blogs
                </Link>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
                  <Share2 className="w-3.5 h-3.5" />
                  Share Article
                </button>
              </div>
            </motion.div>

            {/* Author Section */}
            <AuthorSection authorId={authorId} />

            {/* FAQs */}
            <CommonQuestions faqs={faqData} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Newsletter */}
            <FanClubSection />

            {/* Quick Links */}
            <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8">Match Links</h3>
              <div className="grid grid-cols-1 gap-4">
                <Link to="/schedule" className="p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-pak-green/30 transition-all group">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1 group-hover:text-pak-green">Fixtures</div>
                  <div className="font-bold">PSL 11 Full Schedule</div>
                </Link>
                <Link to="/rankings" className="p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-pak-green/30 transition-all group">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1 group-hover:text-pak-green">Statistics</div>
                  <div className="font-bold">Player ICC Rankings</div>
                </Link>
                <Link to="/squads" className="p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-pak-green/30 transition-all group">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1 group-hover:text-pak-green">Selection</div>
                  <div className="font-bold">PZ vs ISU Squads</div>
                </Link>
              </div>
            </div>

            <InternalLinkSection cols={1} title="Quick Links" />
          </div>
        </div>
      </div>
    </div>
  );
}
