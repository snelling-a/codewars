/*
https://www.codewars.com/kata/536a155256eb459b8700077e

Do you know how to make a spiral? Let's test it!
Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away
as it revolves around the point.

Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional
array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

1    2    3
8    9    4
7    6    5

N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7

N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

1   2   3   4   5
16  17  18  19  6
15  24  25  20  7
14  23  22  21  8
13  12  11  10  9
*/

const create2dArray = (height: number, width = height, fill: unknown = 0) =>
    Array.from({ length: height }, () => new Array(width).fill(fill));

export function createSpiral(N: unknown) {
    if (!Number.isInteger(N) || typeof N !== 'number' || N < 1) {
        return [];
    }

    const returnArray = create2dArray(N);

    const counter = { x: 0, y: 0, count: 1, direction: 'right' };
    let { x, y, count, direction } = counter;

    while (count <= N ** 2) {
        returnArray[x][y] = count;

        switch (direction) {
            case 'right':
                if (y + 1 < N && returnArray[x][y + 1] === 0) {
                    y += 1;
                } else {
                    direction = 'down';
                    x += 1;
                }
                break;
            case 'down':
                if (x + 1 < N && returnArray[x + 1][y] === 0) {
                    x += 1;
                } else {
                    direction = 'left';
                    y -= 1;
                }
                break;
            case 'left':
                if (y - 1 >= 0 && returnArray[x][y - 1] === 0) {
                    y -= 1;
                } else {
                    direction = 'up';
                    x -= 1;
                }
                break;
            case 'up':
                if (x - 1 >= 0 && returnArray[x - 1][y] === 0) {
                    x -= 1;
                } else {
                    direction = 'right';
                    y += 1;
                }
                break;
            default:
                break;
        }
        count += 1;
    }

    return returnArray;
}
