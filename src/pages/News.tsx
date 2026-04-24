import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Newspaper, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { NEWS_DATA } from '../newsData';
import React from 'react';
import AdPlaceholder from '../components/AdPlaceholder';

export default function News() {
  const navigate = useNavigate();
  const featuredNews = NEWS_DATA[0];
  const otherNews = NEWS_DATA.slice(1);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan Cricket News Today – Latest Updates 2026</title>
        <meta name="description" content="Get the latest Pakistan cricket news, team updates, match previews, and breaking stories in 2026." />
        <meta name="keywords" content="Pakistan cricket news, latest cricket updates, green shirts news, PCB news 2026" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Cricket News Today – Latest Updates 2026" />
        <meta property="og:description" content="Get the latest Pakistan cricket news, team updates, match previews, and breaking stories in 2026." />
        <meta property="og:url" content="https://pakcric-schedule.online/news" />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 text-ink">
          Latest Pakistan <span className="text-pak-green">Cricket News & Updates</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/20" />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">Latest Updates • April 2026</p>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </motion.div>

      {/* Top Banner Ad for News Feed */}
      <AdPlaceholder type="leaderboard" className="mb-16" />

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
              <div className="relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden">
                <Newspaper className="w-32 h-32 text-white/5 absolute -right-8 -bottom-8 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div className="text-center relative z-10 px-8">
                   <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors duration-500">
                      <Newspaper className="w-8 h-8 text-white group-hover:text-black transition-colors duration-500" />
                   </div>
                   <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-500">Field Briefing</p>
                </div>
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

        {/* Ad after featured post */}
        <AdPlaceholder type="banner" className="my-12" />

        {/* Other News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherNews.map((item, idx) => (
            <React.Fragment key={item.id}>
              {/* Mid-grid ad placement every 4 items */}
              {idx > 0 && idx % 4 === 0 && (
                <div className="md:col-span-2">
                  <AdPlaceholder type="native" className="mb-4" />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                onClick={() => navigate(`/news/${item.id}`)}
                className="group relative flex flex-col bg-card-bg border border-card-border rounded-[32px] overflow-hidden hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="h-40 relative flex items-center justify-center bg-gradient-to-br from-white/[0.01] to-transparent border-b border-white/5">
                  <Newspaper className="w-16 h-16 text-white/[0.03] group-hover:text-pak-green/10 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                     <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Newspaper className="w-4 h-4 text-white/40" />
                     </div>
                  </div>
                </div>
                <div className="p-8 relative z-10">
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
            </React.Fragment>
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
