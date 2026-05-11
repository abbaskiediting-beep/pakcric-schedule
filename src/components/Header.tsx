import { Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-md text-ink border-b border-card-border">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="bg-pak-green p-1 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-4 h-4 md:w-6 md:h-6 text-[#F8FAF9]" aria-hidden="true" />
            </div>
            <h1 className="font-display text-[12px] xs:text-[14px] sm:text-2xl tracking-tighter uppercase font-black text-ink leading-none flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
              <span>PAKCRIC</span>
              <span className="text-pak-green group-hover:text-pak-green/80 transition-colors italic">SCHEDULE</span>
            </h1>
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
            <Search />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="px-4 py-1.5 rounded-full bg-pak-green text-[10px] font-bold uppercase tracking-widest border border-white/20 text-[#F8FAF9] shadow-sm">
              Schedule 2026
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
