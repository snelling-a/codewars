import { narcissistic } from './doesMyNumberLookBigInThis';

type Test = { number: number; isNarcissistic: boolean }[];

describe(narcissistic.name, () => {
    const basicTests: Test = [
        { number: 7, isNarcissistic: true },
        { number: 153, isNarcissistic: true },
        { number: 1634, isNarcissistic: true },
    ];

    const randomTests: Test = [
        { number: 7923, isNarcissistic: false },
        { number: 9575, isNarcissistic: false },
        { number: 1782, isNarcissistic: false },
        { number: 8201, isNarcissistic: false },
        { number: 3966, isNarcissistic: false },
        { number: 4984, isNarcissistic: false },
        { number: 1387, isNarcissistic: false },
        { number: 409, isNarcissistic: false },
        { number: 7945, isNarcissistic: false },
        { number: 9769, isNarcissistic: false },
        { number: 1542, isNarcissistic: false },
        { number: 5755, isNarcissistic: false },
        { number: 6392, isNarcissistic: false },
        { number: 1794, isNarcissistic: false },
        { number: 9003, isNarcissistic: false },
        { number: 211, isNarcissistic: false },
        { number: 1704, isNarcissistic: false },
        { number: 1779, isNarcissistic: false },
        { number: 6966, isNarcissistic: false },
        { number: 9456, isNarcissistic: false },
    ];

    const additionalTests: Test = [
        { number: 8208, isNarcissistic: true },
        { number: 9474, isNarcissistic: true },
        { number: 54_748, isNarcissistic: true },
        { number: 92_727, isNarcissistic: true },
        { number: 93_084, isNarcissistic: true },
        { number: 548_834, isNarcissistic: true },
        { number: 1_741_725, isNarcissistic: true },
        { number: 4_210_818, isNarcissistic: true },
        { number: 9_800_817, isNarcissistic: true },
        { number: 9_926_315, isNarcissistic: true },
        { number: 24_678_050, isNarcissistic: true },
        { number: 24_678_051, isNarcissistic: true },
    ];

    it.each([...basicTests, ...randomTests, ...additionalTests])(
        '%o',
        ({ number, isNarcissistic }) => {
            expect(narcissistic(number)).toBe(isNarcissistic);
        },
    );
});
