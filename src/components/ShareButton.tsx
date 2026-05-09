import React, { useState, useRef, useEffect } from 'react';
import { Share2, Check, MessageCircle, Twitter, Facebook, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  className?: string;
  variant?: 'icon' | 'outline' | 'filled';
}

export default function ShareButton({ title, text, url, className = '', variant = 'icon' }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Check if it's the native share API
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        });
        return;
      } catch (error) {
        // Carry on to fallback if user cancelled or it failed
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        } else {
          return; // User cancelled, don't show menu
        }
      }
    }

    setShowMenu(!showMenu);
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setShowMenu(false);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareOnWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
    setShowMenu(false);
  };

  const shareOnTwitter = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    setShowMenu(false);
  };

  const shareOnFacebook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    setShowMenu(false);
  };

  const variants = {
    icon: `relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
      showMenu || copied 
        ? 'bg-pak-green text-white scale-110 shadow-[0_0_15px_rgba(0,102,46,0.4)]' 
        : 'bg-white/5 hover:bg-white/10 text-ink/40 hover:text-pak-green'
    }`,
    outline: `px-6 py-4 rounded-3xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 backdrop-blur-md border border-white/10 ${
      showMenu || copied 
        ? 'bg-pak-green text-white shadow-xl' 
        : 'bg-white/5 text-white hover:bg-white/10'
    }`,
    filled: `px-6 py-4 rounded-3xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 shadow-xl ${
      showMenu || copied 
        ? 'bg-pak-green text-white' 
        : 'bg-white text-pak-green hover:scale-105 active:scale-95'
    }`
  };

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button onClick={handleShare} className={variants[variant]} aria-label="Share">
        {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
        {(variant === 'outline' || variant === 'filled') && (
          <span>{copied ? 'Link Copied' : 'Share'}</span>
        )}
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className={`absolute z-[100] p-2 bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl min-w-[200px] ${
              variant === 'icon' ? 'top-full right-0 mt-3' : 'bottom-full left-1/2 -translate-x-1/2 mb-4'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              <button
                onClick={shareOnWhatsApp}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-green-500/10 text-white/70 hover:text-green-500 rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">WhatsApp</span>
              </button>
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Twitter / X</span>
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-blue-600/10 text-white/70 hover:text-blue-500 rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Facebook</span>
              </button>
              <div className="h-px bg-white/5 my-1 mx-2" />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-pak-green/10 text-white/70 hover:text-pak-green rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-pak-green/10 flex items-center justify-center">
                  <Copy className="w-4 h-4 text-pak-green" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Copy Link</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
