import React from 'react';
import { Link } from 'react-router-dom';

const KEYWORDS: Record<string, string> = {
  // Players
  'Babar Azam': '/player/Babar-Azam',
  'Mohammad Rizwan': '/player/Mohammad-Rizwan',
  'Shaheen Shah Afridi': '/player/Shaheen-Shah-Afridi',
  'Saud Shakeel': '/player/Saud-Shakeel',
  'Salman Ali Agha': '/player/Salman-Ali-Agha',
  'Shan Masood': '/player/Shan-Masood',
  'Noman Ali': '/player/Noman-Ali',
  'Sajid Khan': '/player/Sajid-Khan',
  'Hasan Ali': '/player/Hasan-Ali',
  'Amad Butt': '/player/Amad-Butt',
  'Azan Awais': '/player/Azan-Awais',
  'Abdullah Fazal': '/player/Abdullah-Fazal',
  'Mohammad Abbas': '/player/Mohammad-Abbas',
  'Khurram Shahzad': '/player/Khurram-Shahzad',
  'Abrar Ahmed': '/player/Abrar-Ahmed',
  'Mir Hamza': '/player/Mir-Hamza',
  'Fakhar Zaman': '/player/Fakhar-Zaman',
  'Imam-ul-Haq': '/player/Imam-ul-Haq',
  'Abdullah Shafique': '/player/Abdullah-Shafique',
  'Shadab Khan': '/player/Shadab-Khan',
  'Usman Khan': '/player/Usman-Khan',
  'Iftikhar Ahmed': '/player/Iftikhar-Ahmed',
  'Imad Wasim': '/player/Imad-Wasim',
  'Mohammad Amir': '/player/Mohammad-Amir',
  
  // General
  'schedule': '/schedule',
  'squad': '/squads',
  'rankings': '/rankings',
  'icc': '/rankings',
  'wtc': '/rankings',
  'world test championship': '/rankings',
  'news': '/news',
  'blogs': '/blogs',
  
  // Series
  'Bangladesh': '/series/pakistan-vs-bangladesh-2026',
  'England Tour': '/series/pakistan-vs-england-2026',
  'South Africa': '/series/pakistan-vs-south-africa-2026',
  'West Indies': '/series/pakistan-vs-west-indies-2026',
};

interface LinkTextProps {
  text: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ text }) => {
  let parts: any[] = [text];

  Object.entries(KEYWORDS).forEach(([keyword, path]) => {
    const newParts: any[] = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        // Use a negative lookahead/lookbehind or boundaries to avoid partial matches
        const regex = new RegExp(`(\\b${keyword}\\b)`, 'gi');
        const splitParts = part.split(regex);
        splitParts.forEach((sp, i) => {
          if (sp.toLowerCase() === keyword.toLowerCase()) {
            newParts.push(
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
