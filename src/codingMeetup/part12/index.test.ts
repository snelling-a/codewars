import { findAdmin } from '.';
import { Developer } from '../types';

type TestCase = [string, Developer[], Developer[]];
describe(findAdmin.name, () => {
    const testDevelopers: Developer[] = [
        {
            firstName: 'Harry',
            lastName: 'K.',
            country: 'Brazil',
            continent: 'Americas',
            age: 22,
            language: 'JavaScript',
            githubAdmin: 'yes',
        },
        {
            firstName: 'Kseniya',
            lastName: 'T.',
            country: 'Belarus',
            continent: 'Europe',
            age: 49,
            language: 'Ruby',
            githubAdmin: 'no',
        },
        {
            firstName: 'Jing',
            lastName: 'X.',
            country: 'China',
            continent: 'Asia',
            age: 34,
            language: 'JavaScript',
            githubAdmin: 'yes',
        },
        {
            firstName: 'Piotr',
            lastName: 'B.',
            country: 'Poland',
            continent: 'Europe',
            age: 128,
            language: 'JavaScript',
            githubAdmin: 'no',
        },
    ];

    it.each<TestCase>([
        [
            'JavaScript',
            testDevelopers,
            [
                {
                    firstName: 'Harry',
                    lastName: 'K.',
                    country: 'Brazil',
                    continent: 'Americas',
                    age: 22,
                    language: 'JavaScript',
                    githubAdmin: 'yes',
                },
                {
                    firstName: 'Jing',
                    lastName: 'X.',
                    country: 'China',
                    continent: 'Asia',
                    age: 34,
                    language: 'JavaScript',
                    githubAdmin: 'yes',
                },
            ],
        ],
        ['Ruby', testDevelopers, []],
        ['Python', testDevelopers, []],
    ])(
        'should return the GitHub admins who code in %s',
        (language, developers, admins) =>
            expect(findAdmin(developers, language)).toEqual(admins),
    );
});
