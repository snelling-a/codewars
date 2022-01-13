import { getAverageAge } from '.';
import { fullList } from '../fullList';
import { Developer } from '../types';

type TestCase = [Developer[], number];

describe(getAverageAge.name, () => {
    const testCases: TestCase[] = [
        [
            [
                {
                    firstName: 'Maria',
                    lastName: 'Y.',
                    country: 'Cyprus',
                    continent: 'Europe',
                    age: 30,
                    language: 'Java',
                },
                {
                    firstName: 'Victoria',
                    lastName: 'T.',
                    country: 'Puerto Rico',
                    continent: 'Americas',
                    age: 70,
                    language: 'Python',
                },
            ],
            50,
        ],
        [
            [
                {
                    firstName: 'Noa',
                    lastName: 'A.',
                    country: 'Israel',
                    continent: 'Asia',
                    age: 20,
                    language: 'Ruby',
                },
                {
                    firstName: 'Andrei',
                    lastName: 'E.',
                    country: 'Romania',
                    continent: 'Europe',
                    age: 21,
                    language: 'C',
                },
            ],
            21,
        ],
    ];

    const onePersonTest: TestCase = [
        [
            {
                firstName: 'Harry',
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: 'Python',
            },
        ],
        19,
    ];

    const testCase1: TestCase = [
        [
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 29,
                language: 'Ruby',
            },
            {
                firstName: 'Amar',
                lastName: 'V.',
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: 'Ruby',
            },
        ],
        31,
    ];

    const testCase2: TestCase = [
        [
            {
                firstName: 'Sofia',
                lastName: 'P.',
                country: 'Italy',
                continent: 'Europe',
                age: 41,
                language: 'Clojure',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 29,
                language: 'JavaScript',
            },
            {
                firstName: 'Jing',
                lastName: 'X.',
                country: 'China',
                continent: 'Asia',
                age: 39,
                language: 'Ruby',
            },
            {
                firstName: 'Noa',
                lastName: 'A.',
                country: 'Israel',
                continent: 'Asia',
                age: 40,
                language: 'Ruby',
            },
            {
                firstName: 'Andrei',
                lastName: 'E.',
                country: 'Romania',
                continent: 'Europe',
                age: 59,
                language: 'C',
            },
            {
                firstName: 'Maria',
                lastName: 'S.',
                country: 'Peru',
                continent: 'Americas',
                age: 60,
                language: 'C',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: 'Croatia',
                continent: 'Europe',
                age: 75,
                language: 'Python',
            },
            {
                firstName: 'Chloe',
                lastName: 'K.',
                country: 'Guernsey',
                continent: 'Europe',
                age: 88,
                language: 'Ruby',
            },
            {
                firstName: 'Viktoria',
                lastName: 'W.',
                country: 'Bulgaria',
                continent: 'Europe',
                age: 98,
                language: 'PHP',
            },
            {
                firstName: 'Piotr',
                lastName: 'B.',
                country: 'Poland',
                continent: 'Europe',
                age: 128,
                language: 'JavaScript',
            },
        ],
        66,
    ];

    const fullListTestCase: TestCase = [fullList, 44];

    const testCasesNull: TestCase[] = [
        [
            [
                {
                    firstName: 'Harry',
                    lastName: 'K.',
                    country: 'Brazil',
                    continent: 'Americas',
                    age: null,
                    language: 'Python',
                },
            ],
            0,
        ],
        [
            [
                {
                    firstName: 'Harry',
                    lastName: 'K.',
                    country: 'Brazil',
                    continent: 'Americas',
                    age: null,
                    language: 'Python',
                },
                {
                    firstName: 'Maria',
                    lastName: 'Y.',
                    country: 'Cyprus',
                    continent: 'Europe',
                    age: 30,
                    language: 'Java',
                },
            ],
            15,
        ],
    ];
    it.each([
        ...testCases,
        onePersonTest,
        testCase1,
        testCase2,
        fullListTestCase,
        ...testCasesNull,
    ])('should return the average age', (developers, expected) =>
        expect(getAverageAge(developers)).toBe(expected),
    );
});
