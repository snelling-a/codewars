type Operator = '+' | '-' | '*' | '$';

export class RouteCalculator {
    private readonly operatorsByPriority = ['$', '*', '-', '+'] as const;

    private readonly badInputRegex = /[^.\d+\-*$]/;

    private readonly floatRegex = /([-]?\d+\.?\d*)/;

    private readonly operatorsRegex = /[+\-*$]/g;

    private readonly operatorsInSum: Operator[];

    private readonly OPERATIONS = new Map([
        ['+', (a: string, b: string) => Number(a) + Number(b)],
        ['-', (a: string, b: string) => Number(a) - Number(b)],
        ['*', (a: string, b: string) => Number(a) * Number(b)],
        ['$', (a: string, b: string) => Number(a) / Number(b)],
    ]);

    constructor(public sum: string) {
        this.operatorsInSum = this.sortOperators(this.getOperators());
    }

    calculate() {
        if (this.isInvalidInput()) {
            return '400: Bad request';
        }

        if (!this.operatorsInSum) {
            return Number(this.sum);
        }

        this.operate();

        return Number(this.sum);
    }

    private operate() {
        this.operatorsInSum.forEach((operator) => {
            const [num1, num2] = this.getNumbersForOperation(operator);
            const operation = this.OPERATIONS.get(operator)?.(num1, num2) ?? '';
            this.sum = this.sum.replace(
                `${num1}${operator}${num2}`,
                String(operation),
            );
        });
    }

    private getNumbersForOperation(operator: Operator) {
        const { source: floatRegex } = this.floatRegex;

        const operationRegex = new RegExp(
            `${floatRegex}(\\${operator})${floatRegex}`,
        );

        const [, num1, , num2] = operationRegex.exec(this.sum) ?? [];

        return [num1, num2];
    }

    private sortOperators(operators: Operator[]) {
        return (
            operators &&
            operators.sort(
                (a, b) =>
                    this.operatorsByPriority.indexOf(a) -
                    this.operatorsByPriority.indexOf(b),
            )
        );
    }

    private getOperators() {
        return this.sum.match(this.operatorsRegex) as Operator[];
    }

    private isInvalidInput() {
        return this.badInputRegex.test(this.sum);
    }
}
