import { addUsername } from '.';
import { Developer } from '../types';

type TestCase = [Developer[], Developer[]];

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

    const testCaseNull: TestCase = [
        [
            {
                firstName: null,
                lastName: 'O.',
                country: 'Albania',
                continent: 'Europe',
                age: 23,
                language: 'Python',
            },
            {
                firstName: 'Fatima',
                lastName: null,
                country: 'Algeria',
                continent: 'Africa',
                age: 25,
                language: 'JavaScript',
            },
            {
                firstName: 'Laia',
                lastName: 'P.',
                country: 'Andorra',
                continent: 'Europe',
                age: null,
                language: 'Ruby',
            },
        ],
        [
            {
                age: 23,
                continent: 'Europe',
                country: 'Albania',
                firstName: null,
                language: 'Python',
                lastName: 'O.',
                username: 'o1999',
            },
            {
                age: 25,
                continent: 'Africa',
                country: 'Algeria',
                firstName: 'Fatima',
                language: 'JavaScript',
                lastName: null,
                username: 'fatima1997',
            },
            {
                age: null,
                continent: 'Europe',
                country: 'Andorra',
                firstName: 'Laia',
                language: 'Ruby',
                lastName: 'P.',
                username: 'laiap2022',
            },
        ],
    ];
    it.each([testCase1, testCaseNull])(
        'should add correct username',
        (input, expected) => {
            jest.useFakeTimers().setSystemTime(
                new Date('2022-01-11').getTime(),
            );

            expect(addUsername(input)).toEqual(expected);
        },
    );
});
