import { getAverageAge } from '.';
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

    it.each([
        ...testCases,
    ])('should return the average age', (developers, expected) =>
        expect(getAverageAge(developers)).toBe(expected),
    );
});
