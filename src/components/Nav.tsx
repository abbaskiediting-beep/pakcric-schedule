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
    <nav className="bg-card-bg border-b border-card-border overflow-x-auto custom-scrollbar">
      <div className="container mx-auto px-6 h-12 flex items-center gap-8 whitespace-nowrap">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-[10px] font-bold uppercase tracking-widest text-ink/60 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
