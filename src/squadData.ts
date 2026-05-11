import { Squad } from './types';

export const BANGLADESH_SQUAD: Squad = {
  series: 'Pakistan Tour of Bangladesh (Test Series)',
  format: 'Test',
  team: 'Pakistan',
  players: [
    { name: 'Shan Masood', description: 'Captain' },
    { name: 'Abdullah Fazal', description: 'Left-Hand Open' },
    { name: 'Amad Butt', description: 'Bowling All-rounder' },
    { name: 'Azan Awais', description: 'Prolific Young Batter' },
    { name: 'Babar Azam', description: 'Batting Centerpiece' },
    { name: 'Hasan Ali', description: 'Swing Specialist' },
    { name: 'Imam-ul-Haq', description: 'Experienced Opener' },
    { name: 'Khurram Shahzad', description: 'Pace Asset' },
    { name: 'Mohammad Abbas', description: 'Disciplined Seamer' },
    { name: 'Mohammad Rizwan', description: 'Wicketkeeper-Batter' },
    { name: 'Muhammad Ghazi Ghori', description: 'Newest Wicketkeeper-Batter' },
    { name: 'Noman Ali', description: 'Spin Veteran' },
    { name: 'Sajid Khan', description: 'Off-spin Maestro' },
    { name: 'Salman Ali Agha', description: 'Versatile All-rounder' },
    { name: 'Saud Shakeel', description: 'Middle-order Force' },
    { name: 'Shaheen Shah Afridi', description: 'Left-arm Speedster' }
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
  BANGLADESH_SQUAD,
  AUSTRALIA_ODI_SQUAD_PAK_2026
];
