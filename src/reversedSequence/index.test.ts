import { reverseSeq } from '.';

describe(reverseSeq.name, () => {
    describe('basic tests', () => {
        it.each([
            [5, [5, 4, 3, 2, 1]],
            [6, [6, 5, 4, 3, 2, 1]],
            [100, new Array(100).fill(0).map((_, i) => 100 - i)],
            [10_000, new Array(10000).fill(0).map((_, i) => 10000 - i)],
            [100_000, new Array(100000).fill(0).map((_, i) => 100000 - i)],
            [1_000_000, new Array(1000000).fill(0).map((_, i) => 1000000 - i)],
        ])('should accept %d and return %j', (n, expected) =>
            expect(reverseSeq(n)).toEqual(expected),
        );
    });
});
