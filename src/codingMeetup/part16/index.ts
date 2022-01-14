/*
https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details

You will be given an array of objects representing data about developers who have signed up to attend the next
coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details
(marked with a null value). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]
Notes:
    At most only one of the values will be null.
    Preserve the order of the original list.
    Return an empty array [] if there is no developer with missing details.
    The input array will always be valid and formatted as in the example above.
*/

import { Developer } from '../types';

export function askForMissingDetails(list: Developer[]) {
    return list
        .map<Developer | null>((developer) => {
            const missing = Object.keys(developer).find(
                (key) => developer[key as keyof typeof developer] === null,
            );

            if (missing) {
                return {
                    ...developer,
                    question: `Hi, could you please provide your ${missing}.`,
                };
            }

            return null;
        })
        .filter(Boolean);
}
