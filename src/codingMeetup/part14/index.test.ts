import { orderFood } from '.';
import { Developer, FoodOptions } from '../types';

type TestCase = [Developer[], FoodOptions];

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

    const testCase2: TestCase = [
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
                meal: 'standard',
            },
            {
                firstName: 'Noel',
                lastName: 'O.',
                country: 'Albania',
                continent: 'Europe',
                age: 23,
                language: 'Python',
                meal: 'gluten-intolerant',
            },
            {
                firstName: 'Fatima',
                lastName: 'A.',
                country: 'Algeria',
                continent: 'Africa',
                age: 25,
                language: 'JavaScript',
                meal: 'standard',
            },
            {
                firstName: 'Laia',
                lastName: 'P.',
                country: 'Andorra',
                continent: 'Europe',
                age: 55,
                language: 'Ruby',
                meal: 'gluten-intolerant',
            },
            {
                firstName: 'Sofia',
                lastName: 'I.',
                country: 'Argentina',
                continent: 'Americas',
                age: 35,
                language: 'Java',
                meal: 'diabetic',
            },
            {
                firstName: 'Nareh',
                lastName: 'Q.',
                country: 'Armenia',
                continent: 'Europe',
                age: 30,
                language: 'Clojure',
                meal: 'standard',
            },
            {
                firstName: 'Daniel',
                lastName: 'J.',
                country: 'Aruba',
                continent: 'Americas',
                age: 42,
                language: 'JavaScript',
                meal: 'standard',
            },
        ],
        {
            diabetic: 1,
            'gluten-intolerant': 2,
            standard: 5,
            vegan: 1,
            vegetarian: 1,
        },
    ];

    it.each([testCase1, testCase2])(
        'should return count of food options from a list of developers',
        (developers, foodOptions) =>
            expect(orderFood(developers)).toEqual(foodOptions),
    );
});
