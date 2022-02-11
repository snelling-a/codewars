export class SmallfuckInterpreter {
    private pointer = 0;

    private codeIndex = 0;

    private COMMANDS = new Map([
        ['<', () => this.moveLeft()],
        ['>', () => this.moveRight()],
        ['*', () => this.flipBit()],
        ['[', () => this.findClosingBracket()],
        [']', () => this.findOpeningBracket()],
    ]);

    constructor(private code: string, private tape: string) {}

    interpret() {
        while (this.isCodeIndexValid() && this.isPointerValid()) {
            this.COMMANDS.get(this.code[this.codeIndex])?.();
            this.codeIndex += 1;
        }

        return this.tape;
    }

    private getCurrentBit() {
        return this.tape[this.pointer];
    }

    private moveRight() {
        this.pointer += 1;
    }

    private moveLeft() {
        this.pointer -= 1;
    }

    private flipBit() {
        const tapeArray = this.tape.split('');

        tapeArray[this.pointer] = tapeArray[this.pointer] === '0' ? '1' : '0';

        this.tape = tapeArray.join('');
    }

    private findClosingBracket() {
        if (this.getCurrentBit() === '0') {
            const closingBracketIndex = this.code.indexOf(']', this.codeIndex);
            this.codeIndex = closingBracketIndex + 1;
        }
    }

    private findOpeningBracket() {
        if (this.getCurrentBit() === '1') {
            const openingBracketIndex = this.code.lastIndexOf(
                '[',
                this.codeIndex,
            );
            this.codeIndex = openingBracketIndex;
        }
    }

    private isCodeIndexValid() {
        return this.codeIndex >= 0 && this.codeIndex < this.code.length;
    }

    private isPointerValid() {
        return this.pointer >= 0 && this.pointer < this.tape.length;
    }
}
