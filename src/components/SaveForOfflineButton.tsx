import React, { useState, useEffect } from 'react';
import { Download, CloudOff, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SaveForOfflineButtonProps {
  id: string;
  label?: string;
  className?: string;
  variant?: 'default' | 'icon';
}

export default function SaveForOfflineButton({ 
  id, 
  label = "Save Offline", 
  className = "", 
  variant = 'default' 
}: SaveForOfflineButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const savedSchedules = JSON.parse(localStorage.getItem('saved_schedules') || '[]');
    setIsSaved(savedSchedules.includes(id));
  }, [id]);

  const handleSaveOffline = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDownloading(true);
    
    // Simulate finding/caching data
    setTimeout(() => {
      const savedSchedules = JSON.parse(localStorage.getItem('saved_schedules') || '[]');
      let updated;
      if (isSaved) {
        updated = savedSchedules.filter((sid: string) => sid !== id);
        setIsSaved(false);
      } else {
        updated = [...savedSchedules, id];
        setIsSaved(true);
      }
      localStorage.setItem('saved_schedules', JSON.stringify(updated));
      setIsDownloading(false);
    }, 1500);
  };

  const baseClasses = `flex items-center justify-center gap-2 transition-all ${
    isSaved 
      ? 'bg-pak-green/20 border border-pak-green/30 text-pak-green' 
      : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 text-ink/40 hover:text-pak-green'
  } ${className}`;

  if (variant === 'icon') {
    return (
      <button 
        onClick={handleSaveOffline}
        disabled={isDownloading}
        className={`p-2.5 rounded-xl ${baseClasses}`}
        aria-label={label}
      >
        {isDownloading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          >
            <Download className="w-4 h-4" />
          </motion.div>
        ) : isSaved ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <CloudOff className="w-4 h-4" />
        )}
      </button>
    );
  }

  return (
    <button 
      onClick={handleSaveOffline}
      disabled={isDownloading}
      className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest ${baseClasses}`}
    >
      {isDownloading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        >
          <Download className="w-3.5 h-3.5" />
        </motion.div>
      ) : isSaved ? (
        <CheckCircle2 className="w-3.5 h-3.5" />
      ) : (
        <CloudOff className="w-3.5 h-3.5" />
      )}
      <span>{isDownloading ? 'Syncing...' : isSaved ? 'Saved Offline' : label}</span>
    </button>
  );
}
