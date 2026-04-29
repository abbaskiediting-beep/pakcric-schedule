export type MatchFormat = 'Test' | 'ODI' | 'T20I';

export interface TopScorer {
  name: string;
  runs: string;
  balls: string;
}

export interface WicketTaker {
  name: string;
  wickets: string;
  runs: string;
  overs: string;
}

export interface KeyPartnership {
  players: string;
  runs: string;
  balls: string;
}

export interface PlayerToWatch {
  name: string;
  role: string;
  reason: string;
  imgUrl?: string;
}

export interface MatchStats {
  topScorers?: TopScorer[];
  leadingWicketTakers?: WicketTaker[];
  keyPartnerships?: KeyPartnership[];
}

export interface Match {
  id: string;
  opponent: string;
  format: MatchFormat;
  date: string;
  time: string;
  venue: string;
  series: string;
  status: 'Upcoming' | 'Live' | 'Completed' | 'Scheduled' | 'High Voltage';
  result?: string;
  flagUrl?: string;
  scorePAK?: string;
  scoreOpponent?: string;
  overs?: string;
  stats?: MatchStats;
  preMatchAnalysis?: string;
  postMatchSummary?: string;
  playersToWatch?: PlayerToWatch[];
}

export interface Achievement {
  title: string;
  description: string;
  featured?: boolean;
}

export interface Player {
  name: string;
  role: string;
  imgUrl?: string;
  stats: PlayerStats;
  achievements?: Achievement[];
}

export interface FormatStats {
  matches: number;
  innings?: number;
  runs?: number;
  wickets?: number;
  avg: number;
  sr: number;
  highestScore?: string;
  bestBowling?: string;
  centuries?: number;
  fifties?: number;
  fiveWickets?: number;
}

export interface PlayerStats {
  matches: number;
  innings?: number;
  runs?: number;
  wickets?: number;
  avg: number;
  sr: number;
  highestScore?: string;
  bestBowling?: string;
  fiveWickets?: number;
  recentForm: string[];
  formats?: {
    test?: FormatStats;
    odi?: FormatStats;
    t20i?: FormatStats;
  };
}

export interface Squad {
  series: string;
  format: MatchFormat;
  players: {
    name: string;
    description?: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  role: string;
  avatarUrl?: string;
  specialization: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  path: string;
  authorId: string;
  icon?: any;
  color?: string;
}

export interface SeriesSummary {
  id: string;
  seriesName: string;
  opponent: string;
  format: MatchFormat;
  headToHead: {
    total: number;
    pakWins: number;
    oppWins: number;
    noResult: number;
  };
  venueHistory: {
    venue: string;
    totalMatches: number;
    pakWins: number;
    oppWins: number;
    averageScore?: string;
  }[];
  predictedXI: {
    team: string;
    players: string[];
  }[];
  keyPlayers: {
    name: string;
    team: string;
    reason: string;
  }[];
}
