import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  index: number;
}

export default function MatchCard({ match, index }: MatchCardProps) {
  const navigate = useNavigate();
  
  const formatColor = {
    'Test': 'border-red-500/30 text-red-400 bg-red-500/10',
    'ODI': 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    'T20I': 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  }[match.format];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        boxShadow: '0 20px 40px -10px rgba(0, 169, 92, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)'
      }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      onClick={() => navigate(`/match/${match.id}`)}
      className="bg-card-bg border border-card-border rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-colors duration-300 group"
      id={`match-${match.id}`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
           <span className="text-[10px] font-bold text-white/60 group-hover:text-white uppercase tracking-widest transition-colors">{match.series}</span>
           <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-tighter border ${formatColor}`}>
            {match.format}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full border border-card-border bg-black/20 p-1 overflow-hidden shrink-0">
                <img src="https://flagcdn.com/pk.svg" alt="PAK" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
             </div>
             <span className="text-xs font-bold uppercase">PAK</span>
          </div>

          <div className="text-[10px] font-bold text-neutral-600">VS</div>

          <div className="flex items-center gap-2">
             <span className="text-xs font-bold uppercase">{match.opponent.substring(0, 3)}</span>
             <div className="w-8 h-8 rounded-full border border-card-border bg-black/20 p-1 overflow-hidden shrink-0">
                <img 
                  src={match.flagUrl || `https://picsum.photos/seed/${match.opponent}/32/32`} 
                  alt={match.opponent} 
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-4 border-t border-card-border/50">
        <div className="flex items-center gap-2 text-neutral-400">
           <Calendar className="w-3.5 h-3.5 text-white" />
           <span className="text-xs font-semibold">{match.date}</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
           <MapPin className="w-3.5 h-3.5 text-white" />
           <span className="text-xs font-medium truncate">{match.venue}</span>
        </div>
      </div>
    </motion.div>
  );
}
