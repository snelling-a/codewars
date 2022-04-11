import { sumOfIntervals } from './sumOfIntervals';

describe(sumOfIntervals.name, () => {
    it.each<[[number, number][], number]>([
        [[[1, 5]], 4],
        [
            [
                [1, 5],
                [6, 10],
            ],
            8,
        ],
        [
            [
                [1, 5],
                [1, 5],
            ],
            4,
        ],
        [
            [
                [1, 4],
                [7, 10],
                [3, 5],
            ],
            7,
        ],
        [
            [
                [1, 5],
                [10, 15],
                [-1, 3],
            ],
            11,
        ],
    ])('should take intervals %j and return %d', (intervals, expected) =>
        expect(sumOfIntervals(intervals)).toEqual(expected),
    );
});
