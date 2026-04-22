import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function T20Allrounder() {
  return (
    <PlayerRankingsDetail 
      title="T20 All-rounder Ranking"
      category="All-rounder"
      format="T20I"
      data={PLAYER_RANKINGS.t20.allround}
      themeColor="from-purple-600 to-indigo-600"
    />
  );
}
