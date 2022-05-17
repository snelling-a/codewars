/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Serializable } from './Serializable';

export class Person implements Serializable {
    constructor(public firstName?: string, public lastName?: string) {}

    // @ts-ignore strictPropertyInitialization
    serialize: () => string;

    // @ts-ignore strictPropertyInitialization
    deserialize: (source: string) => void;
}
