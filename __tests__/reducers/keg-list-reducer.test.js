import kegListReducer from '../../src/reducers/keg-list-reducer';

describe('kegListReducer', ()=>{

  let action;
  const sampleKegData = {
    name: 'Coors Light',
    brand: 'Company Brewer',
    price: '3.00',
    alcoholContent: '3.6',
    pintsRemaining: '300',
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const {name, brand, price, alcoholContent, pintsRemaining, id} = sampleKegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining,
        id: id
      }
    });
  });

});