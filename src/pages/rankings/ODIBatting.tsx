import PlayerRankingsDetail from '../../components/PlayerRankingsDetail';
import { PLAYER_RANKINGS } from '../../playerRankingsData';

export default function ODIBatting() {
  return (
    <PlayerRankingsDetail 
      title="ODI Batting Ranking"
      category="Batting"
      format="ODI"
      data={PLAYER_RANKINGS.odi.batting}
      themeColor="from-blue-600 to-cyan-600"
    />
  );
}
