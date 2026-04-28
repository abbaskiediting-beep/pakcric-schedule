import { Player } from './types';

export const PLAYER_STATS: Record<string, Player> = {
  'Babar Azam': {
    name: 'Babar Azam',
    role: 'Batter',
    imgUrl: 'https://p.imgci.com/db/PICTURES/CMS/320400/320448.png',
    achievements: [
      { title: 'Fastest to 5000 ODI Runs', description: 'Reached the milestone in just 97 innings.', featured: true },
      { title: '3rd PSL Century', description: '100* off 52 balls against Quetta Gladiators (PSL 11).', featured: true },
      { title: 'Undisputed PSL King', description: 'Highest run-getter in PSL history.' }
    ],
    stats: {
      matches: 295,
      innings: 370,
      runs: 15200,
      avg: 48.25,
      sr: 125.40,
      highestScore: '196',
      recentForm: ['45', '12', '101*', '34', '56'],
      formats: {
        test: { matches: 54, innings: 101, runs: 4366, avg: 42.39, sr: 54.20, highestScore: '196', centuries: 9, fifties: 26 },
        odi: { matches: 117, innings: 114, runs: 6500, avg: 56.72, sr: 88.75, highestScore: '158', centuries: 19, fifties: 32 },
        t20i: { matches: 124, innings: 118, runs: 4515, avg: 41.06, sr: 129.08, highestScore: '122', centuries: 3, fifties: 36 }
      }
    }
  },
  'Mohammad Rizwan': {
    name: 'Mohammad Rizwan',
    role: 'Wicketkeeper Batter',
    imgUrl: 'https://p.imgci.com/db/PICTURES/CMS/320400/320461.png',
    achievements: [
      { title: 'T20I Record Breaker', description: 'Most T20I runs in a calendar year (1,326 runs in 2021).', featured: true },
      { title: 'Consistent Performer', description: 'Highest T20I average among regular batters.' }
    ],
    stats: {
      matches: 250,
      runs: 8792,
      avg: 42.74,
      sr: 104.20,
      highestScore: '171*',
      recentForm: ['67', '43', '12', '88*', '21'],
      formats: {
        test: { matches: 41, runs: 2399, avg: 39.98, sr: 52.45, highestScore: '171*', centuries: 3, fifties: 9 },
        odi: { matches: 103, runs: 2979, avg: 40.81, sr: 88.50, highestScore: '131*', centuries: 3, fifties: 13 },
        t20i: { matches: 106, runs: 3414, avg: 47.42, sr: 129.12, highestScore: '104*', centuries: 1, fifties: 28 }
      }
    }
  },
  'Shaheen Shah Afridi': {
    name: 'Shaheen Shah Afridi',
    role: 'Bowler',
    imgUrl: 'https://p.imgci.com/db/PICTURES/CMS/320400/320474.png',
    achievements: [
      { title: "ICC Cricketer of the Year", description: "Sir Garfield Sobers Trophy winner (2021).", featured: true },
      { title: "Youngest PSL Captain", description: "First captain to win back-to-back PSL titles.", featured: true }
    ],
    stats: {
      matches: 210,
      wickets: 396,
      avg: 24.80,
      sr: 21.05,
      bestBowling: '6/51',
      recentForm: ['2/24', '3/31', '1/45', '4/18', '0/33'],
      formats: {
        test: { matches: 33, wickets: 121, avg: 27.92, sr: 53.4, bestBowling: '6/51', fiveWickets: 4 },
        odi: { matches: 74, wickets: 139, avg: 25.13, sr: 30.2, bestBowling: '6/35', fiveWickets: 3 },
        t20i: { matches: 103, wickets: 136, avg: 21.35, sr: 16.5, bestBowling: '4/22', fiveWickets: 0 }
      }
    }
  },
  'Saud Shakeel': {
    name: 'Saud Shakeel',
    role: 'Batter',
    imgUrl: 'https://static-files.cricket-australia.pulselive.com/headshots/288/4489-camedia.png',
    stats: {
      matches: 40,
      runs: 2181,
      avg: 41.94,
      sr: 65.40,
      highestScore: '208*',
      recentForm: ['208*', '12', '45', '101*', '34'],
      formats: {
        test: { matches: 21, innings: 37, runs: 1773, avg: 47.92, sr: 55.40, highestScore: '208*', centuries: 3, fifties: 7 },
        odi: { matches: 19, innings: 18, runs: 408, avg: 27.20, sr: 82.30, highestScore: '68', fifties: 2 }
      }
    }
  },
  'Salman Ali Agha': {
    name: 'Salman Ali Agha',
    role: 'All-rounder',
    stats: {
      matches: 125,
      runs: 3941,
      avg: 35.80,
      sr: 98.40,
      highestScore: '134',
      bestBowling: '2/34',
      recentForm: ['132*', '45', '1/22', '89', '2/34'],
      formats: {
        test: { matches: 23, innings: 41, runs: 1487, avg: 39.13, sr: 62.45, highestScore: '132*', wickets: 20, bestBowling: '3/42', centuries: 3, fifties: 8 },
        odi: { matches: 50, innings: 45, runs: 1538, avg: 45.24, sr: 88.50, highestScore: '134', wickets: 19, bestBowling: '3/33', centuries: 1, fifties: 11 },
        t20i: { matches: 52, innings: 48, runs: 916, avg: 22.90, sr: 134.20, highestScore: '76', wickets: 6, fifties: 4 }
      }
    }
  },
  'Mohammad Abbas': {
    name: 'Mohammad Abbas',
    role: 'Bowler',
    stats: {
      matches: 30,
      wickets: 101,
      avg: 24.15,
      sr: 54.2,
      bestBowling: '6/54',
      recentForm: ['3/45', '2/33', '6/54', '1/22', '0/45'],
      formats: {
        test: { matches: 27, wickets: 100, avg: 23.18, sr: 58.4, bestBowling: '6/54', fiveWickets: 5 },
        odi: { matches: 3, wickets: 1, avg: 153.00, sr: 360, bestBowling: '1/44', fiveWickets: 0 }
      }
    }
  },
  'Noman Ali': {
    name: 'Noman Ali',
    role: 'Bowler',
    achievements: [
      { title: "Dream Debut", description: "5-wicket haul on Test debut at age 34.", featured: true }
    ],
    stats: {
      matches: 21,
      wickets: 97,
      avg: 24.52,
      sr: 52.4,
      bestBowling: '8/46',
      recentForm: ['8/46', '5/55', '2/33', '1/45', '3/22'],
      formats: {
        test: { matches: 21, wickets: 97, avg: 24.52, sr: 52.4, bestBowling: '8/46', fiveWickets: 9 }
      }
    }
  },
  'Sajid Khan': {
    name: 'Sajid Khan',
    role: 'Bowler',
    achievements: [
      { title: "Miracle at Mirpur", description: "Match-winning performance of 8/42 vs Bangladesh.", featured: true }
    ],
    stats: {
      matches: 14,
      wickets: 65,
      avg: 28.92,
      sr: 58.4,
      bestBowling: '8/42',
      recentForm: ['8/42', '4/90', '2/33', '1/45', '0/33'],
      formats: {
        test: { matches: 14, wickets: 65, avg: 28.92, sr: 58.4, bestBowling: '8/42', fiveWickets: 4 }
      }
    }
  },
  'Muhammad Ghazi Ghori': {
    name: 'Muhammad Ghazi Ghori',
    role: 'Wicketkeeper Batter',
    stats: {
      matches: 1,
      runs: 29,
      avg: 29.00,
      sr: 110.00,
      recentForm: ['29'],
      highestScore: '29',
      formats: {
        test: { matches: 0, runs: 531, avg: 48.27, sr: 65.0, highestScore: '92' },
        odi: { matches: 1, runs: 29, avg: 29.00, sr: 110.00, highestScore: '29' }
      }
    }
  },
  'Shan Masood': {
    name: 'Shan Masood',
    role: 'Batter',
    stats: {
      matches: 75,
      runs: 3500,
      avg: 36.00,
      sr: 69.20,
      highestScore: '156',
      recentForm: ['151', '23', '4', '11', '67'],
      formats: {
        test: { matches: 46, runs: 2850, highestScore: '156', avg: 36.00, sr: 55.40, centuries: 4, fifties: 10 },
        odi: { matches: 10, runs: 250, highestScore: '50', avg: 25.00, sr: 82.30, centuries: 0, fifties: 1 },
        t20i: { matches: 19, runs: 395, highestScore: '65*', avg: 24.68, sr: 121.90, centuries: 0, fifties: 3 }
      }
    }
  },
  'Abdullah Fazal': {
    name: 'Abdullah Fazal',
    role: 'Batter',
    stats: {
      matches: 25,
      runs: 1828,
      avg: 41.55,
      sr: 72.45,
      highestScore: '182',
      recentForm: ['88*', '102', '54', '12', '45'],
      formats: {
        test: { matches: 25, runs: 1828, avg: 41.55, sr: 65.40, highestScore: '182', centuries: 4, fifties: 12 },
        t20i: { matches: 4, runs: 189, avg: 47.25, sr: 135.00, highestScore: '88*' }
      }
    }
  },
  'Amad Butt': {
    name: 'Amad Butt',
    role: 'All-rounder',
    stats: {
      matches: 255,
      runs: 11618,
      avg: 35.5,
      wickets: 205,
      sr: 85.0,
      recentForm: ['45', '2/34', '12', '1/22', '89'],
      formats: {
        test: { matches: 64, runs: 2100, avg: 40.92, sr: 55.40, wickets: 205 },
        odi: { matches: 97, runs: 3877, avg: 39.96, sr: 82.30 },
        t20i: { matches: 94, runs: 2503, avg: 26.62, sr: 138.50 }
      }
    }
  },
  'Azan Awais': {
    name: 'Azan Awais',
    role: 'Batter',
    stats: {
      matches: 46,
      runs: 3048,
      avg: 43.5,
      sr: 75.0,
      highestScore: '203*',
      recentForm: ['98', '88', '105*', '55', '203*'],
      formats: {
        test: { matches: 33, runs: 2673, avg: 48.60, highestScore: '203*', sr: 58.40, centuries: 10, fifties: 15 },
        odi: { matches: 13, runs: 375, avg: 28.84, highestScore: '88', sr: 82.30 }
      }
    }
  },
  'Hasan Ali': {
    name: 'Hasan Ali',
    role: 'Bowler',
    stats: {
      matches: 150,
      wickets: 254,
      runs: 912,
      avg: 24.5,
      sr: 18.5,
      highestScore: '59',
      recentForm: ['2/15', '1/45', '5/30', '3/22', '1/33'],
      formats: {
        test: { matches: 25, innings: 41, wickets: 80, runs: 382, avg: 28.32, sr: 54.2, highestScore: '30', bestBowling: '5/27', fiveWickets: 6 },
        odi: { matches: 68, innings: 67, wickets: 102, runs: 383, avg: 30.03, sr: 33.1, highestScore: '59', bestBowling: '5/34', fiveWickets: 4 },
        t20i: { matches: 57, innings: 56, wickets: 72, runs: 147, avg: 23.10, sr: 16.5, highestScore: '23', bestBowling: '4/18' }
      }
    }
  },
  'Imam-ul-Haq': {
    name: 'Imam-ul-Haq',
    role: 'Batter',
    stats: {
      matches: 103,
      runs: 4860,
      avg: 42.33,
      sr: 76.40,
      highestScore: '157',
      recentForm: ['93', '71', '12', '45', '101'],
      formats: {
        test: { matches: 26, innings: 49, runs: 1687, avg: 36.67, highestScore: '157', sr: 48.20, centuries: 3, fifties: 8 },
        odi: { matches: 75, innings: 73, runs: 3152, avg: 47.04, highestScore: '151', sr: 82.30, centuries: 9, fifties: 20 },
        t20i: { matches: 2, innings: 2, runs: 21, avg: 10.50, highestScore: '14', sr: 110.50 }
      }
    }
  },
  'Khurram Shahzad': {
    name: 'Khurram Shahzad',
    role: 'Bowler',
    stats: {
      matches: 45,
      wickets: 156,
      avg: 24.12,
      sr: 32.5,
      bestBowling: '6/90',
      recentForm: ['6/90', '5/44', '2/33', '1/45', '3/22'],
      formats: {
        test: { matches: 6, wickets: 20, runs: 83, avg: 30.00, sr: 58.4, highestScore: '18' }
      }
    }
  }
};
