/*
https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages

You will be given an array of objects representing data about developers who have signed up to attend the next
coding meetup that you are organising.

Your task is to return an object which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object:

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:
    The order of the languages in the object does not matter.
    The count value should be a valid number.
    The input array will always be valid and formatted as in the example above.
*/

import { Developer, LanguageCounts } from '../types';

export function countLanguages(list: Developer[]) {
    return list.reduce<LanguageCounts>((languages, { language }) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const devLang = languages[language!];

        if (devLang) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return { ...languages, [language!]: devLang + 1 };
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return { ...languages, [language!]: 1 };
    }, {});
}
