/*
https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding
meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest.
In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:
    The input array will always be valid and formatted as in the example above.
*/

import { Developer } from '../types';

export function findSenior(list: Developer[]) {
    return list.reduce<Developer[]>(
        (a, b) =>
            b.age === Math.max(...list.map((d) => d.age)) ? [...a, b] : a,
        [],
    );
}