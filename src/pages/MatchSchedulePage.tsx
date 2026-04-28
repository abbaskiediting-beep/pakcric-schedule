import { Trophy, ArrowLeft, ArrowUpDown, Filter, Search, ArrowRight, Calendar, MapPin, Clock, Globe, Info, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import React, { useState, useMemo } from 'react';
import { Match } from '../types';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import ExternalResourcesSection from '../components/ExternalResourcesSection';

type SortKey = 'date' | 'opponent' | 'series';

export default function MatchSchedulePage() {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterFormat, setFilterFormat] = useState<string>('All');
  const [filterVenue, setFilterVenue] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all available formats and venues
  const formats = ['All', ...Array.from(new Set(PAKISTAN_SCHEDULE.map(m => m.format)))];
  const venues = ['All', ...Array.from(new Set(PAKISTAN_SCHEDULE.map(m => m.venue)))];

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
      <div className="mb-6 md:mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:text-pak-green transition-colors mb-4 md:mb-6">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 md:mb-6">
            <h1 className="text-xl sm:text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white leading-tight">
              Pakistan Cricket Schedule 2026 – <span className="text-pak-green">Complete Match Details</span>
            </h1>
            <button 
              onClick={() => {
                const shareData = {
                  title: 'Pakistan Cricket Schedule 2026',
                  text: 'Check out the complete Pakistan cricket schedule for the 2026 season!',
                  url: window.location.href
                };
                if (navigator.share) {
                  navigator.share(shareData);
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-ink/60 hover:text-pak-green hover:border-pak-green/20 transition-all w-fit"
            >
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span>Share Schedule</span>
            </button>
          </div>
          <div className="max-w-3xl space-y-3 sm:space-y-4 mb-6 md:mb-10">
            <p className="text-sm sm:text-base md:text-xl text-ink/70 font-medium leading-relaxed">
              We bring you the <Link to="/schedule" className="text-pak-green hover:underline">Pakistan cricket schedule 2026</Link> with <strong>complete match details</strong> for every <Link to="/pakistan-upcoming-series-full-schedule" className="text-pak-green hover:underline">upcoming series</Link>, international tour, and major tournament. Fans can look forward to a busy year as Pakistan competes across all formats, including <Link to="/icc-test-ranking-2026" className="text-pak-green hover:underline">Test</Link>, <Link to="/icc-odi-ranking-2026" className="text-pak-green hover:underline">ODI</Link>, and <Link to="/icc-t20-ranking-2026" className="text-pak-green hover:underline">T20 matches</Link>.
            </p>
            <p className="text-sm text-ink/50 font-medium leading-relaxed">
              On this page, you’ll find the <Link to="/schedule" className="text-pak-green hover:underline">complete Pakistan cricket schedule</Link>, including <Link to="/pakistan-next-tour-details" className="text-pak-green hover:underline">match dates, venues, and timings</Link> — all organized in a simple and easy-to-follow format. Whether you're planning to watch live matches or just want to stay updated, this page has everything you need.
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[4px] text-pak-green/60 pt-4">
              Fastest Updates • <Link to="/news" className="text-pak-green hover:underline">Verified Timings</Link> • Venue Directions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-6 py-2 rounded-full bg-pak-green text-white text-[10px] font-bold uppercase tracking-[3px] shadow-lg shadow-pak-green/20">
              Active Season 2026
            </div>
            <p className="text-ink/40 font-bold uppercase tracking-widest text-[10px] border-l border-card-border pl-6">
              {filteredAndSortedMatches.length} Confirmed Fixtures
            </p>
          </div>
        </motion.div>
      </div>

      {/* Broad Overview Section */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-card-border rounded-[48px] p-10 md:p-20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-8">
            Pakistan Upcoming <span className="text-pak-green">Matches 2026</span>
          </h2>
          <div className="space-y-6 text-ink/60 font-medium leading-relaxed">
            <p className="text-lg">
              Pakistan is set to play multiple <Link to="/schedule" className="text-pak-green hover:underline">international matches</Link> throughout 2026. These include bilateral series as well as <Link to="/schedule" className="text-pak-green hover:underline">global tournaments</Link>. The <Link to="/schedule" className="text-pak-green hover:underline">fixture list</Link> is updated regularly to ensure accuracy and reflect verified PCB announcements. You can also view the <a href="https://www.icc-cricket.com/tournaments/calendar" target="_blank" rel="noopener noreferrer" className="text-pak-green hover:underline">standard ICC tournament calendar</a> for global event planning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Bilateral Series', desc: 'Home and away international tours', link: '/pakistan-upcoming-series-full-schedule' },
                { label: 'Global Tournaments', desc: 'Asia Cup and ICC event fixtures', link: '/schedule' },
                { label: 'Top-Tier Opponents', desc: 'Matches against leading nations', link: '/rankings' },
                { label: 'Format Variety', desc: 'Test, ODI, and T20 match-ups', link: '/players-stats' }
              ].map((item, idx) => (
                <Link to={item.link} key={idx} className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-pak-green/30 transition-all">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-pak-green mb-1">{item.label}</h4>
                  <p className="text-[9px] font-bold text-ink/40 uppercase tracking-widest leading-normal">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-pak-green/10 rounded-[40px] aspect-square flex flex-col items-center justify-center text-center border border-pak-green/20 relative group-hover:bg-pak-green/20 transition-colors">
            <Calendar className="w-24 h-24 text-pak-green mb-6 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[6px] text-pak-green">Upcoming Fixtures</span>
          </div>
        </div>
      </section>

      {/* Global Controls */}
      <div className="mb-12 space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-4">
            Upcoming <span className="text-pak-green">Match Search</span>
          </h2>
          <p className="text-ink/60 font-medium leading-relaxed">
            Never miss a single delivery. Use our comprehensive search and filter tools to find upcoming Pakistan matches by opponent, venue, or format.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
          {/* Search Box */}
          <div className="relative group flex-1 max-w-lg">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-pak-green transition-colors" />
            <input 
              type="text" 
              placeholder="Search by Team, Venue or Series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card-bg border border-card-border rounded-3xl py-5 pl-14 pr-8 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green/40 focus:ring-4 focus:ring-pak-green/10 transition-all w-full text-ink shadow-xl"
            />
          </div>

          {/* Venue Dropdown */}
          <div className="relative group w-full md:w-72">
            <select
              value={filterVenue}
              onChange={(e) => setFilterVenue(e.target.value)}
              className="appearance-none bg-card-bg border border-card-border rounded-3xl py-5 pl-14 pr-12 text-[10px] font-bold uppercase tracking-[4px] focus:outline-none focus:border-pak-green/40 focus:ring-4 focus:ring-pak-green/10 transition-all w-full text-ink shadow-xl cursor-pointer"
            >
              {venues.map(v => (
                <option key={v} value={v} className="bg-card-bg text-ink uppercase">{v === 'All' ? 'Every Venue' : v}</option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <MapPin className="w-4 h-4 text-pak-green" />
            </div>
          </div>
        </div>
      </div>


      {/* Format Filter Bar - Sticky on Mobile */}
      <div className="sticky top-28 sm:top-36 z-30 flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap items-center gap-1.5 md:gap-2 mb-8 bg-bg/80 backdrop-blur-xl border border-card-border p-1.5 md:p-3 rounded-2xl md:rounded-[32px] w-full md:w-fit shadow-lg shadow-black/20 scrollbar-hide -mx-4 px-4 md:mx-3 snap-x snap-mandatory">
        {formats.map(f => (
          <button
            key={f}
            onClick={() => setFilterFormat(f)}
            className={`whitespace-nowrap px-5 md:px-10 py-2 md:py-3 rounded-lg md:rounded-2xl text-[8px] md:text-[10px] font-bold uppercase tracking-[1.5px] md:tracking-[3px] transition-all duration-300 snap-start shrink-0 ${
              filterFormat === f 
                ? 'bg-pak-green text-white shadow-pak-green/40 shadow-xl scale-105' 
                : 'text-neutral-500 hover:text-ink hover:bg-white/5'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* SEO Optimized Table Header Note */}
      <div className="mb-6 px-4">
        <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-2">
          Pakistan Cricket <span className="text-pak-green">Full Schedule 2026</span>
        </h2>
        <p className="text-sm font-bold text-ink/40 uppercase tracking-[2px]">
          Below is the complete list of Pakistan's upcoming matches in 2026 with dates, venues, and timings:
        </p>
      </div>

      {/* Structured Schedule Container */}
      <div className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl relative">
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
                <div className="p-6 flex flex-col gap-5">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-pak-green/5 border border-pak-green/10 flex flex-col items-center justify-center shrink-0">
                        <span className="text-[17px] font-bold text-ink leading-none">
                          {match.date.match(/\d+/) ? match.date.match(/\d+/)![0] : ''}
                        </span>
                        <span className="text-[8px] font-bold text-pak-green uppercase tracking-widest">
                          {match.date.includes(' ') ? match.date.split(' ')[0].substring(0,3) : '2026'}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-ink block leading-tight">{match.date}</span>
                        <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest mt-1 inline-block">{match.time} PKT</span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest shrink-0 ${
                      match.format === 'Test' ? 'border border-orange-500/20 text-orange-600 bg-orange-500/5' :
                      match.format === 'ODI' ? 'border border-blue-500/20 text-blue-600 bg-blue-500/5' :
                      'border border-purple-500/20 text-purple-600 bg-purple-500/5'
                    }`}>
                      {match.format}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                    <img src={match.flagUrl} alt="" className="w-10 h-7 object-cover rounded shadow-sm border border-card-border shrink-0" referrerPolicy="no-referrer" />
                    <span className="text-base font-display font-bold text-white uppercase tracking-tighter leading-none">PAK vs {match.opponent}</span>
                  </div>

                  <div className="flex flex-col gap-2.5 px-1">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-pak-green mt-0.5" />
                      <span className="text-[11px] font-bold text-ink/60 leading-snug">{match.venue}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Trophy className="w-4 h-4 text-ink/20 mt-0.5" />
                      <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest leading-snug">{match.series}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className={`px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                      match.status === 'Live' ? 'bg-red-600 text-white animate-pulse' :
                      match.status === 'Upcoming' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' :
                      match.status === 'Scheduled' ? 'bg-emerald-600 text-white' :
                      'bg-white/10 text-ink/40'
                    }`}>
                      {match.status}
                    </span>
                    <Link to={`/match/${match.id}`} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-pak-green uppercase tracking-widest flex items-center gap-2 hover:bg-pak-green hover:text-white transition-all">
                      Match Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
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
              <tr className="bg-neutral-900 border-b border-card-border">
                <th className="px-8 py-8 cursor-pointer group w-48" onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Full Date <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'date' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-8 py-8 cursor-pointer group w-56" onClick={() => handleSort('opponent')}>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-ink/60">
                    Opposition <ArrowUpDown className={`w-3 h-3 transition-opacity ${sortKey === 'opponent' ? 'opacity-100 text-pak-green' : 'opacity-20 group-hover:opacity-100'}`} />
                  </div>
                </th>
                <th className="px-8 py-8 w-56">
                  <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Format & Series</div>
                </th>
                <th className="px-8 py-8 w-64">
                  <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Venue & Status</div>
                </th>
                <th className="px-8 py-8 text-right">
                   <div className="text-[10px] font-bold uppercase tracking-[3px] text-ink/60">Match Center</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                      <td className="px-8 py-8 relative group/opp">
                        {/* Opposition Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-neutral-900 text-white rounded-xl text-[10px] whitespace-nowrap opacity-0 group-hover/opp:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-white/10 font-bold uppercase tracking-widest">
                          Pakistan vs {match.opponent}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-900" />
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="relative shrink-0">
                            <img src={match.flagUrl} alt="" className="w-10 h-7 object-cover rounded-lg shadow-sm border border-card-border" referrerPolicy="no-referrer" loading="lazy" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pak-green rounded-full border-2 border-card-bg flex items-center justify-center">
                              <Globe className="w-2 h-2 text-white" />
                            </div>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-lg font-display font-bold text-white uppercase tracking-tighter leading-none truncate block max-w-[140px]">
                              PAK vs {match.opponent}
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

                      {/* Venue/Status Column */}
                      <td className="px-8 py-8 w-64 relative group/venue">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-start gap-2 min-w-0">
                            <MapPin className="w-4 h-4 text-pak-green mt-0.5 shrink-0" />
                            <span className="text-[11px] font-bold text-ink leading-relaxed truncate block w-full">{match.venue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <span className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest ${
                               match.status === 'Live' ? 'bg-red-600 text-white animate-pulse' :
                               match.status === 'High Voltage' ? 'bg-red-800 text-white shadow-lg shadow-red-900/40' :
                               match.status === 'Upcoming' ? 'bg-amber-500 text-black' :
                               match.status === 'Scheduled' ? 'bg-emerald-600 text-white' :
                               'bg-white/10 text-ink/40'
                             }`}>
                               {match.status}
                             </span>
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
                  <Link to="/pakistan-tour-bangladesh-test-2026" className="hover:underline">Pakistan vs Bangladesh 2026</Link>
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
