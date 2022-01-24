import { getParticipants } from '.';

describe(getParticipants.name, () => {
    it.each([
        [0, 1],
        [1, 2],
        [3, 3],
        [6, 4],
        [7, 5],
    ])(
        'should take %d handshakes and return %d participants',
        (handshakes, participants) =>
            expect(getParticipants(handshakes)).toBe(participants),
    );

    const getHandshakes = (participants: number) =>
        (participants * (participants - 1)) / 2;

    it.each([
        ...Array.from({ length: 100 }, () => {
            const randomNumberOfPeople = Math.round(Math.random() * 999 + 5);

            return [getHandshakes(randomNumberOfPeople), randomNumberOfPeople];
        }),
    ])(
        'should take a random number of handshakes, %d, and return %d participants',
        (handshakes, participants) =>
            expect(getParticipants(handshakes)).toBe(participants),
    );
});
