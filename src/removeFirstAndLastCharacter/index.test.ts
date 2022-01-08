import { removeChar } from '.';

describe(removeChar.name, () => {
    const basicTests = [
        ['eloquent', 'loquen'],
        ['country', 'ountr'],
        ['person', 'erso'],
        ['place', 'lac'],
    ];

    it.each(basicTests)(
        'should take in "%s" and output "%s"',
        (original, removed) => {
            expect(removeChar(original)).toEqual(removed);
        },
    );
});
