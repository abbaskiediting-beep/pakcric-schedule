import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Search, AlertCircle, MessageSquare, ChevronRight, Trophy, Users, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-screen py-20 px-6 bg-background relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | PakCric Schedule</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pak-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex p-6 rounded-[32px] bg-red-500/10 border border-red-500/20 text-red-500 mb-8"
          >
            <AlertCircle className="w-12 h-12" />
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-white mb-6">
            OUT <span className="text-pak-green">404</span>
          </h1>
          
          <p className="text-ink/60 font-medium text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Looks like you've stepped outside the crease! We couldn't find the page you're searching for. 
            It might have been moved, deleted, or never existed in the first place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-3 px-8 py-5 bg-pak-green text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 hover:bg-pak-green/90 active:scale-95 transition-all shadow-xl shadow-pak-green/20"
            >
              <Home className="w-4 h-4" /> Take Me Home
            </Link>
            <Link 
              to="/schedule" 
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Search className="w-4 h-4" /> Browse Schedule
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Categorized Links */}
          <div className="bg-card-bg border border-card-border rounded-[32px] p-8">
            <h2 className="text-sm font-black uppercase tracking-[4px] text-ink/30 mb-8 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-pak-green" /> Helpful Directories
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Latest Cricket News', path: '/news', icon: MessageSquare },
                { label: 'ICC Rankins 2026', path: '/rankings', icon: Trophy },
                { label: 'Team Squads', path: '/squads', icon: Users },
                { label: 'Match Schedule', path: '/schedule', icon: ChevronRight },
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-pak-green/30 hover:bg-pak-green/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-4 h-4 text-neutral-500 group-hover:text-pak-green transition-colors" />
                    <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-700 group-hover:text-pak-green transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Report Issue Section */}
          <div className="bg-card-bg border border-card-border rounded-[32px] p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Found a Broken Link?
            </h3>
            <p className="text-ink/40 text-sm mb-8 leading-relaxed">
              If you believe this is an error on our part, please report it! 
              We'll fix it immediately to keep the boundary clean.
            </p>
            <Link 
              to="/contact?reason=broken_link" 
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-red-500 hover:border-red-500 hover:text-white transition-all shadow-lg"
            >
              Report Technical Issue
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[6px] text-neutral-700">
            © 2026 PakCric Schedule Portal
          </p>
        </div>
      </div>
    </div>
  );
}
