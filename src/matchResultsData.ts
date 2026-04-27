import { Match } from './types';

export const MATCH_RESULTS: Match[] = [
  {
    id: 'res-1',
    opponent: 'AUS',
    format: 'ODI',
    date: 'Jan 15, 2026',
    time: '14:00 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan',
    status: 'Completed',
    result: 'Pakistan won by 4 wickets',
    flagUrl: 'https://flagcdn.com/au.svg',
    scorePAK: '286/6 (48.4)',
    scoreOpponent: '282/9 (50.0)',
    stats: {
      topScorers: [
        { name: 'Babar Azam', runs: '114', balls: '102' },
        { name: 'Fakhar Zaman', runs: '67', balls: '74' }
      ],
      leadingWicketTakers: [
        { name: 'Shaheen Afridi', wickets: '4', runs: '45', overs: '10' },
        { name: 'Haris Rauf', wickets: '2', runs: '52', overs: '10' }
      ],
      keyPartnerships: [
        { players: 'Babar & Fakhar', runs: '124', balls: '130' }
      ]
    },
    postMatchSummary: `
### Match Report: Dominant Pakistan Clinch Thriller
Pakistan secured a memorable 4-wicket victory over Australia at the historic Gaddafi Stadium. Chasing 283, the hosts were powered by a sublime century from skipper Babar Azam.

### Key Moments
* **Babar's Century:** A masterclass in pacing an innings, hitting 12 boundaries.
* **Shaheen's Opening Spell:** Dismissing Travis Head in the first over set the tone.
* **Closing the Gap:** Rizwan and Khushdil provided the late fireworks to cross the line.

### Conclusion
This victory marks Pakistan's first ODI series win against Australia in over a decade, propelling them to the top of the ICC ODI Rankings.
    `
  }
];
