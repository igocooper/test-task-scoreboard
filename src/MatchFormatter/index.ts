import { Match } from "../Match";

export class MatchFormatter {
  format(match: Match) {
    const { name: homeTeamName, score: homeTeamScore } = match.homeTeam;
    const { name: awayTeamName, score: awayTeamScore } = match.awayTeam;

    return `${homeTeamName} ${homeTeamScore} - ${awayTeamName} ${awayTeamScore}`;
  }
}
