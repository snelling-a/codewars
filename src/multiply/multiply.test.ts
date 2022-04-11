import { multiply } from './multiply';

describe(multiply.name, () => {
    it.each([
        [1, 1],
        [1, 2],
        [49, 80],
    ])('should multiply %d and %d', (num1, num2) => {
        expect(multiply(num1, num2)).toBe(num1 * num2);
    });
});
