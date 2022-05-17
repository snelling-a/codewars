import { ErrorServerResult } from './ErrorServerResult';
import { getResult } from './part2_type_assertion';
import { SuccessServerResult } from './SuccessServerResult';

describe(`${getResult.name}`, () => {
    it(`should return correct results for ${SuccessServerResult.name}`, () => {
        const message = { message: 'Hello, world!' };
        const success = new SuccessServerResult(200, message);
        expect(getResult(success)).toEqual(message);
    });

    it(`should return correct results for ${ErrorServerResult.name}`, () => {
        const message = 'Not found';
        const error = new ErrorServerResult(404, message);
        expect(getResult(error)).toEqual(message);
    });
});
