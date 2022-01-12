import { askForMissingDetails } from '.';
import { Developer } from '../types';

type TestCase = [Developer[], Developer[]];
describe(askForMissingDetails.name, () => {
    const testCase1: TestCase = [
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

    const testCase2: TestCase = [
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

    it.each([testCase1, testCase2])(
        'should ask a question if data is not given',
        (developers, expected) =>
            expect(askForMissingDetails(developers)).toEqual(expected),
    );
});
