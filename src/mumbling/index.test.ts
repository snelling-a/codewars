import { accum } from '.';

describe(accum.name, () => {
    describe('Fixed Tests', () => {
        const testCases = [
            [
                'ZpglnRxqenU',
                'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
            ],
            [
                'NyffsGeyylB',
                'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
            ],
            [
                'MjtkuBovqrU',
                'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
            ],
            [
                'EvidjUnokmM',
                'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
            ],
            [
                'HbideVbxncC',
                'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
            ],
        ];

        it.each(testCases)(
            'should take the string "%s" and return a mumble: %s',
            (input, output) => expect(accum(input)).toStrictEqual(output),
        );
    });
});
