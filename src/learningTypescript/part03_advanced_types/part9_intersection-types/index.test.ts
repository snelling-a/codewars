import { intersect } from '.';

describe(intersect.name, () => {
    it('should contain properties only from first and second objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 2, b: 2 };
        const intersection = intersect(obj1, obj2);
        expect(intersection).toEqual({ a: 1 });
        const obj3 = { c: 3, d: 4 };
        const intersection2 = intersect(obj2, obj3);
        expect(intersection2).toEqual({});
    });

});
