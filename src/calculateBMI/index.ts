/*
https://www.codewars.com/kata/57a429e253ba3381850000fb/

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

export function bodyMassIndex(weight: number, height: number): string {
    const underweight = 18.5;
    const normal = 25;
    const overweight = 30;

    const bmi = weight / (height * height);

    switch (true) {
        case bmi <= underweight:
            return 'Underweight';
        case bmi <= normal:
            return 'Normal';
        case bmi <= overweight:
            return 'Overweight';
        default:
            return 'Obese';
    }
}
