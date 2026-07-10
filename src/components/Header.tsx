import { Trophy, Bell, BellRing, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

interface HeaderProps {
  onOpenNotifications?: () => void;
}

export default function Header({ onOpenNotifications }: HeaderProps) {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
      const dismissed = sessionStorage.getItem('notifications_prompt_dismissed') || localStorage.getItem('notifications_prompt_dismissed');
      if (Notification.permission === 'default' && !dismissed) {
        // Small delay to make it feel natural
        const timer = setTimeout(() => {
          setShowPrompt(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleRequestPermission = async () => {
    if ('Notification' in window) {
      try {
        const result = await Notification.requestPermission();
        setPermission(result);
        setShowPrompt(false);
        if (result === 'granted') {
          // Trigger custom event to sync with other components
          window.dispatchEvent(new CustomEvent('match_reminders_changed'));
          try {
            new Notification("🏏 PakCric Reminders Active!", {
              body: "Awesome! We will ping you 30 minutes before any scheduled match starts.",
              icon: "https://flagcdn.com/pk.svg"
            });
          } catch (e) {
            console.log("Notification displayed");
          }
        }
      } catch (err) {
        console.warn("Permission request failed", err);
      }
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('notifications_prompt_dismissed', 'true');
    setShowPrompt(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-md text-ink border-b border-card-border">
      {/* 🔔 Dismissible Notification Alert Banner */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="overflow-hidden bg-gradient-to-r from-pak-green/20 via-[#0e1610] to-pak-green/20 border-b border-pak-green/20"
          >
            <div className="container mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
              <div className="flex items-center gap-3 text-center md:text-left">
                <div className="w-9 h-9 rounded-xl bg-pak-green/15 border border-pak-green/20 flex items-center justify-center text-pak-green shrink-0 animate-bounce hidden sm:flex">
                  <BellRing className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-start">
                    <span className="text-[9px] font-black uppercase tracking-wider text-pak-green bg-pak-green/10 px-2 py-0.5 rounded flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 animate-pulse" /> Match Reminders
                    </span>
                    <span className="text-white/40 text-[9px] uppercase font-bold tracking-wider">• Never Miss A Ball</span>
                  </div>
                  <p className="text-xs text-white/80 font-medium leading-relaxed mt-0.5">
                    Enable push notifications to get instant alerts on your device <strong className="text-pak-green">30 minutes before</strong> Pakistan matches start.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleRequestPermission}
                  className="px-4 py-2 bg-pak-green hover:bg-emerald-600 text-white font-extrabold text-[9px] uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-md shadow-pak-green/10 flex items-center gap-1.5 border-none"
                >
                  <Bell className="w-3 h-3" /> Enable Alerts
                </button>
                <button
                  onClick={handleDismiss}
                  className="w-8 h-8 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 flex items-center justify-center text-white/40 hover:text-white transition-all cursor-pointer"
                  aria-label="Dismiss Notification Prompt"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="bg-pak-green p-1 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-4 h-4 md:w-6 md:h-6 text-[#F8FAF9]" aria-hidden="true" />
            </div>
            <h1 className="font-display text-[12px] xs:text-[14px] sm:text-2xl tracking-tighter uppercase font-black text-ink leading-none flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
              <span>PAKCRIC</span>
              <span className="text-pak-green group-hover:text-pak-green/80 transition-colors italic">SCHEDULE</span>
            </h1>
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={onOpenNotifications}
            className="w-10 h-10 sm:h-11 sm:w-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-pak-green/30 transition-all cursor-pointer relative group"
            title="Open Alerts & Reminders Center"
            aria-label="Open Alerts & Reminders Center"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-pak-green transition-colors" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse border-2 border-bg" />
          </button>

          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
            <Search />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="px-4 py-1.5 rounded-full bg-pak-green text-[10px] font-bold uppercase tracking-widest border border-white/20 text-[#F8FAF9] shadow-sm">
              Schedule 2026
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
