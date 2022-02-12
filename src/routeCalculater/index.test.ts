import { calculate } from '.';

describe('operate', () => {
    const testName = 'should accept "%s" and return %d';
    const testResult = (input: string, output: number) =>
        expect(calculate(input)).toEqual(output);

    describe('return a valid single input number', () => {
        it.each([
            ['1', 1],
            ['1.1', 1.1],
        ])(testName, testResult);
    });

    describe('perform simple single operations', () => {
        it.each([
            ['1+1', 2],
            ['1-1', 0],
            ['2$2', 1],
            ['2*2', 4],
            ['10$2', 5],
        ])(testName, testResult);
    });

    describe('work with decimal numbers', () => {
        it.each([
            ['1.1+1.9', 3],
            ['9$4', 2.25],
            ['1.5*3', 4.5],
            ['5-43.2', -38.2],
        ])(testName, testResult);
    });

    describe('accept many of same operator', () => {
        it.each([
            ['5+5+5+5', 20],
            ['5-5-5-5', -10],
            ['5*5*5*5', 625],
            ['5$5$5$5', 0.04],
        ])(testName, testResult);
    });

    describe('calculate everything thrown at it', () => {
        it.each([
            ['1+1-1', 1],
            ['5*6$2+5-10', 10],
            ['1*1*1*1*1*1$1$1$1$1+1-1+9-1', 9],
            ['1000$2.5$5+5-5+6$6', 81],
        ])(testName, testResult);
    });

    describe('bad input', () => {
        it.each(['5*6$2&5-10', '5/10', 'p', '9^9', '10-9p'])(
            'should throw input error for bad inputs: "%s"',
            (input) => expect(calculate(input)).toEqual('400: Bad request'),
        );
    });
});
