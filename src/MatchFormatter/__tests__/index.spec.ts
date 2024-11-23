import { MatchFormatter } from "../index";
import { Match } from "../../Match";

describe('MatchFormatter', () => {
    describe('format()', () => {
        test('format match into string with pattern: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}"', () => {
            const match = new Match('Italy','Spain');
            const formatter = new MatchFormatter();
            expect(formatter.format(match)).toBe('Italy 0 - Spain 0');
        });
    });
});
