import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showNotification, setShowNotification] = useState(false);
  const [lastStatus, setLastStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (lastStatus === false) {
        setShowNotification(true);
      }
      setLastStatus(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
      setLastStatus(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [lastStatus]);

  useEffect(() => {
    if (showNotification && isOnline) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification, isOnline]);

  return (
    <AnimatePresence>
      {(showNotification || !isOnline) && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-md"
        >
          <div className={`p-4 rounded-2xl shadow-2xl border flex items-center justify-between gap-4 backdrop-blur-xl ${
            isOnline 
              ? 'bg-pak-green/90 border-pak-green/20 text-white' 
              : 'bg-rose-900/90 border-rose-500/20 text-white'
          }`}>
            <div className="flex items-center gap-3">
              {isOnline ? (
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                  <WifiOff className="w-5 h-5 text-rose-500 animate-pulse" />
                </div>
              )}
              <div>
                <p className="text-sm font-black uppercase tracking-tight">
                  {isOnline ? 'Online Access Restored' : 'Offline Mode Active'}
                </p>
                <p className="text-[10px] font-bold text-white/70 uppercase">
                  {isOnline 
                    ? 'All features available now.' 
                    : 'Viewing cached content. Some features may be limited.'}
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowNotification(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
