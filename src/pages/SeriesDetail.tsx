import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { seriesSummaries } from '../data/seriesData';
import SeriesSummaryComponent from '../components/SeriesSummaryComponent';
import { ArrowLeft, Share2, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function SeriesDetail() {
  const { id } = useParams();
  const summary = seriesSummaries.find(s => s.id === id);

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
             <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-pak-green rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-pak-green/20 w-full sm:w-auto">
                <Share2 className="w-4 h-4" />
                Share Report
             </button>
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

        {/* Disclaimer */}
        <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-[32px] flex gap-6 items-start opacity-60">
           <Info className="w-6 h-6 text-white/40 shrink-0 mt-1" />
           <div className="text-sm leading-relaxed text-white/60 font-medium italic">
             <strong>Note on Intelligence Reports:</strong> Predicted Playing XIs are based on current team form, fitness updates, and local pitch conditions. Final lineups will be confirmed 30 minutes before the toss. Head-to-head records include all official fixtures as of April 2026.
           </div>
        </div>
      </main>
    </div>
  );
}
