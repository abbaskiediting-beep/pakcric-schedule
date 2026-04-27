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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-bg/95 backdrop-blur-xl border-t border-card-border pb-safe shadow-[0_-8px_30px_rgb(0,0,0,0.12)] transition-colors duration-300 px-2">
      <div className="flex items-center justify-around h-16 sm:h-18 px-1">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center gap-1 w-full h-full transition-all active:scale-95 touch-none relative ${
                isActive ? 'text-pak-green' : 'text-neutral-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <tab.icon className={`w-5 h-5 mb-0.5 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-pak-green rounded-full shadow-[0_0_10px_rgba(1,65,28,0.6)] border-2 border-bg"
                    />
                  )}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${isActive ? 'translate-y-0.5' : ''}`}>
                  {tab.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-pak-green/5 blur-xl -z-10 rounded-full"
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
