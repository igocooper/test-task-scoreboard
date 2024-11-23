import { SummaryLogger } from "../index";
import { ScoreBoard } from "../../ScoreBoard";
import { Match } from "../../Match";

describe('SummaryLogger', () => {

  describe('sort()', () => {
    test('it return matches summary ordered by total score', () => {
      const logger = new SummaryLogger();
      const match1 = new Match('Italy', 'Spain');
      const match2 = new Match('France', 'England')
      match1.updateScore(1, 2);
      match2.updateScore(2, 2);
      const matches = [match1, match2];

      expect(logger.sort(matches)).toEqual([
        match2,
        match1,
      ]);
    });

    test('it return matches summary ordered by time match started if total score is same', () => {
      const scoreboard = new ScoreBoard();
      scoreboard.startMatch('England', 'France');
      scoreboard.startMatch('Spain', 'Italy');
      scoreboard.updateScore('England 1 - France 4');
      scoreboard.updateScore('Spain 2 - Italy 3');

      const logger = new SummaryLogger();
      const match1 = new Match('Italy', 'Spain');
      const match2 = new Match('France', 'England')
      const match3 = new Match('Portugal', 'Greece')
      match1.updateScore(2, 2);
      match2.updateScore(1, 0);
      match3.updateScore(2, 2);
      const matches = [match1, match2, match3];

      expect(logger.sort(matches)).toEqual([
        match1,
        match3,
        match2,
      ]);
    });
  })
});
