import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LinkText } from '../components/LinkText';

export default function EvolutionShaheensBlog() {
  return (
    <article className="max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-6">
      <Helmet>
        <title>The Evolution of the Shaheens: Pakistan’s 2026 Squad Strategy</title>
        <meta name="description" content="A deep dive into Pakistan's cricket strategy for 2026. Explore the new Test, ODI, and T20I squad dynamics and the vision for the future of Pakistan cricket." />
        <meta name="keywords" content="Pakistan Cricket Squad 2026, Pakistan Cricket Strategy, Shaheen Shah Afridi, Babar Azam, Pakistan vs Bangladesh 2026" />
      </Helmet>

      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </motion.div>

      {/* Header */}
      <header className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-pak-green/10 text-pak-green text-[10px] font-black uppercase tracking-widest rounded-full border border-pak-green/20">Analysis</span>
             <span className="text-ink/30 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                <Calendar className="w-3 h-3" /> April 28, 2026
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none text-white italic">
            The Evolution of the Shaheens: A Closer Look at <span className="text-pak-green">Pakistan’s 2026 Squad Strategy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
                   <User className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-white tracking-widest">Syed Abbas</p>
                   <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">Lead Cricket Analyst</p>
                </div>
             </div>
             <div className="flex items-center gap-2 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                <Clock className="w-4 h-4" /> 8 Min Read
             </div>
          </div>
        </motion.div>
      </header>

      {/* Feature Image Placeholder */}
      <div className="aspect-[21/9] bg-neutral-900 rounded-[40px] border border-white/5 mb-12 flex items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-br from-pak-green/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
         <TrendingUp className="w-20 h-20 text-pak-green/20 relative z-10" />
         <div className="absolute bottom-8 left-8 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
            <p className="text-[10px] font-black uppercase tracking-widest text-white">Visualizing the 2026 Roadmap</p>
         </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert prose-pak max-w-none space-y-8 text-neutral-400 leading-relaxed italic text-lg">
        <p>
          <LinkText text="The landscape of Pakistan cricket in 2026 is undergoing one of its most significant transformations in decades. Following a roller-coaster T20 World Cup campaign earlier this year, the Pakistan Cricket Board (PCB) has signaled a clear 'vision for the future' by restructuring leadership and injecting a wave of young talent across all three formats." />
        </p>

        <p>
          <LinkText text="As the team prepares for the upcoming tour of Bangladesh this May, the squad announcements have sparked intense debate among fans and analysts alike. From the emergence of uncapped prodigies to the calculated rest given to senior superstars, here is a comprehensive look at the players carrying the hopes of the nation." />
        </p>

        <section className="bg-card-bg border border-card-border p-8 md:p-12 rounded-[48px] my-12">
          <h2 className="text-3xl font-display font-bold uppercase text-pak-green mb-6 not-italic flex items-center gap-4">
             <ShieldCheck className="w-8 h-8" /> 1. The Red-Ball Renaissance
          </h2>
          <p className="mb-6">
            <LinkText text="The Test squad, led by Shan Masood, remains the bedrock of Pakistan's international identity. The focus for the 2025–2027 World Test Championship cycle is clearly on technical discipline and specialized roles." />
          </p>
          <ul className="space-y-6 list-none p-0">
             <li className="flex flex-col gap-2">
                <strong className="text-white text-xl">The Uncapped Quintet:</strong>
                <span className="text-base text-neutral-500">
                   <LinkText text="Perhaps the biggest headline is the inclusion of four uncapped players: Abdullah Fazal, Azan Awais, Amad Butt, and wicket-keeper Muhammad Ghazi Ghori. These selections reward consistent domestic performances in the Quaid-e-Azam Trophy, moving away from the 'T20-performance-based' selection of the past." />
                </span>
             </li>
             <li className="flex flex-col gap-2">
                <strong className="text-white text-xl">The Return of the Specialist:</strong>
                <span className="text-base text-neutral-500">
                   <LinkText text="The recall of Mohammad Abbas highlights a tactical shift. On the potentially slow and low tracks of Dhaka, Abbas’s impeccable line and length are seen as the perfect foil to Shaheen Shah Afridi’s express pace." />
                </span>
             </li>
             <li className="flex flex-col gap-2">
                <strong className="text-white text-xl">The Spin Duo:</strong>
                <span className="text-base text-neutral-500">
                   <LinkText text="In subcontinental conditions, the burden of taking 20 wickets often falls on the slow bowlers. Noman Ali and Sajid Khan retain their spots, tasked with exploiting the wear and tear of Day 4 and 5 pitches." />
                </span>
             </li>
          </ul>
        </section>

        <section>
           <h2 className="text-3xl font-display font-bold uppercase text-white mb-6 not-italic">2. Transition in the White-Ball Ranks</h2>
           <p className="mb-6">
             <LinkText text="The ODI and T20I squads reflect a more aggressive 'youth-first' policy. With Shaheen Shah Afridi taking the reins in ODIs and Salman Ali Agha leading the T20I side, the leadership group has been diversified to manage player workload and tactical focus." />
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                 <h4 className="text-white font-bold mb-3 not-italic">The Babar Azam Factor</h4>
                 <p className="text-sm">
                    <LinkText text="In a move that surprised many, Babar Azam has been rested for the upcoming ODI leg against Bangladesh. The management's goal is to test the bench strength and give players like Shamyl Hussain and Maaz Sadaqat a chance to anchor the innings under pressure." />
                 </p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                 <h4 className="text-white font-bold mb-3 not-italic">The Pace Battery</h4>
                 <p className="text-sm">
                    <LinkText text="While the names Haris Rauf and Naseem Shah remain constants, the introduction of Faisal Akram—a rare left-arm wrist spinner—adds a layer of 'X-factor' that Pakistan has lacked in limited-overs cricket recently." />
                 </p>
              </div>
           </div>
        </section>

        <section className="border-l-4 border-pak-green pl-8 py-4 my-16">
           <h2 className="text-3xl font-display font-bold uppercase text-white mb-6 not-italic">3. A New Era in the Dressing Room</h2>
           <p>
             <LinkText text="The squad is only as good as its guidance, and the 2026 coaching staff marks a nostalgic return to Pakistani legends. The appointment of Sarfaraz Ahmed as the Red-Ball Head Coach, supported by Asad Shafiq and Umar Gul, suggests a move toward a more 'homegrown' coaching philosophy. This trio brings a combined experience of hundreds of international matches, providing a bridge between the legends of the past and the stars of tomorrow." />
           </p>
        </section>

        <section className="bg-neutral-900 p-8 md:p-12 rounded-[48px] text-center border border-white/5">
           <h3 className="text-2xl font-display font-bold uppercase text-white mb-6 not-italic">The Bottom Line</h3>
           <p className="max-w-2xl mx-auto mb-10">
             <LinkText text="Pakistan’s current player list is a blend of world-class experience and raw, untapped potential. While veterans like Mohammad Rizwan and Shaheen Afridi provide the backbone, the success of this 2026 season will depend on how quickly the 'new class'—the likes of Saim Ayub and Sufiyan Muqeem—can adapt to the pressures of international touring." />
           </p>
           <p className="text-xl text-pak-green font-bold uppercase tracking-widest italic">
             "As the Shaheens head to Dhaka this May, they aren't just playing for wins; they are playing to define the identity of Pakistan cricket for the next decade."
           </p>
        </section>
      </div>

      {/* Footer / Actions */}
      <footer className="mt-20 pt-12 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
               <Share2 className="w-4 h-4" /> Share Post
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
               <Bookmark className="w-4 h-4" /> Save Analysis
            </button>
         </div>
         <div className="flex gap-4">
            <Link to="/schedule" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-pak-green transition-colors">Match Schedule</Link>
            <Link to="/squads" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-pak-green transition-colors">Squad Strategy</Link>
         </div>
      </footer>
    </article>
  );
}
