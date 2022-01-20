/*
https://www.codewars.com/kata/591305520c6f9f5c93000052/

One of TypeScript’s core principles is that type-checking focuses on the shape that values have.
This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming
these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Task
You are given an interface IGeometricFigure:

interface IGeometricFigure {
// Calculates area of the figure
  area: () => number;
// Calculates perimeter of the figure
  perimeter: () => number;
}
Your task is to implement classes Square and Circle:

export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}
*/

// eslint-disable-next-line max-classes-per-file
interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
    constructor(readonly side: number) {}

    area(): number {
        return this.side ** 2;
    }

    perimeter(): number {
        return this.side * 4;
    }
}

export class Circle implements IGeometricFigure {
    constructor(readonly radius: number) {}

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
