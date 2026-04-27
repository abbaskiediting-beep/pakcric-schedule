import { Home, Calendar, Trophy, Newspaper } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function MobileTabBar() {
  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'Rankings', path: '/rankings', icon: Trophy },
    { name: 'News', path: '/news', icon: Newspaper },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-bg/90 backdrop-blur-lg border-t border-card-border pb-safe">
      <div className="flex items-center justify-around h-16 px-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center gap-1 w-full h-full transition-all active:scale-90 ${
                isActive ? 'text-pak-green' : 'text-ink/40'
              }`
            }
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
