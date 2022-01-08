/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044


Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
0 is neither positive nor negative.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

export function countPositivesSumNegatives(
    input: number[] | null,
): [number, number] | [] {
    if (input === null || input.length === 0) {
        return [];
    }

    return input.reduce(
        (output: [number, number], current) => {
            let [posCount, negSum] = output;

            if (current > 0) {
                posCount += 1;
            }

            if (current < 0) {
                negSum += current;
            }

            return [posCount, negSum];
        },
        [0, 0],
    );
}
