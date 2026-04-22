import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_SQUADS } from '../squadData';
import { PLAYER_STATS } from '../playerData';
import { Trophy, ChevronRight, Search, X, TrendingUp, User, Info, StickyNote, Save, Star, Award, Share2 } from 'lucide-react';
import { MatchFormat, Player } from '../types';

function StatCard({ label, value, highlight }: { label: string; value: any; highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-2xl border transition-all ${highlight ? 'bg-white border-white' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
      <p className={`text-[8px] font-bold uppercase tracking-[0.2em] mb-1.5 ${highlight ? 'text-black/60' : 'text-neutral-500'}`}>{label}</p>
      <p className={`text-2xl font-display font-bold tabular-nums ${highlight ? 'text-black' : 'text-white'}`}>{value}</p>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: any }) {
  return (
    <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex flex-col gap-0.5">
      <span className="text-[7px] font-bold text-neutral-500 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-bold text-white tabular-nums tracking-tight">{value}</span>
    </div>
  );
}

export default function Squads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFormat, setFilterFormat] = useState<MatchFormat | 'All'>('All');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [comparisonPlayer, setComparisonPlayer] = useState<Player | null>(null);
  const [isSelectingComparison, setIsSelectingComparison] = useState(false);
  const [compSearchTerm, setCompSearchTerm] = useState('');
  const [activeStatTab, setActiveStatTab] = useState<'overall' | 'test' | 'odi' | 't20i'>('overall');
  const [expandedSeries, setExpandedSeries] = useState<string[]>([]);
  const [playerNotes, setPlayerNotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('pak_player_notes');
    return saved ? JSON.parse(saved) : {};
  });
  const [isSaving, setIsSaving] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);

  const shareNote = (playerName: string) => {
    const note = playerNotes[playerName];
    if (!note) return;
    
    const shareText = `🏏 My Scouting Report for ${playerName}:\n\n"${note}"\n\nAnalyzed at Pakistan Cricket Hub`;
    
    if (navigator.share) {
      navigator.share({
        title: `${playerName} Scouting Note`,
        text: shareText,
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        setShareFeedback(true);
        setTimeout(() => setShareFeedback(false), 2000);
      });
    }
  };

  const saveNote = (playerName: string, note: string) => {
    setIsSaving(true);
    const newNotes = { ...playerNotes, [playerName]: note };
    setPlayerNotes(newNotes);
    localStorage.setItem('pak_player_notes', JSON.stringify(newNotes));
    setTimeout(() => setIsSaving(false), 800);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
    setComparisonPlayer(null);
    setIsSelectingComparison(false);
    setCompSearchTerm('');
  };

  const availableComparisonPlayers = useMemo(() => {
    if (!selectedPlayer) return [];
    const allPlayers = ALL_SQUADS.flatMap(s => s.players);
    // Remove duplicates and the current player
    const uniquePlayers = Array.from(new Map(allPlayers.map(p => [p.name, p])).values());
    return uniquePlayers.filter(p => 
      p.name !== selectedPlayer.name && 
      p.name.toLowerCase().includes(compSearchTerm.toLowerCase())
    );
  }, [selectedPlayer, compSearchTerm]);

  const toggleSeries = (series: string) => {
    setExpandedSeries(prev => 
      prev.includes(series) ? prev.filter(s => s !== series) : [...prev, series]
    );
  };

  const filteredSquads = useMemo(() => {
    return ALL_SQUADS
      .map(squad => ({
        ...squad,
        players: squad.players.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }))
      .filter(squad => {
        const matchesFormat = filterFormat === 'All' || squad.format === filterFormat;
        const hasPlayers = squad.players.length > 0;
        return matchesFormat && hasPlayers;
      });
  }, [searchTerm, filterFormat]);

  const handlePlayerClick = (playerName: string) => {
    const stats = PLAYER_STATS[playerName];
    if (stats) {
      setSelectedPlayer(stats);
      setActiveStatTab('overall');
    } else {
      // Fallback for players without detailed stats yet
      setSelectedPlayer({
        name: playerName,
        role: 'Stats Not Available',
        stats: {
          matches: 0,
          avg: 0,
          sr: 0,
          recentForm: []
        }
      });
    }
  };

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

  const formats: (MatchFormat | 'All')[] = ['All', 'Test', 'ODI', 'T20I'];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}} />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
          Team <span className="text-white">Squads 2026</span>
        </h1>
        <p className="text-ink/60 font-medium mb-8">Player lists for upcoming tours and home series.</p>

        <div className="space-y-8">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <input
              type="text"
              placeholder="SEARCH PLAYER BY NAME..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-card-border rounded-2xl py-5 pl-14 pr-6 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-all shadow-2xl focus:shadow-white/5"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white" />
          </div>

          {/* Format Filters */}
          <div className="flex flex-wrap justify-center gap-3">
             {formats.map(f => (
               <button
                 key={f}
                 onClick={() => setFilterFormat(f)}
                 className={`px-8 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all border-2 ${
                   filterFormat === f 
                   ? 'bg-white border-white text-black shadow-lg shadow-white/20' 
                   : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                 }`}
               >
                 {f}
               </button>
             ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredSquads.map((squad) => (
            <motion.div 
              key={squad.series}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card-bg border border-card-border rounded-[32px] p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-display font-bold uppercase tracking-tight mb-1">{squad.series}</h2>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase border ${
                      squad.format === 'Test' ? 'border-orange-500/30 text-orange-400 bg-orange-500/5' :
                      squad.format === 'ODI' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                      'border-purple-500/30 text-purple-400 bg-purple-500/5'
                    }`}>
                      {squad.format}
                    </span>
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                      {searchTerm ? `${squad.players.length} Matches Found` : `${squad.players.length} Players Selected`}
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex-grow space-y-3">
                 {(searchTerm || expandedSeries.includes(squad.series) ? squad.players : squad.players.slice(0, 8)).map((player, pIdx) => (
                   <button 
                     key={pIdx} 
                     onClick={() => handlePlayerClick(player.name)}
                     className="w-full flex items-center justify-between py-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group/row text-left px-2 rounded-lg"
                   >
                       <div className="flex items-center gap-2">
                         <span className={`text-[11px] font-bold uppercase tracking-tight group-hover/row:text-white transition-colors ${searchTerm && player.name.toLowerCase().includes(searchTerm.toLowerCase()) ? 'text-white' : ''}`}>
                           {player.name}
                         </span>
                         <div className="flex items-center gap-1.5 opacity-40 group-hover/row:opacity-100 transition-opacity">
                           <Info className="w-3 h-3 text-white" />
                           <StickyNote className={`w-3 h-3 ${playerNotes[player.name] ? 'text-green-400' : 'text-white/40'}`} />
                         </div>
                         
                         {/* Form Dots */}
                        <div className="flex gap-1 ml-2">
                          {PLAYER_STATS[player.name]?.stats.recentForm.slice(0, 5).map((result, i) => (
                            <div 
                              key={i} 
                              className={`w-1.5 h-1.5 rounded-full border border-black/20 shadow-sm ${getFormColor(result, PLAYER_STATS[player.name]?.role || 'Batter')}`}
                              title={result}
                            />
                          ))}
                        </div>
                      </div>
                      {player.description && (
                        <span className="text-[8px] font-bold bg-white/5 text-white px-2 py-0.5 rounded uppercase">{player.description}</span>
                      )}
                   </button>
                 ))}
                 {!searchTerm && !expandedSeries.includes(squad.series) && squad.players.length > 8 && (
                   <p className="text-[9px] font-bold text-neutral-500 uppercase pt-2 px-2">And {squad.players.length - 8} more players...</p>
                 )}
              </div>

              {squad.players.length > 8 && !searchTerm && (
                <button 
                  onClick={() => toggleSeries(squad.series)}
                  className="mt-8 w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  {expandedSeries.includes(squad.series) ? 'Show Less' : 'View Full Squad'} <ChevronRight className={`w-4 h-4 transition-transform ${expandedSeries.includes(squad.series) ? 'rotate-90' : ''}`} />
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredSquads.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-white/5 rounded-[32px] border border-dashed border-card-border"
        >
          <p className="text-xs font-bold uppercase tracking-[3px] opacity-40">No squads found matching your criteria</p>
        </motion.div>
      )}

      {/* Player Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlayer(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
              <div className="relative w-full max-w-4xl bg-card-bg border border-card-border rounded-[40px] overflow-hidden max-h-[90vh] flex flex-col"
              >
              <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-card-bg/50 backdrop-blur-md sticky top-0 z-20">
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center relative z-10">
                        {selectedPlayer.imgUrl ? (
                          <img src={selectedPlayer.imgUrl} alt={selectedPlayer.name} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                        ) : (
                          <User className="w-8 h-8 text-white opacity-50" />
                        )}
                      </div>
                      {comparisonPlayer && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center relative z-0"
                        >
                          {comparisonPlayer.imgUrl ? (
                            <img src={comparisonPlayer.imgUrl} alt={comparisonPlayer.name} referrerPolicy="no-referrer" className="w-full h-full object-contain opacity-60" />
                          ) : (
                            <User className="w-8 h-8 text-white opacity-50" />
                          )}
                        </motion.div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white">
                        {comparisonPlayer ? `${selectedPlayer.name} vs ${comparisonPlayer.name}` : selectedPlayer.name}
                      </h3>
                      <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">{selectedPlayer.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {!comparisonPlayer && !isSelectingComparison && (
                      <button 
                        onClick={() => setIsSelectingComparison(true)}
                        className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-pak-green text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-pak-green/20"
                      >
                        <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4" /> 
                        <span className="hidden xs:inline">Compare</span>
                      </button>
                    )}
                    {comparisonPlayer && (
                       <button 
                        onClick={() => setComparisonPlayer(null)}
                        className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/5"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">Reset</span>
                      </button>
                    )}
                    <button 
                      onClick={closeModal}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
              </div>

              <div className="overflow-y-auto p-8 md:p-10 custom-scrollbar">
                {isSelectingComparison ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-display font-bold text-white uppercase italic">Select Player to Compare</h4>
                      <button 
                        onClick={() => setIsSelectingComparison(false)}
                        className="text-[10px] font-bold text-neutral-500 uppercase hover:text-white transition-colors"
                      >
                        Back
                      </button>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input 
                        type="text"
                        placeholder="Search another player..."
                        value={compSearchTerm}
                        onChange={(e) => setCompSearchTerm(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green/50 transition-all"
                        autoFocus
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {availableComparisonPlayers.map((player) => (
                        <button
                          key={player.name}
                          onClick={() => {
                            setComparisonPlayer(player);
                            setIsSelectingComparison(false);
                          }}
                          className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all text-left group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                             {player.imgUrl ? (
                               <img src={player.imgUrl} alt={player.name} className="w-full h-full object-contain" />
                             ) : (
                               <User className="w-6 h-6 opacity-30" />
                             )}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-tight">{player.name}</p>
                            <p className="text-[8px] font-bold text-neutral-500 uppercase group-hover:text-black/60">{player.role}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : selectedPlayer.stats.matches > 0 ? (
                  <div className="space-y-12">
                    {/* Comparison Header Mobile */}
                    {!comparisonPlayer && (
                      <button 
                        onClick={() => setIsSelectingComparison(true)}
                        className="md:hidden w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-pak-green text-white text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all mb-8"
                      >
                        <TrendingUp className="w-4 h-4" /> Compare with another player
                      </button>
                    )}

                    {/* Format Tabs */}
                    <div className="flex gap-2 mb-8 bg-white/5 p-1.5 rounded-2xl border border-white/5">
                      {['overall', 'test', 'odi', 't20i'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveStatTab(tab as any)}
                          className={`flex-1 py-2.5 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all ${
                            activeStatTab === tab 
                            ? 'bg-white text-black shadow-lg shadow-white/10' 
                            : 'text-neutral-500 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Overall Stats */}
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-grow bg-white/5" />
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                          {activeStatTab === 'overall' ? 'Career Summary' : `${activeStatTab.toUpperCase()} Records`}
                        </h4>
                        <div className="h-px flex-grow bg-white/5" />
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {(() => {
                          const getFormatData = (player: any, tab: string) => {
                            if (tab === 'overall') return player.stats;
                            return player.stats.formats?.[tab];
                          };

                          const currentStats1 = getFormatData(selectedPlayer, activeStatTab);
                          const currentStats2 = comparisonPlayer ? getFormatData(comparisonPlayer, activeStatTab) : null;

                          if (!currentStats1 && !currentStats2) {
                            return (
                              <div className="py-12 text-center border border-dashed border-white/5 rounded-2xl opacity-40">
                                <p className="text-[9px] font-bold uppercase tracking-widest italic">No {activeStatTab} data available</p>
                              </div>
                            );
                          }

                          const statConfig = activeStatTab === 'overall' ? [
                            { label: 'Matches', key: 'matches' },
                            { label: 'Avg', key: 'avg' },
                            { label: 'S/R', key: 'sr' },
                            { label: 'Runs', key: 'runs' },
                            { label: 'Wkts', key: 'wickets' },
                            { label: 'H.S', key: 'highestScore' },
                            { label: 'Best', key: 'bestBowling' },
                          ] : [
                            { label: 'Matches', key: 'matches' },
                            { label: 'Innings', key: 'innings' },
                            { label: 'Runs', key: 'runs' },
                            { label: 'Avg', key: 'avg' },
                            { label: 'S/R', key: 'sr' },
                            { label: 'H.S', key: 'highestScore' },
                            { label: 'Centuries', key: 'centuries' },
                            { label: 'Fifties', key: 'fifties' },
                            { label: 'Wickets', key: 'wickets' },
                            { label: 'Best', key: 'bestBowling' },
                          ];

                          return statConfig.map((stat) => {
                            const val1 = currentStats1?.[stat.key];
                            const val2 = currentStats2?.[stat.key];
                            
                            if (val1 === undefined && val2 === undefined) return null;

                            const isNumeric1 = val1 !== undefined && !isNaN(parseFloat(val1));
                            const isNumeric2 = val2 !== undefined && val2 !== null && !isNaN(parseFloat(val2));
                            const better1 = isNumeric1 && isNumeric2 && parseFloat(val1) > parseFloat(val2);
                            const better2 = isNumeric1 && isNumeric2 && parseFloat(val2) > parseFloat(val1);

                            return (
                              <div key={stat.key} className="group/stat">
                                <div className="flex justify-between items-center p-4 rounded-2xl border border-white/5 bg-white/5 transition-all hover:bg-white/[0.08] hover:border-white/10">
                                  <div className="w-[35%]">
                                    <p className={`text-xl md:text-2xl font-display font-bold tabular-nums transition-colors ${better1 ? 'text-pak-green' : 'text-white'}`}>
                                      {val1 ?? '—'}
                                    </p>
                                    <p className="text-[7px] font-bold text-neutral-600 uppercase truncate">{selectedPlayer.name}</p>
                                  </div>
                                  
                                  <div className="w-[30%] text-center px-2">
                                    <div className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em] group-hover/stat:text-white transition-colors">
                                      {stat.label}
                                    </div>
                                    {comparisonPlayer && (
                                      <div className="flex justify-center gap-1 mt-1.5">
                                        <div className={`h-0.5 flex-1 rounded-full ${better1 ? 'bg-pak-green' : 'bg-white/10'}`} />
                                        <div className={`h-0.5 flex-1 rounded-full ${better2 ? 'bg-pak-green' : 'bg-white/10'}`} />
                                      </div>
                                    )}
                                  </div>

                                  <div className="w-[35%] text-right">
                                    {comparisonPlayer ? (
                                       <>
                                        <p className={`text-xl md:text-2xl font-display font-bold tabular-nums transition-colors ${better2 ? 'text-pak-green' : 'text-white'}`}>
                                          {val2 ?? '—'}
                                        </p>
                                        <p className="text-[7px] font-bold text-neutral-600 uppercase truncate">{comparisonPlayer.name}</p>
                                       </>
                                    ) : (
                                       <div className="h-10 flex items-center justify-end opacity-10">
                                          <div className="w-8 h-px bg-white" />
                                       </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </section>

                    {/* Recent Form Comparison */}
                    <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8">
                       <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-4 h-4 text-pak-green" />
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Form Trajectory</h4>
                          </div>
                          <p className="text-[8px] font-bold text-neutral-700 uppercase tracking-widest">Last 5 Matches</p>
                       </div>
                       
                       <div className="space-y-10">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-bold text-white uppercase tracking-tight">{selectedPlayer.name}</span>
                              <div className="flex gap-1.5">
                                {selectedPlayer.stats.recentForm.map((score, i) => (
                                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${getFormColor(score, selectedPlayer.role)}`} />
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              {selectedPlayer.stats.recentForm.map((score, i) => (
                                <div 
                                  key={i} 
                                  className={`flex-1 p-2 rounded-xl text-center border transition-all hover:scale-105 active:scale-95 ${getFormColor(score, selectedPlayer.role)}/10 border-${getFormColor(score, selectedPlayer.role).replace('bg-', '')}/30`}
                                >
                                  <p className={`text-[10px] font-display font-bold tabular-nums ${getFormColor(score, selectedPlayer.role).replace('bg-', 'text-')}`}>
                                    {score}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {comparisonPlayer && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }} 
                              animate={{ opacity: 1, y: 0 }} 
                              className="flex flex-col gap-4 border-t border-white/5 pt-8"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[9px] font-bold text-white uppercase tracking-tight">{comparisonPlayer.name}</span>
                                <div className="flex gap-1.5">
                                  {comparisonPlayer.stats.recentForm.map((score, i) => (
                                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${getFormColor(score, comparisonPlayer.role)}`} />
                                  ))}
                                </div>
                              </div>
                              <div className="flex gap-2">
                                {comparisonPlayer.stats.recentForm.map((score, i) => (
                                  <div 
                                    key={i} 
                                    className={`flex-1 p-2 rounded-xl text-center border transition-all hover:scale-105 active:scale-95 ${getFormColor(score, comparisonPlayer.role)}/10 border-${getFormColor(score, comparisonPlayer.role).replace('bg-', '')}/30`}
                                  >
                                    <p className={`text-[10px] font-display font-bold tabular-nums ${getFormColor(score, comparisonPlayer.role).replace('bg-', 'text-')}`}>
                                      {score}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                       </div>
                    </section>

                    {/* Achievements & Milestones */}
                    {selectedPlayer.achievements && selectedPlayer.achievements.length > 0 && (
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-px flex-grow bg-white/5" />
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Achievements & Milestones</h4>
                          <div className="h-px flex-grow bg-white/5" />
                        </div>
                        
                        <div className="space-y-4">
                          {selectedPlayer.achievements.map((achievement, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`p-5 rounded-[24px] border border-white/5 flex items-start gap-4 transition-all hover:bg-white/5 ${achievement.featured ? 'bg-gradient-to-r from-pak-green/10 to-transparent border-pak-green/20' : 'bg-white/[0.02]'}`}
                            >
                              <div className={`mt-1 p-2 rounded-xl ${achievement.featured ? 'bg-pak-green/20 text-pak-green' : 'bg-white/5 text-white/40'}`}>
                                {achievement.featured ? <Star className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                              </div>
                              <div>
                                <h5 className={`text-xs font-bold uppercase tracking-tight mb-1 ${achievement.featured ? 'text-white' : 'text-white/80'}`}>
                                  {achievement.title}
                                </h5>
                                <p className="text-[10px] text-ink/60 font-medium leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Personal Notes */}
                    <section className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <StickyNote className="w-4 h-4 text-white" />
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Scouting Notes</h4>
                          </div>
                          <div className="flex items-center gap-3">
                            {playerNotes[selectedPlayer.name] && (
                              <button 
                                onClick={() => shareNote(selectedPlayer.name)}
                                className="px-3 py-1.5 rounded-lg bg-pak-green/10 hover:bg-pak-green text-pak-green hover:text-white border border-pak-green/20 transition-all flex items-center gap-2 group"
                                title="Share your scout results"
                              >
                                <Share2 className="w-3.5 h-3.5" />
                                <span className="text-[9px] font-bold uppercase tracking-widest">
                                  {shareFeedback ? 'Copied' : 'Share Report'}
                                </span>
                              </button>
                            )}
                            {isSaving && (
                              <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[8px] font-bold text-green-400 uppercase"
                              >
                                Saving...
                              </motion.span>
                            )}
                          </div>
                       </div>
                       
                       <textarea 
                         value={playerNotes[selectedPlayer.name] || ''}
                         onChange={(e) => saveNote(selectedPlayer.name, e.target.value)}
                         placeholder="Add personal notes, tactical observations, or scouting data for this player..."
                         className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 text-xs text-white/80 placeholder:text-neutral-700 focus:outline-none focus:border-white/20 transition-all min-h-[120px] resize-none font-sans leading-relaxed"
                       />

                       <div className="mt-3 flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-neutral-600">
                          <p>• Notes are saved locally to your browser</p>
                          <p>• Only you can see these unless shared</p>
                       </div>
                       
                       {!playerNotes[selectedPlayer.name] && (
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
                            <StickyNote className="w-24 h-24 text-white" />
                         </div>
                       )}
                    </section>
                  </div>
                ) : (
                  <div className="py-20 text-center bg-white/[0.02] rounded-[32px] border border-dashed border-white/10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-600 mb-2">Data Pending</p>
                    <p className="text-[10px] text-neutral-700 uppercase font-bold max-w-[240px] mx-auto leading-relaxed">Full career records are currently being audited.</p>
                  </div>
                )}
              </div>

                <div className="p-8 bg-card-bg border-t border-white/5">
                  <button 
                    onClick={closeModal}
                    className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/10"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
