import { motion } from 'motion/react';
import { Trophy, Calendar, Users, Star, TrendingUp, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthorSection from '../components/AuthorSection';

export default function PSL11RunScorersBlog() {
  const batsTable = [
    { rank: 1, player: 'Kusal Mendis', team: 'Peshawar Zalmi', runs: 500, avg: 62.50, sr: 170.65, fours: 45, sixes: 22 },
    { rank: 2, player: 'Babar Azam', team: 'Peshawar Zalmi', runs: 485, avg: 80.83, sr: 141.40, fours: 48, sixes: 11 },
    { rank: 3, player: 'Fakhar Zaman', team: 'Lahore Qalandars', runs: 401, avg: 57.29, sr: 151.89, fours: 48, sixes: 12 },
    { rank: 4, player: 'Steven Smith', team: 'Multan Sultans', runs: 367, avg: 36.70, sr: 163.11, fours: 37, sixes: 18 },
    { rank: 5, player: 'Sahibzada Farhan', team: 'Multan Sultans', runs: 365, avg: 45.62, sr: 168.98, fours: 31, sixes: 23 },
    { rank: 6, player: 'Rilee Rossouw', team: 'Quetta Gladiators', runs: 317, avg: 39.62, sr: 142.79, fours: 31, sixes: 14 },
    { rank: 7, player: 'Sameer Minhas', team: 'Islamabad United', runs: 299, avg: 42.71, sr: 151.78, fours: 34, sixes: 11 },
    { rank: 8, player: 'Shan Masood', team: 'Multan Sultans', runs: 298, avg: 37.25, sr: 160.22, fours: 26, sixes: 11 },
    { rank: 9, player: 'Hasan Nawaz', team: 'Quetta Gladiators', runs: 291, avg: 32.33, sr: 134.10, fours: 24, sixes: 13 },
    { rank: 10, player: 'Saud Shakeel', team: 'Quetta Gladiators', runs: 280, avg: 28.00, sr: 132.08, fours: 33, sixes: 6 },
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
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-tight">
          PSL 11: The Elite <span className="text-pak-green">Run-Scorers</span> of the 2026 Season
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Calendar className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Status</p>
            <p className="text-sm font-bold text-white">League Stage Complete</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Trophy className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Top Scorer</p>
            <p className="text-sm font-bold text-white">Kusal Mendis (500 Runs)</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Users className="w-5 h-5 text-pak-green mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Impact</p>
            <p className="text-sm font-bold text-white">Qualifier: 28 April</p>
          </div>
        </div>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-pak-green pl-6">
            As of the conclusion of the league stage in April 2026, Kusal Mendis of Peshawar Zalmi leads the run-scoring charts with 500 runs, closely followed by his captain Babar Azam with 485 runs. The upcoming playoffs, starting on 28 April with the Qualifier between Peshawar Zalmi and Islamabad United, will provide these top performers a final chance to secure the prestigious Green Cap.
          </p>

          <p>
            The 11th edition of the Pakistan Super League (PSL) has been a masterclass in modern T20 batting. From seasoned anchors like <strong>Babar Azam</strong> to explosive international stars like <strong>Kusal Mendis</strong> and <strong>Steven Smith</strong>, the 2026 season has seen consistent high scores and record-breaking strike rates. As we head into the playoffs, here is a detailed breakdown of the top 10 batsmen who have dominated the league stage.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Top 10 Batsmen Leaderboard (PSL 11 League Stage)</h2>
          <p className="text-ink/60 mb-6 italic">
            The following statistics represent the top performers as of 27 April 2026, following the completion of the 40-match league phase.
          </p>

          <div className="overflow-x-auto bg-white/5 rounded-[32px] border border-white/5 mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Rank</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Player</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Team</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Runs</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Avg</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">SR</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">4s/6s</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {batsTable.map((row) => (
                  <tr key={row.rank} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-6">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-black ${
                        row.rank <= 3 ? 'bg-pak-green text-white' : 'bg-white/5 text-white/40'
                      }`}>
                        {row.rank}
                      </span>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-bold text-white group-hover:text-pak-green transition-colors">{row.player}</p>
                    </td>
                    <td className="p-6">
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{row.team}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-sm font-black text-white tabular-nums">{row.runs}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-sm font-bold text-ink tabular-nums">{row.avg.toFixed(2)}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-sm font-bold text-ink tabular-nums">{row.sr.toFixed(2)}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-[10px] font-black text-pak-green uppercase">{row.fours} / {row.sixes}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-10">Strategic Analysis of the Top 5</h2>
          
          <div className="space-y-12">
            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-pak-green group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">1. Kusal Mendis (Peshawar Zalmi)</h3>
              <p className="text-ink/70 leading-relaxed italic">
                Mendis has been the revelation of PSL 11. With a high score of 109, he has provided the "Zalmi Storm" with explosive starts. His strike rate of 170.65 is the highest among the top 10 run-getters, making him the most dangerous powerplay batter this season.
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-pak-green group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">2. Babar Azam (Peshawar Zalmi)</h3>
              <p className="text-ink/70 leading-relaxed italic">
                The "Captain Consistent" continues to rewrite history. Babar reached a milestone of 4,000 PSL career runs this season and currently boasts an astronomical average of 80.83. While Mendis provides the fire, Babar provides the ice, anchoring the innings with a century of his own (100*).
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-pak-green group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">3. Fakhar Zaman (Lahore Qalandars)</h3>
              <p className="text-ink/70 leading-relaxed italic">
                Despite Lahore's mixed fortunes, Fakhar has been their sole warrior. His 103 off 51 balls against Quetta was a season highlight. He remains the most frequent boundary-hitter alongside Babar, consistently finding the ropes with 48 fours.
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-pak-green group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">4. Steven Smith (Multan Sultans)</h3>
              <p className="text-ink/70 leading-relaxed italic">
                The Australian legend adapted seamlessly to the Sultans' middle order. His century (106) showcased his ability to manipulate fields, and his strike rate of 163.11 proved that he can still accelerate against high-quality pace.
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-pak-green group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">5. Sahibzada Farhan (Multan Sultans)</h3>
              <p className="text-ink/70 leading-relaxed italic">
                Farhan has been the most prolific six-hitter among the top run-scorers, clearing the fence 23 times. His strike rate of 168.98 highlights his role as the aggressor for the Sultans, often outscoring his partners in the middle overs.
              </p>
            </div>
          </div>

          <div className="bg-pak-green/10 rounded-[40px] p-10 my-16 border border-pak-green/20 text-center shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none rotate-12 group-hover:rotate-0 transition-transform duration-700">
               <TrendingUp className="w-64 h-64 border" />
            </div>
            <h2 className="text-3xl font-display font-bold uppercase mb-6 text-white tracking-widest italic relative z-10">What’s Next?</h2>
            <p className="text-ink/70 leading-relaxed mb-8 italic relative z-10 max-w-2xl mx-auto">
              The battle for the Green Cap (Hanif Mohammad Award) is now down to the wire. With Peshawar Zalmi’s duo of Mendis and Babar leading the pack, the Qualifier against Islamabad United on 28 April will be a defining moment for the leaderboard.
            </p>
            <Link 
              to="/schedule"
              className="inline-flex items-center gap-3 px-12 py-5 bg-pak-green text-white rounded-3xl text-[12px] font-black uppercase tracking-[4px] hover:scale-105 transition-all shadow-2xl shadow-pak-green/30 relative z-10"
            >
              View Playoff Schedule
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/[0.08] transition-all">
                <Star className="w-12 h-12 text-pak-green mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">Zalmi Dominance</h3>
                <p className="text-sm text-ink/50 leading-relaxed italic italic">
                    With both the #1 and #2 run-scorers in their ranks, Peshawar Zalmi enter the playoffs as the statistical favorites. Their top-order stability is unmatched this season.
                </p>
            </div>
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/[0.08] transition-all">
                <Target className="w-12 h-12 text-pak-green mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">The Six Factory</h3>
                <p className="text-sm text-ink/50 leading-relaxed italic italic">
                    Sahibzada Farhan and Kusal Mendis represent the new era of PSL power-hitting, combining for 45 sixes between them in the league stage.
                </p>
            </div>
          </div>

          <AuthorSection authorId="zainab-rashid" />
        </div>
      </motion.div>
    </div>
  );
}
