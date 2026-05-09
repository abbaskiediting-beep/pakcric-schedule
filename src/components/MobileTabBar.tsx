import { Home, Calendar, Trophy, Newspaper } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

export default function MobileTabBar() {
  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'Rankings', path: '/rankings', icon: Trophy },
    { name: 'News', path: '/news', icon: Newspaper },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-bg/95 backdrop-blur-2xl border-t border-card-border pb-safe-offset-2 shadow-[0_-12px_40px_rgb(0,0,0,0.2)] transition-colors duration-300 px-2">
      <div className="flex items-center justify-around h-20 px-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center gap-1.5 w-full h-full transition-all active:scale-95 touch-none relative ${
                isActive ? 'text-pak-green' : 'text-neutral-500 hover:text-neutral-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <tab.icon className={`w-6 h-6 mb-0.5 transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(1,65,28,0.4)]' : 'scale-100'}`} />
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pak-green rounded-full shadow-[0_0_15px_rgba(1,65,28,0.8)] border-2 border-bg"
                    />
                  )}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? 'translate-y-0.5 text-pak-green' : 'text-neutral-500'}`}>
                  {tab.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-x-0 bottom-0 top-0 bg-pak-green/5 blur-2xl -z-10 rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
