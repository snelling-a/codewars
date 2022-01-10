import { allContinents } from '.';
import { TestCaseBoolean } from '../types';

describe(allContinents.name, () => {
    const testCase1: TestCaseBoolean = [
        [
            {
                firstName: 'Fatima',
                lastName: 'A.',
                country: 'Algeria',
                continent: 'Africa',
                age: 25,
                language: 'JavaScript',
            },
            {
                firstName: 'Agustín',
                lastName: 'M.',
                country: 'Chile',
                continent: 'Americas',
                age: 37,
                language: 'C',
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
                firstName: 'Laia',
                lastName: 'P.',
                country: 'Andorra',
                continent: 'Europe',
                age: 55,
                language: 'Ruby',
            },
            {
                firstName: 'Oliver',
                lastName: 'Q.',
                country: 'Australia',
                continent: 'Oceania',
                age: 65,
                language: 'PHP',
            },
        ],
        true,
    ];

    const testCase2: TestCaseBoolean = [
        [
            {
                firstName: 'Fatima',
                lastName: 'A.',
                country: 'Algeria',
                continent: 'Africa',
                age: 25,
                language: 'JavaScript',
            },
        ],
        false,
    ];

    const testCases = [testCase1, testCase2];
    it.each(testCases)(
        'should determine if all continents are represented',
        (developers, allContinentsRepresented) =>
            expect(allContinents(developers)).toEqual(allContinentsRepresented),
    );
});
