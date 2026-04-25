import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, Trophy, Users, Shield, Target, TrendingUp, MessageCircle } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdPlaceholder from '../components/AdPlaceholder';
import InternalLinkSection from '../components/InternalLinkSection';

const BLOG_POSTS = [
  {
    id: 'match-preview-pakistan-vs-bangladesh-1st-test-2026',
    title: 'The Dhaka Chess Match: Pakistan vs Bangladesh 1st Test Preview',
    summary: 'A tactical deep dive into the first Test in Dhaka. Pitch reports, key player battles, and win probability analysis.',
    date: 'April 22, 2026',
    category: 'Match Preview',
    path: '/pakistan-tour-bangladesh-test-2026',
    icon: Target,
    color: 'text-orange-500',
  },
  {
    id: 'squad-intelligence-bangladesh-tour-2026',
    title: 'Beyond the Names: The Strategic Selection for Bangladesh 2026',
    summary: 'Inside the selection room: Why domestic form was prioritized and the tactical roles of the new call-ups.',
    date: 'April 22, 2026',
    category: 'Tactical Insight',
    path: '/pakistan-tour-bangladesh-squad-2026',
    icon: Users,
    color: 'text-teal-500',
  },
  {
    id: 'red-ball-resilience-overview-2026',
    title: 'Red-Ball Resilience: An Overview of the Test Series 2026',
    summary: 'A high-stakes battle for WTC points as Pakistan tours Bangladesh for a critical two-match Test series in May 2026.',
    date: 'April 2026',
    category: 'Series Analysis',
    path: '/red-ball-resilience-overview-2026',
    icon: Shield,
    color: 'text-red-500',
  },
  {
    id: 'babar-azam-form-impact-pakistan',
    title: 'The Ripple Effect: How Babar Azam’s Form Dictates Pakistan’s Destiny',
    summary: 'A deep dive into why Babar Azam is the psychological anchor of the team and how his personal milestones correlate with Pakistan’s victories.',
    date: 'April 23, 2026',
    category: 'Player Analysis',
    path: '/news/babar-azam-form-impact-pakistan',
    icon: Trophy,
    color: 'text-pak-green',
  },
  {
    id: 'pakistan-cricket-schedule-2026-full-fixtures',
    title: 'Pakistan Cricket Schedule 2026: Full Fixtures, Dates & Match Timings',
    summary: 'A detailed look at Pakistan’s 2026 international calendar including England, Bangladesh, and the highly anticipated Asia Cup.',
    date: 'April 25, 2026',
    category: 'Full Schedule',
    path: '/schedule',
    icon: Calendar,
    color: 'text-blue-500',
  },
];

export default function Blogs() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <Helmet>
        <title>Pakistan Cricket Blogs 2026 – Match Analysis, Insights & Updates</title>
        <meta name="description" content="Read Pakistan cricket blogs 2026 including match analysis, player performance, predictions, and expert insights." />
        <meta name="keywords" content="Pakistan cricket blogs, Pakistan match analysis, Pakistan cricket predictions, cricket insights, player performance analysis" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-20 text-center"
      >
        <span className="inline-block px-4 py-1 bg-pak-green/10 text-pak-green border border-pak-green/20 rounded-full text-[10px] font-bold uppercase tracking-[4px] mb-8">
          The Analysis Hub
        </span>
        <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
          Pakistan Cricket <span className="text-pak-green">Blogs & Analysis</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-ink/80 font-medium leading-relaxed italic">
            If you enjoy going beyond just <Link to="/schedule" className="text-pak-green hover:underline">match schedules</Link> and <Link to="/schedule" className="text-pak-green hover:underline">scores</Link>, this is where things get interesting.
          </p>
          <p className="text-ink/60 font-medium leading-relaxed">
            The blogs section on <Link to="/" className="text-pak-green hover:underline">PakCric Schedule</Link> is designed for fans who want deeper insights into <Link to="/" className="text-pak-green hover:underline">Pakistan cricket</Link> — from <Link to="/blogs" className="text-pak-green hover:underline">match analysis</Link> to <Link to="/players-stats" className="text-pak-green hover:underline">player performances</Link> and upcoming <Link to="/blogs" className="text-pak-green hover:underline">predictions</Link>. Everything here is written in a simple, clear, and engaging way.
          </p>
        </div>
      </motion.div>

      {/* Top Banner for Article Hub */}
      <AdPlaceholder type="leaderboard" className="mb-20" />

      {/* Latest Blogs Section */}
      <section className="mb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white">
            Latest Pakistan <span className="text-pak-green">Cricket Blogs</span>
          </h2>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/40">
            Updated Daily <div className="w-2 h-2 rounded-full bg-pak-green animate-pulse" />
          </div>
        </div>

        <p className="text-ink/60 font-medium leading-relaxed max-w-2xl mb-12">
          This section features the most recent blog posts covering key topics related to Pakistan cricket. Each blog is focused on giving you useful information without unnecessary complexity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <React.Fragment key={post.id}>
              {idx === 2 && (
                <div className="md:col-span-2 py-4">
                  <AdPlaceholder type="native" label="Recommended for You" />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 2) * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card-bg border border-card-border rounded-[48px] overflow-hidden hover:border-pak-green/30 transition-all flex flex-col h-full shadow-2xl relative"
              >
                <div className="p-10 flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-3xl bg-black/40 border border-white/5 ${post.color}`}>
                        <post.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 block mb-1">{post.date}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[4px] text-pak-green block">{post.category}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:bg-pak-green group-hover:text-white group-hover:border-pak-green transition-all duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-6 group-hover:text-pak-green transition-colors text-white leading-[1.1]">
                    {post.title}
                  </h2>
                  
                  <p className="text-ink/60 text-base font-medium leading-relaxed mb-12 line-clamp-3 italic flex-grow border-l-2 border-pak-green/20 pl-6">
                    "{post.summary}"
                  </p>
                  
                  <Link 
                    to={post.path}
                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-pak-green hover:tracking-[0.7em] transition-all"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-pak-green/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Feature Sections */}
      <div className="space-y-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pak-green/20 to-transparent rounded-[60px] border border-white/5 flex items-center justify-center relative overflow-hidden">
               <Shield className="w-40 h-40 text-pak-green opacity-20" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-black border border-white/10 rounded-3xl shadow-2xl">
               <Trophy className="w-8 h-8 text-pak-green" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Match Analysis & <span className="text-pak-green italic">Insights</span>
            </h2>
            <p className="text-ink/60 text-lg font-medium leading-relaxed">
              Understanding what really happened in a match can make cricket even more enjoyable. In this section, we break down key moments that changed the game, individual performance impact, and tactical strengths or weaknesses of the team.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {['Tactical Rotations', 'Powerplay Data', 'Death Over Analysis', 'Pitch Variants'].map(tag => (
                 <div key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-ink/40">
                   {tag}
                 </div>
               ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Player Performance <span className="text-pak-green italic">& Form</span>
            </h2>
            <p className="text-ink/60 text-lg font-medium leading-relaxed">
              Cricket is a team game, but individual performances often decide the outcome. Our blogs focus on player form, consistency, impact in different formats, and specific areas for improvement for your favorite players.
            </p>
            <Link to="/rankings" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-pak-green">
              View Player Standings <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-white/[0.02] border border-white/5 rounded-[60px] p-12 aspect-square flex flex-col justify-center text-center relative group overflow-hidden">
             <TrendingUp className="w-24 h-24 text-pak-green mx-auto mb-8 opacity-20 group-hover:scale-110 transition-transform duration-700" />
             <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 tracking-tight">Form Tracking</h3>
             <p className="text-xs text-ink/40 font-medium">Statistical deep dives into batting averages and bowling strike rates.</p>
             <div className="absolute inset-x-0 bottom-0 h-1 bg-pak-green scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-tr from-purple-500/10 to-transparent border border-white/5 rounded-[60px] p-12 aspect-square flex flex-col justify-center text-center relative group">
             <MessageCircle className="w-24 h-24 text-purple-400 mx-auto mb-8 opacity-20 group-hover:rotate-12 transition-transform duration-700" />
             <h3 className="text-2xl font-display font-bold text-white uppercase mb-4 tracking-tight">Opinion Pieces</h3>
             <p className="text-xs text-ink/40 font-medium">Fan perspectives and expert columns on team dynamics.</p>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-6">
              Predictions & <span className="text-pak-green italic">Opinions</span>
            </h2>
            <p className="text-ink/60 text-lg font-medium leading-relaxed">
              Before every major match or series, fans love to discuss what might happen. Our content is based on recent performance and trends, giving you a realistic idea of what to expect in terms of match outcomes and playing XI's.
            </p>
            <div className="space-y-4">
              {['Match Probability', 'Series Outcome', 'Expected XI'].map(item => (
                <div key={item} className="flex items-center gap-4 text-white/80 font-bold text-xs uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-pak-green" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why Read Here */}
      <section className="my-32 bg-white/[0.02] border border-white/5 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden group">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">
          Why Read Pakistan <span className="text-pak-green italic">Cricket Blogs Here</span>
        </h2>
        <p className="text-ink/60 font-medium leading-relaxed max-w-3xl mx-auto mb-16 text-lg">
          We focus on simple and clear writing, relevant topics for <Link to="/" className="text-pak-green hover:underline">Pakistan fans</Link>, and practical <Link to="/blogs" className="text-pak-green hover:underline">match insights</Link> instead of unnecessary details. Our goal is to make <Link to="/" className="text-pak-green hover:underline">Pakistan cricket news</Link> and content enjoyable and useful for everyone following the <Link to="/schedule" className="text-pak-green hover:underline">cricket schedule</Link>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Simple & Clear', desc: 'No jargon, just pure cricket analysis.' },
            { title: 'Fan Focused', desc: 'Topics that matter to the Green Shirts community.' },
            { title: 'Practical Insights', desc: 'Real-world data applied to match scenarios.' }
          ].map(box => (
            <div key={box.title} className="p-8 bg-black/40 border border-white/5 rounded-3xl hover:border-pak-green/20 transition-colors">
              <h3 className="text-lg font-display font-bold text-white uppercase mb-3">{box.title}</h3>
              <p className="text-[11px] text-ink/40 font-medium">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Updated */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">
          Stay Updated with <span className="text-pak-green italic">New Blog Posts</span>
        </h2>
        <p className="text-ink/60 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
          New <Link to="/blogs" className="text-pak-green hover:underline">blogs</Link> are added regularly, especially during active <Link to="/schedule" className="text-pak-green hover:underline">series and tournaments</Link>. Bookmark this page so you don’t miss out on the <Link to="/blogs" className="text-pak-green hover:underline">latest analysis</Link>, <Link to="/news" className="text-pak-green hover:underline">selection news</Link>, and <Link to="/squads" className="text-pak-green hover:underline">playing XI</Link> updates.
        </p>
        <motion.div 
          className="p-12 border border-pak-green/10 bg-pak-green/5 rounded-[48px] max-w-2xl mx-auto"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-pak-green mb-6">Newsletter</p>
          <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-8">
            Analysis delivered to your inbox
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[11px] font-bold uppercase tracking-widest focus:outline-none focus:border-pak-green/30 transition-colors"
            />
            <button className="px-10 py-4 bg-pak-green text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:shadow-2xl hover:shadow-pak-green/20 transition-all active:scale-95">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      <InternalLinkSection />

      {/* Final CTA */}
      <section className="mb-20">
        <div className="bg-card-bg border border-card-border rounded-[56px] p-12 md:p-20 text-center shadow-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-8">
            Explore More <span className="text-pak-green italic">Insights</span>
          </h2>
          <p className="text-ink/60 font-medium max-w-xl mx-auto mb-12 text-lg">
            Everything you need about Pakistan cricket in one place. From schedules to squads.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/schedule" className="px-12 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[11px] font-bold uppercase tracking-[4px] hover:bg-white hover:text-black transition-all">Match Schedule</Link>
            <Link to="/squads" className="px-12 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[11px] font-bold uppercase tracking-[4px] hover:bg-white hover:text-black transition-all">Team Squads</Link>
            <Link to="/rankings" className="px-12 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[11px] font-bold uppercase tracking-[4px] hover:bg-white hover:text-black transition-all">Stats & Rankings</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
