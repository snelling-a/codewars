export type Developer = {
    firstName: string;
    lastName: string;
    country: string;
    continent: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
    age: number;
    language:
        | 'Clojure'
        | 'C'
        | 'CSS'
        | 'HTML'
        | 'Java'
        | 'JavaScript'
        | 'PHP'
        | 'Python'
        | 'Ruby';
};

export type LanguageCounts = {
    Clojure?: number;
    C?: number;
    CSS?: number;
    HTML?: number;
    Java?: number;
    JavaScript?: number;
    PHP?: number;
    Python?: number;
    Ruby?: number;
};
