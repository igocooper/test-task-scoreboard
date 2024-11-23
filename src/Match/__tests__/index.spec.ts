import { Match } from "../index";

describe('Match', () => {

    describe('static getTeamsFromId', () => {
        test('parse id and returns array with teams ids', () => {
            const id = 'Italy-Spain';
            expect(Match.getTeamsFromId(id)).toEqual(['Italy', 'Spain']);
        });
    });

    describe('updateScore', () => {
        // TODO: add tests
    });
});