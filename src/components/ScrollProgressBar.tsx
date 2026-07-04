import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Render on all news/blog article pages (excluding the main listing page)
  const isNewsArticle = currentPath.startsWith('/news/') && currentPath !== '/news';

  // Using motion/react's built-in useScroll hook for native scrolling performance
  const { scrollYProgress } = useScroll();
  
  // Apply a smooth spring transition to avoid jittery progress updates
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200,
    restDelta: 0.001
  });

  if (!isNewsArticle) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-[9999] pointer-events-none origin-left">
      <motion.div
        className="h-full bg-gradient-to-r from-yellow-500 via-emerald-500 to-pak-green"
        style={{ scaleX }}
      />
    </div>
  );
}
