import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  ArrowLeft,
  Share2,
  TrendingUp,
  Star,
  Target,
  Users,
  ChevronRight,
  Shield,
  Zap,
  MapPin,
  Clock,
  Info
} from 'lucide-react';

const PakVsBanTrophyRevealBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PAK vs BAN 2026 Test Series Trophy Revealed | Shan Masood & Shanto Unveil Trophy | Full Preview</title>
        <meta name="description" content="Pakistan and Bangladesh captains Shan Masood and Najmul Hossain Shanto unveiled the Test series trophy ahead of the 2-match WTC series starting May 8 in Dhaka. Full details and squads." />
        <meta name="keywords" content="Pakistan vs Bangladesh 2026, PAK vs BAN Test Series, Shan Masood, Najmul Hossain Shanto, WTC 2025-27, Pakistan cricket squads" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Latest News
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Series Preview
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 7, 2026
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 text-pak-green" /> Dhaka, Bangladesh
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                The Trophy is Unveiled. <br /><span className="text-pak-green font-black">THE STAGE IS SET.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Shan Masood and Najmul Hossain Shanto unveil the series trophy in Dhaka ahead of the high-stakes ICC World Test Championship clash.
              </p>

              <div className="flex flex-col md:flex-row gap-8 py-10 border-y border-white/10 mt-12 bg-white/[0.02] px-8 rounded-3xl">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">1st Test</div>
                  <div className="text-3xl font-display font-bold text-pak-green">May 8 <span className="text-sm font-normal text-white/40">DHAKA</span></div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10 self-center" />
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-[3px] text-white/40">2nd Test</div>
                  <div className="text-3xl font-display font-bold">May 16 <span className="text-sm font-normal text-white/40">SYLHET</span></div>
                </div>
                <div className="md:ml-auto self-center">
                   <div className="px-6 py-2 bg-pak-green text-black text-[10px] font-black uppercase tracking-widest rounded-full">PAK vs BAN 2026</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Image */}
      <div className="container mx-auto px-4 max-w-4xl">
         <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Cricket Trophy Ceremony" 
            className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl brightness-75 border border-white/10"
         />
      </div>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Introduction */}
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                Dhaka, Bangladesh. The cameras rolled. The two captains stood side by side — one in green, one in red and green — and presented the series trophy to the waiting media and fans.
              </p>
              
              <p>
                <span className="text-white font-bold">Shan Masood</span> — Pakistan's Test captain, the left-handed opener who has rebuilt his team's Test identity over the last two years — held the trophy with the quiet confidence of a man who knows exactly what is at stake.
              </p>

              <div className="bg-pak-green/5 border-l-4 border-pak-green p-8 italic text-lg text-neutral-300 rounded-r-2xl">
                "The prize is set. The stakes are clear. Two Tests. ICC World Test Championship points. National pride. And for Pakistan — the first red-ball assignment for a squad that includes four uncapped players and a brand-new head coach."
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The Trophy: Symbol of a Cricket Rivalry</h2>
              <p>
                The trophy unveiled by Masood and Shanto represents one of Asian cricket's most competitive bilateral rivalries. Bangladesh has grown enormously as a Test nation — they defeated Pakistan 2-0 in their own backyard in 2024, a result that established Bangladesh as genuine contenders.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Pakistan's New Coaching Setup</h2>
              <p>
                The PCB has confirmed the appointment of red-ball coaches for the Bangladesh tour, with former Test captain <span className="text-pak-green font-bold text-2xl uppercase">Sarfaraz Ahmed</span> appointed as head coach.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                 {[
                   { name: 'Sarfaraz Ahmed', role: 'Head Coach', desc: 'Champions Trophy Winner' },
                   { name: 'Asad Shafiq', role: 'Batting Coach', desc: '12 Test Centuries' },
                   { name: 'Umar Gul', role: 'Bowling Coach', desc: '427 Int\'l Wickets' }
                 ].map((c, i) => (
                   <div key={i} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
                      <div className="text-pak-green font-black text-[10px] uppercase tracking-widest mb-1">{c.role}</div>
                      <div className="text-lg font-bold text-white mb-1">{c.name}</div>
                      <div className="text-xs text-white/40">{c.desc}</div>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight text-pak-green">The Uncapped Four: Pakistan's Youth</h2>
              <p>
                The 16-member squad includes four exciting uncapped players: <span className="text-white font-bold">Abdullah Fazal, Amad Butt, Azan Awais, and Muhammad Ghazi Ghori</span>. These young stars, particularly Abdullah Fazal with his impressive domestic record, represent the future of Pakistan's red-ball ambition.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">WTC 2025–27: What's at Stake</h2>
              <p>
                This series carries massive implications for the WTC cycle. Pakistan are currently placed 5th with one win and one loss. A 2-0 Pakistan win here would significantly boost their WTC PCT% and move them into genuine WTC Final contention for 2027.
              </p>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[40px] overflow-hidden my-12">
                  <div className="p-8 border-b border-white/10 bg-pak-green/5 flex items-center justify-between">
                     <h3 className="text-xl font-display font-bold uppercase tracking-tight">Series Schedule</h3>
                     <span className="text-xs font-black uppercase tracking-[3px] text-pak-green italic">WTC Points Cycle</span>
                  </div>
                  <div className="p-8 space-y-8">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-white/5">
                        <div className="space-y-1">
                           <div className="text-pak-green font-bold">1st Test</div>
                           <div className="text-sm text-white/60">May 8 - May 12, 2026</div>
                        </div>
                        <div className="text-right">
                           <div className="text-white font-bold">Dhaka</div>
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">Sher-e-Bangla Stadium</div>
                        </div>
                     </div>
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
                        <div className="space-y-1">
                           <div className="text-pak-green font-bold">2nd Test</div>
                           <div className="text-sm text-white/60">May 16 - May 20, 2026</div>
                        </div>
                        <div className="text-right">
                           <div className="text-white font-bold">Sylhet</div>
                           <div className="text-[10px] text-white/40 uppercase tracking-widest">Sylhet Int'l Stadium</div>
                        </div>
                     </div>
                  </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">Series Prediction</h2>
              <p>
                Pakistan are the stronger team on paper, but <span className="text-white font-bold">Bangladesh at home</span> is a completely different proposition. Their spinners will exploit Dhaka's turning surface. The emotional energy of the home crowd will be significant.
              </p>
              <p className="text-xl font-bold text-pak-green italic">
                Prediction: Pakistan to win 1-0 — assuming their batting survives the Dhaka trial by spin.
              </p>
            </div>

            {/* Awards & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 bg-pak-green/5 border border-pak-green/10 rounded-[40px] space-y-4 group transition-all hover:bg-pak-green/10">
                  <Shield className="w-10 h-10 text-pak-green" />
                  <h4 className="text-2xl font-display font-bold text-white">WTC Stakes</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Pakistan sits at 5th place. A clean sweep would flip the points table percentages drastically in their favor for 2027 qualification.
                  </p>
               </div>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-4 group transition-all hover:bg-white/[0.05]">
                  <RotateCw className="w-10 h-10 text-emerald-500" />
                  <h4 className="text-2xl font-display font-bold text-white">Coach Era</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Sarfaraz Ahmed's first assignment as red-ball head coach. His tactical experience in subcontinent conditions is a major advantage.
                  </p>
               </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 text-center md:text-left">Continue Reading</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-vs-bangladesh-wtc-analysis-2025-2027" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div className="space-y-1">
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">In-Depth Analysis</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">WTC Scenarios 2027</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
                  <Link to="/news/shaheen-shah-afridi-bangladesh-interview-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div className="space-y-1">
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">Exclusive Interview</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">Shaheen: Pace is Identity</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Share */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-3xl bg-pak-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-pak-green/40 group relative">
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// Reuse icons from lucide
const RotateCw = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
);

export default PakVsBanTrophyRevealBlog;
