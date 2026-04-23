import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Search, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <Helmet>
        <title>404 - Page Not Found | Pakistan Cricket Hub</title>
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
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-pak-green/20"
          >
            <Home className="w-4 h-4" /> Go Back Home
          </Link>
          <Link 
            to="/schedule" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Search className="w-4 h-4" /> Check Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
