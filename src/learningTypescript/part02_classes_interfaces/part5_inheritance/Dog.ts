import { Animal } from './Animal';

export class Dog extends Animal {
    constructor(
        public name: string,
        public age: number,
        public status: string,
        public master: string,
    ) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}
