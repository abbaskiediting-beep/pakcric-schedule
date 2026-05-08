import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  AlertTriangle, 
  Calendar, 
  ArrowLeft,
  Share2,
  TrendingUp,
  Star,
  Target,
  Users,
  ChevronRight,
  Zap,
  MapPin,
  Clock,
  Info,
  Activity,
  UserX,
  Stethoscope
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const BabarAzamInjuryBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Babar Azam Ruled Out of 1st Bangladesh Test With Knee Injury | PakCric</title>
        <meta name="description" content="Babar Azam ruled out of Pakistan's 1st Test vs Bangladesh in Dhaka on May 8 due to left knee injury. PSL 2026 top scorer misses crucial WTC match." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-red-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pak-green/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> News Hub
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-red-500/20 text-red-500 border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Breaking News
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-red-500" /> May 7, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Babar Azam <br /><span className="text-red-500 font-black">RULED OUT.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                The news Pakistan feared: The PSL 11 top scorer will miss the 1st Test in Dhaka after sustaining a left knee injury during final practice sessions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-white/[0.02] p-8 rounded-[32px] border border-white/10">
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Injury Type</div>
                    <div className="text-2xl font-display font-bold text-red-500">LEFT KNEE <span className="text-sm font-normal text-white/20">STRAIN</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Expected Stay</div>
                    <div className="text-2xl font-display font-bold">1 TEST <span className="text-sm font-normal text-white/20">MINIMUM</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Likely Replacement</div>
                    <div className="text-2xl font-display font-bold text-pak-green">AZAN AWAIS <span className="text-sm font-normal text-white/20">DEBUT?</span></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="container mx-auto px-4 max-w-4xl">
         <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop" 
            alt="Babar Azam Disappointed" 
            className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl brightness-75 border border-white/10"
         />
      </div>

      {/* Article Content */}
      <section className="py-20 pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="markdown-body space-y-10 text-xl leading-relaxed text-white/70">
              <p>
                It is the news Pakistan cricket fans dreaded. Just one day before the opening Test against Bangladesh, the PCB confirmed that <span className="text-white font-bold underline decoration-red-500">Babar Azam will not be available for the first Test match</span> against Bangladesh due to a left knee injury.
              </p>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The Timeline of Incident</h2>
              <p>
                Babar Azam arrived in Bangladesh on May 4, shortly after the PSL final. He trained with the team for two days without any issues — but on Thursday morning, he felt pain in his left knee during a fielding drill.
              </p>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
                          <div className="flex items-center gap-3 mb-6 text-red-500">
                              <Clock className="w-5 h-5" />
                              <span className="text-[10px] font-black uppercase tracking-[2px]">Incident Log</span>
                          </div>
                          <ul className="space-y-4">
                              {[
                                  { day: 'May 4', event: 'Arrives in Dhaka' },
                                  { day: 'May 5-6', event: 'Normal Practice' },
                                  { day: 'May 7', event: 'Knee Pain / MRI' },
                                  { day: 'May 8 ', event: 'Ruled Out' }
                              ].map((item, i) => (
                                  <li key={i} className="flex items-center gap-4 group">
                                      <span className="text-sm font-black text-white/30 tabular-nums w-12">{item.day}</span>
                                      <span className="text-sm text-white group-hover:text-red-500 transition-colors">{item.event}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="p-8 bg-red-500/5">
                          <div className="flex items-center gap-3 mb-6 text-red-500">
                              <Stethoscope className="w-5 h-5" />
                              <span className="text-[10px] font-black uppercase tracking-[2px]">Medical Report</span>
                          </div>
                          <p className="text-sm text-white/60 leading-relaxed italic">
                            "Babar Azam is currently being assessed by the team's medical panel. The evaluation will determine the extent of the strain. More information on his fitness for the 2nd Test in Sylhet will follow."
                          </p>
                      </div>
                  </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">The PSL 11 Factor</h2>
              <p>
                The timing is particularly cruel. Babar was the <span className="text-white font-bold">leading run-scorer in HBL PSL 11</span>, amassing 588 runs at an average of 73.02. He was in the form of his life, having just led Peshawar Zalmi to the trophy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <TrendingUp className="w-24 h-24 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Technical Void</h4>
                    <p className="text-sm text-white/50 leading-relaxed">Pakistan loses its best player of spin. Babar's ability to drive against the turn at Dhaka was supposed to be the anchor for Masood's aggressive tactics.</p>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Users className="w-24 h-24 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Batting Reshuffle</h4>
                    <p className="text-sm text-white/50 leading-relaxed">Shan Masood is expected to move to No.3, with a likely debut for either Azan Awais or Abdullah Fazal at the top alongside Imam-ul-Haq.</p>
                 </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-white pt-8 uppercase tracking-tight">WTC Points at Stake</h2>
              <p>
                Pakistan currently sits <span className="text-white font-bold">5th in the WTC standings</span>. With a first away assignment, losing Babar significantly compromises their chances of a 2-0 sweep, which was the team's stated goal before arrival.
              </p>
              
              <p className="text-xl font-bold text-white/90 italic mt-12 bg-red-500/10 p-8 rounded-3xl border border-red-500/20">
                "It's a massive blow. Babar was hitting the ball like a dream in the PSL. To lose him on the eve of a Test in conditions like Mirpur is a captain's nightmare." — Anonymous Team Source.
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-red-500 mb-8">Related Coverage</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/bangladesh-cricket-team-2026-analysis" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Opponent Watch</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">Bangladesh Complete Squad Analysis</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-emerald-500" />
                  </Link>
                  <Link to="/news/babar-azam-psl-2026-complete-story-comeback" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-pak-green uppercase tracking-widest">PSL Review</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-pak-green transition-colors">The Return of King Babar</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-pak-green" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Babar Azam Ruled Out of 1st Test vs Bangladesh" 
        summary="Major blow for Pakistan as PSL 11 top scorer sustains knee injury before Dhaka Test." 
      />
    </div>
  );
};

export default BabarAzamInjuryBlog;
