import { Disemvowel } from '.';

type TestCase = [string, string];

describe(Disemvowel.name, () => {
    const testCase: TestCase = [
        'This website is for losers LOL!',
        'Ths wbst s fr lsrs LL!',
    ];

    it.each([testCase])('should take "%s" and return "%s"', (input, output) => {
        console.log('input, output :>> ', input, output);
        expect(Disemvowel.disemvowel(input)).toEqual(output);
    });
});
