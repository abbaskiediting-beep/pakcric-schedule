import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy, Users, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PakistanTourBangladeshTestBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Analysis
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
          Red-Ball Revival: Pakistan’s Strategic <span className="text-pak-green">Return to Bangladesh</span> in 2026
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Calendar className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Dates</p>
            <p className="text-sm font-bold text-white">8 May – 12 May 2026</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <MapPin className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Venue</p>
            <p className="text-sm font-bold text-white">SBNCS, Mirpur, Dhaka</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Trophy className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Impact</p>
            <p className="text-sm font-bold text-white">ICC WTC Cycle Points</p>
          </div>
        </div>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-pak-green pl-6">
            The first Test match between Pakistan and Bangladesh in 2026 is scheduled to begin on 8 May 2026 at the Sher-e-Bangla National Cricket Stadium in Dhaka. This match is the opening fixture of a two-Test series, which forms part of the ICC World Test Championship (WTC) cycle.
          </p>

          <p>
            The cricketing calendar for 2026 is already delivering high-stakes drama, and few encounters carry as much weight for regional pride and World Test Championship (WTC) points as the upcoming clash between Pakistan and Bangladesh. Following a spirited white-ball leg in March, the two nations are set to transition into the rigorous demands of Test cricket this May.
          </p>

          <h2 className="text-3xl mt-12 mb-6">The Venue and Dates</h2>
          <p>
            The first Test will be hosted at the iconic Sher-e-Bangla National Cricket Stadium in Mirpur, Dhaka. Often referred to as the "Home of Cricket" in Bangladesh, this venue is renowned for its spin-friendly tracks and passionate atmosphere, making it a formidable challenge for any visiting side.
          </p>
          
          <div className="bg-white/5 rounded-3xl p-8 my-10 border border-white/10">
            <ul className="space-y-4 m-0 p-0 list-none">
              <li className="flex items-center gap-3 text-sm font-bold">
                <span className="text-pak-green">Match:</span> 1st Test, Pakistan tour of Bangladesh
              </li>
              <li className="flex items-center gap-3 text-sm font-bold">
                <span className="text-pak-green">Dates:</span> 8 May – 12 May 2026
              </li>
              <li className="flex items-center gap-3 text-sm font-bold">
                <span className="text-pak-green">Venue:</span> Sher-e-Bangla National Cricket Stadium, Mirpur, Dhaka
              </li>
              <li className="flex items-center gap-3 text-sm font-bold">
                <span className="text-pak-green">Series Format:</span> 2-match Test series (Part of ICC WTC)
              </li>
            </ul>
          </div>

          <h2 className="text-3xl mt-12 mb-6">A Two-Phase Tour</h2>
          <p>
            The 2026 tour was strategically split into two distinct phases to accommodate a packed international schedule. The first phase concluded in March with a three-match ODI series, where Bangladesh secured a 2–1 victory. The upcoming Test leg, beginning on 8 May, marks the second phase, following the conclusion of the Pakistan Super League (PSL).
          </p>

          <h2 className="text-3xl mt-12 mb-6 text-pak-green">Strategic Significance: The WTC Factor</h2>
          <p>
            This series is more than just a bilateral contest; it is a critical juncture for both teams in the ICC World Test Championship standings. For Pakistan, winning away from home is essential to maintain a path toward the WTC final. For Bangladesh, securing points against a major Asian power at home would be a massive statement of their growing stature in the longest format of the game.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Key Battles to Watch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-pak-green" /> Spin vs. Technique
              </h3>
              <p className="text-xs leading-relaxed text-ink/70">
                Bangladesh will likely deploy a heavy spin arsenal, led by the likes of Mehidy Hasan Miraz and Rishad Hossain. Pakistan’s batters will need to rely on their sweep shots and footwork to negotiate the low bounce and sharp turn of the Mirpur pitch.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-pak-green" /> Pace Battery
              </h3>
              <p className="text-xs leading-relaxed text-ink/70">
                While Mirpur is known for spin, the early sessions often offer something for the quicks. Shaheen Afridi and Haris Rauf will be looking to exploit any early moisture, while Bangladesh’s Nahid Rana—the Player of the Match in the March ODI series—will aim to replicate his express pace success in red-ball whites.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6">Experienced Leadership</h2>
          <p>
            The series will test the tactical acumen of both captains. Navigating five days of shifting momentum in humid conditions requires mental fortitude and precise field placements.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Preparation and Momentum</h2>
          <p>
            Both teams enter this Test series with fresh data from their recent encounters. Although the ODIs went in favor of Bangladesh, Test cricket is a different beast entirely. The Pakistan national selection committee has already named a 16-member squad aimed at balancing youth and experience for these subcontinent conditions.
          </p>
          
          <p className="mt-12 text-ink/60 text-sm italic">
            As the teams prepare to take the field on 8 May, fans across the globe are bracing for five days of attrition, skill, and subcontinental flair. Whether the "Green Shirts" can dominate or the "Tigers" defend their turf remains the burning question of the season.
          </p>

          <div className="mt-16 p-8 border border-pak-green/20 bg-pak-green/5 rounded-[32px] text-center">
            <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">Unlock the Squad</h3>
            <p className="text-xs text-ink/60 mb-6">Would you like to see the 16-member squad announced by the PCB for this specific Test series?</p>
            <Link 
              to="/squads"
              className="inline-flex items-center gap-2 px-8 py-3 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-pak-green/20"
            >
              View Team Squads
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
