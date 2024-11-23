import { Match } from "../index";

describe('Match', () => {
  describe('static getTeamsFromId', () => {
    test('parse id and returns array with teams ids', () => {
      const id = 'Italy-Spain';
      expect(Match.getTeamsFromId(id)).toEqual(['Italy', 'Spain']);
    });
  });

  describe('updateScore', () => {
    test('updates match score', () => {
      const match = new Match('Italy', 'Spain');
      match.updateScore(1, 1);
      expect(match.homeTeam.score).toBe(1);
      expect(match.awayTeam.score).toBe(1);
    });

  });

  describe('getTotalScore', () => {
    test('return total match score', () => {
      const match = new Match('Italy', 'Spain');
      match.updateScore(1, 1);
      expect(match.getTotalScore()).toBe(2);
    });
  });
});
