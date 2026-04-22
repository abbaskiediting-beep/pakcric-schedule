import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, MapPin, Trophy, Users, Clock, Info } from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';

export default function PakistanVsBangladesh2026Schedule() {
  const seriesName = 'Pakistan Tour of Bangladesh (Test Series)';
  const matches = PAKISTAN_SCHEDULE.filter(m => m.series === seriesName);

  useEffect(() => {
    document.title = "Pakistan vs Bangladesh 2026 Schedule – Full Match List";
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Home
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl p-8 md:p-12"
      >
        <div className="mb-12">
          <span className="px-4 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[3px] mb-4 inline-block shadow-lg shadow-pak-green/20">
            Red-Ball Revival
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-2">
            Pakistan tour of Bangladesh 2026
          </h1>
          <p className="text-pak-green font-bold text-xs uppercase tracking-widest">1st Test: Dhaka • May 8 – May 12</p>
        </div>

        <div className="space-y-12">
          {/* Intro */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-pak-green pl-6">
              The first Test match between Pakistan and Bangladesh in 2026 is scheduled to begin on 8 May 2026 at the Sher-e-Bangla National Cricket Stadium in Dhaka. This match is the opening fixture of a two-Test series, which forms part of the ICC World Test Championship (WTC) cycle.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed">
              The cricketing calendar for 2026 is already delivering high-stakes drama, and few encounters carry as much weight for regional pride and World Test Championship (WTC) points as the upcoming clash between Pakistan and Bangladesh. Following a spirited white-ball leg in March, the two nations are set to transition into the rigorous demands of Test cricket this May.
            </p>
          </div>

          {/* Schedule Summary Card */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <h2 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-pak-green" />
              The Venue and Dates
            </h2>
            <p className="text-ink/60 mb-8 leading-relaxed">
              The first Test will be hosted at the iconic Sher-e-Bangla National Cricket Stadium in Mirpur, Dhaka. Often referred to as the "Home of Cricket" in Bangladesh, this venue is renowned for its spin-friendly tracks and passionate atmosphere, making it a formidable challenge for any visiting side.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Match</p>
                <p className="text-sm font-bold text-white uppercase">1st Test, Pakistan tour of Bangladesh</p>
              </div>
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Dates</p>
                <p className="text-sm font-bold text-white uppercase">8 May – 12 May 2026</p>
              </div>
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Venue</p>
                <p className="text-sm font-bold text-white uppercase">Mirpur, Dhaka</p>
              </div>
              <div className="bg-bg/50 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-1">Format</p>
                <p className="text-sm font-bold text-white uppercase">2-match Test series (ICC WTC)</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-6">A Two-Phase Tour</h2>
            <p className="text-ink/70 leading-relaxed">
              The 2026 tour was strategically split into two distinct phases to accommodate a packed international schedule. The first phase concluded in March with a three-match ODI series, where Bangladesh secured a 2–1 victory. The upcoming Test leg, beginning on 8 May, marks the second phase, following the conclusion of the Pakistan Super League (PSL).
            </p>

            <h2 className="text-3xl font-display font-bold text-pak-green uppercase tracking-tighter mt-12 mb-6">Strategic Significance: The WTC Factor</h2>
            <p className="text-ink/70 leading-relaxed">
              This series is more than just a bilateral contest; it is a critical juncture for both teams in the ICC World Test Championship standings. For Pakistan, winning away from home is essential to maintain a path toward the WTC final. For Bangladesh, securing points against a major Asian power at home would be a massive statement of their growing stature in the longest format of the game.
            </p>
          </div>

          {/* Key Battles */}
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <Users className="w-6 h-6 text-pak-green" />
              Key Battles to Watch
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all">
                <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  Spin vs. Technique
                </h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Bangladesh will likely deploy a heavy spin arsenal, led by the likes of Mehidy Hasan Miraz and Rishad Hossain. Pakistan’s batters will need to rely on their sweep shots and footwork to negotiate the low bounce and sharp turn of the Mirpur pitch.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all">
                <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  Pace Battery
                </h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  While Mirpur is known for spin, the early sessions often offer something for the quicks. Shaheen Afridi and Haris Rauf will be looking to exploit any early moisture, while Bangladesh’s Nahid Rana—the Player of the Match in the March ODI series—will aim to replicate his express pace success in red-ball whites.
                </p>
              </div>
            </div>
          </section>

          <div className="prose prose-invert max-w-none pt-4 border-t border-white/10">
            <h2 className="text-2xl font-display font-bold text-white uppercase mb-4">Experienced Leadership</h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              The series will test the tactical acumen of both captains. Navigating five days of shifting momentum in humid conditions requires mental fortitude and precise field placements.
            </p>

            <h2 className="text-2xl font-display font-bold text-white uppercase mb-4">Preparation and Momentum</h2>
            <p className="text-ink/70 leading-relaxed">
              Both teams enter this Test series with fresh data from their recent encounters. Although the ODIs went in favor of Bangladesh, Test cricket is a different beast entirely. The Pakistan national selection committee has already named a 16-member squad aimed at balancing youth and experience for these subcontinent conditions.
            </p>
            <p className="text-ink/60 leading-relaxed mt-8 italic">
              As the teams prepare to take the field on 8 May, fans across the globe are bracing for five days of attrition, skill, and subcontinental flair. Whether the "Green Shirts" can dominate or the "Tigers" defend their turf remains the burning question of the season.
            </p>
          </div>
        </div>
      </motion.article>

      {/* Quick Summary Footer */}
      <div className="mt-12 bg-pak-green/10 border border-pak-green/20 rounded-3xl p-8 text-center">
        <Trophy className="w-12 h-12 text-pak-green mx-auto mb-4" />
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-2">Match Tracker</h3>
        <p className="text-ink/60 text-sm mb-6">Never miss a boundary. Bookmark this page for the latest <strong>Pakistan vs Bangladesh 2026 test schedule details</strong> and exclusive post-match content.</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-pak-green text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-pak-green transition-all">
            Get Schedule PDF
          </button>
        </div>
      </div>
    </div>
  );
}
