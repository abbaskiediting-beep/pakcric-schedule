import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy, Users, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthorSection from '../components/AuthorSection';

export default function PakistanTourBangladeshTestBlog() {
  const linkKeywords = (text: string) => {
    const keywords: Record<string, string> = {
      'schedule': '/schedule',
      'squad': '/squads',
      'rankings': '/rankings',
      'icc': '/rankings',
      'wtc': '/icc-wtc-projections-2026',
      'world test championship': '/icc-wtc-projections-2026'
    };

    let parts: any[] = [text];
    
    Object.entries(keywords).forEach(([keyword, path]) => {
      const newParts: any[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`(${keyword})`, 'gi');
          const splitParts = part.split(regex);
          splitParts.forEach((sp, i) => {
            if (sp.toLowerCase() === keyword) {
              newParts.push(
                <Link key={`${keyword}-${i}`} to={path} className="text-pak-green hover:underline">
                  {sp}
                </Link>
              );
            } else if (sp !== '') {
              newParts.push(sp);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return parts;
  };

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
          <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-pak-green pl-6 italic">
            {linkKeywords("The first Test match between Pakistan and Bangladesh in 2026 is scheduled to begin on 8 May 2026 at the Sher-e-Bangla National Cricket Stadium in Dhaka. This match is the opening fixture of a high-intensity two-Test series, which forms a critical part of the ICC World Test Championship (WTC) cycle standings.")}
          </p>

          <p>
            {linkKeywords("The cricketing calendar for 2026 is already delivering high-stakes drama, and few encounters carry as much weight for regional pride and World Test Championship (WTC) points as the upcoming clash between Pakistan and Bangladesh. Following a spirited white-ball leg in March, the two nations are set to transition into the rigorous demands of Test cricket this May. The <strong>Pakistan upcoming series full schedule</strong> indicates that this tour is the primary focus for the subcontinental giants as they look to re-establish their red-ball dominance.")}
          </p>

          <p className="text-ink/60 mb-8 leading-relaxed">
            The transition from the fast-paced, high-adrenaline world of T20 and ODI cricket to the patient, technical grind of five-day Tests is one of the most difficult adjustments in modern sports. For the <strong>Pakistan cricket team</strong>, this transition is particularly significant as they aim to improve their away record in Asia. Bangladesh has become a fortress in recent years, especially in the red-ball format, where their local knowledge of the conditions has humbled many top-tier programs.
          </p>

          <h2 className="text-3xl mt-12 mb-6">The Venue: Mirpur's "Home of Cricket" Atmosphere</h2>
          <p>
            {linkKeywords("The first Test will be hosted at the iconic Sher-e-Bangla National Cricket Stadium in Mirpur, Dhaka. Often referred to as the \"Home of Cricket\" in Bangladesh, this venue is renowned for its spin-friendly tracks and passionate atmosphere, making it a formidable challenge for any visiting side. The pitch at Mirpur is notoriously abrasive, which means the ball begins to degrade early, facilitating reverse swing for the fast bowlers and offering significant purchase for the specialized spinners.")}
          </p>
          
          <p className="text-ink/60 leading-relaxed italic">
            According to recent pitch reports from the Dhaka groundsmen, the surface for the May 8 Test is expected to be a 'slow turner'. This means that the first two days might favor the batsmen if they can apply themselves, but Day 3 onwards will become a trial by spin. History suggests that winning the toss in Dhaka is 30% of the battle, as batting last on a deteriorating fifth-day track is an uphill task for even the best technical masters.
          </p>

          <div className="bg-pak-green/10 rounded-[32px] p-10 my-10 border border-pak-green/20 text-center shadow-inner">
            <Link to="/pakistan-vs-bangladesh-2026-schedule" className="text-pak-green font-bold uppercase tracking-[4px] text-[12px] hover:underline hover:text-white transition-colors italic">
              Unlock Detailed Daily Match Progress & Official Live Schedule
            </Link>
          </div>

          <h2 className="text-3xl mt-12 mb-6">A Strategic Two-Phase Tour Analysis</h2>
          <p>
            {linkKeywords("The 2026 tour was strategically split by the respective cricket boards into two distinct phases to accommodate a packed international schedule that includes multiple ICC events. The first phase concluded in March with a three-match ODI series, where Bangladesh secured a hard-fought 2–1 victory on their home turf. The upcoming Test leg, beginning on 8 May, marks the second phase, following a short but intensive break where both squads have been refining their red-ball skills.")}
          </p>
          <p className="text-ink/60 leading-relaxed mb-8 italic border-l-2 border-white/5 pl-8">
            The gap between the phases has allowed the <strong>Pakistan squad</strong> to rotate some of their multi-format specialists and bring in red-ball durables like Mohammad Abbas and Noman Ali. These selections indicate that Pakistan is not taking the spin challenge lightly.
          </p>

          <h2 className="text-3xl mt-12 mb-6 text-pak-green">Strategic Significance: The WTC points Equation</h2>
          <p>
            {linkKeywords("This series is more than just a bilateral contest; it is a critical juncture for both teams in the ICC World Test Championship standings. For Pakistan, winning away from home is essential to maintain a clear path toward the WTC final in 2027. The points system in the WTC rewards consistency on the road, and a 2-0 series win in Bangladesh would be a massive boost to their qualification probability.")}
          </p>
          <p className="text-ink/60 leading-relaxed mb-8">
            Bangladesh, on the other hand, is currently in a phase where they are proving they are no longer just 'home track' kings but actual contenders in the <strong>World Test Championship</strong> cycle. Securing a series win against a side like Pakistan would significantly improve their <strong>ICC rankings</strong> and provide them with the momentum needed for their upcoming tours of Australia and South Africa later in the year.
          </p>

          <h2 className="text-3xl mt-12 mb-10">Historical Context and Rivalry</h2>
          <p className="text-ink/60 leading-relaxed mb-8">
            The rivalry between these two nations in Test cricket has always been characterized by high-intensity sessions and individual brilliance. Over the years, Dhaka has been the stage for some of the most memorable battles, including massive hundreds from former legends and game-changing spells of reverse swing. The May 2026 Test adds another chapter to this storied history. Both teams understand that the first match sets the tone for the entire series, and a defeat in Dhaka would make the second Test in Sylhet a do-or-die situation.
          </p>

          <h2 className="text-3xl mt-12 mb-8 border-b border-white/5 pb-4">Key Battlefield Tactics: Players to Watch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-white/5 p-10 rounded-[32px] border border-white/10 hover:bg-white/[0.08] transition-all">
              <h3 className="text-xl mb-6 flex items-center gap-3 font-display italic text-pak-green">
                <Users className="w-8 h-8" /> Elite Spin vs. Technical Grit
              </h3>
              <p className="text-sm leading-relaxed text-ink/70 italic">
                Bangladesh will likely deploy a heavy spin arsenal, led by the likes of Mehidy Hasan Miraz. Pakistan’s hitters, including Babar Azam and Saud Shakeel, will need to rely on their impeccable footwork and the modern sweep shot to negotiate the low bounce. The battle in the second session, when the humidity is at its peak and the ball starts to grip, will be the defining period of the match.
              </p>
            </div>
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/[0.08] transition-all">
              <h3 className="text-xl mb-6 flex items-center gap-3 font-display italic text-pak-green">
                <Clock className="w-8 h-8" /> The Pace Battery & Reverse Swing
              </h3>
              <p className="text-sm leading-relaxed text-ink/70 italic">
                While Mirpur is world-famous for its spin, the early sessions of Day 1 and Day 2 often offer significant movement for the seamers under the morning cloud cover. Shaheen Afridi’s opening burst will be critical in removing the Bangladeshi top order before they can settle in. On the other side, Bangladesh’s Nahid Rana—the breakout star of the ODI series—will be eager to translate his high-velocitySuccess into a red-ball masterclass.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-6 font-display italic">Experienced Leadership: The Masood Strategy</h2>
          <p className="text-ink/60 leading-relaxed mb-8">
            The upcoming series will test the tactical acumen of Shan Masood. Since taking the helm, Masood has advocated for an aggressive, result-oriented brand of Test cricket. Playing this way in Dhaka requires a fine balance; you must be brave enough to hunt for wickets but smart enough to acknowledge when the surface demands defensive containment. His relationship with the senior bowlers and his field placements for the spin duo of Noman Ali and Sajid Khan will be scrutinized by fans and experts alike.
          </p>

          <h2 className="text-3xl mt-12 mb-8 font-display italic border-t border-white/5 pt-8">Preparation and The Domestic Pipeline</h2>
          <p>
            {linkKeywords("Both teams enter this Test series with fresh data from their recent domestic tournaments. The <strong>Pakistan cricket team</strong> selectors have leaned heavily on performers from the Quaid-e-Azam Trophy, ensuring that the players are match-fit and ready for the long-form grind. Red-ball resilience is the theme of the PCB's preparation camp, and the results of this focus will be visible from the first ball in Dhaka.")}
          </p>
          <p className="text-ink/60 leading-relaxed italic">
            Bangladesh, similarly, has been investing in their 'A' team program, giving their fringe players exposure to high-pressure situations. This depth means that even if a regular starter is injured, the replacement is someone who has already performed at a high level. This structural strength is what makes them such a dangerous opponent at home.
          </p>
          
          <p className="mt-16 text-white font-bold text-lg italic border-pak-green border-l-4 pl-6 py-4 bg-pak-green/5 rounded-r-2xl shadow-xl">
            As the teams prepare to take the field on 8 May, fans across the globe are bracing for five days of attrition, elite skill, and subcontinental flair. Whether the "Shaheens" can dominate or the "Tigers" defend their turf remains the burning question of the season.
          </p>

          <div className="mt-24 p-12 border border-white/10 bg-white/5 rounded-[48px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 bg-pak-green/20 rounded-bl-3xl">
               <span className="text-[10px] font-bold text-pak-green uppercase tracking-[3px]">Expert Analysis Panel</span>
            </div>
            <h3 className="text-2xl font-display font-bold uppercase mb-10 text-white text-center italic tracking-widest">Enhanced Series Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/pakistan-tour-bangladesh-squad-2026" className="p-8 bg-white/5 border border-white/5 rounded-[32px] hover:border-pak-green transition-all group hover:bg-white/[0.08] shadow-lg">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-3 italic tracking-[4px]">Deep Dive Analysis</p>
                <h4 className="text-xl text-white font-bold group-hover:text-pak-green transition-colors leading-tight font-display mb-4">Official 16-Member Squad & Series Roadmap</h4>
                <p className="text-xs text-ink/40 italic leading-relaxed">Analyzing the specific technical value each player brings to the upcoming tour of Bangladesh.</p>
              </Link>
              <Link to="/red-ball-resilience-overview-2026" className="p-8 bg-white/5 border border-white/5 rounded-[32px] hover:border-pak-green transition-all group hover:bg-white/[0.08] shadow-lg">
                <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-3 italic tracking-[4px]">Tactical Breakdown</p>
                <h4 className="text-xl text-white font-bold group-hover:text-pak-green transition-colors leading-tight font-display mb-4">Red-Ball Resilience: The Spin Duo impact</h4>
                <p className="text-xs text-ink/40 italic leading-relaxed">Why the Sajid-Noman combination is the most critical asset for the 2026–2027 WTC qualifying cycle.</p>
              </Link>
            </div>
          </div>

          <div className="mt-12 p-12 border border-pak-green/20 bg-pak-green/5 rounded-[48px] text-center shadow-2xl">
            <h3 className="text-2xl font-display font-bold uppercase mb-6 text-white tracking-widest italic">Get Real-Time Series Intelligence</h3>
            <p className="text-sm text-ink/60 mb-10 italic max-w-xl mx-auto leading-relaxed">Track every movement in the World Test Championship standings as they happen during the May tour. Our projections are updated every session.</p>
            <Link 
              to="/icc-wtc-projections-2026"
              className="inline-flex items-center gap-3 px-12 py-5 bg-pak-green text-white rounded-3xl text-[12px] font-black uppercase tracking-[4px] hover:scale-105 transition-all shadow-2xl shadow-pak-green/30 hover:rotate-[-1deg]"
            >
              Analyze WTC Scenarios
            </Link>
          </div>

          <AuthorSection authorId="hassan-tariq" />
        </div>
      </motion.div>
    </div>
  );
}
