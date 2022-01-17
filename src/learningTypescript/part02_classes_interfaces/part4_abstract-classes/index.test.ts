import { Boa, Monkey, Parrot } from '.';

describe('Boa', () => {
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
