import { spinWords } from '.';

describe(spinWords.name, () => {
    const testCases = [
        ['Hey fellow warriors', 'Hey wollef sroirraw'],
        ['This is a test', 'This is a test'],
        ['This is another test', 'This is rehtona test'],
    ];

    const additionalTests = [
        ['Raw Danger is best PS2 game', 'Raw regnaD is best PS2 game'],
        ['Welcome', 'emocleW'],
        ['Hey fellow warriors', 'Hey wollef sroirraw'],
        ['This is a test', 'This is a test'],
        ['This is another test', 'This is rehtona test'],
        ['This sentence is a sentence', 'This ecnetnes is a ecnetnes'],
        ['You are almost to the last test', 'You are tsomla to the last test'],
        [
            'Just kidding there is still one more',
            'Just gniddik ereht is llits one more',
        ],
        [
            'Oh wait shoot there are still the random tests sorry for misleading you',
            'Oh wait toohs ereht are llits the modnar stset yrros for gnidaelsim you',
        ],
    ];

    it.each([...testCases, ...additionalTests])(
        'should take "%s" and return "%s"',
        (input, output) => expect(spinWords(input)).toEqual(output),
    );
});
