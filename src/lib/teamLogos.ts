
export const getTeamLogo = (teamName: string): string => {
  const normalizedTeam = teamName.toUpperCase().trim();
  
  const nationalLogos: Record<string, string> = {
    'PAK': 'https://upload.wikimedia.org/wikipedia/en/b/b3/Pakistan_Cricket_Board_logo.svg',
    'PAKISTAN': 'https://upload.wikimedia.org/wikipedia/en/b/b3/Pakistan_Cricket_Board_logo.svg',
    'BAN': 'https://upload.wikimedia.org/wikipedia/en/d/df/Bangladesh_Cricket_Board_Logo.svg',
    'BANGLADESH': 'https://upload.wikimedia.org/wikipedia/en/d/df/Bangladesh_Cricket_Board_Logo.svg',
    'AUS': 'https://upload.wikimedia.org/wikipedia/en/3/30/Cricket_Australia_Logo.svg',
    'AUSTRALIA': 'https://upload.wikimedia.org/wikipedia/en/3/30/Cricket_Australia_Logo.svg',
    'ENG': 'https://upload.wikimedia.org/wikipedia/en/c/ce/England_and_Wales_Cricket_Board_logo.svg',
    'ENGLAND': 'https://upload.wikimedia.org/wikipedia/en/c/ce/England_and_Wales_Cricket_Board_logo.svg',
    'WI': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Cricket_West_Indies_Logo.svg',
    'WEST INDIES': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Cricket_West_Indies_Logo.svg',
    'SL': 'https://upload.wikimedia.org/wikipedia/en/d/da/Sri_Lanka_Cricket_Logo.svg',
    'SRI LANKA': 'https://upload.wikimedia.org/wikipedia/en/d/da/Sri_Lanka_Cricket_Logo.svg',
    'NZ': 'https://upload.wikimedia.org/wikipedia/en/e/e4/New_Zealand_Cricket_logo.svg',
    'NEW ZEALAND': 'https://upload.wikimedia.org/wikipedia/en/e/e4/New_Zealand_Cricket_logo.svg',
    'IND': 'https://upload.wikimedia.org/wikipedia/en/8/8d/BCCI_logo.svg',
    'INDIA': 'https://upload.wikimedia.org/wikipedia/en/8/8d/BCCI_logo.svg',
    'RSA': 'https://upload.wikimedia.org/wikipedia/en/5/5e/Cricket_South_Africa_logo.svg',
    'SOUTH AFRICA': 'https://upload.wikimedia.org/wikipedia/en/5/5e/Cricket_South_Africa_logo.svg',
    'AFG': 'https://upload.wikimedia.org/wikipedia/en/b/b5/Afghanistan_Cricket_Board_Logo.svg',
    'AFGHANISTAN': 'https://upload.wikimedia.org/wikipedia/en/b/b5/Afghanistan_Cricket_Board_Logo.svg',
  };

  const pslLogos: Record<string, string> = {
    'PESHAWAR ZALMI': 'https://upload.wikimedia.org/wikipedia/en/b/b8/Peshawar_Zalmi_logo.svg',
    'ISLAMABAD UNITED': 'https://upload.wikimedia.org/wikipedia/en/2/23/Islamabad_United_logo.svg',
    'KARACHI KINGS': 'https://upload.wikimedia.org/wikipedia/en/c/c5/Karachi_Kings_logo.svg',
    'LAHORE QALANDARS': 'https://upload.wikimedia.org/wikipedia/en/4/4c/Lahore_Qalandars_logo.svg',
    'MULTAN SULTANS': 'https://upload.wikimedia.org/wikipedia/en/b/b4/Multan_Sultans_logo.svg',
    'QUETTA GLADIATORS': 'https://upload.wikimedia.org/wikipedia/en/7/7a/Quetta_Gladiators_logo.svg',
    'HYDERABAD KINGSMEN': 'https://api.dicebear.com/7.x/identicon/svg?seed=HK&backgroundColor=00662e', // Custom green themed identicon for Kingsmen
    'HYK': 'https://api.dicebear.com/7.x/identicon/svg?seed=HK&backgroundColor=00662e',
  };

  if (nationalLogos[normalizedTeam]) return nationalLogos[normalizedTeam];
  
  // Fuzzy match for PSL teams
  for (const [name, logo] of Object.entries(pslLogos)) {
    if (normalizedTeam.includes(name) || name.includes(normalizedTeam)) {
      return logo;
    }
  }

  // Fallback to flagcdn for countries if not in nationalLogos (e.g., if full name used)
  const countryCodeMap: Record<string, string> = {
    'ZIMBABWE': 'zw',
    'IRELAND': 'ie',
    'SCOTLAND': 'gb-sct',
    'NETHERLANDS': 'nl',
    'USA': 'us',
    'NEPAL': 'np',
  };
  
  if (countryCodeMap[normalizedTeam]) {
    return `https://flagcdn.com/${countryCodeMap[normalizedTeam]}.svg`;
  }

  // Default fallback
  return `https://api.dicebear.com/7.x/initials/svg?seed=${normalizedTeam}&backgroundColor=00662e`;
};
