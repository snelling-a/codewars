/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the
development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
*/

export class DeoxyribonucleicAcid {
    /**
     * @static
     * @param {string} dna DNA string consisting of letters:
     * @returns {*}  Complimentary DNA string to input
     * @memberof DeoxyribonucleicAcid
     */
    static getComplimentaryDnaStrand(dna: string): string {
        return dna
            .split('')
            .map((c) => {
                switch (c) {
                    case 'A':
                        return 'T';
                    case 'T':
                        return 'A';
                    case 'G':
                        return 'C';
                    case 'C':
                        return 'G';
                    default:
                        return '';
                }
            })
            .join('');
    }
}
