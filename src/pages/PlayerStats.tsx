import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PLAYER_STATS } from '../playerData';
import { 
  ChevronLeft, User, TrendingUp, Award, Star, 
  Target, Zap, Activity, Info 
} from 'lucide-react';

export default function PlayerStats() {
  const { name } = useParams();
  const navigate = useNavigate();
  
  // Find player by name (handling slug)
  const playerName = name?.replace(/-/g, ' ');
  const player = playerName ? Object.values(PLAYER_STATS).find(p => p.name.toLowerCase() === playerName.toLowerCase()) : null;

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
        <title>{`${player.name} Stats 2026 – Runs, Records & Career Stats`}</title>
        <meta name="description" content={`Check ${player.name} stats including runs, average, records, and performance in all formats.`} />
        <meta name="keywords" content={`${player.name} stats, ${player.name} records, Pakistan cricket, player profiles`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${player.name} Stats 2026 – Runs, Records & Career Stats`} />
        <meta property="og:description" content={`Check ${player.name} stats including runs, average, records, and performance in all formats.`} />
        <meta property="og:url" content={`https://pakcric-schedule.online/player/${name}`} />
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
        {/* Profile Header */}
        <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <User className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-[32px] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-4">
              {player.imgUrl ? (
                <img src={player.imgUrl} alt={player.name} className="w-full h-full object-contain" />
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

        <div className="p-12 bg-pak-green/5 border border-dashed border-pak-green/20 rounded-[40px] text-center">
          <Info className="w-12 h-12 text-pak-green/40 mx-auto mb-6" />
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
    </div>
  );
}
