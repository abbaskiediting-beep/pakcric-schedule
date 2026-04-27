import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  index: number;
}

export default function MatchCard({ match, index }: MatchCardProps) {
  const formatColor = {
    'Test': 'border-red-500/30 text-red-400 bg-red-500/10',
    'ODI': 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    'T20I': 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  }[match.format];

  return (
    <Link to={`/match/${match.id}`} className="block focus:outline-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 25,
          delay: index * 0.05
        }}
        className="bg-card-bg border border-card-border rounded-2xl p-5 h-full flex flex-col justify-between cursor-pointer transition-all duration-300 group hover:border-pak-green/50 hover:shadow-[0_12px_40px_-12px_rgba(0,102,46,0.3)] hover:scale-[1.03] hover:-translate-y-1.5"
        id={`match-${match.id}`}
      >
      <div>
        <div className="flex justify-between items-center mb-5">
           <span className="text-[9px] font-black text-ink/30 group-hover:text-pak-green uppercase tracking-[3px] transition-colors">{match.series}</span>
           <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${formatColor} transition-all group-hover:scale-105 shadow-sm`}>
            {match.format}
          </span>
        </div>

        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-card-border bg-black/20 p-1.5 overflow-hidden shrink-0 transition-all duration-300 group-hover:border-pak-green group-hover:scale-110">
                <img src="https://flagcdn.com/pk.svg" alt="PAK" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover rounded-full" />
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest text-ink/40 group-hover:text-white transition-colors">PAK</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="h-px w-8 bg-card-border/50 group-hover:bg-pak-green/30 transition-colors" />
            <div className="text-[10px] font-black text-ink/20 group-hover:text-pak-green/80 transition-colors tracking-tighter">VS</div>
            <div className="h-px w-8 bg-card-border/50 group-hover:bg-pak-green/30 transition-colors" />
          </div>

          <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-card-border group-hover:border-pak-green bg-black/20 p-1.5 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-110">
                <img 
                  src={match.flagUrl || `https://picsum.photos/seed/${match.opponent}/48/48`} 
                  alt={match.opponent} 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest text-ink/40 group-hover:text-white transition-colors">{match.opponent}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-auto border-t border-card-border/30">
        <div 
          className="grid grid-cols-2 gap-3 mb-3 cursor-help group/time"
          title={`Full Schedule: ${match.date} at ${match.time} Pakistan Standard Time (PKT)`}
        >
          <div className="flex items-center gap-2 text-ink/40 group-hover/time:text-pak-green transition-colors">
            <Calendar className="w-3.5 h-3.5 text-pak-green/60 group-hover/time:text-pak-green" />
            <span className="text-[9px] font-black uppercase tracking-widest">{match.date}</span>
          </div>
          <div className="flex items-center gap-2 text-ink/40 group-hover/time:text-pak-green transition-colors justify-end">
            <Clock className="w-3.5 h-3.5 text-pak-green/60 group-hover/time:text-pak-green" />
            <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">{match.time} PKT</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-ink/40 group-hover:text-ink/60 transition-colors" title={match.venue}>
          <MapPin className="w-3.5 h-3.5 text-pak-green" />
          <span className="text-[10px] font-black uppercase tracking-tight truncate">{match.venue}</span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
