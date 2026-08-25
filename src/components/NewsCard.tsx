import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, ArrowRight, Newspaper, User, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export interface NewsCardProps {
  id: string;
  title: string;
  tag: string;
  date: string;
  summary?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  color?: string;
  borderColor?: string;
  author?: string;
  readTime?: string;
  variant?: 'featured' | 'condensed';
  className?: string;
  badgeText?: string;
}

// Fallback high quality cricket thumbnails based on category or ID hash
const DEFAULT_CRICKET_IMAGES: Record<string, string> = {
  'Test Series': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200',
  'Match Report': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200',
  'Tour Warm-up': 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1200',
  'Captaincy Alert': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200',
  'ICC Announcement': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200',
  'Squad Alert': 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1200',
  'default': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200'
};

export const getNewsImage = (id: string, tag?: string, explicitUrl?: string): string => {
  if (explicitUrl) return explicitUrl;
  if (tag && DEFAULT_CRICKET_IMAGES[tag]) return DEFAULT_CRICKET_IMAGES[tag];
  return DEFAULT_CRICKET_IMAGES['default'];
};

export default function NewsCard({
  id,
  title,
  tag,
  date,
  summary,
  imageUrl,
  icon,
  color,
  borderColor,
  author = 'PakCric Editorial',
  readTime = '2 min read',
  variant = 'condensed',
  className = '',
  badgeText
}: NewsCardProps) {
  const thumbUrl = getNewsImage(id, tag, imageUrl);

  if (variant === 'featured') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-card-bg border border-white/10 hover:border-pak-green/40 shadow-xl transition-all duration-300 ${className}`}
      >
        <Link to={`/news/${id}`} className="block">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Thumbnail Image Container */}
            <div className="md:col-span-6 lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] md:min-h-full overflow-hidden bg-neutral-900">
              <img
                src={thumbUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/30 md:to-black/80" />

              {/* Badges on Thumbnail */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-pak-green text-white text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                  {badgeText || 'Top Story'}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              </div>

              {icon && (
                <div className="absolute bottom-4 left-4 z-10 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  {icon}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="md:col-span-6 lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs font-bold text-white/60 mb-3">
                  <span className="flex items-center gap-1 text-white/80">
                    <Calendar className="w-3.5 h-3.5 text-pak-green" />
                    {date}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="flex items-center gap-1 text-white/60">
                    <Clock className="w-3.5 h-3.5 text-white/40" />
                    {readTime}
                  </span>
                  {author && (
                    <>
                      <span className="text-white/30 hidden sm:inline">•</span>
                      <span className="hidden sm:flex items-center gap-1 text-white/50">
                        <User className="w-3.5 h-3.5 text-white/40" />
                        {author}
                      </span>
                    </>
                  )}
                </div>

                {/* Headline */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-black uppercase tracking-tight text-white group-hover:text-pak-green transition-colors leading-tight mb-3">
                  {title}
                </h3>

                {/* Excerpt / Summary */}
                {summary && (
                  <p className="text-xs sm:text-sm text-ink/75 font-medium leading-relaxed line-clamp-3 sm:line-clamp-4 border-l-2 border-pak-green/40 pl-3 italic">
                    "{summary}"
                  </p>
                )}
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-pak-green group-hover:text-white transition-colors">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <span className="text-[10px] uppercase font-bold text-white/30 tracking-wider">
                  Verified Update
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Condensed View
  return (
    <motion.div
      whileHover={{ x: 2 }}
      transition={{ duration: 0.15 }}
      className={`group relative ${className}`}
    >
      <Link
        to={`/news/${id}`}
        className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-card-bg/90 hover:bg-white/[0.06] border border-white/10 hover:border-pak-green/30 transition-all duration-200 shadow-md group`}
      >
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
          {/* Compact Image or Icon Badge */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shrink-0 overflow-hidden relative border border-white/10 bg-neutral-900 flex items-center justify-center">
            {imageUrl || thumbUrl ? (
              <img
                src={thumbUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-white/10 flex items-center justify-center text-white">
                {icon || <Newspaper className="w-5 h-5 text-pak-green" />}
              </div>
            )}
            {icon && imageUrl && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {icon}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-black tracking-wider uppercase mb-1">
              <span className="text-pak-green bg-pak-green/10 border border-pak-green/20 px-2 py-0.5 rounded-md">
                {tag}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-white/60 font-semibold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-white/40 shrink-0" />
                {date}
              </span>
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-pak-green transition-colors line-clamp-2 leading-snug">
              {title}
            </h4>

            {summary && (
              <p className="text-[11px] text-ink/50 line-clamp-1 mt-1 hidden sm:block">
                {summary}
              </p>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-pak-green/20 border border-white/10 group-hover:border-pak-green/40 flex items-center justify-center text-white/40 group-hover:text-pak-green transition-all shrink-0 ml-2">
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
