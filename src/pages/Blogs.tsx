import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, Trophy, Users, Shield, Target, TrendingUp, MessageCircle, ChevronDown, Filter, LayoutGrid, Clock, List, Zap, ChevronRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';
import { BLOG_POSTS, AUTHORS } from '../data/blogData';
import { LinkText } from '../components/LinkText';

import { BlogPost } from '../types';

function BlogCard({ post, idx }: { post: BlogPost; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (idx % 2) * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card-bg border border-card-border rounded-3xl md:rounded-[48px] overflow-hidden hover:border-pak-green/30 transition-all flex flex-col h-full shadow-2xl relative"
    >
      <div className="p-6 sm:p-10 flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-5 md:mb-10">
          <div className="flex items-center gap-3 md:gap-4">
            <div className={`p-2.5 md:p-4 rounded-xl md:rounded-3xl bg-black/40 border border-white/5 ${post.color}`}>
              <post.icon className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-ink/40 block mb-0.5 md:mb-1">{post.date}</span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[2px] md:tracking-[4px] text-pak-green block">{post.category}</span>
            </div>
          </div>
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:bg-pak-green group-hover:text-white group-hover:border-pak-green transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
          </div>
        </div>
        
        <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-4 md:mb-6 group-hover:text-pak-green transition-colors text-white leading-tight">
          {post.title}
        </h2>

        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pak-green/20 border border-pak-green/20 overflow-hidden">
            <img 
              src={AUTHORS.find(a => a.id === post.authorId)?.avatarUrl} 
              alt="" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <Link 
              to={`/author/${post.authorId}`} 
              className="text-[8px] md:text-[10px] font-bold text-white/40 hover:text-pak-green transition-colors uppercase tracking-widest"
            >
              By {AUTHORS.find(a => a.id === post.authorId)?.name}
            </Link>
          </div>
        </div>
        
        <p className="text-ink/60 text-xs md:text-base font-medium leading-relaxed mb-6 md:mb-12 line-clamp-3 italic flex-grow border-l-2 border-pak-green/20 pl-4 md:pl-6">
          "{post.summary}"
        </p>
        
        <Link 
          to={post.path}
          className="inline-flex items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-pak-green hover:tracking-[0.4em] md:hover:tracking-[0.7em] transition-all"
        >
          Read More <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
        </Link>
      </div>
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}

const SimpleDropdown = ({ label, items, icon: Icon, activeValue, onSelect }: { label: string; items: { name: string; value: string }[]; icon: any; activeValue?: string; onSelect?: (value: string) => void }) => {
  const activeItem = items.find(i => i.value === activeValue);
  
  return (
    <div className="relative group">
      <button className={`flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] border ${activeValue && activeValue !== 'all' ? 'border-pak-green/50 bg-pak-green/5 text-white' : 'border-white/10 text-white/70'} rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-pak-green/40 hover:bg-white/[0.05] transition-all hover:text-white`}>
        <Icon className="w-3.5 h-3.5 text-pak-green" />
        {activeItem ? activeItem.name : label} <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all" />
      </button>
      <div className="absolute top-full left-0 mt-3 w-56 bg-card-bg/95 backdrop-blur-xl border border-white/10 rounded-[24px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 transform translate-y-2 group-hover:translate-y-0 duration-300">
        <div className="px-3 py-2 border-b border-white/5 mb-1">
          <span className="text-[8px] font-black uppercase tracking-[2px] text-pak-green/60">Select Month</span>
        </div>
        {activeValue !== 'all' && (
          <button 
            onClick={() => onSelect?.('all')}
            className="w-full flex items-center justify-between px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-ink/60 hover:text-white hover:bg-pak-green/10 rounded-xl transition-all group/item"
          >
            All Stories
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 transition-colors" />
          </button>
        )}
        {items.map(item => (
          <button 
            key={item.value} 
            onClick={() => onSelect?.(item.value)}
            className={`w-full flex items-center justify-between px-4 py-3 text-[9px] font-bold uppercase tracking-widest ${activeValue === item.value ? 'text-white bg-pak-green/10' : 'text-ink/60'} hover:text-white hover:bg-pak-green/10 rounded-xl transition-all group/item`}
          >
            {item.name}
            <div className={`w-1.5 h-1.5 rounded-full ${activeValue === item.value ? 'bg-pak-green shadow-[0_0_8px_rgba(0,102,46,1)]' : 'bg-white/10'} group-hover/item:bg-pak-green transition-colors`} />
          </button>
        ))}
      </div>
    </div>
  );
};

const HoverDropdown = ({ label, items }: { label: string; items: { name: string; path: string; icon: any; desc?: string }[] }) => (
  <div className="relative group">
    <button className="flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all text-white/70">
      <Zap className="w-3.5 h-3.5" />
      {label} <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
    </button>
    <motion.div 
      className="absolute top-full left-0 mt-3 w-72 bg-card-bg/95 backdrop-blur-xl border border-white/10 rounded-[32px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 transform translate-y-2 group-hover:translate-y-0 duration-300"
    >
      <div className="space-y-2">
        {items.map(item => (
          <Link key={item.name} to={item.path} className="flex flex-col gap-1 p-3 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-white/5 transition-all group/item">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pak-green/10 text-pak-green group-hover/item:bg-pak-green group-hover/item:text-white transition-all">
                <item.icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-ink/80 group-hover/item:text-white">{item.name}</span>
            </div>
            {item.desc && <span className="text-[8px] font-medium text-ink/40 uppercase tracking-widest pl-11">{item.desc}</span>}
          </Link>
        ))}
      </div>
    </motion.div>
  </div>
);

const MegaMenu = () => (
  <div className="relative group static md:relative">
    <button className="flex items-center gap-2.5 px-6 py-2.5 bg-pak-green text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-pak-green/30 transition-all hover:scale-105 active:scale-95">
      All News Explorer <LayoutGrid className="w-4 h-4" />
    </button>
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[95vw] max-w-5xl bg-[#0A0A0A]/95 backdrop-blur-3xl border border-white/10 rounded-[48px] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 transform translate-y-4 group-hover:translate-y-0 duration-500 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pak-green/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left relative z-10">
        <div className="col-span-1">
          <h4 className="text-[10px] font-black uppercase tracking-[4px] text-pak-green mb-8 flex items-center gap-2">
            <Trophy className="w-3 h-3" /> Tournaments
          </h4>
          <div className="space-y-5">
            <Link to="/news#psl-news" className="group/link block">
              <span className="text-[12px] font-bold text-white/50 group-hover/link:text-pak-green transition-colors uppercase block">PSL 2026 Specials</span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest">Final Phase & Stats</span>
            </Link>
            <Link to="/series/bangladesh-tour-2026" className="group/link block">
              <span className="text-[12px] font-bold text-white/50 group-hover/link:text-pak-green transition-colors uppercase block">Bangladesh Series</span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest">Test Strategy</span>
            </Link>
            <Link to="/series/australia-tour-2026" className="group/link block">
              <span className="text-[12px] font-bold text-white/50 group-hover/link:text-pak-green transition-colors uppercase block">Australia Tour</span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest">3 ODIs • May/June</span>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <h4 className="text-[10px] font-black uppercase tracking-[4px] text-blue-500 mb-8 flex items-center gap-2">
            <Target className="w-3 h-3" /> Analysis Hub
          </h4>
          <div className="space-y-5">
            <Link to="/news" className="group/link block">
              <span className="text-[12px] font-bold text-white/50 group-hover/link:text-blue-500 transition-colors uppercase block">Match Deep Dives</span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest">Tactical Overviews</span>
            </Link>
            <Link to="/rankings" className="group/link block">
              <span className="text-[12px] font-bold text-white/50 group-hover/link:text-blue-500 transition-colors uppercase block">Player Rankings</span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest">ICC Live Standings</span>
            </Link>
            <Link to="/players-stats" className="group/link block">
              <span className="text-[12px] font-bold text-white/50 group-hover/link:text-blue-500 transition-colors uppercase block">Form Analysis</span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest">Career Metrics</span>
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 h-full relative overflow-hidden group/card hover:border-pak-green/20 transition-all">
             <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-pak-green/20 text-pak-green rounded-full text-[8px] font-black uppercase tracking-widest">Hot Topic</span>
                <Clock className="w-4 h-4 text-white/20" />
             </div>
             <h4 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white mb-4">The New Red-Ball Era begins in Dhaka</h4>
             <p className="text-[11px] text-ink/60 uppercase leading-relaxed mb-6 font-medium">How Pakistan's selection transition marks a pivotal shift in domestic-to-international tactical integration.</p>
             <Link to="/news/match-preview-dhaka-test" className="inline-flex items-center gap-3 text-[10px] font-black text-pak-green uppercase tracking-[4px] group-hover/card:translate-x-2 transition-transform">
               Explore Insight <ChevronRight className="w-4 h-4" />
             </Link>
             <div className="absolute top-0 right-0 w-32 h-32 bg-pak-green/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ClickDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] border ${isOpen ? 'border-pak-green/50 bg-pak-green/5' : 'border-white/10'} rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:border-pak-green/30 transition-all text-white active:scale-95`}
      >
        Filters <Filter className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180 text-pak-green' : 'text-white/40'}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-full right-0 mt-3 w-56 bg-card-bg/95 backdrop-blur-xl border border-white/10 rounded-[24px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
        >
          <div className="px-4 py-2 border-b border-white/5 mb-2">
            <span className="text-[8px] font-black uppercase tracking-[2px] text-white/30">Sort By</span>
          </div>
          <button className="w-full text-left px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-ink/60 hover:text-pak-green hover:bg-pak-green/5 rounded-xl transition-all flex items-center justify-between group/sort">
             <div className="flex items-center gap-3">
               <Clock className="w-3.5 h-3.5" /> Latest First
             </div>
             <div className="w-1 h-1 rounded-full bg-pak-green shadow-[0_0_8px_rgba(0,102,46,1)]" />
          </button>
          <button className="w-full text-left px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-ink/60 hover:text-pak-green hover:bg-pak-green/5 rounded-xl transition-all flex items-center gap-3 group/sort">
            <TrendingUp className="w-3.5 h-3.5" /> Most Popular
          </button>
          <div className="mt-2 pt-2 border-t border-white/5">
             <button className="w-full py-2 bg-pak-green/10 text-pak-green rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all">Apply View</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function Blogs() {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const filteredPosts = [...BLOG_POSTS].filter(post => {
    if (selectedMonth === 'all') return true;
    return post.date.toLowerCase().includes(selectedMonth.toLowerCase());
  }).reverse();

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <Helmet>
        <title>Pakistan Cricket News & Analysis 2026 – Match Analysis, Insights & Updates</title>
        <meta name="description" content="Read latest Pakistan cricket news 2026 including match analysis, player performance, predictions, and expert insights." />
        <meta name="keywords" content="Pakistan cricket news, Pakistan match analysis, Pakistan cricket predictions, cricket insights, player performance analysis" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-10 md:mb-20 text-center"
      >
        <span className="inline-block px-3 md:px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[3px] md:tracking-[4px] mb-4 md:mb-8">
          The News & Analysis Hub
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4 md:mb-8 text-white leading-tight">
          Pakistan Cricket <span className="text-pak-green">News & Analysis</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          <p className="text-lg md:text-xl text-ink/80 font-medium leading-relaxed italic">
            <LinkText text="If you enjoy going beyond just match schedules and scores, this is where things get interesting." />
          </p>
          <p className="text-sm md:text-base text-ink/60 font-medium leading-relaxed">
            <LinkText text="The news and analysis section on PakCric Schedule is designed for fans who want deeper insights into Pakistan cricket — from match analysis to player performances and upcoming predictions. Everything here is written in a simple, clear, and engaging way." />
          </p>
        </div>
      </motion.div>

      {/* Dropdown Explorer Bar */}
      <div className="mb-12 md:mb-20 flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-white/[0.02] border border-white/5 rounded-[40px] p-5 md:p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
        <SimpleDropdown 
          label="News Archive" 
          icon={Calendar}
          activeValue={selectedMonth}
          onSelect={(val) => setSelectedMonth(val)}
          items={[
            { name: 'May 2026', value: 'May' },
            { name: 'April 2026', value: 'April' },
            { name: 'March 2026', value: 'March' }
          ]} 
        />
        
        <HoverDropdown 
          label="Featured Series" 
          items={[
            { name: 'PAK vs BAN 2026', path: '/pakistan-vs-bangladesh-2026-schedule', icon: Target, desc: 'Test Series Coverage' },
            { name: 'PSL 11 Finals', path: '/news/peshawar-zalmi-psl-2026-champions-match-report', icon: Trophy, desc: 'Season Review' },
            { name: 'PAK vs AUS 2026', path: '/pakistan-vs-australia-2026-schedule-odi', icon: Shield, desc: '3 ODIs • May/June' }
          ]} 
        />

        <MegaMenu />

        <div className="h-10 w-px bg-white/10 hidden md:block mx-4" />

        <ClickDropdown />
      </div>

      {/* Top Banner for Article Hub */}
      <AdPlaceholder type="leaderboard" className="mb-12 md:mb-20" />

      {/* Grouped Blogs Section */}
      <section className="mb-16 md:mb-32">
        {selectedMonth !== 'all' ? (
          <div>
            <div className="flex items-center justify-between mb-12 border-l-4 border-pak-green pl-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-2">
                  Archive: <span className="text-pak-green">{selectedMonth} 2026</span>
                </h2>
                <p className="text-xs md:text-sm text-ink/40 font-medium uppercase tracking-widest">Showing {filteredPosts.length} stories found</p>
              </div>
              <button 
                onClick={() => setSelectedMonth('all')}
                className="text-[10px] font-bold text-pak-green uppercase tracking-widest hover:underline"
              >
                Clear Filter
              </button>
            </div>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {filteredPosts.map((post, idx) => (
                  <BlogCard key={post.id} post={post} idx={idx} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-ink/40 text-sm font-bold uppercase tracking-widest">No articles found for this month.</p>
              </div>
            )}
          </div>
        ) : (
          (() => {
            const pslBlogs = [...BLOG_POSTS].filter(post => 
              post.id.includes('psl') || 
              post.title.toUpperCase().includes('PSL') || 
              post.title.toUpperCase().includes('KINGSMEN') || 
              post.title.toUpperCase().includes('ZALMI') || 
              post.title.toUpperCase().includes('SULTANS') || 
              post.title.toUpperCase().includes('UNITED') ||
              post.category === 'Tournament Stats' ||
              post.category === 'Season Review'
            ).reverse();

            const otherBlogs = [...BLOG_POSTS].filter(post => 
              !pslBlogs.find(p => p.id === post.id)
            ).reverse();

            return (
              <div className="space-y-20 md:space-y-32">
                {/* PSL News Section */}
                <div id="psl-news">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12 border-l-4 border-pak-green pl-6">
                    <div>
                      <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-2">
                        PSL 11 <span className="text-pak-green">2026 Archive</span>
                      </h2>
                      <p className="text-xs md:text-sm text-ink/40 font-medium uppercase tracking-widest">Everything about the Pakistan Super League</p>
                    </div>
                    <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-ink/40">
                      Season Review <Trophy className="w-3 md:w-4 h-3 md:h-4 text-pak-green" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {pslBlogs.map((post, idx) => (
                      <BlogCard key={post.id} post={post} idx={idx} />
                    ))}
                  </div>
                </div>

                {/* International & Strategy Section */}
                <div id="international-news">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12 border-l-4 border-blue-500 pl-6">
                    <div>
                      <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-2">
                        Pakistan <span className="text-blue-500">Team & Strategy</span>
                      </h2>
                      <p className="text-xs md:text-sm text-ink/40 font-medium uppercase tracking-widest">International Series, Rankings & Analysis</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {otherBlogs.map((post, idx) => (
                      <BlogCard key={post.id} post={post} idx={idx} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })()
        )}
      </section>

      {/* Our Experts Section */}
      <section className="mb-16 md:mb-32">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 md:mb-16">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-pak-green flex items-center justify-center text-white shadow-lg shadow-pak-green/20 shrink-0">
            <Users className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div>
            <h2 className="text-xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-1 md:mb-2 leading-tight">
              Meet Our <span className="text-pak-green italic">Editorial Experts</span>
            </h2>
            <p className="text-[8px] md:text-[10px] font-bold text-ink/40 uppercase tracking-[2px] md:tracking-[6px]">
              The voices behind Pakistan's top cricket analysis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {AUTHORS.map((author, idx) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[40px] p-6 md:p-10 hover:bg-pak-green/5 hover:border-pak-green/20 transition-all group"
            >
              <div className="flex items-center gap-4 md:gap-6 mb-5 md:mb-8">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-pak-green/10 border border-pak-green/20 overflow-hidden p-1 group-hover:border-pak-green/40 transition-colors">
                  <img src={author.avatarUrl} alt={author.name} loading="lazy" className="w-full h-full object-cover rounded-xl md:rounded-2xl" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-display font-bold text-white uppercase mb-1 md:mb-1.5 group-hover:text-pak-green transition-colors leading-tight">
                    {author.name}
                  </h3>
                  <div className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[7px] md:text-[9px] font-black text-pak-green uppercase tracking-widest inline-block mb-1">
                    {author.role}
                  </div>
                </div>
              </div>
              <div className="mb-5 md:mb-8">
                <p className="text-[9px] md:text-[11px] font-bold text-ink/30 uppercase tracking-[1px] md:tracking-[3px] mb-1.5 md:mb-3">Specialization</p>
                <p className="text-white/80 font-bold text-xs md:text-sm tracking-tight">{author.specialization}</p>
              </div>
              <p className="text-ink/60 text-[11px] md:text-[13px] font-medium leading-relaxed mb-6 md:mb-8 line-clamp-3">
                {author.bio}
              </p>
              <Link 
                to={`/author/${author.id}`}
                className="flex items-center justify-between py-3 md:py-4 px-5 md:px-6 bg-white/5 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-bold uppercase tracking-[2px] md:tracking-[3px] text-white/40 group-hover:bg-pak-green group-hover:text-white transition-all transform group-hover:translate-y-[-4px]"
              >
                View Profile <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Sections */}
      <div className="space-y-16 md:space-y-32 mb-16 md:mb-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square bg-gradient-to-br from-pak-green/20 to-transparent rounded-[32px] md:rounded-[60px] border border-white/5 flex items-center justify-center relative overflow-hidden">
               <Shield className="w-24 h-24 md:w-40 md:h-40 text-pak-green opacity-20" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
            </div>
            <div className="absolute -bottom-2 -right-2 p-4 md:p-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl">
               <Trophy className="w-5 h-5 md:w-8 md:h-8 text-pak-green" />
            </div>
          </div>
          <div className="space-y-4 md:space-y-8 order-1 md:order-2">
            <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
              Match Analysis & <span className="text-pak-green italic">Insights</span>
            </h2>
            <p className="text-sm md:text-lg text-ink/60 font-medium leading-relaxed">
              Understanding what really happened in a match can make cricket even more enjoyable. In this section, we break down key moments that changed the game, individual performance impact, and tactical strengths or weaknesses of the team.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
               {['Tactical Rotations', 'Powerplay Data', 'Death Over Analysis', 'Pitch Variants'].map(tag => (
                 <div key={tag} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[7px] md:text-[10px] font-bold uppercase tracking-widest text-ink/40 text-center">
                   {tag}
                 </div>
               ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-4 md:space-y-8 text-left">
            <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
              Player Performance <span className="text-pak-green italic">& Form</span>
            </h2>
            <p className="text-sm md:text-lg text-ink/60 font-medium leading-relaxed">
              Cricket is a team game, but individual performances often decide the outcome. Our blogs focus on player form, consistency, impact in different formats, and specific areas for improvement for your favorite players.
            </p>
            <Link to="/rankings" className="inline-flex items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.5em] text-pak-green">
              View Player Standings <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[60px] p-8 md:p-12 aspect-square flex flex-col justify-center text-center relative group overflow-hidden">
             <TrendingUp className="w-16 h-16 md:w-24 md:h-24 text-pak-green mx-auto mb-4 md:mb-8 opacity-20 group-hover:scale-110 transition-transform duration-700" />
             <h3 className="text-lg md:text-2xl font-display font-bold text-white uppercase mb-2 md:mb-4 tracking-tight">Form Tracking</h3>
             <p className="text-[10px] md:text-xs text-ink/40 font-medium leading-relaxed">Statistical deep dives into batting averages and bowling strike rates.</p>
             <div className="absolute inset-x-0 bottom-0 h-1 bg-pak-green scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="bg-gradient-to-tr from-purple-500/10 to-transparent border border-white/5 rounded-[32px] md:rounded-[60px] p-8 md:p-12 aspect-square flex flex-col justify-center text-center relative group order-2 md:order-1">
             <MessageCircle className="w-16 h-16 md:w-24 md:h-24 text-purple-400 mx-auto mb-4 md:mb-8 opacity-20 group-hover:rotate-12 transition-transform duration-700" />
             <h3 className="text-lg md:text-2xl font-display font-bold text-white uppercase mb-2 md:mb-4 tracking-tight">Opinion Pieces</h3>
             <p className="text-[10px] md:text-xs text-ink/40 font-medium leading-relaxed">Fan perspectives and expert columns on team dynamics.</p>
          </div>
          <div className="space-y-4 md:space-y-8 order-1 md:order-2">
            <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
              Predictions & <span className="text-pak-green italic">Opinions</span>
            </h2>
            <p className="text-sm md:text-lg text-ink/60 font-medium leading-relaxed">
              Before every major match or series, fans love to discuss what might happen. Our content is based on recent performance and trends, giving you a realistic idea of what to expect in terms of match outcomes and playing XI's.
            </p>
            <div className="space-y-2 md:space-y-4">
              {['Match Probability', 'Series Outcome', 'Expected XI'].map(item => (
                <div key={item} className="flex items-center gap-3 md:gap-4 text-white/80 font-bold text-[9px] md:text-xs uppercase tracking-widest">
                  <div className="w-1 h-1 rounded-full bg-pak-green" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why Read Here */}
      <section className="my-16 md:my-32 bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden group">
        <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6 md:mb-8">
          Why Read Pakistan <span className="text-pak-green italic">Cricket News Here</span>
        </h2>
        <p className="text-sm md:text-lg text-ink/60 font-medium leading-relaxed max-w-3xl mx-auto mb-10 md:mb-16">
          We focus on simple and clear writing, relevant topics for <Link to="/" className="text-pak-green hover:underline">Pakistan fans</Link>, and practical <Link to="/news" className="text-pak-green hover:underline">match insights</Link> instead of unnecessary details. Our goal is to make <Link to="/" className="text-pak-green hover:underline">Pakistan cricket news</Link> and content enjoyable and useful for everyone following the <Link to="/schedule" className="text-pak-green hover:underline">cricket schedule</Link>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { title: 'Simple & Clear', desc: 'No jargon, just pure cricket analysis.' },
            { title: 'Fan Focused', desc: 'Topics that matter to the Green Shirts community.' },
            { title: 'Practical Insights', desc: 'Real-world data applied to match scenarios.' }
          ].map(box => (
            <div key={box.title} className="p-6 md:p-8 bg-black/40 border border-white/5 rounded-2xl md:rounded-3xl hover:border-pak-green/20 transition-colors">
              <h3 className="text-base md:text-lg font-display font-bold text-white uppercase mb-2 md:mb-3">{box.title}</h3>
              <p className="text-[10px] md:text-[11px] text-ink/40 font-medium leading-relaxed">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Updated */}
      <section className="mb-20 md:mb-32 text-center">
        <h2 className="text-2xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6 md:mb-8">
          Stay Updated with <span className="text-pak-green italic">Latest News Updates</span>
        </h2>
        <p className="text-sm md:text-base text-ink/60 font-medium leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12">
          New <Link to="/news" className="text-pak-green hover:underline">news updates</Link> are added regularly, especially during active <Link to="/schedule" className="text-pak-green hover:underline">series and tournaments</Link>. Bookmark this page so you don’t miss out on the <Link to="/news" className="text-pak-green hover:underline">latest analysis</Link>, <Link to="/news" className="text-pak-green hover:underline">selection news</Link>, and <Link to="/squads" className="text-pak-green hover:underline">playing XI</Link> updates.
        </p>
        <motion.div 
          className="p-8 md:p-12 border border-pak-green/10 bg-pak-green/5 rounded-3xl md:rounded-[48px] max-w-2xl mx-auto"
        >
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-pak-green mb-4 md:mb-6">Newsletter</p>
          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white mb-6 md:mb-8">
            Analysis delivered to your inbox
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              className="flex-grow bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green/30 transition-colors"
            />
            <button className="px-8 md:px-10 py-3.5 md:py-4 bg-pak-green text-white rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:shadow-2xl hover:shadow-pak-green/20 transition-all active:scale-95 text-center">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      <InternalLinkSection />

      {/* Final CTA */}
      <section className="mb-16 md:mb-20">
        <div className="bg-card-bg border border-card-border rounded-[40px] md:rounded-[56px] p-8 md:p-20 text-center shadow-3xl">
          <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-6 md:mb-8 leading-tight">
            Explore More <span className="text-pak-green italic">Insights</span>
          </h2>
          <p className="text-sm md:text-lg text-ink/60 font-medium max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Everything you need about Pakistan cricket in one place. From schedules to squads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link to="/schedule" className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] md:tracking-[4px] hover:bg-white hover:text-black transition-all text-center">Match Schedule</Link>
            <Link to="/squads" className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] md:tracking-[4px] hover:bg-white hover:text-black transition-all text-center">Team Squads</Link>
            <Link to="/rankings" className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] md:tracking-[4px] hover:bg-white hover:text-black transition-all text-center text-center">Stats & Rankings</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

