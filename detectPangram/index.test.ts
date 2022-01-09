import { isPangram } from '.';

describe(isPangram.name, () => {
    const testCases: [string, boolean][] = [
        ['The quick brown fox jumps over the lazy dog.', true],
        ['This is not a pangram.', false],
    ];

    it.each(testCases)(
        'should show that "%s" is a pangram: %s',
        (input, expected) => expect(isPangram(input)).toEqual(expected),
    );
});
