const initialState = {
  ADD: false,
  EDIT: false,
  DELETE: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CARD_MODAL':
      return { ...state, ADD: payload };
    case 'EDIT_CARD_MODAL':
      return { ...state, EDIT: payload };
    case 'DELETE_CARD_MODAL':
      return { ...state, DELETE: payload };
    default:
      return state;
  }
};
