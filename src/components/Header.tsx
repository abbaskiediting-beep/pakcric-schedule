import { Trophy, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-md text-ink border-b border-card-border transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="bg-pak-green p-2 rounded-lg">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-display text-2xl tracking-tighter uppercase font-bold">
            PAKISTAN <span className="text-white">CRICKET</span>
          </h1>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-card-bg border border-card-border hover:border-white/30 transition-all text-ink"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <div className="px-4 py-1.5 rounded-full bg-pak-green text-[10px] font-bold uppercase tracking-widest border border-white/20 text-white">
              Schedule 2026
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
