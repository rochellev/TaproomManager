import kegListReducer from './../src/reducers/keg-list-reducer';

describe('kegListReducer', ()=>{

  let action;
  const sampleKegData = {
    name: 'Coors Light',
    brand: 'Company Brewer',
    price: '3.00',
    alcoholContent: '3.6',
    pintsRemaining: '300',
    id: 0
  }
  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });


});