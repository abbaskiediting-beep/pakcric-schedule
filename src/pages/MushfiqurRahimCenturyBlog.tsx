import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, 
  Calendar, 
  ArrowLeft, 
  Star, 
  Target, 
  Zap, 
  ChevronRight, 
  TrendingUp, 
  AlertCircle, 
  Activity, 
  Shield, 
  History,
  TrendingDown,
  User,
  Quote,
  Clock
} from 'lucide-react';
import { BlogShare } from '../components/BlogShare';

const MushfiqurRahimCenturyBlog = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Helmet>
        <title>Mushfiqur Rahim 137* vs Pakistan: Classy Century Puts Bangladesh in Command | PakCric</title>
        <meta name="description" content="Mushfiqur Rahim scores a brilliant 137 in the 2nd Test vs Pakistan. Read full analysis of his responsible innings, partnerships, and impact on the match." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="w-3 h-3" /> Cricket News
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Trophy className="w-3 h-3" /> Landmark Century
                </span>
                <span className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  <Calendar className="w-3 h-3 text-emerald-500" /> May 18, 2026
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight uppercase">
                Mushfiqur <br />
                <span className="text-emerald-500">137 Runs.</span> <br />
                Pak in Trouble.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl pt-4">
                Bangladesh ke experienced wicketkeeper-batsman Mushfiqur Rahim ne 137 runs ki brilliant innings kheli, jisne Pakistan ko match mein mushkil position mein la kar khada kar diya.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[32px] text-center group hover:bg-white/[0.05] transition-all">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Runs</div>
                    <div className="text-4xl font-display font-bold text-white italic transition-transform group-hover:scale-110">137</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[32px] text-center group hover:bg-white/[0.05] transition-all">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Format</div>
                    <div className="text-xl font-display font-black text-emerald-500 uppercase">Test</div>
                 </div>
                 <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[32px] text-center group hover:bg-white/[0.05] transition-all">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Status</div>
                    <div className="text-xl font-display font-black text-white/60 uppercase">Centurion</div>
                 </div>
                 <div className="p-6 bg-[#0A1A12] border border-emerald-500/20 rounded-[32px] text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Match Flow</div>
                    <div className="text-xl font-display font-black text-white uppercase italic">Command</div>
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
              <p>
                Bangladesh ke experienced wicketkeeper-batsman Mushfiqur Rahim ne Pakistan ke khilaf second Test match ki second innings mein zabardast batting karte hue 137 runs ki brilliant innings kheli. Unki ye innings sirf runs tak limited nahi thi, balki is ne Bangladesh ko match mein mazboot position mein la kar khada kar diya.
              </p>

              <div className="bg-emerald-600/5 border border-emerald-500/20 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Quote className="w-48 h-48 text-emerald-500" />
                 </div>
                 <h2 className="text-3xl font-display font-bold text-white uppercase mb-8 relative z-10 italic">Mushfiqur Rahim Ki Classy Batting</h2>
                 <p className="relative z-10">
                    Jab Bangladesh ki innings shuru hui to team ko ek stable partnership ki zarurat thi. Mushfiqur ne defensive aur attacking cricket ka perfect balance dikhaya. Unki innings mein classy cover drives, elegant flick shots aur controlled pull shots dekhne ko mile. Har over ke saath unka confidence barhta gaya aur Pakistan ki fielding side pressure mein nazar aayi.
                 </p>
              </div>

              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight pt-10">Pressure Situation Mein Responsible Innings</h3>
              <p>
                Test cricket mein second innings aksar match ka result decide karti hai. Aise waqt mein Mushfiqur Rahim ne senior player ki tarah zimmedari uthai. Unhone wickets girne ke bawajood apni concentration maintain rakhi aur lower-middle order ke saath important partnerships build ki. 137 runs ki innings ke dauran Mushfiqur ne bohat patience aur game awareness dikhayi.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                 <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col justify-between">
                    <div>
                       <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[4px] mb-6">Expert Verdict</h4>
                       <p className="text-lg font-medium text-white/80 italic leading-relaxed">
                          "Difficult conditions mein 137 runs banana kisi bhi batsman ke liye easy nahi hota. Mushfiqur ne team ko match-winning position mein laane mein key role play kiya."
                       </p>
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                       <User className="w-4 h-4 text-emerald-500" />
                       <span className="text-[10px] font-black text-white/40 uppercase">PakCric Analysis</span>
                    </div>
                 </div>
                 <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px]">
                    <h4 className="text-[10px] font-black text-red-500 uppercase tracking-[4px] mb-6">Pak Bowlers Struggle</h4>
                    <p className="text-sm leading-relaxed text-white/50 mb-6">
                       Pakistan ke fast bowlers ne reverse swing aur short-pitch bowling try ki, magar Mushfiqur har challenge ke liye tayyar nazar aaye. Consistency ki kami aur loose deliveries ne Bangladesh ka kaam asaan kiya.
                    </p>
                    <div className="flex items-center gap-2">
                       <Activity className="w-4 h-4 text-red-500" />
                       <span className="text-[10px] font-black text-white/40 uppercase">Bowling Momentum: LOW</span>
                    </div>
                 </div>
              </div>

              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Fans Aur Experts Ki Tareef</h3>
              <p>
                Cricket experts ne Mushfiqur Rahim ki is innings ko high-quality Test batting qarar diya. Social media par bhi fans ne unki technique, patience aur match awareness ki khoob tareef ki. Kai former cricketers ne kaha ke difficult conditions mein aesi zimmedarana batting senior players ka hi kaam hai.
              </p>

              <div className="bg-[#0D1A12] border border-emerald-500/20 p-8 rounded-[40px] flex gap-6 items-start my-10">
                 <Shield className="w-10 h-10 text-emerald-500 shrink-0 mt-1" />
                 <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase">Match Par Asar</h4>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                       "137 runs ki ye innings match ka turning point sabit ho sakti hai. Test cricket mein fourth innings chase hamesha challenging hoti hai aur Bangladesh ne isi cheez ko target kiya."
                    </p>
                 </div>
              </div>

              <p className="border-t border-white/10 pt-10">
                Mushfiqur Rahim ki 137 runs ki outstanding innings Test cricket ki ek perfect example thi jahan patience, technique aur temperament sab kuch ek saath nazar aaya. Unhone pressure situation mein responsible batting karte hue Bangladesh ko strong position mein la khada kiya. Pakistan ko match mein comeback karne ke liye ab exceptional batting aur smart strategy ki zarurat hogi.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-20 border-t border-white/10">
               <h4 className="text-[10px] font-black uppercase tracking-[4px] text-emerald-500 mb-8">Latest Match Reports</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/news/pakistan-1st-innings-collapse-analysis-2nd-test-sylhet-2026" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none mb-1">Previous Innings</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors">Pakistan Collapse Analysis</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-red-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/news/babar-azam-68-vs-bangladesh-2nd-test-sylhet-2026-report" className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] flex items-center justify-between hover:bg-white/[0.05] transition-all group">
                     <div>
                        <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest leading-none mb-1">Star Performance</span>
                        <h5 className="text-sm font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors">Babar's Fighting Fifty</h5>
                     </div>
                     <ChevronRight className="w-5 h-5 text-yellow-500 transition-transform group-hover:translate-x-1" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <BlogShare 
        title="Mushfiqur Rahim 137* vs Pakistan: Classy Century Puts Bangladesh in Command" 
        summary="Mushfiqur Rahim scores a brilliant 137 in the 2nd Test's second innings, putting Bangladesh in a match-winning position." 
      />
    </div>
  );
};

export default MushfiqurRahimCenturyBlog;
