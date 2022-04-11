import { order } from './yourOrderPlease';

describe(order.name, () => {
    it.each([
        ['is2 Thi1s T4est 3a', 'Thi1s is2 3a T4est'],
        [
            '4of Fo1r pe6ople g3ood th5e the2',
            'Fo1r the2 g3ood 4of th5e pe6ople',
        ],
        ['', ''],
        [
            'd4o dru7nken sh2all w5ith s8ailor wha1t 3we a6',
            'wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor',
        ],
        [
            'd4o ear9ly dru7nken sh2all i10n th11e morni12ng w5ith s8ailor wha1t 3we a6',
            'wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor ear9ly i10n th11e morni12ng',
        ],
        ['3 6 4 2 8 7 5 1 9', '1 2 3 4 5 6 7 8 9'],
    ])('should take "%s" and return "%s"', (input, expected) =>
        expect(order(input)).toEqual(expected),
    );
});
