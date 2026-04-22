import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function T20Batting() {
  return (
    <PlayerRankingsDetail 
      title="T20 Batting Ranking"
      category="Batting"
      format="T20I"
      data={PLAYER_RANKINGS.t20.batting}
      themeColor="from-purple-600 to-indigo-600"
    />
  );
}
