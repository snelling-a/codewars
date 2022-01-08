import { oddOrEven } from '.';

type TestCase = [number[], 'odd' | 'even'];

describe(oddOrEven.name, () => {
    const edgeTests: TestCase[] = [
        [[0], 'even'],
        [[1], 'odd'],
        [[], 'even'],
    ];

    const evenTests: TestCase[] = [
        [[0, 1, 5], 'even'],
        [[0, 1, 3], 'even'],
        [[1023, 1, 2], 'even'],
    ];

    const negativeEvenTests: TestCase[] = [
        [[0, -1, -5], 'even'],
        [[0, -1, -3], 'even'],
        [[-1023, 1, -2], 'even'],
    ];

    const oddTests: TestCase[] = [
        [[0, 1, 2], 'odd'],
        [[0, 1, 4], 'odd'],
        [[1023, 1, 3], 'odd'],
    ];

    const negativeOddTests: TestCase[] = [
        [[0, -1, -2], 'odd'],
        [[0, 1, -4], 'odd'],
        [[-1023, -1, 3], 'odd'],
    ];

    it.each([
        ...edgeTests,
        ...evenTests,
        ...negativeEvenTests,
        ...oddTests,
        ...negativeOddTests,
    ])('sum of %s should be %s', (testArray, result) => {
        expect(oddOrEven(testArray)).toEqual(result);
    });
});
