import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Image, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles, 
  Maximize2,
  Tv,
  Heart,
  Eye,
  Info
} from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'pitch' | 'stands' | 'surroundings';
  title: string;
  url: string;
  description: string;
}

interface StadiumGalleryProps {
  stadiumName: string;
}

// Custom curated photo database featuring high-quality, stable Unsplash sport images mapped specifically to each stadium's unique character
const GALLERY_DATABASE: Record<string, GalleryItem[]> = {
  "Gaddafi Stadium": [
    {
      id: "gaddafi-pitch",
      category: "pitch",
      title: "Gaddafi Central Wicket",
      url: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=1200",
      description: "Close-up of the legendary flat batsman-heaven bowling deck. Hard-rolled clay preparation with excellent carry."
    },
    {
      id: "gaddafi-stands",
      category: "stands",
      title: "Wasim Akram Grandstand Enclosure",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200",
      description: "Spectacular sweeping views of the historic curved brick pavilion arches packed under floodlights during high-voltage matchdays."
    },
    {
      id: "gaddafi-surroundings",
      category: "surroundings",
      title: "Lahore Sports Campus Surroundings",
      url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1200",
      description: "Aerial view of the surrounding leafy Nishtar Park sports complex, training squares, and Liberty market bypass roads."
    }
  ],
  "National Bank Stadium": [
    {
      id: "karachi-pitch",
      category: "pitch",
      title: "Karachi Slur Dust-Premium Pitch",
      url: "https://images.unsplash.com/photo-1595152230232-a6f6717a61f4?auto=format&fit=crop&q=80&w=1200",
      description: "Dry, spin-friendly wicket featuring subtle cracks by Day 3. Expertly rolled with specialized red-clay content."
    },
    {
      id: "karachi-stands",
      category: "stands",
      title: "Hanif Mohammad Seating Ring",
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=1200",
      description: "Vast double-tier concrete stands displaying the ultimate energy of the Karachi cricket-crazy metropolitan fans."
    },
    {
      id: "karachi-surroundings",
      category: "surroundings",
      title: "Karsaz Area skyline View",
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
      description: "Distant panoramic bird's eye view from the high towers, overlooking the active arterial roads and Karsaz Flyovers."
    }
  ],
  "Rawalpindi Cricket Stadium": [
    {
      id: "pindi-pitch",
      category: "pitch",
      title: "Rawalpindi Expressway Track",
      url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1200",
      description: "Gleaming grass cover showcasing the fast-paced, high-bouncing surface notorious for rapid boundary chases."
    },
    {
      id: "pindi-stands",
      category: "stands",
      title: "Pindi Main Wing & Media Boxes",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200",
      description: "Sleek, close-knit grandstands holding local matching crowds under brilliant sun conditions."
    },
    {
      id: "pindi-surroundings",
      category: "surroundings",
      title: "Food Street Double-Road Vista",
      url: "https://images.unsplash.com/photo-1513836279014-a82857be912e?auto=format&fit=crop&q=80&w=1200",
      description: "Scenic pine-skirted outer roads connecting the stadium with Pindi's most iconic traditional dining lanes."
    }
  ],
  "Multan Cricket Stadium": [
    {
      id: "multan-pitch",
      category: "pitch",
      title: "Multan Dry Clay Pitch",
      url: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=1200",
      description: "Golden heated surface perfectly optimized to invoke explosive reverse-swing during high-temperature midday sessions."
    },
    {
      id: "multan-stands",
      category: "stands",
      title: "Inzamam-ul-Haq Stand Rings",
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
      description: "Generously shaded white roof structures sheltering passionate south-Punjab crowds from the blazing desert sun."
    },
    {
      id: "multan-surroundings",
      category: "surroundings",
      title: "Lush Southern Punjab Oasis",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
      description: "Outer agricultural date-palm fields and broad scenic desert bypass roads encompassing the stadium periphery."
    }
  ]
};

// High-quality generic fallback gallery to secure seamless visual experience for overseas/unlisted stadiums
const DEFAULT_FALLBACK_GALLERY = (name: string): GalleryItem[] => [
  {
    id: `${name}-pitch-fallback`,
    category: "pitch",
    title: "Premium Turf Pitch",
    url: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=1200",
    description: `Impeccably prepared first-class sports lawn at ${name}. Level turf meticulously trimmed to 3mm height.`
  },
  {
    id: `${name}-stands-fallback`,
    category: "stands",
    title: "Spectator Amphitheater",
    url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200",
    description: `Multi-tiered seating bowl surrounding the pitch, offering unobstructed views from all pavilion angles.`
  },
  {
    id: `${name}-surroundings-fallback`,
    category: "surroundings",
    title: "Stadium Parklands & Campus",
    url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1200",
    description: `Leafy boulevard, public transport drop-points, and modern fan zone parks surrounding the outer boundary fence.`
  }
];

export default function StadiumGallery({ stadiumName }: StadiumGalleryProps) {
  const images = GALLERY_DATABASE[stadiumName] || DEFAULT_FALLBACK_GALLERY(stadiumName);
  
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'pitch': return '🏏';
      case 'stands': return '🏟️';
      default: return '🌳';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image className="w-4 h-4 text-pak-green animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[2px] text-white">Stadium Photo Archive</span>
        </div>
        <span className="text-[9px] font-bold text-ink/40 uppercase tracking-wider flex items-center gap-1">
          Click to View fullscreen <Maximize2 className="w-3 h-3 text-pak-green" />
        </span>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, index) => (
          <div 
            key={img.id}
            onClick={() => setActiveImageIndex(index)}
            onMouseEnter={() => setHoveredCategory(img.category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-white/5 hover:border-pak-green/45 transition-all duration-300 cursor-pointer shadow-lg bg-[#141415]"
            id={`stadium-gallery-thumb-${img.category}`}
          >
            {/* Background Image */}
            <img 
              src={img.url} 
              alt={img.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-[0.80] group-hover:brightness-100"
            />

            {/* Glass Overlap Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity" />

            {/* Category / Icon tag */}
            <div className="absolute top-2 left-2 bg-black/75 border border-white/10 text-white rounded-lg px-2 py-0.5 text-[8px] font-black uppercase tracking-wider flex items-center gap-1 transition-all group-hover:border-pak-green/30">
              <span>{getCategoryEmoji(img.category)}</span>
              <span className="hidden xs:inline">{img.category}</span>
            </div>

            {/* Title display */}
            <div className="absolute bottom-2 left-2 right-2">
              <span className="block text-[9px] sm:text-[10px] font-black text-white uppercase tracking-tight truncate">
                {img.title}
              </span>
            </div>

            {/* Hover Action Layer */}
            <div className="absolute inset-0 bg-pak-green/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Eye className="w-5 h-5 text-white drop-shadow transform translate-y-2 group-hover:translate-y-0 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Immersive Fullscreen Details Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIndex(null)}
              className="absolute inset-0 bg-black/98 backdrop-blur-lg"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-4xl bg-[#0E0E0F] border border-white/10 rounded-[32px] overflow-hidden shadow-3xl flex flex-col z-10"
              id="venue-photo-lightbox"
            >
              
              {/* Header inside lightbox */}
              <div className="p-5 border-b border-white/5 bg-gradient-to-b from-neutral-900 to-transparent flex items-center justify-between relative z-20">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{getCategoryEmoji(images[activeImageIndex].category)}</span>
                  <div>
                    <span className="text-[8px] font-black text-pak-green uppercase tracking-[3px] block">
                      STADIUM {images[activeImageIndex].category.toUpperCase()} GALLERY
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight leading-none mt-1">
                      {images[activeImageIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Slider Area */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full flex items-center justify-center bg-black overflow-hidden group">
                
                {/* Main slide image */}
                <motion.img
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={images[activeImageIndex].url}
                  alt={images[activeImageIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />

                {/* Left arrow trigger */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 hover:border-pak-green text-white hover:text-pak-green flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shrink-0"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right arrow trigger */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 hover:border-pak-green text-white hover:text-pak-green flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shrink-0"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Visual Category Badge on display slide */}
                <div className="absolute bottom-4 left-4 bg-black/80 border border-white/10 rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white flex items-center gap-1">
                  <span>{getCategoryEmoji(images[activeImageIndex].category)}</span>
                  <span>{images[activeImageIndex].category} viewpoint</span>
                </div>
              </div>

              {/* Description & Thumbnail slider footer */}
              <div className="p-6 sm:p-8 bg-neutral-950/90 border-t border-white/5 space-y-5">
                
                {/* Active Caption Details */}
                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 text-pak-green shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] font-black uppercase tracking-wider text-white mb-1">
                      {images[activeImageIndex].title} Technical Profile
                    </h5>
                    <p className="text-[11px] sm:text-xs font-semibold text-ink/70 leading-relaxed">
                      {images[activeImageIndex].description}
                    </p>
                  </div>
                </div>

                {/* Interactive Thumbnail navigation stripe inside modal */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-[8px] font-black uppercase text-ink/40 tracking-wider">Navigate:</span>
                  <div className="flex gap-2.5 overflow-x-auto">
                    {images.map((img, i) => {
                      const isActive = i === activeImageIndex;
                      return (
                        <button
                          key={img.id}
                          onClick={() => setActiveImageIndex(i)}
                          className={`w-11 h-11 rounded-lg overflow-hidden border transition-all relative shrink-0 cursor-pointer ${
                            isActive ? 'border-pak-green scale-110 ring-2 ring-pak-green/30' : 'border-white/10 opacity-40 hover:opacity-80'
                          }`}
                        >
                          <img 
                            src={img.url} 
                            alt={img.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover" 
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Lightbox base metadata */}
              <div className="p-3 bg-black flex justify-between items-center text-[8px] text-ink/40 uppercase font-black tracking-wider px-6">
                <span>Location Context: {stadiumName} Ground Guide</span>
                <span>Active Spec: High Definition (1080p Web Profile)</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
