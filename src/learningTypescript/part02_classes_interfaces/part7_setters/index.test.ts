import { Cube, ICuboid } from '.';

describe(`The ${Cube.name} class`, () => {
    let cube: ICuboid;

    it('should initialize properly', () => {
        cube = new Cube(1);

        expect(cube.length).toEqual(1);
        expect(cube.surfaceArea).toEqual(6);
        expect(cube.volume).toEqual(1);
    });

    it.each([
        [2, 24, 8],
        [100, 60_000, 1_000_000],
    ])(
        'should have working getters when length is set to %d',
        (length, surfaceArea, volume) => {
            cube.length = length;

            expect(cube.surfaceArea).toEqual(surfaceArea);
            expect(cube.volume).toEqual(volume);
        },
    );

    it.each([
        [54, 3, 27],
        [96, 4, 64],
    ])(
        'should have working getters when surfaceArea is set to %d',
        (surfaceArea, length, volume) => {
            cube.surfaceArea = surfaceArea;

            expect(cube.length).toEqual(length);
            expect(cube.volume).toEqual(volume);
        },
    );

    it.each([
        [125, 5, 150],
        [1000, 10, 600],
    ])(
        'should have working getters when volume is set to %d',
        (volume, length, surfaceArea) => {
            cube.volume = volume;

            expect(cube.length).toEqual(length);
            expect(cube.surfaceArea).toEqual(surfaceArea);
        },
    );
});
