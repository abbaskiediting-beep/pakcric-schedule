import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Users, Calendar, Trophy, Search, ChevronRight, Filter, Compass } from 'lucide-react';
import InternalLinkSection from '../components/InternalLinkSection';
import StadiumMap from '../components/StadiumMap';

interface Venue {
  name: string;
  city: string;
  country: string;
  capacity: string;
  type: 'Home' | 'Away';
  featuredSeries: string;
  imageAlt: string;
  pitchReport: string;
  historyText: string;
}

const VENUES_DATA: Venue[] = [
  // --- HOME PORTAL VENUES ---
  {
    name: "Gaddafi Stadium",
    city: "Lahore",
    country: "Pakistan",
    capacity: "27,000",
    type: "Home",
    featuredSeries: "Australia Tour of Pakistan (ODIs), Tri-Series, Sri Lanka Tour",
    imageAlt: "Gaddafi Stadium Lahore",
    pitchReport: "Batter-friendly deck with flat bounce, reliable pace, and high-scoring white-ball fixtures.",
    historyText: "HQ of Pakistan cricket. Hosted historical finals and crucial matches of the Australia ODI series in 2026."
  },
  {
    name: "National Bank Stadium",
    city: "Karachi",
    country: "Pakistan",
    capacity: "34,228",
    type: "Home",
    featuredSeries: "Australia Tour (ODIs), Zimbabwe Tour, Sri Lanka Tour",
    imageAlt: "National Bank Stadium Karachi",
    pitchReport: "Starts flat but transitions into a slow, turning track offering considerable help to spinners as the game wears on.",
    historyText: "Traditionally a fortress for Pakistan, famous for historic test matches and unforgettable reverse swing spells."
  },
  {
    name: "Rawalpindi Cricket Stadium",
    city: "Rawalpindi",
    country: "Pakistan",
    capacity: "15,000",
    type: "Home",
    featuredSeries: "Sri Lanka series, Zimbabwe Series, Ireland Series",
    imageAlt: "Rawalpindi Cricket Stadium",
    pitchReport: "Usually a fast-scoring pitch with hard surfaces, quick outfields, and support for high-pace bowlers.",
    historyText: "Well-known for close contests and high-voltage run chases under the lights near the twin cities."
  },
  {
    name: "Multan Cricket Stadium",
    city: "Multan",
    country: "Pakistan",
    capacity: "30,000",
    type: "Home",
    featuredSeries: "Pakistan Home Bilaterals, Sri Lanka Tour",
    imageAlt: "Multan Cricket Stadium",
    pitchReport: "Hot weather conditions assist reverse-swing early, followed by dryness that aids spinners in late sessions.",
    historyText: "A venue infamous for high temperatures, massive double centuries, and passion-fueled cricket crowds."
  },

  // --- AWAY PORTAL VENUES ---
  {
    name: "Sher-e-Bangla National Cricket Stadium",
    city: "Mirpur, Dhaka",
    country: "Bangladesh",
    capacity: "25,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of Bangladesh (1st Test)",
    imageAlt: "Sher-e-Bangla Stadium Dhaka",
    pitchReport: "Low, slow, and spinning. Regarded as a spin bowler's paradise where batsmen must demonstrate extreme patience.",
    historyText: "Hosted Pakistan's strategic red-ball battles in the ICC World Test Championship cycle during 2026."
  },
  {
    name: "Sylhet International Cricket Stadium",
    city: "Sylhet",
    country: "Bangladesh",
    capacity: "18,500",
    type: "Away",
    featuredSeries: "Pakistan Tour of Bangladesh (2nd Test)",
    imageAlt: "Sylhet International Stadium",
    pitchReport: "Scenic ground with soft green patches offering assistance to seamers in morning sessions and turning tracks later.",
    historyText: "Set against lush green tea gardens, it hosted Pakistan's intense 2nd Test match vs Bangladesh in 2026."
  },
  {
    name: "Brian Lara Stadium",
    city: "Tarouba, Trinidad",
    country: "West Indies",
    capacity: "15,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of West Indies (4-Day Warm-up, 1st & 2nd Tests)",
    imageAlt: "Brian Lara Stadium Trinidad",
    pitchReport: "Offers dry, slightly undulating surfaces that call for clever variations from pacers and reward drift spinners.",
    historyText: "A modern stadium named after Trinidad's batting wizard, acting as the epicenter of Pakistan's 2026 Caribbean tour."
  },
  {
    name: "Headingley Cricket Ground",
    city: "Leeds",
    country: "England",
    capacity: "18,300",
    type: "Away",
    featuredSeries: "Pakistan Tour of England (1st Test)",
    imageAlt: "Headingley Leeds",
    pitchReport: "Strong aerial swing under typical British clouds, with moisture encouraging seam movement early on.",
    historyText: "The ground of epic Test match turnarounds, where Pakistan launches its highly anticipated English Test campaign."
  },
  {
    name: "Lord's Cricket Ground",
    city: "London",
    country: "England",
    capacity: "31,100",
    type: "Away",
    featuredSeries: "Pakistan Tour of England (2nd Test)",
    imageAlt: "Lords Cricket Ground London",
    pitchReport: "Featuring the unique natural slope, it offers swing, seam, and classic test conditions that keep bowlers always in play.",
    historyText: "The 'Home of Cricket.' Pakistan's stars carry illustrious histories here, highlighted by past clinical triumphs."
  },
  {
    name: "Edgbaston Stadium",
    city: "Birmingham",
    country: "England",
    capacity: "25,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of England (3rd Test)",
    imageAlt: "Edgbaston Birmingham",
    pitchReport: "Firm pitch with true bounce and great carry, turning into a favorable seam deck when local climate shifts.",
    historyText: "Famous for the historic Eric Hollies stand. Hosts the critical 3rd and final Test between Pakistan and England in 2026."
  },
  {
    name: "R. Premadasa Stadium",
    city: "Colombo",
    country: "Sri Lanka",
    capacity: "35,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of Sri Lanka",
    imageAlt: "R Premadasa Stadium Colombo",
    pitchReport: "Classic subcontinent white-ball surface. Aids spinners with turn, grip and variation as overhead sun heats up.",
    historyText: "Sri Lanka's premier cricketing amphitheater, hosting Pakistan during intense subcontinent limited-overs duels."
  },
  {
    name: "Pallekele International Cricket Stadium",
    city: "Kandy",
    country: "Sri Lanka",
    capacity: "35,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of Sri Lanka",
    imageAlt: "Pallekele Stadium Kandy",
    pitchReport: "Usually features an even grass covering, supporting swift new-ball movement and true bounce for aggressive batting.",
    historyText: "Nestled in Sri Lanka's beautiful hills, hosting Pakistan's critical away matches against the Lions."
  },
  {
    name: "Kingsmead",
    city: "Durban",
    country: "South Africa",
    capacity: "25,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of South Africa (WTC / ODIs)",
    imageAlt: "Kingsmead Durban",
    pitchReport: "Heavy coastal air creates ample swing, while the sub-soil conditions facilitate standard bounce and carry.",
    historyText: "Part of Pakistan's extensive winter away expedition across the southern tip of the African continent."
  },
  {
    name: "SuperSport Park",
    city: "Centurion",
    country: "South Africa",
    capacity: "22,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of South Africa (WTC / ODIs)",
    imageAlt: "SuperSport Park Centurion",
    pitchReport: "Extremely fast, bounce-heavy pitch where batsmen are severely challenged by high altitude and pace.",
    historyText: "Known as one of South Africa's most hostile environments for visiting subcontinental batting squads."
  },
  {
    name: "Wanderers Stadium",
    city: "Johannesburg",
    country: "South Africa",
    capacity: "34,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of South Africa (WTC / ODIs)",
    imageAlt: "Wanderers Stadium Johannesburg",
    pitchReport: "Nicknamed 'The Bullring,' offering incredible pace, steep tennis-ball bounce, and electric spectator energy.",
    historyText: "A world-famous high-altitude ground where Pakistan faces South Africa's formidable fast bowling attacks."
  },
  {
    name: "Newlands",
    city: "Cape Town",
    country: "South Africa",
    capacity: "25,000",
    type: "Away",
    featuredSeries: "Pakistan Tour of South Africa (WTC Series)",
    imageAlt: "Newlands Cape Town",
    pitchReport: "A fair pitch with a touch of humidity. Offers early assist to seamers, shifting into an elegant spin surface.",
    historyText: "Framed by the monumental Table Mountain, this scenic ground hosts Pakistan's premium holiday test battles."
  }
];

export default function Venues() {
  const [filter, setFilter] = useState<'All' | 'Home' | 'Away'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVenueName, setActiveVenueName] = useState<string>(VENUES_DATA[0].name);
  const [isMobileDetailActive, setIsMobileDetailActive] = useState<boolean>(false);

  const filteredVenues = useMemo(() => {
    return VENUES_DATA.filter(venue => {
      const matchesFilter = filter === 'All' || venue.type === filter;
      const matchesSearch = 
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.featuredSeries.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  // Securely auto-select a present venue from search results if activeVenue goes out of bounds
  const currentActiveVenue = useMemo(() => {
    const isPresent = filteredVenues.some(v => v.name === activeVenueName);
    if (!isPresent && filteredVenues.length > 0) {
      return filteredVenues[0];
    }
    return VENUES_DATA.find(v => v.name === activeVenueName) || VENUES_DATA[0];
  }, [activeVenueName, filteredVenues]);

  const stats = useMemo(() => {
    const total = VENUES_DATA.length;
    const homeCount = VENUES_DATA.filter(v => v.type === 'Home').length;
    const awayCount = VENUES_DATA.filter(v => v.type === 'Away').length;
    return { total, homeCount, awayCount };
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-6">
      <Helmet>
        <title>Pakistan Cricket Match Venues & Stadiums 2026 Guide</title>
        <meta name="description" content="Complete list of cricket venues and stadiums for Pakistan's 2026 series. Mirpur, Sylhet, Lahore, Karachi, Rawalpindi ground details, capacity and match history." />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Pakistan Cricket Match Venues & Stadiums 2026 Guide" />
        <meta property="og:description" content="Complete list of cricket venues and stadiums for Pakistan's 2026 series. Mirpur, Sylhet, Lahore, Karachi, Rawalpindi ground details, capacity and match history." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pakcric-schedule.com/venues" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pakistan Cricket Match Venues & Stadiums 2026 Guide" />
        <meta name="twitter:description" content="Complete list of cricket venues and stadiums for Pakistan's 2026 series. Mirpur, Sylhet, Lahore, Karachi, Rawalpindi ground details, capacity and match history." />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pak-green/10 text-pak-green text-[10px] font-black uppercase tracking-[3px] rounded-full border border-pak-green/20 mb-4 sm:mb-6">
          <Compass className="w-3.5 h-3.5" /> Venue Directory 2026
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4 sm:mb-6 leading-none">
          STADIUMS & <span className="text-pak-green">VENUES</span> GUIDE
        </h1>
        <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-medium">
          Comprehensive ground details, pitches, capacities, and match memories for Pakistan National Team's 2026 fixtures. Explore both home fortresses and major overseas arenas.
        </p>
      </motion.div>

      {/* --- STATS COUNTER BOARD --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3 md:gap-6 mb-12 bg-card-bg/40 border border-card-border rounded-[24px] md:rounded-[32px] p-4 md:p-8"
      >
        <div className="text-center border-r border-card-border">
          <span className="block text-xl md:text-4xl font-display font-black text-white">{stats.total}</span>
          <span className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-[1px] md:tracking-[2px]">Total Venues</span>
        </div>
        <div className="text-center border-r border-card-border">
          <span className="block text-xl md:text-4xl font-display font-black text-pak-green">{stats.homeCount}</span>
          <span className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-[1px] md:tracking-[2px]">Home Stadiums</span>
        </div>
        <div className="text-center">
          <span className="block text-xl md:text-4xl font-display font-black text-blue-500">{stats.awayCount}</span>
          <span className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-[1px] md:tracking-[2px]">Away Arenas</span>
        </div>
      </motion.div>

      {/* --- SEARCH & FILTERS --- */}
      <div className="bg-card-bg border border-card-border rounded-[24px] md:rounded-[32px] p-4 md:p-6 mb-8 md:mb-12">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/45" />
            <input 
              type="text"
              placeholder="Search by stadium, city, or series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/30 border border-card-border focus:border-pak-green focus:outline-none focus:ring-1 focus:ring-pak-green/20 rounded-xl h-11 pl-11 pr-4 text-xs font-medium placeholder:text-ink/30 text-white transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1 bg-black/25 p-1 border border-card-border rounded-xl w-full lg:w-auto">
            <button
              onClick={() => setFilter('All')}
              className={`flex-1 lg:flex-none h-9 px-4 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                filter === 'All' 
                  ? 'bg-pak-green text-white shadow-md' 
                  : 'text-ink/60 hover:text-white'
              }`}
            >
              All Venues
            </button>
            <button
              onClick={() => setFilter('Home')}
              className={`flex-1 lg:flex-none h-9 px-4 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                filter === 'Home' 
                  ? 'bg-pak-green text-white shadow-md' 
                  : 'text-ink/60 hover:text-white'
              }`}
            >
              Home ({stats.homeCount})
            </button>
            <button
              onClick={() => setFilter('Away')}
              className={`flex-1 lg:flex-none h-9 px-4 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${
                filter === 'Away' 
                  ? 'bg-pak-green text-white shadow-md' 
                  : 'text-ink/60 hover:text-white'
              }`}
            >
              Away ({stats.awayCount})
            </button>
          </div>
        </div>
      </div>

      {/* --- MASTER-DETAIL INTERACTIVE PANEL --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-24">
        {/* Left Column: Venue Names List */}
        <div className={`col-span-1 lg:col-span-5 space-y-3 ${isMobileDetailActive ? 'hidden lg:block' : 'block'}`}>
          <div className="text-xs font-bold text-ink/40 uppercase tracking-[2px] mb-4">Select Stadium ({filteredVenues.length})</div>
          <div className="max-h-[660px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
            {filteredVenues.map((venue, idx) => {
              const isActive = venue.name === currentActiveVenue.name;
              return (
                <motion.button
                  key={venue.name}
                  onClick={() => {
                    setActiveVenueName(venue.name);
                    setIsMobileDetailActive(true);
                  }}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-5 rounded-[24px] transition-all duration-200 border relative group flex items-center justify-between ${
                    isActive 
                      ? 'bg-pak-green/15 border-pak-green text-white' 
                      : 'bg-card-bg/60 border-card-border hover:border-white/10 text-ink/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                      isActive 
                        ? 'bg-pak-green/20 border-pak-green/40 text-pak-green' 
                        : 'bg-white/5 border-white/5 text-ink/40 group-hover:text-pak-green group-hover:bg-pak-green/5'
                    }`}>
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-tight">{venue.name}</h3>
                      <p className="text-[10px] font-bold text-ink/40 uppercase tracking-[1px] mt-1">
                        {venue.city}, {venue.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-black uppercase tracking-[1px] px-2 py-1 rounded ${
                      venue.type === 'Home' ? 'bg-pak-green/15 text-pak-green' : 'bg-blue-500/15 text-blue-400'
                    }`}>
                      {venue.type}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-pak-green' : 'text-ink/30 group-hover:translate-x-1 group-hover:text-white'}`} />
                  </div>
                </motion.button>
              );
            })}

            {filteredVenues.length === 0 && (
              <div className="text-center py-12 bg-card-bg border border-card-border rounded-[32px] p-8">
                <p className="text-xs font-semibold text-ink/65 uppercase tracking-[2px] mb-2">No venues match search filters</p>
                <p className="text-[11px] text-ink/40 font-medium">Try typing a different stadium name, city, or country.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Venue Detail Profile */}
        <div className={`col-span-1 lg:col-span-7 ${isMobileDetailActive ? 'block' : 'hidden lg:block'}`}>
          {/* Back button for mobile navigation */}
          <button 
            onClick={() => setIsMobileDetailActive(false)}
            className="lg:hidden flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white mb-6 bg-pak-green px-4 py-2.5 rounded-xl border border-pak-green/20"
          >
            ← Back to Stadiums List
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentActiveVenue.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-card-bg border border-card-border rounded-[32px] p-6 md:p-8 relative overflow-hidden"
            >
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <span className={`inline-block text-[9px] font-black uppercase tracking-[2px] px-3 py-1.5 rounded-full mb-3 ${
                    currentActiveVenue.type === 'Home' ? 'bg-pak-green/20 text-pak-green border border-pak-green/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {currentActiveVenue.type} Fortress
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight leading-none mb-2">
                    {currentActiveVenue.name}
                  </h2>
                  <p className="text-xs font-black text-ink/50 uppercase tracking-[2px] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pak-green" /> {currentActiveVenue.city}, {currentActiveVenue.country}
                  </p>
                </div>
              </div>

              {/* Stats Block details */}
              <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-6 mb-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-ink/30 uppercase tracking-[2px] block">Spectator Capacity</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-pak-green">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-lg font-black text-white">{currentActiveVenue.capacity}</span>
                      <span className="text-[9px] text-ink/40 font-medium">seating limit</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-ink/30 uppercase tracking-[2px] block">2026 Fixture Schedule</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-pak-green">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-bold text-white uppercase tracking-wider truncate">
                        Key Series
                      </span>
                      <span className="text-[9px] text-ink/45 font-medium block truncate max-w-[200px]" title={currentActiveVenue.featuredSeries}>
                        {currentActiveVenue.featuredSeries}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Stadium Map */}
              <div className="mb-6">
                <StadiumMap venueName={currentActiveVenue.name} />
              </div>

              {/* Detailed Pitch Analysis */}
              <div className="bg-pak-green/5 border border-pak-green/20 rounded-[24px] p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-pak-green animate-pulse" />
                  <span className="text-[10px] font-black text-pak-green uppercase tracking-[2px]">Expert Pitch Report</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-semibold">
                  {currentActiveVenue.pitchReport}
                </p>
              </div>

              {/* Historical profile */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-ink/30 uppercase tracking-[2px] block">Historic Profile</span>
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
                  {currentActiveVenue.historyText}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between text-[11px] font-black uppercase text-ink/40 tracking-wider">
                <span>Ref: Official 2026 ground guide</span>
                <span className="text-pak-green">Current Status: Active</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- CRIC ARCHITECTURE EXPLANATION (Human-Like literal label) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-neutral-900 border border-white/5 rounded-[32px] p-8 md:p-12">
        <div>
          <span className="text-pak-green text-[10px] font-black uppercase tracking-[3px] mb-2 block">Home Fortresses</span>
          <h3 className="text-xl font-bold text-white mb-4">The Defending Ground Advantage</h3>
          <p className="text-xs text-ink/75 leading-relaxed font-medium">
            Playing in high-heat zones like Multan, flat tracks at Gaddafi Stadium in Lahore, or turning wickets of National Bank Stadium in Karachi provides Pakistan an immense home advantage. These grounds are configured with specific soil combinations that allow spinners to operate optimally on Day 4 and Day 5, or unleash deadly reverse swing under hot subcontinental conditions.
          </p>
        </div>
        <div>
          <span className="text-blue-400 text-[10px] font-black uppercase tracking-[3px] mb-2 block">Away Challenges</span>
          <h3 className="text-xl font-bold text-white mb-4">Adapting to Diverse Climates</h3>
          <p className="text-xs text-ink/75 leading-relaxed font-medium">
            From the spin-friendly damp decks of Mirpur and Sylhet in Bangladesh, to the swing-dominated overhead conditions at Lord's, Headingley, and Edgbaston in England, the 2026 away calendar tests modern Pakistan cricketers in all dimensions. Winning matches abroad in the heavy crosswinds of Durban or high altitude bounce of Centurion remains the ultimate metric for ICC World Test Championship standings.
          </p>
        </div>
      </div>

      {/* --- INTERNAL LINKS INCLUDED FOR AUTH AUTHORITY (As requested) --- */}
      <div className="mt-16 border-t border-white/5 pt-16">
        <InternalLinkSection />
      </div>
    </div>
  );
}
