import { IGeometricFigure } from './IGeometricFigure';

export class Square implements IGeometricFigure {
    constructor(readonly side: number) {}

    area(): number {
        return this.side ** 2;
    }

    perimeter(): number {
        return this.side * 4;
    }
}
