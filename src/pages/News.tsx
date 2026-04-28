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
    <div className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-6">
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
        className="mb-10 md:mb-16 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6 md:mb-8 text-white leading-tight">
          Latest Pakistan <span className="text-pak-green">Cricket News & Updates</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          <p className="text-lg md:text-xl text-ink/80 font-medium leading-relaxed">
            Cricket in Pakistan moves fast — <Link to="/squads" className="text-pak-green hover:underline">squad changes</Link>, <Link to="/schedule" className="text-pak-green hover:underline">match results</Link>, injuries, and big moments happen all the time. Keeping up with everything can be difficult if you’re checking multiple sources.
          </p>
          <p className="text-sm md:text-base text-ink/60 font-medium leading-relaxed">
            That’s why this page brings together the latest <Link to="/news" className="text-pak-green hover:underline">Pakistan cricket news</Link> and updates in one place. From <Link to="/squads" className="text-pak-green hover:underline">verified announcements</Link> to <Link to="/news" className="text-pak-green hover:underline">match previews</Link> and key <Link to="/news" className="text-pak-green hover:underline">highlights</Link>, everything is presented in a simple and easy-to-read format.
          </p>
        </div>
      </motion.div>

      {/* Top Banner Ad for News Feed */}
      <AdPlaceholder type="leaderboard" className="mb-10 md:mb-16" />

      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-4 md:mb-6">
          Pakistan Cricket <span className="text-pak-green">Latest News</span>
        </h2>
        <p className="text-sm md:text-base text-ink/60 font-medium leading-relaxed max-w-3xl mb-4">
          Here you’ll find the most recent updates related to the <Link to="/" className="text-pak-green hover:underline">Pakistan cricket team</Link>. We cover <Link to="/squads" className="text-pak-green hover:underline">squad announcements</Link>, <Link to="/news" className="text-pak-green hover:underline">match previews</Link> and summaries, player injuries and replacements, and <Link to="/squads" className="text-pak-green hover:underline">team selection updates</Link>.
        </p>
        <p className="text-ink/40 text-[10px] md:text-xs font-medium italic">
          Each update is written clearly so you can quickly understand what’s happening in the <Link to="/schedule" className="text-pak-green hover:underline">upcoming series</Link> without going through unnecessary details.
        </p>
      </div>

      <div className="space-y-10 md:space-y-16">
        {/* Featured News / Hero */}
        {featuredNews && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate(`/news/${featuredNews.id}`)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl md:rounded-[40px] bg-card-bg border border-card-border"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-48 sm:h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center overflow-hidden">
                <Newspaper className="w-24 h-24 sm:w-32 sm:h-32 text-white/5 absolute -right-6 -bottom-6 sm:-right-8 sm:-bottom-8 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div className="text-center relative z-10 px-6 md:px-8">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white transition-colors duration-500">
                      <Newspaper className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-black transition-colors duration-500" />
                   </div>
                   <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-neutral-500">Field Briefing</p>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-black text-[8px] md:text-[9px] font-bold uppercase tracking-widest">{featuredNews.tag}</span>
                  <div className="flex items-center gap-1.5 text-ink/40">
                    <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">{featuredNews.date}</span>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-tight md:leading-none mb-4 md:mb-6 group-hover:text-white transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-sm md:text-lg text-ink/60 font-medium leading-relaxed mb-6 md:mb-8 max-w-lg">
                  {featuredNews.summary}
                </p>
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-all">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
                className="group relative flex flex-col bg-card-bg border border-card-border rounded-2xl md:rounded-[32px] overflow-hidden hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="h-32 sm:h-40 relative flex items-center justify-center bg-gradient-to-br from-white/[0.01] to-transparent border-b border-white/5">
                  <Newspaper className="w-12 h-12 md:w-16 md:h-16 text-white/[0.03] group-hover:text-pak-green/10 transition-colors duration-500" />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                     <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Newspaper className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/40" />
                     </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-neutral-500 border border-white/10 px-2 py-0.5 rounded">{item.tag}</span>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-neutral-700">{item.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight group-hover:text-white transition-colors mb-3 md:mb-4 leading-tight min-h-[50px]">
                    {item.title}
                  </h3>
                  <p className="text-ink/60 text-[11px] md:text-xs font-medium line-clamp-2 leading-relaxed mb-6 italic">
                    "{item.summary}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 group-hover:gap-4 transition-all">
                      <div className="h-px w-4 bg-white/20 group-hover:w-8 group-hover:bg-white transition-all" />
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-all cursor-pointer">Explore</span>
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
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
              <Link to="/news" className="hover:text-pak-green">Match Previews & Insights</Link>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              Before every <Link to="/schedule" className="text-pak-green hover:underline">match</Link>, fans want to know what to expect. This section provides quick <Link to="/news" className="text-pak-green hover:underline">previews</Link> with key information such as match importance, expected <Link to="/squads" className="text-pak-green hover:underline">playing XI</Link>, key players to watch, and possible match outcomes. It helps you stay prepared and makes watching matches more exciting.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              <Link to="/news" className="hover:text-pak-green">Match Reports & Highlights</Link>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              After each <Link to="/schedule" className="text-pak-green hover:underline">match</Link>, we provide short and clear <Link to="/news" className="text-pak-green hover:underline">match reports</Link> so you don’t miss anything important. These reports include match result, top performers, turning points, and <Link to="/news" className="text-pak-green hover:underline">key moments</Link>. Perfect for fans who couldn’t watch the game live but still want a quick summary.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              <Link to="/squads" className="hover:text-pak-green">Squad News & Team Updates</Link>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              Pakistan’s <Link to="/squads" className="text-pak-green hover:underline">squad</Link> often changes depending on the format, series, and player availability. On this page, you’ll get updates about <Link to="/squads" className="text-pak-green hover:underline">new player selections</Link>, injuries and replacements, and changes in <Link to="/squads" className="text-pak-green hover:underline">team combinations</Link>. This ensures you always know the latest team situation before a match.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
              Why Follow <Link to="/news" className="hover:text-pak-green">Pakistan Cricket News Here</Link>
            </h2>
            <p className="text-ink/60 font-medium leading-relaxed">
              Instead of jumping between multiple websites, you can rely on this page for consistent and accurate updates. We focus on <Link to="/news" className="text-pak-green hover:underline">fast and reliable news</Link>, simple and clean content, and regular <Link to="/news" className="text-pak-green hover:underline">daily updates</Link> throughout the year. For more in-depth statistical data and live coverage, you can also explore the <a href="https://www.cricbuzz.com/cricket-news" target="_blank" rel="noopener noreferrer" className="text-pak-green hover:underline">latest world cricket news on Cricbuzz</a>.
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
        <section className="bg-card-bg border border-card-border rounded-3xl md:rounded-[48px] p-8 md:p-16 text-center shadow-3xl">
          <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6 md:mb-8">
            Explore More <span className="text-pak-green">Cricket Content</span>
          </h2>
          <p className="text-sm md:text-base text-ink/60 font-medium max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Looking for more than just news? Get all your Pakistan cricket essentials in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/schedule" className="w-full sm:w-auto px-10 py-3.5 bg-pak-green text-white rounded-xl text-[10px] font-bold uppercase tracking-[3px] hover:scale-105 transition-transform text-center">Match Schedule</Link>
            <Link to="/squads" className="w-full sm:w-auto px-10 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-black transition-all text-center">Squad Updates</Link>
            <Link to="/rankings" className="w-full sm:w-auto px-10 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-black transition-all text-center text-center">Player Stats</Link>
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
