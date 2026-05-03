import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Star, TrendingUp, Zap, Users, Shield, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function BabarAzamWorldODIXIBlog() {
  const blogTitle = "Babar Azam Picks His World ODI XI — No Virat Kohli, No Rohit Sharma, And He Left Himself Out Too!";
  const publishDate = "May 3, 2026";
  const authorId = "zainab-rashid";

  const faqData = [
    {
      q: "Did Babar Azam pick any Indian players in his World ODI XI?",
      a: "No, shockingly, Babar Azam did not include any Indian players in his XI, leaving out the likes of Virat Kohli, Rohit Sharma, and Jasprit Bumrah."
    },
    {
      q: "Is Babar Azam in his own World ODI XI?",
      a: "No, Babar Azam placed himself as the 12th man in his own World ODI XI selection during the Zalmi TV podcast."
    },
    {
      q: "Who were the Pakistani players in Babar Azam's World XI?",
      a: "The playing XI included Mohammad Rizwan and Shaheen Shah Afridi from Pakistan, with Babar himself as the 12th man."
    }
  ];

  const teamXI = [
    { pos: 1, player: 'Mitchell Marsh', country: 'Australia', role: 'Right-hand opener / Allrounder' },
    { pos: 2, player: 'Travis Head', country: 'Australia', role: 'Left-hand opener / Aggressive batter' },
    { pos: 3, player: 'Aiden Markram', country: 'South Africa', role: 'Right-hand No.3 / Versatile' },
    { pos: 4, player: 'Mohammad Rizwan', country: 'Pakistan', role: 'Right-hand batter / Wicketkeeper' },
    { pos: 5, player: 'Rachin Ravindra', country: 'New Zealand', role: 'Left-hand middle-order / Allrounder' },
    { pos: 6, player: 'Harry Brook', country: 'England', role: 'Right-hand aggressive batter' },
    { pos: 7, player: 'Mitchell Santner', country: 'New Zealand', role: 'Left-arm spin allrounder' },
    { pos: 8, player: 'Rashid Khan', country: 'Afghanistan', role: 'Leg-spin allrounder' },
    { pos: 9, player: 'Jofra Archer', country: 'England', role: 'Right-arm fast bowler' },
    { pos: 10, player: 'Shaheen Shah Afridi', country: 'Pakistan', role: 'Left-arm fast bowler' },
    { pos: 11, player: 'Kagiso Rabada', country: 'South Africa', role: 'Right-arm fast bowler' },
    { pos: '12th', player: 'Babar Azam', country: 'Pakistan', role: 'Reserve / 12th Man' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>Babar Azam World ODI XI 2026 | No Kohli, No Rohit | Zalmi TV Podcast</title>
        <meta name="description" content="On the day of PSL 2026 Final, Babar Azam appeared on Zalmi TV's podcast and selected his World Best ODI XI — no Virat Kohli, no Rohit Sharma, no Jasprit Bumrah." />
        <meta name="keywords" content="Babar Azam World ODI XI, Babar Azam podcast, Zalmi TV, Virat Kohli omission, Rohit Sharma omission, Shaheen Afridi, Mohammad Rizwan" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[500px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">Trending Feature</span>
            <span className="px-4 py-1.5 bg-yellow-500/10 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-500/20">Zalmi TV Podcast</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter"
          >
            {blogTitle}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-pak-green/30 bg-pak-green/10 flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab" alt="Zainab Rashid" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Analyzed by</span>
                <span className="text-[12px] md:text-[14px] font-black text-white uppercase tracking-widest">Zainab Rashid</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" />
                12 Min Read
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
              className="bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-14 mb-10 overflow-hidden shadow-2xl"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 md:mb-12 first-letter:text-5xl md:first-letter:text-7xl first-letter:font-black first-letter:text-pak-green first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  <LinkText text="May 3, 2026. PSL Final day. Gaddafi Stadium, Lahore, is about to host the most watched cricket match in Pakistan this year. The whole country is talking about Peshawar Zalmi vs Hyderabad Kingsmen. Babar Azam — 588 runs in the season, two centuries, one world record — is hours away from playing the biggest club game of his career as captain." />
                </p>
                
                <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 leading-relaxed">
                  And yet, earlier today, Babar Azam sat down with Zalmi TV for a pre-Final video session and agreed to pick his **World Best ODI XI**. What followed was one of the most talked-about cricket selections of the week — not because of who Babar picked, but because of who he left out.
                </p>

                <div className="bg-red-500/10 border border-red-500/20 p-6 md:p-8 rounded-2xl md:rounded-3xl mb-10 md:mb-12 flex flex-col gap-4">
                  <h3 className="text-lg md:text-xl font-black text-red-500 uppercase tracking-widest flex items-center gap-3">
                    <Shield className="w-5 h-5 md:w-6 md:h-6" />
                    The Major Omissions
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <li className="flex items-center gap-2 md:gap-3 text-white/80 font-bold bg-white/5 py-3 px-4 md:px-5 rounded-xl md:rounded-2xl border border-white/5 text-xs md:text-base">
                      <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" /> No Virat Kohli
                    </li>
                    <li className="flex items-center gap-2 md:gap-3 text-white/80 font-bold bg-white/5 py-3 px-4 md:px-5 rounded-xl md:rounded-2xl border border-white/5 text-xs md:text-base">
                      <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" /> No Rohit Sharma
                    </li>
                    <li className="flex items-center gap-2 md:gap-3 text-white/80 font-bold bg-white/5 py-3 px-4 md:px-5 rounded-xl md:rounded-2xl border border-white/5 text-xs md:text-base">
                      <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" /> No Jasprit Bumrah
                    </li>
                    <li className="flex items-center gap-2 md:gap-3 text-white/80 font-bold bg-white/5 py-3 px-4 md:px-5 rounded-xl md:rounded-2xl border border-white/5 text-xs md:text-base">
                      <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" /> Babar as 12th Man
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                  <Trophy className="w-6 h-6 md:w-8 md:h-8 text-pak-green" />
                  Babar Azam's World ODI XI
                </h2>
                
                <div className="overflow-x-auto bg-black/40 border border-white/5 rounded-2xl md:rounded-3xl p-4 md:p-8 mb-10 md:mb-12 shadow-inner">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-white/10 text-[11px] font-black uppercase tracking-[2px] text-white/40">
                        <th className="py-4 px-2">#</th>
                        <th className="py-4 px-2">Player</th>
                        <th className="py-4 px-2">Country</th>
                        <th className="py-4 px-2 text-right">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamXI.map((player) => (
                        <tr key={player.pos} className={`border-b border-white/5 hover:bg-white/5 transition-colors group ${player.pos === '12th' ? 'bg-white/5' : ''}`}>
                          <td className="py-4 px-2 font-black text-pak-green">{player.pos}</td>
                          <td className="py-4 px-2 font-bold text-[14px] text-white group-hover:text-pak-green transition-colors">{player.player}</td>
                          <td className="py-4 px-2 text-[12px] font-bold text-white/60 uppercase">{player.country}</td>
                          <td className="py-4 px-2 text-right text-[11px] text-white/40">{player.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 bg-gradient-to-r from-red-500 to-pak-green bg-clip-text text-transparent">
                  The Biggest Bombshells: Snubs & Snubs
                </h2>
                
                <h3 className="text-2xl font-black mb-4">💣 No Virat Kohli</h3>
                <p className="text-white/70 mb-8 leading-relaxed italic border-l-4 border-red-500 pl-6">
                  "This is the omission that set cricket Twitter ablaze within minutes of the video dropping. Babar Azam left out the likes of Rohit Sharma and Virat Kohli, the two greatest white-ball cricketers of the modern generation, as he picked Mitchell Marsh at the top of the order and then placed Aiden Markram in the No.3 position."
                </p>

                <h3 className="text-2xl font-black mb-4">💣 No Rohit Sharma</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Babar Azam did not pick two of the greatest ODI cricketers of the modern generation, seemingly adhering to a self-imposed limit of two players per country, or perhaps due to the intense rivalry. Rohit Sharma — with over 10,000 ODI runs — is completely absent.
                </p>

                <h3 className="text-2xl font-black mb-4">💣 No Jasprit Bumrah</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Babar also snubbed Jasprit Bumrah and instead picked Shaheen Shah Afridi to be paired alongside Kagiso Rabada and Jofra Archer. Bumrah, the T20 World Cup Player of the Tournament, is arguably the best ODI bowler globally, making this a highly debated local preference.
                </p>

                <div className="bg-pak-green/10 border border-pak-green/20 p-10 rounded-[40px] mb-12 relative overflow-hidden group">
                  <Star className="absolute -top-10 -right-10 w-40 h-40 text-pak-green/10 group-hover:rotate-45 transition-transform duration-1000" />
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Interpretation: Babar as 12th Man</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-pak-green text-[10px] font-black underline mb-3 uppercase tracking-widest">Interpretation 1</div>
                      <p className="text-sm text-white/60 italic leading-relaxed">
                        **Pure Humility:** Babar is a player known for his modesty. Picking himself in a World XI feels self-aggrandising to him. He may simply be too humble to place himself among the world's best 11 right now.
                      </p>
                    </div>
                    <div>
                      <div className="text-pak-green text-[10px] font-black underline mb-3 uppercase tracking-widest">Interpretation 2</div>
                      <p className="text-sm text-white/60 italic leading-relaxed">
                        **Genuine Self-Doubt:** Babar has had a complex recent international career. Perhaps, when asked to pick the world's best 11, he genuinely did not feel he deserved to be there after a shaky T20 WC 2026 campaign.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Detailed Player Analysis</h2>
                <div className="space-y-10">
                   <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-pak-green/20 rounded-2xl flex items-center justify-center font-black text-pak-green">01</div>
                        <h4 className="text-xl font-bold uppercase">Mitchell Marsh & Travis Head</h4>
                      </div>
                      <p className="text-white/60 leading-relaxed">
                        The Australian opening pair is proven and destructive. Babar clearly values their ability to dominate the powerplay. Head, specifically, is a nightmare for any bowling attack after his 2023 World Cup heroics.
                      </p>
                   </div>
                   <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-pak-green/20 rounded-2xl flex items-center justify-center font-black text-pak-green">03</div>
                        <h4 className="text-xl font-bold uppercase">Aiden Markram (SA)</h4>
                      </div>
                      <p className="text-white/60 leading-relaxed">
                        The decision to place Markram at No.3 over Kohli or Babar himself is a bold call. Markram is versatile and technically sound, but this will surely raise eyebrows across the cricket world.
                      </p>
                   </div>
                   <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-pak-green/20 rounded-2xl flex items-center justify-center font-black text-pak-green">08</div>
                        <h4 className="text-xl font-bold uppercase">Rashid Khan (AFG)</h4>
                      </div>
                      <p className="text-white/60 leading-relaxed">
                        There is no debate here. Rashid Khan is an automatic selection in any format. His leg-spin and lower-order contributions are invaluable.
                      </p>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mt-16 mb-8">Summary: Babar's World XI Rated</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white/50 uppercase text-[10px]">Mitchell Marsh</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white/50 uppercase text-[10px]">Travis Head</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white/50 uppercase text-[10px]">Aiden Markram</span>
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white/50 uppercase text-[10px]">Rashid Khan</span>
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      </div>
                   </div>
                   <div className="p-6 bg-pak-green border border-pak-green/30 rounded-2xl text-white flex flex-col justify-center text-center">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Overall Rating</div>
                      <div className="text-5xl font-black mb-2">08/10</div>
                      <div className="text-[12px] font-extrabold uppercase tracking-widest">A Creative Global Powerhouse</div>
                   </div>
                </div>

                <div className="flex justify-between items-center pt-16 border-t border-white/5">
                  <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Blogs
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
                    <Share2 className="w-3.5 h-3.5" />
                    Share Team
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Author Section */}
            <AuthorSection authorId={authorId} />

            {/* Internal Links Suggested by User */}
            <div className="mb-10">
              <h3 className="text-xl font-black uppercase tracking-widest text-pak-green mb-6 border-l-4 border-pak-green pl-4">Read Further</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold uppercase text-[11px] tracking-widest">
                <Link to="/babar-azam-all-psl-centuries-list-2026-details" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Babar Azam PSL Centuries Complete List
                </Link>
                <Link to="/blogs/babar-azam-6-runs-away-zalmi-record" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Babar Azam 6 Runs from Zalmi Record
                </Link>
                <Link to="/blogs/psl-2026-final-full-campaign-pz-vs-hyk" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  PSL 2026 Final Campaign Blog
                </Link>
                <Link to="/top-5-players-with-most-centuries-in-psl-history-2026" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Most Centuries in PSL History
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
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8">External Sources</h3>
              <div className="space-y-4">
                <a href="https://cricketaddictor.com/cricket-news/babar-azam-ignores-virat-kohli-and-rohit-sharma-as-star-batter-picks-odi-world-xi-446064/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  CricketAddictor Report <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
                <a href="https://www.youtube.com/@ZalmiTV" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Zalmi TV Podcast <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
                <a href="https://www.espncricinfo.com/cricketers/babar-azam-348144" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Babar Stats Profile <ArrowUpRight className="w-4 h-4 text-pak-green" />
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
