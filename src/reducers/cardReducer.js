import { editStorage, getStorage, setStorage } from '../utils/storage';

const cardReducer = (state = [], action) => {
	let updatedCards;
	switch (action.type) {
		case 'INIT_CARDS':
			return action.data;
		case 'ADD_CARD':
			return [...state, action.data];
		case 'EDIT_CARD':
			return action.data;
		case 'DELETE_CARD':
			updatedCards = state.filter((card) => card.id !== action.data.id);
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
			data: cardsObj.cards,
		});
	};
};

export const addCard = (card) => {
	return async (dispatch) => {
		const cardsObj = await getStorage('cards');
		setStorage({ cards: [...cardsObj.cards, card] });
		dispatch({
			type: 'ADD_CARD',
			data: card,
		});
	};
};

export const editCard = (card) => {
	return async (dispatch) => {
		let updatedCards = await editStorage(card.id, card);
		dispatch({
			type: 'EDIT_CARD',
			data: updatedCards,
		});
	};
};

export default cardReducer;
