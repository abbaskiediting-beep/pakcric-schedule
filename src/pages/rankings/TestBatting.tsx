import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function TestBatting() {
  return (
    <PlayerRankingsDetail 
      title="Test Batting Ranking"
      category="Batting"
      format="Test"
      data={PLAYER_RANKINGS.test.batting}
      themeColor="from-orange-600 to-red-600"
    />
  );
}
