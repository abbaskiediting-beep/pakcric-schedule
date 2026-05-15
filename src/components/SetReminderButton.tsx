import React, { useState, useEffect } from 'react';
import { Bell, BellRing, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SetReminderButtonProps {
  matchId: string;
  matchTitle: string;
  matchTime: string;
  matchDate: string;
  className?: string;
}

export default function SetReminderButton({ 
  matchId, 
  matchTitle, 
  matchTime, 
  matchDate,
  className = "" 
}: SetReminderButtonProps) {
  const [isReminderSet, setIsReminderSet] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const savedReminders = JSON.parse(localStorage.getItem('match_reminders') || '[]');
    setIsReminderSet(savedReminders.includes(matchId));
  }, [matchId]);

  const toggleReminder = () => {
    const savedReminders = JSON.parse(localStorage.getItem('match_reminders') || '[]');
    const savedSchedules = JSON.parse(localStorage.getItem('saved_schedules') || '[]');
    let newReminders;
    let newSchedules;

    if (isReminderSet) {
      newReminders = savedReminders.filter((id: string) => id !== matchId);
      newSchedules = savedSchedules.filter((id: string) => id !== matchId);
      setIsReminderSet(false);
    } else {
      newReminders = [...savedReminders, matchId];
      newSchedules = Array.from(new Set([...savedSchedules, matchId]));
      setIsReminderSet(true);
      setShowFeedback(true);
      
      // Auto-hide feedback after 3 seconds
      setTimeout(() => setShowFeedback(false), 3000);

      // Check for Notification permission
      if ("Notification" in window) {
        if (Notification.permission === "default") {
          Notification.requestPermission();
        } else if (Notification.permission === "granted") {
          // In a real app, you'd schedule a background task or push notification
          // For this demo, we'll just show the UI state
          console.log(`Reminder set for ${matchTitle}`);
        }
      }
    }

    localStorage.setItem('match_reminders', JSON.stringify(newReminders));
    localStorage.setItem('saved_schedules', JSON.stringify(newSchedules));
  };

  return (
    <div className={`relative ${className}`}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleReminder}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-3xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-xl group border ${
          isReminderSet 
            ? 'bg-amber-500/10 border-amber-500/50 text-amber-500' 
            : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
        }`}
      >
        {isReminderSet ? (
          <>
            <BellRing className="w-4 h-4 animate-bounce" />
            Reminder Set
          </>
        ) : (
          <>
            <Bell className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Set Reminder
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-500 text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl z-50 pointer-events-none"
          >
            <CheckCircle2 className="w-3 h-3" />
            Reminder Activated
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
