export default (state = 0, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return payload;
    case 'DECREMENT':
      return payload;
    case 'GET_CURRENT':
      return state;
    default:
      return state;
  }
};

export const incrementCurrent = (current, length) => async (dispatch) => {
  const addOneToCurrent = current === length - 1 ? 0 : current + 1;
  dispatch({
    type: 'INCREMENT',
    payload: addOneToCurrent,
  });
};

export const decrementCurrent = (current, length) => async (dispatch) => {
  const removeOneFromCurrent = current === 0 ? length - 1 : current - 1;
  dispatch({
    type: 'DECREMENT',
    payload: removeOneFromCurrent,
  });
};
export const getCurrent = () => (dispatch) => {
  dispatch({
    type: 'GET_CURRENT',
  });
};
