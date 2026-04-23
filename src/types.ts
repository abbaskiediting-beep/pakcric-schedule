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
  status: 'Upcoming' | 'Live' | 'Completed';
  result?: string;
  flagUrl?: string;
  scorePAK?: string;
  scoreOpponent?: string;
  overs?: string;
  stats?: MatchStats;
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
