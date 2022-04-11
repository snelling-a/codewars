import { isValidWalk } from './takeATenMinuteWalk';

type TestCase = [string[], boolean];
describe(isValidWalk.name, () => {
    const testCases: TestCase[] = [
        [['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'], true],
        [['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'], false],
        [['w'], false],
        [['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'], false],
    ];

    const failingTestCases: TestCase[] = [
        ['n'],
        ['n', 's'],
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        [
            'n',
            's',
            'e',
            'w',
            'n',
            's',
            'e',
            'w',
            'n',
            's',
            'e',
            'w',
            'n',
            's',
            'e',
            'w',
        ],
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'],
        ['e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
        ['n', 'e', 'n', 'e', 'n', 'e', 'n', 'e', 'n', 'e'],
        ['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
        ['e', 's', 'e', 's', 'e', 's', 'e', 's', 'e', 's'],
        ['w', 's', 'w', 's', 'w', 's', 'w', 's', 'w', 's'],
    ].map((f) => [f, false]);

    const passingTestCases: TestCase[] = [
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
        ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'],
    ].map((p) => [p, true]);

    it.each([...testCases, ...failingTestCases, ...passingTestCases])(
        'should take directions "%s" and return "%s"',
        (directions, isValid) => expect(isValidWalk(directions)).toBe(isValid),
    );
});
