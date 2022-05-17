import { litres } from './keepHydrated';

describe(litres.name, () => {
    it.each([
        [2, 1],
        [1.4, 0],
        [12.3, 6],
        [0.82, 0],
        [11.8, 5],
        [1787, 893],
        [0, 0],
    ])('time(%p) returns %p litres', (time, expected) =>
        expect(litres(time)).toBe(expected),
    );
});
