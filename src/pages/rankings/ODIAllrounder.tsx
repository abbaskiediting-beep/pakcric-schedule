import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function ODIAllrounder() {
  return (
    <PlayerRankingsDetail 
      title="ODI All-rounder Ranking"
      category="All-rounder"
      format="ODI"
      data={PLAYER_RANKINGS.odi.allround}
      themeColor="from-blue-600 to-cyan-600"
    />
  );
}
