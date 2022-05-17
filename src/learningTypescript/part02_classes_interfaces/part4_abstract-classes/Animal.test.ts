import { Boa } from './Boa';
import { Monkey } from './Monkey';
import { Parrot } from './Parrot';

describe(Boa.name, () => {
    it('should be measured in Monkeys correctly', () => {
        const boa = new Boa();
        const monkey = new Monkey();
        expect(boa.convertTo(monkey)).toEqual(5);
    });

    it('should be measured in Parrots correctly', () => {
        const boa = new Boa();
        const parrot = new Parrot();
        expect(boa.convertTo(parrot)).toEqual(38);
    });
});

describe(Monkey.name, () => {
    it('should be measured in Boas correctly', () => {
        const monkey = new Monkey();
        const boa = new Boa();
        expect(monkey.convertTo(boa)).toEqual(1 / 5);
    });

    it('should be measured in Parrots correctly', () => {
        const monkey = new Monkey();
        const parrot = new Parrot();
        expect(monkey.convertTo(parrot)).toEqual(38 / 5);
    });
});

describe(Parrot.name, () => {
    it('should be measured in Boas correctly', () => {
        const parrot = new Parrot();
        const boa = new Boa();
        expect(parrot.convertTo(boa)).toEqual(1 / 38);
    });

    it('should be measured in Monkeys correctly', () => {
        const parrot = new Parrot();
        const monkey = new Monkey();
        expect(parrot.convertTo(monkey)).toEqual(5 / 38);
    });
});
