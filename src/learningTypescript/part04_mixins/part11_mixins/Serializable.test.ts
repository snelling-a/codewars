import { Person } from './Person';
import { Robot } from './Robot';
import { Serializable } from './Serializable';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            // eslint-disable-next-line no-param-reassign
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(Person, [Serializable]);

describe(`${Person.name}`, () => {
    it('should serialize/deserialize correctly', () => {
        const sourcePerson = new Person('John', 'Galt');
        const serializedPerson = sourcePerson.serialize();
        const resultPerson = new Person();
        resultPerson.deserialize(serializedPerson);
        expect(resultPerson.firstName).toEqual('John');
        expect(resultPerson.lastName).toEqual('Galt');
    });
});

applyMixins(Robot, [Serializable]);

describe(`${Robot.name}`, () => {
    it('should serialize/deserialize correctly', () => {
        const sourceRobot = new Robot('Bender');
        const serializedRobot = sourceRobot.serialize();
        const resultRobot = new Robot();
        resultRobot.deserialize(serializedRobot);
        expect(resultRobot.name).toEqual('Bender');
        expect(resultRobot.id).toEqual(sourceRobot.id);
    });
});
