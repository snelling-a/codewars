import { findSenior } from '.';
import { Developer } from '../types';

type TestCase = [Developer[], Developer[]];

describe(findSenior.name, () => {
    const testCase1: TestCase = [
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

    const testCase2: TestCase = [
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
    const testCase3: TestCase = [
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

    it.each([testCase1, testCase2, testCase3])(
        'should find the oldest developer(s)',
        (list, oldest) => expect(findSenior(list)).toEqual(oldest),
    );
});
