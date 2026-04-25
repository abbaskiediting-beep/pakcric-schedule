import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ALL_SQUADS } from '../squadData';
import { PLAYER_STATS } from '../playerData';
import { Trophy, ChevronRight, Search, X, TrendingUp, User, Info, StickyNote, Save, Star, Award, Share2 } from 'lucide-react';
import { MatchFormat, Player } from '../types';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import React from 'react';

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
    
    // Get all player names present in any squad
    const allSquadPlayerNames = Array.from(new Set(ALL_SQUADS.flatMap(s => s.players.map(p => p.name))));
    
    // Filter and map to detailed Player objects from PLAYER_STATS
    return allSquadPlayerNames
      .filter(name => name !== selectedPlayer.name && name.toLowerCase().includes(compSearchTerm.toLowerCase()))
      .map(name => {
        const stats = PLAYER_STATS[name];
        if (stats) return stats;
        
        // Fallback for players without detailed stats yet
        return {
          name,
          role: 'Stats Not Available',
          stats: {
            matches: 0,
            avg: 0,
            sr: 0,
            recentForm: []
          }
        };
      });
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
      <Helmet>
        <title>Pakistan Squad 2026 – Full Team Players List & Updates</title>
        <meta name="description" content="Check the latest Pakistan cricket team squad 2026 with full players list, roles, and updates for upcoming series and matches." />
        <meta name="keywords" content="Pakistan squad 2026, Pakistan players list, cricket team Pakistan, Pakistan cricket team roster, Pakistan team players list" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pakistan Squad 2026 – Full Team Players List & Updates" />
        <meta property="og:description" content="Check the latest Pakistan cricket team squad 2026 with full players list, roles, and updates for upcoming series and matches." />
        <meta property="og:image" content="https://pakcric-schedule.online/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Pakistan Squad 2026 – Full Team Players List & Updates" />
        <meta property="twitter:description" content="Check the latest Pakistan cricket team squad 2026 with full players list, roles, and updates for upcoming series and matches." />
        <meta property="twitter:image" content="https://pakcric-schedule.online/logo.png" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}} />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
          Pakistan Cricket Team <span className="text-pak-green underline decoration-pak-green/20 underline-offset-8">Squad 2026</span>
        </h1>
        
        <div className="max-w-3xl space-y-6 mb-12">
          <p className="text-xl text-ink/80 font-medium leading-relaxed">
            Finding the official <strong>Pakistan Cricket Team Squad 2026</strong> can be challenging, especially when selections change from one series to another. That’s why this page brings everything together in one place.
          </p>
          <p className="text-ink/60 font-medium leading-relaxed">
            Here, you’ll find the latest <strong>Pakistan Squad 2026</strong> player details, roles, and squad updates for upcoming matches and series. Whether you're looking for the official lineup or just want to see who’s been selected, this page makes it simple.
          </p>
        </div>

        {/* Top Banner on Squads */}
        <AdPlaceholder type="leaderboard" className="mb-12" />

        <div className="space-y-8 bg-white/[0.02] border border-card-border rounded-[40px] p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-2 w-12 bg-pak-green rounded-full" />
             <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Interactive Squad Explorer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="SEARCH PLAYER BY NAME..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-card-border rounded-3xl py-5 pl-14 pr-6 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green transition-all shadow-2xl focus:ring-4 focus:ring-pak-green/10"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-pak-green" />
            </div>

            {/* Format Filters */}
            <div className="flex items-center bg-black/20 rounded-3xl p-1.5 border border-white/5">
               {formats.map(f => (
                 <button
                   key={f}
                   onClick={() => setFilterFormat(f)}
                   className={`flex-1 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                     filterFormat === f 
                     ? 'bg-white text-black shadow-xl scale-105' 
                     : 'text-neutral-500 hover:text-white hover:bg-white/5'
                   }`}
                 >
                   {f}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Latest Squad Categorized List Section */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-3">
              Pakistan Latest Squad <span className="text-pak-green">(2026)</span>
            </h2>
            <p className="text-ink/60 font-medium max-w-2xl">
              Below is the most recent Pakistan cricket squad announced for the current or upcoming series. Each squad is updated as soon as official announcements are made.
            </p>
          </div>
          <div className="px-6 py-2 rounded-full bg-pak-green/10 border border-pak-green/20 text-pak-green text-[10px] font-bold uppercase tracking-widest">
            Last Updated: April 2026
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              role: 'Batsmen', 
              players: ['Babar Azam', 'Shan Masood', 'Saud Shakeel', 'Abdullah Fazal', 'Azan Awais', 'Imam-ul-Haq'],
              icon: '🏏',
              desc: 'Top & middle-order anchors'
            },
            { 
              role: 'Bowlers', 
              players: ['Shaheen Shah Afridi', 'Noman Ali', 'Sajid Khan', 'Mohammad Abbas', 'Hasan Ali', 'Khurram Shahzad'],
              icon: '⚡',
              desc: 'Pace attack & spin maestros'
            },
            { 
              role: 'All-rounders', 
              players: ['Salman Ali Agha', 'Amad Butt'],
              icon: '🔄',
              desc: 'Versatile dual-impact players'
            },
            { 
              role: 'Wicketkeepers', 
              players: ['Mohammad Rizwan', 'Muhammad Ghazi Ghori'],
              icon: '🧤',
              desc: 'Reliable behind the stumps'
            }
          ].map((cat, i) => (
            <motion.div 
              key={cat.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-bg border border-card-border rounded-[32px] p-8 hover:border-pak-green/40 transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform block">{cat.icon}</div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-1">{cat.role}</h3>
              <p className="text-[10px] font-bold text-pak-green uppercase tracking-widest mb-6">{cat.desc}</p>
              
              <div className="space-y-3">
                {cat.players.map(p => (
                  <button 
                    key={p} 
                    onClick={() => handlePlayerClick(p)}
                    className="flex items-center justify-between w-full text-left text-[11px] font-bold uppercase tracking-widest text-ink hover:text-white transition-colors py-1 group/item"
                  >
                    {p} <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-pak-green" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Squad Breakdown Section */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/[0.03] border border-card-border rounded-[48px] p-10 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pak-green/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8 leading-tight">
            Team Composition <span className="text-pak-green">& Roles</span>
          </h2>
          <div className="space-y-6 text-ink/70 font-medium leading-relaxed">
            <p>
              A balanced squad is key to success in modern cricket. Pakistan usually selects a mix of experienced players and young talent to maintain stability and aggression.
            </p>
            <p>
              On this page, squads are organized into clear categories to help you quickly understand the team combination for any upcoming series:
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Batsmen', desc: 'Top and middle-order players responsible for scoring runs' },
                { label: 'Bowlers', desc: 'Fast bowlers and spinners who lead the attack' },
                { label: 'All-rounders', desc: 'Players who contribute with both bat and ball' },
                { label: 'Wicketkeepers', desc: 'Players responsible for keeping and finishing innings' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-pak-green shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white mb-1">{item.label}</span>
                    <span className="text-sm font-medium text-ink/50">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative aspect-square bg-pak-green/10 rounded-[60px] flex items-center justify-center border border-pak-green/20 group">
          <div className="absolute inset-8 border border-pak-green/10 rounded-[40px] animate-pulse" />
          <Trophy className="w-32 h-32 text-pak-green opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[12px] font-display font-bold text-pak-green uppercase tracking-[0.5em]">Victory DNA</span>
          </div>
        </div>
      </section>

      {/* Series Wise & Updates Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Series-Wise Squads */}
        <div className="bg-card-bg border border-card-border rounded-[40px] p-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-pak-green transition-all" />
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Pakistan Squad <span className="text-pak-green">per Series</span></h2>
          <div className="space-y-6 text-ink/60 font-medium leading-relaxed">
            <p>
              Pakistan often announces different squads depending on the format and opposition. Whether it's the bounce of Australian pitches or spinning tracks in Sri Lanka, selections vary.
            </p>
            <p>Explore squads for:</p>
            <div className="grid grid-cols-2 gap-3">
              {['Test Series', 'ODI Series', 'T20I Series', 'Major ICC Events'].map(m => (
                <div key={m} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-center hover:border-pak-green/20 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{m}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic pt-4">Each squad is listed separately so you can easily follow changes between series.</p>
          </div>
        </div>

        {/* Squad Updates */}
        <div className="bg-card-bg border border-card-border rounded-[40px] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-2 h-full bg-pak-green transition-all" />
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6">Latest <span className="text-pak-green">Updates</span> & Changes</h2>
          <div className="space-y-6 text-ink/60 font-medium leading-relaxed">
            <p>
              Cricket squads are dynamic — changes can happen due to injuries, form, or strategic shifts. Our team ensures that every shift is documented immediately.
            </p>
            <p>Stay informed about:</p>
            <ul className="space-y-3">
              {['New player call-ups & selections', 'Injury reports & medical replacements', 'Tactical squad rotations', 'Last-minute travel changes'].map((u, i) => (
                <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                  <TrendingUp className="w-3 h-3 text-pak-green" /> {u}
                </li>
              ))}
            </ul>
            <div className="pt-6">
               <div className="bg-pak-green/5 border border-pak-green/10 rounded-2xl p-4 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-pak-green/20 flex items-center justify-center text-pak-green">
                   <Info className="w-5 h-5" />
                 </div>
                 <p className="text-[10px] font-bold text-pak-green/80 uppercase tracking-widest leading-relaxed">
                   Refresh frequently for real-time selection news.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <AdPlaceholder type="banner" />
      </div>

      {/* Main Squad Grid (Existing Component) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredSquads.map((squad, idx) => (
            <React.Fragment key={squad.series}>
              {/* Mid-grid ad placement */}
              {idx > 0 && idx % 2 === 0 && (
                <div className="md:col-span-2">
                  <AdPlaceholder type="native" className="mb-4" />
                </div>
              )}
              <motion.div 
              key={squad.series}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
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
                          {PLAYER_STATS[player.name]?.stats?.recentForm?.slice(0, 5).map((result, i) => (
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
            </React.Fragment>
          ))}
      </div>
      
      {filteredSquads.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-white/5 rounded-[32px] border border-dashed border-card-border mb-24"
        >
          <p className="text-xs font-bold uppercase tracking-[3px] opacity-40">No squads found matching your criteria</p>
        </motion.div>
      )}

      {/* Why This Page is Useful Section */}
      <section className="mb-24">
        <div className="bg-gradient-to-br from-pak-green/10 to-transparent border border-pak-green/20 rounded-[48px] p-10 md:p-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-8">Why Follow Pakistan <span className="text-pak-green">Squad Updates Here</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pak-green/20 flex items-center justify-center text-pak-green">
                <Info className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Accurate & Verified</h4>
              <p className="text-xs text-ink/60 leading-relaxed font-medium">We cross-reference every selection with official PCB announcements and match-day signals.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pak-green/20 flex items-center justify-center text-pak-green">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Easy-to-Read Format</h4>
              <p className="text-xs text-ink/60 leading-relaxed font-medium">No cluttered tables. Players are organized by role and series for instant clarity.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pak-green/20 flex items-center justify-center text-pak-green">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Freshness</h4>
              <p className="text-xs text-ink/60 leading-relaxed font-medium">Our platform signals ensure you get updates within minutes of an announcement.</p>
            </div>
          </div>
          <p className="mt-12 text-center text-sm font-medium text-ink/40 max-w-2xl mx-auto">
            It’s built for fans who want reliable information without unnecessary complexity. One source, total clarity.
          </p>
        </div>
      </section>

      {/* CTA & Quick Links Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">Stay Updated With <span className="text-pak-green">Team Selection</span></h2>
          <p className="text-ink/60 font-medium">Want to stay updated with every squad announcement?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card-bg border border-card-border rounded-3xl p-8 flex flex-col items-center text-center">
            <Trophy className="w-10 h-10 text-pak-green mb-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 italic">Next Game</span>
            <Link to="/match/pakistan-vs-bangladesh-test" className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all w-full">
              View Next Match
            </Link>
          </div>
          <div className="bg-card-bg border border-card-border rounded-3xl p-8 flex flex-col items-center text-center">
            <TrendingUp className="w-10 h-10 text-pak-green mb-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 italic">Official List</span>
            <Link to="/schedule" className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all w-full">
              Pakistan Schedule
            </Link>
          </div>
          <div className="bg-card-bg border border-card-border rounded-3xl p-8 flex flex-col items-center text-center">
            <User className="w-10 h-10 text-pak-green mb-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 italic">Deep Dive</span>
            <Link to="/rankings" className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all w-full">
              ICC Player Rankings
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
           {['Pakistan Schedule', 'Next Match', 'Player Stats', 'Rankings'].map(link => (
             <Link 
               key={link} 
               to={`/${link.toLowerCase().replace(/ /g, '-')}`}
               className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 hover:text-pak-green transition-colors"
             >
               • {link}
             </Link>
           ))}
        </div>
      </section>

      <InternalLinkSection />

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
                          <img src={selectedPlayer.imgUrl} alt={selectedPlayer.name} referrerPolicy="no-referrer" loading="lazy" decoding="async" className="w-full h-full object-contain" />
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
                            <img src={comparisonPlayer.imgUrl} alt={comparisonPlayer.name} referrerPolicy="no-referrer" loading="lazy" decoding="async" className="w-full h-full object-contain opacity-60" />
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
                {/* Modal Internal Ad */}
                <AdPlaceholder type="banner" className="mb-10" />

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
                               <img src={player.imgUrl} alt={player.name} loading="lazy" decoding="async" className="w-full h-full object-contain" />
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

                <div className="p-8 bg-card-bg border-t border-white/5 flex flex-col gap-3">
                  <Link 
                    to={`/player/${selectedPlayer.name.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full py-4 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-pak-green/20 text-center flex items-center justify-center gap-2"
                  >
                    View Full Stats Page <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={closeModal}
                    className="w-full py-4 bg-white/5 text-neutral-500 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/10 hover:text-white transition-all"
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
