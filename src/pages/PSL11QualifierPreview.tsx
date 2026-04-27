import { motion } from 'motion/react';
import { Zap, Calendar, MapPin, Users, Target, ArrowLeft, Trophy, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthorSection from '../components/AuthorSection';

export default function PSL11QualifierPreview() {
  const matchups = [
    {
      title: "Babar Azam vs. Islamabad’s Pace Attack",
      desc: "Babar has been the anchor for Zalmi, recently becoming the fastest player to 12,000 T20 runs. He faces a diverse attack featuring Mohammad Hasnain and Richard Gleeson."
    },
    {
      title: "Kusal Mendis vs. Chris Green",
      desc: "As the league’s top run-scorer, Mendis's aggressive powerplay intent will be tested by the disciplined spin and variations of Chris Green."
    },
    {
      title: "Shadab Khan vs. Sufiyan Muqeem",
      desc: "A battle of the leg-spinners. Shadab is Islamabad's most vital all-rounder, while Sufiyan Muqeem currently leads the tournament's wicket-taking charts with 19 wickets."
    },
    {
      title: "Mark Chapman vs. Peshawar’s Death Bowlers",
      desc: "Chapman enters the playoffs in red-hot form after a match-winning 69* against Multan. He will likely face the death-overs expertise of Khurram Shahzad or Ali Raza."
    }
  ];

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
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-1 bg-pak-green/10 border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-widest text-pak-green">
            Qualifier 1
          </span>
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
            April 28, 2026
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
          Peshawar Zalmi vs <span className="text-pak-green">Islamabad United</span>: The Battle for the Final
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
               <Trophy className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold uppercase text-white mb-4 italic">The Stakes</h3>
              <p className="text-ink/70 leading-relaxed italic">
                The winner will advance directly to the final on May 3, while the loser will face the winner of Eliminator 1 in a second chance to qualify.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-pak-green" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Tuesday, 28 April 2026</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-pak-green" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">National Bank Stadium, Karachi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <p className="text-xl text-white font-medium leading-relaxed mb-12 italic border-l-4 border-pak-green pl-6">
            The Qualifier 1 of PSL 11 features a high-stakes showdown between table-toppers Peshawar Zalmi and second-placed Islamabad United. As the league's dominant forces collide, momentum and tactical precision will be the deciding factors.
          </p>

          <h2 className="text-3xl mt-12 mb-10">Key Player Matchups to Watch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {matchups.map((m, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-pak-green/30 transition-all">
                <Target className="w-6 h-6 text-pak-green mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-3 italic">{m.title}</h3>
                <p className="text-xs text-ink/60 leading-relaxed font-medium italic">{m.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl mt-12 mb-8 italic">Team Form and Head-to-Head</h2>
          
          <div className="space-y-8 mb-16">
            <div className="p-8 bg-card-bg border border-white/5 rounded-[32px] relative overflow-hidden">
               <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-5 h-5 text-pak-green" />
                  <h4 className="text-xl font-display font-bold text-white uppercase italic">Peshawar Zalmi</h4>
               </div>
               <p className="text-ink/70 italic leading-relaxed">
                  Finished 1st with 17 points, winning eight out of ten league games. They enter the Qualifier with immense momentum, despite a recent narrow loss to Lahore. Their top order, led by Mendis and Babar, is the tournament's gold standard.
               </p>
            </div>

            <div className="p-8 bg-card-bg border border-white/5 rounded-[32px] relative overflow-hidden">
               <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-5 h-5 text-pak-green" />
                  <h4 className="text-xl font-display font-bold text-white uppercase italic">Islamabad United</h4>
               </div>
               <p className="text-ink/70 italic leading-relaxed">
                  Finished 2nd with 14 points. They secured their top-two spot with a crucial victory over Multan Sultans in their final league game. Their strength lies in their balanced all-rounders and the captaincy of Shadab Khan.
               </p>
            </div>
          </div>

          <div className="bg-pak-green/5 border border-pak-green/20 rounded-[40px] p-10 mb-16 text-center">
             <h3 className="text-2xl font-display font-bold uppercase mb-6 text-white tracking-widest italic">Historical Record</h3>
             <div className="flex justify-center items-center gap-12 mb-8">
                <div className="text-center">
                  <p className="text-5xl font-display font-black text-pak-green mb-2">13</p>
                  <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Zalmi Wins</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                   <p className="text-5xl font-display font-black text-white mb-2">13</p>
                   <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">United Wins</p>
                </div>
             </div>
             <p className="text-sm text-ink/60 italic max-w-xl mx-auto">
                The historical record is incredibly balanced, with both teams having 13 wins each across 27 meetings. In the last 10 encounters, the record is split perfectly at 5–5.
             </p>
          </div>

          <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 mb-16 text-center">
            <h3 className="text-2xl font-display font-bold uppercase mb-8 text-white italic">Prediction</h3>
            <p className="text-lg text-ink/80 italic leading-relaxed mb-10">
              "Zalmi's top-order firepower gives them a slight edge, but Islamabad's depth and Karachi's conditions often favor the tactically adaptable United. Expect a thriller that goes down to the last over."
            </p>
            <div className="flex justify-center items-center gap-4">
              <Users className="w-10 h-10 text-pak-green opacity-20" />
              <div className="h-px w-24 bg-white/10" />
              <Zap className="w-10 h-10 text-pak-green opacity-20" />
            </div>
          </div>

          <AuthorSection authorId="zainab-rashid" />
        </div>
      </motion.div>
    </div>
  );
}
