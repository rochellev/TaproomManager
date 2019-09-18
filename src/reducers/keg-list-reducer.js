export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KEG':
      const { name, brand, price, alcoholContent, pintsRemaining, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pintsRemaining: pintsRemaining,
          id: id
        }
      });
      return newState;
    default:
      return state;
  }
};