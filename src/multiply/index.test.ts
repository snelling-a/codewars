import { multiply } from '.';

describe(multiply.name, () => {
    const testCases = [
        [1, 1],
        [1, 2],
        [49, 80],
    ];
    it.each(testCases)('should multiply %d and %d', (num1, num2) => {
        expect(multiply(num1, num2)).toBe(num1 * num2);
    });
});
