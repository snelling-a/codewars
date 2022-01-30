import { checkForFactor } from '.';

describe(checkForFactor.name, () => {
    describe('basic tests', () => {
        it.each([
            [10, 2, true],
            [63, 7, true],
            [2450, 5, true],
            [24_612, 3, true],
            [9, 2, false],
            [653, 7, false],
            [2453, 5, false],
            [24_617, 3, false],
        ])(
            'should checkForFactor base: %d and factor %d and return %s',
            (base, factor, result) => {
                expect(checkForFactor(base, factor)).toBe(result);
            },
        );
    });
});
