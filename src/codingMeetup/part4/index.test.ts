import { getFirstPython } from '.';
import { fullList } from '../fullList';
import { Developer } from '../types';

type TestCase = [Developer[], string];

describe(getFirstPython.name, () => {
    const testCase1: TestCase = [
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
                language: 'Python',
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
        'Victoria, Puerto Rico',
    ];

    const testCase2: TestCase = [
        [
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 29,
                language: 'JavaScript',
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
        'There will be no Python developers',
    ];

    const testCase3: TestCase = [
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
        'Sou, Japan',
    ];

    it.each([testCase1, testCase2, testCase3, [fullList, 'Noel, Albania']])(
        'should return the first Python developer to sign up for the meetup',
        (developers, first) =>
            expect(getFirstPython(developers)).toEqual(first),
    );
});
