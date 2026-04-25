import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Newspaper, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { NEWS_DATA } from '../newsData';
import React from 'react';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

export default function News() {
  const navigate = useNavigate();
  const featuredNews = NEWS_DATA[0];
  const otherNews = NEWS_DATA.slice(1);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan Cricket News 2026 – Latest Updates, Squad News & Match Reports</title>
        <meta name="description" content="Stay updated with Pakistan cricket news 2026 including squad announcements, match previews, injuries, and latest team updates." />
        <meta name="keywords" content="Pakistan cricket news, Pakistan team updates, Pakistan squad news, cricket news 2026, PCB news" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pakistan Cricket News 2026 – Latest Updates, Squad News & Match Reports" />
        <meta property="og:description" content="Stay updated with Pakistan cricket news 2026 including squad announcements, match previews, injuries, and latest team updates." />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
          Latest Pakistan <span className="text-pak-green">Cricket News & Updates</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-ink/80 font-medium leading-relaxed">
            Cricket in Pakistan moves fast — squad changes, match results, injuries, and big moments happen all the time. Keeping up with everything can be difficult if you’re checking multiple sources.
          </p>
          <p className="text-ink/60 font-medium leading-relaxed">
            That’s why this page brings together the latest Pakistan cricket news and updates in one place. From official announcements to match previews and key highlights, everything is presented in a simple and easy-to-read format.
          </p>
        </div>
      </motion.div>

      {/* Top Banner Ad for News Feed */}
      <AdPlaceholder type="leaderboard" className="mb-16" />

      <div className="mb-12">
        <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Pakistan Cricket <span className="text-pak-green">Latest News</span>
        </h2>
        <p className="text-ink/60 font-medium leading-relaxed max-w-3xl mb-4">
          Here you’ll find the most recent updates related to the Pakistan cricket team. We cover squad announcements, match previews and summaries, player injuries and replacements, and team selection updates.
        </p>
        <p className="text-ink/40 text-xs font-medium italic">
          Each update is written clearly so you can quickly understand what’s happening without going through unnecessary details.
        </p>
      </div>

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

        {/* Detailed Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              Match Previews & <span className="text-pak-green">Insights</span>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              Before every match, fans want to know what to expect. This section provides quick previews with key information such as match importance, expected playing XI, key players to watch, and possible match outcomes. It helps you stay prepared and makes watching matches more exciting.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              Match Reports & <span className="text-pak-green">Highlights</span>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              After each match, we provide short and clear match reports so you don’t miss anything important. These reports include match result, top performers, turning points, and key moments. Perfect for fans who couldn’t watch the game live but still want a quick summary.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              Squad News & <span className="text-pak-green">Team Updates</span>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              Pakistan’s squad often changes depending on the format, series, and player availability. On this page, you’ll get updates about new player selections, injuries and replacements, and changes in team combinations. This ensures you always know the latest team situation before a match.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              Why Follow Pakistan <span className="text-pak-green">Cricket News Here</span>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              Instead of jumping between multiple websites, you can rely on this page for consistent and accurate updates. We focus on fast and reliable news, simple and clean content, and regular updates throughout the day.
            </p>
          </section>
        </div>

        <section className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-6">
            Stay Updated with Every <span className="text-pak-green">Development</span>
          </h2>
          <p className="text-ink/60 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Cricket news changes quickly, especially during busy series and tournaments. We update this page regularly so you always get the latest and most relevant information about Pakistan cricket. Bookmark this page and check back often.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-card-bg border border-card-border rounded-[48px] p-10 md:p-16 text-center shadow-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">
            Explore More <span className="text-pak-green">Pakistan Cricket Content</span>
          </h2>
          <p className="text-ink/60 font-medium max-w-xl mx-auto mb-10">
            Looking for more than just news? Get all your Pakistan cricket essentials in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule" className="px-8 py-3 bg-pak-green text-white rounded-xl text-[10px] font-bold uppercase tracking-[3px] hover:scale-105 transition-transform">Match Schedule</Link>
            <Link to="/squads" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-black transition-all">Squad Updates</Link>
            <Link to="/rankings" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-black transition-all">Player Stats</Link>
          </div>
        </section>

        <InternalLinkSection />
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
