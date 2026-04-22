import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function T20Bowling() {
  return (
    <PlayerRankingsDetail 
      title="T20 Bowling Ranking"
      category="Bowling"
      format="T20I"
      data={PLAYER_RANKINGS.t20.bowling}
      themeColor="from-purple-600 to-indigo-600"
    />
  );
}
