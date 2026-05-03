import { Calendar, Clock, User, ArrowLeft, Share2, Trophy, Music, Ticket, Info, Zap, Star, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';
import AuthorSection from '../components/AuthorSection';
import FanClubSection from '../components/FanClubSection';
import InternalLinkSection from '../components/InternalLinkSection';
import CommonQuestions from '../components/CommonQuestions';

export default function PSL11FinalCeremonyBlog() {
  const blogTitle = "PSL 11 Closing Ceremony: Atif Aslam, Aima Baig, Arif Lohar, Ali Azmat, Sabri Sisters & Daniya Kanwal — Pakistan's Biggest Night of Cricket and Music";
  const publishDate = "May 3, 2026";
  const authorId = "omar-farooq";

  const faqData = [
    {
      q: "What time does the PSL 11 closing ceremony start?",
      a: "The PSL 11 closing ceremony starts at 6:30 PM PKT on Sunday, May 3, 2026."
    },
    {
      q: "Who are the headlining performers for the PSL 11 Final?",
      a: "The confirmed performers are Atif Aslam, Aima Baig, Arif Lohar, Ali Azmat, Sabri Sisters, and Daniya Kanwal."
    },
    {
      q: "What is the name of the PSL 2026 trophy?",
      a: "The PSL 2026 trophy is named 'Infinity', designed by Hanif Jewellers and featuring emerald-cut jewels."
    },
    {
      q: "Are fans allowed in the stadium for the PSL 2026 Final?",
      a: "Yes, the gates open at 4:00 PM PKT for fans to witness the first match with an audience this season."
    }
  ];

  const performers = [
    { name: 'Atif Aslam', role: 'Headline Act / Pop Icon', genre: 'Pop / Sufi' },
    { name: 'Aima Baig', role: 'Youth Sensation', genre: 'Pop / Indie' },
    { name: 'Arif Lohar', role: 'Soul of Punjab', genre: 'Folk / Dhol' },
    { name: 'Ali Azmat', role: 'Rock Legend', genre: 'Rock / Alternative' },
    { name: 'Sabri Sisters', role: 'Spiritual Voice', genre: 'Qawwali / Sufi' },
    { name: 'Daniya Kanwal', role: 'Rising Star', genre: 'Classical / Fusion' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>PSL 2026 Closing Ceremony | Atif Aslam, Aima Baig, Ali Azmat | Full Guide</title>
        <meta name="description" content="PSL 11 Closing Ceremony on May 3, 2026 at Gaddafi Stadium Lahore — confirmed performers, gates opening time, and full event guide." />
      </Helmet>

      {/* Hero Header */}
      <div className="relative h-[500px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium Crowd" 
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
            <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green rounded-full text-[10px] font-black uppercase tracking-widest border border-pak-green/30">Official Gala</span>
            <span className="px-4 py-1.5 bg-yellow-500/10 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-500/20">PSL 11 Final</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter"
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
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Omar" alt="Omar Farooq" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[2px]">News Lead</span>
                <span className="text-[12px] md:text-[14px] font-black text-white uppercase tracking-widest">Omar Farooq</span>
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
                  <LinkText text="For 38 days, PSL 2026 was played in empty stadiums. No crowd noise. No chants. No roar when Babar Azam hit a six. No eruption when Hunain Shah bowled the perfect yorker. Just cricket — brilliant, record-breaking cricket — in complete silence." />
                </p>
                
                <p className="text-base md:text-lg text-white/60 mb-8 md:mb-10 leading-relaxed italic">
                  Tonight, May 3, 2026, all of that changes. For the first time all season, fans will fill the stands of Gaddafi Stadium, Lahore.
                </p>

                <div className="bg-gradient-to-br from-pak-green/20 to-transparent border border-pak-green/30 p-6 md:p-8 rounded-2xl md:rounded-3xl mb-10 md:mb-12">
                   <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-pak-green mb-6">
                    <Zap className="w-6 h-6 md:w-7 md:h-7" />
                    Official Event Timeline
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-6">
                    <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-xs md:text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Gates Open</span>
                      <span className="font-black text-white underline text-right">4:00 PM PKT</span>
                    </div>
                    <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-xs md:text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Ceremony Starts</span>
                      <span className="font-black text-pak-green text-right">6:30 PM PKT</span>
                    </div>
                    <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-xs md:text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Match Start</span>
                      <span className="font-black text-white text-right">8:30 PM PKT</span>
                    </div>
                    <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-xs md:text-sm">
                      <span className="text-white/40 font-bold uppercase tracking-widest">Theme</span>
                      <span className="font-black text-white underline text-right">#NewEra</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                  <Music className="w-6 h-6 md:w-8 md:h-8 text-pak-green" />
                  The Confirmed Performers: Complete Lineup
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 md:mb-12">
                  {performers.map((artist) => (
                    <div key={artist.name} className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl group hover:border-pak-green transition-all">
                      <div className="text-[9px] md:text-[10px] font-black text-pak-green uppercase tracking-widest mb-1">{artist.role}</div>
                      <div className="text-[16px] md:text-[18px] font-black group-hover:text-pak-green transition-colors mb-2">{artist.name}</div>
                      <div className="text-[10px] md:text-[11px] font-bold text-white/40 uppercase">{artist.genre}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-pak-green" />
                  1. Atif Aslam — The King of Pakistani Music
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  There is no name bigger in Pakistani music than Atif Aslam. For the PSL 11 Closing Ceremony, Atif is the headline act. Expect him to sing his greatest hits like 'Tajdar-e-Haram', 'Aadat', and possibly a special PSL-themed performance for the packed Gaddafi Stadium.
                </p>

                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-pak-green" />
                  2. Aima Baig — The Voice of the Young Generation
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Aima represents the modern energy of Pakistan. Having delivered chart-topping hits in Coke Studio, she bridges the gap between traditional roots and modern pop.
                </p>

                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-pak-green" />
                  3. Arif Lohar — The Soul of Punjab
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed italic border-l-4 border-pak-green pl-6">
                  "Arif Lohar's presence brings authenticity, depth, and a connection to Pakistan's musical roots. When he takes out his chimta, Lahore comes alive."
                </p>

                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-pak-green" />
                  4. Ali Azmat — The Rock Legend
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  The former Junoon frontman will bring the fire to the ceremony. Expect 'Garaj Baras' to echo through the stadium as the high-octane rock set prepares the crowd for the Final battle.
                </p>

                <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl mb-12">
                   <h3 className="text-xl font-black text-red-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    Security & Ticket Info
                  </h3>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    With a full crowd approved, security will be tight. Fans are urged to arrive by **6:30 PM** to avoid the rush and witness the full ceremony.
                  </p>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="text-white/40 font-bold uppercase text-[10px]">General Enclosure</span>
                        <span className="font-black">Rs. 1,500</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="text-white/40 font-bold uppercase text-[10px]">Standard</span>
                        <span className="font-black">Rs. 3,000 – 5,000</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="text-white/40 font-bold uppercase text-[10px]">Premium</span>
                        <span className="font-black">Rs. 7,000 – 9,000</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="text-white/40 font-bold uppercase text-[10px]">PCB Elite Gallery</span>
                        <span className="font-black text-pak-green">Rs. 12,000</span>
                     </div>
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <Trophy className="w-8 h-8 text-pak-green" />
                  The "Infinity" Trophy
                </h2>
                <p className="text-white/70 leading-relaxed mb-10">
                  Whoever wins the Final between Peshawar Zalmi and Hyderabad Kingsmen will lift the **PSL 11 Trophy — "Infinity"**. Handcrafted by 18 artisans over months, it features emerald-cut jewels representing the franchises and a design that symbolizes the infinite growth of Pakistan cricket.
                </p>

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

            {/* Internal Links Suggested by User */}
            <div className="mb-10">
              <h3 className="text-xl font-black uppercase tracking-widest text-pak-green mb-6 border-l-4 border-pak-green pl-4">Beyond the Ceremony</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold uppercase text-[11px] tracking-widest">
                <Link to="/blogs/psl-2026-final-full-campaign-pz-vs-hyk" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  PSL 11 Final Campaign Review
                </Link>
                <Link to="/blogs/babar-azam-6-runs-away-zalmi-record" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Babar Azam 6 Runs from Zalmi Record
                </Link>
                <Link to="/blogs/hyderabad-kingsmen-psl-2026-journey-review" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Hyderabad Kingsmen Full Season 2026
                </Link>
                <Link to="/blogs/hunain-shah-last-over-dramatic-finish-psl-2026" className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green transition-all hover:bg-pak-green/5">
                  Hunain Shah Last Over Analysis
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
              <h3 className="text-lg font-black uppercase tracking-widest text-pak-green mb-8">Official Links</h3>
              <div className="space-y-4">
                <a href="https://www.pcb.com.pk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  PCB Official Site <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
                <a href="https://psl-t20.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  PSL Official <ArrowUpRight className="w-4 h-4 text-pak-green" />
                </a>
                <a href="https://www.tapmad.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Stream Live <ArrowUpRight className="w-4 h-4 text-pak-green" />
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
