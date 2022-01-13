import { askForMissingDetails } from '.';
import { TestCaseDeveloper } from '../types';

describe(askForMissingDetails.name, () => {
    const testCase1: TestCaseDeveloper = [
        [
            {
                firstName: null,
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
                language: null,
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
        [
            {
                firstName: null,
                lastName: 'I.',
                country: 'Argentina',
                continent: 'Americas',
                age: 35,
                language: 'Java',
                question: 'Hi, could you please provide your firstName.',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: 'Croatia',
                continent: 'Europe',
                age: 35,
                language: null,
                question: 'Hi, could you please provide your language.',
            },
        ],
    ];

    const testCase2: TestCaseDeveloper = [
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
        [],
    ];

    const testCase3: TestCaseDeveloper = [
        [
            {
                firstName: null,
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: 'Python',
            },
        ],
        [
            {
                firstName: null,
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: 'Python',
                question: 'Hi, could you please provide your firstName.',
            },
        ],
    ];

    const testCase4: TestCaseDeveloper = [
        [
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: null,
                continent: 'Europe',
                age: 29,
                language: 'Ruby',
            },
            {
                firstName: 'Amar',
                lastName: null,
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: 'Ruby',
            },
        ],
        [
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: null,
                continent: 'Europe',
                age: 29,
                language: 'Ruby',
                question: 'Hi, could you please provide your country.',
            },
            {
                firstName: 'Amar',
                lastName: null,
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: 'Ruby',
                question: 'Hi, could you please provide your lastName.',
            },
        ],
    ];

    const testCase5: TestCaseDeveloper = [
        [
            {
                firstName: 'Sofia',
                lastName: 'P.',
                country: 'Italy',
                continent: null,
                age: 41,
                language: 'Clojure',
            },
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 29,
                language: 'JavaScript',
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
                firstName: 'Noa',
                lastName: 'A.',
                country: 'Israel',
                continent: 'Asia',
                age: null,
                language: 'Ruby',
            },
            {
                firstName: 'Andrei',
                lastName: 'E.',
                country: 'Romania',
                continent: 'Europe',
                age: 59,
                language: 'C',
            },
            {
                firstName: 'Maria',
                lastName: 'S.',
                country: 'Peru',
                continent: 'Americas',
                age: 60,
                language: 'C',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: null,
                continent: 'Europe',
                age: 75,
                language: 'Python',
            },
            {
                firstName: 'Chloe',
                lastName: 'K.',
                country: 'Guernsey',
                continent: 'Europe',
                age: 88,
                language: 'Ruby',
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
                firstName: 'Piotr',
                lastName: 'B.',
                country: 'Poland',
                continent: 'Europe',
                age: 128,
                language: 'JavaScript',
            },
        ],
        [
            {
                age: 41,
                continent: null,
                country: 'Italy',
                firstName: 'Sofia',
                language: 'Clojure',
                lastName: 'P.',
                question: 'Hi, could you please provide your continent.',
            },
            {
                age: null,
                continent: 'Asia',
                country: 'Israel',
                firstName: 'Noa',
                language: 'Ruby',
                lastName: 'A.',
                question: 'Hi, could you please provide your age.',
            },
            {
                age: 75,
                continent: 'Europe',
                country: null,
                firstName: 'Lukas',
                language: 'Python',
                lastName: 'X.',
                question: 'Hi, could you please provide your country.',
            },
        ],
    ];

    const testCase6: TestCaseDeveloper = [
        [
            {
                firstName: 'Paulo',
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: 'Python',
            },
        ],
        [],
    ];

    it.each([testCase1, testCase2, testCase3, testCase4, testCase5, testCase6])(
        'should ask a question if data is not given',
        (developers, expected) =>
            expect(askForMissingDetails(developers)).toEqual(expected),
    );
});
