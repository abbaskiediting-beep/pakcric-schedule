import { Match } from './types';

export const MATCH_RESULTS: Match[] = [
  {
    id: '1',
    opponent: 'BAN',
    format: 'Test',
    title: 'Pak vs Ban 1st Test Match',
    date: 'May 8–12, 2026',
    time: '09:00 AM PKT',
    venue: 'Sher-e-Bangla National Stadium, Dhaka',
    series: 'Pakistan Tour of Bangladesh (Test Series)',
    status: 'Completed',
    flagUrl: 'https://flagcdn.com/bd.svg',
    scorePAK: '274 & 163',
    scoreOpponent: '280 & 261/8',
    granularStatus: 'Bangladesh won by 104 runs',
    postMatchSummary: `
Bangladesh secured a historic 104-run victory in the first Test at Dhaka. Pakistan's top order collapsed in the second innings while chasing 268, managing only 163. Najmul Hossain Shanto's century and Mehidy Hasan Miraz's brilliance with the ball were the highlights of the match.
    `,
    stats: {
      topScorers: [
        { name: 'Abdullah Shafique', runs: '74', balls: '145' },
        { name: 'Najmul Shanto', runs: '122', balls: '210' }
      ],
      leadingWicketTakers: [
        { name: 'Mehidy Hasan', wickets: '5', runs: '62', overs: '24.2' },
        { name: 'Shaheen Afridi', wickets: '4', runs: '88', overs: '28' }
      ]
    }
  }
];
