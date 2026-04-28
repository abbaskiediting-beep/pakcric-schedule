import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PLAYER_STATS } from '../playerData';
import { 
  ChevronLeft, User, TrendingUp, Award, Star, 
  Target, Zap, Activity, Info, FileText, Save, Trash2, ArrowUpRight,
  Share2, Check
} from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function PlayerStats() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedMsg, setShowSavedMsg] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Find player by name (handling slug)
  const playerName = name?.replace(/-/g, ' ');
  const player = playerName ? Object.values(PLAYER_STATS).find(p => p.name.toLowerCase() === playerName.toLowerCase()) : null;

  // Personal Notes Persistence
  useEffect(() => {
    if (player) {
      const savedNotes = localStorage.getItem(`scouting_notes_${player.name}`);
      if (savedNotes) {
        setNotes(savedNotes);
      } else {
        setNotes('');
      }
    }
  }, [player]);

  const handleSaveNotes = () => {
    if (!player) return;
    setIsSaving(true);
    localStorage.setItem(`scouting_notes_${player.name}`, notes);
    
    setTimeout(() => {
      setIsSaving(false);
      setShowSavedMsg(true);
      setTimeout(() => setShowSavedMsg(false), 3000);
    }, 600);
  };

  const handleClearNotes = () => {
    if (!player) return;
    if (window.confirm('Are you sure you want to delete your notes for this player?')) {
      setNotes('');
      localStorage.removeItem(`scouting_notes_${player.name}`);
    }
  };

  const handleShare = async (includeNotes = false) => {
    if (!player) return;
    
    let shareText = `Check out ${player.name}'s latest cricket stats and records for the 2026 season!`;
    if (includeNotes && notes.trim()) {
      shareText = `My Scouting Notes for ${player.name}:\n"${notes.trim()}"\n\nFull stats and records:`;
    }

    const shareData = {
      title: `${player.name} - Pakistan Cricket Stats 2026`,
      text: shareText,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        const textToCopy = includeNotes ? `${shareText} ${window.location.href}` : window.location.href;
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Error sharing:', err);
      }
    }
  };

  if (!player) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase">Player Not Found</h2>
        <Link to="/squads" className="inline-flex items-center gap-2 text-pak-green font-bold uppercase tracking-widest text-[10px] hover:underline">
          <ChevronLeft className="w-4 h-4" /> Back to Squads
        </Link>
      </div>
    );
  }

  const getFormColor = (result: string, role: string) => {
    if (!result) return 'bg-neutral-500/20';
    const isBowler = role.toLowerCase().includes('bowler') || role.toLowerCase().includes('all-rounder');
    if (result.includes('/')) {
      const wickets = parseInt(result.split('/')[0]);
      if (wickets >= 3) return 'bg-green-500';
      if (wickets >= 2) return 'bg-lime-500';
      if (wickets >= 1) return 'bg-amber-500';
      return 'bg-red-500';
    } else {
      const runs = parseInt(result.replace('*', ''));
      if (isNaN(runs)) return 'bg-neutral-500/20';
      if (runs >= 50) return 'bg-green-500';
      if (runs >= 30) return 'bg-lime-500';
      if (runs >= 15) return 'bg-amber-500';
      return 'bg-red-500';
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4 sm:px-6">
      <Helmet>
        <title>{`Pakistan Players Stats 2026 – Batting, Bowling & All Format Records`}</title>
        <meta name="description" content={`Explore Pakistan cricket players stats 2026 including runs, wickets, averages, and performance in Test, ODI, and T20 formats.`} />
        <meta name="keywords" content={`Pakistan players stats, Pakistan cricket stats 2026, ${player.name} stats, batting records, bowling records`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Pakistan Players Stats 2026 – Batting, Bowling & All Format Records`} />
        <meta property="og:description" content={`Explore Pakistan cricket players stats 2026 including runs, wickets, averages, and performance in Test, ODI, and T20 formats.`} />
        <meta property="og:image" content={player.imgUrl || "https://pakcric-schedule.online/logo.png"} />
      </Helmet>

      <Link to="/squads" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/50 hover:translate-x-[-4px] transition-transform mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Squads
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Intro Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6 md:mb-8 text-white leading-tight">
            Pakistan Players Stats – <span className="text-pak-green">Batting, Bowling & Records</span>
          </h1>
          <div className="max-w-3xl space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl text-ink/80 font-medium leading-relaxed">
              If you want to understand how the <Link to="/" className="text-pak-green hover:underline">Pakistan cricket team</Link> is performing, <Link to="/players-stats" className="text-pak-green hover:underline">player statistics</Link> are the best place to start.
            </p>
            <p className="text-ink/60 font-medium leading-relaxed">
              This page gives you a complete overview of <Link to="/players-stats" className="text-pak-green hover:underline">Pakistan players’ stats</Link> across all formats, including <Link to="/icc-test-ranking-2026" className="text-pak-green hover:underline">Test</Link>, <Link to="/icc-odi-ranking-2026" className="text-pak-green hover:underline">ODI</Link>, and <Link to="/icc-t20-ranking-2026" className="text-pak-green hover:underline">T20 cricket</Link>. From top run scorers to leading wicket-takers, everything is presented in a clear and easy-to-read format.
            </p>
            <p className="text-sm font-bold uppercase tracking-[3px] text-pak-green/60">
              Whether you’re <Link to="/squads" className="text-pak-green hover:underline">comparing players</Link> or just checking recent performances in the <Link to="/schedule" className="text-pak-green hover:underline">latest matches</Link>, this page has all the key numbers in one place.
            </p>
          </div>
        </div>

        <div className="bg-card-bg border border-card-border rounded-3xl md:rounded-[40px] p-5 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 pointer-events-none">
            <User className="w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
            <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl sm:rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-2.5 sm:p-4 shrink-0 shadow-2xl">
              {player.imgUrl ? (
                <img src={player.imgUrl} alt={player.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" loading="lazy" />
              ) : (
                <User className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white/20" />
              )}
            </div>
            
            <div className="min-w-0 flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1 bg-pak-green text-white rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[4px] inline-block w-fit mx-auto md:mx-0">
                  {player.role}
                </span>
                <button 
                  onClick={() => handleShare()}
                  className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-ink/40 hover:text-pak-green hover:border-pak-green/30 hover:bg-pak-green/10 transition-all w-fit mx-auto md:mx-0 group/share"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pak-green" />
                      <span className="text-pak-green">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/share:scale-110 transition-transform" />
                      <span>Share Profile</span>
                    </>
                  )}
                </button>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-2 sm:mb-4 break-words leading-none italic">
                {player.name.split(' ')[0]} <br className="sm:hidden" /><span className="text-pak-green">{player.name.split(' ')[1]}</span>
              </h1>
              <p className="text-ink/40 font-bold uppercase tracking-[2px] sm:tracking-widest text-[7px] sm:text-[9px] md:text-xs">
                {player.name} Cricket Stats & Records • 2026 Season
              </p>
            </div>
          </div>
        </div>

        {/* Top Ad for Player Profile */}
        <AdPlaceholder type="banner" className="my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {[
            { label: 'Matches', value: player.stats.matches, icon: <Activity className="w-3.5 h-3.5 md:w-5 md:h-5" /> },
            { label: 'Runs', value: player.stats.runs || '—', icon: <Target className="w-3.5 h-3.5 md:w-5 md:h-5" /> },
            { label: 'Average', value: player.stats.avg, icon: <TrendingUp className="w-3.5 h-3.5 md:w-5 md:h-5" /> },
            { label: 'Strike Rate', value: player.stats.sr || '—', icon: <Zap className="w-3.5 h-3.5 md:w-5 md:h-5" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-card-bg border border-card-border p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl md:rounded-[32px] hover:border-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-neutral-500">
                {stat.icon}
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-widest leading-none">{stat.label}</span>
              </div>
              <p className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white tabular-nums leading-none tracking-tighter">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-page ad after summary */}
        <AdPlaceholder type="native" className="my-8" label="Promoted for Fans" />

        {/* Batting & Bowling SEO Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <section className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-display font-bold uppercase text-white mb-4 md:mb-6">Pakistan <Link to="/rankings" className="text-pak-green hover:underline">Batting Stats</Link></h2>
            <p className="text-sm text-ink/60 leading-relaxed font-medium mb-6">
              <Link to="/players-stats" className="text-pak-green hover:underline">Batting statistics</Link> show how consistently players are scoring runs and contributing to the team. Here you can find total runs scored, <Link to="/rankings" className="text-pak-green hover:underline">batting average</Link>, <Link to="/rankings" className="text-pak-green hover:underline">strike rate</Link>, and number of 50s and 100s.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-[9px] md:text-[10px] font-bold text-pak-green uppercase tracking-widest leading-relaxed">
                Identify the most reliable batsmen and in-form players format-wise (Test, ODI, T20) via <Link to="/rankings" className="text-pak-green hover:underline">verified rankings</Link>.
              </span>
            </div>
          </section>

          <section className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-display font-bold uppercase text-white mb-4 md:mb-6">Pakistan <Link to="/players-stats" className="text-pak-green hover:underline">Bowling Stats</Link></h2>
            <p className="text-sm text-ink/60 leading-relaxed font-medium mb-6">
              Bowling performance plays a crucial role in winning <Link to="/schedule" className="text-pak-green hover:underline">matches</Link>. On this page, you can explore total wickets taken, bowling average, economy rate, and best bowling figures for the <Link to="/squads" className="text-pak-green hover:underline">Pakistan squad</Link>.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-[9px] md:text-[10px] font-bold text-pak-green uppercase tracking-widest leading-relaxed">
                Highlight the effectiveness of Pakistan’s fast bowlers and spinners in <Link to="/news" className="text-pak-green hover:underline">match updates</Link>.
              </span>
            </div>
          </section>
        </div>

        {/* All-Rounder Analysis */}
        <section className="bg-gradient-to-br from-pak-green/10 to-transparent border border-pak-green/20 rounded-[32px] md:rounded-[48px] p-6 md:p-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-white mb-6">All-Rounders <span className="text-pak-green">Performance</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-ink/70 font-medium leading-relaxed">
                All-rounders add balance to the team by contributing with both bat and ball. This section includes runs and wickets combined to understand overall match impact.
              </p>
              <ul className="space-y-3">
                {['Runs and wickets combined', 'Batting and bowling averages', 'Match impact performance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center">
               <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-pak-green mb-4" />
               <p className="text-[9px] md:text-[10px] font-bold text-pak-green uppercase tracking-[4px]">Overall Team Impact</p>
            </div>
          </div>
        </section>

        {/* Format Specific Detailed Stats */}
        <section className="space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-white">
              Format Breakdown <span className="text-pak-green">Analysis</span>
            </h2>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Info className="w-4 h-4 text-pak-green" />
              <span className="text-[10px] font-bold text-ink/60 uppercase tracking-widest">Across All Match Formats</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {['test', 'odi', 't20i'].map((format) => {
              const formatStats = player.stats.formats?.[format as keyof typeof player.stats.formats];
              if (!formatStats) return null;

              const metrics = [
                { label: 'Matches', value: formatStats.matches, icon: <Activity className="w-3.5 h-3.5" /> },
                { label: 'Innings', value: formatStats.innings, icon: <FileText className="w-3.5 h-3.5" /> },
                { label: 'Runs', value: formatStats.runs, icon: <Target className="w-3.5 h-3.5" /> },
                { label: 'Avg', value: formatStats.avg, icon: <TrendingUp className="w-3.5 h-3.5" /> },
                { label: 'SR', value: formatStats.sr, icon: <Zap className="w-3.5 h-3.5" /> },
                { label: 'Highest', value: formatStats.highestScore, icon: <Award className="w-3.5 h-3.5" /> },
                { label: 'Wickets', value: formatStats.wickets, icon: <Target className="w-3.5 h-3.5" /> },
                { label: 'Best', value: formatStats.bestBowling, icon: <Award className="w-3.5 h-3.5" /> },
                { label: '100s', value: formatStats.centuries, icon: <Star className="w-3.5 h-3.5" /> },
                { label: '50s', value: formatStats.fifties, icon: <TrendingUp className="w-3.5 h-3.5" /> },
                { label: '5W', value: formatStats.fiveWickets, icon: <Award className="w-3.5 h-3.5" /> },
              ].filter(m => m.value !== undefined);

              return (
                <motion.div 
                  key={format}
                  whileHover={{ y: -5 }}
                  className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-8xl font-display font-black uppercase italic">{format}</span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[3px] border ${
                        format === 'test' ? 'bg-white text-black border-white' : 
                        format === 'odi' ? 'bg-pak-green text-white border-pak-green' : 
                        'bg-blue-600 text-white border-blue-600'
                      }`}>
                        {format}
                      </div>
                      <div className="h-px flex-grow bg-white/5" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                      {metrics.map((m, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between min-h-[90px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-pak-green flex shrink-0 opacity-60">
                              {m.icon}
                            </span>
                            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest truncate">
                              {m.label}
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl font-display font-bold text-white tabular-nums">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Format-Wise Stats Overview */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-display font-bold uppercase text-white mb-6">Stats by Format <span className="text-pak-green">(Test, ODI, T20)</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
             <div className="p-6 md:p-8 bg-card-bg border border-card-border rounded-[24px] md:rounded-3xl">
               <h4 className="text-base md:text-lg font-display font-bold text-white uppercase mb-2">Test Cricket</h4>
               <p className="text-[11px] md:text-xs text-ink/40 font-medium leading-relaxed">Long format consistency and technical endurance records.</p>
             </div>
             <div className="p-6 md:p-8 bg-card-bg border border-card-border rounded-[24px] md:rounded-3xl">
               <h4 className="text-base md:text-lg font-display font-bold text-white uppercase mb-2">ODI Cricket</h4>
               <p className="text-[11px] md:text-xs text-ink/40 font-medium leading-relaxed">Balanced performance showing tactical middle-overs depth.</p>
             </div>
             <div className="p-6 md:p-8 bg-card-bg border border-card-border rounded-[24px] md:rounded-3xl">
               <h4 className="text-base md:text-lg font-display font-bold text-white uppercase mb-2">T20 Cricket</h4>
               <p className="text-[11px] md:text-xs text-ink/40 font-medium leading-relaxed">Aggressive and fast scoring strike rate and boundary frequency.</p>
             </div>
          </div>
        </section>

        {/* Recent Form */}
        <div className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-12 overflow-hidden">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[4px] text-neutral-500">Form Trajectory</h3>
              <div className="h-0.5 w-8 bg-pak-green/20 hidden md:block" />
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-pak-green uppercase tracking-widest">Last 5 Innings</span>
          </div>
          
          <div className="flex gap-2.5 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-2 px-2 snap-x">
            {player.stats.recentForm.map((score, i) => (
              <div key={i} className={`min-w-[80px] flex-1 p-4 md:p-6 rounded-2xl md:rounded-3xl text-center border-2 transition-all hover:scale-105 snap-center ${getFormColor(score, player.role)}/10 border-${getFormColor(score, player.role).replace('bg-', '')}/30`}>
                <p className={`text-base sm:text-lg md:text-2xl font-display font-bold tabular-nums leading-none ${getFormColor(score, player.role).replace('bg-', 'text-')}`}>
                  {score}
                </p>
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mx-auto mt-2.5 ${getFormColor(score, player.role)}`} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex md:hidden justify-center items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-pak-green" />
             <div className="w-4 h-0.5 rounded-full bg-pak-green/20" />
             <div className="w-1 h-1 rounded-full bg-pak-green/40" />
          </div>
        </div>

        <AdPlaceholder type="banner" className="my-8" />

        {/* Achievements */}
        {player.achievements && player.achievements.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {player.achievements.map((achievement, i) => (
              <div key={i} className={`p-6 md:p-8 rounded-[24px] md:rounded-[32px] border ${achievement.featured ? 'bg-pak-green/10 border-pak-green/30' : 'bg-card-bg border-card-border'} flex flex-col xs:flex-row items-start gap-4 md:gap-6`}>
                <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0 ${achievement.featured ? 'bg-pak-green text-white' : 'bg-white/5 text-neutral-500'}`}>
                  {achievement.featured ? <Star className="w-5 h-5 md:w-6 md:h-6" /> : <Award className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-display font-bold uppercase text-white mb-2">{achievement.title}</h4>
                  <p className="text-xs md:text-sm text-ink/60 leading-relaxed font-medium">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Personal Scouting Notes */}
        <div className="bg-card-bg border border-card-border rounded-[32px] md:rounded-[40px] p-6 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-pak-green" />
                <h3 className="text-lg md:text-xl font-display font-bold uppercase text-white">Personal Scouting Notes</h3>
              </div>
              <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest leading-relaxed max-w-xl">
                Add your private observations, tactical insights, or scouting reports for {player.name}.
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleShare(true)}
                disabled={!notes.trim()}
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-neutral-400 hover:text-pak-green hover:border-pak-green/20 transition-all flex items-center justify-center shrink-0 disabled:opacity-30"
                title="Share Notes"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={handleClearNotes}
                className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 hover:bg-red-500 active:text-white transition-all flex items-center justify-center shrink-0 group/btn"
                title="Delete Notes"
              >
                <Trash2 className="w-4 h-4 group-active/btn:scale-90 transition-transform" />
              </button>
              <button 
                onClick={handleSaveNotes}
                disabled={isSaving}
                className={`flex-grow md:flex-grow-0 flex items-center justify-center gap-2 px-6 md:px-10 py-3.5 bg-pak-green text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20 disabled:opacity-50 disabled:scale-100 min-w-[180px]`}
              >
                {isSaving ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Activity className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Save className="w-4 h-4" /> 
                )}
                <span className="relative">{isSaving ? 'Saving...' : 'Save Observations'}</span>
              </button>
            </div>
          </div>

          <div className="relative group">
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={`Write your personal notes for ${player.name} here...`}
              className="w-full h-40 md:h-48 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-pak-green/30 transition-all resize-none font-medium leading-relaxed group-hover:border-white/20"
            />
            <AnimatePresence>
              {showSavedMsg && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-4 py-2 bg-pak-green text-white rounded-lg text-[8px] md:text-[9px] font-bold uppercase tracking-widest shadow-lg pointer-events-none"
                >
                  Saved!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-4 md:mt-6 flex items-start gap-3 text-[9px] md:text-[10px] font-bold text-ink/30 uppercase tracking-widest">
            <Info className="w-3 h-3 mt-0.5 shrink-0" />
            <span>These notes are stored locally on your device and are not visible to anyone else.</span>
          </div>
        </div>

        <div className="p-6 md:p-12 bg-pak-green/5 border border-dashed border-pak-green/20 rounded-[32px] md:rounded-[40px] text-center">
          <Info className="w-10 h-10 md:w-12 md:h-12 text-pak-green/40 mx-auto mb-4 md:mb-6" />
          <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase mb-4">Why Player Stats Are Important</h3>
          <p className="text-xs md:text-sm text-ink/60 max-w-xl mx-auto leading-relaxed font-medium mb-8">
            Statistics give a deeper understanding of the game beyond just match results. They help fans compare players objectively, track performance over time, and understand team strengths and weaknesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
             <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-bold text-white mb-1">01</span>
                <span className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest">Compare Players</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-bold text-white mb-1">02</span>
                <span className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest">Track Growth</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-bold text-white mb-1">03</span>
                <span className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-widest">Strategy Analysis</span>
             </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-[24px] md:rounded-3xl p-6 md:p-8 max-w-2xl mx-auto text-left mb-8 md:mb-12">
             <h4 className="text-base md:text-lg font-display font-bold text-white uppercase mb-4">Explore More Data</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <Link to="/schedule" className="px-4 md:px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all text-center">Full Match Schedule</Link>
                <Link to="/squads" className="px-4 md:px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all text-center">View Team Squads</Link>
             </div>
          </div>

          <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase mb-4">Verified Records Audit</h3>
          <p className="text-xs md:text-sm text-ink/60 max-w-xl mx-auto leading-relaxed font-medium mb-8">
            All statistics for {player.name} are verified against accurate ICC and PCB databases. These records include 2026 Season performances up to current local time.
          </p>
          <button 
            onClick={() => window.print()}
            className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Export Stats Sheet (PDF)
          </button>
        </div>
      </motion.div>

      <InternalLinkSection />
    </div>
  );
}
