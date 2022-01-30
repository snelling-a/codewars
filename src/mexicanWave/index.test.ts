import { wave } from '.';

describe(wave.name, () => {
    describe('Sample Tests', () => {
        it.each([
            ['hello', ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']],
            [
                'codewars',
                [
                    'Codewars',
                    'cOdewars',
                    'coDewars',
                    'codEwars',
                    'codeWars',
                    'codewArs',
                    'codewaRs',
                    'codewarS',
                ],
            ],
            [
                'two words',
                [
                    'Two words',
                    'tWo words',
                    'twO words',
                    'two Words',
                    'two wOrds',
                    'two woRds',
                    'two worDs',
                    'two wordS',
                ],
            ],
            ['', []],
            [' gap ', [' Gap ', ' gAp ', ' gaP ']],
        ])(
            'should take the string "%s" and return a wave: %s',
            (input, output) => expect(wave(input)).toBe(output),
        );
    });
});
