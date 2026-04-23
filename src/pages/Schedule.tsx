import { Trophy, ArrowLeft, ArrowUpDown, Filter, Search, ArrowRight, Calendar, MapPin, Clock, Globe, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { Match } from '../types';

type SortKey = 'date' | 'opponent' | 'series';

export default function Schedule() {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterFormat, setFilterFormat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all available formats
  const formats = ['All', ...Array.from(new Set(PAKISTAN_SCHEDULE.map(m => m.format)))];

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
      if (sortKey === 'date') {
        const parseDate = (d: string) => {
          if (!d) return 0;
          
          // Handle "May 8–12, 2026" or "May 8, 2026"
          if (/[a-zA-Z]/.test(d)) {
            const clean = d.includes('–') ? d.split('–')[0].trim() : d;
            const withYear = clean.includes(',') ? clean : `${clean}, 2026`;
            return new Date(withYear).getTime() || 0;
          }
          
          // Handle ISO "2026-07-21"
          return new Date(d).getTime() || 0;
        };
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }

      const valA = a[sortKey].toLowerCase();
      const valB = b[sortKey].toLowerCase();
      
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
      <Helmet>
        <title>Pakistan Cricket Schedule 2026 | Match Fixtures, Venues & Time</title>
        <meta name="description" content="Get the full Pakistan cricket schedule for 2026. Official fixtures, match timings in PST, venues, and series details for all Test, ODI and T20I matches." />
        <meta name="keywords" content="Pakistan cricket schedule 2026, PAK vs BAN schedule, Pakistan tour schedule, cricket match timings, Pakistan team fixtures" />
        <link rel="canonical" href="https://pakcric-schedule.online/schedule" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Cricket Schedule 2026 | Match Fixtures & Venues" />
        <meta property="og:description" content="Complete guide to all Pakistan cricket matches in 2026. Includes Test, ODI, and T20I fixtures with official timings." />
        <meta property="og:url" content="https://pakcric-schedule.online/schedule" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />

        {/* JSON-LD for Cricket Events */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": ${JSON.stringify(
                PAKISTAN_SCHEDULE.slice(0, 10).map((match, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Event",
                    "name": "Pakistan vs " + match.opponent,
                    "startDate": match.date,
                    "location": {
                      "@type": "Place",
                      "name": match.venue
                    },
                    "description": match.series + " - " + match.format
                  }
                }))
              )}
            }
          `}
        </script>
      </Helmet>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4 text-ink">
            Tournament <span className="text-pak-green">Schedule</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-pak-green text-white text-[10px] font-bold uppercase tracking-[2px]">
              Season 2026
            </div>
            <p className="text-ink/40 font-bold uppercase tracking-widest text-[10px] border-l border-card-border pl-4">
              {filteredAndSortedMatches.length} Total Fixtures
            </p>
          </div>
        </motion.div>

        {/* Global Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-pak-green transition-colors" />
            <input 
              type="text" 
              placeholder="Filter by Team or Venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card-bg border border-card-border rounded-2xl py-4 pl-12 pr-6 text-xs font-bold uppercase tracking-wide focus:outline-none focus:border-pak-green/30 focus:ring-1 focus:ring-pak-green/20 transition-all w-full text-ink shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Format Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-card-bg/50 p-2 rounded-[24px] border border-card-border w-fit">
        {formats.map(f => (
          <button
            key={f}
            onClick={() => setFilterFormat(f)}
            className={`px-8 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-[2px] transition-all ${
              filterFormat === f 
                ? 'bg-pak-green text-white shadow-xl scale-105' 
                : 'text-ink/40 hover:text-ink hover:bg-white/5'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Structured Schedule Container */}
      <div className="bg-card-bg border border-card-border rounded-[40px] overflow-hidden shadow-2xl relative">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-white/5 border-b border-card-border">
                <th className="px-8 py-8 cursor-pointer group" onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Full Date <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'date' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-8 py-8 cursor-pointer group w-64" onClick={() => handleSort('opponent')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Opposition <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'opponent' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-8 py-8 w-64">
                  <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Format & Series</div>
                </th>
                <th className="px-8 py-8 w-80">
                  <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Venue & Pitch</div>
                </th>
                <th className="px-8 py-8 text-right">
                   <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Match Center</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              <AnimatePresence mode="popLayout">
                {filteredAndSortedMatches.length > 0 ? (
                  filteredAndSortedMatches.map((match, idx) => (
                    <motion.tr 
                      key={match.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-pak-green/[0.02] transition-colors group"
                    >
                      {/* Date Column */}
                      <td className="px-8 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-pak-green/5 border border-pak-green/10 flex flex-col items-center justify-center shrink-0">
                            <span className="text-xl font-bold text-ink leading-none">
                              {match.date.match(/\d+/) ? match.date.match(/\d+/)![0] : ''}
                            </span>
                            <span className="text-[8px] font-bold text-pak-green uppercase tracking-widest">
                              {match.date.includes(' ') ? match.date.split(' ')[0].substring(0,3) : '2026'}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-bold text-ink block whitespace-nowrap">{match.date}</span>
                            <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-ink/30 uppercase tracking-widest">
                              <Clock className="w-3 h-3" /> {match.time}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Opponent Column */}
                      <td className="px-8 py-8">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img src={match.flagUrl} alt="" className="w-10 h-7 object-cover rounded-lg shadow-sm border border-card-border" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pak-green rounded-full border-2 border-card-bg flex items-center justify-center">
                              <Globe className="w-2 h-2 text-white" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lg font-display font-bold text-white uppercase tracking-tighter leading-none whitespace-nowrap">
                              PAK <span className="text-white/40 opacity-70">VS</span> {match.opponent.substring(0, 3).toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Format/Series Column */}
                      <td className="px-8 py-8 w-64">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${
                              match.format === 'Test' ? 'border-orange-500/20 text-orange-600 bg-orange-500/5' :
                              match.format === 'ODI' ? 'border-blue-500/20 text-blue-600 bg-blue-500/5' :
                              'border-purple-500/20 text-purple-600 bg-purple-500/5'
                            }`}>
                              {match.format}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-ink/50 uppercase tracking-wide leading-tight block truncate max-w-[200px]">
                            {match.series}
                          </span>
                        </div>
                      </td>

                      {/* Venue Column */}
                      <td className="px-8 py-8 w-80 relative group/venue">
                        {/* Venue Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-neutral-900 text-white rounded-xl text-[10px] whitespace-nowrap opacity-0 group-hover/venue:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10 font-bold uppercase tracking-widest">
                          {match.venue}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-900" />
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-pak-green mt-0.5 shrink-0" />
                          <div className="space-y-1 overflow-hidden">
                            <span className="text-[11px] font-bold text-ink leading-relaxed line-clamp-1 truncate block w-full">{match.venue}</span>
                            <span className="text-[9px] font-bold text-ink/30 uppercase tracking-[2px]">International Standard</span>
                          </div>
                        </div>
                      </td>

                      {/* Action Column */}
                      <td className="px-8 py-8 text-right">
                         <Link 
                          to={`/match/${match.id}`} 
                          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-card-bg border border-card-border hover:bg-pak-green hover:text-white hover:border-pak-green transition-all group/btn shadow-sm"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest">Match Details</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                         </Link>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-32 text-center">
                      <div className="max-w-xs mx-auto space-y-6">
                        <div className="w-20 h-20 bg-card-bg rounded-[32px] border border-card-border flex items-center justify-center mx-auto opacity-40">
                          <Trophy className="w-10 h-10 text-pak-green" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-display font-bold uppercase text-ink">No Matches Found</h3>
                          <p className="text-xs text-ink/40 font-bold uppercase tracking-widest leading-relaxed">Try adjusting your filters or search query to find upcoming fixtures.</p>
                        </div>
                        <button 
                          onClick={() => {setFilterFormat('All'); setSearchQuery('');}}
                          className="px-8 py-3 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-ink transition-all"
                        >
                          Clear All Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Structured Helper Note */}
      <div className="mt-12 p-8 bg-pak-green/5 border border-pak-green/10 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
            <Info className="w-6 h-6 text-pak-green" />
          </div>
          <div>
            <p className="text-xs font-bold text-ink uppercase tracking-tight">Need Offline Access?</p>
            <p className="text-[10px] text-ink/50 uppercase tracking-widest mt-1">This schedule is automatically updated in real-time from our servers.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="px-6 py-2.5 rounded-full border border-card-border text-[9px] font-bold uppercase tracking-widest hover:bg-card-bg transition-colors text-ink">Correction Request</Link>
          <button className="px-6 py-2.5 rounded-full bg-pak-green text-white text-[9px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Export PDF</button>
        </div>
      </div>
    </div>
  );
}
