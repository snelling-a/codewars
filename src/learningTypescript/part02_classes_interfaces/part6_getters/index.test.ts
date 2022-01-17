import { Cube, Cuboid } from '.';

describe(`class ${Cuboid.name}`, () => {
    it('should initialize properly and have working getters', () => {
        const cuboid = new Cuboid(1, 2, 3);
        expect(cuboid.length).toEqual(1);
        expect(cuboid.width).toEqual(2);
        expect(cuboid.height).toEqual(3);
        expect(cuboid.volume).toEqual(6);
        expect(cuboid.surfaceArea).toEqual(22);

        cuboid.length = 4;
        expect(cuboid.volume).toEqual(24);
        expect(cuboid.surfaceArea).toEqual(52);

        cuboid.width = 5;
        expect(cuboid.volume).toEqual(60);
        expect(cuboid.surfaceArea).toEqual(94);

        cuboid.height = 6;
        expect(cuboid.volume).toEqual(120);
        expect(cuboid.surfaceArea).toEqual(148);

        [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
        expect(cuboid.volume).toEqual(504);
        expect(cuboid.surfaceArea).toEqual(382);
    });
});

describe(`class ${Cube.name} extends Cuboid`, () => {
    it('should initialize properly and have the same getters as the parent class', () => {
        const cube = new Cube(1);
        expect(cube.length).toEqual(1);
        expect(cube.width).toEqual(1);
        expect(cube.height).toEqual(1);
        expect(cube.volume).toEqual(1);
        expect(cube.surfaceArea).toEqual(6);

        [cube.length, cube.width, cube.height] = [2, 2, 2];
        expect(cube.volume).toEqual(8);
        expect(cube.surfaceArea).toEqual(24);

        [cube.length, cube.width, cube.height] = [3, 3, 3];
        expect(cube.volume).toEqual(27);
        expect(cube.surfaceArea).toEqual(54);

        [cube.length, cube.width, cube.height] = [5, 5, 5];
        expect(cube.volume).toEqual(125);
        expect(cube.surfaceArea).toEqual(150);

        [cube.length, cube.width, cube.height] = [10, 10, 10];
        expect(cube.volume).toEqual(1000);
        expect(cube.surfaceArea).toEqual(600);
    });
});
