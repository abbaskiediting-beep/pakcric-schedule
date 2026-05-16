import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  BookOpen,
  Globe,
  Gavel,
  Shield,
  TrendingUp,
  AlertTriangle,
  History,
  Building2,
  ChevronRight,
  Target,
  Trophy,
  Users
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const NaqviICCBoardMeetingBlog = () => {
  const timeline = [
    { date: 'Sept 2025', event: "Suryakumar Yadav refuses trophy from Naqvi at Asia Cup final. BCCI-PCB relations collapse." },
    { date: 'Feb 7, 2026', event: "Pakistan announces boycott of India match at T20 World Cup." },
    { date: 'Feb 8, 2026', event: "ICC Deputy Chairman Imran Khawaja flies to Lahore. Meets Naqvi and BCB President at Gaddafi Stadium for emergency talks." },
    { date: 'Feb 15, 2026', event: "India vs Pakistan T20 World Cup match — played despite the drama." },
    { date: 'May 11, 2026', event: "Naqvi visits Dhaka. Pakistan and Bangladesh form ICC alliance." },
    { date: 'May 16, 2026', event: "News breaks — Naqvi invited to ICC Board meeting in Ahmedabad May 30-31." },
    { date: 'May 21, 2026', event: "CEC meeting — virtual." },
    { date: 'May 30-31, 2026', event: "ICC Board meeting — Ahmedabad, India." },
    { date: 'May 31, 2026', event: "IPL 2026 Final — Narendra Modi Stadium, Ahmedabad." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>PCB Chief Invited to ICC Board Meeting India Ahmedabad May 2026 | PakCric</title>
        <meta name="description" content="PCB Chairman Mohsin Naqvi invited to ICC Board meeting and IPL final in Ahmedabad May 30-31. PM Shehbaz will decide if Naqvi crosses the border." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pak-green/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Archive
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Globe className="w-3 h-3" /> ICC Governance
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-pak-green" /> May 16, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                PCB Chief <br />
                <span className="text-pak-green">Invited to.</span> <br />
                India Test.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Mohsin Naqvi has received a historic invitation for the ICC Board meeting in Ahmedabad—but will the PM give him the green light?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Location</div>
                    <div className="text-lg font-display font-bold text-white uppercase italic">Ahmedabad, India</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Dates</div>
                    <div className="text-lg font-display font-bold text-pak-green uppercase">May 30-31, 2026</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Key Event</div>
                    <div className="text-lg font-display font-bold text-white uppercase italic">ICC Board/IPL Final</div>
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
              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight">The Invitation</h2>
              <p>
                Pakistan Cricket Board (PCB) Chairman Mohsin Naqvi has received a formal invitation to attend the International Cricket Council (ICC) Board meeting and the Indian Premier League (IPL) 2026 final, both scheduled for Ahmedabad later this month.
              </p>
              
              <div className="p-8 bg-[#0A1A0F] border border-pak-green/20 rounded-[40px] border-l-4 border-l-pak-green">
                <p className="text-lg font-medium text-white italic leading-relaxed">
                  "The CEC meeting is scheduled to take place virtually on May 21, while the in-person Board meeting is set for May 30 and 31 in Ahmedabad. The IPL 2026 final is also due to be played on May 31 at the Narendra Modi Stadium."
                </p>
              </div>

              <p>
                The invitation comes at a time when Pakistan-India relations are at their most strained in years. Naqvi, who also serves as Pakistan's Interior Minister, has forwarded the invitation to Prime Minister Shehbaz Sharif for final approval.
              </p>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight border-t border-white/10 pt-16">The Pakistan-Bangladesh Bloc</h2>
              <p>
                Before traveling to Bangladesh for the current Test series, Naqvi visited Dhaka for high-level meetings. The outcome was a strong strategic alliance at the ICC level.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px]">
                    <Target className="w-8 h-8 text-pak-green mb-4" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">WTC Protection</h4>
                    <p className="text-xs text-white/50 leading-relaxed">Both boards have agreed to outright reject any move to create a two-tier system in the World Test Championship.</p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px]">
                    <TrendingUp className="w-8 h-8 text-pak-green mb-4" />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Revenue Rights</h4>
                    <p className="text-xs text-white/50 leading-relaxed">Pushing for greater balance in the FTP cycle (2028-31) to challenge Big Three dominance.</p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight border-t border-white/10 pt-16">The "Ahmedabad Scenarios"</h2>
              <div className="space-y-6">
                 <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[32px]">
                    <h3 className="text-xl font-bold text-pak-green mb-3 uppercase">Scenario 1: Naqvi Attends</h3>
                    <p className="text-sm text-white/60">A historic diplomatic thaw. Pakistan fully represented in crucial WTC and FTP governance talks.</p>
                 </div>
                 <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[32px]">
                    <h3 className="text-xl font-bold text-white mb-3 uppercase">Scenario 2: Sending a Rep</h3>
                    <p className="text-sm text-white/60">Representative attends in Naqvi's place. Pakistan is represented but with significantly less bargaining power.</p>
                 </div>
                 <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-[32px]">
                    <h3 className="text-xl font-bold text-red-500 mb-3 uppercase">Scenario 3: Total Boycott</h3>
                    <p className="text-sm text-white/60">Pakistan is absent from ICC decisions. Weakens the alliance with Bangladesh and strengthens the Big Three.</p>
                 </div>
              </div>

              <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tight border-t border-white/10 pt-16">The Timeline of Tensions</h2>
              <div className="space-y-4">
                 {timeline.map((item, idx) => (
                   <div key={idx} className="flex gap-6 items-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                      <div className="text-[10px] font-black text-pak-green uppercase tracking-widest shrink-0 w-24">{item.date}</div>
                      <p className="text-sm text-white/70 leading-normal">{item.event}</p>
                   </div>
                 ))}
              </div>

              <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-[40px] mt-20">
                 <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h4 className="text-xs font-black uppercase tracking-[3px] text-red-500">The Political Standoff</h4>
                 </div>
                 <p className="text-sm text-white/60 leading-relaxed italic">
                    "Relations between PCB and BCCI collapsed after the Asia Cup 2025. Suryakumar Yadav refused to take the trophy from Naqvi, and Pakistan later boycotted the T20 WC match match-up in a major diplomatic row."
                 </p>
              </div>

              <div className="pt-20 border-t border-white/10">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8">Related Discussions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-vs-bangladesh-wtc-analysis-2025-2027" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">WTC Update</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">WTC Standings Analysis</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/pakistan-upcoming-series-full-schedule" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">FTP Guide</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-amber-500 transition-colors">2026-2027 Full Schedule</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="PCB Chairman Mohsin Naqvi Invited to ICC Board Meeting in India — Will He Go?" 
        summary="A historic invite at a time of extreme tension. Will Pakistan's interior minister travel to Ahmedabad for ICC talks?" 
      />
    </div>
  );
};

export default NaqviICCBoardMeetingBlog;
