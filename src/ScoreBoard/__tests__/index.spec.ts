import { ScoreBoard } from "../index";

describe('ScoreBoard', () => {
    describe('startMatch', () => {
        test('starts new match', () => {
            const scoreboard = new ScoreBoard();
            scoreboard.startMatch('Italy', 'France');

            expect(scoreboard.matches).toHaveLength(1);
        });

        describe('when match with provided team already started', () => {
            test.only('raises error that Team is playing already', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('Italy', 'England');

                expect(() => {
                    scoreboard.startMatch('Italy', 'France');
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

            scoreboard.finishMatch('Italy - France');

            expect(scoreboard.matches).toHaveLength(1);
        });


        describe('when match with provided home team could not be found', () => {
            test('raises error that match with such a home team was not started', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('England', 'France');

                expect(() => {
                    scoreboard.finishMatch('Italy - France');
                }).toThrow('No match with that home team was started yet.');
            });
        });

        describe('when match with provided away team could not be found', () => {
            test('raises error that match with such a home team was not started', () => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('England', 'France');

                expect(() => {
                    scoreboard.finishMatch('England - Italy');
                }).toThrow('No match with that away team was started yet.');
            });
        });

    });

    describe('updateScore', () => {

    });

    describe('getSummary', () => {

    });
});