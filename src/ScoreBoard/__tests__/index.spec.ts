import { ScoreBoard } from "../index";

describe('ScoreBoard', () => {
    describe('startMatch', () => {
        test('starts new match', () => {
            const scoreboard = new ScoreBoard();
            scoreboard.startMatch('Italy', 'France');

            expect(scoreboard.liveMatches.size).toBe(1);
        });

        describe('when match with provided team already started', () => {
            test('raises error that Home team is playing already', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('Italy', 'England');

                expect(() => {
                    scoreboard.startMatch('Italy', 'France');
                }).toThrow('Team: Italy is playing already');
            });

            test('raises error that Away team is playing already', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('Italy', 'England');

                expect(() => {
                    scoreboard.startMatch('France', 'Italy');
                }).toThrow('Team: Italy is playing already');
            });

            test('raises error that both team are playing already', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('Italy', 'France');

                expect(() => {
                    scoreboard.startMatch('Italy', 'France');
                }).toThrow('Both Teams: Italy and France are playing already');

            });
        });
    });

    describe('finishMatch', () => {
        test('finishes match', () => {
            const scoreboard = new ScoreBoard();
            scoreboard.startMatch('Italy', 'France');
            scoreboard.startMatch('England', 'Spain');

            scoreboard.finishMatch('Italy', 'France');

            expect(scoreboard.finishedMatches.size).toBe(1);
            expect(scoreboard.liveMatches.size).toBe(1);
        });


        describe('when match with provided home team could not be found', () => {
            test('raises error that match with such teams was not started', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('England', 'France');

                expect(() => {
                    scoreboard.finishMatch('Italy', 'France');
                }).toThrow('No match with those teams was started yet.');
            });
        });

    });

    describe('updateScore', () => {

    });

    describe('getSummary', () => {

    });
});