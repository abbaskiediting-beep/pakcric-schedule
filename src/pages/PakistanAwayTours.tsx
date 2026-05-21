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
  Download, 
  CheckCircle2, 
  Bell, 
  Info,
  SlidersHorizontal,
  Layers,
  Sparkles,
  PlaneTakeoff,
  Users
} from 'lucide-react';
import ShareButton from '../components/ShareButton';
import SaveForOfflineButton from '../components/SaveForOfflineButton';
import InternalLinkSection from '../components/InternalLinkSection';
import MatchDetailsModal from '../components/MatchDetailsModal';

interface AwayMatch {
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
  squadAnnounced: boolean;
  squadLink?: string;
}

const AWAY_FIXTURES_2026: AwayMatch[] = [
  // --- COMPLETED TOUR: BANGLADESH (MAY 2026) ---
  {
    id: 'a-ban-test-1',
    opponent: 'BAN',
    opponentName: 'Bangladesh',
    flagUrl: 'https://flagcdn.com/bd.svg',
    format: 'Test',
    title: 'Pakistan vs Bangladesh, 1st Test Match',
    date: 'May 8–12, 2026',
    time: '09:00 PKT',
    venue: 'Sher-e-Bangla National Cricket Stadium, Mirpur, Dhaka',
    series: 'Pakistan Tour of Bangladesh',
    status: 'Completed',
    result: 'Bangladesh won by 104 runs',
    squadAnnounced: true,
    squadLink: '/pakistan-tour-bangladesh-squad-2026'
  },
  {
    id: 'a-ban-test-2',
    opponent: 'BAN',
    opponentName: 'Bangladesh',
    flagUrl: 'https://flagcdn.com/bd.svg',
    format: 'Test',
    title: 'Pakistan vs Bangladesh, 2nd Test Match',
    date: 'May 16–20, 2026',
    time: '09:00 PKT',
    venue: 'Sylhet International Cricket Stadium, Sylhet',
    series: 'Pakistan Tour of Bangladesh',
    status: 'Completed',
    result: 'Bangladesh won by 78 runs',
    squadAnnounced: true,
    squadLink: '/pakistan-tour-bangladesh-squad-2026'
  },

  // --- UPCOMING: WEST INDIES TOUR (JULY-AUGUST 2026) ---
  {
    id: 'a-wi-warmup',
    opponent: 'WI',
    opponentName: 'West Indies XI',
    flagUrl: 'https://flagcdn.com/tt.svg',
    format: 'Test',
    title: 'Pakistan vs West Indies XI, 4-Day Warm-up Match',
    date: 'July 18 – July 21, 2026',
    time: '07:00 PM PKT',
    venue: 'Brian Lara Stadium, Tarouba, Trinidad',
    series: 'Pakistan Tour of West Indies',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-wi-test-1',
    opponent: 'WI',
    opponentName: 'West Indies',
    flagUrl: 'https://flagcdn.com/tt.svg',
    format: 'Test',
    title: 'Pakistan vs West Indies, 1st Test Match',
    date: 'July 25 – July 29, 2026',
    time: '07:00 PM PKT',
    venue: "Brian Lara Stadium, Tarouba, Trinidad (Subject to updates between Queen's Park Oval & BLCA)",
    series: 'Pakistan Tour of West Indies',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-wi-test-2',
    opponent: 'WI',
    opponentName: 'West Indies',
    flagUrl: 'https://flagcdn.com/tt.svg',
    format: 'Test',
    title: 'Pakistan vs West Indies, 2nd Test Match',
    date: 'August 02 – August 06, 2026',
    time: '07:00 PM PKT',
    venue: 'Brian Lara Stadium, Tarouba, Trinidad',
    series: 'Pakistan Tour of West Indies',
    status: 'Upcoming',
    squadAnnounced: false
  },

  // --- UPCOMING: ENGLAND TOUR (AUGUST-SEPTEMBER 2026) ---
  {
    id: 'a-eng-test-1',
    opponent: 'ENG',
    opponentName: 'England',
    flagUrl: 'https://flagcdn.com/gb.svg',
    format: 'Test',
    title: 'Pakistan vs England, 1st Test Match',
    date: 'August 19 – August 23, 2026',
    time: '03:00 PM PKT',
    venue: 'Headingley Cricket Ground, Leeds',
    series: 'Pakistan Tour of England',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-eng-test-2',
    opponent: 'ENG',
    opponentName: 'England',
    flagUrl: 'https://flagcdn.com/gb.svg',
    format: 'Test',
    title: 'Pakistan vs England, 2nd Test Match',
    date: 'August 27 – August 31, 2026',
    time: '03:00 PM PKT',
    venue: "Lord's Cricket Ground, London",
    series: 'Pakistan Tour of England',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-eng-test-3',
    opponent: 'ENG',
    opponentName: 'England',
    flagUrl: 'https://flagcdn.com/gb.svg',
    format: 'Test',
    title: 'Pakistan vs England, 3rd Test Match',
    date: 'September 09 – September 13, 2026',
    time: '03:00 PM PKT',
    venue: 'Edgbaston Stadium, Birmingham',
    series: 'Pakistan Tour of England',
    status: 'Upcoming',
    squadAnnounced: false
  },

  // --- UPCOMING: SRI LANKA TOUR (OCTOBER 2026) ---
  {
    id: 'a-sl-t20-1',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'T20I',
    title: 'Pakistan vs Sri Lanka, 1st T20I',
    date: 'October 15, 2026',
    time: '19:30 PKT',
    venue: 'R. Premadasa Stadium, Colombo',
    series: 'Pakistan Tour of Sri Lanka',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sl-t20-2',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'T20I',
    title: 'Pakistan vs Sri Lanka, 2nd T20I',
    date: 'October 17, 2026',
    time: '19:30 PKT',
    venue: 'R. Premadasa Stadium, Colombo',
    series: 'Pakistan Tour of Sri Lanka',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sl-t20-3',
    opponent: 'SL',
    opponentName: 'Sri Lanka',
    flagUrl: 'https://flagcdn.com/lk.svg',
    format: 'T20I',
    title: 'Pakistan vs Sri Lanka, 3rd T20I',
    date: 'October 19, 2026',
    time: '19:30 PKT',
    venue: 'Pallekele International Cricket Stadium, Kandy',
    series: 'Pakistan Tour of Sri Lanka',
    status: 'Upcoming',
    squadAnnounced: false
  },

  // --- UPCOMING: SOUTH AFRICA TOUR (DECEMBER 2026) ---
  {
    id: 'a-sa-odi-1',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'ODI',
    title: 'Pakistan vs South Africa, 1st ODI',
    date: 'December 4, 2026',
    time: '17:00 PKT',
    venue: 'Kingsmead, Durban',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sa-odi-2',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'ODI',
    title: 'Pakistan vs South Africa, 2nd ODI',
    date: 'December 6, 2026',
    time: '17:00 PKT',
    venue: 'SuperSport Park, Centurion',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sa-odi-3',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'ODI',
    title: 'Pakistan vs South Africa, 3rd ODI',
    date: 'December 9, 2026',
    time: '17:00 PKT',
    venue: 'Wanderers Stadium, Johannesburg',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sa-t20-1',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'T20I',
    title: 'Pakistan vs South Africa, 1st T20I',
    date: 'December 12, 2026',
    time: '21:00 PKT',
    venue: 'Kingsmead, Durban',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sa-t20-2',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'T20I',
    title: 'Pakistan vs South Africa, 2nd T20I',
    date: 'December 14, 2026',
    time: '21:00 PKT',
    venue: 'Wanderers Stadium, Johannesburg',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sa-test-1',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'Test',
    title: 'Pakistan vs South Africa, 1st Test Match',
    date: 'December 18–22, 2026',
    time: '13:00 PKT',
    venue: 'SuperSport Park, Centurion',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  },
  {
    id: 'a-sa-test-2',
    opponent: 'RSA',
    opponentName: 'South Africa',
    flagUrl: 'https://flagcdn.com/za.svg',
    format: 'Test',
    title: 'Pakistan vs South Africa, 2nd Test Match',
    date: 'December 26–30, 2026',
    time: '13:00 PKT',
    venue: 'Newlands, Cape Town',
    series: 'Pakistan Tour of South Africa',
    status: 'Upcoming',
    squadAnnounced: false
  }
];

export default function PakistanAwayTours() {
  const [formatFilter, setFormatFilter] = useState<'All' | 'Test' | 'ODI' | 'T20I'>('All');
  const [tourFilter, setTourFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [reminders, setReminders] = useState<{ [key: string]: boolean }>({});
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedMatch, setSelectedMatch] = useState<AwayMatch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredFixtures = useMemo(() => {
    return AWAY_FIXTURES_2026.filter((match) => {
      const matchesFormat = formatFilter === 'All' || match.format === formatFilter;
      const matchesTour = tourFilter === 'All' || match.series.toLowerCase().includes(tourFilter.toLowerCase());
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        match.title.toLowerCase().includes(query) ||
        match.venue.toLowerCase().includes(query) ||
        match.opponentName.toLowerCase().includes(query) ||
        match.series.toLowerCase().includes(query);

      return matchesFormat && matchesTour && matchesSearch;
    });
  }, [formatFilter, tourFilter, searchQuery]);

  const toggleReminder = (id: string) => {
    setReminders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const countriesStats = useMemo(() => {
    const stats: { [key: string]: number } = {};
    AWAY_FIXTURES_2026.forEach(m => {
      stats[m.opponentName] = (stats[m.opponentName] || 0) + 1;
    });
    return Object.entries(stats).map(([country, count]) => ({ country, count }));
  }, []);

  const totalMatches = AWAY_FIXTURES_2026.length;
  const t20Count = AWAY_FIXTURES_2026.filter(m => m.format === 'T20I').length;
  const odiCount = AWAY_FIXTURES_2026.filter(m => m.format === 'ODI').length;
  const testCount = AWAY_FIXTURES_2026.filter(m => m.format === 'Test').length;

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <Helmet>
        <title>Pakistan Away Cricket Tours 2026 — Full Schedule List</title>
        <meta name="description" content="Pakistan away cricket tour schedule 2026. Bangladesh tour, England series, South Africa tour full fixtures with match dates, venues and squad announcements." />
        <meta name="keywords" content="Pakistan away tours 2026, Pakistan cricket schedule, Bangladesh tour of Pakistan, England series, South Africa tour, West Indies tour, Sri Lanka tour, international schedules" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Away Cricket Tours 2026 — Full Schedule List" />
        <meta property="og:description" content="Pakistan away cricket tour schedule 2026. Bangladesh tour, England series, South Africa tour full fixtures with match dates, venues and squad announcements." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.svg" />

        {/* Twitter */}
        <meta property="twitter:title" content="Pakistan Away Cricket Tours 2026 — Full Schedule List" />
        <meta property="twitter:description" content="Pakistan away cricket tour schedule 2026. Bangladesh tour, England series, South Africa tour full fixtures with match dates, venues and squad announcements." />
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
        className="relative bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] p-6 md:p-12 mb-8 overflow-hidden animate-fade-in"
      >
        {/* Ambient glow decoration */}
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-pak-green/20 blur-[100px] pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-emerald-700/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 bg-pak-green text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[3px] mb-6">
            <PlaneTakeoff className="w-3.5 h-3.5 animate-bounce" /> International Road Campaign
          </span>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1] mb-4">
                Pakistan Away Tours 2026
              </h1>
              <p className="text-sm sm:text-lg text-ink/75 leading-relaxed font-medium">
                Complete and official international away fixtures directory for the Pakistan Men's Cricket Team in 2026.
                Discover all matches scheduled across historical overseas venues including <span className="text-pak-green font-bold">Bangladesh</span>, <span className="text-pak-green font-bold">West Indies</span>, <span className="text-pak-green font-bold">England</span>, <span className="text-pak-green font-bold">Sri Lanka</span>, and our grand winter campaign in <span className="text-pak-green font-bold">South Africa</span>. Find live squad updates, venue insights, dates, and times.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <SaveForOfflineButton 
                id="pakistan-away-tours-2026" 
                label="Save Offline" 
                className="w-full sm:w-fit px-6 py-3.5 text-xs font-bold uppercase tracking-widest bg-white/5 text-white border border-white/10 hover:bg-white/10"
              />
              <ShareButton 
                title="Pakistan Away Cricket Tours 2026 Schedule"
                text="Complete schedule, match dates, venues and squad highlights for Pakistan Away Tours in 2026."
                url={window.location.href}
                className="w-full sm:w-fit"
              />
            </div>
          </div>

          {/* Quick Stat Counter Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-card-border">
            {[
              { label: 'Total Overseas Matches', val: totalMatches, desc: 'Across 5 Host Nations' },
              { label: 'Away Tests', val: testCount, desc: 'World Test Championship' },
              { label: 'Overseas ODIs', val: odiCount, desc: 'Champions Trophy Prep' },
              { label: 'Away T20Is', val: t20Count, desc: 'Bilateral T20 Contests' }
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

      {/* Destination Countries Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pak-green" /> Global Destination Distribution
            </h3>
            <p className="text-xs sm:text-sm text-ink/60 mb-6 leading-relaxed">
              Pakistan's away tour matches represent highly contested road battles across major test-playing arenas. Under the ICC Future Tours Programme (FTP) and World Test Championship framework, the Green Shirts face distinct pitch conditions, varying from the spin-friendly hubs of Bangladesh & Sri Lanka to the lightning fast, bouncy tracks of South Africa and the classic seam of England.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {countriesStats.map((stat, idx) => (
              <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-3 text-center">
                <span className="text-[10px] sm:text-xs font-black text-white block mb-1">{stat.country}</span>
                <span className="text-xs font-black text-pak-green uppercase tracking-wider">{stat.count} {stat.count === 1 ? 'Match' : 'Matches'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-500" /> Timezone Adaptations & Starts
            </h3>
            <p className="text-xs text-ink/65 leading-relaxed mb-4">
              Matches played overseas are converted relative to Pakistan Standard Time (PKT) for user convenience. Tests in England start at <strong>03:00 PM PKT</strong>, West Indies Tests activate at <strong>08:00 PM PKT</strong> (Day-Night / local morning hours), and South Africa day games kick off at <strong>01:00 PM</strong> or <strong>05:00 PM PKT</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <Clock className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-amber-500">Away tours times auto-adjusted to GMT+5</span>
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
                placeholder="Search country, ground, series style or tournament..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-card-border rounded-xl py-3 pl-12 pr-4 text-xs sm:text-sm text-white placeholder-ink/30 focus:outline-none focus:border-pak-green transition-all"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'grid' 
                    ? 'bg-pak-green text-white border border-pak-green' 
                    : 'bg-white/5 text-ink/75 border border-white/5 hover:bg-white/10'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'table' 
                    ? 'bg-pak-green text-white border border-pak-green' 
                    : 'bg-white/5 text-ink/75 border border-white/5 hover:bg-white/10'
                }`}
              >
                Table View
              </button>
            </div>
          </div>

          <div className="h-px bg-white/5 flex-grow" />

          {/* Bottom Row: Selector buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            
            {/* Form Filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-black uppercase text-ink/40 tracking-wider flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-pak-green" /> Filter By Match Format
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(['All', 'Test', 'ODI', 'T20I'] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormatFilter(fmt)}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                      formatFilter === fmt
                        ? 'bg-pak-green text-white border border-pak-green'
                        : 'bg-white/5 text-ink/60 border border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {fmt}s
                  </button>
                ))}
              </div>
            </div>

            {/* Tour Filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-black uppercase text-ink/40 tracking-wider flex items-center gap-1">
                <Layers className="w-3 h-3 text-pak-green" /> Filter By Away Tour Campaign
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'All Tours', value: 'All' },
                  { label: 'vs Bangladesh', value: 'Bangladesh' },
                  { label: 'vs West Indies', value: 'West Indies' },
                  { label: 'vs England', value: 'England' },
                  { label: 'vs Sri Lanka', value: 'Sri Lanka' },
                  { label: 'vs S. Africa', value: 'South Africa' }
                ].map((tour) => (
                  <button
                    key={tour.value}
                    onClick={() => setTourFilter(tour.value)}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                      tourFilter === tour.value
                        ? 'bg-pak-green text-white border border-pak-green'
                        : 'bg-white/5 text-ink/60 border border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {tour.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Fixtures Showcase */}
      {filteredFixtures.length === 0 ? (
        <div className="bg-card-bg border border-card-border rounded-3xl p-16 text-center">
          <p className="text-ink/40 text-sm font-semibold mb-4">No scheduled matches matches found matching your filters.</p>
          <button 
            onClick={() => { setFormatFilter('All'); setTourFilter('All'); setSearchQuery(''); }}
            className="px-5 py-2.5 bg-pak-green hover:bg-pak-green/90 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFixtures.map((match, index) => {
              const remActive = reminders[match.id];
              const formatColors = {
                'Test': 'border-red-500/30 text-red-500 bg-red-950/20',
                'ODI': 'border-pak-green/30 text-pak-green bg-pak-green/10',
                'T20I': 'border-blue-500/30 text-blue-400 bg-blue-950/20'
              };

              return (
                <motion.div
                  key={match.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  onClick={() => {
                    setSelectedMatch(match);
                    setIsModalOpen(true);
                  }}
                  className="bg-card-bg border border-card-border rounded-3xl p-6 relative flex flex-col justify-between hover:border-pak-green/30 transition-all group hover:translate-y-[-2px] hover:shadow-2xl cursor-pointer hover:shadow-pak-green/5"
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

                    {/* Opponent Block */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 bg-neutral-900 flex items-center justify-center">
                        <img 
                          src={match.flagUrl} 
                          alt={match.opponentName} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase text-pak-green tracking-widest block mb-0.5">VS {match.opponentName}</span>
                        <h2 className="text-sm font-extrabold text-white leading-snug tracking-tight group-hover:text-pak-green transition-colors">
                          {match.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 mb-6 border-t border-white/5">
                      {/* Date details */}
                      <div className="flex items-start gap-2.5 text-xs">
                        <Calendar className="w-4 h-4 text-ink/30 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white/80 font-semibold block leading-none mb-1">{match.date}</span>
                          <span className="text-[10px] text-ink/40 font-bold uppercase tracking-wider">{match.time}</span>
                        </div>
                      </div>

                      {/* Venue details */}
                      <div className="flex items-start gap-2.5 text-xs">
                        <MapPin className="w-4 h-4 text-ink/30 shrink-0 mt-0.5" />
                        <span className="text-ink/65 font-medium leading-relaxed">{match.venue}</span>
                      </div>

                      {/* Squad Detail Action */}
                      <div className="flex items-center gap-2.5 text-xs">
                        <Users className="w-4 h-4 text-ink/30 shrink-0 mt-0.5" />
                        {match.squadAnnounced ? (
                          <div className="flex items-center gap-1.5">
                            <span className="text-emerald-400 font-bold">Squad Announced</span>
                            {match.squadLink && (
                              <Link 
                                onClick={(e) => e.stopPropagation()} 
                                to={match.squadLink} 
                                className="text-pak-green underline font-black uppercase text-[9px] tracking-wider hover:text-white ml-1"
                              >
                                View Squad
                              </Link>
                            )}
                          </div>
                        ) : (
                          <span className="text-ink/40 font-semibold">Squad TBA (PCB Expected Soon)</span>
                        )}
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
        <div className="bg-card-bg border border-card-border rounded-3xl overflow-hidden">
          <table className="min-w-full divide-y divide-white/10 text-left">
            <thead className="bg-black/35">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Format</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Opponent & Series</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Match Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Overseas Venue</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-ink/40">Squad Status</th>
                <th className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-widest text-ink/40">Action / Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/10">
              {filteredFixtures.map((match) => {
                const formatColors = {
                  'Test': 'text-red-400 border-red-500/20 bg-red-950/10',
                  'ODI': 'text-pak-green border-pak-green/20 bg-pak-green/10',
                  'T20I': 'text-blue-400 border-blue-500/20 bg-blue-950/10'
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
                      <span className={`px-2.5 py-1 rounded text-[8px] sm:text-[9.5px] font-black tracking-widest uppercase border ${formatColors[match.format]}`}>
                        {match.format}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={match.flagUrl} 
                          alt={match.opponentName} 
                          className="w-6 h-6 rounded-full object-cover shrink-0 border border-white/5" 
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="text-white text-[11px] font-extrabold block leading-normal">{match.opponentName}</span>
                          <span className="text-[9px] text-ink/40 font-bold uppercase tracking-wider">{match.series}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[11px] font-extrabold text-white">{match.title}</div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3 h-3 text-pak-green" /> {match.date} <span className="text-neutral-600">•</span> {match.time}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[11px] text-ink/70 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-neutral-500 shrink-0" /> {match.venue}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {match.squadAnnounced ? (
                        <div className="flex flex-col gap-0.5">
                          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-wider">Announced</span>
                          {match.squadLink && (
                            <Link 
                              onClick={(e) => e.stopPropagation()} 
                              to={match.squadLink} 
                              className="text-pak-green hover:underline text-[9px] font-bold"
                            >
                              View Team List
                            </Link>
                          )}
                        </div>
                      ) : (
                        <span className="text-ink/40 text-[10px] font-semibold">TBA</span>
                      )}
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
      )}

      {/* FAQs Segment */}
      <h2 className="text-lg sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-6 mt-16 flex items-center gap-2.5">
        <Sparkles className="w-5 h-5 text-pak-green" /> Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
        {[
          {
            q: "What host countries will Pakistan fly to for away tours in 2026?",
            a: "Pakistan Men's Team has five massive away campaigns planned for 2026. The year starts with the tour of Bangladesh (completed in May), followed by the West Indies in July, England in August-September, Sri Lanka T20Is in October, and a full multi-format tour of South Africa spanning December 2026 to January 2027."
          },
          {
            q: "How did Pakistan perform in their first away tour of 2026 against Bangladesh?",
            a: "Pakistan's first away assessment took place in Bangladesh in May 2026 for a two-match series. Bangladesh secured a historic 2-0 series sweep over Pakistan, with comprehensive wins of 104 runs in Dhaka and 78 runs in Sylhet, posing a major setback for Pakistan's WTC aspirations."
          },
          {
            q: "Where can we inspect the squads for the upcoming away series?",
            a: "Squad lists are officially configured on our Squads and Squad Intelligence portals as soon as the PCB Selection Committee declares them. The Bangladesh tour squads are fully live with depth charts, while the West Indies, England, and South Africa tour squads are expected 2-3 weeks prior to each series departure."
          },
          {
            q: "Which away matches are part of the ICC World Test Championship (WTC) Cycle?",
            a: "The away series against West Indies (2 Tests) in July/August, England (3 Tests) in August/September, and South Africa (2 Tests) in December 2026 are crucial legs of the ICC World Test Championship (WTC) 2025–2027 stage."
          }
        ].map((faq, idx) => (
          <div key={idx} className="bg-black/30 border border-white/5 rounded-2xl p-5">
            <h3 className="font-extrabold text-white uppercase tracking-tight text-xs sm:text-sm mb-2 text-pak-green flex items-start gap-1.5">
              <span>Q:</span> <span>{faq.q}</span>
            </h3>
            <p className="text-ink/60 leading-relaxed font-semibold">{faq.a}</p>
          </div>
        ))}
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
