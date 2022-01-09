import { consonantValue } from '.';

describe(consonantValue.name, () => {
    const testCases: [string, number][] = [
        ['zodiac', 26],
        ['chruschtschov', 80],
        ['khrushchev', 38],
        ['strength', 57],
        ['catchphrase', 73],
        ['twelfthstreet', 103],
        ['mischtschenkoana', 80],
    ];

    it.each(testCases)(
        'should take the "%s" and return %i',
        (input, expected) => {
            expect(consonantValue(input)).toBe(expected);
        },
    );
});
