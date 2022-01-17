import { Circle, Square } from '.';

const randomValues = Array(100)
    .fill(null)
    .map(() => Math.random() * 100);

describe(`The ${Square.name} class`, () => {
    it('should calculate area and perimeter correctly', () => {
        const square = new Square(1);
        expect(square.area()).toEqual(1);
        expect(square.perimeter()).toEqual(4);
    });

    it.each(randomValues.slice(0, 50))(
        'should calculate area and perimeter correctly for side length: %s',
        (side) => {
            const square = new Square(side);
            expect(square.area()).toEqual(side ** 2);
            expect(square.perimeter()).toEqual(side * 4);
        },
    );
});

describe(`The ${Circle.name} class`, () => {
    it('should calculate area and perimeter correctly', () => {
        const circle = new Circle(1);
        expect(circle.area()).toEqual(Math.PI);
        expect(circle.perimeter()).toEqual(2 * Math.PI);
    });

    it.each(randomValues.slice(50))(
        'should calculate area and perimeter correctly for radius: %s',
        (radius) => {
            const circle = new Circle(radius);
            expect(circle.area()).toEqual(Math.PI * radius ** 2);
            expect(circle.perimeter()).toEqual(2 * Math.PI * radius);
        },
    );
});
