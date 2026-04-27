import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Nav() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Next Match 🔴', path: '/match/1', highlight: true },
    { name: 'Series', path: '/series/pakistan-tour-of-bangladesh-test-series' },
    { name: 'Squad', path: '/squads' },
    { name: 'Stats', path: '/players-stats' },
    { name: 'Rankings', path: '/rankings' },
    { name: 'News', path: '/news' },
    { name: 'Blog', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-card-bg border-b border-card-border overflow-x-auto custom-scrollbar sticky top-16 md:top-20 z-40 shadow-lg scrollbar-hide">
      <div className="container mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center gap-1 whitespace-nowrap">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`h-full flex items-center px-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all relative group ${
              link.highlight 
                ? 'bg-pak-green text-white hover:bg-pak-green/90 shadow-lg shadow-pak-green/20' 
                : 'text-ink/60 hover:text-pak-green hover:bg-pak-green/5'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {link.name}
            </span>
            {!link.highlight && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-pak-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
