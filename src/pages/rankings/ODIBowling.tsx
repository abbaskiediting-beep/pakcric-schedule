import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function ODIBowling() {
  return (
    <PlayerRankingsDetail 
      title="ODI Bowling Ranking"
      category="Bowling"
      format="ODI"
      data={PLAYER_RANKINGS.odi.bowling}
      themeColor="from-blue-600 to-cyan-600"
    />
  );
}
