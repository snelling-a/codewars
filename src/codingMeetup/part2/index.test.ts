import { greetDevelopers } from '.';
import { TestCaseDeveloper } from '../types';

describe(greetDevelopers.name, () => {
    const testCase: TestCaseDeveloper = [
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
        [
            {
                firstName: 'Sofia',
                lastName: 'I.',
                country: 'Argentina',
                continent: 'Americas',
                age: 35,
                language: 'Java',
                greeting: 'Hi Sofia, what do you like the most about Java?',
            },
            {
                firstName: 'Lukas',
                lastName: 'X.',
                country: 'Croatia',
                continent: 'Europe',
                age: 35,
                language: 'Python',
                greeting: 'Hi Lukas, what do you like the most about Python?',
            },
            {
                firstName: 'Madison',
                lastName: 'U.',
                country: 'United States',
                continent: 'Americas',
                age: 32,
                language: 'Ruby',
                greeting: 'Hi Madison, what do you like the most about Ruby?',
            },
        ],
    ];

    it('should properly greet all the developers', () => {
        const [developers, expected] = testCase;

        expect(greetDevelopers(developers)).toEqual(expected);
    });
});
