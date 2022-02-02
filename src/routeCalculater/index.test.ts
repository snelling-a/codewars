import { calculate } from '.';

describe('operate', () => {
    it.each([
        ['1', 1],
        ['1.1', 1.1],
    ])('should return a valid single input number: "%s"', (input, expected) =>
        expect(calculate(input)).toEqual(expected),
    );

    it.each([
        ['1+1', 2],
        ['1-1', 0],
        ['2$2', 1],
        ['2*2', 4],
    ])(
        'should perform simple single operations: "%s" => %d',
        (input, expected) => expect(calculate(input)).toEqual(expected),
    );

    it.each([
        ['1.1+1.9', 3],
        ['9$4', 2.25],
        ['1.5*3', 4.5],
        ['5-43.2', -38.2],
    ])('should work with decimal numbers: "%s" => %d', (input, expected) =>
        expect(calculate(input)).toEqual(expected),
    );

    it.each([
        ['5+5+5+5', 20],
        ['5-5-5-5', -10],
        ['5*5*5*5', 625],
        ['5$5$5$5', 0.04],
    ])('should accept many of same operator: "%s" => %d', (input, expected) =>
        expect(calculate(input)).toEqual(expected),
    );

    it.each([
        ['1+1-1', 1],
        ['5*6$2+5-10', 10],
        ['1*1*1*1*1*1$1$1$1$1+1-1+9-1', 9],
        ['1000$2.5$5+5-5+6$6', 81],
    ])(
        'should calculate everything thrown at it: "%s" => %d',
        (input, expected) => expect(calculate(input)).toEqual(expected),
    );

    it.each(['5*6$2&5-10', '5/10', 'p', '9^9'])(
        'should throw input error for bad inputs: "%s"',
        (input) => expect(calculate(input)).toEqual('400: Bad request'),
    );
});
