import { decodeMorse } from '.';

describe(decodeMorse.name, () => {
    const testCase = ['.... . -.--   .--- ..- -.. .', 'HEY JUDE'];

    const basicMorseDecoding = [
        ['.-', 'A'],
        ['.', 'E'],
        ['..', 'I'],
        ['. .', 'EE'],
        ['.   .', 'E E'],
        ['...---...', 'SOS'],
        ['... --- ...', 'SOS'],
        ['...   ---   ...', 'S O S'],
    ];

    const moreComplexTests = [
        [' . ', 'E'],
        ['   .   . ', 'E E'],
        [
            '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     ',
            'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
        ],
    ];

    it.each([testCase, ...basicMorseDecoding, ...moreComplexTests])(
        'should decode "%s" into "%s"',
        (morse, english) => expect(decodeMorse(morse)).toEqual(english),
    );
});
