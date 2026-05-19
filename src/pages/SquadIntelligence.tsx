import { motion } from 'motion/react';
import { ArrowLeft, Users, Shield, TrendingUp, UserPlus, Info, Calendar, Clock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ShareButton from '../components/ShareButton';

export default function SquadIntelligence() {
  const players = [
    { name: 'Shan Masood', role: 'Captain / Batter', trait: 'Strategic Resilience' },
    { name: 'Babar Azam', role: 'Top-order Batter', trait: 'Technical Anchor' },
    { name: 'Sajid Khan', role: 'Off-spinner', trait: 'Variety Merchant' },
    { name: 'Noman Ali', role: 'SLA Spinner', trait: 'Control Specialist' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <Helmet>
        <title>Squad Intelligence: The Strategic Selection for Bangladesh 2026</title>
        <meta name="description" content="In-depth analysis of Pakistan's Test selection for the 2026 Bangladesh tour. Why domestic form was prioritized and tactical roles of the new call-ups." />
      </Helmet>

      <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-ink/50 hover:text-pak-green transition-all mb-6 md:mb-8 ml-2">
        <ArrowLeft className="w-4 h-4" /> Back to Analysis
      </Link>

      <motion.article 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card-bg border border-card-border rounded-3xl md:rounded-[48px] overflow-hidden shadow-2xl p-6 md:p-16"
      >
        <header className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-pak-green" />
              <span className="text-[10px] md:text-[10px] font-black uppercase tracking-[3px] md:tracking-[4px] text-pak-green">Selection Intelligence</span>
            </div>
            <ShareButton 
              title="Squad Intelligence: Pakistan selection strategy 2026"
              text="In-depth analysis of Pakistan's Test selection for the 2026 Bangladesh tour. Why domestic form was prioritized and tactical roles of the new call-ups."
              url={window.location.href}
              variant="outline"
            />
          </div>
          <h1 className="text-3xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter leading-[1.1] mb-6 md:mb-8">
             Beyond the <span className="italic text-pak-green">Names</span>: Selection Strategy 2026
          </h1>
          
          <div className="flex gap-6 md:gap-8 border-y border-card-border py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-ink/20" />
              <span className="text-[10px] font-black uppercase text-ink/40">Latest Brief</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-ink/20" />
              <span className="text-[10px] font-black uppercase text-ink/40">15 Min Review</span>
            </div>
          </div>
        </header>

        <section className="space-y-10 md:space-y-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base md:text-lg leading-relaxed text-ink/70">
              The announcement of the 16-member squad for the upcoming Test series against Bangladesh has sent waves through the cricketing community. Far from a routine selection, this squad reflects a major tactical shift by Head Coach Sarfaraz Ahmed and the selection committee. The emphasis has moved from 'Potential' to 'Validated Performance'.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {players.map((p) => (
              <div key={p.name} className="p-6 md:p-8 bg-pak-green/5 border border-pak-green/10 rounded-2xl md:rounded-3xl">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-pak-green mb-2">{p.role}</p>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-2">{p.name}</h3>
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-ink/40 font-black uppercase italic">
                  <Shield className="w-3 h-3" /> {p.trait}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 bg-white/[0.02] border border-card-border rounded-[32px] md:rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <TrendingUp className="w-24 h-24 md:w-32 md:h-32 text-pak-green" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase mb-4 md:mb-6 flex items-center gap-3">
              <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-pak-green" /> Domestic Graduates
            </h3>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed z-10 relative">
              The inclusion of <strong>Azan Awais</strong> and <strong>Muhammad Ghazi Ghori</strong> is not just for bench strength. Their selection comes after both players averaged over 60 in the Quaid-e-Azam Trophy. The coaching staff is specifically looking for players who can handle long periods of concentration—a skill that was arguably missing in the previous WTC cycle.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-neutral-900/50 border border-white/5 rounded-2xl md:rounded-3xl text-white">
            <h4 className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest mb-4">
              <Info className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" /> Tactical Corner
            </h4>
            <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed italic">
              "Selecting four specialist spinners for a two-match series is a bold admission of intent. Pakistan is no longer looking to outpace Bangladesh; they are looking to out-think them in the spinning trenches."
            </p>
          </div>
        </section>
      </motion.article>
    </div>
  );
}
