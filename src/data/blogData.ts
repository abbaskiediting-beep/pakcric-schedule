import { Target, Users, Shield, Trophy, Calendar, Zap, Medal, History as HistoryIcon, BarChart3 } from 'lucide-react';
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
  },
  {
    id: 'bilal-ahmed',
    name: 'Bilal Ahmed',
    role: 'Domestic Talent Scout',
    specialization: 'Grassroots & Emerging Players',
    bio: 'Bilal spends his time traveling across Pakistan to find the next generation of superstars. From Tape-ball street stars to Quaid-e-Azam Trophy standouts, he has an eye for raw potential.',
    socials: {
      twitter: 'https://twitter.com/bilal_scout'
    },
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal'
  },
  {
    id: 'ayesha-khan',
    name: 'Ayesha Khan',
    role: 'Lead Ground Correspondent',
    specialization: 'Live Match Coverage & Player Interviews',
    bio: 'Ayesha is always where the action is. With experience reporting from every major stadium in Pakistan, she provides the "vibe" from the stadium that data cannot capture.',
    socials: {
      twitter: 'https://twitter.com/ayesha_cric_live'
    },
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha'
  },
  {
    id: 'faisal-qureshi',
    name: 'Dr. Faisal Qureshi',
    role: 'Sports Science Expert',
    specialization: 'Injury Management & Workload Analysis',
    bio: 'A former physiotherapist for domestic teams, Dr. Faisal provides medical perspectives on player fitness, workload management, and the science behind recovery in modern cricket.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Faisal'
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
  {
    id: 'pz-vs-isu-powerplay-blog-psl-11',
    title: 'Zalmi Blitz in Karachi: Babar and Haris Dismantle United’s Attack Early',
    summary: 'A tactical breakdown of the PSL 11 Qualifier 1 powerplay: How Babar Azam and Mohammad Haris dominated Islamabad United’s bowling with record-breaking aggression.',
    date: 'April 28, 2026',
    category: 'Match Update',
    path: '/psl-11-qualifier-1-pz-vs-iu-powerplay-blog-2026',
    icon: Zap,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'babar-azam-all-psl-centuries-complete-list',
    title: 'Babar Azam All PSL Centuries',
    summary: 'A definitive guide to every hundred scored by Babar Azam in the PSL. Detailed stats on balls faced, strike rates, venues, and the record-breaking 2026 season.',
    date: 'April 29, 2026',
    category: 'Statistical Deep Dive',
    path: '/babar-azam-all-psl-centuries-list-2026-details',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'most-centuries-in-psl-history-ranking',
    title: 'Top 5 Players With Most Centuries in PSL History',
    summary: 'Discover the top 5 century-scorers in the Pakistan Super League history—Usman Khan, Babar Azam, Kamran Akmal, Rilee Rossouw & Mohammad Rizwan—with full stats and record details.',
    date: 'April 29, 2026',
    category: 'Hall of Fame',
    path: '/top-5-players-with-most-centuries-in-psl-history-2026',
    icon: Medal,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'babar-azam-resurgence-psl-2026-analysis',
    title: "Babar Azam's Glorious Return: Two Centuries & A Season for the Ages",
    summary: 'After two years and 67 innings, Babar Azam has silenced every critic with two massive centuries in PSL 2026. A detailed breakdown of his peak form.',
    date: 'April 29, 2026',
    category: 'Editorial Analysis',
    path: '/babar-azam-glorious-return-psl-2026-centuries',
    icon: HistoryIcon,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-2026-eliminator-1-multan-vs-hyderabad-preview',
    title: 'PSL 2026 Eliminator 1: Multan Sultans vs Hyderabad Kingsmen Preview',
    summary: 'A do-or-die night in Lahore: One survives, one goes home. A full analysis of the high-stakes showdown between Multan and Hyderabad Kingsmen.',
    date: 'April 29, 2026',
    category: 'Match Preview',
    path: '/psl-2026-eliminator-1-multan-vs-hyderabad-match-analysis',
    icon: Target,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-2026-eliminator-1-confirmed-playing-xi-updates',
    title: 'PSL 2026 Eliminator 1: Confirmed Playing XIs Details',
    summary: 'The battle lines are drawn. Multan Sultans shuffle their bowling while Hyderabad Kingsmen stick to their winning formula. Full lineups inside.',
    date: 'April 29, 2026',
    category: 'Lineups',
    path: '/psl-2026-eliminator-1-playing-xi-match-updates-final',
    icon: Shield,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'kingsmen-dominate-eliminator-1-multan-collapse-2026',
    title: 'Kingsmen Dominate Eliminator 1: Multan Sultans Collapse to 159/9',
    summary: 'A clinical bowling performance from Hyderabad Kingsmen restricts Multan Sultans in the high-pressure PSL 2026 Eliminator 1. Shan Masood’s lone battle saves face.',
    date: 'April 29, 2026',
    category: 'Match Report',
    path: '/psl-2026-eliminator-1-match-summary-kingsmen-vs-multan',
    icon: BarChart3,
    color: 'text-emerald-500',
    authorId: 'zainab-rashid'
  },
];
