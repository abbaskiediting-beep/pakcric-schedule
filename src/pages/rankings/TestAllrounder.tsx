import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function TestAllrounder() {
  return (
    <PlayerRankingsDetail 
      title="Test All-rounder Ranking"
      category="All-rounder"
      format="Test"
      data={PLAYER_RANKINGS.test.allround}
      themeColor="from-orange-600 to-red-600"
    />
  );
}
