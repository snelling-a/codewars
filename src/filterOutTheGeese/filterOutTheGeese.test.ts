import { GEESE, gooseFilter } from './filterOutTheGeese';

describe(gooseFilter.name, () => {
    it('Mixed list', () =>
        expect(
            gooseFilter([
                'Hook Bill',
                'Mallard',
                'African',
                'Crested',
                'Pilgrim',
                'Toulouse',
                'Blue Swedish',
            ]),
        ).toEqual(
            expect.arrayContaining([
                'Mallard',
                'Hook Bill',
                'Crested',
                'Blue Swedish',
            ]),
        ));

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
