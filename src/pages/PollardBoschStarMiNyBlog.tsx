import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  ArrowLeft,
  User,
  Zap,
  Trophy,
  Activity,
  Star,
  Clock,
  MapPin,
  Award
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

export default function PollardBoschStarMiNyBlog() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Pollard and Bosch star as MI NY leapfrog Freedom to reclaim No. 1 spot | PakCric</title>
        <meta name="description" content="MI New York surges to the top spot of Major League Cricket 2026 as Kieron Pollard and Corbin Bosch deliver stellar performances to defeat Freedom." />
        <meta name="keywords" content="MI New York, MLC 2026, Kieron Pollard, Corbin Bosch, Major League Cricket news, cricket highlights" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <Link to="/news" className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Latest News & Reports
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-3 h-3" /> MLC 2026 Specials
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-blue-400" /> July 5, 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Pollard & Bosch <br />
                <span className="text-blue-400 italic">Reclaim No. 1.</span> <br />
                MI NY Outclasses Freedom.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4 mx-auto md:mx-0">
                A thrilling victory in Major League Cricket sees MI New York leapfrog Washington Freedom in a high-octane battle.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">MI NY Total</div>
                    <div className="text-3xl font-display font-bold text-blue-400">188/5</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Freedom Total</div>
                    <div className="text-3xl font-display font-bold text-white">164/8</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Margin</div>
                    <div className="text-3xl font-display font-bold text-white">24 Runs</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Stadium</div>
                    <div className="text-2xl font-display font-bold text-white uppercase tracking-tighter italic">Grand Prairie</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-lg leading-relaxed text-white/70">
              <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=2000" alt="Cricket game action" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-y border-white/10 py-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm uppercase">
                    CS
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white uppercase">Cricinfo staff</h5>
                    <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Global Desk Correspondent</p>
                  </div>
                </div>
                <BlogShare title="Pollard and Bosch star as MI NY leapfrog Freedom to reclaim No. 1 spot" />
              </div>

              <p className="text-xl font-bold text-white">
                In a dramatic clash that had fans at the edge of their seats, MI New York registered a comfortable 24-run victory against Washington Freedom to reclaim the top spot in the 2026 MLC standings.
              </p>

              <p>
                Kieron Pollard rolled back the years with a breathtaking display of power-hitting, smashing a blistering 54 off just 21 balls, laced with six massive maximums. His partnerships with Corbin Bosch, who anchored the middle overs beautifully with a well-composed 45 runs, set up a mountain-like total of 188 for the defending champions.
              </p>

              <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl relative overflow-hidden my-12 text-left">
                <h4 className="text-xs font-black uppercase tracking-[3px] text-blue-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Performance Highlights
                </h4>
                <ul className="space-y-3 text-sm text-white/80 font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <strong>Kieron Pollard:</strong> 54 runs (21 balls) – 6 sixes, 2 fours
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <strong>Corbin Bosch:</strong> 45 runs (32 balls) & 2 wickets for 18 runs (4 overs)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <strong>Jason Holder (LAKR):</strong> 43 runs (22 balls) late in the evening
                  </li>
                </ul>
              </div>

              <p>
                Washington Freedom's chase was disrupted early on by an disciplined opening spell from Trent Boult, who struck twice in his first over to clean up the top order. Despite a late fightback from the lower order, the required run rate proved too steep, cementing MI New York's status as a formidable tournament powerhouse.
              </p>
            </div>
            
            <div className="flex justify-center pt-8">
              <Link to="/news" className="px-8 py-4 bg-white/5 hover:bg-blue-500 hover:text-white border border-white/10 rounded-full text-xs font-black uppercase tracking-widest transition-all">
                Back to All News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
