import { addUsername } from '.';
import { Developer } from '../types';

type TestCase = [Developer[], ({ username: string } & Developer)[]];

describe(addUsername.name, () => {
    const testCase1: TestCase = [
        [
            {
                firstName: 'Emily',
                lastName: 'N.',
                country: 'Ireland',
                continent: 'Europe',
                age: 30,
                language: 'Ruby',
            },
            {
                firstName: 'Nor',
                lastName: 'E.',
                country: 'Malaysia',
                continent: 'Asia',
                age: 20,
                language: 'Clojure',
            },
        ],
        [
            {
                firstName: 'Emily',
                lastName: 'N.',
                country: 'Ireland',
                continent: 'Europe',
                age: 30,
                language: 'Ruby',
                username: 'emilyn1992',
            },
            {
                firstName: 'Nor',
                lastName: 'E.',
                country: 'Malaysia',
                continent: 'Asia',
                age: 20,
                language: 'Clojure',
                username: 'nore2002',
            },
        ],
    ];

    it.each([testCase1])('should add correct username', (input, expected) => {
        expect(addUsername(input)).toEqual(expected);
    });
});
