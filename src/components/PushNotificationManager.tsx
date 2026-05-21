import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  BellRing, 
  BellOff, 
  X, 
  Clock, 
  Sparkles, 
  Play, 
  AlertCircle, 
  CheckCircle2, 
  Smartphone,
  Info,
  Calendar
} from 'lucide-react';
import { PAKISTAN_SCHEDULE } from '../constants';
import { Match } from '../types';

// Utility to parse different date formats from PAKISTAN_SCHEDULE
export function parseMatchDateTime(dateStr: string, timeStr: string): Date | null {
  try {
    if (!dateStr || !timeStr) return null;
    
    // 1. Clean the date string
    let cleanDate = dateStr;
    // For ranges like "May 16–20, 2026" or "May 16-20", take the first part: "May 16"
    if (cleanDate.includes('–')) {
      const parts = cleanDate.split('–');
      const firstPart = parts[0].trim(); // e.g. "May 16"
      const yearMatch = cleanDate.match(/\d{4}/);
      const year = yearMatch ? yearMatch[0] : '2026';
      cleanDate = `${firstPart}, ${year}`;
    } else if (cleanDate.includes('-')) {
      const parts = cleanDate.split('-');
      const firstPart = parts[0].trim();
      const yearMatch = cleanDate.match(/\d{4}/);
      const year = yearMatch ? yearMatch[0] : '2026';
      cleanDate = `${firstPart}, ${year}`;
    }

    // 2. Clear Time parts
    // Examples: '14:30 PKT', '09:00 AM PKT', '20:00 PKT'
    let cleanTime = timeStr.replace('PKT', '').trim();
    
    let hours = 0;
    let minutes = 0;
    const ampmMatch = cleanTime.match(/(AM|PM)/i);
    
    if (ampmMatch) {
      const ampm = ampmMatch[1].toUpperCase();
      const timeParts = cleanTime.replace(/(AM|PM)/i, '').trim().split(':');
      hours = parseInt(timeParts[0], 10);
      minutes = parseInt(timeParts[1], 10);
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
    } else {
      const timeParts = cleanTime.split(':');
      if (timeParts.length >= 2) {
        hours = parseInt(timeParts[0], 10);
        minutes = parseInt(timeParts[1], 10);
      }
    }

    let finalDate: Date;
    // Inspect if ISO format YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) {
      const [y, m, d] = cleanDate.split('-').map(Number);
      finalDate = new Date(y, m - 1, d, hours, minutes, 0);
    } else {
      const parsedTime = Date.parse(cleanDate);
      if (isNaN(parsedTime)) return null;
      finalDate = new Date(parsedTime);
      finalDate.setHours(hours, minutes, 0, 0);
    }

    // Adjust for Pakistan time offset key (PKT is UTC+5, match dates are PKT)
    // Absolute UTC = local PKT datetime interpreted as UTC minus 5 hours
    const year = finalDate.getFullYear();
    const month = finalDate.getMonth();
    const day = finalDate.getDate();
    const absoluteUtcTimestamp = Date.UTC(year, month, day, hours, minutes) - (5 * 60 * 60 * 1000);
    return new Date(absoluteUtcTimestamp);
  } catch (err) {
    console.error("Match Date Parsing Error: ", err);
    return null;
  }
}

interface PushNotificationManagerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PushNotificationManager({ isOpen = false, onClose }: PushNotificationManagerProps) {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [activeReminders, setActiveReminders] = useState<string[]>([]);
  const [showIframeWarning, setShowIframeWarning] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [simulatedMatch, setSimulatedMatch] = useState<{ id: string; title: string; triggerTimeUTC: number } | null>(null);

  // Sync notification state on load
  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
    const savedReminders = JSON.parse(localStorage.getItem('match_reminders') || '[]');
    setActiveReminders(savedReminders);
  }, [isOpen]);

  // Alert trigger checks running in background
  useEffect(() => {
    const checkScheduleForReminders = () => {
      const now = Date.now();
      const savedReminders = JSON.parse(localStorage.getItem('match_reminders') || '[]');
      const alertedMatches = JSON.parse(localStorage.getItem('alerted_matches') || '[]');

      // 1. Check Simulated Match
      if (simulatedMatch && !alertedMatches.includes(simulatedMatch.id)) {
        // Trigger precisely when now >= triggerTime
        if (now >= simulatedMatch.triggerTimeUTC) {
          triggerNativePush(
            "🏏 MATCH STARTING SOON!",
            `Hurry! ${simulatedMatch.title} starts in exactly 30 minutes. Catch it live!`
          );
          // Mark as alerted
          localStorage.setItem('alerted_matches', JSON.stringify([...alertedMatches, simulatedMatch.id]));
          setSimulatedMatch(null); // Clear simulated state
        }
      }

      // 2. Check Real Matches with reminders
      PAKISTAN_SCHEDULE.forEach((match) => {
        if (savedReminders.includes(match.id) && !alertedMatches.includes(match.id)) {
          const matchDateObj = parseMatchDateTime(match.date, match.time);
          if (matchDateObj) {
            const startTimestamp = matchDateObj.getTime();
            // 30 minutes before match target
            const targetAlertTimestamp = startTimestamp - (30 * 60 * 1000);

            // Trigger notification alert if:
            // - current time is past or at the 30min target
            // - match hasn't started yet (still positive relative to start)
            if (now >= targetAlertTimestamp && now < startTimestamp) {
              triggerNativePush(
                `🏏 Live Pakistan Match Alert!`,
                `The countdown has begun! Pakistan Tour vs ${match.opponent} starts in 30 minutes at ${match.time} PKT.`
              );
              // Save to alerted registry so we don't spam notifications
              const updatedAlerts = [...alertedMatches, match.id];
              localStorage.setItem('alerted_matches', JSON.stringify(updatedAlerts));
            }
          }
        }
      });
    };

    // Run every 15 seconds to be fast and accurate
    const interval = setInterval(checkScheduleForReminders, 15000);
    return () => clearInterval(interval);
  }, [simulatedMatch]);

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      showToast("Web Notifications are not supported in your browser.");
      return;
    }

    try {
      // Check if we are inside an iframe and show warning if permission is restricted
      if (window.self !== window.top) {
        setShowIframeWarning(true);
      }

      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === 'granted') {
        showToast("🔔 Cricket notifications successfully enabled!");
        // Fire welcome push
        triggerNativePush(
          "🏏 Notification System Active!",
          "Excellent! You will now receive alert notifications 30 minutes before Pakistan cricket matches start!"
        );
      } else if (result === 'denied') {
        showToast("⚠️ Notifications were blocked. Enable permissions in your browser URL panel.");
      }
    } catch (err) {
      console.warn("Could not request notification permissions:", err);
      setShowIframeWarning(true);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const triggerNativePush = (title: string, body: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: 'https://flagcdn.com/pk.svg',
          requireInteraction: true,
          tag: 'pakcric-match-alert'
        });
      } catch (e) {
        // Fallback for environment constraints or browsers that prefer service-worker triggers
        console.info("Desktop notification displayed:", title, body);
      }
    }
    // Always fall back to visual notification toast in app
    showToast(`${title} - ${body}`);
  };

  // Test push instantly
  const handleTestInstantPush = () => {
    if (Notification.permission !== 'granted') {
      requestNotificationPermission();
      return;
    }
    triggerNativePush(
      "🏏 TEST ALERT: Pakistan vs India",
      "High voltage clash! This is a test alert simulating a match starting in exactly 30 minutes!"
    );
  };

  // Simulate a match scheduling alerts in exactly 30 minutes
  const handleSimulateMatchInInterval = () => {
    if (Notification.permission !== 'granted') {
      requestNotificationPermission();
      return;
    }

    // Set simulated match starting in 30 minutes. 
    // Trigger is immediate since alert targets 30 minutes before match start!
    const triggerTime = Date.now() + 1000; // Trigger in 1 second
    setSimulatedMatch({
      id: 'simulated-match-' + Date.now(),
      title: 'Pakistan vs Australia (Simulated Match)',
      triggerTimeUTC: triggerTime
    });

    showToast("🕒 Match simulated! Active reminder set for start in 30 minutes. Watch for the push alert!");
  };

  // Get list of upcoming matches with a reminders active
  const upcomingMatchedReminders = useMemo(() => {
    const savedReminders = JSON.parse(localStorage.getItem('match_reminders') || '[]');
    return PAKISTAN_SCHEDULE.filter(m => savedReminders.includes(m.id));
  }, [activeReminders, isOpen]);

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-10 z-[140] bg-[#1a1a1b] border border-pak-green/30 text-white px-5 py-4 rounded-2xl shadow-3xl max-w-sm flex items-start gap-3.5 backdrop-blur-xl"
          >
            <CheckCircle2 className="w-5 h-5 text-pak-green mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-black tracking-wider uppercase text-pak-green mb-0.5">Notification Center</p>
              <p className="text-[11px] font-medium text-ink/80 leading-relaxed">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-[#0E0E0E] text-white border-l border-white/10 flex flex-col shadow-2xl z-10"
              id="notification-center-drawer"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 bg-gradient-to-b from-neutral-900 to-transparent flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pak-green/10 border border-pak-green/20 flex items-center justify-center text-pak-green">
                    <BellRing className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-black uppercase tracking-tight leading-none mb-1">Match Reminders Center</h3>
                    <p className="text-[9px] font-bold text-ink/40 uppercase tracking-widest">Notification API Configuration</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ink/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* content */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                
                {/* Status Card */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-ink/50">Push Permissions Status</span>
                    <span className={`px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest ${
                      permission === 'granted' 
                        ? 'bg-pak-green/10 text-pak-green border border-pak-green/25' 
                        : permission === 'denied' 
                        ? 'bg-red-500/10 text-red-500 border border-red-500/25' 
                        : 'bg-white/5 text-ink/40 border border-white/10'
                    }`}>
                      {permission.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-[11px] text-ink/65 leading-relaxed font-medium">
                    Our platform utilizes standard web notifications to alerts you exactly <strong className="text-white">30 minutes before</strong> match starts.
                  </p>

                  {permission !== 'granted' ? (
                    <button
                      onClick={requestNotificationPermission}
                      className="w-full py-3 bg-pak-green text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Bell className="w-4 h-4" /> Enable Device Push Notifications
                    </button>
                  ) : (
                    <div className="flex gap-2 items-center p-3 bg-pak-green/5 border border-pak-green/10 rounded-xl text-pak-green">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Active desktop signals allowed</span>
                    </div>
                  )}
                </div>

                {/* Ifframe Web restriction notification */}
                {showIframeWarning && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/25 rounded-2xl flex items-start gap-3">
                    <Info className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-amber-500 tracking-wider mb-1">Preview iframe warning</h4>
                      <p className="text-[10px] text-ink/60 font-medium leading-relaxed">
                        Browser safety restrictions block notifications inside nested frames. Please open the app in a <strong className="text-amber-500">New Tab</strong> using the tab launch option to grant native browser alerts.
                      </p>
                    </div>
                  </div>
                )}

                {/* Simulation controls */}
                <div className="p-5 rounded-2xl bg-[#161617] border border-white/5 space-y-4">
                  <div className="flex items-center gap-2 text-pak-green">
                    <Sparkles className="w-4.5 h-4.5" />
                    <h4 className="text-[10px] font-extrabold uppercase tracking-[2px] text-white">Live System Test Simulator</h4>
                  </div>
                  <p className="text-[10px] text-ink/50 leading-relaxed font-medium">
                    Test the browser popups instantly without waiting for match days:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      onClick={handleTestInstantPush}
                      className="py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 text-pak-green" /> Immediate Push Test
                    </button>

                    <button
                      onClick={handleSimulateMatchInInterval}
                      className="py-3 bg-pak-green/10 hover:bg-pak-green/20 border border-pak-green/25 text-pak-green rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Clock className="w-3.5 h-3.5 text-pak-green" /> Simulate Match
                    </button>
                  </div>
                  <p className="text-[8px] text-ink/40 font-bold uppercase tracking-wider text-center pt-1">
                    Simulate alert setups a virtual match starting in 30 mins to run timers.
                  </p>
                </div>

                {/* Active Reminders List */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-ink/50 block mb-1">Your Match Reminders Schedule</h4>

                  {upcomingMatchedReminders.length > 0 ? (
                    <div className="space-y-2.5">
                      {upcomingMatchedReminders.map((match) => (
                        <div 
                          key={match.id}
                          className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/5 hover:border-pak-green/25 rounded-xl transition-colors gap-4"
                        >
                          <div className="min-w-0">
                            <span className="text-[11px] font-black text-white block uppercase tracking-tight truncate leading-tight">{match.title || `PAK vs ${match.opponent}`}</span>
                            <span className="text-[9px] font-medium text-ink/50 block mt-0.5">{match.date} • {match.time} PKT</span>
                          </div>
                          
                          <button
                            onClick={() => {
                              const updatedReminders = activeReminders.filter(id => id !== match.id);
                              localStorage.setItem('match_reminders', JSON.stringify(updatedReminders));
                              localStorage.setItem('saved_schedules', JSON.stringify(updatedReminders));
                              setActiveReminders(updatedReminders);
                              showToast("Removed reminder for match.");
                            }}
                            className="text-[9px] hover:text-red-500 font-bold uppercase tracking-wider bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 cursor-pointer hover:bg-red-500/10 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center bg-white/[0.01] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center">
                      <Calendar className="w-8 h-8 text-white/10 mb-2" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-ink/30">No Active Match Reminders</p>
                      <p className="text-[9px] text-ink/20 font-semibold uppercase mt-1">Click "Set Reminder" on upcoming matches</p>
                    </div>
                  )}
                </div>

              </div>

              {/* Footer */}
              <div className="p-5 border-t border-white/5 bg-black/40 flex items-center justify-center text-center">
                <p className="text-[9px] text-ink/30 font-semibold uppercase tracking-widest leading-relaxed">
                  Desktop notifications are fully local and run directly inside your secure browser environment.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
