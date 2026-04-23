import { motion } from 'motion/react';
import { ArrowLeft, Users, Shield, TrendingUp, UserPlus, Info, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SquadIntelligence() {
  const players = [
    { name: 'Shan Masood', role: 'Captain / Batter', trait: 'Strategic Resilience' },
    { name: 'Babar Azam', role: 'Top-order Batter', trait: 'Technical Anchor' },
    { name: 'Sajid Khan', role: 'Off-spinner', trait: 'Variety Merchant' },
    { name: 'Noman Ali', role: 'SLA Spinner', trait: 'Control Specialist' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Squad Intelligence: The Strategic Selection for Bangladesh 2026</title>
        <meta name="description" content="In-depth analysis of Pakistan's Test selection for the 2026 Bangladesh tour. Why domestic form was prioritized and tactical roles of the new call-ups." />
      </Helmet>

      <Link to="/blogs" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-all mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Analysis
      </Link>

      <motion.article 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card-bg border border-card-border rounded-[48px] overflow-hidden shadow-2xl p-8 md:p-16"
      >
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-pak-green" />
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-pak-green">Selection Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-ink uppercase tracking-tighter leading-tight mb-8">
             Beyond the <span className="italic text-pak-green">Names</span>: Selection Strategy 2026
          </h1>
          
          <div className="flex gap-8 border-y border-card-border py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ink/20" />
              <span className="text-[10px] font-bold uppercase text-ink/40">Latest Brief</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-ink/20" />
              <span className="text-[10px] font-bold uppercase text-ink/40">15 Min Review</span>
            </div>
          </div>
        </header>

        <section className="space-y-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-ink/70">
              The announcement of the 16-member squad for the upcoming Test series against Bangladesh has sent waves through the cricketing community. Far from a routine selection, this squad reflects a major tactical shift by Head Coach Sarfaraz Ahmed and the selection committee. The emphasis has moved from 'Potential' to 'Validated Performance'.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {players.map((p) => (
              <div key={p.name} className="p-8 bg-pak-green/5 border border-pak-green/10 rounded-3xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-pak-green mb-2">{p.role}</p>
                <h3 className="text-2xl font-display font-bold text-ink uppercase mb-2">{p.name}</h3>
                <div className="flex items-center gap-2 text-xs text-ink/40 font-bold uppercase italic">
                  <Shield className="w-3 h-3" /> {p.trait}
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 bg-card-bg border border-card-border rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <TrendingUp className="w-32 h-32 text-pak-green" />
            </div>
            <h3 className="text-2xl font-display font-bold text-ink uppercase mb-6 flex items-center gap-3">
              <UserPlus className="w-6 h-6 text-pak-green" /> The Domestic Graduates
            </h3>
            <p className="text-ink/70 leading-relaxed z-10 relative">
              The inclusion of <strong>Azan Awais</strong> and <strong>Muhammad Ghazi Ghori</strong> is not just for bench strength. Their selection comes after both players averaged over 60 in the Quaid-e-Azam Trophy. The coaching staff is specifically looking for players who can handle long periods of concentration—a skill that was arguably missing in the previous WTC cycle.
            </p>
          </div>

          <div className="p-8 bg-neutral-900 border border-white/5 rounded-3xl text-white">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-4">
              <Info className="w-4 h-4 text-pak-green" /> Tactical Corner
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed italic">
              "Selecting four specialist spinners for a two-match series is a bold admission of intent. Pakistan is no longer looking to outpace Bangladesh; they are looking to out-think them in the spinning trenches."
            </p>
          </div>
        </section>
      </motion.article>
    </div>
  );
}
