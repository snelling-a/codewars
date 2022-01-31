import { sumOfIntervals } from '.';

describe(sumOfIntervals.name, () => {
    describe('basic tests', () => {
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
        ])('should take intervals %s and return %d', (intervals, expected) =>
            expect(sumOfIntervals(intervals)).toEqual(expected),
        );
    });
});
