import { numberOfPeopleOnTheBus } from '.';

type TestCase = [[number, number][], number];

describe(numberOfPeopleOnTheBus.name, () => {
    const testCases: TestCase[] = [
        [
            [
                [10, 0],
                [3, 5],
                [5, 8],
            ],
            5,
        ],
        [
            [
                [3, 0],
                [9, 1],
                [4, 10],
                [12, 2],
                [6, 1],
                [7, 10],
            ],
            17,
        ],
        [
            [
                [3, 0],
                [9, 1],
                [4, 8],
                [12, 2],
                [6, 1],
                [7, 8],
            ],
            21,
        ],
        [[[0, 0]], 0],
    ];

    it.each(testCases)(
        'should calculate final number of people on the bus given an array',
        (busStops, finalCount) =>
            expect(numberOfPeopleOnTheBus(busStops)).toEqual(finalCount),
    );
});
