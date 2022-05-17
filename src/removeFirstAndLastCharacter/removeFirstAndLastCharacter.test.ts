import { removeChar } from './removeFirstAndLastCharacter';

describe(removeChar.name, () => {
    it.each([
        ['eloquent', 'loquen'],
        ['country', 'ountr'],
        ['person', 'erso'],
        ['place', 'lac'],
        ['211c212', '11c21'],
        ['c2bac11', '2bac1'],
        ['1b31ab3', 'b31ab'],
        ['a22222c', '22222'],
        ['13bb131', '3bb13'],
        ['2c321c1', 'c321c'],
    ])('should take in "%s" and output "%s"', (original, removed) => {
        expect(removeChar(original)).toEqual(removed);
    });
});
