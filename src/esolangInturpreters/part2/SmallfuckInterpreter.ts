type MoveLeftOrRight = '>' | '<';
type Brackets = '[' | ']';
type Command = MoveLeftOrRight | '*' | Brackets;
type Bit = 0 | 1;

export class SmallfuckInterpreter {
    code: Command[];

    tape: Bit[];

    private pointer = 0;

    private codeIndex = 0;

    private COMMANDS = new Map([
        ['>', () => this.moveRight()],
        ['<', () => this.moveLeft()],
        ['*', () => this.flipBit()],
        ['[', () => this.findClosingBracket()],
        [']', () => this.findOpeningBracket()],
    ]);

    constructor(code: string, tape: string) {
        // code may contain non-command characters. Your interpreter should simply ignore any non-command characters.
        this.code = this.validateCode(code.split(''));
        // You may assume that all input strings for tape will be non-empty and will only contain "0"s and "1"s.
        this.tape = tape.split('').map(Number) as Bit[];
    }

    interpret() {
        while (this.isCodeIndexValid() && this.isPointerValid()) {
            this.COMMANDS.get(this.code[this.codeIndex])?.();
            this.codeIndex += 1;
        }

        return this.tape.join('');
    }

    // > - Move pointer to the right (by 1 cell)
    private moveRight() {
        this.pointer += 1;
    }

    // < - Move pointer to the left (by 1 cell)
    private moveLeft() {
        this.pointer -= 1;
    }

    // * - Flip the bit at the current cell
    private flipBit() {
        this.tape[this.pointer] = this.tape[this.pointer] === 0 ? 1 : 0;
    }

    // [ - Jump past matching ] if value at current cell is 0
    private findClosingBracket() {
        if (this.tape[this.pointer] === 0) {
            const closingBracketIndex = this.code.indexOf(']', this.codeIndex);
            this.codeIndex = closingBracketIndex + 1;
        }
    }

    // ] - Jump back to matching [ (if value at current cell is nonzero)
    private findOpeningBracket() {
        if (this.tape[this.pointer] === 1) {
            const openingBracketIndex = this.code.lastIndexOf(
                '[',
                this.codeIndex,
            );
            this.codeIndex = openingBracketIndex;
        }
    }

    private validateCode(code: string[]) {
        return code.filter((command) =>
            this.COMMANDS.has(command),
        ) as Command[];
    }

    private isCodeIndexValid() {
        return this.codeIndex >= 0 && this.codeIndex < this.code.length;
    }

    private isPointerValid() {
        return this.pointer >= 0 && this.pointer < this.tape.length;
    }
}
