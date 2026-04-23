import { motion } from 'motion/react';
import { Trophy, ChevronLeft, Info, Calendar, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';

const WTC_DATA = [
  { pos: 1, team: 'Australia', matches: 8, won: 7, lost: 1, draw: 0, points: 84, pct: 87.50 },
  { pos: 2, team: 'New Zealand', matches: 3, won: 2, lost: 0, draw: 1, points: 28, pct: 77.78 },
  { pos: 3, team: 'South Africa', matches: 4, won: 3, lost: 1, draw: 0, points: 36, pct: 75.00 },
  { pos: 4, team: 'Sri Lanka', matches: 2, won: 1, lost: 0, draw: 1, points: 16, pct: 66.67 },
  { pos: 5, team: 'Pakistan', matches: 2, won: 1, lost: 1, draw: 0, points: 12, pct: 50.00 },
  { pos: 6, team: 'India', matches: 9, won: 4, lost: 4, draw: 1, points: 52, pct: 48.15 },
  { pos: 7, team: 'England', matches: 10, won: 3, lost: 6, draw: 1, points: 38, pct: 31.67 },
  { pos: 8, team: 'Bangladesh', matches: 2, won: 0, lost: 1, draw: 1, points: 4, pct: 16.67 },
  { pos: 9, team: 'West Indies', matches: 8, won: 0, lost: 7, draw: 1, points: 4, pct: 4.17 },
];

type SortKey = keyof typeof WTC_DATA[0];

export default function WTCStandings() {
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' }>({
    key: 'pos',
    direction: 'asc'
  });

  const sortedData = useMemo(() => {
    const sortableItems = [...WTC_DATA];
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: SortKey) => {
    if (sortConfig.key !== key) return <ArrowUpDown className="w-3 h-3 opacity-20" />;
    return sortConfig.direction === 'asc' ? <ArrowUp className="w-3 h-3 text-pak-green" /> : <ArrowDown className="w-3 h-3 text-pak-green" />;
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Helmet>
        <title>ICC WTC Standings 2026 | World Test Championship Points Table</title>
        <meta name="description" content="Check latest ICC World Test Championship (WTC) rankings 2026 including Pakistan team ranking and points percentage." />
        <meta name="keywords" content="ICC WTC standings 2026, World Test Championship points table, Pakistan WTC ranking, cricket rankings" />
      </Helmet>
      <Link to="/rankings" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Rankings
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-pak-green/10 border border-pak-green/20 flex items-center justify-center">
            <Trophy className="w-6 h-6 text-pak-green" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-ink leading-none">
              ICC <span className="text-pak-green">WTC</span> Standings
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mt-2">
              2025–2027 Cycle • Road to Lord's
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-card-border mt-8">
          <Info className="w-4 h-4 text-pak-green shrink-0" />
          <p className="text-xs text-neutral-400 leading-relaxed font-normal">
            Standings are determined by the <span className="text-ink font-bold italic">Points Percentage (PCT)</span>. Click on table headers to <span className="text-pak-green">sort</span> the data.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card-bg border border-card-border rounded-[32px] overflow-hidden shadow-2xl"
      >
        <div className="p-6 border-b border-card-border bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-2">
             <Calendar className="w-4 h-4 text-neutral-500" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Current Rankings: April 2026</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-pak-green/10 border border-pak-green/20 text-[9px] font-bold uppercase text-pak-green tracking-widest">
            Cycle 3
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.01] text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-card-border">
                <th className="p-6 cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('pos')}>
                  <div className="flex items-center gap-2">Pos {getSortIcon('pos')}</div>
                </th>
                <th className="p-6 cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('team')}>
                  <div className="flex items-center gap-2">Team {getSortIcon('team')}</div>
                </th>
                <th className="p-6 text-center cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('matches')}>
                  <div className="flex items-center justify-center gap-2">Mat {getSortIcon('matches')}</div>
                </th>
                <th className="p-6 text-center cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('won')}>
                  <div className="flex items-center justify-center gap-2">Won {getSortIcon('won')}</div>
                </th>
                <th className="p-6 text-center cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('lost')}>
                  <div className="flex items-center justify-center gap-2">Lost {getSortIcon('lost')}</div>
                </th>
                <th className="p-6 text-center cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('draw')}>
                  <div className="flex items-center justify-center gap-2">Draw {getSortIcon('draw')}</div>
                </th>
                <th className="p-6 text-center cursor-pointer hover:text-ink transition-colors" onClick={() => requestSort('points')}>
                  <div className="flex items-center justify-center gap-2">Points {getSortIcon('points')}</div>
                </th>
                <th className="p-6 text-right text-ink cursor-pointer hover:text-pak-green transition-colors" onClick={() => requestSort('pct')}>
                  <div className="flex items-center justify-end gap-2">PCT (%) {getSortIcon('pct')}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((team) => (
                <tr 
                  key={team.team}
                  className={`border-b border-card-border hover:bg-white/[0.03] transition-colors relative group/row ${team.team === 'Pakistan' ? 'bg-pak-green/5' : ''}`}
                >
                  <td className="p-6 font-mono font-bold text-ink/40">{team.pos}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${team.team === 'Pakistan' ? 'bg-pak-green text-white shadow-lg shadow-pak-green/20' : 'bg-card-bg border border-card-border text-ink/40'}`}>
                        {team.team.substring(0, 2).toUpperCase()}
                      </div>
                      <span className={`font-bold uppercase tracking-tight ${team.team === 'Pakistan' ? 'text-pak-green' : 'text-ink/80'}`}>
                        {team.team}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-center font-normal text-ink/60">{team.matches}</td>
                  <td className="p-6 text-center font-normal text-pak-green">{team.won}</td>
                  <td className="p-6 text-center font-normal text-red-400">{team.lost}</td>
                  <td className="p-6 text-center font-normal text-neutral-500">{team.draw}</td>
                  <td className="p-6 text-center font-bold text-ink">{team.points}</td>
                  <td className="p-6 text-right w-48 relative">
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 text-white rounded-xl text-[10px] whitespace-nowrap opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10 font-bold uppercase tracking-widest">
                      <p>{team.points} Points / {team.matches} Matches</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-900" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className={`text-lg font-display font-bold leading-none mb-2 ${team.team === 'Pakistan' ? 'text-pak-green' : 'text-ink'}`}>
                        {team.pct.toFixed(2)}%
                      </span>
                      <div className="w-full h-2 bg-card-bg border border-card-border rounded-full overflow-hidden shadow-inner p-[1px]">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${team.pct}%` }}
                          className={`h-full rounded-full ${
                            team.team === 'Pakistan' 
                              ? 'bg-pak-green shadow-[0_0_12px_rgba(22,163,74,0.4)]' 
                              : (team.pos <= 3 ? 'bg-ink' : 'bg-ink/20')
                          }`}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="mt-12 p-8 border border-white/5 bg-white/[0.01] rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-pak-green flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white">Scenario Analysis</p>
            <p className="text-[9px] font-bold uppercase tracking-tighter text-neutral-500">Pakistan needs to win 4 of next 6 Tests to climb to Top 3.</p>
          </div>
        </div>
        <Link 
          to="/blogs/red-ball-resilience-overview-2026"
          className="px-8 py-3 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all shadow-xl shadow-black/20"
        >
          View Full WTC Roadmap
        </Link>
      </div>

      <p className="mt-12 text-center text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-700">
        DATA SOURCE: ICC PORTAL // VERIFIED 2026_Cycle_03
      </p>
    </div>
  );
}
