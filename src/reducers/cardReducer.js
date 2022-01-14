import {
	deleteStorageItem,
	editStorage,
	getStorage,
	setStorage,
} from '../utils/storage';

const cardReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'INIT_CARDS':
			return payload;
		case 'ADD_CARD':
			return [...state, payload];
		case 'EDIT_CARD':
			return payload;
		case 'DELETE_CARD':
			return payload;
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
		const cardsAfterAddition = [...cardsObj.cards, card];
		await setStorage({ cards: cardsAfterAddition });
		dispatch({
			type: 'ADD_CARD',
			payload: card,
		});
	};
};

export const editCard = (card) => {
	return async (dispatch) => {
		let cardsAfterEditing = await editStorage(card.id, card);
		dispatch({
			type: 'EDIT_CARD',
			payload: cardsAfterEditing,
		});
	};
};

export const deleteCard = (id) => {
	return async (dispatch) => {
		let cardsAfterDeletion = await deleteStorageItem(id);
		dispatch({
			type: 'DELETE_CARD',
			payload: cardsAfterDeletion,
		});
	};
};

export default cardReducer;
