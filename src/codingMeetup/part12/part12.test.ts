import { LANGUAGE_LIST } from '../constants';
import { Developer } from '../types';
import { findAdmin } from './part12';

type TestCase = [typeof LANGUAGE_LIST[number], Developer[], Developer[]];

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

    const testDevelopers2: Developer[] = [
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
        {
            firstName: 'Noa',
            lastName: 'A.',
            country: 'Israel',
            continent: 'Asia',
            age: 20,
            language: 'Ruby',
            githubAdmin: 'no',
        },
        {
            firstName: 'Andrei',
            lastName: 'E.',
            country: 'Romania',
            continent: 'Europe',
            age: 21,
            language: 'C',
            githubAdmin: 'yes',
        },
        {
            firstName: 'Maria',
            lastName: 'S.',
            country: 'Peru',
            continent: 'Americas',
            age: 60,
            language: 'C',
            githubAdmin: 'yes',
        },
        {
            firstName: 'Lukas',
            lastName: 'X.',
            country: 'Croatia',
            continent: 'Europe',
            age: 75,
            language: 'JavaScript',
            githubAdmin: 'no',
        },
        {
            firstName: 'Chloe',
            lastName: 'K.',
            country: 'Guernsey',
            continent: 'Europe',
            age: 88,
            language: 'Ruby',
            githubAdmin: 'yes',
        },
        {
            firstName: 'Viktoria',
            lastName: 'W.',
            country: 'Bulgaria',
            continent: 'Europe',
            age: 98,
            language: 'PHP',
            githubAdmin: 'no',
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
        [
            'JavaScript',
            testDevelopers2,
            [
                {
                    age: 22,
                    continent: 'Americas',
                    country: 'Brazil',
                    firstName: 'Harry',
                    githubAdmin: 'yes',
                    language: 'JavaScript',
                    lastName: 'K.',
                },
                {
                    age: 34,
                    continent: 'Asia',
                    country: 'China',
                    firstName: 'Jing',
                    githubAdmin: 'yes',
                    language: 'JavaScript',
                    lastName: 'X.',
                },
            ],
        ],
        [
            'Ruby',
            testDevelopers2,
            [
                {
                    age: 88,
                    continent: 'Europe',
                    country: 'Guernsey',
                    firstName: 'Chloe',
                    githubAdmin: 'yes',
                    language: 'Ruby',
                    lastName: 'K.',
                },
            ],
        ],
        ['Python', testDevelopers2, []],
    ])(
        'should return the GitHub admins who code in %s',
        (language, developers, admins) =>
            expect(findAdmin(developers, language)).toEqual(admins),
    );
});
