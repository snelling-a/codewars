import { mirror } from '.';

describe(mirror.name, () => {
    it.each([
        [
            {
                abc: undefined,
                arara: undefined,
            },
            { abc: 'cba', arara: 'arara' },
        ],
        [{}, {}],
        [
            { 'abc?': undefined, '1 arara 2': undefined },
            {
                'abc?': '?cba',
                '1 arara 2': '2 arara 1',
            },
        ],
    ])('should convert %p to %p', (given, expected) =>
        expect(mirror(given)).toEqual(expected),
    );
});
