import { findOutlier } from './findTheParityOutlier';

describe(findOutlier.name, () => {
    describe('simple tests', () => {
        it.each([
            [[0, 1, 2], 1],
            [[1, 2, 3], 2],
            [[2, 6, 8, 10, 3], 3],
            [[0, 0, 3, 0, 0], 3],
            [[1, 1, 0, 1, 1], 0],
        ])('should take array %s and return outlier %d', (integers, expected) =>
            expect(findOutlier(integers)).toEqual(expected),
        );
    });

    describe('more complex tests', () => {
        it.each([
            [[2, 6, 8, 10, 3], 3],
            [[2, 6, 8, 200, 700, 1, 84, 10, 4], 1],
            [[17, 6, 8, 10, 6, 12, 24, 36], 17],
            [[2, 1, 7, 17, 19, 211, 7], 2],
            [[1, 1, 1, 1, 1, 44, 7, 7, 7, 7, 7, 7, 7, 7], 44],
            [
                [
                    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 5, 5, 5, 5, 5,
                    5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 1000,
                ],
                1000,
            ],
            [[2, -6, 8, -10, -3], -3],
            [[2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4], -35],
            [
                [-100_000_000_007, -18, 6, -8, -10, 6, 12, -24, 36],
                -100_000_000_007,
            ],
            [[-20, 1, 7, 17, 19, 211, 7], -20],
            [[1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7], -44],
            [[1, 0, 0], 1],
            [[3, 7, -99, 81, 90_211, 0, 7], 0],
        ])('should take array %s and return outlier %d', (integers, expected) =>
            expect(findOutlier(integers)).toEqual(expected),
        );
    });
});
