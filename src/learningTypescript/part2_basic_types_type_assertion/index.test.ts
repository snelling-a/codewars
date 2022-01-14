import { getResult, ErrorServerResult, SuccessServerResult } from '.';

describe('getResult', () => {
    it('should return correct results for SuccessServerResult', () => {
        const message = { message: 'Hello, world!' };
        const success = new SuccessServerResult(200, message);
        expect(getResult(success)).toEqual(message);
    });
    it('should return correct results for ErrorServerResult', () => {
        const message = 'Not found';
        const error = new ErrorServerResult(404, message);
        expect(getResult(error as any)).toEqual(message);
    });
});
