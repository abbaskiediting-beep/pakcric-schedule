import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PAKISTAN_SCHEDULE } from '../constants';
import { Trophy, Calendar, MapPin, ChevronLeft } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function SeriesDetail() {
  const { slug } = useParams();
  const [activeFormat, setActiveFormat] = useState<string | null>(null);

  const seriesMatches = useMemo(() => {
    return PAKISTAN_SCHEDULE.filter(m => m.series.toLowerCase().replace(/ /g, '-') === slug);
  }, [slug]);

  const formats = useMemo(() => {
    const uniqueFormats = Array.from(new Set(seriesMatches.map(m => m.format)));
    if (uniqueFormats.length > 0 && !activeFormat) {
      setActiveFormat(uniqueFormats[0]);
    }
    return uniqueFormats;
  }, [seriesMatches, activeFormat]);

  if (!seriesMatches.length) return <div className="p-12 text-center text-ink/60">Series not found</div>;

  const seriesName = seriesMatches[0].series;
  const filteredMatches = activeFormat 
    ? seriesMatches.filter(m => m.format === activeFormat)
    : seriesMatches;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{`Pakistan vs ${seriesMatches[0].opponent} 2026 Schedule, Squad & Match Details`}</title>
        <meta name="description" content={`Get complete ${seriesName} 2026 series schedule, squad, match dates, venues, and updates.`} />
        <meta name="keywords" content={`Pakistan vs ${seriesMatches[0].opponent}, ${seriesName}, cricket series 2026, Pakistan tour schedule`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Pakistan vs ${seriesMatches[0].opponent} 2026 Schedule, Squad & Match Details`} />
        <meta property="og:description" content={`Get complete ${seriesName} 2026 series schedule, squad, match dates, venues, and updates.`} />
        <meta property="og:url" content={`https://pakcric-schedule.online/series/${slug}`} />
      </Helmet>
      <Link to="/schedule" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Schedule
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative bg-card-bg border border-card-border rounded-[40px] p-10 overflow-hidden mb-12 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Trophy className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[2px] mb-4">Tour Center</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 text-ink">
            Pakistan vs <span className="text-pak-green">{seriesMatches[0].opponent}</span> 2026 Series Full Details
          </h1>
          <div className="flex flex-wrap gap-6 items-center">
             <div className="flex items-center gap-2 text-ink/40">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Schedule 2026</span>
             </div>
             <div className="flex items-center gap-2 text-ink/40">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{seriesMatches[0].venue.split(',').pop()?.trim()}</span>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs for Formats */}
      {formats.length > 1 && (
        <div className="flex gap-2 mb-8 bg-card-bg p-1 rounded-2xl border border-card-border w-fit">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => setActiveFormat(format)}
              className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeFormat === format 
                  ? 'bg-pak-green text-white shadow-lg' 
                  : 'text-ink/40 hover:text-ink hover:bg-white/5'
              }`}
            >
              {format}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="text-xs font-bold uppercase tracking-[4px] text-neutral-500">
            {activeFormat ? `${activeFormat} Fixtures` : 'Matches in this series'}
          </h3>
          <span className="text-[10px] font-bold text-pak-green uppercase tracking-widest">
            {filteredMatches.length} Matches
          </span>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFormat || 'all'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {filteredMatches.map((match, idx) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-pak-green/30 transition-all shadow-sm"
              >
                <div className="flex items-center gap-6 md:gap-8">
                   <div className="text-center min-w-[64px] p-3 bg-pak-green/5 rounded-2xl border border-pak-green/10">
                      <span className="text-2xl font-bold text-ink leading-none block">
                        {match.date.includes('–') ? match.date.split(' ')[1].split('–')[0] : (match.date.includes('-') ? match.date.split('-')[2] : 'TBA')}
                      </span>
                      <span className="text-[10px] font-bold text-pak-green uppercase block mt-1">
                        {match.date.includes(' ') ? match.date.split(' ')[0] : (match.date.includes('-') ? new Date(match.date).toLocaleString('default', { month: 'short' }) : 'DATE')}
                      </span>
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-1">
                         <span className="px-2 py-0.5 bg-pak-green/10 text-pak-green rounded text-[10px] font-bold uppercase">{match.format}</span>
                         <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest italic">{match.time}</span>
                      </div>
                      <Link to={`/match/${match.id}`} className="text-xl font-display font-bold uppercase tracking-tight hover:text-pak-green transition-colors block text-ink">
                        PAKISTAN vs {match.opponent}
                      </Link>
                      <p className="text-xs text-ink/40 font-medium">{match.venue}</p>
                   </div>
                </div>
                <Link to={`/match/${match.id}`} className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white border border-card-border transition-all text-center shadow-sm">
                   Match Detail
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
