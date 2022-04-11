import { solve } from './alphabetSymmetry';

describe('Alphabet Symmetry', () => {
    describe('Fixed tests', () => {
        it.each([
            [
                ['abode', 'ABc', 'xyzD'],
                [4, 3, 1],
            ],
            [
                ['abide', 'ABc', 'xyz'],
                [4, 3, 0],
            ],
            [
                ['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'],
                [6, 5, 7],
            ],
            [
                ['encode', 'abc', 'xyzD', 'ABmD'],
                [1, 3, 1, 3],
            ],
        ])('Testing for %j should result in %j', (arr, expected) =>
            expect(solve(arr)).toEqual(expected),
        );
    });
});
