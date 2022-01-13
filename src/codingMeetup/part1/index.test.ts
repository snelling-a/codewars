import { countDevelopers } from '.';
import { fullList } from '../fullList';
import { TestCaseNumber } from '../types';

describe(countDevelopers.name, () => {
    const testCase1: TestCaseNumber = [
        [
            {
                firstName: 'Noah',
                lastName: 'M.',
                country: 'Switzerland',
                continent: 'Europe',
                age: 19,
                language: 'JavaScript',
            },
            {
                firstName: 'Maia',
                lastName: 'S.',
                country: 'Tahiti',
                continent: 'Oceania',
                age: 28,
                language: 'JavaScript',
            },
            {
                firstName: 'Shufen',
                lastName: 'L.',
                country: 'Taiwan',
                continent: 'Asia',
                age: 35,
                language: 'HTML',
            },
            {
                firstName: 'Sumayah',
                lastName: 'M.',
                country: 'Tajikistan',
                continent: 'Asia',
                age: 30,
                language: 'CSS',
            },
        ],
        1,
    ];

    const testCase2: TestCaseNumber = [
        [
            {
                firstName: 'Oliver',
                lastName: 'Q.',
                country: 'Australia',
                continent: 'Oceania',
                age: 19,
                language: 'HTML',
            },
            {
                firstName: 'Lukas',
                lastName: 'R.',
                country: 'Austria',
                continent: 'Europe',
                age: 89,
                language: 'HTML',
            },
        ],
        0,
    ];

    it.each<TestCaseNumber>([testCase1, testCase2, [fullList, 9]])(
        'should count the number of JS developers form Europe',
        (test, jsDevsFromEurope) =>
            expect(countDevelopers(test)).toEqual(jsDevsFromEurope),
    );
});
