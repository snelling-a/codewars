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

    it('should work correctly with empty objects', () => {
        const obj1 = {};
        const obj2 = { a: Math.random(), b: Math.random() };
        const intersection3 = intersect(obj1, obj2);
        expect(intersection3).toEqual({});
        const intersection4 = intersect(obj2, obj1);
        expect(intersection4).toEqual({});
        const intersection5 = intersect(obj1, obj1);
        expect(intersection5).toEqual({});
    });
});

it.each([
    [{ a: 1 }, { a: 2 }, { a: 1 }],
    [
        { a: 1, b: 2 },
        { a: 2, b: 3 },
        { a: 1, b: 2 },
    ],
    [
        { a: 1, b: 2 },
        { a: 2, b: 3, c: 4 },
        { a: 1, b: 2 },
    ],
    [
        { a: 1, b: 2 },
        { a: 2, b: 3, c: 4, d: 5 },
        { a: 1, b: 2 },
    ],
])('should return intersection of %p and %p as %p', (obj1, obj2, expected) => {
    expect(intersect(obj1, obj2)).toEqual(expected);
});
