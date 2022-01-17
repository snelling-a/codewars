/* eslint-disable max-classes-per-file */
/*
https://www.codewars.com/kata/599d636e607719edf600010a

Define the following classes:

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order:
length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a
getter volume which returns the volume of the cuboid.

II. Cube
Class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only,
its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Articles of Interest
Below are some articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6? (http://stackoverflow.com/questions/28222276/what-are-getters-and-setters-for-in-ecmascript-6-classes)
getter - Javascript | MDN (https://developer.mozil*la.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
*/

export class Cuboid {
    constructor(
        public length: number,
        public width: number,
        public height: number,
    ) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    public get surfaceArea() {
        return (
            2 * this.length * this.width +
            2 * this.length * this.height +
            2 * this.height * this.width
        );
    }

    public get volume() {
        return this.length * this.width * this.height;
    }
}

export class Cube extends Cuboid {
    constructor(length: number) {
        super(length, length, length);
    }
}
