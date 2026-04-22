import { Trophy, ArrowLeft, ArrowUpDown, Filter, Search, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Match } from '../types';

type SortKey = 'date' | 'opponent' | 'series';

export default function Schedule() {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterFormat, setFilterFormat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all available formats
  const formats = ['All', ...new Set(PAKISTAN_SCHEDULE.map(m => m.format))];

  const filteredAndSortedMatches = useMemo(() => {
    let result = [...PAKISTAN_SCHEDULE];

    // Search
    if (searchQuery) {
      result = result.filter(m => 
        m.opponent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.venue.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter
    if (filterFormat !== 'All') {
      result = result.filter(m => m.format === filterFormat);
    }

    // Sort
    result.sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];
      
      if (sortKey === 'date') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [sortKey, sortOrder, filterFormat, searchQuery]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-4">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-2">
            Match <span className="text-white">Schedule</span>
          </h1>
          <p className="text-ink/40 font-bold uppercase tracking-widest text-[10px]">International Fixtures Roadmap 2026</p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search Opponent / Venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card-bg border border-card-border rounded-2xl py-3 pl-10 pr-6 text-xs font-bold uppercase tracking-tight focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all w-full md:w-64"
            />
          </div>

          <div className="flex items-center gap-2 bg-card-bg border border-card-border rounded-2xl p-1">
             {formats.map(f => (
               <button
                 key={f}
                 onClick={() => setFilterFormat(f)}
                 className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                   filterFormat === f ? 'bg-white text-black shadow-lg' : 'text-ink/40 hover:text-white'
                 }`}
               >
                 {f}
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-8 py-6 cursor-pointer group" onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white">
                    Date <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-6 cursor-pointer group" onClick={() => handleSort('series')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white">
                    Series <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-6 cursor-pointer group" onClick={() => handleSort('opponent')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-white">
                    Opponent <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-8 py-6">
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-white">Format</div>
                </th>
                <th className="px-8 py-6">
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-white">Venue</div>
                </th>
                <th className="px-8 py-6 text-right">
                   <div className="text-[10px] font-bold uppercase tracking-[2px] text-white">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredAndSortedMatches.length > 0 ? (
                filteredAndSortedMatches.map((match, idx) => (
                  <motion.tr 
                    key={match.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold whitespace-nowrap">{match.date}</span>
                        <span className="text-[9px] font-bold text-ink/40 uppercase tracking-widest">{match.time}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-bold uppercase tracking-tight block max-w-[200px] truncate">{match.series}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <img src={match.flagUrl} alt="" loading="lazy" decoding="async" className="w-6 h-4 object-cover rounded shadow" />
                        <span className="text-xs font-bold uppercase tracking-tight">{match.opponent}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase border ${
                        match.format === 'Test' ? 'border-orange-500/30 text-orange-400 bg-orange-500/5' :
                        match.format === 'ODI' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                        'border-purple-500/30 text-purple-400 bg-purple-500/5'
                      }`}>
                        {match.format}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-bold text-ink/40 uppercase leading-relaxed max-w-[150px] inline-block">{match.venue}</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <Link to={`/match/${match.id}`} className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all group/btn">
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-4 bg-white/5 rounded-full">
                        <Filter className="w-8 h-8 text-ink/20" />
                      </div>
                      <p className="text-sm font-bold text-ink/40 uppercase tracking-widest">No matches found for this filter</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
