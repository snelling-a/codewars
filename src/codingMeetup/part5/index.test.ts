import { countLanguages } from '.';
import { fullList } from '../fullList';
import { Developer, LanguageCounts } from '../types';

type TestCase = [Developer[], LanguageCounts];

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

    const testCase2: TestCase = [
        fullList,
        {
            C: 10,
            Clojure: 8,
            Java: 16,
            JavaScript: 15,
            PHP: 8,
            Python: 20,
            Ruby: 19,
        },
    ];

    it.each([testCase1, testCase2])(
        'should count the languages',
        (devList, langCount) =>
            expect(countLanguages(devList)).toEqual(langCount),
    );
});