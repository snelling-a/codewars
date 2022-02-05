import { interpreter } from '.';

describe(interpreter.name, () => {
    it.each([
        ['*', '00101100', '10101100'],
        ['>*>*', '00101100', '01001100'],
        ['*>*>*>*>*>*>*>*', '00101100', '11010011'],
        ['*>*>>*>>>*>*', '00101100', '11111111'],
        ['>>>>>*<*<<*', '00101100', '00000000'],
    ])(
        'should take code: "%s" and tape: "%s" and return "%s" ',
        (code, tape, output) => expect(interpreter(code, tape)).toBe(output),
    );
});
