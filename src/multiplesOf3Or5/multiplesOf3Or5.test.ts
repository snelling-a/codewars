import { MultiplesOf3Or5 } from './multiplesOf3Or5';

describe(MultiplesOf3Or5.name, () => {
    it.each([
        [10, 23],
        [-1, 0],
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 3],
        [5, 3],
        [6, 8],
        [124, 3543],
        [48, 495],
        [192, 8583],
        [150, 5175],
        [164, 6270],
        [62, 870],
        [127, 3794],
        [23, 119],
        [46, 495],
        [196, 8970],
        [1000, 233_168],
    ])('given %d it should return %d', (input, output) => {
        expect(MultiplesOf3Or5.solution(input)).toBe(output);
    });

    it('should handle random cases', () => {
        for (let i = 0; i < 10; i++) {
            const ran = Math.floor(Math.random() * 200);

            expect(MultiplesOf3Or5.solution(ran)).toBe(
                MultiplesOf3Or5.solution(ran),
            );
        }
    });
});
