import { interpreter } from '.';

describe(interpreter.name, () => {
    const testName = 'should take code: "%s" and tape: "%s" and return "%s"';
    const expectedResult = (code: string, tape: string, output: string) =>
        expect(interpreter(code, tape)).toBe(output);

    describe('example test cases', () => {
        it.each([
            ['*', '00101100', '10101100'],
            ['>*>*', '00101100', '01001100'],
            ['*>*>*>*>*>*>*>*', '00101100', '11010011'],
            ['*>*>>*>>>*>*', '00101100', '11111111'],
            ['>>>>>*<*<<*', '00101100', '00000000'],
        ])(testName, (code, tape, output) =>
            expectedResult(code, tape, output),
        );
    });

    describe('non-command characters', () => {
        it.each([
            ['iwmlis *!BOSS 333 ^v$#@', '00101100', '10101100'],
            ['>*>*;;;.!.,+-++--!!-!!!-', '00101100', '01001100'],
            [
                `    *  >
                *           >

            *>*lskdfjsdklfj>*;;+--+--+++--+-+-  lskjfiom,x
            >*sdfsdf>sdfsfsdfsdfwervbnbvn*,.,.,,.,.  >


            *`,
                '00101100',
                '11010011',
            ],
            [
                '*,,...,..,..++-->++++-*>--+>*>+++->>..,+-,*>*',
                '00101100',
                '11111111',
            ],
            ['>>nssewww>>wwess>*<nnn*<<ee*', '00101100', '00000000'],
        ])(testName, (code, tape, output) =>
            expectedResult(code, tape, output),
        );
    });

    describe('if the pointer goes out of bounds', () => {
        it.each([
            [
                '*>>>*>*>>*>>>>>>>*>*>*>*>>>**>>**',
                '0000000000000000',
                '1001101000000111',
            ],
            [
                '<<<*>*>*>*>*>>>*>>>>>*>*',
                '0000000000000000',
                '0000000000000000',
            ],
            [
                '*>*>*>>>*>>>>>*<<<<<<<<<<<<<<<<<<<<<*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*>*>*',
                '11111111111111111111111111111111',
                '00011011110111111111111111111111',
            ],
            ['>>*>*>*<<*<*<<*>*', '1101', '1110'],
        ])(testName, (code, tape, output) =>
            expectedResult(code, tape, output),
        );
    });

    describe('simple and nested loops', () => {
        it.each([
            ['*[>*]', '0'.repeat(256), '1'.repeat(256)],
            ['[>*]', '0'.repeat(256), '0'.repeat(256)],
            [
                '*>*>>>*>*>>>>>*>[>*]',
                '0'.repeat(256),
                `11001100001${'0'.repeat(245)}`,
            ],
            [
                '*>*>>>*>*>>>>>*[>*]',
                '0'.repeat(256),
                `11001100001${'1'.repeat(245)}`,
            ],
            ['*[>[*]]', '0'.repeat(256), `1${'0'.repeat(255)}`],
            ['*[>[*]]', '1'.repeat(256), `0${'1'.repeat(255)}`],
        ])(testName, (code, tape, output) =>
            expectedResult(code, tape, output),
        );
    });
});
