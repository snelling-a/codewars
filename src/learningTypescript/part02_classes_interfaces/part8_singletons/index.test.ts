import { SingletonCounter } from '.';

describe(`The ${SingletonCounter.name} class`, () => {
    let count = 4;

    it('should have correct inc() method', () => {
        const counter = SingletonCounter.getInstance();
        expect(counter.inc()).toEqual(1);
        expect(counter.inc()).toEqual(2);
        expect(counter.inc()).toEqual(3);
        expect(counter.inc()).toEqual(4);
    });

    it('should work as a singleton', () => {
        const counter1 = SingletonCounter.getInstance();
        const counter2 = SingletonCounter.getInstance();
        expect(counter1.inc()).toEqual((count += 1));
        expect(counter2.inc()).toEqual((count += 1));
        expect(counter1.inc()).toEqual((count += 1));
        expect(counter2.inc()).toEqual((count += 1));
    });
});
