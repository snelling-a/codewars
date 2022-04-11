import { countPositivesSumNegatives } from './countOfPositiveSumOfNegative';

describe(countPositivesSumNegatives.name, () => {
    it.each([
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
            [10, -65],
        ],
        [
            [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14],
            [8, -50],
        ],
        [null, []],
        [[], []],
    ])(
        'should take %s and find the number of positive numbers and sum of negative numbers: %s',
        (input, output) =>
            expect(countPositivesSumNegatives(input)).toEqual(output),
    );
});
