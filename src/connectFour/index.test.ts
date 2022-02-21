import { Connect4 } from '.';

describe(Connect4.name, () => {
    const testName = 'it should test $test';

    const testFunction = (game: { move: number; returnValue: string }[]) => {
        const connect4 = new Connect4();

        game.forEach(({ move, returnValue }) => {
            expect(connect4.play(move)).toBe(returnValue);
        });
    };

    const columnFull = [
        { move: 4, returnValue: 'Player 1 has a turn' },
        { move: 4, returnValue: 'Player 2 has a turn' },
        { move: 4, returnValue: 'Player 1 has a turn' },
        { move: 4, returnValue: 'Player 2 has a turn' },
        { move: 4, returnValue: 'Player 1 has a turn' },
        { move: 4, returnValue: 'Player 2 has a turn' },
        { move: 4, returnValue: 'Column full!' },
    ];

    describe('Sample Tests', () => {
        it.each([
            {
                test: 'changes player',
                game: [
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                ],
            },
            {
                test: '4 in a row, vertical win',
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
                test: 'column full',
                game: columnFull,
            },
            {
                test: 'moves after game finished',
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
        ])(testName, ({ game }) => {
            testFunction(game);
        });
    });

    describe('additional tests', () => {
        it.each([
            {
                test: 'move by the same player after column is full',
                game: [
                    ...columnFull,
                    { move: 3, returnValue: 'Player 1 has a turn' },
                ],
            },
            {
                test: "checkVerticalWin doesn't give false positives",
                game: [
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 0, returnValue: 'Player 2 has a turn' },
                    { move: 0, returnValue: 'Player 1 has a turn' },
                ],
            },
            {
                test: '4 in a row horizontal win',
                game: [
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 0, returnValue: 'Player 2 has a turn' },
                    { move: 1, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 2, returnValue: 'Player 1 has a turn' },
                    { move: 2, returnValue: 'Player 2 has a turn' },
                    { move: 3, returnValue: 'Player 1 wins!' },
                ],
            },
            {
                test: "checkHorizontalWin doesn't give false positives",
                game: [
                    { move: 0, returnValue: 'Player 1 has a turn' },
                    { move: 0, returnValue: 'Player 2 has a turn' },
                    { move: 1, returnValue: 'Player 1 has a turn' },
                    { move: 1, returnValue: 'Player 2 has a turn' },
                    { move: 2, returnValue: 'Player 1 has a turn' },
                    { move: 3, returnValue: 'Player 2 has a turn' },
                    { move: 4, returnValue: 'Player 1 has a turn' },
                ],
            },
        ])(testName, ({ game }) => {
            testFunction(game);
        });
    });
});
