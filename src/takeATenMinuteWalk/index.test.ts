import { isValidWalk } from '.';

type TestCase = [string[], boolean];
describe(isValidWalk.name, () => {
    const testCases: TestCase[] = [
        [['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'], true],
        [['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'], false],
        [['w'], false],
        [['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'], false],
    ];

    it.each(testCases)(
        'should take directions "%s" and return "%s"',
        (directions, isValid) => expect(isValidWalk(directions)).toBe(isValid),
    );
});
