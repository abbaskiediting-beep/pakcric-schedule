import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { Trophy, Calendar, MapPin, ChevronLeft } from 'lucide-react';

export default function SeriesDetail() {
  const { slug } = useParams();
  const seriesName = slug?.replace(/-/g, ' ').toUpperCase();
  const matches = PAKISTAN_SCHEDULE.filter(m => m.series.toLowerCase().replace(/ /g, '-') === slug);

  if (!matches.length) return <div className="p-12 text-center text-ink/60">Series not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/schedule" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Schedule
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative bg-card-bg border border-card-border rounded-[40px] p-10 overflow-hidden mb-12 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Trophy className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-[2px] mb-4">Tour Center</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">{seriesName}</h1>
          <div className="flex flex-wrap gap-6 items-center">
             <div className="flex items-center gap-2 text-ink/40">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{matches[0].date} — {matches[matches.length-1].date}</span>
             </div>
             <div className="flex items-center gap-2 text-ink/40">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{matches[0].venue}</span>
             </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-[4px] text-neutral-500 mb-6 px-2">Matches in this series</h3>
        {matches.map((match, idx) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white transition-all"
          >
            <div className="flex items-center gap-8">
               <div className="text-center min-w-[60px] p-2 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-2xl font-bold text-white leading-none">{match.date.split('-')[2]}</span>
                  <span className="text-[10px] font-bold text-ink/40 uppercase block">{new Date(match.date).toLocaleString('default', { month: 'short' })}</span>
               </div>
               <div>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="px-2 py-0.5 bg-white/10 text-white rounded text-[10px] font-bold uppercase">{match.format}</span>
                     <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest italic">{match.time}</span>
                  </div>
                  <Link to={`/match/${match.id}`} className="text-xl font-display font-bold uppercase tracking-tight hover:text-white transition-colors block">PAKISTAN vs {match.opponent}</Link>
                  <p className="text-xs text-ink/40 font-medium">{match.venue}</p>
               </div>
            </div>
            <Link to={`/match/${match.id}`} className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all text-center">
               Match Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
