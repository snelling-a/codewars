import { Animal } from './Animal';
import { Cat } from './Cat';
import { Dog } from './Dog';
import { Shark } from './Shark';

describe(`The ${Animal.name} class`, () => {
    it('should construct an object properly', () => {
        const octopussy = new Animal(
            'Octopussy',
            2,
            8,
            'octopus',
            "I'm suffering a sting",
        );
        expect(octopussy.name).toEqual('Octopussy');
        expect(octopussy.age).toEqual(2);
        expect(octopussy.legs).toEqual(8);
        expect(octopussy.species).toEqual('octopus');
        expect(octopussy.status).toEqual("I'm suffering a sting");
        expect(octopussy.introduce()).toEqual(
            'Hello, my name is Octopussy and I am 2 years old.',
        );
    });
});

describe(`The ${Shark.name} class`, () => {
    it.each([
        ['Billy', 3, 'Alive and well'],
        ['Charles', 8, 'Finding a mate'],
    ])(
        `should construct a ${Shark.name} with name: '%s', age %d, and status: '%s'`,
        (name, age, status) => {
            const shark = new Shark(name, age, status);

            expect(shark.name).toEqual(name);
            expect(shark.age).toEqual(age);
            expect(shark.legs).toEqual(0);
            expect(shark.species).toEqual('shark');
            expect(shark.status).toEqual(status);
            expect(shark.introduce()).toEqual(
                `Hello, my name is ${name} and I am ${age} years old.`,
            );
        },
    );
});

describe(`The ${Cat.name} class`, () => {
    it.each([
        ['Cathy', 7, 'Playing with a ball of yarn'],
        ['Spitsy', 6, 'sleeping'],
    ])(
        `should construct a ${Cat.name} with name: '%s', age %d, and status: '%s'`,
        (name, age, status) => {
            const cat = new Cat(name, age, status);

            expect(cat.name).toEqual(name);
            expect(cat.age).toEqual(age);
            expect(cat.legs).toEqual(4);
            expect(cat.species).toEqual('cat');
            expect(cat.status).toEqual(status);
            expect(cat.introduce()).toEqual(
                `Hello, my name is ${name} and I am ${age} years old.  Meow meow!`,
            );
        },
    );
});

describe(`The ${Dog.name} class`, () => {
    it('should construct an object properly', () => {
        const doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');
        expect(doug.name).toEqual('Doug');
        expect(doug.age).toEqual(12);
        expect(doug.legs).toEqual(4);
        expect(doug.species).toEqual('dog');
        expect(doug.status).toEqual('Serving his master');
        expect(doug.introduce()).toEqual(
            'Hello, my name is Doug and I am 12 years old.',
        );
        expect(doug.greetMaster()).toEqual('Hello Eliza');
    });
});
