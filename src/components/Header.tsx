import { Trophy, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Search from './Search';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-md text-ink border-b border-card-border transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="bg-pak-green p-1.5 sm:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FAF9]" aria-hidden="true" />
            </div>
            <h1 className="font-display text-base sm:text-2xl tracking-tighter uppercase font-bold text-ink leading-none">
              PAKCRIC <span className="text-pak-green group-hover:text-pak-green/80 transition-colors">SCHEDULE</span>
            </h1>
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
            <Search />
          </div>
          
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
            <button 
              onClick={onToggleTheme}
              className="p-2 sm:p-3 rounded-xl sm:rounded-full bg-card-bg border border-card-border hover:border-pak-green hover:text-pak-green transition-all text-ink focus:outline-none focus:ring-2 focus:ring-pak-green/50 active:scale-95 flex items-center justify-center"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              aria-pressed={theme === 'dark'}
              title={theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
            >
              <div className="relative w-4.5 h-4.5 sm:w-5 sm:h-5">
                {theme === 'light' ? (
                  <Moon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-ink" aria-hidden="true" />
                ) : (
                  <Sun className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-ink" aria-hidden="true" />
                )}
              </div>
            </button>
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
