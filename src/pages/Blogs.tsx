import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, Trophy, Users, Shield, Target } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'match-preview-pakistan-vs-bangladesh-1st-test-2026',
    title: 'The Dhaka Chess Match: Pakistan vs Bangladesh 1st Test Preview',
    summary: 'A tactical deep dive into the first Test in Dhaka. Pitch reports, key player battles, and win probability analysis.',
    date: 'April 22, 2026',
    category: 'Match Preview',
    path: '/blogs/match-preview-dhaka-test',
    icon: Target,
    color: 'text-orange-500',
  },
  {
    id: 'squad-intelligence-bangladesh-tour-2026',
    title: 'Beyond the Names: The Strategic Selection for Bangladesh 2026',
    summary: 'Inside the selection room: Why domestic form was prioritized and the tactical roles of the new call-ups.',
    date: 'April 22, 2026',
    category: 'Squad News',
    path: '/blogs/squad-selection-intelligence',
    icon: Users,
    color: 'text-teal-500',
  },
  {
    id: 'red-ball-resilience-overview-2026',
    title: 'Red-Ball Resilience: An Overview of the Test Series 2026',
    summary: 'A high-stakes battle for WTC points as Pakistan tours Bangladesh for a critical two-match Test series in May 2026.',
    date: 'April 2026',
    category: 'Match Analysis',
    path: '/red-ball-resilience-overview-2026',
    icon: Shield,
    color: 'text-red-500',
  },
  {
    id: 'babar-azam-3rd-century-psl-history',
    title: 'Long Live the King: Babar Azam is Still the Undisputed Face of the PSL',
    summary: 'In Match 29 of PSL 11, Babar conducted an orchestra, smashing 100* off 52 balls with unprecedented precision.',
    date: 'April 20, 2026',
    category: 'Player Analysis',
    path: '/news/babar-azam-3rd-century-psl-history',
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    id: 'babar-azam-form-impact-pakistan',
    title: 'The Ripple Effect: How Babar Azam’s Form Dictates Pakistan’s Destiny',
    summary: 'A deep dive into why Babar Azam is the psychological anchor of the team and how his personal milestones correlate with Pakistan’s victories.',
    date: 'April 23, 2026',
    category: 'Player Analysis',
    path: '/news/babar-azam-form-impact-pakistan',
    icon: Target,
    color: 'text-pak-green',
  },
];

export default function Blogs() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-16 border-b border-card-border pb-12"
      >
        <span className="text-pak-green font-bold uppercase tracking-[6px] text-xs mb-6 block">Editorial Hub</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6 leading-none text-ink">
          Deep <span className="text-pak-green">Analysis</span>
        </h1>
        <p className="text-ink/60 font-medium tracking-wide max-w-xl text-lg">
          Match previews, tactical masterclasses, and squad intelligence from the world of Pakistan cricket.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-card-bg border border-card-border rounded-[40px] overflow-hidden hover:border-pak-green/30 transition-all flex flex-col h-full shadow-sm hover:shadow-xl"
          >
            <div className="p-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl bg-pak-green/5 ${post.color}`}>
                    <post.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 block leading-tight">{post.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-pak-green block mt-1">{post.category}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-ink/20 group-hover:bg-pak-green group-hover:text-white group-hover:border-pak-green transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mb-6 group-hover:text-pak-green transition-colors text-ink leading-tight">
                {post.title}
              </h2>
              
              <p className="text-ink/60 text-sm font-medium leading-relaxed mb-10 line-clamp-3 italic flex-grow">
                "{post.summary}"
              </p>
              
              <Link 
                to={post.path}
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 group-hover:text-ink transition-all"
              >
                Explore Full Analysis 
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 border border-white/5 bg-white/[0.02] rounded-[40px] text-center"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-ink/40 mb-4">Newsletter</p>
        <h3 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-6">
          Get analysis delivered <br className="hidden md:block" /> to your inbox
        </h3>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="ENTER EMAIL ADDRESS" 
            className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-3 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 transition-colors"
          />
          <button className="px-8 py-3 bg-white text-black rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-pak-green hover:text-white transition-all">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
}
