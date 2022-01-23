import { getParticipants } from '.';

describe('Handshake problem', () => {
    it.each([
        [0, 1],
        [1, 2],
        [3, 3],
        [6, 4],
        [7, 5],
    ])('should take %d handshakes and return %d people', (input, expected) =>
        expect(getParticipants(input)).toBe(expected),
    );

    it.each([
        ...Array.from({ length: 100 }, () => {
            const randomNumber = Math.round(Math.random() * 999 + 5);

            return [(randomNumber * (randomNumber - 1)) / 2, randomNumber];
        }),
    ])(
        'should take a random number of people %d and return %d handshakes',
        (input, expected) => expect(getParticipants(input)).toBe(expected),
    );
});
