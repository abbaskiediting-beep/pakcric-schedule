import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, 
  Calendar, 
  MapPin, 
  Trophy, 
  Clock, 
  Search, 
  Filter, 
  Share2, 
  Download, 
  CheckCircle2, 
  Bell, 
  Info,
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';
import ShareButton from '../components/ShareButton';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import InternalLinkSection from '../components/InternalLinkSection';
import MatchDetailsModal from '../components/MatchDetailsModal';

interface HomeMatch {
  id: string;
  opponent: string;
  opponentName: string;
  flagUrl: string;
  format: 'Test' | 'ODI' | 'T20I';
  title: string;
  date: string;
  time: string;
  venue: string;
  series: string;
  status: 'Upcoming' | 'Completed';
  result?: string;
}

const HOME_FIXTURES_2026: HomeMatch[] = [
  // --- COMPLETED TOUR: AUSTRALIA IN PAKISTAN (JANUARY 2026) ---
  {
    id: 'h-comp-aus-t20-1',
    opponent: 'AUS',
    opponentName: 'Australia',
    flagUrl: 'https://flagcdn.com/au.svg',
    format: 'T20I',
    title: 'Pakistan vs Australia, 1st T20I',
    date: 'January 14, 2026',
    time: '19:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan',
    status: 'Completed',
    result: 'Pakistan won by 7 wickets'
  },
  {
    id: 'h-comp-aus-t20-2',
    opponent: 'AUS',
    opponentName: 'Australia',
    flagUrl: 'https://flagcdn.com/au.svg',
    format: 'T20I',
    title: 'Pakistan vs Australia, 2nd T20I',
    date: 'January 16, 2026',
    time: '19:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan',
    status: 'Completed',
    result: 'Pakistan won by 23 runs'
  },
  {
    id: 'h-comp-aus-t20-3',
    opponent: 'AUS',
    opponentName: 'Australia',
    flagUrl: 'https://flagcdn.com/au.svg',
    format: 'T20I',
    title: 'Pakistan vs Australia, 3rd T20I',
    date: 'January 18, 2026',
    time: '19:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan',
    status: 'Completed',
    result: 'Pakistan won by 8 wickets'
  },

  // --- UPCOMING: ZIMBABWE TOUR OF PAKISTAN (MAY 2026) ---
  {
    id: 'h-zim-odi-1',
    opponent: 'ZIM',
    opponentName: 'Zimbabwe',
    flagUrl: 'https://flagcdn.com/zw.svg',
    format: 'ODI',
    title: 'Pakistan vs Zimbabwe, 1st ODI',
    date: 'May 12, 2026',
    time: '14:00 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Zimbabwe Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-zim-odi-2',
    opponent: 'ZIM',
    opponentName: 'Zimbabwe',
    flagUrl: 'https://flagcdn.com/zw.svg',
    format: 'ODI',
    title: 'Pakistan vs Zimbabwe, 2nd ODI',
    date: 'May 14, 2026',
    time: '14:00 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Zimbabwe Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-zim-odi-3',
    opponent: 'ZIM',
    opponentName: 'Zimbabwe',
    flagUrl: 'https://flagcdn.com/zw.svg',
    format: 'ODI',
    title: 'Pakistan vs Zimbabwe, 3rd ODI',
    date: 'May 16, 2026',
    time: '14:00 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Zimbabwe Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-zim-t20I-1',
    opponent: 'ZIM',
    opponentName: 'Zimbabwe',
    flagUrl: 'https://flagcdn.com/zw.svg',
    format: 'T20I',
    title: 'Pakistan vs Zimbabwe, 1st T20I',
    date: 'May 19, 2026',
    time: '19:00 PKT',
    venue: 'National Bank Stadium, Karachi',
    series: 'Zimbabwe Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-zim-t20I-2',
    opponent: 'ZIM',
    opponentName: 'Zimbabwe',
    flagUrl: 'https://flagcdn.com/zw.svg',
    format: 'T20I',
    title: 'Pakistan vs Zimbabwe, 2nd T20I',
    date: 'May 21, 2026',
    time: '19:00 PKT',
    venue: 'National Bank Stadium, Karachi',
    series: 'Zimbabwe Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-zim-t20I-3',
    opponent: 'ZIM',
    opponentName: 'Zimbabwe',
    flagUrl: 'https://flagcdn.com/zw.svg',
    format: 'T20I',
    title: 'Pakistan vs Zimbabwe, 3rd T20I',
    date: 'May 23, 2026',
    time: '19:00 PKT',
    venue: 'National Bank Stadium, Karachi',
    series: 'Zimbabwe Tour of Pakistan',
    status: 'Upcoming'
  },

  // --- UPCOMING: AUSTRALIA TOUR OF PAKISTAN (MAY-JUNE 2026) ---
  {
    id: 'h-aus-odi-1',
    opponent: 'AUS',
    opponentName: 'Australia',
    flagUrl: 'https://flagcdn.com/au.svg',
    format: 'ODI',
    title: 'Pakistan vs Australia, 1st ODI',
    date: 'May 30, 2026',
    time: '14:30 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Australia Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-aus-odi-2',
    opponent: 'AUS',
    opponentName: 'Australia',
    flagUrl: 'https://flagcdn.com/au.svg',
    format: 'ODI',
    title: 'Pakistan vs Australia, 2nd ODI',
    date: 'June 02, 2026',
    time: '14:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-aus-odi-3',
    opponent: 'AUS',
    opponentName: 'Australia',
    flagUrl: 'https://flagcdn.com/au.svg',
    format: 'ODI',
    title: 'Pakistan vs Australia, 3rd ODI',
    date: 'June 05, 2026',
    time: '14:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan',
    status: 'Upcoming'
  },

  // --- UPCOMING: SRI LANKA TOUR OF PAKISTAN (OCTOBER 2026) ---
  {
    id: 'h-sl-t20-1',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'T20I',
    title: 'Pakistan vs Sri Lanka, 1st T20I',
    date: 'October 02, 2026',
    time: '19:30 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Sri Lanka Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-sl-t20-2',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'T20I',
    title: 'Pakistan vs Sri Lanka, 2nd T20I',
    date: 'October 04, 2026',
    time: '19:30 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Sri Lanka Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-sl-t20-3',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'T20I',
    title: 'Pakistan vs Sri Lanka, 3rd T20I',
    date: 'October 06, 2026',
    time: '19:30 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Sri Lanka Tour of Pakistan',
    status: 'Upcoming'
  },

  // --- UPCOMING: ODI TRI-SERIES (OCTOBER 2026) ---
  {
    id: 'h-tri-1',
    opponent: 'SL',
    opponentName: 'Sri Lanka & England',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'ODI',
    title: 'Pakistan vs Sri Lanka, Match 1',
    date: 'October 12, 2026',
    time: '14:30 PKT',
    venue: 'National Bank Stadium, Karachi',
    series: 'ODI Tri-Series',
    status: 'Upcoming'
  },
  {
    id: 'h-tri-2',
    opponent: 'ENG',
    opponentName: 'Sri Lanka & England',
    flagUrl: 'https://flagcdn.com/gb.svg',
    format: 'ODI',
    title: 'England vs Sri Lanka, Match 2',
    date: 'October 14, 2026',
    time: '14:30 PKT',
    venue: 'National Bank Stadium, Karachi',
    series: 'ODI Tri-Series',
    status: 'Upcoming'
  },
  {
    id: 'h-tri-3',
    opponent: 'ENG',
    opponentName: 'Sri Lanka & England',
    flagUrl: 'https://flagcdn.com/gb.svg',
    format: 'ODI',
    title: 'Pakistan vs England, Match 3',
    date: 'October 16, 2026',
    time: '14:30 PKT',
    venue: 'National Bank Stadium, Karachi',
    series: 'ODI Tri-Series',
    status: 'Upcoming'
  },
  {
    id: 'h-tri-final',
    opponent: 'TBD',
    opponentName: 'Sri Lanka & England',
    flagUrl: 'https://flagcdn.com/pk.svg',
    format: 'ODI',
    title: 'Tri-Series Grand Final',
    date: 'October 19, 2026',
    time: '14:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'ODI Tri-Series',
    status: 'Upcoming'
  },

  // --- UPCOMING: IRELAND TOUR OF PAKISTAN (OCTOBER 2026) ---
  {
    id: 'h-ire-odi-1',
    opponent: 'IRE',
    opponentName: 'Ireland',
    flagUrl: 'https://flagcdn.com/ie.svg',
    format: 'ODI',
    title: 'Pakistan vs Ireland, 1st ODI (Proposed)',
    date: 'October 23, 2026',
    time: '14:00 PKT',
    venue: 'Multan Cricket Stadium, Multan',
    series: 'Ireland Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-ire-odi-2',
    opponent: 'IRE',
    opponentName: 'Ireland',
    flagUrl: 'https://flagcdn.com/ie.svg',
    format: 'ODI',
    title: 'Pakistan vs Ireland, 2nd ODI (Proposed)',
    date: 'October 25, 2026',
    time: '14:00 PKT',
    venue: 'Multan Cricket Stadium, Multan',
    series: 'Ireland Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-ire-odi-3',
    opponent: 'IRE',
    opponentName: 'Ireland',
    flagUrl: 'https://flagcdn.com/ie.svg',
    format: 'ODI',
    title: 'Pakistan vs Ireland, 3rd ODI (Proposed)',
    date: 'October 27, 2026',
    time: '14:00 PKT',
    venue: 'Multan Cricket Stadium, Multan',
    series: 'Ireland Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-ire-t20-1',
    opponent: 'IRE',
    opponentName: 'Ireland',
    flagUrl: 'https://flagcdn.com/ie.svg',
    format: 'T20I',
    title: 'Pakistan vs Ireland, 1st T20I (Proposed)',
    date: 'October 30, 2026',
    time: '19:00 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Ireland Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-ire-t20-2',
    opponent: 'IRE',
    opponentName: 'Ireland',
    flagUrl: 'https://flagcdn.com/ie.svg',
    format: 'T20I',
    title: 'Pakistan vs Ireland, 2nd T20I (Proposed)',
    date: 'November 01, 2026',
    time: '19:00 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Ireland Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-ire-t20-3',
    opponent: 'IRE',
    opponentName: 'Ireland',
    flagUrl: 'https://flagcdn.com/ie.svg',
    format: 'T20I',
    title: 'Pakistan vs Ireland, 3rd T20I (Proposed)',
    date: 'November 03, 2026',
    time: '19:00 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Ireland Tour of Pakistan',
    status: 'Upcoming'
  },

  // --- UPCOMING: SRI LANKA TESTS (WTC NOVEMBER 2026) ---
  {
    id: 'h-sl-test-1',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'Test',
    title: 'Pakistan vs Sri Lanka, 1st Test Match',
    date: 'November 12–16, 2026',
    time: '10:00 PKT',
    venue: 'Multan Cricket Stadium, Multan',
    series: 'Sri Lanka Tour of Pakistan',
    status: 'Upcoming'
  },
  {
    id: 'h-sl-test-2',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'Test',
    title: 'Pakistan vs Sri Lanka, 2nd Test Match',
    date: 'November 20–24, 2026',
    time: '10:00 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Sri Lanka Tour of Pakistan',
    status: 'Upcoming'
  }
];

export default function PakistanHomeSeries() {
  const [formatFilter, setFormatFilter] = useState<'All' | 'Test' | 'ODI' | 'T20I'>('All');
  const [seriesFilter, setSeriesFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [reminders, setReminders] = useState<{ [key: string]: boolean }>({});
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedMatch, setSelectedMatch] = useState<HomeMatch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredFixtures = useMemo(() => {
    return HOME_FIXTURES_2026.filter((match) => {
      const matchesFormat = formatFilter === 'All' || match.format === formatFilter;
      const matchesSeries = seriesFilter === 'All' || match.series.toLowerCase().includes(seriesFilter.toLowerCase());
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        match.title.toLowerCase().includes(query) ||
        match.venue.toLowerCase().includes(query) ||
        match.opponentName.toLowerCase().includes(query) ||
        match.series.toLowerCase().includes(query);

      return matchesFormat && matchesSeries && matchesSearch;
    });
  }, [formatFilter, seriesFilter, searchQuery]);

  const toggleReminder = (id: string) => {
    setReminders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const venueStats = useMemo(() => {
    const stats: { [key: string]: number } = {};
    HOME_FIXTURES_2026.forEach(m => {
      const city = m.venue.split(', ').pop()?.replace(' (TBA)', '') || 'Other';
      stats[city] = (stats[city] || 0) + 1;
    });
    return Object.entries(stats).map(([city, count]) => ({ city, count }));
  }, []);

  const totalMatches = HOME_FIXTURES_2026.length;
  const t20Count = HOME_FIXTURES_2026.filter(m => m.format === 'T20I').length;
  const odiCount = HOME_FIXTURES_2026.filter(m => m.format === 'ODI').length;
  const testCount = HOME_FIXTURES_2026.filter(m => m.format === 'Test').length;

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <Helmet>
        <title>Pakistan Home Cricket Series 2026 — Fixtures & Venues</title>
        <meta name="description" content="Full Pakistan home cricket series schedule 2026. All Test, ODI and T20 matches played in Pakistan with venue details, dates and timings. West Indies, Zimbabwe tour" />
        <meta name="keywords" content="Pakistan home series 2026, Pakistan cricket schedule, West Indies tour of Pakistan, Zimbabwe tour of Pakistan, Gaddafi Stadium Lahore, National Bank Stadium Karachi, Pakistan cricket fixtures" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Home Cricket Series 2026 — Fixtures & Venues" />
        <meta property="og:description" content="Full Pakistan home cricket series schedule 2026. All Test, ODI and T20 matches played in Pakistan with venue details, dates and timings. West Indies, Zimbabwe tour" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />

        {/* Twitter */}
        <meta property="twitter:title" content="Pakistan Home Cricket Series 2026 — Fixtures & Venues" />
        <meta property="twitter:description" content="Full Pakistan home cricket series schedule 2026. All Test, ODI and T20 matches played in Pakistan with venue details, dates and timings. West Indies, Zimbabwe tour" />
        <meta property="twitter:image" content="/favicon.svg" />
      </Helmet>

      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:translate-x-[-4px] transition-all mb-8"
      >
        <ChevronLeft className="w-4 h-4 text-pak-green" /> Back to Home
      </Link>

      {/* Page Header block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] p-6 md:p-12 mb-8 overflow-hidden"
      >
        {/* Ambient glow decoration */}
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-pak-green/20 blur-[100px] pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-emerald-700/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 bg-pak-green text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[3px] mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Official 2026 Calendar
          </span>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1] mb-4">
                Pakistan Home Series 2026
              </h1>
              <p className="text-sm sm:text-lg text-ink/75 leading-relaxed font-medium">
                Complete and official home fixtures directory for the Pakistan Men's Cricket Team in 2026.
                Discover all matches scheduled across historic venues in Pakistan including Gaddafi Stadium Lahore, National Bank Stadium Karachi, Rawalpindi Cricket Stadium, and Multan Cricket Stadium. Features the completed <span className="text-pak-green font-bold">Australia Tour (Jan 2026)</span> and upcoming tours of <span className="text-pak-green font-bold">Australia (ODIs)</span>, <span className="text-pak-green font-bold">Zimbabwe</span>, <span className="text-pak-green font-bold">Sri Lanka</span>, the multi-nation <span className="text-pak-green font-bold">ODI Tri-Series</span>, and <span className="text-pak-green font-bold">Ireland</span>.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <SaveForOfflineButton 
                id="pakistan-home-series-2026" 
                label="Save Offline" 
                className="w-full sm:w-fit px-6 py-3.5 text-xs font-bold uppercase tracking-widest bg-white/5 text-white border border-white/10 hover:bg-white/10"
              />
              <ShareButton 
                title="Pakistan Home Cricket Series 2026"
                text="Complete schedule, match dates and venue details for Pakistan Home Tours in 2026."
                url={window.location.href}
                className="w-full sm:w-fit"
              />
            </div>
          </div>

          {/* Quick Stat Counter Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-card-border">
            {[
              { label: 'Total Matches Hosted', val: totalMatches, desc: 'Across All Tours' },
              { label: 'Test Showdowns', val: testCount, desc: 'World Test Championship' },
              { label: 'ODI Matches', val: odiCount, desc: '50-Over Campaigns' },
              { label: 'T20 Internationals', val: t20Count, desc: 'Aggressive T20 Series' }
            ].map((stat, i) => (
              <div key={i} className="bg-black/20 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-ink/40 block mb-1">{stat.label}</span>
                  <span className="text-2xl sm:text-4xl font-display font-black text-white">{stat.val}</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-bold text-pak-green uppercase tracking-widest mt-2">{stat.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Venues & Atmosphere Highlight Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pak-green" /> Historic Venues Allocation
            </h3>
            <p className="text-xs sm:text-sm text-ink/60 mb-6 leading-relaxed">
              Pakistan's home matches are proudly distributed among premier cities to allow fans nationwide to support their team. Faisalabad's famous Iqbal Stadium makes a return to host international fixtures, while Gaddafi Stadium Lahore, Multan Cricket Stadium, Rawalpindi, and Karachi hold key World Test Championship battles, ODIs, and high-energy T20Is.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {venueStats.map((venue, idx) => (
              <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-3 text-center">
                <span className="text-[10px] sm:text-xs font-black text-white block mb-1">{venue.city}</span>
                <span className="text-xs font-black text-pak-green uppercase tracking-wider">{venue.count} {venue.count === 1 ? 'Match' : 'Matches'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-500" /> Match Reminders & Times
            </h3>
            <p className="text-xs text-ink/65 leading-relaxed mb-4">
              PST (Pakistan Standard Time) starts at <strong>10:00 AM</strong> for Test matches to maximize daytime play. ODI games begin in early afternoon at <strong>02:00 PM</strong> or <strong>02:30 PM</strong> as Day-Night encounters, while T20Is light up the evenings starting at <strong>07:00 PM</strong> or <strong>07:30 PM</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <Clock className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-amber-500">All local timings are calculated in GMT+5</span>
          </div>
        </div>
      </div>

      {/* Search and Filters Hub */}
      <div className="bg-card-bg border border-card-border rounded-2xl md:rounded-3xl p-4 sm:p-6 mb-8">
        <div className="flex flex-col gap-4">
          
          {/* Top Row: Search input & layouts */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            <div className="relative flex-grow max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
              <input 
                type="text" 
                placeholder="Search opponent, stadium, series or format..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-card-border rounded-xl py-3 pl-12 pr-4 text-xs sm:text-sm text-white placeholder-ink/30 focus:outline-none focus:border-pak-green transition-all"
              />
            </div>

            {/* View Mode Toggle & Cleaner Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'grid' 
                    ? 'bg-pak-green text-white shadow-lg shadow-pak-green/20 border border-pak-green' 
                    : 'bg-black/20 text-ink/60 border border-white/5 hover:text-white'
                }`}
              >
                Grid Layout
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'table' 
                    ? 'bg-pak-green text-white shadow-lg shadow-pak-green/20 border border-pak-green' 
                    : 'bg-black/20 text-ink/60 border border-white/5 hover:text-white'
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          <div className="border-t border-card-border my-2" />

          {/* Bottom Row: Tour Filters & Format Filters */}
          <div className="flex flex-col gap-3">
            {/* Format filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-widest text-ink/40 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-pak-green" /> Format:
              </span>
              {(['All', 'Test', 'ODI', 'T20I'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setFormatFilter(fmt)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    formatFilter === fmt
                      ? 'bg-pak-green text-white border border-pak-green shadow-sm'
                      : 'bg-white/5 text-ink/60 border border-white/5 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {fmt === 'All' ? 'All Formats' : fmt}
                </button>
              ))}
            </div>

            {/* Tour/Series filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-widest text-ink/40 mr-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-pak-green" /> Tour:
              </span>
              {[
                { label: 'All Tours', value: 'All' },
                { label: 'vs Australia', value: 'Australia' },
                { label: 'vs Sri Lanka', value: 'Sri Lanka' },
                { label: 'vs Zimbabwe', value: 'Zimbabwe' },
                { label: 'Tri-Series', value: 'Tri-Series' },
                { label: 'vs Ireland', value: 'Ireland' }
              ].map((tour) => (
                <button
                  key={tour.value}
                  onClick={() => setSeriesFilter(tour.value)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    seriesFilter === tour.value
                      ? 'bg-pak-green text-white border border-pak-green shadow-sm'
                      : 'bg-white/5 text-ink/60 border border-white/5 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tour.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Main Fixtures Showcase */}
      {HOME_FIXTURES_2026.length === 0 ? (
        <div className="bg-card-bg border border-card-border rounded-3xl p-12 md:p-16 text-center max-w-2xl mx-auto my-8">
          <Trophy className="w-12 h-12 text-pak-green/60 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
            No Home Matches Listed
          </h3>
          <p className="text-ink/60 text-xs sm:text-sm leading-relaxed mb-6">
            All home series fixtures have been removed from the 2026 directory as requested. Upcoming bilateral campaigns, multi-nation tournaments, and international schedules are currently subject to rescheduling or announcement updates by the Pakistan Cricket Board.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pak-green/10 border border-pak-green/20 rounded-xl">
            <Info className="w-4 h-4 text-pak-green" />
            <span className="text-[10px] uppercase font-black tracking-widest text-[10px] text-pak-green">
              PCB Official Schedule Updates Pending
            </span>
          </div>
        </div>
      ) : filteredFixtures.length === 0 ? (
        <div className="bg-card-bg border border-card-border rounded-3xl p-16 text-center">
          <p className="text-ink/40 text-sm font-semibold mb-4">No schedule matches found for the selected filter query.</p>
          <button 
            onClick={() => {
              setFormatFilter('All');
              setSeriesFilter('All');
              setSearchQuery('');
            }}
            className="px-6 py-2 bg-pak-green text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all border border-white/5"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFixtures.map((match, idx) => {
              const formatColors = {
                Test: 'border-red-500/30 text-red-400 bg-red-950/20',
                ODI: 'border-blue-500/30 text-blue-400 bg-blue-950/20',
                T20I: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20'
              };

              const remActive = reminders[match.id];

              return (
                <motion.div
                  key={match.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setSelectedMatch(match);
                    setIsModalOpen(true);
                  }}
                  className="bg-card-bg border border-card-border rounded-2xl p-5 hover:border-pak-green transition-all relative group flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-pak-green/5"
                >
                  <div>
                    {/* Format and Series row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-black tracking-widest uppercase border ${formatColors[match.format]}`}>
                          {match.format}
                        </span>
                        {match.status === 'Completed' ? (
                          <span className="px-2 py-0.5 rounded text-[8px] font-black tracking-widest uppercase bg-green-950/25 text-green-400 border border-green-500/20">
                            Completed
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[8px] font-black tracking-widest uppercase bg-amber-950/25 text-amber-500 border border-amber-500/20">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <span className="text-[9px] font-bold text-ink/40 uppercase tracking-widest truncate max-w-[150px]">
                        {match.series}
                      </span>
                    </div>

                    {/* Team flags and vs indicator */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 bg-black/30 border border-white/5 rounded-lg px-2 py-1">
                        <img 
                          src="https://flagcdn.com/pk.svg" 
                          alt="Pakistan Flag" 
                          className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-[10px] font-black text-white">PAK</span>
                      </div>
                      <span className="text-[10px] font-black text-ink/30 uppercase tracking-widest">VS</span>
                      <div className="flex items-center gap-1.5 bg-black/30 border border-white/5 rounded-lg px-2 py-1">
                        <img 
                          src={match.flagUrl} 
                          alt={`${match.opponentName} Flag`} 
                          className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-[10px] font-black text-white">{match.opponent}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm sm:text-base font-display font-black text-white uppercase tracking-tight mb-4 group-hover:text-pak-green transition-colors leading-tight">
                      {match.title}
                    </h4>

                    {/* Meta listings */}
                    <div className="space-y-2.5 text-xs text-ink/65 mb-6">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-pak-green shrink-0" />
                        <span className="font-medium text-white/90">{match.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-pak-green shrink-0" />
                        <span className="font-semibold">{match.time}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-pak-green shrink-0" />
                        <span className="truncate">{match.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    {match.status === 'Completed' ? (
                      <div className="w-full h-10 px-4 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center gap-2">
                        <Trophy className="w-4 h-4 text-emerald-400 animate-pulse" /> {match.result || 'Match Completed'}
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReminder(match.id);
                          }}
                          className={`flex-grow h-10 px-4 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                            remActive 
                            ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 border border-amber-500' 
                            : 'bg-white/5 text-white/80 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {remActive ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> Set Confirmed
                            </>
                          ) : (
                            <>
                              <Bell className="w-3.5 h-3.5 text-amber-500" /> Set Reminder
                            </>
                          )}
                        </button>
                        <a
                          onClick={(e) => e.stopPropagation()}
                          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(match.title)}&dates=20261110T050000Z/20261110T130000Z&details=${encodeURIComponent(match.series + ' played at ' + match.venue)}&location=${encodeURIComponent(match.venue)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl flex items-center justify-center transition-all shrink-0 tooltip"
                          title="Add to Google Calendar"
                        >
                          <Download className="w-4 h-4 text-ink/70 group-hover:text-white" />
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="bg-card-bg border border-card-border rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-card-border bg-black/40">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-pak-green">Format</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-pak-green">Match Details</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-pak-green">Date</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-pak-green">Venue</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-pak-green">Time (PKT)</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-pak-green text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {filteredFixtures.map((match) => {
                  const formatColors = {
                    Test: 'text-red-400 bg-red-950/20 border-red-500/20',
                    ODI: 'text-blue-400 bg-blue-950/20 border-blue-500/20',
                    T20I: 'text-emerald-400 bg-emerald-950/20 border-emerald-500/20'
                  };

              return (
                <tr 
                  key={match.id} 
                  onClick={() => {
                    setSelectedMatch(match);
                    setIsModalOpen(true);
                  }}
                  className="hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded text-[8px] sm:text-[9px] font-black tracking-widest uppercase border ${formatColors[match.format]}`}>
                      {match.format}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs sm:text-sm font-bold text-white uppercase">{match.title}</span>
                      <span className="text-[8px] font-black px-1.5 py-0.5 bg-white/5 rounded border border-white/5 text-white/50">{match.opponent}</span>
                    </div>
                    <span className="text-[10px] font-bold text-white/30 tracking-wider uppercase block">{match.series}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-white/95">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-pak-green shrink-0" />
                      <span>{match.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-ink/70">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-pak-green shrink-0" />
                      <span className="truncate max-w-[180px]">{match.venue}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-white/90">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-pak-green shrink-0" />
                      <span>{match.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {match.status === 'Completed' ? (
                      <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-emerald-400">
                        <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{match.result || 'Completed'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReminder(match.id);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                            reminders[match.id]
                              ? 'bg-amber-500 text-black border border-amber-500'
                              : 'bg-white/5 text-white border border-white/5 hover:bg-white/10'
                          }`}
                        >
                          {reminders[match.id] ? 'Confirmed' : 'Alert Me'}
                        </button>
                        <a
                          onClick={(e) => e.stopPropagation()}
                          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(match.title)}&dates=20261110T050000Z/20261110T130000Z&details=${encodeURIComponent(match.series)}&location=${encodeURIComponent(match.venue)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/5 text-white/70 hover:text-white rounded-lg transition-transform"
                          title="Add to Google Calendar"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
              );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Structured FAQ Section below table */}
      <div className="mt-12 bg-card-bg border border-card-border rounded-3xl p-6 sm:p-10">
        <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-6 text-center">
          FAQ — Pakistan Home Series 2026 Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {[
            {
              q: "What was the result of the Australia Tour in early 2026?",
              a: "In January 2026, Australia visited Pakistan for a high-intensity 3-match T20I series hosted entirely at Gaddafi Stadium in Lahore. Pakistan dominated the tournament, winning the series cleanly with an elite 3-0 clean sweep."
            },
            {
              q: "When and where is the Pakistan vs Zimbabwe 2026 home series scheduled?",
              a: "The Zimbabwe tour of Pakistan is scheduled to begin in May 2026. Gaddafi Stadium in Lahore will host the 3 ODI matches (May 12–16), immediately followed by the 3 T20Is held under lights at National Bank Stadium in Karachi (May 19–23)."
            },
            {
              q: "Who is participating in the October 2026 ODI Tri-Series in Pakistan?",
              a: "The October 2026 ODI Tri-Series is an exciting multi-nation tournament involving host Pakistan, England, and Sri Lanka. Four ODIs will be played between October 12 and 19 across Karachi and Lahore, concluding with a Grand Final on October 19."
            },
            {
              q: "Are the Test matches against Sri Lanka part of the ICC World Test Championship?",
              a: "Yes! The 2-match Test series against Sri Lanka (hosted in Multan and Rawalpindi in November 2026) is an official part of the ICC World Test Championship (WTC) 2025-2027 cycle, drawing crucial points for Pakistan's qualification bid."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-black/30 border border-white/5 rounded-2xl p-5">
              <h4 className="font-display font-black text-white uppercase tracking-tight mb-2 flex items-start gap-2">
                <span className="text-pak-green shrink-0">Q.</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-ink/65 leading-relaxed pl-4.5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-white/5 pt-16">
        <InternalLinkSection />
      </div>

      <MatchDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        match={selectedMatch}
      />
    </div>
  );
}
