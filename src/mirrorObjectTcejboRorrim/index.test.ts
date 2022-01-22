import { mirror } from '.';

const style = `style="display: inline-block; transform: scale(-1, 1)"`;
const log = (m) => console.log(m, ' ', `<span ${style}>${m}</span>`);

// Tests
describe('mirror', () => {
    it('basic', () => {
        const expected = {
            abc: 'cba',
            arara: 'arara',
        };
        const actual = mirror({
            abc: undefined,
            arara: undefined,
        });

        console.log('Expected');
        Object.keys(expected).forEach((k) => log(k));

        expect(actual).toEqual (expected);
    });
});
