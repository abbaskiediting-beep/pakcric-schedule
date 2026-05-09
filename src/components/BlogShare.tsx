import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, MessageCircle, Twitter, Facebook, Check, Link as LinkIcon } from 'lucide-react';

interface BlogShareProps {
  title: string;
  summary?: string;
}

export const BlogShare: React.FC<BlogShareProps> = ({ title, summary }) => {
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

  const getShareInfo = () => {
    const shareUrl = window.location.href;
    const shareText = `${title}${summary ? ` - ${summary}` : ''}`;
    return { shareUrl, shareText };
  };

  const shareOnWhatsApp = () => {
    const { shareUrl, shareText } = getShareInfo();
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, '_blank');
    setShowMenu(false);
  };

  const shareOnTwitter = () => {
    const { shareUrl, shareText } = getShareInfo();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    setShowMenu(false);
  };

  const shareOnFacebook = () => {
    const { shareUrl } = getShareInfo();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    setShowMenu(false);
  };

  const copyToClipboard = () => {
    const { shareUrl } = getShareInfo();
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setShowMenu(false);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3" ref={menuRef}>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-2 p-2 bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl min-w-[180px] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1">
              <button
                onClick={shareOnWhatsApp}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-green-500/10 text-white/70 hover:text-green-500 rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
              </button>
              
              <button
                onClick={shareOnTwitter}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Twitter / X</span>
              </button>

              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-blue-600/10 text-white/70 hover:text-blue-500 rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Facebook</span>
              </button>

              <div className="h-px bg-white/5 my-1 mx-2" />

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-pak-green/10 text-white/70 hover:text-pak-green rounded-xl transition-colors text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-pak-green/10 flex items-center justify-center">
                  {copied ? <Check className="w-4 h-4 text-pak-green" /> : <LinkIcon className="w-4 h-4 text-pak-green" />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {copied ? 'Copied!' : 'Copy Link'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setShowMenu(!showMenu)}
        className={`w-14 h-14 rounded-3xl flex items-center justify-center hover:scale-110 transition-transform shadow-2xl relative group ${
          showMenu ? 'bg-pak-green text-white' : 'bg-white/5 text-white'
        }`}
      >
        <Share2 className={`w-6 h-6 transition-transform ${showMenu ? 'rotate-12' : ''}`} />
        {!showMenu && (
          <span className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Share Article
          </span>
        )}
      </button>

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-full mb-20 right-0 px-4 py-2 bg-pak-green text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl"
        >
          Link Copied!
        </motion.div>
      )}
    </div>
  );
};
