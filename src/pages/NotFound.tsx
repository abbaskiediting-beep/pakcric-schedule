import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Search, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <Helmet>
        <title>404 - Page Not Found | PakCric Schedule</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="text-center max-w-lg">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex p-6 rounded-[32px] bg-red-500/10 border border-red-500/20 text-red-500 mb-8"
        >
          <AlertCircle className="w-16 h-16" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-4">
          OUT <span className="text-red-500">404</span>
        </h1>
        
        <p className="text-ink/60 font-medium text-lg mb-10 leading-relaxed">
          Looks like that page is out of the crease! We couldn't find what you were looking for. 
          The page might have been moved or doesn't exist anymore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-3 px-8 py-5 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20"
          >
            <Home className="w-4 h-4" /> Go Back Home
          </Link>
          <Link 
            to="/schedule" 
            className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Search className="w-4 h-4" /> View Full Schedule
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[2px] text-neutral-500 mb-16">
          <Link to="/news" className="hover:text-pak-green transition-colors">Latest News</Link>
          <Link to="/rankings" className="hover:text-pak-green transition-colors">ICC Rankings</Link>
          <Link to="/blogs" className="hover:text-pak-green transition-colors">Expert Blogs</Link>
          <Link to="/contact" className="hover:text-pak-green transition-colors">Report Issue</Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 text-left">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Popular Sections</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-3">Series</p>
              <ul className="space-y-2 text-[11px] font-medium text-ink/70">
                <li><Link to="/pakistan-vs-bangladesh-2026-schedule" className="hover:text-pak-green transition-colors italic">✓ Bangladesh Tour</Link></li>
                <li><Link to="/pakistan-upcoming-series-full-schedule" className="hover:text-pak-green transition-colors italic">✓ Full Calendar</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-3">Teams</p>
              <ul className="space-y-2 text-[11px] font-medium text-ink/70">
                <li><Link to="/icc-wtc-projections-2026" className="hover:text-pak-green transition-colors italic">✓ WTC Standings</Link></li>
                <li><Link to="/squads" className="hover:text-pak-green transition-colors italic">✓ Squad Analysis</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-3">Players</p>
              <ul className="space-y-2 text-[11px] font-medium text-ink/70">
                <li><Link to="/players-stats" className="hover:text-pak-green transition-colors italic">✓ Stats Database</Link></li>
                <li><Link to="/rankings/t20-batting" className="hover:text-pak-green transition-colors italic">✓ T20 Rankings</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-3">Info</p>
              <ul className="space-y-2 text-[11px] font-medium text-ink/70">
                <li><Link to="/about" className="hover:text-pak-green transition-colors italic">✓ About Us</Link></li>
                <li><Link to="/terms" className="hover:text-pak-green transition-colors italic">✓ Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
