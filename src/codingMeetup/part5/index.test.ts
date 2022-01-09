import { countLanguages } from '.';
import { Developer } from '../types';

type TestCase = [
    Developer[],
    { C?: number; JavaScript?: number; Ruby?: number },
];

describe(countLanguages.name, () => {
    const testCase1: TestCase = [
        [
            {
                firstName: 'Noah',
                lastName: 'M.',
                country: 'Switzerland',
                continent: 'Europe',
                age: 19,
                language: 'C',
            },
            {
                firstName: 'Anna',
                lastName: 'R.',
                country: 'Liechtenstein',
                continent: 'Europe',
                age: 52,
                language: 'JavaScript',
            },
            {
                firstName: 'Ramon',
                lastName: 'R.',
                country: 'Paraguay',
                continent: 'Americas',
                age: 29,
                language: 'Ruby',
            },
            {
                firstName: 'George',
                lastName: 'B.',
                country: 'England',
                continent: 'Europe',
                age: 81,
                language: 'C',
            },
        ],
        { C: 2, JavaScript: 1, Ruby: 1 },
    ];

    it.each([testCase1])('should count the languages', (devList, langCount) =>
        expect(countLanguages(devList)).toBe(langCount),
    );
});
