import { CONTINENTS, LANGUAGE_LIST } from './constants';

export type Developer = {
    firstName: string;
    lastName: string;
    country: string;
    continent: typeof CONTINENTS[number];
    age: number;
    language: typeof LANGUAGE_LIST[number];
    githubAdmin?: 'yes' | 'no';
    meal?:
        | 'diabetic'
        | 'gluten-intolerant'
        | 'standard'
        | 'vegan'
        | 'vegetarian';
};

export type FoodOptions = {
    diabetic?: number;
    'gluten-intolerant'?: number;
    standard?: number;
    vegan?: number;
    vegetarian?: number;
};

export type LanguageCounts = {
    Clojure?: number;
    C?: number;
    CSS?: number;
    'C#'?: number;
    'C++'?: number;
    CoffeeScript?: number;
    Crystal?: number;
    Dart?: number;
    Elm?: number;
    HTML?: number;
    Java?: number;
    JavaScript?: number;
    PHP?: number;
    Python?: number;
    Ruby?: number;
    SQL?: number;
    Swift?: number;
    TypeScript?: number;
};

export type TestCaseBoolean = [Developer[], boolean];
