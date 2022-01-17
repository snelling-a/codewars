/* eslint-disable max-classes-per-file */
/*
https://www.codewars.com/kata/590cb67bc69e3a31d0000042

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
Unlike an interface, an abstract class may contain implementation details for its members.
The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

Methods within an abstract class that are marked as abstract do not contain an implementation and must be
implemented in derived classes. Abstract methods share a similar syntax to interface methods.
Both define the signature of a method without including a method body. However, abstract methods must include the
abstract keyword and may optionally include access modifiers.

abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method doesn't exist on declared abstract type


Task
There is an old funny USSR's cartoon called "38 parrots" (https://www.youtube.com/watch?v=iEHyrNX4IR8 - with English subtitles).
In this cartoon monkey and parrot measured boa... and they found out that one boa is equal to 38 parrots or 5 monkeys.

You're given an abstract class Animal and stubs for classes Animal, Boa, Parrot and Monkey:


Your task is to implement these classes. Boa, Parrot and Monkey must convert to each other correctly.
*/

export abstract class Animal {
    protected constructor(public value: number) {
        this.value = value;
    }

    convertTo(someone: Animal): number {
        return someone.value / this.value;
    }
}

export class Boa extends Animal {
    public constructor() {
        super(1);
    }
}

export class Parrot extends Animal {
    public constructor() {
        super(38);
    }
}

export class Monkey extends Animal {
    public constructor() {
        super(5);
    }
}
