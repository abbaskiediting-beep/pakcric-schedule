import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, Shield, Target, TrendingUp, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function MatchPreviewBangladesh() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Match Preview: Pakistan vs Bangladesh 1st Test 2026 | Tactical Analysis</title>
        <meta name="description" content="In-depth preview and tactical analysis for Pakistan's 1st Test vs Bangladesh in Dhaka. Key player battles, pitch reports, and squad news." />
      </Helmet>

      <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-all mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Analysis
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl p-8 md:p-12"
      >
        <header className="mb-12 border-b border-card-border pb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">Match Preview</span>
            <span className="px-4 py-1 bg-white/5 text-ink/40 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none border border-card-border">Test Series 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-ink uppercase tracking-tighter leading-none mb-8">
            The Dhaka Chess Match: <span className="text-pak-green">1st Test Preview</span>
          </h1>

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-pak-green" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/60">Editorial Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pak-green" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/60">April 22, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-pak-green" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/60">12 Min Read</span>
            </div>
          </div>
        </header>

        <section className="prose dark:prose-invert max-w-none space-y-12">
          <p className="text-xl text-ink font-medium leading-relaxed italic border-l-4 border-pak-green pl-6 mb-12">
            "Dhaka isn't just a cricket ground; it's a test of survival. The low bounce and relentless heat will filter the pretenders from the specialists."
          </p>

          <div>
            <h2 className="text-2xl font-display font-bold text-ink uppercase tracking-tight mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-pak-green" /> Tactical Battlefield
            </h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              The first Test at the Sher-e-Bangla Stadium is traditionally won by the team that controls the middle sessions on Day 2 and Day 3. For Pakistan, the strategy under Head Coach Sarfaraz Ahmed is clear: <strong>Attrition First</strong>. We expect Pakistan to play three specialist spinners, with Noman Ali acting as the anchor and Sajid Khan providing the attacking variations.
            </p>
          </div>

          <div className="bg-pak-green/5 p-8 rounded-[32px] border border-pak-green/10">
            <h3 className="text-xl font-bold text-ink uppercase mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-pak-green" /> Key Player Battle: Babar vs Shakib
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              The ultimate contest of technical brilliance vs subcontinental craft. Babar’s ability to use his feet against the left-arm spin of Shakib Al Hasan will dictate Pakistan's first-innings total. Shakib has dismissed elite right-handers 18 times in the last three series in Dhaka, meaning Babar cannot afford even a split-second lapse in concentration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-ink uppercase tracking-tight mb-6">Pitch Report & Conditions</h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              The Dhaka surface is suspected to be a 'Rank Turner' from the outset. Early reports from the ground suggest that the grass has been shaved off completely, exposing the dark, cracked soil. This favors the slow bowlers but makes the task for opening batters like Abdullah Shafique incredibly difficult during the new-ball phase when the lacquer is still fresh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
              <TrendingUp className="w-8 h-8 text-pak-green mb-4" />
              <h4 className="text-lg font-bold text-ink mb-2 uppercase">Pakistan Win Probability</h4>
              <p className="text-4xl font-display font-bold text-pak-green uppercase">56%</p>
              <p className="text-[10px] text-ink/40 uppercase font-bold tracking-widest mt-2 mt-2">Based on current WTC Form</p>
            </div>
            <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
              <Info className="w-8 h-8 text-pak-green mb-4" />
              <h4 className="text-lg font-bold text-ink mb-2 uppercase">Series Stakes</h4>
              <p className="text-xs text-ink/70 italic leading-relaxed">A 2-0 win for either side guarantees a Top 3 spot in the World Test Championship cycle heading into the summer.</p>
            </div>
          </div>
        </section>
      </motion.article>
    </div>
  );
}
