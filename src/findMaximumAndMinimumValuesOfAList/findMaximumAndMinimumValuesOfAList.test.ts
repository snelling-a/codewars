import { max, min } from './findMaximumAndMinimumValuesOfAList';

describe(min.name, () => {
    it.each([
        [[-52, 56, 30, 29, -54, 0, -110], -110],
        [[42, 54, 65, 87, 0], 0],
        [[1, 2, 3, 4, 5, 10], 1],
        [[-1, -2, -3, -4, -5, -10], -10],
    ])(
        'should take list: %s and return the minimum value: %i',
        (list, minimum) => {
            expect(min(list)).toEqual(minimum);
        },
    );
});

describe(max.name, () => {
    it.each([
        [[4, 6, 2, 1, 9, 63, -134, 566], 566],
        [[5], 5],
        [[-52, 56, 30, 29, -54, 0, -110], 56],
        [[534, 43, 2, 1, 3, 4, 5, 5, 443, 443, 555, 555], 555],
    ])(
        'should take list: %s and return the maximum value: %i',
        (list, maximum) => {
            expect(max(list)).toEqual(maximum);
        },
    );
});
