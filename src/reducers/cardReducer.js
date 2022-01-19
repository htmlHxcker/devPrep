import {
  deleteStorageItem,
  editStorage,
  getStorage,
  setStorage,
} from '../utils/storage';

const cardReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT_CARDS':
      return payload || state;
    case 'ADD_CARD':
      return state.length < 1 ? [payload] : [...state, payload];
    case 'EDIT_CARD':
      return payload;
    case 'DELETE_CARD':
      return payload;
    default:
      return state;
  }
};

export const initializeCards = () => async (dispatch) => {
  const cardsObj = await getStorage('cards');
  dispatch({
    type: 'INIT_CARDS',
    payload: !cardsObj.cards ? [] : cardsObj.cards,
  });
};

export const addCard = (card) => async (dispatch) => {
  const cardsObj = await getStorage('cards');
  const cardsAfterAddition = !cardsObj.cards
    ? [card]
    : [...cardsObj.cards, card];
  setStorage({ cards: cardsAfterAddition });
  dispatch({
    type: 'ADD_CARD',
    payload: card,
  });
};

export const editCard = (card) => async (dispatch) => {
  const cardsAfterEditing = await editStorage(card.id, card);
  dispatch({
    type: 'EDIT_CARD',
    payload: cardsAfterEditing,
  });
};

export const deleteCard = (id) => async (dispatch) => {
  const cardsAfterDeletion = await deleteStorageItem(id);
  dispatch({
    type: 'DELETE_CARD',
    payload: cardsAfterDeletion,
  });
};

export default cardReducer;
