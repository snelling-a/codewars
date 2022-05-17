import { Disemvowel } from './disemvowelTrolls';

type TestCase = [string, string];

describe(Disemvowel.name, () => {
    const testCase: TestCase = [
        'This website is for losers LOL!',
        'Ths wbst s fr lsrs LL!',
    ];

    const fixedTests: TestCase[] = [
        [
            "No offense but,\nYour writing is among the worst I've ever read",
            "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd",
        ],
        ['What are you, a communist?', 'Wht r y,  cmmnst?'],
    ];

    it.each([testCase, ...fixedTests])(
        'should take "%s" and return "%s"',
        (input, output) => expect(Disemvowel.disemvowel(input)).toEqual(output),
    );
});
