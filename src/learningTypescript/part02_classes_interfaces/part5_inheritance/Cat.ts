import { Animal } from '.';

export class Cat extends Animal {
    constructor(
        public name: string,
        public age: number,
        public status: string,
    ) {
        super(name, age, 4, 'cat', status);
    }

    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}
