import { decodeMorse } from '.';

describe(decodeMorse.name, () => {
    const testCase = ['.... . -.--   .--- ..- -.. .', 'HEY JUDE'];

    it.each([testCase])('should decode "%s" into "%s"', (morse, english) =>
        expect(decodeMorse(morse)).toEqual(english),
    );
});
