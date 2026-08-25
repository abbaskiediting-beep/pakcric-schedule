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
    status: 'Completed',
    granularStatus: 'AUS won by 41 runs • Series tied 1-1',
    flagUrl: 'https://flagcdn.com/au.svg',
    scorePAK: '190',
    scoreOpponent: '231/9',
    overs: '44.0',
    blogUrl: '/news/pakistan-vs-australia-2nd-odi-lahore-preview-june-2-2026',
    result: 'Australia won by 41 runs',
    stats: {
      topScorers: [
        { name: 'Ghazi Ghori', runs: '37', balls: '42' },
        { name: 'Cameron Green', runs: '34', balls: '39' },
        { name: 'Josh Inglis', runs: '36', balls: '45' }
      ],
      leadingWicketTakers: [
        { name: 'Nathan Ellis', wickets: '4', runs: '33', overs: '9' }
      ]
    }
  },
  {
    id: 'aus-odi-3',
    opponent: 'AUS',
    format: 'ODI',
    title: 'Pak vs Aus 3rd One Day (Decider)',
    date: 'June 4, 2026',
    time: '16:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan (ODI Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/au.svg',
    blogUrl: '/news/pakistan-vs-australia-3rd-odi-lahore-preview-june-4-2026',
    preMatchAnalysis: `Pakistan vs Australia 3rd ODI decider at Gaddafi stadium Lahore June 4. The series is currently level at 1-1, winner takes all. 

### What Went Wrong for Pakistan in the 2nd ODI
Nathan Ellis took 4/33 — including the crucial wicket of Babar Azam. Pakistan collapsed from a competitive position to 190 all out, losing by 41 runs. 

1. **Middle-order collapse**: Pakistan lost 4 wickets for 126 runs between overs 10-40.
2. **Ghazi Ghori injury**: Rohail Nazir kept wickets after Ghori picked up an injury. 
3. **Nathan Ellis masterclass**: Ellis found reverse swing in the evening to change the game.

### Team Dynamics & Strategy
Australia used their feet better in the 2nd ODI, targeting the boundaries more aggressively and taking away Arafat Minhas's control. Zampa's groin fitness remains a concern for the visitors. For Pakistan, Shaheen Afridi's farewell home match adds a deeply emotional spark tonight.`,
    playingXI: [
      {
        team: 'Pakistan',
        players: [
          { name: 'Babar Azam', role: 'Opener (c)', isCaptain: true },
          { name: 'Sahibzada Farhan', role: 'Opener' },
          { name: 'Maaz Sadaqat', role: 'Batter' },
          { name: 'Rohail Nazir', role: 'Wicketkeeper', isWicketkeeper: true },
          { name: 'Salman Agha', role: 'All-rounder' },
          { name: 'Shadab Khan', role: 'All-rounder' },
          { name: 'Arafat Minhas', role: 'Spinner' },
          { name: 'Abrar Ahmed', role: 'Leg-spinner' },
          { name: 'Shaheen Afridi', role: 'Pacer' },
          { name: 'Haris Rauf', role: 'Pacer' },
          { name: 'Mohammad Hasnain', role: 'Pacer' }
        ]
      },
      {
        team: 'Australia',
        players: [
          { name: 'Matthew Short', role: 'Opener' },
          { name: 'Matthew Renshaw', role: 'Opener' },
          { name: 'Marnus Labuschagne', role: 'No. 3' },
          { name: 'Steve Smith', role: 'No. 4' },
          { name: 'Josh Inglis', role: 'Wicketkeeper (c)', isCaptain: true, isWicketkeeper: true },
          { name: 'Cameron Green', role: 'All-rounder' },
          { name: 'Jack Peake', role: 'Debutant', isDebutant: true },
          { name: 'Pat Cummins', role: 'Pacer' },
          { name: 'Mitchell Starc', role: 'Pacer' },
          { name: 'Nathan Ellis', role: 'Pacer' },
          { name: 'Adam Zampa', role: 'Leg-spinner' }
        ]
      }
    ],
    venueInsights: {
      avgFirstInningsScore: 260,
      winPercentageBattingFirst: 55,
      winPercentageBattingSecond: 45,
      pitchCondition: 'The Gaddafi Stadium pitch for this 3rd ODI will be on a different, fresh strip. After two matches have been played on the overall square, the outfield will be slightly slower, the pitch could offer more variable bounce, and there may be more turn for the spinners later in the match.'
    },
    playersToWatch: [
      { name: 'Shaheen Afridi', role: 'Pacer', reason: 'His final home ODI, expects a highly motivated performance on his home turf.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shaheen' },
      { name: 'Nathan Ellis', role: 'Pacer', reason: 'Unplayable with late reverse swing in the 2nd ODI, finishing with 4/33.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nathan' }
    ]
  },
  {
    id: '8',
    opponent: 'WI',
    format: 'Test',
    title: 'West Indies vs Pakistan, 1st Test Match',
    date: 'July 25–30, 2026',
    time: '07:00 PM PKT',
    venue: 'Brian Lara Stadium, Tarouba, Trinidad',
    series: 'Pakistan Tour of West Indies (Test Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/tt.svg'
  },
  {
    id: '14',
    opponent: 'WI',
    format: 'Test',
    title: 'West Indies vs Pakistan, 2nd Test Match',
    date: 'August 02–07, 2026',
    time: '07:00 PM PKT',
    venue: 'Brian Lara Stadium, Tarouba, Trinidad',
    series: 'Pakistan Tour of West Indies (Test Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/tt.svg'
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
    title: "Pakistan vs England, 2nd Test Match (Lord's)",
    date: 'August 27–31, 2026',
    time: '03:30 PM PKT',
    venue: "Lord's Cricket Ground, London",
    series: 'Pakistan Tour of England (Test Series)',
    status: 'Upcoming',
    granularStatus: "2nd Test • Lord's, London • WTC Cycle 2025–27",
    flagUrl: 'https://flagcdn.com/gb.svg',
    preMatchAnalysis: `
### The Lord's Test: High Stakes at the Home of Cricket
Pakistan clash with England at the iconic Lord's Cricket Ground in London for the high-voltage 2nd Test match of the 2026 Test series. Critical World Test Championship (WTC) points and pride are on the line.

### Tactical Battles & Pitch Dynamics
* **The Famous Lord's Slope:** Bowlers who can exploit the 8-foot slope across the ground will hold a massive advantage. Shaheen Shah Afridi from the Pavilion End and Naseem Shah with his sharp nip-backer will test England's aggressive top order.
* **Babar Azam & Shan Masood Anchor Role:** Babar Azam holds a stellar record in English conditions. Alongside captain Shan Masood and Saud Shakeel, Pakistan's middle order will look to counter England's seam attack led by Gus Atkinson and Chris Woakes.
* **Joe Root & Brook vs Pak Pacers:** Root's phenomenal scoring record at Lord's makes him the prized wicket. Pakistan's pace battery must strike with the new Duke ball in overcast conditions.
    `,
    playingXI: [
      {
        team: 'Pakistan',
        players: [
          { name: 'Abdullah Shafique', role: 'Opening Batter' },
          { name: 'Shan Masood', role: 'Opening Batter', isCaptain: true },
          { name: 'Babar Azam', role: 'Batter' },
          { name: 'Saud Shakeel', role: 'Batter' },
          { name: 'Mohammad Rizwan', role: 'Wicket-keeper', isWicketkeeper: true },
          { name: 'Salman Ali Agha', role: 'All-rounder' },
          { name: 'Aamer Jamal', role: 'All-rounder' },
          { name: 'Shaheen Shah Afridi', role: 'Fast Bowler' },
          { name: 'Naseem Shah', role: 'Fast Bowler' },
          { name: 'Khurram Shahzad', role: 'Fast Bowler' },
          { name: 'Abrar Ahmed', role: 'Spinner' }
        ]
      },
      {
        team: 'England',
        players: [
          { name: 'Zak Crawley', role: 'Opening Batter' },
          { name: 'Ben Duckett', role: 'Opening Batter' },
          { name: 'Ollie Pope', role: 'Batter' },
          { name: 'Joe Root', role: 'Batter' },
          { name: 'Harry Brook', role: 'Batter' },
          { name: 'Ben Stokes', role: 'All-rounder', isCaptain: true },
          { name: 'Jamie Smith', role: 'Wicket-keeper', isWicketkeeper: true },
          { name: 'Chris Woakes', role: 'All-rounder' },
          { name: 'Gus Atkinson', role: 'Fast Bowler' },
          { name: 'Matthew Potts', role: 'Fast Bowler' },
          { name: 'Shoaib Bashir', role: 'Spinner' }
        ]
      }
    ],
    venueInsights: {
      avgFirstInningsScore: 312,
      winPercentageBattingFirst: 48,
      winPercentageBattingSecond: 52,
      pitchCondition: "The Lord's pitch offers generous seam and swing with the Duke ball during Days 1 and 2, assisted by the notorious slope. Batting stabilizes on Days 2–3 before variable bounce and reverse swing emerge on Days 4 and 5."
    },
    playersToWatch: [
      { name: 'Babar Azam', role: 'Batter', reason: 'Boasts an exceptional track record in England; pivotal anchor against the moving Duke ball.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Babar' },
      { name: 'Shaheen Shah Afridi', role: 'Fast Bowler', reason: 'Deadly left-arm angle utilizing the slope from the Pavilion End with the new ball.', imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shaheen' },
      { name: 'Joe Root', role: 'Batter', reason: "England's prolific run machine at Lord's with an outstanding century conversion rate.", imgUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Root' }
    ]
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
