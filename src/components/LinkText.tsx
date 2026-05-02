import React from 'react';
import { Link } from 'react-router-dom';

const KEYWORDS: Record<string, string> = {
  // Longest phrases first for better matching
  'PSL 2026 Final full campaign blog HYK vs PZ': '/blogs/psl-2026-final-full-campaign-pz-vs-hyk',
  'PSL 11 Final Ceremony 2026': '/psl-11-final-ceremony-2026-details',
  'PSL 2026 Final Ceremony': '/psl-11-final-ceremony-2026-details',
  'PSL 11 Final Ceremony': '/psl-11-final-ceremony-2026-details',
  'closing ceremony': '/psl-11-final-ceremony-2026-details',
  'Babar Azam 6 runs away from Peshawar Zalmi record': '/blogs/babar-azam-6-runs-away-zalmi-record',
  'Hunain Shah last over Eliminator 2': '/blogs/hunain-shah-last-over-dramatic-finish-psl-2026',
  'Babar Azam latest century PSL 2026 Qualifier': '/psl-11-qualifier-1-match-report-babar-century',
  'Usman Khan PSL 2026 full season review': '/usman-khan-psl-2026-season-review-records',
  'Darren Sammy PSL Final invitation blog': '/blogs/darren-sammy-psl-11-final-invitation-official',
  'Top 5 PSL centuries all time': '/top-5-players-with-most-centuries-in-psl-history-2026',
  'Infinity trophy': '/psl-11-final-ceremony-2026-details',
  'Pakistan upcoming series full schedule': '/pakistan-upcoming-series-full-schedule',
  'Pakistan upcoming series schedule': '/pakistan-upcoming-series-full-schedule',
  'Pakistan vs Bangladesh 2026 schedule': '/pakistan-vs-bangladesh-2026-schedule',
  'Pakistan vs Australia 2026 schedule': '/pakistan-vs-australia-2026-schedule-odi',
  'Pakistan vs Australia 2026 analysis': '/blogs/pakistan-vs-australia-2026-analysis',
  'Pakistan vs Australia 2026': '/pakistan-vs-australia-2026-schedule-odi',
  'Babar Azam All PSL Centuries': '/babar-azam-all-psl-centuries-list-2026-details',
  'most centuries in psl history': '/top-5-players-with-most-centuries-in-psl-history-2026',
  'PSL 2026 Eliminator 1': '/psl-2026-eliminator-1-multan-vs-hyderabad-match-analysis',
  'Hyderabad Kingsmen': '/blogs/hyderabad-kingsmen-psl-2026-journey-review',
  'Multan Sultans': '/multan-sultans-psl-2026-full-season-journey-review',
  'Islamabad United': '/psl-11-qualifier-1-showdown-2026',
  'Peshawar Zalmi': '/psl-11-qualifier-1-match-report-babar-century',
  'Maaz Sadaqat': '/maaz-sadaqat-psl-2026-season-review-stats',
  'Usman Khan': '/usman-khan-psl-2026-season-review-records',
  'Shaheen Shah Afridi': '/player/Shaheen-Shah-Afridi',
  'Shaheen Afridi': '/player/Shaheen-Shah-Afridi',
  'Babar Azam': '/player/Babar-Azam',
  'Mohammad Rizwan': '/player/Mohammad-Rizwan',
  'Saud Shakeel': '/player/Saud-Shakeel',
  'Salman Ali Agha': '/player/Salman-Ali-Agha',
  'Shan Masood': '/player/Shan-Masood',
  'Noman Ali': '/player/Noman-Ali',
  'Sajid Khan': '/player/Sajid-Khan',
  'Hasan Ali': '/player/Hasan-Ali',
  'Amad Butt': '/player/Amad-Butt',
  'Azan Awais': '/player/Azan-Awais',
  'Azam Khan': '/player/Azam-Khan',
  'Abdullah Fazal': '/player/Abdullah-Fazal',
  'Mohammad Abbas': '/player/Mohammad-Abbas',
  'Khurram Shahzad': '/player/Khurram-Shahzad',
  'Sahibzada Farhan': '/player/Sahibzada-Farhan',
  'Abrar Ahmed': '/player/Abrar-Ahmed',
  'Mir Hamza': '/player/Mir-Hamza',
  'Fakhar Zaman': '/player/Fakhar-Zaman',
  'Imam-ul-Haq': '/player/Imam-ul-Haq',
  'Abdullah Shafique': '/player/Abdullah-Shafique',
  'Shadab Khan': '/player/Shadab-Khan',
  'Iftikhar Ahmed': '/player/Iftikhar-Ahmed',
  'Imad Wasim': '/player/Imad-Wasim',
  'Mohammad Amir': '/player/Mohammad-Amir',
  'Hunain Shah': '/player/Hunain-Shah',
  
  // Blog / Page specific terms
  'Red Ball Resilience': '/red-ball-resilience-overview-2026',
  'Pakistan Tour Bangladesh 2026': '/pakistan-tour-bangladesh-test-2026',
  'PSL 11 Run Scorers': '/psl-11-top-run-scorers-2026',
  'PSL 11 Wicket Takers': '/psl-11-top-wicket-takers-2026',
  'PSL Qualifier 1 match report': '/psl-11-qualifier-1-match-report-babar-century',
  'Multan Sultans season review': '/multan-sultans-psl-2026-full-season-journey-review',
  'Darren Sammy PSL final invitation': '/blogs/darren-sammy-psl-11-final-invitation-official',
  'Hunain Shah last over': '/blogs/hunain-shah-last-over-dramatic-finish-psl-2026',
  'PSL 2026 Final': '/blogs/psl-2026-final-full-campaign-pz-vs-hyk',
  'Pakistan ICC Rankings April 2026': '/pakistan-icc-rankings-april-2026-analysis',
  'Evolution of the Shaheens': '/the-evolution-of-the-shaheens-2026-strategy',
  'Pakistan next tour details': '/pakistan-next-tour-details',
  'Champions Trophy': '/schedule',
  'Asia Cup': '/schedule',
  'World Test Championship': '/icc-wtc-projections-2026',
  'World Cup': '/schedule',
  'Test Rankings': '/icc-test-ranking-2026',
  'ODI Rankings': '/icc-odi-ranking-2026',
  'T20 Rankings': '/icc-t20-ranking-2026',
  'Pakistan Standard Time': '/pakistan-next-tour-details',
  'PKT': '/pakistan-next-tour-details',
  'match schedules': '/schedule',
  'match reports': '/news',
  'squad announcements': '/squads',
  'player performances': '/players-stats',
  'player stats': '/players-stats',
  'player rankings': '/rankings',
  'Pakistan cricket schedule 2026': '/schedule',

  // General
  'match schedule': '/schedule',
  'Pakistan cricket schedule': '/schedule',
  'fixtures': '/schedule',
  'schedule': '/schedule',
  'squads': '/squads',
  'squad': '/squads',
  'rankings': '/rankings',
  'icc': '/rankings',
  'wtc': '/icc-wtc-projections-2026',
  'world test championship': '/icc-wtc-projections-2026',
  'news': '/news',
  'blogs': '/blogs',
  'series': '/pakistan-cricket-series',
  'tour': '/pakistan-cricket-series',
  'test series': '/pakistan-cricket-series',
  'odi': '/rankings/odi-batting',
  't20': '/rankings/t20-batting',
  'psl 11': '/series/psl-11-2026',
  'psl 2026': '/series/psl-11-2026',
  'pakistan cricket': '/about',
  'Babar Azam resurgence': '/babar-azam-glorious-return-psl-2026-centuries',
  'PSL 11 Qualifier 1': '/psl-11-qualifier-1-showdown-2026',
  'PSL Qualifier 1': '/psl-11-qualifier-1-match-report-babar-century',
  'Eliminator 1': '/psl-2026-eliminator-1-full-match-report-analysis',
  'Eliminator 2': '/blogs/psl-2026-eliminator-2-hyderabad-kingsmen-match-report',
  'PSL Final': '/blogs/psl-2026-final-full-campaign-pz-vs-hyk',
  'Pakistan vs Bangladesh': '/pakistan-vs-bangladesh-2026-schedule',
  'Dhaka': '/pakistan-tour-bangladesh-test-2026',
};

interface LinkTextProps {
  text: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ text }) => {
  let parts: any[] = [text];

  // Sort keywords by length descending to catch longer phrases first
  const sortedKeywords = Object.entries(KEYWORDS).sort((a, b) => b[0].length - a[0].length);

  sortedKeywords.forEach(([keyword, path]) => {
    const newParts: any[] = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(\\b${keyword}\\b)`, 'gi');
        const splitParts = part.split(regex);
        splitParts.forEach((sp, i) => {
          if (sp.toLowerCase() === keyword.toLowerCase()) {
            newParts.push( sp !== '' && 
              <Link key={`${keyword}-${i}-${Math.random()}`} to={path} className="text-pak-green hover:underline cursor-pointer">
                {sp}
              </Link>
            );
          } else if (sp !== '') {
            newParts.push(sp);
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return <>{parts}</>;
};
