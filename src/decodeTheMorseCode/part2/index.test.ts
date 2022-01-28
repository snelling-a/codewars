import { decodeBits, decodeMorse } from '.';

describe(decodeMorse.name, () => {
    it('Example from description', () => {
        const bits =
            '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';

        expect(decodeMorse(decodeBits(bits))).toBe('HEY JUDE');
    });

    it('Basic bits decoding', () => {
        expect(decodeMorse(decodeBits('1'))).toBe('E');
    });

    it('Multiple bits per dot handling', () => {
        expect(decodeMorse(decodeBits('111'))).toBe('E');
    });

    it('Extra zeros handling', () => {
        expect(decodeMorse(decodeBits('01110'))).toBe('E');
    });

    it('Long messages handling', () => {
        const bits =
            '00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110';

        expect(decodeMorse(decodeBits(bits))).toBe(
            'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
        );
    });
});
