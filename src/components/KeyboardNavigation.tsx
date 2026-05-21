import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Keyboard, 
  Home, 
  Calendar, 
  Newspaper, 
  Trophy, 
  Users, 
  MapPin, 
  X, 
  Sparkles,
  Command,
  ArrowRight
} from 'lucide-react';

interface Shortcut {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  description: string;
}

export default function KeyboardNavigation() {
  const navigate = useNavigate();
  const [activeToast, setActiveToast] = useState<{ key: string; label: string } | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const shortcuts: Shortcut[] = [
    { key: 'h', label: 'Home', path: '/', icon: <Home className="w-4 h-4 text-pak-green" />, description: 'Return to the home dashboard' },
    { key: 's', label: 'Schedule', path: '/schedule', icon: <Calendar className="w-4 h-4 text-amber-400" />, description: 'View matches & upcoming fixtures' },
    { key: 'n', label: 'News', path: '/news', icon: <Newspaper className="w-4 h-4 text-blue-400" />, description: 'Read latest cricket reports & blogs' },
    { key: 'r', label: 'Rankings', path: '/rankings', icon: <Trophy className="w-4 h-4 text-yellow-400" />, description: 'Check ICC player and team rankings' },
    { key: 'k', label: 'Squads', path: '/squads', icon: <Users className="w-4 h-4 text-emerald-400" />, description: 'Explore player squad selections' },
    { key: 'v', label: 'Venues', path: '/venues', icon: <MapPin className="w-4 h-4 text-purple-400" />, description: 'Learn about stadiums and match venues' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape closes the active help modal
      if (e.key === 'Escape') {
        setShowHelp(false);
        return;
      }

      // Ignore if user is writing in forms or textfields
      const activeElement = document.activeElement as HTMLElement | null;
      if (activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable
      )) {
        return;
      }

      // Avoid interference with browser default shortcuts (like ctrl+s, cmd+r, etc)
      if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }

      const keyLower = e.key.toLowerCase();

      // Help menu toggle
      if (e.key === '?') {
        e.preventDefault();
        setShowHelp(prev => !prev);
        return;
      }

      // Match navigation shortcut
      const match = shortcuts.find(s => s.key === keyLower);
      if (match) {
        e.preventDefault();
        navigate(match.path);
        
        // Show success action toast
        setActiveToast({ key: match.key.toUpperCase(), label: match.label });
        setShowHelp(false); // Auto close help when navigating
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Handle toast timeout
  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => {
        setActiveToast(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  return (
    <>
      {/* Floating Shortcut Help Hint Button (Sleek pill on desktop corner) */}
      <div className="fixed bottom-6 right-6 z-[45] hidden sm:block">
        <button
          onClick={() => setShowHelp(true)}
          className="flex items-center gap-2 px-3.5 py-2 bg-neutral-900/80 border border-white/10 hover:border-pak-green/45 text-white/70 hover:text-white rounded-full text-[10px] font-black uppercase tracking-wider transition-all shadow-xl hover:shadow-pak-green/5 backdrop-blur-md group"
          title="Keyboard shortcuts map"
          id="keyboard-shortcuts-trigger"
        >
          <Keyboard className="w-3.5 h-3.5 text-pak-green group-hover:scale-110 transition-transform" />
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 bg-neutral-800 text-white text-[9px] font-mono border-b border-neutral-600 rounded font-bold shadow-sm leading-none">?</kbd>
          <span>for Shortcuts</span>
        </button>
      </div>

      <AnimatePresence>
        {/* Shortcut Activated Toast */}
        {activeToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-28 md:bottom-10 left-1/2 -translate-x-1/2 z-[110] pointer-events-none"
          >
            <div className="flex items-center gap-3.5 px-6 py-4 bg-black/90 border border-pak-green/30 text-white rounded-[20px] shadow-2xl backdrop-blur-xl">
              <span className="flex items-center justify-center w-7 h-7 font-mono font-black text-xs bg-pak-green/20 text-pak-green border-b border-pak-green/35 rounded-lg shadow-sm">
                {activeToast.key}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[2px] text-white/50">Navigated to</span>
                <span className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-1.5">
                  {activeToast.label} <ArrowRight className="w-3 h-3 text-pak-green" />
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Keyboard Shortcuts Help Dialog Overlay */}
        {showHelp && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHelp(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-[#111] border border-white/10 w-full max-w-lg rounded-[32px] overflow-hidden flex flex-col relative z-10 shadow-3xl"
              id="keyboard-shortcuts-modal"
            >
              {/* Header */}
              <div className="p-6 md:p-8 bg-gradient-to-b from-neutral-900 to-transparent border-b border-white/5 relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pak-green/10 border border-pak-green/20 flex items-center justify-center text-pak-green">
                  <Command className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-black text-white uppercase tracking-tight leading-none mb-1.5 flex items-center gap-2">
                    Keyboard Shortcuts <Sparkles className="w-4.5 h-4.5 text-pak-green" />
                  </h2>
                  <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">
                    Quick navigation for power users
                  </p>
                </div>

                <button
                  onClick={() => setShowHelp(false)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close shortcuts help"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Shortcuts List */}
              <div className="p-6 md:p-8 space-y-3">
                {shortcuts.map((shortcut) => (
                  <button
                    key={shortcut.key}
                    onClick={() => {
                      navigate(shortcut.path);
                      setActiveToast({ key: shortcut.key.toUpperCase(), label: shortcut.label });
                      setShowHelp(false);
                    }}
                    className="w-full text-left p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pak-green/20 hover:bg-white/[0.04] transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-black/40 flex items-center justify-center border border-white/5 group-hover:bg-black/60 transition-colors">
                        {shortcut.icon}
                      </div>
                      <div>
                        <span className="block text-xs font-black text-white uppercase tracking-wider">{shortcut.label}</span>
                        <span className="block text-[10px] font-bold text-ink/50 mt-0.5">{shortcut.description}</span>
                      </div>
                    </div>
                    {/* Visual Keycap */}
                    <span className="flex items-center justify-center w-8 h-8 font-mono font-black text-xs bg-neutral-900 text-white border-b-2 border-neutral-700 rounded-lg shadow-md group-hover:scale-105 group-hover:border-pak-green/50 transition-all select-none">
                      {shortcut.key.toUpperCase()}
                    </span>
                  </button>
                ))}

                <button
                  onClick={() => setShowHelp(false)}
                  className="w-full text-left p-3 rounded-2xl bg-white/[0.01] border border-dashed border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-neutral-950/40 flex items-center justify-center text-ink/40 font-bold text-xs">
                      ESC
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-ink/40 uppercase tracking-wider">Close Shortcuts Dashboard</span>
                      <span className="block text-[10px] font-semibold text-ink/30 mt-0.5">Exit this overlays dialog</span>
                    </div>
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 font-mono font-black text-[10px] bg-neutral-950 text-ink/50 border-b-2 border-neutral-800 rounded-lg shadow-inner">
                    ESC
                  </span>
                </button>
              </div>

              {/* Footer info banner */}
              <div className="p-5 bg-gradient-to-t from-black to-transparent border-t border-white/5 flex items-center justify-center text-center">
                <p className="text-[10px] text-ink/40 font-semibold uppercase tracking-wider">
                  Press <span className="text-white font-bold">ANY</span> shortcut key at any time to navigate instantly.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
