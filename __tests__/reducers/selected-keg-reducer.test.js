import selectedKegReducer from '../../src/reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {
    test('Should return default state if no action type is recognized', () => {
        expect(selectedKegReducer({}, {type: null})).toEqual({});
    });
});