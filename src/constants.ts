import { Match } from './types';

export const PAKISTAN_SCHEDULE: Match[] = [
  {
    id: '2',
    opponent: 'BAN',
    format: 'Test',
    title: 'Pak vs Ban 2nd Test Match',
    date: 'May 16–20, 2026',
    time: '09:00 AM PKT',
    venue: 'Sylhet International Cricket Stadium, Sylhet',
    series: 'Pakistan Tour of Bangladesh (Test Series)',
    status: 'Completed',
    granularStatus: 'BAN won by 78 runs • Series complete (2-0)',
    flagUrl: 'https://flagcdn.com/bd.svg',
    scorePAK: '232 & 358',
    scoreOpponent: '278 & 390',
    overs: '98.3',
    playingXI: [
      {
        team: 'Pakistan',
        players: [
          { name: 'Azan Awais', role: 'Opening Batter' },
          { name: 'Shan Masood', role: 'Opening Batter', isCaptain: true },
          { name: 'Babar Azam', role: 'Batter' },
          { name: 'Abdullah Fazal', role: 'Batter' },
          { name: 'Saud Shakeel', role: 'Batter' },
          { name: 'Mohammad Rizwan', role: 'Wicket-keeper', isWicketkeeper: true },
          { name: 'Salman Ali Agha', role: 'All-rounder' },
          { name: 'Khurram Shahzad', role: 'Fast Bowler' },
          { name: 'Sajid Khan', role: 'Spinner' },
          { name: 'Hasan Ali', role: 'Fast Bowler' },
          { name: 'Mohammad Abbas', role: 'Fast Bowler' }
        ]
      },
      {
        team: 'Bangladesh',
        players: [
          { name: 'Zakir Hasan', role: 'Opening Batter' },
          { name: 'Tanzid Hasan', role: 'Opening Batter' },
          { name: 'Najmul Hossain Shanto', role: 'Batter', isCaptain: true },
          { name: 'Mominul Haque', role: 'Batter' },
          { name: 'Mushfiqur Rahim', role: 'Batter' },
          { name: 'Litton Kumer Das', role: 'Wicket-keeper', isWicketkeeper: true },
          { name: 'Mehidy Hasan Miraz', role: 'All-rounder' },
          { name: 'Taijul Islam', role: 'Spinner' },
          { name: 'Nayeem Hasan', role: 'Spinner' },
          { name: 'Taskin Ahmed', role: 'Fast Bowler' },
          { name: 'Nahid Rana', role: 'Fast Bowler' }
        ]
      }
    ],
    result: 'Bangladesh won by 78 runs',
    blogUrl: '/news/bangladesh-complete-historic-2-0-series-sweep-sylhet-2026',
    preMatchAnalysis: `
### Series Context
The second Test in Chattogram often favors batsmen early on before becoming a spin minefield. Pakistan will look to consolidate their position in the series here.

### Tactical Battle
* **Reverse Swing:** The dry conditions in Chattogram often provide reverse swing, making Naseem Shah a key weapon.
* **Middle Order Stability:** Saud Shakeel and Mohammad Rizwan will be pivotal in holding the innings together if the top order struggles against the new ball.
    `,
    postMatchSummary: `
### Historical Series Sweep Secured by Bangladesh

In an absolute thriller that went down to the absolute wire on Day 5, Bangladesh beat Pakistan by 78 runs in Sylhet to complete a historic first-ever 2-0 Test series sweep over Pakistan.

#### The Epic Run-Chase
Chasing an unprecedented target of 437 runs in Bangladesh, Pakistan put up an extraordinary fight. Captain **Shan Masood** led with a masterful **71** (105 balls, 6 fours) and shared a fluid **50-run** partnership off 51 balls with **Babar Azam** (47). 

Following their dismissals, **Salman Ali Agha** (71) and **Mohammad Rizwan** (91) built a resilient **134-run** partnership under tremendous pressure. They frustrated the Bangladeshi spin attack deep into Day 4, concluding the day at 316/7.

#### Day 5 Wicket-Taking Thrills
But on the final morning, veteran spinner **Taijul Islam** took the defining wickets, ending Rizwan's magnificent fight at 91 (highest test score for him) with a stifling spell. Combined with **Nahid Rana's** raw pace, Bangladesh wrapped up Pakistan's tail at 358 runs, clinching the match and sealing a famous 2-0 sweep on home soil.
    `,
    stats: {
      topScorers: [
        { name: 'Mushfiqur Rahim', runs: '137', balls: '233' },
        { name: 'Litton Kumer Das', runs: '126', balls: '187' },
        { name: 'Mohammad Rizwan', runs: '91', balls: '150' },
        { name: 'Shan Masood', runs: '71', balls: '105' },
        { name: 'Salman Ali Agha', runs: '71', balls: '120' }
      ],
      leadingWicketTakers: [
        { name: 'Taijul Islam', wickets: '4', runs: '113', overs: '36.3' },
        { name: 'Khurram Shahzad', wickets: '4', runs: '92', overs: '28' },
        { name: 'Nahid Rana', wickets: '3', runs: '82', overs: '22' }
      ],
      keyPartnerships: [
        { players: 'Mohammad Rizwan & Salman Ali Agha', runs: '134', balls: '240' },
        { players: 'Mahmudul Hasan Joy & Najmul Hossain Shanto', runs: '76', balls: '132' }
      ],
      secondInningsBowling: [
        {
          team: 'Bangladesh',
          figures: [
            { name: 'Taijul Islam', wickets: '4', runs: '113', overs: '36.3' },
            { name: 'Nahid Rana', wickets: '3', runs: '82', overs: '22' },
            { name: 'Mehidy Hasan Miraz', wickets: '1', runs: '74', overs: '23' },
            { name: 'Taskin Ahmed', wickets: '1', runs: '51', overs: '15' },
            { name: 'Shoriful Islam', wickets: '1', runs: '38', overs: '12' }
          ]
        },
        {
          team: 'Pakistan',
          figures: [
            { name: 'Khurram Shahzad', wickets: '4', runs: '92', overs: '28' },
            { name: 'Mohammad Abbas', wickets: '1', runs: '68', overs: '25' },
            { name: 'Sajid Khan', wickets: '1', runs: '112', overs: '31.2' }
          ]
        }
      ]
    },
    playersToWatch: [
      { name: 'Naseem Shah', role: 'Bowler', reason: 'Exceptional control with reverse swing on abrasive surfaces.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Naseem' },
      { name: 'Shakib Al Hasan', role: 'All-rounder', reason: 'The veteran remains the most dangerous threat with his clever changes of pace.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shakib' }
    ],
    venueInsights: {
      avgFirstInningsScore: 355,
      winPercentageBattingFirst: 42,
      winPercentageBattingSecond: 38,
      pitchCondition: 'The Chattogram pitch is traditionally a batting paradise for the first two days. As the heat sets in, the surface cracks, making reverse swing and leg-spin the primary wickets-taking options.'
    }
  },
  {
    id: 'aus-odi-1',
    opponent: 'AUS',
    format: 'ODI',
    title: 'Pak vs Aus 1st One Day',
    date: 'May 30, 2026',
    time: '14:30 PKT',
    venue: 'Rawalpindi Cricket Stadium, Rawalpindi',
    series: 'Australia Tour of Pakistan (ODI Series)',
    status: 'Completed',
    granularStatus: 'PAK won by 5 wickets • PAK lead 1-0',
    flagUrl: 'https://flagcdn.com/au.svg',
    scorePAK: '201/5',
    scoreOpponent: '200',
    overs: '42.3',
    blogUrl: '/news/arafat-minhas-5-32-odi-debut-vs-australia-pakistan-2026',
    result: 'Pakistan won by 5 wickets',
    stats: {
      topScorers: [
        { name: 'Babar Azam', runs: '69', balls: '94' },
        { name: 'Ghazi Ghori', runs: '65', balls: '92' },
        { name: 'Matthew Renshaw', runs: '61', balls: '63' },
        { name: 'Matthew Short', runs: '55', balls: '76' }
      ],
      leadingWicketTakers: [
        { name: 'Arafat Minhas', wickets: '5', runs: '32', overs: '10' },
        { name: 'Abrar Ahmed', wickets: '2', runs: '44', overs: '10' },
        { name: 'Nathan Ellis', wickets: '2', runs: '36', overs: '8' }
      ]
    },
    playersToWatch: [
      { name: 'Arafat Minhas', role: 'All-rounder', reason: 'Young slow left-arm orthodox. Sensation on ODI debut.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arafat' },
      { name: 'Babar Azam', role: 'Batter', reason: 'Back in supreme form after a dominant class-filled 69 in the 1st ODI.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Babar' }
    ]
  },
  {
    id: 'aus-odi-2',
    opponent: 'AUS',
    format: 'ODI',
    title: 'Pak vs Aus 2nd One Day',
    date: 'June 2, 2026',
    time: '16:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan (ODI Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/au.svg',
    blogUrl: '/news/pakistan-vs-australia-2nd-odi-lahore-preview-june-2-2026'
  },
  {
    id: 'aus-odi-3',
    opponent: 'AUS',
    format: 'ODI',
    title: 'Pak vs Aus 3rd One Day',
    date: 'June 4, 2026',
    time: '14:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan (ODI Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/au.svg'
  },
  {
    id: '8',
    opponent: 'WI',
    format: 'Test',
    title: 'Pak vs WI 1st Test Showdown',
    date: '2026-07-21',
    time: '20:00 PKT',
    venue: 'Kensington Oval, Barbados',
    series: 'Pakistan Tour of West Indies',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/bb.svg'
  },
  {
    id: '9',
    opponent: 'ENG',
    format: 'Test',
    title: 'Pak vs Eng 1st Test (Headingley)',
    date: '2026-08-19',
    time: '15:00 PKT',
    venue: 'Headingley, Leeds',
    series: 'Pakistan Tour of England',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/gb.svg'
  },
  {
    id: '10',
    opponent: 'ENG',
    format: 'Test',
    title: 'Pak vs Eng 2nd Test (Lords)',
    date: '2026-08-27',
    time: '15:00 PKT',
    venue: "Lord's, London",
    series: 'Pakistan Tour of England',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/gb.svg'
  },
  {
    id: '11',
    opponent: 'ENG',
    format: 'Test',
    title: 'Pak vs Eng 3rd Test (The Oval)',
    date: '2026-09-09',
    time: '15:00 PKT',
    venue: 'The Oval, London (TBA)',
    series: 'Pakistan Tour of England',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/gb.svg'
  },
  {
    id: '12',
    opponent: 'SL',
    format: 'T20I',
    title: 'Pak vs SL 1st T20 International',
    date: '2026-10-15',
    time: '19:30 PKT',
    venue: 'R. Premadasa Stadium, Colombo',
    series: 'Pakistan Tour of Sri Lanka',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/lk.svg'
  },
  {
    id: '13',
    opponent: 'SL',
    format: 'Test',
    title: 'Pak vs SL 1st Test Match (Home)',
    date: '2026-11-10',
    time: '10:00 PKT',
    venue: 'Multan Cricket Stadium',
    series: 'Sri Lanka Tour of Pakistan',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/lk.svg'
  }
];
