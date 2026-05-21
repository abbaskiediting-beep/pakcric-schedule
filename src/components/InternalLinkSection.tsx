import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid } from 'lucide-react';

const INTERNAL_LINKS = [
  { name: 'PakCric Home', path: '/', desc: 'Go to home page for latest feeds, scores & articles' },
  { name: 'Full Schedule 2026', path: '/schedule', desc: 'Complete match fixtures and venues' },
  { name: 'Squad Details', path: '/squads', desc: 'Pakistan team selection and analysis' },
  { name: 'ICC Rankings', path: '/rankings', desc: 'Latest player and team standings' },
  { name: 'WTC Projections', path: '/icc-wtc-projections-2026', desc: 'World Test Championship updates' },
  { name: 'Latest News', path: '/news', desc: 'Daily updates from the cricket world' },
  { name: 'Player Stats', path: '/players-stats', desc: 'In-depth performance metrics' },
  { name: 'Match Venues', path: '/venues', desc: 'Stadium capacities and pitch conditions guide' },
  { name: 'About PakCric', path: '/about', desc: 'Learn more about our portal' },
];

interface InternalLinkSectionProps {
  cols?: 1 | 2 | 3 | 4;
  title?: string;
}

export default function InternalLinkSection({ cols, title }: InternalLinkSectionProps) {
  const isSidebar = cols === 1;
  const gridCols = isSidebar 
    ? 'grid-cols-1' 
    : cols === 2 
    ? 'grid-cols-1 sm:grid-cols-2' 
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className={isSidebar ? "mb-10" : "mb-16 md:mb-20"}>
      <div className={`flex items-center gap-3 ${isSidebar ? "mb-6" : "mb-8 md:mb-10"}`}>
        <div className={`${isSidebar ? "w-8 h-8 rounded-xl" : "w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl"} bg-pak-green flex items-center justify-center text-white shadow-lg`}>
          <LayoutGrid className={isSidebar ? "w-4 h-4" : "w-4 h-4 md:w-5 md:h-5"} />
        </div>
        <div>
          <h3 className={`${isSidebar ? "text-xl" : "text-xl md:text-3xl"} font-display font-bold uppercase tracking-tight text-white line-clamp-1`}>
            {title || <>Explore <span className="text-pak-green">PakCric Schedule</span></>}
          </h3>
          <p className="text-[9px] md:text-[10px] font-bold text-ink/30 uppercase tracking-[2px] md:tracking-[4px]">
            {isSidebar ? "Quick Navigation" : "Navigate through our comprehensive portal"}
          </p>
        </div>
      </div>

      <div className={`grid ${isSidebar ? "gap-3" : "gap-4 md:gap-6"} ${gridCols}`}>
        {INTERNAL_LINKS.map((link, idx) => (
          <Link 
            key={idx} 
            to={link.path}
            className={`group bg-card-bg border border-card-border hover:border-pak-green/40 hover:bg-pak-green/5 transition-all flex flex-col justify-between ${isSidebar ? 'p-4 rounded-[24px]' : 'p-5 md:p-6 rounded-2xl md:rounded-[32px]'}`}
          >
            <div>
              <h3 className={`text-white font-bold group-hover:text-pak-green transition-colors ${isSidebar ? 'text-sm mb-1 line-clamp-1' : 'text-base md:text-lg mb-1.5 md:mb-2'}`}>
                {link.name}
              </h3>
              {!isSidebar && (
                <p className="text-ink/50 text-[10px] md:text-xs font-medium leading-relaxed line-clamp-1 md:line-clamp-none">
                  {link.desc}
                </p>
              )}
            </div>
            <div className={`${isSidebar ? "mt-3" : "mt-4 md:mt-6"} flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-pak-green uppercase tracking-[1px] md:tracking-[2px] ${isSidebar ? 'opacity-100' : 'opacity-100 md:opacity-0'} group-hover:opacity-100 transition-all transform md:translate-x-[-10px] group-hover:translate-x-0`}>
              {isSidebar ? "" : "Open Page"} <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
