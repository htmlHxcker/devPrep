import { getStorage, setStorage } from '../utils/storage';

const cardReducer = (state = [], action) => {
	let updatedCards;
	switch (action.type) {
		case 'INIT_CARDS':
			return action.data;
		case 'ADD_CARD':
			return [...state, action.data];
		case 'EDIT_CARD':
			updatedCards = state.map((card) =>
				card.id !== action.data.id ? card : action.data
			);
			setStorage({ cards: updatedCards });
			return updatedCards;
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

export default cardReducer;
