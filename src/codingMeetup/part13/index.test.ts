import { isLanguageDiverse } from '.';
import { fullList } from '../fullList';
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

    const testCaseFullList: TestCaseBoolean = [fullList, true];

    const testCaseNull: TestCaseBoolean = [
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
                firstName: 'Nareh',
                lastName: 'Q.',
                country: 'Armenia',
                continent: 'Europe',
                age: 80,
                language: 'Clojure',
            },
            {
                firstName: 'Oliver',
                lastName: 'Q.',
                country: 'Australia',
                continent: 'Oceania',
                age: 69,
                language: 'PHP',
            },
            {
                firstName: 'Lukas',
                lastName: 'R.',
                country: 'Austria',
                continent: 'Europe',
                age: 89,
                language: 'C',
            },
            {
                firstName: 'Zahra',
                lastName: 'S.',
                country: 'Azerbaijan',
                continent: 'Europe',
                age: 22,
                language: 'Java',
            },
            {
                firstName: 'Viktoria',
                lastName: 'W.',
                country: 'Bulgaria',
                continent: 'Europe',
                age: 98,
                language: 'PHP',
            },
            {
                firstName: 'Thomas',
                lastName: 'L.',
                country: 'Canada',
                continent: 'Americas',
                age: 38,
                language: 'Java',
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
                firstName: 'Maria',
                lastName: 'Y.',
                country: 'Cyprus',
                continent: 'Europe',
                age: 30,
                language: 'Java',
            },
            {
                firstName: 'Jakub',
                lastName: 'Z.',
                country: 'Czech Republic',
                continent: 'Europe',
                age: 42,
                language: 'Java',
            },
        ],
        false,
    ];

    it.each([
        testCase1,
        testCase2,
        testCase3,
        testCase4,
        testCaseFullList,
        testCaseNull,
    ])(
        'should return true if the number of any of the languages is at 2x more than the other',
        (developers, isDiverse) =>
            expect(isLanguageDiverse(developers)).toEqual(isDiverse),
    );
});
