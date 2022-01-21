export class SuccessServerResult {
    constructor(
        public httpCode: number,
        public resultObject: Record<string, unknown>, // originally Object, @typescript-eslint/ban-types
    ) {}
}
