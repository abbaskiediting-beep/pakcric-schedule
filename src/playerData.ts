import { Player } from './types';

export const PLAYER_STATS: Record<string, Player> = {
  'Babar Azam': {
    name: 'Babar Azam',
    country: 'Pakistan',
    role: 'Batter',
    imgUrl: 'https://p.imgci.com/db/PICTURES/CMS/320400/320448.png',
    achievements: [
      { title: 'Fastest to 5000 ODI Runs', description: 'Reached the milestone in just 97 innings.', featured: true },
      { title: '3rd PSL Century', description: '100* off 52 balls against Quetta Gladiators (PSL 11).', featured: true },
      { title: 'Undisputed PSL King', description: 'Highest run-getter in PSL history.' }
    ],
    stats: {
      matches: 330,
      innings: 410,
      runs: 17500,
      wickets: 2,
      avg: 48.50,
      sr: 128.50,
      highestScore: '196',
      recentForm: ['45', '12', '101*', '34', '56'],
      formats: {
        test: { matches: 58, innings: 108, runs: 4850, avg: 46.2, sr: 55.4, highestScore: '196', bestBowling: '1/1', centuries: 11, fifties: 30 },
        odi: { matches: 125, innings: 122, runs: 7200, avg: 56.5, sr: 89.2, highestScore: '158', bestBowling: '0/15', centuries: 22, fifties: 38 },
        t20i: { matches: 147, innings: 139, runs: 5450, avg: 43.2, sr: 132.5, highestScore: '122*', bestBowling: '0/10', centuries: 5, fifties: 48 }
      }
    }
  },
  'Mohammad Rizwan': {
    name: 'Mohammad Rizwan',
    country: 'Pakistan',
    role: 'Wicketkeeper Batter',
    imgUrl: 'https://www.wisden.com/static-assets/images/players/20286.png?v=23.77',
    achievements: [
      { title: 'T20I Record Breaker', description: 'Most T20I runs in a calendar year (1,326 runs in 2021).', featured: true },
      { title: 'Consistent Performer', description: 'Highest T20I average among regular batters.' }
    ],
    stats: {
      matches: 250,
      runs: 8792,
      wickets: 0,
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
    country: 'Pakistan',
    role: 'Bowler',
    imgUrl: 'https://static-files.cricket-australia.pulselive.com/headshots/440/637-camedia.png',
    achievements: [
      { title: "ICC Cricketer of the Year", description: "Sir Garfield Sobers Trophy winner (2021).", featured: true },
      { title: "Youngest PSL Captain", description: "First captain to win back-to-back PSL titles.", featured: true }
    ],
    stats: {
      matches: 210,
      runs: 1150,
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
    country: 'Pakistan',
    role: 'Batter',
    imgUrl: 'https://static-files.cricket-australia.pulselive.com/headshots/288/4489-camedia.png',
    stats: {
      matches: 45,
      runs: 2350,
      wickets: 5,
      avg: 42.50,
      sr: 68.40,
      highestScore: '208*',
      recentForm: ['208*', '12', '45', '101*', '34'],
      formats: {
        test: { matches: 21, innings: 37, runs: 1773, avg: 47.92, sr: 55.40, highestScore: '208*', centuries: 3, fifties: 7 },
        odi: { matches: 19, innings: 18, runs: 408, avg: 27.20, sr: 82.30, highestScore: '68', fifties: 2 },
        t20i: { matches: 5, innings: 4, runs: 169, avg: 42.25, sr: 135.40, highestScore: '55' }
      }
    }
  },
  'Salman Ali Agha': {
    name: 'Salman Ali Agha',
    country: 'Pakistan',
    role: 'All-rounder',
    imgUrl: 'https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/generic/colored/64078.png',
    stats: {
      matches: 135,
      runs: 4250,
      avg: 36.20,
      sr: 102.40,
      highestScore: '134',
      wickets: 55,
      bestBowling: '3/33',
      recentForm: ['132*', '45', '1/22', '89', '2/34'],
      formats: {
        test: { matches: 23, innings: 41, runs: 1487, avg: 39.13, sr: 62.45, highestScore: '132*', wickets: 20, bestBowling: '3/42', centuries: 3, fifties: 8 },
        odi: { matches: 50, innings: 45, runs: 1538, avg: 45.24, sr: 88.50, highestScore: '134', wickets: 19, bestBowling: '3/33', centuries: 1, fifties: 11 },
        t20i: { matches: 62, innings: 58, runs: 1225, avg: 24.50, sr: 138.20, highestScore: '76', wickets: 16, bestBowling: '2/15', fifties: 6 }
      }
    }
  },
  'Mohammad Abbas': {
    name: 'Mohammad Abbas',
    country: 'Pakistan',
    role: 'Bowler',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/1_39_Mo_Abbas_mugshot.jpg',
    stats: {
      matches: 35,
      runs: 185,
      wickets: 105,
      avg: 24.85,
      sr: 54.2,
      bestBowling: '6/54',
      recentForm: ['3/45', '2/33', '6/54', '1/22', '0/45'],
      formats: {
        test: { matches: 27, wickets: 100, avg: 23.18, sr: 58.4, bestBowling: '6/54', fiveWickets: 5 },
        odi: { matches: 3, wickets: 1, avg: 153.00, sr: 360, bestBowling: '1/44', fiveWickets: 0 },
        t20i: { matches: 5, wickets: 4, avg: 32.50, sr: 24.5, bestBowling: '2/22', fiveWickets: 0 }
      }
    }
  },
  'Noman Ali': {
    name: 'Noman Ali',
    country: 'Pakistan',
    role: 'Bowler',
    imgUrl: 'https://c.ndtvimg.com/2025-10/bb4nhivs_noman-ali-afp_625x300_22_October_25.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
    achievements: [
      { title: "Dream Debut", description: "5-wicket haul on Test debut at age 34.", featured: true }
    ],
    stats: {
      matches: 28,
      runs: 450,
      wickets: 115,
      avg: 25.12,
      sr: 52.4,
      bestBowling: '8/46',
      recentForm: ['8/46', '5/55', '2/33', '1/45', '3/22'],
      formats: {
        test: { matches: 21, wickets: 97, avg: 24.52, sr: 52.4, bestBowling: '8/46', fiveWickets: 9 },
        odi: { matches: 5, wickets: 12, avg: 22.45, sr: 32.4, bestBowling: '3/35', fiveWickets: 0 },
        t20i: { matches: 2, wickets: 6, avg: 18.25, sr: 16.2, bestBowling: '3/22', fiveWickets: 0 }
      }
    }
  },
  'Sajid Khan': {
    name: 'Sajid Khan',
    country: 'Pakistan',
    role: 'Bowler',
    imgUrl: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/389800/389842.jpg',
    achievements: [
      { title: "Miracle at Mirpur", description: "Match-winning performance of 8/42 vs Bangladesh.", featured: true }
    ],
    stats: {
      matches: 20,
      runs: 210,
      wickets: 85,
      avg: 29.50,
      sr: 58.4,
      bestBowling: '8/42',
      recentForm: ['8/42', '4/90', '2/33', '1/45', '0/33'],
      formats: {
        test: { matches: 14, wickets: 65, avg: 28.92, sr: 58.4, bestBowling: '8/42', fiveWickets: 4 },
        odi: { matches: 4, wickets: 15, avg: 24.32, sr: 30.5, bestBowling: '4/45', fiveWickets: 0 },
        t20i: { matches: 2, wickets: 5, avg: 19.50, sr: 15.2, bestBowling: '3/18', fiveWickets: 0 }
      }
    }
  },
  'Muhammad Ghazi Ghori': {
    name: 'Muhammad Ghazi Ghori',
    country: 'Pakistan',
    role: 'Wicketkeeper Batter',
    imgUrl: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/414600/414666.2.png',
    stats: {
      matches: 12,
      runs: 450,
      wickets: 0,
      avg: 37.50,
      sr: 115.00,
      recentForm: ['29', '45', '67', '12', '89'],
      highestScore: '92',
      formats: {
        test: { matches: 4, innings: 7, runs: 320, avg: 45.71, sr: 62.4, highestScore: '92', fifties: 3 },
        odi: { matches: 3, runs: 85, avg: 28.33, sr: 105.0, highestScore: '45' },
        t20i: { matches: 5, runs: 45, avg: 15.00, sr: 142.5, highestScore: '25' }
      }
    }
  },
  'Shan Masood': {
    name: 'Shan Masood',
    country: 'Pakistan',
    role: 'Batter',
    imgUrl: 'https://static-files.cricket-australia.pulselive.com/headshots/288/1944-camedia.png',
    stats: {
      matches: 85,
      runs: 3850,
      wickets: 0,
      avg: 37.20,
      sr: 72.40,
      highestScore: '156',
      recentForm: ['151', '23', '4', '11', '67'],
      formats: {
        test: { matches: 46, runs: 2850, highestScore: '156', avg: 36.00, sr: 55.40, centuries: 4, fifties: 10 },
        odi: { matches: 15, runs: 450, highestScore: '75', avg: 30.00, sr: 85.30, centuries: 0, fifties: 3 },
        t20i: { matches: 24, runs: 550, highestScore: '65*', avg: 26.19, sr: 125.40, centuries: 0, fifties: 4 }
      }
    }
  },
  'Abdullah Fazal': {
    name: 'Abdullah Fazal',
    country: 'Pakistan',
    role: 'Batter',
    imgUrl: 'https://www.24newshd.tv/digital_images/large/2025-12-03/abdullah-fazal-s-century-helps-karachi-blues-extend-second-innings-lead-276-1764776616-8141.jpg',
    stats: {
      matches: 32,
      runs: 2250,
      wickets: 0,
      avg: 44.12,
      sr: 78.40,
      highestScore: '182',
      recentForm: ['88*', '102', '54', '12', '45'],
      formats: {
        test: { matches: 25, runs: 1828, avg: 41.55, sr: 65.40, highestScore: '182', centuries: 4, fifties: 12 },
        odi: { matches: 3, runs: 233, avg: 77.67, sr: 88.50, highestScore: '112', centuries: 1, fifties: 1 },
        t20i: { matches: 4, runs: 189, avg: 47.25, sr: 135.00, highestScore: '88*' }
      }
    }
  },
  'Amad Butt': {
    name: 'Amad Butt',
    country: 'Pakistan',
    role: 'All-rounder',
    imgUrl: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/325500/325565.jpg',
    stats: {
      matches: 260,
      runs: 11850,
      avg: 35.8,
      wickets: 215,
      sr: 88.2,
      recentForm: ['45', '2/34', '12', '1/22', '89'],
      formats: {
        test: { matches: 64, runs: 2100, avg: 40.92, sr: 55.40, wickets: 125, bestBowling: '5/44', fiveWickets: 3 },
        odi: { matches: 102, runs: 4247, avg: 41.63, sr: 85.40, wickets: 65, bestBowling: '4/35' },
        t20i: { matches: 94, runs: 2503, avg: 26.62, sr: 138.50, wickets: 25, bestBowling: '3/22' }
      }
    }
  },
  'Azan Awais': {
    name: 'Azan Awais',
    country: 'Pakistan',
    role: 'Batter',
    imgUrl: 'https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/5823/97987.png',
    stats: {
      matches: 52,
      runs: 3350,
      wickets: 0,
      avg: 45.2,
      sr: 78.5,
      highestScore: '203*',
      recentForm: ['98', '88', '105*', '55', '203*'],
      formats: {
        test: { matches: 33, runs: 2673, avg: 48.60, highestScore: '203*', sr: 58.40, centuries: 10, fifties: 15 },
        odi: { matches: 13, runs: 375, avg: 28.84, highestScore: '88', sr: 82.30, fifties: 3 },
        t20i: { matches: 6, runs: 302, avg: 50.33, sr: 145.20, highestScore: '75', fifties: 2 }
      }
    }
  },
  'Hasan Ali': {
    name: 'Hasan Ali',
    country: 'Pakistan',
    role: 'Bowler',
    imgUrl: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/373000/373064.jpg',
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
    country: 'Pakistan',
    role: 'Batter',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/4_12_Imam-ul-Haq_mugshot.jpg',
    stats: {
      matches: 103,
      runs: 4860,
      wickets: 0,
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
    country: 'Pakistan',
    role: 'Bowler',
    imgUrl: 'https://static-files.cricket-australia.pulselive.com/headshots/288/7878-camedia.png',
    stats: {
      matches: 55,
      runs: 250,
      wickets: 185,
      avg: 23.85,
      sr: 34.2,
      bestBowling: '6/90',
      recentForm: ['6/90', '5/44', '2/33', '1/45', '3/22'],
      formats: {
        test: { matches: 6, wickets: 20, runs: 83, avg: 30.00, sr: 58.4, highestScore: '18', bestBowling: '6/90', fiveWickets: 1 },
        odi: { matches: 12, wickets: 45, avg: 22.15, sr: 28.4, bestBowling: '4/35' },
        t20i: { matches: 37, wickets: 120, avg: 19.50, sr: 15.4, bestBowling: '5/44', fiveWickets: 1 }
      }
    }
  }
};
