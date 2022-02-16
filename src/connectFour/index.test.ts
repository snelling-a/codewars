import { Connect4 } from '.';

describe(Connect4.name, () => {
    describe('Sample Tests', () => {
        it.each([
            {
                game: [
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                ],
            },
            {
                game: [
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 0, returnValue: 'Player 1 wins!' },
                ],
            },
            {
                game: [
                    { move: 4, returnValue: 'Player 1 has a turn' },
                    { move: 4, returnValue: 'Player 2 has a turn' },
                    { move: 4, returnValue: 'Player 1 has a turn' },
                    { move: 4, returnValue: 'Player 2 has a turn' },
                    { move: 4, returnValue: 'Player 1 has a turn' },
                    { move: 4, returnValue: 'Player 2 has a turn' },
                    { move: 4, returnValue: 'Column full!' },
                ],
            },
            {
                game: [
                    { move: 1, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 2, returnValue: 'Player 1 has a turn' },
                    { move: 2, returnValue: 'Player 2 has a turn' },
                    { move: 3, returnValue: 'Player 1 has a turn' },
                    { move: 3, returnValue: 'Player 2 has a turn' },
                    { move: 4, returnValue: 'Player 1 wins!' },
                    { move: 4, returnValue: 'Game has finished!' },
                ],
            },
        ])('%j', ({ game }) => {
            const connect4 = new Connect4();

            game.forEach(({ move, returnValue }) => {
                expect(connect4.play(move)).toBe(returnValue);
            });
        });
    });
});
