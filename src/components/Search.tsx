import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search as SearchIcon, X, User, Calendar, Trophy as TrophyIcon, ArrowRight, Filter, Globe2, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { ALL_SQUADS } from '../squadData';
import { PLAYER_STATS } from '../playerData';

interface SearchResult {
  id: string;
  type: 'player' | 'match' | 'series';
  title: string;
  subtitle: string;
  link: string;
  country?: string;
  isInForm?: boolean;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [formFilter, setFormFilter] = useState<'All' | 'Hot'>('All');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const countries = useMemo(() => {
    const set = new Set<string>(['All']);
    Object.values(PLAYER_STATS).forEach(p => set.add(p.country));
    return Array.from(set);
  }, []);

  const isPlayerInForm = (name: string) => {
    const player = PLAYER_STATS[name];
    if (!player) return false;
    
    return player.stats.recentForm.some(perf => {
      // Check for scores >= 50
      const scoreMatch = perf.match(/^(\d+)\*?$/);
      if (scoreMatch && parseInt(scoreMatch[1]) >= 50) return true;
      
      // Check for wickets >= 3
      const wicketMatch = perf.match(/^(\d+)\/\d+$/);
      if (wicketMatch && parseInt(wicketMatch[1]) >= 3) return true;
      
      return false;
    });
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim() && selectedCountry === 'All' && formFilter === 'All') {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const q = query.toLowerCase();

    // Search Players from PLAYER_STATS for more metadata
    Object.values(PLAYER_STATS).forEach(player => {
      const matchesQuery = player.name.toLowerCase().includes(q);
      const matchesCountry = selectedCountry === 'All' || player.country === selectedCountry;
      const isInForm = isPlayerInForm(player.name);
      const matchesForm = formFilter === 'All' || (formFilter === 'Hot' && isInForm);

      if (matchesQuery && matchesCountry && matchesForm) {
        searchResults.push({
          id: `player-${player.name}`,
          type: 'player',
          title: player.name,
          subtitle: `${player.country} • ${player.role}`,
          link: `/player/${player.name.toLowerCase().replace(/\s+/g, '-')}`,
          country: player.country,
          isInForm: isInForm
        });
      }
    });

    // Fallback to ALL_SQUADS for players not in PLAYER_STATS (though hopefully rare)
    if (selectedCountry === 'All' && formFilter === 'All') {
      ALL_SQUADS.forEach(squad => {
        squad.players.forEach(player => {
          if (player.name.toLowerCase().includes(q) && !searchResults.some(r => r.title === player.name)) {
            searchResults.push({
              id: `player-${player.name}`,
              type: 'player',
              title: player.name,
              subtitle: player.description || 'Professional Cricketer',
              link: '/squads'
            });
          }
        });
      });
    }

    // Search Matches (only if no specific player filters or if they match)
    if (selectedCountry === 'All' && formFilter === 'All') {
      PAKISTAN_SCHEDULE.forEach(match => {
        const matchSearchText = `${match.opponent} ${match.venue} ${match.format} ${match.series}`.toLowerCase();
        if (matchSearchText.includes(q)) {
          searchResults.push({
            id: `match-${match.id}`,
            type: 'match',
            title: `vs ${match.opponent}`,
            subtitle: `${match.format} • ${match.series} • ${match.date}`,
            link: `/match/${match.id}`
          });
        }
      });

      // Search Series
      const seriesList = new Set<string>();
      PAKISTAN_SCHEDULE.forEach(m => seriesList.add(m.series));
      ALL_SQUADS.forEach(s => seriesList.add(s.series));

      seriesList.forEach(seriesName => {
        if (seriesName.toLowerCase().includes(q)) {
          searchResults.push({
            id: `series-${seriesName}`,
            type: 'series',
            title: seriesName,
            subtitle: 'Featured Series',
            link: '/schedule'
          });
        }
      });
    }

    // Deduplicate and slice
    const uniqueResults = searchResults.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
    setResults(uniqueResults.slice(0, 10));
  }, [query, selectedCountry, formFilter]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
    if (e.key === 'Enter' && results.length > 0) {
      navigate(results[0].link);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-1 sm:p-2.5 rounded-xl sm:rounded-full bg-card-bg border border-card-border hover:border-pak-green hover:text-pak-green transition-all text-ink focus:outline-none focus:ring-2 focus:ring-pak-green/50 active:scale-95 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 shadow-sm"
        aria-label="Search"
      >
        <SearchIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-0 sm:pt-24 px-0 sm:px-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="w-full max-w-2xl bg-card-bg sm:border border-card-border sm:rounded-[40px] shadow-2xl overflow-hidden h-full sm:h-auto"
            >
              <div className="relative p-5 sm:p-8 border-b border-card-border bg-card-bg/50 backdrop-blur-xl">
                <SearchIcon className="absolute left-10 sm:left-14 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="SEARCH Hub..."
                  className="w-full pl-12 sm:pl-16 pr-12 py-4 bg-white/5 rounded-2xl border-none text-ink placeholder:text-neutral-600 focus:ring-2 focus:ring-pak-green/30 outline-none font-display text-xl sm:text-2xl tracking-tighter uppercase font-bold"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-10 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white/10 transition-colors text-neutral-500"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Filters Row */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5">
                    <Globe2 className="w-3.5 h-3.5 text-neutral-500" />
                    <select 
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="bg-transparent text-[10px] font-black uppercase tracking-widest text-ink outline-none cursor-pointer"
                    >
                      {countries.map(c => (
                        <option key={c} value={c} className="bg-card-bg text-ink">{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFormFilter(formFilter === 'Hot' ? 'All' : 'Hot')}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${
                        formFilter === 'Hot' 
                          ? 'bg-pak-green/20 border-pak-green text-pak-green' 
                          : 'bg-white/5 border-white/5 text-neutral-500 hover:text-ink'
                      }`}
                    >
                      <Zap className={`w-3.5 h-3.5 ${formFilter === 'Hot' ? 'fill-pak-green' : ''}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest">In Form</span>
                    </button>
                  </div>

                  {(selectedCountry !== 'All' || formFilter !== 'All' || query) && (
                    <button 
                      onClick={() => {
                        setSelectedCountry('All');
                        setFormFilter('All');
                        setQuery('');
                      }}
                      className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-pak-green transition-colors ml-auto"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              <div className="max-h-[calc(100vh-140px)] sm:max-h-[60vh] overflow-y-auto p-4 sm:p-8 custom-scrollbar">
                {results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        to={result.link}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-pak-green/10 flex items-center justify-center shrink-0 text-pak-green group-hover:scale-110 transition-transform">
                          {result.type === 'player' && <User className="w-5 h-5" />}
                          {result.type === 'match' && <Calendar className="w-5 h-5" />}
                          {result.type === 'series' && <TrophyIcon className="w-5 h-5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-ink font-bold truncate tracking-tight">
                            {result.title}
                            {result.isInForm && (
                              <span className="ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-pak-green/20 text-[8px] text-pak-green uppercase font-black tracking-tighter align-middle">
                                <Zap className="w-2 h-2 fill-pak-green" /> Hot
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-neutral-500 truncate uppercase tracking-widest">{result.subtitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:text-pak-green group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                ) : query.trim() ? (
                  <div className="p-12 text-center">
                    <p className="text-neutral-500">No results found for "<span className="text-ink font-bold">{query}</span>"</p>
                  </div>
                ) : (
                  <div className="p-12 text-center text-neutral-500">
                    <p className="text-xs uppercase tracking-[4px] mb-6">Quick Suggestions</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {['Babar Azam', 'Test Matches', 'ODI Series', 'T20I', 'England Tour', 'Bangladesh Series'].map(tag => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-4 py-2 rounded-xl bg-card-bg border border-card-border hover:border-pak-green hover:text-pak-green transition-all text-xs font-bold"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Backdrop close area */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={() => setIsOpen(false)} 
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
