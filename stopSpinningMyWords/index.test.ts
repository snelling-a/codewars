import { spinWords } from '.';

describe(spinWords.name, () => {
    const testCases = [
        ['Hey fellow warriors', 'Hey wollef sroirraw'],
        ['This is a test', 'This is a test'],
        ['This is another test', 'This is rehtona test'],
    ];

    it.each(testCases)('should take "%s" and return "%s"', (input, output) =>
        expect(spinWords(input)).toEqual(output),
    );
});
