import { findOutlier } from '.';

describe(findOutlier.name, () => {
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
