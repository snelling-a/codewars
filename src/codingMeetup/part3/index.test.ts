import { isRubyComing } from '.';
import { fullList } from '../fullList';
import { TestCaseBoolean } from '../types';

describe(isRubyComing.name, () => {
    const testCase1: TestCaseBoolean = [
        [
            {
                firstName: 'Sofia',
                lastName: 'I.',
                country: 'Argentina',
                continent: 'Americas',
                age: 35,
                language: 'Java',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: 'Croatia',
                continent: 'Europe',
                age: 35,
                language: 'Python',
            },
            {
                firstName: 'Madison',
                lastName: 'U.',
                country: 'United States',
                continent: 'Americas',
                age: 32,
                language: 'Ruby',
            },
        ],
        true,
    ];

    const testCase2: TestCaseBoolean = [
        [
            {
                firstName: 'Sofia',
                lastName: 'I.',
                country: 'Argentina',
                continent: 'Americas',
                age: 35,
                language: 'Java',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: 'Croatia',
                continent: 'Europe',
                age: 35,
                language: 'Python',
            },
        ],
        false,
    ];

    const testCase3: TestCaseBoolean = [
        [
            {
                firstName: 'Emma',
                lastName: 'Z.',
                country: 'Netherlands',
                continent: 'Europe',
                age: 29,
                language: 'Ruby',
            },
            {
                firstName: 'Piotr',
                lastName: 'B.',
                country: 'Poland',
                continent: 'Europe',
                age: 128,
                language: 'JavaScript',
            },
            {
                firstName: 'Jayden',
                lastName: 'P.',
                country: 'Jamaica',
                continent: 'Americas',
                age: 42,
                language: 'JavaScript',
            },
        ],
        true,
    ];

    const testCase4: TestCaseBoolean = [
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
                firstName: 'Emma',
                lastName: 'U.',
                country: 'Belgium',
                continent: 'Europe',
                age: 39,
                language: 'Python',
            },
            {
                firstName: 'Amar',
                lastName: 'V.',
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: 'Ruby',
            },
            {
                firstName: 'Harry',
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: 'Python',
            },
        ],
        true,
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
                language: 'PHP',
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

    const testCaseNull: TestCaseBoolean = [
        [
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 29,
                language: null,
            },
            {
                firstName: 'Emma',
                lastName: 'U.',
                country: 'Belgium',
                continent: 'Europe',
                age: 39,
                language: null,
            },
            {
                firstName: 'Amar',
                lastName: 'V.',
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: null,
            },
            {
                firstName: 'Harry',
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: null,
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
        testCaseFullList,
        testCaseNull,
    ])(
        'should determine if Ruby developers are coming',
        (developers, isComing) =>
            expect(isRubyComing(developers)).toEqual(isComing),
    );
});
