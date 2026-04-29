import { SeriesSummary } from '../types';

export const seriesSummaries: SeriesSummary[] = [
  {
    id: 'psl-11-2026',
    seriesName: 'PSL 11 - 2026',
    opponent: 'Multan Sultans',
    format: 'T20I',
    headToHead: {
      total: 18,
      pakWins: 10,
      oppWins: 8,
      noResult: 0
    },
    venueHistory: [
      {
        venue: 'Gaddafi Stadium, Lahore',
        totalMatches: 45,
        pakWins: 28,
        oppWins: 15,
        averageScore: '172'
      },
      {
        venue: 'National Bank Stadium, Karachi',
        totalMatches: 38,
        pakWins: 22,
        oppWins: 14,
        averageScore: '168'
      }
    ],
    predictedXI: [
      {
        team: 'Hyderabad Kingsmen',
        players: [
          'Saim Ayub',
          'Maaz Sadaqat',
          'Usman Khan (wk)',
          'Marnus Labuschagne (c)',
          'Iftikhar Ahmed',
          'Aamer Jamal',
          'Mehran Mumtaz',
          'Akif Javed',
          'Mohammad Ali',
          'Hunain Shah',
          'Zaman Khan'
        ]
      },
      {
        team: 'Multan Sultans',
        players: [
          'Mohammad Rizwan (c & wk)',
          'Sahibzada Farhan',
          'Reeza Hendricks',
          'Tayyab Tahir',
          'Khushdil Shah',
          'Iftikhar Ahmed',
          'David Willey',
          'Usama Mir',
          'Abbas Afridi',
          'Mohammad Ali',
          'Shahnawaz Dahani'
        ]
      }
    ],
    keyPlayers: [
      {
        name: 'Maaz Sadaqat',
        team: 'Hyderabad Kingsmen',
        reason: 'In incredible form, recently scored 64* off 33 balls.'
      },
      {
        name: 'Mohammad Rizwan',
        team: 'Multan Sultans',
        reason: 'The anchor of Multan, consistently performs in big games.'
      }
    ]
  },
  {
    id: 'pak-ban-test-2026',
    seriesName: 'Pakistan Tour of Bangladesh (Test Series)',
    opponent: 'Bangladesh',
    format: 'Test',
    headToHead: {
      total: 15,
      pakWins: 13,
      oppWins: 1,
      noResult: 1
    },
    venueHistory: [
      {
        venue: 'Sher-e-Bangla National Stadium, Dhaka',
        totalMatches: 10,
        pakWins: 8,
        oppWins: 1,
        averageScore: '320'
      }
    ],
    predictedXI: [
      {
        team: 'Pakistan',
        players: [
          'Abdullah Shafique',
          'Saim Ayub',
          'Babar Azam (c)',
          'Saud Shakeel',
          'Mohammad Rizwan (wk)',
          'Salman Ali Agha',
          'Amer Jamal',
          'Shaheen Afridi',
          'Naseem Shah',
          'Abrar Ahmed',
          'Mir Hamza'
        ]
      },
      {
        team: 'Bangladesh',
        players: [
          'Zakir Hasan',
          'Mahmudul Hasan Joy',
          'Najmul Hossain Shanto (c)',
          'Mominul Haque',
          'Mushfiqur Rahim',
          'Litton Das (wk)',
          'Shakib Al Hasan',
          'Mehidy Hasan Miraz',
          'Taijul Islam',
          'Shoriful Islam',
          'Taskin Ahmed'
        ]
      }
    ],
    keyPlayers: [
      {
        name: 'Babar Azam',
        team: 'Pakistan',
        reason: 'Exceptional record in sub-continent tests, key to handling spin.'
      },
      {
        name: 'Mehidy Hasan Miraz',
        team: 'Bangladesh',
        reason: 'The biggest threat on a turning track in Dhaka.'
      }
    ]
  },
  {
    id: 'pak-nz-series-2026',
    seriesName: 'Pakistan vs New Zealand T20I Series',
    opponent: 'New Zealand',
    format: 'T20I',
    headToHead: {
      total: 35,
      pakWins: 21,
      oppWins: 14,
      noResult: 0
    },
    venueHistory: [
      {
        venue: 'Pindi Stadium, Rawalpindi',
        totalMatches: 12,
        pakWins: 8,
        oppWins: 4,
        averageScore: '185'
      }
    ],
    predictedXI: [
      {
        team: 'Pakistan',
        players: [
          'Babar Azam (c)',
          'Saim Ayub',
          'Mohammad Rizwan (wk)',
          'Fakhar Zaman',
          'Azam Khan',
          'Imad Wasim',
          'Shadab Khan',
          'Shaheen Afridi',
          'Naseem Shah',
          'Mohammad Amir',
          'Haris Rauf'
        ]
      },
      {
        team: 'New Zealand',
        players: [
          'Finn Allen',
          'Devon Conway (wk)',
          'Kane Williamson (c)',
          'Daryl Mitchell',
          'Glenn Phillips',
          'Mark Chapman',
          'Mitchell Santner',
          'Adam Milne',
          'Ish Sodhi',
          'Tim Southee',
          'Matt Henry'
        ]
      }
    ],
    keyPlayers: [
      {
        name: 'Shaheen Afridi',
        team: 'Pakistan',
        reason: 'Lethal in the opening overs, especially against Kiwi top order.'
      },
      {
        name: 'Kane Williamson',
        team: 'New Zealand',
        reason: 'His calmness under pressure is vital for the Black Caps.'
      }
    ]
  }
];
