import { Animal } from './Animal';

export class Shark extends Animal {
    constructor(
        public name: string,
        public age: number,
        public status: string,
    ) {
        super(name, age, 0, 'shark', status);
    }
}
