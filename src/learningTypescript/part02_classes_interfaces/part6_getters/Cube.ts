import { Cuboid } from './Cuboid';

export class Cube extends Cuboid {
    constructor(length: number) {
        super(length, length, length);
    }
}
