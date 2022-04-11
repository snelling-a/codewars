import { fullList } from '../fullList';
import { TestCaseBoolean } from '../types';
import { allContinents } from './part8';

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
        false,
    ];

    const testCase5: TestCaseBoolean = [
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
                firstName: 'Jayden',
                lastName: 'P.',
                country: 'Jamaica',
                continent: 'Americas',
                age: 42,
                language: 'JavaScript',
            },
            {
                firstName: 'Sou',
                lastName: 'B.',
                country: 'Japan',
                continent: 'Asia',
                age: 43,
                language: 'Python',
            },
            {
                firstName: 'Rimas',
                lastName: 'C.',
                country: 'Jordan',
                continent: 'Asia',
                age: 44,
                language: 'Java',
            },
        ],
        false,
    ];

    const testCase6: TestCaseBoolean = [
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
                continent: 'Asia',
                age: 28,
                language: 'Java',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Americas',
                age: 89,
                language: 'JavaScript',
            },
            {
                firstName: 'Luka',
                lastName: 'J.',
                country: 'Slovenia',
                continent: 'Oceania',
                age: 29,
                language: 'Clojure',
            },
            {
                firstName: 'Mariam',
                lastName: 'B.',
                country: 'Egypt',
                continent: 'Africa',
                age: 89,
                language: 'Python',
            },
        ],
        true,
    ];

    const testCase7: TestCaseBoolean = [
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
        false,
    ];

    const testCaseFullList: TestCaseBoolean = [fullList, true];

    it.each([
        testCase1,
        testCase2,
        testCase3,
        testCase4,
        testCase5,
        testCase6,
        testCase7,
        testCaseFullList,
    ])(
        'should determine if all continents are represented',
        (developers, areAllContinentsRepresented) =>
            expect(allContinents(developers)).toEqual(
                areAllContinentsRepresented,
            ),
    );
});
