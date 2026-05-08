import { Match } from './types';

export const MATCH_RESULTS: Match[] = [
  {
    id: 'pak-vs-ban-1st-test-2026',
    teamA: 'BAN',
    opponent: 'PAK',
    scoreOpponent: 'Yet to bat',
    scorePAK: '301/4',
    overs: '85.0',
    status: 'Live',
    result: 'Day 1: Stumps',
    date: '8 May 2026',
    time: '10:00',
    series: 'Pakistan Tour of Bangladesh (Test Series)',
    venue: 'Sher-e-Bangla National Stadium, Mirpur',
    format: 'Test',
    blogUrl: '/news/pak-vs-ban-1st-test-day-1-report-2026',
    flagUrl: 'https://flagcdn.com/bd.svg',
    playingXI: [
      {
        team: 'Pakistan',
        players: [
          { name: 'Abdullah Fazal', role: 'Opening Batter', isDebutant: true },
          { name: 'Shan Masood', role: 'Captain / Batter', isCaptain: true },
          { name: 'Saud Shakeel', role: 'Middle-order Batter' },
          { name: 'Salman Ali Agha', role: 'All-rounder' },
          { name: 'Azan Awais', role: 'Middle-order Batter', isDebutant: true },
          { name: 'Mohammad Rizwan', role: 'Wicketkeeper', isWicketkeeper: true },
          { name: 'Amad Butt', role: 'All-rounder', isDebutant: true },
          { name: 'Shaheen Shah Afridi', role: 'Bowler' },
          { name: 'Sajid Khan', role: 'Bowler' },
          { name: 'Noman Ali', role: 'Bowler' },
          { name: 'Khurram Shahzad', role: 'Bowler' }
        ]
      },
      {
        team: 'Bangladesh',
        players: [
          { name: 'Mahmudul Hasan Joy', role: 'Opening Batter' },
          { name: 'Zakir Hasan', role: 'Opening Batter' },
          { name: 'Najmul Hossain Shanto', role: 'Captain', isCaptain: true },
          { name: 'Mominul Haque', role: 'Batter' },
          { name: 'Mushfiqur Rahim', role: 'Batter' },
          { name: 'Litton Das', role: 'Wicketkeeper', isWicketkeeper: true },
          { name: 'Mehidy Hasan Miraz', role: 'All-rounder' },
          { name: 'Taijul Islam', role: 'Bowler' },
          { name: 'Taskin Ahmed', role: 'Bowler' },
          { name: 'Hasan Mahmud', role: 'Bowler' },
          { name: 'Shoriful Islam', role: 'Bowler' }
        ]
      }
    ],
    postMatchSummary: `
### Day 1 Highlights: Bangladesh Firmly in Command
Bangladesh ended the opening day of the first Test against Pakistan in a position of significant strength, reaching **301/4** at Stumps in Mirpur.

#### Shanto Leads from the Front
Captain **Najmul Hossain Shanto** played a stellar innings, scoring a composed **101 off 129 balls**. His century laid the foundation for the hosts' dominant display. He was ably supported by **Mominul Haque**, who unfortunately fell just short of a well-deserved century, dismissed for **91**.

#### Pakistan's Bowling Struggles
Pakistan's bowling attack found it difficult to make consistent breakthroughs on a surface that offered little early assistance. **Shaheen Shah Afridi** and **Noman Ali** managed to pick up wickets, but the Bangladeshi batters remained largely untroubled for most of the day.

#### The Void Left by Babar Azam
With **Babar Azam** sidelined due to a knee injury, the onus fell on the middle order to provide stability. In his absence, **Shan Masood** and **Saud Shakeel** carry the heavy burden of anchoring the innings when Pakistan bats. The inclusion of three debutants—**Abdullah Fazal**, **Azan Awais**, and **Amad Butt**—signals a new era but also highlights the lack of experienced Test batters in the current lineup.

#### Key Roles for Pakistan's Success
To claw back into this match, Pakistan needs:
- **Shaheen Shah Afridi** to produce a lethal second-new-ball burst early on Day 2.
- **Sajid Khan** and **Noman Ali** to find more rhythm and squeeze the run rate.
- **Abdullah Fazal** and **Azan Awais** to show maturity beyond their experience when they face the Bangladeshi spinners.
    `,
    venueInsights: {
      avgFirstInningsScore: 341,
      winPercentageBattingFirst: 45,
      winPercentageBattingSecond: 35,
      pitchCondition: 'Initially supportive of seamers, the Mirpur track typically becomes a paradise for spinners from Day 3 onwards.'
    }
  }
];
