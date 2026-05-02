import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Music, Ticket, Info, Zap, Star, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSL11FinalCeremonyBlog() {
  const blogTitle = "PSL 11 Final Ceremony 2026: Closing Ceremony, Trophy, Tickets & Timing";
  const publishDate = "May 2, 2026";
  const authorId = "ayesha-khan";

  const faqData = [
    {
      q: "What time does the PSL 11 closing ceremony start?",
      a: "The PSL 11 closing ceremony is scheduled to start at 6:30 PM PKT on Sunday, May 3, 2026, at Gaddafi Stadium, Lahore."
    },
    {
      q: "What is the name of the PSL 2026 trophy?",
      a: "The PSL 2026 trophy is named 'Infinity'. It was designed by Hanif Jewellers and features 8 emerald-cut jewels representing the 8 franchises."
    },
    {
      q: "Will there be fans in the stadium for the PSL 1th Final?",
      a: "Yes, after a full season behind closed doors, the Pakistan Prime Minister has approved a full crowd for the Grand Final at Gaddafi Stadium."
    },
    {
      q: "How much is the prize money for the PSL 2026 champions?",
      a: "The champions of PSL 2026 will receive a prize of US$500,000, while the runners-up will get US$300,000."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>PSL 2026 Final Ceremony | Closing Ceremony Details & Tickets | PakCric Schedule</title>
        <meta name="description" content="Complete guide to the PSL 11 Final Ceremony on May 3, 2026 at Gaddafi Stadium. Closing ceremony details, trophy Infinity, ticket prices, and performer info." />
        <meta name="keywords" content="PSL 2026 Final Ceremony, PSL Closing Ceremony 2026, Infinity trophy PSL, PSL Final tickets, Gaddafi Stadium Lahore" />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium Crowd" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 md:pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-500/30">Event Guide</span>
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">PSL 2026 Grand Final</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter uppercase italic"
          >
            The Night Lahore <br />
            <span className="text-pak-green">Comes Alive</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-pak-green/30 bg-pak-green/10 flex items-center justify-center">
                <User className="w-6 h-6 text-pak-green" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[2px]">Written by</span>
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
              className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-14 mb-10 overflow-hidden"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/70 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-black first-letter:text-pak-green first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  <LinkText text="For 38 days, Pakistan Super League 2026 was played in silence. No crowd noise. No chants. No roar when Babar Azam hit a six. Empty stands. Quiet stadiums. But on May 3, 2026, the night of the Grand Final — everything changes." />
                </p>

                <div className="bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 p-8 rounded-3xl mb-12">
                   <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-pak-green mb-6">
                    <LayoutGrid className="w-7 h-7" />
                    Event Details at a Glance
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Event</span>
                      <span className="font-black text-white">HBL PSL 11 — Grand Final</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Date</span>
                      <span className="font-black text-white">Sunday, 3 May 2026</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Gates Open</span>
                      <span className="font-black text-white">5:00 PM PKT</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Closing Ceremony</span>
                      <span className="font-black text-pak-green">6:30 PM PKT</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Match Start</span>
                      <span className="font-black text-white">8:30 PM PKT</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Venue</span>
                      <span className="font-black text-white">Gaddafi Stadium, Lahore</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Trophy className="w-8 h-8 text-pak-green" />
                  The PSL 11 Trophy: Meet "Infinity"
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  <LinkText text="The trophy for the season is named 'Infinity'. Designed by Hanif Jewellers, it is handcrafted by 18 artisans. It features a circular base with eight emerald-cut jewels representing eight teams. It has two golden curved arms rising to hold a crescent and a star along with hundreds of small crystals." />
                </p>
                <p className="text-white/70 leading-relaxed mb-8 font-medium italic border-l-4 border-pak-green pl-6">
                  "This trophy represents not just the past decade of PSL cricket, but the infinite future the tournament is building toward."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                      <h3 className="text-xl font-black uppercase tracking-tight text-pak-green mb-4">Prize Pool</h3>
                      <ul className="space-y-4">
                        <li className="flex justify-between">
                          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Champions</span>
                          <span className="font-black">US$ 500,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Runners-Up</span>
                          <span className="font-black">US$ 300,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Dev Fund</span>
                          <span className="font-black">US$ 200,000</span>
                        </li>
                      </ul>
                   </div>
                   <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                      <h3 className="text-xl font-black uppercase tracking-tight text-pak-green mb-4">Infinity Design</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Handcrafted by 18 master artisans over 3 months. Features real emerald-cut jewels and thousands of micro-crystals symbolizing the sparkle of T20 cricket.
                      </p>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Music className="w-8 h-8 text-pak-green" />
                  The Closing Ceremony: A Night of Magic
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  <LinkText text="This year's event is engraved with a combination of traditional folk music and new digital light events. The closing ceremony will be a blend of Pakistan's rich musical heritage and cutting-edge visual technology — making it a show for the eyes as much as the ears." />
                </p>
                
                <div className="space-y-6 mb-12">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-pak-green/10 flex-shrink-0 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-pak-green" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-sm mb-2">Digital Light Show</h4>
                        <p className="text-white/50 text-sm">Large-scale LED installations and laser displays will transform Gaddafi Stadium into a canvas of colour.</p>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-pak-green/10 flex-shrink-0 flex items-center justify-center">
                        <Star className="w-6 h-6 text-pak-green" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-sm mb-2">Musical Headlines</h4>
                        <p className="text-white/50 text-sm">Ali Zafar is expected to headline, alongside Talha Anjum, Abrar-ul-Haq and Natasha Baig for a live performance of the PSL 2026 anthem.</p>
                      </div>
                   </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Ticket className="w-8 h-8 text-pak-green" />
                  Ticket Prices & Entry
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border-collapse bg-white/5 rounded-3xl overflow-hidden">
                    <thead>
                      <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-[2px] text-white/40">
                        <th className="p-6">Enclosure Category</th>
                        <th className="p-6 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="p-6 font-bold">General Enclosure</td>
                        <td className="p-6 text-right font-black">Rs. 1,500</td>
                      </tr>
                      <tr className="border-b border-white/5 text-pak-green">
                        <td className="p-6 font-bold">Standard</td>
                        <td className="p-6 text-right font-black">Rs. 3,000 – 5,000</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-6 font-bold">Premium</td>
                        <td className="p-6 text-right font-black">Rs. 7,000 – 9,000</td>
                      </tr>
                      <tr>
                        <td className="p-6 font-bold">PCB Gallery (Elite)</td>
                        <td className="p-6 text-right font-black text-PAK-GREEN underline">Rs. 12,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Info className="w-8 h-8 text-pak-green" />
                  How It Happened: The Prime Minister's Approval
                </h2>
                <p className="text-white/70 leading-relaxed mb-10">
                  <LinkText text="Initially the tournament was scheduled behind closed doors to save fuel during the fuel crisis. Then franchise owners campaigned for at least the Final to be opened. PCB chairman Mohsin Naqvi took the request directly to Prime Minister Shehbaz Sharif, who graciously approved the presence of fans for the PSL 11 Final." />
                </p>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-rose-500">
                  <Star className="w-8 h-8" />
                  What This Final Means: The Return of Cricket's Soul
                </h2>
                <div className="space-y-6 text-white/70 leading-relaxed mb-12">
                  <p>
                    <LinkText text="This is the only PSL 2026 match that fans will attend. The only one. Think about that for a moment. Babar Azam scored 588 runs this season — two centuries, a world record for T20 centuries — all in front of empty stands. Usman Khan became the first batter in history to score four PSL centuries — in an empty stadium." />
                  </p>
                  <p>
                    <LinkText text="Tonight, the players finally get their crowd. When Babar Azam walks out to bat in the it will be with a roar that Gaddafi Stadium has been holding back for 38 days. This final is not just cricket. It is the return of cricket's soul — the energy, the noise, the shared emotion of thousands of people watching the same thing at the same time in the same place." />
                  </p>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-pak-green">
                  <Star className="w-8 h-8" />
                  The City Tour & Beyond
                </h2>
                <p className="text-white/70 leading-relaxed mb-10">
                  <LinkText text="The PSL 11-winning team will take the trophy on a city tour after the final. If Peshawar Zalmi win tonight, Peshawar will see the trophy. If Hyderabad Kingsmen win — in their debut season — the inaugural PSL trophy city tour for Hyderabad will be one of the most emotional moments in the city's history." />
                </p>

                <div className="bg-pak-green border border-pak-green/30 p-10 rounded-[40px] text-white mb-12 relative overflow-hidden">
                   <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Timeline: Planning Your Night</h3>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-20 font-black text-white/40 shrink-0">5:00 PM</div>
                        <div className="font-bold">Gates open — Fans begin entering</div>
                      </div>
                      <div className="flex gap-4 text-white">
                        <div className="w-20 font-black shrink-0 underline">6:30 PM</div>
                        <div className="font-black">Closing Ceremony begins</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-20 font-black text-white/40 shrink-0">8:30 PM</div>
                        <div className="font-bold underline">Match Begins — Peshawar Zalmi vs Hyderabad Kingsmen</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-20 font-black text-white/40 shrink-0">12:30 AM</div>
                        <div className="font-bold italic">Trophy presentation ceremony</div>
                      </div>
                   </div>
                </div>

                <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-3xl">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-pak-green" />
                    Deep Dives & Related Stories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/blogs/psl-2026-final-full-campaign-pz-vs-hyk" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Season Summary</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">PSL 2026 Final full campaign blog HYK vs PZ</div>
                    </Link>
                    <Link to="/blogs/babar-azam-6-runs-away-zalmi-record" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Records Watch</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">Babar Azam 6 runs away from Peshawar Zalmi record</div>
                    </Link>
                    <Link to="/psl-11-qualifier-1-match-report-babar-century" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Match Report</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">Babar Azam latest century PSL 2026 Qualifier</div>
                    </Link>
                    <Link to="/usman-khan-psl-2026-season-review-records" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Player Profile</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">Usman Khan PSL 2026 full season review</div>
                    </Link>
                    <Link to="/blogs/hunain-shah-last-over-dramatic-finish-psl-2026" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Viral Moment</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">Hunain Shah last over Eliminator 2</div>
                    </Link>
                    <Link to="/top-5-players-with-most-centuries-in-psl-history-2026" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">All-Time Lists</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">Top 5 PSL centuries all time</div>
                    </Link>
                    <Link to="/blogs/darren-sammy-psl-11-final-invitation-official" className="p-4 bg-bg/50 rounded-2xl border border-white/5 hover:border-pak-green/30 transition-colors group">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">Fan News</div>
                      <div className="text-sm font-bold group-hover:text-pak-green transition-colors">Darren Sammy PSL Final invitation blog</div>
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-16 border-t border-white/5">
                  <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pak-green hover:underline">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to Blogs
                  </Link>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest">
                    <Share2 className="w-3.5 h-3.5" />
                    Share Event News
                  </button>
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
            {/* Newsletter */}
            <FanClubSection />

            {/* Event Summary Card */}
            <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8 text-center">Final Fast Facts</h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2 pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Matchup</span>
                  <span className="text-sm font-black underline">Peshawar Zalmi vs Hyderabad Kingsmen</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Trophy</span>
                  <span className="text-sm font-black text-pak-green">Infinity</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Capacity</span>
                  <span className="text-sm font-black">27,000 (Full)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Streaming</span>
                  <span className="text-sm font-black text-pak-green underline">Tapmad</span>
                </div>
              </div>
            </div>

            <InternalLinkSection cols={1} title="PSL 2026 Analysis" />
          </div>
        </div>
      </div>
    </div>
  );
}
