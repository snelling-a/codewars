import { reverseSeq } from '.';

describe(reverseSeq.name, () => {
    it('should pass a simple test', () =>
        expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]));
});
