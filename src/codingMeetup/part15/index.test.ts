import { findOddNames } from '.';
import { fullList } from '../fullList';
import { Developer } from '../types';

type TestCase = [Developer[], Developer[]];
describe(findOddNames.name, () => {
    const testCase1: TestCase = [
        [
            {
                firstName: 'Aba',
                lastName: 'N.',
                country: 'Ghana',
                continent: 'Africa',
                age: 21,
                language: 'Python',
            },
            {
                firstName: 'Abb',
                lastName: 'O.',
                country: 'Israel',
                continent: 'Asia',
                age: 39,
                language: 'Java',
            },
        ],
        [
            {
                firstName: 'Abb',
                lastName: 'O.',
                country: 'Israel',
                continent: 'Asia',
                age: 39,
                language: 'Java',
            },
        ],
    ];

    const testCase2: TestCase = [
        [
            {
                firstName: 'Aba',
                lastName: 'N.',
                country: 'Ghana',
                continent: 'Africa',
                age: 21,
                language: 'Python',
            },
        ],
        [],
    ];

    const testCase3: TestCase = [
        [
            {
                firstName: 'Harry',
                lastName: 'K.',
                country: 'Brazil',
                continent: 'Americas',
                age: 19,
                language: 'Python',
            },
        ],
        [],
    ];

    const testCase4: TestCase = [
        [
            {
                firstName: 'Kseniya',
                lastName: 'T.',
                country: 'Belarus',
                continent: 'Europe',
                age: 29,
                language: 'Ruby',
            },
            {
                firstName: 'Amar',
                lastName: 'V.',
                country: 'Bosnia and Herzegovina',
                continent: 'Europe',
                age: 32,
                language: 'Ruby',
            },
        ],
        [
            {
                age: 32,
                continent: 'Europe',
                country: 'Bosnia and Herzegovina',
                firstName: 'Amar',
                language: 'Ruby',
                lastName: 'V.',
            },
        ],
    ];

    const testCase5: TestCase = [
        [
            {
                firstName: 'Sofia',
                lastName: 'P.',
                country: 'Italy',
                continent: 'Europe',
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
                age: 40,
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
                country: 'Croatia',
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
                age: 59,
                continent: 'Europe',
                country: 'Romania',
                firstName: 'Andrei',
                language: 'C',
                lastName: 'E.',
            },
            {
                age: 88,
                continent: 'Europe',
                country: 'Guernsey',
                firstName: 'Chloe',
                language: 'Ruby',
                lastName: 'K.',
            },
            {
                age: 98,
                continent: 'Europe',
                country: 'Bulgaria',
                firstName: 'Viktoria',
                language: 'PHP',
                lastName: 'W.',
            },
        ],
    ];

    const fullListTestCase: TestCase = [
        fullList,
        [
            {
                age: 55,
                continent: 'Europe',
                country: 'Andorra',
                firstName: 'Laia',
                language: 'Ruby',
                lastName: 'P.',
            },
            {
                age: 42,
                continent: 'Americas',
                country: 'Aruba',
                firstName: 'Daniel',
                language: 'JavaScript',
                lastName: 'J.',
            },
            {
                age: 69,
                continent: 'Oceania',
                country: 'Australia',
                firstName: 'Oliver',
                language: 'PHP',
                lastName: 'Q.',
            },
            {
                age: 32,
                continent: 'Europe',
                country: 'Bosnia and Herzegovina',
                firstName: 'Amar',
                language: 'Ruby',
                lastName: 'V.',
            },
            {
                age: 98,
                continent: 'Europe',
                country: 'Bulgaria',
                firstName: 'Viktoria',
                language: 'PHP',
                lastName: 'W.',
            },
            {
                age: 37,
                continent: 'Americas',
                country: 'Chile',
                firstName: 'Agustín',
                language: 'C',
                lastName: 'M.',
            },
            {
                age: 42,
                continent: 'Europe',
                country: 'Czech Republic',
                firstName: 'Jakub',
                language: 'Java',
                lastName: 'Z.',
            },
            {
                age: 89,
                continent: 'Africa',
                country: 'Egypt',
                firstName: 'Mariam',
                language: 'Python',
                lastName: 'B.',
            },
            {
                age: 21,
                continent: 'Europe',
                country: 'England',
                firstName: 'George',
                language: 'C',
                lastName: 'B.',
            },
            {
                age: 28,
                continent: 'Europe',
                country: 'Faroe Islands',
                firstName: 'Liam',
                language: 'Python',
                lastName: 'D.',
            },
            {
                age: 22,
                continent: 'Europe',
                country: 'France',
                firstName: 'Louise',
                language: 'Java',
                lastName: 'F.',
            },
            {
                age: 39,
                continent: 'Europe',
                country: 'Germany',
                firstName: 'Mia',
                language: 'Ruby',
                lastName: 'H.',
            },
            {
                age: 88,
                continent: 'Europe',
                country: 'Guernsey',
                firstName: 'Chloe',
                language: 'Ruby',
                lastName: 'K.',
            },
            {
                age: 22,
                continent: 'Americas',
                country: 'Haiti',
                firstName: 'Stevenson',
                language: 'Ruby',
                lastName: 'O.',
            },
            {
                age: 42,
                continent: 'Americas',
                country: 'Jamaica',
                firstName: 'Jayden',
                language: 'JavaScript',
                lastName: 'P.',
            },
            {
                age: 43,
                continent: 'Asia',
                country: 'Japan',
                firstName: 'Sou',
                language: 'PHP',
                lastName: 'B.',
            },
            {
                age: 22,
                continent: 'Asia',
                country: 'Kazakhstan',
                firstName: 'Yerasyl',
                language: 'Ruby',
                lastName: 'D.',
            },
            {
                age: 39,
                continent: 'Africa',
                country: 'Libya',
                firstName: 'Aya',
                language: 'C',
                lastName: 'D.',
            },
            {
                age: 19,
                continent: 'Europe',
                country: 'Lithuania',
                firstName: 'Emilija',
                language: 'Python',
                lastName: 'S.',
            },
            {
                age: 21,
                continent: 'Asia',
                country: 'Malaysia',
                firstName: 'Nor',
                language: 'Clojure',
                lastName: 'E.',
            },
            {
                age: 129,
                continent: 'Europe',
                country: 'Malta',
                firstName: 'Luke',
                language: 'PHP',
                lastName: 'V.',
            },
            {
                age: 39,
                continent: 'Europe',
                country: 'Montenegro',
                firstName: 'Sara',
                language: 'C',
                lastName: 'Y.',
            },
            {
                age: 90,
                continent: 'Africa',
                country: 'Morocco',
                firstName: 'Mohamed',
                language: 'Ruby',
                lastName: 'F.',
            },
            {
                age: 99,
                continent: 'Americas',
                country: 'Paraguay',
                firstName: 'Ramon',
                language: 'Ruby',
                lastName: 'R.',
            },
            {
                age: 81,
                continent: 'Asia',
                country: 'Philippines',
                firstName: 'Althea',
                language: 'Python',
                lastName: 'I.',
            },
            {
                age: 65,
                continent: 'Europe',
                country: 'Portugal',
                firstName: 'Joao',
                language: 'JavaScript',
                lastName: 'D.',
            },
            {
                age: 70,
                continent: 'Americas',
                country: 'Puerto Rico',
                firstName: 'Victoria',
                language: 'Python',
                lastName: 'T.',
            },
            {
                age: 59,
                continent: 'Europe',
                country: 'Romania',
                firstName: 'Andrei',
                language: 'C',
                lastName: 'E.',
            },
            {
                age: 52,
                continent: 'Europe',
                country: 'Scotland',
                firstName: 'Mark',
                language: 'JavaScript',
                lastName: 'G.',
            },
            {
                age: 28,
                continent: 'Europe',
                country: 'Slovakia',
                firstName: 'Jakub',
                language: 'Java',
                lastName: 'I.',
            },
            {
                age: 39,
                continent: 'Europe',
                country: 'Slovenia',
                firstName: 'Luka',
                language: 'Clojure',
                lastName: 'J.',
            },
            {
                age: 39,
                continent: 'Europe',
                country: 'Spain',
                firstName: 'Hugo',
                language: 'Python',
                lastName: 'K.',
            },
            {
                age: 32,
                continent: 'Europe',
                country: 'Sweden',
                firstName: 'William',
                language: 'Java',
                lastName: 'L.',
            },
            {
                age: 35,
                continent: 'Asia',
                country: 'Taiwan',
                firstName: 'Shufen',
                language: 'PHP',
                lastName: 'L.',
            },
            {
                age: 42,
                continent: 'Africa',
                country: 'Tunisia',
                firstName: 'Mehdi',
                language: 'Python',
                lastName: 'H.',
            },
            {
                age: 29,
                continent: 'Europe',
                country: 'Ukraine',
                firstName: 'Artem',
                language: 'Java',
                lastName: 'O.',
            },
            {
                age: 19,
                continent: 'Americas',
                country: 'Uruguay',
                firstName: 'Agustin',
                language: 'JavaScript',
                lastName: 'V.',
            },
            {
                age: 69,
                continent: 'Europe',
                country: 'Wales',
                firstName: 'Oliver',
                language: 'JavaScript',
                lastName: 'P.',
            },
        ],
    ];

    it.each([
        testCase1,
        testCase2,
        testCase3,
        testCase4,
        testCase5,
        fullListTestCase,
    ])('should return developers with "odd" names', (developers, expected) =>
        expect(findOddNames(developers)).toEqual(expected),
    );
});
