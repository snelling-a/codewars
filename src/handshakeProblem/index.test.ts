import { getParticipants } from '.';

describe('Handshake problem', () => {
    it.each([
        [0, 1],
        [1, 2],
        [3, 3],
        [6, 4],
        [7, 5],
    ])('should test for fixed cases', (input, expected) =>
        expect(getParticipants(input)).toBe(expected),
    );
});
