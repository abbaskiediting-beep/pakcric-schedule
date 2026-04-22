import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function TestBowling() {
  return (
    <PlayerRankingsDetail 
      title="Test Bowling Ranking"
      category="Bowling"
      format="Test"
      data={PLAYER_RANKINGS.test.bowling}
      themeColor="from-orange-600 to-red-600"
    />
  );
}
