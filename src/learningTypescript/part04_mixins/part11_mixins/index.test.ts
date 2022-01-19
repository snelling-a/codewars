/* eslint-disable max-classes-per-file */
import { Serializable } from '.';

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

class Person implements Serializable {
    constructor(public firstName?: string, public lastName?: string) {}

    // @ts-ignore strictPropertyInitialization
    serialize: () => string;

    // @ts-ignore strictPropertyInitialization
    deserialize: (source: string) => void;
}

applyMixins(Person, [Serializable]);

describe('Person', () => {
    it('should serialize/deserialize correctly', () => {
        const sourcePerson = new Person('John', 'Galt');
        const serializedPerson = sourcePerson.serialize();
        const resultPerson = new Person();
        resultPerson.deserialize(serializedPerson);
        expect(resultPerson.firstName).toEqual('John');
        expect(resultPerson.lastName).toEqual('Galt');
    });
});

class Robot implements Serializable {
    id: string;

    constructor(public name?: string) {
        this.id = Math.random().toString(36).substring(7);
    }

    // @ts-ignore strictPropertyInitialization
    serialize: () => string;

    // @ts-ignore strictPropertyInitialization
    deserialize: (source: string) => void;
}

applyMixins(Robot, [Serializable]);

describe('Robot', () => {
    it('should serialize/deserialize correctly', () => {
        const sourceRobot = new Robot('Bender');
        const serializedRobot = sourceRobot.serialize();
        const resultRobot = new Robot();
        resultRobot.deserialize(serializedRobot);
        expect(resultRobot.name).toEqual('Bender');
        expect(resultRobot.id).toEqual(sourceRobot.id);
    });
});
