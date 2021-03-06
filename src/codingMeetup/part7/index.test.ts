import { findSenior } from '.';
import { fullList } from '../fullList';
import { TestCaseDeveloper } from '../types';

describe(findSenior.name, () => {
    const testCase1: TestCaseDeveloper = [
        [
            {
                firstName: 'Gabriel',
                lastName: 'X.',
                country: 'Monaco',
                continent: 'Europe',
                age: 49,
                language: 'PHP',
            },
            {
                firstName: 'Odval',
                lastName: 'F.',
                country: 'Mongolia',
                continent: 'Asia',
                age: 38,
                language: 'Python',
            },
            {
                firstName: 'Emilija',
                lastName: 'S.',
                country: 'Lithuania',
                continent: 'Europe',
                age: 19,
                language: 'Python',
            },
            {
                firstName: 'Sou',
                lastName: 'B.',
                country: 'Japan',
                continent: 'Asia',
                age: 49,
                language: 'PHP',
            },
        ],
        [
            {
                firstName: 'Gabriel',
                lastName: 'X.',
                country: 'Monaco',
                continent: 'Europe',
                age: 49,
                language: 'PHP',
            },
            {
                firstName: 'Sou',
                lastName: 'B.',
                country: 'Japan',
                continent: 'Asia',
                age: 49,
                language: 'PHP',
            },
        ],
    ];

    const testCase2: TestCaseDeveloper = [
        [
            {
                firstName: 'Gabriel',
                lastName: 'X.',
                country: 'Monaco',
                continent: 'Europe',
                age: 49,
                language: 'PHP',
            },
            {
                firstName: 'Odval',
                lastName: 'F.',
                country: 'Mongolia',
                continent: 'Asia',
                age: 38,
                language: 'Python',
            },
            {
                firstName: 'Emilija',
                lastName: 'S.',
                country: 'Lithuania',
                continent: 'Europe',
                age: 19,
                language: 'Python',
            },
        ],
        [
            {
                firstName: 'Gabriel',
                lastName: 'X.',
                country: 'Monaco',
                continent: 'Europe',
                age: 49,
                language: 'PHP',
            },
        ],
    ];
    const testCase3: TestCaseDeveloper = [
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
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 89,
                language: 'JavaScript',
            },
            {
                firstName: 'Luka',
                lastName: 'J.',
                country: 'Slovenia',
                continent: 'Europe',
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
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 89,
                language: 'JavaScript',
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
    ];

    const testCase4: TestCaseDeveloper = [
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
        [
            {
                firstName: 'Victoria',
                lastName: 'T.',
                country: 'Puerto Rico',
                continent: 'Americas',
                age: 30,
                language: 'Clojure',
            },
        ],
    ];

    const testCase5: TestCaseDeveloper = [
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
        [
            {
                firstName: 'Amar',
                lastName: 'V.',
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: 'Ruby',
            },
        ],
    ];

    const testCase6: TestCaseDeveloper = [
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
        [
            {
                firstName: 'Rimas',
                lastName: 'C.',
                country: 'Jordan',
                continent: 'Asia',
                age: 44,
                language: 'Java',
            },
        ],
    ];

    const testCase7: TestCaseDeveloper = [
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
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 89,
                language: 'JavaScript',
            },
            {
                firstName: 'Luka',
                lastName: 'J.',
                country: 'Slovenia',
                continent: 'Europe',
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
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 89,
                language: 'JavaScript',
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
    ];

    const testCase8: TestCaseDeveloper = [
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
        [
            {
                firstName: 'Mehdi',
                lastName: 'H.',
                country: 'Tunisia',
                continent: 'Africa',
                age: 42,
                language: 'Python',
            },
        ],
    ];

    const testCaseFullList: TestCaseDeveloper = [
        fullList,
        [
            {
                firstName: 'Piotr',
                lastName: 'B.',
                country: 'Poland',
                continent: 'Europe',
                age: 128,
                language: 'JavaScript',
            },
        ],
    ];

    const testCasesNull: TestCaseDeveloper[] = [
        [
            [
                {
                    firstName: 'Mehdi',
                    lastName: 'H.',
                    country: 'Tunisia',
                    continent: 'Africa',
                    age: null,
                    language: 'Python',
                },
            ],
            [],
        ],
        [
            [
                {
                    firstName: 'Mehdi',
                    lastName: 'H.',
                    country: 'Tunisia',
                    continent: 'Africa',
                    age: null,
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
            [
                {
                    firstName: 'Yusuf',
                    lastName: 'N.',
                    country: 'Turkey',
                    continent: 'Europe',
                    age: 22,
                    language: 'Python',
                },
            ],
        ],
    ];

    it.each([
        testCase1,
        testCase2,
        testCase3,
        testCase4,
        testCase5,
        testCase6,
        testCase7,
        testCase8,
        testCaseFullList,
        ...testCasesNull,
    ])('should find the oldest developer(s)', (developers, oldestDeveloper) =>
        expect(findSenior(developers)).toEqual(oldestDeveloper),
    );
});
