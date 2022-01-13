import { CONTINENTS, LANGUAGE_LIST } from './constants';

export type Developer = {
    firstName: string | null;
    lastName: string | null;
    country: string | null;
    continent: typeof CONTINENTS[number] | null;
    age: number | null;
    language: typeof LANGUAGE_LIST[number] | null;
    githubAdmin?: 'yes' | 'no';
    greeting?: string;
    username?: string;
    meal?:
        | 'diabetic'
        | 'gluten-intolerant'
        | 'standard'
        | 'vegan'
        | 'vegetarian';
    question?: string;
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
