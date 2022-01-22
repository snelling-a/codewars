/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Serializable } from '.';

export class Robot implements Serializable {
    id: string;

    constructor(public name?: string) {
        this.id = Math.random().toString(36).substring(7);
    }

    // @ts-ignore strictPropertyInitialization
    serialize: () => string;

    // @ts-ignore strictPropertyInitialization
    deserialize: (source: string) => void;
}
