import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Nav() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Squads', path: '/squads' },
    { name: 'Rankings', path: '/rankings' },
    { name: 'News', path: '/news' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-card-bg border-b border-card-border overflow-x-auto custom-scrollbar sticky top-20 z-40">
      <div className="container mx-auto px-6 h-14 flex items-center gap-2 whitespace-nowrap">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="h-full flex items-center px-4 text-[11px] font-bold uppercase tracking-widest text-ink/60 hover:text-pak-green hover:bg-pak-green/5 transition-all relative group"
          >
            {link.name}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-pak-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
