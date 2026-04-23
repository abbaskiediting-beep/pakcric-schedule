import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Calendar, ArrowUpRight, Trophy, Users, Shield, Target } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'red-ball-resilience-overview-2026',
    title: 'Red-Ball Resilience: An Overview of the Pakistan vs Bangladesh Test Series 2026',
    summary: 'A high-stakes battle for WTC points as Pakistan tours Bangladesh for a critical two-match Test series in May 2026.',
    date: 'April 2026',
    path: '/red-ball-resilience-overview-2026',
    icon: Shield,
    color: 'text-red-500',
  },
  {
    id: 'babar-azam-3rd-century-psl-history',
    title: 'Long Live the King: Babar Azam is Still the Undisputed Face of the PSL',
    summary: 'In Match 29 of PSL 11, Babar conducted an orchestra, smashing 100* off 52 balls with only one dot ball in his entire innings.',
    date: 'April 20, 2026',
    path: '/news/babar-azam-3rd-century-psl-history',
    icon: Target,
    color: 'text-yellow-500',
  },
  {
    id: 'pakistan-test-squad-player-profiles-2026',
    title: 'Pakistan Test Squad for Bangladesh Tour 2026: Player Profiles',
    summary: 'A comprehensive look at the 16-man squad selected for the pivotal Bangladesh series, from uncapped prodigies to seasoned legends.',
    date: 'April 20, 2026',
    path: '/news/pakistan-test-squad-player-profiles-2026',
    icon: Users,
    color: 'text-pak-green',
  },
  {
    id: 'sarfaraz-ahmed-coach',
    title: 'Sarfaraz Ahmed: The Invincible Leader Now Shaping Pakistan’s Future',
    summary: 'Sarfaraz Ahmed: The Invincible Leader Now Shaping Pakistan’s Future. An in-depth look at Saifi Bhai’s transition to the dugout.',
    date: 'April 19, 2026',
    path: '/news/sarfaraz-ahmed-coach',
    icon: Shield,
    color: 'text-pak-green',
  },
  {
    id: 'pakistan-tour-bangladesh-test-2026',
    title: 'Red-Ball Revival: Pakistan’s Strategic Return to Bangladesh in 2026',
    summary: 'A detailed look at the 1st Test in Dhaka, tactical battles, and the WTC significance.',
    date: 'April 2026',
    path: '/pakistan-tour-bangladesh-test-2026',
    icon: Calendar,
    color: 'text-pak-green',
  },
  {
    id: 'pakistan-tour-bangladesh-squad-2026',
    title: 'Pakistan Tour of Bangladesh 2026: Squads & Schedule',
    summary: 'The PCB announces a 16-member squad led by Shan Masood with 4 uncapped players.',
    date: 'April 2026',
    path: '/pakistan-tour-bangladesh-squad-2026',
    icon: Users,
    color: 'text-teal-500',
  },
  {
    id: 'pakistan-vs-bangladesh-2026-schedule',
    title: 'Pakistan vs Bangladesh 2026 Schedule - Match Details',
    summary: 'Full list of fixtures, venues, and timings for the upcoming Test series.',
    date: 'April 2026',
    path: '/pakistan-vs-bangladesh-2026-schedule',
    icon: Calendar,
    color: 'text-pak-green',
  },
  {
    id: 'pakistan-next-tour-details',
    title: 'Pakistan Next Tour Details: 2026 Destination & Squads',
    summary: 'A deep dive into the Green Team\'s upcoming travel schedule to Bangladesh and the West Indies.',
    date: 'April 2026',
    path: '/pakistan-next-tour-details',
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    id: 'pakistan-upcoming-series-full-schedule',
    title: 'Pakistan Upcoming Series: Full Schedule Article',
    summary: 'A comprehensive look at the upcoming series for the Pakistan national cricket team through 2026.',
    date: 'April 2026',
    path: '/pakistan-upcoming-series-full-schedule',
    icon: BookOpen,
    color: 'text-blue-500',
  }
];

export default function Blogs() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-16"
      >
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-4 leading-none">
          Deep <span className="text-white">Analysis</span>
        </h1>
        <p className="text-ink/60 font-medium tracking-wide max-w-xl">
          In-depth articles, strategic forecasts, and detailed breakdowns of Pakistan's international cricket journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-card-bg border border-card-border rounded-[32px] overflow-hidden hover:border-white/20 transition-all flex flex-col h-full"
          >
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${post.color}`}>
                  <post.icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">{post.date}</span>
              </div>
              
              <h2 className="text-xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors flex-grow">
                {post.title}
              </h2>
              
              <p className="text-ink/60 text-xs font-medium leading-relaxed mb-8 line-clamp-3 italic">
                "{post.summary}"
              </p>
              
              <Link 
                to={post.path}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-all pt-4 border-t border-white/5"
              >
                Read Article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
