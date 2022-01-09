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
