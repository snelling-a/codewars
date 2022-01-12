import { orderFood } from '.';
import { Developer } from '../types';

type TestCase = [
    Developer[],
    {
        standard?: number;
        vegetarian?: number;
        vegan?: number;
        diabetic?: number;
        'gluten-intolerant'?: number;
    },
];
describe(orderFood.name, () => {
    const testCase1: TestCase = [
        [
            {
                firstName: 'Noah',
                lastName: 'M.',
                country: 'Switzerland',
                continent: 'Europe',
                age: 19,
                language: 'C',
                meal: 'vegetarian',
            },
            {
                firstName: 'Anna',
                lastName: 'R.',
                country: 'Liechtenstein',
                continent: 'Europe',
                age: 52,
                language: 'JavaScript',
                meal: 'standard',
            },
            {
                firstName: 'Ramona',
                lastName: 'R.',
                country: 'Paraguay',
                continent: 'Americas',
                age: 29,
                language: 'Ruby',
                meal: 'vegan',
            },
            {
                firstName: 'George',
                lastName: 'B.',
                country: 'England',
                continent: 'Europe',
                age: 81,
                language: 'C',
                meal: 'vegetarian',
            },
        ],
        { vegetarian: 2, standard: 1, vegan: 1 },
    ];

    it.each([testCase1])(
        'should return count of food options from a list of developers',
        (developers, foodOptions) =>
            expect(orderFood(developers)).toEqual(foodOptions),
    );
});
