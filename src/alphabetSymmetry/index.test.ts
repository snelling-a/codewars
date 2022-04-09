import { solve } from '.';

describe('Fixed tests', () => {
    it('Testing for ["abode", "ABc", "xyzD"]', () =>
        expect(solve(['abode', 'ABc', 'xyzD'])).toEqual([4, 3, 1]));

    it('Testing for ["abide", "ABc", "xyz"]', () =>
        expect(solve(['abide', 'ABc', 'xyz'])).toEqual([4, 3, 0]));

    it('Testing for ["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]', () =>
        expect(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])).toEqual([
            6, 5, 7,
        ]));

    it('Testing for ["encode", "abc", "xyzD", "ABmD"]', () =>
        expect(solve(['encode', 'abc', 'xyzD', 'ABmD'])).toEqual([1, 3, 1, 3]));
});
