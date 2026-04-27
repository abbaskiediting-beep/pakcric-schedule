import { motion } from 'motion/react';
import { Zap, Calendar, MapPin, Users, Target, ArrowLeft, Trophy, Activity, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthorSection from '../components/AuthorSection';
import { LinkText } from '../components/LinkText';
import { Helmet } from 'react-helmet-async';

export default function PSL11QualifierPreview() {
  const pzPlayingXI = [
    "James Vince", "Babar Azam (C)", "Kusal Mendis (WK)", "Iftikhar Ahmed",
    "Abdul Samad", "Michael Bracewell", "Aaron Hardie", "Farhan Yousaf",
    "Aamer Jamal", "Sufiyan Muqeem", "Mohammad Basit"
  ];

  const isuPlayingXI = [
    "Devon Conway", "Andries Gous (WK)", "Mark Chapman", "Shadab Khan (C)",
    "Haider Ali", "Imad Wasim", "Faheem Ashraf", "Chris Green or Dipendra Singh Airee",
    "Mohammad Hasnain", "Shamar Joseph or Richard Gleeson", "Mehran Mumtaz"
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>PSL 11 Qualifier 1: PZ vs ISU Playing XI & Preview</title>
        <meta name="description" content="Get PSL 11 Qualifier 1 details: Peshawar Zalmi vs Islamabad United Playing XI, match preview, and expert prediction for the road to the final in Karachi." />
        <meta name="keywords" content="PSL 11 Qualifier 1, PSL playoff match 2026, Zalmi vs United playing XI, PSL qualifier match preview" />
      </Helmet>

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
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-1 bg-pak-green/10 border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest text-pak-green">
            PSL 11 Qualifier 1
          </span>
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
            April 28, 2026
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
          PSL 11 Qualifier 1: Peshawar Zalmi vs Islamabad United <span className="text-pak-green">Playing XI</span>, Match Preview & Prediction
        </h1>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none mb-12">
          <p className="text-xl text-white font-medium leading-relaxed italic border-l-4 border-pak-green pl-6 mb-8">
            <LinkText text="The road to the PSL 11 Final begins here! Table-toppers Peshawar Zalmi face off against the powerhouse Islamabad United in Qualifier 1. It's a battle of tactical brilliance, raw pace, and legendary leadership at the National Bank Stadium, Karachi." />
          </p>

          <p>
            The <LinkText text="PSL 11 Qualifier 1" /> is finally upon us, and cricket fans couldn’t have asked for a better matchup. On one side, we have the most consistent team of the season, Peshawar Zalmi, led by the unflappable <LinkText text="Babar Azam" />. On the other, the two-time champions Islamabad United, captained by the versatile <LinkText text="Shadab Khan" />. This isn't just a <LinkText text="PSL playoff match 2026" />; it’s a high-octane encounter where the winner secures a direct ticket to the grand final on May 3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-display font-bold uppercase mb-6 text-white italic">Match Details</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Trophy className="w-5 h-5 text-pak-green" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">PSL 11 Qualifier 1</span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-pak-green" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Tuesday, 28 April 2026</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-pak-green" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">National Bank Stadium, Karachi</span>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-pak-green" />
                <span className="text-sm font-bold text-white uppercase tracking-wider italic">Winner to Final, Loser to Eliminator 2</span>
              </div>
            </div>
          </div>

          <div className="relative group rounded-[32px] overflow-hidden bg-pak-green/10 flex items-center justify-center p-8 border border-pak-green/20">
            <Activity className="w-32 h-32 text-pak-green opacity-20 absolute" />
            <div className="text-center relative z-10">
              <p className="text-[10px] font-bold text-pak-green uppercase tracking-[0.4em] mb-4">Strategic Matchup</p>
              <h3 className="text-3xl font-display font-light text-white uppercase mb-4 tracking-tighter">Zalmi vs United</h3>
              <p className="text-xs text-ink/60 font-medium leading-relaxed italic">"A clash between Zalmi's technical precision and United's aggressive depth."</p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <h2 className="text-3xl mt-12 mb-8">Peshawar Zalmi (PZ) Playing XI Analysis</h2>
          <p>
            Peshawar Zalmi has built their <LinkText text="Zalmi vs United playing XI" /> around a rock-solid top order. The addition of James Vince provides them with that early aggression needed in Karachi.
          </p>
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 mb-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 m-0 list-none p-0">
              {pzPlayingXI.map((player, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-white italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> {player}
                </li>
              ))}
            </ul>
          </div>
          <p>
            The "Yellow Storm" will rely heavily on <LinkText text="Babar Azam" />'s ability to anchor the innings, allowing <LinkText text="Kusal Mendis" /> and <LinkText text="Iftikhar Ahmed" /> to play their natural game. In the bowling department, <LinkText text="Sufiyan Muqeem" /> has been the standout performer, providing crucial breakthroughs in the middle overs.
          </p>

          <h2 className="text-3xl mt-16 mb-8">Islamabad United (ISU) Playing XI Analysis</h2>
          <p>
            Islamabad United's strategy has always been about depth. Their lineup features all-rounders down to number 8, making them one of the hardest teams to defend a total against.
          </p>
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 mb-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 m-0 list-none p-0">
              {isuPlayingXI.map((player, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-white italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> {player}
                </li>
              ))}
            </ul>
          </div>
          <p>
            The return of <LinkText text="Devon Conway" /> has stabilized their opening pair. With <LinkText text="Shadab Khan" /> and <LinkText text="Imad Wasim" /> operating in tandem during the middle overs, Islamabad possesses perhaps the most disciplined spin-bowling duo in the competition.
          </p>

          <div className="my-16 flex items-center justify-center py-20 bg-neutral-900 border border-white/5 rounded-[48px] relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <Users className="w-96 h-96" />
             </div>
             <p className="text-neutral-500 font-display font-bold uppercase tracking-widest text-[10px]">[Insert image: Team CaptainsBabara Azam and Shadab Khan at the Toss]</p>
          </div>

          <h2 className="text-3xl mt-16 mb-10">Key Player Battles: The Difference Makers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
              <Star className="w-6 h-6 text-pak-green mb-4" />
              <h3 className="text-xl font-bold mb-4 italic">Babar Azam vs Shadab Khan</h3>
              <p className="text-sm text-ink/60 italic leading-relaxed">
                The ultimate tactical duel. Babar’s technical superiority against Shadab’s deceptive leg-spin will likely define the momentum of the first innings.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
              <Target className="w-6 h-6 text-pak-green mb-4" />
              <h3 className="text-xl font-bold mb-4 italic">Kusal Mendis vs Mohammad Hasnain</h3>
              <p className="text-sm text-ink/60 italic leading-relaxed">
                Mendis’s explosive powerplay hitting against Hasnain’s raw pace. If Hasnain can remove Mendis early, Zalmi’s scoring rate could drop significantly.
              </p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-8">Match Strategy: The Karachi Factor</h2>
          <p>
            The National Bank Stadium in Karachi has shown a tendency to assist spinners as the match progresses. In this <LinkText text="PSL qualifier match preview" />, we believe that the toss will be crucial. Winning the toss and batting first might be the preferred option, allowing the spinners like Muqeem and Mehran Mumtaz to exploit any wear and tear on the surface during the second innings.
          </p>

          <div className="bg-pak-green/10 p-10 rounded-[40px] border border-pak-green/20 mb-16 text-center">
            <h3 className="text-2xl font-display font-black uppercase text-pak-green mb-6 italic tracking-widest">Match Prediction</h3>
            <p className="text-lg text-white font-medium leading-relaxed italic mb-0">
              "While Islamabad United has incredible depth, Peshawar Zalmi's top-order form and the wicket-taking ability of Sufiyan Muqeem give them a slight edge. We predict Zalmi to win a close contest and advance to the final."
            </p>
          </div>

          <div className="my-16 flex items-center justify-center py-20 bg-neutral-900 border border-white/5 rounded-[48px] relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <Target className="w-96 h-96" />
             </div>
             <p className="text-neutral-500 font-display font-bold uppercase tracking-widest text-[10px]">[Insert image: National Bank Stadium Karachi Lights]</p>
          </div>

          <h2 className="text-3xl mt-16 mb-8">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-6 mb-16">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold text-pak-green mb-2 italic">Who is the favorites for Qualifier 1?</h4>
              <p className="text-sm text-ink/60 leading-relaxed italic">Currently, Peshawar Zalmi are slightly favored due to their top-place finish, but Islamabad's H2H records make them formidable opponents.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold text-pak-green mb-2 italic">Where can I watch the PSL 11 Qualifier?</h4>
              <p className="text-sm text-ink/60 leading-relaxed italic">The match will be broadcasted on PTV Sports, A Sports, and live-streamed on Tamasha App in Pakistan.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-lg font-bold text-pak-green mb-2 italic">What happens to the loser of Qualifier 1?</h4>
              <p className="text-sm text-ink/60 leading-relaxed italic">The loser still gets another chance. They will face the winner of Eliminator 1 (Quetta vs Multan) in Eliminator 2.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-12 mb-8 italic">Conclusion</h2>
          <p className="text-lg text-ink/70 leading-relaxed mb-12">
            The stage is set for a historic night in Karachi. With world-class talent on both sides, the <LinkText text="PSL 11 Qualifier 1" /> promises to be a spectacle of elite cricket. Whether it's Zalmi's power or United's depth that prevails, the fans are the real winners.
          </p>

          <div className="bg-pak-green p-12 rounded-[40px] text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase mb-6 tracking-tighter">Join the Conversation!</h3>
            <p className="text-white/80 font-medium mb-8 italic">Who do you think will come out on top? Comment your predictions below!</p>
            <Link to="/schedule" className="inline-block px-10 py-4 bg-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-neutral-900 transition-all">View Full Playoff Schedule</Link>
          </div>

          <AuthorSection authorId="zainab-rashid" />
        </div>
      </motion.div>
    </div>
  );
}

