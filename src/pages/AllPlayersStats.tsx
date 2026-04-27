import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PLAYER_STATS } from '../playerData';
import { TrendingUp, User, Search, Filter, ArrowUpDown, ChevronRight, Trophy, Zap, Target, Activity } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function AllPlayersStats() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [sortKey, setSortKey] = useState<'runs' | 'wickets' | 'avg' | 'name'>('runs');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const roles = ['All', 'Batter', 'Bowler', 'All-rounder', 'Wicketkeeper Batter'];

  const players = useMemo(() => {
    let result = Object.values(PLAYER_STATS);

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (roleFilter !== 'All') {
      result = result.filter(p => p.role === roleFilter);
    }

    result.sort((a, b) => {
      let valA: any = 0;
      let valB: any = 0;

      if (sortKey === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else {
        valA = a.stats[sortKey] || 0;
        valB = b.stats[sortKey] || 0;
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [searchQuery, roleFilter, sortKey, sortOrder]);

  const toggleSort = (key: typeof sortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6">
      <Helmet>
        <title>Pakistan Players Stats 2026 – Batting, Bowling & All Format Records</title>
        <meta name="description" content="Explore Pakistan cricket players stats 2026 including runs, wickets, averages, and performance in Test, ODI, and T20 formats." />
        <meta name="keywords" content="Pakistan players stats, Pakistan cricket stats 2026, Babar Azam stats, Shaheen Afridi stats, Pakistan cricket team records, batting records, bowling records" />
      </Helmet>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 mb-8 md:mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="inline-block px-3 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[2px] mb-4">Statistics Hub</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 md:mb-6 text-white leading-tight">
            Pakistan Players Stats – <span className="text-pak-green">Batting, Bowling & Records</span>
          </h1>
          <div className="max-w-3xl space-y-4 mb-6 md:mb-8">
            <p className="text-base md:text-lg text-ink/70 font-medium leading-relaxed">
              If you want to understand how the Pakistan cricket team is performing, player statistics are the best place to start.
            </p>
            <p className="hidden md:block text-ink/50 font-medium leading-relaxed">
              This page gives you a complete overview of Pakistan players’ stats across all formats, including Test, ODI, and T20 cricket. From top run scorers to leading wicket-takers, everything is presented in a clear and easy-to-read format.
            </p>
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-[3px] text-pak-green/60">
              Check recent performances in one place.
            </p>
          </div>
          <p className="text-ink/40 font-bold uppercase tracking-widest text-[9px] md:text-[10px] border-l-2 border-pak-green pl-4">
            Comprehensive data covering {players.length} active squad members
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative group w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-pak-green transition-colors" />
            <input 
              type="text" 
              placeholder="Search player name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card-bg border border-card-border rounded-2xl py-4 pl-12 pr-6 text-xs font-bold uppercase tracking-wide focus:outline-none focus:border-pak-green/30 transition-all w-full text-ink shadow-sm"
            />
          </div>
          <div className="relative w-full md:w-56">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none bg-card-bg border border-card-border rounded-2xl py-4 pl-12 pr-10 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green/30 transition-all w-full text-ink cursor-pointer"
            >
              {roles.map(role => <option key={role} value={role}>{role}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Top Ad for Stats Hub */}
      <AdPlaceholder type="leaderboard" className="mb-12" />

      {/* Top 3 High Performers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
        {players.slice(0, 3).map((player, idx) => (
          <motion.div 
            key={player.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-card-bg border border-card-border rounded-[24px] md:rounded-[32px] p-5 md:p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Trophy className="w-20 h-20 md:w-24 md:h-24" />
            </div>
            <div className="flex items-center gap-4 md:gap-6 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                {player.imgUrl ? <img src={player.imgUrl} alt={player.name} referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-contain" /> : <User className="w-8 h-8 md:w-10 md:h-10 text-white/20" />}
              </div>
              <div className="min-w-0">
                <span className={`text-[7px] md:text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 md:mb-2 inline-block ${idx === 0 ? 'bg-amber-500 text-black' : 'bg-pak-green/20 text-pak-green'}`}>
                  {idx === 0 ? 'Top Performer' : player.role}
                </span>
                <h3 className="text-base md:text-lg font-display font-bold text-white uppercase truncate">{player.name}</h3>
                <div className="flex gap-4 mt-1.5 md:mt-2">
                  <div>
                    <p className="text-[7px] md:text-[8px] font-bold text-neutral-500 uppercase">Runs</p>
                    <p className="text-xs md:text-sm font-bold text-white tabular-nums">{player.stats.runs || '—'}</p>
                  </div>
                  <div>
                    <p className="text-[7px] md:text-[8px] font-bold text-neutral-500 uppercase">Avg</p>
                    <p className="text-xs md:text-sm font-bold text-white tabular-nums">{player.stats.avg}</p>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              to={`/player/${player.name.toLowerCase().replace(/ /g, '-')}`}
              className="mt-5 md:mt-6 flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[9px] font-bold uppercase tracking-widest text-ink/60 hover:text-white transition-all"
            >
              Detailed Audit <ChevronRight className="w-3 h-3" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mid-content Banner Ad */}
      <AdPlaceholder type="banner" className="mb-12" />

      {/* Detailed Analysis Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        {/* Batting Stats Intro */}
        <section className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-10 relative overflow-hidden group hover:border-pak-green/20 transition-all">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-pak-green/5 blur-[80px] rounded-full group-hover:bg-pak-green/10 transition-all" />
          <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-4 md:mb-6">
            Pakistan <span className="text-pak-green">Batting Stats</span>
          </h2>
          <div className="space-y-4 text-ink/60 text-sm md:text-base font-medium leading-relaxed">
            <p>
              Batting statistics show how consistently players are scoring runs and contributing to the team. Analyzing these numbers helps identify the most reliable batsmen and in-form players.
            </p>
          </div>
        </section>

        {/* Bowling Stats Intro */}
        <section className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-10 relative overflow-hidden group hover:border-pak-green/20 transition-all">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-all" />
          <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-4 md:mb-6">
            Pakistan <span className="text-pak-green">Bowling Stats</span>
          </h2>
          <div className="space-y-4 text-ink/60 text-sm md:text-base font-medium leading-relaxed">
            <p>
              Bowling performance plays a crucial role in winning matches, especially in tight situations. These stats highlight the effectiveness of Pakistan’s fast bowlers and spinners.
            </p>
          </div>
        </section>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-4">
          All-Rounders <span className="text-pak-green">Performance</span>
        </h2>
        <p className="text-ink/60 font-medium max-w-3xl leading-relaxed">
          All-rounders add balance to the team by contributing with both bat and ball. This section includes runs and wickets combined, helping you understand which players are making the biggest overall impact.
        </p>
      </div>

      {/* Main Stats Table */}
      <div className="bg-card-bg border border-card-border rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl">
        {/* Mobile-only Card List */}
        <div className="md:hidden divide-y divide-card-border">
          {players.map((player, idx) => (
            <div key={player.name} className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1 overflow-hidden shrink-0">
                    {player.imgUrl ? <img src={player.imgUrl} alt="" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-contain" /> : <User className="w-4 h-4 text-white/20" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{player.name}</h4>
                    <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">{player.role}</span>
                  </div>
                </div>
                <Link 
                  to={`/player/${player.name.toLowerCase().replace(/ /g, '-')}`}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-pak-green"
                >
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                  <p className="text-[7px] font-bold text-neutral-500 uppercase mb-1">Runs</p>
                  <p className="text-xs font-bold text-white tabular-nums">{player.stats.runs || '—'}</p>
                </div>
                <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                  <p className="text-[7px] font-bold text-neutral-500 uppercase mb-1">Wickets</p>
                  <p className="text-xs font-bold text-white tabular-nums">{player.stats.wickets || '—'}</p>
                </div>
                <div className="bg-white/[0.02] p-2 rounded-xl border border-white/5">
                  <p className="text-[7px] font-bold text-neutral-500 uppercase mb-1">Avg</p>
                  <p className={`text-xs font-bold tabular-nums ${player.stats.avg >= 45 ? 'text-green-400' : 'text-white'}`}>{player.stats.avg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-white/5 border-b border-card-border">
                <th className="px-8 py-8 cursor-pointer group" onClick={() => toggleSort('name')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Player Name <ArrowUpDown className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-8">
                  <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Role</div>
                </th>
                <th className="px-8 py-8 cursor-pointer group" onClick={() => toggleSort('runs')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Total Runs <ArrowUpDown className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-8 cursor-pointer group" onClick={() => toggleSort('wickets' as any)}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Wickets <ArrowUpDown className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-8 cursor-pointer group" onClick={() => toggleSort('avg')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Avg <ArrowUpDown className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-8">
                   <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Recent Form</div>
                </th>
                <th className="px-8 py-8 text-right">
                   <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Profile</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              <AnimatePresence mode="popLayout">
                {players.map((player, idx) => (
                  <motion.tr 
                    key={player.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="hover:bg-pak-green/[0.02] transition-colors group/row"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1 overflow-hidden shrink-0">
                          {player.imgUrl ? <img src={player.imgUrl} alt="" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-contain" /> : <User className="w-4 h-4 text-white/20" />}
                        </div>
                        <span className="text-sm font-bold text-white group-hover/row:text-pak-green transition-colors">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">{player.role}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-white tabular-nums">{player.stats.runs || '—'}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-white tabular-nums">{player.stats.wickets || '—'}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-sm font-bold tabular-nums ${player.stats.avg >= 45 ? 'text-green-400' : 'text-white'}`}>{player.stats.avg}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-1.5">
                        {player.stats.recentForm.slice(0, 3).map((score, i) => (
                          <div key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-neutral-400 tabular-nums">
                            {score}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <Link 
                        to={`/player/${player.name.toLowerCase().replace(/ /g, '-')}`}
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pak-green hover:underline group/btn"
                      >
                        Details <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Ad after Table */}
      <AdPlaceholder type="leaderboard" className="my-12" />

      <div className="mb-24 mt-20">
        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-8 border-b border-card-border pb-6 italic opacity-80 decoration-pak-green decoration-4 underline-offset-8 underline">
           Top Performing <span className="text-pak-green">Pakistan Players</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Section: Format-Wise Stats */}
           <div className="md:col-span-2 bg-gradient-to-br from-pak-green/10 to-transparent border border-pak-green/20 rounded-[48px] p-10 md:p-16">
              <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-8">Stats by <span className="text-pak-green">Format</span> (Test, ODI, T20)</h3>
              <p className="text-ink/60 font-medium leading-relaxed mb-10">
                Each format of cricket demands a different skill set. That’s why stats are divided to make it easier to analyze how players perform in different conditions and formats.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: 'Test Cricket', desc: 'Long format consistency & grit' },
                  { title: 'ODI Cricket', desc: 'Balanced tactical performance' },
                  { title: 'T20 Cricket', desc: 'Aggressive and fast scoring' }
                ].map((format, i) => (
                  <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-3xl hover:border-pak-green/40 transition-all">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">{format.title}</h4>
                    <p className="text-[10px] text-ink/40 font-bold uppercase leading-relaxed">{format.desc}</p>
                  </div>
                ))}
              </div>
           </div>

           {/* Quick Performer Stats */}
           <div className="bg-card-bg border border-card-border rounded-[48px] p-10 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-pak-green uppercase tracking-[4px] mb-2">Leading Run Scorer</h4>
                  <p className="text-2xl font-display font-bold text-white">Babar Azam (242 Runs)</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-pak-green uppercase tracking-[4px] mb-2">Top Wicket Taker</h4>
                  <p className="text-2xl font-display font-bold text-white">Sajid Khan (18 Wickets)</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-pak-green uppercase tracking-[4px] mb-2">Impact Player</h4>
                  <p className="text-2xl font-display font-bold text-white">Salman Ali Agha</p>
                </div>
              </div>
              <p className="mt-8 text-[10px] font-bold text-ink/30 italic uppercase tracking-widest">
                * Based on 2026 Home Season Performance
              </p>
           </div>
        </div>
      </div>

      {/* Importance of Stats Section */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-8 leading-tight">
            Why Player Stats <span className="text-pak-green">Are Important</span>
          </h2>
          <div className="space-y-6 text-ink/60 font-medium leading-relaxed">
            <p>
              Statistics give a deeper understanding of the game beyond just match results. They help fans compare players objectively, track performance over time, and understand team strengths and weaknesses.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { title: 'Compare', desc: 'Objective player comparisons' },
                 { title: 'Track', desc: 'Performance history analysis' },
                 { title: 'Analyze', desc: 'Identify team weak points' },
                 { title: 'Engage', desc: 'Deeper fan insights' }
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 border border-card-border rounded-2xl bg-white/5">
                   <div className="w-1.5 h-1.5 rounded-full bg-pak-green mt-1.5 shrink-0" />
                   <div>
                     <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">{item.title}</p>
                     <p className="text-[9px] font-bold text-ink/30 uppercase leading-none">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
            <p className="text-xs pt-4 font-bold uppercase tracking-widest text-pak-green/60">
              Fresh Data Signal: This page is updated after every match.
            </p>
          </div>
        </div>
        <div className="bg-pak-green/10 border border-pak-green/20 rounded-[40px] p-12 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pak-green/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <TrendingUp className="w-24 h-24 text-pak-green mx-auto mb-8 animate-bounce" />
           <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Latest Stats Updates</h3>
           <p className="text-sm font-medium text-ink/60 leading-relaxed mb-8">
             Player stats change after every match. That’s why this page is updated regularly to provide the most accurate and up-to-date information.
           </p>
           <button className="px-10 py-4 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-pak-green/20 active:scale-95 transition-all">
             Refresh Real-Time Data
           </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 text-center py-20 bg-card-bg border border-card-border rounded-[48px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-pak-green" />
        <div className="max-w-2xl mx-auto px-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-6">Explore More <span className="text-pak-green">Cricket Data</span></h2>
          <p className="text-ink/60 font-medium mb-10 leading-relaxed">
            Stay connected with everything related to Pakistan cricket — from schedules to squads, all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/schedule" className="px-8 py-3 bg-white text-black rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">Full Schedule</Link>
             <Link to="/squads" className="px-8 py-3 border border-white/20 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">View Squads</Link>
             <Link to="/news" className="px-8 py-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/40 hover:text-pak-green transition-colors mt-4 w-full justify-center">Read Latest News <ChevronRight className="w-3 h-3" /></Link>
          </div>
        </div>
      </section>

      <InternalLinkSection />

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12">
        {[
          { label: 'Highest Average', player: 'Babar Azam', value: '56.72', icon: <TrendingUp className="w-4 h-4 text-green-400" /> },
          { label: 'Fastest SR', player: 'Mohammad Rizwan', value: '129.12', icon: <Zap className="w-4 h-4 text-pak-green" /> },
          { label: 'Top Wickets', player: 'Shaheen Afridi', value: '139', icon: <Target className="w-4 h-4 text-blue-400" /> },
          { label: 'Consistent', player: 'Noman Ali', value: '24.52', icon: <Activity className="w-4 h-4 text-purple-400" /> }
        ].map((feat, i) => (
          <div key={i} className="bg-card-bg border border-card-border p-4 md:p-6 rounded-[24px] md:rounded-[32px]">
             <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  {feat.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[7px] md:text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none mb-1">{feat.label}</p>
                  <p className="text-[10px] md:text-xs font-bold text-white truncate leading-none">{feat.player}</p>
                </div>
             </div>
             <p className="text-xl md:text-3xl font-display font-bold text-white tabular-nums leading-none">{feat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
