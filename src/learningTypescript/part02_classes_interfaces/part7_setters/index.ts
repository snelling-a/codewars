/*
https://www.codewars.com/kata/590b85b745eaa415e10000b1

In "Learning TypeScript. Classes & Interfaces. Getters", we learned that if we knew all the dimensions
(i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area.
The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area
of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we
could not do is define setters for surface area or volume of a cuboid because for a given volume/SA,
there were an infinite number of possibilities to the dimensions of the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are always the same,
it is possible to figure out the side length of a cube given its surface area and/or volume.
Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

Task
You're given the ICuboid interface. Define a class Cube that implements ICuboid.
Constructor function of Cube takes exactly one parameter length and stores the value of the argument into this.length.
You will then define both a getter and a setter for the surfaceArea and volume of the cube.

Articles of Interest
Below are some articles of interest that may help you complete this Kata:

Setters - Mozilla Developer (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
What are getters and setters? - Stack Overflow (http://stackoverflow.com/questions/28222276/what-are-getters-and-setters-for-in-ecmascript-6-classes)
ES6 Classes Intro (includes section on getters and setters) (http://exploringjs.com/es6/ch_classes.html)
*/

export interface ICuboid {
    /** Length of the cube */
    length: number;
    /** Surface area of the cube */
    surfaceArea: number;
    /** Volume of the cube */
    volume: number;
}

export class Cube implements ICuboid {
    constructor(public length: number) {
        this.length = length;
    }

    get volume(): number {
        return this.length ** 3;
    }

    set volume(value: number) {
        this.length = Math.cbrt(value);
    }

    get surfaceArea(): number {
        return 6 * this.length ** 2;
    }

    set surfaceArea(value: number) {
        this.length = Math.sqrt(value / 6);
    }
}
