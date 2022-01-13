import { editStorage, getStorage, setStorage } from '../utils/storage';

const cardReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'INIT_CARDS':
			return payload;
		case 'ADD_CARD':
			return [...state, payload];
		case 'EDIT_CARD':
			return payload;
		case 'DELETE_CARD':
			updatedCards = state.filter((card) => card.id !== payload.id);
			setStorage({ cards: updatedCards });
			return updatedCards;
		default:
			return state;
	}
};

export const initializeCards = () => {
	return async (dispatch) => {
		const cardsObj = await getStorage('cards');
		dispatch({
			type: 'INIT_CARDS',
			payload: cardsObj.cards,
		});
	};
};

export const addCard = (card) => {
	return async (dispatch) => {
		const cardsObj = await getStorage('cards');
		setStorage({ cards: [...cardsObj.cards, card] });
		dispatch({
			type: 'ADD_CARD',
			payload: card,
		});
	};
};

export const editCard = (card) => {
	return async (dispatch) => {
		let updatedCards = await editStorage(card.id, card);
		dispatch({
			type: 'EDIT_CARD',
			payload: updatedCards,
		});
	};
};

export default cardReducer;
