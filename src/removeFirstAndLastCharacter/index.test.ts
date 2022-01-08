import { removeChar } from '.';

describe(removeChar.name, () => {
    const basicTests = [
        ['eloquent', 'loquen'],
        ['country', 'ountr'],
        ['person', 'erso'],
        ['place', 'lac'],
    ];

    const randomTests = [
        ['211c212', '11c21'],
        ['c2bac11', '2bac1'],
        ['1b31ab3', 'b31ab'],
        ['a22222c', '22222'],
        ['13bb131', '3bb13'],
        ['2c321c1', 'c321c'],
    ];

    it.each([...basicTests, ...randomTests])(
        'should take in "%s" and output "%s"',
        (original, removed) => {
            expect(removeChar(original)).toEqual(removed);
        },
    );
});
