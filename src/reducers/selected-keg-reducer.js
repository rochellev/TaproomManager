export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_KEG':
      return action.kegId;
    default:
      return state;
  }
};