import { Circle, Square } from '.';

describe('The Square class', () => {
    it('should calculate area and perimeter correctly', () => {
        const square = new Square(1);
        expect(square.area()).toEqual(1);
        expect(square.perimeter()).toEqual(4);
    });
});

describe('The Circle class', () => {
    it('should calculate area and perimeter correctly', () => {
        const circle = new Circle(1);
        expect(circle.area()).toEqual(Math.PI);
        expect(circle.perimeter()).toEqual(2 * Math.PI);
    });
});
