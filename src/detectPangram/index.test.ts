import { isPangram } from '.';

type TestCase = [string, boolean];

describe(isPangram.name, () => {
    const testCases: TestCase[] = [
        ['The quick brown fox jumps over the lazy dog.', true],
        ['This is not a pangram.', false],
    ];

    const additionalTests: TestCase[] = [
        [
            'A pangram is a sentence that contains every single letter of the alphabet at least once.',
            false,
        ],
        ['abcdefghijklmopqrstuvwxyz', false],
        ['aaaaaaaaaaaaaaaaaaaaaaaaaa', false],
        ['How quickly daft jumping zebras vex.', true],
        ['Detect Pangram.', false],
        ['Cwm fjord bank glyphs vext quiz.', true],
        ['AbCdEfGhIjKlM zYxWvUtSrQpOn', true],
        ['Pack my box with five dozen liquor jugs.', true],
        ['ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ', true],
    ];

    it.each([...testCases, ...additionalTests])(
        'should show that "%s" is a pangram: %s',
        (input, expected) => expect(isPangram(input)).toEqual(expected),
    );
});
