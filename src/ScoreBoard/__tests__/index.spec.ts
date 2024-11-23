import { ScoreBoard } from "../index";

describe('ScoreBoard', () => {
    describe('startMatch', () => {
        test('initial mocked test', () => {
            const scoreboard = new ScoreBoard();

            expect(scoreboard.startMatch()).toBe(undefined);
        })
    });

    describe('finishMatch', () => {

    });

    describe('updateScore', () => {

    });

    describe('getSummary', () => {

    });
});