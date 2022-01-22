import {
    Color,
    var1Boolean,
    var2Decimal,
    var3Hex,
    var4Binary,
    var5Octal,
    var6String,
    var7Array,
    var8NumericArray,
    var9Tuple,
    var10Enum,
    var11ArrayOfAny,
    var12VoidFunction,
    var13Null,
    var14Undefined,
    var15NeverFunction,
} from '.';

describe('Checking variables', () => {
    it('var1Boolean should be equal to true', () => {
        expect(var1Boolean).toEqual(true);
    });

    it('var2Decimal should be equal to 13', () => {
        expect(var2Decimal).toEqual(13);
    });

    it('var3Hex should be equal to 0xf00d', () => {
        expect(var3Hex).toEqual(0xf0_0d);
    });

    it('var4Binary should be equal to 0b111111', () => {
        expect(var4Binary).toEqual(0b11_1111);
    });

    it('var5Octal should be equal to 0o744', () => {
        expect(var5Octal).toEqual(0o7_4_4);
    });

    it('var6String should be equal to "Hello, world!"', () => {
        expect(var6String).toEqual('Hello, world!');
    });

    it('var7Array should be equal to [1, "test", {a: 3}, 4, 5]', () => {
        expect(var7Array).toEqual([1, 'test', { a: 3 }, 4, 5]);
    });

    it('var8NumericArray should be equal to [1, 2, 3, 4, 5]', () => {
        expect(var8NumericArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('var9Tuple should be equal to ["key", 12345]', () => {
        expect(var9Tuple).toEqual(['key', 12_345]);
    });

    it('var10Enum should be equal to Color.Blue', () => {
        expect(var10Enum).toEqual(Color.Blue);
    });

    it('var11ArrayOfAny should be equal to [1, "test", {a: 3}, 4, 5]', () => {
        expect(var11ArrayOfAny).toEqual([1, 'test', { a: 3 }, 4, 5]);
    });

    it('var12VoidFunction should be void function', () => {
        expect(typeof var12VoidFunction).toEqual('function');
        expect(var12VoidFunction()).toEqual(undefined);
    });

    it('var13Null should be equal to null', () => {
        expect(var13Null).toEqual(null);
    });

    it('var14Undefined should be equal to undefined', () => {
        expect(var14Undefined).toEqual(undefined);
    });

    it('var15NeverFunction should be never function', () => {
        expect(typeof var15NeverFunction).toEqual('function');
        try {
            expect(var15NeverFunction()).toEqual(undefined);
        } catch (e) {
            //
        }
    });
});
