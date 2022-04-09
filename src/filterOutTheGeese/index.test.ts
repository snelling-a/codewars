import { GEESE, gooseFilter } from '.';

describe('Basic tests', () => {
    it('Mixed list', () =>
        expect(
            gooseFilter([
                'Mallard',
                'Hook Bill',
                'African',
                'Crested',
                'Pilgrim',
                'Toulouse',
                'Blue Swedish',
            ]),
        ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']));

    it('No geese', () => {
        const birds = [
            'Mallard',
            'Barbary',
            'Hook Bill',
            'Blue Swedish',
            'Crested',
        ];

        expect(gooseFilter(birds)).toEqual(birds);
    });

    it('All geese', () => expect(gooseFilter(GEESE)).toEqual([]));
});
