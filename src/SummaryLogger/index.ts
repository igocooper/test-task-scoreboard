import { Match } from "../Match";

export class SummaryLogger {
  sort(matches: Array<Match>) {
    return matches
      .sort((a, b) => {
        return b.getTotalScore() - a.getTotalScore() || a.startedAt - b.startedAt
      })
  }
}
