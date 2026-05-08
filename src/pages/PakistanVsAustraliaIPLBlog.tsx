import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  Share2,
  TrendingDown,
  Clock,
  MapPin,
  Newspaper,
  ShieldAlert,
  DollarSign,
  Gamepad2,
  ChevronRight,
  Info
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const PakistanVsAustraliaIPLBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>IPL First, Pakistan Later — Australian Players to Skip ODI Series for IPL Commitments | PakCric News</title>
        <meta name="description" content="Cricket Australia confirms top stars like Pat Cummins, Mitchell Starc, and Josh Hazlewood will miss the Pakistan ODI series starting May 30 to honor IPL 2026 commitments." />
        <meta name="keywords" content="Pakistan vs Australia 2026, Australia players skip Pakistan tour, IPL vs International Cricket, Pat Cummins, Mitchell Starc, PCB news" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 text-amber-500/10">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-current blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Dashboard
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-amber-500/20 text-amber-500 border border-amber-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Breaking News
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-amber-500" /> May 7, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                IPL First, <br /><span className="text-amber-500">PAKISTAN LATER.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Cricket Australia confirms several top stars will skip the upcoming ODI series in Pakistan to honor their IPL 2026 playoff commitments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center gap-4">
                    <ShieldAlert className="w-8 h-8 text-amber-500" />
                    <div>
                       <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Series Status</div>
                       <div className="text-sm font-bold">Starts May 30, Rawalpindi</div>
                    </div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center gap-4">
                    <DollarSign className="w-8 h-8 text-green-500" />
                    <div>
                       <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Key Conflict</div>
                       <div className="text-sm font-bold">IPL Playoff & Final Window</div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p className="text-2xl text-white font-medium italic border-l-4 border-amber-500 pl-8 py-2">
                "Cricket Australia has confirmed that several of its top stars will not be available for the upcoming three-match ODI series in Pakistan, choosing to honour their IPL franchise commitments instead."
              </p>

              <p>
                The Pakistan Cricket Board (PCB) has officially confirmed that Australia's men's cricket team will tour Pakistan for a three-match ODI series starting <span className="text-white font-bold">May 30, 2026</span>. The fixtures are scheduled for May 30 in Rawalpindi, followed by two matches at Lahore's iconic Gaddafi Stadium on June 2 and June 4. The Australian squad is set to arrive in Islamabad on May 23.
              </p>

              <p>
                However, the series comes with a significant catch — it runs directly into the <span className="text-amber-500 font-bold uppercase tracking-tight">IPL 2026 playoff window</span>.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8">The IPL Clash</h2>
              <p>
                The IPL 2026 regular season wraps up on May 24, with playoffs beginning May 27 and the grand final set for <span className="text-white font-bold">May 31</span> at the Narendra Modi Stadium in Ahmedabad — just one day after Pakistan and Australia play the first ODI in Rawalpindi.
              </p>
              <p>
                Cricket Australia has made its stance clear: players involved in the IPL will be allowed to fulfil their franchise commitments and will not be recalled early for the Pakistan series.
              </p>

              <div className="bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-white/10 rounded-[40px] p-10 space-y-8">
                 <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                    <ShieldAlert className="w-6 h-6 text-red-500" />
                    Stars Expected to Miss Out
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <span className="text-amber-500 font-bold">Pat Cummins</span>
                       <p className="text-sm text-white/50">Leading SRH. IPL remains immediate priority after returning from back injury.</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-amber-500 font-bold">Josh Hazlewood</span>
                       <p className="text-sm text-white/50">Part of RCB's setup. Expected to stay back for playoff campaign.</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-amber-500 font-bold">Mitchell Starc</span>
                       <p className="text-sm text-white/50">Committed to Delhi Capitals through the tournament playoffs.</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-amber-500 font-bold">Travis Head</span>
                       <p className="text-sm text-white/50">Likely to be rested with an eye on Australia's Test series in August.</p>
                    </div>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8">Who Could Still Make It?</h2>
              <p>
                Players whose IPL franchises fail to reach the playoffs could travel to Pakistan in time for the opening ODI. <span className="text-white font-bold">Mitch Marsh and Josh Inglis</span> (LSG) or <span className="text-white font-bold">Cameron Green</span> (KKR) could realistically land in Rawalpindi early if their teams are knocked out.
              </p>
              <p>
                Meanwhile, <span className="text-white font-bold">Alex Carey, Adam Zampa and Marnus Labuschagne</span> are not part of the IPL this year and are expected to be available for the full series.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 text-pak-green">Schedule at a Glance</h2>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-white/40 uppercase text-[10px] tracking-widest border-b border-white/5 pb-4">
                          <th className="pb-4">Match</th>
                          <th className="pb-4">Date</th>
                          <th className="pb-4">Venue</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       <tr>
                          <td className="py-4 font-bold text-amber-500">1st ODI</td>
                          <td className="py-4 text-white/60">May 30, 2026</td>
                          <td className="py-4 text-white/60 text-sm">Rawalpindi Cricket Stadium</td>
                       </tr>
                       <tr>
                          <td className="py-4 font-bold text-amber-500">2nd ODI</td>
                          <td className="py-4 text-white/60">June 2, 2026</td>
                          <td className="py-4 text-white/60 text-sm">Gaddafi Stadium, Lahore</td>
                       </tr>
                       <tr>
                          <td className="py-4 font-bold text-amber-500">3rd ODI</td>
                          <td className="py-4 text-white/60">June 4, 2026</td>
                          <td className="py-4 text-white/60 text-sm">Gaddafi Stadium, Lahore</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <p className="text-[10px] uppercase font-black tracking-widest text-white/20 pt-4">Toss: 4:00 PM PKT | Start: 4:30 PM PKT</p>
            </div>

            {/* Quote Section */}
            <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-12 relative overflow-hidden group">
               <TrendingDown className="absolute -bottom-10 -right-10 w-40 h-40 text-amber-500/10 group-hover:scale-110 transition-transform duration-700" />
               <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-display font-bold uppercase italic tracking-tight">The Prestige Debate</h3>
                  <p className="text-white/60 leading-relaxed text-lg max-w-2xl">
                     While a depleted Australian side may seem like an easier proposition for Pakistan, it also raises questions about the prestige of the contest. Fans in Rawalpindi and Lahore deserve to see the best players on the park.
                  </p>
               </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-amber-500 mb-8">Related News</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/pakistan-vs-australia-2026-schedule" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <span className="text-sm font-bold uppercase tracking-tight group-hover:text-amber-500 transition-colors">Full Australia Tour Schedule</span>
                     <ChevronRight className="w-4 h-4 text-amber-500" />
                  </Link>
                  <Link to="/news/shaheen-shah-afridi-bangladesh-interview-2026" className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <span className="text-sm font-bold uppercase tracking-tight group-hover:text-amber-500 transition-colors">Shaheen Afridi Interview</span>
                     <ChevronRight className="w-4 h-4 text-amber-500" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="IPL First, Pakistan Later: Australian Players to Skip ODI Series" 
        summary="Australian stars favor IPL playoffs over Pakistan tour." 
      />
    </div>
  );
};

export default PakistanVsAustraliaIPLBlog;
