import { Calendar, Clock, MapPin, Share2, Zap, Newspaper, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Match } from '../types';
import { getTeamLogo } from '../lib/teamLogos';

interface MatchCardProps {
  match: Match;
  index: number;
  matchId?: string;
}

export default function MatchCard({ match, index, matchId }: MatchCardProps) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const effectiveId = matchId || match.id;
  
  // Get enhanced logos
  const logoA = getTeamLogo(match.teamA || 'PAK');
  const logoB = getTeamLogo(match.opponent);

  // Map series names to IDs for intelligence reports
  const seriesIntelMap: Record<string, string> = {
    'PSL 11 2026': 'psl-11-2026',
    'PSL 11 - 2026': 'psl-11-2026',
    'Pakistan vs New Zealand T20I Series': 'pak-nz-series-2026',
    'T20 World Cup 2026': 't20-wc-2026',
    'Pakistan Tour of Bangladesh (Test Series)': 'pak-ban-test-2026',
    'Australia Tour of Pakistan (ODI Series)': 'aus-pak-odi-2026',
    'Pakistan Tour of West Indies': 'pak-wi-tour-2026',
    'Pakistan Tour of England': 'pak-eng-tour-2026',
    'Pakistan Tour of Sri Lanka': 'pak-sl-tour-2026'
  };

  const intelId = seriesIntelMap[match.series];

  const formatColor = {
    'Test': 'border-red-500/30 text-red-400 bg-red-500/10',
    'ODI': 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    'T20I': 'border-teal-500/30 text-teal-400 bg-teal-500/10',
  }[match.format || 'T20I'];

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const sharePath = match.blogUrl || `/match/${effectiveId}`;
    const shareUrl = window.location.origin + sharePath;
    const shareData = {
      title: `Pakistan vs ${match.opponent} - ${match.series}`,
      text: `Check out the match schedule: Pakistan vs ${match.opponent} on ${match.date} at ${match.time} PKT. Venue: ${match.venue}`,
      url: shareUrl
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        if (err.name !== 'AbortError') {
          copyToClipboard(shareUrl);
        }
      });
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div 
      onClick={() => {
        if (match.blogUrl) {
          navigate(match.blogUrl);
        } else {
          navigate(`/match/${effectiveId}`);
        }
      }}
      className="block focus:outline-none h-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          y: -10, 
          scale: 1.025,
          transition: { type: 'spring', stiffness: 300, damping: 15 }
        }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 25,
          delay: index * 0.05
        }}
        className={`bg-card-bg border rounded-2xl p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between cursor-pointer transition-all duration-300 group relative overflow-hidden ${
          match.status === 'Live' 
            ? 'border-red-500/50 shadow-[0_0_20px_-10px_rgba(239,68,68,0.5)] hover:border-red-500 hover:shadow-[0_12px_40px_-12px_rgba(239,68,68,0.4)]' 
            : 'border-card-border hover:border-pak-green/50 hover:shadow-[0_12px_40px_-12px_rgba(0,102,46,0.3)]'
        }`}
        id={`match-${effectiveId}`}
      >
        {(match.status === 'Upcoming' || match.status === 'Today') && (
          <div className={`absolute top-0 left-0 right-0 ${match.status === 'Today' ? 'bg-red-600' : 'bg-pak-green'} text-white text-center py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-[3px] shadow-inner z-20`}>
            {match.status.toUpperCase()}
          </div>
        )}

        <div className={`flex flex-col h-full ${(match.status === 'Upcoming' || match.status === 'Today') ? 'pt-5' : ''}`}>
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-1.5 text-left">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-[9px] sm:text-[10px] font-black text-ink/30 group-hover:text-pak-green uppercase tracking-[2px] sm:tracking-[3px] transition-colors">{match.series}</span>
                  {match.blogUrl && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-yellow-500/10 text-yellow-500 rounded-lg text-[7px] sm:text-[8px] font-black uppercase tracking-widest border border-yellow-500/20 transition-all">
                      <Newspaper className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Report
                    </div>
                  )}
                </div>
                {match.status === 'Live' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5 sm:gap-2 bg-red-500/10 border border-red-500/20 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full w-fit"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-red-500">Live Match</span>
                  </motion.div>
                )}
                {(match.status === 'Upcoming' || match.status === 'Today') && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center gap-1.5 sm:gap-2 ${match.status === 'Today' ? 'bg-red-500/10 border-red-500/20' : 'bg-pak-green/10 border-pak-green/20'} px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full w-fit`}
                  >
                    <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 ${match.status === 'Today' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-pak-green shadow-[0_0_8px_rgba(0,102,46,0.5)]'} rounded-full`} />
                    <span className={`text-[7px] sm:text-[8px] font-black uppercase tracking-widest ${match.status === 'Today' ? 'text-red-500' : 'text-pak-green'}`}>{match.status}</span>
                  </motion.div>
                )}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button 
                  onClick={handleShare}
                  className={`relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    copied 
                      ? 'bg-pak-green text-white scale-110 shadow-[0_0_15px_rgba(0,102,46,0.4)]' 
                      : 'bg-white/5 hover:bg-white/10 text-ink/40 hover:text-pak-green'
                  }`}
                  aria-label="Share match"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      >
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="share"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      >
                        <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {copied && (
                    <motion.span 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-full mr-3 px-2 py-1 sm:px-3 sm:py-1.5 bg-pak-green text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-lg shadow-xl pointer-events-none whitespace-nowrap"
                    >
                      Link Copied!
                    </motion.span>
                  )}
                </button>
                <span className={`px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg text-[8px] sm:text-[9px] font-black uppercase tracking-widest border ${formatColor} transition-all group-hover:scale-105 shadow-sm`}>
                  {match.format}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8 md:mb-10 px-1 relative">
              {/* Background Glow for Matchup */}
              <div className="absolute inset-0 bg-gradient-to-r from-pak-green/5 via-transparent to-red-500/5 blur-3xl opacity-50 pointer-events-none" />

              <div className="flex flex-col items-center gap-3 basis-[40%] relative z-10">
                <div className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-2xl border flex items-center justify-center bg-[#0A0A0A] p-2 xs:p-3 sm:p-4 shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-2deg] shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                  match.status === 'Live' ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-white/5 group-hover:border-pak-green/30'
                }`}>
                  <img 
                    src={logoA} 
                    alt={match.teamA || "PAK"} 
                    referrerPolicy="no-referrer" 
                    loading="lazy" 
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
                  />
                  {match.status === 'Live' && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-ping" />
                  )}
                </div>
                <span className={`text-[10px] xs:text-[11px] sm:text-[13px] font-black uppercase tracking-[2px] sm:tracking-[3px] transition-colors text-center leading-tight ${
                  match.status === 'Live' ? 'text-red-400 group-hover:text-red-300' : 'text-white/40 group-hover:text-white'
                }`}>{match.teamA || "PAK"}</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 px-1 basis-[20%] relative z-10">
                <div className={`h-px w-4 xs:w-6 sm:w-10 transition-colors ${
                  match.status === 'Live' ? 'bg-red-500/30 group-hover:bg-red-500/50' : 'bg-white/10 group-hover:bg-pak-green/30'
                }`} />
                <div className={`text-[10px] xs:text-[12px] sm:text-[16px] font-black transition-all tracking-tighter italic ${
                  match.status === 'Live' ? 'text-red-500' : 'text-white/10 group-hover:text-pak-green group-hover:scale-110'
                }`}>VS</div>
                <div className={`h-px w-4 xs:w-6 sm:w-10 transition-colors ${
                  match.status === 'Live' ? 'bg-red-500/30 group-hover:bg-red-500/50' : 'bg-white/10 group-hover:bg-pak-green/30'
                }`} />
              </div>

              <div className="flex flex-col items-center gap-3 basis-[40%] relative z-10">
                <div className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-2xl border flex items-center justify-center bg-[#0A0A0A] p-2 xs:p-3 sm:p-4 shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[2deg] shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
                  match.status === 'Live' ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-white/5 group-hover:border-pak-green/30'
                }`}>
                  <img 
                    src={logoB} 
                    alt={match.opponent} 
                    referrerPolicy="no-referrer" 
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-500"
                  />
                  {match.status === 'Live' && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-ping" />
                  )}
                </div>
                <span className={`text-[10px] xs:text-[11px] sm:text-[13px] font-black uppercase tracking-[2px] sm:tracking-[3px] transition-colors text-center leading-tight ${
                  match.status === 'Live' ? 'text-red-400 group-hover:text-red-300' : 'text-white/40 group-hover:text-white'
                }`}>{match.opponent}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            {intelId && (
              <Link 
                to={`/series-intelligence/${intelId}`}
                onClick={(e) => e.stopPropagation()}
                className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 mb-5 bg-pak-green/5 hover:bg-pak-green text-pak-green hover:text-white rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-[2px] border border-pak-green/20 hover:border-pak-green transition-all duration-300 group/intel shadow-sm active:scale-[0.98]"
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current group-hover:animate-bounce" />
                Intelligence Report
              </Link>
            )}

            <div className={`pt-4 border-t transition-colors ${
              match.status === 'Live' ? 'border-red-500/20' : 'border-card-border/30'
            }`}>
            <div 
              className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-y-2 gap-x-4 mb-4 cursor-help group/time"
              title={`Full Schedule: ${match.date} at ${match.time} Pakistan Standard Time (PKT)`}
            >
              <div className={`flex items-center gap-2 sm:gap-2.5 transition-colors ${
                match.status === 'Live' ? 'text-red-400 group-hover/time:text-red-300' : 'text-ink/40 group-hover/time:text-pak-green'
              }`}>
                <Calendar className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  match.status === 'Live' ? 'text-red-500' : 'text-pak-green'
                }`} />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">{match.date}</span>
              </div>
              <div className={`flex items-center gap-2 sm:gap-2.5 transition-colors xs:justify-end ${
                match.status === 'Live' ? 'text-red-400 group-hover/time:text-red-300' : 'text-ink/40 group-hover/time:text-pak-green'
              }`}>
                <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  match.status === 'Live' ? 'text-red-500' : 'text-pak-green'
                }`} />
                <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap leading-none">{match.time} PKT</span>
              </div>
            </div>
            <div className={`flex items-center gap-2 sm:gap-2.5 transition-colors ${
              match.status === 'Live' ? 'text-red-500/60 group-hover:text-red-500' : 'text-ink/40 group-hover:text-ink/60'
            }`} title={match.venue}>
              <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${match.status === 'Live' ? 'text-red-500' : 'text-pak-green'}`} />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight truncate leading-none">{match.venue}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  );
}
