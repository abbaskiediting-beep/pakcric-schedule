import { Trophy, ArrowLeft, ArrowUpDown, Filter, Search, ArrowRight, Calendar, MapPin, Clock, Globe, Info, Share2, ChevronDown, ChevronUp, User, Target, Zap, Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { MATCH_RESULTS } from '../matchResultsData';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import React, { useState, useMemo } from 'react';
import { Match } from '../types';
import ShareButton from '../components/ShareButton';
import SetReminderButton from '../components/SetReminderButton';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import ExternalResourcesSection from '../components/ExternalResourcesSection';
import { LinkText } from '../components/LinkText';
import SaveForOfflineButton from '../components/SaveForOfflineButton';

type SortKey = 'date' | 'opponent' | 'series';

function MatchDetailExpanded({ match }: { match: Match }) {
  return (
    <div className="bg-white/[0.03] border-t border-card-border p-4 md:p-10 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12">
        {/* Left Column: Stats & Summary */}
        <div className="space-y-6 md:space-y-8">
          {match.status === 'Completed' && match.stats && (
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <Trophy className="w-3.5 h-3.5 md:w-5 md:h-5 text-pak-green" />
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white">Match Performance</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {match.stats.topScorers && (
                  <div className="bg-black/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/5">
                    <p className="text-[9px] md:text-[10px] font-bold text-pak-green uppercase tracking-widest mb-3 md:mb-4">Top Scorers</p>
                    <div className="space-y-2.5 md:space-y-3">
                      {match.stats.topScorers.map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center group/item">
                          <span className="text-[11px] md:text-xs font-bold text-white/70 group-hover/item:text-white transition-colors uppercase tracking-tight">{s.name}</span>
                          <span className="text-sm font-display font-black text-pak-green tracking-tighter">{s.runs} <span className="text-[9px] text-white/20 font-sans">({s.balls})</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {match.stats.leadingWicketTakers && (
                  <div className="bg-black/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/5">
                    <p className="text-[9px] md:text-[10px] font-bold text-pak-green uppercase tracking-widest mb-3 md:mb-4">Best Bowling</p>
                    <div className="space-y-2.5 md:space-y-3">
                      {match.stats.leadingWicketTakers.map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center group/item">
                          <span className="text-[11px] md:text-xs font-bold text-white/70 group-hover/item:text-white transition-colors uppercase tracking-tight">{s.name}</span>
                          <span className="text-sm font-display font-black text-pak-green tracking-tighter">{s.wickets}-{s.runs} <span className="text-[9px] text-white/20 font-sans">({s.overs})</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {match.preMatchAnalysis && (
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white">Pre-Match Analysis</h3>
              </div>
              <div className="bg-black/20 rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5 prose prose-invert prose-sm max-w-none">
                <p className="text-xs md:text-sm leading-relaxed text-ink/70 italic">
                  <LinkText text={match.preMatchAnalysis.substring(0, 300) + (match.preMatchAnalysis.length > 300 ? '...' : '')} />
                </p>
                {match.preMatchAnalysis.length > 300 && (
                  <Link to={`/match/${match.id}`} className="text-pak-green font-bold block mt-3 text-[10px] uppercase tracking-widest hover:underline">Read Full Analysis</Link>
                )}
              </div>
            </div>
          )}

          {match.postMatchSummary && (
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Newspaper className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white">Match Summary</h3>
              </div>
              <div className="bg-black/20 rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5 prose prose-invert prose-sm max-w-none">
                <p className="text-xs md:text-sm leading-relaxed text-ink/70 italic">
                  <LinkText text={match.postMatchSummary.substring(0, 300) + (match.postMatchSummary.length > 300 ? '...' : '')} />
                </p>
                {match.postMatchSummary.length > 300 && (
                  <Link to={`/match/${match.id}`} className="text-pak-green font-bold block mt-3 text-[10px] uppercase tracking-widest hover:underline">Read Full Summary</Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Key Players & Meta */}
        <div className="space-y-6 md:space-y-8">
          {match.playersToWatch && (
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-pak-green" />
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white">Players to Watch</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {match.playersToWatch.map((player, idx) => (
                  <div key={idx} className="flex gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 hover:border-pak-green/20 transition-all group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-pak-green/10 border border-pak-green/20 flex items-center justify-center shrink-0 group-hover:bg-pak-green/20 transition-colors">
                      {player.imgUrl ? (
                        <img src={player.imgUrl} alt={player.name} className="w-full h-full object-cover rounded-md" />
                      ) : (
                        <User className="w-5 h-5 md:w-6 md:h-6 text-pak-green" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-0.5 md:mb-1">
                        <h4 className="text-xs md:text-sm font-bold text-white leading-none capitalize">{player.name}</h4>
                        <span className="text-[8px] font-black uppercase text-pak-green bg-pak-green/10 px-1.5 py-0.5 rounded leading-none">{player.role}</span>
                      </div>
                      <p className="text-[10px] md:text-[11px] text-white/50 leading-relaxed italic line-clamp-2">"{player.reason}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-pak-green/10 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-pak-green/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-base md:text-lg font-display font-bold uppercase tracking-tight text-white mb-1.5 md:mb-2 leading-tight">Detailed Statistics</h3>
              <p className="text-[11px] md:text-xs text-white/60 mb-5 md:mb-6 leading-relaxed italic">
                Looking for more in-depth data? Visit our full Match Center for historical head-to-head records and ground statistics.
              </p>
              <Link to={`/match/${match.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-pak-green text-white rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-pak-green transition-all shadow-xl shadow-pak-green/20">
                Go to Match Center <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Link>
            </div>
            <Globe className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 text-pak-green/10 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MatchSchedulePage() {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterFormat, setFilterFormat] = useState<string>('All');
  const [filterVenue, setFilterVenue] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const allMatches = useMemo(() => [...PAKISTAN_SCHEDULE, ...MATCH_RESULTS], []);

  // Extract all available formats and venues
  const formats = useMemo(() => ['All', ...Array.from(new Set(allMatches.map(m => m.format)))], [allMatches]);
  const venues = useMemo(() => ['All', ...Array.from(new Set(allMatches.map(m => m.venue)))], [allMatches]);

  const filteredAndSortedMatches = useMemo(() => {
    let result = [...allMatches];

    // Saved Offline Filter
    if (showSavedOnly) {
      const savedSchedules = JSON.parse(localStorage.getItem('saved_schedules') || '[]');
      result = result.filter(m => savedSchedules.includes(m.id));
    }

    // Search
    if (searchQuery) {
      result = result.filter(m => 
        m.opponent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.venue.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter Format
    if (filterFormat !== 'All') {
      result = result.filter(m => m.format === filterFormat);
    }

    // Filter Venue
    if (filterVenue !== 'All') {
      result = result.filter(m => m.venue === filterVenue);
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
  }, [sortKey, sortOrder, filterFormat, filterVenue, searchQuery]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Top Banner Placement */}
      <AdPlaceholder type="leaderboard" className="mb-8 md:mb-10" />
      <Helmet>
        <title>Pakistan Cricket Schedule 2026 – Full Fixtures, Dates, Venues & Timings</title>
        <meta name="description" content="Check the complete Pakistan cricket schedule 2026 with full fixtures, match dates, venues, and timings. Stay updated with upcoming Pakistan matches." />
        <meta name="keywords" content="Pakistan cricket schedule 2026, Pakistan upcoming matches, Pakistan full fixtures, cricket match dates, Pakistan vs India 2026, Asia Cup 2026 schedule" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Cricket Schedule 2026 – Full Fixtures, Dates, Venues & Timings" />
        <meta property="og:description" content="Check the complete Pakistan cricket schedule 2026 with full fixtures, match dates, venues, and timings. Stay updated with upcoming Pakistan matches." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />

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
      <div className="mb-6 md:mb-12 pt-4 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-colors mb-4 md:mb-6">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 md:mb-8 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white leading-tight">
              Pakistan Cricket Schedule 2026 – <span className="text-pak-green">Complete Match Details</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-fit">
              <SaveForOfflineButton 
                id="full-pak-schedule-2026" 
                label="Save Hub for Offline" 
                className="w-full sm:w-fit py-4 md:py-2"
              />
              <ShareButton 
                title="Pakistan Cricket Schedule 2026"
                text="Check out the complete Pakistan cricket schedule for the 2026 season!"
                url={window.location.href}
                variant="outline"
                className="w-full sm:w-fit"
              />
            </div>
          </div>
          <div className="max-w-3xl space-y-4 md:space-y-6 mb-8 md:mb-10 px-1">
            <p className="text-base sm:text-lg md:text-xl text-ink/70 font-medium leading-relaxed italic">
              We bring you the <Link to="/schedule" className="text-pak-green hover:underline">Pakistan cricket schedule 2026</Link> with <strong>complete match details</strong> for every <Link to="/pakistan-upcoming-series-full-schedule" className="text-pak-green hover:underline">upcoming series</Link>, international tour, and major tournament. Fans can look forward to a busy year as Pakistan competes across all formats, including <Link to="/icc-test-ranking-2026" className="text-pak-green hover:underline">Test</Link>, <Link to="/icc-odi-ranking-2026" className="text-pak-green hover:underline">ODI</Link>, and <Link to="/icc-t20-ranking-2026" className="text-pak-green hover:underline">T20 matches</Link>.
            </p>
            <p className="text-sm md:text-base text-ink/50 font-medium leading-relaxed italic">
              On this page, you’ll find the <Link to="/schedule" className="text-pak-green hover:underline">complete Pakistan cricket schedule</Link>, including <Link to="/pakistan-next-tour-details" className="text-pak-green hover:underline">match dates, venues, and timings</Link> — all organized in a simple and easy-to-follow format. Whether you're planning to watch live matches or just want to stay updated, this page has everything you need.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[9px] md:text-[11px] font-bold uppercase tracking-[2px] md:tracking-[4px] text-pak-green/60 pt-4">
              <span>Fastest Updates</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <Link to="/news" className="text-pak-green hover:underline">Verified Timings</Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Venue Directions</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-4 px-1">
            <div className="w-fit px-5 py-2 rounded-full bg-pak-green text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest md:tracking-[3px] shadow-lg shadow-pak-green/20">
              Active Season 2026
            </div>
            <p className="text-ink/40 font-bold uppercase tracking-widest text-[9px] md:text-[10px] sm:border-l sm:border-card-border sm:pl-6">
              {filteredAndSortedMatches.length} Confirmed Fixtures
            </p>
          </div>
        </motion.div>
      </div>

      {/* Broad Overview Section */}
      <section className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white/[0.02] border border-card-border rounded-3xl md:rounded-[48px] p-6 md:p-12 lg:p-20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-6 md:mb-8">
            Pakistan Upcoming <span className="text-pak-green">Matches 2026</span>
          </h2>
          <div className="space-y-5 md:space-y-6 text-ink/60 font-medium leading-relaxed">
            <p className="text-base md:text-lg italic">
              <LinkText text="Pakistan is set to play multiple international matches throughout 2026. These include bilateral series as well as global tournaments. The fixture list is updated regularly to ensure accuracy and reflect verified PCB announcements." />
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
              {[
                { label: 'Bilateral Series', desc: 'Home/Away Tours', link: '/pakistan-upcoming-series-full-schedule' },
                { label: 'Global Cups', desc: 'Asia Cup & ICC Events', link: '/schedule' },
                { label: 'Top Nations', desc: 'Elite Opposition', link: '/rankings' },
                { label: 'All Formats', desc: 'Test, ODI, T20', link: '/players-stats' }
              ].map((item, idx) => (
                <Link to={item.link} key={idx} className="p-4 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl hover:border-pak-green/30 transition-all flex flex-col justify-center">
                  <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-pak-green mb-0.5 md:mb-1">{item.label}</h4>
                  <p className="text-[9px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest leading-none">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="bg-pak-green/5 md:bg-pak-green/10 rounded-2xl md:rounded-[40px] aspect-video md:aspect-square flex flex-col items-center justify-center text-center border border-pak-green/20 relative group-hover:bg-pak-green/20 transition-colors py-8 md:py-0">
            <Calendar className="w-12 h-12 md:w-24 md:h-24 text-pak-green mb-4 md:mb-6 animate-pulse" />
            <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[4px] md:tracking-[6px] text-pak-green">Fixture Intelligence</span>
          </div>
        </div>
      </section>

      {/* Global Controls */}
      <div className="mb-10 md:mb-12 space-y-8 md:space-y-12 px-1">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3 md:mb-4">
            Upcoming <span className="text-pak-green">Match Search</span>
          </h2>
          <p className="text-xs md:text-sm text-ink/60 font-medium leading-relaxed italic">
            Never miss a single delivery. Use our comprehensive search and filter tools to find upcoming Pakistan matches by opponent, venue, or format.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6">
          {/* Search Box */}
          <div className="relative group flex-1">
            <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-neutral-500 group-focus-within:text-pak-green transition-colors" />
            <input 
              type="text" 
              placeholder="Search by Team or Series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card-bg border border-card-border rounded-2xl md:rounded-3xl py-4 md:py-5 pl-11 md:pl-14 pr-6 md:pr-8 text-[11px] md:text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green/40 focus:ring-4 focus:ring-pak-green/10 transition-all w-full text-ink shadow-xl"
            />
          </div>

          <div className="flex gap-4">
            {/* Venue Dropdown */}
            <div className="relative group flex-1 md:w-64">
              <select
                value={filterVenue}
                onChange={(e) => setFilterVenue(e.target.value)}
                className="appearance-none bg-card-bg border border-card-border rounded-xl md:rounded-3xl py-4 md:py-5 pl-10 md:pl-12 pr-6 md:pr-10 text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] md:tracking-[3px] focus:outline-none focus:border-pak-green/40 focus:ring-4 focus:ring-pak-green/10 transition-all w-full text-ink shadow-xl cursor-pointer"
              >
                {venues.map(v => (
                  <option key={v} value={v} className="bg-neutral-900 text-ink uppercase">{v === 'All' ? 'Every Venue' : v}</option>
                ))}
              </select>
              <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative group flex-1 md:w-64">
              <select
                value={`${sortKey}-${sortOrder}`}
                onChange={(e) => {
                  const [key, order] = e.target.value.split('-') as [SortKey, 'asc' | 'desc'];
                  setSortKey(key);
                  setSortOrder(order);
                }}
                className="appearance-none bg-card-bg border border-card-border rounded-xl md:rounded-3xl py-4 md:py-5 pl-10 md:pl-12 pr-6 md:pr-10 text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] md:tracking-[3px] focus:outline-none focus:border-pak-green/40 focus:ring-4 focus:ring-pak-green/10 transition-all w-full text-ink shadow-xl cursor-pointer"
              >
                <option value="date-asc" className="bg-neutral-900">Date (Oldest)</option>
                <option value="date-desc" className="bg-neutral-900">Date (Newest)</option>
                <option value="opponent-asc" className="bg-neutral-900">Team (A-Z)</option>
                <option value="series-asc" className="bg-neutral-900">Series (A-Z)</option>
              </select>
              <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <ArrowUpDown className="w-3.5 h-3.5 md:w-4 md:h-4 text-pak-green" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Format Filter Bar - Sticky on Mobile */}
      <div className="sticky top-[80px] md:top-[124px] z-30 flex overflow-x-auto pb-1 md:pb-0 md:flex-wrap items-center gap-2 mb-8 bg-bg/80 backdrop-blur-xl border border-card-border p-2 md:p-3 rounded-2xl md:rounded-[32px] w-full md:w-fit shadow-lg shadow-black/20 scrollbar-hide -mx-4 px-4 md:mx-0 snap-x snap-mandatory">
        {formats.map(f => (
          <button
            key={f}
            onClick={() => setFilterFormat(f)}
            className={`whitespace-nowrap px-6 md:px-10 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[2px] md:tracking-[3px] transition-all duration-300 snap-start shrink-0 ${
              filterFormat === f && !showSavedOnly
                ? 'bg-pak-green text-white shadow-pak-green/40 shadow-lg scale-105' 
                : 'text-neutral-500 hover:text-ink hover:bg-white/5'
            }`}
          >
            {f}
          </button>
        ))}
        <div className="w-px h-8 bg-white/10 mx-2 hidden md:block" />
        <button
          onClick={() => {
            setShowSavedOnly(!showSavedOnly);
            if (!showSavedOnly) setFilterFormat('All');
          }}
          className={`whitespace-nowrap px-6 md:px-10 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[2px] md:tracking-[3px] transition-all duration-300 snap-start shrink-0 flex items-center gap-2 ${
            showSavedOnly 
              ? 'bg-amber-500 text-black shadow-amber-500/40 shadow-lg scale-105' 
              : 'text-neutral-500 hover:text-ink hover:bg-white/5'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          Saved Offline
        </button>
      </div>

      {/* SEO Optimized Table Header Note */}
      <div className="mb-6 px-1 md:px-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white mb-2">
          Pakistan Cricket <span className="text-pak-green">Full Schedule 2026</span>
        </h2>
        <p className="text-[10px] sm:text-sm font-bold text-ink/40 uppercase tracking-[1px] sm:tracking-[2px]">
          Below is the complete list of Pakistan's upcoming matches in 2026 with dates, venues, and timings:
        </p>
      </div>

      {/* Structured Schedule Container */}
      <div className="bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl relative">
        {/* Mobile-only Card View */}
        <div className="md:hidden divide-y divide-card-border/40">
          {filteredAndSortedMatches.length > 0 ? (
            filteredAndSortedMatches.map((match, idx) => (
              <React.Fragment key={match.id}>
                {idx > 0 && idx % 3 === 0 && (
                  <div className="p-4 bg-white/[0.01]">
                    <AdPlaceholder type="native" className="max-w-full" label="ADVERTISEMENT" />
                  </div>
                )}
                <div 
                   className={`px-4 py-8 sm:p-5 flex flex-col gap-6 transition-all cursor-pointer hover:bg-white/[0.04] active:scale-[0.98] ${match.status === 'Live' ? 'bg-red-500/5 ring-1 ring-red-500/20 shadow-[0_0_20px_-10px_rgba(239,68,68,0.3)]' : ''}`}
                   onClick={() => setExpandedId(expandedId === match.id ? null : match.id)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 ${match.status === 'Live' ? 'bg-red-500/10 border-red-500/20' : 'bg-pak-green/10 border-pak-green/20'} border shadow-md relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        <span className={`text-xl font-display font-black leading-none relative z-10 ${match.status === 'Live' ? 'text-red-500' : 'text-white'}`}>
                          {match.date.match(/\d+/) ? match.date.match(/\d+/)![0] : '??'}
                        </span>
                        <span className={`text-[9px] font-black uppercase tracking-widest relative z-10 ${match.status === 'Live' ? 'text-red-400' : 'text-pak-green'}`}>
                          {match.date.includes(' ') ? match.date.split(' ')[0].substring(0,3) : '2026'}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-bold text-white block leading-none mb-1.5 line-clamp-1">{match.date}</span>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-ink/40 uppercase tracking-widest">
                          <Clock className={`w-3.5 h-3.5 ${match.status === 'Live' ? 'text-red-400' : 'text-pak-green'}`} /> 
                          {match.time} PKT
                        </div>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shrink-0 border ${
                      match.format === 'Test' ? 'border-orange-500/20 text-orange-600 bg-orange-500/5' :
                      match.format === 'ODI' ? 'border-blue-500/20 text-blue-600 bg-blue-500/5' :
                      'border-teal-500/20 text-teal-600 bg-teal-500/5'
                    }`}>
                      {match.format}
                    </span>
                  </div>

                  <div className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${match.status === 'Live' ? 'bg-red-500/10 border-red-500/20 shadow-lg shadow-red-900/20' : 'bg-white/[0.03] border-white/5'}`}>
                    <div className="w-12 h-8 rounded overflow-hidden border border-white/10 shrink-0 shadow-xl">
                      <img src={match.flagUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <Link to={`/match/${match.id}`} onClick={(e) => e.stopPropagation()} className="text-lg font-display font-bold text-white uppercase tracking-tighter leading-none hover:text-pak-green transition-colors line-clamp-1">
                      {match.title || `PAK vs ${match.opponent}`}
                    </Link>
                    {(match.status === 'Live' || match.status === 'Completed') && (match.scorePAK || match.scoreOpponent) && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-sm font-display font-black tracking-tighter italic ${match.status === 'Live' ? 'text-emerald-400' : 'text-white'}`}>{match.scorePAK}</span>
                        <span className="text-[10px] text-white/20 font-black">/</span>
                        <span className={`text-sm font-display font-black tracking-tighter italic ${match.status === 'Live' ? 'text-emerald-400' : 'text-white/40'}`}>{match.scoreOpponent}</span>
                      </div>
                    )}
                    {match.status === 'Live' && (
                      <div className="ml-auto">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,1)]" />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 px-1">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className={`w-3.5 h-3.5 ${match.status === 'Live' ? 'text-red-500 font-bold' : 'text-pak-green'}`} />
                        <span className="text-[9px] font-black uppercase tracking-widest text-ink/30 leading-none">Venue</span>
                      </div>
                      <span className="text-[11px] font-bold text-ink leading-tight line-clamp-2">{match.venue}</span>
                    </div>
                    <div className="flex flex-col gap-1 border-l border-white/5 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="w-3.5 h-3.5 text-ink/20" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-ink/30 leading-none">Series</span>
                      </div>
                      <span className="text-[11px] font-bold text-ink/50 leading-tight line-clamp-2 uppercase tracking-tight">{match.series}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <ShareButton 
                      title={match.title || `PAK vs ${match.opponent} - ${match.series}`}
                      text={`Pakistan vs ${match.opponent} in the ${match.series} on ${match.date} at ${match.time} PKT. Venue: ${match.venue}.`}
                      url={`${window.location.origin}/match/${match.id}`}
                      variant="icon"
                    />
                    {(match.status === 'Upcoming' || match.status === 'Today') ? (
                      <SetReminderButton 
                        matchId={match.id}
                        matchTitle={match.title || `Pakistan vs ${match.opponent}`}
                        matchTime={match.time}
                        matchDate={match.date}
                        className="flex-1"
                      />
                    ) : (
                      <span className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        match.status === 'Live' ? 'bg-red-600 text-white animate-pulse shadow-xl shadow-red-600/20' :
                        match.status === 'Scheduled' ? 'bg-emerald-600 text-white' :
                        'bg-white/5 text-ink/40 border border-white/5'
                      }`}>
                        {match.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                        {match.status}
                      </span>
                    )}
                    {match.granularStatus && (
                      <span className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white/5 text-pak-green border border-white/10">
                        {match.granularStatus}
                      </span>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(expandedId === match.id ? null : match.id);
                      }}
                      className={`flex-1 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                        match.status === 'Live' 
                          ? 'bg-red-600/10 border-red-500/30 text-red-500' 
                          : 'bg-white/5 border-white/10 text-pak-green hover:bg-pak-green/10'
                      }`}
                    >
                       {expandedId === match.id ? 'Hide Detail' : 'Quick Stats'} 
                       {expandedId === match.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {expandedId === match.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="overflow-hidden bg-black/30 backdrop-blur-md"
                    >
                      <MatchDetailExpanded match={match} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))
          ) : (
            <div className="py-24 text-center px-6">
              <Trophy className="w-12 h-12 text-white/5 mx-auto mb-6" />
              <p className="text-xs font-bold uppercase tracking-[4px] text-white/20">No matching fixtures</p>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="sticky top-0 z-20">
              <tr className="bg-[#0A0A0A] border-b border-white/10">
                <th className="px-6 py-6 cursor-pointer group" onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-white/40 group-hover:text-white transition-colors">
                    Full Date <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'date' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-6 py-6 cursor-pointer group" onClick={() => handleSort('opponent')}>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-white/40 group-hover:text-white transition-colors">
                    Opposition <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'opponent' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-6 py-6 cursor-pointer group" onClick={() => handleSort('series')}>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-white/40 group-hover:text-white transition-colors">
                    Format & Series <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'series' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-6 py-6">
                  <div className="text-[10px] font-black uppercase tracking-[2px] text-white/40">Venue & Status</div>
                </th>
                <th className="px-6 py-6 text-right">
                   <div className="text-[10px] font-black uppercase tracking-[2px] text-white/40">Options</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
                {filteredAndSortedMatches.length > 0 ? (
                  filteredAndSortedMatches.map((match, idx) => (
                    <React.Fragment key={match.id}>
                      {/* Insertion of ad every 5 matches for monetization */}
                      {idx > 0 && idx % 5 === 0 && (
                        <tr className="bg-white/[0.01]">
                          <td colSpan={5} className="px-8 py-4">
                            <AdPlaceholder type="in-article" className="max-w-3xl mx-auto" />
                          </td>
                        </tr>
                      )}
                      <motion.tr 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        onClick={() => setExpandedId(expandedId === match.id ? null : match.id)}
                        className={`transition-all group cursor-pointer border-l-2 border-transparent border-b border-white/[0.02] last:border-b-0 ${match.status === 'Live' ? 'bg-red-500/[0.04] !border-l-red-500' : 'hover:bg-white/[0.02]'} ${expandedId === match.id ? 'bg-pak-green/[0.04] !border-l-pak-green' : ''}`}
                      >
                      {/* Date Column */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex flex-col items-center justify-center shrink-0 border ${match.status === 'Live' ? 'bg-red-500/10 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
                            <span className={`text-lg font-display font-black leading-none ${match.status === 'Live' ? 'text-red-500' : 'text-white'}`}>
                              {match.date.match(/\d+/) ? match.date.match(/\d+/)![0] : ''}
                            </span>
                            <span className={`text-[9px] font-black uppercase tracking-widest ${match.status === 'Live' ? 'text-red-400/60' : 'text-white/40'}`}>
                              {match.date.includes(' ') ? match.date.split(' ')[0].substring(0,3) : '2026'}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <span className="text-[12px] font-bold text-white block mb-0.5">{match.date}</span>
                            <div className="flex items-center gap-1.5 text-[9px] font-black text-white/30 uppercase tracking-widest">
                              <Clock className={`w-3 h-3 ${match.status === 'Live' ? 'text-red-400' : 'text-pak-green'}`} /> {match.time}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Opponent Column */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 rounded-lg border border-white/10 overflow-hidden shrink-0 shadow-lg bg-black/20">
                            <img src={match.flagUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <Link 
                              to={`/match/${match.id}`} 
                              onClick={(e) => e.stopPropagation()} 
                              className="text-base font-display font-bold text-white uppercase tracking-tight leading-none group-hover:text-pak-green transition-colors"
                            >
                              {match.title || `PAK vs ${match.opponent}`}
                            </Link>
                            {(match.status === 'Live' || match.status === 'Completed') && (match.scorePAK || match.scoreOpponent) && (
                              <div className="flex items-center gap-1.5 mt-2.5 bg-white/[0.03] border border-white/5 rounded-lg px-2.5 py-1.5 w-fit">
                                <span className={`text-[13px] font-display font-black tracking-tight italic leading-none drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] ${match.status === 'Live' ? 'text-emerald-400' : 'text-white'}`}>{match.scorePAK}</span>
                                <span className="text-[10px] text-white/10 font-black italic">VS</span>
                                <span className={`text-[13px] font-display font-black tracking-tight italic leading-none drop-shadow-[0_0_8px_rgba(52,211,153,0.2)] ${match.status === 'Live' ? 'text-emerald-400' : 'text-white/40'}`}>{match.scoreOpponent}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Format/Series Column */}
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1.5 items-start">
                          <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                            match.format === 'Test' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                            match.format === 'ODI' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                            'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                          }`}>
                            {match.format}
                          </span>
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-tight line-clamp-1">
                            {match.series}
                          </span>
                        </div>
                      </td>

                      {/* Venue/Status Column */}
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <MapPin className={`w-3.5 h-3.5 shrink-0 ${match.status === 'Live' ? 'text-red-500' : 'text-pak-green'}`} />
                            <span className="text-[11px] font-bold text-white/50 line-clamp-1">{match.venue}</span>
                          </div>
                          <div className={`w-fit px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-2 ${
                            match.status === 'Live' ? 'bg-red-600 text-white animate-pulse' :
                            match.status === 'High Voltage' ? 'bg-red-800 text-white' :
                            match.status === 'Upcoming' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                            match.status === 'Scheduled' ? 'bg-emerald-600/10 text-emerald-500 border border-emerald-500/20' :
                            'bg-white/5 text-white/30'
                          }`}>
                            {match.status === 'Live' && <span className="w-1 h-1 rounded-full bg-white animate-ping" />}
                            {match.status}
                          </div>
                          {match.granularStatus && (
                            <div className="w-fit px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest bg-white/5 text-pak-green border border-white/10 mt-1">
                              {match.granularStatus}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Action Column */}
                      <td className="px-6 py-5 text-right">
                         <div className="flex items-center justify-end gap-3">
                           {(match.status === 'Upcoming' || match.status === 'Today') && (
                             <SetReminderButton 
                               matchId={match.id}
                               matchTitle={match.title || `Pakistan vs ${match.opponent}`}
                               matchTime={match.time}
                               matchDate={match.date}
                               className="w-40"
                             />
                           )}
                           <ShareButton 
                             title={match.title || `PAK vs ${match.opponent} - ${match.series}`}
                             text={`Pakistan vs ${match.opponent} in the ${match.series} on ${match.date} at ${match.time} PKT. Venue: ${match.venue}.`}
                             url={`${window.location.origin}/match/${match.id}`}
                             variant="icon"
                           />
                           <button 
                             className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${expandedId === match.id ? 'bg-pak-green text-white shadow-lg shadow-pak-green/20' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/10'}`}
                           >
                              {expandedId === match.id ? 'Close details' : 'View details'}
                           </button>
                         </div>
                      </td>
                    </motion.tr>

                    <AnimatePresence>
                      {expandedId === match.id && (
                        <tr className="bg-white/[0.01]">
                          <td colSpan={5} className="p-0">
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <MatchDetailExpanded match={match} />
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
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
                          onClick={() => {setFilterFormat('All'); setFilterVenue('All'); setSearchQuery('');}}
                          className="px-8 py-3 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-ink transition-all"
                        >
                          Clear All Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Leaderboard */}
      <AdPlaceholder type="leaderboard" className="mt-12" />

      {/* Bottom Informative Sections */}
      <div className="mt-24 space-y-24">
        {/* Series Breakdown & Match Timings */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card-bg border border-card-border p-10 rounded-[40px]">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Series-Wise <span className="text-pak-green">Breakdown</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-pak-green text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Link to="/pakistan-vs-bangladesh-2026-schedule" className="hover:underline">Pakistan vs Bangladesh 2026</Link>
                </h4>
                <p className="text-ink/60 text-sm leading-relaxed">
                  Pakistan will tour Bangladesh for an exciting series featuring multiple <Link to="/match/1" className="text-pak-green hover:underline">matches across formats</Link>, testing the team's adaptability in subcontinent conditions.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-pak-green text-[10px] font-bold uppercase tracking-widest mb-2">Pakistan vs England 2026</h4>
                <p className="text-ink/60 text-sm leading-relaxed">
                  A highly competitive series expected to test Pakistan’s strength at home. Fans can expect world-class cricket as these giants clash in <Link to="/schedule" className="text-pak-green hover:underline">Lahore and Karachi</Link>.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-pak-green text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Link to="/pakistan-vs-australia-2026-schedule-odi" className="hover:underline">Pakistan vs Australia 2026</Link>
                </h4>
                <p className="text-ink/60 text-sm leading-relaxed">
                  A historic white-ball series in Lahore. Pakistan looks to continue their momentum after the T20I sweep against the world champions in home conditions.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-pak-green text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Link to="/series-intelligence/pak-nz-series-2026" className="hover:underline">Pakistan vs New Zealand T20I Series 2026</Link>
                </h4>
                <p className="text-ink/60 text-sm leading-relaxed">
                  The Black Caps tour Pakistan for a high-octane 5-match T20I series, serving as a crucial preparation window for the upcoming T20 World Cup.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-pak-green text-[10px] font-bold uppercase tracking-widest mb-2">Asia Cup 2026</h4>
                <p className="text-ink/60 text-sm leading-relaxed">
                  Pakistan will participate in the Asia Cup, including <Link to="/schedule" className="text-pak-green hover:underline">high-voltage matches</Link> like Pakistan vs India. This remains the most anticipated <Link to="/blogs" className="text-pak-green hover:underline">event of the year</Link>.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card-bg border border-card-border p-10 rounded-[40px] flex flex-col">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Match Timings <span className="text-pak-green">(PKT)</span>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed mb-8">
              All match timings listed on this page are in Pakistan Standard Time (PKT). No need to convert time zones — everything is already adjusted for your convenience.
            </p>
            <div className="mt-auto space-y-6">
               <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <h2 className="text-xl font-display font-bold text-white uppercase mb-4">Pakistan Squad 2026</h2>
                  <p className="text-xs text-ink/50 leading-relaxed mb-6">
                    The squad for each series may vary depending on format and conditions. Players are selected based on performance, fitness, and team strategy.
                  </p>
                  <Link to="/squads" className="text-[10px] font-bold text-pak-green uppercase tracking-[3px] flex items-center gap-2 hover:translate-x-2 transition-transform">
                    View Full Squad Details <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* Why This Page Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Why This Page is <span className="text-pak-green">Important</span>
          </h2>
          <p className="text-ink/60 font-medium leading-relaxed mb-10">
            This page is designed to give you quick and accurate access to Pakistan’s full cricket schedule without any confusion. Instead of searching multiple websites, you can find everything here: Match dates, Venues, Timings, and Series details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Accurate Dates', 'Verified Venues', 'PKT Timings'].map((feature, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-pak-green">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-10 text-center">
            Frequently Asked <span className="text-pak-green">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "When is Pakistan’s next match in 2026?",
                a: "Pakistan’s next match is scheduled in May 2026 against Bangladesh during their overseas tour."
              },
              {
                q: "Where can I check Pakistan cricket schedule 2026?",
                a: "You can check the complete and updated schedule right here on the PakCric Schedule website."
              },
              {
                q: "Does Pakistan play in ICC tournaments in 2026?",
                a: "Yes, Pakistan is expected to participate in major ICC and regional tournaments like the Asia Cup."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-card-bg border border-card-border p-8 rounded-[32px] hover:border-pak-green/20 transition-colors">
                <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stay Updated Section */}
        <section className="bg-gradient-to-br from-pak-green to-pak-green/80 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <Globe className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8">
              Latest Updates
            </h2>
            <p className="text-white/80 font-medium leading-relaxed mb-10">
              Cricket schedules can change due to weather, logistics, or tournament updates. This page is regularly updated to provide the latest and most accurate Pakistan cricket schedule 2026. Bookmark this page for instant access.
            </p>
          </div>
        </section>

        <ExternalResourcesSection />

        <InternalLinkSection />

        {/* Final CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-8">
            Stay Connected with Every <span className="text-pak-green">Pakistan Match</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-12 py-5 bg-pak-green text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-pak-green/30"
            >
              Check Full Schedule Above
            </button>
            <Link to="/schedule" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-12 py-5 bg-white/5 text-white border border-white/20 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Explore Upcoming Matches
            </Link>
          </div>
          <p className="mt-8 text-[10px] font-bold text-ink/30 uppercase tracking-[4px]">
            Bookmark this page for updates
          </p>
        </section>
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
