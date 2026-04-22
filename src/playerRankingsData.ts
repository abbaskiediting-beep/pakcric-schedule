export interface PlayerRanking {
  rank: number;
  name: string;
  country: string;
  rating: number;
  flagUrl: string;
}

export const PLAYER_RANKINGS = {
  t20: {
    batting: [
      { rank: 1, name: 'Travis Head', country: 'Australia', rating: 844, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 2, name: 'Suryakumar Yadav', country: 'India', rating: 805, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 3, name: 'Phil Salt', country: 'England', rating: 797, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 4, name: 'Babar Azam', country: 'Pakistan', rating: 755, flagUrl: 'https://flagcdn.com/pk.svg' },
      { rank: 5, name: 'Mohammad Rizwan', country: 'Pakistan', rating: 746, flagUrl: 'https://flagcdn.com/pk.svg' },
      { rank: 6, name: 'Yashasvi Jaiswal', country: 'India', rating: 733, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 7, name: 'Jos Buttler', country: 'England', rating: 716, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 8, name: 'Quinton de Kock', country: 'South Africa', rating: 694, flagUrl: 'https://flagcdn.com/za.svg' },
      { rank: 9, name: 'Brandon King', country: 'West Indies', rating: 677, flagUrl: 'https://flagcdn.com/jm.svg' },
      { rank: 10, name: 'Johnson Charles', country: 'West Indies', rating: 662, flagUrl: 'https://flagcdn.com/jm.svg' },
    ],
    bowling: [
      { rank: 1, name: 'Adil Rashid', country: 'England', rating: 718, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 2, name: 'Akeal Hosein', country: 'West Indies', rating: 683, flagUrl: 'https://flagcdn.com/tt.svg' },
      { rank: 3, name: 'Rashid Khan', country: 'Afghanistan', rating: 676, flagUrl: 'https://flagcdn.com/af.svg' },
      { rank: 4, name: 'Gudakesh Motie', country: 'West Indies', rating: 664, flagUrl: 'https://flagcdn.com/gy.svg' },
      { rank: 5, name: 'Wanindu Hasaranga', country: 'Sri Lanka', rating: 663, flagUrl: 'https://flagcdn.com/lk.svg' },
      { rank: 6, name: 'Maheesh Theekshana', country: 'Sri Lanka', rating: 659, flagUrl: 'https://flagcdn.com/lk.svg' },
      { rank: 7, name: 'Adam Zampa', country: 'Australia', rating: 654, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 8, name: 'Axar Patel', country: 'India', rating: 651, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 9, name: 'Josh Hazlewood', country: 'Australia', rating: 645, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 10, name: 'Kuldeep Yadav', country: 'India', rating: 642, flagUrl: 'https://flagcdn.com/in.svg' },
    ],
    allround: [
      { rank: 1, name: 'Hardik Pandya', country: 'India', rating: 244, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 2, name: 'Wanindu Hasaranga', country: 'Sri Lanka', rating: 228, flagUrl: 'https://flagcdn.com/lk.svg' },
      { rank: 3, name: 'Marcus Stoinis', country: 'Australia', rating: 211, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 4, name: 'Sikandar Raza', country: 'Zimbabwe', rating: 208, flagUrl: 'https://flagcdn.com/zw.svg' },
      { rank: 5, name: 'Shakib Al Hasan', country: 'Bangladesh', rating: 206, flagUrl: 'https://flagcdn.com/bd.svg' },
      { rank: 6, name: 'Mohammad Nabi', country: 'Afghanistan', rating: 205, flagUrl: 'https://flagcdn.com/af.svg' },
      { rank: 7, name: 'Liam Livingstone', country: 'England', rating: 198, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 8, name: 'Dipendra Singh Airee', country: 'Nepal', rating: 192, flagUrl: 'https://flagcdn.com/np.svg' },
      { rank: 9, name: 'Moeen Ali', country: 'England', rating: 184, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 10, name: 'Aiden Markram', country: 'South Africa', rating: 177, flagUrl: 'https://flagcdn.com/za.svg' },
    ]
  },
  odi: {
    batting: [
      { rank: 1, name: 'Babar Azam', country: 'Pakistan', rating: 824, flagUrl: 'https://flagcdn.com/pk.svg' },
      { rank: 2, name: 'Rohit Sharma', country: 'India', rating: 765, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 3, name: 'Shubman Gill', country: 'India', rating: 763, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 4, name: 'Virat Kohli', country: 'India', rating: 746, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 5, name: 'Harry Brook', country: 'England', rating: 733, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 6, name: 'David Warner', country: 'Australia', rating: 723, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 7, name: 'Daryl Mitchell', country: 'New Zealand', rating: 718, flagUrl: 'https://flagcdn.com/nz.svg' },
      { rank: 8, name: 'Pathum Nissanka', country: 'Sri Lanka', rating: 706, flagUrl: 'https://flagcdn.com/lk.svg' },
      { rank: 9, name: 'Kane Williamson', country: 'New Zealand', rating: 694, flagUrl: 'https://flagcdn.com/nz.svg' },
      { rank: 10, name: 'Dawid Malan', country: 'England', rating: 688, flagUrl: 'https://flagcdn.com/gb.svg' },
    ],
    bowling: [
      { rank: 1, name: 'Rashid Khan', country: 'Afghanistan', rating: 687, flagUrl: 'https://flagcdn.com/af.svg' },
      { rank: 2, name: 'Keshav Maharaj', country: 'South Africa', rating: 684, flagUrl: 'https://flagcdn.com/za.svg' },
      { rank: 3, name: 'Kuldeep Yadav', country: 'India', rating: 671, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 4, name: 'Jasprit Bumrah', country: 'India', rating: 668, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 5, name: 'Josh Hazlewood', country: 'Australia', rating: 663, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 6, name: 'Mohammed Siraj', country: 'India', rating: 654, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 7, name: 'Adam Zampa', country: 'Australia', rating: 651, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 8, name: 'Shaheen Afridi', country: 'Pakistan', rating: 645, flagUrl: 'https://flagcdn.com/pk.svg' },
      { rank: 9, name: 'Trent Boult', country: 'New Zealand', rating: 642, flagUrl: 'https://flagcdn.com/nz.svg' },
      { rank: 10, name: 'Mohammad Nabi', country: 'Afghanistan', rating: 638, flagUrl: 'https://flagcdn.com/af.svg' },
    ],
    allround: [
      { rank: 1, name: 'Mohammad Nabi', country: 'Afghanistan', rating: 322, flagUrl: 'https://flagcdn.com/af.svg' },
      { rank: 2, name: 'Sikandar Raza', country: 'Zimbabwe', rating: 288, flagUrl: 'https://flagcdn.com/zw.svg' },
      { rank: 3, name: 'Rashid Khan', country: 'Afghanistan', rating: 271, flagUrl: 'https://flagcdn.com/af.svg' },
      { rank: 4, name: 'Glenn Maxwell', country: 'Australia', rating: 264, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 5, name: 'Shakib Al Hasan', country: 'Bangladesh', rating: 251, flagUrl: 'https://flagcdn.com/bd.svg' },
      { rank: 6, name: 'Mehidy Hasan Miraz', country: 'Bangladesh', rating: 244, flagUrl: 'https://flagcdn.com/bd.svg' },
      { rank: 7, name: 'Mitchell Santner', country: 'New Zealand', rating: 238, flagUrl: 'https://flagcdn.com/nz.svg' },
      { rank: 8, name: 'Marco Jansen', country: 'South Africa', rating: 231, flagUrl: 'https://flagcdn.com/za.svg' },
      { rank: 9, name: 'Zeeshan Maqsood', country: 'Oman', rating: 224, flagUrl: 'https://flagcdn.com/om.svg' },
      { rank: 10, name: 'Ravindra Jadeja', country: 'India', rating: 218, flagUrl: 'https://flagcdn.com/in.svg' },
    ]
  },
  test: {
    batting: [
      { rank: 1, name: 'Joe Root', country: 'England', rating: 899, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 2, name: 'Kane Williamson', country: 'New Zealand', rating: 852, flagUrl: 'https://flagcdn.com/nz.svg' },
      { rank: 3, name: 'Daryl Mitchell', country: 'New Zealand', rating: 760, flagUrl: 'https://flagcdn.com/nz.svg' },
      { rank: 4, name: 'Steve Smith', country: 'Australia', rating: 757, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 5, name: 'Harry Brook', country: 'England', rating: 749, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 6, name: 'Yashasvi Jaiswal', country: 'India', rating: 740, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 7, name: 'Virat Kohli', country: 'India', rating: 737, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 8, name: 'Usman Khawaja', country: 'Australia', rating: 728, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 9, name: 'Babar Azam', country: 'Pakistan', rating: 724, flagUrl: 'https://flagcdn.com/pk.svg' },
      { rank: 10, name: 'Marnus Labuschagne', country: 'Australia', rating: 720, flagUrl: 'https://flagcdn.com/au.svg' },
    ],
    bowling: [
      { rank: 1, name: 'Ravichandran Ashwin', country: 'India', rating: 870, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 2, name: 'Jasprit Bumrah', country: 'India', rating: 847, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 3, name: 'Josh Hazlewood', country: 'Australia', rating: 841, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 4, name: 'Pat Cummins', country: 'Australia', rating: 828, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 5, name: 'Kagiso Rabada', country: 'South Africa', rating: 814, flagUrl: 'https://flagcdn.com/za.svg' },
      { rank: 6, name: 'Nathan Lyon', country: 'Australia', rating: 801, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 7, name: 'Ravindra Jadeja', country: 'India', rating: 788, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 8, name: 'Prabath Jayasuriya', country: 'Sri Lanka', rating: 766, flagUrl: 'https://flagcdn.com/lk.svg' },
      { rank: 9, name: 'James Anderson', country: 'England', rating: 738, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 10, name: 'Shaheen Afridi', country: 'Pakistan', rating: 733, flagUrl: 'https://flagcdn.com/pk.svg' },
    ],
    allround: [
      { rank: 1, name: 'Ravindra Jadeja', country: 'India', rating: 444, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 2, name: 'Ravichandran Ashwin', country: 'India', rating: 322, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 3, name: 'Joe Root', country: 'England', rating: 284, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 4, name: 'Shakib Al Hasan', country: 'Bangladesh', rating: 280, flagUrl: 'https://flagcdn.com/bd.svg' },
      { rank: 5, name: 'Axar Patel', country: 'India', rating: 269, flagUrl: 'https://flagcdn.com/in.svg' },
      { rank: 6, name: 'Jason Holder', country: 'West Indies', rating: 248, flagUrl: 'https://flagcdn.com/bb.svg' },
      { rank: 7, name: 'Ben Stokes', country: 'England', rating: 231, flagUrl: 'https://flagcdn.com/gb.svg' },
      { rank: 8, name: 'Pat Cummins', country: 'Australia', rating: 224, flagUrl: 'https://flagcdn.com/au.svg' },
      { rank: 9, name: 'Kyle Mayers', country: 'West Indies', rating: 212, flagUrl: 'https://flagcdn.com/bb.svg' },
      { rank: 10, name: 'Chris Woakes', country: 'England', rating: 205, flagUrl: 'https://flagcdn.com/gb.svg' },
    ]
  }
};
