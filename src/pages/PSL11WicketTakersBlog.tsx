import { motion } from 'motion/react';
import { Target, Calendar, Users, Star, TrendingUp, Award, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthorSection from '../components/AuthorSection';
import { LinkText } from '../components/LinkText';

export default function PSL11WicketTakersBlog() {
  const bowlingTable = [
    { rank: 1, player: 'Sufiyan Muqeem', team: 'Peshawar Zalmi', wickets: 19, avg: 14.16, econ: 7.47, sr: 11.37, best: '4/32' },
    { rank: 2, player: 'Shaheen Shah Afridi', team: 'Lahore Qalandars', wickets: 16, avg: 18.19, econ: 7.86, sr: 13.88, best: '4/18' },
    { rank: 3, player: 'Hasan Ali', team: 'Karachi Kings', wickets: 15, avg: 21.53, econ: 9.27, sr: 13.93, best: '4/27' },
    { rank: 4, player: 'Shadab Khan', team: 'Islamabad United', wickets: 14, avg: 12.93, econ: 6.46, sr: 12.00, best: '3/13' },
    { rank: 5, player: 'Mohammad Ali', team: 'Hyderabad Kingsmen', wickets: 13, avg: 20.23, econ: 7.89, sr: 15.38, best: '3/21' },
    { rank: 6, player: 'Peter Siddle', team: 'Multan Sultans', wickets: 13, avg: 24.92, econ: 8.76, sr: 17.08, best: '3/39' },
    { rank: 7, player: 'Iftikhar Ahmed', team: 'Peshawar Zalmi', wickets: 12, avg: 15.92, econ: 7.03, sr: 13.58, best: '4/21' },
    { rank: 8, player: 'Hunain Shah', team: 'Hyderabad Kingsmen', wickets: 12, avg: 18.25, econ: 8.70, sr: 12.58, best: '4/22' },
    { rank: 9, player: 'Mohammad Amir', team: 'Rawalpindiz', wickets: 12, avg: 27.17, econ: 8.81, sr: 18.50, best: '2/21' },
    { rank: 10, player: 'Haris Rauf', team: 'Lahore Qalandars', wickets: 12, avg: 24.08, econ: 9.80, sr: 14.75, best: '3/43' },
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
          <LinkText text="Master of the Maroon Cap: Top 10 Wicket-Takers of PSL 11" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Calendar className="w-5 h-5 text-rose-600 mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Status</p>
            <p className="text-sm font-bold text-white">League Stage Complete</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <Award className="w-5 h-5 text-rose-600 mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Maroon Cap</p>
            <p className="text-sm font-bold text-white">Sufiyan Muqeem (19 Wkts)</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <ShieldCheck className="w-5 h-5 text-rose-600 mb-3" />
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Impact</p>
            <p className="text-sm font-bold text-white">Spin Dominance: 12.93 Avg</p>
          </div>
        </div>

        <div className="prose prose-invert prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter max-w-none">
          <p className="text-xl text-white font-medium leading-relaxed mb-8 italic border-l-4 border-rose-600 pl-6">
            <LinkText text="As of the conclusion of the PSL 11 league stage on 27 April 2026, Sufiyan Muqeem of Peshawar Zalmi leads the bowling charts with 19 wickets, holding the prestigious Maroon Cap. He is followed by Shaheen Shah Afridi (16 wickets) and Hasan Ali (15 wickets). While Shaheen and Hasan will not add to their tallies as their teams were eliminated, Muqeem and others in the top 10 from playoff-bound teams have a chance to secure the Fazal Mahmood Award." />
          </p>

          <p>
            <LinkText text="While batters often steal the limelight with towering sixes, the 11th edition of the Pakistan Super League (PSL) in 2026 has been a showcase of bowling masterclasses. From Sufiyan Muqeem’s lethal left-arm wrist spin to the high-velocity pace of the usual suspects, the race for the Maroon Cap has been one of the most competitive in recent memory." />
          </p>

          <h2 className="text-3xl mt-12 mb-6">The Top 10 Bowling Leaderboard (League Stage Results)</h2>
          <p className="text-ink/60 mb-6 italic">
            The following statistics are updated as of 27 April 2026, following the completion of the 40-match group stage.
          </p>

          <div className="overflow-x-auto bg-white/5 rounded-[32px] border border-white/5 mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Rank</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Player</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500">Team</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Wkts</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Avg</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Econ</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-center">Best</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bowlingTable.map((row) => (
                  <tr key={row.rank} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-6">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-black ${
                        row.rank <= 3 ? 'bg-rose-600 text-white' : 'bg-white/5 text-white/40'
                      }`}>
                        {row.rank}
                      </span>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                        <LinkText text={row.player} />
                      </p>
                    </td>
                    <td className="p-6">
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                        <LinkText text={row.team} />
                      </p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-sm font-black text-white tabular-nums">{row.wickets}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-sm font-bold text-ink tabular-nums">{row.avg.toFixed(2)}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-sm font-bold text-ink tabular-nums">{row.econ.toFixed(2)}</p>
                    </td>
                    <td className="p-6 text-center">
                      <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">{row.best}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl mt-12 mb-10">Key Bowling Narratives of PSL 11</h2>
          
          <div className="space-y-12">
            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-rose-600 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">
                <LinkText text="1. The Rise of Sufiyan Muqeem (Peshawar Zalmi)" />
              </h3>
              <p className="text-ink/70 leading-relaxed italic">
                <LinkText text="Emerging as the primary match-winner for the 'Yellow Storm,' Muqeem has been unplayable during the middle overs. His 19 wickets at a strike rate of 11.37 mean he strikes nearly twice every match. Holding the Maroon Cap, he is the heavy favorite to win the Fazal Mahmood Award for the tournament's leading bowler." />
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-rose-600 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">
                <LinkText text="2. The Wicket-Taking Efficiency of Shadab Khan (Islamabad United)" />
              </h3>
              <p className="text-ink/70 leading-relaxed italic">
                <LinkText text="While others have more wickets, Shadab Khan has arguably been the most efficient. His average of 12.93 and economy of 6.46 are the best among the top 10, highlighting his ability to both take wickets and choke the scoring rate." />
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-rose-600 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">
                <LinkText text="3. Early Blows: The Iftikhar Ahmed Experiment" />
              </h3>
              <p className="text-ink/70 leading-relaxed italic">
                <LinkText text="One of the tactical surprises of 2026 was using Iftikhar Ahmed in the powerplay. He rewarded Peshawar Zalmi with 12 wickets, including a career-best 4/9 against Hyderabad Kingsmen, becoming one of only four bowlers in PSL history to take four wickets inside the powerplay." />
              </p>
            </div>

            <div className="relative pl-12 border-l border-white/10 group">
              <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-rose-600 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-display font-bold text-white mb-4 italic">
                <LinkText text="4. Farewell to the Leaders" />
              </h3>
              <p className="text-ink/70 leading-relaxed italic">
                <LinkText text="A significant twist as the league stage wrapped up is the elimination of Lahore Qalandars and Karachi Kings. This means that Shaheen Shah Afridi (16 wickets) and Hasan Ali (15 wickets), currently 2nd and 3rd on the list, cannot increase their tallies, leaving the door wide open for Shadab Khan and Mohammad Ali to overtake them during the playoffs." />
              </p>
            </div>
          </div>

          <div className="bg-rose-600/10 rounded-[40px] p-10 my-16 border border-rose-600/20 text-center shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none rotate-12 group-hover:rotate-0 transition-transform duration-700">
               <TrendingUp className="w-64 h-64 border" />
            </div>
            <h2 className="text-3xl font-display font-bold uppercase mb-6 text-white tracking-widest italic relative z-10">Looking Ahead to the Playoffs</h2>
            <p className="text-ink/70 leading-relaxed mb-8 italic relative z-10 max-w-2xl mx-auto">
              With the Qualifier 1 between Peshawar Zalmi and Islamabad United scheduled for 28 April, all eyes will be on the battle between Muqeem and Shadab. The winner of this high-stakes spin-off will likely determine which team heads straight to the final in Lahore.
            </p>
            <Link 
              to="/schedule"
              className="inline-flex items-center gap-3 px-12 py-5 bg-rose-600 text-white rounded-3xl text-[12px] font-black uppercase tracking-[4px] hover:scale-105 transition-all shadow-2xl shadow-rose-600/30 relative z-10"
            >
              View Playoff Schedule
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/[0.08] transition-all">
                <Star className="w-12 h-12 text-rose-600 mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">Spin Revolution</h3>
                <p className="text-sm text-ink/50 leading-relaxed italic italic">
                    For the first time in PSL history, the top wicket-taker at the end of the league stage is a wrist spinner. Sufiyan Muqeem's rise signals a shift in T20 bowling strategies.
                </p>
            </div>
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/[0.08] transition-all">
                <Target className="w-12 h-12 text-rose-600 mb-6" />
                <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">The Pace Duel</h3>
                <p className="text-sm text-ink/50 leading-relaxed italic italic">
                    While spin dominated, the pace of Shaheen Afridi and Hasan Ali kept them in the top 3, even as their teams struggled to qualify for the next round.
                </p>
            </div>
          </div>

          <AuthorSection authorId="omar-farooq" />
        </div>
      </motion.div>
    </div>
  );
}
