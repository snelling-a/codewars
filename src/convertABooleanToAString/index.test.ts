import { booleanToString } from '.';

describe(booleanToString.name, () => {
    it.each([
        [true, 'true'],
        [false, 'false'],
    ])('should convert boolean value %s to string "%s"', (boolean, string) => {
        expect(booleanToString(boolean)).toEqual(string);
    });
});
