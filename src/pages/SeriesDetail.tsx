import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seriesSummaries } from '../data/seriesData';
import SeriesSummaryComponent from '../components/SeriesSummaryComponent';
import { ArrowLeft, Info, ArrowRight, Newspaper, ChevronRight, Calendar } from 'lucide-react';
import ShareButton from '../components/ShareButton';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/blogData';

export default function SeriesDetail() {
  const { slug } = useParams();
  const currentIndex = seriesSummaries.findIndex(s => s.id === slug);
  const summary = seriesSummaries[currentIndex];
  const prevSummary = currentIndex > 0 ? seriesSummaries[currentIndex - 1] : null;
  const nextSummary = currentIndex < seriesSummaries.length - 1 ? seriesSummaries[currentIndex + 1] : null;

  // Filter relevant blogs/news for this series
  const relevantBlogs = BLOG_POSTS.filter(blog => {
    const seriesKeywords = summary?.seriesName.toLowerCase().split(' ');
    const titleLower = blog.title.toLowerCase();
    const summaryLower = blog.summary.toLowerCase();
    
    // Check if any major keyword match (pakistan, bangladesh, psl etc)
    const keywordsToMatch = ['bangladesh', 'australia', 'psl', 'zimbabwe', 'england'];
    const seriesMainTarget = keywordsToMatch.find(k => summary?.seriesName.toLowerCase().includes(k));
    
    if (seriesMainTarget && (titleLower.includes(seriesMainTarget) || summaryLower.includes(seriesMainTarget))) {
        return true;
    }
    return false;
  }).reverse().slice(0, 4);

  if (!summary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary text-white">
        <div className="text-center">
          <h2 className="text-4xl font-display font-black mb-4 uppercase">Series Not Found</h2>
          <Link to="/" className="text-pak-green font-bold hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-white pb-20">
      <Helmet>
        <title>{summary.seriesName} Intelligence | PakCric Intelligence</title>
        <meta name="description" content={`Full intelligence report for ${summary.seriesName}. Head to head, venue history, and predicted playing XIs.`} />
      </Helmet>

      {/* Breadcrumb / Top Bar */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-[24px] gap-4">
          <Link to="/" className="flex items-center gap-2 text-ink/40 hover:text-pak-green transition-colors group self-start sm:self-auto">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Schedule</span>
          </Link>
          <div className="flex items-center gap-4 w-full sm:w-auto">
             <ShareButton 
               title={`${summary.seriesName} - Series Intelligence Report`}
               text={`Check out the full intelligence report for ${summary.seriesName} on PakCric Intelligence! Head to head, venue history, and predicted playing XIs.`}
               url={window.location.href}
               variant="filled"
               className="w-full sm:w-auto"
             />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <SeriesSummaryComponent summary={summary} />
        </motion.div>

      {/* Related News / Analysis section for this series */}
        {relevantBlogs.length > 0 && (
          <section className="mt-12 sm:mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pak-green/10 flex items-center justify-center text-pak-green shadow-lg border border-pak-green/20">
                  <Newspaper className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                   <h3 className="text-lg sm:text-2xl font-display font-black text-white uppercase italic tracking-tighter leading-tight mb-1 sm:mb-2">Intel & Insights</h3>
                   <p className="text-[9px] sm:text-[10px] font-bold text-ink/40 uppercase tracking-widest leading-none">Previews & tactical reports</p>
                </div>
              </div>
              <Link to="/news" className="text-[9px] sm:text-[10px] font-black text-pak-green hover:underline uppercase tracking-widest flex items-center gap-2 self-end sm:self-auto">
                Explore All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {relevantBlogs.map((blog, idx) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link 
                    to={blog.path}
                    className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-[32px] hover:bg-white/[0.06] hover:border-pak-green/30 transition-all group h-full active:scale-[0.98]"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-0.5 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[8px] font-black uppercase tracking-widest">
                          {blog.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[8px] font-bold text-white/30 uppercase tracking-[1.5px]">
                          <Calendar className="w-3 h-3" />
                          {blog.date}
                        </div>
                      </div>
                      <h4 className="text-sm sm:text-base font-display font-black text-white group-hover:text-pak-green transition-colors uppercase leading-tight line-clamp-2 mb-2 italic">
                        {blog.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-white/50 line-clamp-2 font-medium leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-pak-green group-hover:text-white transition-all shrink-0 self-end sm:self-center">
                       <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <div className="mt-12 p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-[32px] flex flex-col sm:flex-row gap-4 sm:gap-6 items-start opacity-60">
           <Info className="w-6 h-6 text-white/40 shrink-0 mt-1" />
           <div className="text-xs md:text-sm leading-relaxed text-white/60 font-medium italic">
             <strong>Note on Intelligence Reports:</strong> Predicted Playing XIs are based on current team form, fitness updates, and local pitch conditions. Final lineups will be confirmed 30 minutes before the toss.
           </div>
        </div>

        {/* Series Navigation */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {prevSummary ? (
            <Link 
              to={`/series-intelligence/${prevSummary.id}`}
              className="flex flex-col gap-2 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-[32px] hover:bg-white/[0.08] hover:border-pak-green/30 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-pak-green uppercase tracking-widest">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Previous Report
              </div>
              <div className="text-base md:text-lg font-display font-black uppercase italic truncate">{prevSummary.seriesName}</div>
            </Link>
          ) : <div />}

          {nextSummary ? (
            <Link 
              to={`/series-intelligence/${nextSummary.id}`}
              className="flex flex-col items-end gap-2 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-[32px] hover:bg-white/[0.08] hover:border-pak-green/30 transition-all group text-right active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-pak-green uppercase tracking-widest">
                Next Report
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-base md:text-lg font-display font-black uppercase italic truncate">{nextSummary.seriesName}</div>
            </Link>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}
