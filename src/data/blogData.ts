import { Target, Users, Shield, Trophy, Calendar, Zap, Medal, History as HistoryIcon, BarChart3, Star, TrendingUp, TrendingDown, Clock, Newspaper, AlertTriangle, Layout, Globe, Activity } from 'lucide-react';
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
  },
  {
    id: 'sarfraz-khan',
    name: 'Sarfraz Khan',
    role: 'Match Correspondent',
    specialization: 'Live Reporting & Press Box Insights',
    bio: 'Sarfraz provides real-time updates from ground zero. Known for his quick reports and direct observations from the press box, he ensures fans get the facts first.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarfraz'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'why-bangladesh-are-unbeatable-at-home-test-cricket-2026',
    title: "Why Bangladesh Are Almost Unbeatable at Home in Test Cricket",
    summary: "Bangladesh have beaten Pakistan, India, England, Australia and South Africa at home. Here is why Bangladesh's home Test record is one of cricket's most feared.",
    date: 'May 13, 2026',
    category: 'Analysis',
    path: '/news/why-bangladesh-are-unbeatable-at-home-test-cricket-report',
    icon: Shield,
    color: 'text-emerald-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'pak-vs-ban-2nd-test-toss-report-sylhet-2026',
    title: "PAK vs BAN 2nd Test Toss Update: Pakistan Win Toss, Elect to Bowl — Babar Azam Returns!",
    summary: "Pakistan won the toss and elected to bowl in 2nd Test Sylhet. Babar Azam returns. Mohammad Abbas takes 1st over wicket. Bangladesh 79/3 in Session 1.",
    date: 'May 16, 2026',
    category: 'Live Match',
    path: '/news/pak-vs-ban-2nd-test-toss-report-sylhet-2026',
    icon: Zap,
    color: 'text-red-500',
    authorId: 'hassan-tariq'
  },
  {
    id: 'pak-vs-ban-2nd-test-day-2-session-1-report-sylhet-2026',
    title: "PAK vs BAN 2nd Test Day 2 Session 1: Babar Azam 37* Holds Firm — Pakistan 96/4",
    summary: "Pakistan Day 2 Session 1 — Babar Azam 37* off 58 balls holding firm after 4 quick wickets. Pakistan 96/4 trail by 182 runs. Full session report.",
    date: 'May 17, 2026',
    category: 'Live Match',
    path: '/news/pak-vs-ban-2nd-test-day-2-session-1-report-sylhet-2026',
    icon: Activity,
    color: 'text-emerald-500',
    authorId: 'syed-abbas'
  },
  {
    id: 'mohsin-naqvi-pcb-chairman-icc-board-meeting-india-ahmedabad-invitation',
    title: "Mohsin Naqvi Invited to ICC Board Meeting in India — Will PCB Chief Travel to Ahmedabad?",
    summary: "PCB Chairman Mohsin Naqvi has received a historic invitation for the ICC Board meeting and IPL Final in Ahmedabad. PM Shehbaz Sharif will decide if he crosses the border.",
    date: 'May 16, 2026',
    category: 'Cricket Politics',
    path: '/news/mohsin-naqvi-pcb-chairman-icc-board-meeting-india-ahmedabad-invitation',
    icon: Globe,
    color: 'text-blue-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'pak-vs-ban-2nd-test-day-1-live-score-report-sylhet-2026',
    title: "PAK vs BAN 2nd Test Day 1 Report: Bangladesh 168/6 at Tea, Hasan Ali Stretchered Off",
    summary: "Bangladesh 168/6 after 2 sessions on Day 1 of 2nd Test Sylhet 2026. Hasan Ali stretchered off. Pakistan fight back after early BAN recovery.",
    date: 'May 16, 2026',
    category: 'Live Match',
    path: '/news/pak-vs-ban-2nd-test-day-1-live-score-report-sylhet-2026',
    icon: Zap,
    color: 'text-red-500',
    authorId: 'hassan-tariq'
  },
  {
    id: 'fatima-sana-world-record-fastest-fifty-womens-t20i-2026',
    title: "Fatima Sana Breaks World Record — Fastest Fifty in Women's T20I History",
    summary: "Pakistan captain Fatima Sana broke the world record for fastest fifty in women's T20Is — 15 balls vs Zimbabwe on May 15 2026. Full story inside.",
    date: 'May 15, 2026',
    category: 'World Record',
    path: '/news/fatima-sana-world-record-fastest-fifty-womens-t20i-2026',
    icon: Trophy,
    color: 'text-yellow-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'pakistan-playing-xi-prediction-2nd-test-bangladesh-sylhet-2026',
    title: "Pakistan Playing XI Prediction — 2nd Test vs Bangladesh, Sylhet 2026",
    summary: "Babar Azam returns, Shaheen Afridi may be dropped — Pakistan predicted playing XI for 2nd Test vs Bangladesh at Sylhet, May 16, 2026. Full analysis inside.",
    date: 'May 15, 2026',
    category: 'Tactical Analysis',
    path: '/news/pakistan-playing-xi-prediction-2nd-test-bangladesh-sylhet-2026',
    icon: Target,
    color: 'text-pak-green',
    authorId: 'hassan-tariq'
  },
  {
    id: 'pakistan-wtc-2025-27-standings-after-bangladesh-loss',
    title: "Pakistan Drop to 7th in WTC 2025-27 Table After Shock Bangladesh Loss",
    summary: "Pakistan drop to 7th in WTC 2025-27 table with 33.33% points after Bangladesh beat them by 104 runs in 1st Test Mirpur 2026. Full standings and analysis inside.",
    date: 'May 12, 2026',
    category: 'Analysis',
    path: '/news/pakistan-wtc-2025-27-standings-after-bangladesh-loss-report',
    icon: TrendingDown,
    color: 'text-red-500',
    authorId: 'hassan-tariq'
  },
  {
    id: 'pakistan-shocking-2nd-innings-collapse-163-all-out-2026',
    title: "Pakistan's Shocking 2nd Innings Collapse — 163 All Out, Bangladesh Win by 104 Runs",
    summary: "Pakistan collapse to 163 all out chasing 268 vs Bangladesh in 1st Test Mirpur 2026. Nahid Rana 5/40 destroys Pakistan middle order as Bangladesh win by 104 runs.",
    date: 'May 12, 2026',
    category: 'Match Report',
    path: '/news/pakistan-2nd-innings-collapse-163-all-out-bangladesh-2026-report',
    icon: AlertTriangle,
    color: 'text-red-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'babar-azam-declared-fit-2nd-test-vs-bangladesh-2026-sylhet',
    title: "Babar Azam Declared Fit for 2nd Test vs Bangladesh — The King Returns to Sylhet After Knee Injury Scare",
    summary: "Babar Azam declared fit and available for Pakistan's 2nd Test vs Bangladesh in Sylhet on May 16 2026. Full injury timeline, training update, and what his return means for Pakistan's must-win match.",
    date: 'May 13, 2026',
    category: 'Breaking News',
    path: '/news/babar-azam-declared-fit-for-2nd-test-vs-bangladesh-2026',
    icon: Zap,
    color: 'text-yellow-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis',
    title: "Why Pakistan Lost the 1st Test Against Bangladesh 2026 — 7 Brutal Reasons That Cost Them the Mirpur Match",
    summary: "Pakistan lost to Bangladesh by 104 runs in Mirpur's 1st Test May 2026. Top order failure, Saud golden duck, Rizwan drop, Noman underused, 2nd innings 163 collapse — key reasons analyzed.",
    date: 'May 12, 2026',
    category: 'Analysis',
    path: '/news/why-pakistan-lost-1st-test-vs-bangladesh-2026-analysis',
    icon: AlertTriangle,
    color: 'text-red-500',
    authorId: 'hassan-tariq'
  },
  {
    id: 'nahid-rana-5-wickets-vs-pakistan-1st-test-mirpur-2026',
    title: "Nahid Rana's Devastating 5/40 — Bangladesh's Youngest Hero Destroys Pakistan to Win 1st Test",
    summary: "Nahid Rana takes maiden Test five-for with 5/40 in 9.5 overs as Bangladesh beat Pakistan by 104 runs in 1st Test Mirpur 2026. Full bowling report.",
    date: 'May 12, 2026',
    category: 'Analysis',
    path: '/news/nahid-rana-5-wickets-vs-pakistan-1st-test-mirpur-2026',
    icon: Zap,
    color: 'text-yellow-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'pak-vs-ban-1st-test-full-match-report-2026',
    title: 'Bangladesh Beat Pakistan by 104 Runs in 1st Test — Shanto 101, Awais 103 on Debut, Nahid Rana 5/40',
    summary: "Bangladesh defeated Pakistan by 104 runs in the 1st Test at Mirpur May 8-12 2026. Complete 5-day match report — Shanto 101, Mominul 56+88, Awais debut 103, Abbas 5/92, Mehidy 5/102, Nahid Rana 5/40.",
    date: 'May 12, 2026',
    category: 'Match Report',
    path: '/news/pak-vs-ban-1st-test-full-match-report-2026',
    icon: Newspaper,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'pakistna-vs-bangladesh-1st-test-day-4-report-2026',
    title: 'PAK vs BAN 1st Test Day 4: Azan Awais Century, Mehidy 5-For, Rain Threat Looms',
    summary: "Azan Awais scored 103 on debut, Rizwan 59, Agha 58 as Pakistan posted 386. Mehidy Hasan Miraz took 5/102. Bangladesh lead by 120 runs at lunch on Day 4.",
    date: 'May 11, 2026',
    category: 'Match Report',
    path: '/news/pak-vs-ban-1st-test-day-4-report-2026',
    icon: Newspaper,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'australia-odi-squad-pakistan-tour-2026-report',
    title: 'Australia Announce ODI Squad for Pakistan Series: No Big Three, Mitchell Marsh Leads New-Look Side',
    summary: "Australia's 15-member ODI squad for Pakistan series May 30–June 4 announced. No Cummins, Starc, Hazlewood, Head or Maxwell. Uncapped Ollie Peake, Billy Stanlake return. Detailed player analysis and series schedule.",
    date: 'May 11, 2026',
    category: 'Squad Announcement',
    path: '/news/australia-odi-squad-pakistan-tour-2026-announcement',
    icon: Newspaper,
    color: 'text-amber-500',
    authorId: 'omar-farooq'
  },
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
    path: '/news/match-preview-dhaka-test',
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
    path: '/news/squad-selection-intelligence',
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
    title: 'Pakistan Test Team Bangladesh Rawan: Poori Squad, 4 Uncapped Players, Sarfaraz Ahmed Head Coach — Aur Jo Nahi Gaye Unki Baat Bhi',
    summary: "Pakistan's 16-member Test squad for Bangladesh 2026 announced — Shan Masood captain, Sarfaraz Ahmed head coach, 4 uncapped players (Abdullah Fazal, Amad Butt, Azan Awais, Ghazi Ghori). Plus who was LEFT OUT — Fakhar Zaman, Abrar Ahmed, Naseem Shah and more. Full analysis inside.",
    date: 'May 3, 2026',
    category: 'Squad Announcement',
    path: '/pakistan-tour-bangladesh-squad-2026',
    icon: Users,
    color: 'text-pak-green',
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
    path: '/news/pakistan-vs-australia-2026-analysis',
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
    path: '/news/psl-2026-eliminator-2-preview-islamabad-vs-hyderabad',
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
    path: '/news/darren-sammy-psl-11-final-invitation-official',
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
    path: '/news/babar-azam-6-runs-away-zalmi-record',
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
    path: '/news/psl-2026-eliminator-2-hyderabad-kingsmen-match-report',
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
    path: '/news/hunain-shah-last-over-dramatic-finish-psl-2026',
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
    path: '/news/hyderabad-kingsmen-psl-2026-journey-review',
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
    path: '/news/psl-2026-final-full-campaign-pz-vs-hyk',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-11-final-ceremony-2026-details',
    title: 'PSL 11 Closing Ceremony: Atif Aslam, Aima Baig, Arif Lohar, Ali Azmat, Sabri Sisters & Daniya Kanwal',
    summary: 'PSL 11 Closing Ceremony on May 3, 2026 at Gaddafi Stadium Lahore — confirmed performers are Atif Aslam, Aima Baig, Arif Lohar, Ali Azmat, Sabri Sisters and Daniya Kanwal. Full guide inside.',
    date: 'May 3, 2026',
    category: 'Event Guide',
    path: '/psl-11-final-ceremony-2026-details',
    icon: Star,
    color: 'text-yellow-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'babar-azam-world-odi-xi-podcast-blog',
    title: 'Babar Azam Picks His World ODI XI — No Kohli, No Rohit, and No Babar!',
    summary: 'On the day of PSL 2026 Final, Babar Azam selected his World Best ODI XI on Zalmi TV — excluded Virat Kohli, Rohit Sharma, and Jasprit Bumrah, and placed himself as 12th man.',
    date: 'May 3, 2026',
    category: 'Analysis',
    path: '/news/babar-azam-world-odi-xi-podcast-blog',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'yasir-shah-birthday-tribute-blog-2026',
    title: "Happy Birthday Yasir Shah! Pakistan's Greatest Modern Leg-Spinner Turns 40",
    summary: 'Yasir Shah turns 40 today — May 3, 2026. The man from Swabi who became the fastest bowler in history to take 200 Test wickets. Full career tribute and records.',
    date: 'May 3, 2026',
    category: 'Analysis',
    path: '/news/yasir-shah-birthday-tribute-blog-2026',
    icon: Star,
    color: 'text-yellow-500',
    authorId: 'ayesha-khan'
  },
  {
    id: 'babar-azam-vs-usman-khan-psl-2026-batting-comparison',
    title: 'Babar Azam vs Usman Khan — PSL 2026 Batting Comparison',
    summary: 'Elegance vs explosive power. The PSL final\'s two biggest batting stories, compared stat by stat.',
    date: 'May 3, 2026',
    category: 'Analysis',
    path: '/news/babar-azam-vs-usman-khan-comparison-2026',
    icon: BarChart3,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'psl-11-final-time-guide-world-lookup-2026',
    title: 'What Time Does PSL 11 Final Start Today? May 3, 2026 — Complete Time Guide',
    summary: 'Everything you need to know about tonight\'s PSL 11 final schedule: Kickoff times for Pakistan, India, UAE, UK, and USA. Plus ceremony timing.',
    date: 'May 3, 2026',
    category: 'Match Guide',
    path: '/news/psl-11-final-starting-time-guide-2026',
    icon: Clock,
    color: 'text-red-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'babar-azam-psl-finals-from-player-to-captain-2026',
    title: 'Babar Azam in PSL Finals: From Player to Captain — All Finals, All Performances & The Historic First',
    summary: 'Babar Azam has played in 5 PSL finals — 2018, 2019, 2020 (winner), 2021 and 2026. Tonight is the first time he leads a team as captain in a PSL Final. Complete breakdown inside.',
    date: 'May 3, 2026',
    category: 'Analysis',
    path: '/news/babar-azam-psl-finals-from-player-to-captain',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'psl-2026-final-toss-result-hyk-vs-pz-2026',
    title: 'PSL 2026 Final Toss Result: Hyderabad Kingsmen Win Toss, Elect to Bowl — Peshawar Zalmi to Bat First',
    summary: 'PSL 2026 Final toss result — Hyderabad Kingsmen won the toss and elected to field. Peshawar Zalmi batting first. Nahid Rana returns for Zalmi.',
    date: 'May 3, 2026',
    category: 'Breaking News',
    path: '/news/psl-2026-final-toss-result-hyk-vs-pz',
    icon: Zap,
    color: 'text-red-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'peshawar-zalmi-psl-2026-champions-match-report-2026',
    title: "Peshawar Zalmi Are PSL 2026 Champions! Aaron Hardie's All-Round Heroics Seal 5-Wicket Victory",
    summary: "Peshawar Zalmi won the PSL 2026 Final by 5 wickets against Hyderabad Kingsmen at Gaddafi Stadium. Aaron Hardie 4/24 + 55* was Player of the Match.",
    date: 'May 4, 2026',
    category: 'Breaking News',
    path: '/news/peshawar-zalmi-psl-2026-champions-match-report',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'babar-azam-psl-2026-complete-story-comeback-2026',
    title: "Babar Azam PSL 2026: How Pakistan's Most Criticised Batter Became Its Greatest Champion",
    summary: "Babar Azam entered PSL 2026 as Pakistan's most criticised batter — and left as PSL Champion captain with 588 runs and a world record. The complete season journey.",
    date: 'May 4, 2026',
    category: 'Analysis',
    path: '/news/babar-azam-psl-2026-complete-story-comeback',
    icon: Star,
    color: 'text-yellow-500',
    authorId: 'zainab-rashid'
  },
  {
    id: 'aaron-hardie-psl-2026-final-all-rounder-masterclass-2026',
    title: "Aaron Hardie PSL 2026 Final: The All-Rounder Who Won Pakistan's Biggest Game",
    summary: "Aaron Hardie delivered one of the greatest all-round performances in PSL Final history — 4/27 with the ball + 56* with the bat when Zalmi were 40/4. A complete analysis of a historic night.",
    date: 'May 4, 2026',
    category: 'Analysis',
    path: '/news/aaron-hardie-psl-2026-final-all-rounder-masterclass',
    icon: Zap,
    color: 'text-yellow-500',
    authorId: 'syed-abbas'
  },
  {
    id: 'pakistan-women-vs-zimbabwe-women-1st-odi-2026',
    title: 'Pakistan Women Beat Zimbabwe Women by 168 Runs in 1st ODI | Sadaf Shamas 98, Najiha Alvi 56*',
    summary: 'Pakistan Women crushed Zimbabwe Women by 168 runs in the 1st ODI of Zimbabwe tour of Pakistan at National Stadium Karachi. Sadaf Shamas scored 98, Gull Feroza 50, opening stand 162.',
    date: 'May 4, 2026',
    category: 'Breaking News',
    path: '/news/pakistan-women-vs-zimbabwe-women-1st-odi-2026-report',
    icon: Target,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'pak-vs-ban-wtc-analysis-2025-2027',
    title: 'Pakistan vs Bangladesh WTC 2025–2027: High Stakes Series, Points Table Impact & Qualification Scenarios',
    summary: 'Pakistan vs Bangladesh Test series is crucial for WTC 2025–2027. Pakistan aims for top 4, Bangladesh fights survival. Full analysis, points table impact & predictions.',
    date: 'May 5, 2026',
    category: 'WTC Analysis',
    path: '/news/pakistan-vs-bangladesh-wtc-analysis-2025-2027',
    icon: BarChart3,
    color: 'text-pak-green',
    authorId: 'hassan-tariq'
  },
  {
    id: 'shaheen-shah-afridi-bangladesh-interview-2026',
    title: 'Shaheen Shah Afridi\'s Bangladesh Interview: "Pakistan is Famous for Fast Bowling — Our Pacers Will Take Wickets"',
    summary: 'Shaheen Shah Afridi speaks ahead of Pakistan\'s Bangladesh Test series 2026 — on Pakistan\'s fast bowling identity, no all-spin strategy, Babar Azam\'s return, and young players\' opportunities.',
    date: 'May 6, 2026',
    category: 'Latest Interview',
    path: '/news/shaheen-shah-afridi-bangladesh-interview-2026',
    icon: Star,
    color: 'text-pak-green',
    authorId: 'ayesha-khan'
  },
  {
    id: 'pakistan-women-vs-zimbabwe-women-2nd-odi-2026',
    title: 'Pakistan Women Beat Zimbabwe Women by 206 Runs in 2nd ODI | Sadaf Shamas 101, Gull Feroza 100',
    summary: 'History made in Karachi as Sadaf Shamas and Gull Feroza both score centuries in a record-breaking 189-run opening stand, sealing the series 2-0. Largest ever run-margin vs Zimbabwe.',
    date: 'May 6, 2026',
    category: 'Match Report',
    path: '/news/pakistan-women-vs-zimbabwe-women-2nd-odi-2026-report',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'zainab-rashid'
  },
  {
    id: 'australia-players-skip-pakistan-odi-series-ipl-2026',
    title: 'IPL First, Pakistan Later — Australian Stars to Skip ODI Series',
    summary: 'Cricket Australia confirms top stars will miss the Pakistan ODI series starting May 30 to honor IPL 2026 franchise commitments during the playoff window.',
    date: 'May 7, 2026',
    category: 'Breaking News',
    path: '/news/australia-players-skip-pakistan-odi-series-ipl-2026',
    icon: Newspaper,
    color: 'text-amber-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'bangladesh-cricket-team-2026-analysis',
    title: 'Bangladesh Cricket Team 2026: Complete Squad Analysis, Key Players & Strategy',
    summary: 'In-depth breakdown of the Tigers\' squad for the 2026 Pakistan series. Analysis of spin weapons, pace X-factors, and leadership challenges.',
    date: 'May 7, 2026',
    category: 'Team Analysis',
    path: '/news/bangladesh-cricket-team-2026-analysis',
    icon: Shield,
    color: 'text-emerald-500',
    authorId: 'omar-farooq'
  },
  {
    id: 'pak-vs-ban-2026-test-trophy-reveal',
    title: 'PAK vs BAN 2026 Test Series Trophy Revealed: Shan and Shanto Unveil the Prize',
    summary: 'Pakistan and Bangladesh captains Shan Masood and Najmul Hossain Shanto unveiled the Test series trophy ahead of the 2-match WTC series starting May 8 in Dhaka.',
    date: 'May 7, 2026',
    category: 'Latest News',
    path: '/news/pak-vs-ban-2026-test-trophy-reveal',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'sarfraz-khan'
  },
  {
    id: 'babar-azam-injured-1st-bangladesh-test-2026',
    title: 'Babar Azam Ruled Out of 1st Bangladesh Test With Left Knee Injury',
    summary: 'Pakistan\'s biggest batting blow: Babar Azam ruled out of the Dhaka Test starting May 8 due to a left knee injury. Full details and reshuffle options.',
    date: 'May 7, 2026',
    category: 'Breaking News',
    path: '/news/babar-azam-injured-1st-bangladesh-test-2026',
    icon: AlertTriangle,
    color: 'text-red-500',
    authorId: 'sarfraz-khan'
  },
  {
    id: 'babar-azam-injury-batting-lineup-analysis-2026',
    title: "The Babar Factor: How Pakistan Plans for the 2nd Test",
    summary: "Tactical analysis of Pakistan's batting strategy for the 2nd Test. Comparing Azan Awais and Abdullah Fazal as key contributors in Chattogram.",
    date: 'May 7, 2026',
    category: 'Tactical Analysis',
    path: '/news/babar-azam-injury-batting-lineup-analysis-2026',
    icon: Layout,
    color: 'text-pak-green',
    authorId: 'hassan-tariq'
  },
  {
    id: 'taiul-mehidy-spin-duo-analysis-2026',
    title: 'The Twin Spin Threat: Taijul vs Mehidy and the Pakistan Batting Challenge',
    summary: 'A tactical breakdown of Bangladesh\'s spin duo, Taijul Islam and Mehidy Hasan Miraz. Analyzes their strengths against different batting types and how a Babar-less Pakistan top order must adapt.',
    date: 'May 8, 2026',
    category: 'Tactical Analysis',
    path: '/news/taiul-mehidy-spin-duo-analysis-2026',
    icon: Target,
    color: 'text-emerald-500',
    authorId: 'hassan-tariq'
  },
  {
    id: 'pak-vs-ban-1st-test-day-1-report-2026',
    title: 'Bangladesh 301/4 at Stumps — Shanto Century Puts Pakistan on the Backfoot',
    summary: 'Captain Najmul Hossain Shanto hits 101, Mominul Haque falls on 91 as Bangladesh dominate Day 1 in Mirpur. Pakistan pacers struggle to find breakthroughs on opening day.',
    date: 'May 8, 2026',
    category: 'Match Report',
    path: '/news/pak-vs-ban-1st-test-day-1-report-2026',
    icon: Newspaper,
    color: 'text-pak-green',
    authorId: 'sarfraz-khan'
  },
  {
    id: 'pak-vs-ban-1st-test-day-2-report-2026',
    title: 'Pakistan vs Bangladesh 1st Test Day 2 Report 2026: Abbas Fifer, Azan Awais Debut Heroics',
    summary: 'Abbas takes 5/92 as Bangladesh make 413. Debutant Azan Awais shines with 85* as Pakistan finish Day 2 at 179/1, trailing by 234.',
    date: 'May 9, 2026',
    category: 'Match Report',
    path: '/news/pak-vs-ban-1st-test-day-2-report-2026',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'sarfraz-khan'
  },
  {
    id: 'azan-awais-test-debut-dhaka-sensational-80-2026',
    title: "Azan Awais: Pakistan's 21-Year-Old Sensation Lights Up Test Debut With 80+ Masterclass in Dhaka",
    summary: "Azan Awais, 21, scores 80+ on Test debut vs Bangladesh in Mirpur May 9 2026. 106-run opening stand with Imam, survived DRS review, calm under pressure. Profile, domestic record, U19 heroics and full innings breakdown.",
    date: 'May 9, 2026',
    category: 'Analysis',
    path: '/news/azan-awais-pakistan-test-debut-masterclass-dhaka',
    icon: Star,
    color: 'text-pak-green',
    authorId: 'bilal-ahmed'
  },
  {
    id: 'pak-vs-ban-1st-test-day-3-session-1-report-2026',
    title: 'PAK vs BAN Day 3 Session 1: 4 Wickets Fall, PAK 251/5 at Lunch',
    summary: 'Bangladesh struck 4 times in Day 3 morning session vs Pakistan. Azan Awais 85 dismissed, Fazal 60 out, Shan Masood 56 falls, Saud Shakeel 0. Pakistan 251/5 at lunch — trail Bangladesh by 162 runs.',
    date: 'May 10, 2026',
    category: 'Match Report',
    path: '/news/pak-vs-ban-1st-test-day-3-session-1-report-2026',
    icon: Newspaper,
    color: 'text-pak-green',
    authorId: 'sarfraz-khan'
  },
  {
    id: 'rizwan-59-vs-bangladesh-1st-test-day-3-2026',
    title: "Mohammad Rizwan's Crucial 59 Keeps Pakistan's Hope Alive in Mirpur Test",
    summary: "Rizwan scores a crucial 59 and adds 50+ stand with Salman Agha as Pakistan post 386 vs Bangladesh in Mirpur 1st Test 2026.",
    date: 'May 10, 2026',
    category: 'Match Analysis',
    path: '/news/mohammad-rizwan-59-vs-bangladesh-1st-test-day-3-2026',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'salman-agha-58-vs-bangladesh-1st-test-day-3-2026',
    title: "Salman Agha's Gritty 58 and the No-Ball That Changed Everything",
    summary: "Salman Ali Agha scores 58 and survives a no-ball to stitch a match-saving 119-run partnership with Mohammad Rizwan in Mirpur.",
    date: 'May 10, 2026',
    category: 'Match Analysis',
    path: '/news/salman-agha-58-vs-bangladesh-1st-test-day-3-2026',
    icon: Trophy,
    color: 'text-pak-green',
    authorId: 'omar-farooq'
  },
  {
    id: 'pakistan-women-t20-world-cup-2026-squad-analysis',
    title: "Pakistan Women’s T20 World Cup 2026 Squad — Full Analysis & Expectations",
    summary: "Pakistan Women announce their T20 World Cup 2026 squad led by Fatima Sana. Full squad analysis, player breakdown, strengths, weaknesses, and tournament expectations.",
    date: 'May 16, 2026',
    category: 'Squad Analysis',
    path: '/news/pakistan-women-t20-world-cup-2026-squad-analysis',
    icon: Users,
    color: 'text-emerald-500',
    authorId: 'syed-abbas'
  },
];
