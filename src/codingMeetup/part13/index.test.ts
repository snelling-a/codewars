import { isLanguageDiverse } from '.';
import { TestCaseBoolean } from '../types';

describe(isLanguageDiverse.name, () => {
    const testCase1: TestCaseBoolean = [
        [
            {
                firstName: 'Daniel',
                lastName: 'J.',
                country: 'Aruba',
                continent: 'Americas',
                age: 42,
                language: 'Python',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 22,
                language: 'Ruby',
            },
            {
                firstName: 'Sou',
                lastName: 'B.',
                country: 'Japan',
                continent: 'Asia',
                age: 43,
                language: 'Ruby',
            },
            {
                firstName: 'Hanna',
                lastName: 'L.',
                country: 'Hungary',
                continent: 'Europe',
                age: 95,
                language: 'JavaScript',
            },
            {
                firstName: 'Jayden',
                lastName: 'P.',
                country: 'Jamaica',
                continent: 'Americas',
                age: 18,
                language: 'JavaScript',
            },
            {
                firstName: 'Joao',
                lastName: 'D.',
                country: 'Portugal',
                continent: 'Europe',
                age: 25,
                language: 'JavaScript',
            },
        ],
        false,
    ];

    const testCase2: TestCaseBoolean = [
        [
            {
                firstName: 'Daniel',
                lastName: 'J.',
                country: 'Aruba',
                continent: 'Americas',
                age: 42,
                language: 'Python',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 22,
                language: 'Ruby',
            },
            {
                firstName: 'Hanna',
                lastName: 'L.',
                country: 'Hungary',
                continent: 'Europe',
                age: 95,
                language: 'JavaScript',
            },
            {
                firstName: 'Jayden',
                lastName: 'P.',
                country: 'Jamaica',
                continent: 'Americas',
                age: 18,
                language: 'JavaScript',
            },
            {
                firstName: 'Joao',
                lastName: 'D.',
                country: 'Portugal',
                continent: 'Europe',
                age: 25,
                language: 'JavaScript',
            },
        ],
        false,
    ];

    const testCase3: TestCaseBoolean = [
        [
            {
                firstName: 'Daniel',
                lastName: 'J.',
                country: 'Aruba',
                continent: 'Americas',
                age: 42,
                language: 'Python',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 22,
                language: 'Ruby',
            },
            {
                firstName: 'Jayden',
                lastName: 'P.',
                country: 'Jamaica',
                continent: 'Americas',
                age: 18,
                language: 'JavaScript',
            },
            {
                firstName: 'Joao',
                lastName: 'D.',
                country: 'Portugal',
                continent: 'Europe',
                age: 25,
                language: 'JavaScript',
            },
        ],
        true,
    ];

    const testCase4: TestCaseBoolean = [
        [
            {
                firstName: 'Daniel',
                lastName: 'J.',
                country: 'Aruba',
                continent: 'Americas',
                age: 42,
                language: 'Python',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 22,
                language: 'Ruby',
            },
            {
                firstName: 'Joao',
                lastName: 'D.',
                country: 'Portugal',
                continent: 'Europe',
                age: 25,
                language: 'JavaScript',
            },
        ],
        true,
    ];
    it.each([testCase1, testCase2, testCase3, testCase4])(
        'should return true if the number of any of the languages is at 2x more than the other',
        (developers, isDiverse) =>
            expect(isLanguageDiverse(developers)).toEqual(isDiverse),
    );
});
