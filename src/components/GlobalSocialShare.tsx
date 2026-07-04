import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, MessageCircle, Copy, Check, Share2 } from 'lucide-react';

export default function GlobalSocialShare() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Identify target pages
  const isNewsArticle = currentPath.startsWith('/news/') && currentPath !== '/news';
  const isSchedulePage = [
    '/schedule',
    '/match-schedule',
    '/fixtures',
    '/full-fixtures',
    '/pakistan-vs-bangladesh-2026-schedule',
    '/pakistan-vs-australia-2026-schedule-odi',
    '/pakistan-upcoming-series-full-schedule'
  ].includes(currentPath);

  const shouldRender = isNewsArticle || isSchedulePage;

  // Show share bar after scrolling down a bit (adds high-end polish)
  useEffect(() => {
    if (!shouldRender) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set initial visibility based on scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldRender, currentPath]);

  if (!shouldRender) return null;

  // Generate share details dynamically
  const getShareDetails = () => {
    const url = window.location.href;
    let title = "Check out this update on PakCric!";
    
    if (isNewsArticle) {
      // Try to extract title from the document title or path
      title = document.title || "Latest Cricket News & Updates";
    } else if (isSchedulePage) {
      title = "Official Pakistan Cricket Match Schedules, Fixtures & Timings 2026";
    }

    return {
      title,
      url,
      whatsappText: `${title}\nRead more here: ${url}`,
      twitterText: `${title} #PakistanCricket`
    };
  };

  const shareDetails = getShareDetails();

  const handleTwitterShare = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareDetails.twitterText)}&url=${encodeURIComponent(shareDetails.url)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareDetails.whatsappText)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const copyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareDetails.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Floating Dock (Left/Right side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 bg-zinc-950/85 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="text-[8px] font-black uppercase text-ink/30 tracking-widest writing-vertical select-none mb-1">
              SHARE
            </div>

            {/* Twitter Share */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTwitterShare}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all border border-white/5 shadow-md relative group"
              title="Share on Twitter / X"
            >
              <Twitter className="w-4 h-4" />
              <div className="absolute right-full mr-3 px-2 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[9px] text-white font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                Share on X
              </div>
            </motion.button>

            {/* WhatsApp Share */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppShare}
              className="w-10 h-10 rounded-xl bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-white flex items-center justify-center transition-all border border-green-500/10 shadow-md relative group"
              title="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <div className="absolute right-full mr-3 px-2 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[9px] text-white font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                Share on WhatsApp
              </div>
            </motion.button>

            <div className="w-6 h-px bg-white/10 my-1" />

            {/* Copy Link */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyLink}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all border shadow-md relative group ${
                copied 
                  ? 'bg-pak-green text-white border-pak-green' 
                  : 'bg-white/5 hover:bg-pak-green/10 text-ink/40 hover:text-pak-green border-white/5'
              }`}
              title="Copy Link"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <div className="absolute right-full mr-3 px-2 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[9px] text-white font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                {copied ? 'Link Copied!' : 'Copy Link'}
              </div>
            </motion.button>
          </motion.div>

          {/* Mobile Floating Bar (Bottom Center) */}
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-3 bg-zinc-950/90 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-2 mr-1">
              <Share2 className="w-3.5 h-3.5 text-pak-green" />
              <span className="text-[9px] font-black uppercase text-white tracking-widest">Share:</span>
            </div>

            {/* Twitter */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleTwitterShare}
              className="w-8 h-8 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/5 active:bg-white active:text-black transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </motion.button>

            {/* WhatsApp */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsAppShare}
              className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/15 active:bg-green-500 active:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </motion.button>

            {/* Copy Link */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={copyLink}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors border ${
                copied 
                  ? 'bg-pak-green text-white border-pak-green' 
                  : 'bg-white/5 text-white/50 border-white/5'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
