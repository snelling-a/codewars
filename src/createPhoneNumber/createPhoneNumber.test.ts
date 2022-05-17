import { createPhoneNumber } from './createPhoneNumber';

describe(createPhoneNumber.name, () => {
    it.each([
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890'],
        [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], '(111) 111-1111'],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890'],
    ])('should convert array %j to string "%s"', (input, output) =>
        expect(createPhoneNumber(input)).toEqual(output),
    );
});
