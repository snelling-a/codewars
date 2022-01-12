import { findOddNames } from '.';
import { Developer } from '../types';

type TestCase = [Developer[], Developer[]];
describe(findOddNames.name, () => {
    const testCase1: TestCase = [
        [
            {
                firstName: 'Aba',
                lastName: 'N.',
                country: 'Ghana',
                continent: 'Africa',
                age: 21,
                language: 'Python',
            },
            {
                firstName: 'Abb',
                lastName: 'O.',
                country: 'Israel',
                continent: 'Asia',
                age: 39,
                language: 'Java',
            },
        ],
        [
            {
                firstName: 'Abb',
                lastName: 'O.',
                country: 'Israel',
                continent: 'Asia',
                age: 39,
                language: 'Java',
            },
        ],
    ];

    const testCase2: TestCase = [
        [
            {
                firstName: 'Aba',
                lastName: 'N.',
                country: 'Ghana',
                continent: 'Africa',
                age: 21,
                language: 'Python',
            },
        ],
        [],
    ];

    it.each([testCase1, testCase2])(
        'should return developers with "odd" names',
        (developers, expected) =>
            expect(findOddNames(developers)).toEqual(expected),
    );
});
