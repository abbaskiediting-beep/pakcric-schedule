import { Target, Users, Shield, Trophy, Calendar, Zap, Medal, History as HistoryIcon, BarChart3, Star, TrendingUp } from 'lucide-react';
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
  },
  {
    id: 'syed-abbas',
    name: 'Syed Abbas',
    role: 'Lead Cricket Analyst',
    specialization: 'Strategic Roadmap & Team Dynamics',
    bio: 'Syed provides high-level tactical analysis on Pakistan’s transition phases. He is known for his ability to break down squad strategies and long-term planning for major ICC events.',
    socials: {
      twitter: 'https://twitter.com/syedabbas_cric'
    },
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Syed'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'the-evolution-of-the-shaheens-2026-strategy',
    title: 'The Evolution of the Shaheens: A Closer Look at Pakistan’s 2026 Squad Strategy',
    summary: 'A deep dive into Pakistan\'s cricket strategy for 2026. Explore the new Test, ODI, and T20I squad dynamics and the vision for the future of Pakistan cricket.',
    date: 'April 28, 2026',
    category: 'Analysis',
    path: '/the-evolution-of-the-shaheens-2026-strategy',
    icon: TrendingUp,
    color: 'text-pak-green',
    authorId: 'syed-abbas'
  },
  {
    id: 'pakistan-icc-rankings-april-2026-analysis',
    title: 'The Global Standings: Analyzing Pakistan’s Positions in the April 2026 ICC Rankings',
    summary: 'In-depth analysis of Pakistan cricket players\' ICC rankings as of April 2026. See how Babar Azam, Noman Ali, Sahibzada Farhan, and others compare globally.',
    date: 'April 28, 2026',
    category: 'Rankings Update',
    path: '/pakistan-icc-rankings-april-2026-analysis',
    icon: BarChart3,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'match-preview-dhaka-test-2026',
    title: 'The Dhaka Chess Match: 1st Test Preview',
    summary: 'In-depth preview and tactical analysis for Pakistan\'s 1st Test vs Bangladesh in Dhaka. Key player battles, pitch reports, and squad news.',
    date: 'April 22, 2026',
    category: 'Match Preview',
    path: '/blogs/match-preview-dhaka-test',
    icon: Target,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'squad-selection-intelligence-2026',
    title: 'Beyond the Names: Selection Strategy 2026',
    summary: 'In-depth analysis of Pakistan\'s Test selection for the 2026 Bangladesh tour. Why domestic form was prioritized and tactical roles of the new call-ups.',
    date: 'April 24, 2026',
    category: 'Selection Intelligence',
    path: '/blogs/squad-selection-intelligence',
    icon: Users,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'pakistan-upcoming-series-full-schedule-2026',
    title: 'Pakistan Upcoming Series Full Schedule 2026',
    summary: 'A complete guide to Pakistan’s 2026 international calendar including England, Bangladesh, and the highly anticipated tours.',
    date: 'April 25, 2026',
    category: 'Cricket Guide',
    path: '/pakistan-upcoming-series-full-schedule',
    icon: Calendar,
    color: 'text-blue-500',
    authorId: 'bilal-ahmed'
  },
  {
    id: 'pakistan-next-tour-details-2026-guide',
    title: 'Pakistan Next Match Details (2026)',
    summary: 'Find Pakistan next match date, time, opponent, and venue. Stay updated with upcoming Pakistan cricket matches and tour forecasts.',
    date: 'April 24, 2026',
    category: 'Tour Forecast',
    path: '/pakistan-next-tour-details',
    icon: Target,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
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
    authorId: 'ayesha-khan'
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
    authorId: 'faisal-qureshi'
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
    authorId: 'hassan-tariq'
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
    authorId: 'syed-abbas'
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
    authorId: 'bilal-ahmed'
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
    authorId: 'ayesha-khan'
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
    authorId: 'faisal-qureshi'
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
    authorId: 'syed-abbas'
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
    authorId: 'hassan-tariq'
  },
  {
    id: 'kingsmen-final-victory-multan-dethroned-2026',
    title: 'Kingsmen’s Masterclass: Hyderabad Dethrones Multan in One-Sided Eliminator 1',
    summary: 'A ruthless display of T20 cricket as Hyderabad Kingsmen chase down 160 with 8 wickets and 28 balls to spare. Maaz Sadaqat and Usman Khan lead the charge.',
    date: 'April 29, 2026',
    category: 'Match Report',
    path: '/psl-2026-eliminator-1-kingsmen-vs-multan-final-result-report',
    icon: Trophy,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-2026-eliminator-1-full-match-report-kingsmen-vs-multan',
    title: 'PSL 2026 Eliminator 1 Match Report: Hyderabad Kingsmen Knock Out Multan Sultans by 8 Wickets',
    summary: 'A comprehensive breakdown of Eliminator 1. From Multan\'s early collapse to Usman Khan and Maaz Sadaqat\'s explosive half-centuries. Full scorecard inside.',
    date: 'April 30, 2026',
    category: 'Match Report',
    path: '/psl-2026-eliminator-1-full-match-report-analysis',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'ayesha-khan'
  },
  {
    id: 'psl-11-qualifier-1-match-report-babar-century',
    title: 'PSL 11 Qualifier 1 Match Report: Babar Azam 103 Sinks Islamabad United',
    summary: 'A definitive breakdown of the Qualifier 1 showdown. How Babar Azam\'s 11th T20 century propelled Peshawar Zalmi into the final.',
    date: 'April 28, 2026',
    category: 'Match Report',
    path: '/psl-11-qualifier-1-match-report-babar-century',
    icon: Trophy,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'multan-sultans-psl-2026-full-season-journey-review',
    title: 'Multan Sultans PSL 2026: Poori Season Ki Kahani — Shuru Se Eliminator Tak Ki Mukammal Journey',
    summary: 'Multan Sultans ka PSL 2026 ka poora safar — naye maalik, naya captain, Sahibzada Farhan ki batting aur Eliminator ki shikast ka mukammal jaiza.',
    date: 'April 30, 2026',
    category: 'Season Review',
    path: '/multan-sultans-psl-2026-full-season-journey-review',
    icon: HistoryIcon,
    color: 'text-yellow-500',
    authorId: 'bilal-ahmed'
  },
  {
    id: 'maaz-sadaqat-psl-2026-season-review-stats',
    title: "Maaz Sadaqat PSL 2026: Pakistan's Most Exciting 20-Year-Old Takes the League by Storm",
    summary: "A complete story of Maaz Sadaqat's PSL 2026 — from a 19-ball half-century to a match-winning 64* in the Eliminator knockout.",
    date: 'April 30, 2026',
    category: 'Rising Star',
    path: '/maaz-sadaqat-psl-2026-season-review-stats',
    icon: Star,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'usman-khan-psl-2026-season-review-records',
    title: "Usman Khan PSL 2026: History Maker, Record Breaker, Pakistan's Most Explosive Batter",
    summary: "The man who rewrote PSL history in 2026. A detailed breakdown of Usman Khan's 4th PSL century and his impact on the Hyderabad Kingsmen's debut season.",
    date: 'April 30, 2026',
    category: 'Season Review',
    path: '/usman-khan-psl-2026-season-review-records',
    icon: HistoryIcon,
    color: 'text-rose-500',
    authorId: 'syed-abbas'
  },
  {
    id: 'pakistan-vs-australia-2026-analysis',
    title: "Pakistan vs Australia 2026: Schedule and Deep Dive into Head-to-Head Records",
    summary: "Exploring the storied rivalry: From Australia's Test dominance to Pakistan's recent T20I sweep. Detailed head-to-head records and 2026 schedule analysis.",
    date: 'April 30, 2026',
    category: 'Series Analysis',
    path: '/blogs/pakistan-vs-australia-2026-analysis',
    icon: HistoryIcon,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-2026-eliminator-2-preview-iu-vs-hyk',
    title: 'PSL 2026 Eliminator 2: Islamabad United vs Hyderabad Kingsmen — Full Match Preview',
    summary: 'One team goes to the Final. One team goes home. A complete breakdown of the high-stakes Eliminator 2 at Gaddafi Stadium.',
    date: 'May 1, 2026',
    category: 'Match Preview',
    path: '/blogs/psl-2026-eliminator-2-preview-islamabad-vs-hyderabad',
    icon: Target,
    color: 'text-pak-green',
    authorId: 'syed-abbas'
  },
  {
    id: 'darren-sammy-psl-11-final-invitation-javed-afridi',
    title: 'Darren Sammy Pakistan Aa Rahe Hain! Javed Afridi Ne PSL 11 Final Ke Liye Officially Bulaya',
    summary: 'Peshawar Zalmi ke maalik Javed Afridi ne PSL 11 Final se pehle Darren Sammy ko officially Pakistan aane ki dawat di — fans ke request par.',
    date: 'May 1, 2026',
    category: 'Latest News',
    path: '/blogs/darren-sammy-psl-11-final-invitation-official',
    icon: Star,
    color: 'text-yellow-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'babar-azam-6-runs-away-kamran-akmal-zalmi-record',
    title: 'Babar Azam Sirf 6 Runs Door: Kamran Akmal Ka Record Todenge Aur Baneinge PSL History Ka Anokha Khiladi',
    summary: 'Babar Azam sirf 6 runs aur banane ke baad Peshawar Zalmi ke all-time highest run-scorer ban jayenge — Kamran Akmal ke 1972 runs ka record todke. PSL history ke pehle aur ikaule batter baneinge jo do alag franchises ke all-time highest scorer hon.',
    date: 'May 1, 2026',
    category: 'Analysis',
    path: '/blogs/babar-azam-6-runs-away-zalmi-record',
    icon: HistoryIcon,
    color: 'text-pak-green',
    authorId: 'faisal-qureshi'
  },
  {
    id: 'psl-2026-eliminator-2-hyderabad-kingsmen-win-match-report',
    title: 'PSL 2026 Eliminator 2: Hyderabad Kingsmen ke 2 Runs se Jeet — PSL Final mein Entry',
    summary: 'Hyderabad Kingsmen ne Islamabad United ko 2 runs se hara kar PSL 11 ke Final mein jagah bana li. Usman Khan ki tufaani innings aur Hunain Shah ka aakhri over ka jaadu.',
    date: 'May 1, 2026',
    category: 'Match Update',
    path: '/blogs/psl-2026-eliminator-2-hyderabad-kingsmen-match-report',
    icon: Zap,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'hunain-shah-last-over-psl-2026-eliminator-2-analysis',
    title: "Hunain Shah's Last Over: 6 Balls, 3 Runs, 1 Wicket — The Most Dramatic Over in PSL 2026",
    summary: "Islamabad United needed just 6 runs off the last over to reach the PSL Final. Hunain Shah had other ideas. A full ball-by-ball breakdown of the over that sent Hyderabad Kingsmen into their debut PSL Final.",
    date: 'May 2, 2026',
    category: 'Analysis',
    path: '/blogs/hunain-shah-last-over-dramatic-finish-psl-2026',
    icon: Zap,
    color: 'text-yellow-500',
    authorId: 'bilal-ahmed'
  },
  {
    id: 'hyderabad-kingsmens-journey-psl-2026-turnaround',
    title: "From 0-4 to the Final: The Remarkable Journey of Hyderabad Kingsmen in PSL 2026",
    summary: "How the debutants Hyderabad Kingsmen overcame a disastrous start to reach the PSL 11 Final. A story of resilience, tactical genius, and emergence of new stars.",
    date: 'May 2, 2026',
    category: 'Analysis',
    path: '/blogs/hyderabad-kingsmen-psl-2026-journey-review',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-2026-final-pz-vs-hyk-campaign-full-blog',
    title: 'PSL 2026 Final: Peshawar Zalmi vs Hyderabad Kingsmen — Two Extraordinary Campaigns, One Historic Night',
    summary: 'A complete review of the PSL 2026 campaigns for both finalists. From Babar Azam\'s 588 runs to Hyderabad Kingsmen\'s 0-4 turnaround. Stats, results, and final preview.',
    date: 'May 2, 2026',
    category: 'Full Campaign Blog',
    path: '/blogs/psl-2026-final-full-campaign-pz-vs-hyk',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-11-final-ceremony-2026-details',
    title: 'PSL 11 Final Ceremony 2026: Closing Ceremony, Trophy, Tickets & Timing',
    summary: 'A complete guide to the PSL 2026 Final closing ceremony at Gaddafi Stadium. Details on the "Infinity" trophy, performer lineup, ticket prices, and event timeline.',
    date: 'May 2, 2026',
    category: 'Event Guide',
    path: '/psl-11-final-ceremony-2026-details',
    icon: Star,
    color: 'text-yellow-500',
    authorId: 'ayesha-khan'
  },
  {
    id: 'babar-azam-world-odi-xi-podcast-blog',
    title: 'Babar Azam Picks His World ODI XI — No Kohli, No Rohit, and No Babar!',
    summary: 'On the day of PSL 2026 Final, Babar Azam selected his World Best ODI XI on Zalmi TV — excluded Virat Kohli, Rohit Sharma, and Jasprit Bumrah, and placed himself as 12th man.',
    date: 'May 3, 2026',
    category: 'Analysis',
    path: '/blogs/babar-azam-world-odi-xi-podcast-blog',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
];
