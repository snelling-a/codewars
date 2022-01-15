import { CONTINENTS, FOOD_OPTIONS, LANGUAGE_LIST } from './constants';

export type FoodOptions = {
    // eslint-disable-next-line no-unused-vars
    [K in typeof FOOD_OPTIONS[number]]?: number;
};

export type LanguageCounts = {
    // eslint-disable-next-line no-unused-vars
    [K in typeof LANGUAGE_LIST[number]]?: number;
};

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
    meal?: typeof FOOD_OPTIONS[number];
    question?: string;
};

export type TestCaseBoolean = [Developer[], boolean];
export type TestCaseNumber = [Developer[], number];
export type TestCaseDeveloper = [Developer[], Developer[]];
