import { join } from '.';

describe(join.name, () => {
    it.each<[string, string | undefined, string | string[]]>([
        ['Hello', undefined, 'Hello'],
        ['Hello', ' ', 'Hello'],
        ['Hello', '-', 'Hello'],
        ['Hello world!', ' ', ['Hello world!']],
        ['Hello-world!', '-', ['Hello', 'world!']],
        ['Hello,world!', undefined, ['Hello', 'world!']],
    ])(
        'should return "%s" given glue: "%s" and tokens: "%s"',
        (expected, glue, tokens) => expect(join(tokens, glue)).toBe(expected),
    );
});
