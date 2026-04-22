import { motion } from 'motion/react';
import { Calendar, MapPin, Trophy, Users, Shield, Star, Info, ArrowLeft, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PakistanTourBangladeshSquadBlog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Analysis
      </Link>

      <motion.article 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
          Pakistan Tour of Bangladesh 2026: <span className="text-pak-green">Squads and Complete Schedule</span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-ink/80 leading-relaxed mb-8">
            As the cricketing world turns its attention to the red-ball format, Pakistan is set for a high-stakes two-Test series in Bangladesh this May. This series is a pivotal part of the 2025–2027 World Test Championship, with both teams eager to climb the standings in what is expected to be a classic subcontinental battle.
          </p>

          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-pak-green" />
            The Series Schedule
          </h2>
          <p className="text-ink/60 mb-6">
            The tour is divided into two major venues, starting in the bustling capital and moving to the picturesque landscapes of Sylhet.
          </p>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Match</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Dates</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">Venue</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500 text-right">Time (PKT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">1st Test</td>
                  <td className="p-4 text-xs">8 May – 12 May 2026</td>
                  <td className="p-4 text-xs">Sher-e-Bangla Stadium, Dhaka</td>
                  <td className="p-4 text-xs font-mono text-right">9:00 AM</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">2nd Test</td>
                  <td className="p-4 text-xs">16 May – 20 May 2026</td>
                  <td className="p-4 text-xs">Sylhet International Stadium, Sylhet</td>
                  <td className="p-4 text-xs font-mono text-right">9:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-4 p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl mb-12">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-100/70 m-0">
              The team's preparation includes a training camp in Karachi from 27 April to 1 May, after which the squad will fly to Bangladesh on 2 May.
            </p>
          </div>

          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-pak-green" />
            Pakistan’s 16-Member Test Squad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">Leader</span>
                </div>
                <p className="text-xl font-bold text-white mb-1">Shan Masood</p>
                <p className="text-[10px] text-pak-green font-bold uppercase">Captain</p>
              </div>

              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">Batting Unit</span>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-ink/70">
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Babar Azam</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Imam-ul-Haq</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Saud Shakeel</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-blue-400">Abdullah Fazal (U)</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-blue-400">Azan Awais (U)</span>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                 <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 block mb-4">All-rounder</span>
                 <p className="text-white font-bold">Salman Ali Agha</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 block mb-4">Fast Bowlers</span>
                <div className="flex flex-wrap gap-2 text-sm text-ink/70">
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Shaheen Afridi</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Hasan Ali</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Mohammad Abbas</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Khurram Shahzad</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-blue-400">Amad Butt (U)</span>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 block mb-4">Spinners</span>
                <div className="flex flex-wrap gap-2 text-sm text-ink/70">
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Noman Ali</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">Sajid Khan</span>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 block mb-4">Keepers</span>
                <div className="flex flex-wrap gap-2 text-sm text-ink/70">
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-white font-bold">Mohammad Rizwan</span>
                  <span className="px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-blue-400">Muhammad Ghazi Ghori (U)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pak-green/10 border border-pak-green/20 rounded-3xl p-8 mb-12">
             <h3 className="text-lg font-bold uppercase text-white mb-4">Management Spotlight</h3>
             <p className="text-sm text-ink/70 leading-relaxed m-0">
               In a significant move, former captain <span className="text-white font-bold">Sarfaraz Ahmed</span> has been appointed as the Head Coach for this tour, supported by <span className="text-white font-bold">Asad Shafiq</span> (Batting Coach) and <span className="text-white font-bold">Umar Gul</span> (Bowling Coach).
             </p>
          </div>

          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-6">Bangladesh Team Outlook</h2>
          <p className="text-ink/70 leading-relaxed">
            While the official Test squad for Bangladesh is typically finalized closer to the match date, the core remains strong under the expected leadership of Mehidy Hasan Miraz or Najmul Hossain Shanto. Their recent performance in the March ODI series—where they secured a 2–1 victory against Pakistan—gives them significant home-turf momentum.
          </p>

          <h2 className="text-3xl font-display font-bold text-pak-green uppercase tracking-tighter mt-12 mb-6 text-center">Strategic Context: What’s at Stake?</h2>
          <p className="text-ink/70 leading-relaxed">
            For Pakistan, this series is about redemption. After an early exit from the T20 World Cup 2026 and a mixed result in the March ODIs, the "Shaheens" need a dominant red-ball performance to stay in contention for the WTC Final. The inclusion of veteran Mohammad Abbas highlights a strategic return to disciplined line-and-length bowling to counter the flat, turning tracks of Bangladesh.
          </p>
          
          <p className="text-ink/70 leading-relaxed mt-6">
            Bangladesh, on the other hand, will look to exploit their home advantage. The Sher-e-Bangla Stadium in Dhaka is notorious for its spin-friendly nature, which could favor their deep pool of slow bowlers. Sylhet, often offering a bit more for the seamers, will provide a different tactical challenge in the second match.
          </p>

          <div className="mt-16 p-8 border border-white/10 bg-white/5 rounded-[32px] text-center">
            <ClipboardList className="w-12 h-12 text-pak-green mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold uppercase mb-4 text-white">Interactive Scouting</h3>
            <p className="text-xs text-ink/60 mb-6">Compare player stats side-by-side or analyze previous team performances.</p>
            <div className="flex justify-center gap-4">
              <Link to="/squads" className="px-8 py-3 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all">
                Full Squad Profiles
              </Link>
              <Link to="/schedule" className="px-8 py-3 border border-white/10 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-white transition-all">
                Series Schedule
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
