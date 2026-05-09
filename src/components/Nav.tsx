import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Nav() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Next Match 🔴', path: '/match/1', highlight: true },
    { name: 'Series', path: '/pakistan-cricket-series' },
    { name: 'Squad', path: '/squads' },
    { name: 'Stats', path: '/players-stats' },
    { name: 'Rankings', path: '/rankings' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-bg/95 backdrop-blur-xl border-b border-card-border overflow-x-auto sticky top-14 sm:top-20 z-40 shadow-xl scrollbar-hide snap-x snap-mandatory scroll-smooth relative">
      <div className="flex h-10 sm:h-14 items-center px-2 md:px-0 gap-1.5 whitespace-nowrap md:justify-center">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`h-7 sm:h-9 flex items-center px-3 sm:px-4 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-widest transition-all relative group snap-start shrink-0 ${
              link.highlight 
                ? 'bg-pak-green text-white hover:bg-pak-green/90 shadow-lg shadow-pak-green/20 border border-pak-green' 
                : 'text-ink/60 hover:text-white bg-white/5 hover:bg-pak-green/20 border border-white/5'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      {/* Right Fade for Scrollability */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg to-transparent pointer-events-none md:hidden" />
    </nav>
  );
}
