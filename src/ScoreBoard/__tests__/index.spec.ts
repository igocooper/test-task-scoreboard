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
        test('updates score', () => {
            const scoreboard = new ScoreBoard();
            const match = scoreboard.startMatch('England', 'France');

            scoreboard.updateScore('England 0 - France 1');

            expect(match.homeTeam.score).toBe(0);
            expect(match.awayTeam.score).toBe(1);
        });

      test('throw generic error when score instruction is not satisfying pattern', () => {
        const scoreboard = new ScoreBoard();
        scoreboard.startMatch('England', 'France');

        expect(() => {
          scoreboard.updateScore('agaghafdshfg');
        }).toThrow('Score instruction parsing error. Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}');
      });

        describe('when score instruction pattern is not recognised', () => {
            test.each([
                ['', 0, 'France', 0, 'Cannot parse "homeTeamName". Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}"'],
                ['England', '', 'France', 0, 'Cannot parse "homeTeamScore". Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}"'],
                ['England', 0, '', 0, 'Cannot parse "awayTeamName". Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}"'],
                ['England', 0, 'France', '', 'Cannot parse "awayTeamScore". Please make sure you are using correct format: "{homeTeamName} {homeTeamScore} - {awayTeamName} {awayTeamScore}"'],
            ])('it throw error that shows missing part and reminds required format', (homeTeamName, homeTeamScore, awayTeamName, awayTeamScore, expectedError: string) => {
                const scoreboard = new ScoreBoard();
                scoreboard.startMatch('England', 'France');

                expect(() => {
                    scoreboard.updateScore(`${homeTeamName} ${homeTeamScore} - ${awayTeamName} ${awayTeamScore}`);
                }).toThrow(expectedError);
            });
        });

        describe('when match with selected teams is not found', () => {
            test('it throw error', () => {
                const scoreboard = new ScoreBoard();

                expect(() => {
                    scoreboard.updateScore('England 0 - France 1');
                }).toThrow('No match with those teams was started yet.');
            });
        });

    });

    describe('getSummary', () => {

    });
});
