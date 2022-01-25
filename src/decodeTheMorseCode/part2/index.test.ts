import { decodeBits, decodeMorse } from '.';

describe('Example from description', () => {
    it('Example from description', () => {
        const bits =
            '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';

        expect(decodeMorse(decodeBits(bits))).toBe('HEY JUDE');
    });
});
