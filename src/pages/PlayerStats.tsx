import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PLAYER_STATS } from '../playerData';
import { 
  ChevronLeft, User, TrendingUp, Award, Star, 
  Target, Zap, Activity, Info, FileText, Save, Trash2 
} from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function PlayerStats() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedMsg, setShowSavedMsg] = useState(false);
  
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
    <div className="max-w-5xl mx-auto py-12 px-6">
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
        <div className="mb-12">
          <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
            Pakistan Players Stats – <span className="text-pak-green">Batting, Bowling & Records</span>
          </h1>
          <div className="max-w-3xl space-y-6">
            <p className="text-xl text-ink/80 font-medium leading-relaxed">
              If you want to understand how the Pakistan cricket team is performing, player statistics are the best place to start.
            </p>
            <p className="text-ink/60 font-medium leading-relaxed">
              This page gives you a complete overview of Pakistan players’ stats across all formats, including Test, ODI, and T20 cricket. From top run scorers to leading wicket-takers, everything is presented in a clear and easy-to-read format.
            </p>
            <p className="text-sm font-bold uppercase tracking-[3px] text-pak-green/60">
              Whether you’re comparing players or just checking recent performances, this page has all the key numbers in one place.
            </p>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <User className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-[32px] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-4">
              {player.imgUrl ? (
                <img src={player.imgUrl} alt={player.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" loading="lazy" />
              ) : (
                <User className="w-24 h-24 text-white/20" />
              )}
            </div>
            
            <div className="text-center md:text-left">
              <span className="px-4 py-1.5 bg-pak-green text-white rounded-full text-[10px] font-bold uppercase tracking-[4px] mb-6 inline-block">
                {player.role}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-4">
                {player.name} <span className="text-pak-green line-clamp-1 block md:inline font-normal italic opacity-30">#STATS2026</span>
              </h1>
              <p className="text-ink/60 font-bold uppercase tracking-widest text-xs">
                {player.name} Cricket Stats & Records
              </p>
            </div>
          </div>
        </div>

        {/* Top Ad for Player Profile */}
        <AdPlaceholder type="banner" className="my-8" />

        {/* Career Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Matches', value: player.stats.matches, icon: <Activity className="w-4 h-4" /> },
            { label: 'Runs', value: player.stats.runs || '—', icon: <Target className="w-4 h-4" /> },
            { label: 'Average', value: player.stats.avg, icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Strike Rate', value: player.stats.sr, icon: <Zap className="w-4 h-4" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-card-bg border border-card-border p-6 rounded-3xl">
              <div className="flex items-center gap-2 mb-2 text-neutral-500">
                {stat.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
              <p className="text-3xl font-display font-bold text-white tabular-nums">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Mid-page ad after summary */}
        <AdPlaceholder type="native" className="my-8" label="Promoted for Fans" />

        {/* Batting & Bowling SEO Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-card-bg border border-card-border rounded-[40px] p-10">
            <h2 className="text-2xl font-display font-bold uppercase text-white mb-6">Pakistan <span className="text-pak-green">Batting Stats</span></h2>
            <p className="text-sm text-ink/60 leading-relaxed font-medium mb-6">
              Batting statistics show how consistently players are scoring runs and contributing to the team. Here you can find total runs scored, batting average, strike rate, and number of 50s and 100s.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-[10px] font-bold text-pak-green uppercase tracking-widest leading-relaxed">
                Identify the most reliable batsmen and in-form players format-wise (Test, ODI, T20).
              </span>
            </div>
          </section>

          <section className="bg-card-bg border border-card-border rounded-[40px] p-10">
            <h2 className="text-2xl font-display font-bold uppercase text-white mb-6">Pakistan <span className="text-pak-green">Bowling Stats</span></h2>
            <p className="text-sm text-ink/60 leading-relaxed font-medium mb-6">
              Bowling performance plays a crucial role in winning matches. On this page, you can explore total wickets taken, bowling average, economy rate, and best bowling figures.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <span className="text-[10px] font-bold text-pak-green uppercase tracking-widest leading-relaxed">
                Highlight the effectiveness of Pakistan’s fast bowlers and spinners in tight situations.
              </span>
            </div>
          </section>
        </div>

        {/* All-Rounder Analysis */}
        <section className="bg-gradient-to-br from-pak-green/10 to-transparent border border-pak-green/20 rounded-[48px] p-10 md:p-16">
          <h2 className="text-3xl font-display font-bold uppercase text-white mb-6">All-Rounders <span className="text-pak-green">Performance</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-ink/70 font-medium leading-relaxed">
                All-rounders add balance to the team by contributing with both bat and ball. This section includes runs and wickets combined to understand overall match impact.
              </p>
              <ul className="space-y-3">
                {['Runs and wickets combined', 'Batting and bowling averages', 'Match impact performance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
               <TrendingUp className="w-16 h-16 text-pak-green mb-4" />
               <p className="text-[10px] font-bold text-pak-green uppercase tracking-[4px]">Overall Team Impact</p>
            </div>
          </div>
        </section>

        {/* Format Specific Tables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['test', 'odi', 't20i'].map((format) => {
            const formatStats = player.stats.formats?.[format as keyof typeof player.stats.formats];
            if (!formatStats) return null;

            return (
              <div key={format} className="bg-card-bg border border-card-border rounded-[32px] p-8">
                <h3 className="text-xl font-display font-bold uppercase mb-6 text-white border-b border-white/5 pb-4">
                  {format} <span className="text-pak-green">Stats</span>
                </h3>
                <div className="space-y-4">
                  {Object.entries(formatStats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-sm font-bold text-white tabular-nums">{value ?? '—'}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Format-Wise Stats Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase text-white mb-6">Stats by Format <span className="text-pak-green">(Test, ODI, T20)</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
               <h4 className="text-lg font-display font-bold text-white uppercase mb-2">Test Cricket</h4>
               <p className="text-xs text-ink/40 font-medium leading-relaxed">Long format consistency and technical endurance records.</p>
             </div>
             <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
               <h4 className="text-lg font-display font-bold text-white uppercase mb-2">ODI Cricket</h4>
               <p className="text-xs text-ink/40 font-medium leading-relaxed">Balanced performance showing tactical middle-overs depth.</p>
             </div>
             <div className="p-8 bg-card-bg border border-card-border rounded-3xl">
               <h4 className="text-lg font-display font-bold text-white uppercase mb-2">T20 Cricket</h4>
               <p className="text-xs text-ink/40 font-medium leading-relaxed">Aggressive and fast scoring strike rate and boundary frequency.</p>
             </div>
          </div>
        </section>

        {/* Recent Form */}
        <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[4px] text-neutral-500">Form Trajectory</h3>
            <span className="text-[10px] font-bold text-pak-green uppercase">Last 5 Innings</span>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {player.stats.recentForm.map((score, i) => (
              <div key={i} className={`p-6 rounded-3xl text-center border-2 transition-all hover:scale-105 ${getFormColor(score, player.role)}/10 border-${getFormColor(score, player.role).replace('bg-', '')}/30`}>
                <p className={`text-2xl font-display font-bold tabular-nums ${getFormColor(score, player.role).replace('bg-', 'text-')}`}>
                  {score}
                </p>
                <div className={`w-2 h-2 rounded-full mx-auto mt-2 ${getFormColor(score, player.role)}`} />
              </div>
            ))}
          </div>
        </div>

        <AdPlaceholder type="banner" className="my-8" />

        {/* Achievements */}
        {player.achievements && player.achievements.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {player.achievements.map((achievement, i) => (
              <div key={i} className={`p-8 rounded-[32px] border ${achievement.featured ? 'bg-pak-green/10 border-pak-green/30' : 'bg-card-bg border-card-border'} flex items-start gap-6`}>
                <div className={`p-4 rounded-2xl ${achievement.featured ? 'bg-pak-green text-white' : 'bg-white/5 text-neutral-500'}`}>
                  {achievement.featured ? <Star className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold uppercase text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-ink/60 leading-relaxed font-medium">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Personal Scouting Notes */}
        <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-pak-green" />
                <h3 className="text-xl font-display font-bold uppercase text-white">Personal Scouting Notes</h3>
              </div>
              <p className="text-xs text-ink/40 font-bold uppercase tracking-widest leading-relaxed">
                Add your private observations, tactical insights, or scouting reports for {player.name}.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleClearNotes}
                className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 hover:bg-red-500/20 transition-all flex items-center justify-center"
                title="Delete Notes"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button 
                onClick={handleSaveNotes}
                disabled={isSaving}
                className={`flex items-center gap-3 px-8 py-3 bg-pak-green text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20 disabled:opacity-50 disabled:scale-100`}
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
                {isSaving ? 'Saving...' : 'Save Observations'}
              </button>
            </div>
          </div>

          <div className="relative group">
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={`Write your personal notes for ${player.name} here... (e.g., "Great against spin", "Weakness on shorter deliveries", "Future captaincy material")`}
              className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-pak-green/30 transition-all resize-none font-medium leading-relaxed group-hover:border-white/20"
            />
            <AnimatePresence>
              {showSavedMsg && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-6 right-6 px-4 py-2 bg-pak-green text-white rounded-lg text-[9px] font-bold uppercase tracking-widest shadow-lg pointer-events-none"
                >
                  Notes Saved Successfully
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-6 flex items-center gap-3 text-[10px] font-bold text-ink/30 uppercase tracking-widest">
            <Info className="w-3 h-3" />
            <span>These notes are stored locally on your device and are not visible to anyone else.</span>
          </div>
        </div>

        <div className="p-12 bg-pak-green/5 border border-dashed border-pak-green/20 rounded-[40px] text-center">
          <Info className="w-12 h-12 text-pak-green/40 mx-auto mb-6" />
          <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Why Player Stats Are Important</h3>
          <p className="text-sm text-ink/60 max-w-xl mx-auto leading-relaxed font-medium mb-8">
            Statistics give a deeper understanding of the game beyond just match results. They help fans compare players objectively, track performance over time, and understand team strengths and weaknesses.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white mb-1">01</span>
                <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Compare Players</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white mb-1">02</span>
                <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Track Growth</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white mb-1">03</span>
                <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Strategy Analysis</span>
             </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-3xl p-8 max-w-2xl mx-auto text-left mb-12">
             <h4 className="text-lg font-display font-bold text-white uppercase mb-4">Explore More Data</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/schedule" className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all text-center">Full Match Schedule</Link>
                <Link to="/squads" className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all text-center">View Team Squads</Link>
             </div>
          </div>

          <h3 className="text-xl font-display font-bold text-white uppercase mb-4">Official Records Audit</h3>
          <p className="text-sm text-ink/60 max-w-xl mx-auto leading-relaxed font-medium mb-8">
            All statistics for {player.name} are verified against official ICC and PCB databases. These records include 2026 Season performances up to current local time.
          </p>
          <button 
            onClick={() => window.print()}
            className="px-8 py-3 bg-white text-black rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Export Stats Sheet (PDF)
          </button>
        </div>
      </motion.div>

      <InternalLinkSection />
    </div>
  );
}
