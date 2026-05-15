import { Match } from './types';

export const PAKISTAN_SCHEDULE: Match[] = [
  {
    id: '2',
    opponent: 'BAN',
    format: 'Test',
    title: 'Pak vs Ban 2nd Test Match',
    date: 'May 16–20, 2026',
    time: '09:00 AM PKT',
    venue: 'Zahur Ahmed Chowdhury Stadium, Chattogram',
    series: 'Pakistan Tour of Bangladesh (Test Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/bd.svg',
    preMatchAnalysis: `
### Series Context
The second Test in Chattogram often favors batsmen early on before becoming a spin minefield. Pakistan will look to consolidate their position in the series here.

### Tactical Battle
* **Reverse Swing:** The dry conditions in Chattogram often provide reverse swing, making Naseem Shah a key weapon.
* **Middle Order Stability:** Saud Shakeel and Mohammad Rizwan will be pivotal in holding the innings together if the top order struggles against the new ball.
    `,
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
    date: 'May 31, 2026',
    time: '14:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan (ODI Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/au.svg'
  },
  {
    id: 'aus-odi-2',
    opponent: 'AUS',
    format: 'ODI',
    title: 'Pak vs Aus 2nd One Day',
    date: 'June 2, 2026',
    time: '14:30 PKT',
    venue: 'Gaddafi Stadium, Lahore',
    series: 'Australia Tour of Pakistan (ODI Series)',
    status: 'Upcoming',
    flagUrl: 'https://flagcdn.com/au.svg'
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
