import { isRubyComing } from '.';
import { Developer } from '../types';

type TestCase = [Developer[], boolean];
describe(isRubyComing.name, () => {
    const testCase1: TestCase = [
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
        ],
        false,
    ];

    it.each([testCase1, testCase2])(
        'should determine if Ruby developers are coming',
        (developers, ruby) => expect(isRubyComing(developers)).toEqual(ruby),
    );
});
