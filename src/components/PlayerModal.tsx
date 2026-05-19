import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Trophy, 
  Target, 
  Zap, 
  Activity, 
  TrendingUp, 
  Award, 
  Shield, 
  Calendar,
  User,
  Star,
  Info,
  Edit3,
  Save,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { Player } from '../types';
import ShareButton from './ShareButton';

interface PlayerModalProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ player, isOpen, onClose }) => {
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Load notes if player exists
      if (player) {
        const savedNotes = localStorage.getItem(`player_notes_${player.name.toLowerCase().replace(/\s+/g, '_')}`);
        setNotes(savedNotes || '');
      }
    } else {
      document.body.style.overflow = 'unset';
      setSaveSuccess(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, player]);

  const handleSaveNotes = () => {
    if (!player) return;
    setIsSaving(true);
    
    setTimeout(() => {
      localStorage.setItem(`player_notes_${player.name.toLowerCase().replace(/\s+/g, '_')}`, notes);
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 600);
  };

  if (!player) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Close & Share Buttons */}
            <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
              <ShareButton 
                title={`${player.name} - Pakistan Cricket Stats 2026`}
                text={`Check out ${player.name}'s latest cricket stats and records for the 2026 season!`}
                url={`${window.location.origin}/player/${player.name.toLowerCase().replace(/ /g, '-')}`}
                variant="icon"
                className="!bg-white/5 border border-white/10"
              />
              <button 
                onClick={onClose}
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white/60 hover:text-white transition-all active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Profile Hero Header */}
              <div className="relative p-8 md:p-12 pb-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pak-green/10 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                  {/* Image Container */}
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-4 shrink-0 shadow-2xl overflow-hidden group">
                    {player.imgUrl ? (
                      <img 
                        src={player.imgUrl} 
                        alt={player.name} 
                        className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10">
                        <User className="w-24 h-24" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-6 pt-4">
                    <div className="space-y-2">
                       <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-pak-green/20 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-black uppercase tracking-[3px]">
                        <Star className="w-3 h-3 fill-pak-green" /> {player.role}
                       </span>
                       <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                         {player.name}
                       </h2>
                       <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                         Pakistan National Cricket Team
                       </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                          <p className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Total Runs</p>
                          <p className="text-2xl font-display font-bold text-white tabular-nums">{player.stats.runs || '0'}</p>
                       </div>
                       <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                          <p className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Wickets</p>
                          <p className="text-2xl font-display font-bold text-white tabular-nums">{player.stats.wickets || '0'}</p>
                       </div>
                       <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                          <p className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Average</p>
                          <p className="text-2xl font-display font-bold text-white tabular-nums">{player.stats.avg}</p>
                       </div>
                       <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                          <p className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Formats</p>
                          <p className="text-2xl font-display font-bold text-white">3</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Detailed Stats */}
              <div className="p-8 md:p-12 space-y-12">
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <Activity className="w-6 h-6 text-pak-green" />
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white italic">Format Wise Audit</h3>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(player.stats.formats || {}).map(([format, stats]) => (
                      <div key={format} className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                          <TrendingUp className="w-16 h-16" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-6">{format} Records</h4>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-[10px] uppercase font-bold text-white/40">Matches</span>
                            <span className="text-sm font-bold text-white tabular-nums">{stats.matches}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-[10px] uppercase font-bold text-white/40">Runs</span>
                            <span className="text-sm font-bold text-white tabular-nums">{stats.runs || '—'}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-[10px] uppercase font-bold text-white/40">Wickets</span>
                            <span className="text-sm font-bold text-white tabular-nums">{stats.wickets || '—'}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-[10px] uppercase font-bold text-white/40">Average</span>
                            <span className="text-sm font-bold text-white tabular-nums">{stats.avg}</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                             <span className="text-[10px] uppercase font-bold text-white/40">Highest</span>
                             <span className="text-sm font-bold text-white tabular-nums">{stats.highestScore || stats.bestBowling || '—'}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Achievements */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white italic">Career Milestones</h3>
                    </div>

                    <div className="space-y-4">
                      {player.achievements?.map((achievement, i) => (
                        <div key={i} className="flex gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl group hover:bg-white/[0.04] transition-all">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${achievement.featured ? 'bg-yellow-500/10 text-yellow-500' : 'bg-white/5 text-white/20'}`}>
                            <Award className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-tight">{achievement.title}</h4>
                            <p className="text-xs text-white/40 leading-relaxed font-medium uppercase tracking-tight">{achievement.description}</p>
                          </div>
                        </div>
                      )) || (
                        <div className="p-8 text-center bg-white/[0.02] border border-white/5 rounded-3xl text-white/20 uppercase font-black tracking-widest text-[10px]">
                           No Milestones Recorded Yet
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Recent Form */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <Zap className="w-6 h-6 text-pak-green" />
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white italic">Recent Data Trace</h3>
                    </div>

                    <div className="p-10 bg-gradient-to-br from-pak-green/10 to-transparent border border-pak-green/20 rounded-[40px] relative overflow-hidden">
                       <div className="absolute -bottom-12 -right-12 p-8 opacity-5">
                          <Activity className="w-32 h-32" />
                       </div>
                       
                       <p className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 leading-none">Last 5 Completed Innings</p>
                       <div className="flex items-end justify-between gap-2 h-48 mb-8">
                         {player.stats.recentForm.map((score, i) => {
                           // Simple heuristic for height: map 0-200 to 10-100%
                           const scoreVal = parseInt(score.replace(/\*/g, '')) || 0;
                           const height = Math.min(100, Math.max(10, (scoreVal / 200) * 100));
                           return (
                             <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                               <div className="relative w-full">
                                  <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    className="w-full bg-pak-green/20 border-t-4 border-pak-green rounded-t-xl group-hover/bar:bg-pak-green/40 transition-colors relative"
                                  >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-pak-green text-black text-[10px] font-black px-2 py-1 rounded-lg">
                                      {score}
                                    </div>
                                  </motion.div>
                               </div>
                               <span className="text-[10px] font-bold text-white/20 tabular-nums">I-{5-i}</span>
                             </div>
                           );
                         })}
                       </div>
                       <div className="bg-black/20 p-6 rounded-2xl flex items-center gap-4">
                          <Info className="w-5 h-5 text-pak-green" />
                          <p className="text-[10px] font-bold text-white/40 uppercase leading-relaxed italic">
                            Data represents the most recent performances recorded in domestic and international fixtures for 2026.
                          </p>
                       </div>
                    </div>
                  </section>
                </div>

                {/* Scouting Notes Section */}
                <div className="p-8 md:p-12 pt-0">
                  <section className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                       <Edit3 className="w-64 h-64 text-white" />
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <Edit3 className="w-6 h-6 text-pak-green" />
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white italic">Scouting Notes</h3>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[4px] text-white/30 mb-6 leading-none">Personal Observation & Technical Tracking</p>
                    
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Add strategic notes, technical weaknesses, or personal tracking for this player..."
                      className="w-full h-48 bg-black/40 border border-white/10 rounded-2xl p-6 text-white/70 text-sm font-medium focus:ring-1 focus:ring-pak-green/50 focus:border-pak-green/50 outline-none transition-all placeholder:text-white/10 resize-none custom-scrollbar"
                    />

                    <div className="flex justify-end items-center gap-3 mt-6">
                      <ShareButton 
                        title={`Scouting Notes: ${player.name}`}
                        text={`My Scouting Notes for ${player.name}:\n"${notes.trim()}"\n\nFull stats and records:`}
                        url={`${window.location.origin}/player/${player.name.toLowerCase().replace(/ /g, '-')}`}
                        variant="icon"
                        className={`!p-3 !bg-white/5 border border-white/10 ${!notes.trim() ? 'opacity-30 pointer-events-none' : ''}`}
                      />
                      <button 
                        onClick={handleSaveNotes}
                        disabled={isSaving}
                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50 ${
                          saveSuccess 
                            ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' 
                            : 'bg-pak-green text-black shadow-lg shadow-pak-green/20 hover:scale-105'
                        }`}
                      >
                        {saveSuccess ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" /> Observation Logged
                          </>
                        ) : (
                          <>
                            <Save className={`w-4 h-4 ${isSaving ? 'animate-spin' : ''}`} /> 
                            {isSaving ? 'Logging...' : 'Save Observation'}
                          </>
                        )}
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                 <Shield className="w-5 h-5 text-pak-green" />
                 <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Profile Verified by PakCric Audit Team</p>
              </div>
              <div className="flex items-center gap-3">
                 <button className="px-8 py-3 bg-pak-green text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-pak-green/20 hover:scale-105 active:scale-95 transition-all">
                    Full Career Doc
                 </button>
                 <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/10 transition-all"
                 >
                    Dismiss
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
