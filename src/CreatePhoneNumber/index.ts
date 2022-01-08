/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83

Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

export function createPhoneNumber(numbers: number[]): string {
    return `(${numbers.slice(0, 3).join('')}) ${numbers
        .slice(3, 6)
        .join('')}-${numbers.slice(6).join('')}`;

    // return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');

    // return numbers.reduce(
    //     (p, c) => p.replace('x', String(c)),
    //     '(xxx) xxx-xxxx',
    // );
}
