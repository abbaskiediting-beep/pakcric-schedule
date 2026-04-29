import { Calendar, Clock, MapPin, Share2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
  index: number;
}

export default function MatchCard({ match, index }: MatchCardProps) {
  // Map series names to IDs for intelligence reports
  const seriesIntelMap: Record<string, string> = {
    'PSL 11 2026': 'psl-11-2026',
    'Pakistan vs New Zealand T20I Series': 'pak-nz-series-2026',
    'T20 World Cup 2026': 't20-wc-2026',
    'Pakistan Tour of Bangladesh (Test Series)': 'pak-ban-test-2026'
  };

  const intelId = seriesIntelMap[match.series];

  const formatColor = {
    'Test': 'border-red-500/30 text-red-400 bg-red-500/10',
    'ODI': 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    'T20I': 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  }[match.format];

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const shareData = {
      title: `Pakistan vs ${match.opponent} - ${match.series}`,
      text: `Check out the match schedule: Pakistan vs ${match.opponent} on ${match.date} at ${match.time} PKT. Venue: ${match.venue}`,
      url: window.location.origin + `/match/${match.id}`
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {
        // Fallback or silent fail
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(shareData.url);
      alert('Match link copied to clipboard!');
    }
  };

  return (
    <Link to={`/match/${match.id}`} className="block focus:outline-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 25,
          delay: index * 0.05
        }}
        className={`bg-card-bg border rounded-2xl p-5 h-full flex flex-col justify-between cursor-pointer transition-colors transition-shadow duration-300 group ${
          match.status === 'Live' 
            ? 'border-red-500/50 shadow-[0_0_20px_-10px_rgba(239,68,68,0.5)] hover:border-red-500 hover:shadow-[0_12px_40px_-12px_rgba(239,68,68,0.4)]' 
            : 'border-card-border hover:border-pak-green/50 hover:shadow-[0_12px_40px_-12px_rgba(0,102,46,0.3)]'
        }`}
        id={`match-${match.id}`}
      >
      <div>
        <div className="flex justify-between items-center mb-5">
           <div className="flex flex-col gap-1">
             <div className="flex items-center gap-2">
               <span className="text-[9px] font-black text-ink/30 group-hover:text-pak-green uppercase tracking-[3px] transition-colors">{match.series}</span>
               {match.status === 'Live' && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full"
                 >
                   <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                   <span className="text-[7px] font-black uppercase tracking-widest text-red-500">Live</span>
                 </motion.div>
               )}
             </div>
             {intelId && (
               <Link 
                 to={`/series-intelligence/${intelId}`}
                 onClick={(e) => e.stopPropagation()}
                 className="flex items-center gap-1.5 w-fit px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-[7px] font-black uppercase tracking-widest text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
               >
                 <Zap className="w-2.5 h-2.5 fill-current" />
                 Series Intel
               </Link>
             )}
           </div>
           <div className="flex items-center gap-2">
             <button 
               onClick={handleShare}
               className="p-1.5 rounded-full bg-white/5 hover:bg-pak-green/20 text-ink/40 hover:text-pak-green transition-all"
               title="Share Match"
             >
               <Share2 className="w-3 h-3" />
             </button>
             <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${formatColor} transition-all group-hover:scale-105 shadow-sm`}>
              {match.format}
            </span>
           </div>
        </div>

        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex flex-col items-center gap-2">
             <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border bg-black/20 p-1.5 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-110 ${
               match.status === 'Live' ? 'border-red-500 animate-[pulse_2s_infinite]' : 'border-card-border group-hover:border-pak-green'
             }`}>
                <img src="https://flagcdn.com/pk.svg" alt="PAK" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover rounded-full" />
             </div>
             <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
               match.status === 'Live' ? 'text-red-400 group-hover:text-red-300' : 'text-ink/40 group-hover:text-white'
             }`}>PAK</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className={`h-px w-8 transition-colors ${
              match.status === 'Live' ? 'bg-red-500/30 group-hover:bg-red-500/50' : 'bg-card-border/50 group-hover:bg-pak-green/30'
            }`} />
            <div className={`text-[10px] font-black transition-colors tracking-tighter ${
              match.status === 'Live' ? 'text-red-500' : 'text-ink/20 group-hover:text-pak-green/80'
            }`}>VS</div>
            <div className={`h-px w-8 transition-colors ${
              match.status === 'Live' ? 'bg-red-500/30 group-hover:bg-red-500/50' : 'bg-card-border/50 group-hover:bg-pak-green/30'
            }`} />
          </div>

          <div className="flex flex-col items-center gap-2">
             <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border bg-black/20 p-1.5 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-110 ${
               match.status === 'Live' ? 'border-red-500 animate-[pulse_2s_infinite]' : 'border-card-border group-hover:border-pak-green'
             }`}>
                <img 
                  src={match.flagUrl || `https://picsum.photos/seed/${match.opponent}/48/48`} 
                  alt={match.opponent} 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
             </div>
             <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
               match.status === 'Live' ? 'text-red-400 group-hover:text-red-300' : 'text-ink/40 group-hover:text-white'
             }`}>{match.opponent}</span>
          </div>
        </div>
      </div>

      <div className={`pt-4 mt-auto border-t transition-colors ${
        match.status === 'Live' ? 'border-red-500/20' : 'border-card-border/30'
      }`}>
        <div 
          className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-3 cursor-help group/time"
          title={`Full Schedule: ${match.date} at ${match.time} Pakistan Standard Time (PKT)`}
        >
          <div className={`flex items-center gap-2 transition-colors ${
            match.status === 'Live' ? 'text-red-400 group-hover/time:text-red-300' : 'text-ink/40 group-hover/time:text-pak-green'
          }`}>
            <Calendar className={`w-3.5 h-3.5 ${
              match.status === 'Live' ? 'text-red-500' : 'text-pak-green/60 group-hover/time:text-pak-green'
            }`} />
            <span className="text-[9px] font-black uppercase tracking-widest">{match.date}</span>
          </div>
          <div className={`flex items-center gap-2 transition-colors justify-start xs:justify-end ${
            match.status === 'Live' ? 'text-red-400 group-hover/time:text-red-300' : 'text-ink/40 group-hover/time:text-pak-green'
          }`}>
            <Clock className={`w-3.5 h-3.5 ${
              match.status === 'Live' ? 'text-red-500' : 'text-pak-green/60 group-hover/time:text-pak-green'
            }`} />
            <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">{match.time} PKT</span>
          </div>
        </div>
        <div className={`flex items-center gap-2 transition-colors ${
          match.status === 'Live' ? 'text-red-500/60 group-hover:text-red-500' : 'text-ink/40 group-hover:text-ink/60'
        }`} title={match.venue}>
          <MapPin className={`w-3.5 h-3.5 ${match.status === 'Live' ? 'text-red-500' : 'text-pak-green'}`} />
          <span className="text-[10px] font-black uppercase tracking-tight truncate">{match.venue}</span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
