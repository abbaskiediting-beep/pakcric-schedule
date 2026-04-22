import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { NEWS_DATA } from '../newsData';

export default function News() {
  const navigate = useNavigate();
  const featuredNews = NEWS_DATA[0];
  const otherNews = NEWS_DATA.slice(1);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6 leading-[0.85]">
          Field <span className="text-white">Reports</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/20" />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">Latest Updates • April 2026</p>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </motion.div>

      <div className="space-y-16">
        {/* Featured News / Hero */}
        {featuredNews && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate(`/news/${featuredNews.id}`)}
            className="group relative cursor-pointer overflow-hidden rounded-[40px] bg-card-bg border border-card-border"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredNews.imageUrl || 'https://picsum.photos/seed/latest/1200/800'} 
                  alt={featuredNews.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:hidden" />
              </div>
              <div className="p-8 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white text-black text-[9px] font-bold uppercase tracking-widest">{featuredNews.tag}</span>
                  <div className="flex items-center gap-1.5 text-ink/40">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">{featuredNews.date}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-none mb-6 group-hover:text-white transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-ink/60 font-medium leading-relaxed mb-8 max-w-lg">
                  {featuredNews.summary}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-all">
                  Read Full Report <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </motion.div>
        )}

        {/* Other News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherNews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              onClick={() => navigate(`/news/${item.id}`)}
              className="group relative flex flex-col bg-card-bg border border-card-border rounded-[32px] overflow-hidden hover:border-white/30 transition-all cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <img 
                  src={item.imageUrl || `https://picsum.photos/seed/${item.id}/800/600`} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card-bg to-transparent" />
              </div>
              <div className="p-8 pt-0 -mt-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 border border-white/10 px-2 py-0.5 rounded">{item.tag}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-700">{item.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-white transition-colors mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-ink/60 text-xs font-medium line-clamp-2 leading-relaxed mb-6 italic">
                  "{item.summary}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 group-hover:gap-4 transition-all">
                    <div className="h-px w-4 bg-white/20 group-hover:w-8 group-hover:bg-white transition-all" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-all cursor-pointer">Explore</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Empty State / Coming Soon */}
          {otherNews.length === 0 && (
             <div className="md:col-span-2 py-20 border border-dashed border-card-border rounded-[40px] flex flex-col items-center justify-center opacity-30">
                <Newspaper className="w-12 h-12 mb-4" />
                <p className="text-[10px] font-bold uppercase tracking-[0.5em]">More briefing coming soon</p>
             </div>
          )}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 hover:opacity-100 transition-opacity"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Newspaper className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white">Press Relations</p>
            <p className="text-[9px] font-bold uppercase tracking-tighter">Authorized Agency Portal</p>
          </div>
        </div>
        <div className="text-[10px] font-mono tracking-widest uppercase">
          Transmission Status: SECURE // 2026_PK_RPT
        </div>
      </motion.div>
    </div>
  );
}
