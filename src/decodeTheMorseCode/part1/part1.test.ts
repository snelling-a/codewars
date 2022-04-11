import { decodeMorse } from './part1';

describe(decodeMorse.name, () => {
    it.each([
        ['.... . -.--   .--- ..- -.. .', 'HEY JUDE'],
        ...[
            ['.-', 'A'],
            ['.', 'E'],
            ['..', 'I'],
            ['. .', 'EE'],
            ['.   .', 'E E'],
            ['...---...', 'SOS'],
            ['... --- ...', 'SOS'],
            ['...   ---   ...', 'S O S'],
        ],
        ...[
            [' . ', 'E'],
            ['   .   . ', 'E E'],
            [
                '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     ',
                'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
            ],
        ],
    ])('should decode "%s" into "%s"', (morse, english) =>
        expect(decodeMorse(morse)).toEqual(english),
    );
});
