import { IGeometricFigure } from './IGeometricFigure';

export class Circle implements IGeometricFigure {
    constructor(readonly radius: number) {}

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
