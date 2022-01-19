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
