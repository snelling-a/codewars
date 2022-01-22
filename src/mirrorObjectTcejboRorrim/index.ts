/*
https://www.codewars.com/kata/586305e8916e244b66001a93

Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx

"You cannot change the original object, because if you did that the reflection would change."
*/

export const mirror = (obj: Record<string, string | undefined>) =>
    Object.keys(obj).reduce(
        (acc, key) => ({ ...acc, [key]: key.split('').reverse().join('') }),
        {},
    );
