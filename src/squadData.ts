import { Squad } from './types';

export const PAKISTAN_ODI_SQUAD_AUS_2026: Squad = {
  series: 'Australia Tour of Pakistan (ODI Series)',
  format: 'ODI',
  team: 'Pakistan',
  players: [
    { name: 'Shaheen Shah Afridi', description: 'Captain / Left-arm Fast Bowler' },
    { name: 'Salman Ali Agha', description: 'Vice-Captain / Batting All-rounder' },
    { name: 'Abdul Samad', description: 'Aggressive Finisher / Batter' },
    { name: 'Abrar Ahmed', description: 'Mystery Leg-spinner' },
    { name: 'Ahmed Daniyal', description: 'Right-arm Fast-Medium Bowler' },
    { name: 'Arafat Minhas', description: 'Spin All-rounder' },
    { name: 'Babar Azam', description: 'Elite Top-order Batter' },
    { name: 'Haris Rauf', description: 'Express Right-arm Fast Bowler' },
    { name: 'Maaz Sadaqat', description: 'Left-handed Batting All-rounder' },
    { name: 'Muhammad Ghazi Ghori', description: 'Wicketkeeper-Batter' },
    { name: 'Naseem Shah', description: 'Right-arm Fast Bowler' },
    { name: 'Rohail Nazir', description: 'Wicketkeeper-Batter' },
    { name: 'Sahibzada Farhan', description: 'Opening Batter' },
    { name: 'Shadab Khan', description: 'Leg-spin All-rounder' },
    { name: 'Shamyl Hussain', description: 'Top-order Batter' },
    { name: 'Sufyan Muqeem', description: 'Left-arm Wrist Spinner' }
  ]
};

export const AUSTRALIA_ODI_SQUAD_PAK_2026: Squad = {
  series: 'Australia Tour of Pakistan (ODI Series)',
  format: 'ODI',
  team: 'Australia',
  players: [
    { name: 'Mitch Marsh', description: 'Captain' },
    { name: 'Alex Carey', description: 'Wicketkeeper-Batter' },
    { name: 'Nathan Ellis', description: 'Fast Bowler' },
    { name: 'Cameron Green', description: 'All-rounder' },
    { name: 'Josh Inglis', description: 'Wicketkeeper-Batter' },
    { name: 'Matthew Kuhnemann', description: 'Left-arm Spinner' },
    { name: 'M Labuschagne', description: 'Middle-order Batter' },
    { name: 'Riley Meredith', description: 'Fast Bowler' },
    { name: 'Oliver Peake', description: 'Young Batter' },
    { name: 'Matthew Renshaw', description: 'Batter' },
    { name: 'Tanveer Sangha', description: 'Leg-spinner' },
    { name: 'Liam Scott', description: 'All-rounder' },
    { name: 'Matt Short', description: 'Batting All-rounder' },
    { name: 'Billy Stanlake', description: 'Fast Bowler' },
    { name: 'Adam Zampa', description: 'Leg-spinner' }
  ]
};

export const ALL_SQUADS: Squad[] = [
  PAKISTAN_ODI_SQUAD_AUS_2026,
  AUSTRALIA_ODI_SQUAD_PAK_2026
];

