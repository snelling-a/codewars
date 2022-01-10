import { isSameLanguage } from '.';
import { fullList } from '../fullList';
import { TestCaseBoolean } from '../types';

describe(isSameLanguage.name, () => {
    const testCase1: TestCaseBoolean = [
        [
            {
                firstName: 'Daniel',
                lastName: 'J.',
                country: 'Aruba',
                continent: 'Americas',
                age: 42,
                language: 'JavaScript',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 22,
                language: 'JavaScript',
            },
            {
                firstName: 'Hanna',
                lastName: 'L.',
                country: 'Hungary',
                continent: 'Europe',
                age: 65,
                language: 'JavaScript',
            },
        ],
        true,
    ];

    const testCase2: TestCaseBoolean = [
        [
            {
                firstName: 'Mariami',
                lastName: 'G.',
                country: 'Georgia',
                continent: 'Europe',
                age: 29,
                language: 'Python',
            },
            {
                firstName: 'Mia',
                lastName: 'H.',
                country: 'Germany',
                continent: 'Europe',
                age: 39,
                language: 'Ruby',
            },
        ],
        false,
    ];

    it.each([testCase1, testCase2, [fullList, false]])(
        'should determine if all developers work in the same language',
        (devList, expected) =>
            expect(isSameLanguage(devList)).toEqual(expected),
    );
});
