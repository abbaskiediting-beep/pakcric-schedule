import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, Zap } from 'lucide-react';
import { BLOG_POSTS, AUTHORS } from '../data/blogData';

export default function RelatedNews() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Define paths to exclude from displaying Related News
  const EXCLUDED_PATHS = [
    '/',
    '/schedule',
    '/rankings',
    '/news',
    '/squads',
    '/venues',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/players-stats',
    '/pakistan-cricket-series',
    '/away-tours',
    '/home-series',
    '/pakistan-home-series-2026',
    '/pakistan-away-tours-2026'
  ];

  // Only show on actual blog/news pages (either explicit path in database OR starts with /news/)
  const isBlogPage = BLOG_POSTS.some(post => post.path === currentPath) ||
                     (currentPath.startsWith('/news/') && currentPath !== '/news');

  if (!isBlogPage || EXCLUDED_PATHS.includes(currentPath)) {
    return null;
  }

  // Find current post info if available
  const currentPost = BLOG_POSTS.find(post => post.path === currentPath);
  
  // Extract keywords for dynamic search
  const getKeywords = () => {
    const words: string[] = [];
    if (currentPost) {
      words.push(...currentPost.title.toLowerCase().split(/\s+/));
      words.push(...currentPost.summary.toLowerCase().split(/\s+/));
      words.push(currentPost.category.toLowerCase());
    } else {
      // Dynamic fallback based on path slug
      const slug = currentPath.split('/').pop() || '';
      words.push(...slug.toLowerCase().split('-'));
    }
    
    // Filter out common short words & noise
    const stopwords = new Set([
      'the', 'a', 'an', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 
      'from', 'with', 'in', 'of', 'is', 'are', 'was', 'were', 'has', 'have', 'had',
      'be', 'been', 'being', 'this', 'that', 'these', 'those', 'it', 'its', 'as', 
      'vs', 'report', 'blog', 'analysis', 'full', 'match', 'test', 'odi', 't20', 't20i'
    ]);
    
    return words
      .map(w => w.replace(/[^a-z0-9]/g, ''))
      .filter(w => w.length > 2 && !stopwords.has(w));
  };

  const keywords = getKeywords();

  // High weight keywords mapped to score boosts
  const tagWeights: { [key: string]: string[] } = {
    'babar': ['babar', 'azam'],
    'captaincy': ['captain', 'captaincy', 'masood', 'leadership'],
    'psl': ['psl', 'zalmi', 'kingsmen', 'sultans', 'united'],
    'bangladesh': ['bangladesh', 'ban', 'sylhet', 'dhaka'],
    'australia': ['australia', 'aus', 'lahore', 'pindi', 'minhas'],
    'rizwan': ['rizwan', 'mohammad'],
    'shaheen': ['shaheen', 'afridi'],
    'sana': ['fatima', 'sana', 'women']
  };

  // Score each blog post based on tag / keyword overlap
  const scoredPosts = BLOG_POSTS
    .filter(post => post.path !== currentPath && !EXCLUDED_PATHS.includes(post.path))
    .map(post => {
      let score = 0;
      const titleLower = post.title.toLowerCase();
      const summaryLower = post.summary.toLowerCase();
      const categoryLower = post.category.toLowerCase();

      // Category matching
      if (currentPost && post.category === currentPost.category) {
        score += 5;
      }

      // Overlap with extracted keywords
      keywords.forEach(kw => {
        if (titleLower.includes(kw)) score += 3;
        if (summaryLower.includes(kw)) score += 1;
        if (categoryLower.includes(kw)) score += 2;
      });

      // Special high-weight tags matching (e.g., Babar Azam or Captaincy)
      Object.entries(tagWeights).forEach(([tag, triggerWords]) => {
        // If current article matches this tag
        const currentMatchesTag = triggerWords.some(tw => 
          currentPath.toLowerCase().includes(tw) || 
          (currentPost && (currentPost.title.toLowerCase().includes(tw) || currentPost.summary.toLowerCase().includes(tw)))
        );

        if (currentMatchesTag) {
          // Check if candidate post also matches this tag
          const candidateMatchesTag = triggerWords.some(tw => 
            post.title.toLowerCase().includes(tw) || post.summary.toLowerCase().includes(tw)
          );
          if (candidateMatchesTag) {
            score += 15; // massive boost for semantic match on tags like Captaincy or Babar Azam!
          }
        }
      });

      return { post, score };
    })
    // Sort by score descending, then date/index
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.post);

  // Fallback to latest posts if not enough matches (should be rare)
  const relatedList = scoredPosts.length >= 3 
    ? scoredPosts 
    : [
        ...scoredPosts, 
        ...BLOG_POSTS.filter(p => p.path !== currentPath && !scoredPosts.some(s => s.id === p.id) && !EXCLUDED_PATHS.includes(p.path))
      ].slice(0, 3);

  return (
    <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-white/10 mt-16 md:mt-24 bg-[#030303]/40">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-3 md:gap-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green shadow-lg">
              <Zap className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-display font-black uppercase tracking-tight text-white leading-none mb-1">
                Related News & Updates
              </h3>
              <p className="text-[9px] md:text-xs text-ink/40 font-black uppercase tracking-widest">
                Handpicked based on your reading interest
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {relatedList.map((blog, idx) => {
            const author = AUTHORS.find(a => a.id === blog.authorId);
            return (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  navigate(blog.path);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-card-bg border border-card-border rounded-2xl md:rounded-[28px] p-6 flex flex-col h-full group hover:bg-white/[0.02] hover:border-pak-green/30 transition-all cursor-pointer shadow-xl relative overflow-hidden active:scale-[0.98]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pak-green/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-pak-green/10 transition-all" />
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="px-2.5 py-0.5 bg-pak-green/10 text-pak-green rounded-full text-[8px] font-black uppercase tracking-widest border border-pak-green/10 group-hover:bg-pak-green group-hover:text-white transition-all">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[8.5px] font-black text-ink/40 group-hover:text-white transition-colors uppercase tracking-widest">
                    <Calendar className="w-2.5 h-2.5" />
                    {blog.date}
                  </div>
                </div>

                <h4 className="text-base sm:text-lg md:text-xl font-display font-black text-white mb-3 leading-[1.3] group-hover:text-pak-green transition-colors line-clamp-3 relative z-10 italic">
                  {blog.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-ink/60 font-medium mb-6 line-clamp-3 leading-relaxed relative z-10 group-hover:text-ink/80 transition-colors">
                  {blog.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl border border-white/10 overflow-hidden bg-white/5 group-hover:border-pak-green transition-colors">
                      <img src={author?.avatarUrl} alt={author?.name} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover scale-110" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-white group-hover:text-pak-green transition-colors tracking-tight">{author?.name}</span>
                      <span className="text-[8px] font-bold text-ink/30 uppercase tracking-[1px]">{author?.role}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-pak-green/10 flex items-center justify-center text-pak-green group-hover:bg-pak-green group-hover:text-white transition-all shadow-md shrink-0">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
