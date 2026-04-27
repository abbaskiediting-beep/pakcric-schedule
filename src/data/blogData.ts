import { Target, Users, Shield, Trophy, Calendar, Zap } from 'lucide-react';
import { BlogPost, Author } from '../types';

export const AUTHORS: Author[] = [
  {
    id: 'hassan-tariq',
    name: 'Hassan Tariq',
    role: 'Senior Cricket Analyst',
    specialization: 'Red-Ball Strategy',
    bio: 'Hassan has over 12 years of experience covering Asian cricket. He specializes in tactical deep dives, pitch analysis, and World Test Championship permutations. His work has appeared in numerous international sports journals.',
    socials: {
      twitter: 'https://twitter.com/hassantariq_cric',
      linkedin: 'https://linkedin.com/in/hassantariq'
    },
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan'
  },
  {
    id: 'zainab-rashid',
    name: 'Zainab Rashid',
    role: 'Statistical Lead',
    specialization: 'Data Analysis & Player Performance',
    bio: 'Zainab brings a data-driven approach to cricket journalism. With a background in mathematics, she specializes in analyzing player form correlations and predicting match outcomes based on historical trends.',
    socials: {
      twitter: 'https://twitter.com/zainab_stats'
    },
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab'
  },
  {
    id: 'omar-farooq',
    name: 'Omar Farooq',
    role: 'Chief News Editor',
    specialization: 'PCB Updates & Historical Insights',
    bio: 'Omar has been the voice of Pakistan cricket for over two decades. He has a deep understanding of the board dynamics and a passion for cricket history. He manages the core news desk at PakCric Schedule.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'pakistan-vs-bangladesh-2026-match-guide',
    title: 'Pakistan vs Bangladesh 2026 – Complete Match Guide',
    summary: 'Explore Pakistan vs Bangladesh 2026 schedule, squad, match dates, venues, and full preview with latest updates.',
    date: 'April 25, 2026',
    category: 'Match Guide',
    path: '/pakistan-tour-bangladesh-test-2026',
    icon: Target,
    color: 'text-pak-green',
    authorId: 'hassan-tariq'
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
    authorId: 'omar-farooq'
  },
  {
    id: 'red-ball-resilience-overview-2026',
    title: 'Red-Ball Resilience: An Overview of the Test Series 2026',
    summary: 'A high-stakes battle for WTC points as Pakistan tours Bangladesh for a critical two-match Test series in May 2026.',
    date: 'April 20, 2026',
    category: 'Series Analysis',
    path: '/red-ball-resilience-overview-2026',
    icon: Shield,
    color: 'text-red-500',
    authorId: 'hassan-tariq'
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
    authorId: 'zainab-rashid'
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
    authorId: 'omar-farooq'
  },
  {
    id: 'top-10-run-scorers-psl-11-2026',
    title: 'PSL 11: The Elite Run-Scorers of the 2026 Season',
    summary: 'A detailed breakdown of the top 10 batsmen who dominated the PSL 11 league stage, featuring Mendis, Babar, and Smith.',
    date: 'April 27, 2026',
    category: 'Tournament Stats',
    path: '/psl-11-top-run-scorers-2026',
    icon: Trophy,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'top-10-wicket-takers-psl-11-2026',
    title: 'Master of the Maroon Cap: Top 10 Wicket-Takers of PSL 11 (2026)',
    summary: 'A look at the leading bowlers of the PSL 11 league stage, featuring the rise of Sufiyan Muqeem and dominated by spin masterclasses.',
    date: 'April 27, 2026',
    category: 'Tournament Stats',
    path: '/psl-11-top-wicket-takers-2026',
    icon: Target,
    color: 'text-red-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'psl-11-qualifier-1-preview-2026',
    title: 'PSL 11 Qualifier 1: PZ vs ISU Playing XI, Match Preview & Prediction',
    summary: 'A complete breakdown of PSL 11 Qualifier 1: Peshawar Zalmi vs Islamabad United playing XI, key battles, match preview, and expert winner prediction at Karachi.',
    date: 'April 27, 2026',
    category: 'Match Preview',
    path: '/psl-11-qualifier-1-showdown-2026',
    icon: Zap,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
];
