import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { AUTHORS, BLOG_POSTS } from '../data/blogData';
import { ChevronLeft, Twitter, Linkedin, Github, Globe, ArrowUpRight, BookOpen } from 'lucide-react';
import React from 'react';

export default function AuthorProfile() {
  const { authorId } = useParams();
  const author = AUTHORS.find(a => a.id === authorId);
  
  if (!author) {
    return <Navigate to="/blogs" replace />;
  }

  const authorBlogs = BLOG_POSTS.filter(post => post.authorId === authorId);

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <Helmet>
        <title>{author.name} – Author Profile | PakCric Schedule</title>
        <meta name="description" content={`Read all articles by ${author.name} on PakCric Schedule. ${author.bio.substring(0, 150)}...`} />
      </Helmet>

      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-ink/40 hover:text-pak-green transition-colors mb-8 md:mb-12 ml-1"
      >
        <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" /> Back to Analysis
      </Link>

      {/* Author Header */}
      <section className="mb-12 md:mb-20">
        <div className="bg-card-bg border border-card-border rounded-3xl md:rounded-[48px] p-6 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden shadow-2xl">
          <div className="relative shrink-0">
            <div className="w-28 h-28 md:w-56 md:h-56 rounded-[32px] md:rounded-[40px] bg-pak-green/20 border-2 border-pak-green/20 overflow-hidden relative z-10 shadow-xl">
              <img 
                src={author.avatarUrl} 
                alt={author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-pak-green/5 blur-3xl rounded-full z-0" />
          </div>

          <div className="flex-grow text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-pak-green/10 text-pak-green rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[3px] md:tracking-[4px] mb-4 md:mb-6">
              {author.role}
            </span>
            <h1 className="text-2xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-4 md:mb-6">
              {author.name}
            </h1>
            <p className="text-base md:text-xl text-ink/60 font-medium leading-relaxed max-w-2xl mb-6 md:mb-8 italic">
              "{author.bio}"
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <div className="px-4 md:px-6 py-2 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/40">
                Speciality: <span className="text-pak-green">{author.specialization}</span>
              </div>
              <div className="flex gap-2">
                {author.socials?.twitter && (
                  <a href={author.socials.twitter} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-pak-green hover:text-white transition-all">
                    <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                )}
                {author.socials?.linkedin && (
                  <a href={author.socials.linkedin} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-pak-green hover:text-white transition-all">
                    <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Decorative stats */}
          <div className="hidden lg:block absolute top-12 right-12 text-right">
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-[4px] mb-2">Articles Published</div>
            <div className="text-6xl font-display font-bold text-pak-green opacity-40">{authorBlogs.length}</div>
          </div>
        </div>
      </section>

      {/* Author articles */}
      <section className="mb-12 md:mb-20">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight text-white flex items-center gap-3 md:gap-4">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-pak-green" /> Analysis by <span className="text-pak-green">{author.name.split(' ')[0]}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {authorBlogs.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card-bg border border-card-border rounded-2xl md:rounded-[40px] p-6 md:p-8 hover:border-pak-green/30 transition-all flex flex-col h-full active:scale-[0.98]"
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-ink/40">{post.date}</span>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:bg-pak-green group-hover:text-white transition-all duration-500">
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-pak-green transition-colors mb-3 md:mb-4 line-clamp-2 leading-tight">
                {post.title}
              </h3>
              <p className="text-[11px] md:text-xs text-ink/60 font-medium leading-relaxed mb-6 md:mb-8 line-clamp-3 italic">
                "{post.summary}"
              </p>
              <Link 
                to={post.path} 
                className="mt-auto inline-flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[3px] text-pak-green"
              >
                Read Analysis →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Footer */}
      <div className="p-8 md:p-12 border border-card-border bg-white/[0.01] rounded-3xl md:rounded-[48px] text-center max-w-4xl mx-auto mb-10">
        <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase mb-4">Want more insights?</h3>
        <p className="text-xs md:text-sm text-ink/60 mb-8 italic font-medium leading-relaxed">
          {author.name} regularly updates this hub with technical analysis and strategy reports. 
        </p>
        <Link 
          to="/blogs" 
          className="inline-block px-10 md:px-12 py-3.5 md:py-4 bg-pak-green text-white rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-pak-green/20 transition-all active:scale-95"
        >
          View All Analysis
        </Link>
      </div>
    </div>
  );
}
