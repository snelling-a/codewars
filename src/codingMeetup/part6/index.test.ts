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
    const testCase3: TestCaseBoolean = [
        [
            {
                firstName: 'Mark',
                lastName: 'G.',
                country: 'Scotland',
                continent: 'Europe',
                age: 22,
                language: 'JavaScript',
            },
            {
                firstName: 'Victoria',
                lastName: 'T.',
                country: 'Puerto Rico',
                continent: 'Americas',
                age: 30,
                language: 'Clojure',
            },
            {
                firstName: 'Emma',
                lastName: 'B.',
                country: 'Norway',
                continent: 'Europe',
                age: 19,
                language: 'Clojure',
            },
        ],
        false,
    ];

    const testCase4: TestCaseBoolean = [
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
        true,
    ];

    const testCase5: TestCaseBoolean = [
        [
            {
                firstName: 'Alexander',
                lastName: 'F.',
                country: 'Russia',
                continent: 'Europe',
                age: 89,
                language: 'Java',
            },
            {
                firstName: 'Fatima',
                lastName: 'K.',
                country: 'Saudi Arabia',
                continent: 'Asia',
                age: 21,
                language: 'Clojure',
            },
            {
                firstName: 'Mark',
                lastName: 'G.',
                country: 'Scotland',
                continent: 'Europe',
                age: 22,
                language: 'JavaScript',
            },
            {
                firstName: 'Nikola',
                lastName: 'H.',
                country: 'Serbia',
                continent: 'Europe',
                age: 29,
                language: 'Python',
            },
            {
                firstName: 'Jakub',
                lastName: 'I.',
                country: 'Slovakia',
                continent: 'Europe',
                age: 28,
                language: 'Java',
            },
            {
                firstName: 'Luka',
                lastName: 'J.',
                country: 'Slovenia',
                continent: 'Europe',
                age: 29,
                language: 'Clojure',
            },
        ],
        false,
    ];

    const testCase6: TestCaseBoolean = [
        [
            {
                firstName: 'Mehdi',
                lastName: 'H.',
                country: 'Tunisia',
                continent: 'Africa',
                age: 42,
                language: 'Python',
            },
            {
                firstName: 'Yusuf',
                lastName: 'N.',
                country: 'Turkey',
                continent: 'Europe',
                age: 22,
                language: 'Python',
            },
        ],
        true,
    ];

    it.each([
        testCase1,
        testCase2,
        testCase3,
        testCase4,
        testCase5,
        testCase6,
        [fullList, false],
    ])(
        'should determine if all developers work in the same language',
        (devList, expected) =>
            expect(isSameLanguage(devList)).toEqual(expected),
    );
});
