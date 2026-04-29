import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid } from 'lucide-react';

const INTERNAL_LINKS = [
  { name: 'Full Schedule 2026', path: '/schedule', desc: 'Complete match fixtures and venues' },
  { name: 'Squad Details', path: '/squads', desc: 'Pakistan team selection and analysis' },
  { name: 'ICC Rankings', path: '/rankings', desc: 'Latest player and team standings' },
  { name: 'WTC Projections', path: '/icc-wtc-projections-2026', desc: 'World Test Championship updates' },
  { name: 'Latest News', path: '/news', desc: 'Daily updates from the cricket world' },
  { name: 'Expert Blogs', path: '/blogs', desc: 'Tactical analysis and match previews' },
  { name: 'Player Stats', path: '/players-stats', desc: 'In-depth performance metrics' },
  { name: 'About PakCric', path: '/about', desc: 'Learn more about our portal' },
];

interface InternalLinkSectionProps {
  cols?: 1 | 2 | 3 | 4;
  title?: string;
}

export default function InternalLinkSection({ cols, title }: InternalLinkSectionProps) {
  const gridCols = cols === 1 
    ? 'grid-cols-1' 
    : cols === 2 
    ? 'grid-cols-1 sm:grid-cols-2' 
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-2xl bg-pak-green flex items-center justify-center text-white shadow-lg">
          <LayoutGrid className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white line-clamp-1">
            {title || <>Explore <span className="text-pak-green">PakCric Schedule</span></>}
          </h3>
          <p className="text-[10px] font-bold text-ink/30 uppercase tracking-[4px]">
            Navigate through our comprehensive portal
          </p>
        </div>
      </div>

      <div className={`grid gap-6 ${gridCols}`}>
        {INTERNAL_LINKS.map((link, idx) => (
          <Link 
            key={idx} 
            to={link.path}
            className={`group bg-card-bg border border-card-border rounded-[32px] hover:border-pak-green/40 hover:bg-pak-green/5 transition-all flex flex-col justify-between ${cols === 1 ? 'p-5' : 'p-6'}`}
          >
            <div>
              <h3 className={`text-white font-bold mb-2 group-hover:text-pak-green transition-colors ${cols === 1 ? 'text-base' : 'text-lg'}`}>
                {link.name}
              </h3>
              <p className="text-ink/50 text-xs font-medium leading-relaxed">
                {link.desc}
              </p>
            </div>
            <div className={`mt-6 flex items-center gap-2 text-[10px] font-bold text-pak-green uppercase tracking-[2px] ${cols === 1 ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0`}>
              Open Page <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
